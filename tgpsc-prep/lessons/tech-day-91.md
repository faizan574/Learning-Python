# ⚡ GATE Technical Revision — Day 91 (2026-10-20)

*The transfer instrument that reads true-RMS on AC and DC alike, the induction-motor equivalent circuit and its torque-slip curve, and the AC voltage controller that trims power with firing angle.*

📅 Tech Day 91 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics

---

## 🔧 Measuring Instruments: Electrodynamometer (EMMC) Instruments

### 📖 Concept Deep Dive

The **electrodynamometer (EMMC)** instrument replaces the permanent magnet of a PMMC with **fixed current-carrying coils**, so the working field is produced by the measured current itself. It has **two fixed coils** (in series, split to create a uniform field) and a **moving coil** pivoted between them. Both fixed and moving coils carry current; the torque arises from the interaction of their fields.

**Torque from mutual inductance.** Let the moving coil carry current `i₁` and the fixed coils `i₂`, with mutual inductance `M` between them that varies with the deflection angle θ. The instantaneous deflecting torque is:

```
Td = i₁ i₂ (dM/dθ)
```

- **As an ammeter/wattmeter** the fixed and moving coils may carry the same current (`i₁ = i₂ = i`), giving `Td = i²(dM/dθ)` → **θ ∝ I²** (square-law, like MI).
- On AC, the instrument responds to the **mean of the product**, i.e. the **true RMS** (for a current instrument) — independent of waveform. This "squaring" property makes it a **transfer instrument**: calibrated on DC, it reads correctly on AC.

**Why it is the heart of the wattmeter.** Connect the **fixed coils as the current coil (CC)** carrying load current `i`, and the **moving coil as the pressure coil (PC)** carrying a current proportional to voltage `v` (through a high series resistance). Then:

```
Average torque ∝ average of (v·i) = V·I·cosφ = active power P
```

So the electrodynamometer **directly measures real (active) power** on AC — hence its dominance as the analogue wattmeter movement. The scale of a wattmeter is **uniform** (torque ∝ P), unlike the square-law ammeter/voltmeter versions.

**Damping & control.** **Air-friction** damping (eddy-current damping is impossible — no permanent magnet; a magnet would distort the weak working field). **Spring** control provides the restoring torque and leads current into the moving coil.

**Errors.** Because the field is weak and self-generated:
- **Stray magnetic field error** (needs magnetic/electrostatic shielding).
- **Frequency error** (PC inductance causes the PC current to not be exactly in phase with voltage; compensated with a capacitor across part of the series resistor).
- **Temperature error**, **eddy currents in metal parts**, and **mutual-inductance nonlinearity**.
- Low torque/weight ratio → **more friction error** and higher power consumption than PMMC.

| Feature | PMMC | Electrodynamometer |
|---|---|---|
| Field source | Permanent magnet | **Current-carrying fixed coils** |
| Supply | DC only | **AC & DC (transfer instrument)** |
| Reads on AC | — | **True RMS** / power |
| As wattmeter scale | — | **Uniform (∝ P)** |
| Damping | Eddy current | **Air friction** |
| Accuracy on AC | — | **High (standard/transfer)** |

> 💎 **KEY RESULT** — EMMC torque `Td = i₁ i₂ (dM/dθ)`. As an ammeter/voltmeter `θ ∝ I²` (square-law); as a **wattmeter** average torque `∝ VI cosφ = P` with a **uniform scale**. It is a **transfer instrument** (DC-calibrated, reads true-RMS AC).

> 🧠 **MEMORY HOOK** — "**Two currents multiply (i₁·i₂·dM/dθ)**: same current → squares (RMS); voltage × current → power (wattmeter)."

### 📐 Formula Sheet

| Quantity | Expression |
|---|---|
| Deflecting torque (general) | `Td = i₁ i₂ (dM/dθ)` |
| As ammeter/voltmeter | `Td = i²(dM/dθ)` → `θ ∝ I²` |
| Steady deflection (A/V) | `θ = (I²/K)(dM/dθ)` |
| As wattmeter (avg torque) | `Tavg ∝ VI cosφ = P` |
| Control (spring) | `Tc = K θ` |
| Reading on AC | true RMS (current) / real power (wattmeter) |

