# ⚡ GATE Technical Revision — Day 22 (2026-08-11)

*A revision of measurement fundamentals, the special machines (stepper/servo/BLDC), and the power-electronic applications that run the modern grid.*

`📅 Tech Day 22  ·  ⏱ ~45 min  ·  🎯 Measurements + Machines + Power Electronics`

Attempt each section's test **before** opening its solutions — recall beats re-reading.

> 🎉 **Machines & Power Electronics reach their final syllabus topics today** — after this, only the two revision days remain before the whole technical track (and then Power Systems) begins.

---

## 🔧 Measuring Instruments: Revision — Static & Dynamic Characteristics, Errors & Standards

Section A is complete; this **revision** reconsolidates the fundamentals (Day 1): the vocabulary of instrument performance that underlies every measurement question.

### 📖 Concept Deep Dive

**Static characteristics** (steady/slowly-varying inputs):

| Term | Meaning |
|---|---|
| **Accuracy** | Closeness to the **true** value (often as % of full scale or % of reading) |
| **Precision** | **Repeatability** (closeness of repeated readings to each other) — *not* accuracy |
| **Resolution** | Smallest change the instrument can **detect** |
| **Sensitivity** | **Output change / input change** (slope); deflection per unit input |
| **Linearity** | How close the input-output curve is to a straight line |
| **Drift** | Slow change of output with time (zero drift, span drift) at constant input |
| **Threshold** | Minimum input to produce a detectable output (from zero) |
| **Dead zone / hysteresis** | Range of input with no output / difference between up & down curves |
| **Span** | Range = (max − min) of measurable input |

```
Sensitivity = ΔOutput/ΔInput ; Deflection factor = 1/sensitivity
Accuracy ≠ Precision: accurate = near true ; precise = repeatable
```

**Dynamic characteristics** (fast-varying inputs): **speed of response, fidelity, lag, dynamic error, bandwidth**. Instruments modeled as **zero/first/second-order** systems; a second-order system has **damping ratio ζ** and **natural frequency ωn** (under/critically/over-damped step response).

**Errors:**
```
Gross errors: human mistakes (misreading, wrong recording)
Systematic errors: instrumental, environmental, observational (bias, repeatable)
Random errors: unpredictable scatter (treated statistically)
Limiting/guarantee error = ± specified % of full scale
Absolute error = |measured − true| ; Relative = absolute/true
```

**Standards & calibration:** hierarchy — **International → Primary → Secondary → Working** standards; **calibration** compares an instrument against a higher standard; **traceability** to national standards (e.g., NPL).

