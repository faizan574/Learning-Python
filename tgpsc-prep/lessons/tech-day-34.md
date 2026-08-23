# ⚡ GATE Technical Revision — Day 34 (2026-08-23)

*Three subjects, one sitting — the current transformer, induction-motor torque, and AC voltage control.*

📅 Tech Day 34 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics

> 🧠 **MEMORY HOOK** — Today is **"step down current, find max torque, and chop the AC"**: the **CT** (never open its secondary!), the induction motor's **torque-slip** curve and maximum torque, and **AC voltage controllers** (phase vs integral-cycle).

---

## 🔧 Measuring Instruments: Instrument Transformers — Current Transformer (CT)

### 📖 Concept Deep Dive

A **Current Transformer (CT)** steps a large line current down to a standard, measurable value (usually **5 A** or **1 A** secondary) for ammeters, wattmeters, and relays. Its **primary** (few turns, often a **bar**) is in **series** with the line; its **secondary** feeds a low-impedance **burden**.

**Ratio and errors:** ideally `Ip/Is = Ns/Np = n` (turns ratio). But the **exciting current** `I0` (with **magnetising** component `Im` and **loss** component `Iw`) makes the secondary current slightly less than ideal, causing a **ratio error** and a **phase-angle error**:

```
Actual ratio  R = n + (Iw·cosδ + Im·sinδ)/Is
Phase angle   θ = (Im·cosδ − Iw·sinδ)/(n·Is)   radians
Ratio error   = (Kn − R)/R × 100%     (Kn = nominal ratio)
```
where `δ` = burden power-factor angle.

> 💎 **KEY RESULT** — Both CT errors come from the **exciting current**. For a **resistive burden** (`δ = 0`): ratio depends on the **loss component** (`R = n + Iw/Is`), and the **phase-angle error** `θ ≈ Im/(n·Is)` depends on the **magnetising component**. Lower burden and a high-permeability core → smaller errors.

**Open-secondary hazard:** if the CT secondary is **open-circuited while primary current flows**, there is no secondary MMF to oppose the primary, so **all** primary current becomes **magnetising current**. The core saturates heavily and a **dangerously high voltage** is induced across the open secondary (risk to insulation and personnel).

> ⚠️ **TRAP ALERT** — **NEVER open-circuit a CT secondary** while the primary is energised — **short it** before removing a meter. Contrast with a **PT (potential transformer)**, whose secondary must **never be short-circuited**. Burden is specified in **VA** (or ohms) — keep it **low** for accuracy.

**Testing:** by comparison against a standard CT, or by mutual-inductance/null methods.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Nominal ratio | `Kn = Ipn/Isn` |
| Turns ratio | `n = Ns/Np` |
| Actual ratio | `R = n + (Iw·cosδ + Im·sinδ)/Is` |
| Phase angle | `θ = (Im·cosδ − Iw·sinδ)/(n·Is)` rad |
| Ratio error | `= (Kn − R)/R × 100%` |

### 🧮 Solved Examples

**Example 1 — Ratio & phase-angle error (resistive burden).** A **1000/5 A** CT with a **bar primary** (`Np = 1`, `Ns = 200`, so `n = 200`) supplies `Is = 5 A`. Exciting-current components: `Im = 10 A`, `Iw = 5 A` (primary side); burden **resistive** (`δ = 0`). Find the actual ratio, ratio error, and phase angle.

```
R = n + Iw/Is = 200 + 5/5 = 201
Ratio error = (Kn − R)/R × 100 = (200 − 201)/201 × 100 = −0.50%
θ = Im/(n·Is) = 10/(200×5) = 10/1000 = 0.01 rad = 0.573° ≈ 34.4 min
```

**Example 2 — Nominal vs actual.** A `100/5` CT actually transforms `100 A` primary into `4.95 A` secondary. Find the actual ratio and ratio error.

```
R = Ip/Is = 100/4.95 = 20.20
Kn = 100/5 = 20
Ratio error = (Kn − R)/R × 100 = (20 − 20.20)/20.20 × 100 = −0.99%
```

### ⚠️ Common Traps

1. **Opening** a CT secondary under load — dangerous (short it instead).
2. Confusing CT (don't open) with PT (don't short).
3. Forgetting errors arise from the **exciting current**.
4. Using high burden — it **increases** errors.
5. Swapping `Im` (magnetising → phase angle) and `Iw` (loss → ratio).
6. Treating the CT secondary current as exactly `Ip/n` (ignoring exciting current).

### 📝 Test — Measuring Instruments (8 Q)

**Q1 (MCQ).** A CT secondary must never be:
(a) short-circuited (b) open-circuited (c) earthed (d) loaded

**Q2 (MCQ).** The standard CT secondary current rating is usually:
(a) 1 A or 5 A (b) 10 A (c) 100 A (d) 0.5 A

