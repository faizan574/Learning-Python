# ⚡ GATE Technical Revision — Day 66 (2026-09-25)

*Measurements does statistical error analysis (mean, σ, probable error, Gaussian), Machines covers the autotransformer & special connections, and Power Electronics turns the SCR off (commutation) and stacks it (series/parallel string efficiency).*

📅 Tech Day 66 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics · 🔁 Round 4 (all three sections)

> 🧠 **MEMORY HOOK** — Today: **statistics of error** (σ = √(Σd²/n), probable error `r = 0.6745σ`, ±σ = 68.27%), the **autotransformer** (copper saving `= 1/a`), and **SCR turn-off** (natural vs forced commutation; series/parallel **string efficiency**).

---

## 🔧 Measuring Instruments: Error Analysis II — Statistical Analysis

### 📖 Concept Deep Dive

When many readings of the same quantity are taken, **random error** is treated statistically.

**Central value & spread.**
```
Arithmetic mean:  x̄ = (Σ xi)/n
Deviation:        di = xi − x̄           (Σdi = 0 always)
Average deviation: |d|avg = (Σ|di|)/n
Standard deviation: σ = √( (Σ di²)/n )     (population, large n)
                    s = √( (Σ di²)/(n−1) )  (sample, Bessel's correction)
Variance = σ²
```
The **standard deviation `σ`** is the key measure of dispersion; a small σ means tightly-grouped (precise) data.

**Probable error.** For a Gaussian distribution, the **probable error** of a single observation is:
```
r = 0.6745·σ
```
meaning **half** the readings lie within `x̄ ± r`. The probable error of the **mean** is `r_mean = 0.6745·σ/√n`.

**Gaussian (normal) distribution.** Random errors follow the **bell curve**; the fraction of readings within `±kσ` of the mean is fixed:

| Range | % of readings within |
|---|---|
| `x̄ ± 1σ` | `68.27%` |
| `x̄ ± 2σ` | `95.45%` |
| `x̄ ± 3σ` | `99.73%` |

**Standard deviation of the mean** (how well the mean is known) improves with more readings:
```
σ_mean = σ/√n
```

**Combination of quantities (random error propagation).** If `y = f(x1, x2, …)` with independent random errors, they add in **quadrature**:
```
σy = √( (∂f/∂x1)²σ1² + (∂f/∂x2)²σ2² + … )
For a sum/difference y = a ± b:  σy = √(σa² + σb²)
```

> 💎 **KEY RESULT** — `σ = √(Σd²/n)`; probable error `r = 0.6745σ`; Gaussian **±σ = 68.27%, ±2σ = 95.45%, ±3σ = 99.73%**; mean uncertainty `σ_mean = σ/√n`; random errors combine in **quadrature**.

> ⚠️ **TRAP ALERT** — Divide by `n` for the **population** σ, by `n−1` for a **sample** (small n). Probable error is **`0.6745σ`**, not σ. The **sum of deviations is always zero** — use squared deviations for spread.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Mean | `x̄ = Σxi/n` |
| Deviation | `di = xi − x̄` |
| Standard deviation | `σ = √(Σdi²/n)` (or `/(n−1)` for sample) |
| Variance | `σ²` |
| Probable error (single) | `r = 0.6745σ` |
| Probable error (mean) | `0.6745σ/√n` |
| Std. dev. of mean | `σ_mean = σ/√n` |
| Quadrature (sum/diff) | `σy = √(σa² + σb²)` |

### 🧮 Solved Examples

**Example 1 — Mean, σ and probable error.**
Readings: `10.1, 10.2, 10.0, 9.9, 9.8`. Find mean, standard deviation (population) and probable error.

```
x̄ = (10.1+10.2+10.0+9.9+9.8)/5 = 50.0/5 = 10.0
deviations: +0.1, +0.2, 0, −0.1, −0.2
Σd² = 0.01+0.04+0+0.01+0.04 = 0.10
σ = √(0.10/5) = √0.02 = 0.1414
r = 0.6745 × 0.1414 = 0.0954  ≈ 0.095
```

**Example 2 — Quadrature combination.**
Two independent measurements have standard deviations `σ1 = 3` and `σ2 = 4`. Find the standard deviation of their sum.

