# ⚡ GATE Technical Revision — Day 95 (2026-10-24)

*The induction energy meter and its calibration/creep adjustments, synchronous-machine fundamentals with salient-pole Xd/Xq reactances, and the three-phase inverter with 120°/180° conduction and PWM voltage control.*

📅 Tech Day 95 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics

---

## 🔧 Measuring Instruments: Measurement of Energy — Single-Phase Induction Energy Meter

### 📖 Concept Deep Dive

The **single-phase induction (watt-hour) energy meter** integrates power over time to measure **energy (kWh)**. It is an **induction-type** instrument: an aluminium disc rotates under the action of two AC fluxes, and the **number of revolutions** is proportional to energy consumed.

**Construction & operation.** Two electromagnets:
- **Shunt (pressure) magnet** — a coil of many turns across the supply, carrying current `∝ V`, producing flux `Φp` that **lags V by ~90°** (highly inductive, aided by a lag/shading coil).
- **Series (current) magnet** — a few turns carrying load current `I`, producing flux `Φs ∝ I` in phase with I.

These two fluxes, displaced in space and time, induce eddy currents in the aluminium disc → a **driving torque**:

```
Td ∝ Φp · Φs · sinβ   (β = phase angle between the two fluxes)
```

With proper design `β` is set so that `Td ∝ V·I·cosφ = P` (active power). A **permanent magnet (braking magnet)** provides a **braking torque ∝ speed N** (eddy-current damping). At steady state, driving = braking torque, so:

```
N ∝ P   ⇒  revolutions ∝ ∫P dt = Energy
```

The **meter constant** `K` is given in **revolutions per kWh**:

```
Energy (kWh) = (number of revolutions) / K
```

**Adjustments.**
- **Lag (power-factor) adjustment:** ensures `Φp` lags V by exactly 90° (shading band), so the meter reads correctly at all pf. Checked at **0.5 pf lagging**.
- **Light-load (friction) adjustment:** a small shading loop near the shunt magnet adds extra torque to overcome **friction** at low loads.
- **Creep adjustment:** "creeping" is slow disc rotation with **no load** (only pressure coil energised), caused by over-compensation. Prevented by **two diametrically opposite holes** in the disc, which lock it when the holes are under the pole.
- **Full-load/braking adjustment:** moving the braking magnet changes speed → calibrates full-load accuracy.

**Errors.** Phase-angle error, friction error (low load), temperature error, and **braking-magnet weakening** (reads fast if magnet weakens). Energy meters are tested by **phantom loading** (separate low-voltage current circuit and voltage circuit to avoid high power during testing).

> 💎 **KEY RESULT** — Energy meter: `Td ∝ Φp Φs sinβ ∝ P`; braking torque `∝ N` → `N ∝ P` → revolutions ∝ energy. `Energy (kWh) = revolutions / K` (K = meter constant, rev/kWh). **Creep** = no-load rotation, stopped by **two holes** in the disc.

> 🧠 **MEMORY HOOK** — "**Shunt flux (lags V 90°) × series flux (I) → disc spins ∝ P; brake magnet ∝ N; revs ÷ K = kWh. Creep → two holes.**"

### 📐 Formula Sheet

| Quantity | Expression |
|---|---|
| Driving torque | `Td ∝ Φp Φs sinβ ∝ VI cosφ = P` |
| Braking torque | `Tb ∝ N` |
| Steady speed | `N ∝ P` |
| Energy | `kWh = (revolutions)/K` |
| Meter constant | `K = rev/kWh` |
| % error | `(recorded − true)/true × 100` |

### 🧮 Solved Examples

**Example 1 — Energy from revolutions.**
An energy meter has a constant of **1200 rev/kWh**. The disc makes **3600 revolutions** over a period. Find the energy consumed.

```
Energy = revolutions / K = 3600 / 1200 = 3 kWh
```

Energy consumed **= 3 kWh**.

**Example 2 — Meter accuracy test.**
A 1200 rev/kWh meter is tested on a **1 kW** load for **1 hour**; the disc makes **1180 revolutions**. Find the percentage error.

```
True energy = 1 kW × 1 h = 1 kWh ⇒ expected revs = K × kWh = 1200 × 1 = 1200
Recorded energy = 1180/1200 = 0.9833 kWh
% error = (0.9833 − 1)/1 × 100 = −1.67%
```

Meter reads **1.67% slow** (−1.67% error) — it under-registers.

### ⚠️ Common Traps

