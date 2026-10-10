# ⚡ GATE Technical Revision — Day 81 (2026-10-10)

*The oscilloscope from electron gun to Lissajous, then two fresh round-5 openers — the transformer EMF equation and the power-device family tree.*

📅 Tech Day 81 · ⏱ ~50 min · 🎯 Measurements + Machines + Power Electronics

> Today: the **CRO** (CRT deflection sensitivity, time-base, Lissajous patterns, DSO basics), then **Machines** and **Power Electronics** both begin their **5th revision pass** — starting with the **transformer EMF equation / no-load operation** and the **power-switch comparison** (diode, BJT, MOSFET, IGBT, thyristor).

---

## 🔧 Measuring Instruments: Cathode-Ray Oscilloscope (CRO)

### 📖 Concept Deep Dive

The **CRO** displays a voltage waveform versus time. Its heart is the **Cathode-Ray Tube (CRT)** with three parts: the **electron gun** (cathode, control grid, focusing & accelerating anodes — produces and accelerates a fine beam), the **deflection system** (two pairs of electrostatic plates — vertical Y plates and horizontal X plates), and the **fluorescent screen** (phosphor that glows where the beam lands).

**Electrostatic deflection.** An electron accelerated through anode voltage `Ea` gains axial velocity from `eEa = ½mvx²`. Passing between deflection plates of length `ld`, separation `d`, with deflection voltage `Ed`, it experiences a transverse force and lands a distance `y` from centre on a screen that is `L` from the plate centre:

```
y = (ld · L · Ed) / (2 · d · Ea)
```

The **deflection sensitivity** is the screen deflection per volt of signal:

```
S = y/Ed = (ld · L) / (2 · d · Ea)   [metre/volt]
```

and the **deflection factor** `G = 1/S` [volt/metre]. Note sensitivity is **inversely proportional to the accelerating voltage Ea** — higher Ea gives a brighter but less sensitive trace.

**Time-base and synchronisation.** The X plates are driven by a **sawtooth (ramp) sweep** generated internally; it moves the spot left-to-right at constant speed, then flies back (retrace, blanked). To freeze a repetitive waveform, the sweep is **triggered/synchronised** so each sweep starts at the same point of the signal — otherwise the trace drifts. Trigger controls: level, slope, source.

**Lissajous figures.** If a sine goes to Y and another sine to X (time-base off), the screen shows a **Lissajous pattern**. The **frequency ratio** is found from tangent points:

```
fy / fx = (number of tangencies to a horizontal line) / (number of tangencies to a vertical line)
```

Equivalently `fx/fy = (horizontal tangencies)/(vertical tangencies)`. For equal frequencies the pattern is an **ellipse** whose shape gives the **phase difference**:

```
sin φ = y-intercept / y-max  =  A / B
```

(a straight line → φ = 0° or 180°; a circle → φ = 90° with equal amplitudes).

**Probes.** A **1:1 probe** passes the signal directly (loads the circuit). A **10:1 attenuator probe** adds a 9 MΩ series resistor so the scope's 1 MΩ input sees 1/10 the voltage — raising input impedance and bandwidth but needing **compensation** (adjustable capacitor) to keep the 10:1 ratio flat across frequency.

**DSO (Digital Storage Oscilloscope).** Samples the analog input with an **ADC**, stores samples in memory, and reconstructs the display. It must satisfy the **Nyquist criterion** (sample rate > 2× highest signal frequency); real DSOs use 5–10× for fidelity. Advantages: storage, pre-trigger view, math, single-shot capture.

| Element | Role | Key relation |
|---|---|---|
| Electron gun | produce/accelerate beam | `eEa = ½mvx²` |
| Deflection plates | steer beam | `y = ldL Ed/(2d Ea)` |
| Sensitivity | deflection/volt | `S = ldL/(2d Ea)` |
| Time-base | horizontal sweep | sawtooth, triggered |
| Lissajous | freq/phase compare | `fy/fx = tangency ratio` |
| DSO | sample & store | Nyquist `fs > 2fmax` |

