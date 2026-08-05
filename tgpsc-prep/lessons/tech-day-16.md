# ⚡ GATE Technical Revision — Day 16 (2026-08-05)

*The AC bridges that measure inductance against capacitance, the two tests that unlock the induction motor's circle diagram, and the chopper that steps DC up or down.*

`📅 Tech Day 16  ·  ⏱ ~45 min  ·  🎯 Measurements + Machines + Power Electronics`

Attempt each section's test **before** opening its solutions — recall beats re-reading.

---

## 🔧 Measuring Instruments: AC Bridges I — Maxwell, Hay & Anderson

Day 15 covered DC bridges. **AC bridges** measure **inductance and capacitance** by balancing complex impedances — both **magnitude and phase** must balance, so there are **two balance equations**.

### 📖 Concept Deep Dive

**General AC bridge balance.** Four impedance arms `Z1, Z2, Z3, Z4` with an AC source and detector. At balance:

```
Z1·Z4 = Z2·Z3      (products of opposite arms equal, as complex numbers)
⇒ two real equations: magnitudes balance AND phase angles balance
```

**Maxwell's Inductance-Capacitance Bridge** — measures an **unknown inductance (L, R)** against a **standard capacitor**. The unknown `(R1, L1)` is in arm 1; a **parallel R-C** (`R4 || C4`) forms arm 4; `R2, R3` are non-inductive resistors. Balance gives:

```
L1 = R2·R3·C4
R1 = R2·R3/R4
Quality factor  Q = ωL1/R1 = ω·C4·R4
```

**Best for medium-Q coils (1 < Q < 10).** For **high-Q**, `R4` must be impractically large → use **Hay's bridge**. For **low-Q (< 1)**, balance convergence is poor → use **Anderson**.

**Hay's Bridge** — also L against C, but the standard has **R and C in SERIES** (arm). Suited to **high-Q** coils:

```
L1 = R2·R3·C4 / (1 + ω²C4²R4²)
R1 = ω²R2R3R4C4² / (1 + ω²C4²R4²)
For high Q (Q > 10):  L1 ≈ R2·R3·C4 ,  Q = 1/(ω C4 R4)
```

Note Hay's balance is **frequency-dependent** (ω appears), unlike Maxwell's (frequency-independent) — a key contrast.

**Anderson's Bridge** — a modification of Maxwell's with an **extra arm/junction (r)**; measures **inductance in terms of a standard capacitance** with excellent accuracy for **low-Q** coils. More complex balance (extra resistor `r`), but converges well and is accurate; harder to balance (more elements). Balance (one common form):

```
L1 = C·R3/R4 · [ r(R4 + R2) + R2·R4 ]   (form varies; verify per circuit)
R1 = R2R3/R4 − ... 
```
*(Derivation/exact form varies with the labelling — remember Anderson = accurate for LOW-Q, standard capacitor, extra arm.)*

| Bridge | Standard | Q range | Freq-dependent? |
|---|---|---|---|
| **Maxwell L-C** | parallel R-C | **medium** (1–10) | No |
| **Hay's** | series R-C | **high** (> 10) | **Yes** |
| **Anderson's** | capacitor + extra arm | **low** (< 1) | No |

> 💎 **KEY RESULT** — **Maxwell (parallel R-C): L1 = R2R3C4, Q = ωC4R4** — medium-Q, frequency-independent. **Hay (series R-C): high-Q, frequency-dependent, Q = 1/(ωC4R4)**. **Anderson: low-Q, accurate, extra arm.**

> 🧠 **MEMORY HOOK** — "**Maxwell = Medium Q (parallel RC); Hay = High Q (series RC, freq-dependent); Anderson = low-Q Accurate (extra arm).** All measure L via a standard C."

> ⚠️ **TRAP ALERT** — **Maxwell** uses a **parallel** R-C standard (medium Q, freq-independent); **Hay** uses a **series** R-C standard (high Q, freq-**dependent**). Swapping "series/parallel" or the Q-range is the classic trap.

### 📐 Formula Sheet

