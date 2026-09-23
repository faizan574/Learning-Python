# ⚡ GATE Technical Revision — Day 64 (2026-09-23)

*Measurements opens round 4 back at first principles (static & dynamic characteristics), while Machines works transformer losses/efficiency & OC-SC tests and Power Electronics starts the SCR with its two-transistor model.*

📅 Tech Day 64 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics · 🔁 Measurements R4 begins · Machines/PE R4 (topic 3)

> 🧠 **MEMORY HOOK** — Today: **static vs dynamic** instrument characteristics (accuracy ≠ precision; `τ`, `ζ`, `ωn`), the **transformer at max efficiency** (`core loss = copper loss`, found by **OC & SC tests**), and the **SCR** (four-layer PNPN, `α1 + α2 → 1`, latching `IL` > holding `IH`).

---

## 🔧 Measuring Instruments: Basics — Static & Dynamic Characteristics, Standards & Calibration

### 📖 Concept Deep Dive

Instrument performance splits into **static characteristics** (steady, slowly-varying inputs) and **dynamic characteristics** (rapidly-varying inputs).

**Static characteristics.**
- **Accuracy** — closeness of the reading to the **true value**; often quoted as **± % of full-scale deflection (FSD)**. So the *absolute* error is fixed across the scale, and the **% error of the reading worsens at low readings**.
- **Precision** — **repeatability/reproducibility**; closeness of repeated readings to *each other* (not to the truth). High precision ≠ high accuracy.
- **Resolution** — the **smallest input change** that produces a detectable output change.
- **Sensitivity** — `K = Δ(output)/Δ(input)` = slope of the calibration curve; its reciprocal is the **deflection factor**.
- **Linearity, threshold, dead-zone, hysteresis, drift** — *threshold* is the minimum input for any output from zero; *dead-zone* is the range giving no output; *drift* is a slow change in output with time/temperature (zero drift, sensitivity/span drift).

```
Accuracy quoted as ±a% of FSD:
absolute error e = ±(a/100)·(FSD)
% error of a reading = e / (reading) × 100   (larger for small readings)
```

**Dynamic characteristics.** Modelled by the instrument's **order**:
- **Zero-order** — output ∝ input instantly (ideal potentiometer): `qo = K·qi`.
- **First-order** — one energy store; a **time constant `τ`** governs the lag. Step response:
```
qo(t) = qi·K·(1 − e^(−t/τ))     (first-order step)
at t = τ  ⇒  63.2% of final value ;  ~5τ ⇒ ~99%
```
- **Second-order** — two energy stores; governed by **natural frequency `ωn`** and **damping ratio `ζ`**. `ζ < 1` underdamped (oscillatory), `ζ = 1` critically damped (fastest without overshoot), `ζ > 1` overdamped. Analog meters aim for `ζ ≈ 0.6–0.7` (good speed + small overshoot).

Key dynamic terms: **speed of response, dynamic error, fidelity, bandwidth, measuring lag**.

**Standards & calibration.** A hierarchy — **international → primary → secondary → working** standards. **Calibration** compares an instrument against a higher-order standard to establish accuracy and correct systematic error; **traceability** links a shop instrument up to national standards.

| Term | Meaning |
|---|---|
| Accuracy | Closeness to **true** value (± % FSD) |
| Precision | Repeatability (spread of repeats) |
| Resolution | Smallest detectable input change |
| Sensitivity | `Δout/Δin` (slope) |
| Drift | Slow change with time/temperature |

> 💎 **KEY RESULT** — Accuracy is **± % of FSD** ⇒ absolute error constant, but **% error of reading rises for small readings**. First-order: `qo = qi(1 − e^(−t/τ))`, 63.2% at `t = τ`. Second-order best `ζ ≈ 0.6–0.7`.