1. **Energy meter measures power** — it measures **energy** (kWh), integrating power over time.
2. **Braking torque ∝ P** — braking torque is **∝ speed N** (permanent magnet eddy damping), not power.
3. **Creep stopped by lag coil** — creep is stopped by the **two holes** in the disc, not the lag adjustment.
4. **Weak braking magnet reads slow** — a **weakened** braking magnet → **less braking → faster disc → reads high** (over-registers).
5. **Testing at full real power** — testing uses **phantom loading** (low power).
6. **Energy = rev × K** — it is `rev / K` (K in rev per kWh).

### 📝 Test — Measuring Instruments (8 Q)

1. A single-phase energy meter is a(n):
   (a) PMMC instrument (b) induction-type instrument (c) electrostatic (d) thermal
2. The braking torque in an energy meter is provided by:
   (a) a spring (b) a permanent magnet (c) the shunt coil (d) gravity
3. The driving torque of an energy meter is proportional to:
   (a) V only (b) I only (c) VI cosφ = P (d) V²
4. "Creeping" in an energy meter means:
   (a) slow rotation at no load (b) fast rotation (c) reverse rotation (d) stopping
5. Creeping is prevented by:
   (a) lag coil (b) two holes in the disc (c) braking magnet (d) friction
6. **(NAT)** An energy meter (1500 rev/kWh) records 4500 revolutions. Find the energy (kWh).
7. **(NAT)** A 1000 rev/kWh meter on a 2 kW load for 30 minutes makes 980 revolutions. Find the % error.
8. **(NAT)** A meter's disc makes 600 revolutions for 0.5 kWh. Find the meter constant (rev/kWh).

<details><summary>🔑 Solutions</summary>

**1 → (b).** Induction-type.

**2 → (b).** Permanent (braking) magnet.

**3 → (c).** `∝ VI cosφ = P`.

**4 → (a).** Slow no-load rotation.

**5 → (b).** Two holes in the disc.

**6 (NAT).** `Energy = 4500/1500 = 3 kWh`.

**7 (NAT).** True energy = `2 kW × 0.5 h = 1 kWh` ⇒ expected revs = 1000. Recorded = `980/1000 = 0.98 kWh`. `% error = (0.98−1)/1×100 = −2%`.

**8 (NAT).** `K = revolutions/kWh = 600/0.5 = 1200 rev/kWh`.

</details>

---

## 🔧 Electrical Machines: Synchronous Machines I — Construction, EMF, Armature Reaction & Xd, Xq

### 📖 Concept Deep Dive

A **synchronous machine** runs at exactly **synchronous speed** `Ns = 120f/P`; as a generator (alternator) it is the backbone of power generation.

**Construction.** A stationary **armature (stator)** carries the 3-φ output winding; a rotating **field (rotor)** carries DC excitation. Two rotor types:
- **Cylindrical (non-salient) rotor:** smooth, small-diameter, long — for **high-speed** turbo-alternators (2/4 pole, thermal/gas). Uniform air gap → single synchronous reactance `Xs`.
- **Salient-pole rotor:** projecting poles, large-diameter, short — for **low-speed** hydro-alternators (many poles). Non-uniform air gap → **two-reaction theory** with `Xd` (direct axis) and `Xq` (quadrature axis), `Xd > Xq`.

**EMF equation.** The generated (open-circuit) EMF per phase:

```
E = 4.44 · f · N · Φ · Kw
```

where `f` = frequency, `N` = turns/phase, `Φ` = flux/pole, `Kw` = winding factor = `Kp·Kd` (pitch × distribution factor). `Kw < 1` accounts for short-pitch and distributed windings.

**Armature reaction.** The effect of the stator (armature) MMF on the main field flux, depending on load power factor:
- **Unity pf:** armature MMF is **cross-magnetising** (90° to field) → distorts.
- **Zero pf lagging (inductive):** armature MMF is **demagnetising** (directly opposes field) → EMF drops most.
- **Zero pf leading (capacitive):** armature MMF is **magnetising** (aids field) → EMF rises.

This armature-reaction effect is modelled as a reactance `Xa`; combined with leakage reactance `Xl`, gives the **synchronous reactance**:

```
Xs = Xa + Xl   (per phase)
Zs = Ra + jXs  (synchronous impedance)
```

**Voltage equation (cylindrical rotor):**

```
E = V + I(Ra + jXs)   (phasor; generator)
```

**Salient-pole (two-reaction).** Armature current is resolved into `Id` (direct axis) and `Iq` (quadrature axis); EMF uses `Xd` and `Xq`:

```
E = V·cosδ + Id·Xd   (approx, with Ra ≈ 0; δ = load angle)
Power (salient) = (E·V/Xd)·sinδ + (V²/2)·(1/Xq − 1/Xd)·sin2δ
```

The second term is the **reluctance power** (exists even without excitation), due to `Xd ≠ Xq`.

| Rotor | Air gap | Reactances | Use |
|---|---|---|---|
| Cylindrical | uniform | single `Xs` | high-speed turbo |
| Salient-pole | non-uniform | `Xd > Xq` | low-speed hydro |

> 💎 **KEY RESULT** — `E = 4.44 f N Φ Kw`; `Xs = Xa + Xl`. Armature reaction: **demagnetising** at lagging pf, **magnetising** at leading pf, **cross** at unity. Salient-pole: `Xd > Xq`, power = `(EV/Xd)sinδ + (V²/2)(1/Xq − 1/Xd)sin2δ`.

> 🧠 **MEMORY HOOK** — "**E = 4.44 fNΦKw; lagging = demagnetise, leading = magnetise; salient Xd>Xq adds reluctance power (sin2δ).**"

### 📐 Formula Sheet

| Quantity | Expression |
|---|---|
| Synchronous speed | `Ns = 120f/P` |
| EMF per phase | `E = 4.44 f N Φ Kw` |
| Winding factor | `Kw = Kp · Kd` |
| Synchronous reactance | `Xs = Xa + Xl` |
| Voltage eqn (cyl.) | `E = V + I(Ra + jXs)` |
| Salient power | `P = (EV/Xd)sinδ + (V²/2)(1/Xq − 1/Xd)sin2δ` |
| Cylindrical power | `P = (EV/Xs)sinδ` |

### 🧮 Solved Examples

**Example 1 — EMF equation.**
A 3-φ, 50 Hz, 4-pole alternator has 120 turns/phase, flux/pole 0.05 Wb, winding factor 0.96. Find the per-phase EMF.

```
E = 4.44 · f · N · Φ · Kw = 4.44 · 50 · 120 · 0.05 · 0.96
  = 4.44 · 50 · 120 · 0.048 = 4.44 · 288 = 1278.7 V
```

Per-phase EMF **≈ 1279 V**.

**Example 2 — Power angle (cylindrical).**
A cylindrical-rotor alternator: `E = 1.2 pu`, `V = 1.0 pu`, `Xs = 1.0 pu`, load angle δ = 30°. Find the power delivered (pu).

```
P = (E·V/Xs)·sinδ = (1.2·1.0/1.0)·sin30° = 1.2·0.5 = 0.6 pu
```

Power delivered **= 0.6 pu**.

### ⚠️ Common Traps

1. **Xd < Xq** — for salient poles, **Xd > Xq** (direct-axis air gap is smaller → higher reactance).
2. **Armature reaction magnetising at lagging pf** — it is **demagnetising** at lagging pf; magnetising at leading.
3. **EMF uses Kw = 1** — include **winding factor** `Kw = Kp·Kd < 1`.
4. **Reluctance power needs excitation** — the `sin2δ` reluctance term exists **even with E = 0** (salient rotor).
5. **Cylindrical rotor for hydro** — cylindrical = **high-speed turbo**; salient = **low-speed hydro**.
6. **Xs = Xa − Xl** — synchronous reactance is `Xa + Xl` (sum).

### 📝 Test — Electrical Machines (8 Q)

1. The EMF per phase of an alternator is:
   (a) 4.44 fNΦ (b) 4.44 fNΦKw (c) 1.11 fNΦ (d) fNΦ
2. A salient-pole machine has:
   (a) Xd = Xq (b) Xd > Xq (c) Xd < Xq (d) no reactance
3. Armature reaction at zero-pf lagging load is:
   (a) magnetising (b) demagnetising (c) cross-magnetising (d) zero
4. The cylindrical rotor is used in:
   (a) low-speed hydro (b) high-speed turbo-alternators (c) stepper (d) DC machines
5. Synchronous reactance equals:
   (a) Xa − Xl (b) Xa + Xl (c) Xl − Xa (d) Xa·Xl
6. **(NAT)** A 50 Hz, 6-pole alternator, 100 turns/phase, flux/pole 0.04 Wb, Kw = 0.95. Find the per-phase EMF (V).
7. **(NAT)** A cylindrical alternator: E = 1.5 pu, V = 1.0 pu, Xs = 1.25 pu, δ = 20°. Find P (pu). [sin20° = 0.342]
8. **(NAT)** A 4-pole machine on a 60 Hz supply. Find its synchronous speed (rpm).

