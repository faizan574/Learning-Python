# ⚡ GATE Technical Revision — Day 21 (2026-08-10)

*A full-formula revision of Measuring Instruments, the synchronous motor's V-curves and hunting, and the Fourier analysis that grades every converter waveform.*

`📅 Tech Day 21  ·  ⏱ ~45 min  ·  🎯 Measurements + Machines + Power Electronics`

Attempt each section's test **before** opening its solutions — recall beats re-reading.

> 🎉 **Measuring Instruments completes today** — this is the Section A revision, closing out the full measurements syllabus (21 topics).

---

## 🔧 Measuring Instruments: Full Revision — Formula Sheet & Mixed PYQ Numericals

Section A is complete. This is a **consolidated formula sheet** across all 20 measurement topics (Days 1-20), plus mixed GATE-style numericals.

### 📖 Concept Deep Dive — Master Formula Sheet

**Errors & statistics (Days 1-3):**
```
Absolute error = |measured − true| ; Relative = abs/true ; % = ×100
Product/quotient: % errors ADD ; Sum/difference: absolute errors add
Std deviation σ = √(Σ(x−x̄)²/n) ; Probable error = 0.6745σ
```

**Meters (Days 4-8):**
```
PMMC: torque Td = NBAI ; θ = NBAI/K (linear, DC only)
Shunt (ammeter): Rsh = Im·Rm/(I − Im) ; multiplying power n = I/Im
Multiplier (voltmeter): Rs = Rm(V/Vm − 1) = (V − ImRm)/Im
Moving Iron: Td = ½ I² dL/dθ ; θ ∝ I² (RMS, AC/DC, non-linear)
Electrodynamometer: Td ∝ I1 I2 (transfer, RMS)
Form factor = RMS/avg = 1.11 (sine) ; Peak factor = peak/RMS = 1.414
Rectifier meter reads 1.11 × average (sine-calibrated)
```

**Power & energy (Days 9-11):**
```
Dynamometer wattmeter: reads P = VI cosφ
Two-wattmeter (3φ): P = W1 + W2 ; tan φ = √3(W1−W2)/(W1+W2)
Energy meter: revolutions ∝ energy ; K = rev/kWh ; energy = rev/K
```

**Bridges (Days 12-17):**
```
DC potentiometer: null balance (zero current) ⇒ true EMF
Wheatstone: R = (P/Q)·S (V-independent) ; Kelvin: low R (lead-cancel)
Maxwell L-C: L1 = R2R3C4, Q = ωC4R4 (medium Q)
Hay: high Q, freq-dependent, Q = 1/(ωC4R4)
Schering: C1 = C2R4/R3, tan δ = ωC4R4
Wien: f = 1/(2πRC) (frequency)
```

**Instrument transformers (Days 13-14):**
```
CT: Ip Np = Is Ns ; secondary NEVER open ; rated 5 A
PT: steps voltage down ; secondary NEVER short ; rated 110 V
Burden (VA) = Is²·Zb ; higher burden ⇒ larger error
```

**Digital & CRO (Days 18-20):**
```
CRO sensitivity S = L·Ls/(2 d Va) [mm/V]
Read: V = div × V/div ; T = div × time/div ; f = 1/T
Dual-slope DVM: Vin = Vref·(N2/N1) (R,C,clock independent)
SAR: n clocks for n bits ; resolution = Vref/2ⁿ ; 3½-digit → 1999
Q-meter: VC = Q·E ; Q = (1/R)√(L/C) = f0/BW
Earth resistance: fall-of-potential, P at 62%
```

> 💎 **KEY RESULT — the 10 most-tested facts:** shunt `Rsh = ImRm/(I−Im)`; MI `θ ∝ I²`; two-wattmeter `tanφ = √3(W1−W2)/(W1+W2)`; Wheatstone V-independent; Maxwell `Q=ωC4R4`; Schering `tanδ=ωC4R4`; CT never open / PT never short; dual-slope `Vin=Vref·N2/N1`; Q-meter `VC=Q·E`; earth-test 62% rule.

