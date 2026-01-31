python3 - <<'PY'
from __future__ import annotations

import subprocess
from datetime import datetime
from pathlib import Path

date = datetime.now()
display = date.strftime("%B %Y")
raw = date.strftime("%Y-%m")
Path("_data/last_update.yml").write_text(f"raw: {raw}\ndisplay: {display}\n")
PY

HOME="$PWD/.home" GEM_HOME="$PWD/vendor/bundler" GEM_PATH="$PWD/vendor/bundler" \
  "$PWD/vendor/bundler/bin/bundle" _2.2.19_ exec jekyll build
