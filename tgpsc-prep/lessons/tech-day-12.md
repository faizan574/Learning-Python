# ⚡ GATE Technical Revision — Day 12 (2026-08-01)

*The instrument that measures voltage by drawing zero current, the DC motor's torque-speed personality, and the fully-controlled bridge that can push power backwards.*

`📅 Tech Day 12  ·  ⏱ ~45 min  ·  🎯 Measurements + Machines + Power Electronics`

Attempt each section's test **before** opening its solutions — recall beats re-reading.

---

## 🔧 Measuring Instruments: DC Potentiometer — Crompton Type, Standardisation & AC Potentiometers

Yesterday: the energy meter. Today the **potentiometer** — a **null-balance** instrument that measures an unknown EMF by comparing it against a **calibrated voltage drop**, drawing **zero current at balance** (so it loads the source not at all — ideal for measuring EMF).

### 📖 Concept Deep Dive

**Principle.** A steady "working current" `Iw` flows through a uniform resistance/slide wire. The **voltage drop per unit length** is constant. An unknown EMF `Ex` is balanced against the drop across a length `Lx`; at **null** (galvanometer reads zero), no current flows from `Ex`:

```
Ex = Iw · (resistance up to balance point) = (drop per unit length) × Lx
At balance: no current drawn from the unknown source ⇒ true EMF measured
```

**Standardisation (the key step).** To fix the exact drop-per-unit-length, the working current must be set to a precise value using a **standard cell** (e.g. **Weston cell, 1.0186 V at 20°C** — `verify exact value`). The potentiometer is "standardised" by adjusting the **rheostat** until the standard cell balances at its own marked length. After that, the scale reads volts directly.

```
Standardisation: set Iw so that  Estd = (drop/length) × Lstd
Weston standard cell EMF ≈ 1.0186 V (20°C)  [verify]
```

**Crompton potentiometer** — a **precision DC potentiometer** with a **dial (calibrated resistance coils) + a slide-wire** for fine reading, giving high resolution over a wide range. Typical arrangement: a **200 Ω** main dial in 15–16 steps plus a single-turn slide wire; working current set (e.g., **10 mA**) so that convenient volts-per-step result.

**Applications:** measuring **unknown EMF/voltage** (no loading), **calibrating** voltmeters/ammeters (ammeter via drop across a **standard resistor**), measuring **current** (I = V_std-resistor / R_std), **resistance**, and **power** (with a volt-ratio box / standard resistor).

**Range extension** uses a **volt-ratio box** (resistive potential divider) to measure voltages above the potentiometer's few-volt span.

**AC potentiometers** — measure AC magnitude **and phase**. Two types:
- **Polar type** (Drysdale): reads **magnitude + phase angle directly** (a phase-shifting transformer sets the phase, magnitude read on the slide-wire).
- **Coordinate type** (Gall–Tinsley): two potentiometers at **90°** (in-phase and quadrature), reading the **in-phase (V·cosθ)** and **quadrature (V·sinθ)** components; magnitude `V = √(Vx² + Vy²)`, phase `θ = arctan(Vy/Vx)`.

```
Coordinate AC potentiometer:  V = √(Vx² + Vy²) ,  θ = arctan(Vy / Vx)
Polar AC potentiometer: reads |V| and θ directly
```
AC potentiometers must be **standardised with a transfer instrument** (electrodynamometer / thermal) since a standard cell is DC.

> 💎 **KEY RESULT** — A potentiometer measures EMF by **null balance** (zero current drawn), so it reads **true EMF** without loading. It is **standardised** with a **standard (Weston) cell** to fix volts-per-unit-length. AC coordinate potentiometer: `V = √(Vx² + Vy²)`, `θ = arctan(Vy/Vx)`.

> 🧠 **MEMORY HOOK** — "**Null balance = zero current = true EMF.** Standardise with the Weston cell (1.0186 V). Polar reads |V|∠θ; coordinate reads x + jy."

> ⚠️ **TRAP ALERT** — At balance the potentiometer draws **zero** current from the unknown — that's why it beats a voltmeter for measuring **EMF** (a voltmeter draws current and reads terminal voltage < EMF). AC potentiometers can't use a DC standard cell for the final calibration of magnitude — they need a **transfer instrument**.

### 📐 Formula Sheet

