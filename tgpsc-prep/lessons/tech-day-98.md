# ⚡ GATE Technical Revision — Day 98 (2026-10-27)

*The potential transformer and how its errors and hazards mirror-image the CT, the family of special machines (stepper, servo, BLDC, universal), and the big power-electronic applications — SMPS, UPS, HVDC and PFC.*

📅 Tech Day 98 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics

---

## 🔧 Measuring Instruments: Instrument Transformers — Potential Transformer (PT)

### 📖 Concept Deep Dive

A **Potential (Voltage) Transformer (PT)** steps a high line voltage down to a **standard low voltage (usually 110 V)** for voltmeters, wattmeter pressure coils, and relays — isolating the meter from high voltage. It is essentially a **step-down transformer with a very high turns ratio** operating under near **open-circuit (no-load)** conditions (the voltmeter burden is high-impedance, drawing tiny current).

**Basics.** Primary (many turns) across the line voltage `Vp`; secondary (few turns) to the meter. Ideal:

```
Vp/Vs = Np/Ns   (turns ratio, like an ordinary transformer)
Nominal ratio Kn = rated Vp / rated Vs
```

**Errors (ratio & phase).** Like the CT, the PT needs an exciting current and has winding impedance drops (primary & secondary `R`, `X`), so the actual secondary voltage differs slightly in magnitude and phase from the ideal:
- **Ratio (voltage) error:** actual ratio `R = Vp/Vs` differs from `Kn`; `%RE = (Kn − R)/R × 100`.
- **Phase-angle error (θ):** angle between `Vp` and the reversed `Vs` phasor — matters for **wattmeter/energy** (pf) measurement.

Errors are minimised by low winding resistance/reactance, good core, and keeping the burden within the rated VA. **Lower burden (higher impedance) → smaller error** for a PT (opposite emphasis to CT, which wants low burden too, but the PT naturally runs near no load).

**PT vs CT (mirror images).**

| Aspect | CT (current) | PT (voltage) |
|---|---|---|
| Primary connection | **series** with line | **parallel** across line |
| Standard secondary | **5 A (or 1 A)** | **110 V** |
| Ratio | `Ip/Is = Ns/Np` (inverse) | `Vp/Vs = Np/Ns` (direct) |
| Operating condition | near short-circuit (low-Z burden) | near open-circuit (high-Z burden) |
| Hazard | secondary **never open** (→ high V) | secondary **never short** (→ high I) |
| Exciting current effect | significant | small |

**Secondary-short hazard (PT).** Because the PT is a normal step-down transformer across the supply, **shorting its secondary** causes a **huge primary/secondary current** (like any transformer short-circuit) → overheating/damage; a **fuse** protects it. (Opposite of the CT, whose danger is an open secondary.)

**Capacitive Voltage Transformer (CVT).** For EHV lines, a **CVT** (capacitor divider + an auxiliary PT) is cheaper than a full PT and also provides a **carrier-coupling** path for power-line communication.

> 💎 **KEY RESULT** — PT: `Vp/Vs = Np/Ns`, **parallel**, **110 V** secondary, runs near **open-circuit**; **never short the secondary** (fuse-protected). CT ↔ PT are mirror images (series/parallel, 5 A/110 V, open-hazard/short-hazard). CVT used at EHV.

> 🧠 **MEMORY HOOK** — "**PT = parallel, 110 V, like a normal step-down transformer; never short it (CT = never open it).**"

### 📐 Formula Sheet

| Quantity | Expression |
|---|---|
| Voltage ratio | `Vp/Vs = Np/Ns` |
| Nominal ratio | `Kn = rated Vp / rated Vs` |
| Actual ratio | `R = Vp/Vs` |
| Ratio error | `%RE = (Kn − R)/R × 100` |
| Burden | VA = `Vs²/Zburden` |
| Secondary standard | 110 V |

### 🧮 Solved Examples

**Example 1 — PT ratio.**
A PT is rated **11000/110 V**. The line voltage is **10,500 V**. Find the ideal secondary voltage.

```
Kn = 11000/110 = 100
Vs = Vp / Kn = 10500/100 = 105 V
```

Secondary voltage **= 105 V**.

