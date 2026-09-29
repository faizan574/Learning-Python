# ⚡ GATE Technical Revision — Day 70 (2026-09-29)

*Measurements covers the electrodynamometer (the transfer instrument & wattmeter), Machines does DC-machine losses/efficiency with the Swinburne & Hopkinson tests, and Power Electronics moves to three-phase rectifiers.*

📅 Tech Day 70 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics · 🔁 Round 4 (all three sections)

> 🧠 **MEMORY HOOK** — Today: the **electrodynamometer** (`Td = I1·I2·dM/dθ`, wattmeter reads `VI cosφ`, DC/AC transfer), **DC-machine efficiency** (max when variable loss = constant loss; **Swinburne** no-load, **Hopkinson** back-to-back), and **3-φ rectifiers** (bridge `Vdc = (3Vml/π)cosα`, ripple **6f**).

---

## 🔧 Measuring Instruments: Electrodynamometer (EMMC) Instruments

### 📖 Concept Deep Dive

The **electrodynamometer (EMMC)** uses **two fixed (current) coils** producing the working field and a **moving coil** carrying current; the torque comes from the mutual interaction (no iron — an **air-cored** meter).

**Torque.** With fixed-coil current `I1`, moving-coil current `I2`, and mutual inductance `M(θ)`:
```
Td = I1·I2·(dM/dθ)
```
- **As ammeter/voltmeter:** the fixed and moving coils carry the **same current** (in series), so `Td = I²·(dM/dθ)` ⇒ **square-law**, and it reads the **true RMS** value (works on AC & DC).
- **As wattmeter (its main use):** the **fixed (current) coils** carry the **load current** `I`, and the **moving (pressure) coil** (with a series multiplier) carries a current `∝ V`. The average deflection is:
```
Deflection ∝ V·I·cosφ = active power P
```

**Transfer instrument.** Because its deflection depends on the **product of instantaneous currents** (a true `I²` / `VI` law), an EMMC gives the **same reading on DC and AC** — so it is **calibrated on DC** (against precise standards) and then used to **measure/transfer to AC**. This is the classic **AC-DC transfer standard**.

**Errors.**
- **Frequency error** — the pressure-coil circuit has inductance; at high frequency the current isn't exactly in phase/proportion.
- **Stray-field error** — weak air-cored field ⇒ external fields cause error (needs shielding / astatic construction).
- **Eddy-current, temperature, and pressure-coil inductance** errors.

| Use | Coil arrangement | Reads |
|---|---|---|
| Ammeter/Voltmeter | coils in series, same I | true RMS (square-law) |
| Wattmeter | current coils = I, pressure coil ∝ V | `VI cosφ` (power) |
| Transfer standard | DC-calibrated | same on AC & DC |

> 💎 **KEY RESULT** — EMMC: `Td = I1 I2 (dM/dθ)`. Ammeter/voltmeter ⇒ **square-law, true-RMS**; wattmeter ⇒ **`VI cosφ`**. It is the standard **AC-DC transfer instrument** (calibrate on DC, use on AC).