> 💎 **KEY RESULT** — Deflection sensitivity `S = (ld·L)/(2·d·Ea)` m/V; it **decreases** as the accelerating voltage Ea increases. Lissajous frequency ratio `fy/fx = (horizontal tangencies)/(vertical tangencies)`.

> 🧠 **MEMORY HOOK** — "**Longer plates & screen ⇒ more sensitive; faster electrons (big Ea) ⇒ less sensitive.**" Sensitivity ∝ `ld·L / Ea`.

> ⚠️ **TRAP ALERT** — Deflection sensitivity is **inversely** proportional to Ea (not directly). And in Lissajous, the frequency ratio uses **tangent points**, while the **phase** comes from the ellipse's intercepts (`sinφ = A/B`) — two different readings.

### 📐 Formula Sheet

| Quantity | Formula | Notes |
|---|---|---|
| Electron velocity | `vx = √(2eEa/m)` | from energy balance |
| Screen deflection | `y = ld·L·Ed/(2·d·Ea)` | electrostatic |
| Deflection sensitivity | `S = ld·L/(2·d·Ea)` | m/V |
| Deflection factor | `G = 1/S` | V/m |
| Lissajous frequency | `fy/fx = (horiz tangencies)/(vert tangencies)` | — |
| Lissajous phase | `sin φ = A/B` | A = intercept, B = max |
| DSO sampling | `fs > 2·fmax` | Nyquist |

### 🧮 Solved Examples

**Example 1 — Deflection sensitivity.** A CRT has deflection plates `ld = 2 cm` long, separation `d = 0.5 cm`, screen distance `L = 20 cm`, accelerating voltage `Ea = 2000 V`. Find the deflection sensitivity and the deflection for a 50 V signal.

```
S = ld·L/(2·d·Ea) = (0.02 × 0.20)/(2 × 0.005 × 2000)
  = 0.004 / 20 = 2.0×10⁻⁴ m/V = 0.2 mm/V
y = S·Ed = 2.0×10⁻⁴ × 50 = 0.01 m = 10 mm
```

**S = 0.2 mm/V, deflection y = 10 mm.** ✔

**Example 2 — Lissajous frequency.** A Lissajous pattern is tangent to a horizontal line at 4 points and to a vertical line at 2 points. The X-input frequency is 1 kHz. Find the Y-input frequency.

```
fy/fx = (horizontal tangencies)/(vertical tangencies) = 4/2 = 2
fy = 2 × fx = 2 × 1000 = 2000 Hz
```

**fy = 2 kHz.** ✔

### ⚠️ Common Traps
1. **Sensitivity vs Ea.** `S ∝ 1/Ea` — a higher accelerating voltage *reduces* sensitivity.
2. **Lissajous ratio direction.** `fy/fx = horizontal-tangencies / vertical-tangencies` (horizontal line counts Y-frequency loops).
3. **Phase vs frequency reading.** Phase uses the ellipse intercepts (`sinφ = A/B`); frequency uses tangent points — don't mix.
4. **10:1 probe needs compensation** — an uncompensated probe distorts fast edges (over/undershoot).
5. **DSO undersampling** below Nyquist gives **aliasing** (false low-frequency trace).
6. **Units:** keep ld, d, L in the same length unit when computing S.

### 📝 Test (8 questions)

**Q1 (MCQ).** The deflection sensitivity of a CRT is:
(a) directly proportional to Ea  (b) inversely proportional to Ea  (c) independent of Ea  (d) proportional to Ea²

**Q2 (MCQ).** In a CRO, the horizontal plates are normally driven by:
(a) the input signal  (b) a sawtooth time-base  (c) a sine wave  (d) DC

