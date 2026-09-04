# ⚡ GATE Technical Revision — Day 45 (2026-09-04)

*Round-3 pass 3 — statistics of measurement, transformer efficiency, and the SCR. Numbers you can defend under exam pressure.*

📅 Tech Day 45 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics · 🔁 Round-3 pass 3

> 🧠 **MEMORY HOOK** — Today: **how random data behaves** (mean, σ, probable error), **where transformer power goes** (losses & max efficiency), and **how a thyristor latches on** (two-transistor model, holding/latching current). Three high-yield NAT topics.

---

## 🔧 Measuring Instruments: Error Analysis II — Statistical Treatment

### 📖 Concept Deep Dive

When the same quantity is measured many times, **random errors** produce a spread of readings that follows the **normal (Gaussian) distribution**. Statistics extracts the best estimate and its uncertainty.

**Central tendency & spread.** For `n` readings `x1…xn`:

```
Arithmetic mean   x̄ = (Σxi)/n
Deviation         di = xi − x̄     (note Σdi = 0)
Standard deviation (population)  σ = √( Σdi² / n )
Standard deviation (sample, n<20)  s = √( Σdi² / (n−1) )     [Bessel's correction]
Variance = σ²
```

The **standard deviation `σ`** is the root-mean-square of the deviations and is the primary measure of precision — small σ = tightly grouped = precise.

**Gaussian curve properties.** The normal distribution is symmetric about the mean; ~**68.27%** of readings lie within `±1σ`, ~**95.45%** within `±2σ`, ~**99.73%** within `±3σ`. Two derived error measures:

```
Probable error (of one reading)   r = 0.6745 σ
Standard error of the mean        σm = σ / √n
Probable error of the mean        rm = 0.6745 σ / √n
```

The **probable error** `r = 0.6745σ` defines the band `x̄ ± r` that contains **50%** of the readings (half fall inside, half outside). The **standard error of the mean** `σ/√n` shrinks as `√n` — taking more readings improves the estimate of the mean, but with diminishing returns (to halve the uncertainty you need **4×** the readings).

**Combination of quantities (random/independent errors).** When a result depends on several independently-measured quantities, the standard deviations combine in **quadrature** (root-sum-square), weighted by sensitivity:

```
For y = f(x1,x2,…):  σy = √( Σ (∂y/∂xi)² · σxi² )
Sum/difference y = a ± b:  σy = √(σa² + σb²)
Product/quotient (relative):  (σy/y) = √( (σa/a)² + (σb/b)² )
```

> 💎 **KEY RESULT** — `σ = √(Σdi²/n)`; **probable error `r = 0.6745σ`** (50% band); **standard error of mean `= σ/√n`**. Independent random errors combine by **RSS (quadrature)**, unlike guarantee errors (linear sum).

> ⚠️ **TRAP ALERT** — Use `n` for population σ, `n−1` for a **small sample** (Bessel). And random errors combine by **quadrature**, whereas limiting/guarantee errors add **linearly** (Day 44).

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Mean | `x̄ = (Σxi)/n` |
| Standard deviation | `σ = √(Σdi²/n)` (sample: `/(n−1)`) |
| Probable error (single) | `r = 0.6745·σ` |
| Standard error of mean | `σm = σ/√n` |
| Probable error of mean | `rm = 0.6745·σ/√n` |
| RSS combination (sum) | `σy = √(σa² + σb²)` |
| Gaussian bands | `±1σ→68.3%`, `±2σ→95.5%`, `±3σ→99.7%` |

### 🧮 Solved Examples

**Example 1 — σ and probable error.**
Five readings: `100.1, 100.3, 99.8, 100.0, 99.8`. Find mean, σ (population), and probable error of a single reading.

- `x̄ = (100.1+100.3+99.8+100.0+99.8)/5 = 500.0/5 = 100.0`.
- Deviations: `+0.1, +0.3, −0.2, 0.0, −0.2`; squares: `0.01, 0.09, 0.04, 0, 0.04`; `Σdi² = 0.18`.
- `σ = √(0.18/5) = √0.036 = 0.1897 ≈ 0.19`.
- Probable error `r = 0.6745 × 0.19 = 0.128 ≈ 0.13`.

