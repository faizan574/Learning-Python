# ⚡ GATE Technical Revision — Day 87 (2026-10-16)

*Statistics of measurement error, the DC generator's types and voltage build-up, and the single-phase half-wave and semiconverter rectifiers.*

📅 Tech Day 87 · ⏱ ~50 min · 🎯 Measurements + Machines + Power Electronics

> Today: **statistical error analysis** (mean, standard deviation, probable error, the Gaussian curve), **DC generators** (types, characteristics, voltage build-up, critical resistance), and **single-phase half-wave & half-controlled rectifiers** (R, RL, RLE loads).

---

## 🔧 Measuring Instruments: Error Analysis II — Statistical Analysis

### 📖 Concept Deep Dive

When a measurement is repeated many times, **random errors** scatter the readings; **statistics** extracts the best estimate and its uncertainty.

**Mean (best estimate).** The **arithmetic mean** is the most probable value for random errors:
```
x̄ = (Σxi)/n
```

**Deviation & average deviation.** The deviation of a reading is `d = xi − x̄`; the **average (mean) deviation**:
```
Davg = (Σ|di|)/n
```

**Standard deviation (σ).** The root-mean-square deviation — the key measure of dispersion:
```
σ = √( Σdi² / n )        (for a large set / population)
σ = √( Σdi² / (n − 1) )  (for a small sample — Bessel's correction)
Variance = σ²
```

**Probable error.** For a Gaussian distribution, the **probable error of a single reading**:
```
r = 0.6745 · σ
```
(half the readings lie within ±r of the mean). The **standard error (standard deviation) of the mean** falls with more readings:
```
σ_mean = σ / √n
```
— so averaging n readings reduces the uncertainty by √n.

**Gaussian (normal) distribution.** Random errors follow the bell curve, symmetric about the mean. The area (fraction of readings) within multiples of σ:
```
±1σ → 68.27%     ±2σ → 95.45%     ±3σ → 99.73%
```

So ~68% of readings lie within one standard deviation — the basis of confidence intervals.

| Quantity | Formula | Meaning |
|---|---|---|
| Mean | `x̄ = Σxi/n` | best estimate |
| Std deviation | `σ = √(Σd²/n)` | dispersion (RMS) |
| Probable error | `r = 0.6745σ` | 50% lie within ±r |
| Std error of mean | `σ/√n` | uncertainty of mean |
| ±1σ / ±2σ / ±3σ | 68.27 / 95.45 / 99.73 % | normal-curve areas |

> 💎 **KEY RESULT** — `σ = √(Σd²/n)`; **probable error `r = 0.6745σ`**; **standard error of mean = σ/√n**. Normal curve: **±1σ = 68.27%, ±2σ = 95.45%, ±3σ = 99.73%**.

> 🧠 **MEMORY HOOK** — "**68-95-99.7 for 1-2-3 σ; probable error = 0.6745σ; averaging cuts error by √n.**"

> ⚠️ **TRAP ALERT** — Use **(n − 1)** in the denominator for a **small sample** (Bessel). The **probable error coefficient is 0.6745** (not 0.5). Averaging reduces the **mean's** error by **√n**, not n.

### 📐 Formula Sheet

| Quantity | Formula | Notes |
|---|---|---|
| Arithmetic mean | `x̄ = Σxi/n` | — |
| Average deviation | `Σ|di|/n` | di = xi − x̄ |
| Standard deviation | `σ = √(Σdi²/n)` | population |
| Sample σ | `√(Σdi²/(n−1))` | Bessel |
| Probable error (one) | `r = 0.6745σ` | — |
| Std error of mean | `σ/√n` | — |

### 🧮 Solved Examples

**Example 1 — Mean and standard deviation.** Five readings: 10.1, 10.2, 9.9, 10.0, 10.3. Find the mean and the (population) standard deviation.

```
x̄ = (10.1+10.2+9.9+10.0+10.3)/5 = 50.5/5 = 10.1
deviations d: 0.0, 0.1, −0.2, −0.1, 0.2
Σd² = 0 + 0.01 + 0.04 + 0.01 + 0.04 = 0.10
σ = √(0.10/5) = √0.02 = 0.1414
```

**Mean = 10.1, σ ≈ 0.141.** ✔

**Example 2 — Probable error & mean error.** For the data in Example 1 (σ = 0.141, n = 5), find the probable error of one reading and the standard error of the mean.