**Q3 (MCQ).** A straight-line (diagonal) Lissajous pattern indicates a phase difference of:
(a) 90°  (b) 45°  (c) 0° or 180°  (d) 270°

**Q4 (MCQ).** A 10:1 attenuator probe primarily:
(a) amplifies the signal  (b) increases input impedance and bandwidth  (c) adds gain  (d) removes noise only

**Q5 (MCQ).** A DSO must sample at a rate that is at least:
(a) equal to fmax  (b) twice fmax (Nyquist)  (c) half fmax  (d) ten times fmax always

**Q6 (NAT).** A CRT has `ld = 2.5 cm`, `d = 0.6 cm`, `L = 24 cm`, `Ea = 2500 V`. Find the deflection sensitivity in mm/V (3 decimals).

**Q7 (NAT).** A Lissajous figure is tangent to a horizontal line at 3 points and a vertical line at 1 point; fx = 500 Hz. Find fy in Hz.

**Q8 (NAT).** An ellipse Lissajous (equal-frequency) has y-intercept 2 cm and y-max 4 cm. Find the phase difference in degrees.

<details><summary>🔑 Solutions</summary>

**Q1 → (b).** `S = ldL/(2dEa)` ⇒ inversely proportional to Ea.

**Q2 → (b).** The internal sawtooth time-base sweeps the X plates.

**Q3 → (c).** A straight diagonal line means φ = 0° or 180°.

**Q4 → (b).** The 9 MΩ series resistor raises input impedance and bandwidth (10× attenuation).

**Q5 → (b).** Nyquist: `fs > 2·fmax` (practical DSOs use more).

**Q6.**
```
S = ld·L/(2·d·Ea) = (0.025 × 0.24)/(2 × 0.006 × 2500)
  = 0.006 / 30 = 2.0×10⁻⁴ m/V = 0.200 mm/V
```
**S = 0.200 mm/V.**

**Q7.**
```
fy/fx = 3/1 = 3  ⇒  fy = 3 × 500 = 1500 Hz
```
**fy = 1500 Hz.**

**Q8.**
```
sin φ = A/B = 2/4 = 0.5  ⇒  φ = 30°
```
**φ = 30°.**

</details>

---

## 🔧 Electrical Machines: Transformers I — EMF Equation, Turns Ratio & No-Load Operation

### 📖 Concept Deep Dive

A **transformer** transfers energy between circuits via a mutual magnetic flux, changing voltage/current levels at (ideally) constant frequency and power. Round 5 begins with the fundamentals.

**EMF equation.** A sinusoidal flux `φ = φm·sin(ωt)` links `N` turns, inducing `e = −N dφ/dt`. The **RMS** induced EMF works out to:

```
E = 4.44 · f · N · φm
```

The constant **4.44 = π√2** arises from the RMS value of a sinusoid (form factor 1.11 × derivative factor). Here `φm = Bm × Ac` (peak flux density × core area). EMF **per turn** `= 4.44 f φm` is the **same** for primary and secondary (both link the same mutual flux):

```
E1 = 4.44 f N1 φm      E2 = 4.44 f N2 φm
E1/E2 = N1/N2 = a  (turns ratio)
```

**Ideal transformer.** No losses, no leakage, infinite core permeability: `V1/V2 = N1/N2 = a` and `I1/I2 = N2/N1 = 1/a`, so **VA in = VA out** and impedance transforms as `Z' = a²·Z` (referring secondary to primary).

**No-load operation.** With the secondary open, the primary draws only a small **no-load current `I0`** that does two jobs:
- **Magnetising component `Iµ = I0·sin φ0`** — sets up the mutual flux (lags V1 by 90°, purely reactive).
- **Working/core-loss component `Iw = I0·cos φ0`** — supplies hysteresis + eddy-current (iron) losses (in phase with V1).

```
I0 = √(Iw² + Iµ²)
Iw = I0 cos φ0  (core-loss component)
Iµ = I0 sin φ0  (magnetising component)
No-load power factor  cos φ0 = Iw/I0 = Pi/(V1·I0)
Core loss  Pi = V1·I0·cos φ0
```

