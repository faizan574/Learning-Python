# ⚡ GATE Technical Revision — Day 63 (2026-09-22)

*Measurements closes round 3 with a master formula sheet + mixed PYQ numericals, while Machines digs into the transformer equivalent circuit & regulation and Power Electronics revisits the power diode's switching behaviour.*

📅 Tech Day 63 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics · 🔁 Measurements R3 complete · Machines/PE R4 (topic 2)

> 🧠 **MEMORY HOOK** — Today: a **Measurements consolidation** (one-page formula sheet + mixed numericals across the whole syllabus), the **transformer equivalent circuit & voltage regulation** (`%VR ≈ %R cosφ ± %X sinφ`), and the **power diode's static/dynamic behaviour** (`Qrr = ½·I_RM·t_rr`, freewheeling action).

---

## 🔧 Measuring Instruments: Measurements Revision — Master Formula Sheet + Mixed GATE Numericals

### 📖 Concept Deep Dive

This slot consolidates the entire Measurements syllabus into a single revision pass. The goal is not new theory but **fast recall of the load-bearing relations** and the numerical reflexes GATE tests. Group the syllabus into six threads:

**1. Errors & statistics.** Every measurement carries error. *Absolute error* `δA = Am − At`; *relative* `εr = δA/At`. **Limiting (guarantee) errors** combine by worst case: for `y = a·b/c`, the fractional limiting error adds — `(δy/y) = (δa/a) + (δb/b) + (δc/c)`. For *random* errors the **probable error** and **standard deviation** describe a Gaussian spread; the standard deviation of the mean falls as `1/√n`.

**2. Analog meters (PMMC, MI, EMMC).** All develop a **deflecting torque** balanced by a control (spring) torque `Tc = K·θ`, so `θ = Td/K`. PMMC: `Td = NBAI` ⇒ linear scale, DC only, reads **average**. MI and EMMC: `Td = ½ I²(dL/dθ)` (MI) or `Td = I1 I2 (dM/dθ)` (EMMC) ⇒ square-law tendency, read **true RMS**, work on AC & DC. Range extension: **shunt** `Rsh = Im·Rm/(I − Im)`, **multiplier** `Rse = Rm(m − 1)` with `m = V/Vm`.

**3. Power & energy.** Dynamometer wattmeter reads `P = VI cosφ`. Three-phase: **two-wattmeter method** `P = W1 + W2`, `tanφ = √3 (W1 − W2)/(W1 + W2)`. Induction energy meter: `driving torque ∝ power`, registration `∝ ∫P dt`; **meter constant** in rev/kWh.

**4. Potentiometers & instrument transformers.** DC potentiometer measures EMF by **null comparison** against a standardised working current. CT/PT introduce **ratio error** and **phase-angle error**; CT secondary must **never be opened** on load.

**5. Bridges.** DC: Wheatstone `Rx = R2·R3/R1` at balance; Kelvin double bridge for low R. AC bridges balance both **magnitude and phase**: Maxwell (L via C), Hay (high-Q L), Schering (capacitance & `tanδ`), Wien (frequency).

**6. CRO & digital.** CRO deflection `y = (L·Ea·ld)/(2·d·Va)`; Lissajous for frequency/phase. Digital: dual-slope DVM (noise-immune, `reading ∝ Vin`), counter `f = count/gate-time`.

> 💎 **KEY RESULT** — Torque balance `θ = Td/K` underlies every analog meter; PMMC linear/average, MI & EMMC square-law/true-RMS. Two-wattmeter: `tanφ = √3(W1 − W2)/(W1 + W2)`. Product/quotient errors **add fractionally**.

> ⚠️ **TRAP ALERT** — A wattmeter reads `VI cosφ`, **not** VI; a two-wattmeter reading can go **negative** when `φ > 60°`. Average-responding AC meters are calibrated for **sine** — a non-sinusoidal input introduces form-factor error `kf = RMS/average` (`1.11` for sine).

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Limiting error (product/quotient) | `δy/y = δa/a + δb/b + δc/c` |
| Std. deviation of mean | `σm = σ/√n` |
| Meter deflection | `θ = Td/K` |
| PMMC torque | `Td = N·B·A·I` |
| MI / EMMC torque | `Td = ½ I²(dL/dθ)` ; `Td = I1 I2 (dM/dθ)` |
| Shunt / multiplier | `Rsh = Im Rm/(I − Im)` ; `Rse = Rm(m − 1)` |
| Two-wattmeter pf angle | `tanφ = √3 (W1 − W2)/(W1 + W2)` |
| Wheatstone balance | `Rx = R2 R3 / R1` |
| Maxwell bridge | `Lx = R2 R3 C` ; `Rx = R2 R3 / R4` |
| Form factor (sine) | `kf = RMS/avg = 1.11` |