**Example 2 — Ratio error.**
A PT with Kn = 100 shows an actual secondary of **104 V** when the primary is **10,500 V**. Find the ratio error.

```
Actual ratio R = Vp/Vs = 10500/104 = 100.96
%RE = (Kn − R)/R × 100 = (100 − 100.96)/100.96 × 100 = −0.95%
```

Ratio error **≈ −0.95%**.

### ⚠️ Common Traps

1. **Short a PT secondary** — **never**; it causes a transformer-short (high current); fuse-protect it. (Open is fine for a PT.)
2. **PT primary in series** — PT primary is in **parallel** (across the line); CT primary is in series.
3. **PT secondary 5 A** — PT standard secondary is **110 V** (CT is 5 A).
4. **PT ratio is inverse** — PT voltage ratio is **direct** (`Vp/Vs = Np/Ns`), like a normal transformer; only the CT current ratio is inverse.
5. **PT runs near short-circuit** — it runs near **open-circuit** (high-impedance meter burden).
6. **Phase error irrelevant** — matters for **power/energy** (pf) measurement.

### 📝 Test — Measuring Instruments (8 Q)

1. A PT primary is connected:
   (a) in series (b) in parallel across the line (c) to earth (d) to the meter
2. The standard secondary voltage of a PT is:
   (a) 5 V (b) 110 V (c) 230 V (d) 1 kV
3. A PT secondary must never be:
   (a) open-circuited (b) short-circuited (c) earthed (d) metered
4. The voltage ratio of a PT is:
   (a) Vp/Vs = Ns/Np (b) Vp/Vs = Np/Ns (c) 1 (d) Np·Ns
5. A PT normally operates:
   (a) near short-circuit (b) near open-circuit (c) at rated full current (d) at zero voltage
6. **(NAT)** A 22000/110 PT sees 21,000 V primary. Find the ideal secondary voltage (V).
7. **(NAT)** A PT (Kn = 200) reads 108 V at 21,600 V primary. Find the ratio error (%).
8. **(NAT)** A PT secondary at 110 V feeds a burden of 2420 Ω. Find the burden VA.

<details><summary>🔑 Solutions</summary>

**1 → (b).** Parallel across the line.

**2 → (b).** 110 V.

**3 → (b).** Short-circuited (transformer short → high current).

**4 → (b).** `Vp/Vs = Np/Ns` (direct).

**5 → (b).** Near open-circuit.

**6 (NAT).** `Kn = 22000/110 = 200`; `Vs = 21000/200 = 105 V`.

**7 (NAT).** `R = 21600/108 = 200`; `%RE = (200−200)/200×100 = 0%` (exact here).

**8 (NAT).** `VA = Vs²/Z = 110²/2420 = 12100/2420 = 5 VA`.

</details>

---

## 🔧 Electrical Machines: Special Machines — Stepper, Servo, BLDC & Universal Motor

### 📖 Concept Deep Dive

**Special machines** serve control/precision applications rather than bulk power.

**Stepper motor.** Converts digital **pulses** into discrete **angular steps** — rotates by a fixed **step angle** per pulse, enabling **open-loop position control** (no feedback). Step angle:

```
Step angle β = 360° / (number of steps per revolution)
β = 360° / (m · Nr)   (m = phases/stator excitation sequences, Nr = rotor teeth)
Steps/rev = 360°/β;  Speed (rpm) = (β × fp × 60)/360 = fp·β/6   (fp = pulse rate in pps)
```

Types: **variable-reluctance**, **permanent-magnet**, and **hybrid** (most common, small step angles like 1.8°). Used in printers, robotics, CNC.

**Servo motor.** A motor optimised for **closed-loop control** (position/speed/torque) with **fast response, high torque-to-inertia, linear torque-speed**. Types: **AC servo** (2-phase induction type, low X/R rotor for stability) and **DC servo** (armature or field controlled). Low inertia for quick acceleration.

**BLDC (Brushless DC) motor.** A **permanent-magnet synchronous** motor **electronically commutated** (no brushes/commutator). Rotor = permanent magnets; stator = 3-phase winding switched by an inverter using **rotor-position feedback (Hall sensors)**. Advantages: **high efficiency, high power density, long life, low maintenance** (no brush wear). Used in EVs, drones, fans, disk drives.