The no-load power factor is **very low (≈ 0.1–0.3)** and lagging, because `Iµ ≫ Iw`. On no load the input power essentially equals the **constant iron loss** (basis of the open-circuit test).

| Quantity | Ideal | Practical (no-load) |
|---|---|---|
| Primary current | 0 | small `I0` (Iµ + Iw) |
| Core | lossless, µ→∞ | hysteresis + eddy loss |
| V1/V2 | `= N1/N2` | ≈ N1/N2 (small drop) |
| Power factor | — | very low lagging |

> 💎 **KEY RESULT** — `E = 4.44 f N φm` with `φm = Bm·Ac`. No-load current splits into `Iµ = I0 sinφ0` (magnetising) and `Iw = I0 cosφ0` (core loss); `I0 = √(Iµ² + Iw²)`.

> 🧠 **MEMORY HOOK** — "**4.44 f N φ** — Four-forty-four, Frequency, N turns, Flux." No-load: "**I-mu makes the flux, I-w pays the iron.**"

> ⚠️ **TRAP ALERT** — The **4.44** factor uses **peak flux φm** (and `Bm`), not RMS flux. And EMF **per turn** is identical on both windings — a favourite one-liner question.

### 📐 Formula Sheet

| Quantity | Formula | Notes |
|---|---|---|
| EMF equation | `E = 4.44 f N φm` | φm = Bm·Ac |
| EMF per turn | `= 4.44 f φm` | same both sides |
| Turns ratio | `a = N1/N2 = V1/V2 = I2/I1` | — |
| Impedance transfer | `Z' = a²·Z` | refer to primary |
| No-load current | `I0 = √(Iw² + Iµ²)` | — |
| Magnetising comp. | `Iµ = I0 sin φ0` | reactive |
| Core-loss comp. | `Iw = I0 cos φ0` | in phase |
| No-load pf | `cos φ0 = Pi/(V1 I0)` | low lagging |

### 🧮 Solved Examples

**Example 1 — EMF equation (PYQ style).** A single-phase transformer has 400 primary turns on a core of cross-section 0.01 m², with peak flux density `Bm = 1.1 T`, at 50 Hz. Find the primary induced EMF and EMF per turn.

```
φm = Bm × Ac = 1.1 × 0.01 = 0.011 Wb
E1 = 4.44 f N1 φm = 4.44 × 50 × 400 × 0.011
   = 4.44 × 50 × 4.4 = 976.8 V
EMF per turn = 4.44 × 50 × 0.011 = 2.442 V
```

**E1 ≈ 976.8 V, EMF/turn ≈ 2.44 V.** ✔

**Example 2 — No-load current.** A transformer on no load draws `I0 = 0.8 A` at a power factor of 0.25 lagging from a 230 V supply. Find the magnetising and core-loss components and the core loss.

```
cos φ0 = 0.25  ⇒  sin φ0 = √(1 − 0.25²) = √0.9375 = 0.968
Iw = I0 cos φ0 = 0.8 × 0.25 = 0.20 A
Iµ = I0 sin φ0 = 0.8 × 0.968 = 0.774 A
Pi = V1·I0·cos φ0 = 230 × 0.8 × 0.25 = 46 W
```

**Iw = 0.20 A, Iµ = 0.774 A, core loss Pi = 46 W.** ✔

### ⚠️ Common Traps
1. **φm is peak flux**, `φm = Bm·Ac` — don't use RMS flux in 4.44.
2. **EMF per turn is equal** on primary and secondary (same mutual flux).
3. **No-load pf is low lagging** (Iµ ≫ Iw), not near unity.
4. **Iw supplies iron loss**, Iµ sets up flux — don't swap them.
5. **Impedance transforms as a²** (square of turns ratio), not a.
6. **Frequency constant:** a transformer does not change frequency — `f` is the supply frequency in `4.44 f N φm`.

