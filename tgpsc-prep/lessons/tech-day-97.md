# ⚡ GATE Technical Revision — Day 97 (2026-10-26)

*The current transformer and its ratio/phase errors with the open-secondary hazard, the synchronous motor's V-curves and its use as a synchronous condenser, and the Fourier/harmonic analysis that quantifies converter-output distortion.*

📅 Tech Day 97 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics

---

## 🔧 Measuring Instruments: Instrument Transformers — Current Transformer (CT)

### 📖 Concept Deep Dive

**Instrument transformers** extend the range of AC meters and **isolate** them from high voltage/current. A **Current Transformer (CT)** steps a large line current down to a standard small current (usually **5 A** or **1 A**) for ammeters, wattmeters, relays. A **Potential Transformer (PT)** steps voltage down (to **110 V**).

**CT basics.** The **primary** is a few turns (or a bar) in **series** with the line carrying load current `Ip`; the **secondary** (many turns) connects to the **low-impedance** meter/relay (the "burden"). Ideal ratio:

```
Ip/Is = Ns/Np   (turns ratio, inverse of a voltage transformer)
Nominal (rated) ratio Kn = rated Ip / rated Is
```

**Why the ratio is not exact — errors.** The CT needs a **magnetising current (Im)** and a **core-loss current (Iw)** (together the exciting current `I0`), drawn from the primary. So the actual secondary current is slightly **less** and **shifted in phase** from the ideal. Two errors:
- **Ratio (current) error:** `%error = (Kn·Is − Ip)/Ip × 100` — the actual transformation ratio `R = Ip/Is` differs from `Kn`.
- **Phase-angle error (θ):** the angle between the reversed secondary-current phasor and the primary-current phasor; important for **wattmeter/energy** measurement (affects pf). Approximately:

```
Ratio error ∝ Iw-component; Phase angle θ ≈ Im-component / Is   (radians, small)
```

Reducing errors: low-loss **high-permeability core** (nickel-iron), minimise turns-ratio error by **turns compensation**, keep the **burden low**.

**Burden.** The **burden** is the load (VA) on the secondary — the meter/relay impedance. CTs are rated in **VA at rated secondary current** (e.g., 15 VA). **Higher burden → larger errors** (more exciting current proportionally). Accuracy classes (e.g., 0.1, 0.5, 1) specify max error at rated burden.

**Open-secondary hazard (critical).** A CT secondary must **NEVER be open-circuited** while primary current flows. Normally the secondary's demagnetising MMF (NsIs) nearly cancels the primary MMF. If the secondary opens, **all** primary current becomes magnetising current → the core **saturates deeply**, inducing a **dangerously high voltage** across the open secondary (risk of insulation breakdown and shock) and overheating. So always **short-circuit the CT secondary** before disconnecting a meter.

| Quantity | CT | PT |
|---|---|---|
| Connection | primary in series | primary in parallel |
| Secondary rating | 5 A (or 1 A) | 110 V |
| Hazard | open secondary → high V | short secondary → high I |
| Burden effect | higher burden → more error | higher burden → more error |

> 💎 **KEY RESULT** — CT: `Ip/Is = Ns/Np`; errors (ratio & phase) arise from the **exciting current**; **higher burden → larger error**. **Never open-circuit a CT secondary** under load (core saturates → dangerous high voltage) — short it first.

> 🧠 **MEMORY HOOK** — "**CT = series, 5 A secondary, never open (dangerous V); PT = parallel, 110 V, never short.** Burden up → error up."

### 📐 Formula Sheet

| Quantity | Expression |
|---|---|
| Turns/current ratio | `Ip/Is = Ns/Np` |
| Nominal ratio | `Kn = rated Ip / rated Is` |
| Actual ratio | `R = Ip/Is` (actual) |
| Ratio error | `%RE = (Kn − R)/R × 100` |
| Phase angle (approx) | `θ ≈ Im/(n·Is)` rad (n = turns ratio) |
| Burden | VA = `Is²·Zburden` |

### 🧮 Solved Examples

**Example 1 — CT ratio and secondary current.**
A CT has a nominal ratio of **500/5 A** (turns ratio Np:Ns such that Ns/Np = 100). The line carries **300 A**. Find the ideal secondary current.

```
Is = Ip × (Np/Ns) = Ip / 100 = 300/100 = 3 A
```

(Nominal ratio Kn = 500/5 = 100; at 300 A primary, ideal Is = 3 A.)

