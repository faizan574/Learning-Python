# ⚡ GATE Technical Revision — Day 80 (2026-10-09)

*The last AC-bridge family, then two consolidation sweeps — every machines and power-electronics formula that earns marks, drilled on PYQ-grade numericals.*

📅 Tech Day 80 · ⏱ ~50 min · 🎯 Measurements + Machines + Power Electronics

> Today finishes the **AC-bridge** story (Schering for tan δ, De Sauty for capacitance, Wien for frequency, Wagner for stray-capacitance cleanup), then runs a **formula-sheet + PYQ revision** across all of **Electrical Machines** and all of **Power Electronics**. The two revision sections are deliberately numerical — this is where GATE marks actually live.

---

## 🔧 Measuring Instruments: AC Bridges II — Schering, De Sauty, Wien & Wagner Earthing

### 📖 Concept Deep Dive

Having done the inductance bridges (Maxwell, Hay, Anderson), we now cover the **capacitance and frequency** bridges, plus the stray-capacitance fix.

**Schering bridge.** The workhorse for measuring an **unknown capacitance and its dissipation factor (tan δ)** — critical for insulation and dielectric testing (cables, bushings) at high voltage. Arm 1 is the unknown capacitor modelled as `C1` in series with a loss resistance `r1`; arm 2 is a loss-free **standard capacitor** `C2`; arm 3 is a pure resistor `R3`; arm 4 is `R4` in **parallel** with a variable capacitor `C4`. Applying `Z1·Z4 = Z2·Z3` and separating real and imaginary parts:

```
C1 = C2 · (R4/R3)
r1 = R3 · (C4/C2)
Dissipation factor  D = tan δ = ω·C1·r1 = ω·C4·R4
```

The elegant result is that **tan δ = ωC4R4 depends only on the arm-4 components** — independent of the standard and ratio arms. Because high voltage is applied, the detector and ground-side components are kept at low potential, and a **Wagner earth** (below) is usually added. Balance is **frequency-dependent** through tan δ.

**De Sauty bridge.** The simplest capacitance-comparison bridge: two capacitor arms (`C1` unknown, `C2` standard) and two resistance arms (`R3`, `R4`). Balance gives a pure ratio:

```
C1 / C2 = R4 / R3     ⇒   C1 = C2 · (R4/R3)
```

Its limitation: it balances cleanly **only for loss-free (perfect) capacitors**. Real capacitors have loss, so the phase condition cannot be met and the null is poor. The **modified De Sauty** adds series resistances `r1, r2` in the capacitor arms; then the **difference of dissipation factors** can be found:

```
D1 − D2 = ω(C1 r1 − C2 r2)
```

**Wien bridge.** A **frequency-sensitive** bridge — its balance depends on ω, so it is used to **measure frequency** and, more famously, as the frequency-selecting network in the **Wien-bridge oscillator**. One arm is a series RC, the adjacent arm a parallel RC. The two balance conditions are:

```
f = 1 / (2π·√(R1 R3 C1 C3))          (frequency condition)
R2/R4 = R1/R3 + C3/C1                 (resistance-ratio condition)
```

For equal components `R1 = R3 = R` and `C1 = C3 = C`:

```
f = 1/(2πRC)   and   R2/R4 = 2
```

**Wagner earthing device.** At high frequency / high impedance, **stray capacitances** between bridge nodes and earth divert current and spoil the balance. The Wagner earth is an **auxiliary pair of impedances** (a second potential divider across the source) whose junction is earthed; it is balanced *first* so that the detector terminals sit at **earth potential**, making the stray capacitances across the detector carry no current. It is routinely used with the **Schering** and other HV bridges.

| Bridge | Measures | Key result | Freq-dependent? |
|---|---|---|---|
| Schering | C & tan δ (dielectric loss) | `C1 = C2·R4/R3`, `tan δ = ωC4R4` | yes |
| De Sauty | capacitance (comparison) | `C1 = C2·R4/R3` | no (ideal C) |
| Wien | **frequency** | `f = 1/(2πRC)`, `R2/R4 = 2` | **yes** |
| Wagner earth | removes stray-C error | aux arm → detector at earth potential | — |