**Example 2 — combining independent errors.**
A resistance `R = V/I`. `V` measured with σ = 1% and `I` with σ = 2% (independent). Standard deviation of `R`?

- `(σR/R) = √( (σV/V)² + (σI/I)² ) = √(1² + 2²) = √5 = 2.236%`.
- So `R` carries ≈ **2.24%** standard (random) uncertainty — smaller than the 3% you'd get by linear (worst-case) addition.

> 🧠 **MEMORY HOOK** — Quadrature "rewards" independence: `√(1²+2²) = 2.24%` beats the linear `1+2 = 3%`. Use RSS for **random**, linear for **guaranteed** limits.

### ⚠️ Common Traps

1. Using `n` instead of `n−1` for a **small sample** standard deviation.
2. Confusing **probable error** (`0.6745σ`, 50% band) with standard deviation (68% band).
3. Forgetting the mean's error shrinks as **`σ/√n`**, not `σ/n`.
4. Adding random errors **linearly** (should be RSS).
5. Thinking more readings reduce **systematic** error — they don't (only random).
6. Dropping the **sensitivity weight** `(∂y/∂xi)` when quantities have different influence.

### 📝 Test — Statistics (8 Q)

1. About what % of Gaussian data lies within ±1σ? (a) 50% (b) 68.3% (c) 95.5% (d) 99.7%.
2. Probable error of a single reading equals: (a) 0.5σ (b) 0.6745σ (c) σ (d) 1.5σ.
3. The standard error of the mean is: (a) σ (b) σ/n (c) σ/√n (d) σ·√n.
4. Independent random errors combine by: (a) linear sum (b) quadrature (RSS) (c) product (d) subtraction.
5. Bessel's correction uses a divisor of: (a) n (b) n−1 (c) n+1 (d) 2n.
6. **(NAT)** Readings 10.2, 10.0, 9.8, 10.0 (four values). Population σ (2 dp)?
7. **(NAT)** For σ = 0.4 over 16 readings, standard error of the mean?
8. **(NAT)** Two independent lengths each ±0.3 mm (σ) are added. σ of the sum (mm, 2 dp)?

<details><summary>🔑 Solutions</summary>

**Q1 — (b).** 68.27%.

**Q2 — (b).** `r = 0.6745σ`.

**Q3 — (c).** `σ/√n`.

**Q4 — (b).** RSS/quadrature.

**Q5 — (b).** `n−1`.

**Q6.** `x̄ = 40.0/4 = 10.0`; deviations `+0.2,0,−0.2,0`; `Σdi² = 0.08`; `σ = √(0.08/4) = √0.02 = 0.141 ≈ 0.14`.

**Q7.** `σm = 0.4/√16 = 0.4/4 = 0.1`.

**Q8.** `σ = √(0.3² + 0.3²) = √(0.09+0.09) = √0.18 = 0.424 ≈ 0.42 mm`.

</details>

---

## 🔧 Electrical Machines: Transformer Losses, Efficiency & OC/SC Tests

### 📖 Concept Deep Dive

A transformer's losses split into two families:

**Core (iron) losses `Pi`** — constant, independent of load (they depend on flux, i.e. on V & f):
- **Hysteresis loss** `Ph = Kh·f·Bmᵡ` (Steinmetz exponent x ≈ 1.6–2).
- **Eddy-current loss** `Pe = Ke·f²·Bm²·t²` (t = lamination thickness).
Since `Bm ∝ V/f`, at constant applied voltage the core loss is essentially fixed.

**Copper (I²R) losses `Pcu`** — vary with the **square of load current** (`∝ load²`). At full load `Pcu,fl`; at a load fraction `x`, `Pcu = x²·Pcu,fl`.

**Efficiency.** For output apparent power `S`, load fraction `x`, and load pf `cosφ`:

```
η = (x·S·cosφ) / (x·S·cosφ + Pi + x²·Pcu,fl)
```

**Condition for maximum efficiency** — differentiate w.r.t. load: η is maximum when **variable loss = constant loss**, i.e. `x²·Pcu,fl = Pi`. The load fraction at max efficiency:

```
x* = √(Pi / Pcu,fl)      ⇒   maximum efficiency when copper loss = iron loss
kVA at ηmax = (rated kVA) × √(Pi / Pcu,fl)
```

