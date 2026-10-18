# ⚡ GATE Technical Revision — Day 89 (2026-10-18)

*The PMMC meter and its ranging, DC machine losses with the Swinburne and Hopkinson tests, and the three-phase rectifiers and their ripple.*

📅 Tech Day 89 · ⏱ ~50 min · 🎯 Measurements + Machines + Power Electronics

> Today: **PMMC instruments** (torque, swamping resistance, shunts/multipliers/Ayrton shunt), **DC machine losses & efficiency testing** (Swinburne vs Hopkinson), and **three-phase rectifiers** (half-wave 3-pulse & full-bridge 6-pulse, average output, ripple frequency).

---

## 🔧 Measuring Instruments: PMMC Instruments & Range Extension

### 📖 Concept Deep Dive

The **Permanent-Magnet Moving-Coil (PMMC)** instrument is the most common DC meter — accurate, sensitive, with a **uniform scale**.

**Construction & torque.** A light coil (N turns, area A) pivots in the **radial field B** of a permanent magnet; current `i` produces a deflecting torque:

```
Td = N·B·A·i = G·i      (G = NBA)
```

Control springs (which also carry the current) give `Tc = Kθ`, so `θ = Gi/K` — **linear (uniform) scale**. **Eddy-current damping** (aluminium former) settles the pointer. PMMC responds only to **DC** (average); on AC it reads zero. Advantages: high accuracy, high sensitivity, low power, uniform scale, no hysteresis. Disadvantages: DC only, costlier, can be damaged by overload.

**Swamping resistance.** The copper coil's resistance rises with temperature, causing a **temperature error**. A **swamping resistance** of **manganin** (near-zero temperature coefficient) is added **in series** (and sometimes the shunt combines manganin+copper), so the copper's variation becomes a small fraction of the total — minimising temperature error.

**Range extension.**
- **Ammeter — shunt.** A low resistance `Rsh` in parallel diverts most current:
```
Rsh = Im·Rm/(I − Im) = Rm/(m − 1) ,  m = I/Im (multiplying power)
```
- **Voltmeter — multiplier.** A high series resistance `Rs`:
```
Rs = Rm(m − 1) ,  m = V/Vm
```
- **Ayrton (universal) shunt.** A **tapped shunt** for a multi-range ammeter; the meter is never left unprotected during range switching (the whole shunt is always in circuit) — safer than separate switched shunts.

| Item | Formula/role |
|---|---|
| Torque | `Td = NBA·i = Gi` |
| Deflection | `θ = Gi/K` (uniform) |
| Shunt | `Rsh = Rm/(m−1)` |
| Multiplier | `Rs = Rm(m−1)` |
| Swamping R | manganin, cuts temp error |

> 💎 **KEY RESULT** — PMMC: `Td = NBA·i`, **uniform scale**, **DC only**. Shunt `Rsh = Rm/(m−1)`; multiplier `Rs = Rm(m−1)`. **Swamping resistance (manganin)** minimises temperature error; **Ayrton shunt** = safe multi-range ammeter.

> 🧠 **MEMORY HOOK** — "**PMMC = DC, linear, uniform scale; shunt divides, multiplier multiplies; swamp with manganin; Ayrton = universal shunt.**"

> ⚠️ **TRAP ALERT** — PMMC reads **DC only** (zero on pure AC). The **swamping resistance** is **manganin in series** (not copper). The **Ayrton shunt** keeps the movement protected while switching ranges.

### 📐 Formula Sheet

| Quantity | Formula | Notes |
|---|---|---|
| Torque | `Td = NBA·i = Gi` | G = NBA |
| Deflection | `θ = Gi/K` | uniform |
| Shunt | `Rsh = Im·Rm/(I−Im)` | ammeter |
| Multiplier | `Rs = Rm(m−1)` | voltmeter |
| Multiplying power | `m = I/Im` or `V/Vm` | — |

### 🧮 Solved Examples

**Example 1 — Multi-range shunt.** A PMMC movement (`Im = 5 mA`, `Rm = 20 Ω`) is to read 5 A full scale. Find the shunt.

```
m = I/Im = 5/0.005 = 1000
Rsh = Rm/(m − 1) = 20/(1000 − 1) = 20/999 = 0.02002 Ω
```

**Rsh ≈ 0.02 Ω.** ✔

**Example 2 — Voltmeter multiplier.** The same movement (Vm = Im·Rm = 0.1 V) is to read 100 V full scale. Find the multiplier.