### 🧮 Solved Examples

**Example 1 — Wattmeter deflection.**
An electrodynamometer wattmeter's deflection is `θ = C·P` (C constant, uniform scale). It reads 500 W at a deflection of 50°. What power corresponds to a deflection of 80°?

```
θ ∝ P  ⇒  P₂ = P₁·(θ₂/θ₁) = 500·(80/50) = 500·1.6 = 800 W
```

Power **= 800 W** (linear scale — contrast the square-law ammeter).

**Example 2 — Torque from mutual inductance.**
The mutual inductance of an EMMC ammeter varies as `M = (10 + 6θ) µH` (θ in rad). The same current `I = 2 A` flows through fixed and moving coils. Find the deflecting torque.

```
dM/dθ = 6 µH/rad = 6×10⁻⁶ H/rad   (constant)
Td = I²(dM/dθ) = (2²)(6×10⁻⁶) = 4·6×10⁻⁶ = 24×10⁻⁶ N·m = 24 µN·m
```

Deflecting torque **= 24 µN·m**.

### ⚠️ Common Traps

1. **Eddy-current damping in EMMC** — No; it uses **air-friction** damping (no permanent magnet available).
2. **Ammeter scale is uniform** — EMMC as ammeter/voltmeter is **square-law**; only the **wattmeter** version has a uniform (∝ P) scale.
3. **Measures apparent power** — The wattmeter reads **active power** `VI cosφ`, not VA.
4. **PMMC can read AC** — PMMC reads **average** (zero on symmetric AC); EMMC reads **RMS/power** on AC.
5. **Forgetting the PC frequency compensation** — pressure-coil inductance causes error; a compensating capacitor is used.
6. **Low burden like PMMC** — EMMC has **higher power consumption** and lower torque/weight ratio.

### 📝 Test — Measuring Instruments (8 Q)

1. The deflecting torque of an electrodynamometer instrument is:
   (a) `BANI` (b) `i₁i₂(dM/dθ)` (c) `½i²(dL/dθ)` (d) `Kθ`
2. Used as an ammeter, the EMMC scale is:
   (a) uniform (b) square-law (c) logarithmic (d) hyperbolic
3. As a wattmeter, the EMMC indicates:
   (a) apparent power (b) active power VIcosφ (c) reactive power (d) RMS voltage
4. Damping in electrodynamometer instruments is:
   (a) eddy current (b) air friction (c) fluid (d) magnetic
5. An EMMC instrument calibrated on DC reads correctly on AC because it is a:
   (a) rectifier type (b) transfer instrument (c) thermal type (d) induction type
6. **(NAT)** An EMMC wattmeter (uniform scale) reads 300 W at 30° deflection. Find the power (W) at 72° deflection.
7. **(NAT)** For an EMMC ammeter `M = (20 + 5θ) µH`, θ in rad, same current `I = 4 A` through both coils. Find the deflecting torque (µN·m).
8. **(NAT)** A wattmeter current coil carries 5 A, the pressure coil sees 200 V, and the load pf is 0.8. Find the wattmeter reading (W).

<details><summary>🔑 Solutions</summary>

**1 → (b).** `Td = i₁i₂(dM/dθ)`.

**2 → (b).** Same current in both coils → `θ ∝ I²` (square-law).

**3 → (b).** Average torque ∝ `VI cosφ` = active power.

**4 → (b).** Air-friction damping.

**5 → (b).** Transfer instrument (squaring action → true RMS).

**6 (NAT).** θ ∝ P ⇒ `P = 300·(72/30) = 300·2.4 = 720 W`.

**7 (NAT).** `dM/dθ = 5 µH/rad`. `Td = I²(dM/dθ) = 16·5×10⁻⁶ = 80×10⁻⁶ N·m = 80 µN·m`.

**8 (NAT).** `P = V·I·cosφ = 200·5·0.8 = 800 W`.

</details>

---

## 🔧 Electrical Machines: Induction Motor II — Equivalent Circuit, Torque-Slip Curve & Maximum Torque

### 📖 Concept Deep Dive

