# ⚡ GATE Technical Revision — Day 73 (2026-10-02)

*Measurements does three-phase power (Blondel & the two-wattmeter method), Machines covers the induction-motor tests, circle diagram & starters, and Power Electronics begins DC-DC choppers (buck & boost).*

📅 Tech Day 73 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics · 🔁 Round 4 (all three sections)

> 🧠 **MEMORY HOOK** — Today: **two-wattmeter method** (`P = W1+W2`, `tanφ = √3(W1−W2)/(W1+W2)`), **induction-motor tests** (no-load + blocked-rotor → circle diagram; **star-delta cuts starting current to 1/3**), and **choppers** (buck `Vo = D·Vs`, boost `Vo = Vs/(1−D)`).

---

## 🔧 Measuring Instruments: Measurement of Power II — Three-Phase Power & the Two-Wattmeter Method

### 📖 Concept Deep Dive

**Blondel's theorem.** In an **n-wire** system, the total power can be measured with **(n − 1) wattmeters**. So:
- **3-phase, 3-wire** ⇒ **2 wattmeters**.
- **3-phase, 4-wire** ⇒ **3 wattmeters**.

**Two-wattmeter method (3-φ, 3-wire).** Current coils in two lines (say R, Y), pressure coils to the third line (B). The **sum reads total power for any pf, balanced or unbalanced**:
```
P(total) = W1 + W2
```
For a **balanced** load (line voltage `VL`, line current `IL`, pf angle `φ`):
```
W1 = VL·IL·cos(30° − φ)
W2 = VL·IL·cos(30° + φ)
W1 + W2 = √3·VL·IL·cosφ = P
W1 − W2 = VL·IL·sinφ
⇒  tanφ = √3·(W1 − W2)/(W1 + W2)
Reactive power:  Q = √3·(W1 − W2)
```

**Power-factor sign cases (balanced):**
| Condition | Readings |
|---|---|
| `φ = 0` (upf) | `W1 = W2` (both equal, positive) |
| `φ = 60°` (pf 0.5) | `W2 = 0` (one reads zero) |
| `φ > 60°` (pf < 0.5) | **`W2` negative** — reverse it and subtract |
| `φ = 90°` (pure reactive) | `W1 = −W2` (sum = 0) |

> 💎 **KEY RESULT** — Blondel: **(n−1)** wattmeters. Two-wattmeter: `P = W1+W2`, `tanφ = √3(W1−W2)/(W1+W2)`, `Q = √3(W1−W2)`. At **φ = 60°** one wattmeter reads **zero**; beyond 60° it goes **negative**.

> 🧠 **MEMORY HOOK** — **"Sum = power, √3×difference = reactive."** One wattmeter hits zero at **pf 0.5 (φ = 60°)** and goes negative below it.

> ⚠️ **TRAP ALERT** — `W1 + W2` gives true power even for **unbalanced** loads (Blondel); the `tanφ` formula assumes a **balanced** load. A **negative** reading (φ > 60°) must be **subtracted**, not ignored.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Blondel's theorem | wattmeters = `n − 1` |
| Total power | `P = W1 + W2` |
| Power factor angle | `tanφ = √3(W1−W2)/(W1+W2)` |
| Reactive power | `Q = √3(W1 − W2)` |
| W1, W2 (balanced) | `VL IL cos(30°∓φ)` |

### 🧮 Solved Examples

**Example 1 — pf from two wattmeters.**
`W1 = 2000 W`, `W2 = 1000 W`. Find total power and power factor.

```
P = W1 + W2 = 3000 W
tanφ = √3(W1−W2)/(W1+W2) = √3(1000/3000) = 1.732 × 0.3333 = 0.577
φ = 30° ⇒ cosφ = 0.866 (lagging)
```

**Example 2 — Negative reading.**
`W1 = 1500 W`, `W2 = −300 W`. Find total power and pf.

```
P = 1500 + (−300) = 1200 W
tanφ = √3(1500−(−300))/(1500+(−300)) = √3(1800/1200) = 1.732×1.5 = 2.598
φ = 68.95° ⇒ cosφ = 0.358 (low pf, hence W2 negative)
```

### ⚠️ Common Traps

1. **W1 + W2 works for unbalanced loads too** (Blondel); the pf formula needs balance.
2. **W2 = 0 at φ = 60°** (pf 0.5); negative below that.
3. **Subtract the negative reading** — reverse connection to read it.
4. **Q = √3(W1 − W2)** — reactive power from the difference.
5. **3-wire → 2 wattmeters; 4-wire → 3** (Blondel).
6. **cos(30 ∓ φ)** — W1 uses (30−φ), W2 uses (30+φ) for lagging pf.

### 📝 Test (5 MCQ + 3 NAT)

