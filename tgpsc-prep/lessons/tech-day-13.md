# ⚡ GATE Technical Revision — Day 13 (2026-08-02)

*The current transformer you must never open-circuit, the tests that find efficiency without loading the machine, and the smoother DC of three-phase rectifiers.*

`📅 Tech Day 13  ·  ⏱ ~45 min  ·  🎯 Measurements + Machines + Power Electronics`

Attempt each section's test **before** opening its solutions — recall beats re-reading.

---

## 🔧 Measuring Instruments: Instrument Transformers — the Current Transformer (CT)

Day 12 covered the potentiometer. Now **instrument transformers** — they scale down large currents/voltages so ordinary meters and relays can read them safely. The **Current Transformer (CT)** steps **current** down; its secondary is (ideally) **short-circuited**.

### 📖 Concept Deep Dive

**Purpose.** A CT has a **few primary turns** (often the line conductor itself) carrying the large line current `Ip`, and a **many-turn secondary** feeding an ammeter/relay (standard **5 A** or 1 A). It provides **isolation** and a scaled replica of the line current.

```
Ideal turns relation:  Ip·Np = Is·Ns   ⇒   Ip/Is = Ns/Np = nominal ratio Kn
```

**Why the secondary must never be open.** In a CT the **primary current is fixed by the line** (not by the secondary). Normally the secondary MMF (`Is·Ns`) **opposes** the primary MMF, so the net core flux stays small. If the secondary is **open**, `Is = 0`, so **the entire primary MMF magnetises the core** → **huge flux → deep saturation → dangerous high-voltage spikes** across the open secondary (can be kV) and severe core heating. **⇒ Always short the CT secondary before disconnecting a meter.**

**Errors (from the exciting/magnetising current).** The real transformation ratio differs from the turns ratio because the primary must also supply the **exciting current** `I0` (with magnetising `Im` and loss `Ie` components). Referring the phasor diagram (secondary current `Is` lags the reversed primary by the burden angle δ, exciting current at angle α):

```
Actual (transformation) ratio  R = Ip/Is
Nominal ratio                  Kn = Ns/Np
Ratio error (%) = (Kn − R)/R × 100          [often negative: R > Kn]
Ratio Correction Factor RCF = R/Kn
```

Approximate error expressions (with δ = burden pf angle of the secondary circuit, θ the secondary current phase):

```
Actual ratio  R ≈ Kn + (Im·sinδ + Ie·cosδ)/Is        [magnitude/ratio error]
Phase angle error θ ≈ (Im·cosδ − Ie·sinδ)/(Kn·Is)  radians   [phase error]
```

where `Im` = magnetising and `Ie` = core-loss component of the exciting current. **Ratio error** matters for **metering**; **phase-angle error** matters for **power/energy metering and protection**.

**Burden.** The **burden** is the secondary load, expressed in **VA** at rated secondary current (e.g. 15 VA at 5 A). Higher burden ⇒ larger secondary voltage needed ⇒ more exciting current ⇒ **larger errors**.

```
Burden (VA) = Is² · Zburden       (Is = rated secondary current)
```

**Reduction of errors:** low-loss, high-permeability core (nickel-iron), minimise turns/leakage, **turns compensation** (make Ns slightly less than nominal), keep burden low.

