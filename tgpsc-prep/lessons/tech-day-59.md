# ⚡ GATE Technical Revision — Day 59 (2026-09-18)

*Round-3 pass 17 — AC bridges II, the synchronous motor, and converter waveform (Fourier) analysis. Closing on round-3 completion.*

📅 Tech Day 59 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics · 🔁 Round-3 pass 17

> 🧠 **MEMORY HOOK** — Today: **Schering/De Sauty/Wien bridges** (capacitance, tan δ, frequency), the **synchronous motor** (V-curves, synchronous condenser), and **Fourier analysis** of converter outputs (RMS, harmonic factor, THD). Three exam staples.

---

## 🔧 Measuring Instruments: AC Bridges II — Schering, De Sauty, Wien

### 📖 Concept Deep Dive

These AC bridges measure **capacitance, dielectric loss, and frequency**.

**Schering bridge** — the standard for **capacitance and dielectric loss (tan δ)**, especially for **high-voltage insulation testing**. It balances an unknown capacitor (with its loss) against a standard loss-free capacitor. Balance results:

```
Cx = C2·(R4/R3)       (unknown capacitance)
Dissipation factor  tan δ = ω·C4·R4   (D = tan δ, the loss tangent)
```

The **dissipation factor (tan δ)** directly measures dielectric loss — crucial for insulation/cable/capacitor quality. Schering bridges are used at high voltage with a **Wagner earth** to eliminate stray-capacitance errors.

**De Sauty bridge** — the simplest **capacitance comparison** bridge (two capacitors, two resistors):

```
C1/C2 = R4/R3   ⇒   Cx = C2·(R3/R4)  (or as arranged)
```

Accurate only for **loss-free (ideal) capacitors**; a modified De Sauty adds resistors to handle lossy capacitors.

**Wien bridge** — measures **frequency** (and used in Wien-bridge oscillators). At balance, with the standard RC network:

```
f = 1/(2π·√(R1·R2·C1·C2))    ;  for R1=R2=R, C1=C2=C:  f = 1/(2π·R·C)
Also a resistance-ratio condition:  R3/R4 = R1/R2 + C2/C1  (component balance)
```

The Wien bridge is **frequency-selective** (balances at one frequency), hence its use in oscillators and distortion/frequency meters.

**Wagner earthing device** — an auxiliary arm that connects the detector's stray capacitance to earth at the balance potential, **eliminating earth-capacitance errors** in sensitive/high-frequency AC bridges.

> 💎 **KEY RESULT** — **Schering:** `Cx = C2·R4/R3`, **tan δ = ωC4R4** (dielectric loss, HV insulation). **De Sauty:** capacitance comparison (loss-free). **Wien:** frequency, `f = 1/(2πRC)` (for equal RC). **Wagner earth** removes stray-capacitance error.

> ⚠️ **TRAP ALERT** — **Schering → tan δ (dissipation factor)** for insulation; **Wien → frequency** (`f = 1/2πRC`); **De Sauty → capacitance comparison** (loss-free). **Wagner earthing** eliminates **stray/earth capacitance** errors (not a measurement bridge itself).

### 📐 Formula Sheet

| Bridge | Balance / result |
|---|---|
| Schering | `Cx = C2·R4/R3` ; `tan δ = ωC4R4` |
| De Sauty | `Cx = C2·(R3/R4)` (loss-free) |
| Wien (freq) | `f = 1/(2π√(R1R2C1C2))` ; equal RC → `1/(2πRC)` |
| Dissipation factor | `D = tan δ = ωCR` |
| Wagner earth | eliminates stray-capacitance error |

### 🧮 Solved Examples

**Example 1 — Schering tan δ.**
A Schering bridge at `ω = 314 rad/s` (50 Hz) balances with `C4 = 0.5 µF`, `R4 = 3183 Ω`. Dissipation factor?