### 🧮 Solved Examples

**Example 1 — Two-wattmeter method (classic PYQ).**
Two wattmeters read `W1 = 1000 W` and `W2 = 400 W` on a balanced 3-φ load. Find total power and power factor.

```
P = W1 + W2 = 1000 + 400 = 1400 W
tanφ = √3 (W1 − W2)/(W1 + W2) = √3 (600/1400) = 1.732 × 0.4286 = 0.742
φ = 36.6°  ⇒  cosφ = 0.803  (lagging)
```

**Example 2 — Shunt design.**
A PMMC movement has `Im = 1 mA`, `Rm = 100 Ω`. Find the shunt to read **1 A** full scale.

```
Rsh = Im Rm /(I − Im) = (1e-3 × 100)/(1 − 1e-3)
    = 0.1 / 0.999 = 0.1001 Ω  ≈ 100.1 mΩ
Multiplying power m = I/Im = 1000  (each 1 division now = 1000×)
```

### ⚠️ Common Traps

1. **Adding errors in quadrature vs. linearly** — *limiting/guarantee* errors add **linearly**; *random* errors (independent) combine in **quadrature** `√(Σδ²)`. GATE specifies which.
2. **PMMC on AC** — reads (near) **zero** for pure AC (average of sine = 0); needs a rectifier.
3. **Two-wattmeter sign** — at `φ = 60°`, `W2 = 0`; beyond `60°`, `W2` is **negative** — reverse its connection and subtract.
4. **CT open secondary** — dangerously high induced voltage & core saturation; PT secondary may be open, **not** CT.
5. **Form factor error** — average-responding, RMS-calibrated meters err on non-sinusoids; only true-RMS meters (thermal/EMMC/electronic-RMS) are safe.
6. **Ayrton shunt** — the shunt resistance is **always in circuit**; do not use the plain `Rsh` formula per range without accounting for the tapped ladder.

### 📝 Test (5 MCQ + 3 NAT)

**Q1 (MCQ).** A PMMC instrument has a linear scale because its deflecting torque is proportional to:
(a) I²  (b) I  (c) √I  (d) 1/I

**Q2 (MCQ).** In the two-wattmeter method, one wattmeter reads zero. The power factor angle is:
(a) 0°  (b) 30°  (c) 60°  (d) 90°

**Q3 (MCQ).** Which bridge is best suited to measure a **high-Q** inductor?
(a) Maxwell  (b) Hay  (c) Anderson  (d) Schering

**Q4 (MCQ).** A dual-slope DVM is preferred because it:
(a) is the fastest converter  (b) rejects line-frequency noise via integration  (c) needs no clock  (d) has infinite resolution

**Q5 (MCQ).** For `P = V²/R`, if V has 1% and R has 2% limiting error, the limiting error in P is:
(a) 1%  (b) 3%  (c) 4%  (d) 2%

**Q6 (NAT).** Two wattmeters read 800 W and −200 W. Find the total three-phase power (W).

**Q7 (NAT).** A 0–150 V voltmeter uses a 3 kΩ/V movement (i.e. `Im = 1/3000` A). Find the multiplier resistance (kΩ) for the 150 V range if `Rm` is negligible.

**Q8 (NAT).** A coil in a Maxwell bridge balances with `R2 = R3 = 1000 Ω` and `C = 0.5 µF`. Find the unknown inductance (H).

<details><summary>🔑 Solutions</summary>

**Q1 — (b) I.** PMMC `Td = NBAI ∝ I`; with `Tc = Kθ`, `θ ∝ I` ⇒ uniform (linear) scale.

**Q2 — (c) 60°.** `W2 = VL IL cos(30° + φ)` = 0 ⇒ `30° + φ = 90°` ⇒ `φ = 60°`.

