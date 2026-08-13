# ⚡ GATE Technical Revision — Day 23 (2026-08-12)

*Error-analysis revision, a full Electrical-Machines formula sweep, and a complete Power-Electronics formula sweep — the technical track's finish line.*

`📅 Tech Day 23  ·  ⏱ ~45 min  ·  🎯 Measurements + Machines + Power Electronics`

Attempt each section's test **before** opening its solutions — recall beats re-reading.

> 🎉 **Technical track complete!** With today's Machines and Power Electronics revisions, **all three GATE sections are fully covered** (Measurements 21, Machines 19, Power Electronics 19 topics). Next: **Power Systems** — send your reference PDFs whenever ready.

---

## 🔧 Measuring Instruments: Revision — Error Analysis & Propagation

Continuing the Section-A revision, today reconsolidates **error analysis** (Day 2): how errors combine and propagate — the backbone of every numerical.

### 📖 Concept Deep Dive

**Types of error:**
```
Gross errors: human (misreading, wrong recording) — avoid by care
Systematic: instrumental/environmental/observational — repeatable BIAS
Random: unpredictable scatter — treated statistically
```

**Basic error measures:**
```
Absolute error  δA = |Am − At|   (Am = measured, At = true)
Relative error  εr = δA/At ; % error = εr × 100
Limiting (guarantee) error = ± specified % of full-scale
Correction = At − Am
```

**Error propagation (combination of quantities)** — the exam core:

**Sum / difference:** absolute errors **add** (worst case):
```
If Y = A ± B :  δY = δA + δB   (absolute errors add)
Relative error of a difference can be LARGE (small denominator)
```

**Product / quotient:** relative (%) errors **add**:
```
If Y = A·B or A/B :  εY = εA + εB   (% errors add)
```

**Power:** relative error multiplies by the exponent:
```
If Y = Aⁿ :  εY = |n|·εA
If Y = Aᵃ·Bᵇ/Cᶜ :  εY = |a|εA + |b|εB + |c|εC
```

**Statistical (random errors):**
```
Arithmetic mean  x̄ = Σxi/n
Deviation  di = xi − x̄ ; Std deviation σ = √(Σdi²/n)  (or n−1 for sample)
Variance = σ² ; Probable error = 0.6745σ
Standard error of mean = σ/√n
```

> 💎 **KEY RESULT** — **Sum/difference: absolute errors add** (`δY = δA + δB`). **Product/quotient: relative (%) errors add** (`εY = εA + εB`). **Power Aⁿ: εY = |n|εA**. Random errors → **σ = √(Σdi²/n)**, probable error = 0.6745σ.

> 🧠 **MEMORY HOOK** — "**Add/subtract → add absolute errors; multiply/divide → add % errors; power → multiply % error by exponent.** Random: σ, probable error 0.6745σ."

> ⚠️ **TRAP ALERT** — For **products/quotients add the RELATIVE (%) errors**; for **sums/differences add the ABSOLUTE errors**. A **difference** of two nearly-equal numbers has a **magnified relative error** (small result, same absolute error).

### 📐 Formula Sheet

```
Absolute δA = |Am − At| ; Relative εr = δA/At ; % = ×100
Sum/diff Y=A±B : δY = δA + δB (absolute add)
Product/quotient Y=AB or A/B : εY = εA + εB (% add)
Power Y=Aⁿ : εY = |n|εA ; general Y=AᵃBᵇ/Cᶜ : εY=|a|εA+|b|εB+|c|εC
Mean x̄=Σxi/n ; σ=√(Σdi²/n) ; probable error=0.6745σ ; SEM=σ/√n
```

### 🧮 Solved Examples

**Example 1 — power measurement error.**
Power `P = V²/R`. If voltage V is measured with **±1%** error and resistance R with **±2%** error, find the limiting % error in P.

```
P = V²/R ⇒ εP = 2·εV + εR = 2×1% + 2% = 2% + 2% = 4%
```
**±4 %** limiting error in P.

**Example 2 — statistics.**
Four readings: **100.0, 100.2, 99.8, 100.0**. Find the mean and standard deviation.

