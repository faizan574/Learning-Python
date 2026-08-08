# ⚡ GATE Technical Revision — Day 19 (2026-08-08)

*The digital voltmeters that count their way to a reading, the synchronous machine's salient poles, and the three-phase inverter with its 120° and 180° conduction.*

`📅 Tech Day 19  ·  ⏱ ~45 min  ·  🎯 Measurements + Machines + Power Electronics`

Attempt each section's test **before** opening its solutions — recall beats re-reading.

---

## 🔧 Measuring Instruments: DVM & Digital Instruments (Ramp, Dual-Slope, SAR)

Day 18 covered the CRO. **Digital voltmeters (DVMs)** convert an analog voltage to a digital display via an **ADC** — high accuracy, no parallax, high input impedance.

### 📖 Concept Deep Dive

**Ramp-type DVM.** A linear **ramp** voltage is compared with the unknown; a **counter** counts clock pulses during the time the ramp travels from the unknown value to zero (or start-to-cross). The count ∝ input voltage.

```
Measured time interval ∝ Vin ;  count = (ramp time)·(clock freq)
```
- Simple/cheap; but sensitive to **ramp linearity, clock and comparator drift**; **noise-prone** (single measurement instant).

**Dual-slope (integrating) DVM — the accurate workhorse.** Two phases:
1. **Integrate the unknown Vin** for a **fixed time T1** (fixed number of clock counts).
2. **Integrate a known reference −Vref** until the integrator returns to zero, taking time **T2** (counted).

```
Vin·T1 = Vref·T2   ⇒   Vin = Vref·(T2/T1) = Vref·(N2/N1)
```