```
Balance:      Ex = (drop per unit length) × Lx ;  Iw constant
Working current from standardisation:  Iw = Estd / R(to std length)
Weston standard cell:  ≈ 1.0186 V at 20°C  [verify]
Current via std resistor: I = V_measured / R_std
Volt-ratio box: extends range by known division ratio
AC coordinate: V = √(Vx² + Vy²) ,  θ = arctan(Vy/Vx)
```

### 🧮 Solved Examples

**Example 1 — working current & unknown EMF.**
A slide-wire potentiometer has a wire of length **100 cm** with a total resistance such that, when standardised, the drop is **exactly 10 mV/cm**. An unknown cell balances at **63.5 cm**. Find (a) the unknown EMF and (b) the working current if the wire resistance is **2 Ω/m**.

```
(a) Ex = (drop/cm) × Lx = 10 mV/cm × 63.5 cm = 635 mV = 0.635 V

(b) drop per cm = 10 mV/cm = 1.0 V/m ;  wire resistance = 2 Ω/m
    Iw = (V per metre)/(Ω per metre) = 1.0 / 2 = 0.5 A
```
**Ex = 0.635 V; working current Iw = 0.5 A.**

**Example 2 — AC coordinate potentiometer.**
An AC coordinate potentiometer reads in-phase component `Vx = 3.0 V` and quadrature `Vy = 4.0 V`. Find the magnitude and phase of the measured voltage.

```
V = √(Vx² + Vy²) = √(3.0² + 4.0²) = √(9 + 16) = √25 = 5.0 V
θ = arctan(Vy/Vx) = arctan(4.0/3.0) = arctan(1.3333) = 53.13°
```
**V = 5.0 V at 53.13°.**

### ⚠️ Common Traps

1. **Zero current at balance** — the potentiometer's whole advantage; it measures **EMF**, not loaded terminal voltage.
2. **Standardisation is mandatory** before/after readings — the standard cell fixes the working current; drift invalidates readings.
3. **Standard cell (Weston) is not the thing being measured** — it calibrates the volts-per-length; never draw steady current from it (only momentary null checks).
4. **AC potentiometer needs a transfer instrument** for final magnitude calibration — a DC standard cell alone won't do.
5. **Coordinate vs polar:** coordinate gives **x, y components**; polar gives **magnitude, angle** directly. Don't mix the read-outs.
6. **Volt-ratio box** extends **voltage** range; a **standard resistor** lets you measure **current** (via its drop).

### 📝 Test — Measuring Instruments (8 Q)

1. **(MCQ)** At balance, a potentiometer draws from the unknown source a current of:
   (a) rated current  (b) half current  (c) zero  (d) maximum current
2. **(MCQ)** A potentiometer is standardised using a:
   (a) voltmeter  (b) standard (Weston) cell  (c) CRO  (d) wattmeter
3. **(MCQ)** The main advantage of a potentiometer over a voltmeter for measuring EMF is that it:
   (a) is cheaper  (b) draws no current at balance  (c) is portable  (d) needs no supply
4. **(MCQ)** An AC coordinate (Gall-Tinsley) potentiometer directly reads:
   (a) magnitude and phase  (b) in-phase and quadrature components  (c) frequency  (d) power factor only
5. **(MCQ)** To measure current with a DC potentiometer, one measures the drop across a:
   (a) capacitor  (b) standard resistor  (c) inductor  (d) diode
6. **(NAT)** A potentiometer drop is 5 mV/cm. An unknown EMF balances at 48 cm. Find the EMF in volts. ______ V
7. **(NAT)** An AC coordinate potentiometer reads Vx = 6 V, Vy = 8 V. Find the voltage magnitude in volts. ______ V
8. **(NAT)** A slide wire carries 20 mV/cm. What length (cm) balances a 1.0186 V standard cell? ______ cm

<details>
<summary>🔑 Solutions</summary>

**1 → (c) zero.** Null balance ⇒ no current from the unknown.

**2 → (b).** Standard (Weston) cell sets the working current.

**3 → (b).** Zero current ⇒ true EMF (no loading error).

**4 → (b).** In-phase and quadrature components (then V = √(Vx²+Vy²)).

**5 → (b).** Drop across a standard resistor ⇒ I = V/R_std.

**6 →** EMF = 5 mV/cm × 48 cm = 240 mV = **0.240 V.**

**7 →** V = √(6² + 8²) = √(36+64) = √100 = **10 V.**

**8 →** Length = 1.0186 V / (20 mV/cm) = 1018.6 mV / 20 mV/cm = **50.93 cm.**

</details>

---