**Testing:** **mutual-inductance / null methods** and comparison against a **standard CT** (e.g. Silsbee's method).

> 💎 **KEY RESULT** — A **CT secondary must never be open** (primary MMF fully magnetises the core → dangerous over-voltage & saturation). Errors arise from the **exciting current**: **ratio error** (metering) and **phase-angle error** (power/protection). **Higher burden ⇒ larger errors.**

> 🧠 **MEMORY HOOK** — "**CT: current in, secondary shorted. Open it and it bites (kV spike).** Exciting current causes ratio + phase errors; low burden = low error."

> ⚠️ **TRAP ALERT** — Contrast with the **PT (potential transformer)**: a **PT is like a normal transformer with an (almost) open/high-impedance secondary** (voltmeter) — **never short a PT**; a **CT** runs with a **shorted** secondary — **never open a CT**. Exactly opposite safe states.

### 📐 Formula Sheet

```
Nominal ratio     Kn = Ns/Np ;  ideal Ip/Is = Ns/Np
Actual ratio      R = Ip/Is
Ratio error (%)   = (Kn − R)/R × 100 ;  RCF = R/Kn
R ≈ Kn + (Im sinδ + Ie cosδ)/Is
Phase error θ ≈ (Im cosδ − Ie sinδ)/(Kn·Is)  rad
Burden (VA)       = Is² · Zb   (at rated Is)
Rule: short the CT secondary before removing the meter
```

### 🧮 Solved Examples

**Example 1 — nominal ratio & secondary current.**
A CT is rated **1000/5 A** with a single-turn primary. Find the number of secondary turns and the secondary current when the line carries **600 A**.

```
Nominal ratio Kn = 1000/5 = 200
Single-turn primary (Np = 1) ⇒ Ns = Kn × Np = 200 turns
Secondary current at 600 A line:  Is = Ip/Kn = 600/200 = 3.0 A
```
**Ns = 200 turns; Is = 3.0 A.**

**Example 2 — ratio error.**
A 100/5 A CT (Kn = 20) has an actual transformation ratio **R = 20.3** at a given burden. Find the ratio error and the RCF.

```
Ratio error (%) = (Kn − R)/R × 100 = (20 − 20.3)/20.3 × 100 = (−0.3)/20.3 × 100 = −1.48%
RCF = R/Kn = 20.3/20 = 1.015
```
**Ratio error ≈ −1.48 %; RCF = 1.015.** (The meter, calibrated to Kn = 20, reads slightly low; multiply reading by RCF to correct.)

### ⚠️ Common Traps

1. **Never open-circuit a CT secondary** — over-voltage and saturation. Short it first.
2. **CT secondary is (near) short-circuited; PT secondary is (near) open** — opposite safe states.
3. **Ratio error affects metering; phase-angle error affects power/energy & protection** — know which matters where.
4. **Higher burden (VA) ⇒ larger errors** (more exciting current needed).
5. **Actual ratio R usually > Kn** ⇒ ratio error is often **negative** ((Kn−R) negative); the RCF > 1 corrects the reading upward.
6. **Rated secondary current is 5 A (or 1 A)** — the CT scales the line current down to this standard.

### 📝 Test — Measuring Instruments (8 Q)

1. **(MCQ)** The secondary of a current transformer in service should be:
   (a) open  (b) short-circuited/low-burden  (c) at high impedance  (d) grounded to line
2. **(MCQ)** If a CT secondary is accidentally opened while the primary is energised:
   (a) nothing happens  (b) the core saturates and a high voltage appears  (c) the primary trips  (d) secondary current rises
3. **(MCQ)** CT errors arise mainly due to the:
   (a) burden resistance only  (b) exciting (magnetising + loss) current  (c) primary voltage  (d) frequency
4. **(MCQ)** The phase-angle error of a CT is most critical for:
   (a) ammeters  (b) power/energy metering and protection  (c) resistance measurement  (d) frequency meters
5. **(MCQ)** Increasing the CT burden generally:
   (a) reduces errors  (b) increases errors  (c) has no effect  (d) opens the core
6. **(NAT)** A 800/5 A CT has a single-turn primary. Find the number of secondary turns. ______ turns
7. **(NAT)** A 200/5 A CT (Kn = 40) has an actual ratio R = 40.6. Find the ratio correction factor (RCF) to 4 decimals. ______
8. **(NAT)** A CT secondary rated 5 A drives a burden of impedance 0.6 Ω. Find the burden in VA. ______ VA

<details>
<summary>🔑 Solutions</summary>

**1 → (b).** CT runs with a shorted / low-burden secondary.

**2 → (b).** All primary MMF magnetises the core ⇒ saturation + dangerous high voltage.

**3 → (b).** The exciting current causes ratio and phase errors.

**4 → (b).** Phase-angle error affects power/energy metering and protective relaying.

**5 → (b).** Higher burden ⇒ more exciting current ⇒ larger errors.

**6 →** Kn = 800/5 = 160; single-turn primary ⇒ Ns = **160 turns.**

**7 →** RCF = R/Kn = 40.6/40 = **1.0150.**

**8 →** Burden = Is²·Zb = 5² × 0.6 = 25 × 0.6 = **15 VA.**

</details>

---

## 🔧 Electrical Machines: DC Machine Losses, Efficiency & Testing (Swinburne & Hopkinson)

Day 12 covered DC motor operation. Now **where the power goes** (losses), **efficiency**, and two classic **tests** that find efficiency **without fully loading** the machine.

### 📖 Concept Deep Dive

**Losses in a DC machine:**

| Loss | Type | Depends on |
|---|---|---|
| **Copper (armature)** `Ia²Ra` | variable | load current² |
| **Copper (field)** `Ish²Rsh` or series | ~constant (shunt) | field current |
| **Iron/core** (hysteresis + eddy) | constant | flux, speed |
| **Mechanical** (friction + windage) | constant | speed |
| **Stray load** | small variable | — |

**Constant (rotational) losses** = iron + mechanical (+ shunt field) ≈ independent of load. **Variable losses** = armature copper `Ia²Ra`.

**Efficiency:**

```
Motor:      η = output/input = (V·IL − losses)/(V·IL)
Generator:  η = output/input = (V·IL)/(V·IL + losses)
Condition for max efficiency:  variable loss = constant loss
   i.e.  Ia²Ra = Pconstant   ⇒  η is maximum
```

**Swinburne's Test (no-load test).** Run the machine as a **motor at no load** (rated V, rated speed). Measure no-load input; since output ≈ 0, the no-load input supplies the **constant losses**:

```
No-load input  = V·IL0
Armature Cu at no load = Ia0²·Ra   (small)
Constant losses  Wc = V·IL0 − Ia0²·Ra − (shunt field loss if separately counted)
```

Then efficiency at **any** load is computed by adding the variable loss `Ia²Ra` to `Wc`.

- **Advantages:** simple, needs little power (no loading), gives efficiency at any load.
- **Limitations:** **cannot detect** whether the machine can carry full load (no temperature-rise/commutation check under load); **stray-load losses ignored**; not valid for **series** motors (can't run at no load — they race).

**Hopkinson's Test (back-to-back / regenerative test).** Two **identical** DC machines are **mechanically coupled**; one runs as **motor**, the other as **generator**, and the generator **feeds power back** to the motor. The supply provides **only the losses** of both machines → full-load testing with **small input power**.

```
Let  V = supply voltage, I1 = current from supply, I2 = generator output current
Total losses (both machines) = V·I1   (supply only makes up losses)
With field currents & armature resistances known, losses can be split
between the two machines to find each efficiency at (near) full load.
```

- **Advantages:** machines tested at **full load** (real temperature rise, commutation) with only **loss power** drawn from supply; economical for large machines.
- **Requires:** two **identical** machines.

> 💎 **KEY RESULT** — **Constant losses = iron + mechanical (+ field)**; **variable = Ia²Ra**; **max efficiency when Ia²Ra = constant loss**. **Swinburne** = no-load test (finds constant losses, cheap, but no full-load check). **Hopkinson** = back-to-back full-load test drawing only the losses.

> 🧠 **MEMORY HOOK** — "**Swinburne spins one machine free (no load, finds constant loss); Hopkinson pairs two back-to-back (full load, supply feeds only losses).** Max η when copper = constant loss."

> ⚠️ **TRAP ALERT** — **Swinburne's test cannot be used for series motors** (no-load racing) and does **not** verify full-load performance (temperature/commutation). **Hopkinson needs two identical machines.**

### 📐 Formula Sheet

```
Constant losses  Wc = iron + mechanical (+ shunt field)
Variable loss    = Ia² Ra
Motor η      = (V IL − losses)/(V IL)
Generator η  = (V IL)/(V IL + losses)
Max efficiency:  Ia² Ra = Wc  (variable = constant loss)
Swinburne: Wc = V·IL0 − Ia0² Ra (no-load input minus small Cu loss)
Hopkinson: total losses (both machines) = V · I1 (supply current)
```

### 🧮 Solved Examples

**Example 1 — Swinburne efficiency.**
A 220 V DC shunt motor takes **IL0 = 4 A** on **no load**; `Ra = 0.5 Ω`, `Rsh = 110 Ω`. Find the **constant losses**, then the **efficiency at a load current of IL = 40 A**.

```
Field current  Ish = 220/110 = 2 A ;  no-load armature Ia0 = IL0 − Ish = 4 − 2 = 2 A
No-load input  = V·IL0 = 220 × 4 = 880 W
No-load armature Cu = Ia0²·Ra = 2² × 0.5 = 2 W
Constant losses (incl. field here excluded from Wc):
   Wc (iron+mech) = 880 − field loss − Ia0²Ra
   field loss = V·Ish = 220 × 2 = 440 W
   Wc = 880 − 440 − 2 = 438 W

At load IL = 40 A:  Ia = IL − Ish = 40 − 2 = 38 A
Armature Cu = Ia²Ra = 38² × 0.5 = 1444 × 0.5 = 722 W
Total losses = Wc + field loss + Ia²Ra = 438 + 440 + 722 = 1600 W
Input = V·IL = 220 × 40 = 8800 W
η = (8800 − 1600)/8800 = 7200/8800 = 0.8182 = 81.8%
```
**Constant (iron+mech) loss = 438 W; efficiency ≈ 81.8 %.**

**Example 2 — max-efficiency condition.**
For the machine above (constant loss incl. field = 438 + 440 = 878 W treated as the load-independent part), find the armature current at which efficiency is maximum.

```
Max efficiency when variable loss = constant loss:
   Ia²Ra = 878  ⇒  Ia² = 878/0.5 = 1756  ⇒  Ia = √1756 = 41.9 A
```
**Ia ≈ 41.9 A** for maximum efficiency (line current ≈ 43.9 A). *(Method note: whether the field loss is grouped with constant losses affects the exact number — state your grouping.)*

### ⚠️ Common Traps

1. **Constant losses = iron + mechanical (+ field)**; **variable = Ia²Ra**. Group field loss consistently.
2. **Max efficiency: variable loss = constant loss** — not at full load necessarily.
3. **Swinburne cannot test series motors** (no-load racing) and **misses full-load effects** (heat, commutation, stray load).
4. **Hopkinson needs two identical machines**, tested **back-to-back at full load** with supply making up only losses.
5. **Motor vs generator efficiency formula:** subtract losses from input (motor) vs add to output-denominator (generator).
6. **No-load armature current is not zero** — it supplies friction/iron via a small Ia0; don't ignore Ia0²Ra when it matters.

### 📝 Test — Electrical Machines (8 Q)

1. **(MCQ)** In a DC machine, which loss varies with load?
   (a) iron loss  (b) armature copper loss  (c) friction  (d) windage
2. **(MCQ)** Maximum efficiency of a DC machine occurs when:
   (a) variable loss = constant loss  (b) variable loss = 0  (c) load = 0  (d) speed is maximum
3. **(MCQ)** Swinburne's test is essentially a:
   (a) full-load test  (b) no-load test  (c) short-circuit test  (d) blocked-rotor test
4. **(MCQ)** A key limitation of Swinburne's test is that it:
   (a) needs two machines  (b) cannot check full-load performance/temperature rise  (c) needs a dynamometer  (d) is very expensive
5. **(MCQ)** Hopkinson's test requires:
   (a) one machine  (b) two identical machines coupled back-to-back  (c) a brake drum  (d) an AC supply
6. **(NAT)** A DC machine has constant losses of 500 W and Ra = 0.4 Ω. Find the armature current for maximum efficiency. ______ A
7. **(NAT)** A 200 V motor draws 50 A; total losses are 1500 W. Find the efficiency in %. ______ %
8. **(NAT)** In a Hopkinson test the supply is 250 V and draws 8 A to make up losses. Find the total losses of both machines in W. ______ W

<details>
<summary>🔑 Solutions</summary>

**1 → (b).** Armature copper loss Ia²Ra varies with load.

**2 → (a).** Variable loss = constant loss.

**3 → (b).** No-load test to find constant losses.

**4 → (b).** No full-load/temperature-rise verification.

**5 → (b).** Two identical machines, back-to-back.

**6 →** Ia²Ra = Wc ⇒ Ia = √(500/0.4) = √1250 = **35.36 A.**

**7 →** η = (VIL − losses)/(VIL) = (200×50 − 1500)/(200×50) = (10000−1500)/10000 = **85%.**

**8 →** Total losses = V·I1 = 250 × 8 = **2000 W.**

</details>

---

## 🔧 Power Electronics: Three-Phase Rectifiers — Half-Wave & Full-Converter

Day 12 finished single-phase converters. Three-phase rectifiers give **smoother DC**, higher power, and higher **ripple frequency** — the workhorses of industrial DC.

### 📖 Concept Deep Dive

**3-φ half-wave (3-pulse) controlled rectifier.** Three SCRs, one per phase, common cathode; each conducts for **120°**. With phase voltage peak `Vm` (per-phase peak = √2·Vph) and firing angle `α` measured from the natural commutation point (30° into each phase):

```
3-φ half-wave (3-pulse), continuous:
Vo(avg) = (3√3 Vm)/(2π) · cos α         [Vm = peak phase voltage]
Ripple frequency = 3 × supply frequency  (3 pulses per cycle)
```

At `α = 0`: `Vo = 3√3 Vm/2π ≈ 1.17 Vph(rms)` (per-phase). 3-pulse has notable ripple and **DC magnetising** of the supply — rarely used alone.

**3-φ full-converter (6-pulse bridge).** Six SCRs in a bridge; **two conduct at a time** (one from the top group, one from the bottom), each SCR for **120°**; the output is the **line-to-line** voltage. With `Vm` = **peak phase** voltage (so peak line = √3·Vm):

```
3-φ full-converter (6-pulse), continuous:
Vo(avg) = (3√3 Vm)/π · cos α           [Vm = peak PHASE voltage]
        = (3 VmL)/π · cos α            [VmL = peak LINE voltage = √3 Vm]
Ripple frequency = 6 × supply frequency  (6 pulses per cycle)
```

At `α = 0`: `Vo = 3√3 Vm/π ≈ 2.34 Vph(rms) ≈ 1.35 VLL(rms)`. **Inverter mode** for `α > 90°` (with load EMF), same as 1-φ full-converter.

**Comparison:**

| Rectifier | Pulses/cycle | Vo(avg), α=0 | Ripple freq | Devices |
|---|---|---|---|---|
| 1-φ full-converter | 2 | 2Vm/π ≈ 0.90 Vrms | 2f | 4 SCR |
| 3-φ half-wave | 3 | 3√3Vm/2π ≈ 1.17 Vph | **3f** | 3 SCR |
| 3-φ full-converter | 6 | 3√3Vm/π ≈ 2.34 Vph | **6f** | 6 SCR |

**Why three-phase is better:** more pulses ⇒ **higher ripple frequency** ⇒ **lower ripple factor** ⇒ smaller filter; better **transformer utilisation**; higher power capability; continuous conduction easier.

**Key relations for the 6-pulse bridge (continuous current, ripple-free Idc):**

```
Each SCR conducts 120° (2π/3) per cycle
Average SCR current = Idc/3 ;  RMS SCR current = Idc/√3
Supply (line) RMS current ≈ Idc·√(2/3) = 0.8165 Idc  (rectangular 120° blocks)
Displacement factor = cos α ;  ripple frequency = 6f
```

> 💎 **KEY RESULT** — **3-φ full-converter (6-pulse): Vo = (3√3 Vm)/π · cos α**, ripple **6f**; **3-φ half-wave (3-pulse): Vo = (3√3 Vm)/(2π)·cos α**, ripple **3f** (Vm = peak phase voltage). More pulses ⇒ smoother DC.

> 🧠 **MEMORY HOOK** — "**3-pulse = 3√3Vm/2π; 6-pulse = 3√3Vm/π (twice), ripple 3f vs 6f.** Each SCR conducts 120°; two on at once in the bridge."

> ⚠️ **TRAP ALERT** — Watch whether `Vm` is **peak phase** or **peak line** voltage. For the 6-pulse bridge: `Vo = 3√3Vm/π` uses **peak phase** `Vm`; equivalently `3VmL/π` with **peak line** `VmL`. Mixing them gives a √3 error.

### 📐 Formula Sheet

```
3-φ half-wave (3-pulse):  Vo(avg) = (3√3 Vm)/(2π) cos α ;  ripple = 3f
3-φ full-conv (6-pulse):  Vo(avg) = (3√3 Vm)/π cos α = (3 VmL)/π cos α ; ripple = 6f
   Vm = peak phase voltage ;  VmL = √3 Vm = peak line voltage
α=0:  6-pulse Vo ≈ 2.34 Vph(rms) ≈ 1.35 VLL(rms)
6-pulse SCR: avg current = Idc/3 ; rms = Idc/√3 ; conducts 120°
Inverter mode: α > 90° (with load EMF)
```

### 🧮 Solved Examples

**Example 1 — 6-pulse output.**
A 3-φ full-converter is fed from a **400 V (line-to-line, rms)**, 50 Hz supply, firing angle `α = 30°`, continuous current. Find the average output voltage and the ripple frequency.

```
Phase voltage rms Vph = 400/√3 = 230.94 V ;  peak phase Vm = √2 × 230.94 = 326.60 V
Vo(avg) = (3√3 Vm)/π · cos α = (3 × 1.7320 × 326.60/3.14159) × cos 30°
        = (3 × 1.7320 × 326.60/3.14159) × 0.86603
   3√3 = 5.1962 ;  5.1962 × 326.60 = 1697.1 ;  /π = 540.20
   Vo = 540.20 × 0.86603 = 467.8 V
Ripple frequency = 6 × 50 = 300 Hz
```
**Vo(avg) ≈ 467.8 V; ripple frequency = 300 Hz.**
*(Check via line voltage: Vo = 3·VmL/π·cosα, VmL = √2×400 = 565.69; 3×565.69/π = 540.19; ×0.866 = 467.8 V ✓.)*

**Example 2 — SCR currents in a 6-pulse bridge.**
The above converter delivers a ripple-free **Idc = 60 A**. Find the average and RMS current per SCR.

```
Average SCR current = Idc/3 = 60/3 = 20 A
RMS SCR current     = Idc/√3 = 60/1.7320 = 34.64 A
```
**Avg = 20 A per SCR; RMS = 34.64 A per SCR** (each conducts 120° = one-third of the cycle).

### ⚠️ Common Traps

1. **6-pulse ripple = 6f, 3-pulse = 3f** — more pulses ⇒ higher ripple frequency ⇒ smoother DC.
2. **`Vm` = peak PHASE** in `3√3Vm/π`; use `3VmL/π` if given **peak line** — don't mix (√3 factor).
3. **3-φ full-converter output is twice the half-wave** (`3√3Vm/π` vs `3√3Vm/2π`).
4. **Each SCR conducts 120°**, two at a time in the bridge; **avg = Idc/3, rms = Idc/√3**.
5. **Inverter mode α > 90°** needs a **load EMF** (same as 1-φ full-converter).
6. **Displacement factor = cos α** — input pf falls as α rises (ignoring overlap/harmonics).

### 📝 Test — Power Electronics (8 Q)

1. **(MCQ)** The ripple frequency of a 3-φ full-converter (6-pulse) on a 50 Hz supply is:
   (a) 50 Hz  (b) 100 Hz  (c) 150 Hz  (d) 300 Hz
2. **(MCQ)** In a 3-φ full-converter bridge, how many SCRs conduct at any instant?
   (a) 1  (b) 2  (c) 3  (d) 6
3. **(MCQ)** The average output of a 3-φ full-converter (Vm = peak phase) is:
   (a) (3√3Vm)/(2π)cos α  (b) (3√3Vm)/π cos α  (c) (2Vm/π)cos α  (d) (Vm/π)(1+cos α)
4. **(MCQ)** Each SCR in a 3-φ full-converter conducts for:
   (a) 60°  (b) 120°  (c) 180°  (d) 240°
5. **(MCQ)** Compared with single-phase, three-phase rectifiers give:
   (a) higher ripple, lower power  (b) lower ripple, higher power  (c) same ripple  (d) DC only at α=90°
6. **(NAT)** A 3-φ full-converter from 415 V (line, rms) at α = 0°. Find Vo(avg) in volts. ______ V
7. **(NAT)** A 6-pulse bridge delivers Idc = 90 A (ripple-free). Find the RMS current per SCR in A. ______ A
8. **(NAT)** A 3-φ half-wave (3-pulse) rectifier has peak phase voltage 300 V, α = 0°. Find Vo(avg) in volts. ______ V

<details>
<summary>🔑 Solutions</summary>

**1 → (d) 300 Hz.** 6 × 50.

**2 → (b) 2.** One from the top group, one from the bottom.

**3 → (b) (3√3Vm)/π cos α.**

**4 → (b) 120°.**

**5 → (b).** Lower ripple, higher power.

**6 →**
```
VmL = √2 × 415 = 586.90 V (peak line)
Vo = 3·VmL/π · cos0 = 3 × 586.90/3.14159 = 560.4 V
```
**Vo ≈ 560.4 V.**

**7 →** RMS per SCR = Idc/√3 = 90/1.7320 = **51.96 A.**

**8 →**
```
Vo = (3√3 Vm)/(2π) · cos0 = (5.1962 × 300)/(2 × 3.14159)
   = 1558.8/6.28319 = 248.1 V
```
**Vo ≈ 248.1 V.**

</details>

---

`✅ Day 13 complete — Current transformers (never open the secondary; ratio/phase errors), DC machine losses & testing (Swinburne no-load, Hopkinson back-to-back), and three-phase rectifiers (3-pulse & 6-pulse, ripple frequency). Tomorrow: PT (potential transformers), 3-phase induction motor basics, and rectifier performance (ripple, TUF, overlap).`

*Correctness over length — re-derive any result you're unsure of and mark "verify" before the exam.*
