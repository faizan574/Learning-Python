# ⚡ GATE Technical Revision — Day 72 (2026-10-01)

*Measurements covers the dynamometer wattmeter (connections & errors), Machines builds the induction-motor equivalent circuit & torque-slip curve, and Power Electronics does AC voltage controllers (phase vs integral-cycle control).*

📅 Tech Day 72 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics · 🔁 Round 4 (all three sections)

> 🧠 **MEMORY HOOK** — Today: the **wattmeter** (`deflection ∝ VI cosφ`; CC vs PC connection errors), the **induction-motor equivalent circuit** (`Pag : Pcu : Pm = 1 : s : (1−s)`, max torque at `R2'/s = √(R1²+(X1+X2')²)`), and **AC voltage controllers** (phase control `Vrms` vs integral-cycle `Vs√(n/(n+m))`).

---

## 🔧 Measuring Instruments: Measurement of Power I — Dynamometer Wattmeter

### 📖 Concept Deep Dive

A **dynamometer wattmeter** has a **current coil (CC)** — fixed, in **series** with the load — and a **pressure/potential coil (PC)** — moving, in **parallel** with the load through a high series resistance. The deflection is proportional to **active power**:
```
Deflection ∝ V·I·cosφ = P   (average torque over a cycle)
```

**Two connection schemes (and their errors):**
- **PC connected across the load (CC on the supply side):** the CC carries the load current *plus* nothing extra, but it also drops voltage, so the **PC measures (load voltage + CC drop)** ⇒ the wattmeter reads **high by the CC's I²R(cc)**. Best when **load current is small / load impedance high**? — actually best for **high-current** loads where the CC drop is negligible relative to V... (use when **voltage across the ammeter/CC is small compared to load**).
- **PC connected on the supply side (CC next to the load):** the CC carries **load current + PC current**, so the wattmeter reads **high by the PC's power (V²/Rpc)**. Best when the **PC current is small compared to load current** (large load current).

**Pressure-coil inductance error.** The PC circuit is not purely resistive; its small inductance makes the PC current lag slightly, so the wattmeter **reads high on lagging pf** (and low on leading). A **correction factor** (or a capacitor across part of the series resistance) compensates it.

**Compensation.** A **compensating winding** (wound with the PC, carrying the PC current in opposition) cancels the error from the PC current in the "PC on supply side" connection.

**Low-power-factor (LPF) wattmeter.** At **low pf**, the deflection `VI cosφ` is tiny while errors are relatively large. An **LPF wattmeter** is modified for sensitivity: **fewer PC turns / lower PC resistance**, **pressure-coil compensation**, and **capacitive compensation** for the PC inductance — so it reads accurately at low pf.

> 💎 **KEY RESULT** — Wattmeter **deflection ∝ VI cosφ**. Connection errors: CC-near-load reads high by **PC power**; PC-across-load reads high by **CC I²R**. PC **inductance** ⇒ reads **high on lagging pf**; fixed by capacitive compensation. **LPF wattmeter** is specially compensated for low-pf accuracy.

> ⚠️ **TRAP ALERT** — A wattmeter reads **active power VI cosφ**, not VA. Choose the connection by **which coil's extra consumption is smaller**. The **PC-inductance error makes it read high on lagging loads** — opposite on leading.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Deflection | `∝ V·I·cosφ` |
| CC-near-load error | `+ PC power = V²/Rpc` |
| PC-across-load error | `+ CC loss = I²·R(cc)` |
| PC inductance error | reads high on lagging pf |
| LPF wattmeter | compensated PC (low turns/R) |

### 🧮 Solved Examples

**Example 1 — Wattmeter reading & connection error.**
A wattmeter reads a load `V = 230 V`, `I = 10 A`, `cosφ = 0.8`. The PC resistance is `Rpc = 5000 Ω` and is connected **across the load** on the supply side (so CC carries PC current too). Find the true load power and the error.

```
Indicated P = V·I·cosφ = 230 × 10 × 0.8 = 1840 W
PC power consumed = V²/Rpc = 230²/5000 = 52900/5000 = 10.58 W
Wattmeter reads load power + PC power ⇒ true load power = 1840 − 10.58 = 1829.4 W
Error ≈ +0.58 %
```

