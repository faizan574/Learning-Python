# ⚡ GATE Technical Revision — Day 38 (2026-08-27)

*Three subjects, one sitting — AC bridges (Schering/Wien), the synchronous machine, and the three-phase inverter.*

📅 Tech Day 38 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics

> 🧠 **MEMORY HOOK** — Today is **"loss angle, EMF equation, and six-step inversion"**: the **Schering/Wien** bridges (tan δ & frequency), the synchronous machine's **EMF & Xd/Xq**, and the **three-phase VSI** with SPWM.

---

## 🔧 Measuring Instruments: AC Bridges II — Schering, De Sauty & Wien

### 📖 Concept Deep Dive

These bridges measure **capacitance, dissipation, and frequency**.

**Schering bridge** — measures **capacitance** and the **dissipation factor (tan δ)** of a capacitor or insulation (its key HV-testing use). For unknown `Cx` with series loss resistance `rx`:

```
Cx = C2·(R4/R3) ,   tan δ = ω·C4·R4
```

`tan δ` (the **loss/dissipation factor**) quantifies dielectric loss; a good insulator has a **very small tan δ**.

**De Sauty bridge** — measures an unknown **capacitance** by comparison with a **standard capacitor** (two capacitive + two resistive arms):

```
Cx = Cs·(R4/R3)   (for loss-less capacitors)
```

**Wien bridge** — measures **frequency** (and is the basis of the Wien-bridge oscillator). With equal components (`R1 = R2 = R`, `C1 = C2 = C`):

```
f = 1/(2π·√(R1·R2·C1·C2)) = 1/(2π·R·C)
```

**Sources & detectors:** an **AC oscillator** source; detectors are **headphones** (audio range), a **tunable amplifier detector**, or a **vibration galvanometer** (low frequency).

**Wagner earthing device:** eliminates errors from **stray capacitances to earth** by holding the detector's earth point at the correct potential — essential for high-accuracy AC bridge work.

> 💎 **KEY RESULT** — **Schering: `Cx = C2·R4/R3`, `tan δ = ω·C4·R4`** (dissipation factor, HV insulation testing). **Wien: `f = 1/(2πRC)`** (frequency measurement). The **Wagner earth** removes stray-capacitance-to-earth errors.

> ⚠️ **TRAP ALERT** — **Schering = tan δ (loss)**; **Wien = frequency**; **De Sauty = capacitance comparison**. The **Wagner earthing** device is for **stray-capacitance** elimination, not a measurement itself. `tan δ` is small for good dielectrics.

### 📐 Formula Sheet

| Bridge | Result |
|---|---|
| Schering capacitance | `Cx = C2·R4/R3` |
| Schering dissipation | `tan δ = ω·C4·R4` |
| De Sauty | `Cx = Cs·R4/R3` |
| Wien frequency | `f = 1/(2π·R·C)` (equal components) |
| Wagner earth | removes stray-capacitance errors |

### 🧮 Solved Examples

**Example 1 — Schering bridge.** `C2 = 100 pF`, `R3 = 1000 Ω`, `R4 = 3183 Ω`, `C4 = 0.001 µF`, `f = 50 Hz`. Find `Cx` and `tan δ`.

```
Cx = C2·R4/R3 = 100 pF × 3183/1000 = 318.3 pF
tan δ = ω·C4·R4 = (2π×50) × 1×10⁻⁹ × 3183 = 314.16 × 3.183×10⁻⁶ = 0.001
```
(A very low `tan δ` ⇒ a good, low-loss dielectric ✓.)

**Example 2 — Wien bridge frequency.** A Wien bridge has `R = 10 kΩ`, `C = 0.01 µF` (equal components). Find the frequency at balance.

```
f = 1/(2π·R·C) = 1/(2π × 10000 × 1×10⁻⁸) = 1/(6.283×10⁻⁴) = 1591.5 Hz
```

### ⚠️ Common Traps

1. Using Schering for **frequency** — it's for **capacitance/tan δ**.
2. Forgetting `tan δ = ω·C4·R4` (dissipation factor).
3. Using Wien's formula without **equal components** simplification carefully.
4. Ignoring the **Wagner earth** for stray-capacitance accuracy.
5. Mixing De Sauty (capacitance) with Schering (tan δ).
6. Taking tan δ as large for good insulation — it's **small**.

### 📝 Test — Measuring Instruments (8 Q)

**Q1 (MCQ).** The Schering bridge measures:
(a) frequency (b) capacitance & tan δ (c) inductance (d) resistance only

