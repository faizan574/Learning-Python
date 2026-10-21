# ⚡ GATE Technical Revision — Day 92 (2026-10-21)

*The "other" meter families (electrostatic, induction, thermal, rectifier) and their true-RMS quirks, the induction-motor no-load/blocked-rotor tests that fill the equivalent circuit, and the buck/boost choppers that convert DC to adjustable DC.*

📅 Tech Day 92 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics

---

## 🔧 Measuring Instruments: Electrostatic, Induction, Thermal & Rectifier Instruments

### 📖 Concept Deep Dive

Beyond PMMC/MI/EMMC, four specialised meter families each exploit a different physical effect; GATE tests their **RMS behaviour, waveform sensitivity and typical use**.

**Electrostatic instruments.** Use the **force between charged plates** (like a variable capacitor). Deflecting torque: `Td = ½ V²(dC/dθ)` → **θ ∝ V²** (square-law, true-RMS for AC voltage). They measure **voltage only** (essentially a voltmeter), draw **negligible current** (ideal for high-voltage, high-resistance circuits), and read **true RMS** regardless of waveform. Downsides: weak torque, high-voltage use, needs electrostatic shielding.

**Induction instruments.** Work on **eddy currents induced in a metal (aluminium) disc** by two AC fluxes with a phase/space shift (shaded-pole or Ferraris principle). Torque `∝ Φ1·Φ2·sinα` (α = phase angle between fluxes). They work on **AC only** (need alternating flux) and are the basis of the **single-phase energy meter** (watt-hour). Good torque, but frequency/temperature sensitive.

**Thermal instruments.** Two sub-types that respond to the **heating (I²R) effect** → inherently **true-RMS, AC & DC, waveform-independent**, and usable at **high frequency (RF)**:
- **Hot-wire:** a current-heated wire expands; the sag moves a pointer. `θ ∝ I²` (square-law), slow, fragile.
- **Thermocouple:** load current heats a junction; the thermo-EMF drives a PMMC. Excellent for **RF current** measurement; `output ∝ I²` (true RMS).

**Rectifier instruments.** A **bridge rectifier + PMMC** movement: the PMMC responds to the **average** of the rectified current, but the scale is calibrated in **RMS assuming a sine wave** using the **form factor (1.11)**:

```
Reading = Form factor × average = 1.11 × Iavg   (sine assumed)
```

So rectifier meters are **average-responding, RMS-calibrated**: accurate only for **sinusoids**; on non-sine waveforms they give a **form-factor error**. They are cheap, sensitive, and the common multimeter AC ranges — but **not** true-RMS unless specifically "true-RMS" type.

| Type | Quantity | AC/DC | Reads | Scale |
|---|---|---|---|---|
| Electrostatic | Voltage | **AC & DC** | true RMS | square-law |
| Induction | Energy/power | **AC only** | — | — |
| Thermal (hot-wire/TC) | Current | **AC & DC, RF** | **true RMS** | square-law |
| Rectifier | V/I | AC (sine) | avg → RMS-cal | quasi-uniform |

> 💎 **KEY RESULT** — Electrostatic `Td = ½V²(dC/dθ)` (true-RMS voltmeter); **thermal** instruments (hot-wire/thermocouple) are **true-RMS, AC & DC, RF-capable**; **rectifier** instruments are **average-responding, RMS-calibrated** (form-factor 1.11 → error on non-sine); **induction** = AC-only energy meter.

> 🧠 **MEMORY HOOK** — "**Electrostatic squares V; thermal squares I (true RMS even at RF); rectifier only averages (sine-calibrated); induction needs AC flux.**"

### 📐 Formula Sheet

| Quantity | Expression |
|---|---|
| Electrostatic torque | `Td = ½ V²(dC/dθ)` → `θ ∝ V²` |
| Induction torque | `Td ∝ Φ1 Φ2 sinα` (α = flux phase diff) |
| Thermal (hot-wire/TC) | heating `∝ I²` → true RMS |
| Rectifier reading (sine) | `1.11 × Iavg` (form factor) |
| Form factor (sine) | `FF = RMS/avg = 1.11` |
| Peak factor (sine) | `PF = peak/RMS = √2 ≈ 1.414` |