> 🧠 **MEMORY HOOK** — "**PMMC linear (θ∝I), MI/EMMC square-law (θ∝I²/RMS); wattmeter = VIcosφ; two-wattmeter tanφ; Wheatstone-medium/Kelvin-low/Megger-high R.**"

> ⚠️ **TRAP ALERT** — PMMC is **DC only** (θ ∝ I); MI/electrodynamometer read **RMS** (θ ∝ I²). Two-wattmeter: **add algebraically** (one may be negative). **CT open / PT short = dangerous** (opposite states).

### 📐 Formula Sheet (Quick Grab)

```
Rsh = ImRm/(I−Im) ; Rs = Rm(V/Vm − 1)
P(3φ) = W1+W2 ; tanφ = √3(W1−W2)/(W1+W2)
Wheatstone R = (P/Q)S ; Maxwell L1 = R2R3C4, Q = ωC4R4
Schering C1 = C2R4/R3, tanδ = ωC4R4 ; Wien f = 1/(2πRC)
Dual-slope Vin = Vref(N2/N1) ; SAR res = Vref/2ⁿ
Q-meter VC = Q·E ; Q = (1/R)√(L/C) = f0/BW
CRO S = L·Ls/(2 d Va)
```

### 🧮 Solved Examples

**Example 1 — ammeter shunt.**
A PMMC movement reads full scale at `Im = 1 mA` with `Rm = 100 Ω`. Find the shunt to extend the range to **1 A**.

```
Rsh = Im·Rm/(I − Im) = (1e−3 × 100)/(1 − 1e−3) = 0.1/0.999 = 0.10010 Ω
```
**Rsh ≈ 0.1001 Ω** (≈ 0.1 Ω).

**Example 2 — two-wattmeter power factor.**
Two wattmeters read `W1 = 12 kW` and `W2 = 6 kW`. Find total power and pf.

```
P = W1 + W2 = 18 kW
tanφ = √3(12−6)/(12+6) = 1.7320 × 6/18 = 1.7320 × 0.3333 = 0.5773
φ = 30° ; cosφ = 0.866
```
**P = 18 kW, pf = 0.866 lagging.**

### ⚠️ Common Traps

1. **Shunt formula: Rsh = ImRm/(I − Im)** — the `(I − Im)` in the denominator (not I).
2. **PMMC = DC only, linear; MI/EMMC = RMS, square-law** — don't apply PMMC to AC.
3. **Two-wattmeter: add algebraically** (W2 negative below 0.5 pf).
4. **CT never open, PT never short** — opposite safe states.
5. **Dual-slope reading is clock/RC-independent** (Vref·N2/N1).
6. **Form factor 1.11, peak factor 1.414** for a sine — rectifier meters assume these.

### 📝 Test — Measuring Instruments Revision (8 Q)

1. **(MCQ)** A PMMC instrument reads:
   (a) RMS  (b) average/DC  (c) peak  (d) form factor
2. **(MCQ)** The two-wattmeter total power is:
   (a) W1 − W2  (b) W1 + W2  (c) √3(W1+W2)  (d) W1·W2
3. **(MCQ)** The dissipation factor in a Schering bridge is:
   (a) ωC4R4  (b) 1/(ωC4R4)  (c) R4/R3  (d) ωL/R
4. **(MCQ)** A dual-slope DVM reading is independent of:
   (a) Vref  (b) clock frequency and RC  (c) input  (d) counter
5. **(MCQ)** The Q-meter measures Q as:
   (a) E/VC  (b) VC/E  (c) VC·E  (d) E − VC