```
m = V/Vm = 100/0.1 = 1000
Rs = Rm(m − 1) = 20 × 999 = 19,980 Ω ≈ 19.98 kΩ
```

**Rs ≈ 19.98 kΩ.** ✔

### ⚠️ Common Traps
1. **PMMC is DC-only** (reads zero on symmetrical AC).
2. **Swamping resistance = manganin** (low temp-coeff), in series.
3. **Shunt m = I/Im; multiplier m = V/Vm** — don't swap.
4. **Ayrton shunt protects the movement** during range changes.
5. **Uniform scale** (torque ∝ i) — unlike MI/EMMC square-law.
6. **Rsh is small, Rs is large** — order-of-magnitude check.

### 📝 Test (8 questions)

**Q1 (MCQ).** A PMMC instrument has a scale that is:
(a) square-law  (b) uniform  (c) logarithmic  (d) cramped

**Q2 (MCQ).** A PMMC meter directly measures:
(a) AC rms  (b) DC (average)  (c) peak AC  (d) frequency

**Q3 (MCQ).** Swamping resistance is made of:
(a) copper  (b) manganin  (c) nichrome  (d) tungsten

**Q4 (MCQ).** To extend an ammeter range, use a:
(a) series high resistance  (b) parallel low (shunt) resistance  (c) capacitor  (d) inductor

**Q5 (MCQ).** The Ayrton shunt is used to:
(a) measure voltage  (b) provide safe multi-range current measurement  (c) rectify AC  (d) damp oscillations

**Q6 (NAT).** A 1 mA, 50 Ω movement reads 1 A full scale. Find the shunt (Ω, 3 decimals).

**Q7 (NAT).** The same movement (Vm = 0.05 V) reads 50 V. Find the multiplier (Ω).

**Q8 (NAT).** A movement with Im = 2 mA, Rm = 25 Ω: find the multiplying power for a 10 A range.

<details><summary>🔑 Solutions</summary>

**Q1 → (b).** Uniform.

**Q2 → (b).** DC average.

**Q3 → (b).** Manganin.

**Q4 → (b).** Parallel shunt.

**Q5 → (b).** Safe multi-range ammeter.

**Q6.**
```
m = 1/0.001 = 1000; Rsh = 50/(1000−1) = 50/999 = 0.050 Ω
```
**Rsh ≈ 0.050 Ω.**

**Q7.**
```
m = V/Vm = 50/0.05 = 1000; Rs = 50×(1000−1) = 49,950 Ω
```
**Rs = 49,950 Ω.**

**Q8.**
```
m = I/Im = 10/0.002 = 5000
```
**m = 5000.**

</details>

---

## 🔧 Electrical Machines: DC Machine Losses, Efficiency & Testing

### 📖 Concept Deep Dive

**Losses** in a DC machine split into:
- **Constant losses** — **iron (core)** + **mechanical (friction & windage)** + **shunt-field copper loss** (roughly independent of load).
- **Variable losses** — **armature copper loss `Ia²Ra`** (and brush/series losses), rising with load.

**Efficiency.** `η = output/input`; maximum efficiency occurs when **variable loss = constant loss**:

```
Ia²Ra = Pconstant     (condition for maximum efficiency)
η(motor) = (input − losses)/input
```

**Swinburne's test.** A simple **no-load test** that finds the **constant losses** and `Ra`, then **computes** efficiency at any load **without actually loading** the machine. From the no-load run: `Constant loss = V·I0 − Ia0²·Ra` (input minus the small no-load copper loss). Advantages: cheap, quick, no large power needed. **Limitations:** cannot reveal **stray-load loss**, temperature rise, or commutation behaviour at full load; only valid for **shunt/level-compound** machines (not series, which can't run at no load).

**Hopkinson's test (back-to-back / regenerative).** Two **identical** DC machines are **coupled mechanically and connected electrically**; one runs as a **motor**, the other as a **generator**, and the generated power **circulates back**. Only the **total losses** are drawn from the supply, so both machines are tested at **full load** while consuming only the loss power — energy-efficient and realistic. It gives efficiency **under actual load/temperature**. Requirement: **two identical machines**.

**Brake (dynamometer) test** — direct loading, suitable only for **small machines** (wastes energy as heat).

| Test | Type | Key point |
|---|---|---|
| Swinburne | no-load, indirect | cheap; no full-load check |
| Hopkinson | back-to-back, full-load | needs 2 identical machines |
| Brake | direct load | small machines only |

