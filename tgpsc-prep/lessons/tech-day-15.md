# ⚡ GATE Technical Revision — Day 15 (2026-08-04)

*The null bridges that measure resistance to a fraction of a percent, the induction motor's equivalent circuit and torque-slip curve, and the TRIAC dimmer that chops the AC wave.*

`📅 Tech Day 15  ·  ⏱ ~45 min  ·  🎯 Measurements + Machines + Power Electronics`

Attempt each section's test **before** opening its solutions — recall beats re-reading.

---

## 🔧 Measuring Instruments: DC Bridges — Wheatstone, Kelvin Double Bridge, High-R & Megger

Day 14 finished instrument transformers. Now **DC bridges** — **null-balance** networks that measure resistance precisely by balancing a galvanometer to zero.

### 📖 Concept Deep Dive

**Wheatstone bridge (medium resistance, ~1 Ω to ~1 MΩ).** Four arms `P, Q, R, S` with a galvanometer across the bridge. At **balance** (no galvanometer current):

```
Balance condition:  P/Q = R/S     ⇒    Unknown  R = (P/Q)·S
   (product of opposite arms equal:  P·S = Q·R)
```

At balance the detector reads zero and the result is **independent of supply voltage**. 

**Sensitivity.** How much the galvanometer deflects per unit unbalance. Bridge sensitivity is maximum when the arms are comparable and the galvanometer resistance is matched; the **deflection per unit ΔR/R** depends on supply voltage, galvanometer current sensitivity, and arm ratios.

```
Sensitivity  Sb = (galvanometer deflection)/(fractional unbalance ΔR/R)
Larger supply V and matched arms ⇒ higher sensitivity
```

**Limitations:** at **low resistances** (< 1 Ω) the **lead and contact resistances** become comparable to R and corrupt the reading → use the **Kelvin bridge**. At **very high resistances** (> MΩ), **leakage currents** dominate → guard/megger methods.

**Kelvin Double Bridge (low resistance, < 1 Ω).** Adds a **second pair of ratio arms** (p, q) to eliminate the effect of the **connecting-lead/contact resistance** (the "yoke" resistance r). With the ratio arms matched `P/Q = p/q`:

```
Kelvin balance:  R = (P/Q)·S      (lead resistance r eliminated when P/Q = p/q)
```

The clever design makes the yoke resistance drop out, so **very low resistances** (contacts of switches, shunts, bus-bars) are measured accurately.

**High-resistance measurement.** For **MΩ–GΩ** (insulation, cable dielectric): use **guard circuits** (a guard electrode intercepts surface-leakage current so only volume-leakage flows through the meter), **direct-deflection** methods, or the **loss-of-charge** method.

**Megger (megohmmeter).** A portable **insulation-resistance** tester: a hand-cranked (or electronic) **generator** supplies a high DC voltage (e.g. **500 V, 1 kV, 2.5 kV**) and a **cross-coil (ratiometer) ohmmeter** reads insulation resistance **independent of the generator speed** (because it responds to a *ratio* of two currents). Reads **MΩ** directly; used for cable/winding insulation testing.

| Bridge/method | Range | Key idea |
|---|---|---|
| **Wheatstone** | ~1 Ω – 1 MΩ | P/Q = R/S balance |
| **Kelvin double** | < 1 Ω | extra ratio arms cancel lead/contact R |
| **Megger / guard** | > 1 MΩ | high-V ratiometer / guard against leakage |

> 💎 **KEY RESULT** — **Wheatstone: R = (P/Q)·S** at balance (V-independent). **Kelvin double bridge** kills lead/contact resistance for **low-R** measurement; **Megger** (high-V ratiometer) reads **insulation (high) resistance** independent of crank speed.

> 🧠 **MEMORY HOOK** — "**Wheatstone for medium, Kelvin for low (lead-cancelling), Megger for high (insulation).** Balance = P/Q = R/S, voltage-independent."

> ⚠️ **TRAP ALERT** — At **balance** the Wheatstone result is **independent of the supply voltage** (voltage affects only *sensitivity*, not the balance value). The **Kelvin bridge** is for **low** resistance (lead resistance matters), **not** high.

### 📐 Formula Sheet

