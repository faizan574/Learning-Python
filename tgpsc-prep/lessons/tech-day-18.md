# ⚡ GATE Technical Revision — Day 18 (2026-08-07)

*The cathode-ray tube that draws waveforms with an electron beam, the single-phase motor that needs a push to start, and the inverter that makes AC from DC.*

`📅 Tech Day 18  ·  ⏱ ~45 min  ·  🎯 Measurements + Machines + Power Electronics`

Attempt each section's test **before** opening its solutions — recall beats re-reading.

---

## 🔧 Measuring Instruments: The Cathode-Ray Oscilloscope (CRO)

Day 17 finished AC bridges. The **CRO** displays voltage-vs-time waveforms using a beam of electrons deflected across a phosphor screen — the universal lab instrument.

### 📖 Concept Deep Dive

**Cathode-Ray Tube (CRT).** An **electron gun** (heated cathode + control grid + accelerating/focusing anodes) produces and accelerates a narrow beam; two pairs of **deflecting plates** (vertical Y, horizontal X) steer it; the beam strikes a **phosphor screen** producing a spot.

**Electrostatic deflection sensitivity.** For plates of length `L`, separation `d`, at distance `Ls` from screen centre, with accelerating voltage `Va` and deflecting voltage `Vd`:

```
Deflection on screen  D = (L · Ls · Vd)/(2 · d · Va)
Deflection sensitivity  S = D/Vd = (L · Ls)/(2 d Va)   [mm/volt]
Deflection factor  G = 1/S = (2 d Va)/(L Ls)          [volts/mm]
```

So sensitivity **falls** as accelerating voltage `Va` rises (faster electrons deflect less), and rises with **longer plates / longer screen distance / smaller gap**.

**Time-base (sweep) generator.** A **sawtooth** voltage on the X-plates sweeps the beam left→right at constant speed, then flies back (retrace, blanked). This converts the horizontal axis to **time**. The **Y-input** (the signal) deflects vertically → a **voltage-vs-time** trace.

**Synchronization / triggering.** For a **stationary** display, the sweep must start at the same point of the waveform each time — **triggered sweep** (trigger level/slope) locks the display. Free-running sweeps drift.

**Measurements:**

```
Voltage = (vertical divisions) × (Volts/div setting)
Time period = (horizontal divisions) × (Time/div setting) ; f = 1/T
```

**Lissajous figures.** Apply two sinusoids to X and Y (no time-base). The pattern's shape gives the **frequency ratio** and **phase**:

```
fx/fy = (no. of horizontal tangencies)/(no. of vertical tangencies)
Phase (equal freq): from the ellipse:  sin φ = y-intercept/y-max  (= x1/x2)
```
Circle = 90° phase, equal amplitude; straight line = 0°/180°.

**Probes.** A **×10 (attenuator) probe** has a 9 MΩ series R + compensating C, giving **10:1 attenuation** and **high input impedance** (10 MΩ), reducing circuit loading; must be **compensated** (adjust trimmer for a flat square wave).

**DSO (Digital Storage Oscilloscope).** Samples the input with an **ADC**, stores in memory, displays digitally. Key specs: **sampling rate (≥ 2× signal bandwidth, Nyquist)**, **bandwidth**, **memory depth**, **resolution**. Advantages: capture single-shot/transients, storage, math, no fade.

> 💎 **KEY RESULT** — CRO deflection sensitivity `S = L·Ls/(2 d Va)` (falls with Va). **Time-base = sawtooth** on X, signal on Y → voltage-vs-time. **Lissajous** gives frequency ratio (tangency counts) and phase. **×10 probe** = 10:1 attenuation, high-Z. **DSO** samples at **≥ 2× bandwidth (Nyquist)**.

> 🧠 **MEMORY HOOK** — "**Gun → plates → screen. Sensitivity ∝ L·Ls/(d·Va). Sawtooth sweeps time, trigger freezes it. Lissajous = freq/phase; ×10 probe = high-Z; DSO = sample ≥ 2×BW.**"

