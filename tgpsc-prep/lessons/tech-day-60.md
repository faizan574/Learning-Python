# ⚡ GATE Technical Revision — Day 60 (2026-09-19)

*Round-3 pass 18 — a milestone! The CRO, special machines, and power-electronics applications. Nearly a full third pass of the syllabus.*

📅 Tech Day 60 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics · 🔁 Round-3 pass 18 · 🏅 Milestone

> 🧠 **MEMORY HOOK** — Tech Day 60: the **CRO** (deflection sensitivity, Lissajous), **special machines** (stepper/servo/BLDC/universal), and **power-electronics applications** (SMPS, UPS, HVDC, PFC). Three broad, high-yield topics.

---

## 🔧 Measuring Instruments: Cathode Ray Oscilloscope (CRO)

### 📖 Concept Deep Dive

A **CRO** displays voltage waveforms vs time on a **Cathode Ray Tube (CRT)**. An electron beam (from a heated cathode + electron gun) is deflected by two pairs of **electrostatic deflection plates** (vertical Y, horizontal X) and strikes a phosphor screen.

**Electrostatic deflection.** For plates of length `l`, separation `d`, deflecting voltage `Vd`, accelerating (anode) voltage `Va`, at screen distance `L`:

```
Deflection on screen  D = (l·L·Vd)/(2·d·Va)
Deflection sensitivity S = D/Vd = (l·L)/(2·d·Va)   (mm per volt)
Deflection factor = 1/S   (volts per mm)
```

Sensitivity is **higher** for longer plates/larger screen distance and **lower** for higher accelerating voltage (a fast beam deflects less).

**Time-base & triggering.** The horizontal plates get a **sawtooth (ramp) sweep** from the time-base generator, moving the spot left→right at a set time/div; **triggering/synchronisation** starts each sweep at the same point of the waveform so it appears stationary. **Blanking** hides the flyback (retrace).

**Measurements:** amplitude (Y: volts/div × divisions), time period/frequency (X: time/div × divisions), phase.

**Lissajous figures.** Applying two sine signals to X and Y (with no time-base) traces a **Lissajous pattern**; the **frequency ratio** = (number of horizontal tangencies)/(number of vertical tangencies):

```
fy/fx = (tangencies on horizontal axis) / (tangencies on vertical axis)
```