**Universal motor.** A **series-wound** motor that runs on **both AC and DC** (because torque ∝ I² regardless of supply polarity direction — both field and armature currents reverse together). **High starting torque, high speed**, compact — used in **mixers, drills, vacuum cleaners** (portable high-speed appliances). Speed is high and load-dependent (series characteristic).

| Machine | Key trait | Use |
|---|---|---|
| Stepper | digital pulse → step angle; open-loop | printers, CNC |
| Servo | closed-loop, fast response, low inertia | robotics, control |
| BLDC | electronic commutation, PM rotor | EV, drones, fans |
| Universal | series motor, AC & DC | drills, mixers |

> 💎 **KEY RESULT** — Stepper: `β = 360°/(m·Nr)`, 1 pulse = 1 step (open-loop). Servo: closed-loop, low inertia. BLDC: PM rotor + electronic commutation (Hall sensors). Universal: **series motor, runs on AC & DC**, high starting torque/speed.

> 🧠 **MEMORY HOOK** — "**Stepper = pulses→steps (open loop); servo = closed-loop fast; BLDC = brushless PM (Hall); universal = series, AC+DC, high speed.**"

### 📐 Formula Sheet

| Quantity | Expression |
|---|---|
| Stepper step angle | `β = 360°/(m·Nr)` |
| Steps per revolution | `360°/β` |
| Stepper speed (rpm) | `N = (β/360)·fp·60 = fp·β/6` (fp = pps) |
| Universal motor | series: torque ∝ I², AC & DC |
| BLDC | PM rotor, electronic (inverter) commutation |
| Servo | low inertia, linear T-N, closed loop |

### 🧮 Solved Examples

**Example 1 — Stepper step angle & steps.**
A stepper motor has **4 stator phases** and a rotor with **50 teeth**. Find the step angle and steps per revolution.

```
β = 360°/(m·Nr) = 360°/(4·50) = 360/200 = 1.8°
Steps/rev = 360°/1.8° = 200
```

Step angle **1.8°**, **200 steps/rev**.

**Example 2 — Stepper speed from pulse rate.**
The motor above (β = 1.8°) is driven at **1000 pulses/sec**. Find the speed in rpm.

```
N = (β/360)·fp·60 = (1.8/360)·1000·60 = 0.005·60000 = 300 rpm
```

Speed **= 300 rpm**. (Check: 200 steps/rev ⇒ 1000 pps / 200 = 5 rev/s = 300 rpm. ✓)

### ⚠️ Common Traps

1. **Universal motor runs only on AC** — it runs on **both AC and DC** (series motor).
2. **BLDC has brushes** — it is **brushless** (electronic commutation via inverter + Hall sensors).
3. **Stepper needs feedback** — it is **open-loop** (one pulse = one step).
4. **Servo = stepper** — servo is **closed-loop** continuous control; stepper is pulse-stepped.
5. **Stepper step angle = 360/Nr** — it is `360/(m·Nr)` (include phases/excitations).
6. **Universal motor has low starting torque** — it has **high** starting torque (series characteristic).

### 📝 Test — Electrical Machines (8 Q)

1. A stepper motor's rotation per input pulse is the:
   (a) slip (b) step angle (c) pole pitch (d) torque angle
2. A universal motor can run on:
   (a) DC only (b) AC only (c) both AC and DC (d) 3-phase only
3. A BLDC motor is commutated:
   (a) by brushes (b) electronically (inverter + sensors) (c) mechanically (d) by slip rings
4. The motor best suited for precise closed-loop control is the:
   (a) stepper (b) servo (c) universal (d) induction
5. A universal motor is essentially a:
   (a) shunt motor (b) series motor (c) synchronous motor (d) induction motor
6. **(NAT)** A stepper motor: 3 phases, 24 rotor teeth. Find the step angle (degrees).
7. **(NAT)** A stepper with step angle 1.8° runs at 600 pps. Find the speed (rpm).
8. **(NAT)** A stepper makes 200 steps/rev at 400 pps. Find the speed (rev/s).

