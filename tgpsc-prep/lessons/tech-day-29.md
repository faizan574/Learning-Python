# ⚡ GATE Technical Revision — Day 29 (2026-08-18)

*Three subjects, one sitting — true-RMS vs average meters, the DC machine, and the wider power-device family.*

📅 Tech Day 29 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics

> 🧠 **MEMORY HOOK** — Today is **"true reading, back-emf, and the device zoo"**: which meters read **true RMS** vs average, the DC machine's **EMF & commutation**, and the family beyond the SCR — **TRIAC, DIAC, GTO, MOSFET, IGBT**.

---

## 🔧 Measuring Instruments: Electrostatic, Induction, Thermal & Rectifier Instruments

### 📖 Concept Deep Dive

This group rounds out the analogue meters and — crucially for GATE — separates **true-RMS** meters from **average-responding** ones.

| Instrument | Principle | Reads | AC/DC |
|---|---|---|---|
| **Electrostatic** | Force between charged plates; `Td = ½·V²·(dC/dθ)` | **True RMS** (θ ∝ V²) | Both |
| **Induction** | Eddy currents from two AC fluxes; `Td ∝ φ1·φ2·sinα` | — | **AC only** |
| **Thermocouple** | Heater warms a TC junction; emf ∝ I²(heat) | **True RMS** | Both, up to RF |
| **Hot-wire** | Wire expands on heating (∝ I²) | **True RMS** | Both |
| **Rectifier (diode + PMMC)** | PMMC reads **average** of rectified wave | **Average**, RMS-scaled | AC |

**Electrostatic instruments** draw negligible current on DC (only leakage), giving a **very high input impedance** — ideal for **high-voltage** measurement. Torque is small, so they are delicate.

**Induction instruments** (two-flux/shaded-pole) work **only on AC** and are the basis of the **energy meter**.

**Thermal instruments** (thermocouple, hot-wire) respond to the **heating effect** (`∝ I²`), so they read **true RMS independent of waveform and frequency** — the **thermocouple meter** is the standard for **radio-frequency current**.

> 💎 **KEY RESULT** — **True-RMS meters** (electrostatic, thermocouple, hot-wire, MI, EMMC) have deflection `∝ V²` or `∝ I²`, so they read the **correct RMS for any waveform**. **Rectifier (average-responding) meters** read the **average** and are merely **scaled by 1.11** assuming a sine wave.

**Rectifier instruments** are the most common AC multimeter voltmeters — high sensitivity (large `Ω/V`), but they are **average-responding, RMS-calibrated**. The scale multiplies the measured average by the **sine form factor `1.11`**, so a **non-sinusoidal** input gives a **form-factor error**.

> ⚠️ **TRAP ALERT** — A rectifier voltmeter reads correctly **only for a pure sine wave**. For any other waveform the reading equals `1.11 × (actual average)`, which is **not** the true RMS. Thermal/electrostatic/MI meters have no such error.

Form factor: `FF = RMS/average = 1.11` for a sine.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Electrostatic torque | `Td = ½·V²·(dC/dθ)` , `θ ∝ V²` |
| Induction torque | `Td ∝ φ1·φ2·sinα` |
| Thermocouple/hot-wire | reading `∝ I²` ⇒ true RMS |
| Rectifier meter reading | `= 1.11 × (average of rectified wave)` |
| Form factor (sine) | `FF = RMS/avg = 1.11` |

### 🧮 Solved Examples

**Example 1 — Form-factor error on a square wave.** An average-responding, sine-calibrated (rectifier) voltmeter measures a **symmetrical square wave** of amplitude `Vm`. Find the reading and the error (true RMS of a square wave = `Vm`, its rectified average = `Vm`).

```
Meter reading = 1.11 × average = 1.11 × Vm
True RMS      = Vm
Error = (1.11·Vm − Vm)/Vm = +0.11 = +11%   (reads 11% HIGH)
```
A **thermocouple** meter on the same input would read the correct `Vm`.

**Example 2 — Electrostatic voltmeter.** An electrostatic voltmeter's capacitance varies as `dC/dθ = 5 pF/rad`, spring constant `K = 1×10⁻⁹ N·m/rad`. Find the deflection at `V = 200 V` DC.

