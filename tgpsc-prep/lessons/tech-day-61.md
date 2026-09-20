# ⚡ GATE Technical Revision — Day 61 (2026-09-20)

*Round-3 pass 19 — digital voltmeters, plus consolidated Machines & Power-Electronics capstones. Two sections finish their third pass today.*

📅 Tech Day 61 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics · 🔁 Round-3 pass 19

> 🧠 **MEMORY HOOK** — Today: the **DVM** (dual-slope, SAR), a **Machines** formula-sheet capstone, and a **Power-Electronics** formula-sheet capstone with mixed numericals. Machines & PE complete round 3!

---

## 🔧 Measuring Instruments: DVM & Digital Instruments

### 📖 Concept Deep Dive

A **Digital Voltmeter (DVM)** converts an analog voltage to a digital display via an **Analog-to-Digital Converter (ADC)** — offering high accuracy, resolution, input impedance, and no parallax/reading error.

**ADC types (DVM techniques):**
- **Ramp (single-slope) DVM** — a linear ramp is compared with the input; a counter measures the time for the ramp to equal the input. Simple but sensitive to clock/ramp drift.
- **Dual-slope (integrating) DVM** — integrates the **input for a fixed time T1**, then integrates a **reference in the opposite direction until zero (time T2)**; the reading `Vin = Vref·(T2/T1)`. **Component values cancel** → highly accurate, and it **rejects noise/mains hum** (averaging over T1; excellent normal-mode rejection if T1 = integer × mains period). Slow but the standard for bench multimeters.
- **Successive-Approximation (SAR) DVM** — a DAC + comparator sets bits one at a time (MSB→LSB), like a binary search; **fast** (n comparisons for n bits), used where speed matters.
- **Flash (parallel)** — fastest, many comparators (for scopes/high-speed), not typical for DVMs.

**Specifications:**
- **Resolution** — smallest change resolvable = `full scale / 10ⁿ` for an n-digit display; a **"3½-digit"** DVM displays 0-1999 (max count 1999).
- **Sensitivity** = resolution × range factor.
- **Accuracy** — often "±(% of reading + number of counts)".

**DMM (Digital Multimeter)** — a DVM front-end plus converters to measure current (via shunt), resistance (via constant-current source + voltage measurement), etc.

> 💎 **KEY RESULT** — **Dual-slope DVM:** `Vin = Vref·(T2/T1)` — component values cancel (accurate), **rejects mains noise** (integrating). **SAR** = fast (n steps for n bits). **3½-digit** → max count **1999**. Resolution = full scale/10ⁿ.

> ⚠️ **TRAP ALERT** — **Dual-slope** is accurate & noise-rejecting (slow); **SAR** is fast; **flash** is fastest. A **3½-digit** DVM reads up to **1999** (not 9999). Dual-slope's accuracy comes from **cancellation of R, C, and clock** in the T2/T1 ratio.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Dual-slope reading | `Vin = Vref·(T2/T1)` |
| Resolution (n full digits) | `= full scale / 10ⁿ` |
| 3½-digit max count | 1999 |
| SAR conversion steps | n (for n-bit) |
| Sensitivity | resolution × lowest range |
| Accuracy | ±(% reading + counts) |

### 🧮 Solved Examples

**Example 1 — dual-slope.**
A dual-slope DVM uses `Vref = 5 V`. The input integrates for `T1 = 100 ms`; the reference de-integrates in `T2 = 40 ms`. Input voltage?

- `Vin = Vref·(T2/T1) = 5 × (40/100) = 5 × 0.4 = 2.0 V`.

**Example 2 — resolution.**
A 3½-digit DVM on the `2 V` range. Resolution?

- 3½ digits → max display 1999; on a 2 V range, full scale ≈ 1.999 V, so 1 count = `2/2000 = 1 mV`.
- Resolution ≈ **1 mV** (smallest resolvable step).

> 🧠 **MEMORY HOOK** — "**Dual-slope: Vin = Vref·T2/T1, cancels errors, kills mains noise. SAR = fast binary search. 3½-digit = 1999.**"

### ⚠️ Common Traps

