# ⚡ GATE Technical Revision — Day 36 (2026-08-25)

*Three subjects, one sitting — DC bridges, induction-motor speed control, and advanced choppers.*

📅 Tech Day 36 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics

> 🧠 **MEMORY HOOK** — Today is **"balance the bridge, control the speed, invert the chopper"**: the **Wheatstone/Kelvin** bridges, induction-motor **V/f control & double-cage rotor**, and the **buck-boost/Cuk** converters with four-quadrant operation.

---

## 🔧 Measuring Instruments: DC Bridges — Wheatstone, Kelvin & Megger

### 📖 Concept Deep Dive

Bridge methods measure resistance by **null balance** (no detector current at balance), giving high accuracy independent of source voltage.

**Wheatstone bridge** — for **medium resistance** (`~1 Ω to 1 MΩ`). Four arms `P, Q, R, S` with a galvanometer detector. At balance:

```
P/Q = R/S     ⇒     unknown S = R·Q/P     (opposite-arm products equal: P·S = Q·R)
```

**Bridge sensitivity** — the detector deflection per fractional change in the unknown — depends on the galvanometer sensitivity, supply voltage, and arm ratios; it is **maximum when all four arms are (nearly) equal**.

**Kelvin double bridge** — for **low resistance** (`< 1 Ω`), where **lead and contact resistances** would corrupt a Wheatstone reading. It adds a second pair of ratio arms (`p, q`) so the connecting-lead ("yoke") resistance term **cancels** when `p/q = P/Q`:

```
X = (P/Q)·S     (the yoke term vanishes if p/q = P/Q)
```

**High-resistance measurement** (`> 0.1 MΩ`): leakage matters, so **guard circuits**, megohm bridges, or loss-of-charge methods are used.

**Megger** — measures very high **insulation resistance** (MΩ+). It has a **hand-cranked generator** and a **crossed-coil (ratiometer) ohmmeter** (deflecting + control coils), reading insulation resistance **directly**, independent of crank speed.

> 💎 **KEY RESULT** — **Wheatstone: `S = R·Q/P`** (medium R); **Kelvin double bridge** removes lead/contact resistance for **low R** (`X = (P/Q)·S` when `p/q = P/Q`); the **Megger** reads **insulation (very high) resistance** directly.

> ⚠️ **TRAP ALERT** — Use **Kelvin** (not Wheatstone) for **low** resistances — Wheatstone's lead/contact resistance dominates there. The **Megger** is for **insulation (very high)** resistance. Bridge sensitivity is **best with equal arms**.

### 📐 Formula Sheet

| Bridge | Balance / use |
|---|---|
| Wheatstone | `P/Q = R/S` ⇒ `S = R·Q/P` (medium R) |
| Kelvin double | `X = (P/Q)·S` (low R, `p/q = P/Q`) |
| Megger | insulation (very high) R, direct reading |
| Max sensitivity | all arms ≈ equal |

### 🧮 Solved Examples

**Example 1 — Wheatstone unknown.** A Wheatstone bridge balances with `P = 100 Ω`, `Q = 1000 Ω`, `R = 200 Ω`. Find the unknown `S`.

```
P/Q = R/S ⇒ S = R·Q/P = 200 × 1000 / 100 = 2000 Ω
```

**Example 2 — Kelvin double bridge.** A Kelvin bridge measures a low resistance with ratio `P/Q = 1000` and standard `S = 0.5 mΩ` at balance (`p/q = P/Q`). Find `X`.

```
X = (P/Q)·S = 1000 × 0.5×10⁻³ = 0.5 Ω
```

### ⚠️ Common Traps

1. Using a **Wheatstone** bridge for **low** resistance (lead resistance error).
2. Forgetting the Kelvin condition `p/q = P/Q` (else yoke term remains).
3. Using a Megger for medium resistance — it's for **insulation**.
4. Thinking bridge accuracy depends on supply voltage — at **balance** it doesn't.
5. Forgetting sensitivity peaks with **equal arms**.
6. Mis-solving `S = R·Q/P` (mixing which arms are ratio vs standard).

### 📝 Test — Measuring Instruments (8 Q)

**Q1 (MCQ).** The Wheatstone bridge is best for measuring:
(a) low resistance (b) medium resistance (c) insulation resistance (d) capacitance