**All-day (energy) efficiency** — for distribution transformers energised 24 h but lightly loaded much of the time, defined on **energy** (kWh) over a day, not power. Because core loss runs all day, distribution transformers are designed with **low core loss** (max efficiency at a fraction of full load):

```
ηall-day = (output energy in kWh over 24h) / (output energy + core-loss energy + copper-loss energy)
```

**The two tests** (referred earlier, Day 44):
- **Open-Circuit (OC) test** — rated voltage on LV, HV open → wattmeter reads **core loss `Pi`**; gives `Rc, Xm`.
- **Short-Circuit (SC) test** — reduced voltage on HV, LV shorted, rated current → wattmeter reads **full-load copper loss `Pcu,fl`**; gives `Req, Xeq`.

> 💎 **KEY RESULT** — Max efficiency when **Cu loss = iron loss**: `x* = √(Pi/Pcu,fl)`. Core loss (OC test) = constant; copper loss (SC test) `∝ load²`. Distribution transformer → judged by **all-day** efficiency.

> ⚠️ **TRAP ALERT** — Max efficiency is **not** at full load in general — it's at the load where `x²Pcu = Pi`. If `Pi < Pcu,fl`, `x* < 1` (max efficiency below full load).

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Copper loss at fraction x | `Pcu = x²·Pcu,fl` |
| Efficiency | `η = x·S·cosφ / (x·S·cosφ + Pi + x²·Pcu,fl)` |
| Max-efficiency load fraction | `x* = √(Pi/Pcu,fl)` |
| Condition for ηmax | `Pi = x²·Pcu,fl` (iron = copper) |
| kVA at ηmax | `S* = S·√(Pi/Pcu,fl)` |
| Hysteresis / eddy | `Ph = Kh f Bmˣ` ; `Pe = Ke f² Bm² t²` |

### 🧮 Solved Examples

**Example 1 — max-efficiency load.**
A `100 kVA` transformer has `Pi = 1 kW` (iron) and `Pcu,fl = 4 kW` (full-load copper). Find the load fraction and kVA at maximum efficiency.

- `x* = √(Pi/Pcu,fl) = √(1/4) = 0.5`.
- kVA at ηmax = `100 × 0.5 = 50 kVA`.

**Example 2 — efficiency at a given load.**
For the same transformer, efficiency at **half load, 0.8 pf**?

- Output = `x·S·cosφ = 0.5 × 100 × 0.8 = 40 kW`.
- Copper loss = `x²·Pcu,fl = 0.25 × 4 = 1 kW`; iron loss = 1 kW; total loss = 2 kW.
- `η = 40/(40+2) = 40/42 = 0.952 = 95.2%`.

```
Note: at half load, copper loss (1 kW) = iron loss (1 kW) → this IS the max-efficiency point.
```

> 🧠 **MEMORY HOOK** — At the max-efficiency load, the **two losses are equal** — spotting that (Cu = Fe) instantly tells you you're at ηmax.

### ⚠️ Common Traps

1. Assuming max efficiency is always at **full load** (only if `Pi = Pcu,fl`).
2. Forgetting copper loss scales as **load²** (not linearly).
3. Treating **core loss as load-dependent** — it's constant (V, f fixed).
4. Swapping OC (core loss) and SC (copper loss) tests.
5. Computing all-day efficiency on **power** instead of **energy (kWh)**.
6. Using apparent power (kVA) as output — output power is `kVA × cosφ`.

### 📝 Test — Transformer Efficiency (8 Q)

1. Core loss in a transformer is: (a) load-dependent (b) constant at fixed V,f (c) zero at no load (d) proportional to current.
2. Copper loss varies as: (a) load (b) load² (c) √load (d) constant.
3. Max efficiency occurs when: (a) Cu loss = 2×iron loss (b) iron loss = copper loss (c) load = full (d) pf = 1.
4. The SC test gives primarily: (a) core loss (b) full-load copper loss (c) regulation only (d) magnetising current.
5. All-day efficiency is based on: (a) power (b) energy (kWh) (c) kVA (d) pf.
6. **(NAT)** `Pi = 400 W`, `Pcu,fl = 1600 W`, rated 200 kVA. Load fraction at ηmax?
7. **(NAT)** For Q6, the kVA loading at maximum efficiency?
8. **(NAT)** A 50 kVA transformer, `Pi = 500 W`, `Pcu,fl = 800 W`, full load 0.8 pf. Efficiency (%) at full load (1 dp)?

