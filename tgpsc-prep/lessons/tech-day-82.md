# ⚡ GATE Technical Revision — Day 82 (2026-10-11)

*Digital voltmeters and their clever dual-slope trick, the transformer equivalent circuit and regulation, and the power diode's reverse-recovery story.*

📅 Tech Day 82 · ⏱ ~50 min · 🎯 Measurements + Machines + Power Electronics

> Today: **digital voltmeters** (ramp, dual-slope, successive-approximation; resolution of a 3½-digit DMM), the **transformer equivalent circuit & voltage regulation** (round 5 continues), and the **power diode's switching behaviour** — reverse recovery and the freewheeling diode.

---

## 🔧 Measuring Instruments: Digital Voltmeters & Digital Instruments

### 📖 Concept Deep Dive

A **digital voltmeter (DVM)** converts an analog input to a digital display via an **ADC**. The conversion method sets its speed, accuracy and noise immunity.

**Ramp-type DVM.** A linear ramp is generated; two comparators mark when the ramp crosses the **input voltage** and then **ground (zero)**. A clock counts pulses during that interval — the count is proportional to `Vin`. Simple and cheap, but accuracy depends on **ramp linearity** and clock stability, and it has **poor noise rejection**.

**Dual-slope (integrating) DVM.** The gold standard for accuracy. It works in two phases:
1. **Run-up:** integrate the **unknown `Vin`** for a **fixed time `T1`** (fixed number of clock counts `N1`). The integrator output reaches `Vin·T1/(RC)`.
2. **Run-down:** switch to a **reference `Vref`** of opposite polarity and integrate back to zero, taking time `T2` (counts `N2`).

Because the same R, C and clock are used in both phases, they **cancel**:

```
Vin · T1 = Vref · T2   ⇒   Vin = Vref · (T2/T1) = Vref · (N2/N1)
```

So the reading is **independent of R, C and clock frequency drift** — a huge accuracy advantage. If `T1` is made an integer multiple of the **mains period (20 ms at 50 Hz)**, the integration **averages out 50 Hz noise** (excellent normal-mode rejection). The trade-off is **slow** conversion.

**Successive-approximation (SAR) DVM.** Uses a **DAC + comparator** doing a **binary search**: it sets the MSB, compares, keeps or clears it, moves to the next bit, etc. An **n-bit** conversion takes exactly **n clock steps** — **fast and fixed-time**, used in data-acquisition. Less noise-immune than dual-slope.

**Resolution and digits.** A DVM is rated in **digits**. A **"3½-digit"** meter has three full digits (0–9) plus a leading half-digit (0 or 1), so its maximum count is **1999** (±1999). Resolution:

```
Resolution (n full digits) = 1 / 10ⁿ
3½-digit max count = 1999  ⇒  resolution ≈ 1 part in 2000 ≈ 0.05%
```

On a given range, the smallest change resolved = **range / (max count + 1)**. For an n-bit ADC, resolution `= VFS / 2ⁿ` and the **quantisation error is ±½ LSB**.

**Sensitivity** = (resolution) × (lowest full-scale range).

| Type | Speed | Noise immunity | Accuracy | Note |
|---|---|---|---|---|
| Ramp | medium | poor | moderate | simplest |
| Dual-slope | slow | **excellent** | **high** | R,C,clock cancel |
| SAR | **fast** | moderate | high | n steps for n bits |

> 💎 **KEY RESULT** — Dual-slope DVM: `Vin = Vref·(T2/T1)` — independent of R, C, clock. A **3½-digit** DVM counts to **1999** (≈ 0.05% resolution). ADC resolution `= VFS/2ⁿ`, quantisation error **±½ LSB**.

> 🧠 **MEMORY HOOK** — "**Dual-slope = Drift-free & 50 Hz-killing (but slow); SAR = Speedy (n steps); 3½ digit = 1999 counts.**"

> ⚠️ **TRAP ALERT** — A **3½-digit** meter's max count is **1999, not 999 or 9999**. And the dual-slope's key virtue is **cancellation of R, C and clock** — not merely "high resolution."

### 📐 Formula Sheet

| Quantity | Formula | Notes |
|---|---|---|
| Dual-slope reading | `Vin = Vref·(T2/T1)` | R,C,clock cancel |
| 3½-digit max count | `1999` | ±1999 |
| Resolution (n digits) | `1/10ⁿ` | fraction of FS |
| Smallest step | `range/(max count + 1)` | per range |
| ADC resolution | `VFS/2ⁿ` | n-bit |
| Quantisation error | `±½ LSB` | — |
| Sensitivity | `resolution × lowest range` | — |