### 🧮 Solved Examples

**Example 1 — Rectifier-meter error on a square wave.**
A rectifier (average-responding, sine-RMS-calibrated) AC voltmeter is fed a **symmetrical square wave** of true RMS 100 V. What does it read? (For a square wave, RMS = average = peak.)

```
For square wave: Vavg = Vrms = Vpeak = 100 V
Meter reads = 1.11 × Vavg = 1.11 × 100 = 111 V
Error = (111 − 100)/100 = +11%
```

Reading **111 V** (an **+11% error** — the meter assumes FF = 1.11, but a square wave has FF = 1).

**Example 2 — Electrostatic voltmeter deflection.**
An electrostatic voltmeter has `θ = k V²`. It deflects 20° at 200 V. Find the voltage for a 45° deflection.

```
θ ∝ V²  ⇒  V = V1·√(θ2/θ1) = 200·√(45/20) = 200·√2.25 = 200·1.5 = 300 V
```

Voltage **= 300 V**.

### ⚠️ Common Traps

1. **Rectifier meter is true-RMS** — No; it is **average-responding, sine-calibrated** → errs on non-sine (form-factor error).
2. **Thermal instruments are slow/DC-only** — they are **true-RMS, AC & DC, even RF**; only hot-wire is sluggish.
3. **Electrostatic measures current** — it is a **voltmeter** (draws negligible current); ideal for HV.
4. **Induction instruments work on DC** — they need **alternating flux** → AC only.
5. **Form factor for square wave = 1.11** — that's for a **sine**; square wave FF = 1, triangular ≈ 1.15.
6. **Electrostatic scale uniform** — it is **square-law** (θ ∝ V²).

### 📝 Test — Measuring Instruments (8 Q)

1. An electrostatic instrument's deflection is proportional to:
   (a) V (b) V² (c) I² (d) 1/V
2. Which instrument is inherently true-RMS and usable at radio frequencies?
   (a) rectifier (b) thermocouple/hot-wire (c) PMMC (d) induction
3. A rectifier-type AC meter is:
   (a) true-RMS (b) average-responding, sine-RMS-calibrated (c) peak-reading (d) DC-only
4. Induction instruments operate on:
   (a) DC only (b) AC only (c) both equally (d) RF only
5. The form factor of a sine wave is:
   (a) 1.0 (b) 1.11 (c) 1.414 (d) 0.637
6. **(NAT)** A rectifier meter (sine-calibrated) reads a symmetrical square wave of true RMS 50 V. Find the indicated value (V).
7. **(NAT)** An electrostatic voltmeter `θ = kV²` deflects 10° at 150 V. Find the deflection (degrees) at 300 V.
8. **(NAT)** A sine voltage has average (half-cycle) value 90 V. Find the reading of a sine-calibrated rectifier voltmeter (V).

<details><summary>🔑 Solutions</summary>

**1 → (b).** `Td = ½V²(dC/dθ)` → θ ∝ V².

**2 → (b).** Thermal (thermocouple/hot-wire) — heating ∝ I², true RMS, RF-capable.

**3 → (b).** Average-responding, RMS-calibrated for sine.

**4 → (b).** Needs alternating flux → AC only.

**5 → (b).** `FF = 1.11` for sine.

**6 (NAT).** Square wave: Vavg = Vrms = 50 V. Reading = `1.11 × 50 = 55.5 V`.

**7 (NAT).** θ ∝ V² ⇒ `θ = 10·(300/150)² = 10·4 = 40°`.

**8 (NAT).** Reading = `1.11 × Vavg = 1.11 × 90 = 99.9 ≈ 100 V`.

</details>

---

