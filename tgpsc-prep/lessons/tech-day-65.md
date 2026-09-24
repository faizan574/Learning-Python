# ⚡ GATE Technical Revision — Day 65 (2026-09-24)

*Measurements works error analysis (how errors add and propagate), Machines covers three-phase transformer connections & parallel operation, and Power Electronics protects the SCR (turn-on methods, dv/dt–di/dt, snubbers).*

📅 Tech Day 65 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics · 🔁 Round 4 (all three sections)

> 🧠 **MEMORY HOOK** — Today: **error propagation** (sums add absolute, products add fractional), **3-φ transformer groups** (Y-Δ gives a `30°` shift; parallel share ∝ `1/Zpu`), and **SCR protection** (series `L` for `di/dt`, RC **snubber** for `dv/dt`).

---

## 🔧 Measuring Instruments: Error Analysis I — Types of Errors & Propagation

### 📖 Concept Deep Dive

Every measurement has error; classifying and combining it correctly is core GATE material.

**Types of error.**
- **Gross errors** — human mistakes (misreading, wrong recording, wrong scale). Reduced by care and multiple readings.
- **Systematic errors** — consistent, repeatable bias:
  - *Instrumental* (friction, wrong calibration, loading effect),
  - *Environmental* (temperature, humidity, stray fields),
  - *Observational* (parallax).
  These shift **all** readings the same way and can, in principle, be **corrected/calibrated out**.
- **Random errors** — small, unpredictable residual scatter from many unknown causes; treated **statistically** (mean, standard deviation). They cannot be removed but are reduced by **averaging many readings** (`σ_mean = σ/√n`).

**Basic error measures.**
```
Absolute error:  e = Am − At        (measured − true)
Relative error:  εr = e/At          % error = εr × 100
```
Because the *true* value is often unknown, the **limiting (guarantee) error** — the worst-case bound quoted by the maker — is used.

**Propagation / combination of errors.** For a result computed from measured quantities, limiting errors combine by **worst case**:

| Operation | Result error (limiting) |
|---|---|
| Sum `y = a + b` | `δy = δa + δb` (absolute add) |
| Difference `y = a − b` | `δy = δa + δb` (absolute **still add**) |
| Product `y = a·b` | `δy/y = δa/a + δb/b` (fractional add) |
| Quotient `y = a/b` | `δy/y = δa/a + δb/b` |
| Power `y = aⁿ` | `δy/y = n·(δa/a)` |
| General `y = f(x1,x2,…)` | `δy = Σ |∂f/∂xi|·δxi` |

For **random** (independent) errors, combine in **quadrature** instead:
```
σy = √( (∂f/∂x1)²σ1² + (∂f/∂x2)²σ2² + … )
```

> 💎 **KEY RESULT** — **Sums/differences:** absolute errors **add**. **Products/quotients/powers:** **fractional** errors add (`δy/y = δa/a + δb/b`; `n·δa/a` for a power). Random errors combine in **quadrature**, limiting errors **linearly**.

> ⚠️ **TRAP ALERT** — In a **difference** `a − b`, the **absolute** errors still add, so a small difference of two large, uncertain numbers has a **huge relative error** (error magnification). Systematic ≠ random: only systematic can be calibrated out.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Absolute error | `e = Am − At` |
| Relative / % error | `εr = e/At` ; `%e = εr×100` |
| Sum/difference | `δy = δa + δb` |
| Product/quotient | `δy/y = δa/a + δb/b` |
| Power `aⁿ` | `δy/y = n·(δa/a)` |
| General propagation | `δy = Σ|∂f/∂xi|·δxi` |
| Random (quadrature) | `σy = √(Σ(∂f/∂xi)²σi²)` |
| Std. dev. of mean | `σ_mean = σ/√n` |

### 🧮 Solved Examples

**Example 1 — Power from V and R.**
`P = V²/R`. If `V` has `±1%` and `R` has `±1.5%` limiting error, find the limiting error in `P`.

```
P = V²·R⁻¹ ⇒ δP/P = 2(δV/V) + (δR/R)
           = 2(1%) + 1.5% = 3.5 %
```

**Example 2 — Error magnification in a difference.**
Two lengths `a = 100.0 mm` and `b = 99.0 mm`, each `±0.1 mm`. Find the difference and its % error.

```
y = a − b = 1.0 mm
δy = δa + δb = 0.1 + 0.1 = 0.2 mm
% error = (0.2/1.0)×100 = 20 %   (huge — subtraction magnifies error)
```

### ⚠️ Common Traps

