# ⚡ GATE Technical Revision — Day 54 (2026-09-13)

*Round-3 pass 12 — the DC potentiometer, induction-motor tests, and buck/boost choppers. Precision measurement meets power conversion.*

📅 Tech Day 54 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics · 🔁 Round-3 pass 12

> 🧠 **MEMORY HOOK** — Today: the **potentiometer** (null measurement of EMF), induction-motor **no-load & blocked-rotor tests**, and the **buck (Vo = DVs) / boost (Vo = Vs/(1−D))** choppers. Three GATE staples.

---

## 🔧 Measuring Instruments: DC Potentiometer

### 📖 Concept Deep Dive

A **DC potentiometer** measures an unknown EMF/voltage by **balancing (nulling)** it against a known, calibrated voltage drop — a **null method**, so at balance **no current** flows from the source being measured (infinite effective input impedance, no loading error). This makes it ideal for calibrating voltmeters/ammeters and measuring standard-cell EMF.

**Principle.** A steady current flows through a uniform resistance wire/slide; the voltage drop per unit length is constant. The unknown EMF is connected to tap off a length where the drop equals it — at balance the galvanometer reads **zero**.

**Standardisation.** Before use, the working current is set precisely using a **standard cell** (e.g. **Weston cadmium cell**, EMF ≈ **1.0186 V** at 20°C — *verify exact value*). The slide is set to the length corresponding to the standard-cell EMF and the rheostat adjusted until the galvanometer nulls — fixing the **volts-per-unit-length** calibration. Thereafter unknown EMFs are read directly from the balancing length.

**Crompton potentiometer** — a practical laboratory form using **dial resistors + a slide-wire** for higher resolution and range.

**Applications:** measuring **EMF** (standard cells), **calibrating** voltmeters (measure the true voltage across a known fraction), **ammeters** (measure the drop across a standard resistor carrying the current → I = V/R), **wattmeters**, and measuring **small resistances** (potential-drop method).

**AC potentiometers** — extend the idea to AC: **polar type** (magnitude + phase read separately) and **coordinate (Gall–Tinsley) type** (in-phase and quadrature components on two potentiometers). Used for magnitude **and phase** of AC voltages.

> 💎 **KEY RESULT** — Potentiometer = **null method** (no current drawn at balance → no loading). **Standardise** with a standard cell (Weston ≈ 1.0186 V). Measures EMF, calibrates meters (ammeter via drop across a standard R). AC types: **polar** (mag + phase) & **coordinate** (in-phase + quadrature).

> ⚠️ **TRAP ALERT** — The potentiometer's key virtue is **zero current at balance** → it reads **true EMF** without loading (unlike a voltmeter). It must be **standardised with a standard cell** before measurement (sets the working current).

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Voltage per unit length | `k = V/L` (calibrated) |
| Unknown EMF | `Ex = k · Lx` (balancing length) |
| Standardisation | set `k` using standard-cell EMF at its length |
| Ammeter calibration | `I = V_measured / R_standard` |
| Weston standard cell | EMF ≈ 1.0186 V (verify, 20°C) |
| AC coordinate potentiometer | reads in-phase & quadrature components |

### 🧮 Solved Examples

**Example 1 — EMF measurement.**
A potentiometer is standardised so that `1 cm = 0.2 V`. An unknown cell balances at `7.5 cm`. Its EMF?

- `Ex = k · Lx = 0.2 × 7.5 = 1.5 V`.

**Example 2 — ammeter calibration.**
A current flows through a **standard resistor** `R = 0.1 Ω`; the potentiometer measures the drop across it as `0.25 V`. Find the current (for calibrating the ammeter).

- `I = V/R = 0.25/0.1 = 2.5 A`.
- Compare this true value with the ammeter's reading to find its error.

> 🧠 **MEMORY HOOK** — "**Null → no current → no loading → true EMF.**" Standardise first (standard cell), then measure by **balancing length**.

### ⚠️ Common Traps