**Q3 — (b) Hay.** Hay's bridge (series RC in one arm) suits **high-Q** coils; Maxwell suits **medium Q (1–10)**; Anderson for **low Q**.

**Q4 — (b).** Integrating (dual-slope) conversion averages the input over an integer number of mains cycles, cancelling 50/60 Hz interference (**NMRR**).

**Q5 — (c) 4%.** `P = V²/R` ⇒ `δP/P = 2(δV/V) + (δR/R) = 2(1%) + 2% = 4%`.

**Q6 — 600 W.** `P = W1 + W2 = 800 + (−200) = 600 W`. (A negative reading means `φ > 60°`.)

**Q7 — 450 kΩ.**
```
Sensitivity 3000 Ω/V ⇒ total resistance on 150 V range
Rtotal = 3000 × 150 = 450 000 Ω = 450 kΩ
Rse = Rtotal − Rm ≈ 450 kΩ  (Rm negligible)
```

**Q8 — 0.5 H.**
```
Maxwell:  Lx = R2 R3 C = 1000 × 1000 × 0.5e-6
        = 1e6 × 0.5e-6 = 0.5 H
```
</details>

---

## 🔧 Electrical Machines: Transformers II — Equivalent Circuit, Phasor Diagram, Voltage Regulation & Per-Unit

### 📖 Concept Deep Dive

A **practical transformer** differs from the ideal by four non-idealities: winding resistance (`R1, R2`), leakage reactance (`X1, X2`), a **magnetising branch** (finite mutual flux needs current) and **core loss**. The **exact equivalent circuit** places `R1, X1` in series on the primary, a **shunt magnetising branch** (`R0` for core loss, `X0` for magnetising) across the primary EMF, and `R2, X2` in series on the secondary.

**No-load current.** At no load the primary draws `I0`, resolved into two components:
- **Core-loss (active) component** `Iw = I0 cosφ0` — supplies hysteresis + eddy loss.
- **Magnetising (reactive) component** `Iµ = I0 sinφ0` — sets up the mutual flux.

So `I0 = √(Iw² + Iµ²)`, `R0 = V1/Iw`, `X0 = V1/Iµ`, and `no-load pf = cosφ0 = Iw/I0` (very low, 0.1–0.2).

**Referring to one side.** To simplify, transfer secondary quantities to the primary using the **turns ratio** `K = N1/N2 = V1/V2`:

```
R2' = R2·(N1/N2)² = R2·K²      X2' = X2·K²
R01 = R1 + R2'      X01 = X1 + X2'      Z01 = √(R01² + X01²)
(referred to secondary: R02 = R01/K², X02 = X01/K²)
```

Because `I0` is only ~2–5% of full-load current, the magnetising branch is often **moved to the input terminals** (approximate equivalent circuit) or **neglected** for regulation/efficiency numericals.

**Phasor diagram (loaded, lagging pf).** Take `V2` as reference; load current `I2` lags `V2` by `φ`. The secondary induced EMF must overcome the resistive drop `I2 R02` (in phase with `I2`) and the reactive drop `I2 X02` (leading `I2` by 90°):

```
E2 = V2 + I2(R02 + jX02)     (phasor sum)
|E2| ≈ V2 + I2 R02 cosφ + I2 X02 sinφ   (for lagging pf, small angle)
```

**Voltage regulation.** The rise in secondary terminal voltage from full load to no load, as a fraction of rated voltage:

```
VR = (E2 − V2)/V2 × 100
Approx:  %VR ≈ (I2 R02 cosφ ± I2 X02 sinφ)/V2 × 100
        = %R cosφ ± %X sinφ
  (+ for lagging pf, − for leading pf)
```

where `%R = I2 R02/V2 × 100` and `%X = I2 X02/V2 × 100` are the per-unit resistive and reactive drops.

- **Zero regulation** occurs at a **leading** pf when `%R cosφ = %X sinφ` ⇒ `tanφ = %R/%X` (leading).
- **Maximum regulation** occurs (lagging) when `tanφ = %X/%R`, i.e. load angle equals the equivalent impedance angle; then `%VR_max = %Z = √(%R² + %X²)`.