### 🧮 Solved Examples

**Example 1 — Dual-slope.** In a dual-slope DVM the run-up time is fixed at `T1 = 100 ms` and a reference `Vref = 1 V` is used. For an unknown input, the run-down time is `T2 = 73 ms`. Find `Vin`.

```
Vin = Vref · (T2/T1) = 1 × (73/100) = 0.73 V
```

**Vin = 0.73 V.** (Note: no R or C value was needed — they cancel.) ✔

**Example 2 — 3½-digit resolution.** A 3½-digit DVM is set to the 2 V range. Find its resolution (smallest measurable step) and the resolution as a percentage.

```
Max count on 2 V range = 1999  (full scale 1.999 V)
Smallest step = 2 V / 2000 = 1 mV
As % of full scale = 1/2000 × 100 = 0.05%
```

**Resolution = 1 mV (0.05% of FS).** ✔

### ⚠️ Common Traps
1. **3½ digits → 1999 counts**, not 999.
2. **Dual-slope cancels R, C, clock** (and rejects mains noise) — its headline feature.
3. **SAR time = n steps for n bits** (fixed), independent of input magnitude.
4. **Quantisation error is ±½ LSB**, not ±1 LSB.
5. **Resolution vs accuracy** differ — a high-resolution meter can still be inaccurate (gain/offset errors).
6. **Integrate over a mains period** (multiple of 20 ms) for best 50 Hz rejection.

### 📝 Test (8 questions)

**Q1 (MCQ).** The reading of a dual-slope DVM is independent of:
(a) Vref  (b) R, C and clock frequency  (c) input voltage  (d) run-up time

**Q2 (MCQ).** Which DVM has the best noise (mains) rejection?
(a) ramp-type  (b) dual-slope (integrating)  (c) successive approximation  (d) flash

**Q3 (MCQ).** A 3½-digit DVM has a maximum count of:
(a) 999  (b) 1999  (c) 3999  (d) 9999

**Q4 (MCQ).** An n-bit successive-approximation ADC completes a conversion in:
(a) 1 step  (b) 2ⁿ steps  (c) n steps  (d) n² steps

**Q5 (MCQ).** The quantisation error of an ideal ADC is:
(a) ±1 LSB  (b) ±½ LSB  (c) ±2 LSB  (d) zero

**Q6 (NAT).** A dual-slope DVM uses T1 = 80 ms, Vref = 2 V. The run-down time is 50 ms. Find Vin (V).

**Q7 (NAT).** A 12-bit ADC has a full-scale range of 10 V. Find the resolution in mV (2 decimals).

**Q8 (NAT).** A 4½-digit DVM on the 20 V range: find the smallest measurable step in mV.

<details><summary>🔑 Solutions</summary>

**Q1 → (b).** R, C and clock cancel between run-up and run-down.

**Q2 → (b).** Integration over a mains period rejects 50 Hz noise.

**Q3 → (b).** 3½ digits ⇒ 1999 max count.

**Q4 → (c).** Binary search: n steps for n bits.

**Q5 → (b).** ±½ LSB.

**Q6.**
```
Vin = Vref·(T2/T1) = 2 × (50/80) = 2 × 0.625 = 1.25 V
```
**Vin = 1.25 V.**

**Q7.**
```
Resolution = VFS/2ⁿ = 10/2¹² = 10/4096 = 2.44×10⁻³ V = 2.44 mV
```
**Resolution ≈ 2.44 mV.**

**Q8.** 4½-digit → max count 19999 (full scale 19.999 V).
```
Smallest step = 20 V / 20000 = 1 mV
```
**Step = 1 mV.**

</details>

---

## 🔧 Electrical Machines: Transformers II — Equivalent Circuit, Regulation & Per-Unit

### 📖 Concept Deep Dive

The **equivalent circuit** lumps a transformer's imperfections into circuit elements so performance can be computed. Let `a = N1/N2` (primary-to-secondary turns ratio).

**Equivalent circuit.** Each winding has resistance (`R1, R2`) and leakage reactance (`X1, X2`); the core is modelled by a shunt branch (`R0` for iron loss, `X0` for magnetising). To simplify, refer everything to **one side**:

```
Referred to primary:   R01 = R1 + a²R2 ,   X01 = X1 + a²X2
Referred to secondary: R02 = R2 + R1/a² , X02 = X2 + X1/a²
Equivalent impedance:  Z0 = √(R0² + X0²)
```

(The shunt branch is usually moved to the input terminals — the "approximate" equivalent circuit.)

**Voltage regulation.** The change in secondary terminal voltage from no-load to full-load, as a fraction of no-load voltage:

```
% VR = [ I2(R02 cos φ ± X02 sin φ) / E2 ] × 100
       (+ for lagging pf, − for leading pf)
```

In per-unit terms, with `εr = I2R02/E2` (pu resistance drop) and `εx = I2X02/E2` (pu reactance drop):

```
% VR ≈ (εr cos φ ± εx sin φ) × 100
```

Regulation is **worst (largest) at lagging pf** and can even be **negative at leading pf** (secondary voltage rises on load). The regulation is **zero** when the load pf is **leading** with `tan φ = R02/X02`, and is **maximum** when `tan φ = X02/R02` (load pf angle equals the equivalent impedance angle).

**Per-unit (pu) system.** Normalise quantities to chosen bases:

```
Z_base = V_base² / S_base = V_base / I_base
Z_pu = Z_actual / Z_base
```

The beauty of pu: the **pu impedance is the same referred to either side**, so transformer calculations in a power system drop the turns-ratio bookkeeping. The **%Z** from the short-circuit test equals the pu impedance × 100.

| Quantity | Primary-referred | Secondary-referred |
|---|---|---|
| Resistance | `R01 = R1 + a²R2` | `R02 = R2 + R1/a²` |
| Reactance | `X01 = X1 + a²X2` | `X02 = X2 + X1/a²` |
| Relation | `R01 = a²·R02` | `X01 = a²·X02` |

> 💎 **KEY RESULT** — `% VR = (εr cos φ ± εx sin φ)×100` (+ lagging, − leading). Max regulation at `tan φ = X02/R02`; zero regulation at **leading** pf with `tan φ = R02/X02`. Per-unit impedance is identical on both sides.

> 🧠 **MEMORY HOOK** — "**Lagging adds, leading subtracts.**" Referring across: multiply by `a²` going to the **primary**, divide by `a²` going to the **secondary**.

> ⚠️ **TRAP ALERT** — Regulation can be **negative** (voltage rise) at sufficiently leading pf. And the drop uses **cos φ with R** and **sin φ with X** — swapping them is a common slip. `a²` scales **both** R and X.

### 📐 Formula Sheet

| Quantity | Formula | Notes |
|---|---|---|
| R referred to 2° | `R02 = R2 + R1/a²` | a = N1/N2 |
| X referred to 2° | `X02 = X2 + X1/a²` | — |
| Voltage regulation | `(I2R02 cosφ ± I2X02 sinφ)/E2` | + lag, − lead |
| pu regulation | `εr cosφ ± εx sinφ` | εr,εx = pu drops |
| Max VR condition | `tan φ = X02/R02` | lagging |
| Zero VR condition | `tan φ = R02/X02` (leading) | voltage neither rises nor falls |
| Base impedance | `Z_base = V_base²/S_base` | per-unit |

### 🧮 Solved Examples

**Example 1 — Voltage regulation.** A transformer referred to the secondary has `R02 = 0.2 Ω`, `X02 = 0.4 Ω`, delivers `I2 = 50 A` at `E2 = 400 V`, 0.8 pf lagging. Find the % voltage regulation.

```
cos φ = 0.8, sin φ = 0.6 (lagging ⇒ +)
Drop = I2(R02 cosφ + X02 sinφ) = 50(0.2×0.8 + 0.4×0.6)
     = 50(0.16 + 0.24) = 50 × 0.40 = 20 V
% VR = (20/400) × 100 = 5%
```

**% VR = 5%** (lagging). ✔

**Example 2 — Per-unit base.** A 100 kVA, 11 kV / 415 V transformer has 4% leakage impedance. Find the base impedance on the HV side and the actual leakage impedance referred to HV.

```
Z_base(HV) = V_base²/S_base = (11000)²/(100000)
           = 1.21×10⁸/1×10⁵ = 1210 Ω
Z_actual = 0.04 × 1210 = 48.4 Ω
```