**Q2 (MCQ).** The dissipation factor tan δ in a Schering bridge equals:
(a) ω·C4·R4 (b) ω·C2·R3 (c) 1/(ωC4R4) (d) R4/R3

**Q3 (MCQ).** The Wien bridge is used to measure:
(a) capacitance (b) frequency (c) inductance (d) tan δ

**Q4 (MCQ).** The Wagner earthing device eliminates:
(a) frequency error (b) stray-capacitance-to-earth error (c) temperature error (d) friction

**Q5 (MCQ).** A good insulator has a tan δ that is:
(a) very large (b) very small (c) exactly 1 (d) negative

**Q6 (NAT).** A Wien bridge: R = 5 kΩ, C = 0.02 µF (equal components). Find the frequency (Hz).

**Q7 (NAT).** A Schering bridge: C2 = 200 pF, R3 = 500 Ω, R4 = 1000 Ω. Find Cx (pF).

**Q8 (NAT).** For a Schering bridge, C4 = 0.002 µF, R4 = 2000 Ω, f = 50 Hz. Find tan δ.

<details><summary>🔑 Solutions</summary>

**Q1 — (b) capacitance & tan δ.**

**Q2 — (a) ω·C4·R4.**

**Q3 — (b) frequency.**

**Q4 — (b) stray-capacitance-to-earth error.**

**Q5 — (b) very small.**

**Q6.** `f = 1/(2π×5000×2×10⁻⁸) = 1/(6.283×10⁻⁴) = 1591.5 Hz`.

**Q7.** `Cx = C2·R4/R3 = 200 × 1000/500 = 400 pF`.

**Q8.** `tan δ = ω·C4·R4 = 314.16 × 2×10⁻⁹ × 2000 = 0.00126`.

</details>

---

## 🔧 Electrical Machines: Synchronous Machines I — EMF, Armature Reaction & Xd/Xq

### 📖 Concept Deep Dive

A **synchronous machine** runs at exactly the **synchronous speed** `Ns = 120·f/P`. Its **rotor** carries a **DC field winding** (via slip rings or a brushless exciter); its **stator** carries the 3-phase armature.

**Rotor types:**

| Type | Use | Poles / speed |
|---|---|---|
| **Salient pole** | Hydro (low speed) | Many poles, projecting |
| **Cylindrical (non-salient)** | Turbo-alternators (high speed) | 2-4 poles, smooth rotor |

**EMF equation** (per phase):

```
E = 4.44 · Kw · f · φ · T       (Kw = Kc·Kd = winding factor)
Distribution factor: Kd = sin(m·β/2) / (m·sin(β/2))
Pitch (coil) factor: Kc = cos(α/2)
```
where `m` = slots/pole/phase, `β` = slot angle, `α` = short-pitch angle.

**Armature reaction** (effect of stator MMF on field flux) depends on load power factor:

| Load pf | Effect |
|---|---|
| **Unity (resistive)** | Cross-magnetising (distorting) |
| **Zero lagging (inductive)** | **Demagnetising** (weakens field) |
| **Zero leading (capacitive)** | **Magnetising** (strengthens field) |

> 💎 **KEY RESULT** — `E = 4.44·Kw·f·φ·T`. Armature reaction is **demagnetising for lagging** loads and **magnetising for leading** loads. In a **salient-pole** machine, the **two-reaction (Blondel) theory** gives **direct-axis Xd** and **quadrature-axis Xq**, with **Xd > Xq**.

> 🧠 **MEMORY HOOK** — "**Lagging demagnetises, leading magnetises, unity distorts**". EMF `= 4.44 Kw f φ T`; salient pole ⇒ **Xd > Xq**.

> ⚠️ **TRAP ALERT** — For a **lagging** (inductive) load, armature reaction is **demagnetising** (lowers terminal voltage) — that's why regulation is worst at lagging pf. **Xd > Xq** always for salient-pole machines (the direct axis has more iron/flux path).

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Synchronous speed | `Ns = 120·f/P` |
| EMF per phase | `E = 4.44·Kw·f·φ·T` |
| Distribution factor | `Kd = sin(mβ/2)/(m·sin(β/2))` |
| Pitch factor | `Kc = cos(α/2)` |
| Salient pole | `Xd > Xq` |

### 🧮 Solved Examples

**Example 1 — Distribution factor & EMF.** A 3-φ, `4-pole`, `50 Hz` alternator has `36` slots, flux/pole `0.05 Wb`, full-pitch coils, `60` turns/phase. Find `Kd` and the per-phase EMF.

