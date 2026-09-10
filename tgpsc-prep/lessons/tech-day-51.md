# ⚡ GATE Technical Revision — Day 51 (2026-09-10)

*Round-3 pass 9 — wattmeter connections, DC machine testing, and three-phase rectifiers. Nuanced topics that reward careful reasoning.*

📅 Tech Day 51 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics · 🔁 Round-3 pass 9

> 🧠 **MEMORY HOOK** — Today: **wattmeter connection errors** (which coil counts the extra loss), **Swinburne vs Hopkinson** machine tests, and the **3-φ full converter** (`(3√3 Vm/2π)cosα`, ripple **6f**). Precision topics.

---

## 🔧 Measuring Instruments: Power Measurement I — Dynamometer Wattmeter

### 📖 Concept Deep Dive

A **dynamometer wattmeter** has a **fixed current coil (CC)** carrying load current and a **moving pressure coil (PC)** carrying a current proportional to voltage. Its deflection `∝ VI·cosφ = P` (active power). Two connection choices introduce different errors.

**Connection 1 — PC across the load (CC includes PC current).** The current coil carries **load current + PC current**, so the wattmeter reads load power **plus PC power loss**:

```
Wattmeter reading = P_load + V²/Rpc   (extra = pressure-coil power)
Best when the LOAD current is LARGE (PC current negligible fraction).
```

**Connection 2 — PC after the CC (CC before PC; PC sees only load voltage minus CC drop).** The pressure coil measures the voltage across load **plus CC drop**, so the wattmeter reads load power **plus CC power loss**:

```
Wattmeter reading = P_load + I²·Rcc   (extra = current-coil power)
Best when the LOAD voltage is HIGH / load current is small.
```

**Rule:** choose the connection that makes the **counted extra loss** the smaller one. For **large load current** → PC-across-load (Connection 1) so the CC doesn't add its I²Rcc. For **small current / high voltage** → Connection 2.

**Pressure-coil inductance error.** The PC is slightly inductive, so its current lags V by a small angle `β` (instead of being in phase). The wattmeter then reads:

```
True power P = VI·cosφ
Reading ≈ VI·cos(φ − β)·cosβ  →  error factor ≈ cos(φ−β)/(cosφ·cosβ)
Error is POSITIVE for lagging pf, and worsens at LOW pf.
```

Compensated by a **capacitor across a portion of the PC series resistance** (makes the PC branch effectively non-inductive).

**LPF (low-power-factor) wattmeter** — modifications for accurate reading at **low pf**: (1) **low-current pressure coil** (more turns, less current) for adequate deflection, (2) **pressure-coil compensation** for its own current, and (3) **inductance compensation**. Needed because at low pf a normal wattmeter gives a small, error-prone deflection.

> 💎 **KEY RESULT** — PC-across-load → error `+V²/Rpc` (use for **large current**); CC-first → error `+I²Rcc` (use for **small current/high V**). **PC-inductance error** is positive at lagging pf, worse at low pf → compensate with a capacitor; use an **LPF wattmeter** for low pf.

> ⚠️ **TRAP ALERT** — The **connection error** = the power loss of the coil that is "inside" the measurement loop: **PC-across-load counts PC loss (V²/Rpc)**; **CC-first counts CC loss (I²Rcc)**. Pick the connection giving the smaller extra term.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Wattmeter reading (ideal) | `P = VI·cosφ` |
| PC-across-load error | `+ V²/Rpc` (PC power) |
| CC-first error | `+ I²·Rcc` (CC power) |
| PC-inductance error factor | `≈ cos(φ−β)/(cosφ·cosβ)` |
| Compensation | capacitor across part of PC resistance |
| LPF wattmeter | low-I PC + PC & inductance compensation |

### 🧮 Solved Examples

**Example 1 — choosing the connection.**
A load draws `I = 20 A` at `V = 100 V`. `Rcc = 0.5 Ω`, `Rpc = 5000 Ω`. Which connection has the smaller error?

- PC-across-load error `= V²/Rpc = 100²/5000 = 10000/5000 = 2 W`.
- CC-first error `= I²·Rcc = 20² × 0.5 = 400 × 0.5 = 200 W`.
- The PC-across-load connection (**2 W** error) is far better here (large current).