**Z_base = 1210 Ω, leakage Z = 48.4 Ω (HV side).** ✔

### ⚠️ Common Traps
1. **Lagging ⇒ +, leading ⇒ −** in the regulation formula.
2. **Refer with a² (both R and X)** — not a.
3. **Negative regulation** is possible at leading pf (secondary voltage rises).
4. **Per-unit impedance is the same on both sides** — no referring needed.
5. **Max regulation at tan φ = X02/R02** (not R02/X02).
6. **%Z from SC test** = pu impedance × 100; the SC test gives copper loss + equivalent impedance.

### 📝 Test (8 questions)

**Q1 (MCQ).** Voltage regulation is maximum when the load power-factor angle:
(a) is zero  (b) equals the equivalent impedance angle (tanφ = X02/R02)  (c) is 90°  (d) is leading

**Q2 (MCQ).** Resistance referred from secondary to primary (a = N1/N2) is multiplied by:
(a) a  (b) a²  (c) 1/a  (d) 1/a²

**Q3 (MCQ).** Voltage regulation can be negative when the load power factor is:
(a) unity  (b) lagging  (c) leading  (d) zero lagging

**Q4 (MCQ).** In the per-unit system, the transformer's pu impedance referred to primary vs secondary is:
(a) different by a²  (b) the same  (c) different by a  (d) always zero

**Q5 (MCQ).** The short-circuit test on a transformer primarily gives:
(a) iron loss  (b) copper loss and equivalent impedance  (c) no-load current  (d) turns ratio only

**Q6 (NAT).** A transformer has R02 = 0.3 Ω, X02 = 0.5 Ω, I2 = 40 A, E2 = 250 V, 0.6 pf lagging. Find % VR.

**Q7 (NAT).** A 500 kVA, 6.6 kV transformer: find the base impedance on the 6.6 kV side (Ω).

**Q8 (NAT).** R1 = 0.4 Ω referred to the secondary of a 10:1 (a = 10) transformer. Find its referred value (Ω).

<details><summary>🔑 Solutions</summary>

**Q1 → (b).** Max VR when tan φ = X02/R02.

**Q2 → (b).** a² multiplies when referring secondary→primary.

**Q3 → (c).** Leading pf can give negative regulation (voltage rise).

**Q4 → (b).** pu impedance is identical on both sides.

**Q5 → (b).** SC test → copper loss + equivalent impedance.

**Q6.**
```
cosφ = 0.6, sinφ = 0.8 (lagging)
Drop = 40(0.3×0.6 + 0.5×0.8) = 40(0.18 + 0.40) = 40×0.58 = 23.2 V
% VR = (23.2/250)×100 = 9.28%
```
**% VR = 9.28%.**

**Q7.**
```
Z_base = V²/S = (6600)²/500000 = 4.356×10⁷/5×10⁵ = 87.12 Ω
```
**Z_base = 87.12 Ω.**

**Q8.** Referring secondary→primary multiplies by a²:
```
R1' = R1 / a²?  →  R1 is a primary quantity referred to secondary = R1/a²
Given 0.4 Ω is already referred to secondary. Primary value R1 = 0.4 × a² = 0.4 × 100 = 40 Ω
```
Interpreting "R1 = 0.4 Ω referred to the secondary," the actual primary resistance is `0.4 × a² = 40 Ω`. **R1 (actual) = 40 Ω.**

</details>

---

## 🔧 Power Electronics: Power Diode — Switching Behaviour & Reverse Recovery

### 📖 Concept Deep Dive

The **power diode** is the simplest switch, but its **dynamic (switching) behaviour** — especially **reverse recovery** — matters enormously in converters.

**Static characteristics.** Forward-biased, it conducts with a small drop `Vf` (≈ 0.7–1.5 V for Si). Reverse-biased, it blocks with a tiny **leakage current** until the **reverse breakdown voltage `VBR`**. Power diodes trade a slightly higher `Vf` for high current and voltage ratings; they have a wide **n⁻ drift region** for blocking.

**Reverse recovery.** When a conducting diode is suddenly reverse-biased, the **stored minority-carrier charge** in the junction must be swept out before it can block. During this time the diode **conducts in reverse**: current falls through zero, goes negative to a peak `IRR`, then recovers to the small leakage value. Key quantities:
- **Reverse recovery time `trr = ta + tb`** (ta = charge removal to peak IRR; tb = decay).
- **Peak reverse current `IRR`**.
- **Stored (recovered) charge `Qrr`** = area of the reverse-current triangle.

