# ⚡ GATE Technical Revision — Day 31 (2026-08-20)

*Three subjects, one sitting — three-phase power measurement, the DC motor, and controlled bridge rectifiers.*

📅 Tech Day 31 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics

> 🧠 **MEMORY HOOK** — Today is **"two wattmeters, two motors, two converters"**: the **two-wattmeter method** for 3-phase power, the **shunt vs series** DC motor, and the **full converter vs semiconverter**. Learn each pair by its defining formula.

---

## 🔧 Measuring Instruments: Measurement of Power II — Three-Phase (Two-Wattmeter Method)

### 📖 Concept Deep Dive

**Blondel's theorem:** in an **n-wire** system, the total power can be measured with **(n − 1)** wattmeters. So a **3-phase, 3-wire** system needs **2 wattmeters**; a **3-phase, 4-wire** system needs **3**.

**Two-wattmeter method** (3-phase, 3-wire; works for balanced *or* unbalanced loads). For a **balanced** load with power-factor angle `φ`:

```
W1 = VL·IL·cos(30° − φ)
W2 = VL·IL·cos(30° + φ)
Total power  W1 + W2 = √3·VL·IL·cosφ
Difference   W1 − W2 = VL·IL·sinφ
```

From these:

```
tanφ = √3·(W1 − W2)/(W1 + W2)
Reactive power Q = √3·(W1 − W2)
```

**Sign / reading cases** (as pf falls):

| Power factor | Angle φ | Wattmeter readings |
|---|---|---|
| **unity** | 0° | W1 = W2 (equal, both +) |
| **0.5** | 60° | **W2 = 0** (reads zero) |
| **< 0.5** | > 60° | **W2 negative** (reverse to read) |
| **zero** | 90° | W1 = −W2, total = 0 |

> 💎 **KEY RESULT** — `Total power = W1 + W2` and `tanφ = √3·(W1 − W2)/(W1 + W2)`. At **pf = 0.5** one wattmeter reads **zero**; below 0.5 it reads **negative** and must be reversed.

**Reactive power** in a balanced 3-phase load can be found from the two-wattmeter difference (`Q = √3(W1 − W2)`), or with a **single wattmeter** whose current coil is in one line and pressure coil across the **other two** lines (reads `VL·IL·sinφ`; multiply by √3).

> ⚠️ **TRAP ALERT** — Which wattmeter reads higher depends on **lagging vs leading**. For a lagging pf, `W1 = VL·IL·cos(30° − φ)` is the **larger**. When you reverse a negative wattmeter to read it, that reading is **subtracted** in the total.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Blondel's theorem | wattmeters `= n − 1` |
| Wattmeter readings | `W1 = VL·IL·cos(30°−φ)` , `W2 = VL·IL·cos(30°+φ)` |
| Total power | `P = W1 + W2 = √3·VL·IL·cosφ` |
| Power-factor angle | `tanφ = √3·(W1 − W2)/(W1 + W2)` |
| Reactive power | `Q = √3·(W1 − W2)` |

### 🧮 Solved Examples

**Example 1 — Find total power & pf from readings.** Two wattmeters read `W1 = 1000 W` and `W2 = 500 W`. Find the total power and the power factor.

```
Total power = W1 + W2 = 1000 + 500 = 1500 W
tanφ = √3·(W1 − W2)/(W1 + W2) = 1.732 × (500)/(1500) = 1.732 × 0.3333 = 0.5773
φ = 30°  ⇒  pf = cos30° = 0.866
```

**Example 2 — Find the readings.** A balanced load: `VL = 400 V`, `IL = 10 A`, pf `= 0.8 lagging` (`φ = 36.87°`). Find W1 and W2.

```
W1 = VL·IL·cos(30° − 36.87°) = 4000 × cos(−6.87°) = 4000 × 0.9928 = 3971 W
W2 = VL·IL·cos(30° + 36.87°) = 4000 × cos(66.87°)  = 4000 × 0.3928 = 1571 W
Check: W1 + W2 = 5542 W = √3×400×10×0.8 = 5542 W ✓
```

### ⚠️ Common Traps