> ⚠️ **TRAP ALERT** — **Accuracy ≠ precision.** A biased instrument can be very precise yet inaccurate. Also: "± % FSD" is *not* "% of reading" — a `1% FSD` meter at 10% of scale has a `10%`-of-reading error.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Sensitivity | `K = Δqo/Δqi` |
| Deflection factor | `1/K` |
| Error (± % FSD) | `e = ±(a/100)·FSD` |
| % error of reading | `(e/reading)×100` |
| First-order step | `qo = qi(1 − e^(−t/τ))` |
| Value at t=τ | `63.2% of final` |
| Second-order damping | `ζ<1` under, `ζ=1` critical, `ζ>1` over |

### 🧮 Solved Examples

**Example 1 — % FSD accuracy.**
A `0–100 V` voltmeter has accuracy `±1% of FSD`. Find the maximum error and the % error of the reading when it reads **20 V**.

```
Absolute error e = ±(1/100)×100 V = ±1 V  (same everywhere on scale)
% error of reading = (1/20)×100 = 5 %   (much worse than 1% at low reading)
```

**Example 2 — First-order response.**
A first-order thermometer has `τ = 5 s`. What fraction of a step change has it registered after **10 s**?

```
fraction = 1 − e^(−t/τ) = 1 − e^(−10/5) = 1 − e^(−2)
        = 1 − 0.135 = 0.865  ⇒  86.5 %
```

### ⚠️ Common Traps

1. **Accuracy vs precision** — repeatable ≠ correct; a systematic bias keeps precision high while accuracy is poor.
2. **% FSD vs % reading** — always convert; small readings on a % FSD meter carry large relative error.
3. **Sensitivity vs resolution** — sensitivity is a *slope*; resolution is the *smallest step* — different concepts.
4. **`ζ = 1` is not "no response"** — it is the **fastest non-oscillatory** response; underdamped is faster but overshoots.
5. **Time constant reading** — at `t = τ` the response is 63.2% (not 50%); ~5τ for practical steady state.
6. **Drift vs hysteresis** — drift is time/temperature dependent; hysteresis depends on the **direction** of input change.

### 📝 Test (5 MCQ + 3 NAT)

**Q1 (MCQ).** An instrument gives closely-grouped but consistently high readings. It has:
(a) high accuracy, low precision (b) low accuracy, high precision (c) both high (d) both low

**Q2 (MCQ).** "± 0.5% of full scale" on a 0–200 V meter gives an absolute error of:
(a) ±0.5 V (b) ±1 V (c) ±2 V (d) ±0.1 V

**Q3 (MCQ).** For a first-order instrument, the output reaches 63.2% of its final value at:
(a) `t = 0.5τ` (b) `t = τ` (c) `t = 2τ` (d) `t = 5τ`

**Q4 (MCQ).** The damping ratio giving the fastest response with no overshoot is:
(a) `ζ = 0` (b) `ζ = 0.7` (c) `ζ = 1` (d) `ζ = 2`

**Q5 (MCQ).** The smallest input change producing a detectable output is the instrument's:
(a) sensitivity (b) resolution (c) accuracy (d) drift

**Q6 (NAT).** A 1% FSD ammeter of range 0–5 A reads 1 A. Find the % error of this reading (%).

**Q7 (NAT).** A first-order system has `τ = 2 s`. Find the % of final value reached at `t = 4 s` (%).

**Q8 (NAT).** A transducer output changes by 40 mV for a 2 °C input change. Find its sensitivity (mV/°C).

<details><summary>🔑 Solutions</summary>

**Q1 — (b).** Consistent (precise) but biased high (inaccurate).

**Q2 — (b) ±1 V.** `0.5% × 200 = 1 V`.

**Q3 — (b) `t = τ`.** `1 − e^(−1) = 0.632`.

**Q4 — (c) `ζ = 1`.** Critical damping — fastest approach without overshoot.

**Q5 — (b) resolution.**

**Q6 — 5%.** `e = 1%×5 = 0.05 A`; `(0.05/1)×100 = 5%`.

**Q7 — 86.5%.** `1 − e^(−4/2) = 1 − e^(−2) = 0.865`.

**Q8 — 20 mV/°C.** `K = 40 mV / 2 °C = 20 mV/°C`.
</details>

---

## 🔧 Electrical Machines: Transformers III — Losses, Efficiency, OC & SC Tests, Max Efficiency & All-Day Efficiency

### 📖 Concept Deep Dive

