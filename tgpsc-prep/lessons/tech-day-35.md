# ⚡ GATE Technical Revision — Day 35 (2026-08-24)

*Three subjects, one sitting — the potential transformer, induction-motor testing & starting, and the DC chopper.*

📅 Tech Day 35 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics

> 🧠 **MEMORY HOOK** — Today is **"step down voltage, test & start the motor, and chop the DC"**: the **PT** (never short it!), the induction motor's **no-load/blocked-rotor tests** and **star-delta starting**, and the **buck/boost chopper**.

---

## 🔧 Measuring Instruments: Instrument Transformers — Potential Transformer (PT)

### 📖 Concept Deep Dive

A **Potential (Voltage) Transformer (PT)** steps a high line voltage down to a standard low value (usually **110 V**) for voltmeters, wattmeters, and relays. Its **primary** (many turns) is connected **across the line**; its **secondary** feeds a **high-impedance** meter (low burden). It is essentially a **small, accurate step-down transformer** operating near **no load**.

**Errors:** the winding resistances/reactances and the exciting current cause small voltage drops, giving a **ratio (voltage) error** and a **phase-angle error**:

```
Nominal ratio  Kn = Vp(rated)/Vs(rated)
Actual ratio   R = Vp/Vs
Ratio error    = (Kn − R)/R × 100%
```

**PT vs CT — the key contrasts:**

| Feature | PT (voltage) | CT (current) |
|---|---|---|
| Primary connection | **Across** the line (parallel) | **In series** with the line |
| Secondary condition | Near **open** (high-Z meter) | Near **short** (low-Z meter) |
| Must NEVER be | **short-circuited** | **open-circuited** |
| Flux | ~constant (like normal transformer) | varies with burden |
| Secondary voltage | ~110 V standard | (current) 5 A / 1 A standard |

> 💎 **KEY RESULT** — A **PT must never be short-circuited** (huge current), while a **CT must never be open-circuited** (huge voltage). The PT works at **nearly constant flux** like an ordinary transformer; the CT's flux depends on the burden.

> ⚠️ **TRAP ALERT** — Reverse of the CT rule: **short-circuiting a PT secondary** draws destructive current. Keep PT **burden low** for accuracy; for very high voltages a **Capacitor Voltage Transformer (CVT)** is used instead of a purely electromagnetic PT.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Nominal ratio | `Kn = Vp/Vs (rated)` |
| Actual ratio | `R = Vp/Vs (actual)` |
| Ratio error | `= (Kn − R)/R × 100%` |
| Standard secondary | `≈ 110 V` |
| Rule | PT: never short; CT: never open |

### 🧮 Solved Examples

**Example 1 — PT ratio error.** An `11000/110 V` PT (`Kn = 100`) actually gives `108.9 V` secondary for `11000 V` primary. Find the actual ratio and ratio error.

```
R = Vp/Vs = 11000/108.9 = 101.01
Ratio error = (Kn − R)/R × 100 = (100 − 101.01)/101.01 × 100 = −1.0%
```

**Example 2 — Nominal ratio & reading.** A `6600/110 V` PT feeds a voltmeter reading `105 V`. Estimate the line voltage (ignoring error).

```
Kn = 6600/110 = 60
Line voltage ≈ Kn × Vs = 60 × 105 = 6300 V
```

### ⚠️ Common Traps

1. **Short-circuiting** a PT secondary — destructive (opposite of CT).
2. Confusing PT (parallel, don't short) with CT (series, don't open).
3. Using high burden — increases PT errors.
4. Forgetting the standard PT secondary is **110 V**.
5. Treating PT ratio as exact (ignoring ratio/phase-angle error).
6. Using an ordinary PT at EHV where a **CVT** is standard.

### 📝 Test — Measuring Instruments (8 Q)

**Q1 (MCQ).** A PT primary is connected:
(a) in series with the line (b) across the line (c) to earth (d) to the CT

**Q2 (MCQ).** A PT secondary must never be:
(a) open-circuited (b) short-circuited (c) earthed (d) loaded

**Q3 (MCQ).** The standard PT secondary voltage is about:
(a) 5 V (b) 110 V (c) 230 V (d) 415 V

**Q4 (MCQ).** Compared with a power transformer, a PT is designed for:
(a) maximum power (b) high accuracy at low burden (c) high current (d) heating