1. Using `n` wattmeters instead of `n − 1` (Blondel).
2. Forgetting **W2 goes negative** below pf 0.5 (subtract when reversed).
3. Dropping the **√3** in `tanφ` or in `Q`.
4. Assuming both wattmeters are always equal (only at unity pf).
5. Swapping the `(30° − φ)` and `(30° + φ)` roles.
6. Applying the balanced-load `cos(30°±φ)` formula to compute *total* on an unbalanced load (the **sum** still works, individual formulas don't).

### 📝 Test — Measuring Instruments (8 Q)

**Q1 (MCQ).** By Blondel's theorem, a 3-phase 4-wire system needs how many wattmeters?
(a) 1 (b) 2 (c) 3 (d) 4

**Q2 (MCQ).** In the two-wattmeter method, one wattmeter reads zero at a power factor of:
(a) 1.0 (b) 0.866 (c) 0.5 (d) 0

**Q3 (MCQ).** Total 3-phase power by two wattmeters is:
(a) W1 − W2 (b) W1 + W2 (c) √3(W1+W2) (d) W1×W2

**Q4 (MCQ).** tanφ in the two-wattmeter method equals:
(a) (W1−W2)/(W1+W2) (b) √3(W1−W2)/(W1+W2) (c) √3(W1+W2)/(W1−W2) (d) (W1+W2)/(W1−W2)

**Q5 (MCQ).** One wattmeter reads negative when the power factor is:
(a) above 0.5 (b) exactly 0.5 (c) below 0.5 (d) unity

**Q6 (NAT).** Two wattmeters read 800 W and 400 W. Find the total power (W).

**Q7 (NAT).** For Q6, find the power factor (to 3 decimals).

**Q8 (NAT).** A balanced load draws readings W1 = 3000 W, W2 = −500 W. Find the reactive power Q (VAR).

<details><summary>🔑 Solutions</summary>

**Q1 — (c) 3.**

**Q2 — (c) 0.5.**

**Q3 — (b) W1 + W2.**

**Q4 — (b) √3(W1−W2)/(W1+W2).**

**Q5 — (c) below 0.5.**

**Q6.** `800 + 400 = 1200 W`.

**Q7.** `tanφ = √3(800−400)/(1200) = 1.732×0.3333 = 0.5773` ⇒ `φ = 30°` ⇒ `pf = 0.866`.

**Q8.** `Q = √3(W1 − W2) = 1.732 × (3000 − (−500)) = 1.732 × 3500 = 6062 VAR`.

</details>

---

## 🔧 Electrical Machines: DC Motors — Types, Torque-Speed, Starters & Speed Control

### 📖 Concept Deep Dive

A DC motor develops **back-emf** `Eb` that opposes the supply and controls the current:

```
Eb = V − Ia·Ra ,   Eb = P·φ·Z·N/(60·A)
Speed:  N ∝ Eb/φ = (V − Ia·Ra)/(k·φ)
Torque: Ta ∝ φ·Ia ,  Ta = P·φ·Z·Ia/(2π·A)
```

**Motor types & characteristics:**

| Type | Flux | Torque vs Ia | Speed behaviour | Application |
|---|---|---|---|---|
| **Shunt** | ≈ constant (field across supply) | `Ta ∝ Ia` | nearly **constant** (droops slightly) | lathes, fans, pumps |
| **Series** | `φ ∝ Ia` (pre-saturation) | `Ta ∝ Ia²` | `N ∝ 1/Ia` — **runs away at no load** | traction, cranes, hoists |
| **Cumulative compound** | shunt + series | high | high starting torque, no runaway | rolling mills, lifts |

> 💎 **KEY RESULT** — A **series motor** gives torque `Ta ∝ Ia²` (high starting torque) but its speed `N ∝ 1/Ia` becomes **dangerously high at no load** — never start a series motor unloaded (or belt-driven). A **shunt motor** runs at nearly constant speed.

**Starters.** At the instant of starting, `Eb = 0`, so `Ia = V/Ra` is dangerously large. A **3-point** or **4-point starter** (or external resistance) limits the starting current, cutting the resistance out as the motor speeds up.

**Speed control:**

| Motor | Methods |
|---|---|
| **Shunt** | **Flux/field control** (weaken field ⇒ speed **above** rated); **armature/rheostatic** (add R ⇒ speed **below** rated, lossy); **Ward-Leonard** (variable armature voltage, smooth wide range) |
| **Series** | field diverter, armature diverter, tapped field, series-parallel control |

> 🧠 **MEMORY HOOK** — "**Field down → speed up; armature R → speed down**". Series motor: **T ∝ Ia²** (great starting torque), **N ∝ 1/Ia** (no-load runaway). Ward-Leonard = smooth voltage control.

> ⚠️ **TRAP ALERT** — **Field weakening raises speed** (above base), **armature resistance lowers speed** (below base). Don't confuse them. And a **series** motor's runaway means it must have a **permanent load**.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Back-emf | `Eb = V − Ia·Ra` |
| Speed relation | `N ∝ Eb/φ = (V − Ia·Ra)/(k·φ)` |
| Speed ratio (φ const) | `N2/N1 = Eb2/Eb1` |
| Torque | `Ta ∝ φ·Ia` ; series `Ta ∝ Ia²` |
| Starting current | `Ia(start) = V/Ra` (needs starter) |

### 🧮 Solved Examples

**Example 1 — Shunt motor speed change.** A `220 V` shunt motor, `Ra = 0.5 Ω`, runs at `1000 rpm` drawing `Ia = 20 A`. The load increases so `Ia = 40 A` (flux constant). Find the new speed.

```
Eb1 = 220 − 20×0.5 = 210 V
Eb2 = 220 − 40×0.5 = 200 V
N2 = N1 × Eb2/Eb1 = 1000 × 200/210 = 952.4 rpm
```

**Example 2 — Starting current.** For the same motor, find the starting current without a starter, and comment.

```
Ia(start) = V/Ra = 220/0.5 = 440 A
```
This is ~22× the normal 20 A — far too high, so a **starter** (series resistance) is essential.

### ⚠️ Common Traps

1. Forgetting `Eb = 0` at start ⇒ huge `Ia = V/Ra`.
2. Series motor: torque `∝ Ia²`, **not** `∝ Ia`.
3. Thinking field weakening **reduces** speed — it **increases** it.
4. Running a **series** motor at no load (runaway).
5. Using `N ∝ Eb` alone — it's `N ∝ Eb/φ` (flux matters).
6. Treating armature-resistance control as efficient — it wastes power as heat.

### 📝 Test — Electrical Machines (8 Q)

**Q1 (MCQ).** In a DC series motor, torque is proportional to:
(a) Ia (b) Ia² (c) √Ia (d) 1/Ia

**Q2 (MCQ).** A DC series motor should never be started:
(a) on full load (b) at no load (c) with a starter (d) on rated voltage

**Q3 (MCQ).** To run a shunt motor above its base speed, one uses:
(a) armature resistance (b) field weakening (c) reduced voltage (d) more load

**Q4 (MCQ).** A starter is needed in a DC motor because at start:
(a) Eb is maximum (b) Eb is zero (c) flux is zero (d) torque is zero

**Q5 (MCQ).** The Ward-Leonard method controls speed by varying:
(a) field resistance (b) armature voltage (c) frequency (d) number of poles

**Q6 (NAT).** A 200 V shunt motor, Ra = 0.4 Ω, runs at 1500 rpm with Ia = 25 A. Find the speed (rpm) when Ia = 50 A (flux constant).

**Q7 (NAT).** A DC motor supply 240 V, Ra = 0.6 Ω, back-emf 210 V. Find the armature current (A).

**Q8 (NAT).** A series motor draws 20 A giving 40 N·m. Assuming Ta ∝ Ia² (unsaturated), find the torque (N·m) at 30 A.

<details><summary>🔑 Solutions</summary>

**Q1 — (b) Ia².**

**Q2 — (b) at no load.**

**Q3 — (b) field weakening.**

**Q4 — (b) Eb is zero.**

**Q5 — (b) armature voltage.**

**Q6.** `Eb1 = 200 − 25×0.4 = 190 V`; `Eb2 = 200 − 50×0.4 = 180 V`; `N2 = 1500 × 180/190 = 1421 rpm`.

**Q7.** `Ia = (V − Eb)/Ra = (240 − 210)/0.6 = 30/0.6 = 50 A`.

**Q8.** `Ta ∝ Ia²` ⇒ `T2 = 40 × (30/20)² = 40 × 2.25 = 90 N·m`.

</details>

---

## 🔧 Power Electronics: Single-Phase Full Converter & Semiconverter

### 📖 Concept Deep Dive

**Full (fully controlled) converter** — a bridge of **four SCRs** — with a highly inductive (continuous-current) load:

```
Vdc = (2·Vm/π)·cosα
```

- `α = 0 → 90°`: `Vdc > 0` ⇒ **rectifier** mode.
- `α = 90° → 180°`: `Vdc < 0` ⇒ **inverter** mode (power fed back to AC).
- It is a **two-quadrant** converter (voltage reverses, current one direction).

**Semiconverter (half-controlled)** — **two SCRs + two diodes** — with **inherent freewheeling**:

```
Vdc = (Vm/π)·(1 + cosα)
```

- Output stays **≥ 0** (one-quadrant); **cannot invert**.
- Range: `2Vm/π` (at α = 0) down to `0` (at α = 180°).

**Effect of the freewheeling diode (FD):** in the semiconverter the diodes provide the freewheeling path automatically; adding an FD across a full-converter load makes it behave like a semiconverter (output clamped to ≥ 0). Benefits: the load current **freewheels** during the zero-output interval, which **improves input power factor**, prevents the output from going negative, and smooths the load current.

> 💎 **KEY RESULT** — **Full converter: `Vdc = (2Vm/π)cosα`** (two-quadrant, can invert). **Semiconverter: `Vdc = (Vm/π)(1 + cosα)`** (one-quadrant, freewheeling, cannot invert). The FD is what forces one-quadrant operation and improves the input pf.

For a highly inductive load the average load current is `Idc = Vdc/R` (R = load resistance), and the source current is a quasi-square wave of amplitude `Idc`.

> 🧠 **MEMORY HOOK** — "**Full = 2cosα (can invert); Semi = 1+cosα (freewheels)**". The semiconverter's `(1 + cosα)` is always ≥ 0 — no inversion.

> ⚠️ **TRAP ALERT** — Only the **full converter can invert** (`Vdc` negative for `α > 90°`). The **semiconverter never inverts**. Don't apply `(2Vm/π)cosα` to a semiconverter or vice-versa.

### 📐 Formula Sheet

| Circuit | Average output Vdc | Quadrants |
|---|---|---|
| Full converter (RL, continuous) | `(2Vm/π)·cosα` | **two** (rectify + invert) |
| Semiconverter | `(Vm/π)·(1 + cosα)` | **one** |
| Full converter with FD | `(Vm/π)·(1 + cosα)` | one |
| Average load current | `Idc = Vdc/R` | — |

### 🧮 Solved Examples

**Example 1 — Full converter.** Supply `230 V` RMS (`Vm ≈ 325 V`), `α = 45°`, highly inductive load. Find `Vdc`.

```
Vdc = (2·Vm/π)·cosα = (2 × 325 / 3.1416) × cos45°
    = 206.9 × 0.7071 = 146.3 V
```

**Example 2 — Semiconverter & inverter check.** (a) A semiconverter with `Vm ≈ 325 V`, `α = 60°`; find `Vdc`. (b) A full converter at `α = 120°`; comment.

```
(a) Vdc = (Vm/π)(1 + cosα) = (325/3.1416)(1 + cos60°)
        = 103.45 × 1.5 = 155.2 V

(b) Full converter, α = 120°:  Vdc = (2×325/π)·cos120° = 206.9 × (−0.5) = −103.5 V
    ⇒ negative ⇒ INVERTER mode (a semiconverter could not do this)
```

### ⚠️ Common Traps

1. Using `(2Vm/π)cosα` for a **semiconverter** — it's `(Vm/π)(1+cosα)`.
2. Believing a **semiconverter can invert** — it cannot (one-quadrant).
3. Forgetting the FD converts a full-converter output to one-quadrant.
4. Mixing peak `Vm` and RMS `Vs` (`Vm = √2·Vs`).
5. Ignoring that inversion needs `α > 90°` **and** a DC source (e.g. back-emf) to supply power.
6. Assuming full-converter output is always positive.

### 📝 Test — Power Electronics (8 Q)

**Q1 (MCQ).** The average output of a single-phase full converter (RL load) is:
(a) (Vm/π)(1+cosα) (b) (2Vm/π)cosα (c) (Vm/2π)(1+cosα) (d) Vm/π

**Q2 (MCQ).** A single-phase semiconverter operates in:
(a) one quadrant (b) two quadrants (c) four quadrants (d) three quadrants

**Q3 (MCQ).** Inverter operation of a full converter requires α:
(a) < 90° (b) = 0 (c) > 90° (d) = 45°

**Q4 (MCQ).** The freewheeling diode in a converter improves:
(a) output frequency (b) input power factor (c) SCR rating (d) firing angle

**Q5 (MCQ).** A semiconverter cannot:
(a) rectify (b) invert (c) freewheel (d) supply DC

**Q6 (NAT).** A single-phase full converter, Vm = 340 V, α = 60°. Find Vdc (V).

**Q7 (NAT).** A single-phase semiconverter, Vm = 300 V, α = 90°. Find Vdc (V).

**Q8 (NAT).** A full converter, Vm = 325 V, α = 135°. Find Vdc (V) and state the mode.

<details><summary>🔑 Solutions</summary>

**Q1 — (b) (2Vm/π)cosα.**

**Q2 — (a) one quadrant.**

**Q3 — (c) > 90°.**

**Q4 — (b) input power factor.**

**Q5 — (b) invert.**

**Q6.** `Vdc = (2×340/π)·cos60° = 216.5 × 0.5 = 108.2 V`.

**Q7.** `Vdc = (300/π)(1 + cos90°) = 95.49 × (1 + 0) = 95.5 V`.

**Q8.** `Vdc = (2×325/π)·cos135° = 206.9 × (−0.7071) = −146.3 V` ⇒ **inverter mode** (negative Vdc).

</details>

---

> 🧠 **DAY-31 WRAP** — Power: **P = W1 + W2**, `tanφ = √3(W1−W2)/(W1+W2)`, W2=0 at pf 0.5. DC motor: **series T∝Ia² (runaway at no load)**, shunt ≈ constant speed, **field↓ speed↑ / armature-R speed↓**, starter limits `V/Ra`. Rectifiers: **full `(2Vm/π)cosα` (inverts)**, **semi `(Vm/π)(1+cosα)` (freewheels, one-quadrant)**. Revise the three boxed KEY RESULTS. ⚡