1. **Difference errors add, not subtract** — `a − b` has `δy = δa + δb`; never cancel them.
2. **Powers scale the fractional error by n** — `V²` contributes `2·(δV/V)`, not `(δV/V)`.
3. **Limiting vs random combination** — worst-case adds **linearly**; independent random adds in **quadrature** (`√Σ`).
4. **Systematic vs random** — only **systematic** error is correctable by calibration; averaging kills **random**, not systematic.
5. **Relative vs absolute** — for products use *relative*; for sums use *absolute*. Mixing them is a classic slip.
6. **`σ_mean = σ/√n`** — averaging n readings cuts the *random* uncertainty by `√n`, not by `n`.

### 📝 Test (5 MCQ + 3 NAT)

**Q1 (MCQ).** Parallax is an example of a ___ error: (a) gross (b) random (c) systematic (observational) (d) limiting

**Q2 (MCQ).** For `y = a·b/c`, the limiting fractional error is:
(a) `δa/a − δb/b + δc/c` (b) `δa/a + δb/b + δc/c` (c) `δa/a · δb/b · δc/c` (d) `√(...)`

**Q3 (MCQ).** Averaging n independent readings reduces the random error by a factor of:
(a) n (b) √n (c) n² (d) 1

**Q4 (MCQ).** Which error can be eliminated by calibration?
(a) random (b) systematic (c) gross (d) none

**Q5 (MCQ).** For `y = a − b`, the absolute error is:
(a) `δa − δb` (b) `δa + δb` (c) 0 (d) `√(δa²+δb²)` (limiting)

**Q6 (NAT).** `P = I²R`. `I` has 2% and `R` has 1% limiting error. Find limiting % error in P.

**Q7 (NAT).** A resistance `R = V/I` with `V` = ±0.5% and `I` = ±0.8%. Find the limiting % error in R.

**Q8 (NAT).** 100 independent readings have σ = 5 units. Find the standard deviation of the mean.

<details><summary>🔑 Solutions</summary>

**Q1 — (c).** Parallax is an observational **systematic** error.

**Q2 — (b).** Products/quotients: fractional errors add.

**Q3 — (b) √n.** `σ_mean = σ/√n`.

**Q4 — (b) systematic.** Consistent bias is correctable; random is not.

**Q5 — (b) `δa + δb`.** Absolute errors add even in a difference.

**Q6 — 5%.** `δP/P = 2(2%) + 1% = 5%`.

**Q7 — 1.3%.** `δR/R = δV/V + δI/I = 0.5% + 0.8% = 1.3%`.

**Q8 — 0.5.** `σ_mean = 5/√100 = 5/10 = 0.5`.
</details>

---

## 🔧 Electrical Machines: Transformers IV — Three-Phase Connections, Vector Groups & Parallel Operation

### 📖 Concept Deep Dive

Three single-phase transformers (or one 3-phase unit) can be connected in four basic ways. Recall the per-winding relations:
```
Star (Y):  VL = √3·Vph ,  IL = Iph
Delta (Δ): VL = Vph    ,  IL = √3·Iph
```

**Four connections & overall ratio** (turns ratio per phase `= N1/N2 = a`):

| Connection | Line-voltage ratio (HV:LV) | Notes |
|---|---|---|
| **Y-Y** | `a` | Needs neutral/tertiary for 3rd-harmonic; economical at HV |
| **Δ-Δ** | `a` | No phase shift; one unit can be removed (open-Δ) |
| **Y-Δ** | `√3·a` | **step-down**; 30° shift; Δ suppresses 3rd harmonic |
| **Δ-Y** | `a/√3` | **step-up**; 30° shift; Y gives LV neutral for 4-wire |

**Vector groups & phase displacement.** The connection produces a **phase shift** between HV and LV line voltages, expressed in **clock notation** (multiples of 30°): e.g., **Yy0** (0°), **Dd0** (0°), **Yd1** (−30°), **Yd11** (+30°), **Dy11** (+30°). Y-Δ / Δ-Y always give a **±30° (odd-clock)** displacement; Y-Y and Δ-Δ give **0° or 180° (even-clock)**.

**Parallel operation.** Conditions for satisfactory parallel operation of two transformers:
1. **Same voltage ratio** (same turns ratio) — else circulating current.
2. **Same per-unit (percentage) impedance** — for load sharing in proportion to ratings.
3. **Same polarity** (mandatory).
4. **Same phase sequence** (mandatory, 3-φ).
5. **Same phase displacement / vector group** (mandatory, 3-φ) — e.g. cannot parallel Yd1 with Yd11.