```
Slots/pole = 36/4 = 9 ; m = slots/pole/phase = 9/3 = 3
Slot angle β = 180°×P/slots = 180×4/36 = 20°
Kd = sin(mβ/2)/(m·sin(β/2)) = sin(30°)/(3·sin(10°)) = 0.5/(3×0.1736) = 0.960
Kc = 1 (full pitch) ⇒ Kw = 0.960
E = 4.44 × 0.960 × 50 × 0.05 × 60 = 639.4 V per phase
```

**Example 2 — Armature reaction direction.** For a synchronous generator supplying a **zero-pf leading** load, what is the nature of armature reaction?

```
Zero-pf leading (capacitive) ⇒ armature reaction is MAGNETISING
(it strengthens the main field, raising terminal voltage).
```

### ⚠️ Common Traps

1. Forgetting the winding factor `Kw = Kc·Kd` in the EMF equation.
2. Reversing armature-reaction effects (lagging = **demagnetising**).
3. Taking `Xq > Xd` — it's **Xd > Xq** (salient pole).
4. Using line instead of **phase** turns/EMF.
5. Wrong slot angle `β = 180·P/slots`.
6. Confusing salient (hydro, many poles) with cylindrical (turbo).

### 📝 Test — Electrical Machines (8 Q)

**Q1 (MCQ).** The EMF per phase of an alternator is:
(a) 4.44 f φ T (b) 4.44 Kw f φ T (c) 1.11 f φ T (d) 2.22 Kw f φ T

**Q2 (MCQ).** For a lagging pf load, armature reaction is:
(a) magnetising (b) demagnetising (c) cross-magnetising only (d) zero

**Q3 (MCQ).** For a leading pf load, armature reaction is:
(a) demagnetising (b) magnetising (c) distorting (d) zero

**Q4 (MCQ).** In a salient-pole machine:
(a) Xd = Xq (b) Xd > Xq (c) Xd < Xq (d) Xd = 0

**Q5 (MCQ).** Cylindrical rotors are used in:
(a) hydro generators (b) turbo-alternators (c) DC machines (d) induction motors

**Q6 (NAT).** An alternator has m = 4 slots/pole/phase and slot angle β = 15°. Find the distribution factor Kd.

**Q7 (NAT).** A coil is short-pitched by 30° (α = 30°). Find the pitch factor Kc.

**Q8 (NAT).** A 3-φ, 6-pole, 50 Hz alternator: flux/pole 0.04 Wb, 100 turns/phase, Kw = 0.95. Find the per-phase EMF (V).

<details><summary>🔑 Solutions</summary>

**Q1 — (b) 4.44 Kw f φ T.**

**Q2 — (b) demagnetising.**

**Q3 — (b) magnetising.**

**Q4 — (b) Xd > Xq.**

**Q5 — (b) turbo-alternators.**

**Q6.** `Kd = sin(4×15/2)/(4·sin(15/2)) = sin(30°)/(4·sin(7.5°)) = 0.5/(4×0.1305) = 0.5/0.5223 = 0.957`.

**Q7.** `Kc = cos(α/2) = cos(15°) = 0.966`.

**Q8.** `E = 4.44 × 0.95 × 50 × 0.04 × 100 = 843.6 V`.

</details>

---

## 🔧 Power Electronics: Inverters II — Three-Phase VSI & SPWM

### 📖 Concept Deep Dive

A **three-phase VSI** has **six switches** (three legs). It runs in two conduction modes:

| Mode | Each switch conducts | Switches ON at a time |
|---|---|---|
| **180° conduction** | 180° | **3** (preferred; better utilisation) |
| **120° conduction** | 120° | **2** |

**180° conduction (six-step) output** (with `Vs` = DC bus):

```
RMS line voltage:      VL(rms) = √(2/3)·Vs ≈ 0.8165·Vs
RMS phase voltage:     Vph(rms) = √2/3·Vs ≈ 0.4714·Vs
Fundamental line RMS:  VL1 = (√6/π)·Vs ≈ 0.78·Vs
```

**120° conduction** phase RMS `= Vs/√6 ≈ 0.408·Vs`.

**PWM techniques** control output voltage and shift harmonics higher. **Sinusoidal PWM (SPWM)** compares a **sinusoidal reference** with a **triangular carrier**:

```
Modulation index:      ma = Vr/Vc     (reference/carrier amplitude)
Frequency ratio:       mf = fc/fr
Linear region (ma ≤ 1): peak fundamental phase = ma·(Vs/2)
```

> 💎 **KEY RESULT** — **180° conduction** six-step VSI: `VL(rms) = 0.816·Vs`, fundamental line `≈ 0.78·Vs`. **SPWM** (linear, `ma ≤ 1`) gives a fundamental phase peak of `ma·Vs/2` and pushes harmonics to around the **carrier frequency (mf)**, making them easy to filter.