6. **(NAT)** A 50 µA, 2 kΩ PMMC movement is used as a voltmeter of 10 V full scale. Find the multiplier resistance in kΩ. ______ kΩ
7. **(NAT)** Two wattmeters read 8 kW and −2 kW. Find the total power in kW. ______ kW
8. **(NAT)** A Maxwell bridge: R2 = 600 Ω, R3 = 500 Ω, C4 = 0.4 µF. Find L1 in H. ______ H

<details>
<summary>🔑 Solutions</summary>

**1 → (b) average/DC.**

**2 → (b) W1 + W2.**

**3 → (a) ωC4R4.**

**4 → (b) clock frequency and RC.**

**5 → (b) VC/E.**

**6 →** Rs = (V − Im·Rm)/Im = (10 − 50e−6×2000)/50e−6 = (10 − 0.1)/50e−6 = 9.9/50e−6 = 198000 Ω = **198 kΩ.**

**7 →** P = 8 + (−2) = **6 kW.**

**8 →** L1 = R2R3C4 = 600 × 500 × 0.4e−6 = 300000 × 0.4e−6 = **0.12 H.**

</details>

---

## 🔧 Electrical Machines: Synchronous Motor — Operation, V-Curves, Hunting & Synchronous Condenser

Day 20 covered the synchronous generator. The **synchronous motor** runs at **exactly synchronous speed** regardless of load, and can control power factor via excitation.

### 📖 Concept Deep Dive

**Operation.** A synchronous motor's rotor "locks" to the stator's rotating field and turns at **Ns = 120f/P** (constant speed). The **load angle δ** (torque angle) increases with load (rotor falls back in angle, not speed). Power:

```
P = (E·V/Xs)·sin δ    (per phase; δ = load/torque angle)
Constant speed Ns = 120 f/P (independent of load, up to pull-out)
```

If load exceeds the **pull-out torque** (δ = 90°), the motor **loses synchronism** (stalls).

**Not self-starting.** At standstill the rotor can't catch the fast rotating field → needs a starting method: **damper (amortisseur) winding** (starts as induction motor, then pulls into sync), or a **pony motor / VFD**.

**Effect of excitation — V-curves & inverted-V curves.** At constant load, varying the **field excitation** changes the **armature current and power factor**:
- **Under-excited:** motor draws **lagging** current (absorbs VARs).
- **Normal excitation:** **unity pf**, minimum armature current.
- **Over-excited:** motor draws **leading** current (**supplies VARs** to the system).

```
Plot Ia vs If (field current) at constant load → V-curve (minimum at unity pf)
Plot pf vs If → inverted-V curve
Over-excited synchronous motor → leading pf → power-factor correction
```

**Synchronous condenser.** An **over-excited synchronous motor running on NO load** acts as a **variable capacitor** — it supplies **reactive power (leading VARs)** to improve the **power factor** of a system (used in substations, near heavy inductive loads).

**Hunting (phase swinging).** A sudden load change makes the rotor **oscillate** about its steady load angle δ before settling (like a pendulum). If oscillations resonate, they can cause loss of synchronism. **Damped by the damper (amortisseur) winding** (induces currents that oppose relative motion, damping the swing).

```
Hunting = oscillation of rotor about equilibrium δ after a disturbance
Cured/damped by damper (amortisseur) windings
Natural frequency of oscillation fn = (1/2π)√(synchronizing power coeff / inertia)
```

> 💎 **KEY RESULT** — Synchronous motor: **constant speed Ns**, `P = (EV/Xs)sinδ`, **not self-starting** (damper winding start). **Over-excited → leading pf** (supplies VARs); a no-load over-excited machine = **synchronous condenser** (pf correction). **Hunting** is rotor oscillation, damped by **amortisseur windings**.

> 🧠 **MEMORY HOOK** — "**Sync motor: fixed speed, load changes δ not speed. Under-excited = lagging, over-excited = leading (VAR source). No-load over-excited = synchronous condenser. Hunting → damper winding.**"