```
Wheatstone balance:  P/Q = R/S ⇒ R = (P/Q)·S ;  P·S = Q·R
Balance is independent of supply voltage
Sensitivity ∝ supply V, galvanometer sensitivity, matched arms
Kelvin double bridge:  R = (P/Q)·S  (lead/contact r cancelled when P/Q = p/q)
Megger: high-V generator + ratiometer ⇒ insulation R (MΩ), speed-independent
Guard circuit: diverts surface leakage for high-R measurement
```

### 🧮 Solved Examples

**Example 1 — Wheatstone balance.**
A Wheatstone bridge balances with `P = 1000 Ω`, `Q = 100 Ω`, `S = 45.5 Ω`. Find the unknown resistance `R`.

```
R = (P/Q)·S = (1000/100) × 45.5 = 10 × 45.5 = 455 Ω
```
**R = 455 Ω.**

**Example 2 — Kelvin double bridge.**
A Kelvin bridge has ratio arms `P = Q = 1000 Ω` and standard `S = 0.01 Ω`, balanced with the ratio `P/Q = 1`. Find the unknown low resistance.

```
R = (P/Q)·S = (1000/1000) × 0.01 = 1 × 0.01 = 0.01 Ω = 10 mΩ
```
**R = 10 mΩ** — a value impossible to measure accurately on a plain Wheatstone bridge because of lead resistance.

### ⚠️ Common Traps

1. **Wheatstone balance is voltage-independent** — supply V only affects *sensitivity*, not the balance value R = (P/Q)S.
2. **Kelvin double bridge = LOW resistance** (< 1 Ω); it cancels lead/contact resistance. Don't use it for high R.
3. **Megger = insulation (HIGH) resistance**; its ratiometer makes the reading **independent of crank speed**.
4. **Balance condition is products of opposite arms equal** (P·S = Q·R) — mixing adjacent arms is the classic error.
5. **Guard circuits** intercept **surface leakage** in high-R measurement — without them, leakage corrupts the reading.
6. **Sensitivity ≠ accuracy of balance** — a more sensitive bridge just detects unbalance better; the balance equation gives the value.

### 📝 Test — Measuring Instruments (8 Q)

1. **(MCQ)** The Wheatstone bridge balance condition is:
   (a) P/Q = S/R  (b) P/Q = R/S  (c) P·Q = R·S  (d) P + Q = R + S
2. **(MCQ)** At balance, the measured resistance is:
   (a) dependent on supply voltage  (b) independent of supply voltage  (c) dependent on galvanometer only  (d) always zero
3. **(MCQ)** The Kelvin double bridge is used to measure:
   (a) high resistance  (b) low resistance (< 1 Ω)  (c) capacitance  (d) inductance
4. **(MCQ)** A Megger measures:
   (a) low resistance  (b) insulation (high) resistance  (c) frequency  (d) power
5. **(MCQ)** The Megger's reading is independent of crank speed because it uses a:
   (a) PMMC  (b) ratiometer (cross-coil)  (c) rectifier  (d) thermocouple
6. **(NAT)** A Wheatstone bridge balances with P = 200 Ω, Q = 400 Ω, S = 60 Ω. Find R in Ω. ______ Ω
7. **(NAT)** A Kelvin bridge with P/Q = 100 and standard S = 0.005 Ω. Find the unknown R in Ω. ______ Ω
8. **(NAT)** A Wheatstone bridge has P = 1 kΩ, Q = 1 kΩ; the unknown R balances against S = 328 Ω. Find R in Ω. ______ Ω

<details>
<summary>🔑 Solutions</summary>

**1 → (b) P/Q = R/S.**

**2 → (b) independent of supply voltage.**

**3 → (b) low resistance.**

**4 → (b) insulation (high) resistance.**

**5 → (b) ratiometer (cross-coil).**

**6 →** R = (P/Q)·S = (200/400) × 60 = 0.5 × 60 = **30 Ω.**

**7 →** R = (P/Q)·S = 100 × 0.005 = **0.5 Ω.**

**8 →** R = (P/Q)·S = (1000/1000) × 328 = **328 Ω.**

</details>

---

## 🔧 Electrical Machines: Three-Phase Induction Motor II — Equivalent Circuit, Torque-Slip Curve & Maximum Torque