```
General balance:  Z1·Z4 = Z2·Z3 (complex)
Maxwell (parallel R4||C4):  L1 = R2 R3 C4 ;  R1 = R2 R3/R4 ;  Q = ωC4R4
Hay (series R4, C4):
  L1 = R2R3C4/(1+ω²C4²R4²) ;  Q = 1/(ωC4R4)
  high Q:  L1 ≈ R2R3C4
Anderson: low-Q, standard capacitor + extra arm r (accurate; complex balance)
```

### 🧮 Solved Examples

**Example 1 — Maxwell bridge.**
A Maxwell inductance-capacitance bridge balances with `R2 = 400 Ω`, `R3 = 600 Ω`, `C4 = 0.5 µF`, `R4 = 1000 Ω`, at ω corresponding to 50 Hz. Find `L1`, `R1`, and the Q of the coil.

```
L1 = R2·R3·C4 = 400 × 600 × 0.5e−6 = 240000 × 0.5e−6 = 0.12 H
R1 = R2·R3/R4 = 400 × 600/1000 = 240000/1000 = 240 Ω
ω = 2π×50 = 314.16 rad/s
Q = ωC4R4 = 314.16 × 0.5e−6 × 1000 = 314.16 × 0.5e−3 = 0.157
```
**L1 = 0.12 H, R1 = 240 Ω, Q ≈ 0.157** (a low-Q coil — Maxwell works but Anderson would be more accurate here).

**Example 2 — Hay's bridge high-Q approx.**
A Hay's bridge (high-Q coil) has `R2 = 1000 Ω`, `R3 = 1000 Ω`, `C4 = 1 µF`, `R4 = 100 Ω`, at 50 Hz. Estimate `L1` (high-Q approximation) and Q.