<details><summary>🔑 Solutions</summary>

**Q1 — (b).** Constant (depends on flux, i.e. V & f).

**Q2 — (b).** load².

**Q3 — (b).** Iron loss = copper loss.

**Q4 — (b).** Full-load copper loss.

**Q5 — (b).** Energy (kWh) over 24 h.

**Q6.** `x* = √(400/1600) = √0.25 = 0.5`.

**Q7.** `200 × 0.5 = 100 kVA`.

**Q8.** Output `= 50 × 0.8 = 40 kW`; losses `= 500 + 800 = 1300 W = 1.3 kW`; `η = 40/(40+1.3) = 40/41.3 = 0.9685 = 96.9%`.

</details>

---

## 🔧 Power Electronics: Thyristor (SCR) I — Structure, Two-Transistor Model & Latching

### 📖 Concept Deep Dive

The **SCR (Silicon Controlled Rectifier)** is a **four-layer (P-N-P-N), three-terminal** (anode, cathode, gate) device — a semi-controlled latching switch. It has **three junctions J1, J2, J3**.

**V-I characteristic (three regions).**
- **Reverse blocking** — anode negative: J1 & J3 reverse-biased; blocks until reverse breakdown.
- **Forward blocking** — anode positive, no gate: J2 reverse-biased; only tiny leakage flows (device OFF).
- **Forward conduction** — after triggering: J2 breaks down / the structure latches; the SCR drops to ~`1–1.5 V` and conducts heavily.

**Two-transistor analogy.** The PNPN is split into a **PNP** and an **NPN** transistor, cross-coupled: the collector of each feeds the base of the other. With current gains `α1` and `α2`:

```
Anode current  IA = (α2·IG + ICO1 + ICO2) / (1 − (α1 + α2))
Turn-ON (latch) condition:   α1 + α2 → 1
```

As `(α1 + α2) → 1` the denominator → 0 and `IA` regenerates (rises rapidly) — **positive feedback latches the device on**. A gate pulse injects base current that raises `α2`, initiating the latch. Once latched, **the gate loses control** — the device stays on regardless of the gate.

**Latching vs holding current.**
- **Latching current `IL`** — the **minimum anode current** required to **latch** (keep the device on just after turn-on, at the moment the gate signal is removed). It is the higher of the two.
- **Holding current `IH`** — the **minimum anode current** to **maintain** conduction once fully latched; below `IH` the SCR turns off. `IL` is typically **2–3× `IH`**.

Turn-off requires reducing `IA` below `IH` (natural commutation in AC, or forced commutation in DC).

> 💎 **KEY RESULT** — Turn-on when `α1 + α2 ≈ 1` (regenerative latch). **Latching current `IL` > holding current `IH`** (typically `IL ≈ 2–3 IH`). Once on, the **gate loses control**; turn-off needs `IA < IH`.

> ⚠️ **TRAP ALERT** — **Latching** current is at **turn-on** (to establish conduction); **holding** current is at **turn-off** (below which it drops out). `IL > IH`, not the reverse.

### 📐 Formula Sheet

| Quantity | Relation |
|---|---|
| Anode current (2-transistor) | `IA = (α2·IG + ICO)/(1 − (α1+α2))` |
| Turn-on condition | `α1 + α2 → 1` |
| Latching vs holding | `IL ≈ 2 to 3 × IH` (IL > IH) |
| On-state voltage drop | `VT ≈ 1 – 1.5 V` |
| Finger voltage / forward breakover | `VBO` (forward without gate) |
| Gate reduces breakover | higher `IG` ⇒ lower `VBO` to trigger |

```
State map:   Reverse blocking | Forward blocking (OFF) | Forward conduction (ON, latched).
Gate: turns ON only.  Turn-OFF = reduce IA below IH (commutation).
```

### 🧮 Solved Examples

**Example 1 — latching after turn-on.**
An SCR has holding current `IH = 8 mA`. If latching current is about `2.5×` holding, estimate `IL`.

