# ⚡ GATE Technical Revision — Day 56 (2026-09-15)

*Round-3 pass 14 — potential transformers, single-phase induction motors, and single-phase inverters. Steady toward round-3 completion.*

📅 Tech Day 56 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics · 🔁 Round-3 pass 14

> 🧠 **MEMORY HOOK** — Today: the **PT** (never short!), the **single-phase induction motor** (double-revolving-field, no self-start), and the **single-phase VSI** (square-wave output, THD). Three exam favourites.

---

## 🔧 Measuring Instruments: Instrument Transformers — Potential Transformer (PT)

### 📖 Concept Deep Dive

A **Potential (Voltage) Transformer (PT)** steps down a high line voltage to a standard **secondary of 110 V** (line-to-line) for voltmeters, wattmeters and relays, and **isolates** instruments from high voltage. Its primary has many turns across the line; the secondary feeds a **high-impedance burden** (voltmeter/relay) drawing little current — so a PT operates much like a normal small transformer **near no-load**.

**Ratios & errors.** Ideally `Vp/Vs = Np/Ns`. Because of winding impedance drops and the exciting current:
- **Ratio (voltage) error** — actual ratio differs from nominal (secondary voltage slightly off), from the `I(Rp + a²Rs)` and reactance drops.
- **Phase-angle error** — small angle between primary and reversed-secondary voltage; matters for **power/energy metering** (like the CT).

Both errors are **minimised** by low winding resistance/reactance and a good core; PTs are designed for accuracy classes (0.1, 0.2, 0.5, 1.0).

**CT vs PT — the crucial contrast:**

| Feature | CT | PT |
|---|---|---|
| Connection | series (line current) | parallel (across line) |
| Secondary standard | 5 A (or 1 A) | 110 V |
| Secondary burden | low impedance (near short) | high impedance (near open) |
| Danger | **never OPEN** secondary | **never SHORT** secondary |
| Primary current | fixed by line | small (magnetising) |
| Core flux | varies with burden | ~constant (like a normal Tx) |

**Why "never short a PT"**: the primary is across the full line voltage; if the secondary is shorted, a **very large current** flows (like a shorted transformer on rated voltage) → burnout. (Conversely, a CT must never be opened.)

**Capacitor Voltage Transformer (CVT)** — for EHV, a capacitive divider + a small PT; also used for power-line carrier communication.

> 💎 **KEY RESULT** — PT: secondary **110 V**, **parallel** connection, high-impedance burden (near no-load), errors from winding drops + exciting current. **CT never open; PT never short.** CVT used at EHV.

> ⚠️ **TRAP ALERT** — **PT secondary must never be short-circuited** (huge current). PT ≈ normal transformer near **no-load**; CT ≈ near **short**. Standard secondaries: **PT 110 V, CT 5 A/1 A**.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Ideal ratio | `Vp/Vs = Np/Ns` |
| Nominal ratio | `Kn = rated Vp/rated Vs` |
| Actual ratio | `R = Vp/Vs` (actual) |
| Ratio error | `(Kn − R)/R × 100 %` |
| Secondary standard | 110 V (L-L) |
| Hazard | never short-circuit secondary |

### 🧮 Solved Examples

**Example 1 — PT secondary voltage.**
An `11000/110 V` PT is connected to an `11 kV` line. Ideal secondary voltage, and its nominal ratio?

- `Kn = 11000/110 = 100`.
- `Vs = Vp/Kn = 11000/100 = 110 V`.

**Example 2 — ratio error.**
Nominal ratio `Kn = 100`; at load the actual ratio `R = 100.5`. Ratio error?

- Ratio error `= (Kn − R)/R × 100 = (100 − 100.5)/100.5 × 100 = −0.497 ≈ −0.5%`.

> 🧠 **MEMORY HOOK** — "**PT parallel, 110 V, never short; CT series, 5 A, never open.**" Phase-angle error matters for **power metering** in both.

### ⚠️ Common Traps

1. Short-circuiting a PT secondary (burnout) — that's the CT rule reversed.
2. Confusing PT (parallel, 110 V) with CT (series, 5 A).
3. Ignoring phase-angle error for power/energy metering.
4. Treating actual ratio as exactly turns ratio.
5. Overloading the PT burden (raises error).
6. Forgetting CVT usage at EHV.

### 📝 Test — Potential Transformer (8 Q)

