find .. -type f -not -path '../hugo/*' -not -path '../.git/*' -not -name 'CNAME' -not -name 'LICENSE' -not -name '.editorconfig' -not -name '.git*' | xargs rm -rf
