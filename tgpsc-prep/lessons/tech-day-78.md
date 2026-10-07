# ⚡ GATE Technical Revision — Day 78 (2026-10-07)

*Measurements covers DC bridges (Wheatstone, Kelvin, megger), Machines does the synchronous motor (V-curves, hunting, synchronous condenser), and Power Electronics covers Fourier/waveform analysis of converter outputs.*

📅 Tech Day 78 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics · 🔁 Round 4 (all three sections)

> 🧠 **MEMORY HOOK** — Today: **DC bridges** (Wheatstone `Rx = R2R3/R1`; **Kelvin for low R**; megger for insulation), the **synchronous motor** (constant speed, **V-curves**, over-excited = leading = **synchronous condenser**), and **Fourier/THD** (`THD = √(Vrms²−V1²)/V1`).

---

## 🔧 Measuring Instruments: DC Bridges — Wheatstone, Kelvin Double Bridge & Megger

### 📖 Concept Deep Dive

**Wheatstone bridge** — the classic **medium-resistance** (≈1 Ω to 1 MΩ) measurement by **null balance**. Four arms `P, Q, R, S(=Rx)`; a galvanometer detects balance:
```
At balance (no galvanometer current):  P/Q = R/Rx
⇒ Rx = (Q/P)·R      (equivalently, products of opposite arms equal: P·Rx = Q·R)
```
**Sensitivity** (deflection per unit unbalance) depends on the **galvanometer sensitivity, the bridge supply voltage, and the arm ratios** (max near equal-arm ratio).

**Kelvin double bridge** — for **low resistances (< 1 Ω)**, where **lead and contact resistances** would corrupt a Wheatstone reading. It adds a **second pair of ratio arms** that, when set equal to the first pair, **cancels the connecting-lead resistance**, giving an accurate low-R value.

**High-resistance & insulation measurement:**
- **Megger (megohmmeter)** — a **direct-reading insulation tester** with a **hand-cranked (or electronic) generator** and a **ratiometer** movement (reading independent of generator speed); measures **MΩ-GΩ** insulation resistance.
- **Loss-of-charge method** (capacitor discharge) and **direct-deflection** method for very high R.

| Instrument | Range | Use |
|---|---|---|
| Wheatstone | ~1 Ω–1 MΩ | medium R |
| Kelvin double | < 1 Ω | low R (cancels leads) |
| Megger | MΩ–GΩ | insulation resistance |

> 💎 **KEY RESULT** — Wheatstone balance `Rx = (Q/P)·R` (opposite-arm products equal); **sensitivity** depends on galvanometer/voltage/ratio. **Kelvin double bridge → low R** (cancels lead/contact resistance). **Megger → insulation (MΩ-GΩ)**, ratiometer (speed-independent).

> 🧠 **MEMORY HOOK** — **"Wheatstone medium, Kelvin low, Megger insulation (high)."** Kelvin's extra ratio arms kill the lead resistance.

> ⚠️ **TRAP ALERT** — Use **Kelvin (not Wheatstone)** for sub-ohm resistances (lead/contact errors dominate otherwise). A **megger reading is independent of crank speed** (ratiometer). Wheatstone balance is **ratio**-based (`P/Q = R/Rx`).

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Wheatstone balance | `Rx = (Q/P)·R` (P·Rx = Q·R) |
| Sensitivity | ∝ galvanometer sens. × voltage × ratio factor |
| Kelvin double bridge | low R; cancels lead resistance |
| Megger | insulation R (MΩ-GΩ), ratiometer |

### 🧮 Solved Examples

**Example 1 — Wheatstone balance.**
A Wheatstone bridge balances with `P = 100 Ω`, `Q = 1000 Ω`, `R = 50 Ω`. Find the unknown `Rx`.

```
P/Q = R/Rx ⇒ Rx = (Q/P)·R = (1000/100)×50 = 10 × 50 = 500 Ω
```

**Example 2 — Ratio choice.**
To measure `Rx ≈ 0.01 Ω`, which bridge is appropriate and why?

```
Rx is sub-ohm ⇒ use a KELVIN DOUBLE BRIDGE.
A Wheatstone bridge's lead/contact resistances (~mΩ) would swamp 0.01 Ω;
the Kelvin bridge's second ratio arms cancel those lead resistances.
```

### ⚠️ Common Traps

1. **Kelvin for low R** (< 1 Ω); Wheatstone for medium R.
2. **Megger for insulation** (MΩ-GΩ), reading independent of speed.
3. **Wheatstone is ratio-based** — `P/Q = R/Rx`.
4. **Sensitivity** depends on galvanometer + voltage + ratio (max near unity ratio).
5. **Lead/contact resistance** is the reason Wheatstone fails at low R.
6. **High-R methods** — loss of charge, direct deflection.