## 🔧 Electrical Machines: Induction Motor III — No-Load & Blocked-Rotor Tests, Circle Diagram & Starting

### 📖 Concept Deep Dive

Two simple tests — the **no-load (NL)** and **blocked-rotor (BR)** tests — determine the **equivalent-circuit parameters** of a 3-φ induction motor, exactly as OC/SC tests do for a transformer.

**No-load test (≈ open-circuit analogue).** The motor runs **unloaded** at rated voltage; slip ≈ 0, so `R2'/s → ∞` (rotor branch open). Input power `W0` supplies **core loss + friction & windage + small stator copper loss**. Measurements give the **magnetising branch** `(Rc, Xm)`:

```
cosφ0 = W0/(√3·VL·I0)
Xm, Rc found from I0, φ0 (shunt branch)
Rotational loss ≈ W0 − 3 I0² R1
```

**Blocked-rotor test (≈ short-circuit analogue).** The rotor is **held stationary** (slip = 1), voltage **reduced** so rated current flows. The magnetising branch is negligible; input power `Wsc` ≈ **copper losses**, giving the **series impedance**:

```
Zsc = Vsc/(√3·Isc per phase basis)   [use per-phase values]
Rsc = Wsc/(3·Isc²) = R1 + R2'
Xsc = √(Zsc² − Rsc²) = X1 + X2'
```

`R2'` is found by subtracting measured `R1`; `X1` and `X2'` are split by machine-class rules (e.g., 50:50 for class A).

**Circle diagram.** Plotting the **locus of the stator current** as load varies gives a **circle** (because the rotor-current locus is a circle). From the NL point `O'` and BR point, one constructs the circle; **horizontal projections** then read off: **output, torque, input, losses, slip, efficiency, power factor** and the **maximum output/torque** points — a complete graphical performance predictor. The diameter `= V/X` (per phase).

**Starting methods.** At start (s = 1), `R2'/s` is small → **starting current 5–7× rated**. Methods to limit it:
- **DOL (Direct-On-Line):** full voltage; highest starting current/torque; only small motors.
- **Star-Delta:** start in star (phase voltage `V/√3`), run in delta → **starting current & torque reduced to 1/3** of DOL delta values.
- **Autotransformer:** applies reduced voltage `xV`; current & torque scale as `x²`.
- **Rotor-resistance (wound rotor):** adds external rotor R → **high starting torque, low current** (best starting performance).
- **Soft starter (thyristor):** ramps voltage electronically.

| Test | Rotor | Voltage | Gives |
|---|---|---|---|
| No-load | free (s≈0) | rated | `Rc, Xm`, rotational loss |
| Blocked-rotor | held (s=1) | reduced | `R1+R2'`, `X1+X2'` |

> 💎 **KEY RESULT** — NL test → magnetising branch + rotational loss; BR test → `Rsc = Wsc/(3Isc²) = R1+R2'`, `Xsc = √(Zsc²−Rsc²)`. **Star-delta** reduces starting current & torque to **1/3** of DOL; autotransformer scales both by **x²**.

> 🧠 **MEMORY HOOK** — "**No-load = shunt branch (like OC); blocked = series Z (like SC). Star-delta = ⅓, autotransformer = x².**"

### 📐 Formula Sheet

| Quantity | Expression |
|---|---|
| NL power factor | `cosφ0 = W0/(√3 VL I0)` |
| Rotational loss | `≈ W0 − 3 I0² R1` |
| BR equivalent R | `Rsc = Wsc/(3 Isc²) = R1 + R2'` |
| BR equivalent Z | `Zsc = Vsc(phase)/Isc(phase)` |
| BR equivalent X | `Xsc = √(Zsc² − Rsc²) = X1 + X2'` |
| Star-delta start | `Ist(Y) = (1/3) Ist(Δ, DOL)`; torque ×1/3 |
| Autotransformer (tap x) | `Ist ∝ x²`, `Tst ∝ x²` |

### 🧮 Solved Examples