```
Mean x̄ = (100.0 + 100.2 + 99.8 + 100.0)/4 = 400.0/4 = 100.0
Deviations: 0, +0.2, −0.2, 0 ; squares: 0, 0.04, 0.04, 0
σ = √(Σd²/n) = √(0.08/4) = √0.02 = 0.1414
```
**Mean = 100.0; σ ≈ 0.141.**

### ⚠️ Common Traps

1. **Product/quotient → add % errors; sum/difference → add absolute errors.**
2. **Power term multiplies the % error by the exponent** (P = V²/R gives 2εV).
3. **Difference of near-equal values** magnifies relative error.
4. **Limiting error is worst-case** (errors assumed additive in the same direction).
5. **Systematic = bias (repeatable); random = scatter (statistical)** — different treatment.
6. **σ = √(Σd²/n)** (population) vs √(Σd²/(n−1)) (sample) — note which is asked.

### 📝 Test — Measuring Instruments Revision (8 Q)

1. **(MCQ)** For a product Y = A·B, the errors combine as:
   (a) absolute errors add  (b) relative (%) errors add  (c) subtract  (d) multiply
2. **(MCQ)** For a sum Y = A + B, the errors combine as:
   (a) absolute errors add  (b) % errors add  (c) subtract  (d) multiply
3. **(MCQ)** For Y = A³, the % error is:
   (a) εA  (b) 3εA  (c) εA/3  (d) 9εA
4. **(MCQ)** A repeatable bias is a ______ error.
   (a) random  (b) systematic  (c) gross  (d) limiting
5. **(MCQ)** Probable error equals:
   (a) 0.6745σ  (b) σ  (c) 2σ  (d) σ/√n
6. **(NAT)** Power P = I²R; I has ±2% and R has ±1% error. Find the % error in P. ______ %
7. **(NAT)** Readings 50.1, 49.9, 50.0, 50.0. Find the standard deviation (population). ______
8. **(NAT)** Y = A/B; A has ±1.5%, B has ±2.5%. Find the % error in Y. ______ %

<details>
<summary>🔑 Solutions</summary>

**1 → (b) relative (%) errors add.**

**2 → (a) absolute errors add.**

**3 → (b) 3εA.**

**4 → (b) systematic.**

**5 → (a) 0.6745σ.**

**6 →** εP = 2εI + εR = 2×2% + 1% = **5%.**

**7 →** mean = 50.0; deviations 0.1, −0.1, 0, 0; σ = √((0.01+0.01)/4) = √0.005 = **0.0707.**

**8 →** εY = εA + εB = 1.5% + 2.5% = **4%.**

</details>

---

## 🔧 Electrical Machines: Full Revision — Formula Sheet & Mixed Numericals

Section B complete. A **consolidated formula sweep** across transformers, DC machines, induction & synchronous machines (Days 5-22).

### 📖 Concept Deep Dive — Master Formula Sheet

**Transformers:**
```
EMF: E = 4.44 f N φm ; turns ratio a = N1/N2 = V1/V2 = I2/I1
Regulation = (I(Rcosφ ± Xsinφ))/V ×100 [+lag, −lead]
Efficiency η = output/(output + Pcu + Pi) ; max η when Pcu = Pi (iron loss)
Condition: load fraction x = √(Pi/Pcu,fl) for max η
OC test → core loss (Pi) ; SC test → copper loss (Pcu)
Autotransformer: transformed = S(1−a), conducted = S·a
```

**DC machines:**
```
EMF/back-EMF: Eb = φZNP/(60A) = Ka φ N ; Lap A=P, Wave A=2
Torque Ta = φZIaP/(2πA) = Ka φ Ia
Motor: Eb = V − IaRa ; Generator: Eg = V + IaRa
Shunt: Ia = IL + Ish ; Speed N ∝ (V−IaRa)/φ
Max efficiency: variable loss = constant loss
```

**Induction motor:**
```
Ns = 120f/P ; slip s = (Ns−Nr)/Ns ; fr = sf ; Er = sE2
Torque T ∝ sE2²R2/(R2²+(sX2)²) ; sm = R2/X2 ; Tmax ∝ E2²/(2X2) (indep of R2)
Power: Pag : Pcu,rotor : Pmech = 1 : s : (1−s)
Star-delta start: Ist,Y = (1/3)Ist,Δ ; Tst,Y = (1/3)Tst,Δ
No-load = magnetising; blocked-rotor = series impedance
```