**Example 2 — Ratio error.**
A 100/5 CT (Kn = 20) actually produces 4.9 A secondary when the primary is 100 A. Find the ratio error.

```
Actual ratio R = Ip/Is = 100/4.9 = 20.408
%RE = (Kn − R)/R × 100 = (20 − 20.408)/20.408 × 100 = −2.0%
```

Ratio error **≈ −2.0%** (the CT under-reads; actual ratio higher than nominal).

### ⚠️ Common Traps

1. **Open-circuit a CT secondary** — **never** under load; it produces dangerous high voltage (short it before disconnecting). (A PT secondary must never be shorted.)
2. **CT ratio like a voltage transformer** — current ratio is **inverse** of turns: `Ip/Is = Ns/Np`.
3. **Higher burden reduces error** — higher burden **increases** error.
4. **CT secondary is high current** — standardised to **5 A (or 1 A)**, low.
5. **Phase-angle error irrelevant** — it matters for **power/energy** (pf) measurement.
6. **CT primary in parallel** — CT primary is in **series** with the line (PT primary is parallel).

### 📝 Test — Measuring Instruments (8 Q)

1. The primary of a current transformer is connected:
   (a) in parallel (b) in series with the line (c) to earth (d) to the meter
2. A CT secondary is typically rated at:
   (a) 110 V (b) 5 A (c) 230 V (d) 1 kA
3. A CT secondary must never be:
   (a) short-circuited (b) open-circuited under load (c) earthed (d) metered
4. CT errors increase when the burden is:
   (a) reduced (b) increased (c) zero (d) resistive
5. The current ratio of a CT is:
   (a) Ns/Np (b) Np/Ns for Ip/Is i.e. Ip/Is = Ns/Np (c) 1 (d) Np·Ns
6. **(NAT)** A 600/5 CT carries 450 A primary. Find the ideal secondary current (A).
7. **(NAT)** A 200/5 CT (Kn = 40) gives 4.8 A at 200 A primary. Find the ratio error (%).
8. **(NAT)** A CT secondary carries 5 A into a burden of 0.6 Ω. Find the burden VA.

<details><summary>🔑 Solutions</summary>

**1 → (b).** In series with the line.

**2 → (b).** 5 A (or 1 A).

**3 → (b).** Open-circuited under load (dangerous).

**4 → (b).** Increased burden → more error.

**5 → (b).** `Ip/Is = Ns/Np`.

**6 (NAT).** `Is = 450 × (5/600) = 450/120 = 3.75 A`.

**7 (NAT).** `R = 200/4.8 = 41.667`; `%RE = (40 − 41.667)/41.667 ×100 = −4.0%`.

**8 (NAT).** `VA = Is²·Z = 5²·0.6 = 25·0.6 = 15 VA`.

</details>

---

## 🔧 Electrical Machines: Synchronous Motor — V-Curves, Hunting & Synchronous Condenser

### 📖 Concept Deep Dive

A **synchronous motor** runs at **constant synchronous speed** `Ns = 120f/P` regardless of load (no slip). It is **not self-starting** (needs damper windings / auxiliary start). Its special value is **power-factor control** via excitation.

**Operation & load angle.** The rotor locks to the stator field at a **load (torque) angle δ** behind it; δ increases with mechanical load. Developed power (cylindrical):

```
P = (E·V/Xs)·sinδ
```

If δ exceeds **90°** (pull-out), the motor **loses synchronism** (steps out). Maximum power at δ = 90°.

**V-curves & inverted-V curves.** At a **fixed mechanical load**, varying the **field excitation** changes the **armature current Ia** and **power factor**:
- **Under-excited:** motor draws **lagging** current (absorbs reactive power), higher Ia.
- **Normal excitation (unity pf):** **minimum Ia**.
- **Over-excited:** motor draws **leading** current (supplies reactive power), Ia rises again.

Plotting **Ia vs field current If** gives a **V-shape** (minimum at unity pf) — the **V-curve**; one V-curve per load (higher load → higher, shifted-right V). Plotting **pf vs If** gives the **inverted-V curve** (peak = unity pf). This is the synchronous motor's unique ability: **adjust reactive power by excitation**.

**Synchronous condenser.** An **over-excited** synchronous motor running **on no load** (or light load) draws **leading** current → acts as a **capacitor** supplying reactive power (VARs) to the grid. Used for **power-factor correction and voltage support** at substations — a "**synchronous condenser**." (Under-excited, it absorbs VARs — a reactor.)

