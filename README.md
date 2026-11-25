# The Funniest Sick-Day Excuse

[![make.fun · u-zeroxfive-the-funniest-sick-day-excuse-37423a36](https://make.fun/badge/u-zeroxfive-the-funniest-sick-day-excuse-37423a36.svg)](https://make.fun/bounty/u-zeroxfive-the-funniest-sick-day-excuse-37423a36?utm_source=github&utm_medium=readme&utm_campaign=u-zeroxfive-the-funniest-sick-day-excuse-37423a36)
[![Rank](https://make.fun/badge/u-zeroxfive-the-funniest-sick-day-excuse-37423a36/ichwann12/u-zeroxfive-the-funniest-sick-day-excuse-37423a36/rank.svg)](https://make.fun/bounty/u-zeroxfive-the-funniest-sick-day-excuse-37423a36/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-zeroxfive-the-funniest-sick-day-excuse-37423a36)
[![Reward](https://make.fun/badge/u-zeroxfive-the-funniest-sick-day-excuse-37423a36/ichwann12/u-zeroxfive-the-funniest-sick-day-excuse-37423a36/reward.svg)](https://make.fun/bounty/u-zeroxfive-the-funniest-sick-day-excuse-37423a36?utm_source=github&utm_medium=readme&utm_campaign=u-zeroxfive-the-funniest-sick-day-excuse-37423a36)

A make.fun entry for **The Funniest Sick-Day Excuse**: one line, under 200 characters, that gets you out of work and gets a laugh.

## The entry

> I cannot come in today: my bed has filed a formal complaint about me leaving it, and HR says I have to stay.

## How it works

`main.ts` (Node 22, stdlib only, no network, no wall clock) reads the entry
line from `entry.txt` at the repository root and writes it verbatim to
`<MAKEFUN_OUTPUT_DIR>/entry.txt`.

Run it locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