## 🔧 Electrical Machines: DC Motors — Types, Torque-Speed Characteristics, Starters & Speed Control

Day 11 covered DC generators. The **motor** is the same machine run in reverse: `V` drives current against the **back-EMF Eb`, producing torque.

### 📖 Concept Deep Dive

**Fundamental relations.**

```
Back-EMF   Eb = V − Ia·Ra   (motor: Eb < V)
Also       Eb = φZNP/(60A) = Ka φ N  ⇒  N ∝ Eb/φ = (V − IaRa)/φ
Torque     Ta = Ka φ Ia   ⇒  Ta ∝ φ Ia
Speed eqn  N = (V − Ia Ra)/(Ka φ)
```

So **speed ∝ (V − IaRa)/φ** and **torque ∝ φ·Ia** — the two master proportionalities.

**Types & torque-speed characteristics:**

| Motor | Field | N-Ta characteristic | Key trait |
|---|---|---|---|
| **Shunt** | across supply (φ ≈ const) | nearly **constant speed** (slight droop) | Ta ∝ Ia; good for constant-speed loads |
| **Series** | in series (φ ∝ Ia) | **high starting torque**, speed falls steeply with load; **races on no load** | Ta ∝ Ia² (before saturation); traction, cranes |
| **Cumulative compound** | shunt + series aiding | high starting torque **+** no-load speed limited (safe) | hoists, rolling mills |
| **Differential compound** | series opposes shunt | speed rises with load (unstable) | rarely used |

**Series motor specifics.** Since `φ ∝ Ia` (below saturation), `Ta ∝ φ·Ia ∝ Ia²` — excellent starting torque. But at **no load**, Ia is tiny → φ tiny → `N ∝ 1/φ` → **dangerously high speed ("racing")**. So a **series motor must never run unloaded** and is **never belt-driven** (belt slip = loss of load).

**Starters (why needed).** At standstill `Eb = 0`, so `Ia(start) = V/Ra` — a huge inrush (Ra is tiny). A **starter** inserts external resistance at start, cut out as the motor speeds up and Eb builds:
- **3-point starter** — has **NVC (No-Volt Coil)** and **OLC (Overload Coil)**. Drawback: NVC in series with the shunt field, so **field-weakening speed control** can trip the NVC.
- **4-point starter** — NVC on a separate branch; suits wide **field-control** speed variation.

**Speed control (from `N ∝ (V − IaRa)/φ`):**
1. **Field control (flux control)** — vary `φ` via field rheostat. Reduces φ ⇒ **speed above base** (constant-power region). Cheap, efficient; range limited by commutation/stability.
2. **Armature (rheostatic) control** — add resistance in armature ⇒ **speed below base** (constant-torque). Simple but **wasteful** (I²R loss).
3. **Armature voltage control (Ward-Leonard)** — vary applied armature voltage `V` (motor-generator set or converter). **Smooth, wide range below base speed**, four-quadrant; efficient but costly.

```
Above base speed  ⇒  field weakening (φ↓), constant power
Below base speed  ⇒  armature voltage/resistance control, constant torque
Ward-Leonard: smooth V control, wide range, 4-quadrant
```

> 💎 **KEY RESULT** — `N ∝ (V − IaRa)/φ`, `Ta ∝ φ Ia`. **Series motor: Ta ∝ Ia²** (high starting torque) but **races on no load**. Speed control: **field weakening → above base (const power)**; **armature V → below base (const torque)**; **Ward-Leonard** for smooth wide range.

> 🧠 **MEMORY HOOK** — "**Shunt = steady speed, Series = strong start but runs away empty.** Weaken field → faster (const power); lower armature volts → slower (const torque)."

> ⚠️ **TRAP ALERT** — A **series motor on no load races to destruction** — never start it unloaded or belt-couple it. And **field control gives speeds ABOVE base**, armature control gives **BELOW base** — a frequent sign mix-up.

### 📐 Formula Sheet

```
Back-EMF   Eb = V − Ia Ra
Speed      N ∝ (V − Ia Ra)/φ ;  N1/N2 = (Eb1/Eb2)(φ2/φ1)
Torque     Ta = Ka φ Ia ;  Ta ∝ φ Ia  (series: Ta ∝ Ia² pre-saturation)
Start current  Ia(start) = V/Ra  (huge; starter limits it)
Field control  φ↓ ⇒ N↑ (above base, constant power)
Armature control  V↓ or +R ⇒ N↓ (below base, constant torque)
Ward-Leonard: variable armature voltage, smooth 4-quadrant
```

### 🧮 Solved Examples

**Example 1 — speed change with load (shunt).**
A 220 V DC shunt motor draws `Ia = 20 A` at `Ra = 0.5 Ω`, running at **1000 rpm**. If the armature current rises to **40 A** (flux constant), find the new speed.

```
Eb1 = V − Ia1 Ra = 220 − 20×0.5 = 220 − 10 = 210 V
Eb2 = V − Ia2 Ra = 220 − 40×0.5 = 220 − 20 = 200 V
Flux constant ⇒ N ∝ Eb :  N2 = N1 × Eb2/Eb1 = 1000 × 200/210 = 952.4 rpm
```
**N2 ≈ 952 rpm** (speed droops slightly with load — the shunt characteristic).

**Example 2 — starting resistance.**
A 200 V DC motor has `Ra = 0.25 Ω`. To limit the starting current to **twice** full-load current of **40 A** (i.e. 80 A), find the external starting resistance needed.

```
At start Eb = 0 ⇒ Ia(start) = V/(Ra + Rext)
Want Ia(start) = 80 A:
  Ra + Rext = V/80 = 200/80 = 2.5 Ω
  Rext = 2.5 − 0.25 = 2.25 Ω
