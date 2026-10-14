# ⚡ GATE Technical Revision — Day 85 (2026-10-14)

*Measurement fundamentals open round 5, the autotransformer's copper saving and the Scott connection, and the SCR's turn-off, commutation and series/parallel string efficiency.*

📅 Tech Day 85 · ⏱ ~50 min · 🎯 Measurements + Machines + Power Electronics

> Today: **measurement characteristics** (accuracy vs precision, static/dynamic, standards & calibration) as Section A begins round 5; **autotransformers, tap changing, inrush, cooling & Scott connection**; and **thyristor turn-off, commutation (natural vs forced) and string efficiency**.

---

## 🔧 Measuring Instruments: Basics — Static & Dynamic Characteristics, Standards & Calibration

### 📖 Concept Deep Dive

Every measurement is judged by how faithfully the instrument reproduces the true value — described by its **static** (steady-input) and **dynamic** (time-varying-input) characteristics.

**Static characteristics.**
- **Accuracy** — closeness of the reading to the **true value** (often stated as ±% of full-scale or ±% of reading).
- **Precision** — **reproducibility/consistency** of repeated readings (a precise instrument may still be inaccurate — a systematic offset).
- **Resolution** — the **smallest input change** that produces a detectable output change.
- **Sensitivity** — the **ratio of output change to input change**, `S = Δout/Δin` (the slope of the calibration curve); its reciprocal is the **deflection factor**.
- **Linearity** — closeness of the calibration curve to a straight line.
- **Drift** — slow change in output with no input change (**zero drift**, **span/sensitivity drift**), caused by temperature, ageing, etc.
- **Threshold** (minimum input for any output), **dead zone**, **hysteresis**, and **reproducibility** round out the set.

**Accuracy vs precision** is the classic distinction: accuracy = *correctness*; precision = *repeatability*. High precision + systematic error = consistently wrong.

**Dynamic characteristics** (for time-varying inputs):
- **Speed of response / measuring lag** — how fast the instrument follows the input.
- **Fidelity** and **dynamic error** — how faithfully the waveform is reproduced.
- Instruments are modelled as **first-order** (one time constant `τ`, step response `1 − e^(−t/τ)`) or **second-order** (natural frequency `ωn`, damping ratio `ζ`).

**Errors.**
- **Gross** (human/observational mistakes), **systematic** (instrumental, environmental, observational — *repeatable*, correctable), and **random** (statistical scatter, reduced by averaging).

**Standards & calibration.** Measurement standards form a hierarchy: **international → primary → secondary → working** standards. **Calibration** compares an instrument against a higher standard to establish accuracy and **traceability**.

| Term | Meaning |
|---|---|
| Accuracy | closeness to true value |
| Precision | reproducibility of readings |
| Resolution | smallest detectable change |
| Sensitivity | `Δout/Δin` |
| Drift | output change with no input change |

> 💎 **KEY RESULT** — **Accuracy = correctness; Precision = repeatability.** Sensitivity `S = Δout/Δin`. Accuracy as **±% of full-scale** means the absolute error is largest (in relative terms) at **low readings**.

> 🧠 **MEMORY HOOK** — "**Accurate = near the bullseye; Precise = tight cluster (maybe off-centre).**" Systematic = fixable, random = averaged out.

> ⚠️ **TRAP ALERT** — A **precise** instrument is not necessarily **accurate** (a constant systematic error gives tight but wrong readings). And **±% of full-scale** accuracy implies a **larger % error at small readings** — so use an instrument near full scale for best relative accuracy.

### 📐 Formula Sheet

| Quantity | Formula | Notes |
|---|---|---|
| Sensitivity | `S = Δoutput/Δinput` | slope |
| Deflection factor | `1/S` | reciprocal |
| Static error | `e = Am − At` | measured − true |
| Relative error | `εr = (Am − At)/At` | fractional |
| Accuracy (% FSD) | `e = (±%/100)·FSD` | absolute |
| First-order step | `y(t) = y∞(1 − e^(−t/τ))` | lag |

### 🧮 Solved Examples

**Example 1 — % of full-scale error.** A voltmeter has a range of 0–100 V with an accuracy of **±1% of full-scale**. Find the possible absolute error, and the relative error when reading **25 V**.

```
Absolute error = ±(1/100)×100 V = ±1 V  (same at any reading)
At 25 V: relative error = ±1/25 = ±4%
```

**Absolute error ±1 V; at 25 V the relative error is ±4%** (worse at low readings). ✔