**Q3 (MCQ).** CT ratio and phase-angle errors are caused by:
(a) burden resistance only (b) exciting current (c) frequency (d) primary turns

**Q4 (MCQ).** The phase-angle error of a CT depends mainly on the ___ component:
(a) loss (b) magnetising (c) resistive (d) capacitive

**Q5 (MCQ).** CT burden is expressed in:
(a) amperes (b) VA or ohms (c) volts (d) watts only

**Q6 (NAT).** A 200/5 CT actually gives 4.9 A for 200 A primary. Find the ratio error (%) (Kn based).

**Q7 (NAT).** A CT (bar primary, n = 100) has Is = 5 A, magnetising component Im = 6 A, resistive burden. Find the phase angle (minutes).

**Q8 (NAT).** For a CT with n = 100, Is = 5 A, loss component Iw = 4 A, resistive burden, find the actual ratio R.

<details><summary>🔑 Solutions</summary>

**Q1 — (b) open-circuited.**

**Q2 — (a) 1 A or 5 A.**

**Q3 — (b) exciting current.**

**Q4 — (b) magnetising.**

**Q5 — (b) VA or ohms.**

**Q6.** `R = 200/4.9 = 40.82`; `Kn = 40`; error = `(40 − 40.82)/40.82 × 100 = −2.0%`.

**Q7.** `θ = Im/(n·Is) = 6/(100×5) = 0.012 rad = 0.012 × (180/π) × 60 = 41.3 min`.

**Q8.** `R = n + Iw/Is = 100 + 4/5 = 100.8`.

</details>

---

## 🔧 Electrical Machines: Induction Motor II — Equivalent Circuit, Torque-Slip & Maximum Torque

### 📖 Concept Deep Dive

The per-phase **equivalent circuit** has stator impedance `R1 + jX1`, a magnetising branch (`Rc || jXm`), and the referred rotor `R2'/s + jX2'`. The slip-dependent resistance splits as:

```
R2'/s = R2'  +  R2'·(1 − s)/s
        (copper)   (mechanical/load)
```

**Power flow across the air gap:**

```
Air-gap power:      Pag = 3·I2'²·(R2'/s)
Rotor copper loss:  Pcu = 3·I2'²·R2' = s·Pag
Mechanical power:   Pm = 3·I2'²·R2'·(1−s)/s = (1 − s)·Pag
⇒  Pag : Pcu : Pm = 1 : s : (1 − s)
```

**Torque** (using synchronous speed `ωs = 2π·Ns/60`):

```
T = Pag/ωs = (3/ωs)·V1²·(R2'/s) / [ (R1 + R2'/s)² + (X1 + X2')² ]
```

**Maximum torque** occurs when `R2'/s = √(R1² + (X1 + X2')²)`:

```
s_maxT = R2' / √(R1² + (X1 + X2')²)
Tmax = 3·V1² / ( 2·ωs·[ R1 + √(R1² + (X1 + X2')²) ] )    ← independent of R2'
```

> 💎 **KEY RESULT** — **Pag : Pcu : Pm = 1 : s : (1−s)**. Maximum torque is **independent of rotor resistance R2'**, but the **slip at which it occurs is ∝ R2'** — so adding external rotor resistance (slip-ring motor) shifts `Tmax` toward standstill, raising **starting torque**.

Neglecting `R1`: `s_maxT ≈ R2'/(X1 + X2')` and `Tmax ≈ 3·V1²/(2·ωs·(X1 + X2'))`.

> 🧠 **MEMORY HOOK** — "**1 : s : (1−s)**" for gap/copper/mechanical power. **Tmax fixed, its slip ∝ R2'**. Rotor-resistance starting = more starting torque, same peak.

> ⚠️ **TRAP ALERT** — At `s = s_maxT` the rotor copper loss equals the mechanical-equivalent term; note **Tmax doesn't change with R2'** — only the operating slip does. Also, torque `∝ V1²`, so a voltage dip badly cuts torque.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Air-gap power | `Pag = 3·I2'²·(R2'/s)` |
| Power ratio | `Pag : Pcu : Pm = 1 : s : (1−s)` |
| Slip at max torque | `s_maxT = R2'/√(R1² + (X1+X2')²)` |
| Max torque | `Tmax = 3V1²/(2ωs[R1 + √(R1²+(X1+X2')²)])` |
| (R1 ≈ 0) | `s_maxT ≈ R2'/(X1+X2')` , `Tmax ≈ 3V1²/(2ωs(X1+X2'))` |

### 🧮 Solved Examples