> 💎 **KEY RESULT** — Schering: `tan δ = ω·C4·R4` (depends only on arm 4). Wien (equal components): `f = 1/(2πRC)` with `R2/R4 = 2`.

> 🧠 **MEMORY HOOK** — "**S**chering = **S**tress/insulation (tan δ). **D**e Sauty = **D**irect capacitance compare. **W**ien = **W**hat frequency? **W**agner = **W**ipe out stray earth capacitance."

> ⚠️ **TRAP ALERT** — Wien bridge's `R2/R4 = 2` ratio is what sets the Wien-bridge oscillator's gain condition (amplifier gain ≥ 3). And in Schering, `tan δ = ωC4R4` — note it is **C4 and R4 (arm 4)**, not the standard C2 or ratio R3.

### 📐 Formula Sheet

| Quantity | Formula | Notes |
|---|---|---|
| Schering C | `C1 = C2·R4/R3` | C2 = standard capacitor |
| Schering loss R | `r1 = R3·C4/C2` | series loss resistance |
| Dissipation factor | `tan δ = ω·C4·R4` | arm-4 only |
| De Sauty | `C1 = C2·R4/R3` | ideal capacitors |
| Modified De Sauty | `D1 − D2 = ω(C1r1 − C2r2)` | accounts for loss |
| Wien frequency | `f = 1/(2π√(R1R3C1C3))` | general |
| Wien (equal R,C) | `f = 1/(2πRC)`, `R2/R4 = 2` | oscillator network |

### 🧮 Solved Examples

**Example 1 — Schering bridge.** A Schering bridge balances with standard capacitor `C2 = 100 pF`, `R3 = 1000 Ω`, `R4 = 3180 Ω` in parallel with `C4 = 0.5 µF`, at `f = 50 Hz`. Find the unknown capacitance `C1` and its dissipation factor.

```
C1 = C2·R4/R3 = 100 pF × 3180/1000 = 100 × 3.18 = 318 pF
ω = 2πf = 2π(50) = 314.16 rad/s
tan δ = ω·C4·R4 = 314.16 × 0.5×10⁻⁶ × 3180
      = 314.16 × 1.59×10⁻³ = 0.4995 ≈ 0.5
```

**C1 = 318 pF, tan δ ≈ 0.5.** (A high tan δ like this would flag a lossy/poor dielectric.) ✔

**Example 2 — Wien bridge frequency.** A Wien bridge uses equal arms `R = 10 kΩ` and `C = 0.01 µF`. Find the frequency at balance and the required `R2/R4` ratio.

```
f = 1/(2πRC) = 1/(2π × 10×10³ × 0.01×10⁻⁶)
  = 1/(2π × 10⁴ × 10⁻⁸) = 1/(2π × 10⁻⁴)
  = 1/(6.283×10⁻⁴) = 1591.5 Hz ≈ 1.59 kHz
R2/R4 = 2
```

**f ≈ 1.59 kHz, R2/R4 = 2.** ✔

### ⚠️ Common Traps
1. **tan δ formula arm confusion.** It is `ωC4R4` (arm 4), not involving C2 or R3.
2. **Using De Sauty for lossy capacitors.** The basic De Sauty needs loss-free caps; use the modified version otherwise.
3. **Forgetting Wien has two conditions.** Frequency *and* the `R2/R4` resistance ratio must both hold.
4. **Wien `R2/R4 = 2` only for equal components.** The general ratio is `R1/R3 + C3/C1`.
5. **Wagner earth balanced after the main bridge.** Actually you iterate: balance main, then Wagner, then re-balance — it is an auxiliary balance, not a one-shot.
6. **pF vs µF slips** in Schering `C1 = C2·R4/R3` — keep units consistent.

### 📝 Test (8 questions)

**Q1 (MCQ).** The Schering bridge is primarily used to measure:
(a) inductance and Q  (b) capacitance and dissipation factor  (c) frequency  (d) resistance

**Q2 (MCQ).** In a Schering bridge, the dissipation factor equals:
(a) `ωC2R3`  (b) `ωC4R4`  (c) `ωC1R3`  (d) `1/(ωC4R4)`

