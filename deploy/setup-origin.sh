#!/usr/bin/env bash
set -Eeuo pipefail

APP_DIR=/home/inhwan/apps/penta-works-homepage
NGINX_SOURCE=$APP_DIR/deploy/nginx/pentaworks.net.conf
NGINX_AVAILABLE=/etc/nginx/sites-available/pentaworks.net
NGINX_ENABLED=/etc/nginx/sites-enabled/pentaworks.net

if [[ $EUID -ne 0 ]]; then
    echo "Run this script with sudo." >&2
    exit 1
fi

if ! curl --fail --silent http://127.0.0.1:3200/api/health >/dev/null; then
    echo "Homepage is not healthy on 127.0.0.1:3200." >&2
    exit 1
fi

if [[ ! -f /etc/letsencrypt/live/pentaworks.net/fullchain.pem ]]; then
    echo "Missing TLS certificate for pentaworks.net." >&2
    exit 1
fi

install -m 644 "$NGINX_SOURCE" "$NGINX_AVAILABLE"
ln -sfn "$NGINX_AVAILABLE" "$NGINX_ENABLED"
nginx -t
systemctl reload nginx

curl --fail --silent --show-error \
    --resolve pentaworks.net:443:127.0.0.1 \
    https://pentaworks.net/api/health >/dev/null

echo "Origin is ready at https://pentaworks.net"

