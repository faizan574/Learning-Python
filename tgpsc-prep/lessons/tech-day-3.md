# ⚡ GATE Measuring Instruments — Day 3 (2026-07-20)

*Yesterday: how errors combine at their worst. Today: how they actually behave — the statistics that tames randomness.*

`📅 Tech Day 3  ·  ⏱ ~30 min  ·  🎯 Topic 3 of 23`

Attempt every question in the test **before** opening the solutions — recall beats re-reading.

---

## 🔧 Today's Topic: Error Analysis II — Statistical Analysis of Random Errors

When systematic errors are calibrated out, what remains is random scatter — and GATE regularly asks one direct numerical from this block: mean, standard deviation, probable error, or the quadrature combination rule.

---

## 📖 Concept Deep Dive

### 1. The best estimate: arithmetic mean

For `n` readings `x₁ … xₙ`:
$$\bar{x} = \frac{\sum x_i}{n}$$

With only random errors present, the mean is the **most probable value** — positive and negative deviations cancel.

### 2. Measures of scatter

| Quantity | Formula | Meaning |
|---|---|---|
| **Deviation** | `dᵢ = xᵢ − x̄` | Individual scatter; `Σdᵢ = 0` always |
| **Average deviation** | `D = Σ|dᵢ| / n` | Mean of magnitudes |
| **Standard deviation** (large n) | `σ = √(Σdᵢ²/n)` | RMS of deviations |
| **Sample S.D.** (small n, < ~20) | `s = √(Σdᵢ²/(n−1))` | **Bessel's correction** — dividing by `n−1` compensates for using x̄ (itself estimated) instead of the true mean |
| **Variance** | `V = σ²` | Square of S.D. |

### 3. The Gaussian (normal) law of random errors

Assumptions: many small independent causes; positive and negative errors equally likely; small errors more probable than large ones. The resulting bell curve gives the famous coverage numbers:

| Range about the mean | Probability a reading lies inside |
|---|---|
| `± σ` | `68.3%` |
| `± 2σ` | `95.5%` |
| `± 3σ` | `99.7%` |
| `± r` (probable error) | **`50%`** |

$$r = 0.6745\,\sigma$$

> 💎 **KEY RESULT** — **Probable error** `r = 0.6745σ`: half of all readings fall within `±r` of the mean. It is a *statistical* promise, not a guarantee for any single reading.

### 4. Precision of the mean itself

Averaging n readings shrinks the uncertainty of the **mean**:
$$\sigma_{\bar{x}} = \frac{\sigma}{\sqrt{n}} \qquad r_{\bar{x}} = \frac{r}{\sqrt{n}}$$

> 🧠 **MEMORY HOOK** — "**Root-n rule**": want the error of your average halved? Take **4×** the readings; a tenth? **100×**. Precision is bought at quadratic cost.

### 5. Combining independent random errors — quadrature

For **independent random** (not limiting) errors, add **in quadrature** (root-sum-square):

- Sum/difference `X = A ± B`: `σ_X = √(σ_A² + σ_B²)`
- General `X = AᵐBⁿ/Cᵖ`: `(σ_X/X)² = (m·σ_A/A)² + (n·σ_B/B)² + (p·σ_C/C)²`

> ⚠️ **TRAP ALERT** — Day 2's rules (straight addition) are for **worst-case limiting** errors; today's quadrature is for **standard deviations of random** errors. GATE tells you which by the words *"guaranteed/limiting"* vs *"standard deviation"* — read the question's vocabulary first.

### 6. Vocabulary that examiners test

- **Precision index (h)**: taller/narrower Gaussian ⇒ larger h ⇒ more precise instrument (`h = 1/(σ√2)`).
- **Confidence interval/level**: the ±kσ band and its probability.
- **Standard error** = standard deviation **of the mean** (`σ/√n`) — not of a single reading.

---

## 📐 Formula Sheet

| Formula | Symbols | Notes |
|---|---|---|
| `x̄ = Σxᵢ/n` | mean | Best estimate |
| `σ = √(Σd²/n)`, `s = √(Σd²/(n−1))` | S.D. | Bessel for small n |
| `r = 0.6745 σ` | probable error | 50% band |
| `σ_mean = σ/√n` | standard error | Root-n improvement |
| `σ_X = √(σ_A² + σ_B²)` | X = A ± B | Quadrature (random) |
| `(σ_X/X)² = Σ(kᵢ σᵢ/xᵢ)²` | powers kᵢ | Relative quadrature |
| `±σ, ±2σ, ±3σ` | 68.3 / 95.5 / 99.7 % | Coverage table |

---

## 🧮 Solved Examples

**Example 1.** Five readings of a voltage: `101, 102, 103, 104, 105 V`. Find the mean, standard deviation and probable error.

1. Mean `x̄ = 515/5 = 103 V`
2. Deviations: `−2, −1, 0, +1, +2` → `Σd² = 4+1+0+1+4 = 10`
3. `σ = √(10/5) = √2 ≈ 1.414 V` (population form)
4. Probable error `r = 0.6745 × 1.414 ≈ 0.95 V`

