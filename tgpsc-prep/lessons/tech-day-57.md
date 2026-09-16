# ⚡ GATE Technical Revision — Day 57 (2026-09-16)

*Round-3 pass 15 — DC bridges, synchronous machines, and three-phase inverters. High-yield toward round-3 completion.*

📅 Tech Day 57 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics · 🔁 Round-3 pass 15

> 🧠 **MEMORY HOOK** — Today: **Wheatstone & Kelvin bridges** (resistance measurement), the **synchronous machine** (Xd, Xq, armature reaction), and the **3-φ VSI** (180°/120° conduction, SPWM). Three GATE staples.

---

## 🔧 Measuring Instruments: DC Bridges (Wheatstone, Kelvin, Megger)

### 📖 Concept Deep Dive

DC bridges measure resistance by a **null (balance)** method — highly accurate.

**Wheatstone bridge** — four resistors in a diamond, a galvanometer detector, a battery. At balance (galvanometer null), no current flows through the detector:

```
Balance:  P/Q = R/S     ⇒   unknown  R = (P/Q)·S
```

Used for **medium resistances** (1 Ω to ~1 MΩ). Below ~1 Ω, **lead and contact resistances** dominate and cause error; above ~1 MΩ, **leakage** matters.

**Sensitivity** — the galvanometer deflection per unit unbalance; maximised when the bridge arms are comparable and the galvanometer/battery are placed optimally.

**Kelvin double bridge** — for **low resistances (< 1 Ω)**, it adds a second pair of ratio arms to **eliminate the effect of lead/contact resistance** (the "yoke" resistance). At balance:

```
Rx = (P/Q)·S    with the ratio arms matched (p/q = P/Q) so the yoke term cancels
```

Used to measure very low resistances (shunts, contacts, ammeter shunts) accurately.

**High-resistance measurement** — for **> 1 MΩ** (insulation, etc.), guard circuits handle leakage; the **Megger (megohmmeter)** uses a hand-cranked or electronic generator (250-5000 V) with a **cross-coil (ratiometer) ohmmeter** to read insulation resistance directly (independent of the generator speed).

**Loss-of-charge method** — measures very high resistance from the RC discharge of a capacitor.

> 💎 **KEY RESULT** — Wheatstone `R = (P/Q)·S` (medium R, 1 Ω-1 MΩ). **Kelvin double bridge** for **low R (<1 Ω)** — cancels lead/contact resistance. **Megger** for insulation (high R), reads independent of crank speed (ratiometer).

> ⚠️ **TRAP ALERT** — **Kelvin double bridge** = **low** resistance; **Wheatstone** = medium; **Megger/loss-of-charge** = high (insulation). Wheatstone fails below ~1 Ω due to **lead/contact resistance** (Kelvin fixes this).

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Wheatstone balance | `P/Q = R/S` ⇒ `R = (P/Q)·S` |
| Kelvin double bridge | `Rx = (P/Q)·S` (yoke cancels with matched arms) |
| Range: Wheatstone | ~1 Ω to 1 MΩ (medium) |
| Range: Kelvin | < 1 Ω (low) |
| Megger | insulation/high R (ratiometer) |
| Sensitivity | deflection per unit unbalance |

### 🧮 Solved Examples

**Example 1 — Wheatstone unknown.**
A Wheatstone bridge balances with `P = 100 Ω`, `Q = 1000 Ω`, `S = 200 Ω`. Find the unknown `R`.

- `R = (P/Q)·S = (100/1000) × 200 = 0.1 × 200 = 20 Ω`.

**Example 2 — bridge choice.**
You need to measure a `0.005 Ω` shunt and a `500 kΩ` insulation. Which instruments?

- `0.005 Ω` (low) → **Kelvin double bridge**.
- `500 kΩ` (high/insulation) → **Megger** (or high-resistance bridge with guard).

> 🧠 **MEMORY HOOK** — "**Kelvin low, Wheatstone medium, Megger high.**" Balance condition: `R = (P/Q)·S`.

### ⚠️ Common Traps

1. Using a Wheatstone bridge for **very low** R (lead resistance error → use Kelvin).
2. Forgetting the Megger reads **independent of crank speed** (ratiometer).
3. Mixing the balance ratio (`R = (P/Q)·S`).
4. Using Wheatstone for insulation (leakage error).
5. Ignoring bridge **sensitivity** in detector selection.
6. Confusing the Kelvin bridge with a simple Wheatstone.

### 📝 Test — DC Bridges (8 Q)