**Per-unit (pu) system.** Normalise every quantity to a chosen base: `base impedance Z_base = V_base²/S_base = V_base/I_base`. Then `Z_pu = Z_actual/Z_base`. Per-unit values are the same referred to either side (the `K²` cancels), which is exactly why the **%R and %X** above are so convenient — the pu leakage impedance is identical on primary and secondary.

> 💎 **KEY RESULT** — `%VR ≈ %R cosφ ± %X sinφ` (+ lagging, − leading). Max regulation `%VR_max = √(%R² + %X²)` at `tanφ = %X/%R` lagging; zero regulation at leading pf `tanφ = %R/%X`.

> 🧠 **MEMORY HOOK** — Regulation follows the **load's reactive nature**: inductive (lagging) load ⇒ voltage droops ⇒ **positive** regulation; capacitive (leading) load can **raise** output voltage ⇒ negative regulation.

> ⚠️ **TRAP ALERT** — `R2' = R2·K²` uses `K²`, **not** `K`. Regulation is defined **per rated (full-load) current** — halve the load and the drop terms halve. The `±` sign flips with pf type; leading pf can give **negative** VR.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Turns ratio | `K = N1/N2 = V1/V2 = I2/I1` |
| Refer R, X to primary | `R2' = R2 K²` ; `X2' = X2 K²` |
| Equivalent (referred to 1) | `R01 = R1 + R2'` ; `X01 = X1 + X2'` |
| No-load current | `I0 = √(Iw² + Iµ²)` |
| Core-loss / magnetising comp. | `Iw = I0 cosφ0` ; `Iµ = I0 sinφ0` |
| Voltage regulation | `%VR ≈ %R cosφ ± %X sinφ` |
| %R, %X | `%R = I2 R02/V2 × 100` ; `%X = I2 X02/V2 × 100` |
| Max regulation | `%VR_max = √(%R² + %X²)` at `tanφ = %X/%R (lag)` |
| Base impedance (pu) | `Z_base = V_base²/S_base` |

### 🧮 Solved Examples

**Example 1 — Voltage regulation.**
A transformer has `%R = 2%` and `%X = 5%`. Find the regulation at (i) 0.8 pf lagging, (ii) 0.8 pf leading.

```
(i) lagging:  %VR = %R cosφ + %X sinφ = 2(0.8) + 5(0.6)
             = 1.6 + 3.0 = 4.6 %
(ii) leading: %VR = %R cosφ − %X sinφ = 2(0.8) − 5(0.6)
             = 1.6 − 3.0 = −1.4 %   (voltage rises)
```

**Example 2 — Max regulation & the pf at which it occurs.**
For the same transformer, find the maximum regulation and the load pf at which it occurs.

```
%VR_max = √(%R² + %X²) = √(2² + 5²) = √29 = 5.39 %
tanφ = %X/%R = 5/2 = 2.5  ⇒  φ = 68.2° (lagging)
cosφ = 0.371 lagging
Check: 2(0.371) + 5(0.928) = 0.742 + 4.64 = 5.39 % ✓
```

### ⚠️ Common Traps

1. **`K` vs `K²`** — impedances refer with `K²`, voltages/currents with `K`. Mixing these is the No. 1 numerical slip.
2. **pf sign in regulation** — `+` lagging, `−` leading. Forgetting the sign flip makes leading-pf answers wrong.
3. **Neglecting `I0`** — fine for regulation/efficiency, but **not** when the question asks for the no-load current or core loss.
4. **Regulation ≠ efficiency** — regulation is a **voltage** ratio (leakage `R, X`); efficiency is a **power** ratio (copper + core loss). Different circuit elements.
5. **Per-unit side confusion** — pu leakage impedance is the **same** on both sides; do not multiply pu values by `K²`.
6. **"Max efficiency" vs "max regulation"** — max efficiency at `copper loss = core loss`; max regulation at `tanφ = X/R`. Distinct conditions.

### 📝 Test (5 MCQ + 3 NAT)

**Q1 (MCQ).** Secondary resistance `R2` referred to the primary becomes:
(a) `R2·K`  (b) `R2/K`  (c) `R2·K²`  (d) `R2/K²`   (with `K = N1/N2`)

**Q2 (MCQ).** The magnetising component of no-load current mainly supplies:
(a) core loss  (b) copper loss  (c) the mutual flux  (d) the load