**Load sharing.** With the same voltage ratio, the two units share the load **inversely as their per-unit impedances** (on a common base):
```
SA / SB = ZB(pu) / ZA(pu)
(a lower-impedance transformer takes MORE load)
```
The transformer with lower `%Z` can be **overloaded** while the other is under-utilised if the `%Z` values differ.

> 💎 **KEY RESULT** — `Y: VL=√3Vph`; `Δ: IL=√3Iph`. Y-Δ / Δ-Y give a **±30°** shift; parallel units share load **inversely as per-unit impedance** (`SA/SB = ZB_pu/ZA_pu`). Vector group & phase sequence must **match** to parallel.

> 🧠 **MEMORY HOOK** — **"Star lifts Volts (√3·V), Delta lifts Amps (√3·I)."** For parallel: **lower impedance ⇒ larger share** (the "eager" transformer takes more load).

> ⚠️ **TRAP ALERT** — Same **voltage ratio** ≠ same **turns ratio per phase** for Y-Δ vs Δ-Δ — the `√3` matters. You **cannot** parallel an odd-clock (e.g. Yd1) with an even-clock (Yy0) group. Circulating current flows if ratios or vector groups mismatch.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Star relations | `VL = √3 Vph` ; `IL = Iph` |
| Delta relations | `VL = Vph` ; `IL = √3 Iph` |
| Y-Δ line-voltage ratio | `√3·a` (a = per-phase turns ratio) |
| Δ-Y line-voltage ratio | `a/√3` |
| Y-Δ / Δ-Y phase shift | `±30°` |
| Parallel load sharing | `SA/SB = ZB(pu)/ZA(pu)` |
| Circulating current cause | unequal ratio or vector group |

### 🧮 Solved Examples

**Example 1 — Δ-Y step-up ratio.**
A Δ-Y transformer has a per-phase turns ratio `N1/N2 = 1/10` (LV Δ primary, HV Y secondary). Find the line-voltage ratio HV:LV if primary line voltage is 400 V.

```
Primary Δ: Vph = VL = 400 V
Secondary phase voltage = 400 × (10/1) = 4000 V   (per-phase step-up ×10)
Secondary Y line voltage = √3 × 4000 = 6928 V
Line ratio (HV:LV) = 6928/400 = 17.32 = 10√3   ✓ (a/√3 form inverted)
```

**Example 2 — Parallel load sharing.**
Two transformers in parallel: A rated 500 kVA at `%Z = 4%`, B rated 500 kVA at `%Z = 5%`. Total load = 900 kVA. Find each transformer's share (same base, equal ratings).

```
Share ∝ 1/%Z :  A:B = (1/4):(1/5) = 0.25:0.20 = 5:4
Total parts = 9
SA = 900 × 5/9 = 500 kVA   (A hits its rating)
SB = 900 × 4/9 = 400 kVA
A (lower %Z) carries more load — as expected.
```

### ⚠️ Common Traps

1. **√3 in Y-Δ ratio** — the overall line-voltage ratio includes a `√3` factor beyond the turns ratio.
2. **Vector-group compatibility** — cannot parallel different clock groups; the 30° mismatch drives huge circulating current.
3. **Lower %Z takes more load** — sharing is **inverse** to per-unit impedance, not proportional.
4. **Polarity/phase sequence are mandatory** — a reversed polarity causes a dead short.
5. **Y-Y third harmonic** — needs a delta tertiary or neutral path to avoid distorted flux/voltage.
6. **Open-delta (V-V)** — Δ-Δ can run on two units at `1/√3 ≈ 57.7%` of the two-transformer rating.

### 📝 Test (5 MCQ + 3 NAT)

**Q1 (MCQ).** In a star connection, the line current equals:
(a) `√3·Iph` (b) `Iph` (c) `Iph/√3` (d) `3·Iph`

**Q2 (MCQ).** A Y-Δ transformer produces a phase displacement of:
(a) 0° (b) 180° (c) ±30° (d) 90°

**Q3 (MCQ).** For parallel operation, load is shared:
(a) proportional to %Z (b) inversely proportional to %Z (c) equally always (d) by rating only

**Q4 (MCQ).** Which pair of vector groups can be paralleled?
(a) Yd1 & Yd11 (b) Yy0 & Dy11 (c) Dd0 & Dd0 (d) Yd1 & Yy0

**Q5 (MCQ).** Open-delta (V-V) operation delivers what fraction of the two-transformer Δ-Δ rating?
(a) 50% (b) 57.7% (c) 66.7% (d) 86.6%

**Q6 (NAT).** A star winding has phase voltage 240 V. Find the line voltage (V).

