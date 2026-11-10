#!/bin/bash
# Stop hook: Claude cannot finish while tests fail.
OUTPUT=$(npm test 2>&1)
if [ $? -ne 0 ]; then
  echo "Tests failed. Fix them before finishing:" >&2
  echo "$OUTPUT" | tail -30 >&2
  exit 2   # exit 2 sends this message back to Claude
fi
exit 0