> ⚠️ **TRAP ALERT** — Deflection sensitivity is **inversely** proportional to the **accelerating voltage Va** (higher Va → less deflection). For **Lissajous**, `fx/fy` = ratio of **tangency points** on the respective axes. A DSO must sample at **≥ 2× the signal bandwidth** (Nyquist) to avoid **aliasing**.

### 📐 Formula Sheet

```
Deflection  D = L·Ls·Vd/(2 d Va)
Sensitivity S = D/Vd = L·Ls/(2 d Va)  [mm/V] ;  Deflection factor = 1/S [V/mm]
Voltage read = (div) × (V/div) ;  T = (div) × (time/div) ;  f = 1/T
Lissajous: fx/fy = (horizontal tangencies)/(vertical tangencies)
Phase (equal f): sinφ = intercept/max
×10 probe: 10:1 attenuation, Rin ≈ 10 MΩ (9 MΩ + 1 MΩ)
DSO: sampling rate ≥ 2 × bandwidth (Nyquist)
```

### 🧮 Solved Examples

**Example 1 — deflection sensitivity.**
A CRT has deflecting plates of length `L = 2 cm`, plate separation `d = 0.5 cm`, screen distance `Ls = 20 cm`, accelerating voltage `Va = 2000 V`. Find the deflection sensitivity.

```
S = L·Ls/(2 d Va) = (0.02 × 0.20)/(2 × 0.005 × 2000)
  = (0.004)/(20) = 0.0002 m/V = 0.2 mm/V
```
**S = 0.2 mm/V** (deflection factor = 5 V/mm).

**Example 2 — waveform measurement.**
On a CRO, a sine wave spans **4 vertical divisions peak-to-peak** at **2 V/div**, and **one cycle occupies 5 horizontal divisions** at **1 ms/div**. Find the peak voltage and frequency.

```
Peak-to-peak = 4 div × 2 V/div = 8 V ⇒ Vpeak = 4 V ; Vrms = 4/√2 = 2.83 V
Period T = 5 div × 1 ms/div = 5 ms ⇒ f = 1/T = 1/0.005 = 200 Hz
```
**Vpeak = 4 V (Vrms ≈ 2.83 V); f = 200 Hz.**

### ⚠️ Common Traps

1. **Sensitivity ∝ 1/Va** — a higher accelerating voltage gives **less** deflection (brighter but less sensitive).
2. **Time-base is a sawtooth** on the X-plates; the **signal** goes to Y-plates.
3. **Lissajous frequency ratio = tangency counts** (horizontal:vertical), not amplitude.
4. **×10 probe reduces loading** (10 MΩ) but attenuates by 10 — remember to multiply readings by 10.
5. **DSO sampling ≥ 2× bandwidth (Nyquist)** — undersampling causes **aliasing**.
6. **Peak-to-peak vs peak vs RMS** — a common measurement slip.

### 📝 Test — Measuring Instruments (8 Q)

1. **(MCQ)** The deflection sensitivity of a CRT is proportional to:
   (a) Va  (b) 1/Va  (c) Va²  (d) independent of Va
2. **(MCQ)** The time-base of a CRO applies a ______ to the horizontal plates.
   (a) sine wave  (b) sawtooth  (c) square wave  (d) DC
3. **(MCQ)** Lissajous figures are used to measure:
   (a) power  (b) frequency ratio and phase  (c) resistance  (d) DC voltage
4. **(MCQ)** A ×10 oscilloscope probe provides:
   (a) 10× gain  (b) 10:1 attenuation with high input impedance  (c) no attenuation  (d) low impedance
5. **(MCQ)** To avoid aliasing, a DSO must sample at least at:
   (a) the signal frequency  (b) twice the bandwidth (Nyquist)  (c) half the frequency  (d) any rate