<details><summary>🔑 Solutions</summary>

**1 → (b).** `E = 4.44 fNΦKw`.

**2 → (b).** `Xd > Xq`.

**3 → (b).** Demagnetising.

**4 → (b).** High-speed turbo.

**5 → (b).** `Xs = Xa + Xl`.

**6 (NAT).** `E = 4.44·50·100·0.04·0.95 = 4.44·50·100·0.038 = 4.44·190 = 843.6 V`.

**7 (NAT).** `P = (1.5·1.0/1.25)·sin20° = 1.2·0.342 = 0.410 pu`.

**8 (NAT).** `Ns = 120·60/4 = 1800 rpm`.

</details>

---

## 🔧 Power Electronics: Inverters II — Three-Phase VSI (120°/180° Conduction) & PWM

### 📖 Concept Deep Dive

A **three-phase VSI** uses **six switches** (three legs, each a half-bridge) to synthesise a 3-φ AC output from a DC link. Two conduction schemes exist: **180°** and **120°**.

**180° conduction mode.** Each switch conducts for **180°** of a cycle; at any instant **three switches** conduct (one from each leg or a mix). The line-to-line and phase voltages are quasi-square. For a star-connected balanced load, the **RMS line voltage** and its **fundamental**:

```
VL,rms = √(2/3)·Vdc = 0.816 Vdc
VL1,rms (fundamental) = (√6/π)·Vdc = 0.78 Vdc
Vph,rms = (√2/3)·Vdc = 0.471 Vdc
Vph1,rms = (√2/π)·Vdc = 0.45 Vdc
```

The output contains **odd harmonics except triplens** (3rd, 9th, … are absent in line voltages of a balanced 3-φ system). Each leg's two switches are **complementary** (never both on — shoot-through forbidden).

**120° conduction mode.** Each switch conducts for **120°**; at any instant **only two switches** conduct. There is a 60° gap per switch. This avoids line-to-line conduction overlap, but gives **lower output** and is less used. The phase voltage is a quasi-square wave of 120° conduction.

**Why 180° is preferred:** higher fundamental output and better DC utilisation; 120° gives cleaner commutation but less voltage.

**PWM (Pulse-Width Modulation).** Rather than a single pulse per half-cycle (square wave, fixed amplitude), PWM **chops the output into many pulses** whose widths vary → controls **output voltage and reduces harmonics**:
- **Single-PWM, multiple-PWM:** several pulses per half-cycle.
- **Sinusoidal PWM (SPWM):** compare a **sine reference (modulating)** wave with a **triangular carrier**; switch where they cross. The fundamental output `∝ modulation index m` (for `m ≤ 1`, linear region):

```
Modulation index: m = V_control / V_carrier  (0 ≤ m ≤ 1 linear)
Fundamental (phase peak) = m · (Vdc/2)   (linear SPWM, line-to-neutral)
```

SPWM pushes harmonics to **high frequencies** (around the carrier frequency `fc` and its multiples), which are easy to filter. **Overmodulation (m > 1)** increases fundamental up to the square-wave limit but reintroduces low-order harmonics. **Space Vector PWM (SVPWM)** gives ~15% higher DC-bus utilisation than sine PWM.

| Mode | Switches on at a time | Output |
|---|---|---|
| 180° conduction | 3 | higher (VL1 = 0.78 Vdc) |
| 120° conduction | 2 | lower |
| SPWM | PWM | variable, low LF harmonics |

> 💎 **KEY RESULT** — 3-φ VSI (180°): `VL,rms = 0.816 Vdc`, fundamental `VL1 = (√6/π)Vdc = 0.78 Vdc`; triplen harmonics absent in line voltage. SPWM: fundamental `∝ m` (linear up to m=1); harmonics near carrier frequency.

> 🧠 **MEMORY HOOK** — "**180° = 3 switches, VL1 = 0.78 Vdc; 120° = 2 switches, less. SPWM: sine vs triangle, output ∝ m.**"

### 📐 Formula Sheet

| Quantity | Expression |
|---|---|
| 180° line RMS | `VL,rms = √(2/3)·Vdc = 0.816 Vdc` |
| 180° line fundamental | `VL1 = (√6/π)Vdc ≈ 0.78 Vdc` |
| 180° phase RMS | `Vph,rms = (√2/3)Vdc ≈ 0.471 Vdc` |
| 180° phase fundamental | `Vph1 = (√2/π)Vdc ≈ 0.45 Vdc` |
| SPWM modulation index | `m = Vcontrol/Vcarrier` |
| SPWM phase peak (linear) | `= m·(Vdc/2)` |
| Absent harmonics (line) | triplens (3,9,…) |