**Example 2 — First-order lag.** A first-order thermometer has a time constant `τ = 5 s`. What fraction of a step change has it indicated after 10 s?

```
y/y∞ = 1 − e^(−t/τ) = 1 − e^(−10/5) = 1 − e^(−2)
     = 1 − 0.135 = 0.865 = 86.5%
```

**86.5% of the step is indicated after 10 s (2 time constants).** ✔

### ⚠️ Common Traps
1. **Precision ≠ accuracy** — repeatable can still be wrong.
2. **±% of FSD → larger % error at low readings** (read near full scale).
3. **Systematic errors are correctable**; random errors are reduced by averaging.
4. **Sensitivity is output/input** (slope), not input/output.
5. **Resolution ≠ accuracy** — fine resolution doesn't guarantee correctness.
6. **After 1τ a first-order system reaches 63.2%**, after 5τ ≈ 99.3% (not instantaneous).

### 📝 Test (8 questions)

**Q1 (MCQ).** Closeness of a reading to the true value is:
(a) precision  (b) accuracy  (c) resolution  (d) sensitivity

**Q2 (MCQ).** Reproducibility of repeated readings is:
(a) accuracy  (b) precision  (c) drift  (d) threshold

**Q3 (MCQ).** The smallest input change that gives a detectable output is the:
(a) sensitivity  (b) resolution  (c) span  (d) range

**Q4 (MCQ).** Errors reduced by taking many readings and averaging are:
(a) systematic  (b) gross  (c) random  (d) instrumental

**Q5 (MCQ).** For best relative accuracy with a ±% FSD instrument, read:
(a) near zero  (b) near full scale  (c) at mid-scale only  (d) anywhere

**Q6 (NAT).** A 0–50 A ammeter has ±2% FSD accuracy. Find the relative error (%) when reading 10 A.

**Q7 (NAT).** A first-order instrument with τ = 2 s: find the % of a step indicated after 4 s (1 decimal).

**Q8 (NAT).** An instrument output changes 8 mV for a 2 °C input change. Find the sensitivity in mV/°C.

<details><summary>🔑 Solutions</summary>

**Q1 → (b).** Accuracy.

**Q2 → (b).** Precision.

**Q3 → (b).** Resolution.

**Q4 → (c).** Random errors.

**Q5 → (b).** Near full scale.

**Q6.**
```
Absolute error = 2% × 50 = 1 A
At 10 A: relative = 1/10 = 10%
```
**10%.**

**Q7.**
```
y/y∞ = 1 − e^(−4/2) = 1 − e^(−2) = 1 − 0.135 = 0.865 = 86.5%
```
**86.5%.**

**Q8.**
```
S = Δout/Δin = 8 mV / 2 °C = 4 mV/°C
```
**S = 4 mV/°C.**

</details>

---

## 🔧 Electrical Machines: Transformers V — Autotransformer, Tap Changing, Inrush & Scott Connection

### 📖 Concept Deep Dive

**Autotransformer.** A transformer with a **single tapped winding** shared between primary and secondary (part of the winding is **common**). Unlike a two-winding transformer, power transfers partly by **conduction** (direct electrical connection) and partly by **induction**. For a transformation ratio `k = V2/V1` (with k < 1 for step-down):

```
Weight of copper (auto) / weight (two-winding) = (1 − k)
Saving of copper = k × (copper of two-winding transformer)
VA transferred inductively = (1 − k)·VA ;  conductively = k·VA
```

So the **closer k is to 1** (ratio near unity), the **greater the copper saving** and the smaller/cheaper the unit. Autotransformers also give **lower losses, better regulation and higher efficiency**. The big drawback: **no electrical isolation** — a fault or high voltage can pass directly between windings; used for **small ratios** (starters, voltage regulation, interconnecting HV systems, variacs).

**Tap changing.** To regulate voltage, windings are **tapped**:
- **Off-load (off-circuit) tap changer** — adjusted only when de-energised; cheap.
- **On-load tap changer (OLTC)** — changes taps **while supplying load** (uses a diverter/transition impedance to avoid interruption). Taps are usually on the **HV side** (lower current → easier switching).

**Inrush current.** At switch-on, the **magnetising inrush current** can momentarily be **several times rated current** (worsened by residual flux and unfavourable switching instant). It is rich in **harmonics**, decays over cycles, and flows only on the energised side (no load-side counterpart) — relays must be designed not to trip on it.

