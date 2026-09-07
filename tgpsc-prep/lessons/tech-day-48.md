# ⚡ GATE Technical Revision — Day 48 (2026-09-07)

*Round-3 pass 6 — moving-iron meters, DC machine fundamentals, and the wider device family. Precise concepts, clean numbers.*

📅 Tech Day 48 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics · 🔁 Round-3 pass 6

> 🧠 **MEMORY HOOK** — Today: the **square-law MI meter** (`θ ∝ I²`), the **DC machine EMF equation** (`E = PφZN/60A`) with armature reaction & commutation, and the **TRIAC/DIAC/GTO** family with gate drives. High-yield fundamentals.

---

## 🔧 Measuring Instruments: Moving Iron (MI) Instruments

### 📖 Concept Deep Dive

A **Moving Iron (MI)** instrument measures current/voltage by the force on a piece of soft iron in the magnetic field of a fixed coil. Two types:
- **Attraction type** — a single soft-iron disc is drawn into the coil.
- **Repulsion type** — two iron pieces (one fixed, one movable) inside the coil are magnetised with the **same polarity** and repel each other.

**Torque from the energy principle.** The instrument stores magnetic energy `= ½·L·I²` in the coil (inductance `L` varies with deflection `θ`). The deflecting torque is the rate of change of stored energy with deflection at constant current:

```
Td = ½·I²·(dL/dθ)
At balance with spring torque Tc = K·θ:
θ = (I²/2K)·(dL/dθ)      ⇒   θ ∝ I²   (square-law scale)
```

So the MI scale is **non-uniform (crowded at the start, expanded at the top)** — a **square-law** scale. It responds to `I²`, so it reads the **RMS** value of an AC quantity **regardless of waveform** (a true-RMS-responding meter, subject to frequency limits).

**AC/DC use & errors.** MI meters work on **both AC and DC** (deflection depends on `I²`, independent of current direction). Key errors:
- **Hysteresis error** — the iron's B-H hysteresis makes the reading slightly different on rising vs falling current; on DC it causes a small error, on AC a smaller one (softer iron, alloys like nickel-iron reduce it).
- **Frequency (eddy/inductance) error** — because the coil is inductive, its impedance rises with frequency; in a **voltmeter** this causes reading to fall with frequency — compensated by a **capacitor across a series resistor (swamping/compensation)**.
- **Temperature** and **stray-field** errors (MI has a relatively weak operating field, so stray fields matter — shielding used).

**Comparison (quick):**

| Feature | PMMC | Moving Iron |
|---|---|---|
| Reads | DC (average) | AC + DC (RMS) |
| Scale | linear | square-law (non-uniform) |
| Field | strong (magnet) | weak (coil) |
| Power consumption | low | higher |
| Cost/robustness | costlier | cheap, robust |

> 💎 **KEY RESULT** — `Td = ½ I²(dL/dθ)`, so `θ ∝ I²` — **square-law, non-uniform scale**, reads **RMS** on AC, works on **AC & DC**. Errors: hysteresis, frequency (compensate voltmeter with a shunt capacitor), stray-field.