```
θ = ½·V²·(dC/dθ)/K = ½ × (200)² × 5×10⁻¹² / 1×10⁻⁹
  = ½ × 40000 × 5×10⁻¹² / 1×10⁻⁹
  = 20000 × 5×10⁻¹² / 1×10⁻⁹ = 1×10⁻⁷ / 1×10⁻⁹ = 100 rad
```
(Practical designs use much smaller `dC/dθ`; the proportionality `θ ∝ V²` is the exam point.)

### ⚠️ Common Traps

1. Assuming a **rectifier** meter reads true RMS — it is **average-responding**.
2. Forgetting the `1.11` form-factor scaling (and its error on non-sine waves).
3. Using an **induction** instrument on **DC** — it works on **AC only**.
4. Overlooking that **thermocouple** meters work up to **RF** (heating effect).
5. Thinking electrostatic meters load the circuit — they have **very high impedance**.
6. Mislabeling MI/EMMC as average-responding — they are **true-RMS** (θ ∝ I²).

### 📝 Test — Measuring Instruments (8 Q)

**Q1 (MCQ).** Which instrument reads true RMS irrespective of waveform?
(a) rectifier PMMC (b) thermocouple (c) plain PMMC (d) none

**Q2 (MCQ).** A rectifier-type AC voltmeter is calibrated to read RMS assuming a:
(a) square wave (b) triangular wave (c) sine wave (d) any wave

**Q3 (MCQ).** The form factor of a sine wave is:
(a) 1.0 (b) 1.11 (c) 1.414 (d) 0.707

**Q4 (MCQ).** Electrostatic instruments are mainly used for measuring:
(a) low DC current (b) high voltage (c) power (d) frequency

**Q5 (MCQ).** Thermocouple instruments are especially suited to:
(a) DC only (b) low-frequency AC (c) radio-frequency current (d) power measurement

**Q6 (NAT).** A sine-calibrated rectifier voltmeter measures a full-wave-rectified sine whose true RMS is 100 V. What does it read (V)? (ideal case)

**Q7 (NAT).** The same rectifier meter measures a square wave of amplitude 50 V (RMS = 50 V, average = 50 V). Find the reading (V).

**Q8 (NAT).** An electrostatic voltmeter has `θ ∝ V²`. If it deflects 40° at 100 V, what deflection (degrees) results at 150 V?

<details><summary>🔑 Solutions</summary>

**Q1 — (b) thermocouple.**

**Q2 — (c) sine wave.**

**Q3 — (b) 1.11.**

**Q4 — (b) high voltage.**

**Q5 — (c) radio-frequency current.**

**Q6.** For a sine, RMS = 1.11 × average and the scale corrects exactly, so it reads the true **100 V**.

**Q7.** Reading = 1.11 × average = 1.11 × 50 = **55.5 V** (11% high vs true 50 V).

**Q8.** `θ ∝ V²` ⇒ `θ2 = 40 × (150/100)² = 40 × 2.25 = 90°`.

</details>

---

## 🔧 Electrical Machines: DC Machines I — Construction, EMF, Armature Reaction & Commutation

### 📖 Concept Deep Dive

A **DC machine** is reversible (generator ⇄ motor). Its stationary part carries the **field** (poles, yoke, field winding); the rotating **armature** carries the working winding, the **commutator** (a mechanical rectifier), and **brushes**.

**EMF equation.** With `φ` = flux per pole (Wb), `Z` = total armature conductors, `N` = speed (rpm), `P` = poles, `A` = parallel paths:

```
E = (P · φ · Z · N) / (60 · A)   volts
Lap winding:  A = P     Wave winding:  A = 2
```

**Torque developed:**

```
Ta = (P · φ · Z · Ia) / (2π · A)   N·m       (Ta = 0.159 · φ · Z · Ia · P/A)
```

**Armature reaction** is the effect of the **armature MMF** on the main field:

| Effect | Description | Consequence |
|---|---|---|
| **Cross-magnetisation** | Armature MMF acts at 90° to main field, **distorting** it | Shifts the **MNA** (in rotation direction for a generator, against it for a motor) |
| **Demagnetisation** | Component opposing the main field (after brush shift) | **Weakens** flux ⇒ lower EMF/torque |

**Remedies:** **interpoles (commutating poles)** in the neutral zone, and **compensating windings** in the pole faces (both in series with the armature).

