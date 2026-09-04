# ⚡ GATE Technical Revision — Day 44 (2026-09-02)

*Round-3 pass 2 — error propagation, the transformer equivalent circuit, and diode switching. The maths that decides NAT answers.*

📅 Tech Day 44 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics · 🔁 Round-3 pass 2

> 🧠 **MEMORY HOOK** — Today's trio all reward careful arithmetic: **combine errors correctly**, **refer the transformer to one side**, and **track diode reverse recovery**. Each is a classic GATE NAT source.

---

## 🔧 Measuring Instruments: Error Analysis I — Types & Propagation

### 📖 Concept Deep Dive

Every measurement carries error. GATE tests two things: **classifying** the error and **propagating** it through a calculation.

**Classification.**

- **Gross errors** — human mistakes (misreading, wrong recording, wrong connection). Not amenable to statistics; avoided by care and repetition.
- **Systematic errors** — consistent, repeatable bias. Sub-types: **instrumental** (friction, loading, wrong calibration), **environmental** (temperature, humidity, stray fields), and **observational** (parallax). They shift *every* reading the same way and can, in principle, be corrected.
- **Random errors** — unpredictable scatter from many small unknown causes; follow a Gaussian distribution and are treated statistically (mean, standard deviation).

**Error definitions.** For a measured value `Am` and true value `At`:

```
Absolute error   e = Am − At
Relative error   εr = e / At          (often ×100 for %)
Correction       C = −e = At − Am
Accuracy A = 1 − |εr| ;  % accuracy = A × 100
```

**Limiting (guarantee) error.** Manufacturers quote a **limiting error** as `± a%` of full scale. The absolute limit is fixed by the range; the *relative* limiting error at a reading `x` is larger the smaller `x` is: `%error(x) = (a × FSD)/x`.

**Propagation of limiting errors** — the key GATE skill. For a quantity computed from measured inputs, worst-case (limiting) relative errors combine as:

| Operation | Result relative error (worst case) |
|---|---|
| Sum `y = a + b` | `εy = (|a|εa + |b|εb)/(a+b)` (weighted) |
| Difference `y = a − b` | `εy = (|a|εa + |b|εb)/|a−b|` — **error blows up** for close values |
| Product `y = a·b` | `εy = εa + εb` |
| Quotient `y = a/b` | `εy = εa + εb` |
| Power `y = aⁿ` | `εy = |n|·εa` |
| General `y = f(...)` | `εy = Σ |(∂y/∂xi)(xi/y)| εxi` |

