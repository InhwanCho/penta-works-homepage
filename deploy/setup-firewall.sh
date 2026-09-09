#!/usr/bin/env bash
set -Eeuo pipefail

if [[ $EUID -ne 0 ]]; then
    echo "Run this script with sudo." >&2
    exit 1
fi

if ! command -v ufw >/dev/null 2>&1; then
    echo "UFW is not installed." >&2
    exit 1
fi

# SSH is allowed before the default policy is changed so a remote session is
# not locked out. Existing explicit rules for internal services are preserved.
ufw allow OpenSSH
ufw allow "Nginx Full"
ufw default deny incoming
ufw default allow outgoing
ufw --force enable
ufw status verbose