> 💎 **KEY RESULT** — Max efficiency when **variable loss (Ia²Ra) = constant loss**. **Swinburne = no-load indirect** (cheap, but no full-load/stray-loss data); **Hopkinson = back-to-back full-load** (realistic, needs two identical machines, only loss power from mains).

> 🧠 **MEMORY HOOK** — "**Swinburne = Simple no-load; Hopkinson = two machines Hooked back-to-back at full load.**"

> ⚠️ **TRAP ALERT** — **Swinburne can't be used for series motors** (no no-load) and misses stray-load loss. **Hopkinson needs two identical machines** and tests at full load with only loss power drawn — don't confuse their scopes.

### 📐 Formula Sheet

| Quantity | Formula | Notes |
|---|---|---|
| Variable loss | `Ia²·Ra` | copper |
| Max-efficiency condition | `Ia²Ra = Pconstant` | — |
| Motor efficiency | `(input − losses)/input` | — |
| Swinburne constant loss | `V·I0 − Ia0²·Ra` | no-load |
| Generator efficiency | `output/(output + losses)` | — |

### 🧮 Solved Examples

**Example 1 — Swinburne constant loss.** A DC shunt machine on no load draws 230 V, 5 A total; field current 1 A, Ra = 0.5 Ω. Find the constant losses.

```
Armature no-load current Ia0 = 5 − 1 = 4 A
Armature copper loss (no load) = Ia0²·Ra = 4²×0.5 = 8 W
Input at no load = V·I0 = 230×5 = 1150 W
Constant loss = 1150 − 8 − (field loss 230×1=230 W)  [if field loss counted separately]
```
Taking constant (rotational) loss = input − armature Cu loss − field Cu loss:
```
Constant (iron+friction) loss = 1150 − 8 − 230 = 912 W
```

**Constant rotational loss ≈ 912 W** (iron + friction + windage). ✔

**Example 2 — Max-efficiency load.** A machine has constant loss 912 W and Ra = 0.5 Ω. Find the armature current at which efficiency is maximum.

```
Ia²Ra = Pconstant ⇒ Ia² × 0.5 = 912 ⇒ Ia² = 1824 ⇒ Ia = 42.7 A
```

**Max efficiency at Ia ≈ 42.7 A** (where Cu loss = constant loss). ✔

### ⚠️ Common Traps
1. **Max efficiency: variable loss = constant loss** (Ia²Ra = Pconst).
2. **Swinburne is a no-load test** (indirect) — not valid for series motors; misses stray-load loss.
3. **Hopkinson needs two identical machines** and tests at full load.
4. **Constant losses = iron + friction/windage (+ shunt field)**; variable = armature copper.
5. **Field copper loss is (nearly) constant** for a shunt machine.
6. **Brake test wastes energy** — only for small machines.

### 📝 Test (8 questions)

**Q1 (MCQ).** Maximum efficiency of a DC machine occurs when:
(a) copper loss = 0  (b) variable loss = constant loss  (c) load = full load  (d) iron loss = 0

**Q2 (MCQ).** Swinburne's test is a:
(a) full-load test  (b) no-load (indirect) test  (c) back-to-back test  (d) brake test

**Q3 (MCQ).** Swinburne's test cannot be applied to:
(a) shunt motors  (b) series motors  (c) level-compound  (d) generators

**Q4 (MCQ).** Hopkinson's test requires:
(a) one machine  (b) two identical machines  (c) a brake drum  (d) a wattmeter only

**Q5 (MCQ).** In Hopkinson's test, the supply provides only the:
(a) full output power  (b) total losses  (c) field power only  (d) nothing

**Q6 (NAT).** A machine: constant loss 500 W, Ra = 0.25 Ω. Find Ia (A) for maximum efficiency.

**Q7 (NAT).** No-load: V = 220 V, armature current 3 A, Ra = 0.4 Ω. Find the no-load armature copper loss (W).

**Q8 (NAT).** Output 10 kW, total losses 1 kW. Find the generator efficiency (%).

<details><summary>🔑 Solutions</summary>

**Q1 → (b).** Variable = constant loss.

**Q2 → (b).** No-load indirect.

**Q3 → (b).** Series motors (no no-load).

**Q4 → (b).** Two identical machines.

**Q5 → (b).** Total losses only.