Transformer losses fall into two groups:

**1. Core (iron) losses — constant** (depend on flux/frequency, ~fixed once energised):
```
Hysteresis:  Ph = Kh·f·Bm^n     (Steinmetz exponent n ≈ 1.6–2)
Eddy current: Pe = Ke·f²·Bm²·t²  (t = lamination thickness)
```
These are **independent of load** (flux ≈ constant). Measured by the **open-circuit (OC) test**.

**2. Copper (I²R) losses — variable** (∝ load²):
```
Pcu = I1²R1 + I2²R2 = I²·R_eq
At load fraction x:  Pcu = x²·Pcu(full load)
```
Measured by the **short-circuit (SC) test**.

**Open-circuit (no-load) test.** Rated voltage applied to one winding (usually **LV**, for safety and metering), the other **open**. Since no-load current is small, copper loss is negligible ⇒ the wattmeter reads **core loss `Pi`**. Gives the **shunt (magnetising) branch**:
```
Pi = V1·I0·cosφ0 (≈ core loss) ,  cosφ0 = Pi/(V1 I0)
R0 = V1/Iw = V1/(I0 cosφ0) ,  X0 = V1/Iµ = V1/(I0 sinφ0)
```

**Short-circuit test.** One winding **shorted**; a **reduced voltage** (5–10% of rated) applied to the other (usually **HV** side, so currents are convenient) until **rated current** flows. Core loss is negligible (low flux) ⇒ wattmeter reads **full-load copper loss `Pcu`**. Gives equivalent impedance:
```
Pcu(fl) = Wsc = Isc²·R_eq ⇒ R_eq = Wsc/Isc²
Z_eq = Vsc/Isc ,  X_eq = √(Z_eq² − R_eq²)
```

**Efficiency.** With `x` = fraction of full load, `S` = VA rating, `cosφ` = load pf:
```
η = (x·S·cosφ) / (x·S·cosφ + Pi + x²·Pcu)
```

**Condition for maximum efficiency** — differentiate w.r.t. `x`, set to zero:
```
Maximum η when:  variable loss = constant loss
    x²·Pcu = Pi   ⇒   x = √(Pi/Pcu)
kVA at max η = (rated kVA)·√(Pi/Pcu)
```

**All-day efficiency** — for **distribution transformers** (energised 24 h, load varies), defined on **energy** over a day:
```
η_all-day = (output energy in kWh) / (input energy in kWh)   over 24 h
```
Because core loss runs all day regardless of load, distribution transformers are designed with **low core loss** (even at the cost of higher copper loss) to maximise all-day efficiency.

> 💎 **KEY RESULT** — OC test → **core loss & shunt branch**; SC test → **copper loss & series impedance**. Max efficiency at `x = √(Pi/Pcu)` where **`Pi = x²Pcu`**. All-day efficiency uses **energy (kWh)**, not power.

> 🧠 **MEMORY HOOK** — **OC = Open = iron** (no-load, core loss); **SC = Short = copper** (rated current, I²R). Max-η is the **crossover** where the two loss curves meet.

> ⚠️ **TRAP ALERT** — Max efficiency is **not** at full load in general; it is at `x = √(Pi/Pcu)`, often `x < 1`. Distribution transformers are rated on **all-day (energy) efficiency**, not commercial (power) efficiency.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Hysteresis loss | `Ph = Kh f Bm^n` |
| Eddy loss | `Pe = Ke f² Bm² t²` |
| Copper loss at load x | `Pcu(x) = x²·Pcu(fl)` |
| OC test (core loss) | `Pi = V1 I0 cosφ0` |
| SC test (Cu loss) | `Pcu(fl) = Isc² R_eq` |
| Equivalent R, Z, X | `R_eq = Wsc/Isc²` ; `Z_eq = Vsc/Isc` ; `X_eq = √(Z_eq²−R_eq²)` |
| Efficiency | `η = xS cosφ/(xS cosφ + Pi + x²Pcu)` |
| Max efficiency load | `x = √(Pi/Pcu)` |
| All-day efficiency | `η = kWh_out / kWh_in (24 h)` |