Day 14 gave the induction motor's slip and basic torque. Now the **equivalent circuit** (per phase) and the full **torque-slip characteristic**.

### 📖 Concept Deep Dive

**Per-phase equivalent circuit.** Like a transformer, with the rotor referred to the stator. The rotor circuit's `R2/s` splits the air-gap power into **rotor copper loss** and **mechanical power**:

```
Rotor branch resistance = R2'/s = R2' + R2'·(1−s)/s
   R2'          → rotor copper loss
   R2'(1−s)/s   → mechanical (developed) power
```

Stator: `R1 + jX1`; magnetising branch `Rc || jXm`; rotor (referred): `R2'/s + jX2'`.

**Torque from the equivalent circuit.** Using the **Thevenin** equivalent of the stator side (Vth, Rth, Xth) looking into the rotor:

```
Torque  T = (3/ωs) · Vth² · (R2'/s) / [ (Rth + R2'/s)² + (Xth + X2')² ]
   ωs = 2πNs/60  (synchronous speed in rad/s)
```

**Torque-slip characteristic (the shape to know):**
- **Low slip (near s=0, running region):** `R2'/s` is large; `T ∝ s` (approximately linear) — the **stable operating** region.
- **Maximum torque (breakdown torque)** at `s = sm`.
- **High slip (near s=1, starting):** `T` is small-ish; `T ∝ 1/s` beyond the peak — the **unstable** region.

**Maximum-torque condition** (differentiate T w.r.t. s, or match `R2'/s` to the impedance magnitude):

```
Slip at max torque  sm = R2' / √(Rth² + (Xth + X2')²)
   (often approximated  sm ≈ R2'/X2'  when Rth, Xth small)
Maximum torque  Tmax = (3/ωs) · Vth² / [ 2( Rth + √(Rth² + (Xth+X2')²) ) ]
```