**Q2 (MCQ).** The Kelvin double bridge is used for:
(a) medium R (b) low R (c) high R (d) inductance

**Q3 (MCQ).** A Megger measures:
(a) low R (b) medium R (c) insulation (very high) R (d) frequency

**Q4 (MCQ).** At balance, the galvanometer in a Wheatstone bridge reads:
(a) maximum (b) zero (c) half (d) supply voltage

**Q5 (MCQ).** Wheatstone bridge sensitivity is maximum when the arms are:
(a) very unequal (b) approximately equal (c) all zero (d) all infinite

**Q6 (NAT).** A Wheatstone bridge: P = 200 Ω, Q = 400 Ω, R = 300 Ω at balance. Find S (Ω).

**Q7 (NAT).** A Kelvin bridge: P/Q = 500, standard S = 2 mΩ (p/q = P/Q). Find X (Ω).

**Q8 (NAT).** A Wheatstone bridge balances with P = 10 Ω, Q = 100 Ω, unknown in the S arm = 50 Ω. Find R (Ω).

<details><summary>🔑 Solutions</summary>

**Q1 — (b) medium resistance.**

**Q2 — (b) low R.**

**Q3 — (c) insulation (very high) R.**

**Q4 — (b) zero.**

**Q5 — (b) approximately equal.**

**Q6.** `S = R·Q/P = 300 × 400/200 = 600 Ω`.

**Q7.** `X = (P/Q)·S = 500 × 2×10⁻³ = 1 Ω`.

**Q8.** `P/Q = R/S ⇒ R = S·P/Q = 50 × 10/100 = 5 Ω`.

</details>

---

## 🔧 Electrical Machines: Induction Motor IV — Speed Control, Double-Cage & Induction Generator

### 📖 Concept Deep Dive

**Speed control** of a 3-phase induction motor (`Ns = 120·f/P`, `N = Ns(1−s)`):

| Side | Method | Note |
|---|---|---|
| **Stator** | **V/f (frequency) control** | Keep **V/f constant** ⇒ constant flux; wide, smooth range (VFD) |
| **Stator** | **Pole changing** | Discrete speeds (squirrel-cage) |
| **Stator** | **Stator voltage control** | `T ∝ V²`; limited range, poor for constant-torque |
| **Rotor** | **Rotor resistance** (slip-ring) | Reduces speed, wastes power |
| **Rotor** | **Slip-power recovery** (Kramer/Scherbius) | Recovers rotor power efficiently |

> 💎 **KEY RESULT** — **V/f control** is the standard variable-speed method: holding **V/f constant keeps the air-gap flux constant**, so torque capability is maintained while speed `∝ f`. Below base speed use V/f; above base speed, field-weakening (constant V, raise f).

**Double-cage rotor:** two concentric sets of rotor bars —
- **Outer cage:** **high resistance, low reactance** → carries most current at **starting** (high rotor frequency) ⇒ **high starting torque**.
- **Inner cage:** **low resistance, high reactance** → carries current at **running** (low slip) ⇒ **good efficiency**.

This combines **high starting torque** with **good running performance** in a squirrel-cage machine.

**Induction generator:** an induction machine driven **above synchronous speed** (`N > Ns`, so **slip is negative**) delivers real power to the grid, but must **draw reactive (magnetising) power** from the grid or from capacitors (self-excited). Widely used in **wind turbines**; needs **no separate DC excitation**.

> 🧠 **MEMORY HOOK** — "**V/f keeps flux; outer cage starts, inner cage runs; drive above Ns ⇒ generator (negative slip)**".

> ⚠️ **TRAP ALERT** — For an **induction generator**, slip is **negative** (`N > Ns`), and it **absorbs** reactive power (cannot self-start without excitation). In the **double cage**, the **outer** cage (high R) handles **starting**, the **inner** (low R) handles **running** — don't swap them.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Synchronous speed | `Ns = 120·f/P` |
| V/f control | keep `V/f = constant` (constant flux) |
| Slip (generator) | `s = (Ns − N)/Ns < 0` |
| Double cage | outer: high R (start); inner: low R (run) |

### 🧮 Solved Examples

**Example 1 — V/f control.** A `4-pole`, `50 Hz`, `400 V` induction motor is to run at **half speed** with constant flux. Find the required frequency and voltage.