**Example 1 — Blocked-rotor parameters.**
A 3-φ IM blocked-rotor test: line voltage 100 V, line current 25 A, input power 1500 W (star-connected). Find `Rsc` and `Xsc` per phase.

```
Per phase (star): Vph = 100/√3 = 57.74 V, Iph = 25 A
Rsc = Wsc/(3 Isc²) = 1500/(3·25²) = 1500/1875 = 0.8 Ω
Zsc = Vph/Iph = 57.74/25 = 2.31 Ω
Xsc = √(Zsc² − Rsc²) = √(2.31² − 0.8²) = √(5.336 − 0.64) = √4.696 = 2.167 Ω
```

`Rsc ≈ 0.8 Ω`, `Xsc ≈ 2.17 Ω` per phase.

**Example 2 — Star-delta starting current.**
An induction motor draws a DOL starting current of 90 A (delta). What is the starting line current with a star-delta starter?

```
Star-delta: Ist(Y line) = (1/3)·Ist(Δ line, DOL) = 90/3 = 30 A
```

Starting line current **= 30 A** (and starting torque also falls to 1/3).

### ⚠️ Common Traps

1. **NL test gives series impedance** — No; NL gives the **magnetising (shunt)** branch; BR gives series Z.
2. **Full voltage in BR test** — BR uses **reduced voltage** (just enough for rated current); full voltage would be dangerous.
3. **Star-delta reduces current to 1/√3** — it reduces **line starting current (and torque) to 1/3**, not 1/√3.
4. **Autotransformer scales torque by x** — both current and torque scale by **x²** (torque ∝ voltage²).
5. **Rotor-resistance starting for squirrel-cage** — only **wound-rotor** motors allow external rotor resistance.
6. **Ignoring per-phase conversion** — convert line to phase before computing Zsc (star vs delta).

### 📝 Test — Electrical Machines (8 Q)

1. The no-load test on an induction motor gives mainly:
   (a) series impedance (b) magnetising branch & rotational loss (c) rotor resistance (d) slip
2. The blocked-rotor test is analogous to the transformer's:
   (a) OC test (b) SC test (c) polarity test (d) load test
3. In the blocked-rotor test, the applied voltage is:
   (a) rated (b) reduced (c) zero (d) doubled
4. Star-delta starting reduces the starting torque to:
   (a) 1/√3 (b) 1/3 (c) 1/2 (d) same
5. An autotransformer starter with tap ratio x scales starting torque by:
   (a) x (b) x² (c) √x (d) 1/x
6. **(NAT)** BR test (star): Vline = 120 V, Iline = 40 A, P = 3200 W. Find `Rsc` per phase (Ω).
7. **(NAT)** For Q6, find `Xsc` per phase (Ω).
8. **(NAT)** A motor's DOL delta starting current is 120 A. Find the star-delta starting line current (A).

<details><summary>🔑 Solutions</summary>

**1 → (b).** NL → magnetising branch + rotational loss.

**2 → (b).** Blocked-rotor ≈ short-circuit test.

**3 → (b).** Reduced voltage for rated current.

**4 → (b).** Torque (and current) → 1/3.

**5 → (b).** Torque ∝ voltage² → x².

**6 (NAT).** `Rsc = Wsc/(3Isc²) = 3200/(3·40²) = 3200/4800 = 0.667 Ω`.

**7 (NAT).** `Vph = 120/√3 = 69.28 V`; `Zsc = 69.28/40 = 1.732 Ω`; `Xsc = √(1.732² − 0.667²) = √(3.0 − 0.444) = √2.556 = 1.599 ≈ 1.6 Ω`.

**8 (NAT).** `Ist(Y) = 120/3 = 40 A`.

</details>

---

## 🔧 Power Electronics: DC-DC Choppers I — Step-Down (Buck) & Step-Up (Boost)

### 📖 Concept Deep Dive