**Example 2 — inductance error at low pf.**
A wattmeter reads with PC phase error `β = 1°`. Load pf `= 0.5` lagging (`φ = 60°`). Approximate reading error factor?

- Error factor `= cos(φ−β)/(cosφ·cosβ) = cos59°/(cos60°·cos1°) = 0.515/(0.5 × 0.9998) = 0.515/0.4999 = 1.030`.
- Reads about **3% high** — small β but noticeable at low pf (at unity pf the error would be far smaller).

> 🧠 **MEMORY HOOK** — "**Big current → PC across the load** (avoid I²Rcc)." PC inductance error **grows as pf falls** — hence the LPF wattmeter.

### ⚠️ Common Traps

1. Swapping the two connection errors (`V²/Rpc` vs `I²Rcc`).
2. Using a normal wattmeter at low pf (needs **LPF** type).
3. Forgetting the PC-inductance error is **worse at low pf**.
4. Assuming the wattmeter reads apparent power (it reads **active** power).
5. Ignoring compensation (capacitor across PC resistance).
6. Choosing PC-across-load for a **high-voltage, low-current** load (wrong — CC-first is better there).

### 📝 Test — Wattmeter (8 Q)

1. A dynamometer wattmeter reads: (a) VA (b) VI·cosφ (c) VI·sinφ (d) I².
2. With PC across the load, the extra error term is: (a) I²Rcc (b) V²/Rpc (c) VI (d) zero.
3. With CC before PC, the error term is: (a) V²/Rpc (b) I²Rcc (c) VIsinφ (d) zero.
4. PC-inductance error is worst at: (a) unity pf (b) low pf (c) high frequency only (d) DC.
5. For a large-current load, prefer: (a) PC across load (b) CC before PC (c) either (d) no wattmeter.
6. **(NAT)** V = 200 V, Rpc = 8000 Ω. PC-across-load error (W)?
7. **(NAT)** I = 15 A, Rcc = 0.4 Ω. CC-first error (W)?
8. **(NAT)** True power VI·cosφ with V = 220, I = 5, pf = 0.6 (W)?

<details><summary>🔑 Solutions</summary>

**Q1 — (b).** `VI·cosφ`.

**Q2 — (b) V²/Rpc.**

**Q3 — (b) I²Rcc.**

**Q4 — (b) low pf.**

**Q5 — (a) PC across load.**

**Q6.** `V²/Rpc = 200²/8000 = 40000/8000 = 5 W`.

**Q7.** `I²Rcc = 225 × 0.4 = 90 W`.

**Q8.** `P = 220 × 5 × 0.6 = 660 W`.

</details>

---

## 🔧 Electrical Machines: DC Machine Losses, Efficiency & Testing

### 📖 Concept Deep Dive

**Losses in a DC machine:**
- **Copper losses** — armature `Ia²Ra`, field `If²Rf` (shunt) or series; **variable** (load-dependent).
- **Iron (core) losses** — hysteresis + eddy in the armature core; roughly **constant** at constant flux/speed.
- **Mechanical losses** — friction + windage; **constant** at constant speed.
- **Stray load loss** — small, from flux distortion under load.

**Constant losses** = iron + mechanical (+ shunt-field Cu). **Efficiency** peaks when **variable (Cu) loss = constant loss** (same condition as the transformer).

**Swinburne's Test** (indirect, no-load).
- Run the machine as a **motor at no load** at rated voltage/speed. Measure input; the no-load input (minus small no-load armature Cu loss) gives the **constant losses** (iron + mechanical + field Cu).
- Efficiency at any load is then **calculated** by adding the computed `Ia²Ra` for that load.
- **Advantages:** simple, cheap, needs little power. **Disadvantages:** doesn't test under **actual load** (no temperature rise / commutation check), assumes constant iron loss, **not valid for series** motors (can't run at no load).

```
As generator:  η = Output/(Output + constant loss + Ia²Ra)
As motor:      η = (Input − constant loss − Ia²Ra)/Input
```