```
**Rext = 2.25 Ω.** (Without it, Ia = 200/0.25 = 800 A — 20× rated!)

### ⚠️ Common Traps

1. **Motor: Eb = V − IaRa** (back-EMF **less** than V). Generator was `Eg = V + IaRa`. Sign flips.
2. **Series motor Ta ∝ Ia²** only **before saturation**; after saturation φ ≈ const, so Ta ∝ Ia.
3. **No-load series motor races** — this is a safety fact, not a curiosity.
4. **Field control → above base speed (constant power)**; **armature control → below base (constant torque)**. Don't invert.
5. **Starter resistance limits inrush** (Eb = 0 at start), then is cut out as Eb rises — it's **transient**, not a running speed control.
6. **3-point vs 4-point starter:** the **4-point** separates the NVC so heavy **field weakening** won't trip the no-volt release.

### 📝 Test — Electrical Machines (8 Q)

1. **(MCQ)** In a DC motor, the back-EMF is:
   (a) V + IaRa  (b) V − IaRa  (c) IaRa  (d) V
2. **(MCQ)** A DC series motor should never be started:
   (a) on full load  (b) on no load  (c) with a starter  (d) at rated voltage
3. **(MCQ)** For a DC series motor before saturation, torque is proportional to:
   (a) Ia  (b) Ia²  (c) √Ia  (d) 1/Ia
4. **(MCQ)** Field weakening in a DC shunt motor causes the speed to go:
   (a) below base speed  (b) above base speed  (c) to zero  (d) unchanged
5. **(MCQ)** The Ward-Leonard method controls speed by varying:
   (a) field resistance only  (b) armature applied voltage  (c) frequency  (d) number of poles
6. **(NAT)** A 240 V shunt motor runs at 1200 rpm with Eb = 230 V. If Eb drops to 210 V (flux constant), find the new speed in rpm. ______ rpm
7. **(NAT)** A 400 V DC motor has Ra = 0.4 Ω. Find the starting resistance to limit starting current to 50 A. ______ Ω
8. **(NAT)** A DC motor has Ka φ = 2.5 (SI). For an armature current of 30 A, find the developed torque in N·m. ______ N·m

<details>
<summary>🔑 Solutions</summary>

**1 → (b) V − IaRa.**

**2 → (b) no load.** It races to dangerous speed.

**3 → (b) Ia².** Ta ∝ φIa and φ ∝ Ia (pre-saturation).

**4 → (b) above base speed.** N ∝ 1/φ.

**5 → (b) armature applied voltage.**

**6 →** N ∝ Eb ⇒ N2 = 1200 × 210/230 = **1095.7 rpm.**

**7 →** Ra + Rext = V/I = 400/50 = 8 Ω ⇒ Rext = 8 − 0.4 = **7.6 Ω.**

**8 →** Ta = Ka φ · Ia = 2.5 × 30 = **75 N·m.**

</details>

---

## 🔧 Power Electronics: Single-Phase Full-Converter & Semiconverter — Average/RMS Output & Freewheeling Diode

Day 11 introduced half-wave and the semiconverter. Now the **full bridge**: the **fully-controlled converter** (4 SCRs) that can **invert**, versus the **semiconverter** (2 SCRs + 2 diodes) that cannot.

### 📖 Concept Deep Dive

**1-φ Full-Converter (4 SCRs), continuous (highly inductive) load.** SCRs fire in diagonal pairs; output voltage follows the supply through firing angle `α`, and because the inductive load keeps current continuous, the output goes **negative** for part of the cycle:

```
Vo(avg) = (2Vm/π) cos α          [1-φ full-converter, continuous current]
Vo(rms) = Vrms = Vm/√2  (the load voltage RMS ≈ supply RMS for continuous conduction)
```

- At `α < 90°`: `Vo > 0` → **rectifier** (power AC→DC).
- At `α > 90°`: `Vo < 0` → **inverter mode** (power DC→AC), provided the load has an EMF source to drive current. This **line-commutated inverter** capability is the full-converter's signature.

**1-φ Semiconverter (2 SCR + 2 diodes), continuous load.** The diodes provide an inherent **freewheeling path**, so output **cannot go negative**:

```
Vo(avg) = (Vm/π)(1 + cos α)       [1-φ semiconverter, continuous current]
Range: α=0 → 2Vm/π (max) ;  α=π → 0 ;  always ≥ 0 (no inversion)
```

**Effect of the freewheeling diode (FWD).** Across an inductive load, an FWD:
- Provides a path for inductive current when the input tries to go negative → **clamps Vo ≥ 0**.
- **Raises** the average output (removes the negative area).
- **Improves input power factor** and reduces the SCRs' conduction burden.
- A semiconverter behaves **as if a full-converter had a FWD** — that's why its formula matches the "with FWD" case.

**Comparison table (continuous current):**

| Converter | Devices | Vo(avg) | Inversion? | Input pf |
|---|---|---|---|---|
| Half-wave (R) | 1 SCR | (Vm/2π)(1+cos α) | No | poor |
| **Semiconverter** | 2 SCR + 2 D | (Vm/π)(1+cos α) | **No** (Vo ≥ 0) | better (FWD) |
| **Full-converter** | 4 SCR | (2Vm/π) cos α | **Yes** (α>90°) | — |

**Performance parameters:** ripple factor, **displacement factor = cos α** (for full-converter continuous current, fundamental input current lags by α), input **power factor**, and the relation of DC output to firing angle. For the full-converter, the **fundamental input displacement angle equals α**, so pf worsens as α rises.

> 💎 **KEY RESULT** — **Full-converter: Vo = (2Vm/π)cos α** — goes **negative for α > 90° (inverter mode)**. **Semiconverter: Vo = (Vm/π)(1+cos α)** — **always ≥ 0, no inversion**. A **freewheeling diode** clamps Vo ≥ 0, raises the average and improves pf.

> 🧠 **MEMORY HOOK** — "**Full = cos α (can invert past 90°). Semi = (1+cos α) (never negative).** FWD makes a full-converter behave like a semi (Vo ≥ 0)."

> ⚠️ **TRAP ALERT** — Only the **full-converter** can invert (α > 90°, Vo < 0) and feed power back to the line — and only **with a load EMF** to sustain current. A **semiconverter (or full-converter + FWD) cannot invert**. Don't apply `cos α` to a semiconverter.

### 📐 Formula Sheet

```
1-φ Full-converter (continuous):  Vo(avg) = (2Vm/π) cos α
   α < 90°: rectifier (Vo>0) ;  α > 90°: inverter (Vo<0, needs load EMF)