```
σ_sum = √(σ1² + σ2²) = √(3² + 4²) = √(9+16) = √25 = 5
```

### ⚠️ Common Traps

1. **n vs n−1** — sample standard deviation uses `n−1` (Bessel); population uses `n`.
2. **Probable error factor** — `0.6745σ`, easy to forget the constant.
3. **Deviations sum to zero** — never average signed deviations for spread; square them.
4. **±2σ ≈ 95%** — the 95.45% (2σ) and 99.73% (3σ) bands are standard GATE recall.
5. **σ_mean vs σ** — the *mean's* uncertainty is `σ/√n`, smaller than a single reading's σ.
6. **Random vs systematic** — statistics handle **random** error only; a systematic bias shifts the whole mean.

### 📝 Test (5 MCQ + 3 NAT)

**Q1 (MCQ).** For a Gaussian distribution, the % of readings within ±1σ is:
(a) 50% (b) 68.27% (c) 95.45% (d) 99.73%

**Q2 (MCQ).** The probable error of a single reading is:
(a) 0.5σ (b) 0.6745σ (c) σ (d) 1.96σ

**Q3 (MCQ).** The sum of deviations from the mean is:
(a) always positive (b) always zero (c) equal to σ (d) equal to n

**Q4 (MCQ).** Sample standard deviation divides Σd² by:
(a) n (b) n−1 (c) n+1 (d) √n

**Q5 (MCQ).** Two independent errors σ=6 and σ=8 combine (sum) to:
(a) 14 (b) 10 (c) 2 (d) 48

**Q6 (NAT).** Readings 5,6,7,8,9. Find the population standard deviation.

**Q7 (NAT).** σ = 0.4 for a single reading. Find the standard deviation of the mean of 16 readings.

**Q8 (NAT).** σ = 2. Find the probable error (use 0.6745).

<details><summary>🔑 Solutions</summary>

**Q1 — (b) 68.27%.**

**Q2 — (b) 0.6745σ.**

**Q3 — (b) always zero.**

**Q4 — (b) n−1.** Bessel's correction.

**Q5 — (b) 10.** `√(36+64) = √100 = 10`.

**Q6 — √2 ≈ 1.414.**
```
x̄ = 35/5 = 7 ; deviations −2,−1,0,1,2 ; Σd² = 4+1+0+1+4 = 10
σ = √(10/5) = √2 = 1.414
```

**Q7 — 0.1.** `σ_mean = 0.4/√16 = 0.4/4 = 0.1`.

**Q8 — 1.349.** `r = 0.6745 × 2 = 1.349`.
</details>

---

## 🔧 Electrical Machines: Transformers V — Autotransformer, Tap Changing, Inrush, Cooling, Scott & Three-Winding

### 📖 Concept Deep Dive

**Autotransformer.** A transformer with **one winding** common to primary and secondary (a tapping point), so part of the winding is shared. Power passes **partly by transformer (inductive) action and partly conductively** through the common section. For ratio `a = N1/N2` (`a > 1`, step-down):
```
Copper (conductor) saving  = 1/a  of the two-winding value
Weight of auto conductor   = (1 − 1/a) × (two-winding conductor)
Power transferred inductively = (1 − 1/a)·(throughput)
Power transferred conductively = (1/a)·(throughput)
```
- **Advantages:** less copper, lower losses, better regulation & efficiency, smaller/cheaper — especially when `a` is **close to 1**.
- **Disadvantages:** **no electrical isolation** (a fault/open in the common winding puts full HV on the LV side); larger short-circuit currents.

**Tap changing.** Adjusts the turns ratio to regulate voltage:
- **Off-load (off-circuit)** tap changer — transformer de-energised.
- **On-load tap changer (OLTC)** — changes taps **without interruption** (uses a diverter/transition impedance), essential for grid voltage control.

**Inrush current.** At switch-on, if the core flux demand plus **residual flux** drives the core into **deep saturation**, the magnetising current spikes to **several times rated** for a few cycles. It is **rich in 2nd harmonic** — used by **differential protection** to *restrain* (avoid false trips on energisation).

**Cooling methods** (oil-immersed): **ONAN** (oil natural, air natural), **ONAF** (air forced), **OFAF** (oil forced, air forced), **ODAF** (oil directed). Dry-type: **AN/AF**.