- `IL ≈ 2.5 × IH = 2.5 × 8 = 20 mA`.
- The anode current must exceed `20 mA` at the instant the gate pulse is removed for the device to stay latched.

**Example 2 — minimum gate-pulse width (inductive load).**
An SCR (`IL = 50 mA`) switches an `R-L` load with `di/dt` limited so the anode current rises at `20 A/ms`. Minimum gate-pulse duration to ensure latching?

- Anode current must reach `IL = 50 mA = 0.05 A`.
- Rise rate `= 20 A/ms = 20 A/1000 µs = 0.02 A/µs`.
- Time to reach `IL`: `t = IL/(di/dt) = 0.05 / 0.02 = 2.5 µs`.
- The gate pulse must last **≥ 2.5 µs** so anode current exceeds `IL` before the gate is removed.

> 🧠 **MEMORY HOOK** — With an **inductive** load the anode current rises **slowly**, so the gate pulse (or a train of pulses) must be **wide enough** for `IA` to cross `IL` — otherwise the SCR fails to latch.

### ⚠️ Common Traps

1. Swapping **latching** (turn-on, higher) and **holding** (turn-off, lower) current.
2. Believing the gate can turn the SCR **off** — it can only turn it **on**.
3. Forgetting the SCR is **semi-controlled** (not fully controllable like a GTO/IGBT).
4. Ignoring that an **inductive load** needs a wider/pulse-train gate signal to latch.
5. Thinking forward conduction needs J2 avalanche only — the **regenerative latch** (`α1+α2→1`) is the mechanism.
6. Assuming a higher gate current raises breakover voltage — it **lowers** the voltage needed to trigger.

### 📝 Test — Thyristor I (8 Q)

1. An SCR has how many junctions? (a) 2 (b) 3 (c) 4 (d) 1.
2. In the two-transistor model, turn-on occurs when: (a) α1+α2 → 0 (b) α1+α2 → 1 (c) α1 = α2 (d) α1·α2 = 1.
3. Latching current compared to holding current is: (a) smaller (b) equal (c) larger (d) zero.
4. Once the SCR is ON, the gate: (a) controls current (b) turns it off (c) loses control (d) reverses polarity.
5. To turn an SCR OFF, the anode current must fall below: (a) latching current (b) holding current (c) gate current (d) breakover current.
6. **(NAT)** `IH = 6 mA`, latching ≈ 3× holding. Latching current (mA)?
7. **(NAT)** An SCR needs `IL = 60 mA`; anode current rises at `0.03 A/µs`. Minimum gate-pulse width (µs)?
8. **(NAT)** In an SCR, `α1 = 0.4`, `α2 = 0.55`, leakage negligible, `IG = 1 mA`. Anode current `IA` (mA, 1 dp)? (use `IA = α2·IG/(1−(α1+α2))`)

<details><summary>🔑 Solutions</summary>

**Q1 — (b) 3 junctions** (four layers).

**Q2 — (b).** `α1+α2 → 1` (regenerative latch).

**Q3 — (c).** `IL > IH` (larger).

**Q4 — (c).** Gate loses control after latching.

**Q5 — (b).** Below holding current `IH`.

**Q6.** `IL = 3 × 6 = 18 mA`.

**Q7.** `t = IL/(di/dt) = 0.060 A / 0.03 A/µs = 2.0 µs`.

**Q8.** `IA = 0.55×1 / (1 − 0.95) = 0.55/0.05 = 11.0 mA`.

</details>

---

> 🧠 **DAY-45 WRAP (Round-3 pass 3)** — **Statistics:** `σ = √(Σd²/n)`, probable error `0.6745σ`, mean error `σ/√n`, random → RSS. **Transformer:** ηmax when **Cu = Fe**, `x* = √(Pi/Pcu,fl)`, OC=core/SC=copper, all-day on kWh. **SCR:** latch at `α1+α2→1`, `IL > IH` (2–3×), gate turns ON only, off needs `IA < IH`. ⚡

**🔁 Round-3 progress:** Measurements ▓▓▓░░░░░░░ · Machines ▓▓▓░░░░░░░ · Power Electronics ▓▓▓░░░░░░░ — round-3 advancing. 🎓 Power Systems joins as a 4th subject once the reference PDFs arrive.