**Example 2 — Power factor from wattmeter.**
A wattmeter indicates `1500 W` with `V = 250 V`, `I = 10 A`. Find the power factor.

```
cosφ = P/(V·I) = 1500/(250×10) = 1500/2500 = 0.6
```

### ⚠️ Common Traps

1. **Reads VI cosφ, not VI** — active power only.
2. **Connection choice** — minimise the smaller of (PC power) vs (CC loss).
3. **PC inductance ⇒ reads high on lagging pf** — compensate capacitively.
4. **LPF wattmeter** — specially built; a normal wattmeter is inaccurate at low pf.
5. **Compensating winding** — cancels PC-current error, not CC drop.
6. **Scale** — wattmeter is near-linear in power (product of two currents), unlike MI's I².

### 📝 Test (5 MCQ + 3 NAT)

**Q1 (MCQ).** A dynamometer wattmeter indicates:
(a) VI (b) VI cosφ (c) VI sinφ (d) I²R

**Q2 (MCQ).** The pressure coil of a wattmeter is connected:
(a) in series with load (b) in parallel with load (c) in series with CC (d) shorted

**Q3 (MCQ).** Pressure-coil inductance makes a wattmeter read:
(a) low on lagging pf (b) high on lagging pf (c) correct always (d) zero

**Q4 (MCQ).** An LPF wattmeter is used for:
(a) high pf loads (b) low pf loads (c) DC only (d) high frequency

**Q5 (MCQ).** A compensating winding cancels the error due to:
(a) CC resistance (b) PC current (c) eddy currents (d) friction

**Q6 (NAT).** A wattmeter reads 2000 W at V = 200 V, I = 12.5 A. Find the power factor.

**Q7 (NAT).** PC resistance 4000 Ω, load voltage 220 V. Find the PC power consumed (W).

**Q8 (NAT).** CC resistance 0.1 Ω carries 20 A. Find the CC power loss (W).

<details><summary>🔑 Solutions</summary>

**Q1 — (b) VI cosφ.**

**Q2 — (b) in parallel with load.**

**Q3 — (b) high on lagging pf.**

**Q4 — (b) low pf loads.**

**Q5 — (b) PC current.**

**Q6 — 0.8.** `cosφ = 2000/(200×12.5) = 2000/2500 = 0.8`.

**Q7 — 12.1 W.** `V²/Rpc = 220²/4000 = 48400/4000 = 12.1 W`.

**Q8 — 40 W.** `I²R = 20²×0.1 = 400×0.1 = 40 W`.
</details>

---

## 🔧 Electrical Machines: Induction Motor II — Equivalent Circuit, Torque-Slip Curve & Maximum Torque

### 📖 Concept Deep Dive

**Equivalent circuit (per phase).** Stator: `R1, X1`; magnetising branch `R0 ∥ Xm`; rotor referred to stator: `R2'` and `X2'`, with the slip-dependent term split as:
```
R2'/s = R2' + R2'·(1 − s)/s
 R2'        = rotor copper loss
 R2'(1−s)/s = mechanical (shaft) power equivalent
```

**Power flow.** With rotor current `I2'`:
```
Air-gap power:   Pag = 3·I2'²·(R2'/s)
Rotor Cu loss:   Pcu = 3·I2'²·R2' = s·Pag
Mech. power:     Pm  = Pag·(1 − s)
⇒  Pag : Pcu : Pm = 1 : s : (1 − s)
```

**Torque.** Developed torque (using synchronous mechanical speed `ωs = 2π·Ns/60`):
```
T = Pag/ωs = (3/ωs)·I2'²·(R2'/s)
```