Building on the rotating field and slip (Day 90), the **per-phase equivalent circuit** lets us compute currents, torque and efficiency. The induction motor is essentially a **rotating transformer**: the stator is the primary, the rotor the secondary, coupled across the air gap, with slip varying the effective rotor parameters.

**Per-phase equivalent circuit.** Stator: `R1 + jX1`; magnetising branch `Rc || jXm`; rotor referred to stator: `R2' + jX2'`. The rotor's slip enters as the **slip-dependent resistance** `R2'/s`. Splitting it:

```
R2'/s = R2' + R2'(1 − s)/s
```

- `R2'` = actual rotor copper loss term,
- `R2'(1 − s)/s` = the **mechanical power (load) resistance** — electrical power delivered to this term equals the **gross mechanical power** developed.

**Approximate (Thevenin) analysis.** Moving the magnetising branch to the terminals and applying Thevenin to the left of the air gap gives `Vth, Rth, Xth`. The rotor current and the developed torque per phase (×3 for three phases) are:

```
I2' = Vth / √[(Rth + R2'/s)² + (Xth + X2')²]
T = (3/ωs) · Vth²·(R2'/s) / [(Rth + R2'/s)² + (Xth + X2')²]
```

where `ωs = 4πf/P` (synchronous mechanical speed).

**Torque-slip curve.** Plotting `T` vs `s` (0 to 1):
- Near **small slip** (normal running): `R2'/s` is large, `T ≈ (3/ωs)·Vth²·s/R2'` → **torque roughly ∝ s** (nearly linear, stable region).
- At **large slip** (near start): `T ≈ (3/ωs)·Vth²·R2'/[s·(Xth+X2')²]` → **torque ∝ 1/s** (falling region).
- Between them lies the **breakdown (maximum) torque**.

**Maximum torque (pull-out).** Differentiating and setting `dT/ds = 0`:

```
s_maxT = R2' / √(Rth² + (Xth + X2')²)
Tmax = (3/ωs) · Vth² / {2·[Rth + √(Rth² + (Xth + X2')²)]}
```

**Tmax is independent of R2'** — rotor resistance only sets the **slip** at which it occurs. Neglecting stator impedance (`Rth ≈ 0, Xth ≈ 0`) simplifies to the classic forms `s_maxT ≈ R2'/X2'` and `Tmax ≈ (3/ωs)·Vth²/(2X2')`.

**Key design insight.** A **wound-rotor** motor adds external rotor resistance to shift `s_maxT` toward 1, giving **high starting torque** and limiting starting current — then the resistance is cut out for efficient running. Starting torque equals `Tmax` when `R2' = √(Rth² + (Xth+X2')²)` (≈ `X2'` if stator neglected).

| Region | Slip | Torque behaviour |
|---|---|---|
| Running (stable) | small s | `T ∝ s` (near-linear) |
| Breakdown | `s_maxT` | maximum (pull-out) |
| Starting | s = 1 | `Tst` (on falling branch) |

> 💎 **KEY RESULT** — `s_maxT = R2'/√(Rth²+(Xth+X2')²)`; `Tmax` is **independent of R2'**. Mechanical power term `= R2'(1−s)/s`; `Pm = (1−s)Pag`.

> 🧠 **MEMORY HOOK** — "**R2'/s splits into R2' (loss) + R2'(1−s)/s (load)**"; raising R2' slides the torque peak toward start without changing its height.

### 📐 Formula Sheet

| Quantity | Expression |
|---|---|
| Slip resistance split | `R2'/s = R2' + R2'(1−s)/s` |
| Rotor current (Thevenin) | `I2' = Vth/√[(Rth+R2'/s)² + (Xth+X2')²]` |
| Torque | `T = (3/ωs)·Vth²(R2'/s)/[(Rth+R2'/s)²+(Xth+X2')²]` |
| Slip at max torque | `s_maxT = R2'/√(Rth²+(Xth+X2')²)` |
| Max torque | `Tmax = (3/ωs)·Vth²/{2[Rth+√(Rth²+(Xth+X2')²)]}` |
| Simplified (stator neglected) | `s_maxT ≈ R2'/X2'`, `Tmax ≈ 3Vth²/(2ωs X2')` |

### 🧮 Solved Examples