> ⚠️ **TRAP ALERT** — A synchronous motor's **speed is constant** with load (only δ changes); it **stalls** past pull-out (δ = 90°). **Over-excitation → leading pf** (supplies reactive power) — the basis of the **synchronous condenser**. **Hunting** is cured by **damper windings** (which also start the motor).

### 📐 Formula Sheet

```
Speed  Ns = 120 f/P (constant, load-independent)
Power  P = (E V/Xs) sin δ ; max at δ = 90° (pull-out)
V-curve: Ia vs If at constant load (min at unity pf)
Under-excited → lagging ; Over-excited → leading (supplies VARs)
Synchronous condenser: over-excited motor at no load → pf correction
Hunting: rotor oscillation about δ ; damped by amortisseur windings
```

### 🧮 Solved Examples

**Example 1 — power & angle.**
A synchronous motor: `E = 1.2 pu`, `V = 1.0 pu`, `Xs = 0.8 pu`, delivering `P = 1.0 pu`. Find the load angle δ.

```
P = (E V/Xs) sin δ ⇒ sin δ = P·Xs/(E V) = 1.0 × 0.8/(1.2 × 1.0) = 0.8/1.2 = 0.6667
δ = arcsin(0.6667) = 41.8°
```
**δ ≈ 41.8°** (below 90°, so stable).

**Example 2 — synchronous condenser reactive power.**
An over-excited synchronous motor at no load draws negligible real power but a leading current `I = 20 A` at `V = 400 V/phase` (3-phase). Estimate the reactive power supplied.

```
Q ≈ 3 × V × I (since pf ≈ 0, purely reactive at no load) 
  = 3 × 400 × 20 = 24000 VAR = 24 kVAR (leading, supplied to system)
```
**Q ≈ 24 kVAR leading** (acts as a capacitor for pf correction).

### ⚠️ Common Traps

1. **Synchronous motor speed is constant** with load — only the load angle δ changes.
2. **Over-excited = leading pf** (supplies VARs); **under-excited = lagging**.
3. **Synchronous condenser = over-excited motor at no load** (reactive-power source).
4. **Not self-starting** — needs damper winding / pony motor.
5. **Pull-out at δ = 90°** — beyond this it loses synchronism.
6. **Hunting is damped by damper (amortisseur) windings** — the same windings that start it.

### 📝 Test — Electrical Machines (8 Q)

1. **(MCQ)** The speed of a synchronous motor with load:
   (a) decreases  (b) stays constant (Ns)  (c) increases  (d) becomes zero
2. **(MCQ)** An over-excited synchronous motor operates at:
   (a) lagging pf  (b) unity pf  (c) leading pf  (d) zero pf
3. **(MCQ)** A synchronous condenser is:
   (a) an over-excited motor at no load  (b) a capacitor bank  (c) an induction motor  (d) a rectifier
4. **(MCQ)** Hunting in a synchronous motor is damped by:
   (a) damper (amortisseur) windings  (b) field control  (c) a flywheel only  (d) resistors
5. **(MCQ)** A synchronous motor loses synchronism when the load angle exceeds:
   (a) 45°  (b) 60°  (c) 90°  (d) 180°
6. **(NAT)** A synchronous motor: E = 1.5 pu, V = 1.0 pu, Xs = 1.0 pu, δ = 30°. Find P in pu. ______ pu
7. **(NAT)** For sin δ = 0.5 with E = 1.1, V = 1.0, Xs = 0.9 pu, find P in pu. ______ pu
8. **(NAT)** A synchronous condenser supplies 15 A leading at 230 V/phase (3-φ). Find the reactive power in kVAR. ______ kVAR

<details>
<summary>🔑 Solutions</summary>

**1 → (b) stays constant (Ns).**

**2 → (c) leading pf.**

**3 → (a) an over-excited motor at no load.**

**4 → (a) damper (amortisseur) windings.**

**5 → (c) 90°.**