1. The Wheatstone balance condition is: (a) P/Q = R/S (b) PQ = RS (c) P+Q = R+S (d) P·S = Q·R only.
2. The Kelvin double bridge measures: (a) medium R (b) low R (<1 Ω) (c) high R (d) capacitance.
3. Insulation resistance is measured by a: (a) Wheatstone (b) Megger (c) Kelvin (d) Q-meter.
4. A Wheatstone bridge is unsuitable below ~1 Ω because of: (a) leakage (b) lead/contact resistance (c) frequency (d) temperature.
5. The Megger's reading is independent of: (a) resistance (b) generator (crank) speed (c) voltage (d) coil.
6. **(NAT)** Wheatstone: P = 200, Q = 400, S = 150 Ω. Unknown R (Ω)?
7. **(NAT)** Wheatstone: P = 10, Q = 1000, S = 5000 Ω. Unknown R (Ω)?
8. **(NAT)** A bridge with P/Q = 1/50 and S = 2500 Ω. Unknown R (Ω)?

<details><summary>🔑 Solutions</summary>

**Q1 — (a) P/Q = R/S.**

**Q2 — (b) low R.**

**Q3 — (b) Megger.**

**Q4 — (b) lead/contact resistance.**

**Q5 — (b) crank speed.**

**Q6.** `R = (200/400)×150 = 0.5×150 = 75 Ω`.

**Q7.** `R = (10/1000)×5000 = 0.01×5000 = 50 Ω`.

**Q8.** `R = (1/50)×2500 = 50 Ω`.

</details>

---

## 🔧 Electrical Machines: Synchronous Machines I — Xd, Xq & Armature Reaction

### 📖 Concept Deep Dive

A **synchronous machine** has a **DC-excited rotor** (field) and a 3-φ **stator (armature)**. It runs at exactly **synchronous speed** `Ns = 120f/P`. As a **generator (alternator)** it converts mechanical to electrical; as a **motor** it runs at constant speed.

**EMF & rating.** The open-circuit (excitation) EMF `Ef = 4.44 f Nph Φ kw` (kw = winding factor). The generated EMF is set by field current & speed.

**Armature reaction** — the effect of the 3-φ stator MMF on the field flux, depending on the load power factor:
- **Unity pf** — armature MMF is **cross-magnetising** (distorts, at 90° to field).
- **Zero pf lagging** — **demagnetising** (opposes field → EMF drops → poor regulation).
- **Zero pf leading** — **magnetising** (aids field → EMF rises → possible negative regulation).

**Synchronous reactance.** The combined effect of armature leakage reactance `Xl` and armature reaction (modelled as a reactance `Xa`):

```
Xs = Xl + Xa   (synchronous reactance)
Zs = Ra + jXs  (synchronous impedance);  usually Xs >> Ra
Ef = V + I·(Ra + jXs)   (per phase, generator, phasor)
```

**Salient-pole machines — two-reaction (Blondel) theory.** The air gap is non-uniform, so armature reaction differs along the **direct axis (d)** and **quadrature axis (q)**:

```
Xd = direct-axis synchronous reactance (larger)
Xq = quadrature-axis synchronous reactance (smaller),  Xd > Xq
```

The armature current is resolved into `Id` (along d) and `Iq` (along q); the EMF equation and power include a **reluctance-torque** term (`(Xd−Xq)` term). **Cylindrical (round) rotor** machines have `Xd = Xq = Xs` (uniform air gap).

> 💎 **KEY RESULT** — `Ns = 120f/P`; `Xs = Xl + Xa`; `Ef = V + I(Ra + jXs)`. Armature reaction: **unity pf cross-mag, lag demag (regulation up), lead mag (regulation down)**. Salient pole: **Xd > Xq** (two-reaction theory); round rotor Xd = Xq.

> ⚠️ **TRAP ALERT** — **Lagging pf → demagnetising → large positive regulation**; **leading pf → magnetising → possibly negative regulation**. Salient-pole: **Xd > Xq** (direct-axis reactance larger). Round rotor has a **single** Xs.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Synchronous speed | `Ns = 120f/P` |
| EMF | `Ef = 4.44 f Nph Φ kw` |
| Synchronous reactance | `Xs = Xl + Xa` |
| Generator EMF | `Ef = V + I(Ra + jXs)` (per phase) |
| Salient pole | `Xd > Xq` (two-reaction) |
| Voltage regulation | `VR = (Ef − V)/V × 100` |

### 🧮 Solved Examples

**Example 1 — EMF (round rotor).**
A 3-φ alternator (per phase): `V = 230 V`, `I = 15 A` at unity pf, `Ra = 0.5 Ω`, `Xs = 5 Ω`. Find the generated EMF Ef.

- `Ef = V + I(Ra + jXs)`; at unity pf `I = 15∠0°`.
- `Ef = 230 + 15(0.5 + j5) = 230 + 7.5 + j75 = 237.5 + j75`.
- `|Ef| = √(237.5² + 75²) = √(56406 + 5625) = √62031 = 249.1 V`.

