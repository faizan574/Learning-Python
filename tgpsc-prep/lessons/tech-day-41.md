# ⚡ GATE Technical Revision — Day 41 (2026-08-30)

*Three subjects, one sitting — the Q-meter, special machines, and power-electronic applications.*

📅 Tech Day 41 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics

> 🧠 **MEMORY HOOK** — Today is **"resonate, step, and apply"**: the **Q-meter** (resonance & voltage magnification), **special machines** (stepper/servo/BLDC/universal), and real-world **applications** (SMPS/UPS/HVDC/PFC).

---

## 🔧 Measuring Instruments: Q-Meter, Frequency/Phase, Ohmmeters & Earth Resistance

### 📖 Concept Deep Dive

**Q-meter:** measures the **quality factor Q** of a coil (and inductance/capacitance) using **series resonance**. An oscillator injects a small voltage into a series L-C-R circuit; at resonance the **capacitor voltage is Q times the applied voltage**:

```
Q = ωL/R = 1/(ωCR) = Vc/V        (voltage magnification at resonance)
Resonance:  f = 1/(2π·√(L·C))
```

So the Q-meter reads Q directly from the **voltage magnification** `Vc/V`, and gives `L` or `C` from the resonant frequency.

**Frequency measurement:** Lissajous figures (CRO), **digital frequency counters**, Wien bridge, resonance methods.
**Phase measurement:** from a **Lissajous ellipse**, `sinφ = Y-intercept / Y-max`; or a dual-trace CRO / digital phase meter.

**Ohmmeters:** the **series-type** (medium resistance; zero reads at short) and **shunt-type** (low resistance); both have **non-linear** scales.

**Earth-resistance measurement:** the **earth tester (Megger earth tester)** using the **fall-of-potential (3-point/4-point)** method with auxiliary electrodes.

> 💎 **KEY RESULT** — In a Q-meter, `Q = Vc/V` (voltage magnification at series resonance) `= ωL/R`. A high-Q coil gives a large `Vc` for a tiny applied `V`. Phase from a Lissajous ellipse: `sinφ = Y1/Y2` (intercept ÷ maximum).

> ⚠️ **TRAP ALERT** — The Q-meter works at **series resonance** (voltage magnification), not parallel. **Series-type ohmmeter = medium R** (zero at short/right); **shunt-type = low R**. Earth resistance uses the **fall-of-potential** method, not a simple ohmmeter.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Quality factor | `Q = ωL/R = 1/(ωCR) = Vc/V` |
| Resonant frequency | `f = 1/(2π·√(L·C))` |
| Phase (Lissajous) | `sinφ = Y-intercept / Y-max` |
| Series ohmmeter | medium R (zero at short) |

### 🧮 Solved Examples

**Example 1 — Coil Q.** A coil `L = 100 µH`, `R = 5 Ω`, is tested at `1 MHz`. Find its Q.

```
ωL = 2π × 10⁶ × 100×10⁻⁶ = 2π × 100 = 628.3 Ω
Q = ωL/R = 628.3/5 = 125.7
```

**Example 2 — Voltage magnification & phase.** (a) At resonance a Q-meter shows `Vc = 100 V` for an applied `V = 0.1 V`; find Q. (b) A Lissajous ellipse has Y-intercept `2 cm` and Y-max `4 cm`; find the phase.

```
(a) Q = Vc/V = 100/0.1 = 1000
(b) sinφ = 2/4 = 0.5 ⇒ φ = 30°
```

### ⚠️ Common Traps

1. Thinking the Q-meter uses **parallel** resonance — it's **series**.
2. Forgetting `Q = Vc/V` (voltage magnification).
3. Swapping series (medium R) and shunt (low R) ohmmeter types.
4. Using a plain ohmmeter for **earth resistance** (use fall-of-potential).
5. Reversing the Lissajous phase ratio (`sinφ = intercept/max`).
6. Mixing up `Q = ωL/R` with `Q = R/ωL`.

### 📝 Test — Measuring Instruments (8 Q)

**Q1 (MCQ).** A Q-meter is based on:
(a) parallel resonance (b) series resonance (c) a bridge (d) rectification