**Q5 (MCQ).** For very high voltages, the device preferred over an electromagnetic PT is a:
(a) CT (b) CVT (capacitor voltage transformer) (c) shunt (d) multiplier

**Q6 (NAT).** A 33000/110 V PT gives 109 V for 33000 V primary. Find the ratio error (%) (Kn based).

**Q7 (NAT).** A 6600/110 PT feeds a voltmeter reading 108 V. Estimate the line voltage (V), ignoring error.

**Q8 (NAT).** A PT has nominal ratio 200 and actual ratio 202. Find the ratio error (%).

<details><summary>🔑 Solutions</summary>

**Q1 — (b) across the line.**

**Q2 — (b) short-circuited.**

**Q3 — (b) 110 V.**

**Q4 — (b) high accuracy at low burden.**

**Q5 — (b) CVT.**

**Q6.** `Kn = 33000/110 = 300`; `R = 33000/109 = 302.75`; error = `(300 − 302.75)/302.75 × 100 = −0.91%`.

**Q7.** `Kn = 60`; line ≈ `60 × 108 = 6480 V`.

**Q8.** `(Kn − R)/R × 100 = (200 − 202)/202 × 100 = −0.99%`.

</details>

---

## 🔧 Electrical Machines: Induction Motor III — Tests, Circle Diagram & Starting

### 📖 Concept Deep Dive