**Scott (T-T) connection.** Converts **3-phase to 2-phase** (or vice-versa) using two transformers — a **main** transformer (centre-tapped) and a **teaser** tapped at **`0.866` (√3/2)** of the main winding.

**Three-winding transformer.** Adds a **tertiary** winding — often **delta-connected** — to (i) provide a path for **third-harmonic** currents (stabilise the neutral in Y-Y), (ii) supply auxiliary/local load, or (iii) connect reactive compensation.

> 💎 **KEY RESULT** — Autotransformer copper saving **= 1/a**; best when `a → 1`; **no isolation**. Scott teaser tap **= 0.866 (√3/2)**. Inrush is rich in **2nd harmonic** (protection restraint). Cooling: **ONAN/ONAF/OFAF/ODAF**.

> 🧠 **MEMORY HOOK** — Autotransformer: **"share the winding, save the copper."** The closer the ratio to 1, the bigger the saving. Teaser = **86.6%** tap.

> ⚠️ **TRAP ALERT** — Copper **saving = 1/a**, so the *remaining* copper is `(1 − 1/a)`. A big saving needs `a` **near 1** (a 10:1 auto saves only 10%). Autotransformers give **no galvanic isolation** — a key safety limitation.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Copper saving (auto) | `= 1/a` (a = N1/N2 > 1) |
| Auto conductor weight | `(1 − 1/a) × two-winding` |
| Inductive power fraction | `(1 − 1/a)` |
| Conductive power fraction | `1/a` |
| Scott teaser tap | `0.866 = √3/2` |
| Inrush harmonic (restraint) | 2nd harmonic |
| Cooling classes | ONAN, ONAF, OFAF, ODAF |

### 🧮 Solved Examples

**Example 1 — Autotransformer copper saving.**
A `1000/500 V` autotransformer (a = 2). Find the % copper saving vs an equivalent two-winding transformer.

```
Saving = 1/a = 1/2 = 0.5 = 50 %
So the autotransformer uses only 50% of the copper — big saving because a=2 is small.
```

**Example 2 — Power split.**
A 100 kVA autotransformer has `a = N1/N2 = 1.25`. Find the power transferred **inductively** and **conductively**.

```
Inductive fraction = 1 − 1/a = 1 − 1/1.25 = 1 − 0.8 = 0.2
Conductive fraction = 1/a = 0.8
Inductively transferred = 0.2 × 100 = 20 kVA
Conductively transferred = 0.8 × 100 = 80 kVA
(Only 20 kVA is actually transformed — hence smaller core/copper.)
```

### ⚠️ Common Traps

1. **Saving = 1/a, not 1 − 1/a** — the *saving* is `1/a`; the copper *used* is `(1 − 1/a)`.
2. **No isolation** — never use an autotransformer where galvanic isolation/safety is required.
3. **Inrush ≠ fault** — it is a 2nd-harmonic-rich magnetising transient; protection must restrain, not trip.
4. **Scott teaser tap** — `0.866`, not `0.5` or `√3`.
5. **OLTC vs off-load** — only OLTC changes taps while energised.
6. **Tertiary delta** — its main job is a **third-harmonic path** / neutral stabilisation, not just extra load.

### 📝 Test (5 MCQ + 3 NAT)

**Q1 (MCQ).** The copper saving in an autotransformer of ratio a is:
(a) `1 − a` (b) `1/a` (c) `a` (d) `a − 1`

**Q2 (MCQ).** A major disadvantage of the autotransformer is:
(a) high cost (b) no electrical isolation (c) large size (d) poor regulation

**Q3 (MCQ).** The Scott connection converts:
(a) 3-φ to 2-φ (b) DC to AC (c) 1-φ to 3-φ (d) AC to DC

**Q4 (MCQ).** Magnetising inrush current is rich in which harmonic (used for restraint)?
(a) 1st (b) 2nd (c) 3rd (d) 5th

**Q5 (MCQ).** The teaser transformer in a Scott connection is tapped at:
(a) 0.5 (b) 0.707 (c) 0.866 (d) 1.0

**Q6 (NAT).** An autotransformer has a = 4. Find the % copper saving.

