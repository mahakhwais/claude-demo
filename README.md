# claude-demo

A tiny project that puts the course ideas in one place.

| Path | What it shows |
|---|---|
| `price.js`, `price.test.js` | Small code + tests for Claude to work on |
| `.claude/settings.json`, `.claude/hooks/run-tests.sh` | Stop hook: Claude can't finish while tests fail (`exit 2`) |
| `.github/workflows/claude.yaml` | Claude Code Action: reacts to `@claude` in PR/issue comments |
| `.github/workflows/daily-report.yaml` | Scheduled, read-only run (`--max-turns`, `--allowedTools`) |
| `plugin/` | The same hook packaged as a plugin (`plugin.json` + `hooks/hooks.json`) |

## Try it

1. `npm test` — the tests should pass.
2. Run `claude` in this folder and ask: "Add a function to price.js that adds VAT." The Stop hook runs the tests before Claude can finish.
3. Break a test on purpose and watch Claude get the failure back and fix it.

## Put it on GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USER/claude-demo.git
git push -u origin main
```

Then in the repo: **Settings > Secrets and variables > Actions > New secret**, name `ANTHROPIC_API_KEY`.
Also install the Claude GitHub app (`/install-github-app` inside Claude Code does both steps).
Then comment `@claude explain price.js` on any issue.

## Check the output of unattended runs

Read `git diff` yourself, keep the tests as a hook, and get a second review in a fresh session.

## Use the plugin

Test it locally: `claude --plugin-dir ./plugin`
If you use the plugin, remove the hook from `.claude/settings.json` so the tests don't run twice (hooks stack).