### 📝 Test (5 MCQ + 3 NAT)

**Q1 (MCQ).** The Wheatstone bridge is best for measuring:
(a) very low R (b) medium R (c) insulation R (d) capacitance

**Q2 (MCQ).** The Kelvin double bridge is used for:
(a) high R (b) low R (< 1 Ω) (c) insulation (d) inductance

**Q3 (MCQ).** A megger measures:
(a) current (b) insulation resistance (c) frequency (d) power

**Q4 (MCQ).** At Wheatstone balance, the galvanometer current is:
(a) maximum (b) zero (c) half (d) rated

**Q5 (MCQ).** The Kelvin bridge's extra arms cancel:
(a) galvanometer resistance (b) lead/contact resistance (c) source resistance (d) capacitance

**Q6 (NAT).** Wheatstone: P = 200 Ω, Q = 400 Ω, R = 100 Ω. Find Rx (Ω).

**Q7 (NAT).** Wheatstone: P = Q = 1000 Ω, R = 250 Ω. Find Rx (Ω).

**Q8 (NAT).** Wheatstone: P = 10 Ω, Q = 1000 Ω, R = 5 Ω. Find Rx (Ω).

<details><summary>🔑 Solutions</summary>

**Q1 — (b) medium R.**

**Q2 — (b) low R (< 1 Ω).**

**Q3 — (b) insulation resistance.**

**Q4 — (b) zero.**

**Q5 — (b) lead/contact resistance.**

**Q6 — 200 Ω.** `Rx = (Q/P)R = (400/200)×100 = 2×100 = 200 Ω`.

**Q7 — 250 Ω.** `Rx = (1000/1000)×250 = 250 Ω`.

**Q8 — 500 Ω.** `Rx = (1000/10)×5 = 100×5 = 500 Ω`.
</details>

---

## 🔧 Electrical Machines: Synchronous Motor — V-Curves, Hunting & Synchronous Condenser

### 📖 Concept Deep Dive

A **synchronous motor** runs at **constant synchronous speed** `Ns = 120f/P` regardless of load (until it pulls out). It is **doubly excited** (AC armature + DC field) and **not inherently self-starting**.

**Power & load angle.** `P = (E·V/Xs)·sinδ`; load is carried by increasing the **load angle δ** (up to 90° pull-out). Speed stays constant; **δ** adjusts to the load.

**V-curves & inverted-V curves.** At **constant load**, plotting **armature current `Ia` vs field current `If`** gives a **U-shaped "V-curve"**:
- **Minimum Ia at unity pf** (just enough excitation).
- **Under-excited** (low If) ⇒ draws **lagging** current;
- **Over-excited** (high If) ⇒ draws **leading** current.
The **inverted-V curve** plots **power factor vs If** (peak at upf). Higher load shifts the V-curve up.

**Hunting.** On a **sudden load change**, the rotor **oscillates** about its new equilibrium δ before settling — **"hunting."** It is damped by **damper (amortisseur) windings** on the rotor pole faces.

**Starting methods.** (1) **Damper-winding start** — start as an induction motor, then apply DC field to **pull into synchronism**; (2) a **pony/auxiliary motor**; (3) a **VFD** ramp.

**Synchronous condenser.** An **over-excited synchronous motor running on no load (or light load)** draws a **leading current** and thus **supplies reactive power** to the system — acting like a **variable capacitor** for **power-factor correction and voltage support**.

> 💎 **KEY RESULT** — Synchronous motor: constant speed, `P = (EV/Xs)sinδ`; **V-curve** `Ia vs If` (min at upf); **under-excited = lagging, over-excited = leading**. **Hunting** damped by **damper windings**. **Synchronous condenser** = over-excited no-load motor → leading VARs (pf correction).

> 🧠 **MEMORY HOOK** — **"Over-excited = leading (condenser); under-excited = lagging; unity = minimum current."** Damper windings both **start** it and **damp hunting**.

> ⚠️ **TRAP ALERT** — A synchronous motor's **speed is constant** (load changes δ, not speed). **Over-excitation ⇒ leading pf** (supplies VARs — the synchronous-condenser action). It is **not self-starting** (needs damper winding/pony motor).

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Speed | `Ns = 120f/P` (constant) |
| Power | `P = (E·V/Xs)·sinδ` |
| V-curve | `Ia vs If` (U-shape, min at upf) |
| Over-excited | leading pf (supplies VARs) |
| Under-excited | lagging pf |
| Hunting damping | damper (amortisseur) windings |

### 🧮 Solved Examples

**Example 1 — Load angle for given power.**
A synchronous motor: `E = 1.1 pu`, `V = 1.0 pu`, `Xs = 1.0 pu`, delivering `P = 0.55 pu`. Find the load angle δ.

