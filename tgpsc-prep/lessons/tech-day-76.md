# ⚡ GATE Technical Revision — Day 76 (2026-10-05)

*Measurements covers the current transformer (CT) — errors & the open-secondary hazard, Machines starts synchronous machines (EMF, armature reaction, Xd/Xq), and Power Electronics does the three-phase VSI and SPWM.*

📅 Tech Day 76 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics · 🔁 Round 4 (all three sections)

> 🧠 **MEMORY HOOK** — Today: the **CT** (step-down current, **never open the secondary**, ratio/phase-angle errors), the **synchronous machine** (`E = 4.44 Kw f N φ`, `Ns = 120f/P`, salient-pole `Xd > Xq`), and the **3-φ VSI** (180° mode line RMS `0.816 Vs`, **SPWM** `ma ≤ 1`).

---

## 🔧 Measuring Instruments: Instrument Transformers — Current Transformer (CT)

### 📖 Concept Deep Dive

A **Current Transformer (CT)** steps a **large line current** down to a **standard low secondary current** (commonly **5 A or 1 A**) for metering/protection. The **primary** has **few turns** (in series with the line); the **secondary** has **many turns** feeding an ammeter/relay (low-impedance **burden**).

**Ratios & errors.**
```
Nominal ratio  Kn = Ip(rated)/Is(rated) = Ns/Np (turns)
Actual transformation ratio R = Ip/Is (includes exciting current)
Ratio (current) error % = (Kn − R)/R × 100
Phase-angle error θ = angle between primary current and the REVERSED secondary current
```
Errors arise because part of the primary ampere-turns supplies the **exciting (magnetising + loss) current**, so the secondary current is slightly less than, and out of phase with, the ideal.

**Burden.** The secondary load, expressed in **VA** (`= Is²·Z(burden)`) or as impedance. **Lower burden ⇒ smaller errors.**

**Open-secondary hazard (critical).** A CT secondary must **never be left open** while the primary is energised:
- With the secondary open, there is **no secondary MMF to oppose** the primary MMF, so **the entire primary current becomes magnetising current** ⇒ the core **drives into deep saturation**, inducing a **dangerously high voltage** across the open secondary (hazard to insulation and personnel) and overheating.
- **Always short-circuit (or keep burden on) the CT secondary** before disconnecting a meter.

**Testing:** by comparison with a standard CT (ratio & phase-angle), e.g., **Silsbee's method**.

> 💎 **KEY RESULT** — CT: `Kn = Ns/Np`; **ratio error** `(Kn−R)/R`, **phase-angle** error from exciting current; **burden in VA** (lower ⇒ better). **NEVER open the secondary** on load — core saturates, dangerous high voltage. Standard secondary **5 A / 1 A**.

> 🧠 **MEMORY HOOK** — **"CT secondary: short it, never open it."** Errors come from the **exciting current**; a smaller **burden** means smaller errors.

> ⚠️ **TRAP ALERT** — Opening a **CT** secondary is dangerous (saturation + high voltage); opening a **PT (voltage transformer)** secondary is **not** — it just loses the reading. Ratio error uses `(Kn − R)/R`; a CT is essentially a **short-circuited** (low-burden) transformer.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Nominal ratio | `Kn = Ip/Is = Ns/Np` |
| Ratio (current) error | `(Kn − R)/R × 100 %` |
| Phase-angle error | angle between Ip and reversed Is |
| Burden | `VA = Is²·Z(burden)` |
| Secondary standard | 5 A or 1 A |

### 🧮 Solved Examples

**Example 1 — Ratio error.**
A CT has nominal ratio `Kn = 100/5 = 20`; the actual transformation ratio is `R = 20.1`. Find the ratio error.

```
Ratio error % = (Kn − R)/R × 100 = (20 − 20.1)/20.1 × 100
             = (−0.1/20.1)×100 = −0.498 %  ≈ −0.5 %
```

