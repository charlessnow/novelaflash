#!/bin/bash
# Submit all reelpulse.net URLs to IndexNow (Bing, Yandex, etc.)
# Run after deployment: bash scripts/submit-indexnow.sh

KEY="654015763838ccde9d8b0c927660ec47"
HOST="reelpulse.net"

curl -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json" \
  -d "{
    \"host\": \"${HOST}\",
    \"key\": \"${KEY}\",
    \"keyLocation\": \"https://${HOST}/${KEY}.txt\",
    \"urlList\": [
      \"https://${HOST}\",
      \"https://${HOST}/platforms\",
      \"https://${HOST}/rankings\",
      \"https://${HOST}/rankings/top-100\",
      \"https://${HOST}/rankings/revenue\",
      \"https://${HOST}/rankings/studios\",
      \"https://${HOST}/rankings/growth\",
      \"https://${HOST}/industry\",
      \"https://${HOST}/industry/market-reports\",
      \"https://${HOST}/industry/tech-ai\",
      \"https://${HOST}/industry/global-markets\",
      \"https://${HOST}/industry/creator-economy\",
      \"https://${HOST}/guides\",
      \"https://${HOST}/guides/cancel-reelshort\",
      \"https://${HOST}/guides/reelshort-pricing\",
      \"https://${HOST}/guides/reelshort-coins\",
      \"https://${HOST}/guides/cancel-dramabox\",
      \"https://${HOST}/guides/dramabox-pricing\",
      \"https://${HOST}/guides/dramabox-coins\",
      \"https://${HOST}/guides/best-reelshort-shows\",
      \"https://${HOST}/guides/best-dramabox-shows\",
      \"https://${HOST}/guides/best-chinese-short-dramas\",
      \"https://${HOST}/guides/short-korean-dramas\",
      \"https://${HOST}/guides/chinese-short-drama-actors\",
      \"https://${HOST}/guides/free-short-drama-apps\",
      \"https://${HOST}/guides/best-bl-short-drama-apps\",
      \"https://${HOST}/guides/dramabox-alternatives\",
      \"https://${HOST}/guides/watch-short-dramas-free\",
      \"https://${HOST}/guides/watch-bl-short-dramas-free\",
      \"https://${HOST}/guides/is-dramabox-safe\",
      \"https://${HOST}/guides/is-reelshort-safe\",
      \"https://${HOST}/guides/is-shortmax-safe\",
      \"https://${HOST}/guides/short-drama-market-revenue-2026\",
      \"https://${HOST}/guides/best-werewolf-short-dramas\",
      \"https://${HOST}/guides/shortmax-pricing\",
      \"https://${HOST}/articles\",
      \"https://${HOST}/about\",
      \"https://${HOST}/newsletter\",
      \"https://${HOST}/contact\"
    ]
  }"

echo ""
echo "Done. Check response: 200=OK, 202=Accepted"