**Example 1 — Slip & max torque.** A 3-φ, `400 V`, `50 Hz`, `4-pole` induction motor (approx. circuit, neglect `R1`): `R2' = 0.3 Ω`, `X1 + X2' = 1.2 Ω`/phase. Phase voltage `V1 = 400/√3 = 231 V`. Find `s_maxT` and `Tmax`.

```
Ns = 120×50/4 = 1500 rpm ⇒ ωs = 2π×1500/60 = 157.08 rad/s
s_maxT = R2'/(X1+X2') = 0.3/1.2 = 0.25
Tmax = 3·V1²/(2·ωs·(X1+X2')) = 3×231²/(2×157.08×1.2)
     = 160083/376.99 = 424.6 N·m
```

**Example 2 — Power split.** An induction motor draws air-gap power `Pag = 10 kW` at slip `s = 0.04`. Find the rotor copper loss and mechanical power developed.

```
Pcu = s·Pag = 0.04 × 10000 = 400 W
Pm = (1 − s)·Pag = 0.96 × 10000 = 9600 W
```

### ⚠️ Common Traps

1. Forgetting `Tmax` is **independent of R2'** (only slip shifts).
2. Misremembering the **1 : s : (1−s)** power ratio.
3. Dropping `R1` when it's significant (changes `s_maxT`, `Tmax`).
4. Using line voltage where **phase** voltage is needed in `T`.
5. Forgetting torque `∝ V1²`.
6. Confusing rotor copper loss (`s·Pag`) with total input.

### 📝 Test — Electrical Machines (8 Q)

**Q1 (MCQ).** The ratio of air-gap power : rotor copper loss : mechanical power is:
(a) 1 : s : (1−s) (b) 1 : (1−s) : s (c) s : 1 : (1−s) (d) 1 : s² : s

**Q2 (MCQ).** Maximum torque of an induction motor is:
(a) ∝ R2' (b) independent of R2' (c) ∝ 1/V1² (d) ∝ s

**Q3 (MCQ).** Adding external rotor resistance (slip-ring motor):
(a) reduces starting torque (b) increases starting torque (c) reduces Tmax (d) increases Tmax

**Q4 (MCQ).** Induction motor torque is proportional to:
(a) V1 (b) V1² (c) √V1 (d) 1/V1

**Q5 (MCQ).** Rotor copper loss equals:
(a) Pag (b) s·Pag (c) (1−s)Pag (d) Pag/s

**Q6 (NAT).** An induction motor: Pag = 20 kW, s = 0.05. Find the mechanical power developed (kW).

**Q7 (NAT).** A motor (neglect R1): R2' = 0.4 Ω, X1+X2' = 2 Ω. Find the slip at maximum torque.

**Q8 (NAT).** A 6-pole, 50 Hz motor has Pag = 15 kW, s = 0.03. Find the rotor copper loss (W).

<details><summary>🔑 Solutions</summary>

**Q1 — (a) 1 : s : (1−s).**

**Q2 — (b) independent of R2'.**

**Q3 — (b) increases starting torque.**

**Q4 — (b) V1².**

**Q5 — (b) s·Pag.**

**Q6.** `Pm = (1 − 0.05)×20 = 0.95×20 = 19 kW`.

**Q7.** `s_maxT = R2'/(X1+X2') = 0.4/2 = 0.2`.

**Q8.** `Pcu = s·Pag = 0.03 × 15000 = 450 W`.

</details>

---

## 🔧 Power Electronics: AC Voltage Controllers — Phase Control vs Integral-Cycle Control

### 📖 Concept Deep Dive

An **AC voltage controller** varies the **RMS AC voltage** delivered to a load at the **same frequency** as the source, using **antiparallel SCRs** (or a **TRIAC**). Two control strategies exist:

| Method | Idea | Best for |
|---|---|---|
| **Phase control** | SCRs fired at angle `α` each half-cycle ⇒ load sees voltage from `α` to `π` | lighting, fan/speed control (continuous, but harmonic-rich) |
| **Integral-cycle (ON-OFF / burst)** | Load connected for `n` **whole cycles** ON out of every `(n+m)` cycles | **heating** loads (slow thermal); switches at zero crossing ⇒ low RFI |

**Phase control (R load):** RMS output voltage:

```
Vo(rms) = Vs·√[ (1/π)·(π − α + (sin2α)/2) ]
```
ranging from `Vs` (at `α = 0`) to `0` (at `α = π`).

**Integral-cycle control:** with `n` ON cycles out of `(n+m)`:

```
Vo(rms) = Vs·√( n/(n+m) )       Power ∝ n/(n+m)
```

> 💎 **KEY RESULT** — Phase control: `Vo = Vs·√[(1/π)(π − α + sin2α/2)]` (continuous, adds harmonics). Integral-cycle: `Vo = Vs·√(n/(n+m))` — switches at **zero crossings**, so **no high-frequency harmonics/RFI**, ideal for **heating** (but causes flicker, so unsuitable for **lighting**).

