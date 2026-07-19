# ⚡ GATE Measuring Instruments — Day 1 (2026-07-19)

*Where every marks-fetching journey begins: knowing what "good measurement" actually means.*

`📅 Tech Day 1  ·  ⏱ ~30 min  ·  🎯 Topic 1 of 23`

Attempt every question in the test **before** opening the solutions — recall beats re-reading.

---

## 🔧 Today's Topic: Basics of Measurements — Static & Dynamic Characteristics, Standards, Calibration

GATE asks 1–2 marks from this area almost every year — usually a sneaky one-liner on **accuracy vs precision**, **resolution**, or **sensitivity**. It is also the foundation for error analysis (tomorrow's topic), so nail the definitions today.

---

## 📖 Concept Deep Dive

### 1. What is measurement?

Measurement compares an unknown quantity (the **measurand**) with a predefined **standard**. Every measurement needs three elements: the standard, the process of comparison, and the result with its **uncertainty**.

### 2. Static characteristics (instrument behaviour with constant/slowly varying inputs)

| Characteristic | Meaning | Watch out |
|---|---|---|
| **Accuracy** | Closeness to the **true value** | Expressed as % of reading, % of full scale, or absolute |
| **Precision** | Closeness of repeated readings to **each other** | Says nothing about truth! |
| **Resolution** | Smallest input change the instrument can **detect** | ≠ accuracy |
| **Sensitivity** | `output change / input change` (slope of transfer curve) | Units matter, e.g. `mm/V` |
| **Linearity** | Max deviation of calibration curve from ideal straight line | Quoted as % of full scale |
| **Threshold** | Smallest input detectable **from zero** | Resolution at zero |
| **Drift** | Output change with time at constant input | Zero drift vs span drift |
| **Dead zone** | Largest input change producing **no** output response | Caused by friction, backlash |
| **Hysteresis** | Different outputs for increasing vs decreasing input | Magnetic/mechanical causes |

> 💎 **KEY RESULT** — An instrument can be **precise but not accurate** (tight cluster far from true value). High precision is *necessary but not sufficient* for high accuracy.

> 🧠 **MEMORY HOOK** — **A**ccuracy = **A**greement with **A**ctual value; **P**recision = re**P**eatability of the **P**ack of readings.

- **Static error**: `δA = Am − At` (measured − true). **Static correction** is its negative: `δC = At − Am = −δA`.
- **Relative error**: `εr = δA / At`; often quoted in **% of full-scale deflection (fsd)**.

> ⚠️ **TRAP ALERT** — When error is given as *% of full scale*, the % error **of the reading** worsens as the reading falls. A `1%` fsd error on a `100 V` meter is `1 V`; at a reading of `20 V` that is a `5%` reading error. GATE loves this.

### 3. Sensitivity and its inverse

- Static sensitivity `K = Δq_out / Δq_in`. For a linear instrument K is constant; for nonlinear, it varies point to point.
- **Inverse sensitivity (deflection factor)** = `Δq_in / Δq_out`.
- For instruments in **cascade**, overall sensitivity = **product** of individual sensitivities.

### 4. Dynamic characteristics (rapidly varying inputs)

| Term | Meaning |
|---|---|
| **Speed of response** | How fast output follows input |
| **Fidelity** | Faithfulness of output waveform to input |
| **Lag** | Delay in response |
| **Dynamic error** | Difference between true time-varying value and indicated value |

Standard test inputs: **step**, **ramp**, **sinusoidal**. First-order instruments are described by time constant `τ`; second-order (like PMMC movement) by natural frequency `ωn` and damping ratio `ξ`.

### 5. Standards and calibration

- Hierarchy of standards: **International → Primary → Secondary → Working**.
- **Calibration** = comparing the instrument against a superior standard and preparing the correction/calibration curve. Working standards calibrate shop-floor instruments; primary standards live with national labs (in India: **NPL, New Delhi**).

### 6. Classification you should know

- **Absolute instruments** — give the quantity in terms of physical constants (e.g. **tangent galvanometer**, Rayleigh current balance); no calibration needed.
- **Secondary instruments** — must be calibrated against absolute ones; all everyday meters.
- By operation: **indicating** (pointer), **recording** (chart), **integrating** (energy meter counts total).

---

## 📐 Formula Sheet

| Formula | Symbols | Notes |
|---|---|---|
| `δA = Am − At` | `Am` measured, `At` true | Static error |
| `εr = δA / At × 100%` | — | Relative (true) error |
| `% reading error = (fsd error / reading) × 100` | — | fsd-spec conversion |
| `K = Δq_out / Δq_in` | K sensitivity | Slope of static curve |
| `K_total = K1 × K2 × K3…` | cascade | Product rule |
| `Resolution (n-digit DVM) = fsd / 10ⁿ` (order) | — | Concept preview for DVM day |

---

## 🧮 Solved Examples

**Example 1.** A `0–150 V` voltmeter has a guaranteed accuracy of `1%` of full scale. It reads `75 V`. Find the limiting error in the reading.

1. Full-scale error = `1% × 150 V` = `1.5 V`
2. % error at the reading = `1.5 / 75 × 100` = **`2%`**

*Lesson: half-scale reading doubles the percentage error — always read instruments in the upper third of the scale.*

**Example 2.** A sensor has sensitivity `0.4 mV/°C`; its output feeds an amplifier of gain `100` and a recorder of `2 divisions/V` sensitivity... wait, keep units straight: amplifier output sensitivity = `0.4 mV/°C × 100` = `40 mV/°C` = `0.04 V/°C`. Recorder deflection = `0.04 V/°C × 2 div/V` = **`0.08 div/°C`**. For 1 division deflection, temperature change needed = `1 / 0.08` = **`12.5 °C`**.

*Lesson: cascade sensitivity = product; carry the units through every stage.*

---

## ⚠️ Common Traps

- Precision ≠ accuracy — a stopped-clock cluster can be beautifully precise and totally wrong.
- Resolution ≠ smallest scale division; digital meters resolve to the last digit, not to truth.
- % fsd error vs % reading error — always check which one the question quotes.
- Threshold is about starting **from zero**; resolution is about a change **anywhere** on the scale.
- Dead zone and hysteresis look similar on curves — dead zone is *no response*, hysteresis is *different response* on up vs down sweeps.
- "Absolute instrument" doesn't mean more accurate — it means calibration-free by principle.

---

**Quick self-check** (say the answers aloud before the test):

- [ ] Can I define sensitivity with units and state the cascade rule?
- [ ] Can I convert a % fsd spec into % reading error at any reading?
- [ ] Can I name the four-level hierarchy of standards?

---

## 📝 Today's Test

**Q1. An instrument gives readings 49.9, 50.1, 50.0, 49.9, 50.1 for a true value of 55. The instrument is:**
- A) Accurate but not precise
- B) Precise but not accurate
- C) Both accurate and precise
- D) Neither accurate nor precise