### 🧮 Solved Examples

**Example 1 — Load for maximum efficiency.**
A 100 kVA transformer has core loss `Pi = 1 kW` and full-load copper loss `Pcu = 1.6 kW`. Find the load (kVA) at which efficiency is maximum, and that efficiency at 0.8 pf.

```
x = √(Pi/Pcu) = √(1/1.6) = √0.625 = 0.7906
kVA at max η = 100 × 0.7906 = 79.06 kVA
Output = 79.06 × 0.8 = 63.25 kW
Losses at max η = Pi + x²Pcu = 1 + 1 = 2 kW   (equal!)
η_max = 63.25/(63.25 + 2) = 63.25/65.25 = 0.9693 = 96.93 %
```

**Example 2 — Full-load efficiency.**
For the same transformer, find efficiency at **full load, 0.8 pf**.

```
Output = 100×0.8 = 80 kW ; losses = Pi + Pcu = 1 + 1.6 = 2.6 kW
η = 80/(80 + 2.6) = 80/82.6 = 0.9685 = 96.85 %
```

### ⚠️ Common Traps

1. **Which test gives which loss** — OC → **core** loss; SC → **copper** loss. Swapping them is the classic error.
2. **Side of the test** — OC usually on **LV** (rated V, safe), SC on **HV** (convenient reduced V, rated I). Either works if referred correctly.
3. **Copper loss scales with x²** — halving the load quarters the copper loss; core loss stays put.
4. **Max-η load ≠ full load** — use `x = √(Pi/Pcu)`.
5. **Commercial vs all-day efficiency** — power-based vs energy-based; distribution transformers judged by all-day.
6. **Rated-current condition in SC test** — set applied voltage so **rated current** flows; then `Wsc` = full-load copper loss.

### 📝 Test (5 MCQ + 3 NAT)

**Q1 (MCQ).** The open-circuit test on a transformer gives:
(a) copper loss (b) core loss & magnetising branch (c) equivalent reactance (d) regulation

**Q2 (MCQ).** Transformer efficiency is maximum when:
(a) core loss = 0 (b) copper loss = core loss (c) copper loss = 0 (d) load = full load always

**Q3 (MCQ).** Copper loss at half load compared to full-load copper loss is:
(a) same (b) half (c) one-quarter (d) double

**Q4 (MCQ).** The short-circuit test is usually performed on the:
(a) LV side (b) HV side (c) tertiary (d) either core

**Q5 (MCQ).** All-day efficiency is based on:
(a) power (kW) (b) energy (kWh) over 24 h (c) current (d) voltage

**Q6 (NAT).** `Pi = 400 W`, full-load `Pcu = 900 W`. Find the fraction of full load at maximum efficiency.

**Q7 (NAT).** A 50 kVA transformer: `Pi = 500 W`, `Pcu(fl) = 800 W`. Find full-load efficiency at unity pf (%).

**Q8 (NAT).** SC test: `Vsc = 40 V`, `Isc = 20 A` (rated), `Wsc = 400 W`. Find equivalent resistance `R_eq` (Ω).

<details><summary>🔑 Solutions</summary>

**Q1 — (b).** Rated voltage, no load ⇒ wattmeter reads core loss; gives `R0, X0`.

**Q2 — (b).** Variable (copper) loss = constant (core) loss.

**Q3 — (c) one-quarter.** `Pcu ∝ x²`; at `x=0.5`, `(0.5)² = 0.25`.

**Q4 — (b) HV side.** Reduced voltage, rated current is convenient on HV.

**Q5 — (b) energy (kWh).**

**Q6 — 0.667.** `x = √(400/900) = √0.444 = 0.667`.

**Q7 — 97.46%.**
```
Output = 50 000 × 1 = 50 000 W ; losses = 500 + 800 = 1300 W
η = 50000/(50000+1300) = 50000/51300 = 0.9747 = 97.46 %
```

**Q8 — 1 Ω.** `R_eq = Wsc/Isc² = 400/20² = 400/400 = 1 Ω`.
</details>

---

## 🔧 Power Electronics: Thyristor (SCR) I — Construction, Two-Transistor Analogy, V-I Characteristics, Latching & Holding Current