**Hunting.** A sudden load change makes the rotor **oscillate** about its new equilibrium δ (since it is a lightly-damped spring-mass system: synchronising torque vs inertia). These oscillations are **hunting**; if resonant, they can cause loss of synchronism. **Damper (amortisseur) windings** on the pole faces produce induction-motor-like torque during speed deviations, **damping** the oscillations (and also aiding starting).

| Excitation | Armature current | Power factor | Role |
|---|---|---|---|
| Under-excited | lagging | lagging | absorbs VARs (reactor) |
| Normal | minimum | unity | — |
| Over-excited | leading | leading | supplies VARs (condenser) |

> 💎 **KEY RESULT** — Synchronous motor: constant `Ns`, not self-starting; `P = (EV/Xs)sinδ` (pull-out at δ=90°). **V-curve** = Ia vs If (min at unity pf). **Over-excited no-load = synchronous condenser** (supplies VARs). **Damper windings** damp **hunting** and aid starting.

> 🧠 **MEMORY HOOK** — "**Over-excited = leading (condenser, supplies VARs); under-excited = lagging (reactor). V-curve bottom = unity pf. Dampers kill hunting.**"

### 📐 Formula Sheet

| Quantity | Expression |
|---|---|
| Speed | `Ns = 120f/P` (no slip) |
| Power / torque | `P = (E·V/Xs)·sinδ`, max at δ=90° |
| V-curve | Ia vs If (U-shape, min at unity pf) |
| Over-excited | leading pf → supplies VARs (condenser) |
| Under-excited | lagging pf → absorbs VARs |
| Hunting damping | damper (amortisseur) windings |

### 🧮 Solved Examples

**Example 1 — Load angle / power.**
A synchronous motor: `E = 1.2 pu`, `V = 1.0 pu`, `Xs = 0.8 pu`, operating at load angle δ = 30°. Find the developed power (pu).

```
P = (E·V/Xs)·sinδ = (1.2·1.0/0.8)·sin30° = 1.5·0.5 = 0.75 pu
```

Developed power **= 0.75 pu**.

**Example 2 — Synchronous condenser reactive power.**
A synchronous motor on no load, over-excited, draws a **leading** current of 50 A at 400 V (3-φ). Find the reactive power supplied (treat pf ≈ 0, purely reactive).

```
Q = √3 · VL · IL · sinφ ≈ √3 · VL · IL   (sinφ ≈ 1 for near-zero pf)
  = √3 · 400 · 50 = 1.732 · 20000 = 34,641 VAR ≈ 34.6 kVAR
```

Reactive power supplied **≈ 34.6 kVAR** (leading → acts as a capacitor).

### ⚠️ Common Traps

1. **Synchronous motor is self-starting** — it is **not** (needs damper windings / auxiliary starting).
2. **Over-excited = lagging** — over-excited draws **leading** current (supplies VARs); under-excited = lagging.
3. **V-curve minimum at over-excitation** — minimum Ia is at **unity pf** (normal excitation).
4. **Speed changes with load** — speed stays **synchronous**; the **load angle δ** changes, not speed.
5. **Dampers only for starting** — they also **damp hunting**.
6. **Synchronous condenser is under-excited** — it is **over-excited** (on no load).

### 📝 Test — Electrical Machines (8 Q)

1. A synchronous motor runs at:
   (a) slip speed (b) synchronous speed always (c) variable speed (d) above synchronous
2. A synchronous motor is:
   (a) self-starting (b) not self-starting (c) started by slip (d) a DC motor
3. At the bottom of a V-curve, the power factor is:
   (a) leading (b) unity (c) lagging (d) zero
4. An over-excited synchronous motor draws:
   (a) lagging current (b) leading current (c) no current (d) DC
5. A synchronous condenser is a synchronous motor that is:
   (a) under-excited on load (b) over-excited on no load (c) at unity pf (d) stalled
6. **(NAT)** A synchronous motor: E = 1.0 pu, V = 1.0 pu, Xs = 0.5 pu, δ = 30°. Find P (pu).
7. **(NAT)** A 6-pole synchronous motor on a 50 Hz supply. Find its speed (rpm).
8. **(NAT)** An over-excited synchronous condenser draws 30 A leading at 1000 V (3-φ), pf ≈ 0. Find Q (kVAR).

<details><summary>🔑 Solutions</summary>

**1 → (b).** Always synchronous speed.