**Q2. Consider the following statements:**
1. Resolution is the smallest change in input that can be detected anywhere on the scale.
2. Threshold is the smallest input detectable starting from zero.
3. Dead zone is the largest input change that produces no output.

**Which are correct?**
- A) 1 and 2 only
- B) 2 and 3 only
- C) 1 and 3 only
- D) 1, 2 and 3

**Q3. A tangent galvanometer is an example of:**
- A) Secondary instrument
- B) Recording instrument
- C) Absolute instrument
- D) Integrating instrument

**Q4. Assertion (A): A meter with error specified as % of full scale should be used in the upper part of its range. Reason (R): The absolute error stays constant over the scale, so its percentage of the reading falls as the reading rises.**
- A) Both A and R true, R explains A
- B) Both A and R true, R does not explain A
- C) A true, R false
- D) A false, R true

**Q5. Match List-I with List-II:**

| List-I | List-II |
|---|---|
| P. Energy meter | 1. Indicating |
| Q. Ammeter | 2. Integrating |
| R. X-Y plotter | 3. Recording |

- A) P-2, Q-1, R-3
- B) P-1, Q-2, R-3
- C) P-3, Q-1, R-2
- D) P-2, Q-3, R-1

**Q6. The static sensitivity of a linear instrument is:**
- A) Ratio of input change to output change
- B) Slope of the output-input characteristic
- C) Smallest measurable input
- D) Maximum deviation from linearity

**Q7. (NAT) A 0–250 V voltmeter guaranteed accurate to 0.5% of full scale reads 125 V. The limiting error of the reading is ______ %.**

**Q8. (NAT) A transducer of sensitivity `2 mV/mm` drives an amplifier of gain `50` whose output goes to a display of `4 div/V`. The overall sensitivity is ______ div/mm.**

**Q9. (NAT) A 0–100 A ammeter has a guaranteed accuracy of 1% of full scale. For the measurement error not to exceed 2% of the reading, the minimum current it should be used to measure is ______ A.**

**Q10. (NAT) The measured value of a resistance is 102.5 Ω and its true value is 100 Ω. The static correction is ______ Ω.**

<details><summary>🔑 Solutions (open only after attempting!)</summary>

**Q1: B** — Readings cluster tightly (precise) around 50, far from the true value 55 (not accurate).

**Q2: D** — All three definitions are exactly right; this trio is a GATE favourite.

**Q3: C** — It yields current from physical constants (earth's field, geometry) — the classic absolute instrument.

**Q4: A** — Constant absolute error ⇒ smaller % of reading at larger readings; R is the exact reason for A.

**Q5: A** — Energy meter integrates (2), ammeter indicates (1), X-Y plotter records (3).

**Q6: B** — Sensitivity is the slope `Δoutput/Δinput` of the static characteristic.

**Q7: 1** — Absolute error = `0.5% × 250` = `1.25 V`; at `125 V`: `1.25/125 × 100 = 1%`.

**Q8: 0.4** — `2 mV/mm × 50 = 100 mV/mm = 0.1 V/mm`; `0.1 V/mm × 4 div/V = 0.4 div/mm`.

**Q9: 50** — Absolute error = `1 A`. Need `1/I ≤ 2%` ⇒ `I ≥ 50 A`.

**Q10: −2.5** — Correction = true − measured = `100 − 102.5` = `−2.5 Ω` (note the sign!).

</details>

---

*Strong foundations, strong scores — tomorrow we weaponise these definitions into full error analysis.* 💪

`🟩⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜` **Topic 1 of 23 done**