- `tan δ = ω·C4·R4 = 314 × 0.5×10⁻⁶ × 3183 = 314 × 1.5915×10⁻³ = 0.4997 ≈ 0.5`.
- (A high tan δ would indicate a lossy/degraded dielectric.)

**Example 2 — Wien frequency.**
A Wien bridge has `R = 10 kΩ`, `C = 0.01 µF` (equal arms). Frequency at balance?

- `f = 1/(2πRC) = 1/(2π × 10⁴ × 0.01×10⁻⁶) = 1/(2π × 10⁴ × 10⁻⁸) = 1/(2π × 10⁻⁴)`.
- `= 1/(6.283×10⁻⁴) = 1591.5 Hz ≈ 1.59 kHz`.

> 🧠 **MEMORY HOOK** — "**Schering = tan δ (insulation), Wien = frequency, De Sauty = capacitance.**" Wagner earth kills stray capacitance.

### ⚠️ Common Traps

1. Using Schering for frequency (it's tan δ/capacitance).
2. Using Wien for capacitance (it's **frequency**).
3. Applying De Sauty to lossy capacitors (needs modification).
4. Forgetting the Wagner earth's role (stray-capacitance elimination).
5. Wrong Wien formula (`f = 1/2πRC` for equal RC).
6. Confusing dissipation factor with quality factor.

### 📝 Test — AC Bridges II (8 Q)

1. The Schering bridge measures: (a) frequency (b) capacitance & tan δ (c) inductance (d) resistance only.
2. Dissipation factor tan δ equals: (a) ωCR (b) 1/ωCR (c) ωL/R (d) R/ωC.
3. The Wien bridge measures: (a) capacitance (b) frequency (c) inductance (d) tan δ.
4. For equal RC arms, Wien frequency is: (a) 1/(2πRC) (b) 2πRC (c) RC (d) 1/RC.
5. The Wagner earthing device eliminates: (a) temperature error (b) stray/earth-capacitance error (c) frequency drift (d) friction.
6. **(NAT)** Schering: ω = 314, C4 = 1 µF, R4 = 1000 Ω. tan δ?
7. **(NAT)** Schering: C2 = 100 pF, R4 = 500 Ω, R3 = 1000 Ω. Cx (pF)?
8. **(NAT)** Wien: R = 5 kΩ, C = 0.02 µF (equal). Frequency (Hz, whole number)?

<details><summary>🔑 Solutions</summary>

**Q1 — (b) capacitance & tan δ.**

**Q2 — (a) ωCR.**

**Q3 — (b) frequency.**

**Q4 — (a) 1/(2πRC).**

**Q5 — (b) stray-capacitance error.**

**Q6.** `tan δ = 314 × 1×10⁻⁶ × 1000 = 0.314`.

**Q7.** `Cx = C2·R4/R3 = 100 × 500/1000 = 50 pF`.

**Q8.** `f = 1/(2π×5000×0.02×10⁻⁶) = 1/(2π×10⁻⁴) = 1591 Hz`.

</details>

---

## 🔧 Electrical Machines: Synchronous Motor — V-Curves, Hunting & Synchronous Condenser

### 📖 Concept Deep Dive

A **synchronous motor** runs at exactly **synchronous speed** (`Ns = 120f/P`) regardless of load (up to pull-out torque). Its defining feature: **power factor is controllable** via field excitation.

**Not self-starting.** At standstill the rotor cannot follow the rotating field (inertia) → zero average starting torque. Started by: **damper (amortisseur) windings** (runs up as an induction motor, then pulls into synchronism), a **pony motor**, or a **VFD**.

**V-curves & inverted-V curves.** At constant load, plotting **armature current `Ia` vs field current `If`**:
- The **V-curve** is U/V-shaped: `Ia` is **minimum at unity pf** (the bottom of the V), rising for both under- and over-excitation.
- **Under-excited** (low If) → motor draws **lagging** current (inductive).
- **Over-excited** (high If) → motor draws **leading** current (capacitive).
- The **inverted-V curve** plots **power factor vs If** (peaks at unity pf).

**Synchronous condenser.** An **over-excited synchronous motor running on no load** acts as a **capacitor**, supplying **leading reactive power (VARs)** to the grid — used for **power-factor correction and voltage support**. This is a major application.

**Hunting (oscillation).** A sudden load change makes the rotor **oscillate about its new equilibrium (power) angle** before settling — "hunting." It can build up dangerously at resonance. **Damper windings** suppress hunting (they develop an induction torque opposing the oscillation).

**Power:** `P = (Ef·V/Xs)·sinδ`; the motor operates at a **power angle δ** lagging the field; pull-out (max) torque at δ = 90°.

> 💎 **KEY RESULT** — Synchronous motor: constant speed, **pf controllable** (under-excited = lagging, **over-excited = leading**). **V-curve:** Ia min at unity pf. **Synchronous condenser** = over-excited motor on no load → supplies **leading VARs** (pf correction). **Hunting** damped by **damper windings**. Not self-starting.

> ⚠️ **TRAP ALERT** — **Over-excited → leading pf** (acts as a capacitor / synchronous condenser); **under-excited → lagging pf**. V-curve minimum `Ia` is at **unity pf**. The motor is **not self-starting** (damper windings start it and damp hunting).

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Speed | `Ns = 120f/P` (constant) |
| Power | `P = (Ef·V/Xs)·sinδ` |
| V-curve | `Ia` vs `If`; min at unity pf |
| Over/under excitation | over → leading pf; under → lagging pf |
| Synchronous condenser | over-excited, no load → leading VARs |
| Hunting damping | damper (amortisseur) windings |

### 🧮 Solved Examples

**Example 1 — synchronous condenser role.**
A factory has a lagging pf. How does an over-excited synchronous motor help?

- Over-excited → it draws **leading** current → supplies **leading reactive power** → **cancels** the lagging VARs of other loads → **improves the overall pf** (acts as a synchronous condenser). It can also drive a mechanical load simultaneously.

**Example 2 — power angle.**
A synchronous motor: `Ef = 1.1 pu`, `V = 1.0 pu`, `Xs = 1.0 pu`, delivering `P = 0.55 pu`. Power angle δ?

- `P = (Ef·V/Xs)·sinδ ⇒ sinδ = P·Xs/(Ef·V) = 0.55×1/(1.1×1) = 0.5 ⇒ δ = 30°`.

> 🧠 **MEMORY HOOK** — "**Over-excited = leading (condenser); under-excited = lagging.**" V-curve bottom = unity pf. Damper windings **start** it and **damp hunting**.

### ⚠️ Common Traps

1. Swapping over-excited (leading) and under-excited (lagging).
2. Thinking a synchronous motor self-starts (needs damper/pony/VFD).
3. Placing the V-curve minimum away from unity pf.
4. Forgetting the synchronous condenser is **over-excited, no-load**.
5. Not crediting damper windings for **hunting** suppression.
6. Assuming speed varies with load (it's constant to pull-out).

### 📝 Test — Synchronous Motor (8 Q)

1. A synchronous motor runs at: (a) below Ns (b) synchronous speed (c) above Ns (d) variable speed.
2. An over-excited synchronous motor draws: (a) lagging current (b) leading current (c) unity pf always (d) no current.
3. The V-curve plots Ia vs: (a) load (b) field current If (c) speed (d) voltage.
4. Minimum armature current on the V-curve is at: (a) lagging pf (b) unity pf (c) leading pf (d) zero pf.
5. A synchronous condenser is: (a) an over-excited motor on no load (b) a capacitor bank (c) an induction motor (d) a transformer.
6. **(NAT)** Synchronous motor: Ef = 1.2, V = 1.0, Xs = 1.0 pu, δ = 30°. Power (pu)?
7. **(NAT)** For P = 0.6 pu, Ef = 1.0, V = 1.0, Xs = 0.8 pu. sinδ?
8. **(NAT)** 6-pole, 50 Hz synchronous motor speed (rpm)?

<details><summary>🔑 Solutions</summary>

**Q1 — (b) synchronous speed.**

**Q2 — (b) leading current.**

**Q3 — (b) field current.**

**Q4 — (b) unity pf.**

**Q5 — (a) over-excited motor on no load.**

**Q6.** `P = (1.2×1/1)×sin30° = 1.2×0.5 = 0.6 pu`.

**Q7.** `sinδ = P·Xs/(Ef·V) = 0.6×0.8/(1×1) = 0.48`.

**Q8.** `Ns = 120×50/6 = 1000 rpm`.

</details>

---

## 🔧 Power Electronics: Fourier & Waveform Analysis of Converter Outputs

### 📖 Concept Deep Dive

Converter outputs are **non-sinusoidal**; Fourier analysis quantifies their harmonic content — essential for filter design and quality metrics.

**Fourier series.** Any periodic waveform: `f(t) = a0 + Σ[an·cos(nωt) + bn·sin(nωt)]`. Symmetry simplifies it:
- **Odd (half-wave) symmetry** → only **odd harmonics** (square wave, symmetric inverter output).
- **Even function** → cosine terms only; **odd function** → sine terms only.
- **Half-wave symmetry** [f(t+T/2) = −f(t)] → **no even harmonics** and no DC.

**RMS & average.** For a waveform with fundamental and harmonics:

```
Vrms = √(V0² + V1² + V2² + … )   (RMS of DC + each harmonic RMS)
V(rms of harmonics) = √(Vrms² − V1rms²)   (excluding fundamental)
```

**Quality metrics:**

```
Harmonic Factor (of nth) HFn = Vn/V1        (each harmonic relative to fundamental)
Total Harmonic Distortion  THD = √(Σ Vn²)/V1 = √((Vrms² − V1²))/V1   (n ≥ 2)
Distortion Factor DF = V1(rms)/V(rms)       (= 1/√(1+THD²))
```

- **Square wave:** odd harmonics `∝ 1/n`; THD ≈ **48.3%**.
- **Ripple factor** (for rectified DC) `RF = Vac/Vdc = √((Vrms/Vdc)² − 1)`.
- **Crest (peak) factor** = `Vpeak/Vrms`; **form factor** = `Vrms/Vavg`.

**Application to converters.** Controlled-rectifier and inverter outputs are analysed for average (DC component), fundamental (for AC), and harmonic amplitudes; the **input current** harmonics determine the **input power factor** (`pf = DF × displacement factor`). PWM shifts harmonics to high order (around the carrier), reducing low-order THD.

> 💎 **KEY RESULT** — `Vrms = √(ΣVn²)`; **THD = √(Vrms² − V1²)/V1**; **HFn = Vn/V1**; **DF = V1/Vrms = 1/√(1+THD²)**. Square wave: odd harmonics 1/n, THD ≈ 48.3%. Half-wave symmetry → no even harmonics.

> ⚠️ **TRAP ALERT** — **THD** uses **harmonics only** (n ≥ 2) over the fundamental; **distortion factor DF = V1/Vrms** (≤ 1). Input **pf = distortion factor × displacement factor**. Half-wave symmetry eliminates **even** harmonics.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| RMS (harmonics) | `Vrms = √(V0² + V1² + V2² + …)` |
| THD | `√(Vrms² − V1²)/V1` |
| Harmonic factor (nth) | `HFn = Vn/V1` |
| Distortion factor | `DF = V1/Vrms = 1/√(1+THD²)` |
| Input pf | `pf = DF × cosφ1` |
| Ripple factor (rectifier) | `RF = √((Vrms/Vdc)² − 1)` |

### 🧮 Solved Examples

**Example 1 — THD from RMS & fundamental.**
An inverter output has total RMS `V = 100 V` and fundamental RMS `V1 = 90 V`. Find THD and distortion factor.

- `THD = √(Vrms² − V1²)/V1 = √(100² − 90²)/90 = √(10000 − 8100)/90 = √1900/90 = 43.59/90 = 0.484 = 48.4%`.
- `DF = V1/Vrms = 90/100 = 0.90`.

**Example 2 — harmonic factor.**
A square-wave output has fundamental (peak) `V1 = 100 V` and 3rd harmonic `V3 = 33.3 V` (peak). Harmonic factor of the 3rd?

- `HF3 = V3/V1 = 33.3/100 = 0.333` (= 1/3, as expected for a square wave, since amplitude ∝ 1/n).

> 🧠 **MEMORY HOOK** — "**THD = harmonics/fundamental; DF = fundamental/total.**" Square wave: odd only, `1/n`, THD ~48%. Half-wave symmetry kills even harmonics.

### ⚠️ Common Traps

1. Including the fundamental in the THD numerator (it's **harmonics only**).
2. Confusing THD with distortion factor (DF = V1/Vrms).
3. Forgetting half-wave symmetry removes **even** harmonics.
4. Mixing harmonic factor (Vn/V1) with THD.
5. Omitting the displacement factor in input pf.
6. Using peak instead of RMS inconsistently.

### 📝 Test — Waveform Analysis (8 Q)

1. THD is defined as: (a) V1/Vrms (b) √(Vrms²−V1²)/V1 (c) Vrms/V1 (d) V1·Vrms.
2. The distortion factor equals: (a) V1/Vrms (b) Vrms/V1 (c) THD (d) 1.
3. A square wave contains: (a) even harmonics (b) odd harmonics only (c) all harmonics (d) none.
4. Half-wave symmetry eliminates: (a) odd harmonics (b) even harmonics (c) the fundamental (d) DC only... and even harmonics.
5. Input power factor = displacement factor × : (a) form factor (b) distortion factor (c) crest factor (d) ripple factor.
6. **(NAT)** Vrms = 120 V, V1 = 100 V. THD (%, 1 dp)?
7. **(NAT)** For Q6, distortion factor (3 dp)?
8. **(NAT)** Square wave V1(peak) = 200 V; 5th harmonic peak (V, 1 dp)?

<details><summary>🔑 Solutions</summary>

**Q1 — (b).** `√(Vrms²−V1²)/V1`.

**Q2 — (a) V1/Vrms.**

**Q3 — (b) odd harmonics only.**

**Q4 — (b) even harmonics.**

**Q5 — (b) distortion factor.**

**Q6.** `THD = √(120²−100²)/100 = √(14400−10000)/100 = √4400/100 = 66.33/100 = 66.3%`.

**Q7.** `DF = 100/120 = 0.833`.

**Q8.** square wave amplitude ∝ 1/n: `V5 = 200/5 = 40.0 V`.

</details>

---

> 🧠 **DAY-59 WRAP (Round-3 pass 17)** — **AC bridges:** Schering (tan δ = ωC4R4, insulation), Wien (f = 1/2πRC), De Sauty (capacitance), Wagner earth. **Synchronous motor:** constant speed, over-excited = leading (synchronous condenser), V-curve min at unity pf, damper windings start & damp hunting. **Waveform:** THD = √(Vrms²−V1²)/V1, DF = V1/Vrms, square wave odd 1/n. ⚡

**🔁 Round-3 progress:** Measurements ▓▓▓▓▓▓▓▓▓▓ · Machines ▓▓▓▓▓▓▓▓▓▓ · Power Electronics ▓▓▓▓▓▓▓▓▓▓ — round-3 almost complete (17/~21 revised; capstones remain). 🎓 Power Systems joins as a 4th subject once the reference PDFs arrive.