**Q3 (MCQ).** The Wien bridge is frequency-sensitive and is used:
(a) only for inductance  (b) to measure frequency / as an oscillator network  (c) to measure tan δ  (d) for low resistance

**Q4 (MCQ).** The basic De Sauty bridge gives a good null only when the capacitors are:
(a) lossy  (b) loss-free  (c) electrolytic  (d) high-voltage

**Q5 (MCQ).** The Wagner earthing device is used to:
(a) increase sensitivity  (b) eliminate stray-capacitance (earth) errors  (c) measure frequency  (d) protect against surges

**Q6 (NAT).** A Schering bridge has `C2 = 200 pF`, `R3 = 2 kΩ`, `R4 = 5 kΩ`. Find `C1` in pF.

**Q7 (NAT).** For a Schering bridge with `C4 = 0.1 µF`, `R4 = 3184 Ω`, at 50 Hz, find tan δ (2 decimals).

**Q8 (NAT).** A Wien bridge with equal components `R = 5 kΩ`, `C = 0.02 µF` is at balance. Find the frequency in Hz.

<details><summary>🔑 Solutions</summary>

**Q1 → (b).** Schering measures C and tan δ (dielectric loss), key for insulation testing.

**Q2 → (b).** `tan δ = ωC4R4`, depending only on arm 4.

**Q3 → (b).** Wien is frequency-dependent → frequency measurement and the Wien-bridge oscillator.

**Q4 → (b).** Basic De Sauty needs loss-free capacitors; otherwise the phase null is poor.

**Q5 → (b).** Wagner earth forces the detector to earth potential, nulling stray-capacitance currents.

**Q6.**
```
C1 = C2·R4/R3 = 200 × 5000/2000 = 200 × 2.5 = 500 pF
```
**C1 = 500 pF.**

**Q7.**
```
ω = 2π(50) = 314.16
tan δ = ωC4R4 = 314.16 × 0.1×10⁻⁶ × 3184
      = 314.16 × 3.184×10⁻⁴ = 0.100
```
**tan δ ≈ 0.10.**

**Q8.**
```
f = 1/(2πRC) = 1/(2π × 5000 × 0.02×10⁻⁶)
  = 1/(2π × 10⁻⁴) = 1591.5 Hz
```
**f ≈ 1591.5 Hz (≈ 1.59 kHz).**

</details>

---

## 🔧 Electrical Machines: Revision — Formula Sheet + Mixed PYQ Numericals

### 📖 Concept Deep Dive

This is a **consolidation sweep** of the whole machines section. The marks come from four formula families — fix these cold.

**1. Transformer.** The EMF equation `E = 4.44 f N φm` drives everything. Efficiency peaks when **variable (copper) loss = constant (iron) loss**; the load fraction for max efficiency is `x = √(Pi/Pfl,cu)`. Regulation uses the equivalent-circuit drop. All-day efficiency weights energy over 24 h (iron loss runs all day, copper loss only on load).

**2. DC machine.** Back-EMF `Eb = PφZN/(60A)` and torque `Ta = (PφZ/2πA)·Ia`. Speed `N ∝ Eb/φ`. For a shunt motor, φ ≈ const so `N ∝ Eb = V − IaRa`. Series motor `T ∝ φIa ∝ Ia²` (before saturation). Wave winding `A = 2`, lap winding `A = P`.

**3. Induction motor.** Synchronous speed `Ns = 120f/P`; slip `s = (Ns − N)/Ns`; rotor frequency `fr = s·f`. The air-gap power split is the single most tested idea:

```
Pag : Pcu(rotor) : Pmech = 1 : s : (1 − s)
Pcu(rotor) = s·Pag        Pmech = (1 − s)·Pag
Efficiency(rotor) = Pmech/Pag = 1 − s
```

Maximum torque occurs at slip `sMT = R2/X2` (standstill rotor reactance), and `Tmax` is **independent of rotor resistance** — adding rotor R only shifts the slip at which Tmax occurs (basis of slip-ring starting/speed control).