**Key insight — Tmax is independent of R2'**, but `sm ∝ R2'`. So adding **external rotor resistance** (wound-rotor motor) **shifts the peak toward higher slip**, giving **higher starting torque** without changing the peak value. This is the basis of **rotor-resistance starting/speed control**.

**Starting torque** (put s = 1):

```
Tst = (3/ωs) · Vth² · R2' / [ (Rth + R2')² + (Xth + X2')² ]
Rotor resistance to get Tst = Tmax:  set R2'(total) = √(Rth² + (Xth+X2')²)  ⇒ sm = 1
```

| Region | Slip | Behaviour |
|---|---|---|
| Running (stable) | small (0 → sm) | T rises ~linearly with s |
| Breakdown | s = sm | maximum (pull-out) torque |
| Starting (unstable) | sm → 1 | T falls; high current |

> 💎 **KEY RESULT** — `T = (3/ωs)·Vth²·(R2'/s)/[(Rth+R2'/s)² + (Xth+X2')²]`. **sm ≈ R2'/X2'** (with Rth,Xth small); **Tmax is independent of rotor resistance** — adding rotor R shifts the peak to higher slip (more starting torque).

> 🧠 **MEMORY HOOK** — "**R2'/s carries both rotor loss and mechanical power (the (1−s)/s part is mechanical).** Peak at sm ∝ R2'; Tmax ignores R2' — so rotor resistance buys starting torque."

> ⚠️ **TRAP ALERT** — Adding rotor resistance **does not raise Tmax** — it only moves the slip `sm` at which Tmax occurs (up to s=1). And the mechanical power resistance is **R2'(1−s)/s**, not R2'/s (that's the whole rotor branch).

### 📐 Formula Sheet

```
Rotor branch:  R2'/s = R2' + R2'(1−s)/s   [loss + mechanical]
Thevenin (stator): Vth ≈ V·Xm/√(R1²+(X1+Xm)²) ; Rth, Xth from stator network
Torque  T = (3/ωs)·Vth²(R2'/s)/[(Rth+R2'/s)²+(Xth+X2')²]
Slip at max torque  sm = R2'/√(Rth²+(Xth+X2')²) ≈ R2'/X2'
Max torque  Tmax = (3/ωs)·Vth²/[2(Rth+√(Rth²+(Xth+X2')²))]  (independent of R2')
Starting torque: put s = 1
Power: Pag : Pcu,rotor : Pmech = 1 : s : (1−s)
```

### 🧮 Solved Examples

**Example 1 — slip at maximum torque.**
An induction motor (referred) has `R2' = 0.4 Ω`, `X2' = 2 Ω`, with stator Thevenin `Rth ≈ 0.3 Ω`, `Xth ≈ 1.5 Ω`. Find the slip at maximum torque.

```
sm = R2'/√(Rth² + (Xth + X2')²) = 0.4/√(0.3² + (1.5 + 2)²)
   = 0.4/√(0.09 + 3.5²) = 0.4/√(0.09 + 12.25) = 0.4/√12.34
   = 0.4/3.5128 = 0.1139
```
**sm ≈ 0.114 (11.4 %).** *(The simple approx R2'/X2' = 0.4/2 = 0.20 overestimates because Xth is significant.)*

**Example 2 — rotor resistance for max starting torque.**
For the same motor, what total rotor resistance `R2'(total)` gives **maximum torque at starting (sm = 1)**?

```
sm = R2'(total)/√(Rth² + (Xth+X2')²) = 1
⇒ R2'(total) = √(Rth² + (Xth+X2')²) = √12.34 = 3.513 Ω
External resistance to add = 3.513 − 0.4 = 3.113 Ω (referred)
```
**R2'(total) ≈ 3.51 Ω** (add ≈ 3.11 Ω external) to get pull-out torque at start.

### ⚠️ Common Traps

1. **Mechanical-power resistance = R2'(1−s)/s**; the **whole** rotor branch is R2'/s (loss + mechanical).
2. **sm ≈ R2'/X2'** only when Rth, Xth are negligible — otherwise use the full `√(Rth²+(Xth+X2')²)`.
3. **Tmax is independent of rotor resistance** — rotor R shifts sm, not the peak value.
4. **Starting torque uses s = 1** in the torque formula.
5. **Adding rotor resistance improves starting torque** but **increases running slip / losses** at load (efficiency drops).
6. **Use ωs (synchronous, rad/s) in torque**, not the shaft speed.

### 📝 Test — Electrical Machines (8 Q)

1. **(MCQ)** In the induction motor equivalent circuit, the resistance representing mechanical power is:
   (a) R2'/s  (b) R2'(1−s)/s  (c) R2'·s  (d) R1
2. **(MCQ)** The maximum torque of an induction motor is:
   (a) proportional to R2'  (b) independent of R2'  (c) inversely proportional to Vth  (d) zero at s = sm
3. **(MCQ)** Adding external rotor resistance:
   (a) increases Tmax  (b) shifts sm to higher slip (more starting torque)  (c) reduces starting torque  (d) has no effect
4. **(MCQ)** The slip at maximum torque (Rth, Xth small) is approximately:
   (a) R2'/X2'  (b) X2'/R2'  (c) R2'·X2'  (d) 1
5. **(MCQ)** The torque expression uses which speed?
   (a) rotor speed  (b) synchronous speed ωs  (c) slip speed  (d) zero
6. **(NAT)** A motor has R2' = 0.5 Ω, X2' = 2.5 Ω, negligible stator impedance. Find sm (approx). ______
7. **(NAT)** For a motor with √(Rth²+(Xth+X2')²) = 4 Ω and R2' = 0.5 Ω, find the external rotor resistance (referred) to get max torque at starting. ______ Ω
8. **(NAT)** An induction motor delivers air-gap power 25 kW at s = 0.04. Find the mechanical power developed in kW. ______ kW

<details>
<summary>🔑 Solutions</summary>

**1 → (b) R2'(1−s)/s.**

**2 → (b) independent of R2'.**

**3 → (b) shifts sm to higher slip (more starting torque).**

**4 → (a) R2'/X2'.**

**5 → (b) synchronous speed ωs.**

**6 →** sm ≈ R2'/X2' = 0.5/2.5 = **0.20.**

**7 →** R2'(total) = 4 Ω ⇒ external = 4 − 0.5 = **3.5 Ω.**

**8 →** Pmech = (1−s)·Pag = 0.96 × 25 = **24 kW.**

</details>

---

## 🔧 Power Electronics: AC Voltage Controllers — Phase Control vs Integral-Cycle Control (TRIAC Circuits)

Day 14 covered rectifier performance. An **AC voltage controller** varies the **RMS AC output** from a fixed AC source using back-to-back SCRs (or a TRIAC) — no change in frequency. Used in **light dimmers, fan/heater control, soft-starters**.

### 📖 Concept Deep Dive

**Two control strategies:**

**1. Phase control (ON-OFF within each cycle).** The SCR/TRIAC fires at angle `α` each half-cycle, conducting from `α` to `π` (R load). Varies the RMS smoothly but introduces **harmonics**.

For a **1-φ AC voltage controller, R load**, the **RMS output voltage**:

```
Vo(rms) = Vs·√( (1/π)[(π − α) + (sin 2α)/2] )      [Vs = source RMS]
Range: α = 0 → Vo = Vs (full) ;  α = π → Vo = 0
```

Output power to R: `Po = Vo(rms)²/R`. Phase control gives **continuous** control but a **poor input power factor** and **harmonic** injection.

**2. Integral-cycle control (ON-OFF full cycles / burst firing).** The controller passes **n complete cycles ON** out of every **(n + m)** cycles (m cycles OFF). No mid-cycle chopping ⇒ **no low-order harmonics** at the fundamental (only sub-harmonics of the burst period). The RMS:

```
Duty  k = n/(n + m)   (fraction of cycles ON)
Vo(rms) = Vs·√k = Vs·√( n/(n+m) )
Output power  Po = k · (Vs²/R)
```

Integral-cycle (burst) control suits **high-thermal-inertia loads** (heaters, ovens) where flicker doesn't matter — it has a **much better power factor** and **less RF interference** than phase control, but **cannot** be used for lighting (visible flicker) or motors.

**Comparison:**

| Feature | Phase control | Integral-cycle control |
|---|---|---|
| Firing | angle α each half-cycle | whole cycles ON/OFF |
| Vo(rms) | Vs·√((π−α+sin2α/2)/π) | Vs·√(n/(n+m)) |
| Harmonics | high (chops the wave) | low-order absent; sub-harmonics |
| Input pf | poor | better |
| Best load | lighting, universal motors | heaters/ovens (thermal inertia) |
| RFI | high | low |

**TRIAC dimmer.** A **TRIAC** (bidirectional) with a **DIAC** trigger + RC network is the classic phase-control **light dimmer** — the RC delay sets α, the DIAC breaks over to fire the TRIAC each half-cycle (recall Day 10).

**With RL load (phase control):** the current lags; the SCR conducts beyond π to the extinction angle β, and there's a **minimum firing angle** (= the load impedance angle φ) below which control is lost (the device conducts fully). Only `α > φ` gives control.

> 💎 **KEY RESULT** — **Phase control:** `Vo = Vs·√((π−α+sin2α/2)/π)` — continuous but harmonic-rich. **Integral-cycle control:** `Vo = Vs·√(n/(n+m))` — whole cycles ON/OFF, better pf, for thermal loads. TRIAC+DIAC = dimmer.

> 🧠 **MEMORY HOOK** — "**Phase control chops each cycle (α) → smooth but dirty (harmonics). Integral-cycle passes whole cycles (√duty) → clean pf, for heaters.**"

> ⚠️ **TRAP ALERT** — For **integral-cycle** control, `Vo(rms) = Vs·√(n/(n+m))` (the **√** of the duty, since power ∝ V²). For an **RL load** under phase control, firing angle **α must exceed the load angle φ** to have any control.

### 📐 Formula Sheet

```
Phase control (R load):
  Vo(rms) = Vs·√( (1/π)[(π − α) + (sin 2α)/2] )
  Po = Vo(rms)²/R ;  α: 0 → π gives Vs → 0
Integral-cycle control (R load):
  duty k = n/(n+m) ;  Vo(rms) = Vs·√k ;  Po = k·Vs²/R
RL load phase control: control only for α > φ (load angle) ; conducts α→β
TRIAC + DIAC + RC = phase-control dimmer
```

### 🧮 Solved Examples

**Example 1 — phase control RMS.**
A 1-φ AC voltage controller (R load) is fed from **230 V rms** and fired at `α = 90° = π/2`. Find the RMS output voltage.

```
Vo(rms) = Vs·√( (1/π)[(π − α) + (sin 2α)/2] )
α = π/2:  π − α = π/2 = 1.5708 ;  sin 2α = sin π = 0 ⇒ (sin2α)/2 = 0
Vo = 230·√( (1/π)(1.5708) ) = 230·√(1.5708/3.14159) = 230·√0.5 = 230 × 0.70711
   = 162.6 V
```
**Vo(rms) ≈ 162.6 V** (at α = 90°, RMS = Vs/√2).

**Example 2 — integral-cycle control.**
An integral-cycle controller passes **3 cycles ON out of every 5** to a **50 Ω** heater from **240 V rms**. Find the RMS output voltage and the power delivered.

```
Duty k = n/(n+m) = 3/5 = 0.6
Vo(rms) = Vs·√k = 240·√0.6 = 240 × 0.77460 = 185.9 V
Po = k·Vs²/R = 0.6 × 240²/50 = 0.6 × 57600/50 = 0.6 × 1152 = 691.2 W
   (check: Vo²/R = 185.9²/50 = 34559/50 = 691.2 W ✓)
```
**Vo(rms) ≈ 185.9 V; Po ≈ 691 W.**

### ⚠️ Common Traps

1. **Phase-control RMS** uses the `√((π−α+sin2α/2)/π)` form (R load) — at α = 90°, Vo = Vs/√2 (not Vs/2).
2. **Integral-cycle Vo = Vs·√(duty)** — the square root, because **power ∝ V²** and duty scales power linearly.
3. **Integral-cycle control is for thermal loads** (heaters/ovens) — **not** lighting (flicker) or motors.
4. **Phase control injects harmonics & worsens pf**; integral-cycle avoids low-order harmonics.
5. **RL load phase control:** control exists only for **α > φ** (load impedance angle); below that the device conducts continuously.
6. **AC voltage controllers change RMS, not frequency** — they don't rectify (output stays AC).

### 📝 Test — Power Electronics (8 Q)

1. **(MCQ)** An AC voltage controller varies the:
   (a) frequency  (b) RMS output voltage  (c) DC output  (d) phase sequence
2. **(MCQ)** Integral-cycle control is best suited for:
   (a) lighting  (b) heating loads with thermal inertia  (c) induction motors  (d) audio
3. **(MCQ)** For integral-cycle control with duty k, the RMS output is:
   (a) k·Vs  (b) Vs·√k  (c) Vs/k  (d) Vs·k²
4. **(MCQ)** At α = 90° (R load), the phase-controlled RMS output is:
   (a) Vs/2  (b) Vs/√2  (c) Vs  (d) 0
5. **(MCQ)** For an RL load under phase control, control is possible only when:
   (a) α < φ  (b) α > φ (load angle)  (c) α = 0  (d) α = 180°
6. **(NAT)** An integral-cycle controller passes 4 ON cycles out of 10 to a 40 Ω heater from 200 V rms. Find the power delivered in W. ______ W
7. **(NAT)** A phase-controlled AC controller (R load) from 120 V rms at α = 90°. Find Vo(rms) in volts. ______ V
8. **(NAT)** An integral-cycle controller has duty 0.25 from 240 V rms. Find Vo(rms) in volts. ______ V

<details>
<summary>🔑 Solutions</summary>

**1 → (b) RMS output voltage.**

**2 → (b) heating loads with thermal inertia.**

**3 → (b) Vs·√k.**

**4 → (b) Vs/√2.**

**5 → (b) α > φ.**

**6 →** k = 4/10 = 0.4; Po = k·Vs²/R = 0.4 × 200²/40 = 0.4 × 40000/40 = 0.4 × 1000 = **400 W.**

**7 →** Vo = Vs/√2 = 120/1.4142 = **84.85 V.**

**8 →** Vo = Vs·√0.25 = 240 × 0.5 = **120 V.**

</details>

---

`✅ Day 15 complete — DC bridges (Wheatstone/Kelvin/Megger), induction motor II (equivalent circuit, torque-slip, sm & Tmax), and AC voltage controllers (phase vs integral-cycle control). Tomorrow: AC bridges (Maxwell/Hay/Anderson), induction motor III (tests & starting), and DC-DC choppers I.`

*Correctness over length — re-derive any result you're unsure of and mark "verify" before the exam.*