```
P = (E·V/Xs)·sinδ ⇒ sinδ = P·Xs/(E·V) = 0.55×1/(1.1×1) = 0.5
δ = 30°
```

**Example 2 — Synchronous condenser action.**
An over-excited synchronous motor on no load draws `20 A` leading. What is its system role?

```
Leading current on no load ⇒ it SUPPLIES reactive power (VARs)
= acts as a SYNCHRONOUS CONDENSER (improves pf / supports voltage).
```

### ⚠️ Common Traps

1. **Constant speed** — load changes δ, not speed.
2. **Over-excited ⇒ leading pf** (synchronous condenser); under-excited ⇒ lagging.
3. **Min armature current at unity pf** (bottom of V-curve).
4. **Not self-starting** — damper winding / pony motor needed.
5. **Hunting** damped by **damper windings** (also used to start).
6. **V-curve = Ia vs If; inverted-V = pf vs If.**

### 📝 Test (5 MCQ + 3 NAT)

**Q1 (MCQ).** A synchronous motor runs at:
(a) variable speed (b) synchronous (constant) speed (c) above sync (d) below sync

**Q2 (MCQ).** An over-excited synchronous motor draws:
(a) lagging current (b) leading current (c) zero current (d) DC

**Q3 (MCQ).** The V-curve plots:
(a) speed vs torque (b) Ia vs If (c) pf vs load (d) E vs δ

**Q4 (MCQ).** Hunting is damped by:
(a) field winding (b) damper (amortisseur) windings (c) brushes (d) commutator

**Q5 (MCQ).** A synchronous condenser is an over-excited motor that:
(a) absorbs VARs (b) supplies VARs (pf correction) (c) generates real power (d) runs at twice speed

**Q6 (NAT).** Sync motor: E=1.2, V=1.0, Xs=1.0 pu, δ=30°. Find P (pu).

**Q7 (NAT).** A 4-pole, 50 Hz synchronous motor. Find its speed (rpm).

**Q8 (NAT).** P = 0.6 pu, E = 1.0, V = 1.0, Xs = 0.8 pu. Find sinδ.

<details><summary>🔑 Solutions</summary>

**Q1 — (b) synchronous (constant) speed.**

**Q2 — (b) leading current.**

**Q3 — (b) Ia vs If.**

**Q4 — (b) damper (amortisseur) windings.**

**Q5 — (b) supplies VARs (pf correction).**

**Q6 — 0.6 pu.** `(1.2×1/1)·sin30° = 1.2×0.5 = 0.6 pu`.

**Q7 — 1500 rpm.** `120×50/4 = 1500`.

**Q8 — 0.48.** `sinδ = P·Xs/(EV) = 0.6×0.8/(1×1) = 0.48`.
</details>

---

## 🔧 Power Electronics: Fourier/Waveform Analysis of Converter Outputs

### 📖 Concept Deep Dive

Converter outputs are **non-sinusoidal periodic** waves; Fourier analysis decomposes them and defines quality metrics.

**Average & RMS values:**
```
Average:  V(avg) = (1/T)·∫ v(t) dt   (over one period)
RMS:      V(rms) = √( (1/T)·∫ v(t)² dt )
```

**Fourier series.** Any periodic `v(t)` = **DC term + sum of harmonics**:
```
v(t) = a0 + Σ[ an·cos(nωt) + bn·sin(nωt) ]   (n = 1,2,3,…)
a0 = average (DC) value
nth harmonic RMS Vn = √(an² + bn²)/√2
```

**Quality metrics:**
```
Harmonic factor of nth harmonic: HFn = Vn / V1
Total Harmonic Distortion: THD = √(Σ_{n≥2} Vn²) / V1 = √(Vrms² − V1²)/V1
Distortion factor DF, Form factor = Vrms/Vavg, Crest factor = Vpeak/Vrms
```
For converters: a **lower THD** ⇒ cleaner output; **PWM** pushes harmonic energy to high order (near the switching frequency), making filtering easy. For **input current** of a phase-controlled rectifier, **input pf = (distortion factor) × cos(displacement angle)** = `(I1/Irms)·cosφ1`.

| Metric | Formula |
|---|---|
| Average | `(1/T)∫v dt` |
| RMS | `√((1/T)∫v² dt)` |
| THD | `√(Vrms² − V1²)/V1` |
| Harmonic factor | `Vn/V1` |
| Form factor | `Vrms/Vavg` |

> 💎 **KEY RESULT** — Fourier: `v = a0 + Σ(an cos nωt + bn sin nωt)`; **THD = √(Vrms² − V1²)/V1**; **HFn = Vn/V1**; input pf `= (I1/Irms)·cosφ1` (distortion × displacement). Square wave THD ≈ 48.3%.

> 🧠 **MEMORY HOOK** — **"THD compares all harmonics to the fundamental: √(Vrms²−V1²)/V1."** Input pf = **distortion factor × displacement factor**.