**Q1 (MCQ).** For a 3-phase 3-wire system, the number of wattmeters needed is:
(a) 1 (b) 2 (c) 3 (d) 4

**Q2 (MCQ).** In the two-wattmeter method, one wattmeter reads zero when pf is:
(a) 1.0 (b) 0.866 (c) 0.5 (d) 0

**Q3 (MCQ).** Total 3-phase power equals:
(a) W1 − W2 (b) W1 + W2 (c) √3(W1+W2) (d) W1·W2

**Q4 (MCQ).** Reactive power from two wattmeters is:
(a) W1 + W2 (b) √3(W1 − W2) (c) W1 − W2 (d) √3(W1 + W2)

**Q5 (MCQ).** A negative wattmeter reading indicates pf:
(a) unity (b) > 0.5 (c) < 0.5 (d) zero

**Q6 (NAT).** W1 = 800 W, W2 = 400 W. Find the total power (W).

**Q7 (NAT).** For Q6, find tanφ.

**Q8 (NAT).** W1 = 1000 W, W2 = 1000 W. Find the power factor.

<details><summary>🔑 Solutions</summary>

**Q1 — (b) 2.**

**Q2 — (c) 0.5.** (φ = 60°)

**Q3 — (b) W1 + W2.**

**Q4 — (b) √3(W1 − W2).**

**Q5 — (c) < 0.5.**

**Q6 — 1200 W.** `800 + 400 = 1200`.

**Q7 — 0.577.** `√3(400/1200) = 1.732×0.333 = 0.577`.

**Q8 — 1.0 (unity).** `W1 = W2 ⇒ tanφ = 0 ⇒ φ = 0 ⇒ cosφ = 1`.
</details>

---

## 🔧 Electrical Machines: Induction Motor III — Tests, Circle Diagram & Starting Methods

### 📖 Concept Deep Dive

**No-load test (≈ open-circuit).** Rated voltage applied, motor runs **unloaded**. Slip ≈ 0, so rotor branch is nearly open; the input supplies **core loss + friction & windage** (constant losses) and gives the **magnetising (shunt) branch** `R0, X0`.
```
No-load pf is low;  cosφ0 = W0/(√3·VL·I0)
```

**Blocked-rotor test (≈ short-circuit).** Rotor **held stationary**, **reduced voltage** applied to circulate **rated current**. Slip = 1, so the magnetising branch is negligible; the input gives the **copper losses** and the **equivalent series impedance** `R(eq), X(eq)`:
```
R(eq) = W(sc)/(3·I(sc)²) ,  Z(eq) = V(sc)/(√3·I(sc)) ,  X(eq) = √(Z(eq)² − R(eq)²)
```

**Circle diagram.** From the no-load and blocked-rotor data, a **graphical circle** is drawn whose geometry yields **line current, power factor, torque, output, efficiency and slip** at any load — a classic design/analysis tool.

**Starting methods.** At start `s = 1`, so the motor draws a **high inrush current (5-7× full-load)** at low pf. To limit it:
- **DOL (Direct-On-Line)** — small motors only.
- **Star-Delta starter** — start in **star**, run in **delta**; reduces **starting current and torque to `1/3`** of the DOL (delta) values.
- **Auto-transformer starter** — tapping fraction `x` reduces starting **current and torque by `x²`**.
- **Rotor-resistance starter** — for **slip-ring (wound-rotor)** motors; adds external rotor resistance to **boost starting torque** and cut current.
- **Soft starter / VFD** — electronic ramp.

> 💎 **KEY RESULT** — **No-load test** → core loss + magnetising branch; **blocked-rotor test** → copper loss + equivalent impedance. **Star-delta** cuts starting current & torque to **1/3**; **auto-transformer** (tap x) by **x²**; **rotor resistance** boosts starting torque (wound rotor).

> 🧠 **MEMORY HOOK** — **"No-load = iron (shunt branch); blocked-rotor = copper (series branch)"** — exactly like a transformer's OC/SC tests. Star-delta ⇒ **÷3**, auto-transformer ⇒ **×x²**.

> ⚠️ **TRAP ALERT** — Star-delta reduces starting **torque** to 1/3 as well (not just current) — unsuitable for high-starting-torque loads. **Rotor-resistance starting works only for wound-rotor** (slip-ring) motors, not squirrel-cage.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| No-load pf | `cosφ0 = W0/(√3 VL I0)` |
| Blocked-rotor R(eq) | `W(sc)/(3 I(sc)²)` |
| Blocked-rotor Z(eq) | `V(sc)/(√3 I(sc))` |
| Star-delta start current/torque | `1/3` of DOL |
| Auto-transformer (tap x) | current & torque `× x²` |
| Starting inrush | `5-7 ×` full-load current |

### 🧮 Solved Examples