**4. Synchronous machine.** `Ns = 120f/P`; developed power `P = (Ef·V/Xs)·sin δ` (cylindrical rotor); for salient-pole add the reluctance term `+ V²(Xd − Xq)/(2XdXq)·sin 2δ`. Voltage regulation via EMF/MMF/ZPF (Potier) methods.

| Family | Core formula | Classic exam hook |
|---|---|---|
| Transformer | `E = 4.44 f N φm` | max η when Pcu = Pi |
| DC machine | `Eb = PφZN/60A`, `T = PφZIa/2πA` | wave A=2, lap A=P |
| Induction | `Ns=120f/P`, `Pcu=sPag` | `Tmax` independent of R2 |
| Synchronous | `P=(EfV/Xs)sinδ` | salient-pole reluctance term |

> 💎 **KEY RESULT** — Induction motor power split `Pag : Pcu2 : Pmech = 1 : s : (1−s)`. Rotor-copper loss is **exactly s times** the air-gap power.

> 🧠 **MEMORY HOOK** — "**4.44 for transformers, 120f/P for speed, 1:s:(1−s) for induction, EfV/Xs·sinδ for synchronous.**" Four lines cover ~80% of machines numericals.

> ⚠️ **TRAP ALERT** — `Tmax` in an induction motor does **not** change with rotor resistance (only `sMT = R2/X2` shifts). And transformer EMF uses **4.44 = π√2** (from form factor 1.11), not 4.0.

### 📐 Formula Sheet

| Quantity | Formula | Notes |
|---|---|---|
| Transformer EMF | `E = 4.44 f N φm` | φm = peak flux |
| Load for max η | `x = √(Pi/Pcu,fl)` | fraction of full load |
| DC back-EMF | `Eb = PφZN/(60A)` | A=2 wave, A=P lap |
| DC torque | `Ta = PφZ·Ia/(2πA)` | — |
| Sync speed | `Ns = 120f/P` | rpm |
| Slip | `s = (Ns − N)/Ns` | rotor freq `fr = sf` |
| Rotor Cu loss | `Pcu2 = s·Pag` | `Pmech = (1−s)Pag` |
| Max-torque slip | `sMT = R2/X2` | Tmax independent of R2 |
| Sync power | `P = (EfV/Xs)·sinδ` | cylindrical rotor |

### 🧮 Solved Examples

**Example 1 — Induction motor power split (PYQ style).** A 3-phase, 4-pole, 50 Hz induction motor runs at 1440 rpm. Air-gap power is 10 kW. Find slip, rotor copper loss, and mechanical power developed.

```
Ns = 120f/P = 120×50/4 = 1500 rpm
s = (Ns − N)/Ns = (1500 − 1440)/1500 = 60/1500 = 0.04
Pcu2 = s·Pag = 0.04 × 10 000 = 400 W
Pmech = (1 − s)·Pag = 0.96 × 10 000 = 9600 W
```

**s = 4%, rotor Cu loss = 400 W, Pmech = 9.6 kW.** ✔

**Example 2 — Transformer maximum efficiency.** A transformer has iron loss 400 W and full-load copper loss 1600 W. At what fraction of full load is efficiency maximum, and what is the copper loss there?

```
x = √(Pi/Pcu,fl) = √(400/1600) = √0.25 = 0.5  (i.e. 50% load)
Cu loss at that load = x²·Pcu,fl = 0.25 × 1600 = 400 W = Pi ✓
```

**Max efficiency at 50% load**, where Cu loss (400 W) equals iron loss (400 W). ✔

### ⚠️ Common Traps
1. **Rotor Cu loss = s·Pag, not s·Pout.** It is a fraction of **air-gap** power.
2. **Max-efficiency load is x = √(Pi/Pcu,fl)**, and at that point Cu loss equals iron loss — not full-load copper loss.
3. **Tmax vs sMT.** Rotor resistance shifts sMT but leaves Tmax unchanged.
4. **Wave vs lap parallel paths.** `A = 2` (wave) vs `A = P` (lap) — flips Eb and torque.
5. **4.44 factor**, not 4 — comes from `π√2`.
6. **Salient-pole power** has the extra reluctance term `+ V²(Xd−Xq)/(2XdXq)·sin2δ`; don't drop it when Xd ≠ Xq.

