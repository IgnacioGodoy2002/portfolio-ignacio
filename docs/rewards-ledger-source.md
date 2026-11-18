Case study — Platform engineering

# The Rewards Ledger

Five mobile minigames, one loyalty-points contract. Wiring, debugging, and **calibrating** the system that decides whether a run gets paid — across a physics shooter, a bubble-match game, a beach runner, a merge game, and a lane-dodger that had never spoken to the platform at all.

5

Games instrumented

3

Repos touched

2

Reward legs / game

1

False positive, found & fixed

## The contract every game signs

shared architecture — sura-api ↔ game client

Every mini-game on the platform talks to the host over `postMessage`, and gets paid through the same two-leg structure in Snag, the loyalty-points provider behind SURA's SP economy. Understanding this one contract is what made five very different games tractable.

INIT_GAME

Host hands the game its session, token, player nickname, **account language**, and real **best score** — nothing is baked in at build time, so one build runs on localhost, staging, prod, and the native WebView alike.

GAME_COMPLETE

Game reports back a score and the **real elapsed duration**. The server takes the lower of its own clock and this one — honesty here can only tighten the ceiling below, never loosen it.

daily leg

Pays a fixed SP amount once per day, past a score floor — read live from the Snag rule, not duplicated locally, so a dashboard edit can't silently drift out of sync with what the ledger pays.

score leg

Pays per *tier* cleared above the player's own personal best — never for replaying a score already beaten, so grinding a weak run twice earns nothing twice.

score_rate_curve

The anti-cheat ceiling: a points-per-second curve the reported score is judged against. No curve configured is a deliberate choice now, not an error state — see Joystick Pop, below.

## Five games, five different problems

chronological — each entry is a distinct engineering call, not a template applied five times

Endless shooter

Pengu Rush

Already live

### The baseline that was already right

The one game already fully wired — daily + per-tier SP, and a `score_rate_curve` calibrated straight from the game's own physics sim (meteor spawn rate, weapon cooldown, difficulty bands), proven to dominate that simulation at every duration from 1s to 1h. It became the template the other four were measured against.

### What still needed fixing

Account language was only ever guessed from the device's browser setting, so a phone set to Spanish showed Spanish regardless of the player's real account language — fixed by threading the account's actual language through `INIT_GAME`, while never overriding a language the player picked by hand in-game. Also fixed: a stale personal-best display, a dead-click bug on the PLAY button after a completed run, and a "VOLVER A SURA" button that duplicated the menu's own exit.

Build weight**19.3 → 11.4 MB** Unused assets removed**8 files**

Match-3 bubble shooter

Joystick Pop

PR open

### A real player, a real false positive

A run scored 1,323 points. The menu still showed an old record of 46, and no SP landed. Root cause: the anti-cheat curve was calibrated from just three real play sessions, topping out at 403 points — a legitimate run 3.3× past that sample got flagged `suspicious`, which silently does two things at once: refuse payment *and* skip the leaderboard write.

Architectural callA curve with no safety margin will eventually reject someone real. Rather than widen one ad hoc margin, `MiniGameRewardService` changed so a game with *no* curve pays exactly like a validated one — trusting the client is now a documented, deliberate state, not a silent gap.

### Reconciling two histories

The live build had moved on without git — a character-select feature built outside version control. Split the catch-up into its own commit before adding the actual ask (descent speed that ramps up to 2.5× when the board is clear, settling back to baseline as danger approaches), so the feature review isn't buried in an unrelated diff.

Sample size that broke it**3 runs** Headroom needed**6m07s** Tests still green**24 / 24**

Lane-dodge runner

Safari Crossing

PR open

### A curve derived, not guessed

First ground-up Snag setup. Rather than ask for sample runs, the ceiling came straight from the client's own constants: a fixed 200ms hop per lane, plus coin bonuses that only spawn on `forest`-type lanes — 2 of every 8 in a fixed, repeating cycle. That arithmetic alone sets a hard, provable rate: 7.5 points/second, flat, no difficulty ramp to complicate it.

### Verify before trusting a third party

Before the migration was written, a wire probe read both Snag rules live and confirmed the payout each one actually carries matches what the backend would read at settlement time — the one check standing between "looks configured" and quietly paying the wrong amount on every completion.

Ceiling rate**7.5 pts/s** Safety margin**15%** Forest-lane frequency**2 / 8**

Merge / stacking puzzle

Coin Kingdom

PR open

### Knowing when a curve doesn't belong

Twelve coin tiers merge upward — Chispa through Supernova — each merge paying by the tier it lands on, with a 3-way Supernova cluster detonating for a flat bonus. That payoff depends on how deep a merge chain a session reaches, not on time elapsed: no clean points-per-second curve exists to fit, unlike the runners above.

### The Joystick Pop lesson, applied forward

Rather than force-fit a curve with even less real data than the one that just misfired, the call was made before launch: no ceiling, from day one. The daily and per-tier legs still pay in full — the trade-off is named in the migration itself, not discovered later by a confused player.

Merge tiers**12** Daily threshold**800 pts** Per-tier span**600 pts**

3D beach runner

Playa Run

PR open

### Starting from nothing

No `postMessage`, no handshake, no idea the platform existed — this one ran fully standalone. Built the entire integration layer from scratch in plain ES modules (no bundler, matching the project's own zero-build convention): ready signal, session handshake, best-score reconciliation, pause/resume, and a completion report carrying the real elapsed time.

### Proof, not a claim

Verified end to end with a headless browser standing in for the real host: posted a synthetic `INIT_GAME`, watched the handshake complete, let the runner collide with a real obstacle rather than scripting a fake death, and read the exact `GAME_COMPLETE` payload that came back out the other side.

### Then the feature, then the feel

Added a leaderboard — top-3 inline, full ranking on request — against the same public endpoint the other games use. Then two rounds of feedback: the speed curve reached its ceiling almost immediately, so the ramp-up distance nearly doubled and the base speed came down; the ranking button went from an underlined text link to an actual button with weight and a hover state.

Prior integration**none** Verified completion**real collision** Speed ramp distance**580 → 980m**

## What the ledger actually tested

Five games never called for the same fix twice. The through-line is judgment about a shared, high-stakes system — real money-equivalent points — under five different kinds of uncertainty.

### →Read the source, don't sample it

Safari Crossing's ceiling came from the hop-timer and lane-cycle constants in the client itself — an exact rate, not an estimate from a handful of playtests.

### →Verify a third party before trusting it

Every Snag rule got read back through a probe script before a migration ever referenced its ID — confirming the payout, not assuming the dashboard matches the API.

### →Know when the safety mechanism doesn't fit

Coin Kingdom's merge-chain scoring doesn't reduce to a rate curve. Saying so up front beat shipping a guess that would fail the same way Joystick Pop's did.

### →Separate the fix from the sync

When Joystick Pop's live build had diverged from git entirely, the catch-up and the actual feature shipped as two honest commits, not one tangled one.

### →A false positive is still a bug

"Working as designed" wasn't the end of the Joystick Pop story — a ceiling that rejects a real player is a defect in the ceiling, and the fix changed the underlying service, not just one game's config.

### →Close the loop with proof

Playa Run's integration wasn't marked done on code review alone — a headless browser ran the actual handshake and read the actual payload a real collision produced.

sura-api · sura-universal · five independent game clients Snag loyalty rules · TypeORM migrations · vanilla-JS & Phaser integration layers