**Synchronous machines:**
```
Ns = 120f/P ; EMF E = 4.44 f φ Tph Kw ; Kw = Kd·Kp
Salient: Xd > Xq ; cylindrical: Xd = Xq
Regulation = (E−V)/V ×100 ; EMF method (pessimistic), MMF (optimistic), Potier (accurate)
Power P = (EV/Xs) sinδ ; max at δ=90°
Over-excited → leading pf ; synchronous condenser = over-excited no-load
Sync conditions: equal V, f, phase sequence, phase
```

> 💎 **KEY RESULT — the 10 machine essentials:** transformer `E=4.44fNφm`, max η at `Pcu=Pi`; DC `Eb=φZNP/60A`, lap A=P/wave A=2; induction `s=(Ns−Nr)/Ns`, `sm=R2/X2`, Tmax indep of R2, power split 1:s:(1−s); synchronous `E=4.44fφTphKw`, `P=(EV/Xs)sinδ`, over-excited=leading pf.

> 🧠 **MEMORY HOOK** — "**Transformer max η at Pcu=Pi; DC lap A=P/wave A=2; induction Tmax indep of R2 (sm=R2/X2), 1:s:(1−s); synchronous P=(EV/Xs)sinδ, over-excited=leading.**"

> ⚠️ **TRAP ALERT** — Transformer **max efficiency when copper loss = iron loss**. Induction **Tmax independent of rotor resistance** (R2 shifts sm only). **Motor Eb = V−IaRa; generator Eg = V+IaRa** (sign flip). Synchronous **over-excited = leading pf**.

### 📐 Formula Sheet (Quick Grab)

```
Transformer: E=4.44fNφm ; max η@Pcu=Pi ; x=√(Pi/Pcu,fl)
DC: Eb=φZNP/60A ; Ta=KaφIa ; motor Eb=V−IaRa
Induction: s=(Ns−Nr)/Ns ; sm=R2/X2 ; Pag:Pcu:Pm=1:s:(1−s)
Synchronous: E=4.44fφTphKw ; P=(EV/Xs)sinδ ; Xd>Xq (salient)
```

### 🧮 Solved Examples

**Example 1 — transformer max efficiency load.**
A transformer has **iron loss 400 W** and **full-load copper loss 900 W**. At what fraction of full load is efficiency maximum?

```
x = √(Pi/Pcu,fl) = √(400/900) = √0.4444 = 0.6667
```
**Max efficiency at ≈ 66.7 % of full load** (where copper loss = iron loss = 400 W).

**Example 2 — induction motor slip & speed.**
A 6-pole, 50 Hz induction motor runs at slip **3%**. Find the rotor speed and rotor frequency.

```
Ns = 120×50/6 = 1000 rpm ; Nr = 1000×(1−0.03) = 970 rpm
fr = s·f = 0.03×50 = 1.5 Hz
```
**Nr = 970 rpm; fr = 1.5 Hz.**

### ⚠️ Common Traps

1. **Transformer max η at Pcu = Pi** (copper = iron loss), at load fraction √(Pi/Pcu,fl).
2. **DC lap A = P, wave A = 2** — wrong A doubles/halves EMF.
3. **Induction Tmax independent of R2**; sm = R2/X2.
4. **Motor Eb = V − IaRa; generator Eg = V + IaRa.**
5. **Synchronous over-excited = leading pf** (VAR source / condenser).
6. **Rotor copper loss = s × air-gap power** (not s × input).

### 📝 Test — Electrical Machines Revision (8 Q)

1. **(MCQ)** Transformer efficiency is maximum when:
   (a) Pcu = Pi  (b) Pcu = 0  (c) load = 0  (d) Pi = 0
2. **(MCQ)** In a lap winding, parallel paths equal:
   (a) 2  (b) P  (c) Z  (d) P/2
3. **(MCQ)** The maximum torque of an induction motor is:
   (a) proportional to R2  (b) independent of R2  (c) inversely proportional to V  (d) zero
4. **(MCQ)** An over-excited synchronous motor has:
   (a) lagging pf  (b) leading pf  (c) unity pf  (d) zero pf
5. **(MCQ)** For a salient-pole synchronous machine:
   (a) Xd = Xq  (b) Xd > Xq  (c) Xd < Xq  (d) Xd = 0