6. **(NAT)** A CRT: L = 2.5 cm, Ls = 24 cm, d = 0.6 cm, Va = 2500 V. Find the deflection sensitivity in mm/V. ______ mm/V
7. **(NAT)** A waveform on a CRO occupies 4 horizontal divisions per cycle at 0.5 ms/div. Find the frequency in Hz. ______ Hz
8. **(NAT)** A signal reads 3 divisions peak at 5 V/div. Find the peak voltage in V. ______ V

<details>
<summary>🔑 Solutions</summary>

**1 → (b) 1/Va.**

**2 → (b) sawtooth.**

**3 → (b) frequency ratio and phase.**

**4 → (b) 10:1 attenuation, high input impedance.**

**5 → (b) twice the bandwidth (Nyquist).**

**6 →**
```
S = L·Ls/(2 d Va) = (0.025 × 0.24)/(2 × 0.006 × 2500)
  = 0.006/30 = 0.0002 m/V = 0.2 mm/V
```
**S = 0.2 mm/V.**

**7 →** T = 4 × 0.5 ms = 2 ms ; f = 1/0.002 = **500 Hz.**

**8 →** Vpeak = 3 × 5 = **15 V.**

</details>

---

## 🔧 Electrical Machines: Single-Phase Induction Motors — Double-Revolving-Field Theory & Starting

Day 17 finished 3-φ induction motors. A **single-phase** induction motor has **no rotating field** from a single winding — so it is **not self-starting**. Two theories explain it; starting needs an auxiliary method.

### 📖 Concept Deep Dive

**Why not self-starting.** A single winding produces a **pulsating** (alternating) MMF, not a rotating one. At standstill, the net starting torque is **zero** (equal and opposite torques). But if given an initial spin, it develops torque and runs.

**Double-Revolving-Field Theory.** A pulsating field `Fm·cos(ωt)` along one axis is resolved into **two rotating fields** of half amplitude rotating in **opposite** directions:

```
Pulsating field = forward field (Fm/2, +ω) + backward field (Fm/2, −ω)
```

- The **forward** field produces torque in one direction (slip `s`); the **backward** field produces torque in the opposite direction (slip `2 − s`).
- **At standstill (s = 1):** both slips = 1, torques equal & opposite → **net torque = 0** (not self-starting).
- **Once running (s < 1):** the forward torque exceeds the backward torque → net torque drives the rotor. The backward field causes **extra losses** and lower efficiency/pf than a 3-φ motor.

```
Forward slip = s ;  Backward slip = 2 − s
Net torque = Tforward(s) − Tbackward(2−s)  ; zero at s = 1
```

**Starting methods (create a rotating field via an auxiliary winding at ~90° space):**

| Type | How | Starting torque | Use |
|---|---|---|---|
| **Split-phase** | auxiliary winding (high R/L ratio) → phase difference | moderate | fans, pumps |
| **Capacitor-start** | series capacitor in aux winding → ~90° phase | **high** | compressors, pumps |
| **Capacitor-start capacitor-run** | two capacitors | high + good run pf | best performance |
| **Permanent-split capacitor (PSC)** | run capacitor always in | low start | fans (quiet) |
| **Shaded-pole** | shading ring on pole corner | **very low** | small fans, toys |

The **capacitor** creates the needed **phase split** so the two windings' fields combine into a (near) rotating field → starting torque. **Shaded-pole** uses a copper shading ring whose induced current delays flux in part of the pole, giving a weak sweeping field.

> 💎 **KEY RESULT** — A single-phase induction motor is **not self-starting** (pulsating field = forward + backward rotating fields; net torque zero at s = 1). Forward slip `s`, backward slip `2 − s`. **Starting** needs an auxiliary/capacitor/shaded-pole method to create a rotating field.

> 🧠 **MEMORY HOOK** — "**One winding = pulsating = forward(s) + backward(2−s); zero torque at standstill.** Give it a rotating field: split-phase, capacitor (high torque), or shaded-pole (weak)."

