# ⚡ GATE Technical Revision — Day 14 (2026-08-03)

*The voltage transformer you must never short, the rotating field that drags the rotor along, and the report card that grades a rectifier.*

`📅 Tech Day 14  ·  ⏱ ~45 min  ·  🎯 Measurements + Machines + Power Electronics`

Attempt each section's test **before** opening its solutions — recall beats re-reading.

---

## 🔧 Measuring Instruments: Instrument Transformers — the Potential Transformer (PT)

Day 13 covered the CT. Its partner is the **Potential (Voltage) Transformer (PT)** — it steps **voltage** down (e.g. 11 kV → 110 V) for voltmeters and relays. Where the CT runs shorted, the **PT runs (almost) open** — a normal step-down transformer with a **high-impedance** (voltmeter) secondary.

### 📖 Concept Deep Dive

**Construction & operation.** A PT has **many primary turns** across the high voltage and **fewer secondary turns** feeding a voltmeter (standard **110 V**). It behaves like a **conventional two-winding transformer on no load** (secondary draws tiny current into a high-impedance meter):

```
Nominal ratio  Kn = Np/Ns = Vp/Vs (ideal)
Rated secondary voltage = 110 V (line PTs: 110/√3 per phase)
```

**Errors (same origin as CT — the exciting current + winding drops).** Because the primary supplies the exciting current and there are **resistance/leakage drops** in both windings, the actual ratio and phase differ from ideal:

```
Ratio (voltage) error (%) = (Kn − R)/R × 100 ,  R = actual Vp/Vs
Phase-angle error: angle between reversed secondary and primary voltage phasors
```

The PT error depends on the **IZ drops** (I = secondary/burden current through winding impedances). **Lower burden ⇒ smaller current ⇒ smaller drops ⇒ smaller errors** (same trend as CT).

**CT vs PT — the master comparison (very common exam question):**

| Feature | CT (Current) | PT (Potential/Voltage) |
|---|---|---|
| Connected | **series** with line | **parallel** (across line) |
| Steps down | current | voltage |
| Secondary state | **short-circuited / low burden** | **open / high impedance** (voltmeter) |
| Primary current set by | the **line** | the **secondary/burden** (like normal xfmr) |
| Dangerous fault | **open** secondary → high V, saturation | **short** secondary → large current, burnout |
| Rated secondary | **5 A** (or 1 A) | **110 V** |
| Core flux | **low** normally (opposing MMFs) | **normal/high** (like a transformer) |
| One terminal | secondary earthed (safety) | secondary earthed (safety) |

**Key contrast — flux & saturation.** A CT's core flux is **small** in normal operation (secondary MMF cancels most primary MMF) and only saturates if opened. A PT's core carries **normal working flux** always (like any transformer), so it does **not** have the CT's open-circuit hazard — but **shorting** a PT secondary draws a heavy current and can **burn it out** (fused for protection).

**Reduction of errors:** low-loss core, minimise winding resistance & leakage reactance, keep burden low, and **turns compensation**.

> 💎 **KEY RESULT** — A **PT is a normal step-down transformer with a high-impedance (voltmeter) secondary** — steps **voltage** down, connected **across** the line, secondary is **open/high-Z** (never short it). Errors (ratio + phase) come from **exciting current and IZ drops**; **lower burden ⇒ lower error**.

> 🧠 **MEMORY HOOK** — "**PT = Parallel, voltage, secondary open (110 V). CT = series, current, secondary shorted (5 A).** Never short a PT; never open a CT."

> ⚠️ **TRAP ALERT** — Opposite safe states: **CT secondary must stay shorted; PT secondary must stay (nearly) open.** A PT's core carries **normal flux** (no open-circuit hazard like the CT); its danger is a **short** (overcurrent).

### 📐 Formula Sheet

```
Nominal ratio    Kn = Np/Ns = Vp/Vs (ideal)
Actual ratio     R = Vp/Vs (real)
Ratio error (%)  = (Kn − R)/R × 100 ;  RCF = R/Kn
Rated secondary  = 110 V (or 110/√3 per phase)
Errors ∝ exciting current + IZ (winding) drops ;  lower burden ⇒ lower error
Safe state: PT secondary OPEN/high-Z ; CT secondary SHORTED
```