**Commutation** is the reversal of current in an armature coil as it passes under a brush. The coil's **reactance voltage** (self-induced emf opposing the reversal) delays commutation and causes **sparking**.

> 💎 **KEY RESULT** — EMF `E = PφZN/(60A)`. Good commutation needs the **reactance voltage** neutralised; **interpoles** generate a **reversing emf** exactly cancelling it, giving spark-free (near-ideal, linear) commutation.

Methods to improve commutation: **resistance commutation** (high-resistance carbon brushes), **EMF commutation** (interpoles), and brush shifting (small machines).

> 🧠 **MEMORY HOOK** — "**Lap = P paths (high current), Wave = 2 paths (high voltage)**". Interpole polarity: **same as the next main pole ahead** (generator); **same as the preceding main pole** (motor).

> ⚠️ **TRAP ALERT** — Interpoles cancel the **reactance voltage** (aid **commutation**); **compensating windings** cancel **cross-magnetisation** under the pole face (a different problem). Don't swap their roles. Also, brush shift alone causes **demagnetisation** — interpoles are the modern fix.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Generated EMF | `E = P·φ·Z·N / (60·A)` |
| Torque | `Ta = P·φ·Z·Ia / (2π·A)` |
| Parallel paths | Lap `A = P` ; Wave `A = 2` |
| Back-emf (motor) | `Eb = V − Ia·Ra` |
| Speed | `N ∝ Eb/φ` |

### 🧮 Solved Examples

**Example 1 — Generated EMF.** A `4-pole`, **wave-wound** DC generator has `500` armature conductors, flux/pole `0.02 Wb`, running at `1000 rpm`. Find the generated EMF; then find it if **lap-wound**.

```
Wave: A = 2
E = P·φ·Z·N/(60·A) = 4 × 0.02 × 500 × 1000 / (60 × 2)
  = 40000 / 120 = 333.3 V

Lap: A = P = 4
E = 40000 / (60 × 4) = 40000/240 = 166.7 V
```

**Example 2 — Torque.** The same machine (lap-wound, `A = 4`) runs as a motor drawing armature current `Ia = 20 A`. Find the developed torque.

```
Ta = P·φ·Z·Ia / (2π·A) = 4 × 0.02 × 500 × 20 / (2π × 4)
   = 800 / 25.13 = 31.83 N·m
```

### ⚠️ Common Traps

1. Using `A = 2` for lap or `A = P` for wave — it's the **reverse**.
2. Forgetting the **60** (rpm→per second) in the EMF equation.
3. Confusing **interpole** (commutation) with **compensating winding** (cross-magnetisation).
4. Taking armature reaction as only demagnetising — it is primarily **cross-magnetising (distorting)**.
5. Ignoring **reactance voltage** as the cause of sparking.
6. Mixing up MNA shift direction: **with** rotation (generator), **against** (motor).

### 📝 Test — Electrical Machines (8 Q)

**Q1 (MCQ).** In a lap winding the number of parallel paths equals:
(a) 2 (b) P (c) P/2 (d) 2P

**Q2 (MCQ).** The primary effect of armature reaction is:
(a) demagnetisation only (b) cross-magnetisation/distortion (c) increasing flux (d) no effect

**Q3 (MCQ).** Interpoles are used to improve:
(a) efficiency (b) commutation (c) cooling (d) power factor

**Q4 (MCQ).** The reactance voltage during commutation causes:
(a) higher EMF (b) sparking at brushes (c) speed rise (d) flux increase

**Q5 (MCQ).** Compensating windings neutralise:
(a) reactance voltage (b) cross-magnetisation under pole faces (c) eddy currents (d) hysteresis

**Q6 (NAT).** A 6-pole lap-wound generator has 600 conductors, flux/pole 0.03 Wb, 1200 rpm. Find the EMF (V).

**Q7 (NAT).** A 4-pole wave-wound machine, 800 conductors, flux/pole 0.025 Wb, armature current 25 A. Find the torque (N·m).

**Q8 (NAT).** A DC motor has back-emf 220 V, armature resistance 0.5 Ω, supply 240 V. Find the armature current (A).

<details><summary>🔑 Solutions</summary>

**Q1 — (b) P.**

**Q2 — (b) cross-magnetisation/distortion.**