### 📝 Test (8 questions)

**Q1 (MCQ).** In `E = 4.44 f N φm`, φm represents:
(a) RMS flux  (b) peak (maximum) flux  (c) average flux  (d) flux density

**Q2 (MCQ).** The EMF per turn in a transformer is:
(a) higher on the primary  (b) higher on the secondary  (c) the same on both windings  (d) zero

**Q3 (MCQ).** The magnetising component of no-load current:
(a) is in phase with V1  (b) lags V1 by 90°  (c) leads V1 by 90°  (d) supplies core loss

**Q4 (MCQ).** On no load, the input power to a transformer is approximately equal to:
(a) copper loss  (b) iron (core) loss  (c) output power  (d) zero

**Q5 (MCQ).** A load impedance Z on the secondary, referred to the primary (turns ratio a), becomes:
(a) aZ  (b) a²Z  (c) Z/a  (d) Z/a²

**Q6 (NAT).** A transformer has φm = 0.02 Wb, 250 turns, 50 Hz. Find the induced EMF (V).

**Q7 (NAT).** A transformer draws I0 = 1.2 A at 0.2 pf lagging. Find the magnetising component (A, 3 decimals).

**Q8 (NAT).** A 2000/200 V transformer has a 50 Ω resistive load on the secondary. Find the load resistance referred to the primary (Ω).

<details><summary>🔑 Solutions</summary>

**Q1 → (b).** φm = peak flux.

**Q2 → (c).** Same mutual flux ⇒ equal EMF per turn.

**Q3 → (b).** Iµ is reactive, lagging V1 by 90°.

**Q4 → (b).** No-load input ≈ constant iron loss.

**Q5 → (b).** `Z' = a²Z`.

**Q6.**
```
E = 4.44 × 50 × 250 × 0.02 = 4.44 × 50 × 5 = 1110 V
```
**E = 1110 V.**

**Q7.**
```
sin φ0 = √(1 − 0.2²) = √0.96 = 0.980
Iµ = I0 sin φ0 = 1.2 × 0.980 = 1.176 A
```
**Iµ ≈ 1.176 A.**

**Q8.**
```
a = 2000/200 = 10
R' = a²·R = 100 × 50 = 5000 Ω
```
**R' = 5000 Ω (5 kΩ).**

</details>

---

## 🔧 Power Electronics: Power Semiconductor Devices — Diode, BJT, MOSFET, IGBT, Thyristor

### 📖 Concept Deep Dive

Round 5 opens with the **device family** — knowing each switch's control, carriers, speed and power range answers a large share of conceptual MCQs.

**Power diode.** A two-terminal, **uncontrolled** switch — conducts when forward biased, blocks when reverse biased. Key non-ideality is **reverse recovery** (stored charge `Qrr`, recovery time `trr`). Types: general-purpose, fast-recovery (for choppers/inverters), Schottky (low `Vf`, very fast, low voltage).

**BJT (power).** A **current-controlled, bipolar** (both carriers) three-terminal device; base current controls collector current (`Ic = β·Ib`). Needs continuous base drive, suffers **second breakdown**, and is relatively slow. Largely superseded by MOSFET/IGBT but still examined.

**Power MOSFET.** A **voltage-controlled, unipolar** (majority-carrier) device — the gate voltage controls conduction with almost no steady gate current. **Fastest** switching (hundreds of kHz–MHz), so used in SMPS. On-state is resistive (`Rds(on)`), which has a **positive temperature coefficient** → devices share current naturally, **easy to parallel**. Best for **low-voltage, high-frequency** applications; on-loss rises at high voltage.