**6 →** P = (1.5×1.0/1.0)×sin30° = 1.5 × 0.5 = **0.75 pu.**

**7 →** P = (E V/Xs) sinδ = (1.1×1.0/0.9)×0.5 = 1.2222 × 0.5 = **0.611 pu.**

**8 →** Q = 3×V×I = 3 × 230 × 15 = 10350 VAR = **10.35 kVAR.**

</details>

---

## 🔧 Power Electronics: Fourier/Waveform Analysis — RMS, Average & Harmonic Factor

Day 20 finished cycloconverters. This ties Power Electronics together: the **Fourier analysis** that gives the **RMS, average, and harmonic content** of any converter waveform.

### 📖 Concept Deep Dive

**Fourier series of a periodic waveform:**
```
f(t) = a0 + Σ [an cos(nωt) + bn sin(nωt)]
a0 = average (DC) value = (1/T)∫f(t)dt
Amplitude of nth harmonic: cn = √(an² + bn²) ; RMS of nth = cn/√2
```

**RMS of a waveform (from harmonics):**
```
Vrms = √(V0² + V1² + V2² + ...)   (V0 = DC, Vn = RMS of nth harmonic)
Vrms = √(Vdc² + Σ Vn(rms)²)
```

**Key performance factors:**
```
Ripple factor RF = √(Vrms² − Vdc²)/Vdc = √((Vrms/Vdc)² − 1)  (for DC output)
Form factor FF = Vrms/Vavg
Total Harmonic Distortion THD = √(Σ Vn²)/V1 = √((Vrms/V1)² − 1)  (n≥2, V1 = fundamental)
Harmonic factor of nth = Vn/V1
Distortion factor = V1(rms)/Vrms
```

**Standard waveform values (memorise):**

| Waveform | Vavg | Vrms | Notes |
|---|---|---|---|
| Sine (full) | 0 | Vm/√2 | — |
| Half-wave rectified | Vm/π | Vm/2 | FF = 1.57 |
| Full-wave rectified | 2Vm/π | Vm/√2 | FF = 1.11, RF = 0.48 |
| Square wave | 0 (sym) | Vm | odd harmonics, THD 48.3% |
| Triangular | 0 | Vm/√3 | — |

**Symmetry shortcuts:**
```
Even function (f(t)=f(−t)): only cosine (an) terms
Odd function (f(t)=−f(−t)): only sine (bn) terms
Half-wave symmetry (f(t)=−f(t+T/2)): only ODD harmonics (no even)
```
Square/quasi-square converter outputs have **half-wave symmetry ⇒ only odd harmonics**.

> 💎 **KEY RESULT** — `Vrms = √(Vdc² + ΣVn²)`; **RF = √((Vrms/Vdc)²−1)** (DC output); **THD = √((Vrms/V1)²−1)** (AC output); harmonic factor of nth = **Vn/V1**. **Half-wave symmetry ⇒ only odd harmonics** (square-wave inverters).

> 🧠 **MEMORY HOOK** — "**Vrms from sum of squares of harmonics. RF for DC (vs Vdc), THD for AC (vs fundamental). Odd-only harmonics ⇐ half-wave symmetry.**"

> ⚠️ **TRAP ALERT** — **RF is referenced to the DC value** (rectifier output); **THD is referenced to the fundamental** (inverter output) — different denominators. **Half-wave symmetry removes even harmonics** (odd only), not odd.

### 📐 Formula Sheet

```
a0 = (1/T)∫f dt (average) ; cn = √(an²+bn²) ; Vn(rms) = cn/√2
Vrms = √(Vdc² + Σ Vn(rms)²)
RF = √((Vrms/Vdc)² − 1)   [DC/rectifier]
FF = Vrms/Vavg
THD = √((Vrms/V1)² − 1)   [AC/inverter, V1 = fundamental rms]
Harmonic factor (nth) = Vn/V1 ; Distortion factor = V1/Vrms
Half-wave sym ⇒ odd harmonics only ; even/odd fn ⇒ cos/sin only
```