### 🧮 Solved Examples

**Example 1 — 180° line voltage.**
A 3-φ VSI (180° conduction) has a DC link `Vdc = 600 V`. Find the RMS line voltage and its fundamental RMS.

```
VL,rms = 0.816·Vdc = 0.816·600 = 489.9 V
VL1,rms = (√6/π)·Vdc = 0.7797·600 = 467.8 V
```

RMS line voltage **≈ 490 V**, fundamental **≈ 468 V**.

**Example 2 — SPWM fundamental.**
A 3-φ SPWM inverter has `Vdc = 600 V`, modulation index `m = 0.8` (linear region). Find the peak phase (line-to-neutral) fundamental voltage.

```
Vph1,peak = m·(Vdc/2) = 0.8·(600/2) = 0.8·300 = 240 V
```

Peak phase fundamental **= 240 V** (RMS = 240/√2 ≈ 169.7 V).

### ⚠️ Common Traps

1. **Both switches in a leg can conduct** — never; a leg's switches are **complementary** (shoot-through destroys the leg).
2. **Triplen harmonics in line voltage** — **absent** in balanced 3-φ line voltages (3rd, 9th, …).
3. **120° gives more output than 180°** — **180°** gives higher fundamental.
4. **SPWM fundamental independent of m** — it is **∝ m** (linear region).
5. **VL,rms = Vdc** — for 180°, `VL,rms = 0.816 Vdc`, not Vdc.
6. **Overmodulation harmonics-free** — overmodulation (m>1) reintroduces **low-order harmonics**.

### 📝 Test — Power Electronics (8 Q)

1. In 180° conduction mode, how many switches conduct at a time?
   (a) 1 (b) 2 (c) 3 (d) 6
2. The RMS line voltage of a 180° 3-φ VSI is:
   (a) Vdc (b) 0.816 Vdc (c) 0.45 Vdc (d) 0.5 Vdc
3. Which harmonics are absent in the line voltage of a balanced 3-φ VSI?
   (a) all even (b) triplens (3,9,…) (c) fundamental (d) 5th & 7th
4. In SPWM, the output fundamental is controlled by:
   (a) DC link only (b) modulation index m (c) load (d) frequency only
5. Two switches of the same leg must be:
   (a) both on (b) complementary (never both on) (c) both off (d) in series
6. **(NAT)** A 180° 3-φ VSI has Vdc = 400 V. Find the RMS line voltage (V).
7. **(NAT)** For Q6, find the fundamental RMS line voltage (V). [use 0.78]
8. **(NAT)** A 3-φ SPWM inverter: Vdc = 500 V, m = 0.9. Find the peak line-to-neutral fundamental voltage (V).

<details><summary>🔑 Solutions</summary>

**1 → (c).** Three switches conduct.

**2 → (b).** `0.816 Vdc`.

**3 → (b).** Triplen harmonics absent.

**4 → (b).** Modulation index m.

**5 → (b).** Complementary.

**6 (NAT).** `VL,rms = 0.816·400 = 326.6 V`.

**7 (NAT).** `VL1 = 0.78·400 = 312 V` (precisely (√6/π)·400 = 311.9 V).

**8 (NAT).** `Vph1,peak = m·Vdc/2 = 0.9·250 = 225 V`.

</details>

---

## 📊 Tech Progress

```
Measurements      [███████████░░░░░░░]  Round 5 · topic 11/20 (Energy meter)
Electrical Mach.  [███████████████░░░]  Round 5 · topic 15/19 (Synchronous machines I)
Power Electronics [███████████████░░░]  Round 5 · topic 15/19 (Inverters II: 3-φ VSI, PWM)
```

> 🎯 **Day 95 one-liners:** (1) **Energy meter: Td ∝ P, brake ∝ N, kWh = rev/K; creep → two holes.** (2) **Alternator: E = 4.44 fNΦKw; Xs = Xa+Xl; lagging demagnetises; salient Xd>Xq (reluctance power).** (3) **3-φ VSI 180°: VL,rms = 0.816Vdc, VL1 = 0.78Vdc, no triplens; SPWM output ∝ m.**

*Correctness over length — derive, don't memorise blindly; verify any "verify" figure. Onward. ⚡*