**IGBT.** A **voltage-controlled** hybrid — a MOSFET gate driving a BJT-like output. Combines the MOSFET's **easy gate drive** with the BJT's **low conduction drop** at high voltage/current. Operates at **medium-high frequency** (tens of kHz), dominating motor drives, UPS, and inverters in the ~600 V–6.5 kV range. Minor **tail current** at turn-off (stored charge) adds switching loss.

**Thyristor (SCR).** A **semi-controlled** (gate turns ON, not OFF), four-layer **latching** device. Highest power-handling (kV, kA) of all — HVDC, large rectifiers. Line-commutated; needs forced commutation in DC circuits. Latching current > holding current.

| Device | Control | Carriers | Switch freq | Power / voltage | Drive |
|---|---|---|---|---|---|
| Diode | uncontrolled | bipolar | — | high | none |
| BJT | current | bipolar | low | medium | continuous Ib |
| MOSFET | voltage | unipolar | **highest** | low-V, high-f | gate voltage |
| IGBT | voltage | bipolar | medium-high | high-V, high-I | gate voltage |
| Thyristor | semi (ON only) | bipolar | low | **highest** | gate pulse |

> 💎 **KEY RESULT** — **MOSFET = voltage-controlled, unipolar, fastest, +ve temp-coeff Rds(on) (easy to parallel).** **IGBT = voltage-controlled hybrid, high-V/high-I, medium freq.** **Thyristor = latching, semi-controlled, highest power.**

> 🧠 **MEMORY HOOK** — "**MOSFET = fast & light (low V, high f); IGBT = heavy & quick-ish (high V, med f); Thyristor = heaviest & slow (highest power).**"

> ⚠️ **TRAP ALERT** — MOSFET's `Rds(on)` has a **positive** temperature coefficient → self-balancing, so MOSFETs **parallel easily**; BJTs (negative coeff) do not. The SCR gate can only turn the device **ON**, never OFF — turn-off needs commutation.

### 📐 Formula Sheet

| Quantity | Formula / fact | Notes |
|---|---|---|
| BJT gain | `Ic = β·Ib` | current-controlled |
| MOSFET on-loss | `Pcond = Irms²·Rds(on)` | resistive drop |
| IGBT on-loss | `Pcond ≈ Vce(sat)·Iavg` | voltage-type drop |
| Thyristor latching | `IL > IH` | latch vs hold |
| Diode recovery | `Qrr, trr` | reverse recovery |
| Switch-freq order | MOSFET > IGBT > BJT > SCR | — |

### 🧮 Solved Examples

**Example 1 — MOSFET conduction loss.** A power MOSFET with `Rds(on) = 0.05 Ω` carries an RMS current of 10 A. Find the conduction loss. If temperature rise doubles Rds(on), find the new loss.

```
Pcond = Irms²·Rds(on) = 10² × 0.05 = 100 × 0.05 = 5 W
If Rds(on) → 0.10 Ω:  Pcond = 100 × 0.10 = 10 W
```

**5 W, rising to 10 W hot** — the positive temperature coefficient is why paralleled MOSFETs self-balance (a hotter device takes less current). ✔

**Example 2 — IGBT vs MOSFET conduction.** An IGBT with `Vce(sat) = 2 V` carries an average current of 20 A. Compare its conduction loss with a MOSFET of `Rds(on) = 0.1 Ω` at the same 20 A (RMS).

```
IGBT:   Pcond ≈ Vce(sat)·Iavg = 2 × 20 = 40 W
MOSFET: Pcond = Irms²·Rds(on) = 20² × 0.1 = 400 × 0.1 = 40 W
```

At 20 A they are comparable here; but as current rises the **MOSFET's I²R loss grows quadratically** while the IGBT's `Vce·I` grows only linearly — which is why **IGBTs win at high current/voltage**. ✔

