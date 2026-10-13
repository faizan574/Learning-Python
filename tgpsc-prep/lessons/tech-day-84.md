# ⚡ GATE Technical Revision — Day 84 (2026-10-13)

*A full Measurements formula-sweep closing round 4, the three-phase transformer connections and vector groups, and the SCR's triggering, dv/dt and snubber protection.*

📅 Tech Day 84 · ⏱ ~50 min · 🎯 Measurements + Machines + Power Electronics

> Today: a **Measurements formula-sheet + PYQ revision** (completing Section A's round 4), **three-phase transformer connections / vector groups / parallel operation**, and **thyristor turn-on, gate characteristics and dv/dt–di/dt protection** (snubber design).

---

## 🔧 Measuring Instruments: Revision — Formula Sheet + Mixed PYQ Numericals

### 📖 Concept Deep Dive

A **consolidation sweep** of the whole Measurements section. The marks cluster around five families: **meter ranging, bridges, power/energy, instrument transformers, and digital/CRO**.

**1. Meter ranging.** For a PMMC movement (`Im`, `Rm`):

```
Shunt (ammeter):   Rsh = Im·Rm/(I − Im) = Rm/(m − 1),  m = I/Im
Multiplier (voltmeter): Rs = Rm(m − 1),  m = V/Vm
```

The **multiplying power** m sets the range extension. PMMC torque `Td = N·B·A·I` → **uniform scale**; MI and EMMC have `Td ∝ I²` → **non-uniform (square-law)** scale and read **true RMS**.

**2. Bridges (resistance/inductance/capacitance).**

```
Wheatstone balance:  P/Q = R/S
Maxwell's L-C:  L1 = R2 R3 C4,  Q = ωC4R4
Hay's:  Q = 1/(ωC4R4)   (high Q)
Schering:  C1 = C2·R4/R3,  tan δ = ωC4R4
Wien (freq):  f = 1/(2πRC)
```

**3. Power & energy.** Two-wattmeter method (3-φ):

```
P = W1 + W2
tan φ = √3·(W1 − W2)/(W1 + W2)
```

Energy meter errors are corrected via lag/creep/friction adjustments.

**4. Instrument transformers.** CT ratio/phase-angle errors; keep the CT secondary **never open** (dangerous high voltage). Nominal ratio vs actual (transformation) ratio.

**5. Digital & CRO.**

```
CRO deflection sensitivity:  S = ld·L/(2·d·Ea)
Dual-slope DVM:  Vin = Vref·(T2/T1)
Q-meter:  Q = ωL/R = VC/E
```

| Family | Headline formula | Note |
|---|---|---|
| Shunt | `Rsh = Rm/(m−1)` | ammeter |
| Multiplier | `Rs = Rm(m−1)` | voltmeter |
| Maxwell L | `L1 = R2R3C4` | medium Q |
| Two-wattmeter | `tanφ = √3(W1−W2)/(W1+W2)` | 3-φ power |
| Dual-slope | `Vin = Vref·T2/T1` | DVM |

> 💎 **KEY RESULT** — `Rsh = Rm/(m−1)` (ammeter), `Rs = Rm(m−1)` (voltmeter); two-wattmeter `tanφ = √3(W1−W2)/(W1+W2)`.

> 🧠 **MEMORY HOOK** — "**Shunt divides (Rm/(m−1)), multiplier multiplies (Rm(m−1)).**" PMMC = linear, MI/EMMC = square-law (true RMS).

> ⚠️ **TRAP ALERT** — In the shunt formula `m = I/Im` (total range ÷ movement current); in the multiplier `m = V/Vm`. **CT secondary must never be open-circuited.**

### 📐 Formula Sheet

| Quantity | Formula | Notes |
|---|---|---|
| Shunt resistance | `Rsh = Im·Rm/(I−Im)` | ammeter |
| Multiplier | `Rs = Rm(m−1)` | voltmeter |
| PMMC deflection | `θ = NBAI/K` | linear |
| Maxwell L | `L1 = R2R3C4` | Q = ωC4R4 |
| Schering tan δ | `tan δ = ωC4R4` | — |
| Two-wattmeter pf | `tanφ = √3(W1−W2)/(W1+W2)` | 3-φ |
| CRO sensitivity | `S = ldL/(2dEa)` | — |
| Dual-slope DVM | `Vin = Vref·T2/T1` | — |

### 🧮 Solved Examples

**Example 1 — Shunt (ammeter range).** A PMMC movement reads full scale at `Im = 1 mA` with `Rm = 100 Ω`. Find the shunt to extend the range to 1 A.

```
m = I/Im = 1/0.001 = 1000
Rsh = Rm/(m − 1) = 100/(1000 − 1) = 100/999 = 0.1001 Ω
```

**Rsh ≈ 0.1 Ω.** ✔

**Example 2 — Two-wattmeter method.** In a balanced 3-φ load, the two wattmeters read W1 = 8 kW and W2 = 2 kW. Find the total power and the power factor.

```
P = W1 + W2 = 8 + 2 = 10 kW
tan φ = √3(W1 − W2)/(W1 + W2) = √3(8 − 2)/(8 + 2) = 1.732×6/10 = 1.039
φ = arctan(1.039) = 46.1°,  cos φ = cos 46.1° = 0.693
```

**P = 10 kW, pf ≈ 0.69 lagging.** ✔

### ⚠️ Common Traps
1. **Shunt m = I/Im, multiplier m = V/Vm** — don't mix the ratios.
2. **PMMC is linear; MI/EMMC are square-law** (true RMS).
3. **Two-wattmeter: one wattmeter reads negative** when pf < 0.5 (φ > 60°).
4. **CT secondary open-circuit** → dangerous overvoltage; always keep it shorted/burdened.
5. **Maxwell vs Hay Q** reciprocal (`ωC4R4` vs `1/(ωC4R4)`).
6. **Dual-slope cancels R,C,clock** — its headline virtue.

### 📝 Test (8 questions)

**Q1 (MCQ).** To convert a galvanometer to an ammeter, connect a:
(a) high series resistance  (b) low shunt resistance  (c) capacitor  (d) inductor

**Q2 (MCQ).** A PMMC instrument has a scale that is:
(a) square-law  (b) uniform (linear)  (c) logarithmic  (d) exponential

**Q3 (MCQ).** In the two-wattmeter method, one wattmeter reads negative when the pf is:
(a) unity  (b) above 0.5  (c) below 0.5 (φ > 60°)  (d) exactly 0.5

**Q4 (MCQ).** A CT secondary should never be:
(a) shorted  (b) burdened  (c) open-circuited  (d) earthed

**Q5 (MCQ).** Which instrument reads true RMS regardless of waveform?
(a) PMMC  (b) rectifier type  (c) moving-iron / electrodynamometer  (d) none

**Q6 (NAT).** A 50 Ω, 2 mA movement is to read 10 V full scale. Find the series multiplier (Ω).

**Q7 (NAT).** Two wattmeters read 6 kW and 6 kW in a balanced 3-φ circuit. Find the power factor.

**Q8 (NAT).** A 100 µA, 1 kΩ movement is shunted to read 10 mA. Find the shunt resistance (Ω, 2 decimals).

<details><summary>🔑 Solutions</summary>

**Q1 → (b).** Low shunt resistance (ammeter).

**Q2 → (b).** PMMC torque ∝ I → uniform scale.

**Q3 → (c).** pf < 0.5 (φ > 60°) → one wattmeter negative.

**Q4 → (c).** Open-circuit CT secondary is dangerous.

**Q5 → (c).** MI/EMMC respond to RMS (square-law).

**Q6.**
```
m = V/Vm; Vm = Im·Rm = 0.002×50 = 0.1 V; m = 10/0.1 = 100
Rs = Rm(m−1) = 50×(100−1) = 50×99 = 4950 Ω
```
**Rs = 4950 Ω.**

**Q7.**
```
tanφ = √3(W1−W2)/(W1+W2) = √3(0)/12 = 0 ⇒ φ = 0 ⇒ pf = 1
```
**pf = 1 (unity).**

**Q8.**
```
m = I/Im = 10 mA/0.1 mA = 100
Rsh = Rm/(m−1) = 1000/99 = 10.10 Ω
```
**Rsh = 10.10 Ω.**

</details>

---

## 🔧 Electrical Machines: Transformers IV — Three-Phase Connections, Vector Groups & Parallel Operation

### 📖 Concept Deep Dive

Three single-phase transformers (or one three-phase unit) can be connected **star (Y)** or **delta (Δ)** on each side, giving four basic combinations.

**Line/phase relations.**

```
Star (Y):   VL = √3·Vph ,  IL = Iph
Delta (Δ):  VL = Vph    ,  IL = √3·Iph
```

**The four connections.**
- **Y-Y:** simple, economical for HV; but unstable neutral and third-harmonic issues unless a tertiary delta or neutral path is provided.
- **Δ-Δ:** no third-harmonic problem; allows **open-delta (V-V)** operation if one unit fails.
- **Y-Δ:** common **step-down** (HV star, LV delta); delta stabilises the neutral/harmonics. Introduces a **30° phase shift**.
- **Δ-Y:** common **step-up** (generator side delta, transmission star with neutral). Also a **30° shift**.

**Vector groups (clock notation).** The connection + phase displacement is coded, e.g. **Yd11, Dyn11, Yy0, Dd0**. The **number is the phase displacement in multiples of 30°** (like an hour hand): 0 → 0°, 1 → 30° lag, 11 → 30° lead, 6 → 180°. Star-delta/delta-star always give **odd** numbers (30° multiples); star-star/delta-delta give **even** (0° or 180°).

**Parallel operation conditions.**
1. **Same voltage ratio** (same turns ratio).
2. **Same phase sequence.**
3. **Same phase displacement / vector group** (e.g., can't parallel a Yd1 with a Yd11).
4. **Same per-unit (%) impedance** — ideally; mismatched %Z causes **unequal load sharing**.
5. Correct **polarity**.

Load sharing is **inversely proportional to the per-unit impedances**: `S1/S2 = (Zpu2/Zpu1)`.

**Open-delta (V-V).** With two transformers (one delta leg removed), the capacity is **57.7% (1/√3)** of the full delta bank; the two units are utilised to only **86.6%** of their combined rating.

| Connection | Use | Phase shift |
|---|---|---|
| Y-Y | HV, economical | 0° |
| Δ-Δ | V-V possible | 0° |
| Y-Δ | step-down | 30° |
| Δ-Y | step-up | 30° |

> 💎 **KEY RESULT** — Star: `VL = √3 Vph`; Delta: `IL = √3 Iph`. Y-Δ/Δ-Y give a **30° phase shift**. Parallel needs **same ratio, sequence, vector group, and ideally %Z**; load sharing `S1/S2 = Zpu2/Zpu1`. Open-delta = **57.7%** of full delta.

> 🧠 **MEMORY HOOK** — "**Star Voltage √3, Delta Current √3.**" V-V bank = "**57.7% capacity, 86.6% utilisation.**"

> ⚠️ **TRAP ALERT** — You **cannot parallel** transformers of different vector groups (e.g., Yd1 with Dy11) — the 30° mismatch causes huge circulating currents. Load sharing is **inverse** to per-unit impedance (lower %Z takes more load).

### 📐 Formula Sheet

| Quantity | Formula | Notes |
|---|---|---|
| Star relations | `VL = √3 Vph, IL = Iph` | — |
| Delta relations | `VL = Vph, IL = √3 Iph` | — |
| Phase shift (Y-Δ) | `30°` | vector group odd |
| Load sharing | `S1/S2 = Zpu2/Zpu1` | inverse to %Z |
| Open-delta capacity | `= (1/√3)·delta = 57.7%` | V-V |
| V-V utilisation | `86.6%` | of two units |

### 🧮 Solved Examples

**Example 1 — Connection ratio.** Three single-phase transformers each rated 2000/200 V are connected **Δ (primary) – Y (secondary)**. Find the line voltages on each side.

```
Primary Δ: VL(pri) = Vph = 2000 V
Secondary Y: VL(sec) = √3·Vph = √3 × 200 = 346.4 V
Overall line ratio = 2000/346.4 = 5.77
```

**Primary 2000 V line, secondary 346.4 V line (step-up in line ratio via Y).** ✔

**Example 2 — Load sharing.** Two transformers in parallel: T1 has 4% impedance, T2 has 6% (same rating base). Find the fraction of load each carries.

```
Load ∝ 1/Zpu:  share1 : share2 = (1/4) : (1/6) = 6 : 4 = 3 : 2
T1 carries 3/5 = 60%,  T2 carries 2/5 = 40%
```

**T1 = 60%, T2 = 40%** (the lower-impedance unit takes more). ✔

### ⚠️ Common Traps
1. **Star: √3 on voltage; Delta: √3 on current** — don't swap.
2. **Y-Δ / Δ-Y introduce a 30° phase shift**; Y-Y/Δ-Δ do not.
3. **Vector-group match is mandatory** for paralleling.
4. **Load sharing is inverse to %Z** (lower impedance → more load).
5. **Open-delta = 57.7% capacity** (not 66.7%); utilisation 86.6%.
6. **Δ winding suppresses third harmonics** — a key reason Y-Y is avoided without a delta tertiary.

### 📝 Test (8 questions)

**Q1 (MCQ).** In a star connection, the line voltage is:
(a) equal to phase voltage  (b) √3 times phase voltage  (c) phase/√3  (d) 3 times phase voltage

**Q2 (MCQ).** The phase shift introduced by a Y-Δ transformer is:
(a) 0°  (b) 30°  (c) 60°  (d) 90°

**Q3 (MCQ).** Two transformers can be paralleled only if they have the same:
(a) kVA rating  (b) vector group (phase displacement)  (c) core material  (d) weight

**Q4 (MCQ).** In parallel operation, load is shared:
(a) equally always  (b) in proportion to %Z  (c) inversely to %Z  (d) by rated current only

**Q5 (MCQ).** An open-delta (V-V) bank delivers what fraction of the full delta rating?
(a) 50%  (b) 57.7%  (c) 66.7%  (d) 86.6%

**Q6 (NAT).** A delta winding has a line current of 100 A. Find the phase current (A, 1 decimal).

**Q7 (NAT).** Two parallel transformers have 5% and 10% impedance (same base). Find the % of total load carried by the 5% unit.

**Q8 (NAT).** A star secondary has a phase voltage of 240 V. Find the line voltage (V, 1 decimal).

<details><summary>🔑 Solutions</summary>

**Q1 → (b).** `VL = √3·Vph` (star).

**Q2 → (b).** 30° phase shift.

**Q3 → (b).** Same vector group / phase displacement.

**Q4 → (c).** Inversely to per-unit impedance.

**Q5 → (b).** 57.7% (1/√3).

**Q6.**
```
Delta: IL = √3·Iph ⇒ Iph = IL/√3 = 100/1.732 = 57.7 A
```
**Iph ≈ 57.7 A.**

**Q7.**
```
share ∝ 1/Z: (1/5):(1/10) = 2:1 ⇒ 5% unit = 2/3 = 66.7%
```
**66.7%.**

**Q8.**
```
VL = √3 × 240 = 415.7 V
```
**VL ≈ 415.7 V.**

</details>

---

## 🔧 Power Electronics: Thyristor II — Turn-On, Gate Characteristics & dv/dt–di/dt Protection

### 📖 Concept Deep Dive

Having covered SCR structure, we now examine **how to turn it on safely** and **protect it** from false triggering and damage.

**Turn-on methods.**
- **Gate triggering** — the normal, controlled method: a gate pulse injects current to initiate regeneration.
- **Forward-voltage triggering** — exceeding the forward breakover voltage `VBO` turns it on, but is **not recommended** (stresses the device).
- **dv/dt triggering** — a fast-rising anode voltage injects a capacitive current `i = Cj·(dv/dt)` through the centre junction, which can **falsely turn on** the SCR. Undesirable.
- **Thermal and light (LASCR)** triggering — heat or photons generate carriers.

**Gate characteristics.** The gate V-I curve lies between a **minimum (Vgt, Igt)** needed to trigger and **maximum limits** (gate voltage, current, and **average power dissipation Pgav**). A valid gate drive must sit in the region bounded by these, below the **gate power-dissipation hyperbola** `Vg·Ig ≤ Pgmax`. The **gate source load line** (Es, Rs) must intersect this region. A **steep, high gate current** (above Igt) gives fast, reliable turn-on.

**di/dt protection.** At turn-on, conduction **spreads slowly** from the gate region across the cathode; if the anode current rises too fast, a **local hot spot** forms and damages the device. Protect with a **series inductor L** that limits:

```
di/dt = Vs / L
```

**dv/dt protection.** A fast-rising forward voltage can falsely trigger the SCR via junction capacitance. Protect with a **snubber circuit** — an **RC in series, placed across the SCR**. The capacitor absorbs the sudden voltage step (limiting dv/dt), and the resistor **limits the capacitor's discharge current** through the SCR at turn-on:

```
Capacitive current:  i = Cj·(dv/dt)
Snubber limits dv/dt;  Rs limits turn-on discharge current  ≈ Vs/Rs
```

**Design idea:** choose `Cs` to hold dv/dt below the device rating, and `Rs` large enough to keep the snubber-discharge current within the SCR's di/dt and peak-current limits, but small enough to damp effectively.

| Protection | Threat | Remedy |
|---|---|---|
| di/dt | hot spot at turn-on | **series inductor L** (`di/dt = Vs/L`) |
| dv/dt | false triggering | **RC snubber across SCR** |
| Gate drive | unreliable turn-on | Igt < Ig < limits, Pg ≤ Pgmax |

> 💎 **KEY RESULT** — **di/dt** limited by a **series inductor** (`di/dt = Vs/L`); **dv/dt** limited by an **RC snubber across the SCR**, with `Rs` limiting the turn-on discharge current `≈ Vs/Rs`. Capacitive current `i = Cj·(dv/dt)`.

> 🧠 **MEMORY HOOK** — "**di/dt → inductor in Series (both have 'i'... current); dv/dt → Capacitor snubber (both 'v'/'C').**" Gate: trigger above Igt, stay under Pgmax.

> ⚠️ **TRAP ALERT** — **dv/dt triggering is unwanted** (false turn-on) — the snubber prevents it. The **series L protects di/dt**, the **RC snubber protects dv/dt** — don't swap which element does which.

### 📐 Formula Sheet

| Quantity | Formula | Notes |
|---|---|---|
| Capacitive current | `i = Cj·(dv/dt)` | false-trigger mechanism |
| di/dt (series L) | `di/dt = Vs/L` | limit at turn-on |
| Snubber discharge current | `≈ Vs/Rs` | Rs limits it |
| Gate power limit | `Vg·Ig ≤ Pgmax` | gate SOA |
| Turn-on | gate current > Igt | normal method |

### 🧮 Solved Examples

**Example 1 — di/dt limiting inductor.** An SCR circuit has a supply `Vs = 240 V` and the device's rated `di/dt = 40 A/µs`. Find the minimum series inductance.

```
di/dt = Vs/L  ⇒  L = Vs/(di/dt) = 240/(40×10⁶)
  = 240/4×10⁷ = 6×10⁻⁶ H = 6 µH
```

**L(min) = 6 µH.** ✔

**Example 2 — dv/dt false trigger.** The centre-junction capacitance of an SCR is `Cj = 20 pF` and the charging current needed to falsely trigger is `1 mA`. Find the dv/dt that would trigger it.

```
i = Cj·(dv/dt) ⇒ dv/dt = i/Cj = 1×10⁻³ / 20×10⁻¹²
  = 5×10⁷ V/s = 50 V/µs
```

**dv/dt = 50 V/µs** would falsely trigger it (so the rated dv/dt must be kept below this via a snubber). ✔

### ⚠️ Common Traps
1. **dv/dt triggering is a fault** (false turn-on), not a control method.
2. **Series inductor → di/dt protection; RC snubber → dv/dt protection.**
3. **Snubber resistor limits the discharge current** `Vs/Rs` at turn-on (too small Rs → di/dt violation).
4. **Gate drive must stay under Pgmax** (power hyperbola) and above Igt.
5. **Forward-breakover turn-on stresses the device** — avoid as a normal method.
6. **Capacitive current `i = Cj·dv/dt`** is what triggers falsely — proportional to dv/dt.

### 📝 Test (8 questions)

**Q1 (MCQ).** The normal, recommended method to turn on an SCR is:
(a) forward breakover  (b) gate triggering  (c) dv/dt triggering  (d) thermal

**Q2 (MCQ).** A series inductor in an SCR circuit protects against:
(a) high dv/dt  (b) high di/dt  (c) reverse voltage  (d) gate overcurrent

**Q3 (MCQ).** An RC snubber across an SCR protects against:
(a) high di/dt  (b) high dv/dt  (c) overcurrent  (d) undervoltage

**Q4 (MCQ).** The current that falsely triggers an SCR under high dv/dt is:
(a) `Cj·dv/dt`  (b) `L·di/dt`  (c) `V/R`  (d) `Cj/dv`

**Q5 (MCQ).** The snubber resistor's main role at turn-on is to:
(a) increase dv/dt  (b) limit capacitor discharge current  (c) raise gate current  (d) block reverse voltage

**Q6 (NAT).** An SCR with rated di/dt = 50 A/µs operates at Vs = 300 V. Find the minimum series inductance (µH).

**Q7 (NAT).** A junction capacitance Cj = 25 pF triggers at a charging current of 2 mA. Find the triggering dv/dt in V/µs.

**Q8 (NAT).** A snubber across an SCR has Rs = 20 Ω and Vs = 200 V. Find the peak snubber-discharge current through the SCR at turn-on (A).

<details><summary>🔑 Solutions</summary>

**Q1 → (b).** Gate triggering is the normal method.

**Q2 → (b).** Series L limits di/dt.

**Q3 → (b).** RC snubber limits dv/dt.

**Q4 → (a).** `i = Cj·dv/dt`.

**Q5 → (b).** Rs limits the capacitor discharge current.

**Q6.**
```
L = Vs/(di/dt) = 300/(50×10⁶) = 6×10⁻⁶ H = 6 µH
```
**L = 6 µH.**

**Q7.**
```
dv/dt = i/Cj = 2×10⁻³/25×10⁻¹² = 8×10⁷ V/s = 80 V/µs
```
**dv/dt = 80 V/µs.**

**Q8.**
```
i = Vs/Rs = 200/20 = 10 A
```
**i = 10 A.**

</details>

---

## 📊 Progress

```
Measuring Instruments  [████████████████████]  Round 4 COMPLETE · 22/22 (Measurements revision) ✅
Electrical Machines    [████░░░░░░░░░░░░░░░░░]  Round 5 · topic  4/20 (Transformers IV)
Power Electronics       [████░░░░░░░░░░░░░░░░░]  Round 5 · topic  4/20 (SCR II)
```

- **Section A (Measurements):** **round 4 complete** — next sitting restarts the Measurements list for round 5. ✅
- **Section B (Machines):** round 5 through three-phase transformer connections. 🔄
- **Section C (Power Electronics):** round 5 into SCR triggering/protection. 🔄

> 🎯 **Today's three one-liners:** (1) **Shunt Rm/(m−1), multiplier Rm(m−1); two-wattmeter tanφ=√3(W1−W2)/(W1+W2).** (2) **Star √3 voltage, Delta √3 current; Y-Δ=30° shift; parallel needs same vector group, load ∝ 1/%Z.** (3) **di/dt → series L (Vs/L); dv/dt → RC snubber (i=Cj·dv/dt).**

> 🏁 **Milestone:** Measurements (Section A) completes its 4th revision cycle today — all three tech sections have now had a full pass, and Measurements rejoins Machines & Power Electronics in round 5 next sitting.

*Correctness over length — verify any value marked "verify" before the exam.*
