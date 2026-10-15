# ⚡ GATE Technical Revision — Day 86 (2026-10-15)

*Error types and how they propagate, the DC machine's EMF/torque and armature reaction, and the TRIAC–DIAC–GTO family with gate-drive and firing circuits.*

📅 Tech Day 86 · ⏱ ~50 min · 🎯 Measurements + Machines + Power Electronics

> Today: **error analysis** (gross/systematic/random, absolute/relative/limiting, propagation in sums & products), **DC machines I** (construction, EMF equation, armature reaction, commutation), and **other power devices & gate drives** (TRIAC, DIAC, GTO, firing/isolation circuits).

---

## 🔧 Measuring Instruments: Error Analysis I — Types, Limiting Errors & Propagation

### 📖 Concept Deep Dive

No measurement is exact; understanding **error types** and how they **combine** is essential GATE material.

**Types of error.**
- **Gross errors** — **human mistakes** (misreading, wrong recording, wrong scale). Minimised by care and multiple observers.
- **Systematic errors** — **consistent, repeatable biases**. Sub-types: **instrumental** (friction, zero offset, loading), **environmental** (temperature, humidity, fields), and **observational** (parallax). They are **correctable** (calibrate, shield, compensate).
- **Random errors** — unpredictable **scatter** from many small fluctuating causes; follow a **Gaussian** distribution and are reduced by **averaging many readings**.

**Error measures.**
```
Absolute error:  e = |Am − At|      (measured − true)
Relative error:  εr = e / At         (fractional)
% error:         = εr × 100
Limiting (guarantee) error: the maximum ± deviation the maker guarantees
```

Instruments are often rated as **±% of full-scale (FSD)** — so the **absolute limiting error is fixed**, and the **relative error grows at low readings** (read near full scale).

**Error propagation (combination of quantities).** For a result computed from several measured quantities:
- **Sum or difference** `y = a ± b`: the **absolute errors add** (worst case):
```
δy = δa + δb   (so for a difference, relative error can blow up if a ≈ b)
```
- **Product or quotient** `y = a·b` or `a/b`: the **relative (fractional) errors add**:
```
δy/y = δa/a + δb/b
```
- **Power** `y = aⁿ`: the relative error is **n times**:
```
δy/y = n·(δa/a)
```

So in **R = V/I**, the % error in R = (% error in V) + (% error in I). In a **difference of two nearly equal numbers**, the relative error is strongly amplified — a key accuracy pitfall.

| Operation | Error rule |
|---|---|
| Sum/difference | absolute errors add (`δy = δa + δb`) |
| Product/quotient | relative errors add (`δy/y = δa/a + δb/b`) |
| Power aⁿ | `δy/y = n·δa/a` |

> 💎 **KEY RESULT** — **Sum/difference → absolute errors add; product/quotient → relative errors add; power n → ×n relative error.** Systematic = correctable bias; random = reduced by averaging.

> 🧠 **MEMORY HOOK** — "**Add (±) → add absolutes; Multiply (×÷) → add relatives; Power → multiply relative by n.**"

> ⚠️ **TRAP ALERT** — For a **difference of nearly equal quantities**, the relative error is **hugely amplified** (small absolute error ÷ small result). And ±% FSD gives a **larger % error at small readings**.

### 📐 Formula Sheet

| Quantity | Formula | Notes |
|---|---|---|
| Absolute error | `e = Am − At` | measured − true |
| Relative error | `εr = e/At` | fractional |
| % error | `εr × 100` | — |
| Sum/difference | `δy = δa + δb` | absolutes add |
| Product/quotient | `δy/y = δa/a + δb/b` | relatives add |
| Power | `δy/y = n·δa/a` | ×n |

### 🧮 Solved Examples

**Example 1 — Product propagation.** Power is computed as `P = V·I`. The voltmeter reads 200 V with ±1% error and the ammeter reads 5 A with ±2% error. Find the limiting % error in P.

```
δP/P = δV/V + δI/I = 1% + 2% = 3%
P = 200 × 5 = 1000 W,  limiting error = ±3% = ±30 W
```

**P = 1000 W ± 3% (±30 W).** ✔

**Example 2 — Power relation.** A resistance is found from `P = I²R` with I measured to ±1.5%. If R is known exactly, find the % error in P due to the current measurement.

```
P = I²R ⇒ δP/P = 2·(δI/I) = 2 × 1.5% = 3%
```