**Q3 (MCQ).** Voltage regulation is **negative** when the load power factor is:
(a) unity  (b) lagging  (c) leading (sufficiently)  (d) zero lagging

**Q4 (MCQ).** Maximum voltage regulation occurs when the load pf angle satisfies:
(a) `tanφ = R/X` leading  (b) `tanφ = X/R` lagging  (c) `φ = 0`  (d) `φ = 90°`

**Q5 (MCQ).** In per-unit, the leakage impedance referred to primary and to secondary are:
(a) different by `K²`  (b) different by `K`  (c) equal  (d) reciprocals

**Q6 (NAT).** A transformer has `%R = 1.5%`, `%X = 4%`. Find the regulation (%) at 0.6 pf lagging.

**Q7 (NAT).** No-load test: `V1 = 230 V`, `I0 = 0.5 A`, `P0 = 40 W`. Find the magnetising current component `Iµ` (A).

**Q8 (NAT).** `%R = 2%`, `%X = 6%`. Find the maximum voltage regulation (%).

<details><summary>🔑 Solutions</summary>

**Q1 — (c) `R2·K²`.** Impedance transfers as the square of the turns ratio.

**Q2 — (c) the mutual flux.** `Iµ = I0 sinφ0` sets up the core flux (reactive); `Iw = I0 cosφ0` supplies core loss.

**Q3 — (c) leading.** At sufficiently leading pf, `%R cosφ − %X sinφ < 0`, so the terminal voltage **rises** on load.

**Q4 — (b) `tanφ = X/R` lagging.** Differentiating `%R cosφ + %X sinφ` gives max at this angle; the value is `√(R² + X²)`.

**Q5 — (c) equal.** Per-unit leakage impedance is identical on both sides — the `K²` cancels against the base change.

**Q6 — 4.1 %.**
```
%VR = %R cosφ + %X sinφ = 1.5(0.6) + 4(0.8)
    = 0.9 + 3.2 = 4.1 %
```

**Q7 — 0.436 A.**
```
Iw = P0/V1 = 40/230 = 0.174 A
Iµ = √(I0² − Iw²) = √(0.5² − 0.174²)
   = √(0.25 − 0.0303) = √0.2197 = 0.469 A
```
(≈ 0.47 A.)

**Q8 — 6.32 %.**
```
%VR_max = √(%R² + %X²) = √(2² + 6²) = √40 = 6.32 %
```
</details>

---

## 🔧 Power Electronics: Power Diode & Switching Behaviour — Static/Dynamic Characteristics, Reverse Recovery, Freewheeling Diode

### 📖 Concept Deep Dive

The **power diode** is the simplest power switch — an uncontrolled, two-terminal PN device that conducts when forward-biased and blocks when reverse-biased. Compared with a signal diode it has a **lightly-doped, wide n⁻ drift region** to support large reverse voltage, at the cost of higher on-state drop and slower switching.

**Static (steady-state) characteristics.**
- **Forward:** negligible current until the **threshold/cut-in voltage** (`≈ 0.7 V` for Si), then current rises steeply. The on-state model is a battery `VF0` in series with a small **bulk/on-state resistance** `rF`: `VF = VF0 + IF·rF`.
- **Reverse:** a tiny **leakage current** `IS` flows until the **reverse breakdown (avalanche) voltage** `V_BR`; operation must stay below the rated **PIV / VRRM**.

**Dynamic (switching) characteristics — reverse recovery.** When a conducting diode is suddenly reverse-biased, the **stored minority charge** in the drift region must be removed before the junction can block. During this time the diode conducts in **reverse**:

```
Reverse recovery time:  trr = ta + tb
 ta = time for current to fall from 0 to peak reverse −I_RM (charge removal)
 tb = time for I_RM to decay back toward zero (junction recovers)
Softness factor:  S = tb/ta
Peak reverse current:  I_RM = (di/dt)·ta
Stored (recovered) charge:  Qrr = ½·I_RM·trr   (triangular approx.)
```

Combining `I_RM = (di/dt)·ta`, `trr = ta(1+S)`, and `Qrr = ½ I_RM trr`:

```
ta = √( 2·Qrr / [(di/dt)(1+S)] )
I_RM = √( 2·Qrr·(di/dt)/(1+S) )
trr = √( 2·Qrr·(1+S)/(di/dt) )
```

