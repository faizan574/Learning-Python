# ⚡ GATE Technical Revision — Day 67 (2026-09-26)

*Measurements covers the galvanometer family (d'Arsonval, ballistic, fluxmeter), Machines opens DC machines (EMF, armature reaction, commutation), and Power Electronics rounds up the other devices (TRIAC, DIAC, GTO) and their gate drives.*

📅 Tech Day 67 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics · 🔁 Round 4 (all three sections)

> 🧠 **MEMORY HOOK** — Today: the **galvanometer** (`θ = GI/K`, ballistic reads **charge** from the first swing), the **DC machine EMF** (`E = PφZN/60A`) with **armature reaction & commutation**, and the **TRIAC/DIAC/GTO** family with **isolated gate drives**.

---

## 🔧 Measuring Instruments: Galvanometers — d'Arsonval, Ballistic & Fluxmeter

### 📖 Concept Deep Dive

A **galvanometer** detects/measures small currents or charges by the torque on a coil in a magnetic field.

**d'Arsonval (moving-coil) galvanometer.** A light coil (N turns, area A) pivots in a radial field B. Current produces a **deflecting torque**:
```
Td = N·B·A·I = G·I          (G = NBA = displacement constant)
Control (spring) torque:  Tc = K·θ
At steady deflection:  G·I = K·θ  ⇒  θ = (G/K)·I
Current sensitivity:  Si = θ/I = G/K
```

**Damping.** The moving system settles via damping (air friction, fluid, or **eddy-current** in the former/circuit). The **external resistance** that gives just-critical damping is the **CDRX (Critical Damping Resistance eXternal)**:
- `R < CDRX` ⇒ **underdamped** (oscillatory),
- `R = CDRX` ⇒ **critically damped** (fastest, no overshoot),
- `R > CDRX` ⇒ **overdamped** (sluggish).

**Ballistic galvanometer.** Designed to measure a **charge (impulse)** `Q = ∫i dt` — e.g., from a flux change through a search coil. It has a **large moment of inertia** and **light damping** (long period), so the whole charge passes **before** the coil moves appreciably. The **first swing (throw) `θ1`** is proportional to the charge:
```
Q = Kq·θ1        (Kq = charge sensitivity)
Q ≈ (K/G)·(T/2π)·θ1     (T = free oscillation period)
```
A **damping correction** (multiply θ1 by a factor from the successive-swing ratio) is applied when damping is not negligible.

**Fluxmeter.** A special ballistic-type instrument with **negligible control torque** (spring almost absent) and **heavy electromagnetic damping**. Its deflection is proportional to the **change in flux linkage** `ΔΨ = N·Δφ`, and it **holds** the reading (no return to zero), making it convenient for magnetic measurements.

| Instrument | Measures | Key feature |
|---|---|---|
| d'Arsonval | current | linear scale, `θ = GI/K` |
| Ballistic | charge Q | high inertia, first-throw `∝ Q` |
| Fluxmeter | flux linkage ΔΨ | no control torque, heavy damping |

> 💎 **KEY RESULT** — d'Arsonval: `Td = NBAI = GI`, `θ = GI/K`, sensitivity `G/K`. **Ballistic** reads **charge** (`Q ∝ θ1`, first swing). **Fluxmeter** reads **flux linkage** (no spring, heavily damped).

> ⚠️ **TRAP ALERT** — A **ballistic** galvanometer measures **charge**, not steady current; its useful output is the **first throw**, not a settled deflection. The **fluxmeter** has essentially **no restoring torque**, so it does not return to zero.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Deflecting torque | `Td = NBAI = G·I` |
| Steady deflection | `θ = (G/K)·I` |
| Current sensitivity | `Si = G/K` |
| Ballistic charge | `Q = Kq·θ1` (∝ first swing) |
| Ballistic (period form) | `Q ≈ (K/G)(T/2π)θ1` |
| Fluxmeter | `deflection ∝ ΔΨ = N·Δφ` |
| Damping | R<CDRX under, =CDRX critical, >CDRX over |

### 🧮 Solved Examples

**Example 1 — Galvanometer deflection.**
A moving-coil galvanometer has `N = 100`, `B = 0.2 T`, coil area `A = 4 cm²`, spring constant `K = 2×10⁻⁶ N·m/rad`. Find the deflection for `I = 1 mA`.

```
G = NBA = 100 × 0.2 × 4×10⁻⁴ = 8×10⁻³ N·m/A
θ = (G/K)·I = (8×10⁻³ / 2×10⁻⁶) × 1×10⁻³
  = 4000 × 1×10⁻³ = 4 rad   (large — a sensitive galvanometer)
```

**Example 2 — Ballistic charge.**
A ballistic galvanometer gives a first throw of `θ1 = 10°` for a charge, with charge sensitivity `Kq = 5 µC per degree`. Find the charge.

```
Q = Kq·θ1 = 5 µC/° × 10° = 50 µC
```

### ⚠️ Common Traps

1. **Ballistic measures charge, not current** — its reading is the **first swing** proportional to `∫i dt`.
2. **Fluxmeter has no control spring** — deflection stays put; it reads **flux linkage change**.
3. **CDRX is external** — critical damping depends on the **circuit resistance**, so the reading source impedance matters.
4. **G = NBA** — the displacement constant, not the spring constant K; don't swap them.
5. **Sensitivity vs deflection** — `Si = G/K` is per-unit current; multiply by I for the actual angle.
6. **Damping correction** — for a ballistic galvanometer with real damping, correct the first throw upward.

### 📝 Test (5 MCQ + 3 NAT)

**Q1 (MCQ).** The deflecting torque of a d'Arsonval galvanometer is proportional to:
(a) I² (b) I (c) √I (d) Q

**Q2 (MCQ).** A ballistic galvanometer measures:
(a) steady current (b) charge (c) power (d) frequency

**Q3 (MCQ).** A fluxmeter differs from a ballistic galvanometer by having:
(a) a strong spring (b) negligible control torque & heavy damping (c) no coil (d) a digital display

**Q4 (MCQ).** CDRX refers to the resistance giving:
(a) maximum deflection (b) critical damping (c) zero current (d) infinite sensitivity

**Q5 (MCQ).** The displacement constant G of a galvanometer equals:
(a) K/N (b) NBA (c) BA/N (d) NB/A

**Q6 (NAT).** A galvanometer has G = 6×10⁻³ N·m/A and K = 3×10⁻⁶ N·m/rad. Find the deflection (rad) for I = 0.5 mA.

**Q7 (NAT).** Ballistic galvanometer: charge sensitivity 4 µC/division; first throw 12 divisions. Find the charge (µC).

**Q8 (NAT).** N = 200, B = 0.25 T, A = 2 cm². Find the displacement constant G (N·m/A).

<details><summary>🔑 Solutions</summary>

**Q1 — (b) I.** `Td = GI ∝ I`.

**Q2 — (b) charge.**

**Q3 — (b).** No control torque, heavy damping.

**Q4 — (b) critical damping.**

**Q5 — (b) NBA.**

**Q6 — 1 rad.** `θ = (G/K)I = (6×10⁻³/3×10⁻⁶)(0.5×10⁻³) = 2000 × 0.5×10⁻³ = 1 rad`.

**Q7 — 48 µC.** `Q = 4 × 12 = 48 µC`.

**Q8 — 0.01 N·m/A.** `G = NBA = 200 × 0.25 × 2×10⁻⁴ = 0.01`.
</details>

---

## 🔧 Electrical Machines: DC Machines I — Construction, EMF Equation, Armature Reaction & Commutation

### 📖 Concept Deep Dive

**Construction.** A DC machine has a **stationary field** and a **rotating armature**:
- **Stator:** yoke (frame), **main poles** with field windings, and **interpoles** (commutating poles) between them.
- **Rotor (armature):** slotted laminated core carrying the **armature winding**, the **commutator** (segmented copper), and **brushes** for external connection.

**EMF equation.** For `P` poles, flux `φ` per pole, `Z` armature conductors, speed `N` rpm and `A` parallel paths:
```
E = (P·φ·Z·N) / (60·A)
Lap winding:  A = P     Wave winding:  A = 2
```
The same machine acts as a **generator** (E = generated emf) or **motor** (E = back-emf `Eb`). Torque:
```
Ta = (P·φ·Z / (2π·A))·Ia = 0.159·(PφZ/A)·Ia
```

**Armature reaction.** The **armature MMF** (from load current) distorts and weakens the main field. It has two effects:
- **Cross-magnetising** — shifts the flux, moving the **Magnetic Neutral Axis (MNA)** in the direction of rotation (generator) / against it (motor).
- **Demagnetising** — a net field weakening once the brushes are shifted.
**Remedies:** **interpoles (commutating poles)** for good commutation, **compensating windings** (in the pole faces, carrying armature current) to cancel cross-magnetisation under the poles, and (historically) **brush shift**.

**Commutation.** As an armature coil passes under a brush, its current must **reverse** (from `+Ia/A` to `−Ia/A`). Poor reversal causes **sparking** at the brushes. The **reactance voltage** (self-induced by the fast current reversal) opposes the change and delays it (under-commutation). Improvements:
- **Interpoles** — induce a voltage that **cancels the reactance voltage** (EMF commutation).
- **Resistance commutation** — high-resistance **carbon brushes** force the current to transfer.

> 💎 **KEY RESULT** — `E = PφZN/(60A)`; **lap A = P, wave A = 2**. Armature reaction = **cross-magnetising (shifts MNA) + demagnetising**; fixed by **interpoles & compensating windings**. Commutation sparking is due to **reactance voltage**, cured by **interpoles**.

> 🧠 **MEMORY HOOK** — **"Lap = P paths (parallel/high current), Wave = 2 paths (series/high voltage)."** Interpoles fix **commutation**; compensating windings fix **armature reaction** under the poles.

> ⚠️ **TRAP ALERT** — **Interpoles** improve **commutation** (cancel reactance voltage); **compensating windings** cancel **armature-reaction distortion** under the pole faces — different jobs. In the EMF equation, use **A = P (lap)** or **A = 2 (wave)** correctly.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Generated / back EMF | `E = PφZN/(60A)` |
| Parallel paths | Lap `A = P` ; Wave `A = 2` |
| Torque | `Ta = (PφZ/2πA)·Ia` |
| Torque (numeric) | `Ta = 0.159·(PφZ/A)·Ia` |
| Armature reaction | cross-magnetising + demagnetising |
| Commutation aid | interpoles (cancel reactance voltage) |

### 🧮 Solved Examples

**Example 1 — Generated EMF (lap).**
A 4-pole, lap-wound DC generator has `Z = 400` conductors, flux `φ = 0.02 Wb/pole`, running at `N = 1500 rpm`. Find the generated EMF.

```
Lap: A = P = 4
E = PφZN/(60A) = (4 × 0.02 × 400 × 1500)/(60 × 4)
  = (48000×... ) : numerator = 4×0.02×400×1500 = 48 000
  denominator = 60 × 4 = 240
E = 48 000/240 = 200 V
```

**Example 2 — Same machine, wave-wound.**
Repeat for a wave winding (`A = 2`).

```
E = PφZN/(60A) = (4 × 0.02 × 400 × 1500)/(60 × 2)
  = 48 000/120 = 400 V   (wave ⇒ higher voltage, A=2)
```

### ⚠️ Common Traps

1. **A = P (lap) vs A = 2 (wave)** — the single most common EMF-equation error.
2. **Interpoles vs compensating windings** — commutation vs armature-reaction distortion; don't swap.
3. **Reactance voltage** — the cause of sparking; interpoles inject a cancelling EMF.
4. **MNA shift direction** — for a generator the MNA shifts **forward** (direction of rotation); reversed for a motor.
5. **Demagnetising vs cross-magnetising** — cross-magnetising distorts/shifts; demagnetising (after brush shift) reduces flux.
6. **Lap = more current, wave = more voltage** — pick the winding for the duty.

### 📝 Test (5 MCQ + 3 NAT)

**Q1 (MCQ).** In a lap winding, the number of parallel paths is:
(a) 2 (b) P (c) P/2 (d) 2P

**Q2 (MCQ).** Sparking at the commutator is primarily due to:
(a) armature resistance (b) reactance voltage during commutation (c) field weakening (d) friction

**Q3 (MCQ).** Interpoles are provided to improve:
(a) armature reaction under poles (b) commutation (c) field strength (d) efficiency only

**Q4 (MCQ).** Compensating windings are used to neutralise:
(a) reactance voltage (b) cross-magnetising armature reaction under the poles (c) eddy currents (d) hysteresis

**Q5 (MCQ).** A wave winding is preferred for:
(a) high current, low voltage (b) high voltage, low current (c) both high (d) neither

**Q6 (NAT).** A 6-pole wave-wound generator: Z = 600, φ = 0.01 Wb, N = 1000 rpm. Find EMF (V).

**Q7 (NAT).** For the same machine as lap-wound (A = P = 6), find the EMF (V).

**Q8 (NAT).** A 4-pole lap machine, Z = 500, φ = 0.025 Wb, runs at 1200 rpm. Find EMF (V).

<details><summary>🔑 Solutions</summary>

**Q1 — (b) P.**

**Q2 — (b) reactance voltage.**

**Q3 — (b) commutation.**

**Q4 — (b) cross-magnetising armature reaction under the poles.**

**Q5 — (b) high voltage, low current.** Wave: A = 2.

**Q6 — 300 V.**
```
Wave A=2: E = (6 × 0.01 × 600 × 1000)/(60 × 2) = 36 000/120 = 300 V
```

**Q7 — 100 V.**
```
Lap A=6: E = (6 × 0.01 × 600 × 1000)/(60 × 6) = 36 000/360 = 100 V
```

**Q8 — 250 V.**
```
Lap A=4: E = (4 × 0.025 × 500 × 1200)/(60 × 4) = 60 000/240 = 250 V
```
</details>

---

## 🔧 Power Electronics: Other Devices & Gate Drives — TRIAC, DIAC, GTO, MOSFET/IGBT Drive, Firing & Isolation

### 📖 Concept Deep Dive

**TRIAC (Triode for AC).** A **bidirectional** three-terminal device (**MT1, MT2, gate**) — functionally **two SCRs in antiparallel** in one chip. It **conducts in both directions**, so it controls **AC power** directly (light dimmers, fan regulators, heater control). It can be triggered in **all four quadrants** (MT2 positive/negative × gate positive/negative), though the **I+ and III− (or I−/III+)** modes are most sensitive. Being bidirectional, it has **no reverse-blocking** state and a lower `dv/dt` rating than an SCR.

**DIAC (Diode for AC).** A **bidirectional trigger diode** with **no gate** — it stays off until the voltage reaches the **breakover `VBO`** in either polarity, then exhibits **negative resistance** and conducts. It is used to **trigger a TRIAC** (a DIAC + RC network gives symmetric firing each half-cycle).

**GTO (Gate Turn-Off thyristor).** Like an SCR but can be **turned OFF by a negative gate pulse** (no forced-commutation circuit needed). Its **turn-off gain** is low:
```
Turn-off gain = IA / IGQ   (typically ~ 3–5)
```
so a **large negative gate current** is needed to turn it off. Used in **high-power** inverters/drives.

**Gate/base drive of MOSFET & IGBT.** These are **voltage-controlled** — apply `VGS`/`VGE` above threshold. To switch fast, the driver must **supply/remove the gate charge `Qg`** quickly:
```
Gate charge:  Qg = Cg·Vg (approx)
Drive current:  Ig ≈ Qg / t_switch
```
A **gate resistor** sets the switching speed (trade-off with dv/dt and ringing).

**Firing circuits & isolation.** SCR/TRIAC gate pulses are generated by **R, RC, or UJT relaxation-oscillator** circuits (the UJT gives a well-timed pulse train). The **control (low-voltage) side must be isolated** from the **power (high-voltage) side** using a **pulse transformer** or an **optocoupler/opto-isolator**.

> 💎 **KEY RESULT** — **TRIAC** = bidirectional (2 SCRs antiparallel), AC control; **DIAC** = gateless bidirectional trigger for TRIACs; **GTO** turns off by **negative gate** (turn-off gain `IA/IGQ ≈ 3–5`). MOSFET/IGBT: **voltage-driven**, need gate-charge current; isolate via **pulse transformer/optocoupler**.

> 🧠 **MEMORY HOOK** — **DIAC triggers, TRIAC conducts** (both ways). **GTO = SCR you can switch off** from the gate. **UJT** makes the firing pulse; **pulse transformer/opto** keeps control & power apart.

> ⚠️ **TRAP ALERT** — A **TRIAC has no reverse-blocking** (it conducts both ways) — unlike an SCR. The **GTO turn-off gain is low**, so turn-off needs a **big** negative gate current. MOSFET/IGBT draw **negligible steady gate current** but a **large transient** to (dis)charge `Cg`.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| TRIAC | 2 SCRs antiparallel; MT1, MT2, G |
| DIAC | gateless; breaks over at `±VBO` |
| GTO turn-off gain | `= IA/IGQ` (~3–5) |
| MOSFET gate charge | `Qg = Cg·Vg` |
| Gate drive current | `Ig ≈ Qg/t_switch` |
| Isolation | pulse transformer / optocoupler |

### 🧮 Solved Examples

**Example 1 — GTO turn-off current.**
A GTO conducts `IA = 400 A` and has a turn-off gain of `5`. Find the negative gate current needed to turn it off.

```
Turn-off gain = IA/IGQ ⇒ IGQ = IA / gain = 400/5 = 80 A
(A very large negative gate pulse — characteristic of GTOs.)
```

**Example 2 — MOSFET gate drive current.**
A MOSFET needs `Qg = 40 nC` of gate charge and must switch in `t = 100 ns`. Find the average gate-drive current.

```
Ig ≈ Qg/t = 40×10⁻⁹ / 100×10⁻⁹ = 0.4 A = 400 mA
(Steady-state gate current ≈ 0; this is the transient charging current.)
```

### ⚠️ Common Traps

1. **TRIAC has no reverse blocking** — it is bidirectional; don't treat it like a one-way SCR.
2. **DIAC has no gate** — it triggers on **breakover voltage**, used to fire TRIACs.
3. **GTO low turn-off gain** — needs a **large** negative gate current (tens of amps for high-power).
4. **MOSFET/IGBT gate current** — ~0 in steady state, but a **large pulse** during switching to move `Qg`.
5. **Isolation is mandatory** — never tie control ground to the power side; use a pulse transformer/optocoupler.
6. **UJT firing** — the UJT relaxation oscillator sets the **firing angle**, not the load power directly.

### 📝 Test (5 MCQ + 3 NAT)

**Q1 (MCQ).** A TRIAC is equivalent to:
(a) two diodes in series (b) two SCRs in antiparallel (c) one SCR + one diode (d) a MOSFET

**Q2 (MCQ).** A DIAC is used to:
(a) rectify AC (b) trigger a TRIAC (c) turn off a GTO (d) filter noise

**Q3 (MCQ).** A GTO can be turned off by:
(a) removing the anode (b) a negative gate pulse (c) raising temperature (d) a positive gate pulse

**Q4 (MCQ).** The steady-state gate current of a MOSFET is:
(a) large (b) ≈ zero (c) equal to drain current (d) negative

**Q5 (MCQ).** Isolation between control and power circuits uses a:
(a) shunt resistor (b) pulse transformer or optocoupler (c) capacitor bank (d) fuse

**Q6 (NAT).** A GTO conducts 600 A with turn-off gain 4. Find the gate turn-off current (A).

**Q7 (NAT).** A MOSFET gate charge is 60 nC; switching time 150 ns. Find the average gate drive current (mA).

**Q8 (NAT).** A TRIAC dimmer controls a 230 V, 1 kW heater. If it conducts at a firing angle giving Vrms = 163 V, find the approximate power delivered (W). (Use P ∝ Vrms².)

<details><summary>🔑 Solutions</summary>

**Q1 — (b) two SCRs in antiparallel.**

**Q2 — (b) trigger a TRIAC.**

**Q3 — (b) a negative gate pulse.**

**Q4 — (b) ≈ zero.** Voltage-controlled device.

**Q5 — (b) pulse transformer or optocoupler.**

**Q6 — 150 A.** `IGQ = 600/4 = 150 A`.

**Q7 — 400 mA.** `Ig = 60×10⁻⁹/150×10⁻⁹ = 0.4 A = 400 mA`.

**Q8 — ≈ 502 W.**
```
P = 1000 × (Vrms/230)² = 1000 × (163/230)²
  = 1000 × (0.7087)² = 1000 × 0.502 = 502 W
```
</details>

---

### 📊 GATE Tech Coverage Progress

```
Measuring Instruments  ████░░░░░░░░░░░░░░░░░  4/21  🔁 Round 4
Electrical Machines    ██████░░░░░░░░░░░░░░░  6/19  🔁 Round 4
Power Electronics      ██████░░░░░░░░░░░░░░░  6/18  🔁 Round 4
```

*Next: Measurements → PMMC instruments (shunts, multipliers, Ayrton shunt); Machines → DC generators (types, characteristics, build-up); Power Electronics → single-phase half-wave & half-controlled rectifiers.*

> ✅ **Self-check before you close:** Can you (1) write `θ = GI/K` and say what a ballistic galvanometer measures, (2) apply `E = PφZN/60A` with the right A for lap vs wave, and (3) contrast TRIAC/DIAC/GTO and the GTO turn-off gain? Re-read any KEY RESULT that felt shaky.