1. Thinking a 3½-digit DVM reads to 9999 (it's **1999**).
2. Forgetting dual-slope **rejects mains noise** (integrating).
3. Confusing SAR (fast) with dual-slope (accurate/slow).
4. Wrong dual-slope formula (it's `Vref·T2/T1`).
5. Mixing resolution with accuracy.
6. Ignoring the R/C cancellation that makes dual-slope accurate.

### 📝 Test — DVM (8 Q)

1. The most noise-immune, accurate DVM type is: (a) ramp (b) dual-slope (c) SAR (d) flash.
2. The fastest ADC type is: (a) dual-slope (b) SAR (c) flash (d) ramp.
3. A 3½-digit DVM has a maximum count of: (a) 999 (b) 1999 (c) 9999 (d) 3500.
4. The dual-slope reading is: (a) Vref·T1/T2 (b) Vref·T2/T1 (c) Vref+T (d) Vref/T.
5. Dual-slope accuracy is high because: (a) it's fast (b) R, C and clock cancel in the ratio (c) it uses flash (d) no reference.
6. **(NAT)** Dual-slope: Vref = 10 V, T1 = 200 ms, T2 = 50 ms. Vin (V)?
7. **(NAT)** 3½-digit DVM, 20 V range. Resolution (mV)?
8. **(NAT)** An 8-bit SAR ADC needs how many comparison steps?

<details><summary>🔑 Solutions</summary>

**Q1 — (b) dual-slope.**

**Q2 — (c) flash.**

**Q3 — (b) 1999.**

**Q4 — (b) Vref·T2/T1.**

**Q5 — (b).** R, C, clock cancel.

**Q6.** `Vin = 10 × 50/200 = 10 × 0.25 = 2.5 V`.

**Q7.** 20 V/2000 = `10 mV`.

**Q8.** 8 steps.

</details>

---

## 🔧 Electrical Machines: Consolidated Revision & Mixed Numericals (Round-3 Capstone)

### 📖 Concept Deep Dive

A consolidated recap of the machines syllabus — the recurring themes:

- **Transformer:** `E = 4.44 f N φm`; refer impedance by `a²`; **ηmax when Cu loss = iron loss**; regulation `VR = εr·cosφ ± εx·sinφ` (+lag/−lead); OC test → core loss/Xm, SC test → Cu loss/Zeq.
- **DC machine:** `E = PφZN/60A` (lap A=P, wave A=2); motor `Eb = V − IaRa`, `N ∝ Eb/φ`, `T ∝ φIa`; series `T ∝ Ia²`; ηmax at variable = constant loss.
- **Induction motor:** `Ns = 120f/P`, `s = (Ns−N)/Ns`, `fr = sf`; `s_maxT = R2/√(Rth²+(Xth+X2')²)`, `T_max` indep. of R2; power split **1:(1−s):s**; V/f control; star-delta = 1/3.
- **Synchronous machine:** `Xs = Xl + Xa`; `P = (Ef·V/Xs)sinδ`, max at δ=90°; over-excited = leading (synchronous condenser); regulation methods EMF/MMF/Potier.

**Master formula strip:**

```
Transformer:  E = 4.44 f N φm ;  ηmax @ Cu = Fe ;  VR = εr cosφ ± εx sinφ
DC machine:   E = PφZN/60A ;  Eb = V − IaRa ;  N ∝ Eb/φ ;  T ∝ φIa
Induction:    Ns = 120f/P ;  s = (Ns−N)/Ns ;  s_maxT = R2/Z ;  Pag:Pmech:PCu = 1:(1−s):s
Synchronous:  P = (EfV/Xs) sinδ ;  δmax = 90° ;  over-excited → leading pf
```

> 💎 **KEY RESULT** — The four machine families reduce to a handful of master relations (above). Know **ηmax = equal losses** (transformer & DC), **slip relations** (induction), and **power-angle/excitation** (synchronous).

> ⚠️ **TRAP ALERT** — Lap **A=P** / wave **A=2**; induction `T_max` independent of R2; synchronous **over-excited = leading**. Transformer/DC max efficiency at **variable loss = constant loss**.

### 📐 Formula Sheet

| Machine | Key formula |
|---|---|
| Transformer EMF | `E = 4.44 f N φm` |
| Transformer ηmax | Cu loss = iron loss |
| DC EMF | `E = PφZN/60A` |
| Induction slip | `s = (Ns−N)/Ns` ; `fr = sf` |
| Induction power split | `1 : (1−s) : s` |
| Synchronous power | `P = (EfV/Xs)sinδ` |

### 🧮 Solved Examples

**Example 1 — mixed (transformer η).**
A 50 kVA transformer: iron loss 300 W, full-load Cu loss 500 W. Efficiency at full load, 0.9 pf?

- Output `= 50 × 0.9 = 45 kW`; losses `= 300 + 500 = 800 W = 0.8 kW`.
- `η = 45/(45 + 0.8) = 45/45.8 = 0.9825 = 98.25%`.

**Example 2 — mixed (induction motor).**
A 4-pole, 50 Hz induction motor runs at 1455 rpm. Slip, rotor frequency, and (if air-gap power 5 kW) mechanical power?

- `Ns = 1500`; `s = (1500−1455)/1500 = 0.03`; `fr = 0.03×50 = 1.5 Hz`.
- `Pmech = (1−s)×Pag = 0.97 × 5 = 4.85 kW`.

> 🧠 **MEMORY HOOK** — "**4.44 fNφ; PφZN/60A; 120f/P; (EfV/Xs)sinδ**" — the four pillars of machines.

### ⚠️ Common Traps

1. Lap/wave `A` mix-up.
2. Forgetting `fr = sf` and the `1:(1−s):s` split.
3. Wrong ηmax condition (equal losses).
4. Sign in regulation (+lag/−lead).
5. Over/under-excitation pf (over = leading).
6. Using V instead of Vth in induction torque.

### 📝 Test — Machines Capstone (8 Q)

1. Transformer max efficiency occurs when: (a) Cu = iron loss (b) Cu = 0 (c) load = 0 (d) pf = 1.
2. In a wave winding, A = : (a) P (b) 2 (c) P/2 (d) Z.
3. Rotor frequency = : (a) f (b) sf (c) f/s (d) Ns.
4. Synchronous max power is at δ = : (a) 0° (b) 45° (c) 90° (d) 180°.
5. Over-excited synchronous machine pf is: (a) lagging (b) leading (c) unity (d) zero.
6. **(NAT)** Transformer: iron 200 W, FL Cu 450 W, 40 kVA, 0.8 pf. FL efficiency (%, 1 dp)?
7. **(NAT)** 6-pole 50 Hz IM at 970 rpm. Slip (%)?
8. **(NAT)** DC gen: 4-pole lap, Z=440, φ=0.02, N=1500. EMF (V)?

<details><summary>🔑 Solutions</summary>

**Q1 — (a).** Cu = iron loss.

**Q2 — (b) 2.**

**Q3 — (b) sf.**

**Q4 — (c) 90°.**

**Q5 — (b) leading.**

**Q6.** out = 40×0.8 = 32 kW; loss = 0.65 kW; `η = 32/32.65 = 0.980 = 98.0%`.

**Q7.** `Ns=1000`; `s=(1000−970)/1000 = 3%`.

**Q8.** lap A=4; `E = (4×0.02×440×1500)/(60×4) = 52800/240 = 220 V`.

</details>

---

## 🔧 Power Electronics: Consolidated Revision & Mixed Numericals (Round-3 Capstone)

### 📖 Concept Deep Dive

A consolidated recap of the power-electronics syllabus:

- **Devices:** diode (uncontrolled), SCR (semi-controlled, latching, `α1+α2→1`), BJT/MOSFET/IGBT/GTO (fully controlled); MOSFET voltage-driven/fast, IGBT high-power.
- **Rectifiers:** 1-φ semiconverter `Vo = (Vm/π)(1+cosα)`; 1-φ full `Vo = (2Vm/π)cosα`; 3-φ full bridge `Vo = (3√3Vm/π)cosα` (ripple 6f).
- **Choppers:** buck `Vo = DVs`; boost `Vo = Vs/(1−D)`; buck-boost/Cuk `Vo = −DVs/(1−D)`.
- **Inverters:** 1-φ full-bridge fundamental `≈ 0.9 Vs`; SPWM fundamental `= ma·Vdc/2`; square-wave THD ≈ 48%.
- **AC-AC:** AC voltage controller (phase/integral-cycle); cycloconverter (step-down f, line-commutated).
- **Protection:** `Ls = Vs/(di/dt)`; R-C snubber for dv/dt; `tq = trr + tgr`.

**Master formula strip:**

```
Semiconverter Vo = (Vm/π)(1+cosα) ;  Full conv Vo = (2Vm/π)cosα ;  3φ bridge Vo = (3√3Vm/π)cosα
Buck Vo = DVs ;  Boost Vo = Vs/(1−D) ;  Buck-boost Vo = −DVs/(1−D)
1φ full-bridge inverter fundamental ≈ 0.9 Vs ;  SPWM fund = ma·Vdc/2
di/dt limit Ls = Vs/(di/dt) ;  snubber for dv/dt ;  tq = trr + tgr
```

> 💎 **KEY RESULT** — Rectifiers: **(Vm/π)(1+cosα)** semi, **(2Vm/π)cosα** full, **(3√3Vm/π)cosα** 3-φ bridge. Choppers: **DVs / Vs/(1−D) / −DVs/(1−D)**. Inverter fundamental **0.9 Vs**; SPWM **ma·Vdc/2**.

> ⚠️ **TRAP ALERT** — Semiconverter has **(1+cosα)** (1-quadrant); full converter **cosα** (2-quadrant, inverts α>90°). Buck ×D, boost ÷(1−D). 3-φ bridge ripple **6f**.

### 📐 Formula Sheet

| Converter | Output |
|---|---|
| 1-φ semiconverter | `(Vm/π)(1+cosα)` |
| 1-φ full converter | `(2Vm/π)cosα` |
| 3-φ full bridge | `(3√3Vm/π)cosα`, ripple 6f |
| Buck / Boost | `DVs` / `Vs/(1−D)` |
| Buck-boost / Cuk | `−DVs/(1−D)` |
| 1-φ inverter fundamental | `≈ 0.9 Vs` (full bridge) |

### 🧮 Solved Examples

**Example 1 — mixed (rectifier).**
A 1-φ full converter on 230 V RMS, α = 45°. Average output?

- `Vm = √2×230 = 325.3`; `Vo = (2×325.3/π)cos45° = 207.1 × 0.7071 = 146.4 V`.

**Example 2 — mixed (chopper).**
A boost chopper: Vs = 12 V, D = 0.4. Output; and a buck at same D from 12 V?

- Boost: `Vo = 12/(1−0.4) = 12/0.6 = 20 V`.
- Buck: `Vo = 0.4 × 12 = 4.8 V`.

> 🧠 **MEMORY HOOK** — "**(1+cosα) semi, cosα full, (3√3Vm/π) 3-φ; DVs buck, Vs/(1−D) boost; 0.9Vs inverter.**"

### ⚠️ Common Traps

1. Semiconverter vs full-converter formula swap.
2. Buck/boost formula swap.
3. Forgetting 3-φ bridge ripple = 6f.
4. Inverter RMS vs fundamental (0.9 Vs).
5. di/dt (series L) vs dv/dt (snubber) protection.
6. Peak vs RMS voltage (`Vm = √2 Vrms`).

### 📝 Test — Power Electronics Capstone (8 Q)

1. 1-φ semiconverter output: (a) (2Vm/π)cosα (b) (Vm/π)(1+cosα) (c) DVs (d) Vs/(1−D).
2. 3-φ full bridge ripple frequency (50 Hz): (a) 100 Hz (b) 150 Hz (c) 300 Hz (d) 50 Hz.
3. Boost chopper output: (a) DVs (b) Vs/(1−D) (c) −DVs/(1−D) (d) Vs·D.
4. 1-φ full-bridge inverter fundamental RMS: (a) Vs (b) 0.9 Vs (c) 0.45 Vs (d) 0.5 Vs.
5. di/dt protection uses a: (a) series inductor (b) parallel snubber (c) diode (d) capacitor across.
6. **(NAT)** 1-φ full converter, Vrms = 120 V, α = 60°. Vo (V, 1 dp)?
7. **(NAT)** Buck chopper, Vs = 48 V, D = 0.25. Vo (V)?
8. **(NAT)** 3-φ bridge, line RMS 400 V, α = 0. Vo (V, 1 dp)?

<details><summary>🔑 Solutions</summary>

**Q1 — (b) (Vm/π)(1+cosα).**

**Q2 — (c) 300 Hz.**

**Q3 — (b) Vs/(1−D).**

**Q4 — (b) 0.9 Vs.**

**Q5 — (a) series inductor.**

**Q6.** `Vm=√2×120=169.7`; `Vo=(2×169.7/π)cos60°=108.0×0.5=54.0 V`.

**Q7.** `Vo = 0.25×48 = 12 V`.

**Q8.** `Vml=√2×400=565.7`; `Vo=(3×565.7/π)=540.2 V`.

</details>

---

> 🧠 **DAY-61 WRAP (Round-3 pass 19)** — **DVM:** dual-slope `Vin = Vref·T2/T1` (accurate/noise-rejecting), SAR fast, 3½-digit = 1999. **Machines capstone:** 4.44fNφ / PφZN·60A / 120f·P / (EfV/Xs)sinδ. **PE capstone:** (Vm/π)(1+cosα), (2Vm/π)cosα, (3√3Vm/π)cosα, DVs, Vs/(1−D), 0.9Vs. ⚡

**🔁 Round-3 progress:** Measurements ▓▓▓▓▓▓▓▓▓░ (19/21) · Machines ▓▓▓▓▓▓▓▓▓▓ **Round-3 COMPLETE ✅** · Power Electronics ▓▓▓▓▓▓▓▓▓▓ **Round-3 COMPLETE ✅** — only 2 Measurement topics remain to finish the whole third pass. 🎓 Power Systems joins as a 4th subject once the reference PDFs arrive.