**Cooling methods.** Coded by medium and circulation: **ONAN** (oil natural, air natural), **ONAF** (oil natural, air forced), **OFAF** (oil forced, air forced), **ODAF** (oil directed, air forced); dry-type use **AN/AF**. Rising cooling capability raises the MVA rating.

**Scott connection.** Converts **3-phase to 2-phase** (or vice-versa) using two transformers — a **main** (centre-tapped) and a **teaser** (tapped at **86.6% = √3/2**) — historically for 2-phase loads/traction.

**Three-winding transformer.** Adds a **tertiary winding** (often delta) to **suppress third harmonics, supply auxiliary load, or stabilise the neutral**.

| Feature | Key point |
|---|---|
| Autotransformer saving | `(1 − k)` weight ratio; saving = k |
| Isolation | **none** (direct connection) |
| OLTC taps | usually HV side |
| Inrush | several × rated, harmonic-rich |
| Scott teaser tap | 86.6% (√3/2) |

> 💎 **KEY RESULT** — Autotransformer copper weight = `(1 − k)` × two-winding; **saving = k** (ratio near 1 → big saving). **No isolation.** Scott (3-φ → 2-φ) uses an **86.6% teaser** tap. Inrush ≈ several × rated, harmonic-rich.

> 🧠 **MEMORY HOOK** — "**Auto saves copper = k; teaser at 86.6%; OLTC on HV side.**"

> ⚠️ **TRAP ALERT** — The autotransformer's fatal limitation is **no electrical isolation** — don't use it where isolation is required. The copper **saving** is **k** (not 1−k); the **weight ratio** is (1−k).

### 📐 Formula Sheet

| Quantity | Formula | Notes |
|---|---|---|
| Copper weight ratio | `W_auto/W_2w = 1 − k` | k = V2/V1 |
| Copper saving | `= k × (two-winding copper)` | — |
| Inductive VA | `(1 − k)·VA` | transformed |
| Conductive VA | `k·VA` | conducted |
| Scott teaser tap | `0.866 (√3/2)` | 3-φ→2-φ |

### 🧮 Solved Examples

**Example 1 — Autotransformer copper saving.** A 2000/1600 V autotransformer. Find the ratio k, the fraction of copper saved versus a two-winding design, and the inductively transferred fraction of VA.

```
k = V2/V1 = 1600/2000 = 0.8
Copper saving = k = 0.8 = 80% of the two-winding copper
Copper used (weight ratio) = 1 − k = 0.2 (only 20% of two-winding copper)
Inductively transferred VA = (1 − k)·VA = 0.2·VA ;  conductively = 0.8·VA
```

**k = 0.8; 80% copper saved; 20% of VA transferred inductively.** (Near-unity ratio → huge saving — why autotransformers suit small ratios.) ✔

**Example 2 — Inrush magnitude (concept).** Why can switch-on inrush reach ~8–10× rated current while steady no-load current is only ~2–5%?

```
At the worst switching instant (voltage zero) with residual flux, the core flux
can swing to ~2×(peak) + residual, driving the core deep into SATURATION.
In saturation the magnetising inductance collapses, so the current spikes far
above the normal (linear-region) no-load current — hence the large inrush.
```

Steady no-load current is set by the *unsaturated* magnetising reactance; inrush is a *saturation* transient. ✔

### ⚠️ Common Traps
1. **Autotransformer has NO isolation** — a key disadvantage.
2. **Copper saving = k; weight used = (1 − k)** — keep the two straight.
3. **OLTC taps on the HV side** (lower current).
4. **Inrush is a switch-on transient** (saturation), not a steady fault; flows only on the energised side.
5. **Scott teaser tap = 86.6%** (√3/2), main is centre-tapped.
6. **Tertiary (delta) winding** suppresses third harmonics / stabilises neutral.

### 📝 Test (8 questions)

**Q1 (MCQ).** The main disadvantage of an autotransformer is:
(a) high cost  (b) no electrical isolation  (c) poor regulation  (d) high losses

**Q2 (MCQ).** For an autotransformer with ratio k = V2/V1, the copper saving is:
(a) 1 − k  (b) k  (c) 1/k  (d) k²

**Q3 (MCQ).** On-load tap changers are usually placed on the:
(a) LV side  (b) HV side  (c) tertiary  (d) neutral

**Q4 (MCQ).** Transformer magnetising inrush current is:
(a) steady and small  (b) a large harmonic-rich switch-on transient  (c) a fault current  (d) on the load side only

**Q5 (MCQ).** The Scott connection converts:
(a) 2-φ to 1-φ  (b) 3-φ to 2-φ  (c) DC to AC  (d) 3-φ to 6-φ