**Example 1 — Slip at maximum torque (stator neglected).**
A 3-φ induction motor has rotor `R2' = 0.4 Ω`, standstill rotor reactance `X2' = 2 Ω` (referred). Neglecting stator impedance, find the slip at maximum torque.

```
s_maxT ≈ R2'/X2' = 0.4/2 = 0.2
```

Maximum torque occurs at **slip 0.2 (20%)**.

**Example 2 — External rotor resistance for max starting torque.**
For the same motor, what external rotor resistance (referred) makes the **starting torque equal to the maximum torque**?

```
Max torque at start ⇒ s_maxT = 1 ⇒ R2'(total)/X2' = 1 ⇒ R2'(total) = X2' = 2 Ω
External resistance = R2'(total) − R2' = 2 − 0.4 = 1.6 Ω
```

Add **1.6 Ω** (referred) in the rotor to get `Tmax` at starting.

### ⚠️ Common Traps

1. **Tmax depends on R2'** — No; only `s_maxT` does. `Tmax` is set by `Vth`, `Xth+X2'`, `Rth`.
2. **Forgetting to refer rotor quantities** — `R2', X2'` must be **referred to the stator** before use in the equivalent circuit.
3. **Mechanical power = `R2'/s` power** — Mechanical power corresponds to `R2'(1−s)/s`; the full `R2'/s` term includes rotor copper loss.
4. **Using supply voltage instead of `Vth`** — the Thevenin voltage `Vth < V` (divided by magnetising branch).
5. **Neglecting stator for GATE numericals that give R1, X1** — only drop stator terms when the question says so.
6. **Starting current low** — at `s=1`, `R2'/s` is small → **large starting current** (5–7× rated), the reason for starters.

### 📝 Test — Electrical Machines (8 Q)

1. In the IM equivalent circuit, the term representing gross mechanical power is:
   (a) `R2'` (b) `R2'/s` (c) `R2'(1−s)/s` (d) `sR2'`
2. The maximum torque of an induction motor is:
   (a) proportional to R2' (b) independent of R2' (c) inversely ∝ Vth² (d) zero
3. Rotor resistance is added (wound rotor) mainly to:
   (a) reduce Tmax (b) increase starting torque (c) raise speed (d) reduce slip
4. At starting, the slip is 1, so `R2'/s` is:
   (a) maximum (b) equal to R2' (c) infinite (d) zero
5. The slip at maximum torque (stator neglected) is:
   (a) `X2'/R2'` (b) `R2'/X2'` (c) `R2'·X2'` (d) 1
6. **(NAT)** An IM has `R2' = 0.5 Ω`, `X2' = 2.5 Ω` (stator neglected). Find the slip at maximum torque.
7. **(NAT)** For the motor in Q6, what total rotor resistance (Ω) gives maximum torque at starting?
8. **(NAT)** A 4-pole, 50 Hz IM has `s_maxT = 0.15`. Find the rotor speed (rpm) at maximum torque.

<details><summary>🔑 Solutions</summary>

**1 → (c).** `R2'(1−s)/s` is the load (mechanical) resistance.

**2 → (b).** `Tmax` independent of R2'.

**3 → (b).** Shifts peak toward start → high starting torque.

**4 → (b).** At s=1, `R2'/s = R2'`.

**5 → (b).** `s_maxT = R2'/X2'`.

**6 (NAT).** `s_maxT = R2'/X2' = 0.5/2.5 = 0.2`.

**7 (NAT).** Max torque at start ⇒ `R2'(total) = X2' = 2.5 Ω`.

**8 (NAT).** `Ns = 120·50/4 = 1500 rpm`. `N = Ns(1−s) = 1500·(1−0.15) = 1500·0.85 = 1275 rpm`.

</details>

---

## 🔧 Power Electronics: AC Voltage Controllers — Phase Control, Integral-Cycle Control & TRIAC Circuits

### 📖 Concept Deep Dive

An **AC voltage controller (AC-AC, same frequency)** varies the **RMS voltage** delivered to a load from a fixed AC supply, using **anti-parallel SCRs** (or a **TRIAC**) between source and load. Applications: light dimming, fan/heater control, soft-starting of induction motors. Two control strategies exist.