<details><summary>🔑 Solutions</summary>

**1 → (b).** Step angle.

**2 → (c).** Both AC and DC.

**3 → (b).** Electronically (inverter + Hall sensors).

**4 → (b).** Servo.

**5 → (b).** Series motor.

**6 (NAT).** `β = 360/(3·24) = 360/72 = 5°`.

**7 (NAT).** `N = (1.8/360)·600·60 = 0.005·36000 = 180 rpm`.

**8 (NAT).** `400 pps / 200 steps/rev = 2 rev/s`.

</details>

---

## 🔧 Power Electronics: Applications — SMPS, UPS, HVDC & PFC

### 📖 Concept Deep Dive

Power-electronic converters underpin major applications; GATE asks the **principle and the converter type** behind each.

**SMPS (Switched-Mode Power Supply).** A regulated DC supply using **high-frequency switching** (buck/boost/buck-boost/flyback/forward) instead of a linear regulator. Advantages: **high efficiency (70–95%)**, small size/weight (small high-frequency transformer/filters), wide input range. Vs **linear supply**: linear dissipates the excess as heat (low efficiency, bulky transformer) but has low noise; SMPS is efficient but has **switching noise/EMI**. Topologies: **flyback** (isolated, low power), **forward/push-pull/half-/full-bridge** (higher power).

**UPS (Uninterruptible Power Supply).** Provides **backup AC power** during mains failure, using a **battery + rectifier (charger) + inverter**. Types:
- **Offline/standby:** load on mains normally; switches to inverter on failure (small transfer time).
- **Online (double-conversion):** load always fed from the inverter (rectifier→battery/DC-bus→inverter); **zero transfer time**, best quality, used for critical loads.
- **Line-interactive:** between the two.

**HVDC (High-Voltage DC transmission).** Converts AC→DC at one end (**rectifier station**) and DC→AC at the other (**inverter station**) using **thyristor (LCC)** or **IGBT (VSC)** converters. Advantages: **no reactive-power/charging-current** issues over long distances, **lower losses** for long lines and **submarine cables**, **asynchronous interconnection** (links grids of different frequencies), precise power-flow control. **Break-even distance**: HVDC becomes cheaper than HVAC beyond ~**600–800 km** overhead (verify) due to lower line cost offsetting costly terminals.

**PFC (Power-Factor Correction).** Rectifier loads draw distorted, lagging current → poor pf and harmonics. **Active PFC** (a boost converter shaping the input current to be sinusoidal and in phase with voltage) raises input pf close to **unity** and meets harmonic standards. **Passive PFC** uses L-C filters (bulkier, partial). Also, **STATCOM/SVC** (FACTS devices) provide reactive compensation at the grid level.

| Application | Converter(s) | Key benefit |
|---|---|---|
| SMPS | buck/boost/flyback (HF) | high efficiency, compact |
| UPS | rectifier + battery + inverter | backup AC (online = 0 transfer) |
| HVDC | rectifier + inverter stations | long-distance, asynchronous link |
| PFC | boost (active) | near-unity input pf, low THD |

> 💎 **KEY RESULT** — SMPS = HF switching, high efficiency (vs lossy linear). UPS = rectifier+battery+inverter (**online = zero transfer time**). HVDC = AC-DC-AC (asynchronous link, long-distance/cable, break-even ~600–800 km). Active PFC = boost shaping current → near-unity pf.

> 🧠 **MEMORY HOOK** — "**SMPS = efficient HF supply; UPS = battery+inverter backup (online best); HVDC = AC-DC-AC long link; PFC = boost → unity pf.**"

### 📐 Formula Sheet

| Application | Note |
|---|---|
| SMPS efficiency | `η = Pout/Pin` (70–95%) |
| UPS online | double conversion, zero transfer time |
| HVDC break-even | ~600–800 km (overhead), less for cable (verify) |
| Active PFC | boost converter, input pf → ~1 |
| HVDC converter | LCC (thyristor) or VSC (IGBT) |
| Reactive support | STATCOM/SVC (FACTS) |

### 🧮 Solved Examples

**Example 1 — SMPS efficiency.**
An SMPS delivers **90 W** output while drawing **100 W** from the input. Find its efficiency and the power dissipated.

