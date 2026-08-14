# ⚡ GATE Technical Revision — Day 24 (2026-08-13)

*A statistical-error revision, a transformer-fundamentals revision, and a power-device family revision — a full revision day while we wait for the Power Systems PDFs.*

`📅 Tech Day 24  ·  ⏱ ~45 min  ·  🎯 Measurements + Machines + Power Electronics`

Attempt each section's test **before** opening its solutions — recall beats re-reading.

> 📌 **All three GATE sections are fully covered.** Today runs a **revision pass**; the next new subject is **Power Systems** — share your reference PDFs whenever you're ready and we'll begin.

---

## 🔧 Measuring Instruments: Revision — Statistical Analysis of Random Errors

Reconsolidating **statistical error analysis** (Day 3): how to treat the scatter of repeated measurements.

### 📖 Concept Deep Dive

**Central tendency & dispersion:**
```
Arithmetic mean  x̄ = (Σxi)/n
Deviation  di = xi − x̄  (Σdi = 0 always)
Average (mean) deviation = Σ|di|/n
Standard deviation (population)  σ = √(Σdi²/n)
Standard deviation (sample)      s = √(Σdi²/(n−1))    [Bessel's correction]
Variance = σ²
```

**Gaussian (normal) distribution** — random errors follow a bell curve:
```
Within ±1σ ≈ 68.27% of readings
Within ±2σ ≈ 95.45%
Within ±3σ ≈ 99.73%
Probable error  r = 0.6745σ   (50% of readings fall within ±r)
Standard error of the mean  σm = σ/√n
```