**Hopkinson's Test** (regenerative / back-to-back).
- **Two identical machines** are **mechanically coupled**; one runs as a **motor**, driving the other as a **generator**, whose output is fed back electrically to the motor. Only the **losses** are supplied from the mains (plus generator field).
- Allows **full-load testing** with **small power drawn from the supply** (only losses), so it's economical for large machines and tests actual heating/commutation.
- **Disadvantage:** needs **two identical** machines.

```
Power from supply = total losses of both machines.
Stray/iron+mech split between the two; armature Cu computed from measured currents.
```

> 💎 **KEY RESULT** — Max efficiency when **variable Cu loss = constant loss**. **Swinburne** = no-load indirect (finds constant losses; can't test series motors or actual load). **Hopkinson** = back-to-back **full-load** test, supply provides only **losses**, needs **two identical** machines.

> ⚠️ **TRAP ALERT** — **Swinburne** can't test **series motors** (no no-load operation) and doesn't check load heating/commutation. **Hopkinson** needs **two identical** machines but allows economical **full-load** testing.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Armature Cu loss | `Pa = Ia²·Ra` |
| Constant loss (Swinburne) | `Pc ≈ V·I0 − Ia0²·Ra` (no-load) |
| Efficiency (generator) | `η = VIL/(VIL + Pc + Ia²Ra)` |
| Efficiency (motor) | `η = (VIL − Pc − Ia²Ra)/(VIL)` |
| Max-efficiency condition | `Ia²Ra = Pc` (variable = constant) |
| Hopkinson supply power | `= total losses (both machines)` |

### 🧮 Solved Examples

**Example 1 — Swinburne efficiency.**
A shunt machine, `V = 220 V`. No-load line current `= 4 A`, field current `= 1 A`, `Ra = 0.5 Ω`. Find the constant losses, then the efficiency **as a motor** at a load line current of `40 A`.

- No-load armature current `Ia0 = 4 − 1 = 3 A`; no-load Cu `= 3²×0.5 = 4.5 W`.
- No-load input `= 220 × 4 = 880 W`; constant loss `Pc = 880 − 4.5 = 875.5 W` (includes field Cu `220×1 = 220 W`... treat field separately if asked; here Pc lumps iron+mech+field as the "no-load" constant).
- At load: `Ia = 40 − 1 = 39 A`; armature Cu `= 39²×0.5 = 760.5 W`.
- Input `= 220 × 40 = 8800 W`; losses `= 875.5 + 760.5 = 1636 W`.
- `η = (8800 − 1636)/8800 = 7164/8800 = 0.814 = 81.4%`.

**Example 2 — max-efficiency load.**
If constant loss `Pc = 500 W` and `Ra = 0.5 Ω`, at what armature current is efficiency maximum?

- `Ia²Ra = Pc ⇒ Ia = √(Pc/Ra) = √(500/0.5) = √1000 = 31.6 A`.

> 🧠 **MEMORY HOOK** — "**Swinburne = one machine, no load, calculate.** **Hopkinson = two machines, full load, only losses from mains.**"

### ⚠️ Common Traps

1. Using Swinburne for a **series** motor (impossible — no no-load run).
2. Forgetting Swinburne gives **no** load-heating/commutation info.
3. Thinking Hopkinson needs full input power (only **losses** from mains).
4. Omitting field current when finding armature current (`Ia = IL − If` for shunt motor... `Ia = IL − If`).
5. Treating iron loss as load-dependent (it's ~constant).
6. Missing the max-efficiency condition `Ia²Ra = Pc`.

### 📝 Test — DC Machine Testing (8 Q)

1. Swinburne's test is a: (a) full-load test (b) no-load indirect test (c) retardation test (d) heat run.
2. Swinburne's test cannot be applied to: (a) shunt motors (b) series motors (c) generators (d) compound.
3. Hopkinson's test requires: (a) one machine (b) two identical machines (c) a dynamometer (d) no machine.
4. In Hopkinson's test, the supply provides: (a) full output (b) only the losses (c) nothing (d) double power.
5. Maximum efficiency occurs when: (a) Cu loss = 0 (b) variable loss = constant loss (c) load = 0 (d) speed = 0.
6. **(NAT)** No-load input 900 W, no-load armature Cu 5 W. Constant loss (W)?
7. **(NAT)** Constant loss 720 W, Ra = 0.2 Ω. Armature current at max efficiency (A, 1 dp)?
8. **(NAT)** Motor: input 6000 W, constant loss 400 W, armature Cu 500 W. Efficiency (%)?

<details><summary>🔑 Solutions</summary>

**Q1 — (b).** No-load indirect.

**Q2 — (b) series motors.**

**Q3 — (b) two identical machines.**

**Q4 — (b) only the losses.**

**Q5 — (b).** Variable = constant loss.

**Q6.** `Pc = 900 − 5 = 895 W`.

**Q7.** `Ia = √(720/0.2) = √3600 = 60 A`.

**Q8.** `η = (6000 − 400 − 500)/6000 = 5100/6000 = 0.85 = 85%`.

</details>

---

## 🔧 Power Electronics: Three-Phase Rectifiers

### 📖 Concept Deep Dive

Three-phase rectifiers give **higher output, lower ripple, and higher ripple frequency** than single-phase — preferred for high-power DC.

**3-φ half-wave (3-pulse) controlled rectifier** (three SCRs, common cathode). Each SCR conducts `120°`. Average output (with firing angle `α` measured from the natural commutation point):

```
Vo = (3√3·Vm)/(2π) · cosα      (Vm = peak PHASE voltage)
Ripple frequency = 3f
```

At `α = 0`: `Vo = 3√3·Vm/2π = 1.17·Vm(phase-rms-based)`... (equivalently `Vo0 = 3√3 Vm/2π`).

**3-φ full converter (6-pulse bridge, 6 SCRs).** The workhorse. Two devices conduct at any time (one from the top group, one from the bottom). Average output:

```
Vo = (3√3·Vm)/π · cosα           (Vm = peak PHASE voltage)
   = (3·Vml)/π · cosα            (Vml = peak LINE voltage, since Vml = √3·Vm)
Ripple frequency = 6f  (300 Hz on 50 Hz)
```

- Two-quadrant: `α > 90°` → inversion (like the 1-φ full converter).
- **6-pulse** output → much smoother than 1-φ (only ~4.2% ripple), and the ripple is at **6f**, easier to filter.
- Each SCR conducts `120°`; PIV `= √3·Vm = Vml` (peak line voltage).

**Comparison (uncontrolled averages, phase peak Vm):**

| Rectifier | Pulses | Vo (α=0) | Ripple freq |
|---|---|---|---|
| 1-φ full-wave | 2 | `2Vm/π` | 2f |
| 3-φ half-wave | 3 | `3√3 Vm/2π` | 3f |
| 3-φ full bridge | 6 | `3√3 Vm/π` | 6f |

> 💎 **KEY RESULT** — 3-φ full converter: `Vo = (3√3 Vm/π)cosα = (3 Vml/π)cosα`, **ripple 6f**, each SCR conducts **120°**, two-quadrant (α>90° inverts). 3-φ half-wave: `(3√3 Vm/2π)cosα`, ripple **3f**.

> ⚠️ **TRAP ALERT** — For the **6-pulse bridge** use `(3√3 Vm/π)cosα` with **Vm = peak PHASE** voltage (or `(3 Vml/π)cosα` with **Vml = peak LINE** voltage). Ripple is **6f** (not 3f). Don't halve the bridge formula — the half-wave (3-pulse) has the `/2π` version.

### 📐 Formula Sheet

| Converter | Average output | Ripple |
|---|---|---|
| 3-φ half-wave (3-pulse) | `(3√3 Vm/2π)·cosα` | 3f |
| 3-φ full bridge (6-pulse) | `(3√3 Vm/π)·cosα` | 6f |
| In terms of line voltage (bridge) | `(3 Vml/π)·cosα` | 6f |
| SCR conduction angle (bridge) | 120° | — |
| PIV (bridge) | `Vml = √3·Vm` | — |

*(Vm = peak phase voltage; Vml = peak line voltage = √3·Vm.)*

### 🧮 Solved Examples

**Example 1 — 3-φ bridge output.**
A 3-φ full-converter bridge is fed from a `400 V` (line, RMS) supply at `α = 30°`. Average output voltage?

- Peak line voltage `Vml = √2 × 400 = 565.7 V`.
- `Vo = (3·Vml/π)·cosα = (3 × 565.7/3.1416) × cos30° = 540.2 × 0.866 = 467.8 V`.

**Example 2 — ripple frequency & conduction.**
For the above bridge on a `50 Hz` supply, ripple frequency and each SCR's conduction angle?

- Ripple frequency `= 6f = 6 × 50 = 300 Hz`.
- Each SCR conducts `120°` per cycle.

> 🧠 **MEMORY HOOK** — "**6-pulse bridge: (3√3 Vm/π)cosα, ripple 6f, 120° conduction.**" More pulses → smoother DC, higher ripple frequency, easier filtering.

### ⚠️ Common Traps

1. Using the half-wave `/2π` formula for the **6-pulse bridge** (should be `/π`).
2. Mixing **phase** and **line** peak voltage in the formula.
3. Taking ripple as 3f for the **bridge** (it's **6f**).
4. Forgetting each bridge SCR conducts **120°**.
5. Forgetting the bridge is **two-quadrant** (α>90° inverts).
6. Miscomputing PIV (bridge PIV = **peak line** voltage `√3 Vm`).

### 📝 Test — 3-φ Rectifiers (8 Q)

1. The 3-φ full-bridge average output is: (a) (3√3Vm/2π)cosα (b) (3√3Vm/π)cosα (c) (2Vm/π)cosα (d) (Vm/π)cosα.
2. Ripple frequency of a 6-pulse converter on 50 Hz is: (a) 100 Hz (b) 150 Hz (c) 300 Hz (d) 50 Hz.
3. Each SCR in a 3-φ bridge conducts for: (a) 60° (b) 120° (c) 180° (d) 240°.
4. A 3-φ half-wave rectifier has ripple frequency: (a) f (b) 2f (c) 3f (d) 6f.
5. The 3-φ full bridge operates in: (a) 1 quadrant (b) 2 quadrants (c) 4 quadrants (d) 3.
6. **(NAT)** 3-φ bridge, line RMS 415 V, α = 0. Average output (V, 1 dp)?
7. **(NAT)** For Q6 at α = 60°, average output (V, 1 dp)?
8. **(NAT)** Ripple frequency of a 3-pulse (half-wave) rectifier on 60 Hz (Hz)?

<details><summary>🔑 Solutions</summary>

**Q1 — (b).** `(3√3Vm/π)cosα`.

**Q2 — (c) 300 Hz.**

**Q3 — (b) 120°.**

**Q4 — (c) 3f.**

**Q5 — (b) 2 quadrants.**

**Q6.** `Vml = √2×415 = 586.9`; `Vo = (3×586.9/π)cos0 = 560.4 × 1 = 560.4 V`.

**Q7.** `Vo = 560.4 × cos60° = 560.4 × 0.5 = 280.2 V`.

**Q8.** `3f = 3 × 60 = 180 Hz`.

</details>

---

> 🧠 **DAY-51 WRAP (Round-3 pass 9)** — **Wattmeter:** PC-across-load error `+V²/Rpc` (big current), CC-first `+I²Rcc`; PC-inductance error worst at low pf → LPF wattmeter. **DC testing:** Swinburne (no-load, no series motors), Hopkinson (back-to-back, full-load, only losses from mains); ηmax at `Ia²Ra = Pc`. **3-φ rectifiers:** bridge `(3√3Vm/π)cosα`, ripple **6f**, 120° conduction, 2-quadrant. ⚡

**🔁 Round-3 progress:** Measurements ▓▓▓▓▓▓▓▓▓░ · Machines ▓▓▓▓▓▓▓▓▓░ · Power Electronics ▓▓▓▓▓▓▓▓▓░ — round-3 in the final stretch. 🎓 Power Systems joins as a 4th subject once the reference PDFs arrive.