> 🧠 **MEMORY HOOK** — "**180° = 3 ON (0.816 Vs line); 120° = 2 ON**". SPWM: **ma = Vr/Vc**, fundamental ∝ ma, harmonics near **mf** (high, filterable).

> ⚠️ **TRAP ALERT** — **180° conduction is preferred** (higher output than 120°). SPWM's **linear** range is `ma ≤ 1`; beyond that (**over-modulation**) the output approaches the six-step square wave and low-order harmonics reappear. A high `mf` gives cleaner output.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| 180° line RMS | `VL = √(2/3)·Vs ≈ 0.816·Vs` |
| 180° phase RMS | `Vph = 0.471·Vs` |
| 180° fundamental line RMS | `≈ 0.78·Vs` |
| 120° phase RMS | `Vs/√6 ≈ 0.408·Vs` |
| SPWM fundamental peak (phase) | `ma·Vs/2` (ma ≤ 1) |

### 🧮 Solved Examples

**Example 1 — 180° conduction outputs.** A three-phase VSI in 180° mode has `Vs = 600 V` DC. Find the RMS line and phase voltages.

```
VL(rms) = √(2/3)·Vs = 0.8165 × 600 = 489.9 V
Vph(rms) = VL/√3 = 489.9/1.732 = 282.8 V  (= 0.4714 × 600 ✓)
```

**Example 2 — SPWM fundamental.** An SPWM inverter has `Vs = 400 V`, modulation index `ma = 0.8`. Find the peak fundamental phase voltage.

```
Peak fundamental (phase) = ma·(Vs/2) = 0.8 × (400/2) = 0.8 × 200 = 160 V
```

### ⚠️ Common Traps

1. Swapping 180° (3 ON) and 120° (2 ON) conduction.
2. Using peak instead of RMS in the six-step formulas.
3. Forgetting SPWM's linear limit `ma ≤ 1`.
4. Thinking SPWM removes all harmonics — it **shifts** them to higher order.
5. Confusing `ma` (amplitude ratio) with `mf` (frequency ratio).
6. Taking 120°-mode output as higher than 180° — it's **lower**.

### 📝 Test — Power Electronics (8 Q)

**Q1 (MCQ).** In 180° conduction mode, the number of switches ON at any instant is:
(a) 1 (b) 2 (c) 3 (d) 6

**Q2 (MCQ).** The RMS line voltage of a 180° six-step VSI is:
(a) 0.408 Vs (b) 0.816 Vs (c) Vs (d) 0.5 Vs

**Q3 (MCQ).** In SPWM, the modulation index ma is:
(a) fc/fr (b) Vr/Vc (c) Vs/2 (d) Vph/Vs

**Q4 (MCQ).** SPWM pushes harmonics to around the:
(a) fundamental (b) carrier frequency (c) DC (d) 3rd harmonic

**Q5 (MCQ).** The linear range of SPWM is:
(a) ma ≤ 1 (b) ma > 1 (c) ma = 0 (d) ma ≥ 2

**Q6 (NAT).** A 180° three-phase VSI has Vs = 540 V. Find the RMS phase voltage (V).

**Q7 (NAT).** For Q6, find the RMS line voltage (V).

**Q8 (NAT).** An SPWM inverter, Vs = 600 V, ma = 0.9. Find the peak fundamental phase voltage (V).

<details><summary>🔑 Solutions</summary>

**Q1 — (c) 3.**

**Q2 — (b) 0.816 Vs.**

**Q3 — (b) Vr/Vc.**

**Q4 — (b) carrier frequency.**

**Q5 — (a) ma ≤ 1.**

**Q6.** `Vph = 0.4714 × 540 = 254.6 V`.

**Q7.** `VL = √3 × 254.6 = 441 V` (= 0.816 × 540 ✓).

**Q8.** `Peak = ma·Vs/2 = 0.9 × 600/2 = 0.9 × 300 = 270 V`.

</details>

---

> 🧠 **DAY-38 WRAP** — AC bridges: **Schering (Cx=C2R4/R3, tan δ=ωC4R4)**, **Wien (f=1/2πRC)**, Wagner earth for stray C. Synchronous machine: **E=4.44 Kw f φ T**, lagging **demagnetises**/leading magnetises, salient **Xd>Xq**. Inverter: **180° six-step (0.816 Vs line, 0.78 fundamental)**, **SPWM ma=Vr/Vc** (fundamental ∝ ma, harmonics near mf). Revise the boxed KEY RESULTS. ⚡