**Example 2 — regulation.**
For the above, voltage regulation?

- `VR = (Ef − V)/V × 100 = (249.1 − 230)/230 × 100 = 19.1/230 × 100 = 8.3%`.

> 🧠 **MEMORY HOOK** — "**Lag demagnetises (regulation ↑), lead magnetises (regulation ↓).**" Salient pole → **Xd > Xq**; round rotor → single Xs.

### ⚠️ Common Traps

1. Swapping demagnetising (lag) and magnetising (lead) effects.
2. Using `Xd = Xq` for a salient-pole machine (they differ).
3. Forgetting `Xs = Xl + Xa`.
4. Sign errors in `Ef = V + I(Ra+jXs)` (generator adds the drop).
5. Ignoring the reluctance-power term in salient-pole machines.
6. Confusing synchronous reactance with leakage reactance alone.

### 📝 Test — Synchronous Machines I (8 Q)

1. Synchronous speed is: (a) 120f/P (b) 60f/P (c) 120P/f (d) fP.
2. At lagging pf, armature reaction is: (a) magnetising (b) demagnetising (c) cross-magnetising (d) none.
3. At leading pf, armature reaction is: (a) demagnetising (b) magnetising (c) cross (d) zero.
4. For a salient-pole machine: (a) Xd = Xq (b) Xd > Xq (c) Xd < Xq (d) Xd = 0.
5. Synchronous reactance Xs equals: (a) Xl only (b) Xl + Xa (c) Xa only (d) Ra.
6. **(NAT)** 4-pole, 50 Hz alternator: synchronous speed (rpm)?
7. **(NAT)** Per phase: V = 200, I = 10 A upf, Ra = 1 Ω, Xs = 8 Ω. |Ef| (V, 1 dp)?
8. **(NAT)** For Q7, voltage regulation (%, 1 dp)?

<details><summary>🔑 Solutions</summary>

**Q1 — (a) 120f/P.**

**Q2 — (b) demagnetising.**

**Q3 — (b) magnetising.**

**Q4 — (b) Xd > Xq.**

**Q5 — (b) Xl + Xa.**

**Q6.** `Ns = 120×50/4 = 1500 rpm`.

**Q7.** `Ef = 200 + 10(1 + j8) = 210 + j80`; `|Ef| = √(210²+80²) = √(44100+6400) = √50500 = 224.7 V`.

**Q8.** `VR = (224.7 − 200)/200 × 100 = 12.4%`.

</details>

---

## 🔧 Power Electronics: Inverters II — Three-Phase VSI & SPWM

### 📖 Concept Deep Dive

A **three-phase VSI** (six switches, three legs) synthesises 3-φ AC from a DC bus. Two square-wave conduction modes:

**180° conduction mode.** Each switch conducts for **180°**; at any instant **three** switches conduct. The phase (line-to-neutral) and line voltages are quasi-square. Key results (for DC bus `Vdc`):

```
Line-to-line RMS (fundamental) = (√6/π)·Vdc ≈ 0.78·Vdc
Line-to-neutral RMS (fundamental) = (√2/π)·Vdc ≈ 0.45·Vdc
Line-to-line RMS (total, incl. harmonics) = √(2/3)·Vdc ≈ 0.816·Vdc
```

Output contains **odd harmonics except triplen** (3rd, 9th… are absent in line-to-line for a balanced 3-φ system) — so **5th, 7th, 11th, 13th…** remain.

**120° conduction mode.** Each switch conducts for **120°**; at any instant **two** switches conduct. Lower device utilisation; phase voltage is a stepped waveform. Used less commonly than 180°.

**PWM & SPWM.** To control output magnitude and reduce low-order harmonics:
- **Sinusoidal PWM (SPWM)** — compare a **sine reference** (frequency = desired output) with a high-frequency **triangular carrier**; switch when they cross. The output's fundamental is proportional to the **modulation index `ma`**:

```
ma = V(reference peak)/V(carrier peak)
Line-to-neutral fundamental peak = ma·(Vdc/2)  (for ma ≤ 1, linear region)
```

- **Linear region:** `ma ≤ 1`. **Overmodulation:** `ma > 1` (more fundamental but reintroduces low harmonics). At **ma ≈ 3.24** it reaches **square-wave (six-step)** operation (max fundamental).
- SPWM pushes harmonics to around the **carrier frequency** and its sidebands → easy to filter; **space-vector PWM (SVPWM)** gives ~15% higher DC-bus utilisation.

> 💎 **KEY RESULT** — 3-φ VSI 180°: line-to-line fundamental RMS `≈ 0.78 Vdc`, total line RMS `= √(2/3)Vdc ≈ 0.816 Vdc`; **no triplen harmonics** in line voltage. **SPWM:** fundamental ∝ `ma` (linear for ma ≤ 1); square-wave at ma ≈ 3.24. **SVPWM** ~15% better bus use.

