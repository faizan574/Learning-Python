# ⚡ GATE Technical Revision — Day 33 (2026-08-22)

*Three subjects, one sitting — the null-balance potentiometer, the induction motor, and rectifier performance.*

📅 Tech Day 33 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics

> 🧠 **MEMORY HOOK** — Today is **"balance, rotate, and rate"**: the **potentiometer** balances an EMF against a known drop (no loading), the **induction motor** rotates below synchronous speed (slip), and we **rate** rectifiers by ripple factor, TUF and overlap.

---

## 🔧 Measuring Instruments: DC Potentiometer (& AC Potentiometers)

### 📖 Concept Deep Dive

A **potentiometer** measures an unknown **EMF/voltage** by **balancing** it against a known IR-drop — a **null method**. At balance **no current** is drawn from the source, so it measures the **true EMF** with **no loading error** (unlike a voltmeter).

**Working:** a steady "working current" from a battery flows through a **calibrated slide wire**. The unknown EMF is connected to oppose the drop across part of the wire; the slider is moved until a **galvanometer reads zero** (balance). The unknown EMF then equals the IR-drop over that length.

**Standardisation:** before use, the working current is set to a precise value using a **standard (Weston cadmium) cell** — EMF ≈ **`1.0186 V` at 20°C**. The rheostat is adjusted so the standard cell balances at its corresponding length, fixing the **volts-per-unit-length** calibration.

**Crompton potentiometer:** a precision laboratory form using **calibrated dial resistance coils** (coarse) plus a **slide wire** (fine), giving high resolution over a range (e.g. `0–1.8 V`).

**Applications:** measure EMF; **calibrate voltmeters and ammeters** (ammeter via drop across a standard resistor); measure **resistance, current, and power**.

**AC potentiometers** measure **both magnitude and phase** of an AC voltage:

| Type | Principle |
|---|---|
| **Polar (Drysdale-Tinsley)** | Reads **magnitude** (slide wire) and **phase angle** directly (phase-shifting transformer) |
| **Coordinate (Gall-Tinsley)** | Two potentiometers read **in-phase (Vx)** and **quadrature (Vy)** components: `V = Vx + jVy` |

> 💎 **KEY RESULT** — The potentiometer is a **null (comparison) instrument**: at balance no current flows from the source, so it measures **true EMF without loading**. Its accuracy rests on **standardisation with a standard cell** (Weston, 1.0186 V).

> ⚠️ **TRAP ALERT** — An **AC** potentiometer cannot be standardised with a DC standard cell directly; it uses a **transfer instrument (electrodynamometer)** to set the current. The polar type gives **magnitude + angle**; the coordinate type gives **rectangular components**.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Volts per unit length | `k = V_std / L_std` |
| Unknown EMF | `Ex = k × Lx` |
| Standard cell (Weston) | `≈ 1.0186 V` at 20°C |
| Current (via standard R) | `I = V_drop / R_std` |
| AC coordinate voltage | `V = Vx + jVy` , `|V| = √(Vx² + Vy²)` |

### 🧮 Solved Examples

**Example 1 — Slide-wire calibration.** A potentiometer slide wire is standardised so that a `1.0186 V` standard cell balances at `101.86 cm`. Find the volts-per-cm, and the unknown EMF that balances at `150 cm`.

```
k = V_std/L_std = 1.0186/101.86 = 0.01 V/cm
Ex = k × Lx = 0.01 × 150 = 1.5 V
```

**Example 2 — Current measurement.** To measure a current, the potentiometer reads the voltage across a `0.1 Ω` standard resistor as `0.65 V`. Find the current.

```
I = V_drop/R_std = 0.65/0.1 = 6.5 A
```

### ⚠️ Common Traps

