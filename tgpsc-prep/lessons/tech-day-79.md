# ⚡ GATE Technical Revision — Day 79 (2026-10-08)

*Three subjects, one focused sitting — bridge balance, the little motors that run everything, and where power electronics actually lives.*

📅 Tech Day 79 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics

> Today we close the **AC-bridge** family (Maxwell, Hay, Anderson), sweep the **special-machine** zoo (stepper, servo, BLDC, universal), and map the **application** landscape of power electronics (SMPS, UPS, HVDC, PFC, drives). These three carry easy, high-yield marks: bridge balance is pure algebra, special machines are memory + one or two formulas, and applications are conceptual MCQs you cannot afford to drop.

---

## 🔧 Measuring Instruments: AC Bridges I — Maxwell, Hay & Anderson

### 📖 Concept Deep Dive

An **AC bridge** is the Wheatstone bridge generalised to impedances. Four arms `Z1, Z2, Z3, Z4` are fed from an AC source (an oscillator, typically 100 Hz–10 kHz) with a detector (headphone, tuned amplifier, or CRO) across the opposite diagonal. At balance the detector current is zero, which requires **two conditions simultaneously** because impedances are complex:

```
Z1 · Z4 = Z2 · Z3     (one complex equation)
⇒ |Z1||Z4| = |Z2||Z3|      (magnitude / modulus balance)
   ∠Z1 + ∠Z4 = ∠Z2 + ∠Z3   (phase / argument balance)
```

Both must hold, so a practical bridge needs **two independently adjustable elements**. This is the single idea that unlocks every derivation below.

**Maxwell's inductance–capacitance bridge (Maxwell–Wien).** The unknown is a coil `(R1, L1)` in arm 1. Arm 4 (the *opposite* arm) carries a **parallel** combination of a known resistance `R4` and a known capacitance `C4`. Arms 2 and 3 are pure resistors `R2, R3`. Putting the capacitive standard opposite the inductive unknown is what makes the phase angles cancel. Writing `Z1 = R1 + jωL1`, `Z4 = R4/(1 + jωC4R4)`, and applying `Z1·Z4 = Z2·Z3`:

```
L1 = R2 · R3 · C4
R1 = R2 · R3 / R4
Q1 = ωL1/R1 = ω C4 R4
```

Both balance conditions are **independent of frequency** (frequency cancels), which is a big practical advantage — the source need not be pure sinusoidal. The limitation is **Q range**: because `Q = ωC4R4`, a high-Q coil needs an impractically large `R4`, so Maxwell–Wien is best for **medium Q (roughly 1 to 10)**. For very low Q (< 1) the two balance controls interact and convergence ("sliding balance") is slow.

**Hay's bridge.** Same idea, but `R4` is now in **series** with `C4` instead of parallel. The series RC makes the maths frequency-dependent but lets a *small* `R4` balance a *high*-Q coil — exactly where Maxwell–Wien fails. Derivation gives:

```
L1 = R2 R3 C4 / (1 + ω²C4²R4²)
R1 = ω²R2 R3 R4 C4² / (1 + ω²C4²R4²)
Q1 = 1 / (ω C4 R4)
```

So Hay's bridge is the tool for **high Q (> 10)**. For Q > 10 the term `ω²C4²R4² = 1/Q²` is below 0.01, so `L1 ≈ R2R3C4` with < 1% error — the frequency dependence is negligible *precisely* in its useful range. The cost is that the balance **does depend on frequency**, so the source must be a clean, known sinusoid.

**Anderson's bridge.** A sophisticated modification of Maxwell–Wien that measures `L` against a **fixed capacitor** `C` using an extra junction and resistor `r`. It gives accurate results across a **wide range including low Q**, and the fixed standard capacitor is cheaper and more stable than a variable one. Its drawbacks are complexity (five arms / an extra junction) and a more involved balance procedure. Standard balance results:

```
L1 = (R3 · C / R4) · [ r(R4 + R2) + R2 R4 ]
R1 = R2 R3 / R4
```