> ⚠️ **TRAP ALERT** — THD uses the **fundamental V1** in the denominator (`√(Vrms²−V1²)/V1`), not Vrms. **Input power factor** has **two parts** (distortion + displacement) — a phase-controlled rectifier's pf is **worse than cosφ** because of distortion. Half-wave symmetry ⇒ only **odd** harmonics.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Average value | `V(avg) = (1/T)∫v dt` |
| RMS value | `V(rms) = √((1/T)∫v² dt)` |
| Fourier series | `v = a0 + Σ(an cos nωt + bn sin nωt)` |
| THD | `√(Vrms² − V1²)/V1` |
| Harmonic factor | `HFn = Vn/V1` |
| Input pf | `(I1/Irms)·cosφ1` |

### 🧮 Solved Examples

**Example 1 — THD from RMS & fundamental.**
A converter output has `Vrms = 100 V` and fundamental `V1 = 90 V`. Find the THD.

```
THD = √(Vrms² − V1²)/V1 = √(100² − 90²)/90
    = √(10000 − 8100)/90 = √1900/90 = 43.59/90 = 0.484 = 48.4 %
(the square-wave value)
```

**Example 2 — Input power factor.**
A rectifier draws `Irms = 10 A` with fundamental `I1 = 9 A` at displacement angle `φ1 = 30°`. Find the input power factor.

```
Input pf = (I1/Irms)·cosφ1 = (9/10)·cos30° = 0.9 × 0.866 = 0.779
(distortion factor 0.9 × displacement factor 0.866)
```

### ⚠️ Common Traps

1. **THD denominator is V1** (fundamental), not Vrms.
2. **Input pf = distortion × displacement** — two factors.
3. **a0 = average/DC** term of the Fourier series.
4. **Odd harmonics only** for half-wave-symmetric waveforms.
5. **Form factor = Vrms/Vavg**, crest = Vpeak/Vrms — don't mix.
6. **Lower THD = cleaner**; PWM shifts harmonics to high order.

### 📝 Test (5 MCQ + 3 NAT)

**Q1 (MCQ).** THD is defined as:
(a) √(Vrms²−V1²)/Vrms (b) √(Vrms²−V1²)/V1 (c) V1/Vrms (d) Vrms/V1

**Q2 (MCQ).** The DC term in a Fourier series is:
(a) a0 (average) (b) a1 (c) b1 (d) Vrms

**Q3 (MCQ).** Input power factor equals:
(a) cosφ1 only (b) (I1/Irms)·cosφ1 (c) I1/Irms only (d) 1.0

**Q4 (MCQ).** A waveform with half-wave symmetry contains:
(a) only even harmonics (b) only odd harmonics (c) all harmonics (d) none

**Q5 (MCQ).** Form factor is:
(a) Vpeak/Vrms (b) Vrms/Vavg (c) Vavg/Vrms (d) V1/Vrms

**Q6 (NAT).** Vrms = 50 V, V1 = 48 V. Find the THD (%).

**Q7 (NAT).** I1 = 8 A, Irms = 10 A, φ1 = 0°. Find the input pf.

**Q8 (NAT).** A fundamental V1 = 90 V and 3rd harmonic V3 = 30 V. Find HF3.

<details><summary>🔑 Solutions</summary>

**Q1 — (b) √(Vrms²−V1²)/V1.**

**Q2 — (a) a0 (average).**

**Q3 — (b) (I1/Irms)·cosφ1.**

**Q4 — (b) only odd harmonics.**

**Q5 — (b) Vrms/Vavg.**

**Q6 — 29.2%.** `√(50²−48²)/48 = √(2500−2304)/48 = √196/48 = 14/48 = 0.2917 = 29.2%`.

**Q7 — 0.8.** `(8/10)×cos0° = 0.8×1 = 0.8`.

**Q8 — 0.333.** `HF3 = V3/V1 = 30/90 = 0.333`.
</details>

---

### 📊 GATE Tech Coverage Progress

```
Measuring Instruments  ███████████████░░░░░  15/21  🔁 Round 4
Electrical Machines    █████████████████░░░  17/19  🔁 Round 4
Power Electronics      █████████████████░░░  17/18  🔁 Round 4
```

*Next: Measurements → AC bridges I (Maxwell, Hay, Anderson); Machines → Special machines (stepper, servo, BLDC); Power Electronics → applications (SMPS, UPS, HVDC, PFC).*

> ✅ **Self-check before you close:** Can you (1) give the Wheatstone balance and say when to use Kelvin vs megger, (2) explain the V-curve and synchronous-condenser action, and (3) write THD `= √(Vrms²−V1²)/V1` and input pf = distortion × displacement? Re-read any KEY RESULT that felt shaky.