**Q6 (NAT).** A 1000/800 V autotransformer: find the fraction of copper saved versus a two-winding design (as a decimal).

**Q7 (NAT).** For the Q6 autotransformer, find the fraction of VA transferred conductively.

**Q8 (NAT).** A Scott-connection teaser is tapped at what percentage of the main winding (1 decimal)?

<details><summary>🔑 Solutions</summary>

**Q1 → (b).** No electrical isolation.

**Q2 → (b).** Saving = k.

**Q3 → (b).** HV side (lower current).

**Q4 → (b).** Large harmonic-rich switch-on transient.

**Q5 → (b).** 3-φ to 2-φ.

**Q6.**
```
k = 800/1000 = 0.8 ⇒ copper saving = k = 0.8
```
**0.8 (80%).**

**Q7.**
```
Conductive VA fraction = k = 0.8
```
**0.8.**

**Q8.**
```
Teaser tap = √3/2 = 0.866 = 86.6%
```
**86.6%.**

</details>

---

## 🔧 Power Electronics: Thyristor III — Turn-Off, Commutation & String Efficiency

### 📖 Concept Deep Dive

An SCR, once latched, can only be turned off by **reducing its anode current below the holding current** and keeping it reverse-biased long enough — the subject of **commutation**.

**Turn-off requirement.** After the anode current reaches zero, the device needs a **turn-off time `tq`** (reverse recovery + gate recovery) during which it must stay reverse-biased to regain its forward-blocking ability. The **circuit must provide a turn-off time `tc > tq`**, or the SCR re-fires.

**Commutation types.**
- **Natural (line) commutation** — in **AC circuits**, the supply voltage periodically reverses and drives the anode current to zero on its own (used in **phase-controlled rectifiers, AC regulators, cycloconverters**). No extra components needed — the simplest, cheapest method.
- **Forced commutation** — in **DC circuits** (choppers, inverters) there is no natural zero crossing, so an **auxiliary LC circuit / charged capacitor** forces the current to zero. Classified into **classes A–F** (A = self/resonant, B = resonant, C = complementary, D = auxiliary/impulse, E = external pulse, F = line/AC).

**Ratings.** Key SCR ratings: `VDRM` (repetitive peak off-state forward), `VRRM` (repetitive peak reverse), **average on-state current `ITAV`**, **RMS current `ITRMS`**, **surge current `ITSM`**, **`I²t`** (for fuse coordination), and the **di/dt** and **dv/dt** limits.

**Series operation (for high voltage).** When one SCR can't block the required voltage, several are connected in series. Because devices differ, the voltage does **not** share equally — needing **static equalisation** (parallel voltage-sharing resistors) and **dynamic equalisation** (RC across each). The **string efficiency** measures how well they share:

```
String efficiency (series) = V_string / (n · VDmax)
```

where `n` = number of devices and `VDmax` = rating of one device. It is **< 1**; the **derating factor** `DRF = 1 − string efficiency`.

**Parallel operation (for high current).** SCRs in parallel share current unequally (unequal on-state drops); matched devices and **series inductors / equal-resistance** paths force sharing. The analogous:

```
String efficiency (parallel) = I_string / (n · ITmax)
```

| Concept | Key point |
|---|---|
| Turn-off | need `tc > tq` |
| Natural commutation | AC supply zero crossing |
| Forced commutation | DC; auxiliary LC (classes A–F) |
| Series string | static (R) + dynamic (RC) equalisation |
| String efficiency | `V_string/(n·VDmax) < 1` |

> 💎 **KEY RESULT** — Circuit turn-off time `tc > tq`. **Natural commutation** in AC, **forced commutation** in DC. **String efficiency = V_string/(n·VDmax) < 1**; derating `= 1 − string efficiency`.

> 🧠 **MEMORY HOOK** — "**AC = natural (free); DC = forced (LC needed).**" String efficiency = "actual ÷ (n × one device)" — always less than 100%.

> ⚠️ **TRAP ALERT** — Natural (line) commutation works **only** where the current naturally reverses (AC) — **not** in DC choppers/inverters, which need **forced** commutation. Series strings need **both** static and dynamic voltage equalisation.

### 📐 Formula Sheet

| Quantity | Formula | Notes |
|---|---|---|
| Turn-off condition | `tc > tq` | circuit > device |
| Series string efficiency | `η = V_string/(n·VDmax)` | < 1 |
| Parallel string efficiency | `η = I_string/(n·ITmax)` | < 1 |
| Derating factor | `DRF = 1 − η` | — |
| Natural commutation | AC zero crossing | no components |
| Forced commutation | auxiliary LC (classes A–F) | DC |