1. Forgetting the **standardisation** step (working current must be set).
2. Thinking current flows at balance (it's **zero** — the whole point).
3. Using it as an ordinary voltmeter (it's a **null** instrument).
4. Confusing polar vs coordinate AC potentiometers.
5. Ignoring temperature dependence of the standard cell.
6. For ammeter calibration, forgetting `I = V/R_standard`.

### 📝 Test — DC Potentiometer (8 Q)

1. A potentiometer measures EMF by: (a) deflection (b) null/balance method (c) heating (d) resonance.
2. At balance, the current drawn from the unknown source is: (a) maximum (b) zero (c) rated (d) half.
3. A potentiometer is standardised using a: (a) voltmeter (b) standard cell (c) galvanometer only (d) rheostat only.
4. The Weston standard cell EMF is about: (a) 1.0186 V (b) 1.5 V (c) 2.0 V (d) 1.1 V.
5. To calibrate an ammeter, the potentiometer measures the drop across a: (a) capacitor (b) standard resistor (c) inductor (d) diode.
6. **(NAT)** Calibration 1 cm = 0.15 V; unknown balances at 9 cm. EMF (V)?
7. **(NAT)** Standard resistor 0.05 Ω, measured drop 0.30 V. Current (A)?
8. **(NAT)** Potentiometer wire 10 V over 100 cm; balancing length 62 cm. Measured voltage (V)?

<details><summary>🔑 Solutions</summary>

**Q1 — (b) null/balance.**

**Q2 — (b) zero.**

**Q3 — (b) standard cell.**

**Q4 — (a) 1.0186 V.**

**Q5 — (b) standard resistor.**

**Q6.** `E = 0.15 × 9 = 1.35 V`.

**Q7.** `I = 0.30/0.05 = 6 A`.

**Q8.** `k = 10/100 = 0.1 V/cm`; `V = 0.1 × 62 = 6.2 V`.

</details>

---

## 🔧 Electrical Machines: Induction Motor III — Tests, Circle Diagram & Starting

### 📖 Concept Deep Dive

Two tests characterise an induction motor (like transformer OC/SC).

**No-load test (analogous to OC).** Motor runs at **rated voltage, no load** (s ≈ 0). It draws small current at **low pf**; the input gives **core loss + friction & windage** (constant losses) and the **magnetising branch** (`Rc, Xm`). Since s ≈ 0, `R2/s → ∞`, so the rotor branch is effectively open.

```
No-load: P0 = core loss + friction/windage ;  cosφ0 low ;  gives Xm, Rc
```

**Blocked-rotor test (analogous to SC).** Rotor is held stationary (s = 1) at **reduced voltage** so **rated current** flows. Gives the **series (leakage) parameters** and **copper losses**:

```
Blocked-rotor: Psc → (R1 + R2') at rated current ;  Zsc = Vsc/Isc ;  Rsc = Psc/Isc² ;  Xsc = √(Zsc² − Rsc²)
```

**Circle diagram** — a graphical construction (locus of stator current is a circle) built from the no-load and blocked-rotor points, from which torque, output, efficiency, slip, and maximum values are read for any load — a classic exam construction.

**Starting methods** (starting current = `V/Zsc` is high, 5-7× full load):
- **DOL (Direct-On-Line)** — full voltage; highest starting current; small motors.
- **Star-Delta** — start in star (voltage/√3 per phase), run in delta; **starting current & torque reduced to 1/3** of DOL delta values.
- **Auto-transformer** — reduced voltage by tap `x`; starting current & torque scale as `x²`.
- **Rotor-resistance** (wound rotor) — add external rotor resistance for **high starting torque** with reduced current.
- **Soft starter / VFD** — modern electronic control.

```
Star-delta: I_start(star) = (1/3)·I_start(DOL delta) ;  T_start(star) = (1/3)·T_start(DOL delta)
Autotransformer (tap x): I_line = x²·I_DOL ;  T_start = x²·T_DOL
```

> 💎 **KEY RESULT** — No-load test → core + friction losses, `Xm`. Blocked-rotor → `Rsc, Xsc`, copper loss. **Star-delta** reduces starting current **and** torque to **1/3**; autotransformer (tap x) scales both by **x²**; rotor resistance boosts starting torque.

> ⚠️ **TRAP ALERT** — Star-delta reduces **both** starting current and torque to **1/3** (not 1/√3). Blocked-rotor test is done at **reduced voltage** (to keep current ≈ rated). No-load ↔ magnetising branch; blocked-rotor ↔ leakage/copper.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| No-load loss | `P0 = core + friction/windage` |
| Blocked-rotor impedance | `Zsc = Vsc/Isc` |
| Blocked-rotor R, X | `Rsc = Psc/Isc²` ; `Xsc = √(Zsc²−Rsc²)` |
| Star-delta starting | `I_st(Y) = (1/3) I_st(Δ)` ; `T_st(Y) = (1/3) T_st(Δ)` |
| Autotransformer (tap x) | `I_line = x²·I_DOL` ; `T_st = x²·T_DOL` |
| DOL starting current | `≈ V/Zsc` (5-7× FL) |

### 🧮 Solved Examples

**Example 1 — blocked-rotor parameters.**
Blocked-rotor test: `Vsc = 100 V`, `Isc = 20 A`, `Psc = 1200 W` (per phase basis assumed). Find Rsc and Xsc.

- `Zsc = Vsc/Isc = 100/20 = 5 Ω`.
- `Rsc = Psc/Isc² = 1200/400 = 3 Ω`.
- `Xsc = √(Zsc² − Rsc²) = √(25 − 9) = √16 = 4 Ω`.

**Example 2 — star-delta starting current.**
A motor draws `60 A` starting current on DOL (delta). Starting current with a star-delta starter?

- `I_st(Y) = (1/3) × 60 = 20 A` (and starting torque also reduced to 1/3).

> 🧠 **MEMORY HOOK** — "**Star-delta = 1/3 current AND 1/3 torque.**" No-load ↔ Xm; blocked-rotor ↔ leakage + copper (like transformer OC/SC).

### ⚠️ Common Traps

1. Saying star-delta reduces current to **1/√3** (it's **1/3**).
2. Doing blocked-rotor at full voltage (should be **reduced**).
3. Confusing which test gives Xm (no-load) vs Xsc (blocked-rotor).
4. Forgetting autotransformer scales by **x²**.
5. Expecting high starting torque from a cage motor on reduced-voltage starters (torque **drops**).
6. Ignoring that rotor-resistance starting is only for **wound-rotor** motors.

### 📝 Test — Induction Motor III (8 Q)

1. The no-load test gives mainly: (a) copper loss (b) core + friction losses, Xm (c) rotor resistance (d) slip.
2. The blocked-rotor test is done at: (a) rated voltage (b) reduced voltage (c) zero voltage (d) double voltage.
3. Star-delta starting reduces starting current to: (a) 1/√3 (b) 1/3 (c) 1/2 (d) 1/9 of DOL.
4. Star-delta starting torque is: (a) same (b) 1/3 of DOL delta (c) 3× (d) 1/√3.
5. Autotransformer starting (tap x) scales starting torque by: (a) x (b) x² (c) 1/x (d) √x.
6. **(NAT)** Blocked-rotor: Vsc = 80 V, Isc = 16 A, Psc = 768 W. Rsc (Ω)?
7. **(NAT)** For Q6, Xsc (Ω)?
8. **(NAT)** DOL starting current 90 A; with a 0.6-tap autotransformer, line starting current (A)?

<details><summary>🔑 Solutions</summary>

**Q1 — (b).** Core + friction, Xm.

**Q2 — (b) reduced voltage.**

**Q3 — (b) 1/3.**

**Q4 — (b) 1/3 of DOL delta.**

**Q5 — (b) x².**

**Q6.** `Rsc = 768/16² = 768/256 = 3 Ω`.

**Q7.** `Zsc = 80/16 = 5`; `Xsc = √(25−9) = 4 Ω`.

**Q8.** `I_line = x²·I_DOL = 0.36 × 90 = 32.4 A`.

</details>

---

## 🔧 Power Electronics: DC-DC Choppers I — Buck & Boost

### 📖 Concept Deep Dive

A **chopper** converts a fixed DC input to a variable DC output by fast switching at **duty ratio** `D = ton/T` (T = switching period, `fs = 1/T`).

**Step-down (Buck) chopper.** The switch connects the source to the load for `ton`; an LC filter + freewheeling diode smooth the output:

```
Vo = D·Vs        (0 ≤ D ≤ 1, so Vo ≤ Vs)
Io = Vo/R (avg) ;  Is(avg) = D·Io (source current)
```

Output voltage is **always ≤ input** — a step-down converter. In continuous conduction, `Vo = D·Vs` regardless of load.

**Step-up (Boost) chopper.** The inductor stores energy when the switch is on (source shorts through L), then releases it in series with the source to the load when off:

```
Vo = Vs/(1 − D)      (Vo ≥ Vs, → ∞ as D → 1)
Is(avg) = Io/(1 − D)  (input current > output current)
```

Output voltage is **always ≥ input** — a step-up converter. (Ideal, lossless, continuous conduction.)

**Control strategies:**
- **TRC (Time-Ratio Control):** vary `D`.
  - **CLC (Constant-frequency, PWM):** fix `T`, vary `ton` — the standard method (constant `fs`, easier filtering).
  - **Variable-frequency (frequency modulation):** fix `ton` or `toff`, vary `T` — causes a wide range of harmonics (harder to filter); less common.
- **Current-limit control (CLC-hysteresis):** switch based on load current bounds.

**Buck-boost / Cuk** (preview, next lesson): `Vo = −Vs·D/(1−D)` — can step up or down with inverted polarity.

> 💎 **KEY RESULT** — Buck: `Vo = D·Vs` (step-down). Boost: `Vo = Vs/(1−D)` (step-up). Constant-frequency **PWM (TRC/CLC)** is standard. Source current: buck `Is = D·Io`; boost `Is = Io/(1−D)`.

> ⚠️ **TRAP ALERT** — **Buck `Vo = DVs`** (down); **Boost `Vo = Vs/(1−D)`** (up, blows up as D→1). Don't swap. Constant-frequency PWM keeps `fs` fixed and varies `ton` (easier EMI filtering than frequency modulation).

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Duty ratio | `D = ton/T` ; `fs = 1/T` |
| Buck output | `Vo = D·Vs` |
| Boost output | `Vo = Vs/(1−D)` |
| Buck source current | `Is(avg) = D·Io` |
| Boost source current | `Is(avg) = Io/(1−D)` |
| Ripple (buck, ΔIL) | `ΔIL = (Vs−Vo)·D·T/L` |

### 🧮 Solved Examples

**Example 1 — buck chopper.**
A buck chopper: `Vs = 100 V`, duty ratio `D = 0.4`. Output voltage and (for `R = 10 Ω`) source average current?

- `Vo = D·Vs = 0.4 × 100 = 40 V`.
- `Io = Vo/R = 40/10 = 4 A`; `Is(avg) = D·Io = 0.4 × 4 = 1.6 A`.

**Example 2 — boost chopper.**
A boost chopper: `Vs = 24 V`, `D = 0.6`. Output voltage and (for `Io = 2 A`) input current?

- `Vo = Vs/(1−D) = 24/(1−0.6) = 24/0.4 = 60 V`.
- `Is = Io/(1−D) = 2/0.4 = 5 A` (input current exceeds output — power balance `24×5 = 120 W = 60×2`).

> 🧠 **MEMORY HOOK** — "**Buck multiplies by D; boost divides by (1−D).**" Power in = power out (ideal): buck steps voltage down/current up, boost steps voltage up/current... input current is larger.

### ⚠️ Common Traps

1. Swapping buck (`DVs`) and boost (`Vs/(1−D)`).
2. Thinking boost output ≤ input (it's **≥** input).
3. Forgetting input current > output current in a boost.
4. Using frequency modulation and expecting constant-frequency behaviour.
5. Ignoring the **freewheeling diode** in the buck.
6. Assuming Vo depends on load in CCM (it depends on **D** only, ideally).

### 📝 Test — Choppers I (8 Q)

1. A buck chopper output voltage is: (a) DVs (b) Vs/(1−D) (c) Vs/D (d) (1−D)Vs.
2. A boost chopper output voltage is: (a) DVs (b) Vs/(1−D) (c) Vs·D (d) Vs(1−D).
3. As D → 1, the boost output tends to: (a) 0 (b) Vs (c) infinity (d) Vs/2.
4. Constant-frequency PWM control varies: (a) T (b) ton at fixed T (c) frequency (d) nothing.
5. In a boost, the input current compared to output is: (a) smaller (b) larger (c) equal (d) zero.
6. **(NAT)** Buck: Vs = 200 V, D = 0.35. Output voltage (V)?
7. **(NAT)** Boost: Vs = 40 V, D = 0.5. Output voltage (V)?
8. **(NAT)** Buck: Vs = 120 V, Vo needed = 90 V. Required duty ratio (2 dp)?

<details><summary>🔑 Solutions</summary>

**Q1 — (a) DVs.**

**Q2 — (b) Vs/(1−D).**

**Q3 — (c) infinity.**

**Q4 — (b) ton at fixed T.**

**Q5 — (b) larger.**

**Q6.** `Vo = 0.35 × 200 = 70 V`.

**Q7.** `Vo = 40/(1−0.5) = 40/0.5 = 80 V`.

**Q8.** `D = Vo/Vs = 90/120 = 0.75`.

</details>

---

> 🧠 **DAY-54 WRAP (Round-3 pass 12)** — **Potentiometer:** null method (no loading), standardise with standard cell (Weston ≈ 1.0186 V), calibrates meters. **Induction motor:** no-load (Xm, core+friction), blocked-rotor (Rsc, Xsc), star-delta = **1/3** current & torque, autotransformer ×x². **Choppers:** buck `Vo = DVs`, boost `Vo = Vs/(1−D)`, constant-freq PWM. ⚡

**🔁 Round-3 progress:** Measurements ▓▓▓▓▓▓▓▓▓▓ · Machines ▓▓▓▓▓▓▓▓▓▓ · Power Electronics ▓▓▓▓▓▓▓▓▓▓ — round-3 in its final topics (12/~21 revised). 🎓 Power Systems joins as a 4th subject once the reference PDFs arrive.
