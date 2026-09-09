# ⚡ GATE Technical Revision — Day 50 (2026-09-09)

*Round-3 pass 8 — a milestone! Thermal/rectifier meters, DC motor drives, and the single-phase full converter. High-frequency GATE scoring zones.*

📅 Tech Day 50 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics · 🔁 Round-3 pass 8 · 🏅 Milestone

> 🧠 **MEMORY HOOK** — Tech Day 50: **true-RMS vs average-responding meters** (form-factor error), **DC motor torque-speed & speed control**, and the **single-phase full converter** (two-quadrant, `(2Vm/π)cosα`). Three reliable mark-earners.

---

## 🔧 Measuring Instruments: Electrostatic, Thermal & Rectifier Instruments

### 📖 Concept Deep Dive

This family rounds out "what a meter actually reads."

**Electrostatic instruments.** Use the **force between charged plates** (like a variable capacitor). Torque `= ½·V²·(dC/dθ)`, so deflection `∝ V²` → **square-law**, reads **RMS voltage**, works on **AC & DC**. They draw **almost no current** on DC (only charging current on AC), so they measure **high voltages** with negligible loading — used as **high-voltage voltmeters**. Weak operating torque is the drawback.

**Thermal instruments.**
- **Thermocouple meter** — load current heats a fine element; a thermocouple senses the temperature rise (`∝ I²·R`) and drives a PMMC. Reads **true RMS** independent of waveform, and works to **high (RF) frequencies** — ideal for RF current. Scale is **square-law** (non-uniform).
- **Hot-wire instrument** — a wire expands on heating (`∝ I²`); the sag moves a pointer. True-RMS, AC+DC, but slow and fragile.

**Rectifier instruments.** A **rectifier (diode bridge) + PMMC**. The PMMC responds to the **average** of the rectified current, but the scale is **calibrated in RMS assuming a sinusoid** using the **form factor**:

```
Form factor  kf = RMS / Average = 1.11  (for a pure sine wave)
Rectifier meter reading = Average × 1.11   (calibrated for sine)
```

Because calibration assumes a sine, a rectifier meter reads **correctly only for sinusoids**. For a **non-sinusoidal** waveform (different form factor), it shows a **waveform (form-factor) error**:

```
True RMS vs reading:  reading = 1.11 × (actual average of the waveform)
Error arises when the actual waveform's RMS/average ≠ 1.11.
```

**Read-type summary (consolidated):**

| Meter | Reads | Scale | AC/DC |
|---|---|---|---|
| PMMC | average (DC) | linear | DC |
| MI / EMMC | RMS | square-law | both |
| Electrostatic | RMS (V) | square-law | both |
| Thermocouple / hot-wire | true RMS | square-law | both (incl. RF) |
| Rectifier + PMMC | avg ×1.11 (sine-calibrated) | ~linear | AC (via rectifier) |

> 💎 **KEY RESULT** — Electrostatic: `∝ V²`, RMS, HV, negligible current. Thermocouple/hot-wire: **true RMS, any waveform, RF-capable**. Rectifier meter: reads **average × 1.11** (sine form factor) → **form-factor error on non-sine** waveforms.

> ⚠️ **TRAP ALERT** — Only **thermocouple/hot-wire (and electrostatic/MI/EMMC)** read **true RMS** regardless of waveform. The **rectifier** meter is **average-responding, RMS-scaled for sine only** — it errs on non-sinusoidal inputs.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Electrostatic torque | `Td = ½·V²·(dC/dθ)` ⇒ `θ ∝ V²` (RMS) |
| Thermocouple heating | `∝ I²·R` (true RMS) |
| Form factor (sine) | `kf = Vrms/Vavg = 1.11` |
| Rectifier meter reading | `= 1.11 × average` (sine-calibrated) |
| Peak factor (sine) | `kp = Vpk/Vrms = 1.414` |

### 🧮 Solved Examples

**Example 1 — rectifier meter on a sine.**
A full-wave rectifier (average-responding) meter measures a sinusoid of `10 V` RMS. What does it read, and what is the actual average?