> ⚠️ **TRAP ALERT** — The **backward slip is (2 − s)**, not −s. Single-phase motors have **zero starting torque** on the main winding alone — the auxiliary winding/capacitor/shaded pole is what makes them start. **Shaded-pole** has the **lowest** starting torque.

### 📐 Formula Sheet

```
Pulsating field → forward (Fm/2, +ω) + backward (Fm/2, −ω)
Forward slip = s ;  Backward slip = 2 − s
Net torque = Tf(s) − Tb(2−s) ;  = 0 at s = 1 (standstill)
Synchronous speed Ns = 120 f/P (as usual)
Capacitor-start: aux winding + series C → ≈90° phase split (high starting torque)
Shaded-pole: shading ring → weak rotating field (lowest torque)
```

### 🧮 Solved Examples

**Example 1 — forward & backward slips.**
A single-phase induction motor runs at a slip of **s = 0.05**. Find the slip of the rotor with respect to the **backward** rotating field.

```
Backward slip = 2 − s = 2 − 0.05 = 1.95
```
**Backward slip = 1.95.** (The rotor moves almost "against" the backward field, which is why it contributes braking torque and losses.)

**Example 2 — speed.**
A 4-pole, 50 Hz single-phase induction motor runs at a slip of **4%**. Find the rotor speed.

```
Ns = 120 f/P = 120 × 50/4 = 1500 rpm
Nr = Ns(1 − s) = 1500 × (1 − 0.04) = 1500 × 0.96 = 1440 rpm
```
**Nr = 1440 rpm.**

### ⚠️ Common Traps

1. **Single-phase induction motor is NOT self-starting** (zero net torque at standstill).
2. **Backward field slip = 2 − s** (not −s or s).
3. **Capacitor-start gives high starting torque**; **shaded-pole the lowest**.
4. **The pulsating field = two equal counter-rotating fields** (each Fm/2), the core of double-revolving-field theory.
5. **Auxiliary winding is displaced ~90° in space** and carries a phase-shifted current (via R or C) to create rotation.
6. **Once running**, even if the auxiliary winding is disconnected (centrifugal switch), the motor continues on the main winding.

### 📝 Test — Electrical Machines (8 Q)

1. **(MCQ)** A single-phase induction motor is:
   (a) self-starting  (b) not self-starting  (c) always synchronous  (d) a DC motor
2. **(MCQ)** By double-revolving-field theory, a pulsating field equals:
   (a) one rotating field  (b) two equal opposite rotating fields  (c) a DC field  (d) three fields
3. **(MCQ)** The slip of the rotor w.r.t. the backward field is:
   (a) s  (b) −s  (c) 2 − s  (d) 1 − s
4. **(MCQ)** Which starting method gives the highest starting torque?
   (a) shaded-pole  (b) capacitor-start  (c) split-phase  (d) none
5. **(MCQ)** The shaded-pole motor is used for:
   (a) compressors  (b) small fans/toys (low torque)  (c) lifts  (d) traction
6. **(NAT)** A single-phase motor runs at slip 0.06. Find the backward-field slip. ______
7. **(NAT)** A 6-pole, 50 Hz single-phase motor runs at slip 5%. Find the rotor speed in rpm. ______ rpm
8. **(NAT)** The net starting torque of a single-phase induction motor (main winding only) is ______ N·m. ______

<details>
<summary>🔑 Solutions</summary>

**1 → (b) not self-starting.**

**2 → (b) two equal opposite rotating fields.**

**3 → (c) 2 − s.**

**4 → (b) capacitor-start.**

**5 → (b) small fans/toys.**

**6 →** Backward slip = 2 − 0.06 = **1.94.**

**7 →** Ns = 120×50/6 = 1000 rpm; Nr = 1000×(1−0.05) = **950 rpm.**

**8 →** At standstill forward and backward torques cancel ⇒ **0 N·m.**

</details>

---

## 🔧 Power Electronics: Inverters I — Single-Phase VSI (Half & Full Bridge), THD