**Q3 — (b) commutation.**

**Q4 — (b) sparking at brushes.**

**Q5 — (b) cross-magnetisation under pole faces.**

**Q6.** Lap: A = P = 6. `E = 6×0.03×600×1200/(60×6) = 129600/360 = 360 V`.

**Q7.** Wave: A = 2. `Ta = P·φ·Z·Ia/(2π·A) = 4×0.025×800×25/(2π×2) = 2000/12.566 = 159.2 N·m`.

**Q8.** `Ia = (V − Eb)/Ra = (240 − 220)/0.5 = 20/0.5 = 40 A`.

</details>

---

## 🔧 Power Electronics: Other Devices & Gate Drives — TRIAC, DIAC, GTO, MOSFET/IGBT

### 📖 Concept Deep Dive

Beyond the SCR lies a family of switches, each suited to a niche.

| Device | Control | Turn-off | Conduction | Typical use |
|---|---|---|---|---|
| **SCR** | Current (gate) | Commutation only | Unidirectional | Phase-controlled converters |
| **TRIAC** | Current (gate) | Line (AC) | **Bidirectional** | AC power control (dimmers, fan regulators) |
| **DIAC** | None (breakover) | — | Bidirectional | **Triggers a TRIAC** |
| **GTO** | Current (gate) | **Gate turn-off** (−ve pulse) | Unidirectional | High-power inverters/choppers |
| **MOSFET** | **Voltage** (gate) | Gate control | Unidirectional | High-frequency, low-medium power |
| **IGBT** | **Voltage** (gate) | Gate control | Unidirectional | Medium-high power, moderate freq |

**TRIAC** = two SCRs in **antiparallel** with a **single gate** — it conducts in **both directions** (terminals MT1, MT2). It has **four trigger modes** (quadrants); the modes `I+` and `III−` are the most sensitive. Ratings are lower than an SCR.

**DIAC** is a **bidirectional trigger diode** (no gate) that **breaks over** (~`30 V`) in both directions and shows **negative resistance** — used in an **RC-DIAC** circuit to fire a TRIAC.

**GTO** can be **turned OFF by a large negative gate current** (turn-off gain only ~`3–5`), removing the need for a forced-commutation circuit — a big advantage in DC choppers/inverters.

**MOSFET** is a **voltage-controlled, majority-carrier** device: very **fast**, with a **positive temperature coefficient** (so it parallels easily), but higher on-resistance at high voltage. **IGBT** combines a **MOSFET gate** (voltage control, easy drive) with a **BJT-like output** (low conduction drop) — the workhorse of medium-high-power converters.

> 💎 **KEY RESULT** — **MOSFET and IGBT are voltage-controlled** (drive the gate-source capacitance); **SCR, TRIAC and GTO are current-controlled**. Only the **GTO (and MOSFET/IGBT)** can be **turned off by the gate**; the plain SCR/TRIAC need **line/forced commutation**.

**Gate/firing circuits & isolation:** simple **R** and **RC** firing set the delay angle; the **UJT relaxation oscillator** produces sharp trigger pulses. Isolation between the low-voltage control and high-voltage power side uses a **pulse transformer** or an **optocoupler**.

**UJT trigger relations:**

```
Intrinsic standoff ratio η = RB1 / (RB1 + RB2)
Peak-point voltage  Vp = η·VBB + VD   (VD ≈ 0.7 V)
Oscillation freq    f ≈ 1 / (R·C · ln(1/(1 − η)))
```

> 🧠 **MEMORY HOOK** — "**Voltage vs current, and who can self-stop**": MOSFET/IGBT = voltage-driven; SCR/TRIAC/GTO = current-driven; **GTO stops itself** via a negative gate pulse. **DIAC fires the TRIAC**.

> ⚠️ **TRAP ALERT** — The **DIAC has no gate** and is only a **trigger** device — it never carries load current. And a **plain SCR/TRIAC cannot be gate-turned-off**; only the **GTO** among the thyristor family can.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| UJT standoff ratio | `η = RB1/(RB1 + RB2)` |
| UJT peak voltage | `Vp = η·VBB + VD` |
| UJT oscillator freq | `f ≈ 1/(R·C·ln(1/(1 − η)))` |
| GTO turn-off gain | `= IA / IG(off)` (typically 3–5) |
| TRIAC | two SCRs antiparallel, single gate, bidirectional |

