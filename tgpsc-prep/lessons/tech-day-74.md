# ⚡ GATE Technical Revision — Day 74 (2026-10-03)

*Measurements covers the induction energy meter (torques, creeping, phantom loading), Machines does induction-motor speed control & special rotors, and Power Electronics continues choppers (buck-boost, Cuk, four-quadrant, SMPS).*

📅 Tech Day 74 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics · 🔁 Round 4 (all three sections)

> 🧠 **MEMORY HOOK** — Today: the **energy meter** (`Td ∝ VI cosφ`, `Tb ∝ N` ⇒ revolutions ∝ energy), **induction-motor speed control** (`N = (1−s)·120f/P`, V/f, double-cage, induction generator at negative slip), and **buck-boost/Cuk** choppers (`Vo = Vs·D/(1−D)`, inverting).

---

## 🔧 Measuring Instruments: Measurement of Energy — Single-Phase Induction Energy Meter

### 📖 Concept Deep Dive

The **induction energy meter** is an **integrating** instrument: it counts **energy (kWh)**, not instantaneous power. Parts: a **current coil (series)**, a **pressure/voltage coil (shunt)**, an **aluminium disc**, a **permanent (braking) magnet**, and a **register**.

**Torques.**
- **Driving torque** — the current-coil and (lagged) pressure-coil fluxes interact with the disc's eddy currents to give a torque **proportional to power**:
```
Td ∝ V·I·cosφ = P     (needs PC flux to lag V by exactly 90°)
```
- **Braking torque** — the permanent magnet induces eddy currents in the moving disc, giving a torque **proportional to speed**:
```
Tb ∝ N
```
At steady speed `Td = Tb`, so **`N ∝ P`**, and the **number of revolutions ∝ energy** (∫P dt). The **meter constant** `K` is in **revolutions/kWh**.

**Adjustments & errors:**
- **Lag (phase) adjustment** — shading bands on the PC ensure its flux lags voltage by **90°** (so `Td ∝ cosφ`).
- **Creeping** — the disc rotates slowly even at **no load** (over-voltage/over-friction compensation); cured by **two diametrically-opposite holes** in the disc that lock it.
- **Friction (light-load) compensation** — a small shading loop near the PC adds extra torque at low loads.
- **Overload/temperature** adjustments.