**Maximum (pull-out) torque.** Using the **Thevenin equivalent** (`Vth, Rth, Xth = X1 + X2'`), max torque occurs when:
```
R2'/s = √(Rth² + (X1 + X2')²)
⇒  s(maxT) = R2' / √(Rth² + (X1 + X2')²)
T(max) = (3/2ωs)·Vth² / [Rth + √(Rth² + (X1 + X2')²)]
```
`Tmax` is **independent of rotor resistance R2'** (adding `R2'` only raises the **slip** at which it occurs — the basis of **rotor-resistance starting** in wound-rotor motors). If stator impedance is neglected (`Rth ≈ 0`): `s(maxT) ≈ R2'/(X1+X2')` and `Tmax ≈ 3Vth²/(2ωs·(X1+X2'))`.

> 💎 **KEY RESULT** — `Pag : Pcu : Pm = 1 : s : (1−s)`; `T = Pag/ωs`. Max torque at `R2'/s = √(Rth²+(X1+X2')²)`; **Tmax independent of R2'** (R2' sets the slip of peak torque).

> 🧠 **MEMORY HOOK** — **"1 : s : (1−s)"** splits air-gap power into **rotor copper** (`s`) and **mechanical** (`1−s`). More rotor resistance ⇒ peak torque at **higher slip** (better starting), same peak value.

> ⚠️ **TRAP ALERT** — Rotor copper loss = **`s × air-gap power`** (so high slip = high rotor heating). **Tmax doesn't change with R2'**; only `s(maxT)` does. Efficiency ceiling: rotor efficiency `≤ (1−s)`.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Power split | `Pag : Pcu : Pm = 1 : s : (1−s)` |
| Air-gap power | `Pag = 3·I2'²·(R2'/s)` |
| Rotor Cu loss | `Pcu = s·Pag` |
| Mechanical power | `Pm = (1−s)·Pag` |
| Torque | `T = Pag/ωs` |
| Slip at max torque | `s = R2'/√(Rth²+(X1+X2')²)` |
| Max torque | `(3/2ωs)·Vth²/[Rth+√(Rth²+(X1+X2')²)]` |

### 🧮 Solved Examples

**Example 1 — Power split.**
A 3-φ induction motor has air-gap power `Pag = 10 kW` at slip `s = 0.04`. Find the rotor copper loss and the mechanical power.

```
Pcu = s·Pag = 0.04 × 10 000 = 400 W
Pm  = (1 − s)·Pag = 0.96 × 10 000 = 9600 W
(check: 9600 + 400 = 10 000 = Pag ✓)
```

**Example 2 — Slip at maximum torque (neglect stator).**
`R2' = 0.3 Ω`, `X1 + X2' = 1.2 Ω`, `Rth ≈ 0`. Find the slip at maximum torque.

```
s(maxT) ≈ R2'/(X1+X2') = 0.3/1.2 = 0.25
To shift maximum torque to starting (s=1), add rotor resistance so R2'' = 1.2 Ω.
```

### ⚠️ Common Traps

1. **Pcu = s·Pag** — rotor copper loss scales with slip; high slip overheats the rotor.
2. **Tmax independent of R2'** — R2' changes only `s(maxT)`.
3. **Use ωs (sync speed)** in `T = Pag/ωs`, not rotor speed.
4. **R2'/s splits** into R2' (loss) + R2'(1−s)/s (mechanical).
5. **Rotor efficiency ≤ (1−s)** — a fundamental ceiling.
6. **Thevenin for exact Tmax** — include Rth unless told to neglect stator impedance.

### 📝 Test (5 MCQ + 3 NAT)

**Q1 (MCQ).** The ratio Pag : Pcu(rotor) : Pm is:
(a) 1 : (1−s) : s (b) 1 : s : (1−s) (c) s : 1 : (1−s) (d) 1 : 1 : 1

**Q2 (MCQ).** Rotor copper loss equals:
(a) s·Pag (b) (1−s)Pag (c) Pag (d) Pag/s

**Q3 (MCQ).** Maximum torque of an induction motor is:
(a) ∝ R2' (b) independent of R2' (c) ∝ 1/Vth² (d) zero

**Q4 (MCQ).** Developed torque equals:
(a) Pm/ωs (b) Pag/ωs (c) Pcu/ωs (d) Pag·s

**Q5 (MCQ).** Adding rotor resistance in a wound-rotor motor:
(a) raises Tmax (b) shifts max torque to higher slip (c) lowers Tmax (d) no effect on slip

**Q6 (NAT).** Pag = 8 kW, s = 0.05. Find the mechanical power (kW).

**Q7 (NAT).** Pag = 8 kW, s = 0.05. Find the rotor copper loss (W).

**Q8 (NAT).** R2' = 0.5 Ω, X1 + X2' = 2 Ω, Rth ≈ 0. Find s at maximum torque.

<details><summary>🔑 Solutions</summary>

**Q1 — (b) 1 : s : (1−s).**

**Q2 — (a) s·Pag.**

**Q3 — (b) independent of R2'.**

**Q4 — (b) Pag/ωs.**

**Q5 — (b) shifts max torque to higher slip.**

**Q6 — 7.6 kW.** `Pm = (1−0.05)×8 = 0.95×8 = 7.6 kW`.

**Q7 — 400 W.** `Pcu = 0.05×8000 = 400 W`.

**Q8 — 0.25.** `s = R2'/(X1+X2') = 0.5/2 = 0.25`.
</details>

---

## 🔧 Power Electronics: AC Voltage Controllers (Phase Control vs Integral-Cycle Control)

### 📖 Concept Deep Dive

An **AC voltage controller** varies the **RMS voltage** delivered to an AC load using anti-parallel SCRs (or a TRIAC) **without changing frequency**. Two control strategies:

**1. Phase control.** In each half-cycle the device is fired at a **firing angle `α`**, so the load sees only part of the sine. For a **single-phase controller with R load**:
```
Vo(rms) = Vs·√( (1/π)·[(π − α) + (sin 2α)/2] )
(Vs = rms source voltage; α : 0 → π)
Power to load ∝ Vo(rms)²
```
- **Pros:** smooth, continuous control; fast.
- **Cons:** chops the waveform ⇒ **harmonics**, poorer input pf, EMI.
- Used in **light dimmers, fan regulators, heater control** (TRIAC-based).

**2. Integral-cycle (on-off / burst) control.** The device conducts for **n complete cycles** and is off for **m cycles**, repeating. For a resistive load:
```
Vo(rms) = Vs·√( n/(n + m) ) = Vs·√(duty k)
k = n/(n+m) = fraction of cycles ON
Power to load = (full-load power) × k
```
- **Pros:** switching at **zero crossings** ⇒ **very low harmonics / low EMI**, near-unity displacement pf.
- **Cons:** output comes in **bursts** ⇒ causes **flicker**; suitable only for **slow (thermal) loads** — industrial **heating, temperature control**.

| Feature | Phase control | Integral-cycle control |
|---|---|---|
| Output RMS | `Vs√((1/π)[(π−α)+sin2α/2])` | `Vs√(n/(n+m))` |
| Harmonics | high (chopped wave) | low (zero-cross switching) |
| Best for | lighting, fans | heating (thermal loads) |
| Flicker | low | can cause flicker |

> 💎 **KEY RESULT** — **Phase control:** `Vo(rms) = Vs√((1/π)[(π−α)+sin2α/2])` for R load — smooth but harmonic-rich. **Integral-cycle:** `Vo(rms) = Vs√(n/(n+m))`, power `= k × full power`, zero-cross switching ⇒ low EMI, for **thermal** loads.

> 🧠 **MEMORY HOOK** — **"Phase control chops each cycle (dimmer); integral-cycle counts whole cycles (heater)."** Power scales with `Vrms²` (phase) or **duty `k`** (integral-cycle).

> ⚠️ **TRAP ALERT** — Integral-cycle **power = k × full-power** (linear in duty), while its **Vrms = Vs√k**. Phase control's Vrms needs the `(π−α)+sin2α/2` form for R load — don't use `cosα` (that's for converters). Integral-cycle suits **only slow thermal** loads (flicker otherwise).

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Phase control Vrms (R) | `Vs·√((1/π)[(π−α)+sin2α/2])` |
| Phase control power | `∝ Vo(rms)²` |
| Integral-cycle Vrms | `Vs·√(n/(n+m))` |
| Integral-cycle duty | `k = n/(n+m)` |
| Integral-cycle power | `k × full-load power` |

### 🧮 Solved Examples

**Example 1 — Integral-cycle control.**
A heater rated `2 kW` at 230 V is driven by integral-cycle control, **ON for 3 cycles, OFF for 2**. Find the output RMS voltage and power.

```
k = n/(n+m) = 3/(3+2) = 3/5 = 0.6
Vo(rms) = 230·√0.6 = 230 × 0.7746 = 178.2 V
Power = k × full power = 0.6 × 2000 = 1200 W
(check: P = Vo²/R, R = 230²/2000 = 26.45 Ω; 178.2²/26.45 = 1200 W ✓)
```

**Example 2 — Phase control RMS (α = 90°).**
A single-phase controller (R load) fires at `α = 90°`, `Vs = 230 V`. Find `Vo(rms)`.

```
Vo(rms) = Vs·√((1/π)[(π−α) + (sin2α)/2])
α = 90° = π/2 ; sin(2α) = sin180° = 0
= 230·√((1/π)[(π − π/2) + 0]) = 230·√((1/π)(π/2))
= 230·√(0.5) = 230 × 0.7071 = 162.6 V
```

### ⚠️ Common Traps

1. **Phase-control Vrms form** — `(π−α)+sin2α/2`, not `cosα`.
2. **Integral-cycle power ∝ duty k** (linear), Vrms ∝ `√k`.
3. **Integral-cycle for thermal loads only** — bursts cause flicker on lighting.
4. **Zero-cross switching ⇒ low harmonics** (integral-cycle advantage).
5. **Frequency unchanged** — AC controllers vary RMS, not frequency.
6. **TRIAC gives bidirectional** phase control in a single device (dimmers).

### 📝 Test (5 MCQ + 3 NAT)

**Q1 (MCQ).** An AC voltage controller varies the:
(a) frequency (b) RMS voltage (c) phase sequence (d) DC level

**Q2 (MCQ).** Integral-cycle control switches at:
(a) peak (b) zero crossings (c) random (d) 90°

**Q3 (MCQ).** Integral-cycle control is best suited for:
(a) lighting (b) thermal/heating loads (c) motors (d) audio

**Q4 (MCQ).** Phase control produces more ___ than integral-cycle control:
(a) harmonics (b) efficiency (c) torque (d) frequency

**Q5 (MCQ).** For integral-cycle control, output power equals:
(a) k² × full (b) k × full (c) √k × full (d) full

**Q6 (NAT).** Integral-cycle: ON 4 cycles, OFF 6 cycles. Find the duty factor k.

**Q7 (NAT).** A 1 kW heater under integral-cycle control with k = 0.25. Find the output power (W).

**Q8 (NAT).** Integral-cycle, Vs = 240 V, k = 0.5. Find the output RMS voltage (V).

<details><summary>🔑 Solutions</summary>

**Q1 — (b) RMS voltage.**

**Q2 — (b) zero crossings.**

**Q3 — (b) thermal/heating loads.**

**Q4 — (a) harmonics.**

**Q5 — (b) k × full.**

**Q6 — 0.4.** `k = 4/(4+6) = 4/10 = 0.4`.

**Q7 — 250 W.** `P = k × full = 0.25 × 1000 = 250 W`.

**Q8 — 169.7 V.** `Vo = 240·√0.5 = 240 × 0.7071 = 169.7 V`.
</details>

---

### 📊 GATE Tech Coverage Progress

```
Measuring Instruments  █████████░░░░░░░░░░░  9/21  🔁 Round 4
Electrical Machines    ███████████░░░░░░░░░  11/19  🔁 Round 4
Power Electronics      ███████████░░░░░░░░░  11/18  🔁 Round 4
```

*Next: Measurements → Measurement of power II (3-φ power, two-wattmeter method); Machines → Induction motor III (tests, circle diagram, starting); Power Electronics → DC-DC choppers I (buck & boost).*

> ✅ **Self-check before you close:** Can you (1) state the wattmeter deflection law and the two connection errors, (2) write the `1 : s : (1−s)` power split and the max-torque slip, and (3) give the phase-control `Vrms` and integral-cycle `Vs√(n/(n+m))`? Re-read any KEY RESULT that felt shaky.