### 📝 Test (8 questions)

**Q1 (MCQ).** In an induction motor, rotor copper loss equals:
(a) `(1−s)Pag`  (b) `s·Pag`  (c) `s²·Pag`  (d) `Pag/s`

**Q2 (MCQ).** Maximum torque of an induction motor with respect to rotor resistance R2:
(a) increases with R2  (b) decreases with R2  (c) is independent of R2  (d) is zero

**Q3 (MCQ).** A transformer's efficiency is maximum when:
(a) copper loss = 0  (b) iron loss = copper loss  (c) load = full load always  (d) iron loss = 0

**Q4 (MCQ).** For a lap-wound DC machine with P poles, the number of parallel paths is:
(a) 2  (b) P  (c) P/2  (d) 2P

**Q5 (MCQ).** The developed power of a cylindrical-rotor synchronous machine is:
(a) `(EfV/Xs)cosδ`  (b) `(EfV/Xs)sinδ`  (c) `EfV·Xs·sinδ`  (d) `(Ef/V)sinδ`

**Q6 (NAT).** A 6-pole, 50 Hz induction motor runs at 950 rpm. Find the slip (%).

**Q7 (NAT).** A transformer has iron loss 250 W and full-load copper loss 1000 W. Find the per-unit load fraction for maximum efficiency.

**Q8 (NAT).** A DC shunt motor has `V = 220 V`, `Ia = 20 A`, `Ra = 0.5 Ω`. Find the back-EMF in volts.

<details><summary>🔑 Solutions</summary>

**Q1 → (b).** `Pcu2 = s·Pag` from the 1 : s : (1−s) split.

**Q2 → (c).** Tmax is independent of R2; only sMT = R2/X2 shifts.

**Q3 → (b).** Variable (Cu) loss = constant (iron) loss at max efficiency.

**Q4 → (b).** Lap winding: A = P.

**Q5 → (b).** `P = (EfV/Xs)·sinδ`.

**Q6.**
```
Ns = 120×50/6 = 1000 rpm
s = (1000 − 950)/1000 = 0.05 = 5%
```
**s = 5%.**

**Q7.**
```
x = √(Pi/Pcu,fl) = √(250/1000) = √0.25 = 0.5
```
**x = 0.5 (50% load).**

**Q8.**
```
Eb = V − Ia·Ra = 220 − 20×0.5 = 220 − 10 = 210 V
```
**Eb = 210 V.**

</details>

---

## 🔧 Power Electronics: Revision — Formula Sheet + Mixed PYQ Numericals

### 📖 Concept Deep Dive

A **consolidation sweep** of all converters. Memorise the output-voltage families and you can attack most PYQ numericals directly.

**1. Controlled rectifiers (α = firing angle).** For a **single-phase full converter** (2-pulse, continuous conduction) with R-L load:

```
Vo(avg) = (2Vm/π)·cos α          Vm = peak phase voltage
```

For a **single-phase semiconverter** (half-controlled) and a single-phase half-wave controlled rectifier with R load:

```
Vo(avg) = (Vm/π)·(1 + cos α)
```

For a **three-phase full converter** (6-pulse):

```
Vo(avg) = (3Vml/π)·cos α          Vml = peak line-to-line voltage
```

Note the full converter output goes **negative** for α > 90° (inverter mode); the semiconverter cannot (freewheeling clamps it to zero).

**2. Choppers (DC-DC, D = duty ratio).**

```
Buck (step-down):   Vo = D·Vs
Boost (step-up):    Vo = Vs/(1 − D)
Buck-boost:         Vo = Vs·D/(1 − D)
```

**3. Inverters.** A single-phase **full-bridge** square-wave VSI gives RMS output `Vo = Vs` (fundamental RMS `= (4/π)·Vs/√2 = 0.9 Vs`); the half-bridge gives `Vo = Vs/2`. Three-phase VSI in 180° conduction gives RMS line voltage `= √(2/3)·Vs`. SPWM reduces lower-order harmonics; the fundamental peak `= ma·(Vs/2)` for `ma ≤ 1`.