**Example 2 — Burden.**
A CT secondary delivers `5 A` into a burden impedance of `0.8 Ω`. Find the burden in VA.

```
Burden = Is²·Z = 5² × 0.8 = 25 × 0.8 = 20 VA
```

### ⚠️ Common Traps

1. **Never open a CT secondary** on load (saturation, high voltage).
2. **CT vs PT** — only the CT secondary is dangerous open; PT can be open.
3. **Errors from exciting current** — ratio + phase-angle.
4. **Lower burden ⇒ smaller errors.**
5. **Standard secondary 5 A or 1 A.**
6. **Ratio error sign** — negative if actual ratio exceeds nominal.

### 📝 Test (5 MCQ + 3 NAT)

**Q1 (MCQ).** A CT secondary must never be:
(a) shorted (b) left open on load (c) earthed (d) loaded

**Q2 (MCQ).** The standard CT secondary current rating is usually:
(a) 10 A (b) 5 A or 1 A (c) 50 A (d) 2 A

**Q3 (MCQ).** CT errors arise mainly from the:
(a) burden voltage (b) exciting current (c) primary turns (d) frequency

**Q4 (MCQ).** The burden of a CT is expressed in:
(a) ohms or VA (b) watts only (c) amperes (d) volts

**Q5 (MCQ).** Opening a PT secondary (vs CT) is:
(a) equally dangerous (b) not dangerous (loses reading) (c) explosive (d) impossible

**Q6 (NAT).** A CT secondary carries 5 A into 1.2 Ω burden. Find the burden (VA).

**Q7 (NAT).** Kn = 40, actual ratio R = 40.2. Find the ratio error (%).

**Q8 (NAT).** A CT has Np = 2 turns, Ns = 400 turns. Find the nominal current ratio.

<details><summary>🔑 Solutions</summary>

**Q1 — (b) left open on load.**

**Q2 — (b) 5 A or 1 A.**

**Q3 — (b) exciting current.**

**Q4 — (a) ohms or VA.**

**Q5 — (b) not dangerous.**

**Q6 — 30 VA.** `5²×1.2 = 25×1.2 = 30 VA`.

**Q7 — −0.5%.** `(40 − 40.2)/40.2×100 = −0.497 ≈ −0.5%`.

**Q8 — 200.** `Kn = Ns/Np = 400/2 = 200`.
</details>

---

## 🔧 Electrical Machines: Synchronous Machines I — Construction, EMF, Armature Reaction & Xd/Xq

### 📖 Concept Deep Dive

A **synchronous machine** has a **stationary armature (3-φ stator)** and a **rotating DC-excited field (rotor)**, running at **synchronous speed** `Ns = 120f/P`.

**Rotor types:**
- **Salient-pole** — projecting poles, large diameter, **low speed** (hydro generators); many poles.
- **Cylindrical (non-salient / round)** — smooth rotor, **high speed** (turbo-alternators, 2-4 poles).

**EMF equation (per phase):**
```
E(ph) = 4.44 · Kw · f · N · φ
Kw = Kp · Kd (winding factor)
Pitch factor Kp = cos(α/2)   (α = short-pitch angle)
Distribution factor Kd = sin(mβ/2)/(m·sin(β/2))
  (m = slots/pole/phase, β = slot angle)
```
The winding factor `Kw < 1` accounts for short-pitched, distributed windings (which reduce harmonics and copper, at a small fundamental reduction).

**Armature reaction** (effect of load current on the main field) depends on **power factor**:
- **Unity pf** — purely **cross-magnetising** (distorts, shifts).
- **Zero-lagging pf (inductive)** — **demagnetising** (weakens field ⇒ voltage drops).
- **Zero-leading pf (capacitive)** — **magnetising** (strengthens field ⇒ voltage rises).

**Two-reaction theory (salient-pole).** The armature MMF is resolved along the **direct axis (d)** and **quadrature axis (q)**, giving two reactances with **`Xd > Xq`** (the air-gap is smaller along the pole/d-axis). Cylindrical rotors have a **uniform air-gap** ⇒ `Xd ≈ Xq = Xs` (synchronous reactance).