6. **(NAT)** A transformer: Pi = 200 W, full-load Pcu = 800 W. Find the load fraction for max efficiency. ______
7. **(NAT)** A 4-pole, 50 Hz induction motor at slip 0.04. Find the rotor speed in rpm. ______ rpm
8. **(NAT)** A synchronous motor: E=1.2, V=1.0, Xs=0.6 pu, δ=30°. Find P in pu. ______ pu

<details>
<summary>🔑 Solutions</summary>

**1 → (a) Pcu = Pi.**

**2 → (b) P.**

**3 → (b) independent of R2.**

**4 → (b) leading pf.**

**5 → (b) Xd > Xq.**

**6 →** x = √(200/800) = √0.25 = **0.5.**

**7 →** Ns = 1500; Nr = 1500×0.96 = **1440 rpm.**

**8 →** P = (1.2×1.0/0.6)×sin30° = 2.0 × 0.5 = **1.0 pu.**

</details>

---

## 🔧 Power Electronics: Full Revision — Formula Sheet & Mixed Numericals

Section C complete. A **consolidated formula sweep** across devices, rectifiers, choppers, inverters (Days 5-22).

### 📖 Concept Deep Dive — Master Formula Sheet

**Devices & commutation:**
```
SCR: latching; turn-off needs IA<IH & reverse V for tc≥tq
TRIAC bidirectional; GTO gate-turn-off (gain 3-5)
MOSFET/IGBT voltage-controlled; Ig(avg)=QG·fsw
Commutating cap (Class D): Cmin = I·tq/Vc ; string efficiency = Vstring/(n·Vd)
```

**Rectifiers (controlled):**
```
1-φ half-wave R: Vo = (Vm/2π)(1+cosα)
1-φ semiconverter: Vo = (Vm/π)(1+cosα) [Vo≥0, no inversion]
1-φ full-converter: Vo = (2Vm/π)cosα [inverts for α>90°]
3-φ half-wave: Vo = (3√3Vm/2π)cosα ; ripple 3f
3-φ full-converter: Vo = (3√3Vm/π)cosα ; ripple 6f
Overlap drop (1-φ): ΔVo = 2ωLsIdc/π ; harmonics 6k±1 (3φ)
```

**Choppers (DC-DC):**
```
Buck: Vo = D·Vs ; Boost: Vo = Vs/(1−D)
Buck-boost/Cuk: Vo = −Vs·D/(1−D) (inverted)
D = Ton/T ; Classes A(I), B(II), C(I,II), D(I,IV), E(4-quadrant)
```

**Inverters:**
```
1-φ half-bridge: Vrms=Vs/2 ; fundamental 0.45Vs
1-φ full-bridge: Vrms=Vs ; fundamental 0.9Vs ; square-wave THD≈48.3%
3-φ VSI 180°: VLL(rms)=0.8165Vdc ; fundamental line 0.78Vdc ; harmonics 6k±1
SPWM: Vph1(peak)=ma·Vdc/2 (ma≤1)
```

**Performance:**
```
RF=√((Vrms/Vdc)²−1) [DC]; THD=√((Vrms/V1)²−1) [AC]
Displacement factor=cosα ; input pf=distortion×cosα
AC controller phase: Vo=Vs√((π−α+sin2α/2)/π) ; integral-cycle: Vo=Vs√(k)
Cycloconverter: fo<fi (step-down) ; matrix converter voltage ≤0.866
```

> 💎 **KEY RESULT — the PE essentials:** full-converter `Vo=(2Vm/π)cosα` (inverts α>90°); semiconverter `(Vm/π)(1+cosα)` (no invert); 3-φ VSI `VLL=0.8165Vdc`; buck `D·Vs`/boost `Vs/(1−D)`; square-wave THD 48.3%; SPWM `ma·Vdc/2`; RF (DC) vs THD (AC).

> 🧠 **MEMORY HOOK** — "**Full-conv cosα (inverts), semi (1+cosα) no-invert; buck D·Vs/boost Vs/(1−D); VSI VLL=0.8165Vdc; SPWM ma·Vdc/2; RF for DC, THD for AC.**"