### 🧮 Solved Examples

**Example 1 — nominal ratio & secondary voltage.**
An **11 kV / 110 V** PT is used on a line at **10 kV**. Find the nominal ratio and the secondary voltage (assume ideal).

```
Nominal ratio Kn = 11000/110 = 100
Secondary voltage at 10 kV:  Vs = Vp/Kn = 10000/100 = 100 V
```
**Kn = 100; Vs = 100 V.**

**Example 2 — ratio error.**
A PT of nominal ratio **Kn = 100** has an actual ratio **R = 100.5** at a given burden. Find the ratio error and the RCF.

```
Ratio error (%) = (Kn − R)/R × 100 = (100 − 100.5)/100.5 × 100 = −0.498%
RCF = R/Kn = 100.5/100 = 1.005
```
**Ratio error ≈ −0.50 %; RCF = 1.005** (multiply the meter reading by RCF to correct).

### ⚠️ Common Traps

1. **PT secondary stays (nearly) open / high-impedance; never short it** — opposite of the CT.
2. **PT rated secondary = 110 V** (5 A is the CT). Don't swap.
3. **PT has normal core flux** (like any transformer) — **no open-circuit over-voltage hazard**; its danger is a short (overcurrent/burnout).
4. **Lower burden ⇒ lower error** (less current, less IZ drop) — same trend as CT.
5. **Ratio error is often negative** (R slightly > Kn); RCF > 1 corrects the reading upward.
6. **PT connected across (parallel to) the line; CT in series** — a frequent one-mark trap.

### 📝 Test — Measuring Instruments (8 Q)

1. **(MCQ)** A potential transformer is connected ______ the line.
   (a) in series with  (b) across (parallel to)  (c) in the neutral of  (d) after
2. **(MCQ)** The secondary of a PT in service is:
   (a) short-circuited  (b) open / high impedance (voltmeter)  (c) grounded to line  (d) at rated current
3. **(MCQ)** The standard rated secondary voltage of a PT is:
   (a) 5 V  (b) 110 V  (c) 230 V  (d) 415 V
4. **(MCQ)** The dangerous fault condition for a PT is:
   (a) open secondary  (b) short-circuited secondary  (c) no load  (d) high voltage
5. **(MCQ)** Increasing PT burden generally:
   (a) reduces errors  (b) increases errors  (c) has no effect  (d) opens the core
6. **(NAT)** A 33 kV/110 V PT is on a 30 kV line. Find the secondary voltage in volts (ideal). ______ V
7. **(NAT)** A PT of Kn = 200 has an actual ratio R = 201. Find the RCF to 4 decimals. ______
8. **(NAT)** A 6.6 kV/110 V PT — find its nominal ratio Kn. ______

<details>
<summary>🔑 Solutions</summary>

**1 → (b) across (parallel).**

**2 → (b).** Open / high-impedance (voltmeter) secondary.

**3 → (b) 110 V.**

**4 → (b).** A short-circuited secondary draws heavy current (burnout).

**5 → (b).** Higher burden ⇒ more current ⇒ larger IZ drops ⇒ larger errors.

**6 →** Kn = 33000/110 = 300; Vs = 30000/300 = **100 V.**

**7 →** RCF = R/Kn = 201/200 = **1.0050.**

**8 →** Kn = 6600/110 = **60.**

</details>

---

## 🔧 Electrical Machines: Three-Phase Induction Motor I — Rotating Field, Slip & Torque

We finished DC machines. The **3-φ induction motor** is the industrial workhorse: a **rotating magnetic field** in the stator drags the rotor by induction — no brushes, rugged, self-starting.

### 📖 Concept Deep Dive

**Rotating magnetic field.** Three-phase currents (120° apart) in three space-displaced stator windings produce a **resultant flux of constant magnitude** rotating at **synchronous speed**:

```
Synchronous speed  Ns = 120 f / P   [rpm]   (f = supply freq, P = poles)
Synchronous speed  ωs = 2π Ns/60 = 4πf/P  [rad/s]
```

The rotating field cuts the rotor conductors, inducing EMF and current; the rotor current interacts with the field to produce **torque** that drags the rotor **in the direction of the field**.

**Slip.** The rotor can never reach `Ns` (at `Ns` there's no relative motion, no induced EMF, no torque). The lag is the **slip**:

```
Slip  s = (Ns − Nr)/Ns       (Nr = rotor speed)
Rotor speed  Nr = Ns(1 − s)
At standstill s = 1 ; at synchronous s = 0 ; full-load s ≈ 0.02–0.05 (2–5%)
```

**Rotor frequency & quantities.** The rotor sees a field rotating at slip speed, so:

```
Rotor frequency   fr = s·f
Rotor EMF/phase   Er (running) = s·E2   (E2 = standstill rotor EMF/phase)
Rotor reactance   X2r = s·X2   (X2 = standstill rotor reactance)
Rotor resistance  R2 (unchanged with slip)
```

**Torque equation.** Rotor current `I2r = sE2/√(R2² + (sX2)²)`; torque:

```
Torque  T ∝ (s E2² R2)/(R2² + (s X2)²)        [per-phase, ∝ Φ·I2·cosθ2]
Starting torque (s=1):  Tst ∝ (E2² R2)/(R2² + X2²)
```

**Maximum torque condition.** `dT/ds = 0` gives:

```
Slip at max torque  sm = R2/X2
Maximum torque      Tmax ∝ E2²/(2 X2)   (independent of R2!)
```

So **Tmax does not depend on rotor resistance**, but the **slip at which it occurs does** (`sm = R2/X2`). Adding rotor resistance (wound rotor) shifts max torque to higher slip → **higher starting torque** (used in slip-ring motors).

**Power flow:**

```
Air-gap power (rotor input)  Pag = Tωs
Rotor copper loss  Pcu = s·Pag
Mechanical power developed  Pm = (1 − s)·Pag
So  Pag : Pcu : Pm = 1 : s : (1 − s)
```

> 💎 **KEY RESULT** — `Ns = 120f/P`, `s = (Ns−Nr)/Ns`; rotor `fr = sf`, `Er = sE2`, `X = sX2`. **Max torque at `sm = R2/X2`**, and **Tmax is independent of R2**. Power split: **Pag : Pcu(rotor) : Pm = 1 : s : (1−s)**.

> 🧠 **MEMORY HOOK** — "**Field spins at Ns = 120f/P; rotor slips by s; rotor sees sf, sE2, sX2.** Max torque at sm = R2/X2 (Tmax ignores R2). Power = 1 : s : (1−s)."

> ⚠️ **TRAP ALERT** — **Tmax is independent of rotor resistance** — extra R2 only changes the **slip** at which Tmax occurs (raising starting torque), not its value. And **rotor copper loss = s × air-gap power** — a favourite NAT relation.

### 📐 Formula Sheet

```
Synchronous speed  Ns = 120 f/P (rpm) ; ωs = 4πf/P (rad/s)
Slip  s = (Ns − Nr)/Ns ;  Nr = Ns(1 − s)
Rotor freq  fr = s f ;  Er = s E2 ;  Xr = s X2
Torque  T ∝ s E2² R2 /(R2² + (s X2)²)
Slip at max torque  sm = R2/X2
Max torque  Tmax ∝ E2²/(2 X2)  (independent of R2)
Power: Pag : Pcu,rotor : Pm = 1 : s : (1 − s) ;  Pcu = s Pag ;  Pm = (1−s)Pag
Efficiency (rotor) ≈ (1 − s)  (ideal rotor)
```

### 🧮 Solved Examples

**Example 1 — slip, rotor frequency.**
A **4-pole, 50 Hz** 3-φ induction motor runs at **1440 rpm**. Find the synchronous speed, slip, and rotor frequency.

```
Ns = 120 f/P = 120 × 50/4 = 1500 rpm
s = (Ns − Nr)/Ns = (1500 − 1440)/1500 = 60/1500 = 0.04 = 4%
Rotor frequency fr = s·f = 0.04 × 50 = 2 Hz
```
**Ns = 1500 rpm; s = 4 %; fr = 2 Hz.**

**Example 2 — power split.**
A 3-φ induction motor has an **air-gap power of 30 kW** and runs at **slip s = 0.03**. Find the rotor copper loss and the mechanical power developed.

```
Rotor copper loss  Pcu = s·Pag = 0.03 × 30 = 0.9 kW
Mechanical power   Pm = (1 − s)·Pag = 0.97 × 30 = 29.1 kW
```
**Pcu = 0.9 kW; Pm = 29.1 kW.**

### ⚠️ Common Traps

1. **Slip s = (Ns − Nr)/Ns** — dimensionless; at start s = 1, at synchronous s = 0.
2. **Rotor frequency fr = s·f** (not f) — the rotor "sees" a slow-slip field.
3. **Max torque slip sm = R2/X2**; **Tmax ∝ E2²/(2X2), independent of R2**.
4. **Rotor Cu loss = s × air-gap power** — so low slip ⇒ efficient. Never `= s × input`.
5. **Rotor EMF & reactance scale with s** (Er = sE2, Xr = sX2); **R2 stays constant**.
6. **An induction motor never runs at Ns** (would give zero torque) — always some slip.

### 📝 Test — Electrical Machines (8 Q)

1. **(MCQ)** The synchronous speed of a 6-pole, 50 Hz induction motor is:
   (a) 1500 rpm  (b) 1000 rpm  (c) 3000 rpm  (d) 750 rpm
2. **(MCQ)** The slip of an induction motor at standstill is:
   (a) 0  (b) 0.5  (c) 1  (d) infinite
3. **(MCQ)** The rotor frequency of an induction motor is:
   (a) f  (b) s·f  (c) f/s  (d) (1−s)f
4. **(MCQ)** The slip at which maximum torque occurs is:
   (a) R2/X2  (b) X2/R2  (c) R2·X2  (d) 1
5. **(MCQ)** The maximum torque of an induction motor is:
   (a) proportional to R2  (b) independent of R2  (c) inversely proportional to E2  (d) zero
6. **(NAT)** A 4-pole, 50 Hz motor runs at 1455 rpm. Find the slip in %. ______ %
7. **(NAT)** An induction motor has air-gap power 20 kW at slip 0.05. Find the rotor copper loss in kW. ______ kW
8. **(NAT)** An 8-pole, 50 Hz induction motor — find the synchronous speed in rpm. ______ rpm

<details>
<summary>🔑 Solutions</summary>

**1 → (b) 1000 rpm.** Ns = 120×50/6 = 1000.

**2 → (c) 1.** At standstill Nr = 0 ⇒ s = 1.

**3 → (b) s·f.**

**4 → (a) R2/X2.**

**5 → (b) independent of R2.**

**6 →** Ns = 1500; s = (1500−1455)/1500 = 45/1500 = 0.03 = **3%.**

**7 →** Pcu = s·Pag = 0.05 × 20 = **1.0 kW.**

**8 →** Ns = 120×50/8 = **750 rpm.**

</details>

---

## 🔧 Power Electronics: Rectifier Performance — Ripple, TUF, Input pf & Overlap

Day 13 gave three-phase rectifier outputs. Now the **performance metrics** that grade a rectifier, plus the effect of **source inductance (overlap)**.

### 📖 Concept Deep Dive

**Ripple factor (RF)** — measures AC content in the DC output:

```
Ripple factor  RF = (AC rms component)/(DC value) = √((Vrms/Vdc)² − 1)
Form factor    FF = Vrms/Vdc ;  RF = √(FF² − 1)
```

Lower RF = smoother DC. More pulses ⇒ lower RF (1-φ half-wave RF ≈ 1.21; full-wave ≈ 0.48; 6-pulse much lower).

**Rectification efficiency** `η = Pdc/Pac(load)` (ratio of DC output power to total load power).

**Transformer Utilisation Factor (TUF)** — how well the transformer is used:

```
TUF = Pdc / (VA rating of transformer secondary)
    = Pdc / (Vrms,sec × Irms,sec)
```

Higher TUF = better use of the transformer. (1-φ half-wave TUF ≈ 0.287; full-wave centre-tap ≈ 0.573; bridge ≈ 0.812.)

**Input power factor.** For a controlled converter with firing angle α (continuous current, neglecting harmonics/overlap):

```
Displacement factor (DPF) = cos α   (fundamental)
Distortion factor  = I1/Irms  (fundamental to total rms current ratio)
Input power factor  = (distortion factor) × (displacement factor)
For 1-φ full-converter (constant Idc): pf ≈ (2√2/π) cos α = 0.9 cos α
```

**Harmonics.** A rectifier draws **non-sinusoidal** line current rich in harmonics. For a **p-pulse** converter, the characteristic harmonics are of order `n = pk ± 1` (e.g., 6-pulse: 5th, 7th, 11th, 13th…). **THD** quantifies distortion.

**Effect of source inductance — the overlap (commutation) angle μ.** Real supplies have inductance `Ls`; current cannot switch **instantly** between devices — two devices **conduct simultaneously** during a brief **overlap (commutation) angle μ**. This causes a **notch/drop** in output voltage:

```
Voltage drop due to overlap (1-φ full-converter):
   ΔVo = (2 ω Ls Idc)/π          [reduction in average output]
Output with source inductance:
   Vo = (2Vm/π) cos α − (2 ω Ls Idc)/π
Overlap relation: cos α − cos(α + μ) = 2 ω Ls Idc / Vm   (approx, 1-φ)
```

So source inductance **reduces the average DC output** (proportional to load current) and **increases μ** with load. For a **p-pulse** converter, the drop is `p·ωLs·Idc/(2π)` (form varies — verify per topology).

> 💎 **KEY RESULT** — **RF = √(FF²−1)**; **TUF = Pdc/(secondary VA)**; input **pf = distortion × cos α** (1-φ full-converter ≈ 0.9 cos α). **Source inductance** causes an **overlap angle μ** (two devices conduct) → average output **drops by ≈ 2ωLs·Idc/π** (1-φ), rising with load.

> 🧠 **MEMORY HOOK** — "**RF from form factor; TUF grades the transformer; pf = distortion × cos α.** Source L → overlap μ → output sags by ωLs·Idc terms."

> ⚠️ **TRAP ALERT** — **Overlap reduces the DC output** (voltage notches) and is **proportional to load current** — it's not a constant offset. Input pf has **two** parts: **displacement (cos α)** AND **distortion** (harmonics) — don't quote cos α alone as the pf.

### 📐 Formula Sheet

```
Ripple factor  RF = √((Vrms/Vdc)² − 1) = √(FF² − 1)
Form factor    FF = Vrms/Vdc
Rectification efficiency  η = Pdc/Pac
TUF = Pdc/(Vrms,sec × Irms,sec)
Input pf = (distortion factor) × (displacement cos α)
1-φ full-converter pf ≈ (2√2/π) cos α = 0.9 cos α
p-pulse harmonics: n = pk ± 1  (6-pulse: 5,7,11,13,…)
Overlap (1-φ): Vo = (2Vm/π)cosα − (2ωLs Idc/π)
   cos α − cos(α+μ) = 2ωLs Idc/Vm
```

### 🧮 Solved Examples

**Example 1 — ripple factor from form factor.**
A rectifier has **Vrms = 1.11 × Vdc** at its output (a 1-φ full-wave sine-average case). Find the ripple factor.

```
Form factor FF = Vrms/Vdc = 1.11
RF = √(FF² − 1) = √(1.11² − 1) = √(1.2321 − 1) = √0.2321 = 0.4817
```
**RF ≈ 0.482 (48.2 %)** — the classic 1-φ full-wave ripple factor.

**Example 2 — overlap voltage drop.**
A 1-φ full-converter from **230 V rms**, α = 0°, supplies **Idc = 20 A** with source inductance **Ls = 2 mH**, 50 Hz. Find the average output voltage including the overlap drop.

```
Vm = √2 × 230 = 325.27 V ;  ω = 2π×50 = 314.16 rad/s
Ideal Vo = (2Vm/π)cos0 = 2×325.27/π = 207.07 V
Overlap drop ΔVo = 2ωLs Idc/π = 2 × 314.16 × 0.002 × 20 / π
   = (2 × 314.16 × 0.002 × 20)/3.14159 = 25.133/3.14159 = 8.0 V
Vo = 207.07 − 8.0 = 199.07 V
```
**Vo ≈ 199.1 V** (the ~8 V sag is the source-inductance/overlap effect).

### ⚠️ Common Traps

1. **RF = √(FF² − 1)** — needs the **form factor** (Vrms/Vdc), not the raw voltages alone.
2. **Input pf = distortion × displacement** — displacement is cos α, but harmonics (distortion factor < 1) also cut the pf.
3. **TUF uses the transformer secondary VA** (Vrms×Irms), not the DC power alone.
4. **Overlap drop ∝ load current Idc** — increases with load; it's not constant.
5. **p-pulse harmonics are n = pk ± 1** — a 6-pulse converter's lowest harmonics are the **5th and 7th** (no 3rd).
6. **Source inductance lowers Vdc** and **delays commutation** (angle μ) — improves nothing about the output; it's a loss.

### 📝 Test — Power Electronics (8 Q)

1. **(MCQ)** The ripple factor is given by:
   (a) √(FF² − 1)  (b) FF − 1  (c) Vrms/Vdc  (d) Vdc/Vrms
2. **(MCQ)** The Transformer Utilisation Factor is defined as:
   (a) Pdc/(secondary VA)  (b) Vrms/Vdc  (c) Pac/Pdc  (d) cos α
3. **(MCQ)** The effect of source inductance in a converter is to:
   (a) increase the DC output  (b) cause overlap and reduce the DC output  (c) remove harmonics  (d) raise the pf to unity
4. **(MCQ)** The characteristic harmonics of a 6-pulse converter are of order:
   (a) 2, 4, 6…  (b) 3, 9, 15…  (c) 5, 7, 11, 13…  (d) all integers
5. **(MCQ)** The input power factor of a converter is:
   (a) cos α only  (b) distortion factor × cos α  (c) 1 always  (d) sin α
6. **(NAT)** A rectifier output has form factor 1.5. Find the ripple factor (to 3 decimals). ______
7. **(NAT)** A 1-φ full-converter (α=0) from 200 V rms supplies Idc = 25 A with Ls = 1 mH, 50 Hz. Find the overlap voltage drop in volts. ______ V
8. **(NAT)** A rectifier delivers Pdc = 100 W; the transformer secondary VA rating is 175 VA. Find the TUF. ______

<details>
<summary>🔑 Solutions</summary>

**1 → (a) √(FF² − 1).**

**2 → (a) Pdc/(secondary VA).**

**3 → (b).** Overlap (two devices conduct) reduces average DC output.

**4 → (c) 5, 7, 11, 13… (n = 6k ± 1).**

**5 → (b) distortion factor × cos α.**

**6 →** RF = √(1.5² − 1) = √(2.25 − 1) = √1.25 = **1.118.**

**7 →**
```
ΔVo = 2ωLs Idc/π = 2 × 314.16 × 0.001 × 25 / π = 15.708/3.14159 = 5.0 V
```
**ΔVo ≈ 5.0 V.**

**8 →** TUF = Pdc/VA = 100/175 = **0.571.**

</details>

---

`✅ Day 14 complete — Potential transformers (never short; CT vs PT), 3-φ induction motor I (rotating field, slip, torque, max-torque slip R2/X2), and rectifier performance (ripple factor, TUF, input pf, overlap angle). Tomorrow: DC bridges (Wheatstone/Kelvin), induction motor II (equivalent circuit & torque-slip), and AC voltage controllers.`

*Correctness over length — re-derive any result you're unsure of and mark "verify" before the exam.*