> 💎 **KEY RESULT** — `E(ph) = 4.44 Kw f N φ`; `Ns = 120f/P`. Armature reaction: **cross-mag (upf)**, **demag (lagging)**, **mag (leading)**. Salient-pole: two-reaction, **`Xd > Xq`**; cylindrical: `Xd ≈ Xq`.

> 🧠 **MEMORY HOOK** — **"Lagging demagnetises, leading magnetises, unity cross-magnetises."** Salient-pole air-gap: smaller on the d-axis ⇒ **Xd > Xq**.

> ⚠️ **TRAP ALERT** — A **lagging-pf (inductive) load demagnetises** (output voltage droops — hence regulation is positive); a **leading-pf load magnetises** (voltage can rise). **Xd > Xq** for salient-pole machines. The winding factor `Kw` reduces the ideal `4.44 fNφ`.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Synchronous speed | `Ns = 120f/P` |
| EMF per phase | `E = 4.44 Kw f N φ` |
| Winding factor | `Kw = Kp·Kd` |
| Pitch factor | `Kp = cos(α/2)` |
| Distribution factor | `Kd = sin(mβ/2)/(m sin(β/2))` |
| Salient pole | `Xd > Xq` |

### 🧮 Solved Examples

**Example 1 — Generated EMF.**
A 3-φ, 4-pole, 50 Hz alternator has `N = 240` turns/phase, flux `φ = 0.05 Wb`, winding factor `Kw = 0.96`. Find the per-phase EMF.

```
E = 4.44 × Kw × f × N × φ = 4.44 × 0.96 × 50 × 240 × 0.05
  = 4.44 × 0.96 × 50 × 12 = 4.44 × 0.96 × 600 = 2557.4 V
(≈ 2557 V per phase)
```

**Example 2 — Distribution factor.**
An alternator has `m = 3` slots/pole/phase and slot angle `β = 20°`. Find the distribution factor.

```
Kd = sin(mβ/2)/(m·sin(β/2)) = sin(3×20/2)/(3·sin(20/2))
   = sin(30°)/(3·sin(10°)) = 0.5/(3×0.1736) = 0.5/0.5209 = 0.9598
(≈ 0.96)
```

### ⚠️ Common Traps

1. **Lagging pf ⇒ demagnetising** (voltage droops); leading ⇒ magnetising.
2. **Xd > Xq** for salient-pole (not equal).
3. **Kw = Kp·Kd < 1** — don't omit it from the EMF.
4. **Ns = 120f/P** — salient-pole = many poles/low speed; cylindrical = few poles/high speed.
5. **Kd formula** uses slots/pole/phase (m) and slot angle (β).
6. **Cross-magnetising at unity pf** — distorts but doesn't net-weaken.

### 📝 Test (5 MCQ + 3 NAT)

**Q1 (MCQ).** The EMF per phase of an alternator is:
(a) 4.44 fNφ (b) 4.44 Kw fNφ (c) 1.11 fNφ (d) fNφ

**Q2 (MCQ).** A lagging-pf load causes armature reaction that is:
(a) magnetising (b) demagnetising (c) cross-magnetising (d) none

**Q3 (MCQ).** For a salient-pole machine:
(a) Xd = Xq (b) Xd > Xq (c) Xd < Xq (d) Xq = 0

**Q4 (MCQ).** A cylindrical-rotor machine is used for:
(a) low-speed hydro (b) high-speed turbo-alternators (c) DC (d) stepper

**Q5 (MCQ).** The winding factor Kw equals:
(a) Kp + Kd (b) Kp · Kd (c) Kp/Kd (d) Kp − Kd

**Q6 (NAT).** A 6-pole, 50 Hz alternator. Find the synchronous speed (rpm).

**Q7 (NAT).** Kp for a coil short-pitched by 30° (α = 30°). Find Kp.