**Q7 (NAT).** Two transformers parallel: A `%Z=3%`, B `%Z=6%`, equal ratings. If total load = 600 kVA, find A's share (kVA).

**Q8 (NAT).** A delta winding carries 20 A phase current. Find the line current (A).

<details><summary>🔑 Solutions</summary>

**Q1 — (b) `Iph`.** In star, line current = phase current.

**Q2 — (c) ±30°.** Y-Δ / Δ-Y give odd-clock ±30° shift.

**Q3 — (b) inversely proportional to %Z.**

**Q4 — (c) Dd0 & Dd0.** Same vector group (and same clock) can parallel.

**Q5 — (b) 57.7%.** `1/√3 = 0.577` of the two-unit rating.

**Q6 — 415.7 V.** `VL = √3 × 240 = 415.7 V`.

**Q7 — 400 kVA.**
```
Share ∝ 1/%Z : A:B = (1/3):(1/6) = 2:1
SA = 600 × 2/3 = 400 kVA ;  SB = 200 kVA
```

**Q8 — 34.6 A.** `IL = √3 × 20 = 34.64 A`.
</details>

---

## 🔧 Power Electronics: Thyristor II — Turn-On Methods, Gate Characteristics, dv/dt & di/dt Protection, Snubbers

### 📖 Concept Deep Dive

**Turn-on methods of an SCR:**
1. **Forward-voltage (breakover) triggering** — anode voltage reaches `VBO`; **destructive/uncontrolled**, avoided in practice.
2. **Gate triggering** — the normal method; a gate current pulse turns the SCR on at a **much lower** forward voltage. More `IG` ⇒ lower required forward voltage.
3. **dv/dt triggering** — a fast-rising anode voltage injects **capacitive current** `i = Cj·(dv/dt)` through junction `J2`, which can **falsely turn on** the SCR.
4. **Temperature triggering** — high junction temperature raises leakage; can self-trigger.
5. **Light triggering** — used in **LASCR** (light-activated SCR), common in HVDC valves.

**Gate characteristics.** The gate `Vg–Ig` curve lies between a **minimum** locus (below which triggering is unreliable) and **maximum** limits (gate power/voltage/current ratings). A **gate drive source** `Es` with series `Rs` sets a **load line**:
```
Es = Vg + Ig·Rs        (gate source load line)
Operating point = intersection of load line with the Vg–Ig curve,
kept inside the safe area:  Vg_min < Vg < Vg_max,  Pg ≤ Pg(max)
```

**di/dt protection.** At turn-on, conduction spreads from the gate region outward; if anode current rises too fast, **local hot spots** destroy the device. A **series inductor `L`** limits the rate:
```
di/dt = Vs / L     ⇒   L ≥ Vs /(di/dt)_max
```

**dv/dt protection & snubber.** To stop false `dv/dt` turn-on, an **RC snubber** is connected **across** the SCR. The capacitor `Cs` absorbs the fast voltage step (limits `dv/dt`); the resistor `Rs` limits the **capacitor discharge current** through the SCR at turn-on:
```
At turn-on, snubber discharge current peak ≈ Vs/Rs   (Rs limits it)
Cs limits the reapplied dv/dt across the device.
Typical initial dv/dt ≈ Vs/(Rs·Cs)  (order-of-magnitude; verify with design)
```
Snubber design trades off: **larger Cs** ⇒ lower dv/dt but **higher discharge current** (needs larger Rs); Rs also damps the L-C ringing.

> 💎 **KEY RESULT** — Gate is the normal turn-on; `di/dt` limited by **series L** (`di/dt = Vs/L`), `dv/dt` limited by an **RC snubber across the SCR** (Cs limits dv/dt, Rs limits discharge current `≈ Vs/Rs`).

> 🧠 **MEMORY HOOK** — **"L in series for di/dt, C across for dv/dt."** Series inductor slows current rise; parallel capacitor slows voltage rise.

> ⚠️ **TRAP ALERT** — `dv/dt` triggering is **capacitive** (`i = Cj·dv/dt`), not thermal. The snubber `Rs` is there to **limit the capacitor's discharge current** into the SCR at turn-on — without it, `Cs` would dump a huge spike. Breakover triggering is **not** a normal turn-on method.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Gate source load line | `Es = Vg + Ig·Rs` |
| dv/dt capacitive current | `i = Cj·(dv/dt)` |
| di/dt limit (series L) | `di/dt = Vs/L` ⇒ `L ≥ Vs/(di/dt)max` |
| Snubber discharge current | `I_peak ≈ Vs/Rs` |
| Snubber dv/dt (approx) | `dv/dt ≈ Vs/(Rs·Cs)` (verify) |