**Example 1 — Blocked-rotor equivalent resistance.**
Blocked-rotor test: `Vsc = 100 V (line)`, `Isc = 20 A (line)`, `Wsc = 1200 W (3-φ)`. Find `R(eq)` and `Z(eq)` per phase.

```
R(eq) = Wsc/(3·Isc²) = 1200/(3×20²) = 1200/1200 = 1 Ω
Z(eq) = Vsc/(√3·Isc) = 100/(1.732×20) = 100/34.64 = 2.887 Ω
X(eq) = √(Z² − R²) = √(2.887² − 1²) = √(8.33 − 1) = √7.33 = 2.71 Ω
```

**Example 2 — Star-delta starting current.**
A motor draws `60 A` on DOL starting (delta). Find the starting current with a star-delta starter.

```
Ist(star-delta) = (1/3)·Ist(DOL) = 60/3 = 20 A
(Starting torque is also reduced to 1/3 of the DOL value.)
```

### ⚠️ Common Traps

1. **No-load vs blocked-rotor** — iron/shunt vs copper/series (transformer analogy).
2. **Star-delta reduces torque too** (to 1/3) — not just current.
3. **Rotor-resistance starting: wound-rotor only.**
4. **Auto-transformer: x² reduction** in both current and torque.
5. **Starting inrush 5-7× FL** — the reason starters exist.
6. **Blocked-rotor at reduced voltage** — set for rated current, not rated voltage.

### 📝 Test (5 MCQ + 3 NAT)

**Q1 (MCQ).** The no-load test on an induction motor gives:
(a) copper loss (b) core loss & magnetising branch (c) equivalent impedance (d) slip

**Q2 (MCQ).** The blocked-rotor test is analogous to the transformer's:
(a) OC test (b) SC test (c) polarity test (d) load test

**Q3 (MCQ).** A star-delta starter reduces starting current to:
(a) 1/√3 (b) 1/3 (c) 1/2 (d) 1/9 of DOL

**Q4 (MCQ).** Rotor-resistance starting is used for:
(a) squirrel-cage motors (b) slip-ring (wound-rotor) motors (c) all motors (d) DC motors

**Q5 (MCQ).** An auto-transformer starter with tapping x reduces starting torque by:
(a) x (b) x² (c) √x (d) 1/x

**Q6 (NAT).** Blocked-rotor: Wsc = 900 W (3-φ), Isc = 15 A. Find R(eq) per phase (Ω).

**Q7 (NAT).** A motor draws 45 A on DOL start. Find the star-delta starting current (A).

**Q8 (NAT).** Auto-transformer tapping x = 0.6. Find the fraction of DOL starting torque.

<details><summary>🔑 Solutions</summary>

**Q1 — (b) core loss & magnetising branch.**

**Q2 — (b) SC test.**

**Q3 — (b) 1/3.**

**Q4 — (b) slip-ring (wound-rotor).**

**Q5 — (b) x².**

**Q6 — 1.33 Ω.** `R(eq) = 900/(3×15²) = 900/675 = 1.333 Ω`.

**Q7 — 15 A.** `45/3 = 15 A`.

**Q8 — 0.36.** `x² = 0.6² = 0.36`.
</details>

---

## 🔧 Power Electronics: DC-DC Choppers I — Step-Down (Buck) & Step-Up (Boost)

### 📖 Concept Deep Dive

A **DC-DC chopper** converts a fixed DC input into a **variable DC output** by switching at high frequency with **duty ratio**:
```
Duty ratio  D = ton/T = ton·f    (0 ≤ D ≤ 1)
```

**Step-down (buck) chopper.** The switch connects the source to the load for `ton` and disconnects for `toff`; an LC filter smooths the output:
```
Vo = D·Vs        (Vo ≤ Vs)
Io = Vo/R ;   average input current = D·Io (ideal, lossless)
```

**Step-up (boost) chopper.** An inductor stores energy when the switch is ON and releases it (in series with the source) to the load when OFF, so the output **exceeds** the input:
```
Vo = Vs/(1 − D)        (Vo ≥ Vs)
```

**Control strategies:**
- **Time-Ratio Control (TRC):**
  - **Constant-frequency (PWM):** fix `T`, vary `ton` (most common; constant switching frequency, easy filtering).
  - **Variable-frequency (FM):** fix `ton` or `toff`, vary `f` — causes a wide frequency range and filter difficulty.
- **Current-Limit Control (CLC):** the switch toggles between preset **upper/lower current limits** (hysteresis) — inherent current limiting.

**Quadrants.** A basic buck/boost is **one-quadrant**; adding switches gives two- and four-quadrant choppers (type A-E) for motor drives (regenerative braking).

| Chopper | Output | Relation |
|---|---|---|
| Buck (step-down) | `Vo ≤ Vs` | `Vo = D·Vs` |
| Boost (step-up) | `Vo ≥ Vs` | `Vo = Vs/(1−D)` |