> ⚠️ **TRAP ALERT** — In 180° mode, **three** switches conduct at once (120° mode → two). **Triplen harmonics are absent** in the line-to-line voltage of a balanced 3-φ inverter. SPWM linear region is **ma ≤ 1**; beyond is overmodulation.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| 180° line-line fundamental RMS | `(√6/π)·Vdc ≈ 0.78·Vdc` |
| 180° line-line total RMS | `√(2/3)·Vdc ≈ 0.816·Vdc` |
| 180° line-neutral fundamental RMS | `(√2/π)·Vdc ≈ 0.45·Vdc` |
| SPWM modulation index | `ma = Vref(peak)/Vcarrier(peak)` |
| SPWM L-N fundamental peak | `ma·Vdc/2` (ma ≤ 1) |
| Harmonics (line) | odd, no triplen (5,7,11,13…) |

### 🧮 Solved Examples

**Example 1 — 180° mode output.**
A 3-φ VSI (180°) has `Vdc = 600 V`. Fundamental line-to-line RMS voltage?

- `VLL(1) = (√6/π)·Vdc = (2.449/3.1416) × 600 = 0.7797 × 600 = 467.8 V`.

**Example 2 — SPWM fundamental.**
An SPWM inverter, `Vdc = 400 V`, modulation index `ma = 0.8` (linear). Line-to-neutral fundamental **peak** voltage?

- `V(LN,peak) = ma·Vdc/2 = 0.8 × 400/2 = 0.8 × 200 = 160 V`.
- (RMS = 160/√2 = 113.1 V.)

> 🧠 **MEMORY HOOK** — "**180° → 3 switches, 0.78 Vdc line fundamental, no triplen; SPWM → fundamental = ma·Vdc/2.**"

### ⚠️ Common Traps

1. Saying two switches conduct in 180° mode (it's **three**).
2. Including triplen harmonics in the line voltage (they **cancel**).
3. Using ma > 1 in the linear formula (overmodulation).
4. Confusing line-to-line vs line-to-neutral fundamentals.
5. Forgetting SVPWM's ~15% higher utilisation.
6. Mixing total RMS (0.816 Vdc) with fundamental (0.78 Vdc).

### 📝 Test — 3-φ VSI (8 Q)

1. In 180° conduction mode, at any instant how many switches conduct? (a) 1 (b) 2 (c) 3 (d) 6.
2. In 120° mode, how many conduct? (a) 1 (b) 2 (c) 3 (d) 4.
3. The line-to-line fundamental RMS (180°) is about: (a) 0.45Vdc (b) 0.78Vdc (c) 0.816Vdc (d) Vdc.
4. Line voltages of a balanced 3-φ inverter lack: (a) 5th (b) 7th (c) triplen (3rd, 9th) (d) fundamental.
5. In SPWM, the fundamental output is proportional to: (a) carrier freq (b) modulation index ma (c) Vdc only (d) load.
6. **(NAT)** 3-φ VSI 180°, Vdc = 500 V. Line-to-line fundamental RMS (V, 1 dp)?
7. **(NAT)** SPWM, Vdc = 600 V, ma = 0.9. L-N fundamental peak (V)?
8. **(NAT)** 180° mode, Vdc = 400 V. Total line-to-line RMS (V, 1 dp)?

<details><summary>🔑 Solutions</summary>

**Q1 — (c) 3.**

**Q2 — (b) 2.**

**Q3 — (b) 0.78Vdc.**

**Q4 — (c) triplen.**

**Q5 — (b) modulation index.**

**Q6.** `VLL(1) = 0.7797 × 500 = 389.9 V`.

**Q7.** `= 0.9 × 600/2 = 0.9 × 300 = 270 V`.

**Q8.** `√(2/3) × 400 = 0.8165 × 400 = 326.6 V`.

</details>

---

> 🧠 **DAY-57 WRAP (Round-3 pass 15)** — **Bridges:** Wheatstone `R = (P/Q)S` (medium), Kelvin (low R), Megger (insulation). **Synchronous machine:** `Xs = Xl + Xa`, lag demag/lead mag, salient **Xd > Xq**. **3-φ VSI:** 180° (3 switches, 0.78 Vdc line fundamental, no triplen), SPWM fundamental `ma·Vdc/2`, SVPWM +15%. ⚡

**🔁 Round-3 progress:** Measurements ▓▓▓▓▓▓▓▓▓▓ · Machines ▓▓▓▓▓▓▓▓▓▓ · Power Electronics ▓▓▓▓▓▓▓▓▓▓ — round-3 near completion (15/~21 revised). 🎓 Power Systems joins as a 4th subject once the reference PDFs arrive.