> ⚠️ **TRAP ALERT** — The EMMC has a **weak (air-cored) field**, so it is very sensitive to **stray fields** (unlike PMMC's strong magnet). As a wattmeter it reads **true power `VI cosφ`**, not `VI`.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Torque (general) | `Td = I1·I2·(dM/dθ)` |
| Ammeter/voltmeter | `Td = I²·(dM/dθ)` (square-law) |
| Wattmeter deflection | `∝ V·I·cosφ` |
| Reads | true RMS / true power |
| Transfer | same reading DC & AC |

### 🧮 Solved Examples

**Example 1 — Wattmeter reading.**
An electrodynamometer wattmeter is connected in a circuit with `V = 200 V`, `I = 5 A`, power factor `0.8` lagging. What power does it indicate?

```
P = V·I·cosφ = 200 × 5 × 0.8 = 800 W
(The wattmeter reads active power, not apparent power VI = 1000 VA.)
```

**Example 2 — Square-law deflection.**
An EMMC ammeter deflects `30°` at `2 A` (assume `dM/dθ` constant). Find the deflection at `2.5 A`.

```
θ ∝ I²  ⇒  θ2 = 30 × (2.5/2)² = 30 × 1.5625 = 46.9°
```

### ⚠️ Common Traps

1. **Wattmeter reads `VI cosφ`** — active power, not apparent power `VI`.
2. **Air-cored ⇒ stray-field sensitive** — needs shielding/astatic build.
3. **True RMS as ammeter** — square-law response reads RMS on any waveform (within frequency limits).
4. **Transfer instrument** — calibrate on DC, use on AC; same reading is the whole point.
5. **Pressure-coil inductance** — causes frequency & pf errors in wattmeter use.
6. **Weak torque** — EMMC has lower sensitivity than PMMC; used where transfer accuracy matters.

### 📝 Test (5 MCQ + 3 NAT)

**Q1 (MCQ).** The torque of an electrodynamometer is proportional to:
(a) I (b) I1·I2·(dM/dθ) (c) I²R (d) 1/I

**Q2 (MCQ).** As an ammeter, the EMMC scale is:
(a) linear (b) square-law (c) logarithmic (d) exponential

**Q3 (MCQ).** An electrodynamometer wattmeter reads:
(a) VI (b) VI cosφ (c) VI sinφ (d) I²R

**Q4 (MCQ).** The EMMC is used as a transfer instrument because it:
(a) works only on DC (b) reads the same on AC and DC (c) has an iron core (d) is very sensitive

**Q5 (MCQ).** A major error source in EMMC is:
(a) strong field (b) stray external fields (weak air-cored field) (c) zero drift only (d) parallax

**Q6 (NAT).** A wattmeter reads for V = 230 V, I = 10 A, pf = 0.6. Find the power (W).

**Q7 (NAT).** An EMMC ammeter deflects 20° at 1 A. Find the deflection (°) at 2 A.

**Q8 (NAT).** A wattmeter shows 1200 W with V = 240 V, I = 8 A. Find the power factor.

<details><summary>🔑 Solutions</summary>

**Q1 — (b) `I1·I2·(dM/dθ)`.**

**Q2 — (b) square-law.**

**Q3 — (b) VI cosφ.**

**Q4 — (b).**

**Q5 — (b) stray external fields.**

**Q6 — 1380 W.** `P = 230×10×0.6 = 1380 W`.

**Q7 — 80°.** `θ ∝ I²; θ2 = 20×(2/1)² = 20×4 = 80°`.

**Q8 — 0.625.** `cosφ = P/(VI) = 1200/(240×8) = 1200/1920 = 0.625`.
</details>

---

## 🔧 Electrical Machines: DC Machine Losses, Efficiency & Testing (Swinburne, Hopkinson)

### 📖 Concept Deep Dive

**Losses in a DC machine:**
- **Copper losses (variable):** armature `Ia²Ra`, series-field `Ise²Rse`, and (shunt) field `Ish²Rsh` (treated as roughly constant). Vary with **load**.
- **Iron (core) losses:** hysteresis + eddy — roughly **constant** at fixed flux/speed.
- **Mechanical losses:** friction + windage — **constant** at fixed speed.
- **Stray losses:** small, ~1%.

Group them as **constant losses** `Wc` (iron + mechanical + shunt-field copper) and **variable loss** `Ia²Ra`.

**Efficiency.**
```
η = output/input
Motor:  η = (input − losses)/input = 1 − (Wc + Ia²Ra)/(V·IL)
Condition for max efficiency:  variable loss = constant loss
      Ia²Ra = Wc
```

**Swinburne's test (no-load, indirect).** Run the machine **unloaded as a motor**; measure the small no-load input. Since output = 0 at no load, the input supplies the **constant losses** (and a tiny `Ia0²Ra`). Knowing `Ra` and `Wc`, **efficiency at any load is predicted** without actually loading.
- **Advantages:** simple, economical (no load needed), gives efficiency at any load.
- **Limitations:** does **not** account for **temperature rise / stray load loss / commutation** at full load; applicable mainly to **shunt (and level-compound)** machines; can't test series motors (no-load runaway).

**Hopkinson's test (back-to-back / regenerative).** **Two identical machines** are mechanically **coupled**; one runs as a **motor**, driving the other as a **generator**, whose output is fed **back** to the motor. The supply provides **only the total losses**, so the machines can be tested at **full load** while drawing little power from the mains.
- **Advantages:** full-load testing (true temperature rise, real conditions) with **small power input**; efficiency of both machines obtained.
- **Limitation:** needs **two identical** machines.

> 💎 **KEY RESULT** — Max efficiency when **`Ia²Ra = Wc`** (variable = constant loss). **Swinburne** = no-load, indirect, predicts η (no full-load heating captured). **Hopkinson** = back-to-back, **full-load** test drawing only the losses from the supply.

> 🧠 **MEMORY HOOK** — **"Swinburne saves power but skips the heat; Hopkinson heats them fully back-to-back."** Max-η is the loss **crossover** (`Ia²Ra = Wc`).

> ⚠️ **TRAP ALERT** — **Swinburne cannot test a series motor** (no-load runaway) and misses **temperature/stray/commutation** effects. **Hopkinson needs two identical machines**. Max efficiency is at **variable = constant loss**, not at full load in general.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Constant losses | `Wc = iron + mechanical + shunt-field Cu` |
| Variable loss | `Ia²Ra` |
| Motor efficiency | `η = 1 − (Wc + Ia²Ra)/(V·IL)` |
| Max efficiency condition | `Ia²Ra = Wc` |
| Swinburne | no-load input → constant losses |
| Hopkinson | supply = total losses (back-to-back) |

### 🧮 Solved Examples

**Example 1 — Efficiency & max-efficiency load.**
A DC shunt motor takes `V = 220 V`, full-load line current `IL = 40 A`, `Ish = 2 A`, `Ra = 0.25 Ω`, constant losses `Wc = 400 W`. Find the full-load efficiency.

```
Ia = IL − Ish = 40 − 2 = 38 A
Armature Cu loss = Ia²Ra = 38² × 0.25 = 1444 × 0.25 = 361 W
Total losses = Wc + Ia²Ra = 400 + 361 = 761 W  (Wc here includes field Cu)
Input = V·IL = 220 × 40 = 8800 W
η = (8800 − 761)/8800 = 8039/8800 = 0.9135 = 91.35 %
```

**Example 2 — Max-efficiency armature current.**
For constant loss `Wc = 400 W` and `Ra = 0.25 Ω`, find the armature current for maximum efficiency.

```
Max η:  Ia²Ra = Wc  ⇒  Ia = √(Wc/Ra) = √(400/0.25) = √1600 = 40 A
```

### ⚠️ Common Traps

1. **Ia = IL − Ish** for a shunt **motor** (field current subtracts).
2. **Max efficiency at `Ia²Ra = Wc`** — not at full load.
3. **Swinburne misses heating** — no temperature-rise / stray-load data; not for series motors.
4. **Hopkinson needs two identical machines** — but tests at full load cheaply.
5. **Constant vs variable losses** — iron/mechanical/field ≈ constant; armature copper varies.
6. **Efficiency definition** — motor: output/input; generator: output/input with output electrical.

### 📝 Test (5 MCQ + 3 NAT)

**Q1 (MCQ).** DC machine efficiency is maximum when:
(a) iron loss = 0 (b) variable loss = constant loss (c) copper loss = 0 (d) at full load always

**Q2 (MCQ).** Swinburne's test is a:
(a) full-load test (b) no-load indirect test (c) back-to-back test (d) heat-run test

**Q3 (MCQ).** Hopkinson's test is also called:
(a) no-load test (b) back-to-back/regenerative test (c) retardation test (d) brake test

**Q4 (MCQ).** A limitation of Swinburne's test is that it:
(a) needs two machines (b) can't capture full-load temperature/stray loss (c) needs a brake (d) works only on AC

**Q5 (MCQ).** Which losses are treated as constant?
(a) armature copper (b) iron + mechanical + field copper (c) all copper (d) none

**Q6 (NAT).** Constant loss = 500 W, Ra = 0.2 Ω. Find the armature current (A) for maximum efficiency.

**Q7 (NAT).** A motor: V = 240 V, IL = 25 A, total losses 600 W. Find efficiency (%).

**Q8 (NAT).** Ia = 30 A, Ra = 0.4 Ω. Find the armature copper loss (W).

<details><summary>🔑 Solutions</summary>

**Q1 — (b) variable loss = constant loss.**

**Q2 — (b) no-load indirect test.**

**Q3 — (b) back-to-back/regenerative.**

**Q4 — (b).**

**Q5 — (b) iron + mechanical + field copper.**

**Q6 — 50 A.** `Ia = √(Wc/Ra) = √(500/0.2) = √2500 = 50 A`.

**Q7 — 90%.** `η = (240×25 − 600)/(240×25) = (6000−600)/6000 = 5400/6000 = 0.9 = 90%`.

**Q8 — 360 W.** `Ia²Ra = 30²×0.4 = 900×0.4 = 360 W`.
</details>

---

## 🔧 Power Electronics: Three-Phase Rectifiers (Half-Wave & Full Converter)

### 📖 Concept Deep Dive

Three-phase rectifiers give **higher DC output, lower ripple, and higher ripple frequency** than single-phase — preferred for high-power drives. Let `Vmp` = **peak phase** voltage, `Vml = √3·Vmp` = **peak line** voltage.

**Three-phase half-wave (3-pulse) rectifier.** Three diodes/SCRs, one per phase; at any instant the phase with the **highest voltage** conducts.
```
Uncontrolled:  Vdc = (3√3/2π)·Vmp = 0.827·Vmp = 1.17·Vp(rms)
Controlled:    Vdc = (3√3/2π)·Vmp·cosα      (for α ≤ 30°)
Ripple frequency = 3f   (3 pulses per cycle)
```

**Three-phase full converter (6-pulse bridge).** Six SCRs (or diodes) in a bridge; **two devices conduct** at a time (one from the top group, one from the bottom).
```
Uncontrolled:  Vdc = (3/π)·Vml = (3√3/π)·Vmp = 1.654·Vmp
             = (3√2/π)·VL(rms) = 1.35·VL(rms)
Controlled:    Vdc = (3·Vml/π)·cosα = (3√3/π)·Vmp·cosα
Ripple frequency = 6f   (6 pulses per cycle)
```

The **6-pulse bridge** has **higher average output** and **lower ripple** (ripple at `6f`) than the 3-pulse circuit — hence it dominates industrial rectification. Like the single-phase full converter, the 3-φ full converter **inverts** for `α > 90°` (regenerative braking / HVDC).

| Rectifier | Vdc (uncontrolled) | Ripple freq |
|---|---|---|
| 3-φ half-wave (3-pulse) | `(3√3/2π)Vmp = 1.17 Vp(rms)` | `3f` |
| 3-φ full bridge (6-pulse) | `(3/π)Vml = 1.35 VL(rms)` | `6f` |

> 💎 **KEY RESULT** — 3-φ **half-wave**: `Vdc = (3√3/2π)Vmp`, ripple **3f**. 3-φ **full bridge**: `Vdc = (3Vml/π)cosα`, ripple **6f**, `1.35·VL(rms)` uncontrolled. Higher pulse number ⇒ lower ripple.

> 🧠 **MEMORY HOOK** — **"Count the pulses: 3-pulse ⇒ 3f ripple, 6-pulse bridge ⇒ 6f ripple."** More pulses ⇒ smoother DC and higher average.

> ⚠️ **TRAP ALERT** — Use **peak line voltage `Vml = √3 Vmp`** in the bridge formula. The bridge is **6-pulse** (ripple `6f`), the half-wave is **3-pulse** (ripple `3f`) — don't mix the pulse numbers. Controlled bridge **inverts** for `α > 90°`.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Peak line voltage | `Vml = √3·Vmp` |
| 3-φ half-wave Vdc | `(3√3/2π)·Vmp·cosα` |
| 3-φ half-wave ripple | `3f` |
| 3-φ bridge Vdc | `(3·Vml/π)·cosα` |
| 3-φ bridge (uncontrolled, rms) | `1.35·VL(rms)` |
| 3-φ bridge ripple | `6f` |

### 🧮 Solved Examples

**Example 1 — 3-φ bridge output.**
A 3-phase full bridge is fed from a `400 V` (line, rms) supply, `α = 0°`. Find `Vdc`.

```
Vdc = 1.35·VL(rms) = 1.35 × 400 = 540 V
(equivalently Vml = √2×400 = 565.7 V ; Vdc = 3×565.7/π = 540 V)
```

**Example 2 — Controlled bridge at α = 30°.**
Same bridge fired at `α = 30°`. Find `Vdc`.

```
Vdc = 1.35·VL·cosα = 540 × cos30° = 540 × 0.866 = 467.6 V
```

### ⚠️ Common Traps

1. **Peak line vs peak phase** — the bridge uses `Vml = √3 Vmp`; the half-wave uses `Vmp`.
2. **Pulse number ⇒ ripple frequency** — 3-pulse → 3f, 6-pulse → 6f.
3. **1.35·VL(rms)** — handy shortcut for the uncontrolled 6-pulse bridge.
4. **cosα factor** — controlled output scales by `cosα`; inversion for α > 90°.
5. **Two devices conduct** in the bridge at any instant (one top, one bottom).
6. **Higher pulses ⇒ smoother** — 6-pulse ripple is much smaller than 3-pulse.

### 📝 Test (5 MCQ + 3 NAT)

**Q1 (MCQ).** The ripple frequency of a 3-φ full-bridge (6-pulse) rectifier on a 50 Hz supply is:
(a) 50 Hz (b) 150 Hz (c) 300 Hz (d) 100 Hz

**Q2 (MCQ).** The uncontrolled output of a 3-φ bridge in terms of rms line voltage is:
(a) 0.45 VL (b) 0.9 VL (c) 1.35 VL (d) 2.34 VL

**Q3 (MCQ).** A 3-φ half-wave rectifier has a ripple frequency of:
(a) f (b) 2f (c) 3f (d) 6f

**Q4 (MCQ).** In a 3-φ bridge, how many devices conduct at any instant?
(a) 1 (b) 2 (c) 3 (d) 6

**Q5 (MCQ).** A controlled 3-φ bridge inverts when:
(a) α = 0 (b) α < 90° (c) α > 90° (d) never

**Q6 (NAT).** A 3-φ bridge, VL = 415 V (rms), α = 0°. Find Vdc (V).

**Q7 (NAT).** The same bridge at α = 60°. Find Vdc (V).

**Q8 (NAT).** A 3-φ half-wave rectifier, peak phase voltage Vmp = 200 V, α = 0°. Find Vdc (V).

<details><summary>🔑 Solutions</summary>

**Q1 — (c) 300 Hz.** `6 × 50 = 300 Hz`.

**Q2 — (c) 1.35 VL.**

**Q3 — (c) 3f.**

**Q4 — (b) 2.** One from the top group, one from the bottom.

**Q5 — (c) α > 90°.**

**Q6 — 560.3 V.** `Vdc = 1.35 × 415 = 560.3 V`.

**Q7 — 280.1 V.** `Vdc = 560.3 × cos60° = 560.3 × 0.5 = 280.1 V`.

**Q8 — 165.4 V.** `Vdc = (3√3/2π)·Vmp = 0.827 × 200 = 165.4 V`.
</details>

---

### 📊 GATE Tech Coverage Progress

```
Measuring Instruments  ███████░░░░░░░░░░░░░  7/21  🔁 Round 4
Electrical Machines    █████████░░░░░░░░░░░  9/19  🔁 Round 4
Power Electronics      █████████░░░░░░░░░░░  9/18  🔁 Round 4
```

*Next: Measurements → Electrostatic/thermal/rectifier instruments; Machines → Induction motor I (rotating field, slip, torque); Power Electronics → rectifier performance (ripple factor, TUF, source-inductance overlap).*

> ✅ **Self-check before you close:** Can you (1) give the EMMC torque law and its wattmeter/transfer roles, (2) state the max-efficiency condition and contrast Swinburne vs Hopkinson, and (3) write the 3-φ half-wave and bridge `Vdc` with their ripple frequencies? Re-read any KEY RESULT that felt shaky.
