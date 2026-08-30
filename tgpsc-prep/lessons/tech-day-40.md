# ⚡ GATE Technical Revision — Day 40 (2026-08-29)

*Three subjects, one sitting — digital voltmeters, the synchronous motor, and Fourier analysis. Day 40 milestone.*

📅 Tech Day 40 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics · 🏁 Day 40

> 🧠 **MEMORY HOOK** — Day 40's trio is **"digitise, over-excite, and decompose"**: the **DVM** (dual-slope/SAR), the **synchronous motor's V-curves & condenser**, and **Fourier/THD** analysis of converter outputs.

---

## 🔧 Measuring Instruments: DVM & Digital Instruments

### 📖 Concept Deep Dive

A **Digital Voltmeter (DVM)** converts an analog voltage to a digital display via an **Analog-to-Digital Converter (ADC)**. The ADC type sets the speed-accuracy trade-off:

| Type | Principle | Feature |
|---|---|---|
| **Ramp** | A linear ramp is compared with the input; clock pulses counted until they match | Simple, slow |
| **Dual-slope (integrating)** | Integrate input for a fixed time, then integrate a reference back to zero; count ∝ Vin | **Excellent noise rejection & accuracy** (used in DMMs), slow |
| **Successive approximation (SAR)** | Binary search: a DAC output is compared to the input, setting bits MSB→LSB | **Fast** (n comparisons for n bits) |
| **Flash/parallel** | Many comparators in parallel | **Fastest**, costly |

**Dual-slope** relation (input-integration count `N` vs full-scale reference count `Nfs`):

```
Vin = Vref × (N / Nfs)
```

**Resolution:** for an **n-bit** ADC, there are `2ⁿ` levels, so `Resolution = Full-Scale / 2ⁿ`. For a **display digit** count (e.g. **3½-digit → 0-1999**, i.e. 2000 counts): `Resolution = Range / 2000`.

> 💎 **KEY RESULT** — The **dual-slope** ADC is prized for **noise rejection** (it averages over a fixed integration time, rejecting mains hum) and **immunity to component drift** (the same integrator is used for both slopes). The **SAR** ADC is the **fast** general-purpose choice. Resolution `= FS/2ⁿ`.

> ⚠️ **TRAP ALERT** — **Dual-slope = accurate/slow** (DMMs); **SAR = fast**; **flash = fastest**. A **3½-digit** display reads up to **1999** (2000 counts), not 999. Resolution improves with **more bits/digits**, not with range.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Dual-slope | `Vin = Vref × (N/Nfs)` |
| Resolution (n-bit) | `= Full-Scale / 2ⁿ` |
| 3½-digit max count | `1999` (2000 counts) |
| SAR conversions | `n` steps for `n` bits |

### 🧮 Solved Examples

**Example 1 — DVM resolution.** A **3½-digit** DVM is on the **2 V** range. Find its resolution.

```
3½ digit ⇒ max count 1999 (2000 counts)
Resolution = Range / 2000 = 2 V / 2000 = 1 mV
```

**Example 2 — Dual-slope reading.** A dual-slope ADC gives a count `N = 8000` for the unknown, where full-scale count `Nfs = 10000` corresponds to `Vref = 10 V`. Find `Vin`.

```
Vin = Vref × (N/Nfs) = 10 × (8000/10000) = 8 V
```

### ⚠️ Common Traps

1. Calling dual-slope **fast** — it's **slow but accurate**.
2. Thinking a 3½-digit meter reads to 999 — it reads to **1999**.
3. Forgetting dual-slope's **mains-noise rejection**.
4. Using SAR where high noise-immunity is needed (use dual-slope).
5. Computing resolution from range alone (needs **bits/counts**).
6. Confusing ramp (single-slope) with dual-slope.

### 📝 Test — Measuring Instruments (8 Q)

**Q1 (MCQ).** Which DVM type has the best noise rejection?
(a) ramp (b) dual-slope (c) SAR (d) flash

**Q2 (MCQ).** The fastest ADC type is:
(a) dual-slope (b) ramp (c) flash/parallel (d) SAR