**Q2 (MCQ).** In a Q-meter, Q equals:
(a) V/Vc (b) Vc/V (c) VcV (d) 1/Vc

**Q3 (MCQ).** A shunt-type ohmmeter measures:
(a) high R (b) low R (c) medium R (d) insulation R

**Q4 (MCQ).** Earth resistance is measured by the:
(a) Wheatstone bridge (b) fall-of-potential method (c) Q-meter (d) Schering bridge

**Q5 (MCQ).** From a Lissajous ellipse, the phase is:
(a) cosφ = Y1/Y2 (b) sinφ = Y1/Y2 (c) tanφ = Y1/Y2 (d) φ = Y1·Y2

**Q6 (NAT).** A coil L = 50 µH, R = 2 Ω, at 2 MHz. Find Q.

**Q7 (NAT).** A Q-meter shows Vc = 250 V for an applied V = 0.5 V. Find Q.

**Q8 (NAT).** A Lissajous ellipse: Y-intercept 1.5 cm, Y-max 3 cm. Find the phase angle (degrees).

<details><summary>🔑 Solutions</summary>

**Q1 — (b) series resonance.**

**Q2 — (b) Vc/V.**

**Q3 — (b) low R.**

**Q4 — (b) fall-of-potential method.**

**Q5 — (b) sinφ = Y1/Y2.**

**Q6.** `ωL = 2π×2×10⁶×50×10⁻⁶ = 2π×100 = 628.3 Ω`; `Q = 628.3/2 = 314.2`.

**Q7.** `Q = Vc/V = 250/0.5 = 500`.

**Q8.** `sinφ = 1.5/3 = 0.5 ⇒ φ = 30°`.

</details>

---

## 🔧 Electrical Machines: Special Machines — Stepper, Servo, BLDC & Universal

### 📖 Concept Deep Dive

| Machine | Principle | Key use |
|---|---|---|
| **Stepper** | Rotates in **discrete steps** per input pulse; open-loop digital positioning | Printers, CNC, robotics |
| **Servo** | **Closed-loop** position/speed control; high torque-to-inertia, fast response | Precise motion control |
| **BLDC** | PM rotor with **electronic commutation** (Hall sensors + inverter); no brushes | EVs, drones, fans |
| **Universal** | A **series motor** that runs on **AC or DC**; high speed & starting torque | Mixers, drills, vacuum cleaners |

**Stepper motor step angle** — the rotation per input pulse:

```
Step angle β = 360° / (steps per revolution) = 360° / (m · Nr)
Steps per revolution = 360° / β
```
where `m` = number of phases (stator) and `Nr` = rotor teeth. Types: **variable reluctance (VR)**, **permanent magnet (PM)**, and **hybrid**.

> 💎 **KEY RESULT** — Stepper **step angle `β = 360°/(steps per rev)`**; smaller `β` = finer resolution. The **BLDC** replaces mechanical brushes with **electronic commutation** (Hall-sensor feedback + inverter), giving high efficiency and long life. The **universal motor** is a **series motor** that works on **both AC and DC**.

> 🧠 **MEMORY HOOK** — "**Stepper = discrete steps (open loop); servo = closed loop; BLDC = electronic commutation; universal = AC/DC series**". Step angle = **360/(steps per rev)**.

> ⚠️ **TRAP ALERT** — A **stepper** is normally **open-loop** (position by counting pulses); a **servo** is **closed-loop**. A **BLDC** needs **rotor-position feedback** (Hall sensors) for commutation. The **universal motor** is the one that runs on **both AC and DC**.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Stepper step angle | `β = 360°/(steps per rev) = 360/(m·Nr)` |
| Steps per revolution | `= 360°/β` |
| Number of steps for angle θ | `= θ/β` |
| Revolutions for N steps | `= N / (steps per rev)` |

### 🧮 Solved Examples

**Example 1 — Stepper resolution.** A stepper motor has a **step angle of 1.8°**. Find the steps per revolution and the number of revolutions for `500` pulses.

```
Steps per revolution = 360/1.8 = 200 steps
Revolutions for 500 pulses = 500/200 = 2.5 revolutions
```