**±3% error in P** (the squared current doubles the current's relative error). ✔

### ⚠️ Common Traps
1. **Sum/difference: add absolute errors**; product/quotient: add **relative** errors.
2. **Difference of near-equal values amplifies relative error** — avoid subtracting close numbers.
3. **Power law multiplies relative error by n** (I² → 2×).
4. **Systematic errors are correctable**; random are averaged out.
5. **±% FSD → larger % error at low readings.**
6. **Limiting error is worst-case** (errors assumed to add, not partially cancel).

### 📝 Test (8 questions)

**Q1 (MCQ).** Parallax while reading a scale is a:
(a) random error  (b) gross/observational error  (c) systematic instrumental error  (d) limiting error

**Q2 (MCQ).** Random errors are best reduced by:
(a) calibration  (b) averaging many readings  (c) shielding  (d) zero adjustment

**Q3 (MCQ).** For y = a·b, the relative error in y is:
(a) `δa + δb`  (b) `δa/a + δb/b`  (c) `δa/a − δb/b`  (d) `(δa·δb)/(ab)`

**Q4 (MCQ).** For a sum y = a + b, the errors combine as:
(a) relative errors add  (b) absolute errors add  (c) errors subtract  (d) no change

**Q5 (MCQ).** In P = I²R, a 2% error in I causes a P error of about:
(a) 1%  (b) 2%  (c) 4%  (d) 8%

**Q6 (NAT).** R = V/I; V has ±1% and I has ±1.5% error. Find the % limiting error in R.

**Q7 (NAT).** Two resistors 100 Ω (±2 Ω) and 50 Ω (±1 Ω) in series. Find the absolute limiting error in the total resistance (Ω).

**Q8 (NAT).** A quantity y = a³; a is measured with ±0.5% error. Find the % error in y.

<details><summary>🔑 Solutions</summary>

**Q1 → (b).** Observational/gross (parallax).

**Q2 → (b).** Averaging reduces random error.

**Q3 → (b).** Relative errors add for a product.

**Q4 → (b).** Absolute errors add for a sum.

**Q5 → (c).** 2 × 2% = 4%.

**Q6.**
```
δR/R = δV/V + δI/I = 1% + 1.5% = 2.5%
```
**±2.5%.**

**Q7.**
```
Series: absolute errors add ⇒ δR = 2 + 1 = 3 Ω
```
**±3 Ω.**

**Q8.**
```
δy/y = 3 × 0.5% = 1.5%
```
**±1.5%.**

</details>

---

## 🔧 Electrical Machines: DC Machines I — Construction, EMF Equation, Armature Reaction & Commutation

### 📖 Concept Deep Dive

A **DC machine** (generator or motor) converts between mechanical and electrical energy using a commutator for rectification/inversion.

**Construction.** Main parts: the **yoke/frame** (magnetic return path + mechanical support), **field poles** with **field windings** (produce the main flux), the laminated **armature core** carrying the **armature winding**, the **commutator** (converts the armature's AC EMF to DC externally), and **brushes** (carbon, sitting on the magnetic neutral axis).

**EMF equation.** The generated (back-)EMF:

```
Eb = (P·φ·Z·N) / (60·A)
```

where `P` = poles, `φ` = flux per pole (Wb), `Z` = total armature conductors, `N` = speed (rpm), `A` = parallel paths. For a **lap winding A = P**, for a **wave winding A = 2**.

**Torque.** The electromagnetic torque:

```
Ta = (P·φ·Z·Ia) / (2π·A) = 0.159 · (P·φ·Z·Ia)/A
```

So `Eb ∝ φN` and `Ta ∝ φIa`.

**Armature reaction.** When the armature carries current, its MMF distorts and weakens the main field. Effects:
- **Cross-magnetising** component — distorts flux, shifts the **Magnetic Neutral Axis (MNA)** in the direction of rotation (generator) / against it (motor).
- **Demagnetising** component — (after brush shift) weakens the main flux, reducing EMF/torque.
Remedies: **interpoles (commutating poles)**, **compensating windings** (neutralise cross-flux under the pole face), and **brush shifting**.

**Commutation.** As an armature coil passes under a brush, its current must **reverse** in the short commutation period. The coil's inductance produces a **reactance voltage** that opposes this reversal, causing **sparking** at the brushes if commutation is poor. Improvements:
- **Resistance commutation** — high-resistance carbon brushes.
- **Voltage (EMF) commutation** — **interpoles** provide a reversing EMF that cancels the reactance voltage — the standard fix.

| Aspect | Key point |
|---|---|
| EMF | `Eb = PφZN/60A` |
| Torque | `Ta = PφZIa/2πA` |
| Windings | lap A = P, wave A = 2 |
| Armature reaction | cross-magnetising + demagnetising; shifts MNA |
| Commutation fix | interpoles (EMF commutation) |

> 💎 **KEY RESULT** — `Eb = PφZN/(60A)`, `Ta = PφZIa/(2πA)`; **lap A = P, wave A = 2**. Armature reaction is **cross-magnetising + demagnetising**; commutation is improved by **interpoles**.

> 🧠 **MEMORY HOOK** — "**Eb: P-φ-Z-N over 60A; Torque: same over 2πA.**" Winding: "**Lap = P paths (high current), Wave = 2 paths (high voltage).**"

> ⚠️ **TRAP ALERT** — **Lap winding A = P** (parallel paths = poles, for high current); **wave winding A = 2** (for high voltage). Interpoles give **EMF commutation** (cancel reactance voltage); compensating windings fight **cross-magnetising** armature reaction.

### 📐 Formula Sheet

| Quantity | Formula | Notes |
|---|---|---|
| Back-EMF | `Eb = PφZN/(60A)` | N in rpm |
| Torque | `Ta = PφZIa/(2πA)` | Nm |
| Lap winding | `A = P` | high current |
| Wave winding | `A = 2` | high voltage |
| EMF relation | `Eb ∝ φN` | — |
| Torque relation | `Ta ∝ φIa` | — |

### 🧮 Solved Examples

**Example 1 — EMF equation.** A 4-pole, lap-wound DC generator has 500 conductors, flux 20 mWb/pole, running at 1200 rpm. Find the generated EMF.

```
Lap ⇒ A = P = 4
Eb = PφZN/(60A) = (4 × 0.02 × 500 × 1200)/(60 × 4)
   = (4 × 0.02 × 500 × 1200)/240
   = 48000/240 = 200 V
```

**Eb = 200 V.** ✔

**Example 2 — Wave vs lap.** Repeat Example 1 for a **wave winding** (same data). Comment.

```
Wave ⇒ A = 2
Eb = PφZN/(60A) = (4 × 0.02 × 500 × 1200)/(60 × 2)
   = 48000/120 = 400 V
```

**Eb = 400 V** — a wave winding doubles the EMF (A = 2 vs 4) at the cost of lower current capacity. ✔

### ⚠️ Common Traps
1. **Lap A = P, wave A = 2** — flipping these doubles/halves the EMF.
2. **Eb ∝ φN; Ta ∝ φIa** — flux appears in both.
3. **Interpoles improve commutation** (EMF commutation); **compensating windings** counter cross-magnetising reaction.
4. **Armature reaction shifts the MNA** (direction depends on generator/motor).
5. **Use N in rpm and φ in Wb** — unit slips are common.
6. **Torque uses 2πA** in the denominator (not 60A).

### 📝 Test (8 questions)

**Q1 (MCQ).** In a lap-wound DC machine, the number of parallel paths is:
(a) 2  (b) P  (c) P/2  (d) 2P

**Q2 (MCQ).** The back-EMF of a DC machine is proportional to:
(a) φ only  (b) N only  (c) φN  (d) Ia

**Q3 (MCQ).** Commutation is improved mainly by:
(a) larger brushes only  (b) interpoles (commutating poles)  (c) thicker yoke  (d) more flux

**Q4 (MCQ).** Compensating windings are used to counter:
(a) reactance voltage  (b) cross-magnetising armature reaction  (c) eddy currents  (d) friction

**Q5 (MCQ).** A wave winding is preferred for:
(a) high current, low voltage  (b) high voltage, low current  (c) equal  (d) DC only

**Q6 (NAT).** A 6-pole lap-wound generator: 400 conductors, 25 mWb/pole, 1000 rpm. Find Eb (V).

**Q7 (NAT).** For the Q6 machine rewound as wave (A = 2), find Eb (V).

**Q8 (NAT).** A 4-pole wave-wound motor: φ = 15 mWb, Z = 800, Ia = 20 A. Find the torque (Nm, 2 decimals).

<details><summary>🔑 Solutions</summary>

**Q1 → (b).** Lap: A = P.

**Q2 → (c).** `Eb ∝ φN`.

**Q3 → (b).** Interpoles.

**Q4 → (b).** Cross-magnetising armature reaction.

**Q5 → (b).** Wave: high voltage, low current.

**Q6.**
```
Lap A = P = 6
Eb = PφZN/(60A) = (6 × 0.025 × 400 × 1000)/(60 × 6)
   = 60000/360 = 166.67 V
```
**Eb ≈ 166.67 V.**

**Q7.**
```
Wave A = 2
Eb = (6 × 0.025 × 400 × 1000)/(60 × 2) = 60000/120 = 500 V
```
**Eb = 500 V.**

**Q8.**
```
Ta = PφZIa/(2πA) = (4 × 0.015 × 800 × 20)/(2π × 2)
   = 960/(12.566) = 76.39 Nm
```
**Ta ≈ 76.39 Nm.**

</details>

---

## 🔧 Power Electronics: Other Devices & Gate Drives — TRIAC, DIAC, GTO, Firing & Isolation

### 📖 Concept Deep Dive

Beyond the SCR, several devices extend control to **AC and turn-off capability**, supported by **gate-drive and firing circuits**.

**TRIAC (Triode for AC).** A **bidirectional** device — effectively **two SCRs in anti-parallel** sharing one gate. Terminals are **MT1, MT2 and gate**; it can conduct in **both directions** and be triggered in **all four quadrants** (though Quadrant IV, +MT2/−G, is least sensitive and avoided). Used in **AC voltage controllers, light dimmers, fan regulators, and small AC motor control**. Less rugged (dv/dt, commutation) than two SCRs, so limited to lower power.

**DIAC (Diode for AC).** A **two-terminal bidirectional** device with **no gate** — it stays off until the voltage exceeds its **breakover voltage** in either direction, then conducts (with a negative-resistance "breakback"). Its main job is to **trigger a TRIAC** reliably and symmetrically in a **DIAC–TRIAC dimmer** circuit.

**GTO (Gate Turn-Off thyristor).** Like an SCR but can be **turned OFF by a negative gate pulse** (the SCR cannot). This removes the need for forced-commutation circuitry in DC applications. GTOs handle high power (traction, large inverters) but need a **large negative gate current** to turn off — characterised by a low **turn-off gain**:

```
Turn-off gain  βoff = IA / IGQ   (typically 3–5, small)
```

**Gate drives (MOSFET/IGBT).** Being **voltage-controlled**, MOSFETs/IGBTs need the **gate capacitance charged/discharged quickly** — a **gate-driver IC** sources/sinks peak current. High-side switches use a **bootstrap** supply or isolated supply. **Isolation** between the low-voltage control and high-voltage power side is provided by **optocouplers** or **pulse transformers**.

**Firing circuits (SCR).** Common gate-trigger generators: **R / RC triggering**, and the **UJT (unijunction transistor) relaxation oscillator**, which produces sharp pulses. The UJT's firing:

```
Vp = η·VBB + VD          (peak/firing voltage)
f ≈ 1 / (R·C·ln(1/(1 − η)))   (oscillation frequency)
```

where `η` = intrinsic stand-off ratio (~0.5–0.8). **Pulse transformers** also provide isolated gate pulses.

| Device | Type | Turn-off | Use |
|---|---|---|---|
| TRIAC | bidirectional (2 SCR) | AC (natural) | AC control, dimmers |
| DIAC | bidirectional, 2-terminal | — | triggers TRIAC |
| GTO | gate-turn-off thyristor | **negative gate pulse** | HV inverters/traction |
| MOSFET/IGBT | voltage-controlled | gate voltage removal | gate-driver + isolation |

> 💎 **KEY RESULT** — **TRIAC** = bidirectional (2 anti-parallel SCRs), 4-quadrant; **DIAC** = 2-terminal bidirectional trigger (no gate); **GTO** = turned off by a **negative gate pulse** (turn-off gain `βoff = IA/IGQ ≈ 3–5`). **UJT** relaxation oscillator fires SCRs.

> 🧠 **MEMORY HOOK** — "**TRIAC = Two SCRs (AC, both ways); DIAC = Diode trigger (no gate); GTO = Gate Turns Off.**"

> ⚠️ **TRAP ALERT** — Only the **GTO** (and MOSFET/IGBT) can be **turned off by the gate**; the ordinary **SCR cannot**. A **DIAC has no gate** (two terminals). The TRIAC's Quadrant IV is least sensitive.

### 📐 Formula Sheet

| Quantity | Formula | Notes |
|---|---|---|
| GTO turn-off gain | `βoff = IA/IGQ` | ~3–5 |
| UJT peak voltage | `Vp = η·VBB + VD` | η ≈ 0.5–0.8 |
| UJT frequency | `f ≈ 1/(R·C·ln(1/(1−η)))` | relaxation osc. |
| TRIAC terminals | MT1, MT2, gate | bidirectional |
| Isolation | optocoupler / pulse transformer | gate drive |

### 🧮 Solved Examples

**Example 1 — GTO turn-off gain.** A GTO conducts an anode current of 400 A and needs a peak negative gate current of 100 A to turn off. Find the turn-off gain.

```
βoff = IA/IGQ = 400/100 = 4
```

**βoff = 4** (typical — GTOs need a large negative gate pulse, hence the small gain). ✔

**Example 2 — UJT firing voltage.** A UJT has an intrinsic stand-off ratio η = 0.6, VBB = 20 V, and diode drop VD = 0.7 V. Find the peak (firing) voltage Vp.

```
Vp = η·VBB + VD = 0.6 × 20 + 0.7 = 12 + 0.7 = 12.7 V
```

**Vp = 12.7 V** — the emitter voltage at which the UJT fires and triggers the SCR. ✔

### ⚠️ Common Traps
1. **SCR cannot be gate-turned-off; GTO can** (negative gate pulse).
2. **DIAC has no gate** (two terminals) — it is a trigger, not a controlled switch.
3. **TRIAC = bidirectional**, triggered in 4 quadrants (QIV least sensitive).
4. **GTO turn-off gain is low (3–5)** — large negative gate current needed.
5. **UJT Vp = η·VBB + VD** — don't forget the diode drop VD.
6. **Isolation via optocoupler/pulse transformer** separates control and power grounds.

### 📝 Test (8 questions)

**Q1 (MCQ).** A TRIAC is equivalent to:
(a) two diodes in series  (b) two SCRs in anti-parallel  (c) a GTO  (d) a MOSFET

**Q2 (MCQ).** A DIAC has:
(a) three terminals and a gate  (b) two terminals and no gate  (c) four layers and a gate  (d) a cathode only

**Q3 (MCQ).** Which device can be turned off by a gate signal?
(a) SCR  (b) GTO  (c) DIAC  (d) power diode

**Q4 (MCQ).** The turn-off gain of a GTO is typically:
(a) 100+  (b) 3–5  (c) 0  (d) 1000

**Q5 (MCQ).** A UJT is commonly used as a:
(a) rectifier  (b) relaxation-oscillator firing circuit  (c) voltage regulator  (d) amplifier

**Q6 (NAT).** A GTO turns off a 600 A anode current with a 120 A negative gate pulse. Find the turn-off gain.

**Q7 (NAT).** A UJT: η = 0.5, VBB = 24 V, VD = 0.6 V. Find Vp (V).

**Q8 (NAT).** A GTO has turn-off gain 5 and conducts 250 A. Find the required peak negative gate current (A).

<details><summary>🔑 Solutions</summary>

**Q1 → (b).** Two SCRs in anti-parallel.

**Q2 → (b).** Two-terminal, no gate.

**Q3 → (b).** GTO (gate turn-off).

**Q4 → (b).** 3–5.

**Q5 → (b).** UJT relaxation oscillator.

**Q6.**
```
βoff = IA/IGQ = 600/120 = 5
```
**βoff = 5.**

**Q7.**
```
Vp = η·VBB + VD = 0.5 × 24 + 0.6 = 12 + 0.6 = 12.6 V
```
**Vp = 12.6 V.**

**Q8.**
```
βoff = IA/IGQ ⇒ IGQ = IA/βoff = 250/5 = 50 A
```
**IGQ = 50 A.**

</details>

---

## 📊 Progress

```
Measuring Instruments  [██░░░░░░░░░░░░░░░░░░░]  Round 5 · topic  2/22 (Error analysis I)
Electrical Machines    [██████░░░░░░░░░░░░░░░]  Round 5 · topic  6/20 (DC machines I)
Power Electronics       [██████░░░░░░░░░░░░░░░]  Round 5 · topic  6/20 (Other devices/gate drives)
```

- **Section A (Measurements):** round 5 at error analysis. 🔄
- **Section B (Machines):** round 5 into DC machines. 🔄
- **Section C (Power Electronics):** round 5 at TRIAC/DIAC/GTO & gate drives. 🔄

> 🎯 **Today's three one-liners:** (1) **Sum/diff → add absolute errors; product/quotient → add relative; power n → ×n.** (2) **Eb = PφZN/60A, Ta = PφZIa/2πA; lap A=P, wave A=2; interpoles fix commutation.** (3) **TRIAC = 2 anti-parallel SCRs; DIAC = 2-terminal trigger; GTO turns off via negative gate (βoff 3–5).**

*Correctness over length — verify any value marked "verify" before the exam.*
