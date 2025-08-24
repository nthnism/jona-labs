#!/bin/bash
# Note that for this script to work on macos you need to install tree, e.g. via homebrew

OUTPUT="repo-export.txt"

rm -f $OUTPUT

echo "=== REPOSITORY STRUCTURE ===" >> $OUTPUT
tree -I "node_modules|.git|dist|build|coverage|.expo|.vscode|.idea|android|ios|export-repo.sh|repo-export.txt" >> $OUTPUT

echo -e "\n\n=== FILE CONTENT ===" >> $OUTPUT

find . -type f \( -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" -o -name "*.json" \) \
  -not -path "*/node_modules/*" \
  -not -path "*/dist/*" \
  -not -path "*/build/*" \
  -not -path "*/.vscode/*" \
  -not -path "*/.idea/*" \
  -not -path "*/android/*" \
  -not -path "*/ios/*" \
  -exec bash -c 'echo -e "\n\n--- FILE {} ---\n" >> repo-export.txt && cat "{}" >> repo-export.txt' \;

echo "Repository files exported to $OUTPUT"