**Q7 (NAT).** A 200 kVA autotransformer, a = 2. Find the kVA transferred inductively.

**Q8 (NAT).** For a = 1.6, find the fraction of power transferred conductively.

<details><summary>🔑 Solutions</summary>

**Q1 — (b) `1/a`.**

**Q2 — (b) no electrical isolation.**

**Q3 — (a) 3-φ to 2-φ.**

**Q4 — (b) 2nd harmonic.**

**Q5 — (c) 0.866.** `√3/2`.

**Q6 — 25%.** `saving = 1/4 = 0.25 = 25%`.

**Q7 — 100 kVA.** Inductive fraction `= 1 − 1/2 = 0.5`; `0.5 × 200 = 100 kVA`.

**Q8 — 0.625.** Conductive fraction `= 1/a = 1/1.6 = 0.625`.
</details>

---

## 🔧 Power Electronics: Thyristor III — Turn-Off & Commutation, Ratings, Series/Parallel & String Efficiency

### 📖 Concept Deep Dive

**Turn-off requirement.** An SCR turns off only when its anode current falls **below the holding current** and stays reverse-biased long enough for the stored charge to recombine. The device **turn-off time `tq`** (a few µs–tens of µs) must be **less** than the **circuit turn-off time** available, or the SCR fails to commutate.

**Commutation** = the process of turning off a conducting SCR:
- **Natural (line) commutation** — the AC supply itself **reverses** the anode voltage and drives the current to zero every half-cycle. Used in **phase-controlled rectifiers and AC voltage controllers** (no auxiliary circuit needed). *(This is "Class F.")*
- **Forced commutation** — in **DC circuits** (choppers, inverters) there is no natural zero, so an **auxiliary L-C circuit** forces the anode current to zero. Textbook **Classes A–E**:
  - **Class A** — self / resonant (load-commutated, series RLC rings current to zero).
  - **Class B** — resonant-pulse (L-C across the SCR).
  - **Class C** — complementary (another SCR turns this one off).
  - **Class D** — auxiliary/impulse commutation.
  - **Class E** — external pulse source.

**Key ratings.** Latching `IL`, holding `IH`, average/RMS on-state current, **VDRM/VRRM** (repetitive off-state/reverse voltage), `(di/dt)`, `(dv/dt)`, surge current `ITSM`, and **`I²t`** (for fuse coordination).

**Series operation (for high voltage).** SCRs are stacked in series to block higher voltage than one device can. Because devices differ (leakage, recovery), voltage **does not share equally** — remedied by **static equalisation** (parallel resistors) and **dynamic equalisation** (RC networks). The imperfection is measured by:
```
String efficiency = V_string / (n × V_rated_per_device)
   (n = number of devices; ideal = 1 = 100%)
Derating factor (DRF) = 1 − String efficiency
```

**Parallel operation (for high current).** SCRs in parallel share current; mismatch in on-state drop causes unequal sharing — helped by **matched devices, series inductors/reactors, and a common heatsink**. String efficiency is defined analogously on **current**:
```
String efficiency (parallel) = I_total / (n × I_rated_per_device)
```

> 💎 **KEY RESULT** — **Natural** commutation (AC, current self-zeros) vs **forced** commutation (DC, auxiliary L-C). Need **device `tq` < circuit off-time**. **String efficiency = V_string/(n·V_device)**; DRF = `1 − string efficiency`.

> 🧠 **MEMORY HOOK** — **"AC turns itself off (natural); DC needs a push (forced)."** Stacking devices: **string efficiency < 1**, so you must **derate**.

> ⚠️ **TRAP ALERT** — Natural commutation works **only** where the source current naturally reaches zero (AC). In DC choppers/inverters you **must** force-commutate. String efficiency being <100% means **more devices than the ideal** `n` are needed — never assume perfect sharing.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Turn-off condition | device `tq` < circuit off-time |
| Natural commutation | AC source zero-crossing (Class F) |
| Forced commutation | auxiliary L-C (Classes A–E) |
| String efficiency (series) | `V_string/(n × V_rated)` |
| String efficiency (parallel) | `I_total/(n × I_rated)` |
| Derating factor | `DRF = 1 − string efficiency` |

### 🧮 Solved Examples