### 📖 Concept Deep Dive

The **SCR (Silicon Controlled Rectifier)** is a four-layer, three-terminal controlled switch: **anode (A), cathode (K), gate (G)**.

**Construction.** A **PNPN** structure with three junctions **J1–J2–J3**. Anode at the outer P, cathode at the outer N, gate at the inner P. Under forward bias (A positive), **J1 and J3 are forward-biased, J2 reverse-biased** — J2 blocks until triggered.

**Two-transistor analogy.** Split the PNPN into an interconnected **PNP (Q1)** and **NPN (Q2)** pair — Q1's collector drives Q2's base and vice-versa (regenerative loop). With common-base current gains `α1, α2`:
```
Anode current:  IA = (α2·IG + ICBO1 + ICBO2) / (1 − (α1 + α2))
Turn-ON condition:  α1 + α2  →  1
```
As `IA` rises (via gate current, voltage, temperature, dv/dt or light), `α1 + α2` climbs toward 1, the denominator → 0, and current **regeneratively latches** the device ON. Once ON, the gate **loses control** (turn-off needs anode current to fall below holding).

**V-I characteristics (three regions).**
- **Reverse blocking** (A negative): only small reverse leakage until **reverse breakdown** — avoid.
- **Forward blocking** (A positive, no/low gate): only forward leakage; the device stays OFF until the **forward breakover voltage `VBO`** — where it snaps ON without a gate signal (undesirable).
- **Forward conduction** (ON): low on-state drop (~1–1.5 V), large current. **Gate current lowers the breakover voltage** — more `IG` ⇒ SCR turns on at a lower forward voltage.

**Latching vs holding current.**
- **Latching current `IL`** — the **minimum anode current** required to **latch** the SCR into full conduction **during turn-on** (gate can be removed once exceeded).
- **Holding current `IH`** — the **minimum anode current** to **maintain** conduction; below it, the SCR turns OFF.
- Relationship: `IL > IH` (typically `IL ≈ 2–3 × IH`).

```
IL (latch, at turn-on)  >  IH (hold, to stay ON)
Gate: only turns the SCR ON; it cannot turn it OFF.
```

> 💎 **KEY RESULT** — Turn-on when **`α1 + α2 → 1`**; `IA = (α2 IG + ΣICBO)/(1 − (α1+α2))`. **`IL > IH`** (`IL ≈ 2–3× IH`). Gate lowers `VBO`; once latched the gate has **no control**.

> 🧠 **MEMORY HOOK** — **L**atching = **L**aunch (needs more current to get going); **H**olding = **H**ang on (less current to stay). So `IL > IH`.

> ⚠️ **TRAP ALERT** — The gate can only **turn ON** an SCR, never turn it off. `IL` applies at **turn-on**; `IH` applies when **already conducting**. Firing at high `dv/dt` can **false-trigger** the SCR (J2 capacitance) — hence snubbers.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Anode current (2-transistor) | `IA = (α2 IG + ICBO1 + ICBO2)/(1 − (α1+α2))` |
| Turn-on condition | `α1 + α2 → 1` |
| Latching vs holding | `IL > IH` (≈ `2–3× IH`) |
| On-state drop | `≈ 1–1.5 V` |
| Gate effect | more `IG` ⇒ lower `VBO` |

### 🧮 Solved Examples

**Example 1 — Regenerative turn-on.**
In the two-transistor model, `α1 = 0.4` and `α2` rises with current. At what `α2` does the anode current tend to infinity (device latches), and what does it mean physically?

```
IA → ∞ when denominator (1 − (α1 + α2)) → 0
⇒ α1 + α2 = 1  ⇒  α2 = 1 − 0.4 = 0.6
Physically: the regenerative loop gain reaches unity — the SCR
switches ON and stays ON without further gate drive.
```

**Example 2 — Latching vs holding.**
An SCR has holding current `IH = 4 mA`. Its latching current is typically about **2.5× IH**. Estimate `IL`, and state the minimum anode current the gate pulse must establish to latch it.