**Example 2 — Step angle from geometry.** A variable-reluctance stepper has `m = 3` phases and `Nr = 8` rotor teeth. Find the step angle.

```
β = 360°/(m·Nr) = 360/(3×8) = 360/24 = 15°
(Steps per revolution = 360/15 = 24)
```

### ⚠️ Common Traps

1. Calling a **stepper closed-loop** — it's normally **open-loop**.
2. Forgetting a **BLDC** needs **position feedback** (Hall sensors).
3. Thinking a **universal motor** runs only on AC — it runs on **AC and DC**.
4. Miscomputing step angle (`360/steps`, not `steps/360`).
5. Confusing servo (control) with stepper (stepping).
6. Assuming smaller step angle = fewer steps (it's **more** steps/rev).

### 📝 Test — Electrical Machines (8 Q)

**Q1 (MCQ).** A stepper motor is usually controlled in:
(a) closed loop (b) open loop (c) no control (d) analog only

**Q2 (MCQ).** A motor that runs on both AC and DC is the:
(a) BLDC (b) universal motor (c) servo (d) stepper

**Q3 (MCQ).** A BLDC motor uses ___ for commutation:
(a) brushes (b) electronic switching (Hall sensors) (c) a commutator (d) slip rings

**Q4 (MCQ).** The step angle of a stepper with 400 steps/rev is:
(a) 0.9° (b) 1.8° (c) 2.5° (d) 5°

**Q5 (MCQ).** A servo motor is characterised by:
(a) open-loop stepping (b) closed-loop fast response (c) AC/DC operation (d) no feedback

**Q6 (NAT).** A stepper motor has a step angle of 0.9°. Find the steps per revolution.

**Q7 (NAT).** For a 1.8° stepper, find the number of pulses for 3 complete revolutions.

**Q8 (NAT).** A VR stepper: m = 4 phases, Nr = 6 rotor teeth. Find the step angle (degrees).

<details><summary>🔑 Solutions</summary>

**Q1 — (b) open loop.**

**Q2 — (b) universal motor.**

**Q3 — (b) electronic switching (Hall sensors).**

**Q4 — (a) 0.9°** (`360/400`).

**Q5 — (b) closed-loop fast response.**

**Q6.** `Steps/rev = 360/0.9 = 400`.

**Q7.** `Steps/rev = 360/1.8 = 200`; `3 rev = 3×200 = 600 pulses`.

**Q8.** `β = 360/(4×6) = 360/24 = 15°`.

</details>

---

## 🔧 Power Electronics: Applications — SMPS, UPS, HVDC, PFC & Motor Drives

### 📖 Concept Deep Dive

| Application | What it does | Key point |
|---|---|---|
| **SMPS** | High-frequency switching DC supply (buck/boost/flyback) | **Efficient (>80%) & compact** vs linear |
| **UPS** | Backup power on mains failure | **Online (double-conversion)** = zero transfer time |
| **HVDC** | DC transmission (rectifier → DC line → inverter) | Efficient over **long distances**, asynchronous ties |
| **PFC** | Shapes input current in phase with voltage | **Active PFC = boost converter**; pf → unity |
| **VFD (drive)** | Rectifier + DC link + inverter (V/f or vector) | Variable-speed AC motor control |

**UPS types:** **offline/standby** (transfer time on failure), **line-interactive**, and **online/double-conversion** (rectifier + battery + inverter always feeding the load ⇒ **no transfer time**, best for critical loads).

**HVDC advantages:** no reactive/charging current, **asynchronous interconnection**, precise power control, no skin effect, lower losses over long lines. Economical **beyond a break-even distance** (~600-800 km overhead, ~50 km for cables).

**PFC:** passive (L-C) or **active** (a **boost converter** shaping the input current sinusoidal and in phase) — brings input pf near unity and cuts harmonics; standard in modern SMPS.

> 💎 **KEY RESULT** — **Online (double-conversion) UPS** has **zero transfer time** (best for critical loads). **HVDC** is economical **beyond the break-even distance** and allows **asynchronous grid ties**. **Active PFC** uses a **boost converter** to push the input power factor toward **unity**.

> 🧠 **MEMORY HOOK** — "**SMPS efficient, Online-UPS zero-transfer, HVDC long-distance/asynchronous, PFC = boost to unity pf**". VFD = rectifier + DC link + inverter.

> ⚠️ **TRAP ALERT** — Only the **online/double-conversion UPS** has **no transfer time**; standby UPS has a small transfer delay. HVDC beats HVAC only **beyond break-even distance**. **Active PFC** is a **boost** stage — don't confuse it with power-factor **capacitor banks** (passive).

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| SMPS efficiency | `η = Pout/Pin` |
| Power factor | `pf = P/S = cosφ` |
| Real / apparent power | `P = VI cosφ` , `S = VI` |
| Current after PFC (same P) | `I' = P/(V×pf')` |
| HVDC break-even | ~600-800 km overhead (~50 km cable) |

### 🧮 Solved Examples

**Example 1 — SMPS efficiency.** An SMPS delivers `80 W` output while drawing `90 W` from the mains. Find its efficiency.

```
η = Pout/Pin = 80/90 = 0.889 = 88.9%
```

**Example 2 — PFC current reduction.** A load draws `5 A` at `230 V` with pf `0.7`. Find the real power, and the current after PFC raises the pf to unity (same real power).

```
P = V·I·cosφ = 230 × 5 × 0.7 = 805 W
S(before) = 230 × 5 = 1150 VA
After PFC (pf = 1): I' = P/(V×1) = 805/230 = 3.5 A   (current drops from 5 A to 3.5 A)
```

### ⚠️ Common Traps

1. Thinking a **standby UPS** has zero transfer time — only **online** does.
2. Believing HVDC always beats HVAC — only **beyond break-even distance**.
3. Confusing **active PFC (boost)** with **capacitor-bank** correction.
4. Treating an SMPS as a linear regulator — it's **switching**.
5. Forgetting a **VFD** has three stages (rectifier-DC link-inverter).
6. Using apparent power where real power is needed in efficiency/PFC.

### 📝 Test — Power Electronics (8 Q)

**Q1 (MCQ).** Which UPS type has zero transfer time?
(a) standby (b) line-interactive (c) online/double-conversion (d) offline

**Q2 (MCQ).** HVDC transmission is economical for:
(a) short lines (b) long distances (c) all distances (d) only cables

**Q3 (MCQ).** Active power-factor correction typically uses a:
(a) buck converter (b) boost converter (c) capacitor bank (d) transformer

**Q4 (MCQ).** An SMPS is preferred over a linear supply because it is:
(a) larger (b) more efficient & compact (c) cheaper always (d) slower

**Q5 (MCQ).** A VFD controls an AC motor using:
(a) rectifier + DC link + inverter (b) a chopper only (c) a cycloconverter only (d) a transformer

**Q6 (NAT).** An SMPS delivers 120 W from a 150 W input. Find its efficiency (%).

**Q7 (NAT).** A load draws 10 A at 230 V, pf 0.8. Find the real power (W).

**Q8 (NAT).** For Q7, find the current (A) after PFC raises pf to unity (same real power).

<details><summary>🔑 Solutions</summary>

**Q1 — (c) online/double-conversion.**

**Q2 — (b) long distances.**

**Q3 — (b) boost converter.**

**Q4 — (b) more efficient & compact.**

**Q5 — (a) rectifier + DC link + inverter.**

**Q6.** `η = 120/150 = 0.80 = 80%`.

**Q7.** `P = 230 × 10 × 0.8 = 1840 W`.

**Q8.** `I' = P/(V×1) = 1840/230 = 8 A`.

</details>

---

> 🧠 **DAY-41 WRAP** — Q-meter: **series resonance, Q = Vc/V = ωL/R**; phase from Lissajous `sinφ`. Special machines: **stepper (open-loop, β=360/steps)**, servo (closed-loop), **BLDC (electronic commutation)**, universal (AC/DC series). Applications: **online UPS zero-transfer**, **HVDC beyond break-even**, **active PFC = boost to unity pf**, VFD = 3 stages. Revise the boxed KEY RESULTS. ⚡