### 🧮 Solved Examples

**Example 1 — UJT peak voltage.** A UJT has `η = 0.6`, `VBB = 20 V`, `VD = 0.7 V`. Find the peak-point voltage `Vp`.

```
Vp = η·VBB + VD = 0.6 × 20 + 0.7 = 12 + 0.7 = 12.7 V
```

**Example 2 — UJT oscillator frequency.** A UJT relaxation oscillator has `R = 10 kΩ`, `C = 0.1 µF`, `η = 0.63`. Find the frequency of the trigger pulses.

```
RC = 10×10³ × 0.1×10⁻⁶ = 1×10⁻³ s
1 − η = 0.37 ;  ln(1/0.37) = ln(2.703) = 0.994
f ≈ 1/(RC · ln(1/(1−η))) = 1/(1×10⁻³ × 0.994)
  = 1/(9.94×10⁻⁴) ≈ 1006 Hz  ≈ 1.0 kHz
```

### ⚠️ Common Traps

1. Thinking a **TRIAC** conducts one way — it is **bidirectional**.
2. Giving the **DIAC** a gate — it has **none** (breakover device).
3. Believing an **SCR can be gate-turned-off** — only the **GTO** can.
4. Calling MOSFET/IGBT **current-controlled** — they are **voltage-controlled**.
5. Forgetting the **VD** term in `Vp = η·VBB + VD`.
6. Ignoring the need for **isolation** (pulse transformer / optocoupler) between control and power.

### 📝 Test — Power Electronics (8 Q)

**Q1 (MCQ).** A TRIAC is equivalent to:
(a) two diodes in series (b) two SCRs in antiparallel with one gate (c) an SCR with two gates (d) a GTO

**Q2 (MCQ).** Which device can be turned OFF by a gate signal?
(a) SCR (b) TRIAC (c) GTO (d) DIAC

**Q3 (MCQ).** The DIAC is used mainly to:
(a) rectify (b) trigger a TRIAC (c) turn off an SCR (d) measure voltage

**Q4 (MCQ).** MOSFET and IGBT are:
(a) current-controlled (b) voltage-controlled (c) uncontrolled (d) light-controlled

**Q5 (MCQ).** The UJT is commonly used to generate:
(a) sine waves (b) trigger pulses for SCRs (c) DC voltage (d) sawtooth power

**Q6 (NAT).** A UJT has η = 0.55, VBB = 24 V, VD = 0.7 V. Find the peak-point voltage Vp (V).

**Q7 (NAT).** A UJT relaxation oscillator: R = 47 kΩ, C = 0.01 µF, η = 0.63. Find the pulse frequency (Hz).

**Q8 (NAT).** A GTO conducts 600 A and needs −150 A gate current to turn off. Find its turn-off gain.

<details><summary>🔑 Solutions</summary>

**Q1 — (b) two SCRs in antiparallel with one gate.**

**Q2 — (c) GTO.**

**Q3 — (b) trigger a TRIAC.**

**Q4 — (b) voltage-controlled.**

**Q5 — (b) trigger pulses for SCRs.**

**Q6.** `Vp = η·VBB + VD = 0.55×24 + 0.7 = 13.2 + 0.7 = 13.9 V`.

**Q7.** `RC = 47×10³ × 0.01×10⁻⁶ = 4.7×10⁻⁴ s`; `ln(1/(1−0.63)) = ln(2.703) = 0.994`.
`f ≈ 1/(4.7×10⁻⁴ × 0.994) = 1/(4.67×10⁻⁴) ≈ 2141 Hz`.

**Q8.** Turn-off gain `= IA/IG(off) = 600/150 = 4`.

</details>

---

> 🧠 **DAY-29 WRAP** — Meters: **thermocouple/electrostatic/MI = true RMS**; **rectifier = average × 1.11** (sine only). DC machine: **E = PφZN/(60A)**, lap A=P / wave A=2, **interpoles fix commutation**, compensating windings fix cross-magnetisation. Devices: **TRIAC bidirectional**, **DIAC triggers it**, **GTO gate-turn-off**, **MOSFET/IGBT voltage-controlled**, **UJT Vp = ηVBB + VD**. Revise the three boxed KEY RESULTS. ⚡