```
IL ≈ 2.5 × IH = 2.5 × 4 mA = 10 mA
The anode current must reach ≥ 10 mA (latching) while the gate
pulse is present; after that, it need only stay above IH = 4 mA.
```

### ⚠️ Common Traps

1. **Gate cannot turn OFF** — an SCR is a latching device; turn-off needs anode current `< IH` (natural or forced commutation).
2. **`IL` vs `IH`** — `IL` (turn-on) is larger; `IH` (stay-on) is smaller. Don't interchange.
3. **J2 is the blocking junction** — under forward bias, **J2 is reverse-biased** and blocks until triggered.
4. **Breakover ≠ breakdown** — forward `VBO` (turns device ON) differs from destructive reverse breakdown.
5. **`dv/dt` false turn-on** — a fast rising anode voltage can trigger the SCR via junction capacitance without a gate signal.
6. **Gate lowers VBO** — higher gate current means the device fires at a *lower* anode voltage, not higher.

### 📝 Test (5 MCQ + 3 NAT)

**Q1 (MCQ).** An SCR under forward blocking has which junction reverse-biased?
(a) J1 (b) J2 (c) J3 (d) none

**Q2 (MCQ).** In the two-transistor model, the SCR turns on when:
(a) `α1 + α2 → 0` (b) `α1 + α2 → 1` (c) `α1 = α2` (d) `α1·α2 = 1`

**Q3 (MCQ).** For an SCR, the correct relation is:
(a) `IL = IH` (b) `IL < IH` (c) `IL > IH` (d) `IL = 0`

**Q4 (MCQ).** The gate terminal of an SCR can:
(a) turn it on only (b) turn it off only (c) both on and off (d) neither

**Q5 (MCQ).** Increasing the gate current of an SCR:
(a) raises the breakover voltage (b) lowers the breakover voltage (c) has no effect (d) reverses polarity

**Q6 (NAT).** In the two-transistor model, `α1 = 0.35`. Find `α2` at which the anode current tends to infinity.

**Q7 (NAT).** An SCR has `IH = 6 mA` and `IL = 3·IH`. Find the latching current (mA).

**Q8 (NAT).** An SCR conducts 30 A with an on-state drop of 1.2 V. Find the on-state power loss (W).

<details><summary>🔑 Solutions</summary>

**Q1 — (b) J2.** Under forward bias J1, J3 are forward-biased; **J2 blocks**.

**Q2 — (b) `α1 + α2 → 1`.** Denominator `1 − (α1+α2) → 0` ⇒ regenerative latch.

**Q3 — (c) `IL > IH`.** Latching (turn-on) exceeds holding (stay-on), ~2–3×.

**Q4 — (a) turn it on only.** SCR is a latching device; the gate cannot commutate it off.

**Q5 — (b) lowers the breakover voltage.** More gate injection ⇒ fires at lower forward voltage.

**Q6 — 0.65.** `α1 + α2 = 1 ⇒ α2 = 1 − 0.35 = 0.65`.

**Q7 — 18 mA.** `IL = 3 × 6 = 18 mA`.

**Q8 — 36 W.** `P = V·I = 1.2 × 30 = 36 W`.
</details>

---

### 📊 GATE Tech Coverage Progress

```
Measuring Instruments  █░░░░░░░░░░░░░░░░░░░░  1/21  🔁 Round 4 begins
Electrical Machines    ███░░░░░░░░░░░░░░░░░░  3/19  🔁 Round 4
Power Electronics      ███░░░░░░░░░░░░░░░░░░  3/18  🔁 Round 4
```

*All three sections are now in round 4. Next: Measurements → Error analysis I; Machines → Transformers IV (3-φ connections & vector groups); Power Electronics → Thyristor II (turn-on, gate & dv/dt–di/dt protection).*

> ✅ **Self-check before you close:** Can you (1) distinguish accuracy from precision and convert ± % FSD to % of reading, (2) state which test gives core vs copper loss and the max-efficiency condition `x = √(Pi/Pcu)`, and (3) write the SCR turn-on condition and the `IL` vs `IH` relation? Re-read any KEY RESULT that felt shaky.