**1. Phase control (On-Off within each cycle).** The SCR/TRIAC is fired at a **firing angle α** each half-cycle, so current flows only from α to π (R load). The load sees a **chopped sine wave**. For a **single-phase, full-wave, R load**:

```
Vo,rms = Vs·√[(1/π)(π − α + (sin2α)/2)]
```

where `Vs` = source RMS. At `α = 0`, `Vo,rms = Vs` (full output); as α → π, output → 0. Phase control is **continuous and fast** but injects **harmonics** and gives a **poor (lagging) input power factor** at large α because the current is delayed and distorted.

For an **RL load**, conduction continues beyond π (current lags), so there is an **extension angle β**; the SCR conducts from α to β. The limiting case `α = φ` (load angle) gives full sine output; firing below φ has no control effect (the device stays on).

**2. Integral-cycle (burst / on-off) control.** The controller passes **n complete cycles** ON and keeps **m cycles OFF**, repeating. The load RMS voltage is:

```
Vo,rms = Vs·√[n/(n + m)] = Vs·√k,   where k = n/(n+m) = duty
Power delivered = k·(full-load power)
```

Because switching occurs only at **zero crossings**, integral-cycle control produces **no harmonics of the supply frequency** (low RFI) and a **near-unity displacement factor** — but it causes **flicker** and sub-harmonics, so it suits **high-thermal-inertia loads** (heaters, ovens), not lighting.

**TRIAC circuits.** A **TRIAC** is a bidirectional device (equivalent to two anti-parallel SCRs in one package) triggered in **all four quadrants** via a **DIAC** in the gate for simple phase-control dimmers. TRIACs are limited to **low-frequency, low-to-medium power** (lighting, fans) due to poorer dv/dt and switching than discrete SCR pairs.

| Aspect | Phase control | Integral-cycle control |
|---|---|---|
| Switching instant | at firing angle α | at **zero crossings** |
| Harmonics | high (distorted current) | **none of supply freq** (but sub-harmonics) |
| Input pf | poor at large α | near unity (displacement) |
| Best load | lighting, motors | **heaters, ovens** (thermal inertia) |
| Response | fast, continuous | coarse (per cycle) |

> 💎 **KEY RESULT** — 1-φ full-wave R-load phase control: `Vo,rms = Vs√[(1/π)(π − α + sin2α/2)]`. Integral-cycle: `Vo,rms = Vs√(n/(n+m))`, `P = k·Pfull`.

> 🧠 **MEMORY HOOK** — "**Phase = chop every cycle (harmonics, fast); integral = count whole cycles at zero-cross (clean, for heaters).**"

### 📐 Formula Sheet

| Quantity | Expression |
|---|---|
| Phase control, R load, Vo,rms | `Vs√[(1/π)(π − α + (sin2α)/2)]` |
| Full output | `α = 0 ⇒ Vo,rms = Vs` |
| Integral-cycle Vo,rms | `Vs√(n/(n+m))` |
| Integral-cycle power | `P = (n/(n+m))·Pfull = k·Pfull` |
| RL load, no control below | `α ≤ φ` (load angle) |
| TRIAC | bidirectional; DIAC-triggered dimmer |

### 🧮 Solved Examples

**Example 1 — Integral-cycle power.**
A 230 V, 50 Hz integral-cycle controller supplies a heater by passing 6 cycles ON and 4 cycles OFF. Find the load RMS voltage and the fraction of full power delivered.

```
k = n/(n+m) = 6/(6+4) = 6/10 = 0.6
Vo,rms = Vs√k = 230·√0.6 = 230·0.7746 = 178.2 V
Power fraction = k = 0.6  ⇒  60% of full-load power
```

RMS voltage **≈ 178.2 V**; power delivered **= 60%** of full.

**Example 2 — Phase control RMS at α = 90°.**
A 1-φ full-wave AC voltage controller (R load) on a 230 V supply fires at `α = 90° = π/2`. Find the output RMS voltage.

```
Vo,rms = Vs·√[(1/π)(π − α + (sin2α)/2)]
sin2α = sin180° = 0,  α = π/2
= 230·√[(1/π)(π − π/2 + 0)] = 230·√[(1/π)(π/2)] = 230·√(1/2)
= 230·0.7071 = 162.6 V
```