Day 17 finished choppers. An **inverter** converts **DC → AC**. The **Voltage Source Inverter (VSI)** switches a DC source to produce an AC output; we cover the single-phase **half-bridge** and **full-bridge**.

### 📖 Concept Deep Dive

**Single-phase half-bridge VSI.** Two switches across a split DC supply (`+Vs/2, −Vs/2`); the output is a **square wave** of amplitude **±Vs/2**:

```
Output (square wave) amplitude = ± Vs/2
RMS output (square wave)  Vo,rms = Vs/2
Fundamental RMS  Vo1 = (1/√2)·(4/π)·(Vs/2) = (2Vs)/(π√2) = 0.45 Vs
```

**Single-phase full-bridge VSI.** Four switches (H-bridge); output swings **±Vs** (twice the half-bridge):

```
Output (square wave) amplitude = ± Vs
RMS output  Vo,rms = Vs
Fundamental RMS  Vo1 = (4/π)·(Vs/√2)·(1/... )  →  Vo1 = (2√2/π)·Vs = 0.9 Vs
Fundamental peak  Vo1,peak = (4/π)·Vs = 1.273 Vs
```

**Fourier / harmonics of a square wave.** A square-wave output contains **only odd harmonics** (3rd, 5th, 7th…), amplitudes ∝ **1/n**:

```
vo(t) = (4Vs/π)·Σ (1/n)·sin(nωt) ,  n = 1, 3, 5, ...
nth harmonic RMS  Von = Vo1/n
```

**Total Harmonic Distortion (THD).** Ratio of the RMS of all harmonics to the fundamental:

```
THD = √(Vrms² − Vo1²)/Vo1 = √( (Vrms/Vo1)² − 1 )
For a square wave (full-bridge): Vrms = Vs, Vo1 = 0.9 Vs
   THD = √( (1/0.9)² − 1 ) = √(1.2346 − 1) = √0.2346 = 0.484 = 48.4%
```

So a square-wave inverter has **~48.3% THD** — high; **PWM** reduces it (next lesson).

**Output voltage control:** by varying **DC-link voltage**, by **PWM** (vary pulse widths), or by **phase-shift/quasi-square-wave** (introduce zero periods of angle to control fundamental and cancel harmonics).

| Inverter | Output amplitude | Vrms | Fundamental RMS |
|---|---|---|---|
| Half-bridge | ±Vs/2 | Vs/2 | 0.45 Vs |
| Full-bridge | ±Vs | Vs | 0.90 Vs |

> 💎 **KEY RESULT** — **Full-bridge square-wave VSI: Vrms = Vs, fundamental RMS = (2√2/π)Vs = 0.9 Vs**, only **odd harmonics** (∝ 1/n), **THD ≈ 48.3%**. **Half-bridge** gives half these voltages (0.45 Vs fundamental).

> 🧠 **MEMORY HOOK** — "**Half-bridge = ±Vs/2 (0.45Vs fundamental); Full-bridge = ±Vs (0.9Vs).** Square wave = odd harmonics (1/n), THD ≈ 48%. PWM cleans it up."

> ⚠️ **TRAP ALERT** — **Full-bridge fundamental RMS = 0.9 Vs** (peak = 1.273 Vs = 4Vs/π); the **RMS of the whole square wave = Vs**. A square-wave inverter has **only odd harmonics** and **~48.3% THD** — memorise that number.

### 📐 Formula Sheet

```
Half-bridge VSI: output ±Vs/2 ; Vrms = Vs/2 ; fundamental RMS = 0.45 Vs
Full-bridge VSI: output ±Vs ; Vrms = Vs ; fundamental RMS = (2√2/π)Vs = 0.9 Vs
   fundamental peak = 4Vs/π = 1.273 Vs
Square wave: vo = (4Vs/π)Σ(1/n)sin(nωt), n odd ; Von = Vo1/n
THD = √((Vrms/Vo1)² − 1) ; square wave ≈ 48.3%
```