**Q8 (NAT).** E = 4.44 Kw fNφ with Kw = 0.95, f = 50, N = 200, φ = 0.04 Wb. Find E (V).

<details><summary>🔑 Solutions</summary>

**Q1 — (b) 4.44 Kw fNφ.**

**Q2 — (b) demagnetising.**

**Q3 — (b) Xd > Xq.**

**Q4 — (b) high-speed turbo-alternators.**

**Q5 — (b) Kp · Kd.**

**Q6 — 1000 rpm.** `Ns = 120×50/6 = 1000`.

**Q7 — 0.966.** `Kp = cos(30/2) = cos15° = 0.966`.

**Q8 — 1687 V.** `E = 4.44×0.95×50×200×0.04 = 4.44×0.95×400 = 1687.2 V`.
</details>

---

## 🔧 Power Electronics: Inverters II — Three-Phase VSI (120°/180°) & SPWM

### 📖 Concept Deep Dive

A **three-phase VSI** uses **6 switches** (three legs) to synthesise 3-φ AC from a DC bus. Two conduction schemes:

**180° conduction mode.** Each switch conducts for **180°**; at any instant **three switches** are on (one from each leg). Produces a **six-step** output. For a star-connected load (bus `Vs`):
```
RMS line voltage:        V_L(rms) = √(2/3)·Vs = 0.8165·Vs
RMS phase voltage:       V_ph(rms) = √2·Vs/3 = 0.4714·Vs
Fundamental line (rms):  V_L1 = (√6/π)·Vs = 0.78·Vs
```

**120° conduction mode.** Each switch conducts for **120°**; at any instant **two switches** are on. Each phase is open for part of the cycle; lower utilisation, but avoids line-to-line short risk during switching.

**PWM & Sinusoidal PWM (SPWM).** Instead of a fixed six-step wave, the switches are **modulated** to shape the output and **push harmonics to high frequency**:
- **Carrier (triangular) + reference (sine)** comparison generates gate pulses.
- **Amplitude modulation index** `ma = V(reference)/V(carrier)`.
  - **Linear region `ma ≤ 1`**: fundamental peak `∝ ma` (for a leg, `V1(peak) = ma·Vs/2`).
  - **Overmodulation `ma > 1`**: more fundamental but reintroduces low-order harmonics; **square wave** at the limit.
- **Frequency modulation ratio** `mf = f(carrier)/f(reference)` (large, odd, triple multiple preferred to cancel harmonics).

SPWM gives **near-sinusoidal output with low-order-harmonic suppression**, at the cost of switching losses — the basis of modern **VFDs and motor drives**.

> 💎 **KEY RESULT** — 3-φ VSI **180° mode**: `V_L(rms)=0.816 Vs`, `V_ph(rms)=0.471 Vs`, fundamental line `0.78 Vs`; **three** switches on at a time. **SPWM**: `ma = Vref/Vcarrier`, linear `ma ≤ 1` (fundamental ∝ ma), pushes harmonics to `mf` region.

> 🧠 **MEMORY HOOK** — **"180° mode ⇒ line RMS 0.816 Vs; SPWM ⇒ ma ≤ 1 keeps it linear."** Higher carrier ratio `mf` = cleaner output (harmonics near switching frequency).

> ⚠️ **TRAP ALERT** — In **180° mode, three devices conduct**; in **120° mode, two**. Fundamental **line** voltage (180°) is `0.78 Vs`; don't confuse with phase. **Overmodulation (ma > 1)** brings back low-order harmonics.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| 180° mode RMS line | `V_L(rms) = 0.816·Vs` |
| 180° mode RMS phase | `V_ph(rms) = 0.471·Vs` |
| 180° fundamental line | `V_L1 = 0.78·Vs` |
| SPWM mod. index | `ma = Vref/Vcarrier` |
| SPWM leg fundamental | `V1(peak) = ma·Vs/2` (ma ≤ 1) |
| Freq. mod. ratio | `mf = f_carrier/f_ref` |