- Actual average of full-wave rectified sine `= (2Vm/π)` where `Vm = √2×10 = 14.14 V` → `avg = 2×14.14/π = 9.0 V`.
- Meter reading `= 1.11 × 9.0 = 9.99 ≈ 10 V` ✓ (correct, since calibrated for sine).

**Example 2 — form-factor (waveform) error.**
The same meter measures a **symmetrical square wave** of `10 V` RMS. What does it read? (Square wave: RMS = average = peak.)

- For a square wave, average = RMS = `10 V`; true form factor `= 1.0`.
- Meter reads `= 1.11 × average = 1.11 × 10 = 11.1 V`.
- **Error = +11%** (reads high) because it applies the sine form factor 1.11 to a waveform whose real form factor is 1.0.

> 🧠 **MEMORY HOOK** — "**Rectifier meter multiplies average by 1.11.**" Correct for sine; for a square wave (FF = 1) it over-reads by **11%**.

### ⚠️ Common Traps

1. Assuming a rectifier meter is true-RMS (it's **average × 1.11**, sine only).
2. Forgetting thermocouple/hot-wire are the genuine **true-RMS, RF** meters.
3. Mixing **form factor** (1.11) and **peak factor** (1.414) for sine.
4. Thinking electrostatic meters draw significant current (they draw **~none**).
5. Using a linear scale for electrostatic/thermal (they're **square-law**).
6. Applying 1.11 to DC or non-sine without recognising the error.

### 📝 Test — Thermal/Rectifier Meters (8 Q)

1. An electrostatic voltmeter deflection is proportional to: (a) V (b) V² (c) I (d) √V.
2. Which meter reads true RMS at RF? (a) PMMC (b) thermocouple (c) rectifier (d) electrostatic only.
3. A rectifier-type AC meter reads: (a) peak (b) average × 1.11 (c) true RMS (d) average only.
4. The form factor of a sine wave is: (a) 1.0 (b) 1.11 (c) 1.414 (d) 2.0.
5. A rectifier meter errs most on: (a) pure sine (b) non-sinusoidal waveforms (c) DC only (d) never.
6. **(NAT)** A rectifier (avg-responding) meter measures a sine; actual average = 18 V. Reading (V)?
7. **(NAT)** The same meter measures a square wave (FF = 1) of true RMS 20 V. Reading (V)?
8. **(NAT)** Percentage error in Q7 (meter vs true RMS)?

<details><summary>🔑 Solutions</summary>

**Q1 — (b) V².**

**Q2 — (b) thermocouple.**

**Q3 — (b).** Average × 1.11 (sine-calibrated).

**Q4 — (b) 1.11.**

**Q5 — (b).** Non-sinusoidal waveforms.

**Q6.** `reading = 1.11 × 18 = 19.98 ≈ 20 V`.

**Q7.** Square wave: average = RMS = 20 V; reading `= 1.11 × 20 = 22.2 V`.

**Q8.** `error = (22.2 − 20)/20 = 2.2/20 = 11%` (reads high).

</details>

---

## 🔧 Electrical Machines: DC Motors — Types, Characteristics & Speed Control

### 📖 Concept Deep Dive

A DC motor takes electrical input and develops torque; back-EMF `Eb = V − Ia·Ra`, and `Eb = PφZN/60A`, so **speed `N ∝ Eb/φ`** and **torque `T ∝ φ·Ia`**.

**Types & characteristics:**
- **Shunt motor** — field across supply, `φ ≈ constant`; so **speed nearly constant** (drops slightly with load), **T ∝ Ia**. Good for constant-speed drives (lathes, fans, pumps).
- **Series motor** — field in series, `φ ∝ Ia` (below saturation); so **T ∝ Ia²** (high starting torque) and **speed ∝ 1/Ia** (runs away on no load — **never start a series motor unloaded**). Used for traction, cranes, hoists.
- **Compound motor** — cumulative (series aids shunt): good starting torque + limited no-load speed.

**Starters.** At start, `Eb = 0`, so starting current `= V/Ra` is dangerously high. A **starter** (3-point or 4-point) inserts external resistance at start, cut out as the motor speeds up and `Eb` builds. (3-point: holding coil in series with shunt field — problematic with field-control speed; 4-point separates the holding coil.)

**Speed control.** From `N = (V − IaRa)/(k·φ)`:
- **Armature-control / rheostatic** — insert resistance in armature or reduce V → speed **below base** (constant-torque region); wasteful (I²R) if rheostatic. **Ward-Leonard** gives smooth armature-voltage control.
- **Field (flux) control** — reduce field current → weaken φ → speed **above base** (constant-power region). Cheap, efficient, but limited torque at high speed.
- **Armature-voltage control (chopper/converter-fed)** — modern method for wide smooth range.

> 💎 **KEY RESULT** — `N ∝ Eb/φ`, `T ∝ φ·Ia`. **Shunt:** ~constant speed, `T ∝ Ia`. **Series:** `T ∝ Ia²` (high starting torque), speed `∝ 1/Ia` (runs away unloaded). Speed: **armature/voltage control → below base**; **field weakening → above base**.

> ⚠️ **TRAP ALERT** — A **series motor must never run on no load** (speed → dangerously high). **Field weakening raises** speed (above base); **armature-voltage reduction lowers** it. Starting current is limited by a **starter** (Eb = 0 at start).

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Back-EMF | `Eb = V − Ia·Ra = PφZN/60A` |
| Speed | `N ∝ Eb/φ = (V − IaRa)/(kφ)` |
| Torque | `T = (PφZ/2πA)·Ia ⇒ T ∝ φ·Ia` |
| Series motor torque | `T ∝ Ia²` (pre-saturation) |
| Starting current (no starter) | `Ia,start = V/Ra` (very large) |
| Speed-control regions | armature → below base; field → above base |

### 🧮 Solved Examples

**Example 1 — speed change with load.**
A shunt motor runs at `1000 rpm` drawing `Ia = 20 A`; `V = 220 V`, `Ra = 0.5 Ω`. Find the speed when `Ia` rises to `40 A` (φ constant).

- `Eb1 = 220 − 20×0.5 = 210 V`; `Eb2 = 220 − 40×0.5 = 200 V`.
- `N ∝ Eb` (φ constant): `N2 = 1000 × (200/210) = 952.4 rpm`.

**Example 2 — field weakening.**
The same motor's flux is reduced to **80%** (Ia back to 20 A, Eb = 210 V). New speed?

- `N ∝ Eb/φ`: `N2 = 1000 × (210/210) × (1/0.8) = 1000 × 1.25 = 1250 rpm`.
- Weakening the field **raises** speed (above base).

> 🧠 **MEMORY HOOK** — "**Series for starting torque (T ∝ Ia²), shunt for steady speed.**" "**Weaken field → speed up; drop armature voltage → slow down.**"

### ⚠️ Common Traps

1. Running a **series** motor on **no load** (it over-speeds).
2. Thinking field weakening slows the motor (it **speeds it up**).
3. Forgetting the **starter** (start current `= V/Ra` without it).
4. Using `T ∝ Ia` for a series motor (it's `T ∝ Ia²` pre-saturation).
5. Confusing constant-torque (armature control) vs constant-power (field control) regions.
6. Mixing motor `Eb = V − IaRa` with generator `E = V + IaRa`.

### 📝 Test — DC Motors (8 Q)

1. In a DC motor, back-EMF `Eb` equals: (a) V + IaRa (b) V − IaRa (c) IaRa (d) V.
2. A series motor's torque varies as: (a) Ia (b) Ia² (c) √Ia (d) constant.
3. Which motor should never run on no load? (a) shunt (b) series (c) compound (d) separately excited.
4. Field weakening causes the speed to: (a) decrease (b) increase (c) stay same (d) become zero.
5. Armature-voltage control gives speeds: (a) above base (b) below base (c) zero (d) infinite.
6. **(NAT)** Shunt motor: V = 240, Ra = 0.4 Ω, Ia = 25 A, N = 1200 rpm. New speed (rpm) at Ia = 50 A (φ const, 1 dp)?
7. **(NAT)** For the base case (Ia = 25 A, Eb as computed), flux reduced to 75%. New speed (rpm)?
8. **(NAT)** A motor with Ra = 0.5 Ω on a 200 V supply: starting current without a starter (A)?

<details><summary>🔑 Solutions</summary>

**Q1 — (b).** `Eb = V − IaRa`.

**Q2 — (b) Ia².**

**Q3 — (b) series.**

**Q4 — (b) increase.**

**Q5 — (b) below base.**

**Q6.** `Eb1 = 240 − 25×0.4 = 230`; `Eb2 = 240 − 50×0.4 = 220`; `N2 = 1200×(220/230) = 1147.8 rpm`.

**Q7.** `Eb1 = 230`; `N2 = 1200 × (230/230)/0.75 = 1200/0.75 = 1600 rpm`.

**Q8.** `Ia,start = V/Ra = 200/0.5 = 400 A`.

</details>

---

## 🔧 Power Electronics: 1-φ Full Converter & Semiconverter (Comparison)

### 📖 Concept Deep Dive

Building on Day 49, compare the two full-wave controlled rectifiers for a **highly inductive (constant-current) load**.

**Full converter (4 SCRs).** Two pairs conduct alternately, each SCR for `π`. Average output:

```
Vo = (2Vm/π)·cosα
```

- **α < 90°** → `Vo > 0` (rectifier mode).
- **α > 90°** → `Vo < 0` (inversion mode, feeding power back to AC — needs an active EMF load). So the full converter is **two-quadrant** (V can reverse, I stays one direction).
- Input current is a **quasi-square wave** lagging the voltage by α → **input pf = (2√2/π)·cosα** (for constant load current), which **worsens as α increases**.

**Semiconverter (2 SCR + 2 diode).** Inherent **freewheeling** (diodes) clamps output to ≥ 0:

```
Vo = (Vm/π)·(1 + cosα)
```

- **One-quadrant** (no inversion).
- Because of freewheeling, the **input pf is better** than the full converter at the same α (the freewheeling interval reduces reactive drawn).

**Key comparison:**

| Feature | Semiconverter | Full converter |
|---|---|---|
| Devices | 2 SCR + 2 diode | 4 SCR |
| Vo | `(Vm/π)(1+cosα)` | `(2Vm/π)cosα` |
| Range of Vo | `2Vm/π → 0` | `2Vm/π → −2Vm/π` |
| Quadrants | 1 (rectifier) | 2 (rectifier + inverter) |
| Freewheeling | inherent | none (SCRs only) |
| Input pf | better | poorer (esp. high α) |

**Ripple frequency** (for a 1-φ full-wave converter) = **2f** (100 Hz on a 50 Hz supply). For a constant (ripple-free) load current `Id`, device and supply RMS currents are computed from the conduction intervals.

> 💎 **KEY RESULT** — **Full converter:** `Vo = (2Vm/π)cosα`, 2-quadrant (α>90° → inverter), ripple freq **2f**, input pf `= (2√2/π)cosα`. **Semiconverter:** `Vo = (Vm/π)(1+cosα)`, 1-quadrant, freewheeling → **better pf**.

> ⚠️ **TRAP ALERT** — Inversion (`Vo < 0`, α > 90°) is possible **only in the full converter** and **only with an EMF/active load** that can sustain current. The semiconverter's freewheeling **prevents** negative output.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Full converter Vo | `(2Vm/π)·cosα` |
| Semiconverter Vo | `(Vm/π)·(1+cosα)` |
| Inversion limit (full) | `α → 180° − μ` (Vo most negative) |
| Ripple frequency (1-φ full-wave) | `2f` |
| Input pf (full, const Id) | `(2√2/π)·cosα ≈ 0.9·cosα` |
| Firing angle for Vo = 0 | full: α = 90°; semi: α = 180° |

### 🧮 Solved Examples

**Example 1 — full converter inversion.**
A 1-φ full converter on `230 V` RMS runs at `α = 120°` feeding an active (EMF) load. Average output?

- `Vm = √2×230 = 325.3 V`.
- `Vo = (2Vm/π)cosα = (2×325.3/3.1416)cos120° = 207.1 × (−0.5) = −103.5 V`.
- Negative → **inversion**: power flows from DC side back to AC.

**Example 2 — input power factor.**
For the full converter at `α = 30°` (constant load current), estimate input pf.

- `pf = (2√2/π)cosα = 0.900 × cos30° = 0.900 × 0.866 = 0.779` (lagging).
- At `α = 60°`: `pf = 0.900 × 0.5 = 0.45` → pf **falls as α rises**.

> 🧠 **MEMORY HOOK** — "**Full = cosα (can go negative); semi = (1+cosα) (stays ≥ 0).**" Ripple at **2f**; input pf of the full converter ≈ **0.9·cosα**.

### ⚠️ Common Traps

1. Using `(Vm/π)(1+cosα)` for a **full** converter (that's the semiconverter).
2. Expecting a **semiconverter to invert** (it can't — freewheeling).
3. Forgetting inversion needs an **active (EMF) load**.
4. Taking ripple frequency as `f` (it's **2f** for full-wave).
5. Ignoring that input **pf worsens with α**.
6. Confusing Vo=0 firing angle (full: 90°, semi: 180°).

### 📝 Test — Full vs Semiconverter (8 Q)

1. The 1-φ full converter average output is: (a) (Vm/π)(1+cosα) (b) (2Vm/π)cosα (c) Vm/π (d) 2Vm.
2. Inversion in a full converter occurs for: (a) α < 90° (b) α > 90° (c) α = 0 (d) never.
3. A semiconverter operates in: (a) 1 quadrant (b) 2 quadrants (c) 4 quadrants (d) 3 quadrants.
4. Ripple frequency of a 1-φ full-wave converter on 50 Hz is: (a) 50 Hz (b) 100 Hz (c) 150 Hz (d) 25 Hz.
5. Input power factor of a full converter (const Id) is about: (a) cosα (b) (2√2/π)cosα (c) 1 (d) sinα.
6. **(NAT)** Full converter, Vrms = 120 V, α = 60°. Average output (V, 1 dp)?
7. **(NAT)** Full converter, Vm = 300 V, α = 135°. Average output (V, 1 dp)?
8. **(NAT)** Input pf of a full converter at α = 0 (const Id, 3 dp)?

<details><summary>🔑 Solutions</summary>

**Q1 — (b).** `(2Vm/π)cosα`.

**Q2 — (b) α > 90°.**

**Q3 — (a) 1 quadrant.**

**Q4 — (b) 100 Hz.**

**Q5 — (b).** `(2√2/π)cosα`.

**Q6.** `Vm = √2×120 = 169.7`; `Vo = (2×169.7/π)cos60° = 108.0 × 0.5 = 54.0 V`.

**Q7.** `Vo = (2×300/π)cos135° = 190.99 × (−0.7071) = −135.0 V` (inversion).

**Q8.** `pf = (2√2/π)cos0 = 0.9003 × 1 = 0.900`.

</details>

---

> 🧠 **DAY-50 WRAP (Round-3 pass 8 · Milestone 🏅)** — **Meters:** electrostatic/thermocouple = true RMS; **rectifier = avg × 1.11** (form-factor error on non-sine). **DC motor:** `N ∝ Eb/φ`, series `T ∝ Ia²` (never no-load), field-weaken → faster. **Converters:** full `(2Vm/π)cosα` (2-quad, invert α>90°), semi `(Vm/π)(1+cosα)` (1-quad, better pf), ripple **2f**. ⚡

**🔁 Round-3 progress:** Measurements ▓▓▓▓▓▓▓▓░░ · Machines ▓▓▓▓▓▓▓▓░░ · Power Electronics ▓▓▓▓▓▓▓▓░░ — round-3 nearing the final stretch. 🎓 Power Systems joins as a 4th subject once the reference PDFs arrive.