*Lesson: half the readings are expected within `103 ± 0.95 V`.*

**Example 2.** Two resistors with standard deviations `σ₁ = 0.3 Ω` and `σ₂ = 0.4 Ω` are joined in series. Find the standard deviation of the combination.

1. Series: `R = R₁ + R₂` → quadrature applies.
2. `σ_R = √(0.3² + 0.4²) = √(0.09 + 0.16) = √0.25 = 0.5 Ω`

*Lesson: random errors combine as a 3-4-5 triangle — not 0.3+0.4 = 0.7 (that would be the worst-case limiting answer).*

---

## ⚠️ Common Traps

- Quadrature vs straight addition — match the rule to "standard deviation" vs "limiting error" wording.
- Bessel's `n−1` is for **small samples**; using `n` there understates the scatter.
- `σ/√n` improves the **mean's** precision, not the instrument's σ.
- Probable error covers `50%`, not 68% — don't swap `r` with `σ`.
- `Σdᵢ = 0` by construction — a "compute the sum of deviations" question is a free gift.
- Coverage numbers 68.3 / 95.5 / 99.7 are for **1σ/2σ/3σ** exactly — memorise the triplet.

---

**Quick self-check** (say the answers aloud before the test):

- [ ] What fraction of readings lies within ±2σ? Within ±r?
- [ ] When do I divide by n−1 instead of n?
- [ ] Which combination rule applies to standard deviations, and which to limiting errors?

---

## 📝 Today's Test

**Q1. The algebraic sum of deviations of all readings from their arithmetic mean is:**
- A) Always positive
- B) Always zero
- C) Equal to σ
- D) Equal to the probable error

**Q2. Bessel's correction (dividing by n−1) is used because:**
- A) It makes σ smaller
- B) The mean used for deviations is itself estimated from the same data
- C) Random errors are asymmetric
- D) It applies only to systematic errors

**Q3. The probable error equals:**
- A) 0.5 σ
- B) 0.6745 σ
- C) σ/√n
- D) 2 σ

**Q4. Consider the following statements about the Gaussian error law:**
1. Small errors are more probable than large errors.
2. Positive and negative errors are equally likely.
3. About 95.5% of readings lie within ±σ of the mean.

**Which are correct?**
- A) 1 and 2
- B) 2 and 3
- C) 1 and 3
- D) 1, 2 and 3

**Q5. To reduce the standard error of the mean to one-third, the number of readings must be increased:**
- A) 3 times
- B) 6 times
- C) 9 times
- D) 27 times

**Q6. Match the band with its coverage probability:**

| Band | Probability |
|---|---|
| P. ±σ | 1. 99.7% |
| Q. ±2σ | 2. 68.3% |
| R. ±3σ | 3. 95.5% |

- A) P-2, Q-3, R-1
- B) P-1, Q-2, R-3
- C) P-3, Q-2, R-1
- D) P-2, Q-1, R-3

**Q7. (NAT) A set of 10 readings has σ = 2.0 units. If 100 readings had been taken with the same scatter, the standard deviation of the mean would be ______ units.**

**Q8. (NAT) For readings 20, 22, 24, 26, 28 (in mA), the standard deviation (population form, divide by n) is ______ mA (round to 2 decimals).**

**Q9. (NAT) The standard deviation of a current measurement is 1.2 A. The probable error is ______ A (round to 2 decimals).**

**Q10. (NAT) X = A·B where A and B carry independent random relative errors of 3% and 4% (1σ). The 1σ relative error of X is ______ %.**

<details><summary>🔑 Solutions (open only after attempting!)</summary>

**Q1: B** — Deviations from the mean cancel by definition: Σ(xᵢ − x̄) = 0.

**Q2: B** — One degree of freedom is spent estimating x̄, so n−1 remain for the scatter.

**Q3: B** — r = 0.6745σ, the 50% band.

**Q4: A** — Statements 1 and 2 are the Gaussian assumptions; ±σ covers 68.3%, not 95.5%.

**Q5: C** — σ_mean ∝ 1/√n, so ⅓ the error needs 9× the readings.

**Q6: A** — 68.3 / 95.5 / 99.7 for 1σ/2σ/3σ.

**Q7: 0.2** — σ_mean = σ/√n = 2/√100 = 0.2.

**Q8: 2.83** — Mean 24; d = ∓4, ∓2, 0; Σd² = 16+4+0+4+16 = 40; σ = √(40/5) = √8 ≈ 2.83 mA.

**Q9: 0.81** — r = 0.6745 × 1.2 = 0.8094 ≈ 0.81 A.

**Q10: 5** — √(3² + 4²) = 5% — the quadrature 3-4-5 again.

</details>

---

*Randomness obeys rules — and now you know them. Tomorrow the hardware begins: galvanometers.* 💪

`🟩🟩🟩⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜` **Topic 3 of 23 done**