```
Half speed ⇒ f = 25 Hz (Ns halves)
V/f constant ⇒ V = 400 × (25/50) = 200 V
```

**Example 2 — Induction generator slip.** A `4-pole`, `50 Hz` induction machine (`Ns = 1500 rpm`) is driven at `1560 rpm`. Find the slip and state the mode.

```
s = (Ns − N)/Ns = (1500 − 1560)/1500 = −0.04 = −4%
Negative slip ⇒ GENERATING mode (driven above synchronous speed)
```

### ⚠️ Common Traps

1. Forgetting to lower **voltage with frequency** (V/f constant) below base speed.
2. Thinking an induction generator needs no reactive power — it **absorbs** VARs.
3. Swapping outer (start) and inner (run) cage roles.
4. Taking generator slip as positive — it's **negative**.
5. Using stator-voltage control for constant-torque loads (torque `∝ V²`).
6. Assuming pole-changing gives continuous speed — it's **discrete**.

### 📝 Test — Electrical Machines (8 Q)

**Q1 (MCQ).** The most common variable-speed method for induction motors is:
(a) rotor resistance (b) V/f control (c) pole changing (d) stator voltage

**Q2 (MCQ).** In V/f control, keeping V/f constant maintains constant:
(a) current (b) air-gap flux (c) slip (d) torque angle

**Q3 (MCQ).** In a double-cage rotor, the outer cage has:
(a) low R, high X (b) high R, low X (c) high R, high X (d) low R, low X

**Q4 (MCQ).** An induction machine driven above synchronous speed acts as a:
(a) motor (b) generator (c) transformer (d) brake

**Q5 (MCQ).** The slip of an induction generator is:
(a) positive (b) negative (c) zero (d) unity

**Q6 (NAT).** A 6-pole, 50 Hz motor at 400 V is run at 1/3 speed with constant flux. Find the required frequency (Hz).

**Q7 (NAT).** For Q6, find the required voltage (V).

**Q8 (NAT).** A 4-pole, 50 Hz induction machine is driven at 1545 rpm. Find the slip (%).

<details><summary>🔑 Solutions</summary>

**Q1 — (b) V/f control.**

**Q2 — (b) air-gap flux.**

**Q3 — (b) high R, low X.**

**Q4 — (b) generator.**

**Q5 — (b) negative.**

**Q6.** `f = 50/3 = 16.67 Hz`.

**Q7.** `V = 400 × (16.67/50) = 133.3 V`.

**Q8.** `Ns = 1500`; `s = (1500 − 1545)/1500 = −0.03 = −3%` (generating).

</details>

---

## 🔧 Power Electronics: DC-DC Choppers II — Buck-Boost, Cuk & Four-Quadrant

### 📖 Concept Deep Dive

**Buck-boost converter:** produces an output that can be **higher or lower** than the input, with **inverted polarity**:

```
Vo = −Vs·D/(1 − D)       ⇒   |Vo/Vs| = D/(1 − D)
D < 0.5 ⇒ step-down ;  D > 0.5 ⇒ step-up ;  D = 0.5 ⇒ |Vo| = Vs
```

**Cuk converter:** a buck-boost variant using a **capacitor** for energy transfer; it gives the **same voltage ratio** but with **continuous input and output current** (much lower ripple). Output is **inverted**.

**Chopper classes / quadrants** (voltage-current plane):

| Class | Quadrant(s) | Operation |
|---|---|---|
| **A** | I (+V, +I) | Motoring one direction |
| **B** | II (+V, −I) | **Regenerative** braking |
| **C** | I & II | Two-quadrant (A + B) |
| **D** | I & IV | Two-quadrant (voltage reverses) |
| **E** | **I, II, III, IV** | **Four-quadrant** (full motoring + braking both directions) |

> 💎 **KEY RESULT** — **Buck-boost / Cuk: `|Vo| = Vs·D/(1−D)`** (inverted output; step-up or step-down about `D = 0.5`). The **Cuk** adds **continuous, low-ripple** input/output current. **Class E** is the **four-quadrant** chopper.

**SMPS (Switched-Mode Power Supply):** high-frequency switching regulators (**buck, boost, buck-boost, flyback, forward, push-pull**) — far more **efficient and compact** than linear regulators, with **HF-transformer isolation** where needed.