```
η = Pout/Pin = 90/100 = 0.90 = 90%
Loss = Pin − Pout = 100 − 90 = 10 W
```

Efficiency **90%**, loss **10 W** (contrast a linear regulator stepping 12 V→5 V at the same current, which would waste far more).

**Example 2 — PFC improvement.**
A rectifier load draws 10 A RMS with a displacement/distortion input pf of **0.7**. After active PFC the pf rises to **0.99** at the same real power. Find the reduction in input current (real power constant, 230 V).

```
P = V·I·pf ⇒ I = P/(V·pf)
Before: I1 = P/(230·0.7);  After: I2 = P/(230·0.99)
I2/I1 = 0.7/0.99 = 0.707 ⇒ current falls to ~70.7% (≈29% reduction)
```

PFC cuts the input current to about **71%** of its original value (≈29% lower) for the same real power.

### ⚠️ Common Traps

1. **SMPS is less efficient than linear** — SMPS is **more** efficient (linear wastes excess as heat).
2. **Online UPS has transfer time** — online (double-conversion) has **zero** transfer time; offline has a small delay.
3. **HVDC always cheaper** — only **beyond the break-even distance** (~600–800 km overhead); terminals are costly.
4. **HVDC links same-frequency grids only** — it can **asynchronously** link grids of **different frequencies**.
5. **PFC reduces real power** — PFC improves **power factor** (reduces reactive/distortion current), not the real power.
6. **Passive PFC gives unity pf** — **active** PFC (boost) achieves near-unity; passive is partial.

### 📝 Test — Power Electronics (8 Q)

1. An SMPS compared to a linear regulator is:
   (a) less efficient (b) more efficient (c) equally efficient (d) noiseless
2. An online (double-conversion) UPS has a transfer time of:
   (a) 10 ms (b) zero (c) 1 s (d) 100 ms
3. HVDC transmission can interconnect grids of:
   (a) same frequency only (b) different frequencies (asynchronous) (c) DC only (d) none
4. Active power-factor correction typically uses a:
   (a) buck converter (b) boost converter (c) cycloconverter (d) matrix converter
5. HVDC becomes economical beyond a break-even distance of roughly:
   (a) 50 km (b) 600–800 km (overhead) (c) 10 km (d) 5000 km
6. **(NAT)** An SMPS: Pout = 45 W, Pin = 50 W. Find the efficiency (%).
7. **(NAT)** For Q6, find the power dissipated (W).
8. **(NAT)** A load's input pf improves from 0.6 to 1.0 via PFC at constant real power. Find the ratio of new to old input current.

<details><summary>🔑 Solutions</summary>

**1 → (b).** More efficient.

**2 → (b).** Zero transfer time.

**3 → (b).** Different frequencies (asynchronous).

**4 → (b).** Boost converter.

**5 → (b).** ~600–800 km overhead.

**6 (NAT).** `η = 45/50 = 0.90 = 90%`.

**7 (NAT).** `Loss = 50 − 45 = 5 W`.

**8 (NAT).** `I ∝ 1/pf` ⇒ `I_new/I_old = 0.6/1.0 = 0.6` (current falls to 60%).

</details>

---

## 📊 Tech Progress

```
Measurements      [██████████████░░░░]  Round 5 · topic 14/20 (Instrument transformers: PT)
Electrical Mach.  [██████████████████]  Round 5 · topic 18/19 (Special machines)
Power Electronics [██████████████████]  Round 5 · topic 18/19 (Applications: SMPS/UPS/HVDC/PFC)
```

> 🎯 **Day 98 one-liners:** (1) **PT: Vp/Vs = Np/Ns, parallel, 110 V, near open-circuit; never short (CT = never open).** (2) **Stepper β = 360/(m·Nr) open-loop; servo closed-loop; BLDC brushless PM (Hall); universal = series, AC+DC.** (3) **SMPS efficient HF; UPS online = 0 transfer; HVDC AC-DC-AC asynchronous (~600-800 km); active PFC = boost → unity pf.**

*Correctness over length — derive, don't memorise blindly; verify any "verify" figure. Onward. ⚡*