**4. Performance factors.**

```
Form factor FF = Vrms/Vavg
Ripple factor RF = √(FF² − 1)
TUF = Pdc / (VA rating of transformer)
Input pf = (real power)/(apparent power)
```

**5. Device numericals.** String efficiency for series/parallel SCRs `= (actual rating of string)/(n × individual rating)`; latching current > holding current.

| Converter | Output (avg/RMS) | Note |
|---|---|---|
| 1-φ full converter | `Vo = (2Vm/π)cosα` | α>90° → inverter |
| 1-φ semiconverter | `Vo = (Vm/π)(1+cosα)` | ≥ 0 only |
| 3-φ full converter | `Vo = (3Vml/π)cosα` | 6-pulse |
| Buck | `Vo = D·Vs` | step-down |
| Boost | `Vo = Vs/(1−D)` | step-up |
| Buck-boost | `Vo = Vs·D/(1−D)` | inverting |

> 💎 **KEY RESULT** — 1-φ full converter `Vo = (2Vm/π)cosα`; at α = 0 it is `2Vm/π = 0.636 Vm` (the uncontrolled full-wave average).

> 🧠 **MEMORY HOOK** — "**(2Vm/π)cosα** full, **(Vm/π)(1+cosα)** semi, **(3Vml/π)cosα** three-phase. Choppers: **D**, **1/(1−D)**, **D/(1−D)**."

> ⚠️ **TRAP ALERT** — The **semiconverter** output `(Vm/π)(1+cosα)` can never go negative (no inverter mode), while the **full converter** `(2Vm/π)cosα` does for α > 90°. Also: boost/buck-boost formulas assume **continuous conduction (CCM)**.

### 📐 Formula Sheet

| Quantity | Formula | Notes |
|---|---|---|
| 1-φ full converter | `Vo = (2Vm/π)cosα` | peak phase Vm |
| 1-φ semiconverter | `Vo = (Vm/π)(1+cosα)` | half-controlled |
| 3-φ full converter | `Vo = (3Vml/π)cosα` | peak line Vml |
| Buck / Boost / Buck-boost | `DVs` / `Vs/(1−D)` / `VsD/(1−D)` | CCM |
| Form factor | `FF = Vrms/Vavg` | — |
| Ripple factor | `RF = √(FF² − 1)` | — |
| SPWM fundamental peak | `V1 = ma·(Vs/2)` | ma ≤ 1 |

### 🧮 Solved Examples

**Example 1 — Single-phase full converter (PYQ style).** A single-phase full converter is fed from 230 V (RMS) and fires at α = 60°, feeding a highly inductive load (continuous conduction). Find the average output voltage.

```
Vm = √2 × 230 = 325.3 V
Vo = (2Vm/π)·cos α = (2 × 325.3/π) × cos 60°
   = (650.6/3.1416) × 0.5 = 207.1 × 0.5 = 103.5 V
```

**Vo ≈ 103.5 V.** (At α = 0 it would be 207.1 V; firing at 60° halves it via cos 60° = 0.5.) ✔

**Example 2 — Boost converter.** A boost converter operates from `Vs = 24 V` with duty ratio `D = 0.6` in CCM. Find the output voltage and the output for D = 0.75.

```
Vo = Vs/(1 − D) = 24/(1 − 0.6) = 24/0.4 = 60 V
At D = 0.75:  Vo = 24/(1 − 0.75) = 24/0.25 = 96 V
```

**Vo = 60 V (D=0.6); 96 V (D=0.75).** Note the strong sensitivity near D → 1. ✔

### ⚠️ Common Traps
1. **Vm = peak, not RMS.** `Vo = (2Vm/π)cosα` needs peak voltage — convert 230 V RMS → 325 V peak first.
2. **Semiconverter vs full converter.** Only the full converter inverts (α > 90°); semiconverter output stays ≥ 0.
3. **3-φ uses peak line voltage Vml** in `(3Vml/π)cosα`, not phase voltage.
4. **Boost/buck-boost assume CCM** — discontinuous conduction changes the relation.
5. **Form/ripple confusion:** `RF = √(FF² − 1)`, not `FF − 1`.
6. **SPWM over-modulation (ma > 1)** breaks the linear `V1 = ma(Vs/2)` relation.

