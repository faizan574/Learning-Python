# ⚡ GATE Measuring Instruments — Day 2 (2026-07-19)

*Yesterday you learned what error is; today you learn how errors travel through your calculations — and how GATE cashes in on it.*

`📅 Tech Day 2  ·  ⏱ ~30 min  ·  🎯 Topic 2 of 23`

Attempt every question in the test **before** opening the solutions — recall beats re-reading.

---

## 🔧 Today's Topic: Error Analysis I — Types of Errors & Error Propagation

This is the **most numerically productive** topic of the subject: nearly every GATE paper carries a limiting-error or error-propagation numerical (1–2 marks), and the same rules reappear inside wattmeter, bridge and CT/PT problems later.

---

## 📖 Concept Deep Dive

### 1. The three families of errors

| Type | Cause | Nature | Remedy |
|---|---|---|---|
| **Gross errors** | Human mistakes — misreading, wrong recording, parallax | Unpredictable, large | Care, repeated readings by different observers |
| **Systematic errors** | (a) **Instrumental** (worn parts, calibration shift, loading) (b) **Environmental** (temperature, field, humidity) (c) **Observational** (parallax habit) | Consistent bias — same sign each time | Correction factors, calibration, shielding, better procedure |
| **Random (residual) errors** | Many small uncontrollable causes | Scatter both ways around the mean | **Averaging many readings**, statistical treatment |

> 💎 **KEY RESULT** — Averaging reduces only **random** errors. A systematic bias survives any number of repetitions — it must be *calibrated out*, not averaged out.

> 🧠 **MEMORY HOOK** — "**G**ross = **G**oof-up, **S**ystematic = **S**ame-side shift, **R**andom = **R**attle around the mean."

### 2. Expressing a single measurement's error

- Absolute error: `δA = Am − At`; correction `= −δA` (Day 1 recap).
- Relative error: `εr = δA/At`; percentage error `= εr × 100`.
- **Limiting (guarantee) error**: the manufacturer promises the reading lies within `±δA` — usually quoted as a **% of full scale**. At any reading, worst-case reading error `= (fsd error / reading) × 100` %.

### 3. Propagation of limiting errors (the exam engine)

Let each measured quantity carry a **worst-case** fractional error. For a computed result the errors **always add in the worst case** — they never cancel:

**(a) Sum or difference** `X = A + B` or `X = A − B`:
$$\delta X = \delta A + \delta B \quad \text{(absolute errors add)}$$

**(b) Product or quotient** `X = A·B` or `X = A/B`:
$$\frac{\delta X}{X} = \frac{\delta A}{A} + \frac{\delta B}{B} \quad \text{(percentage errors add)}$$

**(c) General power form** `X = Aᵐ·Bⁿ / Cᵖ`:
$$\%\,\delta X = m\,(\%\delta A) + n\,(\%\delta B) + p\,(\%\delta C)$$

Derivation sketch (log-differentiation): take `ln X = m ln A + n ln B − p ln C`, differentiate → `dX/X = m dA/A + n dB/B − p dC/C`; for **limiting** errors take every term with `+` sign (worst case).

**(d) The killer case — difference of nearly equal quantities:** if `X = A − B` with `A ≈ B`, the absolute errors add while `X` itself is tiny, so the **relative** error of `X` explodes:
$$\frac{\delta X}{X} = \frac{\delta A + \delta B}{A - B}$$

> ⚠️ **TRAP ALERT** — In a **quotient** the percentage errors still **add** (they do not subtract). Writing `%X = %A − %B` for `X = A/B` is the single most common wrong answer in this topic.

> ⚠️ **TRAP ALERT** — Exponents multiply the percentage: in `P = I²R`, the current's error counts **twice**: `%P = 2(%I) + %R`.

### 4. Where this plugs in later

- Wattmeter: `P = VI cosφ` → three additive error sources.
- Wheatstone bridge: `Rx = R₂R₃/R₄` → `%Rx = %R₂ + %R₃ + %R₄`.
- Energy: `E = P·t` → timing error adds to power error.

---

## 📐 Formula Sheet

| Formula | Symbols | Notes |
|---|---|---|
| `δX = δA + δB` | X = A ± B | Absolute limiting errors add |
| `%δX = %δA + %δB` | X = A·B or A/B | Percentage errors add |
| `%δX = m·%δA + n·%δB + p·%δC` | X = AᵐBⁿ/Cᵖ | Exponents weight the % errors |
| `δX/X = (δA+δB)/(A−B)` | X = A − B, A ≈ B | Near-equal difference blow-up |
| `% reading error = (fsd error/reading)×100` | — | Limiting-error spec conversion |
| `%P = 2·%I + %R` | P = I²R | Classic application |

---

## 🧮 Solved Examples

**Example 1.** Power is computed as `P = VI` from a voltmeter reading `V = 100 V` (accuracy `±1%` of reading) and an ammeter reading `I = 5 A` (accuracy `±1%` of reading). Find the limiting error of the power.