**Q3 (MCQ).** A 3½-digit DVM reads a maximum count of:
(a) 999 (b) 1999 (c) 9999 (d) 2000

**Q4 (MCQ).** Dual-slope ADCs are commonly used in:
(a) DMMs (b) oscilloscopes (c) power meters (d) CROs

**Q5 (MCQ).** An n-bit ADC has a resolution of:
(a) FS×2ⁿ (b) FS/2ⁿ (c) 2ⁿ/FS (d) FS/n

**Q6 (NAT).** An 8-bit ADC has a 5.12 V full scale. Find its resolution (mV).

**Q7 (NAT).** A dual-slope ADC: N = 6000, Nfs = 12000, Vref = 12 V. Find Vin (V).

**Q8 (NAT).** A 3½-digit DVM on the 20 V range. Find its resolution (mV).

<details><summary>🔑 Solutions</summary>

**Q1 — (b) dual-slope.**

**Q2 — (c) flash/parallel.**

**Q3 — (b) 1999.**

**Q4 — (a) DMMs.**

**Q5 — (b) FS/2ⁿ.**

**Q6.** `Resolution = 5.12/2⁸ = 5.12/256 = 0.02 V = 20 mV`.

**Q7.** `Vin = 12 × (6000/12000) = 6 V`.

**Q8.** `Resolution = 20/2000 = 0.01 V = 10 mV`.

</details>

---

## 🔧 Electrical Machines: The Synchronous Motor — V-Curves, Hunting & Synchronous Condenser

### 📖 Concept Deep Dive

A **synchronous motor** runs at exactly the **synchronous speed** `Ns = 120·f/P` regardless of load. It has a **DC-excited rotor** locked to the stator's rotating field. It is **not self-starting** — it is started as an **induction motor** (using **damper/amortisseur windings**) and then pulled into synchronism.

**Effect of excitation (at constant load) — V-curves:** a plot of **armature current `Ia` vs field current `If`** is **U-shaped** (a "V-curve"):

| Excitation | Power factor | Armature current |
|---|---|---|
| **Under-excited** | **Lagging** (inductive) | High |
| **Normal** | **Unity** | **Minimum** |
| **Over-excited** | **Leading** (capacitive) | High |

> 💎 **KEY RESULT** — On the **V-curve**, `Ia` is **minimum at unity pf** (normal excitation). **Over-excitation ⇒ leading pf**; **under-excitation ⇒ lagging pf**. A synchronous motor **over-excited at no load** acts as a **synchronous condenser**, drawing **leading current** to improve system power factor and support voltage.

**Synchronous condenser:** an over-excited synchronous motor (running light) behaves like a **variable capacitor** — used for **power-factor correction** and **voltage regulation** in power systems.

**Hunting:** on a sudden load change, the rotor **oscillates about its equilibrium torque angle** before settling (overshoot). It is worsened by periodic/pulsating loads and **damped by amortisseur (damper) windings** and rotor inertia (flywheel).

> 🧠 **MEMORY HOOK** — "**Under = lag, Normal = unity (min Ia), Over = lead**"; over-excited at no load = **synchronous condenser**. **Damper windings** start the motor **and** damp hunting.

> ⚠️ **TRAP ALERT** — A synchronous motor is **not self-starting** (needs damper windings/pony motor). **Over-excited ⇒ leading pf** (capacitive) — the basis of the synchronous condenser. **Hunting** is oscillation of the **torque/load angle**, damped by amortisseur windings.

### 📐 Formula Sheet

| Quantity | Formula / fact |
|---|---|
| Speed | `Ns = 120·f/P` (constant) |
| V-curve minimum | at **unity pf** (normal excitation) |
| Over-excited | leading pf (capacitive) |
| Under-excited | lagging pf (inductive) |
| Synchronous condenser | over-excited, light load ⇒ pf correction |

### 🧮 Solved Examples

**Example 1 — Speed & excitation.** A 3-φ, `6-pole`, `50 Hz` synchronous motor drives a varying load. Find its speed, and state the pf when over-excited.

```
Ns = 120×50/6 = 1000 rpm (constant, independent of load)
Over-excited ⇒ LEADING power factor (acts capacitive)
```