Also used for **phase measurement** (an ellipse's shape gives the phase angle: `sinφ = y-intercept/y-max`).

**Probes:** a **×10 attenuator probe** (9 MΩ + scope 1 MΩ) reduces loading and extends range (×10 factor); **DSO (Digital Storage Oscilloscope)** samples (ADC), stores in memory, and displays — allowing capture of transients, pre-trigger view, and processing (governed by the **Nyquist** rate, sample ≥ 2× signal bandwidth).

> 💎 **KEY RESULT** — CRO deflection `D = lLVd/(2dVa)`; **sensitivity S = lL/(2dVa)** (↓ with Va). Time-base = sawtooth sweep + triggering. **Lissajous:** `fy/fx = horizontal tangencies/vertical tangencies`; phase from ellipse. DSO samples (Nyquist ≥ 2×BW).

> ⚠️ **TRAP ALERT** — Deflection sensitivity **decreases** with higher accelerating voltage `Va` (faster beam → less deflection). Lissajous **frequency ratio** = tangency counts (horizontal/vertical). A ×10 probe **reduces** displayed amplitude by 10 (and loading).

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Deflection | `D = (l·L·Vd)/(2·d·Va)` |
| Deflection sensitivity | `S = (l·L)/(2·d·Va)` (mm/V) |
| Deflection factor | `1/S` (V/mm) |
| Lissajous freq ratio | `fy/fx = tangencies_x / tangencies_y` |
| Phase (Lissajous) | `sinφ = y1/ymax` (intercept/peak) |
| DSO sampling (Nyquist) | `fs ≥ 2·f(max)` |

### 🧮 Solved Examples

**Example 1 — deflection sensitivity.**
A CRT has plate length `l = 2 cm`, plate separation `d = 0.5 cm`, screen distance `L = 20 cm`, accelerating voltage `Va = 2000 V`. Deflection sensitivity?

- `S = (l·L)/(2·d·Va) = (0.02 × 0.20)/(2 × 0.005 × 2000) = 0.004/20 = 2×10⁻⁴ m/V = 0.2 mm/V`.

**Example 2 — Lissajous frequency.**
A Lissajous figure shows **3 tangencies on the horizontal** axis and **2 on the vertical**. If the horizontal (X) input is 100 Hz, find the vertical (Y) frequency.

- `fy/fx = (horizontal tangencies)/(vertical tangencies) = 3/2`.
- `fy = (3/2)·fx = 1.5 × 100 = 150 Hz`.

> 🧠 **MEMORY HOOK** — "**S = lL/(2dVa)** — faster beam (high Va) = less deflection." Lissajous ratio = tangency counts; DSO needs **Nyquist** sampling.

### ⚠️ Common Traps

1. Thinking sensitivity rises with `Va` (it **falls**).
2. Inverting the Lissajous tangency ratio.
3. Forgetting the ×10 probe scales amplitude by 1/10.
4. Ignoring triggering (waveform won't be stationary without it).
5. Undersampling in a DSO (below Nyquist → aliasing).
6. Confusing deflection factor (V/mm) with sensitivity (mm/V).

### 📝 Test — CRO (8 Q)

1. CRO deflection sensitivity varies with Va as: (a) ∝ Va (b) ∝ 1/Va (c) ∝ Va² (d) independent.
2. The horizontal plates receive a: (a) sine (b) sawtooth sweep (c) square (d) DC.
3. A stationary waveform requires: (a) blanking (b) triggering/sync (c) a probe (d) a filter.
4. Lissajous frequency ratio fy/fx equals: (a) x-tangencies/y-tangencies (b) y/x amplitude (c) area (d) phase.
5. A DSO must sample at least at: (a) the signal frequency (b) twice the max frequency (Nyquist) (c) half (d) any rate.
6. **(NAT)** l = 3 cm, L = 25 cm, d = 0.5 cm, Va = 2500 V. Sensitivity (mm/V, 2 dp)?
7. **(NAT)** Lissajous: 4 horizontal, 2 vertical tangencies; fx = 50 Hz. fy (Hz)?
8. **(NAT)** A ×10 probe; the true signal is 5 V peak. Displayed (unscaled) amplitude the scope's plates "see" (V)?

<details><summary>🔑 Solutions</summary>

**Q1 — (b) ∝ 1/Va.**

**Q2 — (b) sawtooth sweep.**

**Q3 — (b) triggering.**

**Q4 — (a) x-tangencies/y-tangencies.**

**Q5 — (b) twice the max frequency.**

**Q6.** `S = (0.03×0.25)/(2×0.005×2500) = 0.0075/25 = 3×10⁻⁴ m/V = 0.30 mm/V`.

**Q7.** `fy = (4/2)×50 = 100 Hz`.

**Q8.** ×10 probe divides by 10 → `5/10 = 0.5 V` at the input.

</details>

---

## 🔧 Electrical Machines: Special Machines (Stepper, Servo, BLDC, Universal)

### 📖 Concept Deep Dive

**Stepper motor** — rotates in discrete **steps** per input pulse; ideal for **open-loop position control** (printers, CNC, robotics).

```
Step angle  β = 360° / (m · Nr)   (m = phases/stator-related factor; Nr = rotor teeth)
Common formula:  β = 360° / (Ns · Nr)  or  360°/(number of steps per revolution)
Steps/rev = 360°/β ;  speed (rpm) = (β × pulse rate × 60)/360
```

Types: **variable reluctance, permanent magnet, hybrid**. No feedback needed (position = pulse count), but can lose steps if overloaded.

**Servo motor** — a motor + feedback (encoder/tacho) for **closed-loop precise position/speed** control. **AC servo** (2-phase induction type, low inertia, high accel) and **DC servo** (armature/field-controlled). Key traits: **high torque-to-inertia, fast response, linear torque-speed** for control.

**BLDC (Brushless DC) motor** — a **PM synchronous** motor with **electronic commutation** (Hall sensors + inverter) replacing brushes/commutator. Advantages: **no brush wear, high efficiency, high speed, good torque/weight** — used in drones, EVs, fans, disk drives. (A PMSM with trapezoidal back-EMF driven by an electronic controller.)

**Universal motor** — a **series motor that runs on both AC and DC** (the series field and armature reverse together, so torque direction is maintained on AC). **High speed, high starting torque, small size** — used in **mixers, drills, vacuum cleaners** (portable appliances). Noisy, brush wear.

| Machine | Feedback | Key use |
|---|---|---|
| Stepper | open-loop (pulse count) | positioning (printers, CNC) |
| Servo | closed-loop (encoder) | precise position/speed |
| BLDC | electronic commutation (Hall) | EVs, drones, fans |
| Universal | none (series) | portable AC/DC appliances |

> 💎 **KEY RESULT** — **Stepper:** step angle `β = 360°/(steps per rev)`, open-loop positioning. **Servo:** closed-loop precise control (encoder). **BLDC:** PM + electronic commutation (Hall sensors). **Universal:** series motor, runs on **AC & DC**, high speed (appliances).

> ⚠️ **TRAP ALERT** — **Universal motor = series motor on AC or DC** (high speed, appliances). **BLDC** uses **electronic** commutation (no brushes). **Stepper** is **open-loop** (position by pulse count); **servo** is **closed-loop** (feedback). Step angle `= 360°/steps-per-rev`.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Stepper step angle | `β = 360°/(steps per revolution)` |
| Steps per revolution | `= 360°/β` |
| Stepper speed | `N(rpm) = (β·f_pulse·60)/360 = f_pulse·60/(steps per rev)` |
| Universal motor | series motor, AC or DC, `T ∝ Ia²` |
| BLDC | PM synchronous + electronic commutation |
| Servo | motor + feedback (closed loop) |

### 🧮 Solved Examples

**Example 1 — stepper step angle & steps.**
A stepper motor has a step angle of **1.8°**. How many steps per revolution, and its speed at 200 pulses/second?

- Steps/rev `= 360/1.8 = 200`.
- Speed `= (pulses/sec × 60)/(steps per rev) = (200 × 60)/200 = 60 rpm`.

**Example 2 — step angle from teeth.**
A stepper has step angle **7.5°**. Steps per revolution?

- `= 360/7.5 = 48 steps/rev`.

> 🧠 **MEMORY HOOK** — "**Stepper = open-loop steps; servo = closed-loop; BLDC = electronic commutation; universal = series on AC/DC.**" Step angle `= 360/steps`.

### ⚠️ Common Traps

1. Calling a universal motor a shunt motor (it's **series**, AC or DC).
2. Thinking BLDC has brushes (it's **brushless**, electronic commutation).
3. Treating a stepper as closed-loop (it's **open-loop**).
4. Wrong step-angle formula (`360°/steps-per-rev`).
5. Confusing servo (feedback) with stepper (no feedback).
6. Forgetting universal motors run on **both** AC and DC.

### 📝 Test — Special Machines (8 Q)

1. A stepper motor is typically operated: (a) open-loop (b) closed-loop (c) with a tacho (d) as a generator.
2. A universal motor runs on: (a) AC only (b) DC only (c) both AC and DC (d) neither.
3. A universal motor is essentially a: (a) shunt motor (b) series motor (c) synchronous motor (d) induction motor.
4. A BLDC motor uses: (a) brushes (b) electronic commutation (c) a commutator (d) slip rings only.
5. A servo motor is characterised by: (a) open-loop (b) closed-loop feedback control (c) no control (d) fixed speed only.
6. **(NAT)** Step angle 1.8°; steps per revolution?
7. **(NAT)** Stepper step angle 15°; steps per rev?
8. **(NAT)** Stepper 200 steps/rev at 400 pulses/s; speed (rpm)?

<details><summary>🔑 Solutions</summary>

**Q1 — (a) open-loop.**

**Q2 — (c) both AC and DC.**

**Q3 — (b) series motor.**

**Q4 — (b) electronic commutation.**

**Q5 — (b) closed-loop.**

**Q6.** `360/1.8 = 200 steps/rev`.

**Q7.** `360/15 = 24 steps/rev`.

**Q8.** `N = (400×60)/200 = 120 rpm`.

</details>

---

## 🔧 Power Electronics: Applications — SMPS, UPS, HVDC, PFC

### 📖 Concept Deep Dive

Power electronics enables efficient conversion and control across applications.

**SMPS (Switched-Mode Power Supply).** Uses high-frequency switching (buck/boost/flyback/forward) to regulate output efficiently. Vs **linear regulators** (which dissipate the excess as heat, ~40-60% efficient), SMPS achieves **~80-95%** efficiency, smaller size (high-frequency transformer), but with switching noise/EMI. Ubiquitous in chargers, computers, adapters.

**UPS (Uninterruptible Power Supply).** Provides backup power on mains failure.
- **Offline/standby** — load runs on mains; on failure, switches to inverter+battery (small transfer time). Cheap; for PCs.
- **Online (double-conversion)** — mains → rectifier → DC bus (battery) → inverter → load continuously; **zero transfer time**, best power quality; for servers/critical loads.
- **Line-interactive** — with a buck-boost transformer for voltage regulation; intermediate.

**HVDC (High-Voltage DC transmission).** Converts AC→DC (rectifier at sending end) → DC line → DC→AC (inverter at receiving end).
- Advantages: **no reactive power/charging current** over long distances, **lower losses** for long lines, **asynchronous interconnection** (links grids of different frequencies), precise power control, **no skin effect**, cheaper for **long distances / undersea cables**.
- Break-even distance ~**600-800 km** (overhead) beyond which HVDC beats HVAC; uses **thyristor (LCC)** or **VSC (IGBT)** converters. India: e.g. Rihand-Delhi, various back-to-back links.

**PFC (Power Factor Correction).** Improves the input power factor of rectifier/SMPS loads (which draw distorted, low-pf current). **Active PFC** (a boost converter shaping input current to be sinusoidal and in phase) achieves pf ≈ 0.99 and low THD, meeting harmonic standards (IEC 61000-3-2). Passive PFC uses inductors/filters.

> 💎 **KEY RESULT** — **SMPS:** high-frequency switching, ~80-95% efficient (vs linear ~40-60%). **UPS:** offline (transfer time) / online (zero transfer, double-conversion) / line-interactive. **HVDC:** long-distance/undersea, asynchronous links, lower losses, break-even ~600-800 km. **PFC:** active (boost) shapes input current, pf ≈ 0.99.

> ⚠️ **TRAP ALERT** — **Online UPS = zero transfer time** (double conversion); **offline** has a small transfer time. **HVDC** wins for **long distance/undersea** and **asynchronous** grid links (no reactive charging current). **Active PFC** = boost converter shaping current.

### 📐 Formula Sheet

| Quantity | Relation |
|---|---|
| SMPS efficiency | ~80-95% (linear ~40-60%) |
| UPS types | offline / online (0 transfer) / line-interactive |
| HVDC break-even | ~600-800 km (overhead) |
| HVDC converters | thyristor (LCC) or VSC (IGBT) |
| Power factor | `pf = real/apparent = DF × cosφ1` |
| Active PFC | boost converter, pf ≈ 0.99 |

### 🧮 Solved Examples

**Example 1 — SMPS vs linear efficiency.**
A load needs `50 W` output. A linear regulator is 50% efficient; an SMPS is 90%. Input power and loss for each?

- Linear: input `= 50/0.5 = 100 W`; loss `= 50 W` (as heat).
- SMPS: input `= 50/0.90 = 55.6 W`; loss `= 5.6 W`.
- The SMPS wastes **~10×** less power — hence its dominance.

**Example 2 — HVDC suitability.**
For a **900 km overhead** line and a **200 km undersea cable**, which favours HVDC?

- **Both** favour HVDC: 900 km > break-even (~600-800 km) for overhead; undersea cables have high AC charging current, so HVDC is preferred **regardless of the shorter distance** (cables favour HVDC even below the overhead break-even).

> 🧠 **MEMORY HOOK** — "**SMPS efficient/switching; online UPS = zero transfer; HVDC long/undersea/asynchronous; active PFC = boost.**"

### ⚠️ Common Traps

1. Saying offline UPS has zero transfer time (that's **online**).
2. Thinking HVDC is for short lines (it's **long/undersea/asynchronous**).
3. Believing linear regulators are more efficient than SMPS.
4. Forgetting undersea cables favour HVDC (charging current).
5. Confusing active PFC (boost) with passive filters.
6. Ignoring HVDC's asynchronous-interconnection ability.

### 📝 Test — PE Applications (8 Q)

1. SMPS efficiency vs linear regulators is: (a) lower (b) higher (c) equal (d) zero.
2. An online (double-conversion) UPS has a transfer time of: (a) large (b) zero (c) 10 ms (d) infinite.
3. HVDC is most advantageous for: (a) short lines (b) long-distance/undersea/asynchronous links (c) local distribution (d) household.
4. HVDC allows connecting grids of: (a) same frequency only (b) different frequencies (asynchronous) (c) same phase only (d) none.
5. Active PFC typically uses a: (a) buck converter (b) boost converter (c) cycloconverter (d) transformer only.
6. **(NAT)** SMPS 85% efficient delivering 68 W. Input power (W)?
7. **(NAT)** Linear regulator 40% efficient delivering 20 W. Power dissipated (W)?
8. **(NAT)** HVDC overhead break-even distance is about (km, lower bound)?

<details><summary>🔑 Solutions</summary>

**Q1 — (b) higher.**

**Q2 — (b) zero.**

**Q3 — (b) long-distance/undersea/asynchronous.**

**Q4 — (b) different frequencies.**

**Q5 — (b) boost converter.**

**Q6.** `Pin = 68/0.85 = 80 W`.

**Q7.** `Pin = 20/0.4 = 50 W`; loss `= 50 − 20 = 30 W`.

**Q8.** ~600 km (600-800 km range).

</details>

---

> 🧠 **DAY-60 WRAP (Round-3 pass 18 · Milestone 🏅)** — **CRO:** `S = lL/(2dVa)` (↓ with Va), Lissajous ratio = tangency counts, DSO Nyquist. **Special machines:** stepper (open-loop, `360/steps`), servo (closed-loop), BLDC (electronic commutation), universal (series, AC/DC). **PE apps:** SMPS (efficient switching), online UPS (zero transfer), HVDC (long/undersea/asynchronous), active PFC (boost). ⚡

**🔁 Round-3 progress:** Measurements ▓▓▓▓▓▓▓▓▓▓ · Machines ▓▓▓▓▓▓▓▓▓▓ · Power Electronics ▓▓▓▓▓▓▓▓▓▓ — round-3 all but complete (18/~21; only the capstone-revision topics remain). 🎓 Power Systems joins as a 4th subject once the reference PDFs arrive.