### 📝 Test (8 questions)

**Q1 (MCQ).** The average output of a 1-φ full converter (continuous conduction) is:
(a) `(Vm/π)(1+cosα)`  (b) `(2Vm/π)cosα`  (c) `(Vm/2π)cosα`  (d) `(3Vml/π)cosα`

**Q2 (MCQ).** A semiconverter output voltage, compared with a full converter:
(a) can go negative  (b) cannot go negative  (c) is always higher  (d) is independent of α

**Q3 (MCQ).** A boost converter output voltage is:
(a) `D·Vs`  (b) `Vs/(1−D)`  (c) `Vs·D/(1−D)`  (d) `Vs(1−D)`

**Q4 (MCQ).** The ripple factor in terms of form factor is:
(a) `FF − 1`  (b) `√(FF² − 1)`  (c) `FF² − 1`  (d) `1/FF`

**Q5 (MCQ).** For α > 90°, a fully controlled converter with suitable load operates as:
(a) rectifier  (b) line-commutated inverter  (c) chopper  (d) cycloconverter

**Q6 (NAT).** A 1-φ full converter fed from peak voltage `Vm = 300 V` fires at α = 45°. Find the average output voltage (V, 1 decimal).

**Q7 (NAT).** A buck converter with `Vs = 48 V` must deliver 18 V. Find the required duty ratio D (2 decimals).

**Q8 (NAT).** A buck-boost converter has `Vs = 20 V`, `D = 0.4`. Find the magnitude of output voltage (V).

<details><summary>🔑 Solutions</summary>

**Q1 → (b).** `Vo = (2Vm/π)cosα` for the 1-φ full converter.

**Q2 → (b).** Semiconverter output stays ≥ 0 (freewheeling clamps it); no inverter mode.

**Q3 → (b).** Boost: `Vo = Vs/(1−D)`.

**Q4 → (b).** `RF = √(FF² − 1)`.

**Q5 → (b).** α > 90° with an EMF/inductive load → line-commutated inverter mode.

**Q6.**
```
Vo = (2Vm/π)cosα = (2×300/π)×cos45°
   = (600/3.1416) × 0.7071 = 190.99 × 0.7071 = 135.0 V
```
**Vo ≈ 135.0 V.**

**Q7.**
```
Vo = D·Vs ⇒ D = Vo/Vs = 18/48 = 0.375 ≈ 0.38
```
**D ≈ 0.38.**

**Q8.**
```
Vo = Vs·D/(1−D) = 20×0.4/(1−0.4) = 8/0.6 = 13.33 V
```
**|Vo| ≈ 13.33 V.**

</details>

---

## 📊 Progress

```
Measuring Instruments  [█████████████████░░░]  Round 4 · topic 18/22 (AC Bridges II)
Electrical Machines    [████████████████████]  Round 4 COMPLETE · 20/20 (Machines revision) ✅
Power Electronics       [████████████████████]  Round 4 COMPLETE · 20/20 (PE revision) ✅
```

- **Section A (Measurements):** AC bridges done; CRO → DVM → Q-meter → revision still ahead in round 4.
- **Section B (Machines):** **round 4 complete** — next sitting restarts the machines list for round 5. ✅
- **Section C (Power Electronics):** **round 4 complete** — next sitting restarts for round 5. ✅

> 🎯 **Today's three one-liners:** (1) **Schering tan δ = ωC4R4; Wien f = 1/(2πRC), R2/R4 = 2.** (2) **Induction split 1:s:(1−s); Tmax independent of R2; transformer max-η at Pcu = Pi.** (3) **1-φ full converter Vo = (2Vm/π)cosα; boost Vo = Vs/(1−D).**

*Two sections hit a full revision cycle today. Correctness over length — verify any value marked "verify" before the exam.*