**Combination of quantities (random errors, RSS method):**
```
For Y = A ± B (independent random errors): σY = √(σA² + σB²)   (add in quadrature)
For products/quotients: relative errors add in quadrature
   (εY)² = (εA)² + (εB)²  (for independent random errors)
```
*(Contrast Day 23's **worst-case/limiting** errors, which add **linearly**; random independent errors add in **quadrature**.)*

> 💎 **KEY RESULT** — **σ = √(Σdi²/n)** (population), **√(Σdi²/(n−1))** (sample). **Probable error = 0.6745σ**; **±1σ = 68.3%, ±2σ = 95.5%, ±3σ = 99.7%**. Independent random errors combine in **quadrature** (RSS), unlike worst-case linear addition.

> 🧠 **MEMORY HOOK** — "**σ = RMS of deviations; probable error 0.6745σ; 68-95-99.7 rule. Random errors add in quadrature (√(a²+b²)); worst-case adds linearly.**"

> ⚠️ **TRAP ALERT** — **Sample** standard deviation uses **(n−1)** (Bessel), **population** uses **n**. **Random independent errors add in quadrature** (√(σA²+σB²)); **worst-case/limiting errors add linearly** — know which the question wants. **Probable error = 0.6745σ**, not σ.

### 📐 Formula Sheet

```
x̄ = Σxi/n ; di = xi − x̄
σ(pop) = √(Σdi²/n) ; s(sample) = √(Σdi²/(n−1))
Probable error r = 0.6745σ ; SEM = σ/√n
Gaussian: ±1σ=68.3%, ±2σ=95.5%, ±3σ=99.7%
Random combine: σY = √(σA² + σB²) (quadrature)
Worst-case (Day 23): errors add linearly
```

### 🧮 Solved Examples

**Example 1 — mean, σ, probable error.**
Five readings: **10.1, 9.9, 10.0, 10.2, 9.8**. Find the mean, population standard deviation, and probable error.

```
Mean x̄ = (10.1+9.9+10.0+10.2+9.8)/5 = 50.0/5 = 10.0
Deviations: 0.1, −0.1, 0, 0.2, −0.2 ; squares: 0.01, 0.01, 0, 0.04, 0.04 → Σ = 0.10
σ = √(0.10/5) = √0.02 = 0.1414
Probable error r = 0.6745 × 0.1414 = 0.0954
```
**Mean = 10.0; σ ≈ 0.141; probable error ≈ 0.095.**

**Example 2 — quadrature combination.**
Two independent resistors in series each have a standard-deviation error of **±3 Ω** and **±4 Ω**. Find the standard deviation of the total resistance.

```
σtotal = √(σA² + σB²) = √(3² + 4²) = √(9+16) = √25 = 5 Ω
```
**σtotal = 5 Ω** (quadrature, not 3+4 = 7 which would be worst-case).

### ⚠️ Common Traps

1. **Population σ uses n; sample s uses (n−1)** (Bessel's correction).
2. **Probable error = 0.6745σ** (50% band), not σ.
3. **Random independent errors add in quadrature** (√(a²+b²)); worst-case adds linearly.
4. **±1σ = 68.3%, ±2σ = 95.5%, ±3σ = 99.7%** (memorise).
5. **Σ of deviations = 0** always (a check on your arithmetic).
6. **Standard error of the mean = σ/√n** (shrinks with more readings).

### 📝 Test — Measuring Instruments Revision (8 Q)

1. **(MCQ)** The population standard deviation uses a divisor of:
   (a) n  (b) n−1  (c) n+1  (d) 2n
2. **(MCQ)** The probable error equals:
   (a) σ  (b) 0.6745σ  (c) 2σ  (d) σ/√n
3. **(MCQ)** Within ±2σ of a Gaussian, the percentage of readings is about:
   (a) 68%  (b) 95%  (c) 99.7%  (d) 50%
4. **(MCQ)** Independent random errors combine by:
   (a) linear addition  (b) quadrature (RSS)  (c) subtraction  (d) multiplication
5. **(MCQ)** The sum of deviations from the mean is:
   (a) zero  (b) σ  (c) n  (d) maximum
6. **(NAT)** Readings 5.0, 5.2, 4.8, 5.0. Find σ (population). ______
7. **(NAT)** For σ = 0.2, find the probable error. ______
8. **(NAT)** Two independent errors ±6 and ±8 combine (quadrature). Find the resultant. ______

<details>
<summary>🔑 Solutions</summary>

**1 → (a) n.**

**2 → (b) 0.6745σ.**

**3 → (b) 95%.**

**4 → (b) quadrature (RSS).**

**5 → (a) zero.**

**6 →** mean = 5.0; deviations 0, 0.2, −0.2, 0; Σd² = 0.08; σ = √(0.08/4) = √0.02 = **0.1414.**

**7 →** r = 0.6745 × 0.2 = **0.1349.**

**8 →** √(6² + 8²) = √100 = **10.**

</details>

---

## 🔧 Electrical Machines: Revision — Transformer Fundamentals

Reconsolidating **single-phase transformer basics** (Day 5): EMF, turns ratio, ideal vs practical.

### 📖 Concept Deep Dive

**EMF equation.** Sinusoidal flux `φ = φm sin(ωt)` in the core induces:
```
E = 4.44 f N φm    (per winding; φm = Bm·Ac = peak flux)
E1/E2 = N1/N2 = a  (turns ratio)
```
Both windings see the same flux, so **EMF per turn is equal**.

**Turns ratio & transformation:**
```
a = N1/N2 = V1/V2 = I2/I1 = √(Z1/Z2)
Impedance referred to primary: Z1' = a²·Z2
```

**Ideal vs practical transformer:**

| Feature | Ideal | Practical |
|---|---|---|
| Windings | no resistance | R1, R2 (copper loss) |
| Core | infinite µ, no loss | finite µ, hysteresis + eddy (iron loss) |
| Leakage flux | none | leakage reactances X1, X2 |
| Magnetising current | zero | small I0 (Im + Ie) |
| Efficiency | 100% | < 100% |

**No-load operation:** primary draws **exciting current I0** = magnetising `Im` (produces flux, 90° lag) + core-loss `Ie` (in phase with V):
```
I0 = √(Im² + Ie²) ; no-load pf cosφ0 = Ie/I0 (very low, ~0.1-0.3)
Core loss Pi = V1·I0·cosφ0 (measured by OC test)
```

**Losses:**
```
Iron (core) loss Pi = hysteresis (∝ f·Bm^1.6) + eddy (∝ f²·Bm²·t²) — constant (voltage-dependent)
Copper loss Pcu = I²R — varies with load²
EMF ratio independent of load; flux ≈ constant (V/f constant)
```

> 💎 **KEY RESULT** — **E = 4.44 f N φm**; turns ratio **a = N1/N2 = V1/V2 = I2/I1**; **impedance refers as a²**. No-load: **I0 = √(Im²+Ie²)**, very low pf; **iron loss ≈ constant, copper loss ∝ load²**.

> 🧠 **MEMORY HOOK** — "**E = 4.44 f N φm; a = V1/V2 = I2/I1; Z refers as a². No-load I0 = magnetising + core-loss; iron loss constant, copper ∝ load².**"

> ⚠️ **TRAP ALERT** — **Impedance refers by a² (the SQUARE of the turns ratio)**, current by 1/a, voltage by a. **Iron loss is ~constant** (flux constant), **copper loss varies with load²**. The **4.44 = π√2** factor in the EMF equation.

### 📐 Formula Sheet

```
EMF: E = 4.44 f N φm ; E1/E2 = N1/N2 = a
a = V1/V2 = I2/I1 = √(Z1/Z2) ; Z1' = a²Z2
No-load: I0 = √(Im² + Ie²) ; Pi = V1 I0 cosφ0
Iron loss ≈ constant ; Copper loss Pcu = I²R ∝ load²
Efficiency η = output/(output + Pi + Pcu) ; max η @ Pcu = Pi
```

### 🧮 Solved Examples

**Example 1 — EMF & turns.**
A 50 Hz transformer has a peak flux `φm = 5 mWb` and a primary of **400 turns**. Find the primary EMF, and the secondary turns for a 230 V secondary.

```
E1 = 4.44 f N1 φm = 4.44 × 50 × 400 × 0.005 = 4.44 × 50 = 222; ×400 = 88800; ×0.005 = 444 V
Turns ratio for 230 V secondary: N2 = N1 × E2/E1 = 400 × 230/444 = 207.2 ≈ 207 turns
```
**E1 = 444 V; N2 ≈ 207 turns.**

**Example 2 — impedance referral.**
A load impedance of **8 Ω** on the secondary of a transformer with turns ratio **a = N1/N2 = 5**. Find the impedance referred to the primary.

```
Z1' = a² × Z2 = 5² × 8 = 25 × 8 = 200 Ω
```
**Z1' = 200 Ω** (referred to primary).

### ⚠️ Common Traps

1. **E = 4.44 f N φm** — uses **peak** flux φm (4.44 = π√2).
2. **Impedance refers by a²** (voltage by a, current by 1/a).
3. **Iron loss ≈ constant** (voltage/flux dependent); **copper loss ∝ load²**.
4. **No-load pf is very low** (~0.1-0.3), mostly magnetising current.
5. **EMF per turn is equal** on both windings (same flux).
6. **Max efficiency at Pcu = Pi** (copper = iron loss).

### 📝 Test — Electrical Machines Revision (8 Q)

1. **(MCQ)** The transformer EMF equation is:
   (a) 4.44 f N φm  (b) φZNP/60A  (c) V − IaRa  (d) 120f/P
2. **(MCQ)** Impedance refers from secondary to primary by a factor of:
   (a) a  (b) a²  (c) 1/a  (d) 1/a²
3. **(MCQ)** Iron loss in a transformer is:
   (a) ∝ load²  (b) approximately constant  (c) zero  (d) ∝ load
4. **(MCQ)** Copper loss varies with:
   (a) load²  (b) voltage  (c) frequency only  (d) constant
5. **(MCQ)** The no-load power factor of a transformer is:
   (a) near unity  (b) very low (lagging)  (c) leading  (d) zero
6. **(NAT)** A 50 Hz transformer: N = 200 turns, φm = 8 mWb. Find the EMF in V. ______ V
7. **(NAT)** Turns ratio a = 4; secondary impedance 5 Ω. Find impedance referred to primary in Ω. ______ Ω
8. **(NAT)** A transformer 1100/220 V. Find the turns ratio a. ______

<details>
<summary>🔑 Solutions</summary>

**1 → (a) 4.44 f N φm.**

**2 → (b) a².**

**3 → (b) approximately constant.**

**4 → (a) load².**

**5 → (b) very low (lagging).**

**6 →** E = 4.44 × 50 × 200 × 0.008 = 4.44×50=222; ×200=44400; ×0.008 = **355.2 V.**

**7 →** Z1' = a²Z2 = 16 × 5 = **80 Ω.**

**8 →** a = 1100/220 = **5.**

</details>

---

## 🔧 Power Electronics: Revision — Power Semiconductor Devices

Reconsolidating the **power-device family** (Day 5): diode, BJT, MOSFET, IGBT, thyristor — their control, ratings and selection.

### 📖 Concept Deep Dive

**Device family & control:**

| Device | Control | Turn-off | Direction | Frequency | Power |
|---|---|---|---|---|---|
| **Power diode** | uncontrolled | reverse V | unidirectional | — | high |
| **Thyristor (SCR)** | current-triggered (gate) | needs commutation | unidirectional | low | very high |
| **TRIAC** | current-triggered | line/natural | **bidirectional** | low (AC) | medium |
| **GTO** | current (gate on/off) | **gate turn-off** | unidirectional | medium | high |
| **Power BJT** | **current** (base) | remove base current | unidirectional | medium | medium |
| **Power MOSFET** | **voltage** (gate) | discharge gate | unidirectional | **very high** | low-medium |
| **IGBT** | **voltage** (gate) | discharge gate | unidirectional | high | high |

**Key selection factors:**
- **MOSFET:** voltage-controlled, **very high switching frequency** (100s of kHz-MHz), low-medium power, **positive temperature coefficient** (easy paralleling), on-state = Rds(on).
- **IGBT:** voltage-controlled (MOSFET-like gate), **high power + moderate-high frequency** — the workhorse of modern drives/inverters; on-state = a voltage drop (like BJT).
- **SCR/GTO:** highest power, low frequency (line-frequency converters, HVDC).
- **BJT:** current-controlled (needs continuous base current), largely superseded by MOSFET/IGBT.

**Ideal switch vs real device:**
```
Ideal: zero on-drop, infinite off-resistance, zero switching time, no gate power
Real: on-state drop (conduction loss), finite switching time (switching loss),
      leakage, gate drive requirement
Total loss = conduction loss + switching loss (∝ frequency)
```

**Ratings:** voltage (VDRM/VRRM, VDS, VCE), current (average/RMS, ITSM surge), dv/dt, di/dt, junction temperature, switching times.

> 💎 **KEY RESULT** — **MOSFET/IGBT = voltage-controlled; BJT = current-controlled; SCR/TRIAC/GTO = current-triggered.** **MOSFET = highest frequency, lower power; IGBT = high power + high frequency (drives/inverters); SCR/GTO = highest power, low frequency.** Loss = **conduction + switching (∝ f)**.

> 🧠 **MEMORY HOOK** — "**Voltage-controlled: MOSFET (fast, low power), IGBT (high power, drives). Current: BJT (base), SCR/TRIAC/GTO (gate trigger). Loss = conduction + switching(×f).**"

> ⚠️ **TRAP ALERT** — **MOSFET/IGBT are voltage-controlled** (gate); **BJT is current-controlled** (base). **IGBT = high power + high frequency** (combines BJT's low drop with MOSFET's gate). **MOSFET has a positive temperature coefficient** (paralleling easy); switching loss **rises with frequency**.

### 📐 Formula Sheet

```
Voltage-controlled: MOSFET, IGBT (gate) ; Ig(avg) = QG·fsw
Current-controlled: BJT (base) ; Current-triggered: SCR, TRIAC, GTO (gate)
Total loss = conduction loss (Von·I·duty) + switching loss ((Eon+Eoff)·fsw)
MOSFET on-state = I²·Rds(on) ; IGBT/BJT on-state = Vce(sat)·I
Frequency: MOSFET (highest) > IGBT > BJT > GTO > SCR
Power: SCR > GTO ≈ IGBT > BJT > MOSFET
```

### 🧮 Solved Examples

**Example 1 — device switching loss.**
An IGBT switches at `fsw = 10 kHz` with `Eon + Eoff = 5 mJ` per switching cycle, and has a conduction loss of **20 W**. Find the total loss.

```
Switching loss = (Eon + Eoff) × fsw = 5e−3 J × 10000 = 50 W
Total loss = conduction + switching = 20 + 50 = 70 W
```
**Total loss = 70 W** (switching dominates at high frequency).

**Example 2 — MOSFET conduction loss.**
A power MOSFET with `Rds(on) = 50 mΩ` carries an RMS current of **10 A**. Find the conduction loss.

```
Conduction loss = I²·Rds(on) = 10² × 0.050 = 100 × 0.050 = 5 W
```
**Conduction loss = 5 W.**

### ⚠️ Common Traps

1. **MOSFET/IGBT = voltage-controlled** (gate); **BJT = current-controlled** (base).
2. **Switching loss ∝ frequency**; conduction loss ∝ current²·Rds(on) (MOSFET) or Vce·I (IGBT/BJT).
3. **IGBT = high power + high frequency** (combines the best of BJT & MOSFET).
4. **SCR/GTO = highest power but low frequency** (line-frequency converters, HVDC).
5. **MOSFET has a positive temp coefficient** → easy to parallel; BJT negative → thermal runaway risk.
6. **TRIAC is bidirectional; the rest are unidirectional** (except anti-parallel arrangements).

### 📝 Test — Power Electronics Revision (8 Q)

1. **(MCQ)** Which device is voltage-controlled?
   (a) BJT  (b) MOSFET  (c) SCR  (d) GTO
2. **(MCQ)** Which device is current-controlled?
   (a) MOSFET  (b) IGBT  (c) BJT  (d) diode
3. **(MCQ)** For high-power, high-frequency drives, the preferred device is:
   (a) SCR  (b) IGBT  (c) BJT  (d) diode
4. **(MCQ)** Switching loss in a device is proportional to:
   (a) frequency  (b) 1/frequency  (c) voltage only  (d) constant
5. **(MCQ)** Which device is bidirectional?
   (a) SCR  (b) TRIAC  (c) MOSFET  (d) IGBT
6. **(NAT)** An IGBT: Eon+Eoff = 4 mJ, fsw = 20 kHz. Find the switching loss in W. ______ W
7. **(NAT)** A MOSFET Rds(on) = 0.1 Ω carries 8 A rms. Find conduction loss in W. ______ W
8. **(NAT)** A device has 15 W conduction + switching loss of 45 W. Find the total loss in W. ______ W

<details>
<summary>🔑 Solutions</summary>

**1 → (b) MOSFET.**

**2 → (c) BJT.**

**3 → (b) IGBT.**

**4 → (a) frequency.**

**5 → (b) TRIAC.**

**6 →** Switching loss = 4e−3 × 20000 = **80 W.**

**7 →** Conduction = I²R = 8² × 0.1 = 64 × 0.1 = **6.4 W.**

**8 →** Total = 15 + 45 = **60 W.**

</details>

---

`✅ Day 24 complete — revision day: statistical error analysis, transformer fundamentals, and power-device family. The full technical track is covered and now cycling through revisions. 🎓 Ready to start POWER SYSTEMS whenever you upload the reference PDFs — until then, daily revisions continue.`

*Correctness over length — re-derive any result you're unsure of and mark "verify" before the exam.*