### 🧮 Solved Examples

**Example 1 — Series string efficiency.** Four SCRs, each rated 800 V, are connected in series and the string is operated at 2800 V. Find the string efficiency and the derating factor.

```
String efficiency = V_string/(n·VDmax) = 2800/(4 × 800) = 2800/3200 = 0.875 = 87.5%
Derating factor = 1 − 0.875 = 0.125 = 12.5%
```

**String efficiency = 87.5%, derating = 12.5%.** ✔

**Example 2 — Parallel current sharing.** Three SCRs each rated 100 A (on-state) are paralleled to carry a total of 240 A. Find the string efficiency.

```
String efficiency = I_string/(n·ITmax) = 240/(3 × 100) = 240/300 = 0.80 = 80%
```

**String efficiency = 80%** (so 20% derating — matched devices/inductors are needed to raise it). ✔

### ⚠️ Common Traps
1. **tc (circuit) must exceed tq (device)** for reliable turn-off.
2. **Natural commutation = AC only**; DC needs forced commutation.
3. **String efficiency < 100%** always (unequal sharing).
4. **Static equalisation = resistors; dynamic = RC** across each series SCR.
5. **Derating factor = 1 − string efficiency.**
6. **Parallel for current, series for voltage** — don't confuse the purpose.

### 📝 Test (8 questions)

**Q1 (MCQ).** For reliable SCR turn-off, the circuit turn-off time tc must be:
(a) less than tq  (b) greater than tq  (c) equal to tq  (d) zero

**Q2 (MCQ).** Natural (line) commutation is used in:
(a) DC choppers  (b) AC phase-controlled rectifiers  (c) DC inverters  (d) buck converters

**Q3 (MCQ).** Forced commutation is required in:
(a) AC voltage controllers  (b) DC choppers/inverters  (c) line-commutated rectifiers  (d) cycloconverters

**Q4 (MCQ).** SCRs are connected in series mainly to meet a high:
(a) current rating  (b) voltage rating  (c) frequency  (d) gate power

**Q5 (MCQ).** String efficiency of a series/parallel SCR combination is:
(a) always 1  (b) always < 1  (c) always > 1  (d) zero

**Q6 (NAT).** Five SCRs rated 600 V in series operate at 2400 V. Find the string efficiency (%).

**Q7 (NAT).** For Q6, find the derating factor (as a decimal).

**Q8 (NAT).** Four SCRs rated 50 A parallel to carry 160 A. Find the string efficiency (%).

<details><summary>🔑 Solutions</summary>

**Q1 → (b).** tc > tq.

**Q2 → (b).** AC phase-controlled rectifiers (natural zero crossing).

**Q3 → (b).** DC choppers/inverters.

**Q4 → (b).** High voltage rating.

**Q5 → (b).** Always < 1.

**Q6.**
```
η = V_string/(n·VDmax) = 2400/(5×600) = 2400/3000 = 0.80 = 80%
```
**80%.**

**Q7.**
```
DRF = 1 − η = 1 − 0.80 = 0.20
```
**0.20 (20%).**

**Q8.**
```
η = I_string/(n·ITmax) = 160/(4×50) = 160/200 = 0.80 = 80%
```
**80%.**

</details>

---

## 📊 Progress

```
Measuring Instruments  [█░░░░░░░░░░░░░░░░░░░░]  Round 5 · topic  1/22 (Measurement basics) 🔄
Electrical Machines    [█████░░░░░░░░░░░░░░░░]  Round 5 · topic  5/20 (Transformers V)
Power Electronics       [█████░░░░░░░░░░░░░░░░]  Round 5 · topic  5/20 (SCR III)
```

- **Section A (Measurements):** **round 5 started** at measurement fundamentals — all three sections now rolling through round 5 together. 🔄
- **Section B (Machines):** autotransformers / Scott connection. 🔄
- **Section C (Power Electronics):** SCR commutation & string efficiency. 🔄

> 🎯 **Today's three one-liners:** (1) **Accuracy = correct, Precision = repeatable; ±%FSD worse at low readings.** (2) **Auto copper saving = k; weight (1−k); no isolation; Scott teaser 86.6%.** (3) **tc > tq; AC natural / DC forced commutation; string efficiency = actual/(n×device) < 1.**

*All three tech sections are now synchronised in round 5. Correctness over length — verify any value marked "verify" before the exam.*