**Example 1 — Series string efficiency.**
Five SCRs, each rated `1000 V`, are used in series to block a `4000 V` string. Find the string efficiency and derating factor.

```
String efficiency = V_string/(n × V_rated) = 4000/(5 × 1000)
                  = 4000/5000 = 0.8 = 80 %
Derating factor = 1 − 0.8 = 0.2 = 20 %
(The 5 devices, ideally good for 5000 V, safely handle only 4000 V.)
```

**Example 2 — Devices needed for a given voltage.**
SCRs rated `800 V` are to block `3000 V` at a string efficiency of `85%`. How many are needed?

```
V_string = SE × n × V_rated ⇒ n = V_string/(SE × V_rated)
n = 3000/(0.85 × 800) = 3000/680 = 4.41 ⇒ round up to 5
So 5 devices in series are required.
```

### ⚠️ Common Traps

1. **Natural only in AC** — a DC chopper cannot line-commutate; it needs a forced (L-C) circuit.
2. **tq vs circuit time** — the circuit must give the SCR **more** time than its `tq` to recover.
3. **String efficiency < 1** — unequal sharing means you cannot use the naive `n = V/V_rated`; **derate**.
4. **Static vs dynamic equalisation** — resistors handle **steady/leakage** imbalance; RC handles **transient (dv/dt)** imbalance.
5. **Parallel needs current de-rating** — mismatched on-state drops overload the "hoggy" device.
6. **Round up device count** — always round **up** to the next whole SCR.

### 📝 Test (5 MCQ + 3 NAT)

**Q1 (MCQ).** Natural (line) commutation is used in:
(a) DC choppers (b) phase-controlled rectifiers (c) inverters (d) SMPS

**Q2 (MCQ).** For successful turn-off, the device turn-off time tq must be:
(a) greater than circuit off-time (b) less than circuit off-time (c) equal to tq (d) zero

**Q3 (MCQ).** Static voltage equalisation in a series SCR string uses:
(a) parallel resistors (b) series inductors (c) RC networks (d) diodes

**Q4 (MCQ).** String efficiency is always:
(a) > 1 (b) = 1 (c) ≤ 1 (d) negative

**Q5 (MCQ).** Forced commutation is required in:
(a) AC voltage controllers (b) DC choppers (c) line-commutated rectifiers (d) cycloconverters

**Q6 (NAT).** Four SCRs each rated 1500 V block a 4800 V string. Find the string efficiency (%).

**Q7 (NAT).** SCRs rated 600 V, string efficiency 0.8, must block 2400 V. Find the number of devices (round up).

**Q8 (NAT).** Series string of 6 SCRs each 1000 V; string efficiency 90%. Find the safe string voltage (V).

<details><summary>🔑 Solutions</summary>

**Q1 — (b) phase-controlled rectifiers.** AC source self-commutates.

**Q2 — (b) less than circuit off-time.**

**Q3 — (a) parallel resistors.** Dynamic uses RC.

**Q4 — (c) ≤ 1.** Perfect sharing gives 1; real strings are less.

**Q5 — (b) DC choppers.** No natural zero in DC.

**Q6 — 80%.** `4800/(4×1500) = 4800/6000 = 0.8 = 80%`.

**Q7 — 5.** `n = 2400/(0.8×600) = 2400/480 = 5`.

**Q8 — 5400 V.** `V = 0.9 × 6 × 1000 = 5400 V`.
</details>

---

### 📊 GATE Tech Coverage Progress

```
Measuring Instruments  ███░░░░░░░░░░░░░░░░░░  3/21  🔁 Round 4
Electrical Machines    █████░░░░░░░░░░░░░░░░  5/19  🔁 Round 4
Power Electronics      █████░░░░░░░░░░░░░░░░  5/18  🔁 Round 4
```

*Next: Measurements → Galvanometers (d'Arsonval, ballistic); Machines → DC machines I (EMF, armature reaction, commutation); Power Electronics → Other devices & gate drives (TRIAC, DIAC, GTO).*

> ✅ **Self-check before you close:** Can you (1) compute σ and probable error from a data set, (2) state the autotransformer copper-saving rule and why isolation is lost, and (3) distinguish natural vs forced commutation and compute string efficiency? Re-read any KEY RESULT that felt shaky.