**2 → (b).** Not self-starting.

**3 → (b).** Unity pf (minimum Ia).

**4 → (b).** Leading current.

**5 → (b).** Over-excited on no load.

**6 (NAT).** `P = (1.0·1.0/0.5)·sin30° = 2·0.5 = 1.0 pu`.

**7 (NAT).** `Ns = 120·50/6 = 1000 rpm`.

**8 (NAT).** `Q = √3·1000·30 = 1.732·30000 = 51,960 VAR ≈ 52 kVAR`.

</details>

---

## 🔧 Power Electronics: Fourier/Waveform Analysis of Converter Outputs & Harmonic Factor

### 📖 Concept Deep Dive

Converter outputs are **non-sinusoidal periodic** waveforms. **Fourier analysis** decomposes them into a DC term plus harmonics, letting us compute RMS, average, and distortion metrics.

**Fourier series.** Any periodic `f(ωt)` of period 2π:

```
f(ωt) = a0 + Σ [an·cos(nωt) + bn·sin(nωt)]   (n = 1,2,3,…)
a0 = (1/2π)∫ f d(ωt)         (DC/average component)
an = (1/π)∫ f·cos(nωt) d(ωt)
bn = (1/π)∫ f·sin(nωt) d(ωt)
```

The **nth harmonic amplitude** `cn = √(an² + bn²)`; its RMS `= cn/√2`.

**Symmetry shortcuts (save integration):**
- **Even function** `f(−t)=f(t)`: only **cosine** terms (bn = 0).
- **Odd function** `f(−t)=−f(t)`: only **sine** terms (an = 0).
- **Half-wave symmetry** `f(t+T/2) = −f(t)`: only **odd harmonics** (even harmonics vanish) — true of symmetric square/quasi-square inverter outputs.

**RMS of a composite waveform.** The total RMS combines the DC and all harmonic RMS values (orthogonality):

```
F_rms = √(F0² + Σ Fn,rms²)   (F0 = DC, Fn,rms = nth harmonic RMS)
```

**Distortion metrics.**
- **Harmonic Factor of nth harmonic:** `HFn = Fn / F1` (ratio of nth to fundamental).
- **Total Harmonic Distortion (THD):**

```
THD = √(Σ_{n≥2} Fn²) / F1 = √(F_rms² − F1²)/F1
```

- **Distortion factor (for current):** `F1/F_rms` (fundamental to total) — appears in input power factor.
- **Input power factor (nonsinusoidal current, sinusoidal voltage):**

```
pf = (I1/Irms)·cos φ1 = (distortion factor)·(displacement factor)
```

**Ripple factor (for rectifier DC output):**

```
RF = (AC ripple RMS)/Vdc = √(Vrms² − Vdc²)/Vdc = √(FF² − 1)
```

**Worked harmonic pattern:** a symmetric **square wave** of amplitude `Vm` has only odd harmonics with the nth harmonic amplitude `= (4Vm/π)·(1/n)` (n odd). So the 3rd is 1/3, the 5th is 1/5 of the fundamental, etc. — the basis of the ~48.3% THD computed for square-wave inverters.

| Metric | Expression |
|---|---|
| nth harmonic amplitude | `cn = √(an²+bn²)` |
| Total RMS | `√(F0² + ΣFn,rms²)` |
| THD | `√(Frms² − F1²)/F1` |
| Harmonic factor (nth) | `Fn/F1` |
| Input pf | `(I1/Irms)·cosφ1` |

> 💎 **KEY RESULT** — Fourier: `cn = √(an²+bn²)`, RMS `= cn/√2`. **Half-wave symmetry → only odd harmonics.** `THD = √(Frms²−F1²)/F1`; input pf `= (I1/Irms)·cosφ1` (distortion × displacement). Square wave: nth harmonic `= (4Vm/π)(1/n)`, n odd.

> 🧠 **MEMORY HOOK** — "**Even→cos, odd→sin, half-wave→odd harmonics. THD = √(Frms²−F1²)/F1; pf = distortion × displacement.**"

### 📐 Formula Sheet

| Quantity | Expression |
|---|---|
| DC term | `a0 = (1/2π)∫f d(ωt)` |
| Fourier coeffs | `an, bn = (1/π)∫ f·{cos,sin}(nωt) d(ωt)` |
| Harmonic amplitude | `cn = √(an² + bn²)`; RMS = cn/√2 |
| Half-wave symmetry | only odd harmonics |
| THD | `√(Frms² − F1²)/F1` |
| Square-wave nth | `(4Vm/π)(1/n)`, n = 1,3,5,… |
| Input pf | `(I1/Irms)·cosφ1` |