> 💎 **KEY RESULT** — **Buck:** `Vo = D·Vs`; **Boost:** `Vo = Vs/(1−D)`; `D = ton/T = ton·f`. **TRC** = constant-frequency PWM (preferred) or variable-frequency; **CLC** = hysteresis current control.

> 🧠 **MEMORY HOOK** — **"Buck: multiply by D (down); Boost: divide by (1−D) (up)."** Constant-frequency PWM keeps the filter simple.

> ⚠️ **TRAP ALERT** — Buck `Vo = D·Vs` (always ≤ Vs); boost `Vo = Vs/(1−D)` (always ≥ Vs, → ∞ as D→1). **Constant-frequency PWM** is the usual TRC; variable-frequency complicates filtering and can cause interference.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Duty ratio | `D = ton/T = ton·f` |
| Buck output | `Vo = D·Vs` |
| Boost output | `Vo = Vs/(1 − D)` |
| Buck output current | `Io = Vo/R` |
| TRC (PWM) | constant T, vary ton |

### 🧮 Solved Examples

**Example 1 — Buck chopper.**
A buck chopper: `Vs = 100 V`, switching at `1 kHz` with `ton = 0.4 ms`. Find the duty ratio and output voltage.

```
T = 1/f = 1/1000 = 1 ms ; D = ton/T = 0.4/1 = 0.4
Vo = D·Vs = 0.4 × 100 = 40 V
```

**Example 2 — Boost chopper.**
A boost chopper: `Vs = 48 V`, `D = 0.25`. Find the output voltage.

```
Vo = Vs/(1 − D) = 48/(1 − 0.25) = 48/0.75 = 64 V
(Output > input, as expected for a boost.)
```

### ⚠️ Common Traps

1. **Buck vs boost formula** — `D·Vs` vs `Vs/(1−D)`.
2. **D is dimensionless** — `ton/T` or `ton·f`.
3. **Boost → ∞ as D → 1** — practically limited by losses.
4. **Constant-frequency PWM preferred** (easy filter); variable-frequency is harder.
5. **Buck output ≤ Vs always**; boost output ≥ Vs always.
6. **One-quadrant basic chopper** — needs extra switches for regeneration.

### 📝 Test (5 MCQ + 3 NAT)

**Q1 (MCQ).** A buck chopper output voltage is:
(a) Vs/(1−D) (b) D·Vs (c) Vs/D (d) (1−D)Vs

**Q2 (MCQ).** A boost chopper output voltage is:
(a) D·Vs (b) Vs/(1−D) (c) (1−D)Vs (d) Vs·D/(1−D)

**Q3 (MCQ).** The duty ratio D equals:
(a) toff/T (b) ton/T (c) T/ton (d) ton·toff

**Q4 (MCQ).** Constant-frequency control of a chopper is called:
(a) CLC (b) PWM/TRC (c) FM (d) PFM

**Q5 (MCQ).** A buck chopper output is always:
(a) ≥ Vs (b) ≤ Vs (c) = Vs (d) negative

**Q6 (NAT).** Buck chopper: Vs = 200 V, D = 0.6. Find Vo (V).

**Q7 (NAT).** Boost chopper: Vs = 60 V, D = 0.4. Find Vo (V).

**Q8 (NAT).** A chopper at 2 kHz with ton = 0.2 ms. Find the duty ratio.

<details><summary>🔑 Solutions</summary>

**Q1 — (b) D·Vs.**

**Q2 — (b) Vs/(1−D).**

**Q3 — (b) ton/T.**

**Q4 — (b) PWM/TRC.**

**Q5 — (b) ≤ Vs.**

**Q6 — 120 V.** `Vo = 0.6 × 200 = 120 V`.

**Q7 — 100 V.** `Vo = 60/(1−0.4) = 60/0.6 = 100 V`.

**Q8 — 0.4.** `T = 1/2000 = 0.5 ms ; D = 0.2/0.5 = 0.4`.
</details>

---

### 📊 GATE Tech Coverage Progress

```
Measuring Instruments  ██████████░░░░░░░░░░  10/21  🔁 Round 4
Electrical Machines    ████████████░░░░░░░░  12/19  🔁 Round 4
Power Electronics      ████████████░░░░░░░░  12/18  🔁 Round 4
```

*Next: Measurements → Measurement of energy (induction energy meter); Machines → Induction motor IV (speed control, double-cage); Power Electronics → DC-DC choppers II (buck-boost, Cuk, SMPS).*

> ✅ **Self-check before you close:** Can you (1) state Blondel's theorem and the two-wattmeter pf formula, (2) say what the no-load & blocked-rotor tests give and the star-delta 1/3 rule, and (3) write the buck and boost output equations? Re-read any KEY RESULT that felt shaky.