> ⚠️ **TRAP ALERT** — Only the **full-converter inverts** (α>90°); semiconverter output ≥0. **Buck-boost/Cuk invert polarity** (−Vs·D/(1−D)). **3-φ line voltage has no triplens** (6k±1). **RF vs Vdc, THD vs fundamental.**

### 📐 Formula Sheet (Quick Grab)

```
Rectifiers: full-conv (2Vm/π)cosα ; semi (Vm/π)(1+cosα) ; 3φ-6pulse (3√3Vm/π)cosα
Choppers: buck D·Vs ; boost Vs/(1−D) ; buck-boost −Vs·D/(1−D)
Inverters: full-bridge fundamental 0.9Vs, THD 48.3% ; VSI VLL=0.8165Vdc
SPWM Vph1(pk)=ma·Vdc/2 ; RF=√((Vrms/Vdc)²−1) ; THD=√((Vrms/V1)²−1)
```

### 🧮 Solved Examples

**Example 1 — full-converter output.**
A 1-φ full-converter from **230 V rms**, α = 60°, continuous current. Find Vo(avg).

```
Vm = √2×230 = 325.27 V ; Vo = (2Vm/π)cosα = (2×325.27/π)×cos60°
   = 207.07 × 0.5 = 103.5 V
```
**Vo ≈ 103.5 V.**

**Example 2 — buck-boost.**
A buck-boost converter: Vs = 30 V, D = 0.6. Find |Vo|.

```
|Vo| = Vs·D/(1−D) = 30×0.6/0.4 = 30×1.5 = 45 V
```
**|Vo| = 45 V** (inverted polarity, boost region).

### ⚠️ Common Traps

1. **Full-converter inverts (α>90°); semiconverter output ≥0.**
2. **Buck D·Vs; boost Vs/(1−D); buck-boost −Vs·D/(1−D)** (inverted).
3. **3-φ VSI line voltage: no triplens (6k±1).**
4. **Square-wave THD ≈ 48.3%; SPWM Vph1(pk) = ma·Vdc/2.**
5. **RF referenced to Vdc; THD to fundamental.**
6. **Cycloconverter step-down only (fo<fi); matrix converter voltage ≤0.866.**

### 📝 Test — Power Electronics Revision (8 Q)

1. **(MCQ)** A 1-φ full-converter enters inverter mode when α is:
   (a) <90°  (b) >90°  (c) =0°  (d) =45°
2. **(MCQ)** A boost chopper output is:
   (a) D·Vs  (b) Vs/(1−D)  (c) −Vs·D/(1−D)  (d) Vs·D
3. **(MCQ)** The RMS line voltage of a 3-φ VSI (180°) is:
   (a) 0.45Vdc  (b) 0.8165Vdc  (c) Vdc  (d) 0.5Vdc
4. **(MCQ)** Square-wave inverter THD is approximately:
   (a) 5%  (b) 48.3%  (c) 100%  (d) 0%
5. **(MCQ)** Ripple factor is referenced to the:
   (a) fundamental  (b) DC value  (c) peak  (d) 3rd harmonic
6. **(NAT)** A 1-φ full-converter from 200 V rms at α=0°. Find Vo(avg) in V. ______ V
7. **(NAT)** A buck chopper: Vs=100 V, D=0.35. Find Vo in V. ______ V
8. **(NAT)** A 3-φ VSI (180°), Vdc=600 V. Find the RMS line voltage in V. ______ V

<details>
<summary>🔑 Solutions</summary>

**1 → (b) >90°.**

**2 → (b) Vs/(1−D).**

**3 → (b) 0.8165Vdc.**

**4 → (b) 48.3%.**

**5 → (b) DC value.**

**6 →** Vm=√2×200=282.84; Vo=(2Vm/π)×1 = 2×282.84/3.14159 = **180.06 V.**

**7 →** Vo = D·Vs = 0.35×100 = **35 V.**

**8 →** VLL = 0.8165×600 = **489.9 V.**

</details>

---

`✅ Day 23 complete — and the ENTIRE technical track (Measuring Instruments, Electrical Machines, Power Electronics) is now fully covered with revisions. 🎓 Next up: POWER SYSTEMS — share your reference PDFs whenever you're ready, and we'll build the same deep daily lessons (per-unit, fault analysis, protection, load flow, stability, transmission…).`

*Correctness over length — re-derive any result you're unsure of and mark "verify" before the exam.*