Assuming a triangular reverse current with slope `di/dt` during ta:

```
Qrr ≈ ½ · IRR · trr
IRR = (di/dt) · ta ≈ √(2 · Qrr · di/dt)   (when ta ≈ trr)
trr ≈ √(2 · Qrr / (di/dt))
```

The **softness factor `S = tb/ta`** describes recovery abruptness (soft recovery S > 1 avoids voltage spikes; snappy recovery S < 1 causes EMI/overvoltage). **Fast-recovery diodes** minimise `trr` (via lifetime control/gold doping) for chopper and inverter use; **Schottky diodes** have essentially **no reverse recovery** (majority-carrier) but low `VBR`.

**Freewheeling (flywheel) diode.** Placed **across an inductive load** (anti-parallel), it provides a path for the inductive current when the main switch/SCR turns off. Benefits:
- Prevents a large `L·di/dt` **voltage spike** that would otherwise damage the switch.
- Makes the **load current continuous** and reduces ripple.
- **Improves input power factor** and returns trapped inductive energy to the load.
In a controlled rectifier with an RL load, the FWD clamps the output from going negative, so `Vo = (Vm/π)(1+cosα)` behaviour (like a semiconverter) applies.

| Parameter | Meaning | Relation |
|---|---|---|
| `Vf` | forward drop | ≈ 0.7–1.5 V (Si) |
| `VBR` | reverse breakdown | blocking limit |
| `trr` | reverse recovery time | `ta + tb` |
| `IRR` | peak reverse current | `(di/dt)·ta` |
| `Qrr` | stored charge | `½·IRR·trr` |
| softness | `S = tb/ta` | >1 soft, <1 snappy |

> 💎 **KEY RESULT** — `Qrr = ½·IRR·trr`, `IRR = √(2·Qrr·di/dt)`, `trr = √(2·Qrr/(di/dt))`. A **freewheeling diode** across an inductive load prevents turn-off voltage spikes and makes load current continuous.

> 🧠 **MEMORY HOOK** — "**Q = half I-RR times t-RR; IRR grows with √(di/dt).**" Freewheeling diode = "**free path for inductor current, no spike.**"

> ⚠️ **TRAP ALERT** — **Schottky diodes have negligible reverse recovery** (majority carriers) but low reverse-voltage rating — not for high-voltage mains. And `IRR` and `trr` **increase with di/dt**, so snappy switching worsens recovery losses and EMI.

### 📐 Formula Sheet

| Quantity | Formula | Notes |
|---|---|---|
| Stored charge | `Qrr = ½·IRR·trr` | triangular approx |
| Peak reverse current | `IRR = √(2·Qrr·di/dt)` | — |
| Recovery time | `trr = √(2·Qrr/(di/dt))` | — |
| IRR via ta | `IRR = (di/dt)·ta` | ta ≈ trr if snappy |
| Softness factor | `S = tb/ta` | >1 soft |
| Avg forward loss | `P ≈ Vf·I_avg` | conduction |

### 🧮 Solved Examples

**Example 1 — Reverse recovery.** A power diode has a stored charge `Qrr = 4 µC` and the circuit imposes `di/dt = 50 A/µs` at turn-off. Assuming abrupt (snappy) recovery, find `trr` and `IRR`.

```
di/dt = 50 A/µs = 50×10⁶ A/s
trr = √(2·Qrr/(di/dt)) = √(2 × 4×10⁻⁶ / 50×10⁶)
    = √(8×10⁻⁶ / 5×10⁷) = √(1.6×10⁻¹³) = 4.0×10⁻⁷ s = 0.4 µs
IRR = (di/dt)·trr = 50×10⁶ × 4.0×10⁻⁷ = 20 A
```

**trr = 0.4 µs, IRR = 20 A.** (Check: Qrr = ½·IRR·trr = ½×20×0.4µs = 4 µC ✓.) ✔

**Example 2 — Freewheeling diode effect.** A single-phase half-wave controlled rectifier with RL load fires at α = 60°. With a freewheeling diode the output behaves like `Vo = (Vm/π)(1+cos α)`. For `Vm = 325 V`, find `Vo`.

```
Vo = (Vm/π)(1 + cos α) = (325/3.1416)(1 + cos 60°)
   = 103.45 × (1 + 0.5) = 103.45 × 1.5 = 155.2 V
```