Output RMS **≈ 162.6 V** (i.e. `Vs/√2` at α = 90°).

### ⚠️ Common Traps

1. **Integral-cycle power ∝ √k** — No; **voltage ∝ √k**, but **power ∝ k** (since P ∝ Vrms²).
2. **Phase control has no harmonics** — it is **harmonic-rich**; integral-cycle (zero-cross) is the clean one.
3. **RL load: control from α = 0** — for RL, firing below the load angle φ gives **no control** (device stays conducting).
4. **TRIAC for high-frequency/high-power** — TRIACs suit **low-frequency, modest power**; use SCR pairs or other devices otherwise.
5. **Using Vs/2 instead of Vs/√2 at α=90°** — the RMS at α=90° (R load) is `Vs/√2`, not `Vs/2`.
6. **Confusing displacement vs distortion pf** — integral-cycle has good displacement factor but introduces sub-harmonics (flicker).

### 📝 Test — Power Electronics (8 Q)

1. An AC voltage controller changes the ______ delivered to the load:
   (a) frequency (b) RMS voltage (c) phase sequence (d) number of phases
2. Integral-cycle control switches the device at:
   (a) firing angle α (b) peak voltage (c) zero crossings (d) random instants
3. Which control strategy injects the most supply-frequency harmonics?
   (a) integral-cycle (b) phase control (c) both equally (d) neither
4. A TRIAC is equivalent to:
   (a) two series diodes (b) two anti-parallel SCRs (c) one SCR (d) a GTO
5. For a 1-φ full-wave R-load phase controller, full output occurs at:
   (a) α = π (b) α = π/2 (c) α = 0 (d) α = π/4
6. **(NAT)** An integral-cycle controller passes 8 cycles ON, 2 OFF, from a 200 V supply. Find the load RMS voltage (V).
7. **(NAT)** For the Q6 controller, find the percentage of full-load power delivered.
8. **(NAT)** A 1-φ full-wave R-load controller on 230 V fires at α = 60° (π/3). Find Vo,rms (V). [Use `Vo,rms = Vs√((1/π)(π − α + sin2α/2))`, sin120° = 0.866.]

<details><summary>🔑 Solutions</summary>

**1 → (b).** It varies RMS voltage at the same frequency.

**2 → (c).** Zero crossings (no supply-frequency harmonics).

**3 → (b).** Phase control (chopped, distorted current).

**4 → (b).** Two anti-parallel SCRs in one package.

**5 → (c).** α = 0 → full output.

**6 (NAT).** `k = 8/10 = 0.8`; `Vo,rms = 200√0.8 = 200·0.8944 = 178.9 V`.

**7 (NAT).** Power fraction `= k = 0.8 = 80%`.

**8 (NAT).**
```
α = π/3 = 1.0472 rad,  sin2α = sin120° = 0.866
Term = (1/π)(π − 1.0472 + 0.866/2) = (1/π)(3.1416 − 1.0472 + 0.433)
     = (1/π)(2.5274) = 0.8045
Vo,rms = 230·√0.8045 = 230·0.8970 = 206.3 V
```
Output RMS **≈ 206.3 V**.

</details>

---

## 📊 Tech Progress

```
Measurements      [███████░░░░░░░░░░░░]  Round 5 · topic  7/20 (Electrodynamometer)
Electrical Mach.  [███████████░░░░░░░░]  Round 5 · topic 11/19 (Induction motor II)
Power Electronics [███████████░░░░░░░░]  Round 5 · topic 11/19 (AC voltage controllers)
```

> 🎯 **Day 91 one-liners:** (1) **EMMC: Td = i₁i₂(dM/dθ); ammeter square-law, wattmeter uniform (∝ P); transfer instrument.** (2) **IM: R2'/s = R2' + R2'(1−s)/s; s_maxT = R2'/√(Rth²+(Xth+X2')²); Tmax ⟂ R2'.** (3) **AC controller: phase (chop, harmonics) vs integral-cycle (zero-cross, V∝√k, P∝k).**

*Correctness over length — derive, don't memorise blindly; verify any "verify" figure. Onward. ⚡*