For products, quotients and powers, **relative errors add** (each weighted by the exponent's magnitude). For the *statistical* (RSS, root-sum-square) combination of *random* errors, you instead add in quadrature: `εy = √(Σ(exponent·εxi)²)` — but for **guarantee/limiting** errors, use the **linear sum** (worst case).

> 💎 **KEY RESULT** — Products & quotients: **relative errors add**. Power `aⁿ`: multiply by `|n|`. **Subtraction of near-equal quantities magnifies error** — avoid it in measurement design.

> ⚠️ **TRAP ALERT** — Limiting (guarantee) errors combine by **linear addition** (worst case); only **random** errors combine by root-sum-square (quadrature). Mixing the two is the top GATE mistake here.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Absolute / relative error | `e = Am − At` ; `εr = e/At` |
| Product/quotient error | `εy = εa + εb` |
| Power-law error | `y = k·aᵖ·bᵍ ⇒ εy = |p|εa + |q|εb` |
| Guarantee error at reading | `%error = (a% × FSD)/reading` |
| Random-error RSS combine | `εy = √( (p·εa)² + (q·εb)² )` |

```
Rule of thumb:  add RELATIVE errors for ×, ÷ and powers.
Guarantee error → linear sum (worst case).  Random error → quadrature (RSS).
```

### 🧮 Solved Examples

**Example 1 — power from V and I.**
`R` is found from `P = V²/R`. If `V` has `±1%` and `R` has `±2%` limiting error, worst-case error in `P`?

- `P = V²·R⁻¹` ⇒ `εP = 2·εV + 1·εR = 2(1%) + 1(2%) = 4%`.
- Worst-case `P` error = **±4%**.

**Example 2 — resistor network (guarantee error at reading).**
Two resistors `R1 = 100 Ω ±1%` and `R2 = 150 Ω ±2%` in series. Total resistance and its limiting error?

- `Rt = 250 Ω`. Absolute errors: `ΔR1 = 1 Ω`, `ΔR2 = 3 Ω` → `ΔRt = 4 Ω`.
- `εRt = 4/250 = 1.6%`. So `Rt = 250 Ω ± 1.6%`.

```
Note: for a SERIES sum the ABSOLUTE errors add (1 Ω + 3 Ω = 4 Ω), then divide by total.
```

> 🧠 **MEMORY HOOK** — Series/parallel resistor error: **add absolute errors, then convert to % of the total**. Product/ratio: **add the percentages directly**.

### ⚠️ Common Traps

1. Adding **absolute** errors for a product (only relative/% errors add there).
2. Forgetting the **exponent weight** (`V²` doubles V's % error).
3. Using **RSS** for guarantee errors — guarantee = **linear worst-case sum**.
4. Ignoring how **subtraction of close values** magnifies relative error.
5. Confusing **correction** (`−e`) with error sign.
6. Treating a **systematic** bias as if repetition/averaging removes it (it doesn't — only random error averages out).

### 📝 Test — Error Analysis (8 Q)

1. Parallax while reading a scale is a: (a) gross (b) systematic-observational (c) random (d) limiting error.
2. Random errors are best handled by: (a) correction factor (b) statistical averaging (c) recalibration (d) ignoring.
3. `P = I²R`, `I ±2%`, `R ±1%`. Worst-case error in P: (a) 3% (b) 4% (c) 5% (d) 6%.
4. For a product of two quantities, the relative errors: (a) subtract (b) add (c) multiply (d) average.
5. Guarantee (limiting) errors combine by: (a) RSS (b) linear sum (c) product (d) averaging.
6. **(NAT)** `Q = A·B²/C`. `A ±1%`, `B ±2%`, `C ±1.5%`. Worst-case % error in Q?
7. **(NAT)** Two resistors in series: `200 Ω ±1%` and `300 Ω ±2%`. Limiting % error of the total (to 2 dp)?
8. **(NAT)** A `0–100 V`, `±0.8% FSD` voltmeter reads `40 V`. Guarantee % error at this reading?

<details><summary>🔑 Solutions</summary>

**Q1 — (b).** Observational systematic error (consistent viewing-angle bias).

**Q2 — (b).** Random errors average out statistically.

**Q3 — (c).** `εP = 2(2%) + 1(1%) = 5%`.

**Q4 — (b).** Relative errors add for products.

**Q5 — (b).** Linear (worst-case) sum.

**Q6.** `εQ = 1(1%) + 2(2%) + 1(1.5%) = 1 + 4 + 1.5 = 6.5%`.

**Q7.** `ΔRt = 0.01×200 + 0.02×300 = 2 + 6 = 8 Ω`; `Rt = 500 Ω`; `εRt = 8/500 = 1.6%`.

**Q8.** `%err = (0.8% × 100)/40 = 0.8/40 × 100 = 2.0%`.

</details>

---

## 🔧 Electrical Machines: Transformer Equivalent Circuit, Regulation & Per-Unit

### 📖 Concept Deep Dive

The **exact equivalent circuit** has series `R1, X1` (primary) and `R2, X2` (secondary) with a shunt branch (`Rc ∥ Xm`) representing core loss and magnetisation. Because the shunt branch draws only ~2-5% current, we simplify by **referring everything to one side** and pushing the shunt branch to the terminals — the **approximate equivalent circuit**.

**Referring to the primary:** secondary quantities scale by `a² = (N1/N2)²`:

```
R2' = a²·R2 ,  X2' = a²·X2
Equivalent series values (referred to primary):
  Req1 = R1 + a²R2 = R1 + R2'
  Xeq1 = X1 + a²X2 = X1 + X2'
  Zeq1 = √(Req1² + Xeq1²)
```

**Voltage regulation** is the change in secondary terminal voltage from no-load to full-load, expressed as a fraction of the no-load (or rated) voltage, at a given load power factor:

```
Approx per-unit regulation (referred to secondary):
  VR = (I2·Req2·cosφ ± I2·Xeq2·sinφ) / V2
  '+' for LAGGING pf,  '−' for LEADING pf
In terms of pu resistance εr and pu reactance εx:
  VR ≈ εr·cosφ ± εx·sinφ
```

Regulation is **positive (voltage drops) for lagging** loads and can be **negative (voltage rises) for leading** loads. **Zero regulation** occurs when `εr·cosφ = εx·sinφ` with a **leading** pf, i.e. `tanφ = εr/εx` (leading). **Maximum regulation** occurs at a **lagging** pf where `tanφ = εx/εr`, giving `VRmax = √(εr² + εx²) = pu Zeq`.

**Per-unit (pu) system.** Choosing base VA and base voltage, `Zpu = Z·(VAbase)/(Vbase²)`. Per-unit impedance is **the same referred to either side**, which is exactly why pu is so convenient for transformers and power systems. The pu impedance also equals the SC-test voltage in pu: `Zpu = Vsc(pu)`.

> 💎 **KEY RESULT** — `VR ≈ εr·cosφ ± εx·sinφ` (+lag, −lead). **Max regulation at lagging** `tanφ = εx/εr` → `VRmax = √(εr²+εx²)`. **Zero regulation at leading** `tanφ = εr/εx`.

> ⚠️ **TRAP ALERT** — The **sign** flips with pf type: lagging **adds** the reactance term (bigger drop), leading **subtracts** it (can raise the voltage). Getting the ± wrong is the classic regulation error.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Referred resistance / reactance | `Req = R1 + a²R2` ; `Xeq = X1 + a²X2` |
| pu resistance / reactance | `εr = I·Req/V` ; `εx = I·Xeq/V` |
| Voltage regulation | `VR = εr·cosφ ± εx·sinφ` (+lag, −lead) |
| Max regulation | `VRmax = √(εr² + εx²)` at `tanφ = εx/εr` (lag) |
| Zero regulation | at leading pf, `tanφ = εr/εx` |
| pu impedance | `Zpu = Z·VAbase/Vbase²` = `Vsc(pu)` |
| Efficiency at load fraction x | `η = (x·S·cosφ)/(x·S·cosφ + Pi + x²·Pcu,fl)` |

### 🧮 Solved Examples

**Example 1 — regulation at lagging pf.**
A transformer has `εr = 0.02` (2%) and `εx = 0.05` (5%) pu. Find regulation at full load, `0.8` pf lagging.

- `cosφ = 0.8`, `sinφ = 0.6`.
- `VR = εr·cosφ + εx·sinφ = 0.02(0.8) + 0.05(0.6) = 0.016 + 0.030 = 0.046 = 4.6%`.

**Example 2 — max regulation & its pf.**
Same transformer: maximum regulation and the pf at which it occurs?

- `VRmax = √(εr² + εx²) = √(0.02² + 0.05²) = √(0.0004 + 0.0025) = √0.0029 = 0.0539 = 5.39%`.
- Occurs at `tanφ = εx/εr = 0.05/0.02 = 2.5 ⇒ φ = 68.2°`, `cosφ = 0.371` **lagging**.

```
Cross-check: at that pf, VR = 0.02·cos68.2° + 0.05·sin68.2° = 0.02(0.371)+0.05(0.928)=0.0074+0.0464=0.0539 ✓
```

> 🧠 **MEMORY HOOK** — **Max regulation** magnitude = **pu Zeq** = `√(εr²+εx²)`; it happens at a **lagging** pf whose angle matches the impedance angle (`tanφ = εx/εr`).

### ⚠️ Common Traps

1. Using `a` instead of **`a²`** to refer R and X.
2. Wrong **± sign** for lead/lag in the regulation formula.
3. Thinking regulation is always positive — **leading** loads can give **negative** regulation.
4. Confusing the pf for **max regulation** (`tanφ = εx/εr`, lag) with that for **zero regulation** (`tanφ = εr/εx`, lead).
5. Forgetting pu impedance is **identical on both sides**.
6. Mixing SC-test data (gives `Req`, `Xeq`, Cu loss) with OC-test data (gives `Rc`, `Xm`, core loss).

### 📝 Test — Transformer Equivalent Circuit (8 Q)

1. Secondary reactance referred to primary is multiplied by: (a) a (b) a² (c) 1/a (d) 1/a².
2. Voltage regulation for a leading-pf load is often: (a) always positive (b) negative or small (c) infinite (d) zero always.
3. Max voltage regulation equals: (a) εr (b) εx (c) √(εr²+εx²) (d) εr+εx.
4. Per-unit impedance referred to HV vs LV side is: (a) different (b) the same (c) scaled by a (d) scaled by a².
5. The OC (open-circuit) test primarily yields: (a) Req, Xeq (b) Rc, Xm (c) regulation (d) copper loss.
6. **(NAT)** `εr = 0.03`, `εx = 0.04` pu. Voltage regulation (%) at 0.6 pf lagging?
7. **(NAT)** For the same transformer, maximum regulation (%)?
8. **(NAT)** A 100 kVA transformer has SC test giving `Req = 0.02 pu`, `Xeq = 0.06 pu`. pu impedance (magnitude, 4 dp)?

<details><summary>🔑 Solutions</summary>

**Q1 — (b) a².**

**Q2 — (b).** Leading load reduces (can reverse) the drop.

**Q3 — (c).** `√(εr²+εx²)`.

**Q4 — (b).** pu impedance is side-independent.

**Q5 — (b).** OC test → shunt branch `Rc, Xm` (core loss).

**Q6.** `VR = 0.03(0.6) + 0.04(0.8) = 0.018 + 0.032 = 0.050 = 5.0%`.

**Q7.** `VRmax = √(0.03²+0.04²) = √(0.0009+0.0016) = √0.0025 = 0.05 = 5.0%` (here the 0.6 pf-lag happens to coincide with the max, since tanφ=0.04/0.03=1.33 → φ=53.1°, cos=0.6).

**Q8.** `Zpu = √(0.02² + 0.06²) = √(0.0004+0.0036) = √0.004 = 0.0632`.

</details>

---

## 🔧 Power Electronics: Power Diode & Switching Behaviour

### 📖 Concept Deep Dive

The power diode is the simplest switch: it conducts when forward-biased and blocks when reverse-biased. But at power levels its **dynamic (switching)** behaviour — not the ideal V-I curve — is what generates GATE questions.

**Static characteristics.** Forward drop `VF ≈ 0.7–1.0 V` (rises modestly with current); reverse leakage is tiny until the **reverse breakdown / peak inverse voltage (PIV)**. Power diodes are built with a lightly-doped **drift region** to hold high reverse voltage, which raises `VF` versus a signal diode — a fundamental trade-off between blocking voltage and conduction drop.

**Reverse recovery.** When a conducting diode is suddenly reverse-biased, the stored minority-carrier charge must be swept out before it can block. During this **reverse recovery time `trr`**, current **reverses** and flows as a negative spike of peak `IRR` before decaying:

```
trr = ta + tb          (ta = charge removal, tb = decay)
Stored charge  Qrr ≈ ½ · IRR · trr   (triangular approximation)
Softness factor S = tb / ta
di/dt during ta sets IRR:  IRR ≈ (di/dt)·ta ,  and  Qrr = ½ IRR trr
```

Combining, `IRR ≈ √(2·Qrr·(di/dt)·ta/trr)`; for a given `Qrr` and `di/dt`, a common GATE result is `trr ≈ √(2 Qrr / (di/dt))` and `IRR ≈ √(2 Qrr (di/dt))` (when `tb ≪ ta`, so `trr ≈ ta`).

**Diode types by recovery.**

| Type | `trr` | Use |
|---|---|---|
| General-purpose (line) | large (µs) | 50/60 Hz rectifiers |
| Fast / ultrafast recovery | small (ns) | choppers, inverters, SMPS |
| Schottky | ~0 (majority-carrier) | low-voltage, high-freq (no minority storage) |

**Freewheeling diode (FWD).** Placed across an inductive load, it provides a path for inductor current when the main switch turns off, **clamping** the voltage spike (`L·di/dt`) and improving load-current continuity and input power factor in rectifiers/choppers. Without it, switching an inductive load produces a destructive voltage transient.

> 💎 **KEY RESULT** — `Qrr = ½·IRR·trr`; with `trr ≈ ta`: `trr = √(2Qrr/(di/dt))`, `IRR = √(2·Qrr·(di/dt))`. **Schottky ≈ no reverse recovery** (majority-carrier). **FWD** clamps inductive turn-off spikes.

> ⚠️ **TRAP ALERT** — Reverse-recovery **current spikes in the negative direction** and stresses the device; it grows with **di/dt**. Don't assume a diode blocks instantly at turn-off.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Reverse recovery time | `trr = ta + tb` |
| Stored charge (triangular) | `Qrr = ½·IRR·trr` |
| Peak reverse current | `IRR = (di/dt)·ta ≈ √(2·Qrr·di/dt)` (tb≪ta) |
| trr from Qrr & di/dt | `trr ≈ √(2·Qrr/(di/dt))` (tb≪ta) |
| Softness factor | `S = tb/ta` |
| Forward drop | `VF ≈ 0.7–1.0 V` (rises with drift region / PIV) |

### 🧮 Solved Examples

**Example 1 — reverse recovery.**
A diode has `Qrr = 4 µC` and turns off at `di/dt = 50 A/µs`. Assuming `tb ≪ ta`, find `trr` and `IRR`.

- `di/dt = 50 A/µs = 50×10⁶ A/s`; `Qrr = 4×10⁻⁶ C`.
- `trr = √(2·Qrr/(di/dt)) = √(2×4×10⁻⁶ / 50×10⁶) = √(8×10⁻⁶/5×10⁷) = √(1.6×10⁻¹³) = 4.0×10⁻⁷ s = 0.4 µs`.
- `IRR = (di/dt)·trr = 50×10⁶ × 0.4×10⁻⁶ = 20 A`.
- Check: `Qrr = ½·IRR·trr = ½×20×0.4µs = 4 µC ✓`.

**Example 2 — freewheeling need.**
A `10 A` current flows in an `L = 5 mH` load; a switch opens in `1 µs`. Voltage spike without a FWD?

- `V = L·di/dt = 5×10⁻³ × (10 / 1×10⁻⁶) = 5×10⁻³ × 10⁷ = 50,000 V`.
- A `50 kV` transient — clearly destructive; the **FWD** provides an alternate path and clamps it to ~`0.7 V`.

> 🧠 **MEMORY HOOK** — Reverse recovery loss `≈ ¼·VR·IRR·trr·fsw` (order estimate) — it **rises with switching frequency**, which is why fast/Schottky diodes are used in high-`fsw` converters.

### ⚠️ Common Traps

1. Assuming a diode turns off instantly — **`trr`** and the negative **`IRR`** spike are real.
2. Ignoring that `IRR` and recovery loss **scale with di/dt and fsw**.
3. Using a slow (line) diode in a high-frequency chopper (huge recovery loss).
4. Forgetting the **freewheeling diode** across inductive loads (voltage spike).
5. Thinking Schottky has high `VF` — it has **low `VF`** and ~zero `trr`, but **low PIV** and higher leakage.
6. Confusing **PIV** (reverse blocking rating) with forward drop.

### 📝 Test — Power Diode (8 Q)

1. Reverse recovery arises because of: (a) stray capacitance (b) stored minority charge (c) gate charge (d) thermal runaway.
2. A Schottky diode's reverse recovery time is: (a) very large (b) ~zero (c) equal to a PN diode (d) infinite.
3. The freewheeling diode across an inductive load: (a) increases spikes (b) clamps the turn-off spike (c) blocks load current (d) does nothing.
4. Reverse recovery current `IRR` increases with: (a) lower di/dt (b) higher di/dt (c) lower voltage (d) temperature only.
5. High reverse blocking (PIV) in a power diode is achieved by: (a) heavy doping (b) a lightly-doped drift region (c) Schottky contact (d) thin wafer.
6. **(NAT)** `Qrr = 2 µC`, `di/dt = 100 A/µs`, `tb ≪ ta`. Reverse recovery time `trr` (µs, 2 dp)?
7. **(NAT)** For Q6, peak reverse current `IRR` (A)?
8. **(NAT)** `L = 2 mH` carrying `5 A`; switch opens in `2 µs`. Voltage spike without FWD (kV)?

<details><summary>🔑 Solutions</summary>

**Q1 — (b).** Stored minority-carrier charge must be removed.

**Q2 — (b).** Majority-carrier device → negligible `trr`.

**Q3 — (b).** Provides a freewheel path, clamping the `L·di/dt` spike.

**Q4 — (b).** `IRR` grows with di/dt.

**Q5 — (b).** Lightly-doped drift region holds reverse voltage.

**Q6.** `trr = √(2×2×10⁻⁶ / 100×10⁶) = √(4×10⁻⁶/10⁸) = √(4×10⁻¹⁴) = 2×10⁻⁷ s = 0.20 µs`.

**Q7.** `IRR = (di/dt)·trr = 100×10⁶ × 0.2×10⁻⁶ = 20 A`.

**Q8.** `V = L·di/dt = 2×10⁻³ × (5/2×10⁻⁶) = 2×10⁻³ × 2.5×10⁶ = 5000 V = 5 kV`.

</details>

---

> 🧠 **DAY-44 WRAP (Round-3 pass 2)** — **Errors:** ×/÷ add relative errors, power `aⁿ` ×|n|, guarantee = linear sum (random = RSS). **Transformer:** refer by `a²`, `VR = εr·cosφ ± εx·sinφ` (+lag/−lead), `VRmax = √(εr²+εx²)`, pu impedance same both sides. **Diode:** `Qrr = ½ IRR trr`, `IRR = √(2 Qrr·di/dt)`, Schottky ≈ no `trr`, FWD clamps inductive spikes. ⚡

**🔁 Round-3 progress:** Measurements ▓▓░░░░░░░░ · Machines ▓▓░░░░░░░░ · Power Electronics ▓▓░░░░░░░░ — round-3 building. 🎓 Power Systems joins as a 4th subject once the reference PDFs arrive.