**Q6.**
```
Ia²Ra = Pconst ⇒ Ia² = 500/0.25 = 2000 ⇒ Ia = 44.7 A
```
**Ia ≈ 44.7 A.**

**Q7.**
```
Cu loss = Ia²Ra = 3²×0.4 = 9×0.4 = 3.6 W
```
**3.6 W.**

**Q8.**
```
η = output/(output+losses) = 10000/(10000+1000) = 0.909 = 90.9%
```
**η = 90.9%.**

</details>

---

## 🔧 Power Electronics: Three-Phase Rectifiers (Half-Wave & Full Converter)

### 📖 Concept Deep Dive

Three-phase rectifiers give **smoother DC** (higher pulse number) and higher power than single-phase.

**Three-phase half-wave (3-pulse).** Three diodes/SCRs, one per phase, each conducting for 120°; the diode connected to the **most positive phase** conducts. For an **uncontrolled (diode)** rectifier with peak **phase** voltage `Vmp`:

```
Vdc = (3√3 / 2π)·Vmp ≈ 0.827·Vmp
Ripple frequency = 3f   (three pulses per cycle)
```

For the **controlled** version (α ≤ 30° for continuous conduction): `Vdc = (3√3/2π)·Vmp·cos α`.

**Three-phase full converter (6-pulse bridge).** Six diodes/SCRs in a bridge; two devices conduct at a time (one from the top group, one from the bottom). For an **uncontrolled** bridge with peak **line-to-line** voltage `Vml`:

```
Vdc = (3/π)·Vml ≈ 0.955·Vml
Ripple frequency = 6f   (six pulses per cycle)
```

For the **controlled** full converter: `Vdc = (3/π)·Vml·cos α = (3Vml/π)cosα` (inverts for α > 90°, as on Day 80).

**Why three-phase/6-pulse?** More pulses per cycle → **higher ripple frequency**, **lower ripple amplitude**, smaller filters, better transformer utilisation, and balanced three-phase loading. The **6-pulse bridge** is the workhorse of industrial DC drives and HVDC.

| Rectifier | Pulses | Vdc (uncontrolled) | Ripple freq |
|---|---|---|---|
| 3-φ half-wave | 3 | `(3√3/2π)Vmp ≈ 0.827 Vmp` | 3f |
| 3-φ full bridge | 6 | `(3/π)Vml ≈ 0.955 Vml` | 6f |

> 💎 **KEY RESULT** — 3-φ half-wave: `Vdc = (3√3/2π)Vmp ≈ 0.827 Vmp`, ripple **3f**. 3-φ full bridge: `Vdc = (3/π)Vml ≈ 0.955 Vml`, ripple **6f**. Controlled → × cos α.

> 🧠 **MEMORY HOOK** — "**3-pulse → 3f (0.827 Vmp, phase); 6-pulse → 6f (0.955 Vml, line).**" More pulses = smoother DC.

> ⚠️ **TRAP ALERT** — Half-wave uses **peak phase** voltage `Vmp` (`0.827`); the full bridge uses **peak line** voltage `Vml` (`0.955`). Ripple frequency is **3f** vs **6f** — at 50 Hz that's 150 Hz vs 300 Hz.

### 📐 Formula Sheet

| Quantity | Formula | Notes |
|---|---|---|
| 3-φ half-wave Vdc | `(3√3/2π)·Vmp` | ≈ 0.827 Vmp |
| 3-φ full bridge Vdc | `(3/π)·Vml` | ≈ 0.955 Vml |
| Controlled (half-wave) | `×cos α` (α ≤ 30°) | — |
| Controlled (full) | `(3Vml/π)cosα` | inverts α>90° |
| Ripple freq (half-wave) | `3f` | 3-pulse |
| Ripple freq (full bridge) | `6f` | 6-pulse |

### 🧮 Solved Examples

**Example 1 — 3-φ full bridge (uncontrolled).** A 3-φ full-bridge diode rectifier is fed from a 400 V (line-to-line, RMS) supply. Find the average DC output and the ripple frequency (50 Hz supply).

```
Vml (peak line) = √2 × 400 = 565.7 V
Vdc = (3/π)·Vml = (3/3.1416)×565.7 = 0.9549×565.7 = 540.2 V
Ripple frequency = 6f = 6×50 = 300 Hz
```

**Vdc ≈ 540.2 V, ripple = 300 Hz.** ✔

**Example 2 — 3-φ half-wave (uncontrolled).** A 3-φ half-wave diode rectifier has a peak phase voltage Vmp = 325 V. Find the DC output and ripple frequency (50 Hz).

