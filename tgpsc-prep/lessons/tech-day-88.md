# ⚡ GATE Technical Revision — Day 88 (2026-10-17)

*The galvanometer family and its damping, the DC motor's speed–torque behaviour and control, and the single-phase full converter versus semiconverter.*

📅 Tech Day 88 · ⏱ ~50 min · 🎯 Measurements + Machines + Power Electronics

> Today: **galvanometers** (d'Arsonval torque & damping/CDRX, ballistic galvanometer, flux meter), **DC motors** (types, torque–speed curves, starters, speed control), and the **single-phase full converter & semiconverter** (average output, freewheeling-diode effect).

---

## 🔧 Measuring Instruments: Galvanometers — d'Arsonval, Ballistic & Flux Meter

### 📖 Concept Deep Dive

A **galvanometer** is a sensitive current/charge detector — the ancestor of the PMMC meter.

**d'Arsonval (moving-coil) galvanometer.** A coil of `N` turns, area `A`, suspended in a uniform radial field `B`, carries current `i`. The deflecting torque:

```
Td = N·B·A·i = G·i      (G = NBA = galvanometer constant)
```

At steady deflection, the **control (spring/suspension) torque** `= K·θ` balances it:

```
θ = G·i / K      ⇒  current sensitivity  Si = θ/i = G/K = NBA/K
```

So sensitivity rises with N, B, A and a weak control constant K.

**Damping & CDRX.** The moving system oscillates before settling; **eddy-current (electromagnetic) damping** (through the coil circuit) controls this. Three regimes: **underdamped** (oscillatory), **critically damped** (fastest non-oscillatory — ideal), and **overdamped** (sluggish). The **Critical Damping Resistance External (CDRX)** is the external circuit resistance that produces **critical damping** — a key galvanometer rating.

**Ballistic galvanometer.** Designed to measure a **quantity of charge** `Q` from a brief current impulse (e.g., discharging a capacitor or a flux change). It has a **large moment of inertia** and **minimal damping during the impulse**, so the impulse passes before the coil moves much; the **first swing (throw) θ1 is proportional to the charge**:

```
Q ∝ θ1     (charge sensitivity = θ1 / Q)
```

**Flux meter (Grassot).** A ballistic-type instrument with **negligible control torque and heavy electromagnetic damping**, so its deflection is **proportional to the total flux-linkage change** `(N·Δφ)` and is **independent of the time** over which the flux changes — convenient for measuring magnetic flux directly.

| Instrument | Measures | Key feature |
|---|---|---|
| d'Arsonval | current | `θ = Gi/K` |
| Ballistic | charge Q | first throw θ1 ∝ Q; low damping in impulse |
| Flux meter | flux-linkage change | no control torque; time-independent |

> 💎 **KEY RESULT** — d'Arsonval: `Td = NBA·i = Gi`, `θ = Gi/K`, sensitivity `= NBA/K`. **Ballistic galvanometer: first throw ∝ charge Q.** Flux meter reading ∝ **flux-linkage change**, independent of time. **CDRX** = external resistance for critical damping.

> 🧠 **MEMORY HOOK** — "**d'Arsonval = current (θ = Gi/K); Ballistic = charge (first throw); Flux meter = flux (time-independent).**"

> ⚠️ **TRAP ALERT** — A **ballistic** galvanometer needs **large inertia and LOW damping during the impulse** (so the charge passes first) — the opposite of a normal galvanometer which wants fast critical damping. The **flux meter has negligible control torque** (so it holds the reading).

### 📐 Formula Sheet

| Quantity | Formula | Notes |
|---|---|---|
| Deflecting torque | `Td = NBA·i = G·i` | G = NBA |
| Steady deflection | `θ = G·i/K` | K = control const |
| Current sensitivity | `Si = NBA/K` | θ per unit i |
| Ballistic charge | `Q ∝ θ1` | first throw |
| Flux meter | reading ∝ `N·Δφ` | time-independent |
| CDRX | ext. R for critical damping | rating |

### 🧮 Solved Examples

**Example 1 — Galvanometer sensitivity.** A moving-coil galvanometer has N = 100 turns, B = 0.2 T, coil area A = 2 cm², control constant K = 5×10⁻⁶ N·m/rad. Find the deflection for i = 1 mA.

```
G = NBA = 100 × 0.2 × 2×10⁻⁴ = 4×10⁻³ N·m/A
θ = G·i/K = (4×10⁻³ × 1×10⁻³)/(5×10⁻⁶)
  = 4×10⁻⁶ / 5×10⁻⁶ = 0.8 rad
```

**θ = 0.8 rad** (≈ 45.8°). ✔

**Example 2 — Current sensitivity.** For the same galvanometer, find the current sensitivity (rad per µA).

```
Si = G/K = 4×10⁻³ / 5×10⁻⁶ = 800 rad/A = 800×10⁻⁶ rad/µA
   = 8×10⁻⁴ rad/µA
```

**Si = 800 rad/A (8×10⁻⁴ rad/µA).** ✔

### ⚠️ Common Traps
1. **Ballistic galvanometer wants LOW damping during the impulse** (and high inertia) — not critical damping.
2. **Flux meter has negligible control torque** → reading holds and is time-independent.
3. **Sensitivity = NBA/K** (rises as K falls).
4. **CDRX is an external resistance** value for critical damping, not internal.
5. **First throw (not steady deflection) ∝ charge** in a ballistic galvanometer.
6. **G = NBA** is the galvanometer constant (don't omit N or A).

### 📝 Test (8 questions)

**Q1 (MCQ).** The deflecting torque of a d'Arsonval galvanometer is:
(a) NBA/i  (b) NBA·i  (c) K·θ only  (d) i/NBA

**Q2 (MCQ).** A ballistic galvanometer measures:
(a) steady current  (b) charge (quantity of electricity)  (c) power  (d) frequency

**Q3 (MCQ).** During the impulse, a ballistic galvanometer should have:
(a) critical damping  (b) low damping and high inertia  (c) high damping  (d) zero inertia

**Q4 (MCQ).** The flux meter's deflection is:
(a) time-dependent  (b) proportional to flux-linkage change, time-independent  (c) proportional to current only  (d) zero

**Q5 (MCQ).** CDRX stands for the external resistance giving:
(a) maximum current  (b) critical damping  (c) overdamping  (d) zero deflection

**Q6 (NAT).** A galvanometer: N = 50, B = 0.1 T, A = 4 cm². Find G = NBA (×10⁻³ N·m/A).

**Q7 (NAT).** For G = 2×10⁻³ N·m/A and K = 4×10⁻⁶ N·m/rad, find θ for i = 2 mA (rad).

**Q8 (NAT).** Current sensitivity of a galvanometer is θ/i = 500 rad/A. Find the deflection (rad) for 0.5 mA.

<details><summary>🔑 Solutions</summary>

**Q1 → (b).** `Td = NBA·i`.

**Q2 → (b).** Charge.

**Q3 → (b).** Low damping + high inertia (impulse passes first).

**Q4 → (b).** Flux-linkage change, time-independent.

**Q5 → (b).** Critical damping.

**Q6.**
```
G = NBA = 50 × 0.1 × 4×10⁻⁴ = 2×10⁻³ N·m/A
```
**G = 2×10⁻³ (2.0).**

**Q7.**
```
θ = G·i/K = (2×10⁻³ × 2×10⁻³)/(4×10⁻⁶) = 4×10⁻⁶/4×10⁻⁶ = 1 rad
```
**θ = 1 rad.**

**Q8.**
```
θ = Si·i = 500 × 0.5×10⁻³ = 0.25 rad
```
**θ = 0.25 rad.**

</details>

---

## 🔧 Electrical Machines: DC Motors — Types, Torque–Speed, Starters & Speed Control

### 📖 Concept Deep Dive

A **DC motor** runs on the back-EMF principle: `V = Eb + IaRa`, with `Eb = PφZN/60A`.

**Core relations.**
```
Eb = V − Ia·Ra
Speed:  N ∝ Eb/φ = (V − IaRa)/(k·φ)
Torque: Ta ∝ φ·Ia
```

**Types & torque–speed characteristics.**
- **Shunt motor** — field across the line, so `φ ≈ constant`. Speed is **nearly constant** (drops slightly with load); `Ta ∝ Ia`. A "constant-speed" motor (lathes, fans, pumps).
- **Series motor** — field carries the armature current, so `φ ∝ Ia` (pre-saturation) → `Ta ∝ Ia²` (very **high starting torque**). Speed falls steeply with load and **runs away dangerously at no load** (never belt-drive or run unloaded). Used in **traction, cranes, hoists**.
- **Compound motor** — cumulative compound gives **high starting torque (series part) without no-load runaway (shunt part)**.

**Starters.** At start `Eb = 0`, so the starting current `Ia = V/Ra` would be enormous (Ra is tiny). A **starter** inserts external resistance in series with the armature, cut out as the motor speeds up (as Eb builds). The **3-point** and **4-point** starters add no-volt and overload protection (the 4-point separates the holding coil for better field-weakening operation).

**Speed control.**
- **Armature-voltage / armature-resistance control** (below base speed): reduce effective armature voltage → lower N. **Ward-Leonard** system gives smooth, wide armature-voltage control.
- **Field (flux) control** (above base speed): weaken φ → N rises (constant-power region).

```
N ∝ (V − IaRa)/φ
```

| Motor | Torque–speed | Use |
|---|---|---|
| Shunt | nearly constant speed, Ta ∝ Ia | lathes, fans |
| Series | Ta ∝ Ia², runaway at no load | traction, hoists |
| Compound | high start torque, no runaway | rolling mills, lifts |

> 💎 **KEY RESULT** — `Eb = V − IaRa`, `N ∝ Eb/φ`, `Ta ∝ φIa`. **Series: Ta ∝ Ia² (high starting torque, runs away unloaded)**; **shunt ≈ constant speed**. Below base speed → **armature control**; above → **field weakening**.

> 🧠 **MEMORY HOOK** — "**Series = Ia² torque, never no-load; Shunt = steady speed; below base = armature, above base = field.**"

> ⚠️ **TRAP ALERT** — A **series motor must never run on no load** (speed runs away). A **starter is needed** because `Eb = 0` at start (huge inrush). **Field weakening raises speed** (above base); armature control lowers it (below base).

### 📐 Formula Sheet

| Quantity | Formula | Notes |
|---|---|---|
| Back-EMF | `Eb = V − IaRa` | motor |
| Speed | `N ∝ Eb/φ` | — |
| Torque | `Ta ∝ φ·Ia` | — |
| Series torque | `Ta ∝ Ia²` | pre-saturation |
| Starting current | `Ia = V/Ra` (without starter) | huge |
| Speed ratio | `N2/N1 = (Eb2/Eb1)(φ1/φ2)` | — |

### 🧮 Solved Examples

**Example 1 — Shunt motor speed.** A 220 V DC shunt motor draws armature current Ia = 25 A with Ra = 0.4 Ω, running at 1000 rpm. If the load increases so Ia = 40 A (flux constant), find the new speed.

```
Eb1 = V − Ia1·Ra = 220 − 25×0.4 = 220 − 10 = 210 V
Eb2 = 220 − 40×0.4 = 220 − 16 = 204 V
N2 = N1 × (Eb2/Eb1) = 1000 × (204/210) = 971.4 rpm
```

**N2 ≈ 971 rpm** (slight drop with load — shunt behaviour). ✔

**Example 2 — Starting current.** A 230 V motor has Ra = 0.5 Ω. Find the starting current without a starter, and comment.

```
At start Eb = 0 ⇒ Ia = V/Ra = 230/0.5 = 460 A
```

**460 A** — many times the rated current; a **starter resistance is essential** to limit it. ✔

### ⚠️ Common Traps
1. **Eb = V − IaRa** for a motor (opposite sign to a generator).
2. **Series motor Ta ∝ Ia²** → high starting torque but **runaway at no load**.
3. **A starter limits the huge Eb = 0 inrush** at start.
4. **Field weakening raises speed** (above base); armature control reduces it.
5. **Shunt speed drops only slightly** with load (near-constant).
6. **Ward-Leonard = smooth armature-voltage control.**

### 📝 Test (8 questions)

**Q1 (MCQ).** The back-EMF of a DC motor is:
(a) V + IaRa  (b) V − IaRa  (c) IaRa  (d) V

**Q2 (MCQ).** A DC series motor should never be run:
(a) at full load  (b) at no load  (c) at half load  (d) with a starter

**Q3 (MCQ).** The torque of a series motor (pre-saturation) varies as:
(a) Ia  (b) Ia²  (c) 1/Ia  (d) constant

**Q4 (MCQ).** To run a DC motor above its base speed, use:
(a) armature-voltage control  (b) field weakening  (c) armature resistance  (d) a starter

**Q5 (MCQ).** A starter is needed because at starting:
(a) Eb = V  (b) Eb = 0 → large inrush  (c) φ = 0  (d) Ra is large

**Q6 (NAT).** A shunt motor: V = 200 V, Ia = 20 A, Ra = 0.5 Ω. Find Eb (V).

**Q7 (NAT).** A 250 V motor, Ra = 0.25 Ω. Find the no-starter starting current (A).

**Q8 (NAT).** A shunt motor runs at 1200 rpm with Eb = 240 V. If Eb falls to 216 V (flux constant), find the new speed (rpm).

<details><summary>🔑 Solutions</summary>

**Q1 → (b).** Eb = V − IaRa.

**Q2 → (b).** No load (runaway).

**Q3 → (b).** Ta ∝ Ia².

**Q4 → (b).** Field weakening.

**Q5 → (b).** Eb = 0 at start → huge current.

**Q6.**
```
Eb = V − IaRa = 200 − 20×0.5 = 200 − 10 = 190 V
```
**Eb = 190 V.**

**Q7.**
```
Ia = V/Ra = 250/0.25 = 1000 A
```
**Ia = 1000 A.**

**Q8.**
```
N2 = N1×(Eb2/Eb1) = 1200×(216/240) = 1200×0.9 = 1080 rpm
```
**N2 = 1080 rpm.**

</details>

---

## 🔧 Power Electronics: Single-Phase Full Converter & Semiconverter

### 📖 Concept Deep Dive

The **1-φ full converter** (fully controlled bridge) and the **semiconverter** (half-controlled) are the workhorse single-phase rectifiers for DC drives.

**Full converter (4 SCRs).** A fully controlled bridge; with a **highly inductive load** (continuous, ripple-free current) the average output is:

```
Vo(avg) = (2Vm/π)·cos α
```

As `α` goes 0 → 90°, Vo falls from `2Vm/π` to 0; for **α > 90°** (with a suitable EMF/inductive load) **Vo goes negative** — the converter works as a **line-commutated inverter** (feeds power back to the AC source). This **two-quadrant** capability (±V, +I) is the full converter's hallmark.

**Semiconverter (2 SCRs + 2 diodes).** Half-controlled; the diodes provide an inherent freewheeling path, so:

```
Vo(avg) = (Vm/π)·(1 + cos α)
```

Output ranges `2Vm/π` → 0 as α goes 0 → 180°, and is **always ≥ 0** (one-quadrant; **cannot invert**).

**Effect of a freewheeling diode (FD).** Adding an FD **across the load of a full converter** forces it to behave like a **semiconverter**: during the interval when the output would go negative, the FD conducts the inductive load current and **clamps the output to zero**. Benefits: output can't go negative (no inversion), **improved input power factor**, reduced ripple, and continuous load current. (So an FD **removes** the full converter's inverting ability.)

| Converter | Vo(avg) | Quadrants | Invert? |
|---|---|---|---|
| Full converter | `(2Vm/π)cosα` | 2 (±V, +I) | **Yes** (α>90°) |
| Semiconverter | `(Vm/π)(1+cosα)` | 1 (+V, +I) | No |
| Full + FD | behaves like semi | 1 | No |

> 💎 **KEY RESULT** — Full converter `Vo = (2Vm/π)cosα` (inverts for α > 90°); semiconverter `Vo = (Vm/π)(1+cosα)` (always ≥ 0). A **freewheeling diode across a full converter makes it behave like a semiconverter** (clamps output ≥ 0, improves pf).

> 🧠 **MEMORY HOOK** — "**Full = 2Vm/π·cosα (can invert); Semi = Vm/π(1+cosα) (can't). FD turns Full into Semi.**"

> ⚠️ **TRAP ALERT** — Only the **full converter** (no FD) can invert (α > 90°). Adding a **freewheeling diode removes inversion** and makes it a one-quadrant (semiconverter-like) rectifier. `Vm` is **peak** — convert RMS first.

### 📐 Formula Sheet

| Quantity | Formula | Notes |
|---|---|---|
| Full converter avg | `Vo = (2Vm/π)cosα` | continuous, inductive |
| Semiconverter avg | `Vo = (Vm/π)(1+cosα)` | ≥ 0 |
| Full at α=0 | `2Vm/π = 0.636 Vm` | max |
| Inverter mode | α > 90° (full only) | Vo < 0 |
| FD on full converter | → semiconverter behaviour | clamps ≥ 0 |

### 🧮 Solved Examples

**Example 1 — Full converter, inverter mode.** A 1-φ full converter from 230 V (RMS) fires at α = 120° (continuous conduction, inductive load). Find the average output and interpret.

```
Vm = √2×230 = 325.3 V
Vo = (2Vm/π)cosα = (2×325.3/π)×cos120°
   = (650.6/3.1416)×(−0.5) = 207.1×(−0.5) = −103.5 V
```

**Vo = −103.5 V** — negative output, so the converter is in **inverter mode** (returning power to the AC side). ✔

**Example 2 — Semiconverter vs full at α = 60°.** For Vm = 325 V, compare the average output of a semiconverter and a full converter at α = 60°.

```
Semiconverter: Vo = (Vm/π)(1+cos60°) = (325/3.1416)(1+0.5) = 103.5×1.5 = 155.2 V
Full converter: Vo = (2Vm/π)cos60° = (650/3.1416)(0.5) = 206.9×0.5 = 103.5 V
```

**Semiconverter 155.2 V vs full converter 103.5 V** at α = 60° — the semiconverter's `(1+cosα)` form gives more output here. ✔

### ⚠️ Common Traps
1. **Full = (2Vm/π)cosα; Semi = (Vm/π)(1+cosα)** — don't mix the forms.
2. **Only the full converter inverts** (α > 90°, Vo < 0).
3. **A freewheeling diode converts a full converter into a semiconverter** (no inversion, better pf).
4. **Vm is peak** — convert from RMS first.
5. **Semiconverter output is always ≥ 0** (one-quadrant).
6. **Highly inductive load** assumption → continuous, ripple-free current for these averages.

### 📝 Test (8 questions)

**Q1 (MCQ).** The average output of a 1-φ full converter (continuous conduction) is:
(a) `(Vm/π)(1+cosα)`  (b) `(2Vm/π)cosα`  (c) `(Vm/2π)(1+cosα)`  (d) `Vm cosα`

**Q2 (MCQ).** A 1-φ full converter operates as an inverter when:
(a) α < 90°  (b) α > 90°  (c) α = 0  (d) never

**Q3 (MCQ).** Adding a freewheeling diode across a full converter makes it behave like a:
(a) full converter still  (b) semiconverter  (c) cycloconverter  (d) chopper

**Q4 (MCQ).** A semiconverter output voltage is:
(a) always ≥ 0  (b) always negative  (c) can invert  (d) independent of α

**Q5 (MCQ).** At α = 0, the full converter average output equals:
(a) Vm/π  (b) 2Vm/π  (c) Vm/2π  (d) Vm

**Q6 (NAT).** A 1-φ full converter: Vm = 300 V, α = 45°. Find Vo (V, 1 decimal).

**Q7 (NAT).** A 1-φ full converter: Vm = 300 V, α = 135°. Find Vo (V, 1 decimal).

**Q8 (NAT).** A 1-φ semiconverter: Vm = 300 V, α = 90°. Find Vo (V, 1 decimal).

<details><summary>🔑 Solutions</summary>

**Q1 → (b).** `(2Vm/π)cosα`.

**Q2 → (b).** α > 90°.

**Q3 → (b).** Semiconverter.

**Q4 → (a).** Always ≥ 0.

**Q5 → (b).** 2Vm/π.

**Q6.**
```
Vo = (2×300/π)cos45° = 190.99×0.7071 = 135.1 V
```
**Vo ≈ 135.1 V.**

**Q7.**
```
Vo = (2×300/π)cos135° = 190.99×(−0.7071) = −135.1 V
```
**Vo ≈ −135.1 V (inverter mode).**

**Q8.**
```
Vo = (Vm/π)(1+cos90°) = (300/3.1416)(1+0) = 95.5 V
```
**Vo ≈ 95.5 V.**

</details>

---

## 📊 Progress

```
Measuring Instruments  [████░░░░░░░░░░░░░░░░░]  Round 5 · topic  4/22 (Galvanometers)
Electrical Machines    [████████░░░░░░░░░░░░░]  Round 5 · topic  8/20 (DC motors)
Power Electronics       [████████░░░░░░░░░░░░░]  Round 5 · topic  8/20 (1-φ full/semi converter)
```

- **Section A (Measurements):** round 5 at galvanometers. 🔄
- **Section B (Machines):** round 5 into DC motors. 🔄
- **Section C (Power Electronics):** round 5 at single-phase full/semi converters. 🔄

> 🎯 **Today's three one-liners:** (1) **d'Arsonval θ = Gi/K; ballistic ∝ charge (first throw); flux meter ∝ Δflux (time-independent).** (2) **Motor Eb = V−IaRa; series Ta ∝ Ia² (no no-load); field-weaken above base speed.** (3) **Full converter (2Vm/π)cosα inverts for α>90°; semiconverter (Vm/π)(1+cosα) ≥ 0; FD turns full into semi.**

*Correctness over length — verify any value marked "verify" before the exam.*
