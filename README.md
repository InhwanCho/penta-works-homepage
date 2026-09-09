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
sudo bash /home/inhwan/apps/penta-works-homepage/deploy/setup-origin.sh
```

Cloudflare에서는 `pentaworks.net`과 `www.pentaworks.net`을 동일한 원본으로 프록시하고 SSL/TLS 모드를 `Full (strict)`로 유지합니다.