> 🧠 **MEMORY HOOK** — "**Buck-boost/Cuk = D/(1−D), inverted**; Cuk = low ripple; **Class E = four quadrants**". SMPS = efficient HF switching supplies.

> ⚠️ **TRAP ALERT** — Buck-boost output is **inverted (negative)**, and `|Vo|` **diverges** as `D → 1`. The **Cuk** shares the same ratio but with **continuous current** (its advantage). Don't confuse two-quadrant (Class C/D) with **four-quadrant (Class E)**.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Buck-boost output | `Vo = −Vs·D/(1−D)` |
| Cuk output | `Vo = −Vs·D/(1−D)` (low ripple) |
| Magnitude ratio | `|Vo/Vs| = D/(1−D)` |
| Unity magnitude | at `D = 0.5` |
| Four-quadrant chopper | **Class E** |

### 🧮 Solved Examples

**Example 1 — Buck-boost output.** A buck-boost converter: `Vs = 100 V`, `D = 0.6`. Find the output voltage.

```
|Vo| = Vs·D/(1−D) = 100 × 0.6/0.4 = 100 × 1.5 = 150 V
Vo = −150 V  (inverted; step-up since D > 0.5)
```

**Example 2 — Duty for a target output.** For a buck-boost to give `|Vo| = Vs/2` (step-down by half), find the duty ratio.

```
D/(1−D) = 1/2 ⇒ 2D = 1 − D ⇒ 3D = 1 ⇒ D = 0.333
```

### ⚠️ Common Traps

1. Forgetting the buck-boost output is **inverted (negative)**.
2. Using `D·Vs` (buck) or `Vs/(1−D)` (boost) for a **buck-boost** — it's `D/(1−D)`.
3. Thinking Cuk has a different ratio — **same** ratio, lower ripple.
4. Confusing two-quadrant with **four-quadrant (Class E)**.
5. Operating buck-boost near `D → 1` (output diverges).
6. Treating SMPS as a linear regulator — it's **switching**.

### 📝 Test — Power Electronics (8 Q)

**Q1 (MCQ).** The output voltage ratio of a buck-boost converter is:
(a) D (b) 1/(1−D) (c) D/(1−D) (d) (1−D)/D

**Q2 (MCQ).** The buck-boost output polarity is:
(a) same as input (b) inverted (c) zero (d) AC

**Q3 (MCQ).** The Cuk converter's advantage over the buck-boost is:
(a) higher output (b) continuous low-ripple current (c) positive output (d) no switch

**Q4 (MCQ).** A four-quadrant chopper is:
(a) Class A (b) Class C (c) Class D (d) Class E

**Q5 (MCQ).** Regenerative braking in one direction is provided by chopper:
(a) Class A (b) Class B (c) Class E only (d) none

**Q6 (NAT).** A buck-boost converter: Vs = 60 V, D = 0.4. Find |Vo| (V).

**Q7 (NAT).** A Cuk converter gives |Vo| = 200 V from Vs = 100 V. Find the duty ratio D.

**Q8 (NAT).** A buck-boost converter has D = 0.75, Vs = 48 V. Find |Vo| (V).

<details><summary>🔑 Solutions</summary>

**Q1 — (c) D/(1−D).**

**Q2 — (b) inverted.**

**Q3 — (b) continuous low-ripple current.**

**Q4 — (d) Class E.**

**Q5 — (b) Class B.**

**Q6.** `|Vo| = Vs·D/(1−D) = 60 × 0.4/0.6 = 40 V`.

**Q7.** `D/(1−D) = 200/100 = 2 ⇒ D = 2(1−D) ⇒ 3D = 2 ⇒ D = 0.667`.

**Q8.** `|Vo| = 48 × 0.75/0.25 = 48 × 3 = 144 V`.

</details>

---

> 🧠 **DAY-36 WRAP** — Bridges: **Wheatstone `S = R·Q/P`** (medium R), **Kelvin** for low R (removes leads), **Megger** for insulation. Induction motor: **V/f keeps flux**, double-cage (**outer starts, inner runs**), driven above Ns ⇒ **generator (negative slip)**. Choppers: **buck-boost/Cuk `|Vo| = Vs·D/(1−D)`** (inverted), **Class E = four-quadrant**, SMPS = HF switching. Revise the boxed KEY RESULTS. ⚡