For an **abrupt (snappy) diode** `S → 0`, giving the common GATE forms:
```
trr ≈ √(2 Qrr /(di/dt))        I_RM ≈ √(2 Qrr (di/dt))
```

- **Fast-recovery diodes** have small `trr` (chopper/inverter use).
- **Schottky diodes** (metal–semiconductor) are **majority-carrier** devices — negligible stored charge, near-zero `trr`, low `VF (~0.3 V)`, but low `V_BR` and higher leakage.

**Freewheeling diode (FWD / flyback diode).** Placed **across an inductive load** (or across the load in a rectifier/chopper), reverse-biased in normal conduction. When the source is switched off, the inductor current cannot change instantly; the FWD provides a **path** for this current to circulate ("freewheel") and decay through the load, instead of forcing a destructive voltage spike `L·di/dt` across the switch. Benefits: (i) protects the switching device, (ii) improves the **load power factor and reduces output ripple** in rectifiers, (iii) makes load current more continuous.

> 💎 **KEY RESULT** — `Qrr = ½·I_RM·trr`; for `S≈0`, `trr = √(2Qrr/(di/dt))` and `I_RM = √(2 Qrr (di/dt))`. Schottky ⇒ majority-carrier ⇒ `trr ≈ 0`, `VF ≈ 0.3 V`, low `V_BR`.

> 🧠 **MEMORY HOOK** — **FWD = a bypass road** for inductor current when the main switch shuts: current keeps flowing, the voltage spike is clamped.

> ⚠️ **TRAP ALERT** — `Qrr` is the **charge (area)** swept in reverse, not a current. Reverse recovery current is **negative** (into the source) and stresses the device via `I_RM·V`. A Schottky's virtue is **no minority storage**, *not* a lower forward drop alone.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| On-state drop | `VF = VF0 + IF·rF` |
| Reverse recovery time | `trr = ta + tb` |
| Softness factor | `S = tb/ta` |
| Peak reverse current | `I_RM = (di/dt)·ta` |
| Stored charge | `Qrr = ½·I_RM·trr` |
| trr (general) | `trr = √(2 Qrr (1+S)/(di/dt))` |
| I_RM (general) | `I_RM = √(2 Qrr (di/dt)/(1+S))` |
| trr, I_RM (S≈0) | `trr = √(2Qrr/(di/dt))` ; `I_RM = √(2 Qrr·di/dt)` |

### 🧮 Solved Examples

**Example 1 — Reverse recovery (abrupt diode).**
A diode carries current that falls at `di/dt = 50 A/µs`. Its stored charge `Qrr = 20 µC`. Assuming an abrupt recovery (`S ≈ 0`), find `trr` and the peak reverse current `I_RM`.

```
di/dt = 50 A/µs = 50 × 10⁶ A/s ,  Qrr = 20 × 10⁻⁶ C
trr = √(2 Qrr /(di/dt)) = √(2 × 20e-6 / 50e6)
    = √(40e-6 / 50e6) = √(8 × 10⁻¹³) = 8.94 × 10⁻⁷ s ≈ 0.894 µs
I_RM = (di/dt)·trr  (since ta ≈ trr for S≈0)
     = 50e6 × 0.894e-6 = 44.7 A
Check: I_RM = √(2 Qrr·di/dt) = √(2×20e-6×50e6) = √2000 = 44.7 A ✓
```

**Example 2 — On-state drop & conduction loss.**
A power diode has `VF0 = 0.9 V` and `rF = 5 mΩ`. Find the forward drop and conduction loss at `IF = 100 A` (dc).

```
VF = VF0 + IF·rF = 0.9 + 100 × 0.005 = 0.9 + 0.5 = 1.4 V
Pcond = VF·IF = 1.4 × 100 = 140 W
```

### ⚠️ Common Traps

1. **`Qrr` units** — coulombs (charge), often µC; do not treat it as a current or a time.
2. **Sign of I_RM** — the recovery current is a **reverse** (negative) spike; its *magnitude* stresses the diode and the source.
3. **Schottky reverse voltage** — great `trr` and low `VF`, but **low `V_BR`** and higher leakage — unsuitable for high-voltage blocking.
4. **Forgetting the freewheeling path** — omitting the FWD across an inductive load produces a large `L·di/dt` spike that destroys the switch.
5. **PIV vs on-state** — reverse rating (`VRRM/PIV`) and forward drop are separate specs; a fast diode is not automatically a high-voltage diode.
6. **Recovery loss scaling** — reverse-recovery loss rises with **frequency** (`≈ f × ½ Qrr V`); it dominates in high-frequency converters, motivating fast/Schottky diodes.