**Example 2 — Synchronous condenser.** Why is an over-excited synchronous motor at no load used for power-factor correction?

```
Over-excitation ⇒ the motor draws LEADING current (like a capacitor).
Connected to a lagging-pf system, this leading current cancels part of the
lagging component ⇒ improves the overall power factor & supports voltage.
```

### ⚠️ Common Traps

1. Thinking a synchronous motor **self-starts** — it does not.
2. Reversing V-curve pf (over-excited = **leading**).
3. Forgetting `Ia` is **minimum at unity pf**.
4. Confusing hunting (oscillation) with cogging.
5. Thinking damper windings are only for damping — they also **start** the motor.
6. Assuming speed changes with load — it stays at **Ns**.

### 📝 Test — Electrical Machines (8 Q)

**Q1 (MCQ).** A synchronous motor runs at:
(a) below Ns (b) exactly Ns (c) above Ns (d) variable speed

**Q2 (MCQ).** On the V-curve, armature current is minimum at:
(a) lagging pf (b) leading pf (c) unity pf (d) zero pf

**Q3 (MCQ).** An over-excited synchronous motor operates at:
(a) lagging pf (b) leading pf (c) unity pf (d) zero pf

**Q4 (MCQ).** A synchronous condenser is an over-excited synchronous motor used for:
(a) speed control (b) power-factor correction (c) starting (d) braking

**Q5 (MCQ).** Hunting in a synchronous motor is damped by:
(a) field control (b) amortisseur (damper) windings (c) higher voltage (d) load increase

**Q6 (NAT).** A 4-pole, 50 Hz synchronous motor. Find its speed (rpm).

**Q7 (NAT).** A 12-pole, 50 Hz synchronous motor. Find its speed (rpm).

**Q8 (NAT).** A synchronous motor draws minimum line current of 10 A at unity pf. At a certain over-excitation it draws 12.5 A. Find the operating power factor.

<details><summary>🔑 Solutions</summary>

**Q1 — (b) exactly Ns.**

**Q2 — (c) unity pf.**

**Q3 — (b) leading pf.**

**Q4 — (b) power-factor correction.**

**Q5 — (b) amortisseur (damper) windings.**

**Q6.** `Ns = 120×50/4 = 1500 rpm`.

**Q7.** `Ns = 120×50/12 = 500 rpm`.

**Q8.** At unity pf the active-current component = 10 A (constant load). `pf = 10/12.5 = 0.8` (leading).

</details>

---

## 🔧 Power Electronics: Fourier & Waveform Analysis of Converter Outputs

### 📖 Concept Deep Dive

Converter outputs are **periodic non-sinusoidal** waveforms, analysed by the **Fourier series**:

```
f(t) = a0 + Σ ( an·cos(nωt) + bn·sin(nωt) )
```
where `a0` is the **average (DC)** term, and `an, bn` are the harmonic coefficients. Waveform **symmetry** simplifies this — e.g. **half-wave symmetry ⇒ only odd harmonics**.

**RMS value** — root of the sum of squares of the DC and all harmonic RMS components:

```
Vrms = √( Vdc² + V1(rms)² + V2(rms)² + V3(rms)² + … )
```

**Harmonic factor** of the nth harmonic and **Total Harmonic Distortion**:

```
HF_n = Vn / V1
THD = √( Σ(n≥2) Vn² ) / V1 = √( Vrms² − V1² ) / V1
```

For a **square wave**, only **odd harmonics** exist with `Vn = V1/n` (n odd), and the fundamental peak is `4Vm/π`.

> 💎 **KEY RESULT** — `Vrms = √(Vdc² + Σ Vn(rms)²)` (Parseval), and **THD = √(Vrms² − V1²)/V1**. A waveform with **half-wave symmetry contains only odd harmonics**; harmonic amplitudes of a square wave fall as **1/n**.