A **DC-DC chopper** converts a fixed DC input to a **variable DC output** by switching a device (GTO/MOSFET/IGBT) ON and OFF rapidly. The key control variable is the **duty ratio D = Ton/T** (`T = Ton + Toff`, `f = 1/T`).

**Step-down (buck) chopper.** The switch connects the source to the load during `Ton`; a **freewheeling diode** carries the inductor current during `Toff`. For a continuous, well-filtered output the **average output voltage** is:

```
Vo = D·Vs,   where D = Ton/T  (0 ≤ D ≤ 1)
```

So output ≤ input (step-down). With an ideal (lossless) converter, power balance gives the average input/output current relation `Vs·Is = Vo·Io` ⇒ `Is = D·Io`. The output voltage is varied by three strategies:
- **TRC (Time-Ratio Control):** vary D. Two sub-types — **constant-frequency (PWM, vary Ton at fixed T)** and **variable-frequency (vary f)**.
- **CLC (Current-Limit Control):** switch based on load-current bounds (hysteresis).

PWM (constant f) is preferred — fixed, filterable switching frequency.

**Step-up (boost) chopper.** The inductor is charged from the source through the switch during `Ton`; during `Toff` the stored energy plus source drives current to the load through a diode, so the output **exceeds** the input:

```
Vo = Vs / (1 − D)
```

As D → 1, Vo → ∞ (ideally); practically limited by losses. Ideal power balance: `Is = Io/(1 − D)` (input current > output current).

**Why the inductor matters.** In the boost, the inductor's **volt-second balance** gives the relation: `Vs·Ton = (Vo − Vs)·Toff` ⇒ `Vs·DT = (Vo − Vs)(1−D)T` ⇒ `Vo = Vs/(1−D)`. For the buck: `(Vs − Vo)·Ton = Vo·Toff` ⇒ `Vo = D·Vs`. These assume **continuous conduction mode (CCM)**.

**Output ripple & limits.** Higher switching frequency `f` → smaller L, C for the same ripple, but more switching loss. The chopper enables **regenerative braking** and **four-quadrant** drives (covered next lesson).

| Chopper | Vo | Current relation | Vo range |
|---|---|---|---|
| Buck (step-down) | `D·Vs` | `Is = D·Io` | `0 … Vs` |
| Boost (step-up) | `Vs/(1−D)` | `Is = Io/(1−D)` | `Vs … ∞` |

> 💎 **KEY RESULT** — Buck: `Vo = D·Vs` (output ≤ input); Boost: `Vo = Vs/(1−D)` (output ≥ input). Control by **TRC** (constant-f PWM varying Ton, or variable-f) or **CLC** (current-limit/hysteresis).

> 🧠 **MEMORY HOOK** — "**Buck = D·Vs (down); Boost = Vs/(1−D) (up).**" Duty D up → buck output up, boost output up (toward ∞).

### 📐 Formula Sheet

| Quantity | Expression |
|---|---|
| Duty ratio | `D = Ton/T`, `T = Ton + Toff`, `f = 1/T` |
| Buck output | `Vo = D·Vs` |
| Buck input current | `Is = D·Io` (ideal) |
| Boost output | `Vo = Vs/(1 − D)` |
| Boost input current | `Is = Io/(1 − D)` (ideal) |
| Buck volt-sec balance | `(Vs − Vo)DT = Vo(1−D)T` |
| Boost volt-sec balance | `Vs·DT = (Vo − Vs)(1−D)T` |

### 🧮 Solved Examples

**Example 1 — Buck chopper.**
A step-down chopper has `Vs = 200 V`, switching at 1 kHz with `Ton = 0.6 ms`. Find the duty ratio and average output voltage; if load current is 10 A, find the average source current.

```
T = 1/f = 1/1000 = 1 ms;  D = Ton/T = 0.6/1 = 0.6
Vo = D·Vs = 0.6 × 200 = 120 V
Is = D·Io = 0.6 × 10 = 6 A   (ideal power balance)
```