(where `r` is the resistance in series with the standard capacitor branch). You rarely derive Anderson in full under exam time — **recognise it** as "Maxwell with a fixed C, good for low Q."

| Bridge | Standard used | Best Q range | Freq-dependent? | One-line identity |
|---|---|---|---|---|
| Maxwell–Wien | **Parallel** R4∥C4 | medium (1–10) | **No** | `L1 = R2R3C4`, `Q = ωC4R4` |
| Hay | **Series** R4+C4 | **high (> 10)** | **Yes** | `L1 ≈ R2R3C4`, `Q = 1/(ωC4R4)` |
| Anderson | **Fixed** C + extra r | **low** & wide | No (practically) | Maxwell + extra junction |

> 💎 **KEY RESULT** — `Q = ωC4R4` for **Maxwell** (parallel), `Q = 1/(ωC4R4)` for **Hay** (series). They are reciprocals because the standard R moves from parallel to series. Memorise this one pair and you can place any question instantly.

> 🧠 **MEMORY HOOK** — "**M**axwell = **M**edium Q = parallel = frequency-free. **H**ay = **H**igh Q = series = frequency-fussy. **A**nderson = **A**ccurate + low Q + fixed cap." The letter tells you the Q.

> ⚠️ **TRAP ALERT** — The capacitive standard always sits in the arm **opposite** the inductive unknown (arm 4 vs arm 1), never adjacent. If a question puts C adjacent to L, the phase angles add instead of cancel and it cannot balance for a pure inductor.

### 📐 Formula Sheet

| Quantity | Formula | Notes |
|---|---|---|
| General balance | `Z1·Z4 = Z2·Z3` | magnitude **and** phase |
| Maxwell L | `L1 = R2·R3·C4` | frequency-independent |
| Maxwell R | `R1 = R2·R3/R4` | — |
| Maxwell Q | `Q = ω·C4·R4` | medium Q |
| Hay L | `L1 = R2R3C4 / (1 + ω²C4²R4²)` | high Q |
| Hay Q | `Q = 1 / (ω·C4·R4)` | reciprocal of Maxwell |
| Hay (high-Q approx) | `L1 ≈ R2·R3·C4` | error ≈ 1/Q² |
| Anderson R | `R1 = R2·R3/R4` | same as Maxwell |
| ω relation | `ω = 2πf` | rad/s |

### 🧮 Solved Examples

**Example 1 — Maxwell–Wien.** In a Maxwell inductance-capacitance bridge the arms are: arm 2 `R2 = 2.5 kΩ`, arm 3 `R3 = 1 kΩ`, arm 4 `R4 = 50 kΩ` in parallel with `C4 = 0.012 µF`. The source is `ω = 3000 rad/s`. Find `L1`, `R1`, and `Q`.

```
L1 = R2·R3·C4 = (2500)(1000)(0.012×10⁻⁶)
   = 2.5×10⁶ × 1.2×10⁻⁸ = 0.030 H = 30 mH
R1 = R2·R3/R4 = (2500·1000)/50000 = 2.5×10⁶/5×10⁴ = 50 Ω
Q  = ω·C4·R4 = 3000 × 0.012×10⁻⁶ × 50000
   = 3000 × 6×10⁻⁴ = 1.8
```

Q ≈ 1.8 → medium Q, so Maxwell–Wien is the correct choice. ✔

**Example 2 — Hay's bridge.** A Hay's bridge balances with `R2 = R3 = 1 kΩ`, `C4 = 1 µF`, `R4 = 100 Ω`, at `f = 1 kHz`. Find Q and L1.

```
ω = 2πf = 2π(1000) = 6283 rad/s
ωC4R4 = 6283 × 1×10⁻⁶ × 100 = 0.6283
Q = 1/(ωC4R4) = 1/0.6283 = 1.59
```

Here Q ≈ 1.6 is **low**, so note the full formula is needed (the high-Q approximation would be wrong):