**Vo ≈ 155.2 V** (the FWD clamps the output non-negative, improving pf). ✔

### ⚠️ Common Traps
1. **Qrr = ½·IRR·trr** (triangle area) — not IRR·trr.
2. **IRR and trr grow with √(di/dt)** — faster switching → more recovery current.
3. **Schottky ≈ no reverse recovery** but low VBR (unipolar).
4. **Freewheeling diode is anti-parallel across the load**, carrying inductive current at turn-off.
5. **Softness factor S = tb/ta** — S < 1 (snappy) causes voltage spikes/EMI.
6. **FWD cannot conduct** when the source drives the load forward — it only freewheels the inductive current.

### 📝 Test (8 questions)

**Q1 (MCQ).** The stored charge of a diode during reverse recovery is:
(a) `IRR·trr`  (b) `½·IRR·trr`  (c) `2·IRR·trr`  (d) `IRR/trr`

**Q2 (MCQ).** A Schottky diode is characterised by:
(a) large reverse recovery  (b) negligible reverse recovery, low VBR  (c) high forward drop  (d) bipolar conduction

**Q3 (MCQ).** A freewheeling diode across an inductive load primarily:
(a) increases voltage spikes  (b) provides a path for inductor current and prevents spikes  (c) blocks load current  (d) raises frequency

**Q4 (MCQ).** As di/dt at turn-off increases, the peak reverse current IRR:
(a) decreases  (b) increases  (c) stays constant  (d) becomes zero

**Q5 (MCQ).** The softness factor of a diode is defined as:
(a) ta/tb  (b) tb/ta  (c) trr/ta  (d) IRR/trr

**Q6 (NAT).** A diode has Qrr = 2 µC, di/dt = 20 A/µs. Find trr in µs (2 decimals).

**Q7 (NAT).** For the diode in Q6, find the peak reverse recovery current IRR (A).

**Q8 (NAT).** A freewheeling-diode rectifier (RL load) with Vm = 300 V fires at α = 90°. Find Vo using Vo = (Vm/π)(1+cosα) (V, 1 decimal).

<details><summary>🔑 Solutions</summary>

**Q1 → (b).** Triangular area `Qrr = ½·IRR·trr`.

**Q2 → (b).** Schottky: majority-carrier, negligible trr, low reverse-voltage rating.

**Q3 → (b).** Freewheeling diode carries inductor current at turn-off, preventing spikes.

**Q4 → (b).** `IRR = √(2Qrr·di/dt)` increases with di/dt.

**Q5 → (b).** `S = tb/ta`.

**Q6.**
```
trr = √(2·Qrr/(di/dt)) = √(2×2×10⁻⁶ / 20×10⁶)
    = √(4×10⁻⁶/2×10⁷) = √(2×10⁻¹³) = 4.47×10⁻⁷ s = 0.45 µs
```
**trr ≈ 0.45 µs.**

**Q7.**
```
IRR = (di/dt)·trr = 20×10⁶ × 4.47×10⁻⁷ = 8.94 A
```
**IRR ≈ 8.94 A.**

**Q8.**
```
Vo = (300/π)(1 + cos90°) = 95.49 × (1 + 0) = 95.5 V
```
**Vo ≈ 95.5 V.**

</details>

---

## 📊 Progress

```
Measuring Instruments  [███████████████████░]  Round 4 · topic 20/22 (DVM & digital)
Electrical Machines    [██░░░░░░░░░░░░░░░░░░░]  Round 5 · topic  2/20 (Transformers II)
Power Electronics       [██░░░░░░░░░░░░░░░░░░░]  Round 5 · topic  2/20 (Power diode switching)
```

- **Section A (Measurements):** Q-meter + final revision remain to close round 4 (two topics left).
- **Section B (Machines):** round 5 rolling through the transformer core. 🔄
- **Section C (Power Electronics):** round 5 at diode dynamics. 🔄

> 🎯 **Today's three one-liners:** (1) **Dual-slope Vin = Vref·T2/T1 (R,C,clock cancel); 3½-digit = 1999.** (2) **%VR = εr cosφ ± εx sinφ (+ lag, − lead); pu Z same both sides.** (3) **Qrr = ½·IRR·trr; IRR = √(2Qrr·di/dt); freewheeling diode kills the turn-off spike.**

*Correctness over length — verify any value marked "verify" before the exam.*