**Testing — phantom (fictitious) loading.** To test a **high-current** meter without a huge real load, the **current circuit** is fed from a **low-voltage high-current** source and the **pressure circuit** from the **rated voltage** source **separately**. The **power drawn for testing is small** (only the meter's own losses), yet the meter sees rated current × rated voltage.

> 💎 **KEY RESULT** — Energy meter: `Td ∝ VI cosφ`, `Tb ∝ N` ⇒ **revolutions ∝ energy**; meter constant `K` (rev/kWh). **Creeping** fixed by two disc holes; **phantom loading** tests high-current meters at low power.

> ⚠️ **TRAP ALERT** — It measures **energy (kWh)**, not power. **Creeping** (no-load rotation) is stopped by **holes in the disc**. The PC flux must lag V by **90°** for correct `cosφ` response (lag adjustment).

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Driving torque | `Td ∝ V·I·cosφ` |
| Braking torque | `Tb ∝ N` |
| Steady state | `N ∝ P` ⇒ revolutions ∝ energy |
| Meter constant | `K` rev/kWh |
| Energy | `= (revolutions)/K` |
| % error | `(measured − true)/true × 100` |

### 🧮 Solved Examples

**Example 1 — Energy from revolutions.**
A meter with constant `K = 1500 rev/kWh` makes **750 revolutions**. Find the energy recorded.

```
Energy = revolutions/K = 750/1500 = 0.5 kWh
```

**Example 2 — Meter error.**
A meter (`K = 600 rev/kWh`) makes **30 revolutions** while a standard shows the true energy as **0.048 kWh**. Find the % error.

```
Measured energy = 30/600 = 0.05 kWh
% error = (0.05 − 0.048)/0.048 × 100 = 0.002/0.048 ×100 = +4.17 %
(meter runs fast by ~4.2 %)
```

### ⚠️ Common Traps

1. **Measures energy, not power** — integrating meter.
2. **Creeping** — no-load rotation; cured by **disc holes**.
3. **Lag adjustment** — PC flux must lag V by 90° for `cosφ`.
4. **Phantom loading** — tests at **low power**, full apparent load (separate V & I circuits).
5. **Braking torque ∝ speed** — from the permanent magnet.
6. **Meter constant units** — rev/kWh; energy = rev/K.

### 📝 Test (5 MCQ + 3 NAT)

**Q1 (MCQ).** An induction energy meter measures:
(a) power (b) energy (kWh) (c) current (d) voltage

**Q2 (MCQ).** The braking torque in an energy meter is proportional to:
(a) power (b) speed (c) voltage (d) current²

**Q3 (MCQ).** Slow rotation of the disc at no load is called:
(a) creeping (b) lag (c) overload (d) damping

**Q4 (MCQ).** Creeping is prevented by:
(a) a brake magnet (b) two holes in the disc (c) more turns (d) a capacitor

**Q5 (MCQ).** Phantom loading is used to:
(a) increase accuracy (b) test high-current meters at low power (c) stop creeping (d) measure power factor

**Q6 (NAT).** A meter (K = 1200 rev/kWh) makes 600 revolutions. Find the energy (kWh).

**Q7 (NAT).** A meter (K = 500 rev/kWh) records 0.1 kWh. Find the number of revolutions.

**Q8 (NAT).** Measured 0.052 kWh, true 0.050 kWh. Find the % error.

<details><summary>🔑 Solutions</summary>

**Q1 — (b) energy (kWh).**

**Q2 — (b) speed.**

**Q3 — (a) creeping.**

**Q4 — (b) two holes in the disc.**

**Q5 — (b) test high-current meters at low power.**

**Q6 — 0.5 kWh.** `600/1200 = 0.5`.

**Q7 — 50 rev.** `0.1 × 500 = 50`.

**Q8 — +4%.** `(0.052−0.050)/0.050×100 = 0.002/0.05×100 = 4%`.
</details>

---

## 🔧 Electrical Machines: Induction Motor IV — Speed Control, Double-Cage Rotor & Induction Generator

### 📖 Concept Deep Dive

Rotor speed: `N = (1 − s)·Ns = (1 − s)·120f/P`. Speed is controlled by changing **f, P, s or V**.

**Speed-control methods:**
- **Stator voltage control** — torque `∝ V²`, so reducing V lowers speed (limited range; for fans/pumps).
- **V/f (constant-flux) control** — vary **frequency** while keeping **`V/f` constant** to hold flux constant ⇒ smooth wide-range speed control (the basis of modern **VFDs**). Above base speed, V saturates ⇒ **field-weakening (constant-power)** region.
- **Pole changing** — switch stator winding connections to change `P` (discrete speeds; squirrel-cage).
- **Rotor-resistance control** — add external resistance (slip-ring motors): increases slip ⇒ lower speed (lossy).
- **Slip-power recovery** — **Kramer** / **Scherbius** schemes recover rotor-slip power instead of wasting it (efficient, for large drives).

**Double-cage rotor.** Two concentric rotor cages:
- **Outer cage:** **high resistance, low reactance** ⇒ good **starting torque**.
- **Inner cage:** **low resistance, high reactance** ⇒ good **running efficiency**.
So the motor gets **high starting torque** *and* **good running performance** without external resistance.

**Induction generator.** Drive the rotor **above synchronous speed** ⇒ **negative slip**; the machine **feeds real power** to the system. It still **absorbs reactive (magnetising) power** — from the grid, or from **capacitors** in a **Self-Excited Induction Generator (SEIG)**. Widely used in **wind turbines** for its ruggedness and simplicity.

> 💎 **KEY RESULT** — `N = (1−s)·120f/P`. **V/f control** holds flux constant for wide-range speed (VFD). **Double-cage**: outer = high-R (start), inner = low-R (run). **Induction generator**: `s < 0` (N > Ns), supplies real power, needs reactive power (grid/caps).

> 🧠 **MEMORY HOOK** — **"V/f keeps the flux, pole-changing jumps the speed, double-cage starts strong and runs smooth."** Generator mode = **overspeed (negative slip)**.

> ⚠️ **TRAP ALERT** — **V/f control** keeps `V/f` (hence flux) constant — raising f without raising V weakens flux and torque. **Rotor-resistance control works only on slip-ring** motors. An induction generator **cannot self-start as a source** without reactive support (grid or capacitors).

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Rotor speed | `N = (1−s)·120f/P` |
| V/f control | keep `V/f = constant` (flux const) |
| Torque vs voltage | `T ∝ V²` |
| Double-cage | outer high-R (start), inner low-R (run) |
| Induction generator | `s < 0` (N > Ns) |

### 🧮 Solved Examples

**Example 1 — V/f control.**
A 50 Hz, 4-pole motor runs at rated `415 V`. For operation at `25 Hz` with constant flux, find the applied voltage and new synchronous speed.

```
Constant V/f: V2 = V1·(f2/f1) = 415 × (25/50) = 207.5 V
Ns(new) = 120×25/4 = 750 rpm   (half the 1500 rpm at 50 Hz)
```

**Example 2 — Induction generator slip.**
A 4-pole, 50 Hz induction machine is driven at `1560 rpm`. Find the slip and state the mode.

```
Ns = 120×50/4 = 1500 rpm
s = (Ns − N)/Ns = (1500 − 1560)/1500 = −0.04 = −4%
Negative slip ⇒ GENERATOR mode (N > Ns).
```

### ⚠️ Common Traps

1. **V/f constant** keeps flux — not V alone, not f alone.
2. **Rotor-resistance control: slip-ring only.**
3. **Double-cage: outer = starting, inner = running** (resistances).
4. **Induction generator needs reactive power** (grid or capacitors/SEIG).
5. **Negative slip = generator** (N > Ns).
6. **Pole changing gives discrete speeds**, not continuous.

### 📝 Test (5 MCQ + 3 NAT)

**Q1 (MCQ).** V/f control keeps constant:
(a) voltage (b) frequency (c) flux (d) current

**Q2 (MCQ).** In a double-cage rotor, the outer cage has:
(a) low R, high X (b) high R, low X (c) high R, high X (d) low R, low X

**Q3 (MCQ).** An induction machine acts as a generator when:
(a) s = 0 (b) 0 < s < 1 (c) s < 0 (N > Ns) (d) s = 1

**Q4 (MCQ).** Rotor-resistance speed control is applicable to:
(a) squirrel-cage (b) slip-ring motors (c) all motors (d) synchronous

**Q5 (MCQ).** Slip-power recovery uses the:
(a) Kramer/Scherbius scheme (b) star-delta starter (c) V/f drive (d) pole changing

**Q6 (NAT).** A 6-pole, 50 Hz motor runs at 970 rpm. Find the slip (%).

**Q7 (NAT).** V/f control: rated 400 V, 50 Hz. Find the voltage (V) at 30 Hz for constant flux.

**Q8 (NAT).** A 4-pole, 50 Hz machine is driven at 1545 rpm. Find the slip.

<details><summary>🔑 Solutions</summary>

**Q1 — (c) flux.**

**Q2 — (b) high R, low X.**

**Q3 — (c) s < 0 (N > Ns).**

**Q4 — (b) slip-ring motors.**

**Q5 — (a) Kramer/Scherbius.**

**Q6 — 3%.** `Ns = 1000; s = (1000−970)/1000 = 0.03 = 3%`.

**Q7 — 240 V.** `V = 400×(30/50) = 240 V`.

**Q8 — −0.03.** `Ns = 1500; s = (1500−1545)/1500 = −45/1500 = −0.03` (generator).
</details>

---

## 🔧 Power Electronics: DC-DC Choppers II — Buck-Boost, Cuk, Four-Quadrant & SMPS

### 📖 Concept Deep Dive

**Buck-boost converter.** Can step **up or down**, with an **inverted (negative)** output:
```
Vo = −Vs·D/(1 − D)
|Vo| < Vs for D < 0.5 ;  |Vo| > Vs for D > 0.5
```
The inductor charges from the source (switch ON) and discharges into the load (switch OFF), reversing polarity.

**Cuk converter.** Also **steps up/down** with **inverted** output, but transfers energy via a **capacitor** (not just an inductor):
```
Vo = −Vs·D/(1 − D)   (same ratio as buck-boost)
```
Advantage: **continuous input and output current** (inductors on both sides) ⇒ **low ripple** on both ports.

**Chopper quadrants (motor drives):**
| Type | Quadrants | Operation |
|---|---|---|
| **A** | 1 | V+ , I+ (forward motoring) |
| **B** | 1 (regen) | forward braking |
| **C** | 2 | motoring + braking (one direction) |
| **D** | 2 | both V polarities, I one way |
| **E** | **4** | full four-quadrant (both V & I polarities) |

A **Type-E (four-quadrant)** chopper allows **forward/reverse motoring and braking** — used in reversible DC drives.

**SMPS (Switched-Mode Power Supplies).** High-frequency DC-DC converters (buck, boost, buck-boost, **flyback, forward, push-pull**) that regulate output with **high efficiency** and **small magnetics**. Isolated topologies (flyback/forward) use a **high-frequency transformer** for isolation and multiple outputs.

> 💎 **KEY RESULT** — **Buck-boost & Cuk**: `Vo = −Vs·D/(1−D)` (inverting, step up/down). **Cuk** gives continuous input & output current (low ripple). **Type-E chopper** = four-quadrant. **SMPS** = high-frequency regulators (flyback/forward isolated).

> 🧠 **MEMORY HOOK** — **"Buck-boost & Cuk: D/(1−D), output flips sign."** Cuk adds a transfer capacitor for smooth currents. Type **E** chopper = **4** quadrants.

> ⚠️ **TRAP ALERT** — Buck-boost/Cuk output is **inverted (negative)** and follows **D/(1−D)** (not `1/(1−D)` boost or `D` buck). **Four-quadrant** needs a **Type-E** chopper. SMPS isolation comes from the **HF transformer** (flyback/forward), not the switch.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Buck-boost output | `Vo = −Vs·D/(1−D)` |
| Cuk output | `Vo = −Vs·D/(1−D)` |
| Buck (ref) | `Vo = D·Vs` |
| Boost (ref) | `Vo = Vs/(1−D)` |
| Four-quadrant chopper | Type E |

### 🧮 Solved Examples

**Example 1 — Buck-boost output.**
A buck-boost converter: `Vs = 24 V`, `D = 0.6`. Find the output voltage.

```
Vo = −Vs·D/(1−D) = −24 × 0.6/(1 − 0.6) = −24 × 0.6/0.4
   = −24 × 1.5 = −36 V   (magnitude 36 V > 24 V, inverted)
```

**Example 2 — Duty for a target output.**
A Cuk converter must give `|Vo| = 15 V` from `Vs = 30 V`. Find the duty ratio.

```
|Vo|/Vs = D/(1−D) ⇒ 15/30 = 0.5 = D/(1−D)
0.5(1−D) = D ⇒ 0.5 − 0.5D = D ⇒ 0.5 = 1.5D ⇒ D = 0.333
```

### ⚠️ Common Traps

1. **Buck-boost/Cuk output is inverted** (negative polarity).
2. **Ratio D/(1−D)** — not `D` (buck) or `1/(1−D)` (boost).
3. **Cuk ⇒ continuous input & output current** (low ripple) — its key advantage.
4. **Four-quadrant = Type-E chopper.**
5. **SMPS isolation = HF transformer** (flyback/forward).
6. **D = 0.5 is the unity-gain point** for buck-boost/Cuk (|Vo| = Vs).

### 📝 Test (5 MCQ + 3 NAT)

**Q1 (MCQ).** A buck-boost converter output voltage is:
(a) D·Vs (b) Vs/(1−D) (c) −Vs·D/(1−D) (d) Vs·(1−D)

**Q2 (MCQ).** The Cuk converter transfers energy mainly via:
(a) an inductor only (b) a capacitor (c) a transformer (d) a resistor

**Q3 (MCQ).** A four-quadrant chopper is of type:
(a) A (b) C (c) D (d) E

**Q4 (MCQ).** Buck-boost output at D = 0.5 is:
(a) < Vs (b) = Vs (magnitude) (c) > Vs (d) zero

**Q5 (MCQ).** Isolation in an SMPS is provided by:
(a) the switch (b) a high-frequency transformer (c) a diode (d) a capacitor

**Q6 (NAT).** Buck-boost: Vs = 40 V, D = 0.25. Find |Vo| (V).

**Q7 (NAT).** Cuk: Vs = 50 V, D = 0.6. Find |Vo| (V).

**Q8 (NAT).** A buck-boost must give |Vo| = 60 V from Vs = 20 V. Find D.

<details><summary>🔑 Solutions</summary>

**Q1 — (c) −Vs·D/(1−D).**

**Q2 — (b) a capacitor.**

**Q3 — (d) E.**

**Q4 — (b) = Vs (magnitude).**

**Q5 — (b) a high-frequency transformer.**

**Q6 — 13.3 V.** `|Vo| = 40×0.25/0.75 = 40×0.333 = 13.33 V`.

**Q7 — 75 V.** `|Vo| = 50×0.6/0.4 = 50×1.5 = 75 V`.

**Q8 — 0.75.** `60/20 = 3 = D/(1−D) ⇒ 3−3D = D ⇒ 3 = 4D ⇒ D = 0.75`.
</details>

---

### 📊 GATE Tech Coverage Progress

```
Measuring Instruments  ███████████░░░░░░░░░  11/21  🔁 Round 4
Electrical Machines    █████████████░░░░░░░  13/19  🔁 Round 4
Power Electronics      █████████████░░░░░░░  13/18  🔁 Round 4
```

*Next: Measurements → DC potentiometer; Machines → Single-phase induction motors (double-revolving-field); Power Electronics → single-phase VSI inverters.*

> ✅ **Self-check before you close:** Can you (1) state the energy-meter torques and what phantom loading is, (2) give the V/f-control rule and the induction-generator slip condition, and (3) write the buck-boost/Cuk ratio `Vo = −Vs·D/(1−D)` and name the four-quadrant chopper? Re-read any KEY RESULT that felt shaky.