```
High-Q:  L1 ≈ R2·R3·C4 = 1000 × 1000 × 1e−6 = 1e6 × 1e−6 = 1.0 H
ω = 314.16 rad/s
Q = 1/(ωC4R4) = 1/(314.16 × 1e−6 × 100) = 1/(314.16 × 1e−4) = 1/0.031416 = 31.83
```
**L1 ≈ 1.0 H, Q ≈ 31.8** (high-Q — Hay's bridge is appropriate).

### ⚠️ Common Traps

1. **AC bridge needs TWO balance conditions** (magnitude + phase) because impedances are complex.
2. **Maxwell = parallel R-C (medium Q); Hay = series R-C (high Q)** — don't swap.
3. **Hay's balance is frequency-dependent** (ω in the equations); Maxwell's is not.
4. **Anderson = low-Q, accurate**, uses an **extra arm** — harder to balance.
5. **Q formulas differ:** Maxwell `Q = ωC4R4`; Hay `Q = 1/(ωC4R4)` — reciprocal relationship.
6. **L1 = R2R3C4** in both Maxwell (exact) and Hay (high-Q approx) — but Hay has the `(1+ω²C4²R4²)` factor exactly.

### 📝 Test — Measuring Instruments (8 Q)

1. **(MCQ)** An AC bridge is balanced when:
   (a) Z1 = Z2  (b) Z1·Z4 = Z2·Z3 (complex)  (c) Z1 + Z4 = Z2 + Z3  (d) all Z equal
2. **(MCQ)** Maxwell's inductance-capacitance bridge is best for coils of:
   (a) low Q  (b) medium Q  (c) very high Q  (d) zero Q
3. **(MCQ)** Hay's bridge is preferred for:
   (a) high-Q coils  (b) low-Q coils  (c) capacitors  (d) resistors
4. **(MCQ)** Which bridge's balance is frequency-dependent?
   (a) Maxwell  (b) Hay  (c) Wheatstone  (d) Kelvin
5. **(MCQ)** Anderson's bridge is a modification of the ______ bridge, for low-Q coils.
   (a) Maxwell  (b) Hay  (c) Schering  (d) Wien
6. **(NAT)** A Maxwell bridge: R2 = 500 Ω, R3 = 400 Ω, C4 = 0.4 µF. Find L1 in henry. ______ H
7. **(NAT)** For the bridge in Q6 with R4 = 800 Ω, find R1 in Ω. ______ Ω
8. **(NAT)** A Maxwell bridge has C4 = 0.5 µF, R4 = 2000 Ω, at ω = 314 rad/s. Find the coil Q. ______

<details>
<summary>🔑 Solutions</summary>

**1 → (b) Z1·Z4 = Z2·Z3.**

**2 → (b) medium Q.**

**3 → (a) high-Q coils.**

**4 → (b) Hay.**

**5 → (a) Maxwell.**

**6 →** L1 = R2R3C4 = 500 × 400 × 0.4e−6 = 200000 × 0.4e−6 = **0.08 H.**

**7 →** R1 = R2R3/R4 = 500 × 400/800 = 200000/800 = **250 Ω.**

**8 →** Q = ωC4R4 = 314 × 0.5e−6 × 2000 = 314 × 1e−3 = **0.314.**

</details>

---

## 🔧 Electrical Machines: Induction Motor III — No-Load & Blocked-Rotor Tests, Starting Methods

Day 15 gave the equivalent circuit. Now the two **tests** that find its parameters (like OC/SC tests on a transformer), plus **starting methods**.

### 📖 Concept Deep Dive

**No-Load Test (≈ transformer open-circuit test).** Motor runs at **rated voltage, no mechanical load** → **slip ≈ 0**, so `R2'/s → ∞` (rotor branch open). Input supplies **core loss + friction & windage + small no-load copper**. Gives the **magnetising branch** (Rc, Xm):

```
No-load: measure V0 (rated), I0, W0
No-load power  W0 = core loss + friction & windage (+ small stator Cu)
No-load pf  cosφ0 = W0/(√3 V0 I0)
Magnetising: Xm ≈ V0/(√3 I0 sinφ0) ; Rc ≈ V0²/(W0 − stator Cu)  [per-phase basis]
```

**Blocked-Rotor Test (≈ transformer short-circuit test).** Rotor **held stationary (blocked)**, **reduced voltage** applied to circulate **rated current**; slip = 1 so `R2'/s = R2'`. Magnetising branch negligible → gives **series impedance (R01, X01)**:

```
Blocked rotor: measure Vsc, Isc (= rated), Wsc
R01 = Wsc/(3 Isc²)   [equivalent resistance referred to stator, per phase]
Z01 = Vsc/(√3 Isc) ;  X01 = √(Z01² − R01²)
R2' = R01 − R1  (rotor resistance referred) ;  split X01 into X1, X2'
```

These give the **circle diagram** (locus of the stator current), from which **torque, output, efficiency, power factor and max values** can be read off graphically.

**Starting methods (limiting the high starting current).** At start, slip = 1, so starting current is **5–7× full-load**. Methods:

| Method | For | Starting torque | Note |
|---|---|---|---|
| **DOL (Direct-On-Line)** | small motors | full (∝ V²) | huge inrush |
| **Stator resistor/reactor** | — | reduced (∝ V²) | wastes power |
| **Star-Delta** | medium squirrel-cage | **1/3 of DOL** | current also 1/3 |
| **Auto-transformer** | large squirrel-cage | reduced by x² (tap x) | current reduced by x² |
| **Rotor-resistance** | **slip-ring (wound)** | **high** (up to Tmax) | best starting torque |

**Star-Delta key fact:** starting the motor in **star** applies `1/√3` of rated phase voltage, so **starting current and torque both drop to 1/3** of the DOL (delta) values:

```
Star-delta:  Ist(star)/Ist(delta) = 1/3 ;  Tst(star)/Tst(delta) = 1/3
```

**Rotor-resistance starting (slip-ring motors):** external resistance in the rotor raises **starting torque** (shifts sm toward 1) while limiting current — the best starting method for high-torque loads.

> 💎 **KEY RESULT** — **No-load test → magnetising branch (Rc, Xm) + rotational losses**; **blocked-rotor test → series R01, X01 (and R2')**. **Star-delta starting gives 1/3 the DOL current AND 1/3 the DOL torque**; **rotor resistance** gives the highest starting torque (slip-ring motors).

> 🧠 **MEMORY HOOK** — "**No-load = OC test (magnetising); blocked-rotor = SC test (series Z).** Star-delta = everything ÷3; rotor-resistance = best starting torque."

> ⚠️ **TRAP ALERT** — **Star-delta starting reduces starting torque to 1/3** (not just the current) — a drawback for high-inertia loads. **Blocked-rotor** is done at **reduced voltage** (rated current), the **no-load** test at **rated voltage**.

### 📐 Formula Sheet

```
No-load: W0 = core + friction&windage ; cosφ0 = W0/(√3 V0 I0)
Blocked-rotor: R01 = Wsc/(3 Isc²) ; Z01 = Vsc/(√3 Isc) ; X01 = √(Z01²−R01²)
Rotor referred resistance R2' = R01 − R1
Starting current DOL ≈ 5–7× full load
Star-delta: Ist,Y = (1/3) Ist,Δ ; Tst,Y = (1/3) Tst,Δ
Autotransformer (tap x): Ist ∝ x² ; Tst ∝ x²
Rotor resistance (slip-ring): raises Tst toward Tmax
```

### 🧮 Solved Examples

**Example 1 — blocked-rotor parameters.**
A 3-φ induction motor blocked-rotor test: `Vsc = 100 V (line)`, `Isc = 20 A (line, = rated)`, `Wsc = 1200 W (3-phase)`. Find R01 and X01 (per phase, star-equivalent).

```
R01 = Wsc/(3 Isc²) = 1200/(3 × 20²) = 1200/(3 × 400) = 1200/1200 = 1.0 Ω
Z01 = Vsc/(√3·Isc) = 100/(1.7320 × 20) = 100/34.64 = 2.887 Ω
X01 = √(Z01² − R01²) = √(2.887² − 1²) = √(8.335 − 1) = √7.335 = 2.708 Ω
```
**R01 = 1.0 Ω, X01 ≈ 2.71 Ω per phase.**

**Example 2 — star-delta starting.**
A squirrel-cage motor draws a DOL (delta) starting current of **90 A**. Find the starting current with a **star-delta starter**.

```
Star-delta:  Ist(star) = (1/3)·Ist(delta) = (1/3) × 90 = 30 A
```
**Starting current = 30 A** (and the starting torque is likewise 1/3 of the DOL value).

### ⚠️ Common Traps

1. **No-load test = rated voltage** (slip≈0, rotor branch open) → magnetising branch. **Blocked-rotor = reduced voltage** (slip=1) → series impedance.
2. **Star-delta reduces BOTH starting current and torque to 1/3** of DOL — the torque drop is a limitation.
3. **R01 = Wsc/(3 Isc²)** uses **per-phase** current squared × 3; watch line vs phase quantities.
4. **Rotor-resistance starting works only for slip-ring (wound-rotor)** motors, not squirrel-cage.
5. **Autotransformer starter: current & torque scale as x²** (x = tap ratio).
6. **No-load power includes friction & windage** (mechanical), unlike a transformer OC test — separate them if asked.

### 📝 Test — Electrical Machines (8 Q)

1. **(MCQ)** The no-load test on an induction motor gives the:
   (a) series impedance  (b) magnetising branch & rotational losses  (c) rotor resistance only  (d) slip
2. **(MCQ)** The blocked-rotor test is performed at:
   (a) rated voltage  (b) reduced voltage (rated current)  (c) zero voltage  (d) double voltage
3. **(MCQ)** Star-delta starting reduces the starting current to ______ of DOL.
   (a) 1/√3  (b) 1/3  (c) 1/2  (d) 1/9
4. **(MCQ)** Star-delta starting reduces the starting torque to ______ of DOL.
   (a) 1/√3  (b) 1/3  (c) 1/2  (d) full
5. **(MCQ)** Rotor-resistance starting is applicable to:
   (a) squirrel-cage motors  (b) slip-ring (wound-rotor) motors  (c) synchronous motors  (d) DC motors
6. **(NAT)** Blocked-rotor: Wsc = 900 W (3-φ), Isc = 15 A. Find R01 per phase in Ω. ______ Ω
7. **(NAT)** A motor's DOL starting current is 120 A. Find the star-delta starting current in A. ______ A
8. **(NAT)** An autotransformer starter uses a 60% tap. If DOL starting torque is 300 N·m, find the starting torque with the starter in N·m. ______ N·m

<details>
<summary>🔑 Solutions</summary>

**1 → (b).** Magnetising branch + rotational (core + friction/windage) losses.

**2 → (b) reduced voltage.**

**3 → (b) 1/3.**

**4 → (b) 1/3.**

**5 → (b) slip-ring (wound-rotor) motors.**

**6 →** R01 = Wsc/(3 Isc²) = 900/(3 × 15²) = 900/(3 × 225) = 900/675 = **1.33 Ω.**

**7 →** Ist(star) = 120/3 = **40 A.**

**8 →** Tst ∝ x² = 0.6² = 0.36 ⇒ Tst = 0.36 × 300 = **108 N·m.**

</details>

---

## 🔧 Power Electronics: DC-DC Choppers I — Buck (Step-Down) & Boost (Step-Up)

Day 15 finished AC voltage controllers. A **chopper** converts a **fixed DC** into a **variable DC** by switching (a DC transformer). Two basic types: **buck (step-down)** and **boost (step-up)**.

### 📖 Concept Deep Dive

**Duty cycle.** The switch is ON for `Ton` out of period `T`:

```
Duty cycle  D = Ton/T = Ton·f    (0 ≤ D ≤ 1) ,  f = 1/T (chopping frequency)
```

**Buck (step-down) chopper.** Switch in series with source; output **lower** than input. For a **continuous-conduction, ideal** buck (with LC filter, R load):

```
Vo(avg) = D·Vs        (0 → Vs as D: 0 → 1)
Io(avg) = Vo/R ;  ideally  Vs·Is = Vo·Io  ⇒  Is = D·Io  (power balance)
```

The output is **always ≤ Vs**. Ripple in inductor current; freewheeling diode carries current when switch is OFF.

**Boost (step-up) chopper.** Inductor in series with source, switch shunts to ground; output **higher** than input. Continuous conduction:

```
Vo(avg) = Vs/(1 − D)     (Vs → ∞ as D → 1)
Is = Io/(1 − D)   (input current > output current)
```

When the switch is ON, the inductor **stores** energy (source shorted through L); when OFF, the inductor's EMF **adds** to Vs, boosting the output through the diode into the capacitor/load.

**Control strategies:**
- **TRC (Time-Ratio Control / PWM):** vary D by varying `Ton` (or the ratio) — **constant frequency** (most common) or variable Ton.
- **CLC (Current-Limit Control):** switch ON/OFF between set current limits — variable frequency.

**Control-strategy sub-types of TRC:**

```
Constant-frequency (PWM): f fixed, Ton varied  ⇒ D varied  (preferred)
Variable-frequency (FM): Ton or Toff fixed, f varied  (wide freq range, filter issues)
```

**Chopper classes (quadrants):** Class A (1-quadrant, +V+I), Class B (regen), Class C (2-quadrant), Class D, Class E (4-quadrant) — covered later.

| Chopper | Vo | Range | Use |
|---|---|---|---|
| **Buck** | D·Vs | 0 → Vs (step-down) | DC drives, SMPS |
| **Boost** | Vs/(1−D) | Vs → ∞ (step-up) | PV, battery boost |

> 💎 **KEY RESULT** — **Buck: Vo = D·Vs** (step-down, ≤ Vs). **Boost: Vo = Vs/(1−D)** (step-up, ≥ Vs). Duty `D = Ton/T`. **TRC/PWM** (constant freq) is the usual control; **CLC** switches between current limits.

> 🧠 **MEMORY HOOK** — "**Buck = D·Vs (down); Boost = Vs/(1−D) (up).** D from 0→1: buck goes 0→Vs, boost goes Vs→∞."

> ⚠️ **TRAP ALERT** — **Boost output = Vs/(1−D)**, not (1+D)Vs — as D→1 it diverges (limited by losses in reality). Power balance means **input current exceeds output current** in a boost (Is = Io/(1−D)).

### 📐 Formula Sheet

```
Duty cycle  D = Ton/T = Ton·f
Buck:   Vo = D·Vs ;  Is = D·Io (ideal) ;  Vo ≤ Vs
Boost:  Vo = Vs/(1−D) ;  Is = Io/(1−D) ;  Vo ≥ Vs
Ideal power balance: Vs·Is = Vo·Io
TRC/PWM: constant f, vary Ton ; CLC: switch between current limits
Buck-boost (preview): Vo = D·Vs/(1−D)
```

### 🧮 Solved Examples

**Example 1 — buck chopper.**
A step-down chopper feeds from `Vs = 200 V` at a duty cycle `D = 0.4`, load `R = 10 Ω`. Find the average output voltage, current, and the source current.

```
Vo = D·Vs = 0.4 × 200 = 80 V
Io = Vo/R = 80/10 = 8 A
Is (avg, ideal) = D·Io = 0.4 × 8 = 3.2 A   (check power: Vs·Is = 200×3.2 = 640 W = Vo·Io = 80×8 = 640 W ✓)
```
**Vo = 80 V, Io = 8 A, Is = 3.2 A.**

**Example 2 — boost chopper.**
A boost chopper has `Vs = 48 V` and duty `D = 0.25`. Find the output voltage, and the input current if the output current is `Io = 3 A`.

```
Vo = Vs/(1 − D) = 48/(1 − 0.25) = 48/0.75 = 64 V
Is = Io/(1 − D) = 3/0.75 = 4 A
   (check: Vs·Is = 48×4 = 192 W ; Vo·Io = 64×3 = 192 W ✓)
```
**Vo = 64 V, Is = 4 A.**

### ⚠️ Common Traps

1. **Buck Vo = D·Vs; Boost Vo = Vs/(1−D)** — don't mix the formulas.
2. **Boost step-UP diverges as D→1** (Vs/(1−D)); it's never (1+D)Vs.
3. **In a boost, input current > output current** (Is = Io/(1−D)) — power balance.
4. **Duty cycle D = Ton/T** is dimensionless (0–1); at D = 0.5 buck gives Vs/2, boost gives 2Vs.
5. **TRC = constant-frequency PWM** (usual); **CLC = variable-frequency** current-limit control.
6. **These are ideal (lossless) relations** — real converters have lower boost gain due to losses.

### 📝 Test — Power Electronics (8 Q)

1. **(MCQ)** For a step-down (buck) chopper, the output voltage is:
   (a) Vs/(1−D)  (b) D·Vs  (c) (1+D)Vs  (d) Vs/D
2. **(MCQ)** For a step-up (boost) chopper, the output voltage is:
   (a) D·Vs  (b) Vs/(1−D)  (c) (1−D)Vs  (d) Vs·D/(1−D)
3. **(MCQ)** The duty cycle of a chopper is:
   (a) Ton/T  (b) T/Ton  (c) Toff/T  (d) f·T
4. **(MCQ)** In a boost chopper, the input current compared to output current is:
   (a) smaller  (b) larger  (c) equal  (d) zero
5. **(MCQ)** Constant-frequency control of a chopper is called:
   (a) CLC  (b) TRC/PWM  (c) FM  (d) phase control
6. **(NAT)** A buck chopper: Vs = 120 V, D = 0.6. Find Vo in volts. ______ V
7. **(NAT)** A boost chopper: Vs = 30 V, D = 0.4. Find Vo in volts. ______ V
8. **(NAT)** A buck chopper Vs = 100 V, D = 0.3, R = 5 Ω. Find the load current in A. ______ A

<details>
<summary>🔑 Solutions</summary>

**1 → (b) D·Vs.**

**2 → (b) Vs/(1−D).**

**3 → (a) Ton/T.**

**4 → (b) larger.** Is = Io/(1−D).

**5 → (b) TRC/PWM.**

**6 →** Vo = D·Vs = 0.6 × 120 = **72 V.**

**7 →** Vo = Vs/(1−D) = 30/(1−0.4) = 30/0.6 = **50 V.**

**8 →** Vo = 0.3 × 100 = 30 V ; Io = Vo/R = 30/5 = **6 A.**

</details>

---

`✅ Day 16 complete — AC bridges I (Maxwell/Hay/Anderson), induction motor III (no-load & blocked-rotor tests, star-delta & rotor-resistance starting), and DC-DC choppers I (buck Vo=D·Vs, boost Vo=Vs/(1−D)). Tomorrow: AC bridges II (Schering/Wien), induction motor IV (speed control), and choppers II (buck-boost & four-quadrant).`

*Correctness over length — re-derive any result you're unsure of and mark "verify" before the exam.*