1. `P = 100 × 5 = 500 W`
2. Product rule: `%δP = %δV + %δI = 1 + 1 = 2%`
3. Limiting error `= 2% × 500 W = ±10 W` → `P = 500 ± 10 W`

*Lesson: two "1% instruments" give a 2% result — accuracy specs are per input, not per answer.*

**Example 2.** A quantity is computed as `X = A²B / C^{1/2}` with `%δA = 1%`, `%δB = 2%`, `%δC = 4%`. Find the worst-case percentage error of `X`.

1. Apply the power rule: `%δX = 2(%δA) + 1(%δB) + ½(%δC)`
2. `%δX = 2(1) + 2 + 0.5(4) = 2 + 2 + 2 = 6%`

*Lesson: square doubles, square-root halves — write the exponents down before adding.*

---

## ⚠️ Common Traps

- Percentage errors **add** for division too — no cancelling.
- `%` of full scale ≠ `%` of reading — convert first, then propagate.
- Averaging cures random error only; a mis-calibrated meter stays wrong forever.
- `P = I²R`: forgetting the factor 2 on the current term.
- Difference of nearly equal readings → always compute the blown-up relative error, never quote the instruments' own %.
- Correction has the **opposite sign** to error (`+2.5 Ω` error ⇒ `−2.5 Ω` correction).

---

**Quick self-check** (say the answers aloud before the test):

- [ ] Which error type does averaging reduce, and why not the others?
- [ ] State the propagation rule for `X = AᵐBⁿ/Cᵖ` from memory.
- [ ] Why is measuring a small difference of two large quantities dangerous?

---

## 📝 Today's Test

**Q1. An observer consistently reads a meter from the left, causing a fixed parallax shift. This is a:**
- A) Gross error
- B) Random error
- C) Systematic (observational) error
- D) Limiting error

**Q2. Which error can be reduced by taking the mean of a large number of readings?**
- A) Systematic instrumental error
- B) Random error
- C) Gross error
- D) Calibration error

**Q3. Consider the following statements:**
1. Systematic errors have the same sign and magnitude pattern on repetition.
2. Environmental error is a category of systematic error.
3. Random errors can be fully eliminated by better calibration.

**Which are correct?**
- A) 1 and 2 only
- B) 2 and 3 only
- C) 1 and 3 only
- D) 1, 2 and 3

**Q4. For X = A/B, the worst-case percentage error of X equals:**
- A) %A − %B
- B) %A + %B
- C) √(%A² + %B²)
- D) %A × %B

**Q5. Assertion (A): Measuring the difference of two nearly equal voltages with separate voltmeters gives a highly unreliable result. Reason (R): The absolute errors of the two readings add, while the difference itself is small, inflating the relative error.**
- A) Both A and R true, R explains A
- B) Both A and R true, R does not explain A
- C) A true, R false
- D) A false, R true

**Q6. Match the quantity with its worst-case error rule:**

| Quantity | Error rule |
|---|---|
| P. X = A + B | 1. %errors add |
| Q. X = A·B | 2. absolute errors add |
| R. X = A³ | 3. 3 × %error of A |

- A) P-2, Q-1, R-3
- B) P-1, Q-2, R-3
- C) P-3, Q-1, R-2
- D) P-2, Q-3, R-1

**Q7. (NAT) Power dissipated is P = I²R. The ammeter has a limiting error of 2% and the resistor tolerance is 1%. The worst-case percentage error in P is ______ %.**

**Q8. (NAT) Two resistors of 150 Ω ± 3 Ω and 100 Ω ± 2 Ω are connected in series. The percentage limiting error of the combination is ______ %.**

**Q9. (NAT) X = AB²/C with %δA = 0.5, %δB = 1, %δC = 1.5. The worst-case %δX is ______ %.**

**Q10. (NAT) A = 100 ± 1 and B = 95 ± 1 are measured; X = A − B. The worst-case percentage error of X is ______ %.**

<details><summary>🔑 Solutions (open only after attempting!)</summary>

**Q1: C** — A repeatable, one-sided habit is an observational systematic error (a one-off misread would be gross).

**Q2: B** — Random scatter averages toward zero as readings increase; bias does not.

**Q3: A** — Statements 1 and 2 are correct; calibration attacks *systematic*, not random, error.

**Q4: B** — For products **and** quotients, worst-case percentage errors add.

**Q5: A** — δX/X = (δA+δB)/(A−B); a small denominator inflates the relative error — R is the exact mechanism.

**Q6: A** — Sum → absolute add; product → % add; cube → 3× the % error.

**Q7: 5** — %P = 2(2%) + 1% = 5%.

**Q8: 2** — Total = 250 Ω, absolute error = 3+2 = 5 Ω → 5/250 = 2%.

**Q9: 4** — 0.5 + 2(1) + 1.5 = 4%.

**Q10: 40** — X = 5, δX = 1+1 = 2 → 2/5 = 40%. The classic blow-up.

</details>

---

*Errors compound — but so does daily practice. Same time tomorrow for the statistics of errors.* 💪

`🟩🟩⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜` **Topic 2 of 23 done**