```
1 + ω²C4²R4² = 1 + (0.6283)² = 1 + 0.3948 = 1.3948
L1 = R2R3C4/(1+ω²C4²R4²) = (1000·1000·1×10⁻⁶)/1.3948
   = 1.0 / 1.3948 = 0.717 H
```

(Lesson: Hay is *meant* for high Q; feeding it low-Q numbers shows exactly why the correction term matters — it changed L by ~28%.) ✔

### ⚠️ Common Traps
1. **Forgetting there are two balance equations.** You must satisfy both real and imaginary parts; a single equation gives only half the answer.
2. **Maxwell Q vs Hay Q.** `ωC4R4` (Maxwell) vs `1/(ωC4R4)` (Hay). Swapping them is the most common silent error.
3. **Using Hay's high-Q approximation `L1 ≈ R2R3C4` for a low-Q coil.** Only valid when Q > 10 (error ≈ 1/Q²).
4. **Thinking Maxwell is frequency-dependent.** It is **not** — frequency cancels. Hay **is**.
5. **µF vs pF unit slips** in `L1 = R2R3C4` — a factor of 10⁶ error is easy. Carry units explicitly.
6. **Confusing Maxwell's *inductance* bridge (L vs standard L) with the *inductance-capacitance* bridge (L vs C).** GATE almost always means the L–C (Maxwell–Wien) version.

### 📝 Test (8 questions)

**Q1 (MCQ).** Maxwell's inductance-capacitance bridge is most suitable for coils of:
(a) very low Q (< 1)  (b) medium Q (1–10)  (c) high Q (> 10)  (d) any Q equally

**Q2 (MCQ).** In Maxwell's inductance-capacitance bridge, the balance conditions are:
(a) frequency dependent  (b) independent of frequency  (c) dependent on detector  (d) dependent on source amplitude

**Q3 (MCQ).** Hay's bridge differs from Maxwell–Wien in that the standard capacitor is in:
(a) parallel with R4  (b) series with R4  (c) series with the unknown coil  (d) parallel with the detector

**Q4 (MCQ).** The quality factor expression in Hay's bridge is:
(a) `ωC4R4`  (b) `1/(ωC4R4)`  (c) `ωL1R1`  (d) `R4/(ωC4)`

**Q5 (MCQ).** Anderson's bridge is preferred when:
(a) measuring very high Q coils  (b) a variable standard capacitor is available  (c) measuring low-Q inductance accurately with a fixed capacitor  (d) frequency is unknown

**Q6 (NAT).** A Maxwell–Wien bridge has `R2 = 4 kΩ`, `R3 = 2 kΩ`, `C4 = 0.05 µF`. Find `L1` in henries.

**Q7 (NAT).** For the bridge in Q6, `R4 = 80 kΩ` and `ω = 2500 rad/s`. Find the Q factor.

**Q8 (NAT).** A Hay's bridge measures a high-Q coil with `R2 = R3 = 1 kΩ` and `C4 = 0.5 µF`. Taking the high-Q approximation, find `L1` in mH.

<details><summary>🔑 Solutions</summary>

**Q1 → (b).** `Q = ωC4R4`; high Q needs impractically large R4, so medium Q is the sweet spot.

**Q2 → (b).** Frequency cancels in both `L1 = R2R3C4` and `R1 = R2R3/R4`. This is Maxwell–Wien's key advantage.