### 🧮 Solved Examples

**Example 1 — full-bridge outputs.**
A single-phase full-bridge VSI has a DC input `Vs = 200 V` (square-wave output). Find the RMS output, the fundamental RMS, and the 3rd-harmonic RMS.

```
Vrms = Vs = 200 V
Fundamental RMS Vo1 = 0.9 Vs = 0.9 × 200 = 180 V   (= 2√2/π × 200 = 180.06)
3rd harmonic RMS Vo3 = Vo1/3 = 180/3 = 60 V
```
**Vrms = 200 V, Vo1 = 180 V, Vo3 = 60 V.**

**Example 2 — THD.**
For the above square-wave inverter, compute the THD.

```
THD = √((Vrms/Vo1)² − 1) = √((200/180)² − 1) = √(1.2346 − 1) = √0.2346 = 0.4843
```
**THD ≈ 48.4%** (the characteristic square-wave value).

### ⚠️ Common Traps

1. **Full-bridge fundamental RMS = 0.9 Vs**; **half-bridge = 0.45 Vs** (half). Don't confuse with the total RMS (Vs and Vs/2).
2. **Square-wave THD ≈ 48.3%** — a standard number worth memorising.
3. **Only odd harmonics** in a square wave (no even, no DC for symmetric output); amplitudes ∝ 1/n.
4. **Fundamental peak = 4Vs/π = 1.273 Vs** (full-bridge) — larger than Vs.
5. **PWM reduces THD** and controls output — square-wave is the baseline.
6. **Half-bridge needs a split DC supply** (two capacitors) providing ±Vs/2.

### 📝 Test — Power Electronics (8 Q)

1. **(MCQ)** The RMS output of a single-phase full-bridge square-wave VSI is:
   (a) Vs/2  (b) Vs  (c) 0.9 Vs  (d) 0.45 Vs
2. **(MCQ)** The fundamental RMS output of a full-bridge square-wave VSI is:
   (a) 0.45 Vs  (b) 0.9 Vs  (c) Vs  (d) 1.11 Vs
3. **(MCQ)** A square-wave inverter output contains:
   (a) only even harmonics  (b) only odd harmonics  (c) all harmonics  (d) no harmonics
4. **(MCQ)** The THD of a square-wave inverter output is approximately:
   (a) 5%  (b) 48.3%  (c) 100%  (d) 0%
5. **(MCQ)** The half-bridge VSI output amplitude is:
   (a) ±Vs  (b) ±Vs/2  (c) ±2Vs  (d) ±Vs/4
6. **(NAT)** A full-bridge VSI has Vs = 300 V. Find the fundamental RMS output in V. ______ V
7. **(NAT)** For a full-bridge square-wave VSI, find the 5th-harmonic RMS if the fundamental RMS is 90 V. ______ V
8. **(NAT)** A half-bridge VSI has Vs = 400 V. Find the RMS output voltage in V. ______ V

<details>
<summary>🔑 Solutions</summary>

**1 → (b) Vs.**

**2 → (b) 0.9 Vs.**

**3 → (b) only odd harmonics.**

**4 → (b) 48.3%.**

**5 → (b) ±Vs/2.**

**6 →** Vo1 = 0.9 Vs = 0.9 × 300 = **270 V.**

**7 →** Vo5 = Vo1/5 = 90/5 = **18 V.**

**8 →** Half-bridge Vrms = Vs/2 = 400/2 = **200 V.**

</details>

---

`✅ Day 18 complete — CRO (deflection sensitivity, time-base, Lissajous, DSO), single-phase induction motors (double-revolving-field, capacitor/shaded-pole starting), and single-phase VSI inverters (half/full bridge, 0.9 Vs fundamental, 48% THD). Tomorrow: DVM & digital instruments, synchronous machines I, and three-phase inverters & PWM.`

*Correctness over length — re-derive any result you're unsure of and mark "verify" before the exam.*