Because the **same integrator, clock and components** are used in both phases, their errors **cancel** → the reading is **independent of R, C, and clock frequency** (as long as they're stable over one cycle). Choosing **T1 = one power-line period (or multiple)** rejects **50 Hz mains noise (excellent NMRR)**. Slow but very accurate — used in **bench/lab DMMs**.

**Successive-Approximation (SAR) DVM/ADC.** A **binary search**: a DAC output is compared with Vin; each bit is set from MSB to LSB, kept if the DAC output ≤ Vin, else cleared.

```
Conversion time = n clock periods (n = number of bits)  → FAST, fixed time
Resolution = Vref/2ⁿ (n-bit)
```
- **Fast** (n comparisons for n bits), constant conversion time — used where speed matters (data acquisition). Less noise-immune than dual-slope.

**Resolution & specs.**

```
Resolution = full-scale/(number of counts) ;  n-bit ⇒ 2ⁿ levels
"3½ digit" DVM: counts 0000–1999 (max 1999) ⇒ resolution ≈ 1 part in 2000
Sensitivity = resolution × lowest full-scale range
Accuracy: ±(% of reading + number of counts)
```

| DVM type | Speed | Accuracy/noise | Use |
|---|---|---|---|
| Ramp | medium | noise-prone | cheap panel meters |
| **Dual-slope** | slow | **high, mains-noise rejecting** | bench DMM |
| **SAR** | fast | moderate | data acquisition |

> 💎 **KEY RESULT** — **Dual-slope: Vin = Vref·(N2/N1)** — independent of R, C and clock (errors cancel), rejects mains noise; slow but accurate. **SAR** is a fast binary search (n clocks for n bits). **3½-digit** DVM counts to **1999**.

> 🧠 **MEMORY HOOK** — "**Ramp = time a ramp (noisy). Dual-slope = integrate up (Vin, fixed T1) then down (Vref, T2); ratio cancels errors, kills 50 Hz. SAR = binary search (fast).**"

> ⚠️ **TRAP ALERT** — The **dual-slope** reading `Vin = Vref·T2/T1` is **independent of the clock frequency and the RC** (they appear in both phases and cancel) — its key advantage. A **3½-digit** display reads up to **1999** (not 9999).

### 📐 Formula Sheet

```
Dual-slope: Vin = Vref·(T2/T1) = Vref·(N2/N1)  (independent of R, C, clock)
   T1 = integer × mains period ⇒ strong 50 Hz noise rejection
SAR: conversion time = n clocks (n bits) ; resolution = Vref/2ⁿ
Ramp: count ∝ Vin (noise-prone)
Resolution = full-scale/counts ; n-bit ⇒ 2ⁿ levels
3½ digit: max count 1999 (≈ 1 in 2000)
Accuracy = ±(% reading + counts)
```

### 🧮 Solved Examples

**Example 1 — dual-slope.**
A dual-slope DVM integrates the unknown for **N1 = 1000 counts**; the reference `Vref = 5 V` de-integrates in **N2 = 640 counts**. Find the input voltage.

```
Vin = Vref·(N2/N1) = 5 × (640/1000) = 5 × 0.64 = 3.2 V
```
**Vin = 3.2 V** (independent of the actual clock rate or RC values).

**Example 2 — resolution.**
An 8-bit SAR ADC has a reference of **5.12 V**. Find its resolution (LSB size) and the conversion time if the clock is **1 MHz**.

```
Resolution = Vref/2ⁿ = 5.12/2⁸ = 5.12/256 = 0.02 V = 20 mV
Conversion time = n clocks = 8 × (1/1 MHz) = 8 × 1 µs = 8 µs
```
**Resolution = 20 mV; conversion time = 8 µs.**

### ⚠️ Common Traps

1. **Dual-slope Vin = Vref·(N2/N1)** — independent of R, C, and clock frequency (errors cancel).
2. **Dual-slope rejects mains (50 Hz) noise** when T1 = integer × line period — its NMRR advantage.
3. **SAR conversion time is fixed** (n clocks for n bits) regardless of input; ramp/counter time varies with input.
4. **3½-digit ⇒ max count 1999** (the half-digit is the leading 0/1), ~1 part in 2000.
5. **Resolution = Vref/2ⁿ** for an n-bit converter — halve the LSB by adding one bit.
6. **DVMs have very high input impedance** (≥ 10 MΩ) — low loading, unlike analog voltmeters.

### 📝 Test — Measuring Instruments (8 Q)

1. **(MCQ)** The dual-slope DVM's reading is independent of:
   (a) Vref  (b) R, C and clock frequency  (c) input voltage  (d) the counter
2. **(MCQ)** Which DVM best rejects 50 Hz mains noise?
   (a) ramp  (b) dual-slope  (c) SAR  (d) flash
3. **(MCQ)** The successive-approximation ADC performs a:
   (a) linear count  (b) binary search  (c) integration  (d) ramp comparison
4. **(MCQ)** A 3½-digit DVM has a maximum count of:
   (a) 999  (b) 1999  (c) 9999  (d) 4095
5. **(MCQ)** The conversion time of an n-bit SAR ADC is:
   (a) 2ⁿ clocks  (b) n clocks  (c) 1 clock  (d) variable with input
6. **(NAT)** A dual-slope DVM: N1 = 2000, N2 = 900, Vref = 10 V. Find Vin in volts. ______ V
7. **(NAT)** A 10-bit ADC has Vref = 10.24 V. Find the resolution in mV. ______ mV
8. **(NAT)** An 8-bit SAR ADC runs on a 2 MHz clock. Find the conversion time in µs. ______ µs

<details>
<summary>🔑 Solutions</summary>

**1 → (b) R, C and clock frequency.**

**2 → (b) dual-slope.**

**3 → (b) binary search.**

**4 → (b) 1999.**

**5 → (b) n clocks.**

**6 →** Vin = Vref·(N2/N1) = 10 × 900/2000 = 10 × 0.45 = **4.5 V.**

**7 →** Resolution = 10.24/2¹⁰ = 10.24/1024 = 0.01 V = **10 mV.**

**8 →** Conversion time = n/clock = 8/(2e6) = 4e−6 s = **4 µs.**

</details>

---

## 🔧 Electrical Machines: Synchronous Machines I — Construction, EMF, Armature Reaction, Xd & Xq

Day 18 finished single-phase motors. The **synchronous machine** (alternator/motor) runs at exactly **synchronous speed**; its rotor carries **DC field** excitation.

### 📖 Concept Deep Dive

**Construction.** Stator (armature) carries the **3-φ AC winding**; rotor carries the **DC field** (via slip rings or brushless exciter). Two rotor types:
- **Cylindrical (non-salient) rotor:** smooth, uniform air-gap; for **high-speed** (2/4-pole turbo-alternators, thermal/gas plants).
- **Salient-pole rotor:** projecting poles, non-uniform air-gap; for **low-speed** (hydro), many poles.

**Synchronous speed:** `Ns = 120 f/P`.

**EMF equation.** The generated (open-circuit) EMF per phase:

```
E = 4.44 · f · Φ · Tph · Kw     [Kw = winding factor = Kd·Kp]
   Kd = distribution factor, Kp = pitch (coil-span) factor
```

**Winding factors:**
```
Distribution factor Kd = sin(mβ/2)/(m·sin(β/2))   (m slots/pole/phase, β slot angle)
Pitch factor Kp = cos(α/2)   (α = short-pitch/chording angle)
```

**Armature reaction** — the effect of the stator (armature) MMF on the field:
- **Unity pf load:** armature MMF is **cross-magnetising** (distorts).
- **Zero pf lagging:** armature MMF is **demagnetising** (directly opposes field → E drops).
- **Zero pf leading:** armature MMF is **magnetising** (aids field → E rises).

Modeled as a **synchronous reactance Xs = Xa (armature reaction) + Xl (leakage)**:

```
Per-phase:  E = V + I·(Ra + jXs)   (generator)
Synchronous impedance Zs = Ra + jXs ;  usually Xs >> Ra
```

**Salient-pole two-reaction theory (Blondel).** With non-uniform air-gap, the armature MMF is resolved into **direct-axis (d)** and **quadrature-axis (q)** components with **different reactances**:

```
Xd = direct-axis synchronous reactance (along pole axis, min gap ⇒ larger Xd)
Xq = quadrature-axis reactance (between poles, larger gap ⇒ smaller Xq)
Xd > Xq   (for salient-pole machines)
For cylindrical rotor: Xd = Xq = Xs (uniform gap)
```

Armature current splits into `Id` (along d-axis) and `Iq` (along q-axis); the phasor and power relations use both. **Salient-pole machines produce reluctance torque** (an extra torque term from Xd ≠ Xq).

> 💎 **KEY RESULT** — `E = 4.44 f Φ Tph Kw`. Armature reaction: **cross-mag (unity pf), demag (lagging ZPF), mag (leading ZPF)**, modeled as **Xs**. Salient-pole: **two-reaction theory, Xd > Xq**; cylindrical: **Xd = Xq = Xs**.

> 🧠 **MEMORY HOOK** — "**Cylindrical = smooth, high-speed, Xd=Xq. Salient = poles, low-speed, Xd>Xq (two-reaction).** Armature reaction: lag = demag (E drops), lead = mag (E rises)."

> ⚠️ **TRAP ALERT** — For a **lagging** (inductive) load, armature reaction is **demagnetising** (E falls, poor regulation); for a **leading** load it's **magnetising** (E can rise → negative regulation). **Xd > Xq** for salient-pole; **Xd = Xq** for cylindrical rotor.

### 📐 Formula Sheet

```
Ns = 120 f/P
EMF  E = 4.44 f Φ Tph Kw ;  Kw = Kd·Kp
Kd = sin(mβ/2)/(m sin(β/2)) ;  Kp = cos(α/2)
Generator: E = V + I(Ra + jXs) ;  Zs = Ra + jXs (Xs >> Ra)
Salient pole: Xd > Xq ; armature current → Id (d-axis) + Iq (q-axis)
Cylindrical rotor: Xd = Xq = Xs
Armature reaction: unity pf → cross ; lag ZPF → demag ; lead ZPF → mag
```

### 🧮 Solved Examples

**Example 1 — EMF with winding factor.**
A 3-φ, 4-pole, 50 Hz alternator has **Tph = 240** turns/phase, flux per pole `Φ = 25 mWb`, distribution factor `Kd = 0.96`, pitch factor `Kp = 0.98`. Find the per-phase EMF.

```
Kw = Kd·Kp = 0.96 × 0.98 = 0.9408
E = 4.44 × f × Φ × Tph × Kw = 4.44 × 50 × 0.025 × 240 × 0.9408
  = 4.44 × 50 = 222 ;  × 0.025 = 5.55 ;  × 240 = 1332 ;  × 0.9408 = 1253.1 V
```
**E ≈ 1253 V per phase.**

**Example 2 — synchronous speed & poles.**
A salient-pole hydro-alternator must generate **50 Hz** at **125 rpm**. Find the number of poles.

```
Ns = 120 f/P  ⇒  P = 120 f/Ns = 120 × 50/125 = 6000/125 = 48 poles
```
**P = 48 poles** (many poles ⇒ salient-pole, low-speed hydro machine).

### ⚠️ Common Traps

1. **EMF = 4.44 f Φ Tph Kw** — don't forget the **winding factor Kw = Kd·Kp**.
2. **Lagging load → demagnetising armature reaction** (E drops); **leading → magnetising** (E rises).
3. **Xd > Xq** for salient-pole (min gap on d-axis ⇒ larger reactance); **cylindrical: Xd = Xq**.
4. **Cylindrical rotor = high-speed** (turbo, 2/4-pole); **salient-pole = low-speed** (hydro, many poles).
5. **Synchronous reactance Xs = Xa + Xl** (armature reaction + leakage); usually **Xs >> Ra**.
6. **Reluctance torque** exists only in salient-pole machines (from Xd ≠ Xq).

### 📝 Test — Electrical Machines (8 Q)

1. **(MCQ)** The EMF equation of an alternator is:
   (a) 4.44 f Φ Tph Kw  (b) φZNP/60A  (c) V − IaRa  (d) 120f/P
2. **(MCQ)** A cylindrical-rotor synchronous machine is used for:
   (a) low-speed hydro  (b) high-speed turbo-alternators  (c) DC generation  (d) single-phase
3. **(MCQ)** For a lagging pf load, armature reaction is:
   (a) magnetising  (b) demagnetising  (c) cross-magnetising only  (d) zero
4. **(MCQ)** For a salient-pole machine:
   (a) Xd = Xq  (b) Xd > Xq  (c) Xd < Xq  (d) Xd = 0
5. **(MCQ)** The winding factor Kw equals:
   (a) Kd + Kp  (b) Kd·Kp  (c) Kd/Kp  (d) Kd − Kp
6. **(NAT)** A 6-pole, 50 Hz alternator — find the synchronous speed in rpm. ______ rpm
7. **(NAT)** An alternator: f = 50 Hz, Φ = 0.05 Wb, Tph = 200, Kw = 0.95. Find E per phase in volts. ______ V
8. **(NAT)** A hydro-alternator runs at 100 rpm generating 50 Hz. Find the number of poles. ______

<details>
<summary>🔑 Solutions</summary>

**1 → (a) 4.44 f Φ Tph Kw.**

**2 → (b) high-speed turbo-alternators.**

**3 → (b) demagnetising.**

**4 → (b) Xd > Xq.**

**5 → (b) Kd·Kp.**

**6 →** Ns = 120×50/6 = **1000 rpm.**

**7 →** E = 4.44 × 50 × 0.05 × 200 × 0.95 = 4.44×50=222; ×0.05=11.1; ×200=2220; ×0.95 = **2109 V.**

**8 →** P = 120×50/100 = **60 poles.**

</details>

---

## 🔧 Power Electronics: Inverters II — Three-Phase VSI (120°/180° Conduction) & PWM

Day 18 covered single-phase inverters. The **three-phase VSI** (six switches) generates 3-φ AC; two conduction schemes (**180°** and **120°**), and **PWM/SPWM** for harmonic control.

### 📖 Concept Deep Dive

**Three-phase VSI = six switches** (three legs, each a half-bridge) fed from a DC link `Vdc`. Each leg output connects to one phase.

**180° conduction mode.** Each switch conducts for **180°**; at any instant **three switches** are ON (one from each leg). The phase and line voltages (for a star load), by Fourier:

```
180° mode, star load:
Line-to-line RMS  VLL(rms) = √(2/3)·Vdc = 0.8165 Vdc
Phase (line-to-neutral) RMS  Vph(rms) = VLL/√3 = √2/3·Vdc = 0.4714 Vdc
Fundamental line RMS  VLL1 = (√6/π)·Vdc = 0.78 Vdc
```

The phase voltage is a **six-step (quasi-square) waveform**; harmonics present are of order **6k ± 1** (5th, 7th, 11th, 13th…) — **no triplen (3rd) harmonics** in the line voltage.

**120° conduction mode.** Each switch conducts for **120°**; at any instant only **two switches** conduct (one leg is off). Simpler commutation, but **lower output**; the phase voltage is a different stepped waveform. Line RMS values are lower than 180° mode.

**Comparison:**

| Feature | 180° mode | 120° mode |
|---|---|---|
| Switches ON at a time | 3 | 2 |
| Utilisation of DC | higher | lower |
| Phase waveform | six-step | quasi-square (with 60° gaps) |
| Line RMS | 0.8165 Vdc | lower |

**PWM (Pulse-Width Modulation).** Instead of one pulse per half-cycle, the output is **chopped into many pulses** whose widths are modulated → shifts harmonics to **high frequency** (easily filtered) and controls the fundamental.
- **Sinusoidal PWM (SPWM):** compare a **sine reference** with a **triangular carrier**; where sine > carrier, the switch is ON. The output's fundamental ∝ the **modulation index**:

```
Modulation index  ma = V_reference(peak)/V_carrier(peak)   (0 ≤ ma ≤ 1 linear region)
Fundamental peak (SPWM, linear)  Vph1(peak) = ma·(Vdc/2)
Over-modulation (ma > 1) → up to six-step (square-wave) limit
Carrier ratio (mf) = f_carrier/f_reference  (choose odd, multiple of 3 for 3-φ)
```

SPWM pushes harmonics to around the **carrier frequency** and its sidebands; a high `mf` makes filtering easy. **Space-Vector PWM (SVPWM)** gives ~15% higher DC utilisation than SPWM.

> 💎 **KEY RESULT** — **3-φ VSI 180° mode:** 3 switches ON, **VLL(rms) = 0.8165 Vdc**, fundamental line RMS **0.78 Vdc**, harmonics **6k±1** (no triplens). **120° mode:** 2 switches ON, lower output. **SPWM:** `Vph1(peak) = ma·Vdc/2` (linear, ma ≤ 1); harmonics near the carrier.

> 🧠 **MEMORY HOOK** — "**180° = 3 ON (six-step, 0.8165 Vdc line RMS); 120° = 2 ON (lower). SPWM: sine vs triangle, fundamental = ma·Vdc/2; no triplens in line V.**"

> ⚠️ **TRAP ALERT** — In a 3-φ VSI **line voltage has no triplen (3rd, 9th…) harmonics** (they cancel) — only **6k ± 1**. **180° mode gives higher output** than 120°. In **SPWM linear region ma ≤ 1**; beyond that it over-modulates toward the six-step limit.

### 📐 Formula Sheet

```
3-φ VSI 180° mode (star load):
  VLL(rms) = √(2/3)·Vdc = 0.8165 Vdc
  Vph(rms) = √2/3·Vdc = 0.4714 Vdc
  Fundamental line RMS = (√6/π)Vdc = 0.78 Vdc
  Harmonics: 6k ± 1 (5,7,11,13…) ; no triplens in line voltage
120° mode: 2 devices conduct ; lower output than 180°
SPWM: ma = Vref/Vcarrier ; Vph1(peak) = ma·Vdc/2 (ma ≤ 1) ; mf = fc/fr
```

### 🧮 Solved Examples

**Example 1 — 180° mode voltages.**
A 3-φ VSI in **180° conduction** has `Vdc = 600 V` (star-connected load). Find the RMS line-to-line voltage and the fundamental line RMS.

```
VLL(rms) = 0.8165 × Vdc = 0.8165 × 600 = 489.9 V
Fundamental line RMS = 0.78 × Vdc = 0.78 × 600 = 468 V
   (exact: (√6/π)·600 = 2.4495/3.14159 × 600 = 0.7797 × 600 = 467.8 V)
```
**VLL(rms) ≈ 490 V; fundamental line RMS ≈ 468 V.**

**Example 2 — SPWM fundamental.**
A 3-φ VSI uses SPWM with `Vdc = 400 V` and modulation index `ma = 0.8`. Find the fundamental **phase peak** and phase RMS.

```
Vph1(peak) = ma·(Vdc/2) = 0.8 × (400/2) = 0.8 × 200 = 160 V
Vph1(rms) = 160/√2 = 113.1 V
```
**Fundamental phase peak = 160 V; phase RMS ≈ 113 V.**

### ⚠️ Common Traps

1. **180° mode: VLL(rms) = 0.8165 Vdc** (three switches ON); 120° mode gives lower output (two ON).
2. **Line voltage has no triplen harmonics** — only 6k ± 1 (5th, 7th…).
3. **SPWM fundamental peak = ma·Vdc/2** (per phase) in the **linear region (ma ≤ 1)**.
4. **Fundamental line RMS (180°) = 0.78 Vdc** (= √6/π·Vdc) — distinct from the total RMS 0.8165 Vdc.
5. **Over-modulation (ma > 1)** increases fundamental but adds low-order harmonics, up to the six-step limit.
6. **Higher carrier ratio mf** ⇒ harmonics at higher frequency ⇒ easier filtering (choose mf odd & multiple of 3).

### 📝 Test — Power Electronics (8 Q)

1. **(MCQ)** In 180° conduction mode of a 3-φ VSI, how many switches conduct at any instant?
   (a) 1  (b) 2  (c) 3  (d) 6
2. **(MCQ)** The RMS line-to-line output of a 3-φ VSI (180°) is:
   (a) 0.45 Vdc  (b) 0.8165 Vdc  (c) Vdc  (d) 0.5 Vdc
3. **(MCQ)** The line voltage of a 3-φ VSI contains harmonics of order:
   (a) 3k  (b) 6k ± 1  (c) 2k  (d) all integers
4. **(MCQ)** In SPWM, the fundamental phase peak (linear region) is:
   (a) ma·Vdc  (b) ma·Vdc/2  (c) Vdc/2  (d) ma²·Vdc
5. **(MCQ)** In 120° conduction mode, the number of devices conducting at a time is:
   (a) 1  (b) 2  (c) 3  (d) 4
6. **(NAT)** A 3-φ VSI (180°) has Vdc = 500 V. Find the RMS line-to-line voltage in V. ______ V
7. **(NAT)** A 3-φ SPWM VSI: Vdc = 600 V, ma = 0.9. Find the fundamental phase peak in V. ______ V
8. **(NAT)** A 3-φ VSI (180°), Vdc = 400 V. Find the fundamental line RMS (0.78 Vdc) in V. ______ V

<details>
<summary>🔑 Solutions</summary>

**1 → (c) 3.**

**2 → (b) 0.8165 Vdc.**

**3 → (b) 6k ± 1.**

**4 → (b) ma·Vdc/2.**

**5 → (b) 2.**

**6 →** VLL(rms) = 0.8165 × 500 = **408.25 V.**

**7 →** Vph1(peak) = ma·Vdc/2 = 0.9 × 300 = **270 V.**

**8 →** 0.78 × 400 = **312 V.**

</details>

---

`✅ Day 19 complete — DVM & digital instruments (dual-slope Vin=Vref·N2/N1, SAR binary search), synchronous machines I (E=4.44fΦTphKw, armature reaction, Xd>Xq), and three-phase VSI (180°/120° conduction, SPWM). Tomorrow: Q-meter/frequency measurement, synchronous generator regulation, and cycloconverters.`

*Correctness over length — re-derive any result you're unsure of and mark "verify" before the exam.*