> 💎 **KEY RESULT** — **Accuracy = closeness to true; Precision = repeatability** (they're different). **Sensitivity = ΔO/ΔI; Resolution = smallest detectable change.** Errors: **gross (human), systematic (bias), random (scatter)**. Limiting error is **± % of full-scale**.

> 🧠 **MEMORY HOOK** — "**Accurate ≠ Precise. Sensitivity = slope, Resolution = smallest step, Drift = time-change. Errors: Gross (human), Systematic (bias), Random (scatter).**"

> ⚠️ **TRAP ALERT** — **Accuracy ≠ precision**: a precise instrument can be consistently wrong (biased). **Limiting error is on full-scale**, so % error of a *reading* is worse at low readings. **Sensitivity** is output/input (a high-sensitivity meter deflects more per unit input).

### 📐 Formula Sheet

```
Sensitivity = ΔOutput/ΔInput ; Deflection factor = 1/sensitivity
Absolute error = |Am − At| ; Relative error = (Am − At)/At ; % = ×100
Limiting error = ± (% of full scale) ; worst at small readings
Correction = true − measured
2nd-order: damping ratio ζ, natural freq ωn (under/critical/over-damped)
Standards: International > Primary > Secondary > Working ; calibration = compare to higher standard
```

### 🧮 Solved Examples

**Example 1 — limiting error.**
A voltmeter with **full scale 150 V** has a guarantee accuracy of **±1% of full scale**. Find the **% error of the reading** when it reads **60 V**.

```
Limiting (absolute) error = ±1% × 150 = ±1.5 V
% error of the 60 V reading = ±1.5/60 × 100 = ±2.5%
```
**±2.5 % of reading** (worse than the 1% full-scale spec — the low-reading trap).

**Example 2 — sensitivity.**
A transducer gives **20 mV output** for a **4 °C temperature change**. Find its sensitivity.

```
Sensitivity = ΔOutput/ΔInput = 20 mV/4 °C = 5 mV/°C
```
**Sensitivity = 5 mV/°C.**

### ⚠️ Common Traps

1. **Accuracy ≠ precision** — precision is repeatability, accuracy is closeness to true.
2. **Limiting error is on full scale** → the **% of reading is worse at low readings**.
3. **Sensitivity = output/input** (slope); resolution = smallest detectable change.
4. **Systematic errors are repeatable (bias)**; random errors scatter (statistical).
5. **Drift** is a change of output over **time** at constant input.
6. **Calibration** compares against a **higher-order standard** (traceability).

### 📝 Test — Measuring Instruments Revision (8 Q)

1. **(MCQ)** Repeatability of readings is called:
   (a) accuracy  (b) precision  (c) sensitivity  (d) resolution
2. **(MCQ)** The smallest change an instrument can detect is its:
   (a) sensitivity  (b) resolution  (c) span  (d) drift
3. **(MCQ)** Sensitivity is defined as:
   (a) input/output  (b) output/input  (c) 1/accuracy  (d) full scale
4. **(MCQ)** A repeatable bias error is a ______ error.
   (a) gross  (b) systematic  (c) random  (d) limiting
5. **(MCQ)** Limiting/guarantee error is usually specified as ± % of:
   (a) reading  (b) full scale  (c) zero  (d) resolution
6. **(NAT)** A 250 V full-scale voltmeter has ±2% FS accuracy. Find the % error of a 50 V reading. ______ %
7. **(NAT)** A sensor gives 30 mV for a 6 unit input change. Find sensitivity in mV/unit. ______ mV/unit
8. **(NAT)** A meter reads 98 V; true value is 100 V. Find the % relative error. ______ %

<details>
<summary>🔑 Solutions</summary>

**1 → (b) precision.**

**2 → (b) resolution.**

**3 → (b) output/input.**

**4 → (b) systematic.**

**5 → (b) full scale.**

**6 →** Abs error = 2% × 250 = 5 V; % of reading = 5/50 × 100 = **10%.**

**7 →** Sensitivity = 30/6 = **5 mV/unit.**

**8 →** % error = (98 − 100)/100 × 100 = **−2%.**

</details>

---

## 🔧 Electrical Machines: Special Machines — Stepper, Servo, BLDC & Universal Motors

The final Machines topic: the **special/control machines** used in automation, robotics, appliances and drives.

### 📖 Concept Deep Dive

**Stepper motor.** Converts **digital pulses** into discrete **angular steps** — rotates a fixed **step angle** per pulse; open-loop position control (no feedback needed).

```
Step angle  β = 360°/(number of steps per revolution)
For a motor with Ns stator poles-phases & Nr rotor teeth:  β = 360°/(Nr × phases) (VR type)
Steps per revolution = 360°/β ;  Speed (rpm) = (β × pulse rate)/360 × 60 = pps × β/6
```
- **Types:** **Variable Reluctance (VR)**, **Permanent Magnet (PM)**, **Hybrid** (best resolution).
- Used in printers, CNC, robotics — **precise open-loop positioning**.

**Servo motor.** A motor + **feedback (closed-loop)** for precise **position/speed/torque** control. **DC servo** (fast response, low inertia armature) or **AC servo** (2-phase induction with a control winding). Key traits: **linear torque-speed**, **high torque-to-inertia**, fast dynamic response. Used in position control systems.

**BLDC (Brushless DC) motor.** A **PM synchronous motor** electronically commutated (no brushes/commutator). **Hall sensors** (or sensorless) detect rotor position; an inverter switches the stator windings.
- **Advantages:** no brush wear, high efficiency, high power density, long life, low maintenance.
- Used in EVs, drones, fans, computer drives.

```
BLDC: PM rotor + electronic commutation (inverter + Hall sensors)
Back-EMF: trapezoidal (BLDC) vs sinusoidal (PMSM)
```

**Universal motor.** A **series motor that runs on AC or DC** (hence "universal"). High starting torque, **high speed** (can race on no load), compact. Used in **portable power tools, mixers, vacuum cleaners** (where high speed & light weight matter).

| Machine | Control | Feature | Use |
|---|---|---|---|
| **Stepper** | open-loop, digital pulses | step angle β = 360/steps | printers, CNC |
| **Servo** | closed-loop feedback | precise position/speed | robotics, positioning |
| **BLDC** | electronic commutation | brushless, efficient | EVs, drones, fans |
| **Universal** | AC or DC (series) | high speed/torque, compact | power tools, mixers |

> 💎 **KEY RESULT** — **Stepper: step angle β = 360°/(steps per rev)** (digital, open-loop). **Servo: closed-loop, precise position/speed**. **BLDC: PM + electronic commutation (Hall sensors), brushless & efficient**. **Universal: series motor on AC or DC**, high speed.

> 🧠 **MEMORY HOOK** — "**Stepper = pulses→steps (β=360/steps, open-loop); Servo = feedback (closed-loop); BLDC = brushless PM (electronic commutation); Universal = series on AC/DC (high speed).**"

> ⚠️ **TRAP ALERT** — **Step angle β = 360°/steps-per-revolution** (smaller β = finer resolution). **BLDC is electronically commutated** (no mechanical brushes) with a **PM rotor**. A **universal motor** is a **series** motor working on both **AC and DC** (races on no load like any series motor).

### 📐 Formula Sheet

```
Stepper: step angle β = 360°/(steps per revolution)
   steps/rev = 360/β ; speed(rpm) = pps × β/360 × 60 = pps × β/6
   VR: β = 360°/(Nr × q) approx (Nr rotor teeth, q phases)
Servo: closed-loop; DC servo (armature/field control) or AC servo (2-phase)
BLDC: PM rotor + inverter + Hall sensors; trapezoidal back-EMF
Universal: AC-or-DC series motor; T ∝ Ia² (high starting torque)
```

### 🧮 Solved Examples

**Example 1 — stepper step angle & speed.**
A stepper motor makes **200 steps per revolution**. Find the step angle, and the speed (rpm) at a pulse rate of **1000 pulses/second**.

```
Step angle β = 360°/200 = 1.8°
Speed: 1000 steps/s ÷ 200 steps/rev = 5 rev/s = 5 × 60 = 300 rpm
```
**β = 1.8°; speed = 300 rpm.**

**Example 2 — steps for a rotation.**
A stepper with step angle **1.8°** must rotate exactly **90°**. How many pulses are needed?

```
Number of steps = 90°/1.8° = 50 pulses
```
**50 pulses.**

### ⚠️ Common Traps

1. **Step angle β = 360°/(steps per revolution)** — smaller β = finer positioning.
2. **Stepper is open-loop digital**; **servo is closed-loop** (feedback).
3. **BLDC = brushless, electronically commutated PM machine** — not a brushed DC motor.
4. **Universal motor runs on both AC and DC** (a series motor); high speed, races on no load.
5. **BLDC has trapezoidal back-EMF; PMSM has sinusoidal** — a distinguishing point.
6. **Stepper speed = pulses/sec ÷ steps/rev** (in rev/s) — watch the unit conversion.

### 📝 Test — Electrical Machines (8 Q)

1. **(MCQ)** The step angle of a stepper with N steps per revolution is:
   (a) 360/N  (b) N/360  (c) 180/N  (d) 360·N
2. **(MCQ)** A servo motor uses:
   (a) open-loop control  (b) closed-loop feedback  (c) no control  (d) manual control
3. **(MCQ)** A BLDC motor is commutated:
   (a) mechanically by brushes  (b) electronically (inverter + sensors)  (c) not at all  (d) by a centrifugal switch
4. **(MCQ)** A universal motor can run on:
   (a) AC only  (b) DC only  (c) both AC and DC  (d) three-phase only
5. **(MCQ)** The finest positioning stepper type is:
   (a) variable reluctance  (b) permanent magnet  (c) hybrid  (d) universal
6. **(NAT)** A stepper has a step angle of 1.8°. Find the steps per revolution. ______
7. **(NAT)** A 200-step/rev stepper runs at 2000 pulses/s. Find the speed in rpm. ______ rpm
8. **(NAT)** A stepper with step angle 0.9° must rotate 45°. Find the number of pulses. ______

<details>
<summary>🔑 Solutions</summary>

**1 → (a) 360/N.**

**2 → (b) closed-loop feedback.**

**3 → (b) electronically (inverter + sensors).**

**4 → (c) both AC and DC.**

**5 → (c) hybrid.**

**6 →** steps/rev = 360/1.8 = **200.**

**7 →** speed = 2000/200 = 10 rev/s = **600 rpm.**

**8 →** pulses = 45/0.9 = **50.**

</details>

---

## 🔧 Power Electronics: Applications — SMPS, UPS, HVDC, PFC & Motor Drives

The final Power Electronics topic: the **major applications** that combine the converters we've studied.

### 📖 Concept Deep Dive

**SMPS (Switched-Mode Power Supply).** A high-frequency **DC-DC (and AC-DC) converter** that regulates output by **PWM switching** — far smaller/lighter/more efficient than a linear regulator.
- Topologies: **buck, boost, buck-boost, flyback, forward, push-pull, half/full-bridge**.
- **Efficiency 80-95%** (vs ~40% for linear); small high-frequency transformer.
- Used in **computers, chargers, adapters**.

**UPS (Uninterruptible Power Supply).** Provides **backup power** during mains failure.
- **Online (double-conversion):** AC→DC→(battery)→DC→AC always; **zero transfer time**, best protection.
- **Offline/standby:** load on mains normally, switches to inverter on failure (small transfer time).
- **Line-interactive:** with a voltage regulator (AVR).
- Blocks: **rectifier/charger + battery + inverter + static switch**.

**HVDC (High-Voltage DC transmission).** Transmits bulk power as **DC** over long distances / undersea / for **asynchronous grid interconnection**.
- **Rectifier station** (AC→DC) at sending end, **inverter station** (DC→AC) at receiving end, using **thyristor (LCC)** or **IGBT (VSC)** converters.
- **Advantages:** no reactive/charging current, no skin effect, lower losses over long distance, **links different-frequency grids**, controllable power flow, no stability limit.
- **Break-even distance** ~600-800 km (overhead) — DC cheaper beyond it despite costly converter stations.

```
HVDC: AC → (rectifier) → DC line → (inverter) → AC ; 12-pulse converters typical
Advantages: long distance, asynchronous tie, controllable, no charging current
```

**PFC (Power-Factor Correction).** Improves the input **power factor** of rectifier/SMPS loads (which draw distorted, low-pf current).
- **Passive PFC:** inductors/capacitors.
- **Active PFC:** a **boost converter** shaping the input current to be **sinusoidal and in phase** with voltage (pf → ~1), reducing harmonics.

**Motor drives.** Combine converters to control motor speed/torque:
- **DC drives:** controlled rectifier / chopper feeding a DC motor.
- **AC drives (VFD):** rectifier + DC link + **PWM inverter** feeding an induction/PMSM motor (**V/f or vector control**).

> 💎 **KEY RESULT** — **SMPS = PWM DC-DC, 80-95% efficient**. **UPS: online (zero transfer, best) vs offline (standby)**. **HVDC: rectifier→DC line→inverter**, best for **long distance & asynchronous ties** (break-even ~600-800 km). **Active PFC = boost converter shaping input current (pf→1)**. **VFD = rectifier + DC link + PWM inverter**.

> 🧠 **MEMORY HOOK** — "**SMPS = PWM efficiency; UPS = online (0 transfer)/offline; HVDC = rectifier-line-inverter (long/asynchronous); Active PFC = boost shaping; VFD = rect+DC+PWM inverter.**"

> ⚠️ **TRAP ALERT** — **HVDC** is economical **beyond the break-even distance** (~600-800 km overhead) and for **asynchronous/undersea** links — the **converter stations are costly** but the **line is cheaper**. **Online UPS = zero transfer time** (double conversion); **offline** has a small transfer delay. **Active PFC uses a boost converter**.

### 📐 Formula Sheet

```
SMPS: PWM DC-DC (buck/boost/flyback...) ; η ≈ 80-95%
UPS: online (double-conversion, 0 transfer) ; offline (standby, small transfer)
HVDC: AC→rectifier→DC→inverter→AC ; break-even ~600-800 km ; asynchronous tie
PFC: active = boost converter shaping input current to sinusoidal (pf→1)
VFD: rectifier + DC link + PWM inverter ; V/f or vector control
Power factor pf = (real P)/(apparent VA) ; improved by PFC/capacitors
```

### 🧮 Solved Examples

**Example 1 — SMPS efficiency.**
An SMPS delivers **60 W** output while drawing **68 W** from the input. Find its efficiency.

```
η = Pout/Pin = 60/68 = 0.882 = 88.2%
```
**η ≈ 88.2 %** (typical SMPS; a linear regulator would be far lower).

**Example 2 — PFC power factor improvement.**
A load draws **5 A** at **230 V** with a **displacement pf of 0.7**. After active PFC brings pf to **0.99**, find the reduction in apparent power (VA) for the same real power.

```
Real power P = V·I·pf = 230 × 5 × 0.7 = 805 W
Before PFC: apparent S1 = V·I = 230 × 5 = 1150 VA
After PFC (same P, pf 0.99): S2 = P/pf = 805/0.99 = 813 VA
Reduction = 1150 − 813 = 337 VA (≈ 29% less apparent power / current)
```
**S drops from 1150 VA to ~813 VA** — PFC cuts the current drawn for the same real power.

### ⚠️ Common Traps

1. **SMPS efficiency (80-95%)** far exceeds a linear regulator (~40%) due to switching.
2. **Online UPS = zero transfer time** (double conversion); **offline** has a small switchover delay.
3. **HVDC economical beyond break-even distance** & for **asynchronous/undersea** ties — line cheaper, converters costly.
4. **Active PFC uses a boost converter** to shape input current sinusoidal (pf ≈ 1).
5. **VFD = rectifier + DC link + PWM inverter** (AC drive) — V/f or vector control.
6. **HVDC links different-frequency (asynchronous) grids** — a unique capability AC lines lack.

### 📝 Test — Power Electronics (8 Q)

1. **(MCQ)** An SMPS regulates output primarily by:
   (a) a series resistor  (b) PWM switching  (c) a transformer tap  (d) a rheostat
2. **(MCQ)** Which UPS type has zero transfer time?
   (a) offline  (b) online (double-conversion)  (c) standby  (d) line-interactive only
3. **(MCQ)** HVDC transmission is especially suitable for:
   (a) short distances  (b) long distances & asynchronous ties  (c) low power  (d) AC-only grids
4. **(MCQ)** Active power-factor correction typically uses a:
   (a) buck converter  (b) boost converter  (c) cycloconverter  (d) rectifier only
5. **(MCQ)** A VFD (AC drive) consists of:
   (a) rectifier + DC link + PWM inverter  (b) only a rectifier  (c) only an inverter  (d) a cycloconverter only
6. **(NAT)** An SMPS delivers 90 W drawing 100 W. Find the efficiency in %. ______ %
7. **(NAT)** A load: 230 V, 8 A, pf 0.75. Find the real power in W. ______ W
8. **(NAT)** HVDC overhead break-even distance is about ______ km (typical lower bound). ______ km

<details>
<summary>🔑 Solutions</summary>

**1 → (b) PWM switching.**

**2 → (b) online (double-conversion).**

**3 → (b) long distances & asynchronous ties.**

**4 → (b) boost converter.**

**5 → (a) rectifier + DC link + PWM inverter.**

**6 →** η = 90/100 = **90%.**

**7 →** P = 230 × 8 × 0.75 = **1380 W.**

**8 →** ≈ **600 km** (typical 600-800 km; verify per source).

</details>

---

`✅ Day 22 complete — Measurements REVISION (accuracy vs precision, errors, standards), special machines (stepper β=360/steps, servo, BLDC, universal), and PE applications (SMPS, UPS, HVDC, PFC, VFD). Machines & Power Electronics now have only their revision days left before Power Systems begins.`

*Correctness over length — re-derive any result you're unsure of and mark "verify" before the exam.*