1. Forgetting the potentiometer draws **zero current at balance** (its key virtue).
2. Skipping **standardisation** with the standard cell.
3. Using a **DC** standard cell to standardise an **AC** potentiometer.
4. Confusing **polar** (magnitude + angle) with **coordinate** (Vx, Vy) AC types.
5. Treating the standard-cell EMF as exactly 1 V (it's **1.0186 V**).
6. Measuring current directly — it's via the **drop across a standard resistor**.

### 📝 Test — Measuring Instruments (8 Q)

**Q1 (MCQ).** A potentiometer measures EMF by:
(a) deflection (b) null balance (comparison) (c) heating (d) rectification

**Q2 (MCQ).** At balance, the current drawn from the unknown source is:
(a) maximum (b) zero (c) rated (d) half

**Q3 (MCQ).** The Weston standard cell EMF at 20°C is about:
(a) 1.0186 V (b) 1.5 V (c) 2.0 V (d) 1.1 V

**Q4 (MCQ).** The polar-type AC potentiometer measures:
(a) magnitude only (b) magnitude and phase (c) frequency (d) power

**Q5 (MCQ).** A potentiometer measures current by reading the drop across a:
(a) capacitor (b) standard resistor (c) inductor (d) diode

**Q6 (NAT).** A slide wire is standardised so 1.0186 V balances at 50.93 cm. Find the volts per cm (V/cm).

**Q7 (NAT).** For Q6, find the EMF (V) balancing at 80 cm.

**Q8 (NAT).** A potentiometer reads 0.48 V across a 0.2 Ω standard resistor. Find the current (A).

<details><summary>🔑 Solutions</summary>

**Q1 — (b) null balance.**

**Q2 — (b) zero.**

**Q3 — (a) 1.0186 V.**

**Q4 — (b) magnitude and phase.**

**Q5 — (b) standard resistor.**

**Q6.** `k = 1.0186/50.93 = 0.02 V/cm`.

**Q7.** `Ex = 0.02 × 80 = 1.6 V`.

**Q8.** `I = 0.48/0.2 = 2.4 A`.

</details>

---

## 🔧 Electrical Machines: Induction Motor I — Rotating Field, Slip & Torque

### 📖 Concept Deep Dive

When **three-phase currents** flow in three space-displaced stator windings, they produce a **rotating magnetic field** of constant magnitude that revolves at the **synchronous speed**:

```
Ns = 120·f / P   (rpm)
```

This field induces currents in the rotor (transformer action); the rotor develops torque and runs at a speed `N` **less than** `Ns`. The fractional lag is the **slip**:

```
s = (Ns − N)/Ns   ⇒   N = Ns·(1 − s)
```

At **standstill** `s = 1`; at full load typically `s ≈ 2–5%`.

**Rotor quantities vary with slip:**

```
Rotor frequency:   fr = s·f
Rotor induced emf: E2r = s·E2   (E2 = standstill rotor emf)
Rotor reactance:   X2r = s·X2
Rotor current:     I2 = s·E2 / √(R2² + (s·X2)²)
```

**Torque:**

```
T ∝ (s·E2²·R2) / (R2² + (s·X2)²)
Starting torque (s = 1):  Tst ∝ E2²·R2 / (R2² + X2²)
```

> 💎 **KEY RESULT** — Maximum torque occurs at the slip where `R2 = s·X2`, i.e. **`s_maxT = R2/X2`**, and the **maximum torque `Tmax ∝ E2²/(2·X2)` is independent of R2**. Increasing rotor resistance moves max torque toward higher slip (raising starting torque) without changing `Tmax`.

> 🧠 **MEMORY HOOK** — "**Ns = 120f/P; slip lags; max torque at s = R2/X2**". Rotor frequency **fr = s·f** (very low at running slip). Higher R2 → more starting torque (slip-ring motors add external rotor resistance).

> ⚠️ **TRAP ALERT** — Rotor **frequency, emf, and reactance all scale with slip** (`s·f`, `s·E2`, `s·X2`) — but rotor **resistance R2 does not**. `Tmax` is independent of R2, though the **slip at which it occurs** depends on R2.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Synchronous speed | `Ns = 120·f/P` |
| Slip | `s = (Ns − N)/Ns` |
| Rotor frequency | `fr = s·f` |
| Rotor emf / reactance | `E2r = s·E2` , `X2r = s·X2` |
| Torque | `T ∝ s·E2²·R2/(R2² + (s·X2)²)` |
| Slip at max torque | `s_maxT = R2/X2` |

### 🧮 Solved Examples

**Example 1 — Speeds and rotor frequency.** A `4-pole`, `50 Hz` induction motor runs at `1440 rpm`. Find the synchronous speed, slip, and rotor frequency.

```
Ns = 120·f/P = 120×50/4 = 1500 rpm
s = (Ns − N)/Ns = (1500 − 1440)/1500 = 60/1500 = 0.04 = 4%
fr = s·f = 0.04 × 50 = 2 Hz
```

**Example 2 — Slip for maximum torque.** A rotor has `R2 = 0.5 Ω` and standstill reactance `X2 = 5 Ω`. Find the slip at maximum torque.

```
s_maxT = R2/X2 = 0.5/5 = 0.1 = 10%
```

### ⚠️ Common Traps

1. Using `Ns` in the slip formula's denominator wrong — `s = (Ns − N)/Ns`.
2. Forgetting rotor **frequency = s·f** (not f).
3. Thinking `Tmax` depends on **R2** — it does **not** (only the slip does).
4. Confusing standstill emf `E2` with running emf `s·E2`.
5. Taking `Ns = 120P/f` (inverted) — it's `120f/P`.
6. Assuming the rotor runs at synchronous speed (it never does under load).

### 📝 Test — Electrical Machines (8 Q)

**Q1 (MCQ).** The synchronous speed of a 6-pole, 50 Hz machine is:
(a) 750 rpm (b) 1000 rpm (c) 1500 rpm (d) 3000 rpm

**Q2 (MCQ).** At standstill the slip of an induction motor is:
(a) 0 (b) 0.5 (c) 1 (d) infinite

**Q3 (MCQ).** The rotor frequency at slip s is:
(a) f (b) s·f (c) f/s (d) s²·f

**Q4 (MCQ).** Maximum torque occurs when:
(a) R2 = X2 (b) s·X2 = R2 (c) R2 = 0 (d) s = 1

**Q5 (MCQ).** Maximum torque of an induction motor is:
(a) proportional to R2 (b) independent of R2 (c) inversely ∝ E2 (d) zero

**Q6 (NAT).** An 8-pole, 50 Hz motor runs at 720 rpm. Find the slip (%).

**Q7 (NAT).** For Q6, find the rotor frequency (Hz).

**Q8 (NAT).** A rotor has R2 = 0.4 Ω, X2 = 4 Ω. Find the slip at maximum torque (%).

<details><summary>🔑 Solutions</summary>

**Q1 — (b) 1000 rpm** (`120×50/6`).

**Q2 — (c) 1.**

**Q3 — (b) s·f.**

**Q4 — (b) s·X2 = R2.**

**Q5 — (b) independent of R2.**

**Q6.** `Ns = 120×50/8 = 750 rpm`; `s = (750 − 720)/750 = 30/750 = 0.04 = 4%`.

**Q7.** `fr = s·f = 0.04 × 50 = 2 Hz`.

**Q8.** `s_maxT = R2/X2 = 0.4/4 = 0.1 = 10%`.

</details>

---

## 🔧 Power Electronics: Rectifier Performance — Ripple, TUF, Input pf & Overlap

### 📖 Concept Deep Dive

Rectifiers are judged by several **performance figures**:

| Metric | Definition |
|---|---|
| **Form factor** | `FF = Vrms / Vdc` |
| **Ripple factor** | `RF = √(FF² − 1) = Vac_rms/Vdc` |
| **Rectification efficiency** | `η = Pdc/Pac` |
| **TUF** (transformer utilisation) | `= Pdc / (VA rating of transformer)` |
| **Input power factor** | `= real power / apparent power` at input |

**Standard values** (R load):

| Rectifier | RF | η | TUF |
|---|---|---|---|
| Half-wave | **1.21** | 40.6% | 0.286 |
| Full-wave (centre-tap) | **0.48** | 81.2% | 0.672 |
| Full-wave (bridge) | **0.48** | 81.2% | 0.812 |

> 💎 **KEY RESULT** — `RF = √(FF² − 1)`. Half-wave has **RF = 1.21** (poor); full-wave **RF = 0.48** (better). The **bridge** has a higher **TUF (0.812)** than the centre-tap (0.672) for the same transformer.

**Input power factor** of a phase-controlled full converter (constant load current, ignoring overlap):

```
Input pf ≈ (2√2/π)·cosα ≈ 0.9·cosα
```
so the pf **worsens as the firing angle α increases** (a key drawback of phase control).

**Effect of source inductance (overlap / commutation angle μ):** real supplies have inductance `Ls`, so current **cannot transfer instantly** from the outgoing device to the incoming one. During the **overlap angle μ**, both conduct, short-circuiting the supply through `Ls` and **reducing the average output voltage**. For a single-phase full converter:

```
Vd = (2·Vm/π)·cosα − (2·ω·Ls·Io)/π
```

The overlap angle `μ` **grows with load current `Io` and source inductance `Ls`**.

> 🧠 **MEMORY HOOK** — "**RF: half 1.21, full 0.48**; input pf ≈ **0.9 cosα** (drops with α); overlap **subtracts** `(2ωLsIo/π)` from Vd". More current or more Ls → more overlap → less output.

> ⚠️ **TRAP ALERT** — Source inductance **reduces** the DC output (voltage drop `∝ Io`), it doesn't just delay commutation. And phase control's **input pf falls with α** — a reason semiconverters/PWM are preferred where pf matters.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Form factor | `FF = Vrms/Vdc` |
| Ripple factor | `RF = √(FF² − 1)` |
| Half-wave / full-wave RF | `1.21` / `0.48` |
| Input pf (full converter) | `≈ (2√2/π)cosα ≈ 0.9cosα` |
| Overlap drop (1-φ full) | `ΔVd = (2·ω·Ls·Io)/π` |

### 🧮 Solved Examples

**Example 1 — Ripple factor of a half-wave rectifier.** For a half-wave rectifier (R load), `Vdc = Vm/π`, `Vrms = Vm/2`. Find the ripple factor.

```
FF = Vrms/Vdc = (Vm/2)/(Vm/π) = π/2 = 1.571
RF = √(FF² − 1) = √(1.571² − 1) = √(2.467 − 1) = √1.467 = 1.21
```

**Example 2 — Output with source inductance.** A `1-φ` full converter: `Vm = 325 V`, `α = 30°`, `Ls = 5 mH`, `Io = 10 A`, `f = 50 Hz`. Find the average output voltage including overlap.

```
ω = 2π×50 = 314.16 rad/s
Vdc(ideal) = (2·Vm/π)·cosα = (2×325/π)×cos30° = 206.9 × 0.866 = 179.2 V
Overlap drop = (2·ω·Ls·Io)/π = (2×314.16×0.005×10)/π = 31.416/3.1416 = 10.0 V
Vd = 179.2 − 10.0 = 169.2 V
```

### ⚠️ Common Traps

1. Forgetting `RF = √(FF² − 1)` (not `FF − 1`).
2. Mixing half-wave (RF 1.21) and full-wave (RF 0.48) values.
3. Thinking source inductance only delays commutation — it **lowers Vdc**.
4. Assuming input pf is constant — it **drops as α rises** (`0.9 cosα`).
5. Confusing TUF of bridge (0.812) with centre-tap (0.672).
6. Ignoring that overlap drop **∝ load current Io**.

### 📝 Test — Power Electronics (8 Q)

**Q1 (MCQ).** The ripple factor of a half-wave rectifier is:
(a) 0.48 (b) 1.21 (c) 0.81 (d) 1.11

**Q2 (MCQ).** Ripple factor in terms of form factor is:
(a) FF − 1 (b) √(FF² − 1) (c) FF² − 1 (d) 1/FF

**Q3 (MCQ).** Source inductance in a converter causes the output voltage to:
(a) increase (b) decrease (c) stay same (d) reverse

**Q4 (MCQ).** The input power factor of a phase-controlled full converter:
(a) rises with α (b) falls with α (c) is constant (d) is always unity

**Q5 (MCQ).** The commutation overlap angle μ increases with:
(a) lower load current (b) higher load current & source inductance (c) higher α only (d) lower Ls

**Q6 (NAT).** A full-wave rectifier has FF = 1.11. Find its ripple factor.

**Q7 (NAT).** A 1-φ full converter: Vm = 300 V, α = 0, Ls = 4 mH, Io = 15 A, 50 Hz. Find the overlap voltage drop (V).

**Q8 (NAT).** For Q7, find the actual average output voltage (V).

<details><summary>🔑 Solutions</summary>

**Q1 — (b) 1.21.**

**Q2 — (b) √(FF² − 1).**

**Q3 — (b) decrease.**

**Q4 — (b) falls with α.**

**Q5 — (b) higher load current & source inductance.**

**Q6.** `RF = √(1.11² − 1) = √(1.2321 − 1) = √0.2321 = 0.482`.

**Q7.** `ΔVd = (2·ω·Ls·Io)/π = (2×314.16×0.004×15)/π = 37.70/3.1416 = 12.0 V`.

**Q8.** `Vdc(ideal) = (2×300/π)cos0° = 190.99 V`; `Vd = 190.99 − 12.0 = 179.0 V`.

</details>

---

> 🧠 **DAY-33 WRAP** — Potentiometer: **null method** (no loading), standardise with **Weston cell (1.0186 V)**, AC = polar/coordinate. Induction motor: **Ns = 120f/P**, **s = (Ns−N)/Ns**, rotor **fr = s·f**, **max torque at s = R2/X2** (Tmax independent of R2). Rectifier metrics: **RF = √(FF²−1)** (HW 1.21, FW 0.48), input pf **0.9cosα**, overlap drop **2ωLsIo/π**. Revise the boxed KEY RESULTS. ⚡