**Q3 → (b).** Hay uses **series** R4+C4 (vs Maxwell's parallel), enabling small R4 to balance high-Q coils.

**Q4 → (b).** `Q = 1/(ωC4R4)` for Hay — reciprocal of Maxwell's `ωC4R4`.

**Q5 → (c).** Anderson = Maxwell modified with a **fixed** capacitor, accurate for **low-Q** inductance over a wide range.

**Q6.**
```
L1 = R2·R3·C4 = (4000)(2000)(0.05×10⁻⁶)
   = 8×10⁶ × 5×10⁻⁸ = 0.40 H
```
**L1 = 0.40 H.**

**Q7.**
```
Q = ω·C4·R4 = 2500 × 0.05×10⁻⁶ × 80000
  = 2500 × 4×10⁻³ = 10
```
**Q = 10** (upper edge of Maxwell's useful range).

**Q8.**
```
L1 ≈ R2·R3·C4 = (1000)(1000)(0.5×10⁻⁶)
   = 1×10⁶ × 5×10⁻⁷ = 0.5 H = 500 mH
```
**L1 ≈ 500 mH.**

</details>

---

## 🔧 Electrical Machines: Special Machines — Stepper, Servo, BLDC & Universal Motor

### 📖 Concept Deep Dive

**Special machines** are small motors optimised for *control* rather than bulk power conversion. GATE loves them for conceptual MCQs plus the stepper step-angle numerical.

**Stepper motor.** Converts digital pulses into discrete angular steps — inherently open-loop position control. Three types:
- **Variable Reluctance (VR):** toothed soft-iron rotor (no magnet), torque from reluctance minimisation. Smallest step angles, no detent torque when unexcited.
- **Permanent Magnet (PM):** magnetised rotor, larger step angle, has **detent torque** (holds position unpowered).
- **Hybrid (HB):** PM + toothed rotor — combines small step angle *and* detent torque; the industrial workhorse.

The **step angle** is the heart of every numerical:

```
β (step angle) = 360° / (m · Nr)
   m  = number of stator phases (stacks)
   Nr = number of rotor teeth/poles
Steps per revolution = 360° / β = m · Nr
```

An equivalent form when both stator and rotor pole counts are given:

```
β = [ (Ns − Nr) / (Ns · Nr) ] × 360°
```

Stepping (slewing) speed from pulse frequency `fp` (pulses/s):

```
n (rev/s) = β·fp / 360 = fp / (steps per rev)
N (rpm)  = 60·fp / (steps per rev)
```

**Half-stepping** energises one-then-two phases alternately, halving `β` and doubling resolution. **Microstepping** uses graded currents for even finer resolution and smoother motion.

**Servo motors.** Motors designed for fast, accurate closed-loop position/speed control. Requirements: **linear torque–speed characteristic, low rotor inertia** (high torque-to-inertia ratio for fast response), smooth low-speed operation.
- **DC servo:** armature- or field-controlled; high torque, easy control, but has brushes.
- **AC servo (2-phase induction type):** high rotor resistance so the torque–slip curve has its peak beyond standstill, giving **negative slope throughout** (stable, linear, positive damping). Reference winding + control winding 90° apart; control-winding voltage sets torque.

**BLDC (brushless DC).** A PM synchronous machine run as a DC motor by **electronic commutation**. Rotor = permanent magnets; stator = 3-phase windings switched by an inverter using **Hall-effect position sensors** (or sensorless back-EMF sensing). Back-EMF is **trapezoidal** (vs the **sinusoidal** back-EMF of a PMSM — the key distinguishing MCQ). Advantages: no brushes → low maintenance, high efficiency, high power density, good heat dissipation (losses in stator). Needs a controller/inverter, so it is costlier than a brushed motor.

**Universal motor.** A series-wound commutator motor that runs on **both AC and DC**. Because torque `∝ Ia²` in a series motor, reversing both field and armature currents (as AC does) keeps torque unidirectional. Features: very **high speed** (up to ~20,000 rpm), high starting torque, small size — used in drills, mixers, vacuum cleaners. Speed falls sharply with load (series characteristic); must never run unloaded (runaway risk).

| Machine | Rotor | Commutation | Back-EMF | Control feature |
|---|---|---|---|---|
| Stepper (VR/PM/HB) | iron / PM | external pulse sequence | — | open-loop digital position |
| DC servo | wound / PM | mechanical (brushes) | — | linear T-ω, low inertia |
| AC servo | high-R squirrel cage | — (induction) | — | 2-phase, negative slope everywhere |
| **BLDC** | **PM** | **electronic (Hall)** | **trapezoidal** | closed-loop, inverter-fed |
| PMSM (compare) | PM | electronic | **sinusoidal** | FOC/vector control |
| Universal | wound (series) | mechanical | — | AC **or** DC, very high speed |

> 💎 **KEY RESULT** — Stepper step angle `β = 360°/(m·Nr)`; steps/rev `= m·Nr`; speed `N(rpm) = 60·fp/(m·Nr)`.

> 🧠 **MEMORY HOOK** — "**BLDC = Blocky (trapezoidal) back-EMF; PMSM = Pure Sine.**" And "**Universal = Series motor = runs on Universe of supplies (AC+DC) at Ultra speed.**"

> ⚠️ **TRAP ALERT** — A VR stepper has **no detent (holding) torque** when de-energised because there is no permanent magnet; PM and hybrid steppers do. Also: AC servo needs **high rotor resistance** (opposite of a normal efficient induction motor) to force a stable negative-slope characteristic.

### 📐 Formula Sheet

| Quantity | Formula | Notes |
|---|---|---|
| Step angle | `β = 360°/(m·Nr)` | m = phases, Nr = rotor teeth |
| Step angle (alt) | `β = (Ns−Nr)/(Ns·Nr) × 360°` | from pole counts |
| Steps per revolution | `= 360°/β = m·Nr` | — |
| Speed from pulses | `N(rpm) = 60·fp/(steps per rev)` | fp = pulses/s |
| Resolution | steps/rev; half-step doubles it | — |
| Series-motor torque | `T ∝ Ia²` | why universal runs on AC |

### 🧮 Solved Examples

**Example 1 — Stepper step angle & speed.** A hybrid stepper has 4 stator phases and a 50-tooth rotor and is driven at 1200 pulses per second. Find the step angle, steps per revolution, and shaft speed in rpm.

```
β = 360°/(m·Nr) = 360/(4×50) = 360/200 = 1.8° per step
steps per rev = 360/1.8 = 200
N(rpm) = 60·fp/(steps per rev) = 60×1200/200 = 360 rpm
```

Step angle **1.8°**, **200 steps/rev**, **360 rpm**. (1.8°/200-step is the de-facto industry standard NEMA stepper.) ✔

**Example 2 — Universal motor concept check.** Explain in one line why a DC series motor runs on AC without reversing direction, using the torque relation.

```
T ∝ φ·Ia and in a series motor φ ∝ Ia  ⇒  T ∝ Ia²
On AC, both field and armature currents reverse together each half-cycle,
so Ia² (hence T) stays positive ⇒ unidirectional torque.
```
That is exactly the universal-motor principle. ✔

### ⚠️ Common Traps
1. **VR stepper "holds" position unpowered.** It does not — no magnet, no detent torque.
2. **BLDC vs PMSM back-EMF.** BLDC = **trapezoidal**, PMSM = **sinusoidal**. The commutation (electronic) is the same; the waveform is the discriminator.
3. **AC servo wants low rotor resistance.** Wrong — it needs **high** rotor resistance for a stable, linear, negative-slope torque–speed curve.
4. **Forgetting half-stepping doubles resolution** (halves step angle), so steps/rev doubles.
5. **Mixing "m" (phases) with number of poles** in `β = 360/(m·Nr)`. Use stator phases/stacks, not total poles, unless the alternate `(Ns−Nr)` form is intended.
6. **Running a universal/series motor unloaded** — speed runs away because `N ∝ 1/Ia` and Ia → small at no load.

### 📝 Test (8 questions)

**Q1 (MCQ).** Which stepper type has detent (holding) torque when unexcited?
(a) VR only  (b) PM and hybrid  (c) VR and hybrid  (d) none

**Q2 (MCQ).** The back-EMF waveform of a BLDC motor is:
(a) sinusoidal  (b) trapezoidal  (c) square  (d) triangular

**Q3 (MCQ).** For a stable, linear torque–speed characteristic, a 2-phase AC servo motor must have:
(a) low rotor resistance  (b) high rotor resistance  (c) a permanent-magnet rotor  (d) a wound commutator

**Q4 (MCQ).** A universal motor can run on AC and DC because it is wound as a ______ motor.
(a) shunt  (b) series  (c) compound  (d) separately excited

**Q5 (MCQ).** Electronic commutation in a BLDC motor is synchronised using:
(a) a mechanical commutator  (b) slip rings  (c) Hall-effect position sensors  (d) a centrifugal switch

**Q6 (NAT).** A VR stepper has 3 stator phases and 24 rotor teeth. Find the step angle in degrees.

**Q7 (NAT).** A stepper with step angle 1.8° is driven at 2000 pulses/s. Find the shaft speed in rpm.

**Q8 (NAT).** A hybrid stepper gives 400 steps per revolution in half-step mode. What is its full-step angle in degrees?

<details><summary>🔑 Solutions</summary>

**Q1 → (b).** PM and hybrid have magnets → detent torque unpowered. VR has none.

**Q2 → (b).** BLDC = trapezoidal back-EMF (PMSM = sinusoidal).

**Q3 → (b).** High rotor resistance pushes the torque peak beyond standstill → negative slope everywhere → stable linear response.

**Q4 → (b).** Series: `T ∝ Ia²`, so torque stays unidirectional on AC.

**Q5 → (c).** Hall sensors give rotor position to the inverter for electronic commutation.

**Q6.**
```
β = 360°/(m·Nr) = 360/(3×24) = 360/72 = 5°
```
**β = 5°.**

**Q7.**
```
steps/rev = 360/1.8 = 200
N = 60·fp/(steps per rev) = 60×2000/200 = 600 rpm
```
**N = 600 rpm.**

**Q8.** Half-step mode gives 400 steps/rev ⇒ full-step = 200 steps/rev.
```
full-step β = 360/200 = 1.8°
```
**β = 1.8°.**

</details>

---

## 🔧 Power Electronics: Applications — SMPS, UPS, HVDC, PFC & Motor Drives

### 📖 Concept Deep Dive

This topic ties every converter you have studied to a real system. It is **conceptual-MCQ heavy** with a few compact formulas.

**SMPS (Switched-Mode Power Supply).** Regulates DC output by switching a transistor at high frequency (tens of kHz–MHz) and filtering, instead of dissipating excess in a series pass element. Versus a **linear regulator**: SMPS has **high efficiency (70–95%)**, small/light magnetics (high frequency → small transformer/inductor), but more noise/EMI and complexity. Core isolated topologies:

| Topology | Switches | Isolation | Typical power |
|---|---|---|---|
| Flyback | 1 | yes (stores energy in transformer gap) | low (< 150 W) |
| Forward | 1 | yes | medium |
| Push-pull | 2 | yes | medium |
| Half-bridge | 2 | yes | medium–high |
| Full-bridge | 4 | yes | high (> 500 W) |

Key relations (CCM):
```
Buck (step-down):     Vo = D·Vin
Boost (step-up):      Vo = Vin/(1 − D)
Buck-Boost/Flyback:   Vo = Vin·D/(1 − D)   (× Ns/Np for flyback turns ratio)
```

**UPS (Uninterruptible Power Supply).** Battery-backed supply that rides through mains failure. Three architectures:
- **Offline / standby:** load normally on mains; inverter switches in on failure (few ms transfer). Cheapest; brief break.
- **Line-interactive:** adds a buck/boost auto-transformer for voltage regulation; inverter also conditions. Medium cost.
- **Online / double-conversion:** mains → rectifier → DC bus → inverter → load **continuously**; **zero transfer time**, best isolation and conditioning, highest cost and standing losses. Used for critical loads (servers, hospitals).

**HVDC (High-Voltage DC transmission).** Converts AC to DC (rectifier station), transmits as DC, and inverts back to AC at the far end. Why bother:
- **No reactive/charging current** in the line → ideal for **long cables** (submarine) where AC charging current would be prohibitive.
- **Asynchronous interconnection**: links two AC grids of different frequency or uncoordinated phase (back-to-back scheme).
- Only two conductors (bipolar) → lower line cost; no skin effect, no stability-limited distance.
- **Break-even distance**: DC terminals are expensive but the line is cheaper, so HVDC wins **above ~600–800 km overhead** or **~50 km submarine cable** (verify exact figure against latest source; it depends on technology). Schemes: **monopolar, bipolar, back-to-back**. Modern links use **VSC (voltage-source converters)** with IGBTs for independent P/Q control; classic links use **LCC (line-commutated, thyristor)**.

**PFC (Power-Factor Correction).** Front-end rectifiers draw pulsed current → poor power factor and harmonics. PF splits into two parts:
```
PF = (displacement factor cosφ1) × (distortion factor = I1/Irms)
```
- **Passive PFC:** input inductor/capacitor filter — simple, bulky, limited improvement.
- **Active PFC:** usually a **boost converter** controlled so input current tracks the rectified sine → PF → ~0.99, low THD. Mandated by standards (e.g. IEC 61000-3-2) for many loads.

**Motor drives (basics).** Variable-speed drives for machines you revised earlier:
- **DC drives:** controlled rectifier (phase-controlled) or chopper feeds armature; vary `Va` for speed below base, weaken field above base.
- **AC drives (VFD):** rectifier → DC link → PWM VSI; **constant V/f control** keeps flux constant (`V/f = const`) up to base speed, then constant-power field-weakening region above. Advanced: **vector / field-oriented control (FOC)** for torque-grade performance.

> 💎 **KEY RESULT** — `PF = cosφ1 × (I1/Irms)` = displacement × distortion factor. Active PFC (boost) drives distortion factor → 1. Constant V/f keeps airgap flux constant → constant max torque below base speed.

> 🧠 **MEMORY HOOK** — "**Flyback = Few watts, 1 switch; Full-bridge = Full power, 4 switches.**" "**HVDC = cables + connecting different grids.**" "**Online UPS = zero break.**"

> ⚠️ **TRAP ALERT** — HVDC is favoured for **long distances / cables / asynchronous ties**, *not* for short overhead lines (terminal cost dominates below break-even). And a good *displacement* factor (cosφ1 ≈ 1) can still give a poor *true* PF if current is distorted — PFC fixes the distortion part.

### 📐 Formula Sheet

| Quantity | Formula | Notes |
|---|---|---|
| Buck | `Vo = D·Vin` | step-down |
| Boost | `Vo = Vin/(1−D)` | step-up; basis of active PFC |
| Buck-boost / flyback | `Vo = Vin·D/(1−D)` | × Ns/Np for flyback |
| True power factor | `PF = cosφ1 × (I1/Irms)` | displacement × distortion |
| V/f control | `V/f = constant` | constant flux below base speed |
| SMPS efficiency | `η = Pout/(Pout+losses)` | typ. 70–95% |

### 🧮 Solved Examples

**Example 1 — Boost / active-PFC front end.** A boost PFC stage operates from a rectified mains of average `Vin = 120 V` and must produce a `Vo = 400 V` DC bus. Find the duty ratio D (ideal CCM).

```
Vo = Vin/(1 − D)  ⇒  1 − D = Vin/Vo = 120/400 = 0.30
D = 1 − 0.30 = 0.70
```
**D = 0.70.** (Boost is the universal active-PFC topology because it can hold a fixed high bus while shaping input current over the whole line cycle.) ✔

**Example 2 — True power factor.** A rectifier load draws fundamental current `I1 = 8 A` at displacement angle `φ1 = 25°`, with total RMS current `Irms = 10 A`. Find the true power factor.

```
displacement factor = cos(25°) = 0.906
distortion factor    = I1/Irms = 8/10 = 0.80
PF = 0.906 × 0.80 = 0.725
```
**PF ≈ 0.73** — note how the distortion (harmonics) drags PF down even though cosφ1 is decent. Active PFC would raise the 0.80 toward ~0.99. ✔

### ⚠️ Common Traps
1. **"SMPS is less efficient than linear."** Opposite — SMPS is **more** efficient; linear wastes the voltage drop as heat.
2. **Flyback is a high-power topology.** No — flyback is **low power** (single switch); full-bridge is high power.
3. **HVDC for everything.** Only economic beyond the **break-even distance**, or for cables / asynchronous ties.
4. **True PF = cosφ only.** For nonlinear (rectifier) loads you must include the **distortion factor** `I1/Irms`.
5. **Online vs offline UPS.** Online = double conversion = **zero** transfer time; offline has a short break.
6. **V/f above base speed.** You cannot keep raising V (insulation/source limit) → enter **constant-power field-weakening**, flux falls, max torque drops.

### 📝 Test (8 questions)

**Q1 (MCQ).** Compared with a linear regulator, an SMPS has:
(a) lower efficiency, larger size  (b) higher efficiency, smaller magnetics  (c) higher efficiency, larger magnetics  (d) identical efficiency

**Q2 (MCQ).** Which SMPS topology is best suited to low output power with a single switch and isolation?
(a) full-bridge  (b) push-pull  (c) flyback  (d) half-bridge

**Q3 (MCQ).** A UPS with **zero** transfer time on mains failure is the:
(a) offline/standby  (b) line-interactive  (c) online/double-conversion  (d) ferroresonant standby

**Q4 (MCQ).** HVDC transmission is particularly advantageous for:
(a) short overhead lines  (b) long submarine cables and asynchronous grid ties  (c) low-voltage distribution  (d) reactive power supply

**Q5 (MCQ).** The most common active-PFC power stage is a:
(a) buck converter  (b) boost converter  (c) flyback only  (d) full-bridge inverter

**Q6 (NAT).** A boost PFC produces a 390 V bus from a rectified average input of 156 V. Find the ideal duty ratio D (2 decimals).

**Q7 (NAT).** A load draws `I1 = 9 A` fundamental at `cosφ1 = 0.95` with `Irms = 12 A`. Find the true power factor (2 decimals).

**Q8 (NAT).** A VFD uses constant V/f control. At 50 Hz the stator voltage is 400 V. What voltage (V) should it apply at 30 Hz to keep flux constant?

<details><summary>🔑 Solutions</summary>

**Q1 → (b).** SMPS: high efficiency; high switching frequency shrinks the magnetics.

**Q2 → (c).** Flyback — single switch, isolation, low power.

**Q3 → (c).** Online/double-conversion feeds the load through the inverter continuously → no transfer break.

**Q4 → (b).** Long cables (no charging current) and asynchronous interconnection are classic HVDC wins.

**Q5 → (b).** Boost — holds a fixed high DC bus while shaping input current to track the sine.

**Q6.**
```
1 − D = Vin/Vo = 156/390 = 0.40
D = 1 − 0.40 = 0.60
```
**D = 0.60.**

**Q7.**
```
distortion factor = I1/Irms = 9/12 = 0.75
PF = cosφ1 × distortion = 0.95 × 0.75 = 0.7125
```
**PF ≈ 0.71.**

**Q8.**
```
V/f = const ⇒ V = 400 × (30/50) = 400 × 0.6 = 240 V
```
**V = 240 V.**

</details>

---

## 📊 Progress

```
Measuring Instruments  [█████████████████░░░]  Round 4 · topic 17/22 (AC Bridges I)
Electrical Machines    [███████████████████░]  Round 4 · topic 19/20 (Special Machines)
Power Electronics       [███████████████████░]  Round 4 · topic 19/20 (Applications)
```

- **Section A (Measurements):** AC bridges complete after the next day (CRO/DVM revision ahead) — Day 79 done ✅
- **Section B (Machines):** one topic from finishing round 4 (Machines revision closes it) ✅
- **Section C (Power Electronics):** one topic from finishing round 4 (PE revision closes it) ✅

> 🎯 **Today's three one-liners to carry:** (1) **Maxwell Q = ωC4R4, Hay Q = 1/(ωC4R4)** — reciprocals. (2) **BLDC = trapezoidal, PMSM = sinusoidal; stepper β = 360/(m·Nr).** (3) **True PF = cosφ1 × (I1/Irms); HVDC wins on long cables & async ties.**

*Keep going — correctness over length. Verify any figure marked "verify" against the latest official source before an exam.*