> ⚠️ **TRAP ALERT** — RMS combines components in **quadrature** (root-sum-of-squares), not linearly. THD uses the **fundamental** `V1` as the denominator (not `Vrms`). Half-wave symmetry kills **even** harmonics; quarter-wave symmetry removes more.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Fourier series | `f(t) = a0 + Σ(an cos nωt + bn sin nωt)` |
| Total RMS | `Vrms = √(Vdc² + Σ Vn(rms)²)` |
| Harmonic factor | `HF_n = Vn/V1` |
| THD | `= √(Vrms² − V1²)/V1` |
| Square wave | only odd harmonics, `Vn = V1/n` |

### 🧮 Solved Examples

**Example 1 — Total RMS.** A waveform has `Vdc = 10 V`, fundamental RMS `V1 = 20 V`, and harmonic RMS values `V3 = 5 V`, `V5 = 3 V`. Find the total RMS.

```
Vrms = √(Vdc² + V1² + V3² + V5²) = √(10² + 20² + 5² + 3²)
     = √(100 + 400 + 25 + 9) = √534 = 23.11 V
```

**Example 2 — THD.** An inverter output has fundamental RMS `V1 = 90 V` and total RMS `Vrms = 100 V`. Find the THD.

```
THD = √(Vrms² − V1²)/V1 = √(100² − 90²)/90 = √(10000 − 8100)/90
    = √1900/90 = 43.59/90 = 0.484 = 48.4%
```

### ⚠️ Common Traps

1. Adding RMS components **linearly** — use **root-sum-of-squares**.
2. Dividing by `Vrms` in THD — it's `V1`.
3. Including **even** harmonics for half-wave-symmetric waveforms.
4. Forgetting the **DC term** in total RMS.
5. Taking square-wave harmonics as `V1/n²` — it's **V1/n**.
6. Confusing harmonic factor (per-harmonic) with THD (overall).

### 📝 Test — Power Electronics (8 Q)

**Q1 (MCQ).** The DC term in a Fourier series is:
(a) a1 (b) a0 (c) b1 (d) bn

**Q2 (MCQ).** A waveform with half-wave symmetry contains:
(a) only even harmonics (b) only odd harmonics (c) all harmonics (d) no harmonics

**Q3 (MCQ).** THD is defined relative to the:
(a) total RMS (b) fundamental (c) DC value (d) peak

**Q4 (MCQ).** The total RMS of a waveform is the:
(a) sum of component RMS (b) root-sum-of-squares of components (c) average (d) peak/√2

**Q5 (MCQ).** For a square wave, the nth harmonic amplitude is:
(a) V1/n (b) V1/n² (c) V1·n (d) V1

**Q6 (NAT).** A waveform: Vdc = 0, V1 = 50 V, V3 = 10 V, V5 = 5 V (RMS). Find the total RMS (V).

**Q7 (NAT).** For Q6, find the THD (%).

**Q8 (NAT).** A signal has total RMS 120 V and fundamental RMS 100 V. Find the THD (%).

<details><summary>🔑 Solutions</summary>

**Q1 — (b) a0.**

**Q2 — (b) only odd harmonics.**

**Q3 — (b) fundamental.**

**Q4 — (b) root-sum-of-squares of components.**

**Q5 — (a) V1/n.**

**Q6.** `Vrms = √(50² + 10² + 5²) = √(2500 + 100 + 25) = √2625 = 51.23 V`.

**Q7.** `THD = √(Vrms² − V1²)/V1 = √(2625 − 2500)/50 = √125/50 = 11.18/50 = 0.2236 = 22.4%`.

**Q8.** `THD = √(120² − 100²)/100 = √(14400 − 10000)/100 = √4400/100 = 66.33/100 = 66.3%`.

</details>

---

> 🧠 **DAY-40 WRAP** — DVM: **dual-slope = accurate/noise-immune, SAR = fast, flash = fastest**; resolution `= FS/2ⁿ`; 3½-digit = 1999. Synchronous motor: **Ns constant**, V-curve **min Ia at unity pf**, **over-excited = leading (synchronous condenser)**, not self-starting. Fourier: **Vrms = √(Vdc² + ΣVn²)**, **THD = √(Vrms²−V1²)/V1**, half-wave symmetry ⇒ odd harmonics. 🏁 Forty tech days done — revise the boxed KEY RESULTS. ⚡