```
Vdc = (3√3/2π)·Vmp = (3×1.732/6.2832)×325 = (5.196/6.2832)×325
    = 0.827×325 = 268.8 V
Ripple frequency = 3f = 150 Hz
```

**Vdc ≈ 268.8 V, ripple = 150 Hz.** ✔

### ⚠️ Common Traps
1. **Half-wave uses peak phase (Vmp), full bridge uses peak line (Vml).**
2. **Ripple frequency: 3-pulse = 3f, 6-pulse = 6f** (150 Hz vs 300 Hz at 50 Hz).
3. **Convert RMS → peak** (×√2) first — and know phase vs line.
4. **0.827 (half-wave) vs 0.955 (full bridge)** factors.
5. **Controlled full converter inverts for α > 90°** (half-wave controlled valid up to α = 30° for continuous conduction).
6. **More pulses → smaller ripple** (better DC).

### 📝 Test (8 questions)

**Q1 (MCQ).** The ripple frequency of a 3-φ full-bridge (6-pulse) rectifier on a 50 Hz supply is:
(a) 50 Hz  (b) 150 Hz  (c) 300 Hz  (d) 100 Hz

**Q2 (MCQ).** The average output of a 3-φ full-bridge (uncontrolled) rectifier is:
(a) `(3/π)Vml`  (b) `(2Vm/π)`  (c) `(Vm/π)`  (d) `(3√3/2π)Vmp`

**Q3 (MCQ).** A 3-φ half-wave rectifier has a ripple frequency of:
(a) f  (b) 3f  (c) 6f  (d) 2f

**Q4 (MCQ).** The 3-φ half-wave average output uses the peak:
(a) line voltage  (b) phase voltage  (c) DC voltage  (d) ripple voltage

**Q5 (MCQ).** Compared with single-phase, three-phase rectifiers give:
(a) more ripple  (b) smoother DC (higher pulse number)  (c) lower voltage always  (d) no DC

**Q6 (NAT).** A 3-φ full bridge from 415 V line (RMS): find Vdc (V, 1 decimal).

**Q7 (NAT).** A 3-φ half-wave rectifier, Vmp = 300 V: find Vdc (V, 1 decimal).

**Q8 (NAT).** A 3-φ full-bridge controlled rectifier, Vml = 560 V, α = 60°. Find Vdc (V, 1 decimal).

<details><summary>🔑 Solutions</summary>

**Q1 → (c).** 6f = 300 Hz.

**Q2 → (a).** `(3/π)Vml`.

**Q3 → (b).** 3f.

**Q4 → (b).** Peak phase voltage.

**Q5 → (b).** Smoother DC (higher pulse number).

**Q6.**
```
Vml = √2×415 = 586.9 V; Vdc = (3/π)×586.9 = 0.9549×586.9 = 560.4 V
```
**Vdc ≈ 560.4 V.**

**Q7.**
```
Vdc = (3√3/2π)×300 = 0.827×300 = 248.1 V
```
**Vdc ≈ 248.1 V.**

**Q8.**
```
Vdc = (3Vml/π)cosα = (3×560/3.1416)×cos60° = 534.76×0.5 = 267.4 V
```
**Vdc ≈ 267.4 V.**

</details>

---

## 📊 Progress

```
Measuring Instruments  [█████░░░░░░░░░░░░░░░░]  Round 5 · topic  5/22 (PMMC & ranging)
Electrical Machines    [█████████░░░░░░░░░░░░]  Round 5 · topic  9/20 (DC losses & testing)
Power Electronics       [█████████░░░░░░░░░░░░]  Round 5 · topic  9/20 (3-φ rectifiers)
```

- **Section A (Measurements):** round 5 at PMMC & range extension. 🔄
- **Section B (Machines):** round 5 at DC machine testing (Swinburne/Hopkinson). 🔄
- **Section C (Power Electronics):** round 5 at three-phase rectifiers. 🔄

> 🎯 **Today's three one-liners:** (1) **PMMC DC/uniform; Rsh = Rm/(m−1), Rs = Rm(m−1); swamp with manganin.** (2) **Max η at Ia²Ra = Pconst; Swinburne = no-load, Hopkinson = two machines full-load.** (3) **3-φ half-wave 0.827 Vmp (3f); full bridge 0.955 Vml (6f).**

*Correctness over length — verify any value marked "verify" before the exam.*