### 🧮 Solved Examples

**Example 1 — 180° mode output.**
A 3-φ VSI (180° mode) runs from a `600 V` DC bus. Find the RMS line voltage and fundamental line voltage.

```
V_L(rms) = 0.8165 × 600 = 489.9 V
V_L1 (fundamental, rms) = 0.78 × 600 = 468 V
```

**Example 2 — SPWM fundamental.**
A VSI leg with `Vs = 400 V` DC bus is SPWM-controlled at `ma = 0.8`. Find the peak of the fundamental leg voltage.

```
V1(peak) = ma · Vs/2 = 0.8 × 400/2 = 0.8 × 200 = 160 V
(linear region, since ma = 0.8 ≤ 1)
```

### ⚠️ Common Traps

1. **180°: three switches on; 120°: two.**
2. **Line RMS 0.816 Vs, fundamental line 0.78 Vs** (180° mode).
3. **ma ≤ 1 is linear**; ma > 1 is overmodulation (low-order harmonics return).
4. **mf large & odd triple** to cancel harmonics.
5. **Phase vs line voltage** — keep them distinct.
6. **SPWM pushes harmonics near the switching (carrier) frequency.**

### 📝 Test (5 MCQ + 3 NAT)

**Q1 (MCQ).** In 180° conduction, how many switches conduct at a time?
(a) 1 (b) 2 (c) 3 (d) 6

**Q2 (MCQ).** The RMS line voltage of a 3-φ VSI (180°) is:
(a) 0.471 Vs (b) 0.816 Vs (c) 0.78 Vs (d) Vs

**Q3 (MCQ).** The SPWM amplitude modulation index is:
(a) Vcarrier/Vref (b) Vref/Vcarrier (c) fcarrier/fref (d) Vs/2

**Q4 (MCQ).** Overmodulation occurs when:
(a) ma < 1 (b) ma = 0 (c) ma > 1 (d) mf > 1

**Q5 (MCQ).** In 120° conduction, how many switches conduct at a time?
(a) 1 (b) 2 (c) 3 (d) 6

**Q6 (NAT).** 3-φ VSI (180°), Vs = 300 V. Find the RMS line voltage (V).

**Q7 (NAT).** SPWM leg: Vs = 500 V, ma = 0.6. Find the fundamental peak leg voltage (V).

**Q8 (NAT).** 3-φ VSI (180°), Vs = 540 V. Find the fundamental line voltage (rms, V).

<details><summary>🔑 Solutions</summary>

**Q1 — (c) 3.**

**Q2 — (b) 0.816 Vs.**

**Q3 — (b) Vref/Vcarrier.**

**Q4 — (c) ma > 1.**

**Q5 — (b) 2.**

**Q6 — 244.9 V.** `0.8165 × 300 = 244.9 V`.

**Q7 — 150 V.** `V1 = ma·Vs/2 = 0.6×250 = 150 V`.

**Q8 — 421.2 V.** `0.78 × 540 = 421.2 V`.
</details>

---

### 📊 GATE Tech Coverage Progress

```
Measuring Instruments  █████████████░░░░░░░  13/21  🔁 Round 4
Electrical Machines    ███████████████░░░░░  15/19  🔁 Round 4
Power Electronics      ███████████████░░░░░  15/18  🔁 Round 4
```

*Next: Measurements → Instrument transformers (PT); Machines → Synchronous generator voltage regulation (EMF/MMF/ZPF); Power Electronics → cycloconverters & matrix converters.*

> ✅ **Self-check before you close:** Can you (1) state the CT ratio/phase errors and why the secondary must never open, (2) write `E = 4.44 Kw f N φ` and the armature-reaction pf rules (Xd > Xq), and (3) give the 180°-mode line RMS (0.816 Vs) and the SPWM `ma` rule? Re-read any KEY RESULT that felt shaky.