1-φ Semiconverter (continuous):   Vo(avg) = (Vm/π)(1 + cos α)   [Vo ≥ 0]
Half-wave R:                      Vo(avg) = (Vm/2π)(1 + cos α)
FWD: clamps Vo ≥ 0, raises average, improves input pf
Displacement factor (full-conv, cont.) = cos α
Vm = √2 · Vrms
```

### 🧮 Solved Examples

**Example 1 — full-converter, rectifier & inverter.**
A 1-φ full-converter runs from **230 V (rms)**, continuous current. Find Vo(avg) at (a) α = 30° and (b) α = 120°.

```
Vm = √2 × 230 = 325.27 V ;  2Vm/π = 2 × 325.27/3.14159 = 207.07 V
(a) α = 30°:  Vo = 207.07 × cos 30° = 207.07 × 0.86603 = 179.3 V  (rectifier)
(b) α = 120°: Vo = 207.07 × cos 120° = 207.07 × (−0.5) = −103.5 V  (inverter mode)
```
**(a) +179.3 V; (b) −103.5 V** — negative output = feeding power back (inversion).

**Example 2 — semiconverter vs full at α = 60°.**
From **120 V (rms)**, continuous current, α = 60°. Compare semiconverter and full-converter average outputs.

```
Vm = √2 × 120 = 169.71 V
Semiconverter: Vo = (Vm/π)(1+cos 60°) = (169.71/3.14159)(1+0.5) = 54.02 × 1.5 = 81.03 V
Full-converter: Vo = (2Vm/π)cos 60° = (2×169.71/3.14159)(0.5) = 108.03 × 0.5 = 54.02 V
```
**Semiconverter = 81.0 V; Full-converter = 54.0 V.** The semiconverter's inherent freewheeling gives a higher average at this angle.

### ⚠️ Common Traps

1. **Full-converter Vo = (2Vm/π)cos α**; **semiconverter Vo = (Vm/π)(1+cos α)** — don't swap the formulas.
2. **Inversion needs a load EMF source** (e.g. a DC motor back-EMF or battery) to sustain current when Vo < 0 — a passive R-L can't invert.
3. **Semiconverter output is never negative** — no inverter operation.
4. **FWD improves input pf** and raises average — but it **prevents inversion** (no negative Vo).
5. **Vm is the peak** = √2·Vrms — recurring slip.
6. **Displacement factor = cos α** (full-converter, continuous) — the input current fundamental lags the source by α, worsening pf at high α.

### 📝 Test — Power Electronics (8 Q)

1. **(MCQ)** The average output of a 1-φ full-converter (continuous current) is:
   (a) (Vm/π)(1+cos α)  (b) (2Vm/π)cos α  (c) (Vm/2π)(1+cos α)  (d) (2Vm/π)sin α
2. **(MCQ)** A 1-φ full-converter enters inverter mode when α is:
   (a) < 90°  (b) = 0°  (c) > 90°  (d) = 45°
3. **(MCQ)** A single-phase semiconverter output voltage:
   (a) can be negative  (b) is always ≥ 0  (c) equals cos α  (d) is AC
4. **(MCQ)** A freewheeling diode across an inductive load:
   (a) allows inversion  (b) clamps Vo ≥ 0 and improves input pf  (c) increases ripple  (d) reduces average output
5. **(MCQ)** For a 1-φ full-converter (continuous), the input displacement factor equals:
   (a) sin α  (b) cos α  (c) 1  (d) tan α
6. **(NAT)** A 1-φ full-converter from 200 V rms, continuous current, α = 45°. Find Vo(avg) in volts. ______ V
7. **(NAT)** A 1-φ semiconverter from 230 V rms, continuous current, α = 90°. Find Vo(avg) in volts. ______ V
8. **(NAT)** A 1-φ full-converter from 100 V rms operates at α = 135°. Find Vo(avg) in volts (state sign). ______ V

<details>
<summary>🔑 Solutions</summary>

**1 → (b) (2Vm/π)cos α.**

**2 → (c) > 90°.** cos α < 0 ⇒ Vo < 0 (inverter, with load EMF).

**3 → (b).** Semiconverter Vo ≥ 0 always.

**4 → (b).** FWD clamps Vo ≥ 0 and improves input power factor.

**5 → (b) cos α.**

**6 →**
```
Vm = √2 × 200 = 282.84 V ;  2Vm/π = 180.06 V
Vo = 180.06 × cos 45° = 180.06 × 0.70711 = 127.3 V
```
**Vo ≈ 127.3 V.**

**7 →**
```
Vm = √2 × 230 = 325.27 V
Vo = (Vm/π)(1+cos 90°) = (325.27/3.14159)(1+0) = 103.54 V
```
**Vo ≈ 103.5 V.**

**8 →**
```
Vm = √2 × 100 = 141.42 V ;  2Vm/π = 90.03 V
Vo = 90.03 × cos 135° = 90.03 × (−0.70711) = −63.7 V
```
**Vo ≈ −63.7 V (inverter mode, negative).**

</details>

---

`✅ Day 12 complete — DC potentiometer (null balance, standardisation, AC types), DC motors (torque-speed, starters, speed control), and 1-φ full-converter vs semiconverter (inversion & freewheeling). Tomorrow: instrument transformers (CT), DC machine losses & testing, and three-phase rectifiers.`

*Correctness over length — re-derive any result you're unsure of and mark "verify" before the exam.*