### 🧮 Solved Examples

**Example 1 — di/dt limiting inductor.**
An SCR circuit has supply `Vs = 200 V`; the device rated `(di/dt)max = 40 A/µs`. Find the minimum series inductance.

```
L ≥ Vs/(di/dt)max = 200 /(40 A/µs) = 200/(40×10⁶ A/s)
  = 5 × 10⁻⁶ H = 5 µH
```

**Example 2 — Snubber discharge current.**
A snubber with `Rs = 20 Ω` is across an SCR on a `400 V` bus. Estimate the peak discharge current through the SCR when it turns on with the snubber capacitor charged to 400 V.

```
I_peak ≈ Vs/Rs = 400/20 = 20 A
(Rs must be chosen so this peak stays within the SCR's surge rating.)
```

### ⚠️ Common Traps

1. **Which element for which rate** — **series L** for `di/dt`; **shunt RC (snubber)** for `dv/dt`. Swapping them is a classic error.
2. **Snubber Rs purpose** — limits **capacitor discharge current** at turn-on (and damps ringing), not the dv/dt itself (that's Cs).
3. **dv/dt is capacitive** — false turn-on comes from `Cj·dv/dt`, independent of gate signal.
4. **Breakover triggering** — real but **destructive**; not a controlled turn-on method.
5. **Gate over-drive** — exceeding gate power/voltage limits damages the gate; keep inside the safe Vg–Ig area.
6. **LASCR** — light triggering suits **series HVDC valves** (isolation), not a general default.

### 📝 Test (5 MCQ + 3 NAT)

**Q1 (MCQ).** The normal, controlled way to turn on an SCR is:
(a) breakover voltage (b) gate triggering (c) dv/dt (d) temperature

**Q2 (MCQ).** A series inductor in an SCR circuit protects against high:
(a) dv/dt (b) di/dt (c) gate current (d) reverse voltage

**Q3 (MCQ).** The snubber capacitor across an SCR limits:
(a) di/dt (b) dv/dt (c) holding current (d) gate voltage

**Q4 (MCQ).** False turn-on due to fast anode voltage rise is caused by current through:
(a) the gate (b) junction capacitance (Cj·dv/dt) (c) the load (d) reverse leakage

**Q5 (MCQ).** In an RC snubber, the resistor mainly:
(a) limits capacitor discharge current at turn-on (b) sets holding current (c) raises dv/dt (d) blocks reverse voltage

**Q6 (NAT).** Supply 300 V, `(di/dt)max = 30 A/µs`. Find the minimum series inductance (µH).

**Q7 (NAT).** A snubber resistor is 25 Ω across a 500 V bus. Find the peak discharge current at turn-on (A).

**Q8 (NAT).** A gate source `Es = 12 V`, `Rs = 200 Ω`, and the gate drops `Vg = 2 V` at the operating point. Find the gate current (mA).

<details><summary>🔑 Solutions</summary>

**Q1 — (b) gate triggering.**

**Q2 — (b) di/dt.** Series L limits current rate of rise.

**Q3 — (b) dv/dt.** Cs absorbs the fast voltage step.

**Q4 — (b) junction capacitance.** `i = Cj·(dv/dt)` can trigger J2.

**Q5 — (a).** Rs limits the snubber capacitor's discharge current into the SCR (and damps ringing).

**Q6 — 10 µH.** `L = 300/(30×10⁶) = 10×10⁻⁶ H = 10 µH`.

**Q7 — 20 A.** `I = 500/25 = 20 A`.

**Q8 — 50 mA.** `Ig = (Es − Vg)/Rs = (12 − 2)/200 = 10/200 = 0.05 A = 50 mA`.
</details>

---

### 📊 GATE Tech Coverage Progress

```
Measuring Instruments  ██░░░░░░░░░░░░░░░░░░░  2/21  🔁 Round 4
Electrical Machines    ████░░░░░░░░░░░░░░░░░  4/19  🔁 Round 4
Power Electronics      ████░░░░░░░░░░░░░░░░░  4/18  🔁 Round 4
```

*Next: Measurements → Error analysis II (statistical: mean, σ, probable error); Machines → Transformers V (autotransformer, tap changing, Scott); Power Electronics → Thyristor III (turn-off, commutation, string efficiency).*

> ✅ **Self-check before you close:** Can you (1) state how errors combine for a product vs a difference, (2) give the Y-Δ line-voltage ratio and the parallel-sharing rule, and (3) name the element that limits di/dt vs dv/dt? Re-read any KEY RESULT that felt shaky.