1. A PT secondary standard voltage is: (a) 5 V (b) 110 V (c) 230 V (d) 415 V.
2. A PT is connected: (a) in series (b) across (parallel to) the line (c) to ground only (d) to a shunt.
3. A PT secondary must never be: (a) open (b) short-circuited (c) grounded (d) metered.
4. A CT secondary must never be: (a) short-circuited (b) open-circuited (c) grounded (d) loaded.
5. PT phase-angle error matters most for: (a) voltage magnitude only (b) power/energy metering (c) resistance (d) frequency.
6. **(NAT)** A 22000/110 V PT on 22 kV. Nominal ratio Kn?
7. **(NAT)** For Q6, ideal secondary voltage (V)?
8. **(NAT)** Kn = 200, actual ratio R = 201. Ratio error (%, 2 dp)?

<details><summary>🔑 Solutions</summary>

**Q1 — (b) 110 V.**

**Q2 — (b) parallel.**

**Q3 — (b) short-circuited.**

**Q4 — (b) open-circuited.**

**Q5 — (b) power/energy metering.**

**Q6.** `Kn = 22000/110 = 200`.

**Q7.** `Vs = 22000/200 = 110 V`.

**Q8.** `(200 − 201)/201 × 100 = −0.50%`.

</details>

---

## 🔧 Electrical Machines: Single-Phase Induction Motors

### 📖 Concept Deep Dive

A **single-phase induction motor** has a single-phase stator winding and a squirrel-cage rotor. Its defining feature: it is **not self-starting** — it produces torque once running, but zero starting torque.

**Double-revolving-field theory.** A single-phase pulsating MMF can be resolved into **two equal, oppositely-rotating** fields (each half amplitude), rotating at `+Ns` and `−Ns`. At standstill both produce equal and opposite torques → **net starting torque = 0**. Once the rotor is given an initial spin, the slip w.r.t. the forward field is small and w.r.t. the backward field is large (`2−s`), so the forward torque dominates → the motor runs up. (Cross-field theory gives an alternative explanation.)

**Slip relations:** forward slip `s`, backward slip `(2 − s)`.

**Starting methods (create a rotating field via a phase difference):**

| Type | How | Starting torque | Use |
|---|---|---|---|
| **Split-phase** | auxiliary winding (high R/X) → ~30° phase split | low-moderate | fans, small pumps |
| **Capacitor-start** | series capacitor in aux winding → ~90° split | **high** | compressors, pumps |
| **Capacitor-start capacitor-run** | two capacitors | high + good pf/run | high-performance |
| **Permanent-split capacitor (PSC)** | one run capacitor always in | low-moderate, quiet | fans |
| **Shaded-pole** | shading coil on pole part | **very low** | tiny fans, toys |

The auxiliary winding (and/or capacitor) is often disconnected by a **centrifugal switch** at ~75% speed (in start-type motors).

> 💎 **KEY RESULT** — 1-φ IM: **not self-starting** (double-revolving-field → zero net starting torque). Forward slip `s`, backward `(2−s)`. Starting: **split-phase** (~30°), **capacitor-start** (~90°, high torque), **shaded-pole** (very low torque). Centrifugal switch cuts the aux winding.

> ⚠️ **TRAP ALERT** — A single-phase IM has **zero starting torque** (needs an auxiliary phase). **Capacitor-start** gives near-90° split → **high** starting torque; **shaded-pole** gives the **lowest**. Backward-field slip is **(2−s)**, not s.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Forward / backward slip | `s` and `(2 − s)` |
| Net torque | `T = Tforward − Tbackward` (0 at standstill) |
| Split-phase | aux winding phase split ~30° |
| Capacitor-start | ~90° split → high starting torque |
| Synchronous speed | `Ns = 120f/P` |
| Centrifugal switch | cuts aux winding ~75% Ns |

### 🧮 Solved Examples

**Example 1 — backward slip.**
A single-phase induction motor runs at slip `s = 0.05` (forward). Backward-field slip?

- Backward slip `= 2 − s = 2 − 0.05 = 1.95`.
- The backward field sees a very high slip → its torque is small, so the forward torque dominates.

**Example 2 — synchronous speed & running speed.**
A 4-pole, 50 Hz single-phase motor runs at `s = 0.04`. Running speed?

- `Ns = 120×50/4 = 1500 rpm`; `N = Ns(1−s) = 1500 × 0.96 = 1440 rpm`.

> 🧠 **MEMORY HOOK** — "**One phase → two counter-rotating fields → no start.**" Add a phase (aux winding/capacitor) to start; capacitor-start = high torque, shaded-pole = least.

