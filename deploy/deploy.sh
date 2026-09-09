#!/usr/bin/env bash
set -Eeuo pipefail

REPOSITORY_URL=https://github.com/InhwanCho/penta-works-homepage.git
case "${1:-prod}" in
    dev)
        APP_DIR=/home/inhwan/apps/penta-works-homepage-dev
        BRANCH=dev
        COMPOSE_PROJECT=penta-works-homepage-dev
        export HOMEPAGE_PORT=3201 HOMEPAGE_BIND=192.168.0.210
        ;;
    prod)
        APP_DIR=/home/inhwan/apps/penta-works-homepage
        BRANCH=main
        COMPOSE_PROJECT=penta-works-homepage
        export HOMEPAGE_PORT=3200 HOMEPAGE_BIND=127.0.0.1
        ;;
    *) echo 'Usage: deploy.sh <dev|prod>' >&2; exit 2 ;;
esac

if [[ ! -d "$APP_DIR/.git" ]]; then
    mkdir -p "$(dirname "$APP_DIR")"
    git clone --branch "$BRANCH" --single-branch "$REPOSITORY_URL" "$APP_DIR"
else
    git -C "$APP_DIR" fetch origin "$BRANCH"
    git -C "$APP_DIR" checkout "$BRANCH"
    git -C "$APP_DIR" merge --ff-only "origin/$BRANCH"
fi

cd "$APP_DIR"
compose=(docker compose --project-name "$COMPOSE_PROJECT" -f docker-compose.yml)

"${compose[@]}" build homepage
"${compose[@]}" up -d --remove-orphans

for attempt_no in $(seq 1 30); do
    if curl --fail --silent "http://${HOMEPAGE_BIND}:${HOMEPAGE_PORT}/api/health" >/dev/null; then
        "${compose[@]}" ps
        exit 0
    fi
    sleep 2
done

"${compose[@]}" ps
"${compose[@]}" logs --tail=100 homepage
exit 1