Output **120 V**, source current **6 A**.

**Example 2 — Boost chopper duty for a target output.**
A boost chopper steps 48 V up to 120 V. Find the required duty ratio.

```
Vo = Vs/(1 − D) ⇒ (1 − D) = Vs/Vo = 48/120 = 0.4
D = 1 − 0.4 = 0.6
```

Duty ratio **D = 0.6**.

### ⚠️ Common Traps

1. **Boost output = D·Vs** — No; boost is `Vs/(1−D)`; only the **buck** is `D·Vs`.
2. **Input current = output current** — power balance makes them differ: buck `Is = D·Io`, boost `Is = Io/(1−D)`.
3. **D can exceed 1** — duty ratio is **0 ≤ D ≤ 1**.
4. **Forgetting the freewheeling diode (buck)** — it carries inductor current during Toff; without it the inductor current path breaks.
5. **Variable-frequency PWM always best** — **constant-frequency** PWM is usually preferred (easier filtering, less EMI spread).
6. **Boost steps down at low D** — at D = 0, boost `Vo = Vs` (never below Vs); it only steps up.

### 📝 Test — Power Electronics (8 Q)

1. For a step-down (buck) chopper, the average output voltage is:
   (a) `Vs/(1−D)` (b) `D·Vs` (c) `Vs/D` (d) `(1−D)Vs`
2. For a boost chopper, the output voltage is:
   (a) `D·Vs` (b) `Vs/(1−D)` (c) `(1−D)Vs` (d) `Vs·D/(1−D)`
3. The duty ratio D of a chopper lies between:
   (a) 0 and ∞ (b) 0 and 1 (c) −1 and 1 (d) 1 and 2
4. Constant-frequency control of a chopper varies:
   (a) frequency (b) on-time Ton (c) input voltage (d) load
5. The freewheeling diode in a buck chopper conducts during:
   (a) Ton (b) Toff (c) always (d) never
6. **(NAT)** A buck chopper: Vs = 150 V, D = 0.4. Find Vo (V).
7. **(NAT)** A boost chopper steps 60 V to 150 V. Find the duty ratio D.
8. **(NAT)** A buck chopper (Vs = 100 V) feeds a load drawing 8 A at D = 0.75. Find the average source current (A).

<details><summary>🔑 Solutions</summary>

**1 → (b).** `Vo = D·Vs`.

**2 → (b).** `Vo = Vs/(1−D)`.

**3 → (b).** `0 ≤ D ≤ 1`.

**4 → (b).** Constant-f PWM varies Ton.

**5 → (b).** Freewheeling diode conducts during Toff.

**6 (NAT).** `Vo = D·Vs = 0.4 × 150 = 60 V`.

**7 (NAT).** `(1−D) = Vs/Vo = 60/150 = 0.4 ⇒ D = 0.6`.

**8 (NAT).** `Is = D·Io = 0.75 × 8 = 6 A`.

</details>

---

## 📊 Tech Progress

```
Measurements      [████████░░░░░░░░░░░]  Round 5 · topic  8/20 (Electrostatic/thermal/rectifier)
Electrical Mach.  [████████████░░░░░░░]  Round 5 · topic 12/19 (IM III: NL/BR tests, starting)
Power Electronics [████████████░░░░░░░]  Round 5 · topic 12/19 (DC-DC choppers I)
```

> 🎯 **Day 92 one-liners:** (1) **Electrostatic ∝ V² (true-RMS V); thermal ∝ I² (true-RMS, RF); rectifier = avg×1.11 (sine only); induction = AC energy meter.** (2) **IM: NL → shunt branch; BR → Rsc = Wsc/3Isc², Xsc = √(Zsc²−Rsc²); star-delta = 1/3, autotransformer = x².** (3) **Chopper: buck Vo = D·Vs; boost Vo = Vs/(1−D).**

*Correctness over length — derive, don't memorise blindly; verify any "verify" figure. Onward. ⚡*