### ⚠️ Common Traps

1. Thinking a 1-φ IM self-starts (it doesn't — zero starting torque).
2. Using slip `s` for the backward field (it's **2−s**).
3. Saying shaded-pole has high starting torque (it's the **lowest**).
4. Forgetting the centrifugal switch disconnects the start winding.
5. Confusing capacitor-start (high torque) with PSC (moderate).
6. Ignoring the ~90° phase split needed for good starting torque.

### 📝 Test — 1-φ Induction Motor (8 Q)

1. A single-phase induction motor is: (a) self-starting (b) not self-starting (c) synchronous (d) DC.
2. The theory explaining its behaviour is: (a) double-revolving-field (b) two-reaction (c) Blondel (d) Ferraris only.
3. The backward-field slip is: (a) s (b) 2−s (c) 1−s (d) s/2.
4. Highest starting torque among these is from: (a) shaded-pole (b) capacitor-start (c) split-phase (d) PSC.
5. The lowest starting torque is from: (a) capacitor-start (b) shaded-pole (c) split-phase (d) cap-start-cap-run.
6. **(NAT)** A 1-φ motor at forward slip 0.03. Backward slip?
7. **(NAT)** 6-pole, 50 Hz, s = 0.05. Running speed (rpm)?
8. **(NAT)** Split-phase aux winding gives about what phase split (degrees)?

<details><summary>🔑 Solutions</summary>

**Q1 — (b) not self-starting.**

**Q2 — (a) double-revolving-field.**

**Q3 — (b) 2−s.**

**Q4 — (b) capacitor-start.**

**Q5 — (b) shaded-pole.**

**Q6.** `2 − 0.03 = 1.97`.

**Q7.** `Ns = 1000`; `N = 1000×0.95 = 950 rpm`.

**Q8.** ~30° (split-phase).

</details>

---

## 🔧 Power Electronics: Inverters I — Single-Phase VSI (Half & Full Bridge)

### 📖 Concept Deep Dive

An **inverter** converts DC to AC. A **Voltage Source Inverter (VSI)** has a stiff DC input (capacitor); switches (IGBTs/MOSFETs with anti-parallel diodes) shape the output.

**Single-phase half-bridge VSI.** Two switches + a split DC supply (`±Vs/2`). The output swings between `+Vs/2` and `−Vs/2` (square wave):

```
Peak output = Vs/2
RMS output (square wave) = Vs/2
Fundamental RMS = (Vs/2)·(4/π)/√2 = (2Vs)/(π√2) ≈ 0.45·Vs
```

**Single-phase full-bridge VSI.** Four switches (two legs). The output swings between `+Vs` and `−Vs` (twice the half-bridge):

```
Peak output = Vs
RMS output (square wave) = Vs
Fundamental RMS = (4Vs)/(π√2) = (2√2·Vs)/π ≈ 0.9·Vs
```

**Square-wave harmonics & THD.** A square wave contains **odd harmonics** (3rd, 5th, 7th…) with amplitudes `∝ 1/n`. The RMS of harmonics gives a high **Total Harmonic Distortion**:

```
Fundamental (peak) = (4/π)·Vpk_square
THD of a square wave ≈ 48.3%   (√(Vrms² − V1rms²)/V1rms)
```

**Reducing harmonics:**
- **Quasi-square (voltage control by phase-shift)** — introduce a zero interval of angle to control fundamental and eliminate a chosen harmonic.
- **PWM (sinusoidal PWM)** — switch at high frequency comparing a sine reference with a triangular carrier; pushes harmonics to high frequency (around the switching frequency), easily filtered — the standard modern method.

**Conduction:** in a square-wave full bridge, diagonal pairs conduct for each half-cycle; the **anti-parallel (feedback) diodes** return reactive load energy to the DC bus (essential for inductive loads).

> 💎 **KEY RESULT** — Full-bridge VSI: peak `Vs`, square-wave RMS `Vs`, **fundamental RMS ≈ 0.9 Vs** (`2√2Vs/π`). Half-bridge: half those (fund. ≈ 0.45 Vs). Square wave → odd harmonics (`1/n`), **THD ≈ 48.3%**; reduce via **quasi-square/PWM**.

> ⚠️ **TRAP ALERT** — Full-bridge output is **twice** the half-bridge (peak Vs vs Vs/2). Fundamental RMS of a full-bridge square wave = **2√2Vs/π ≈ 0.9Vs** (not Vs). Square-wave THD ≈ **48.3%**; **feedback diodes** are needed for inductive loads.

### 📐 Formula Sheet

| Quantity | Half-bridge | Full-bridge |
|---|---|---|
| Peak output | `Vs/2` | `Vs` |
| RMS (square wave) | `Vs/2` | `Vs` |
| Fundamental RMS | `2Vs/(π√2) ≈ 0.45Vs` | `2√2Vs/π ≈ 0.9Vs` |
| Harmonics | odd (3,5,7…), `∝ 1/n` | same |
| Square-wave THD | ≈ 48.3% | ≈ 48.3% |
| nth harmonic (peak) | `(4Vs/π)/n · (1/2 or 1)` | `(4Vs/π)/n` |

### 🧮 Solved Examples

**Example 1 — full-bridge fundamental.**
A single-phase full-bridge VSI has `Vs = 200 V` DC (square-wave output). Fundamental RMS output voltage?

- `V1(rms) = 2√2·Vs/π = 2 × 1.4142 × 200 / 3.1416 = 565.7/3.1416 = 180.1 V ≈ 0.9 × 200 = 180 V`.

**Example 2 — third harmonic.**
For the same inverter, the RMS of the **3rd harmonic**?

- 3rd harmonic peak `= (4Vs/π)/3 = (4×200/π)/3 = (254.6)/3 = 84.9 V`; RMS `= 84.9/√2 = 60.0 V`.
- (It's 1/3 of the fundamental's amplitude — hence significant distortion.)

> 🧠 **MEMORY HOOK** — "**Full-bridge fundamental ≈ 0.9 Vs; half-bridge ≈ 0.45 Vs.**" Square wave = odd harmonics `1/n`, THD ~48%; PWM fixes it.

### ⚠️ Common Traps

1. Taking full-bridge output = half-bridge (it's **double**).
2. Using RMS = fundamental (RMS `Vs` vs fundamental `0.9Vs`).
3. Forgetting square waves have **only odd** harmonics.
4. Omitting **feedback diodes** for inductive loads.
5. Confusing quasi-square (harmonic elimination) with pure square.
6. Forgetting PWM shifts harmonics to **high frequency**.

### 📝 Test — Single-Phase VSI (8 Q)

1. A VSI converts: (a) AC to DC (b) DC to AC (c) DC to DC (d) AC to AC.
2. Full-bridge peak output (square wave) is: (a) Vs/2 (b) Vs (c) 2Vs (d) Vs/√2.
3. Full-bridge fundamental RMS is about: (a) 0.45Vs (b) 0.9Vs (c) Vs (d) 1.11Vs.
4. A square-wave output contains: (a) even harmonics (b) odd harmonics (c) no harmonics (d) DC only.
5. Square-wave THD is approximately: (a) 3% (b) 48.3% (c) 100% (d) 5%.
6. **(NAT)** Full-bridge, Vs = 300 V. Fundamental RMS output (V, 1 dp)?
7. **(NAT)** Half-bridge, Vs = 300 V. Fundamental RMS output (V, 1 dp)?
8. **(NAT)** Full-bridge, Vs = 200 V. 5th-harmonic peak voltage (V, 1 dp)?

<details><summary>🔑 Solutions</summary>

**Q1 — (b) DC to AC.**

**Q2 — (b) Vs.**

**Q3 — (b) 0.9Vs.**

**Q4 — (b) odd harmonics.**

**Q5 — (b) 48.3%.**

**Q6.** `V1 = 2√2×300/π = 848.5/3.1416 = 270.1 V`.

**Q7.** half = 0.45×300 = `135.0 V` (= 270.1/2).

**Q8.** 5th peak `= (4×200/π)/5 = 254.6/5 = 50.9 V`.

</details>

---

> 🧠 **DAY-56 WRAP (Round-3 pass 14)** — **PT:** 110 V secondary, parallel, **never short** (CT never open); errors from winding drops. **1-φ IM:** not self-starting (double-revolving-field), backward slip **2−s**, capacitor-start = high torque, shaded-pole = least. **VSI:** full-bridge fundamental **0.9Vs**, half-bridge 0.45Vs, square-wave THD ~48%, PWM fixes harmonics. ⚡

**🔁 Round-3 progress:** Measurements ▓▓▓▓▓▓▓▓▓▓ · Machines ▓▓▓▓▓▓▓▓▓▓ · Power Electronics ▓▓▓▓▓▓▓▓▓▓ — round-3 nearing the final topics (14/~21). 🎓 Power Systems joins as a 4th subject once the reference PDFs arrive.