### 🧮 Solved Examples

**Example 1 — THD from harmonic content.**
A waveform has fundamental RMS `F1 = 100`, and harmonics `F3 = 30`, `F5 = 20` (RMS), others negligible. Find the THD.

```
THD = √(F3² + F5²)/F1 = √(30² + 20²)/100 = √(900 + 400)/100 = √1300/100
    = 36.06/100 = 0.361 (36.1%)
```

THD **≈ 36.1%**.

**Example 2 — Input power factor.**
A converter draws a current with fundamental RMS `I1 = 0.9·Irms` and a displacement angle `φ1 = 30°`. Find the input power factor.

```
pf = (I1/Irms)·cosφ1 = 0.9·cos30° = 0.9·0.866 = 0.779
```

Input power factor **≈ 0.78 lagging**.

### ⚠️ Common Traps

1. **Even function has sine terms** — an **even** function has only **cosine** terms (bn = 0).
2. **Half-wave symmetry gives even harmonics** — it gives **odd** harmonics only.
3. **THD = (Frms − F1)/F1** — it is `√(Frms² − F1²)/F1` (quadrature).
4. **Input pf = cosφ1 only** — must include the **distortion factor** `I1/Irms`.
5. **Harmonic amplitude = RMS** — RMS `= amplitude/√2`.
6. **Square wave has even harmonics** — only **odd** (half-wave symmetric).

### 📝 Test — Power Electronics (8 Q)

1. An even periodic function's Fourier series contains only:
   (a) sine terms (b) cosine terms (c) all terms (d) DC only
2. A waveform with half-wave symmetry contains only:
   (a) even harmonics (b) odd harmonics (c) DC (d) fundamental
3. The RMS of the nth harmonic (amplitude cn) is:
   (a) cn (b) cn/√2 (c) cn·√2 (d) cn/2
4. THD is defined as:
   (a) (Frms−F1)/F1 (b) √(Frms²−F1²)/F1 (c) F1/Frms (d) Frms/F1
5. Input power factor (nonsinusoidal current) is:
   (a) cosφ1 only (b) (I1/Irms)·cosφ1 (c) I1/Irms only (d) 1
6. **(NAT)** A waveform: F1 = 50 (RMS), F3 = 15, F5 = 10. Find the THD (%).
7. **(NAT)** A current has I1/Irms = 0.95 and displacement angle 25°. Find the input pf. [cos25° = 0.906]
8. **(NAT)** A square wave's fundamental peak is (4Vm/π). For Vm = 100 V, find the 5th-harmonic peak (V).

<details><summary>🔑 Solutions</summary>

**1 → (b).** Cosine terms only.

**2 → (b).** Odd harmonics only.

**3 → (b).** `cn/√2`.

**4 → (b).** `√(Frms²−F1²)/F1`.

**5 → (b).** `(I1/Irms)·cosφ1`.

**6 (NAT).** `THD = √(15²+10²)/50 = √(225+100)/50 = √325/50 = 18.03/50 = 0.361 = 36.1%`.

**7 (NAT).** `pf = 0.95·cos25° = 0.95·0.906 = 0.861`.

**8 (NAT).** Fundamental peak `= 4·100/π = 127.32 V`; 5th harmonic `= 127.32/5 = 25.46 V`.

</details>

---

## 📊 Tech Progress

```
Measurements      [█████████████░░░░░]  Round 5 · topic 13/20 (Instrument transformers: CT)
Electrical Mach.  [█████████████████░]  Round 5 · topic 17/19 (Synchronous motor)
Power Electronics [█████████████████░]  Round 5 · topic 17/19 (Fourier/harmonic analysis)
```

> 🎯 **Day 97 one-liners:** (1) **CT: Ip/Is = Ns/Np, series, 5 A secondary, never open (dangerous V); burden up → error up.** (2) **Synchronous motor: constant Ns, not self-starting; over-excited = leading (condenser); V-curve min at unity pf; dampers kill hunting.** (3) **Fourier: even→cos, odd→sin, half-wave→odd harmonics; THD = √(Frms²−F1²)/F1; pf = distortion×displacement.**

*Correctness over length — derive, don't memorise blindly; verify any "verify" figure. Onward. ⚡*