```
r = 0.6745 × σ = 0.6745 × 0.141 = 0.0954 ≈ 0.095
σ_mean = σ/√n = 0.141/√5 = 0.141/2.236 = 0.0632 ≈ 0.063
```

**Probable error ≈ 0.095; standard error of the mean ≈ 0.063.** ✔

### ⚠️ Common Traps
1. **Small sample → divide by (n − 1)** (Bessel's correction).
2. **Probable error r = 0.6745σ** (not 0.5σ).
3. **σ of the mean = σ/√n** — averaging improves by √n, not n.
4. **±2σ ≈ 95%** (95.45%), **±3σ ≈ 99.7%** — memorise the areas.
5. **Variance = σ²** (don't report variance when asked for σ).
6. **Mean is the best estimate only for random (not systematic) errors.**

### 📝 Test (8 questions)

**Q1 (MCQ).** The probable error of a single observation is:
(a) 0.5σ  (b) 0.6745σ  (c) σ  (d) 1.96σ

**Q2 (MCQ).** The fraction of readings within ±1σ of the mean (Gaussian) is about:
(a) 50%  (b) 68.27%  (c) 95.45%  (d) 99.73%

**Q3 (MCQ).** The standard error of the mean of n readings is:
(a) σ·√n  (b) σ/√n  (c) σ/n  (d) σ·n

**Q4 (MCQ).** For a small sample, the standard deviation uses a denominator of:
(a) n  (b) n − 1  (c) n + 1  (d) 2n

**Q5 (MCQ).** Variance is:
(a) σ  (b) σ²  (c) √σ  (d) 0.6745σ

**Q6 (NAT).** Four readings: 5.0, 5.2, 4.8, 5.0. Find the mean.

**Q7 (NAT).** A data set has σ = 0.4. Find the probable error of one reading (3 decimals).

**Q8 (NAT).** σ = 0.6 for a set of 9 readings. Find the standard error of the mean.

<details><summary>🔑 Solutions</summary>

**Q1 → (b).** r = 0.6745σ.

**Q2 → (b).** 68.27%.

**Q3 → (b).** σ/√n.

**Q4 → (b).** n − 1 (Bessel).

**Q5 → (b).** σ².

**Q6.**
```
x̄ = (5.0+5.2+4.8+5.0)/4 = 20.0/4 = 5.0
```
**Mean = 5.0.**

**Q7.**
```
r = 0.6745 × 0.4 = 0.2698 ≈ 0.270
```
**r ≈ 0.270.**

**Q8.**
```
σ_mean = σ/√n = 0.6/√9 = 0.6/3 = 0.2
```
**σ_mean = 0.2.**

</details>

---

## 🔧 Electrical Machines: DC Generators — Types, Characteristics & Voltage Build-Up

### 📖 Concept Deep Dive

A **DC generator** converts mechanical energy to DC. They are classified by **how the field is excited**.

**Types.**
- **Separately excited** — field fed from an external DC source.
- **Self-excited** — field fed from the machine's own output:
  - **Shunt** — field in parallel with the armature (`Ish = V/Rsh`).
  - **Series** — field in series with the armature (carries full load current).
  - **Compound** — both shunt and series fields: **cumulative** (fields aid) or **differential** (fields oppose); and **long-shunt / short-shunt** by connection. Compounding can be **over-, level- or under-compounded**.

**Circuit relations (shunt).**
```
Ia = IL + Ish ,   Ish = V/Rsh
Eg = V + Ia·Ra (+ brush drop)      (generator)
```

**Characteristics.**
- **Open-circuit / magnetisation characteristic (OCC)** — `Eg vs If` at constant speed; shows the residual EMF at If = 0 and saturation at high If.
- **Internal characteristic** — `Eg vs IL` (after armature reaction).
- **External characteristic** — `V vs IL`: the **shunt** generator **droops** (voltage falls with load); the **series** rises; the **cumulative compound** can hold voltage nearly level.

**Voltage build-up (self-excited shunt).** For the voltage to build up:
1. There must be **residual magnetism** (gives a small initial EMF).
2. The **field connection must be correct** (field current must reinforce residual flux, not oppose it).
3. The **field-circuit resistance must be below the critical resistance**.

The build-up follows the OCC: the operating point is where the **field-resistance line** intersects the OCC. The **critical resistance** is the slope of the tangent to the OCC through the origin — **above it the machine fails to build up**. At a fixed field resistance, the **critical speed** is the speed below which build-up fails.

| Type | Field connection | External characteristic |
|---|---|---|
| Separately excited | external source | slightly drooping |
| Shunt | parallel (V/Rsh) | drooping |
| Series | series (full Ia) | rising |
| Cumulative compound | both aiding | level/over |

> 💎 **KEY RESULT** — Shunt generator: `Eg = V + IaRa`, `Ish = V/Rsh`, `Ia = IL + Ish`. Self-excited build-up needs **residual magnetism + correct field polarity + Rfield < critical resistance**. **Critical resistance = slope of OCC tangent through the origin**.

> 🧠 **MEMORY HOOK** — "**Shunt droops, series rises, cumulative compound stays level.**" Build-up: "**Residual + right polarity + resistance below critical.**"

> ⚠️ **TRAP ALERT** — A self-excited generator **won't build up** if (a) no residual magnetism, (b) field reversed, or (c) field resistance **above critical**. The **critical resistance is a slope** (the OCC tangent at origin), not a fixed ohm value.

### 📐 Formula Sheet

| Quantity | Formula | Notes |
|---|---|---|
| Generated EMF | `Eg = PφZN/(60A)` | — |
| Shunt field current | `Ish = V/Rsh` | — |
| Armature current (shunt) | `Ia = IL + Ish` | — |
| EMF balance (gen) | `Eg = V + IaRa + Vbrush` | — |
| Critical resistance | slope of OCC tangent at origin | build-up limit |
| Build-up conditions | residual + polarity + R < Rc | — |

### 🧮 Solved Examples

**Example 1 — Shunt generator.** A shunt generator delivers `IL = 50 A` at `V = 220 V`. Field resistance `Rsh = 110 Ω`, armature resistance `Ra = 0.1 Ω`. Find the generated EMF (ignore brush drop).

```
Ish = V/Rsh = 220/110 = 2 A
Ia = IL + Ish = 50 + 2 = 52 A
Eg = V + Ia·Ra = 220 + 52×0.1 = 220 + 5.2 = 225.2 V
```

**Eg = 225.2 V.** ✔

**Example 2 — Critical resistance (concept).** A shunt generator's OCC gives 200 V at a field current of 2 A (near the lower, straight portion). Estimate the critical field resistance from the straight-line part.

```
Critical resistance ≈ slope of OCC straight portion = E/If (through origin)
  = 200 V / 2 A = 100 Ω
If the actual field resistance exceeds ~100 Ω, the machine fails to build up.
```

**Critical resistance ≈ 100 Ω** (from the initial straight part of the OCC). ✔

### ⚠️ Common Traps
1. **Generator: Eg = V + IaRa** (EMF exceeds terminal V); motor is V = Eb + IaRa.
2. **Ia = IL + Ish** for a shunt generator (field current adds).
3. **Build-up fails without residual magnetism / correct polarity / R below critical.**
4. **Series generator has a rising characteristic**; shunt droops.
5. **Critical resistance = OCC tangent slope at origin** (a slope, not a fixed value).
6. **Over/level/under-compounding** depends on the series-field strength.

### 📝 Test (8 questions)

**Q1 (MCQ).** In a shunt generator, the armature current is:
(a) IL − Ish  (b) IL + Ish  (c) IL only  (d) Ish only

**Q2 (MCQ).** For a DC generator, the EMF equation relative to terminal voltage is:
(a) Eg = V − IaRa  (b) Eg = V + IaRa  (c) Eg = V  (d) Eg = IaRa

**Q3 (MCQ).** A self-excited generator fails to build up if the field resistance is:
(a) below critical  (b) above critical  (c) zero  (d) equal to armature R

**Q4 (MCQ).** The critical resistance is the:
(a) armature resistance  (b) slope of OCC tangent through origin  (c) load resistance  (d) brush resistance

**Q5 (MCQ).** Which generator has a rising external characteristic?
(a) shunt  (b) series  (c) separately excited  (d) differential compound

**Q6 (NAT).** A shunt generator: V = 250 V, IL = 40 A, Rsh = 125 Ω, Ra = 0.2 Ω. Find Eg (V).

**Q7 (NAT).** For the Q6 machine, find the field current Ish (A).

**Q8 (NAT).** An OCC straight portion gives 180 V at 1.5 A field current. Estimate the critical resistance (Ω).

<details><summary>🔑 Solutions</summary>

**Q1 → (b).** Ia = IL + Ish.

**Q2 → (b).** Eg = V + IaRa.

**Q3 → (b).** Above critical resistance.

**Q4 → (b).** Slope of OCC tangent through origin.

**Q5 → (b).** Series.

**Q6.**
```
Ish = 250/125 = 2 A; Ia = 40 + 2 = 42 A
Eg = 250 + 42×0.2 = 250 + 8.4 = 258.4 V
```
**Eg = 258.4 V.**

**Q7.**
```
Ish = V/Rsh = 250/125 = 2 A
```
**Ish = 2 A.**

**Q8.**
```
Rc ≈ 180/1.5 = 120 Ω
```
**Rc ≈ 120 Ω.**

</details>

---

## 🔧 Power Electronics: Single-Phase Half-Wave & Half-Controlled Rectifiers

### 📖 Concept Deep Dive

Starting the controlled-rectifier family: the **1-φ half-wave** controlled rectifier and the **1-φ semiconverter** (half-controlled).

**Single-phase half-wave controlled rectifier (R load).** One SCR conducts from firing angle `α` to π each cycle. Average output:

```
Vo(avg) = (Vm/2π)·(1 + cos α)      [R load]
```

At `α = 0` it reduces to `Vm/π = 0.318 Vm` (uncontrolled half-wave). Output has large ripple and a DC component in the supply (a drawback).

**RL load.** With inductance, current continues past π (the inductor sustains it) until the **extinction angle β**, where the current reaches zero. The SCR conducts from α to β. Adding a **freewheeling diode (FD)** across the load clamps the output to zero during the negative half (preventing negative output and improving the waveform).

**RLE load (e.g., battery/motor back-EMF).** Current flows only while `Vm sin ωt > E`; the conduction window shrinks and the load EMF `E` sets the current `(vo − E)/R`.

**Single-phase semiconverter (half-controlled full bridge).** Two SCRs + two diodes (or two SCRs + a freewheeling diode). Its average output for continuous conduction:

```
Vo(avg) = (Vm/π)·(1 + cos α)       [semiconverter]
```

Because of the inherent freewheeling action, the **output can never go negative** (`Vo ≥ 0`) — so a semiconverter **cannot invert** (unlike the full converter `Vo = (2Vm/π)cosα`). Range of α: 0 to π, output from `2Vm/π` down to 0.

| Converter | Vo(avg) | Range |
|---|---|---|
| 1-φ half-wave (R) | `(Vm/2π)(1+cosα)` | 0 to Vm/π |
| 1-φ semiconverter | `(Vm/π)(1+cosα)` | 0 to 2Vm/π |
| 1-φ full converter (compare) | `(2Vm/π)cosα` | −2Vm/π to +2Vm/π |

> 💎 **KEY RESULT** — Half-wave (R): `Vo = (Vm/2π)(1+cosα)`. **Semiconverter: `Vo = (Vm/π)(1+cosα)`, always ≥ 0 (no inversion)**. Full converter (for contrast): `(2Vm/π)cosα`.

> 🧠 **MEMORY HOOK** — "**Half-wave: Vm/2π; Semi: Vm/π (1+cosα); Full: 2Vm/π·cosα.**" Semiconverter = "(1+cosα), never negative."

> ⚠️ **TRAP ALERT** — The **semiconverter output is always ≥ 0** (cannot invert); only the **full converter** can go negative (α > 90°). Half-wave uses `Vm/2π`, semiconverter `Vm/π` — note the factor-of-2 difference.

### 📐 Formula Sheet

| Quantity | Formula | Notes |
|---|---|---|
| Half-wave (R) avg | `Vo = (Vm/2π)(1+cosα)` | one SCR |
| Semiconverter avg | `Vo = (Vm/π)(1+cosα)` | half-controlled |
| Full converter avg | `Vo = (2Vm/π)cosα` | contrast |
| α = 0 half-wave | `Vm/π = 0.318 Vm` | uncontrolled |
| Peak voltage | `Vm = √2·Vrms` | convert first |

### 🧮 Solved Examples

**Example 1 — Half-wave controlled (R load).** A 1-φ half-wave controlled rectifier is fed from 230 V (RMS) and fires at α = 60°, R load. Find the average output voltage.

```
Vm = √2 × 230 = 325.3 V
Vo = (Vm/2π)(1 + cos α) = (325.3/6.2832)(1 + cos60°)
   = 51.77 × (1 + 0.5) = 51.77 × 1.5 = 77.66 V
```

**Vo ≈ 77.7 V.** ✔

**Example 2 — Semiconverter.** A 1-φ semiconverter from 230 V (RMS) fires at α = 90° (continuous conduction). Find the average output.

```
Vm = √2 × 230 = 325.3 V
Vo = (Vm/π)(1 + cos α) = (325.3/3.1416)(1 + cos90°)
   = 103.5 × (1 + 0) = 103.5 V
```

**Vo ≈ 103.5 V** (and it stays ≥ 0 for all α — the semiconverter cannot invert). ✔

### ⚠️ Common Traps
1. **Half-wave uses Vm/2π**, semiconverter **Vm/π** — don't drop the factor of 2.
2. **Semiconverter Vo ≥ 0 always** — no inversion.
3. **Vm is peak** — convert 230 V RMS → 325 V first.
4. **RL load: conduction extends to β** (extinction angle); FD clamps negative output.
5. **RLE load conducts only when Vm sinωt > E.**
6. **Full converter (2Vm/π)cosα** is the one that inverts for α > 90°.

### 📝 Test (8 questions)

**Q1 (MCQ).** The average output of a 1-φ half-wave controlled rectifier (R load) is:
(a) `(Vm/π)(1+cosα)`  (b) `(Vm/2π)(1+cosα)`  (c) `(2Vm/π)cosα`  (d) `Vm cosα`

**Q2 (MCQ).** A 1-φ semiconverter output voltage:
(a) can be negative  (b) is always ≥ 0  (c) equals full converter  (d) is independent of α

**Q3 (MCQ).** A freewheeling diode across an RL load in a half-wave rectifier:
(a) allows negative output  (b) clamps output to ≥ 0 and freewheels current  (c) blocks conduction  (d) raises α

**Q4 (MCQ).** The extinction angle β in an RL-load rectifier is where:
(a) the SCR fires  (b) the load current reaches zero  (c) α = 0  (d) voltage peaks

**Q5 (MCQ).** Which converter can operate as an inverter (α > 90°)?
(a) half-wave  (b) semiconverter  (c) full converter  (d) none

**Q6 (NAT).** A 1-φ semiconverter: Vm = 300 V, α = 60°. Find Vo (V, 1 decimal).

**Q7 (NAT).** A 1-φ half-wave controlled rectifier: Vm = 310 V, α = 90°. Find Vo (V, 2 decimals).

**Q8 (NAT).** A 1-φ semiconverter from 230 V RMS at α = 0. Find Vo (V, 1 decimal).

<details><summary>🔑 Solutions</summary>

**Q1 → (b).** `(Vm/2π)(1+cosα)`.

**Q2 → (b).** Always ≥ 0.

**Q3 → (b).** Clamps output ≥ 0 and freewheels inductive current.

**Q4 → (b).** Load current reaches zero.

**Q5 → (c).** Full converter.

**Q6.**
```
Vo = (Vm/π)(1+cosα) = (300/3.1416)(1+cos60°) = 95.49×1.5 = 143.2 V
```
**Vo ≈ 143.2 V.**

**Q7.**
```
Vo = (Vm/2π)(1+cosα) = (310/6.2832)(1+cos90°) = 49.34×1 = 49.34 V
```
**Vo ≈ 49.34 V.**

**Q8.**
```
Vm = √2×230 = 325.3 V
Vo = (Vm/π)(1+cos0°) = (325.3/3.1416)(2) = 103.5×2 = 207.0 V
```
**Vo ≈ 207.0 V.**

</details>

---

## 📊 Progress

```
Measuring Instruments  [███░░░░░░░░░░░░░░░░░░]  Round 5 · topic  3/22 (Error analysis II)
Electrical Machines    [███████░░░░░░░░░░░░░░]  Round 5 · topic  7/20 (DC generators)
Power Electronics       [███████░░░░░░░░░░░░░░]  Round 5 · topic  7/20 (1-φ half-wave/semi)
```

- **Section A (Measurements):** round 5 at statistical error analysis. 🔄
- **Section B (Machines):** round 5 into DC generators. 🔄
- **Section C (Power Electronics):** round 5 at single-phase controlled rectifiers. 🔄

> 🎯 **Today's three one-liners:** (1) **σ = √(Σd²/n); r = 0.6745σ; σ_mean = σ/√n; 68-95-99.7 for 1-2-3σ.** (2) **Shunt gen Eg = V+IaRa; build-up needs residual + polarity + R<critical.** (3) **Half-wave (Vm/2π)(1+cosα); semiconverter (Vm/π)(1+cosα), always ≥ 0.**

*Correctness over length — verify any value marked "verify" before the exam.*
