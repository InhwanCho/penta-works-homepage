# PENTA WORKS Homepage

`pentaworks.net`에 배포되는 PENTA WORKS 회사 홈페이지입니다. Next.js App Router 기반이며, 운영 앱은 `app.pentaworks.net`에서 별도로 제공됩니다.

## Local development

```bash
corepack enable
pnpm install
pnpm dev
```

## Checks

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Deployment

- Container: `127.0.0.1:3200`에만 바인딩
- Public origin: Nginx가 `pentaworks.net`의 HTTPS 요청을 `3200`으로 프록시
- Health check: `/api/health`
- CI: GitHub `main` push → Jenkins → `deploy/deploy.sh`

첫 배포 후 서버에서 Nginx 원본 설정을 한 번 적용합니다.

```bash
sudo bash /home/inhwan/apps/penta-works-homepage/deploy/setup-firewall.sh
sudo bash /home/inhwan/apps/penta-works-homepage/deploy/setup-origin.sh
```

`setup-firewall.sh`는 기존 UFW 허용 규칙을 지우지 않고 SSH와 Nginx(80/443)를 보장한 뒤 기본 수신 정책을 차단으로 설정합니다. 홈페이지 컨테이너 포트 `3200`은 loopback에만 바인딩되어 외부에 노출되지 않습니다.

Cloudflare에서는 `pentaworks.net` A 레코드와 `www.pentaworks.net` CNAME을 프록시하고, SSL/TLS 모드를 `Full (strict)`, 최소 TLS를 1.2 이상, `Always Use HTTPS`를 활성 상태로 유지합니다. 원본 설정 스크립트는 기존 Cloudflare DNS 인증으로 `pentaworks.net`과 `www.pentaworks.net` 인증서를 함께 갱신합니다.