> ⚠️ **TRAP ALERT** — MI scale is **NOT linear** (it's square-law, cramped at low end). It reads **RMS** (not average), and works on **both AC and DC** — unlike PMMC (DC-only, linear, average).

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Stored magnetic energy | `W = ½·L·I²` |
| Deflecting torque | `Td = ½·I²·(dL/dθ)` |
| Steady deflection | `θ = (I²/2K)·(dL/dθ) ⇒ θ ∝ I²` |
| Scale type | square-law (non-uniform) |
| Frequency compensation (voltmeter) | capacitor `C ≈ 0.41·L/R²` across series R (design) |
| Reads (AC) | RMS value |

### 🧮 Solved Examples

**Example 1 — square-law scale.**
An MI ammeter reads full scale (say 100 divisions) at `10 A`. What deflection (divisions) corresponds to `5 A`?

- `θ ∝ I²` ⇒ `θ5/θ10 = (5/10)² = 0.25`.
- `θ5 = 0.25 × 100 = 25 divisions`.
- Note the **crowding**: half the current gives only a **quarter** of the deflection.

**Example 2 — torque from inductance rate.**
An MI instrument carries `I = 5 A`; at that deflection `dL/dθ = 4 µH/rad`. Deflecting torque?

- `Td = ½·I²·(dL/dθ) = 0.5 × 25 × 4×10⁻⁶ = 5×10⁻⁵ N·m = 50 µN·m`.

> 🧠 **MEMORY HOOK** — "**MI is I-squared**": square-law scale, RMS reading, AC+DC. The torque comes from `½ I² dL/dθ` — the coil *inductance changing* with deflection.

### ⚠️ Common Traps

1. Calling the MI scale linear — it's **square-law**.
2. Thinking MI reads average — it reads **RMS**.
3. Forgetting MI works on **both AC and DC**.
4. Ignoring **frequency error** in MI voltmeters (needs capacitor compensation).
5. Dropping the ½ in `Td = ½ I²(dL/dθ)`.
6. Underestimating **stray-field** error (weak operating field).

### 📝 Test — Moving Iron (8 Q)

1. The MI instrument scale is: (a) linear (b) square-law (c) logarithmic (d) exponential.
2. An MI meter reads the ___ value on AC: (a) average (b) peak (c) RMS (d) form-factor.
3. MI instruments can be used on: (a) DC only (b) AC only (c) both AC and DC (d) pulsed only.
4. The deflecting torque of an MI meter is: (a) NBAI (b) ½ I²(dL/dθ) (c) K θ (d) BIL.
5. Frequency error in an MI voltmeter is compensated by a: (a) series inductor (b) shunt capacitor across the series resistor (c) diode (d) shunt resistor.
6. **(NAT)** An MI meter reads full scale (150 div) at 15 A. Deflection (div) at 9 A?
7. **(NAT)** `I = 8 A`, `dL/dθ = 2.5 µH/rad`. Deflecting torque (µN·m)?
8. **(NAT)** MI ammeter deflection is 40 div at 4 A. Current (A) for 90 div?

<details><summary>🔑 Solutions</summary>

**Q1 — (b) square-law.**

**Q2 — (c) RMS.**

**Q3 — (c) both.**

**Q4 — (b).** `½ I²(dL/dθ)`.

**Q5 — (b).** Capacitor across series resistor.

**Q6.** `θ ∝ I²`: `θ = 150 × (9/15)² = 150 × 0.36 = 54 div`.

**Q7.** `Td = ½ × 64 × 2.5×10⁻⁶ = 8×10⁻⁵ = 80 µN·m`.

**Q8.** `I² ∝ θ`: `I = 4 × √(90/40) = 4 × √2.25 = 4 × 1.5 = 6 A`.

</details>

---

## 🔧 Electrical Machines: DC Machines I — EMF, Armature Reaction & Commutation

### 📖 Concept Deep Dive

A DC machine has a **stator** (field poles producing flux φ) and a **rotor/armature** (conductors in slots, connected to a **commutator**). It works as a generator (mechanical→electrical) or motor (electrical→mechanical) — the same machine.

**EMF equation.** With `P` poles, `Z` armature conductors, `A` parallel paths, flux `φ` Wb/pole, and speed `N` rpm:

```
E = (P·φ·Z·N)/(60·A)   volts
Lap winding:  A = P   (parallel paths = poles)
Wave winding: A = 2    (always two paths)
```

The **torque** developed: `T = (P·φ·Z·Ia)/(2π·A)` N·m (from `EbIa = T·ω`).

**Armature reaction.** When the armature carries current `Ia`, it creates its own MMF that **distorts and weakens** the main field flux:
- **Cross-magnetising** component — shifts the **Magnetic Neutral Axis (MNA)** away from the Geometric Neutral Axis (GNA), in the **direction of rotation for a generator** (against, for a motor).
- **Demagnetising** component — arises once brushes are shifted; reduces the main flux.
Remedies: **compensating windings** (in pole faces, cancel cross-flux under the pole) and **interpoles/commutating poles** (in the neutral zone, aid commutation).

**Commutation.** As the armature rotates, the commutator reverses the current in each coil as it passes the brush. **Ideal (linear) commutation** reverses the current smoothly during the short commutation period. Poor commutation causes **sparking** at the brushes due to the **reactance voltage** (`L·di/dt`) of the coil being commutated. Remedies:
- **Interpoles (commutating poles)** — provide a voltage that neutralises the reactance voltage, giving **spark-free (resistance/accelerated) commutation**.
- **Brush shift** and **high-resistance (carbon) brushes** also help.

> 💎 **KEY RESULT** — `E = PφZN/(60A)`; **lap A = P**, **wave A = 2**. Armature reaction = **cross-magnetising (shifts MNA) + demagnetising**; fix with **compensating windings** (cross) and **interpoles** (commutation). Sparking ← reactance voltage `L·di/dt`.

> ⚠️ **TRAP ALERT** — **Lap: A = P** (more parallel paths, high-current low-voltage); **Wave: A = 2** (high-voltage low-current). Interpoles aid **commutation**; compensating windings counter **armature reaction under the poles** — don't swap their roles.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Generated EMF | `E = PφZN/(60A)` |
| Torque | `T = PφZ·Ia/(2πA)` |
| Lap / wave paths | `A = P` (lap), `A = 2` (wave) |
| Back-EMF (motor) | `Eb = V − Ia·Ra` |
| Speed | `N ∝ Eb/φ` |
| Reactance voltage | `Er = L·(2Ic/Tc)` (di/dt during commutation) |

### 🧮 Solved Examples

**Example 1 — generated EMF.**
A 4-pole, lap-wound DC generator has `Z = 400` conductors, `φ = 25 mWb`, running at `N = 1500 rpm`. Find the EMF.

- Lap → `A = P = 4`.
- `E = PφZN/(60A) = (4 × 0.025 × 400 × 1500)/(60 × 4)`.
- Numerator `= 4 × 0.025 × 400 × 1500 = 60,000`; denominator `= 240`.
- `E = 60000/240 = 250 V`.

**Example 2 — wave winding EMF.**
Same machine but **wave-wound** (`A = 2`). New EMF?

- `E = PφZN/(60A) = 60,000/(60×2) = 60000/120 = 500 V`.
- Wave winding **doubles** the voltage (half the parallel paths) versus lap here.

> 🧠 **MEMORY HOOK** — "**Lap for large current (A = P), Wave for high voltage (A = 2).**" EMF scales with `1/A`.

### ⚠️ Common Traps

1. Using `A = 2` for lap or `A = P` for wave (reversed).
2. Forgetting the **60** (N is in rpm) in the EMF equation.
3. Confusing MNA shift direction (generator: with rotation; motor: against).
4. Thinking interpoles fix armature reaction under the poles (that's **compensating windings**).
5. Ignoring **reactance voltage** as the cause of sparking.
6. Mixing generator (`E = V + IaRa`) and motor (`Eb = V − IaRa`) relations.

### 📝 Test — DC Machines I (8 Q)

1. In a lap winding, parallel paths A equal: (a) 2 (b) P (c) P/2 (d) Z.
2. In a wave winding, A equals: (a) P (b) 2 (c) Z (d) 4.
3. The EMF equation is: (a) PφZN/60A (b) 4.44fNφ (c) NBAI (d) V−IaRa.
4. Armature reaction mainly causes: (a) higher flux (b) flux distortion & weakening (c) no effect (d) frequency shift.
5. Sparking at brushes is due to: (a) friction only (b) reactance voltage L·di/dt (c) low speed (d) high flux.
6. **(NAT)** 6-pole, wave-wound, Z = 300, φ = 20 mWb, N = 1000 rpm. EMF (V)?
7. **(NAT)** Same machine, lap-wound (A = P). EMF (V)?
8. **(NAT)** A DC motor: V = 220 V, Ia = 20 A, Ra = 0.5 Ω. Back-EMF Eb (V)?

<details><summary>🔑 Solutions</summary>

**Q1 — (b) P.**

**Q2 — (b) 2.**

**Q3 — (a).** `PφZN/60A`.

**Q4 — (b).** Distortion + weakening.

**Q5 — (b).** Reactance voltage.

**Q6.** Wave `A = 2`: `E = (6 × 0.02 × 300 × 1000)/(60×2) = 36000/120 = 300 V`.

**Q7.** Lap `A = 6`: `E = 36000/(60×6) = 36000/360 = 100 V`.

**Q8.** `Eb = V − IaRa = 220 − 20×0.5 = 220 − 10 = 210 V`.

</details>

---

## 🔧 Power Electronics: Other Devices & Gate Drives (TRIAC, DIAC, GTO)

### 📖 Concept Deep Dive

Beyond the SCR, several devices extend control to AC and to gate-turn-off.

**TRIAC (Triode for AC).** A **bidirectional** device — effectively two SCRs in **antiparallel** integrated into one, with a single gate. It conducts in **both directions** (Quadrants I and III of its V-I characteristic) and can be triggered by **either polarity** of gate current (four trigger modes: I+, I−, III+, III−; the **I+ and III−** modes are most sensitive). Used for **AC power control** — light dimmers, fan regulators, AC voltage controllers. Being bidirectional, it has **no reverse-blocking** dedicated state (it conducts both ways when triggered).

**DIAC (Diode for AC).** A **bidirectional two-terminal** trigger device (no gate). It stays off until the applied voltage reaches its **breakover voltage `VBO`** (typically ~30 V), then exhibits **negative resistance** and conducts, dumping a pulse. Commonly used to **trigger a TRIAC** (DIAC + RC phase-shift network sets the firing angle in a dimmer).

**GTO (Gate Turn-Off thyristor).** A thyristor that can be **turned OFF by a negative gate pulse** (unlike the SCR). Turn-off needs a **large negative gate current** (low turn-off gain, ~3-5), but it eliminates forced-commutation circuitry in DC choppers/inverters. It has higher on-state drop than an SCR and needs careful gate drive.

**Gate/base drive & isolation.** Power switches need **isolated** gate drive between the low-power control and the high-power circuit:
- **Pulse transformer** — provides isolation and a gate pulse; simple, but limited pulse width (core saturation).
- **Optocoupler / opto-isolator** — light-based isolation, flexible, common in modern drives.
MOSFET/IGBT gates are **voltage-driven** (charge the gate capacitance `Qg`); the driver must source/sink peak current `Ipk ≈ Qg/t(rise)` and handle **Miller** effects; a gate resistor sets switching speed vs EMI.

> 💎 **KEY RESULT** — **TRIAC** = bidirectional (two antiparallel SCRs, one gate), AC control, 4 trigger modes. **DIAC** = 2-terminal bidirectional breakover trigger (fires TRIAC). **GTO** = gate **turn-off** thyristor (needs large −ve gate pulse). Isolation via **pulse transformer / optocoupler**.

> ⚠️ **TRAP ALERT** — A **DIAC has no gate** (2-terminal); a **TRIAC is bidirectional** (conducts both ways). A **GTO turns off from the gate** (SCR cannot). Don't attribute gate-turn-off to a plain SCR.

### 📐 Formula Sheet

| Quantity | Relation |
|---|---|
| TRIAC conduction | both directions (Q-I & Q-III), single gate |
| DIAC | fires at `|V| ≥ VBO` (~30 V), then negative resistance |
| GTO turn-off gain | `β_off = IA/IG(off) ≈ 3–5` (low) |
| MOSFET/IGBT gate drive peak current | `Ipk ≈ Qg / t(rise)` |
| Gate drive loss | `Pg = Qg·Vgs·fsw` |
| Isolation | pulse transformer / optocoupler |

### 🧮 Solved Examples

**Example 1 — GTO turn-off current.**
A GTO conducts `IA = 100 A` and has a turn-off gain `β_off = 4`. Negative gate current required to turn it off?

- `IG(off) = IA/β_off = 100/4 = 25 A` (a large negative pulse — the GTO's main drawback).

**Example 2 — gate drive peak current (MOSFET).**
A MOSFET has total gate charge `Qg = 40 nC` and must switch in `t(rise) = 50 ns`. Peak gate-drive current?

- `Ipk ≈ Qg/t = 40×10⁻⁹ / 50×10⁻⁹ = 0.8 A`.
- The driver must source ~`0.8 A` peaks to switch this fast.

> 🧠 **MEMORY HOOK** — "**DIAC has no gate; TRIAC goes both ways; GTO turns off by the gate.**" Fast MOSFET switching needs a driver that can dump `Qg` quickly.

### ⚠️ Common Traps

1. Giving the DIAC a gate terminal (it has **only two**).
2. Treating the TRIAC as unidirectional (it conducts **both** directions).
3. Believing an ordinary SCR can be gate-turned-off (only the **GTO** can).
4. Ignoring the **large negative gate current** a GTO needs (low turn-off gain).
5. Forgetting **isolation** (pulse transformer/optocoupler) between control & power.
6. Undersizing the MOSFET gate driver's **peak current** (`Qg/t`).

### 📝 Test — Devices & Gate Drives (8 Q)

1. A TRIAC is essentially: (a) two SCRs in series (b) two SCRs in antiparallel (c) one diode (d) a GTO.
2. The DIAC has how many terminals? (a) 2 (b) 3 (c) 4 (d) 1.
3. A device that can be turned OFF by its gate is the: (a) SCR (b) GTO (c) power diode (d) DIAC.
4. The DIAC is typically used to: (a) rectify (b) trigger a TRIAC (c) store charge (d) amplify.
5. Isolation in gate drives is provided by: (a) resistor (b) pulse transformer/optocoupler (c) capacitor (d) diode.
6. **(NAT)** A GTO conducts 120 A, turn-off gain 4. Negative gate current needed (A)?
7. **(NAT)** MOSFET gate charge 60 nC, switch time 40 ns. Peak gate current (A)?
8. **(NAT)** Gate charge 50 nC, Vgs = 12 V, fsw = 100 kHz. Gate-drive power (mW)?

<details><summary>🔑 Solutions</summary>

**Q1 — (b).** Two antiparallel SCRs, one gate.

**Q2 — (a) 2 terminals.**

**Q3 — (b) GTO.**

**Q4 — (b).** Triggers a TRIAC (with RC network).

**Q5 — (b).** Pulse transformer / optocoupler.

**Q6.** `IG(off) = 120/4 = 30 A`.

**Q7.** `Ipk = 60×10⁻⁹/40×10⁻⁹ = 1.5 A`.

**Q8.** `Pg = Qg·Vgs·fsw = 50×10⁻⁹ × 12 × 100×10³ = 50×10⁻⁹ × 1.2×10⁶ = 0.06 W = 60 mW`.

</details>

---

> 🧠 **DAY-48 WRAP (Round-3 pass 6)** — **MI meter:** `Td = ½ I²(dL/dθ)`, square-law scale, RMS, AC+DC. **DC machine:** `E = PφZN/60A` (lap A=P, wave A=2), armature reaction (cross + demag) fixed by compensating windings & interpoles, sparking ← `L·di/dt`. **Devices:** TRIAC (bidirectional), DIAC (2-terminal trigger), GTO (gate turn-off, low gain); isolate via pulse transformer/opto. ⚡

**🔁 Round-3 progress:** Measurements ▓▓▓▓▓▓░░░░ · Machines ▓▓▓▓▓▓░░░░ · Power Electronics ▓▓▓▓▓▓░░░░ — round-3 rolling on. 🎓 Power Systems joins as a 4th subject once the reference PDFs arrive.