### ⚠️ Common Traps
1. **MOSFET Rds(on) temperature coefficient is positive** (good for paralleling); BJT is negative (thermal runaway).
2. **SCR gate turns it ON only** — turn-off requires current to fall below holding (commutation).
3. **MOSFET = unipolar; IGBT & BJT = bipolar.** MOSFET conduction is resistive; IGBT has a near-constant Vce(sat) drop.
4. **Latching current (turn-on) > holding current (stay-on)** for an SCR.
5. **Diode reverse recovery** causes a reverse current spike — matters in hard-switched converters.
6. **Frequency order:** MOSFET (fastest) > IGBT > BJT > thyristor (slowest).

### 📝 Test (8 questions)

**Q1 (MCQ).** Which device is voltage-controlled and unipolar?
(a) BJT  (b) MOSFET  (c) SCR  (d) power diode

**Q2 (MCQ).** The on-state resistance Rds(on) of a power MOSFET has a temperature coefficient that is:
(a) negative  (b) positive  (c) zero  (d) undefined

**Q3 (MCQ).** A thyristor's gate terminal can:
(a) turn it on and off  (b) turn it on only  (c) turn it off only  (d) control conduction continuously

**Q4 (MCQ).** For the highest power-handling capability, the preferred device is:
(a) MOSFET  (b) BJT  (c) thyristor  (d) Schottky diode

**Q5 (MCQ).** An IGBT combines the input of a MOSFET with the output characteristic of a:
(a) diode  (b) BJT  (c) SCR  (d) TRIAC

**Q6 (NAT).** A MOSFET with Rds(on) = 0.08 Ω carries 12 A RMS. Find the conduction loss (W).

**Q7 (NAT).** An IGBT with Vce(sat) = 1.8 V conducts an average current of 30 A. Find the conduction loss (W).

**Q8 (NAT).** A MOSFET conduction loss is 18 W at Rds(on) = 0.05 Ω. Find the RMS current (A, 1 decimal).

<details><summary>🔑 Solutions</summary>

**Q1 → (b).** MOSFET: voltage-controlled, majority-carrier (unipolar).

**Q2 → (b).** Positive temperature coefficient → easy paralleling.

**Q3 → (b).** SCR gate turns it ON only; turn-off needs commutation.

**Q4 → (c).** Thyristor handles the highest voltage/current (HVDC, large rectifiers).

**Q5 → (b).** IGBT = MOSFET gate + BJT-like output.

**Q6.**
```
Pcond = Irms²·Rds(on) = 12² × 0.08 = 144 × 0.08 = 11.52 W
```
**Pcond = 11.52 W.**

**Q7.**
```
Pcond = Vce(sat)·Iavg = 1.8 × 30 = 54 W
```
**Pcond = 54 W.**

**Q8.**
```
Irms = √(Pcond/Rds(on)) = √(18/0.05) = √360 = 18.97 A
```
**Irms ≈ 19.0 A.**

</details>

---

## 📊 Progress

```
Measuring Instruments  [██████████████████░░]  Round 4 · topic 19/22 (CRO)
Electrical Machines    [█░░░░░░░░░░░░░░░░░░░░]  Round 5 · topic  1/20 (Transformers I) 🔄
Power Electronics       [█░░░░░░░░░░░░░░░░░░░░]  Round 5 · topic  1/20 (Power devices) 🔄
```

- **Section A (Measurements):** DVM → Q-meter → final revision still ahead to close round 4.
- **Section B (Machines):** **round 5 started** at the transformer fundamentals. 🔄
- **Section C (Power Electronics):** **round 5 started** at the device family. 🔄

> 🎯 **Today's three one-liners:** (1) **CRO sensitivity S = ldL/(2d·Ea) (∝ 1/Ea); Lissajous fy/fx = tangency ratio.** (2) **E = 4.44 f N φm; no-load Iµ = I0 sinφ0, Iw = I0 cosφ0.** (3) **MOSFET = fast/unipolar/+ve-coeff; IGBT = high-V hybrid; SCR = highest power, ON-only gate.**

*Two sections reset to pass 5 today. Correctness over length — verify any value marked "verify" before the exam.*