### 📝 Test (5 MCQ + 3 NAT)

**Q1 (MCQ).** The wide, lightly-doped `n⁻` drift region of a power diode primarily provides:
(a) low forward drop  (b) high reverse blocking voltage  (c) fast recovery  (d) high leakage

**Q2 (MCQ).** Reverse recovery charge `Qrr` represents:
(a) a leakage current  (b) the stored minority charge removed during turn-off  (c) the forward drop  (d) the junction capacitance

**Q3 (MCQ).** A Schottky diode has near-zero `trr` because it is:
(a) a majority-carrier device with negligible stored charge  (b) heavily doped  (c) a wide-bandgap device  (d) reverse-biased

**Q4 (MCQ).** A freewheeling diode across an inductive load:
(a) increases the voltage spike  (b) provides a path for inductor current when the switch opens  (c) blocks the load current  (d) rectifies the source

**Q5 (MCQ).** Reverse-recovery power loss in a converter increases with:
(a) lower switching frequency  (b) higher switching frequency  (c) larger `rF`  (d) lower `di/dt` only

**Q6 (NAT).** A diode has `Qrr = 8 µC`, `di/dt = 40 A/µs`, abrupt recovery. Find `trr` (µs).

**Q7 (NAT).** For Q6, find the peak reverse recovery current `I_RM` (A).

**Q8 (NAT).** A power diode has `VF0 = 0.8 V`, `rF = 4 mΩ`. Find conduction loss (W) at `IF = 150 A` dc.

<details><summary>🔑 Solutions</summary>

**Q1 — (b).** The wide, lightly-doped drift region supports the reverse depletion field ⇒ high blocking voltage (with the trade-off of higher `VF` and slower recovery).

**Q2 — (b).** `Qrr` is the excess minority charge stored in the drift region during forward conduction, swept out during reverse recovery.

**Q3 — (a).** Metal–semiconductor junction conducts by majority carriers only ⇒ no minority storage ⇒ `trr ≈ 0`.

**Q4 — (b).** The FWD circulates the inductor current after the switch opens, clamping the `L·di/dt` spike.

**Q5 — (b).** Recovery energy `≈ ½ Qrr V` is dissipated **each cycle**, so loss `∝ f`.

**Q6 — 0.632 µs.**
```
trr = √(2 Qrr /(di/dt)) = √(2 × 8e-6 / 40e6)
    = √(16e-6/40e6) = √(4 × 10⁻¹³) = 6.32 × 10⁻⁷ s = 0.632 µs
```

**Q7 — 25.3 A.**
```
I_RM = √(2 Qrr·di/dt) = √(2 × 8e-6 × 40e6)
     = √(640) = 25.3 A
(check: I_RM = (di/dt)·trr = 40e6 × 0.632e-6 = 25.3 A ✓)
```

**Q8 — 210 W.**
```
VF = 0.8 + 150 × 0.004 = 0.8 + 0.6 = 1.4 V
Pcond = VF·IF = 1.4 × 150 = 210 W
```
</details>

---

### 📊 GATE Tech Coverage Progress

```
Measuring Instruments  ████████████████████ 21/21  ✅ Round 3 COMPLETE
Electrical Machines    ██░░░░░░░░░░░░░░░░░░░  2/19  🔁 Round 4
Power Electronics       █░░░░░░░░░░░░░░░░░░░  2/18  🔁 Round 4
```

*Measurements has completed its third full revision pass. Machines and Power Electronics are two topics into round 4. Next: Transformers III (losses, efficiency, OC/SC tests) and the power diode's switching (SCR I) thread.*

> ✅ **Self-check before you close:** Can you (1) write the two-wattmeter pf formula and its sign rule, (2) derive `%VR_max = √(%R² + %X²)` and the pf angle at which it occurs, and (3) compute `trr` and `I_RM` from `Qrr` and `di/dt`? If any is shaky, re-read that section's KEY RESULT.