### 🧮 Solved Examples

**Example 1 — RMS from harmonics.**
A waveform has a DC component `V0 = 10 V`, a fundamental of RMS `V1 = 8 V`, and a 3rd harmonic of RMS `V3 = 6 V`. Find the total RMS.

```
Vrms = √(V0² + V1² + V3²) = √(10² + 8² + 6²) = √(100 + 64 + 36) = √200 = 14.14 V
```
**Vrms = 14.14 V.**

**Example 2 — THD of a square wave.**
A square-wave inverter has total RMS `Vrms = Vs` and fundamental RMS `V1 = 0.9 Vs`. Find the THD.

```
THD = √((Vrms/V1)² − 1) = √((Vs/0.9Vs)² − 1) = √((1.1111)² − 1)
    = √(1.2346 − 1) = √0.2346 = 0.4843 = 48.4%
```
**THD ≈ 48.4%** (standard square-wave value).

### ⚠️ Common Traps

1. **Vrms = √(sum of squares)** of the DC and all harmonic RMS values.
2. **RF references Vdc (rectifier); THD references V1 (inverter)** — don't swap denominators.
3. **Half-wave symmetry ⇒ odd harmonics only** (square/quasi-square outputs).
4. **Even function → cosine terms; odd function → sine terms** (symmetry shortcuts).
5. **Full-wave rectifier: FF = 1.11, RF = 0.48**; half-wave FF = 1.57.
6. **Harmonic factor of nth = Vn/V1** (a per-harmonic distortion measure).

### 📝 Test — Power Electronics (8 Q)

1. **(MCQ)** The RMS of a waveform with DC and harmonics is:
   (a) sum of RMS values  (b) √(sum of squares of RMS components)  (c) average  (d) peak
2. **(MCQ)** Ripple factor is referenced to the:
   (a) fundamental  (b) DC value  (c) peak  (d) 3rd harmonic
3. **(MCQ)** THD is referenced to the:
   (a) DC value  (b) fundamental  (c) peak  (d) average
4. **(MCQ)** A waveform with half-wave symmetry contains:
   (a) only even harmonics  (b) only odd harmonics  (c) all harmonics  (d) no harmonics
5. **(MCQ)** An odd function's Fourier series contains only:
   (a) cosine terms  (b) sine terms  (c) DC  (d) even harmonics
6. **(NAT)** A signal: V0 = 6 V, V1(rms) = 8 V. Find the total RMS in V. ______ V
7. **(NAT)** A rectifier output: Vrms = 1.11 Vdc. Find the ripple factor. ______
8. **(NAT)** An inverter: Vrms = 100 V, fundamental V1 = 90 V. Find the THD (%). ______ %

<details>
<summary>🔑 Solutions</summary>

**1 → (b) √(sum of squares of RMS components).**

**2 → (b) DC value.**

**3 → (b) fundamental.**

**4 → (b) only odd harmonics.**

**5 → (b) sine terms.**

**6 →** Vrms = √(6² + 8²) = √(36+64) = √100 = **10 V.**

**7 →** RF = √(1.11² − 1) = √(1.2321 − 1) = √0.2321 = **0.482.**

**8 →** THD = √((100/90)² − 1) = √(1.2346 − 1) = √0.2346 = 0.4843 = **48.4%.**

</details>

---

`✅ Day 21 complete — Measuring Instruments REVISION (full formula sheet, Section A done!), synchronous motor (V-curves, synchronous condenser, hunting), and Fourier/waveform analysis (Vrms, RF vs THD, harmonic factor). Tomorrow: Machines revision, and PE applications (SMPS/UPS/HVDC/PFC) — nearing the end of all three sections before Power Systems.`

*Correctness over length — re-derive any result you're unsure of and mark "verify" before the exam.*
