#!/usr/bin/env bash
set -Eeuo pipefail

REPOSITORY_URL=https://github.com/InhwanCho/penta-works-homepage.git
APP_DIR=/home/inhwan/apps/penta-works-homepage
BRANCH=main
COMPOSE_PROJECT=penta-works-homepage

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
    if curl --fail --silent http://127.0.0.1:3200/api/health >/dev/null; then
        "${compose[@]}" ps
        exit 0
    fi
    sleep 2
done

"${compose[@]}" ps
"${compose[@]}" logs --tail=100 homepage
exit 1