> 🧠 **MEMORY HOOK** — "**Phase = chop each half-cycle (dimmer); Integral = whole cycles ON/OFF (heater)**". Integral-cycle switches at **zero crossing** ⇒ clean, but flickers lamps.

> ⚠️ **TRAP ALERT** — Integral-cycle control is **not** used for **lighting** (visible flicker) — it suits **thermal/heating** loads. Phase control gives smooth, continuous control but injects **harmonics** and worsens input **power factor**. A **TRIAC + DIAC + RC** network is the classic domestic **light dimmer** (phase control).

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Phase control (R), RMS | `Vo = Vs·√[(1/π)(π − α + (sin2α)/2)]` |
| Phase control power | `Po = Vo²/R` |
| Integral-cycle RMS | `Vo = Vs·√(n/(n+m))` |
| Integral-cycle power | `Po ∝ n/(n+m)` |
| Range (phase) | `α = 0 → Vs` ; `α = π → 0` |

### 🧮 Solved Examples

**Example 1 — Phase control.** A single-phase AC voltage controller (R load), `Vs = 230 V`, `α = 90°`. Find the RMS output voltage.

```
Vo = Vs·√[ (1/π)(π − α + (sin2α)/2) ]
   = 230·√[ (1/π)(π − π/2 + (sin180°)/2) ]
   = 230·√[ (1/π)(π/2 + 0) ] = 230·√(0.5) = 230 × 0.7071 = 162.6 V
```

**Example 2 — Integral-cycle control.** A `230 V` source drives a heater ON for `3` cycles out of every `5`. Find the RMS output and the power fraction.

```
Vo = Vs·√(n/(n+m)) = 230·√(3/5) = 230 × 0.7746 = 178.2 V
Power fraction = n/(n+m) = 3/5 = 0.6  (60% of full power)
```

### ⚠️ Common Traps

1. Using integral-cycle control for **lighting** — causes flicker.
2. Forgetting phase control injects **harmonics** and lowers input pf.
3. Misapplying the phase-control formula (`sin2α` term).
4. Thinking output frequency changes — AC controllers keep the **same frequency**.
5. Taking integral-cycle power ∝ √(n/(n+m)) — power is ∝ **n/(n+m)** (voltage is the √).
6. Confusing an AC voltage controller with a cycloconverter (which changes frequency).

### 📝 Test — Power Electronics (8 Q)

**Q1 (MCQ).** An AC voltage controller changes the load:
(a) frequency (b) RMS voltage (c) phase sequence (d) waveform frequency

**Q2 (MCQ).** Integral-cycle control is best suited to:
(a) lighting (b) heating loads (c) motor starting (d) rectification

**Q3 (MCQ).** Integral-cycle control switches the SCRs at:
(a) peak voltage (b) zero crossing (c) α = 90° (d) random points

**Q4 (MCQ).** A domestic light dimmer typically uses:
(a) a diode bridge (b) TRIAC + DIAC phase control (c) integral-cycle control (d) a chopper

**Q5 (MCQ).** In integral-cycle control, the output power is proportional to:
(a) √(n/(n+m)) (b) n/(n+m) (c) (n+m)/n (d) n²

**Q6 (NAT).** A phase-controlled AC controller (R load), Vs = 200 V, α = 90°. Find Vo (V).

**Q7 (NAT).** An integral-cycle controller, Vs = 240 V, ON for 4 cycles out of 10. Find Vo (V).

**Q8 (NAT).** For Q7, find the output power as a percentage of full power.

<details><summary>🔑 Solutions</summary>

**Q1 — (b) RMS voltage.**

**Q2 — (b) heating loads.**

**Q3 — (b) zero crossing.**

**Q4 — (b) TRIAC + DIAC phase control.**

**Q5 — (b) n/(n+m).**

**Q6.** `Vo = 200·√[(1/π)(π/2)] = 200·√0.5 = 200 × 0.7071 = 141.4 V`.

**Q7.** `Vo = 240·√(4/10) = 240 × 0.6325 = 151.8 V`.

**Q8.** `Power fraction = n/(n+m) = 4/10 = 0.40 = 40%`.

</details>

---

> 🧠 **DAY-34 WRAP** — CT: standard 5 A/1 A secondary, **never open** the secondary, errors from **exciting current** (`Im`→phase, `Iw`→ratio). Induction motor: **Pag:Pcu:Pm = 1:s:(1−s)**, **Tmax independent of R2'** (slip ∝ R2'), T ∝ V1². AC controllers: **phase control `Vs√[(1/π)(π−α+sin2α/2)]`** (dimmer), **integral-cycle `Vs√(n/(n+m))`** (heater, zero-crossing). Revise the boxed KEY RESULTS. ⚡