Two tests characterise a 3-phase induction motor (analogous to a transformer's OC/SC tests):

| Test | Condition | Gives |
|---|---|---|
| **No-load test** | Rated voltage, no mechanical load | **Core loss + friction & windage**; magnetising branch |
| **Blocked-rotor test** | Rotor blocked (`s = 1`), reduced voltage, rated current | **Equivalent impedance** (`R01`, `X01`) and copper losses |

**No-load:** `W0 = √3·VL·IL·cosφ0`; the input supplies core loss + friction/windage + small stator copper. **Blocked-rotor:** with `Vsc`, `Isc`, `Wsc`:

```
Zeq = Vsc/Isc ,  Req = Wsc/Isc² ,  Xeq = √(Zeq² − Req²)   (referred to stator)
```

The **circle diagram** is drawn from the no-load and blocked-rotor data; it graphically yields the **torque, output, efficiency, slip, and power factor** at any load.

**Starting methods** (induction motors draw **5–7× rated current** at DOL start):

| Starter | Effect |
|---|---|
| **Direct-on-line (DOL)** | Full voltage; only for small motors |
| **Star-delta** | Start in **star** (V/√3), run in **delta**; starting current & torque become **1/3** of DOL |
| **Auto-transformer** | Reduced voltage `x·V`: starting current & torque become **x²** of DOL |
| **Rotor resistance** (slip-ring) | External rotor R **cuts starting current** and **boosts starting torque** |

> 💎 **KEY RESULT** — With a **star-delta** starter, both the **starting current and the starting torque fall to 1/3** of their DOL values. With an **auto-transformer** at tapping `x`, they fall to **x²**. Slip-ring motors uniquely **raise starting torque** by adding rotor resistance.

> 🧠 **MEMORY HOOK** — "**No-load = core+friction; blocked-rotor = copper+impedance**". Star-delta → **1/3, 1/3**; auto-transformer → **x², x²**. Rotor resistance = more starting torque.

> ⚠️ **TRAP ALERT** — Star-delta reduces starting **torque** to 1/3 too (not just current) — unsuitable for high-starting-torque loads. Only the **slip-ring (rotor-resistance)** method **increases** starting torque.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| No-load power | `W0 = √3·VL·IL·cosφ0` |
| Blocked-rotor impedance | `Zeq = Vsc/Isc`, `Req = Wsc/Isc²`, `Xeq = √(Zeq²−Req²)` |
| Star-delta start | `Ist = (1/3)·Ist(DOL)` , `Tst = (1/3)·Tst(DOL)` |
| Auto-transformer (tap x) | `Ist = x²·Ist(DOL)` , `Tst = x²·Tst(DOL)` |
| Torque ratio | `Tst/Tfl = (Ist/Ifl)²·sfl` |

### 🧮 Solved Examples

**Example 1 — Star-delta starting current.** An induction motor's DOL starting current is `6×` full-load current. Find the starting current with a **star-delta** starter.

```
Star-delta: Ist = (1/3)·Ist(DOL) = (1/3)×6 = 2× full-load current
(Starting torque also becomes 1/3 of the DOL starting torque.)
```

**Example 2 — Auto-transformer tapping.** For the same motor, an **auto-transformer** starter at a `60%` tap (`x = 0.6`) is used. Find the starting current.

```
Ist = x²·Ist(DOL) = (0.6)² × 6 = 0.36 × 6 = 2.16× full-load current
(Starting torque also becomes x² = 0.36 of the DOL value.)
```

### ⚠️ Common Traps

1. Forgetting star-delta cuts **torque** to 1/3 as well as current.
2. Thinking auto-transformer scales by `x` — it's **x²**.
3. Believing DOL is fine for large motors — the surge is too high.
4. Applying rotor-resistance starting to a **squirrel-cage** motor (needs slip rings).
5. Mixing up no-load (core/friction) and blocked-rotor (copper) test outputs.
6. Using `√Zeq²−Req²` without squaring correctly.

### 📝 Test — Electrical Machines (8 Q)

**Q1 (MCQ).** The blocked-rotor test on an induction motor gives:
(a) core loss (b) equivalent impedance & copper loss (c) friction loss (d) slip

**Q2 (MCQ).** In a star-delta starter, the starting current is ___ of the DOL value:
(a) 1/2 (b) 1/3 (c) 1/√3 (d) equal

**Q3 (MCQ).** Which starter increases the starting torque?
(a) star-delta (b) auto-transformer (c) rotor resistance (slip-ring) (d) DOL

**Q4 (MCQ).** An auto-transformer starter at tapping x scales starting torque by:
(a) x (b) x² (c) 1/x (d) √x

**Q5 (MCQ).** The no-load test gives mainly:
(a) copper loss (b) core + friction & windage loss (c) equivalent reactance (d) slip

**Q6 (NAT).** A motor's DOL starting current is 5× full load. Find the star-delta starting current (× full load).

**Q7 (NAT).** For an auto-transformer starter at 50% tap, DOL starting current 6× FL, find the starting current (× FL).

**Q8 (NAT).** Blocked-rotor test: Vsc = 100 V, Isc = 20 A, Wsc = 1200 W (per phase basis). Find Xeq (Ω).

<details><summary>🔑 Solutions</summary>

**Q1 — (b) equivalent impedance & copper loss.**

**Q2 — (b) 1/3.**

**Q3 — (c) rotor resistance (slip-ring).**

**Q4 — (b) x².**

**Q5 — (b) core + friction & windage loss.**

**Q6.** `Ist = (1/3)×5 = 1.667× FL`.

**Q7.** `Ist = x²×6 = 0.25×6 = 1.5× FL`.

**Q8.** `Zeq = 100/20 = 5 Ω`; `Req = 1200/20² = 3 Ω`; `Xeq = √(5² − 3²) = √16 = 4 Ω`.

</details>

---

## 🔧 Power Electronics: DC-DC Choppers I — Buck & Boost

### 📖 Concept Deep Dive

A **chopper** is a **DC-DC converter** that produces a variable DC output from a fixed DC input by switching a device (IGBT/MOSFET/SCR) rapidly ON and OFF. The **duty ratio** is:

```
D = Ton/T = Ton/(Ton + Toff) ,   f = 1/T
```

**Step-down (Buck) chopper** — output is **less** than input:

```
Vo = D·Vs        (0 ≤ D ≤ 1 ⇒ 0 ≤ Vo ≤ Vs)
Io = Vo/R = D·Vs/R
```

**Step-up (Boost) chopper** — output is **greater** than input:

```
Vo = Vs/(1 − D)       (Vo > Vs, rises steeply as D → 1)
```

**Control strategies:**

| Strategy | Idea |
|---|---|
| **Time-Ratio Control (TRC)** | Vary the **duty ratio D**. Two forms: **constant-frequency (PWM)** — fix `T`, vary `Ton`; and **variable-frequency** — vary `T` |
| **Current-Limit Control (CLC)** | Switch turns ON/OFF to keep the load current **between an upper and lower bound** |

> 💎 **KEY RESULT** — **Buck: `Vo = D·Vs`** (step-down); **Boost: `Vo = Vs/(1−D)`** (step-up). **Constant-frequency PWM** (a form of TRC) is the most common control — it keeps `f` fixed and simplifies filtering, unlike **variable-frequency** control (wide frequency range, harder filter design).

> 🧠 **MEMORY HOOK** — "**Buck = D·Vs down; Boost = Vs/(1−D) up**". TRC = vary duty (PWM preferred); CLC = keep current within bounds.

> ⚠️ **TRAP ALERT** — **Variable-frequency (VFC)** control is generally avoided: its wide frequency range complicates filter design and can produce **discontinuous conduction** and interference. Note the boost output `Vs/(1−D)` **blows up** as `D → 1` — never operate a boost at duty near 1.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Duty ratio | `D = Ton/T` |
| Buck output | `Vo = D·Vs` |
| Buck current | `Io = D·Vs/R` |
| Boost output | `Vo = Vs/(1 − D)` |
| Switching frequency | `f = 1/T` |

### 🧮 Solved Examples

**Example 1 — Buck chopper.** A step-down chopper: `Vs = 200 V`, `D = 0.6`, `R = 10 Ω`. Find the average output voltage and current.

```
Vo = D·Vs = 0.6 × 200 = 120 V
Io = Vo/R = 120/10 = 12 A
```

**Example 2 — Boost chopper & duty from timing.** (a) A boost chopper has `Vs = 100 V`, `D = 0.6`; find `Vo`. (b) A chopper has `Ton = 1 ms`, `T = 2.5 ms`; find `D`.

```
(a) Vo = Vs/(1 − D) = 100/(1 − 0.6) = 100/0.4 = 250 V
(b) D = Ton/T = 1/2.5 = 0.4
```

### ⚠️ Common Traps

1. Swapping buck (`D·Vs`) and boost (`Vs/(1−D)`) formulas.
2. Forgetting boost output **diverges** as `D → 1`.
3. Using `D = Ton/Toff` — it's `Ton/T`.
4. Assuming variable-frequency control is preferred — **PWM (constant f)** usually is.
5. Confusing TRC (duty) with CLC (current bounds).
6. Mixing time units (ms vs s) in `D` or `f`.

### 📝 Test — Power Electronics (8 Q)

**Q1 (MCQ).** For a step-down (buck) chopper, the output voltage is:
(a) Vs/(1−D) (b) D·Vs (c) Vs·(1−D) (d) Vs/D

**Q2 (MCQ).** For a boost chopper, Vo equals:
(a) D·Vs (b) Vs/(1−D) (c) Vs·(1−D) (d) Vs/D

**Q3 (MCQ).** The duty ratio D is defined as:
(a) Ton/Toff (b) Ton/T (c) Toff/T (d) T/Ton

**Q4 (MCQ).** Constant-frequency chopper control is also called:
(a) PWM (b) VFC (c) CLC (d) natural commutation

**Q5 (MCQ).** Current-limit control keeps the:
(a) voltage constant (b) load current within bounds (c) frequency fixed (d) duty at 0.5

**Q6 (NAT).** A buck chopper: Vs = 150 V, D = 0.4. Find Vo (V).

**Q7 (NAT).** A boost chopper: Vs = 48 V, D = 0.25. Find Vo (V).

**Q8 (NAT).** A chopper has Ton = 40 µs and switching frequency 5 kHz. Find the duty ratio.

<details><summary>🔑 Solutions</summary>

**Q1 — (b) D·Vs.**

**Q2 — (b) Vs/(1−D).**

**Q3 — (b) Ton/T.**

**Q4 — (a) PWM.**

**Q5 — (b) load current within bounds.**

**Q6.** `Vo = D·Vs = 0.4 × 150 = 60 V`.

**Q7.** `Vo = Vs/(1−D) = 48/(1−0.25) = 48/0.75 = 64 V`.

**Q8.** `T = 1/f = 1/5000 = 200 µs`; `D = Ton/T = 40/200 = 0.2`.

</details>

---

> 🧠 **DAY-35 WRAP** — PT: parallel, **never short** (CT: series, never open), 110 V secondary. Induction motor: **no-load = core+friction, blocked-rotor = copper/impedance**, **star-delta → 1/3 & 1/3**, auto-transformer → **x²**, rotor-resistance boosts starting torque. Chopper: **buck `D·Vs`**, **boost `Vs/(1−D)`**, TRC/PWM preferred. Revise the boxed KEY RESULTS. ⚡
