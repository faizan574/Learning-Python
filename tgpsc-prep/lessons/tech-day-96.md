# ⚡ GATE Technical Revision — Day 96 (2026-10-25)

*The null-balance DC potentiometer and its standardisation, the alternator's voltage-regulation methods (EMF, MMF, ZPF/Potier) with parallel-operation rules, and the cycloconverter that converts AC to lower-frequency AC directly.*

📅 Tech Day 96 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics

---

## 🔧 Measuring Instruments: DC Potentiometer — Crompton Type & AC Potentiometers

### 📖 Concept Deep Dive

A **potentiometer** measures an **unknown EMF/voltage by null balance** — comparing it against a known, calibrated voltage drop, drawing **zero current at balance** (so it loads the source not at all, giving high accuracy). It is a **voltage-measuring standard**.

**Principle.** A steady current `I` flows through a uniform resistance wire/slide; the voltage drop per unit length is constant. The unknown EMF is balanced against the drop across a tapped length `L`:

```
Ex = I · ρ · L   (drop across length L)
At balance: galvanometer reads zero (no current from Ex)
```

**Standardisation.** Before measurement, the working current `I` must be set to a precise known value using a **standard cell** (e.g., **Weston cadmium cell, 1.0186 V at 20°C**). The slider is set to the length corresponding to the standard-cell EMF, and the **rheostat adjusted until the galvanometer nulls** — fixing `I` at the calibrated value. Only then are unknowns measured. **Re-standardise** periodically (battery drifts).

**Crompton potentiometer.** A practical lab DC potentiometer: a **dial resistor (coarse, calibrated steps)** in series with a **slide-wire (fine)**, giving a wide range with good resolution. Typical: a 15-dial × 10 Ω + a single-turn slide wire. The galvanometer + protective (shunt) resistor detects null.

**Applications of a DC potentiometer:**
- **Calibration** of voltmeters, ammeters (via a standard resistor), and wattmeters.
- **Measuring low resistance** (volt-drop method with standard resistor).
- **Measuring unknown EMF** with no loading error.

**AC potentiometers.** Extend the null principle to AC — but now **magnitude AND phase** must be matched. Two types:
- **Polar type (Drysdale):** reads the unknown in **magnitude and phase angle** (a phase-shifting transformer sets a reference phase; magnitude read on a slide-wire).
- **Coordinate type (Gall/Tinsley):** uses **two perpendicular (in-phase & quadrature) potentiometers** to read the **in-phase (Vx) and quadrature (Vy)** components; magnitude `= √(Vx² + Vy²)`, phase `= arctan(Vy/Vx)`.

AC potentiometers need the **same frequency** on reference and unknown, and are used to measure AC voltages, currents (via standard resistor), and for **CT/PT testing** and impedance.

| Type | Measures | Note |
|---|---|---|
| DC (Crompton) | magnitude only | standardised by standard cell |
| AC polar (Drysdale) | magnitude + phase | phase-shifter reference |
| AC coordinate (Gall) | in-phase + quadrature | Vx, Vy components |

> 💎 **KEY RESULT** — Potentiometer: **null balance, zero current** at balance → no loading error. **Standardised** with a **Weston standard cell** (≈1.0186 V). AC coordinate type reads **Vx, Vy**: magnitude `= √(Vx²+Vy²)`, phase `= arctan(Vy/Vx)`.

> 🧠 **MEMORY HOOK** — "**Null balance (zero current) → set I with standard cell → measure. AC: polar (mag+angle) vs coordinate (Vx, Vy).**"

### 📐 Formula Sheet

| Quantity | Expression |
|---|---|
| Balance condition | `Ex = I·ρ·L` (galvanometer null) |
| Standardisation | set `I` so slide length = standard-cell EMF |
| Weston cell EMF | `≈ 1.0186 V at 20°C` |
| AC coordinate magnitude | `V = √(Vx² + Vy²)` |
| AC coordinate phase | `φ = arctan(Vy/Vx)` |
| Low-R measurement | `Rx = Vx/I` (standard resistor current) |

### 🧮 Solved Examples

**Example 1 — Slide-wire balance.**
A potentiometer slide-wire is 200 cm long, carrying a current giving a drop of **2 mV/cm**. An unknown EMF balances at **75 cm**. Find the EMF.

```
Ex = (drop per cm) × balance length = 2 mV/cm × 75 cm = 150 mV = 0.15 V
```

Unknown EMF **= 0.15 V**.

**Example 2 — AC coordinate potentiometer.**
An AC coordinate potentiometer reads in-phase component `Vx = 3.0 V` and quadrature `Vy = 4.0 V`. Find the magnitude and phase of the voltage.

```
|V| = √(Vx² + Vy²) = √(3² + 4²) = √(9 + 16) = √25 = 5.0 V
φ = arctan(Vy/Vx) = arctan(4/3) = 53.13°
```

Magnitude **5.0 V**, phase **53.13°**.

### ⚠️ Common Traps

1. **Potentiometer draws current at balance** — at **null**, it draws **zero** current (its key advantage).
2. **No standardisation needed** — the working current **must** be standardised with a standard cell first.
3. **Standard cell supplies the working current** — the standard cell only **sets/checks** the current; it is **never** used to drive the slide-wire (it would damage it).
4. **DC potentiometer measures AC** — need an **AC potentiometer** (magnitude + phase) for AC.
5. **AC coordinate reads magnitude directly** — it reads **Vx, Vy**; magnitude = `√(Vx²+Vy²)`.
6. **Balance independent of wire uniformity** — accuracy relies on a **uniform** slide-wire.

### 📝 Test — Measuring Instruments (8 Q)

1. At balance, a potentiometer draws:
   (a) maximum current (b) zero current (c) rated current (d) half current
2. A DC potentiometer is standardised using a:
   (a) voltmeter (b) standard (Weston) cell (c) ammeter (d) CRO
3. The EMF of a Weston standard cell is about:
   (a) 1.5 V (b) 1.0186 V (c) 2.0 V (d) 0.5 V
4. The Crompton potentiometer uses:
   (a) only a slide-wire (b) dial resistors + slide-wire (c) a bridge (d) a transformer
5. An AC coordinate potentiometer reads:
   (a) only magnitude (b) in-phase and quadrature components (c) only phase (d) frequency
6. **(NAT)** A slide-wire gives 5 mV/cm; an EMF balances at 40 cm. Find the EMF (mV).
7. **(NAT)** An AC coordinate potentiometer: Vx = 6 V, Vy = 8 V. Find the magnitude (V).
8. **(NAT)** For Q7, find the phase angle (degrees). [arctan(8/6)]

<details><summary>🔑 Solutions</summary>

**1 → (b).** Zero current at null.

**2 → (b).** Weston standard cell.

**3 → (b).** ≈1.0186 V.

**4 → (b).** Dial resistors + slide-wire.

**5 → (b).** In-phase + quadrature (Vx, Vy).

**6 (NAT).** `E = 5 mV/cm × 40 cm = 200 mV`.

**7 (NAT).** `|V| = √(6²+8²) = √(36+64) = √100 = 10 V`.

**8 (NAT).** `φ = arctan(8/6) = arctan(1.333) = 53.13°`.

</details>

---

## 🔧 Electrical Machines: Synchronous Generator — Voltage Regulation & Parallel Operation

### 📖 Concept Deep Dive

**Voltage regulation** of an alternator is the rise in terminal voltage when full load is thrown off, with excitation and speed held constant:

```
% Regulation = (E − V)/V × 100
```

where `E` = no-load (generated) EMF, `V` = full-load terminal voltage. Regulation is **positive** for lagging pf (E > V), near zero at some leading pf (zero-regulation pf), and **negative** at higher leading pf (E < V). The challenge is finding `E` from measurable test data; three methods:

**1. EMF (Synchronous Impedance) method — pessimistic.** From **OC test** (field vs OC voltage) and **SC test** (field vs SC current), compute:

```
Zs = (OC voltage) / (SC current)   [at the same field current]
Xs = √(Zs² − Ra²)
E = √[(V cosφ + I Ra)² + (V sinφ ± I Xs)²]   (+ lagging, − leading)
```

This method **over-estimates** regulation (gives a **higher** value) because it uses the unsaturated `Xs` — hence "pessimistic."

**2. MMF (Ampere-Turn) method — optimistic.** Works with MMFs (field currents) instead of voltages; treats the machine as if reactance drop is zero and adds the field MMF to overcome armature reaction. It **under-estimates** regulation ("optimistic").

**3. ZPF (Potier) method — most accurate.** Uses the **zero-power-factor (ZPF) full-load characteristic** plus the OC curve to separate **armature leakage reactance (Potier reactance Xp)** from **armature reaction**. Constructing the **Potier triangle** gives both, yielding a realistic regulation. Preferred for large machines.

**Parallel operation (synchronization).** To connect an alternator to the bus (or another alternator), **four conditions** must match:
1. **Same terminal voltage** (magnitude),
2. **Same frequency**,
3. **Same phase sequence**,
4. **Same phase** (voltages in phase at the instant of closing).

Checked by **synchroscope** or the **three-lamp (dark/bright) method**. Once paralleled:
- **Changing excitation** (field) → changes **reactive power / pf** (not real power).
- **Changing prime-mover input (torque)** → changes **real power** sharing (and load angle δ).

An over-excited machine supplies lagging VARs (acts as a source of reactive power); under-excited absorbs them.

| Method | Uses | Result |
|---|---|---|
| EMF (syn. impedance) | OC + SC tests | pessimistic (high) |
| MMF (ampere-turn) | OC + SC (MMF) | optimistic (low) |
| ZPF (Potier) | OC + ZPF curve | most accurate |

> 💎 **KEY RESULT** — `%Reg = (E−V)/V×100`; `E = √[(Vcosφ+IRa)² + (Vsinφ±IXs)²]`. **EMF method = pessimistic, MMF = optimistic, Potier/ZPF = accurate.** Synchronization: match **voltage, frequency, phase sequence, phase**.

> 🧠 **MEMORY HOOK** — "**EMF high (pessimist), MMF low (optimist), Potier just right. Sync = V, f, phase-sequence, phase. Excitation → VARs; prime mover → watts.**"

### 📐 Formula Sheet

| Quantity | Expression |
|---|---|
| % Regulation | `(E − V)/V × 100` |
| Synchronous impedance | `Zs = OC voltage/SC current` |
| Synchronous reactance | `Xs = √(Zs² − Ra²)` |
| EMF (lagging) | `E = √[(Vcosφ+IRa)² + (Vsinφ+IXs)²]` |
| EMF (leading) | `E = √[(Vcosφ+IRa)² + (Vsinφ−IXs)²]` |
| Sync conditions | V, f, phase sequence, phase |
| Control | field → Q (VARs); prime mover → P |

### 🧮 Solved Examples

**Example 1 — Regulation (EMF method, lagging).**
An alternator: `V = 1.0 pu`, `I = 1.0 pu`, `Ra = 0`, `Xs = 0.8 pu`, pf = 0.8 lagging. Find E and % regulation.

```
cosφ = 0.8, sinφ = 0.6
E = √[(Vcosφ + IRa)² + (Vsinφ + IXs)²]
  = √[(1·0.8 + 0)² + (1·0.6 + 1·0.8)²]
  = √[(0.8)² + (1.4)²] = √[0.64 + 1.96] = √2.60 = 1.612 pu
% Reg = (E − V)/V×100 = (1.612 − 1.0)/1.0 ×100 = 61.2%
```

Regulation **≈ 61.2%** (lagging pf → high positive regulation).

**Example 2 — Synchronous reactance from tests.**
OC test: field current gives OC voltage 1.0 pu; SC test: same field gives SC current 1.25 pu. Ra ≈ 0. Find Xs.

```
Zs = OC voltage/SC current = 1.0/1.25 = 0.8 pu
Xs = √(Zs² − Ra²) = √(0.8² − 0) = 0.8 pu
```

Synchronous reactance **= 0.8 pu**.

### ⚠️ Common Traps

1. **EMF method under-estimates** — EMF (synchronous impedance) method **over-estimates** (pessimistic).
2. **Leading pf always positive regulation** — at sufficiently **leading** pf, regulation can be **negative** (E < V).
3. **Excitation controls real power** — changing **excitation** controls **reactive power/pf**; the **prime mover** controls **real power**.
4. **Only three sync conditions** — there are **four** (add phase sequence to voltage, frequency, phase).
5. **Potier method ignores leakage** — Potier (ZPF) **separates** leakage reactance and armature reaction (most accurate).
6. **Sign in E for leading** — use **minus** `IXs` term for leading pf.

### 📝 Test — Electrical Machines (8 Q)

1. The voltage-regulation method that over-estimates (pessimistic) is:
   (a) MMF (b) EMF/synchronous impedance (c) ZPF/Potier (d) none
2. The most accurate regulation method is:
   (a) EMF (b) MMF (c) ZPF/Potier (d) OC only
3. Synchronous impedance is found from:
   (a) load test (b) OC and SC tests (c) blocked rotor (d) no-load
4. For paralleling alternators, which need NOT match?
   (a) voltage (b) frequency (c) rating (d) phase sequence
5. After synchronizing, increasing excitation changes mainly the:
   (a) real power (b) reactive power/pf (c) frequency (d) speed
6. **(NAT)** An alternator: V = 1.0 pu, I = 1.0 pu, Ra = 0, Xs = 0.6 pu, unity pf. Find E (pu).
7. **(NAT)** For Q6, find the % regulation.
8. **(NAT)** OC voltage = 1.1 pu, SC current = 1.0 pu at the same field, Ra = 0. Find Xs (pu).

<details><summary>🔑 Solutions</summary>

**1 → (b).** EMF/synchronous impedance — pessimistic.

**2 → (c).** ZPF/Potier.

**3 → (b).** OC + SC tests.

**4 → (c).** Rating need not match (voltage, frequency, phase sequence, phase must).

**5 → (b).** Reactive power/pf.

**6 (NAT).** Unity pf: `E = √[(Vcosφ)² + (Vsinφ + IXs)²] = √[(1)² + (0 + 0.6)²] = √(1+0.36) = √1.36 = 1.166 pu`.

**7 (NAT).** `%Reg = (1.166−1.0)/1.0×100 = 16.6%`.

**8 (NAT).** `Zs = 1.1/1.0 = 1.1 pu`; `Xs = √(1.1²−0) = 1.1 pu`.

</details>

---

## 🔧 Power Electronics: Cycloconverters & Matrix-Converter Basics

### 📖 Concept Deep Dive

A **cycloconverter** is a **direct AC-to-AC converter** that changes a fixed-frequency AC supply to a **variable, lower-frequency** AC **without an intermediate DC link** (single-stage). It is used for **low-speed, high-power drives** (cement mills, ship propulsion, mine hoists).

**Principle.** A cycloconverter is built from **two anti-parallel phase-controlled converters** (a **positive group** P and a **negative group** N) per output phase. The positive group supplies the positive half of the output current, the negative group the negative half. By **continuously varying the firing angle α** of each group in a **sinusoidal pattern**, the average output voltage traces a **low-frequency sine wave**:

```
Output frequency fo < input frequency fi   (step-down only, for a basic cycloconverter)
```

Practically `fo` is limited to about **⅓ to ½ of fi** to keep the output waveform acceptable (fewer input cycles per output cycle → more distortion as fo rises).

**Circulating-current vs blocking (non-circulating) mode:**
- **Blocking mode:** only the group carrying load current is active; the other is blocked. No circulating current, but a dead-band at current zero crossings causes distortion.
- **Circulating-current mode:** both groups conduct, with a **reactor** limiting the circulating current; smoother output but extra losses and components.

**Output voltage control:** the fundamental output `∝ r·(peak of the converter's max output)`, where `r` is the **voltage ratio (modulation)**, `0 ≤ r ≤ 1`. For a 3-phase to single-phase midpoint cycloconverter, the output is a modulated phase-controlled waveform; its fundamental is controlled by the depth of firing-angle modulation.

**Features.** Cycloconverters give **4-quadrant** operation naturally (regeneration), **low-frequency** output with good low-speed torque, but have **poor input power factor**, **rich harmonics**, and need **many thyristors** (e.g., 18 or 36 for 3-φ to 3-φ). They work best at **output frequency well below input**.

**Matrix converter (brief).** A **matrix converter** is a direct AC-AC converter using a **9-switch (3×3) bidirectional-switch array** connecting any input phase to any output phase. Unlike the cycloconverter, it can produce output frequency **higher or lower** than input, gives **sinusoidal input/output currents** and **controllable input pf**, with **no bulky DC-link capacitor**. Limitation: output voltage is restricted to **≈0.866 (√3/2) of input** and it needs complex commutation of bidirectional switches.

| Converter | Output freq | Notes |
|---|---|---|
| Cycloconverter | only lower (fo < fi) | 2 anti-parallel converters/phase; low pf |
| Matrix converter | higher or lower | 9 bidirectional switches; Vo ≤ 0.866 Vi |

> 💎 **KEY RESULT** — Cycloconverter: **direct AC-AC, step-down frequency** (`fo < fi`, practical ≤ fi/3…fi/2), two anti-parallel converters per phase, natural 4-quadrant, poor input pf. Matrix converter: 3×3 bidirectional switches, `fo` higher or lower, `Vo ≤ 0.866 Vi`.

> 🧠 **MEMORY HOOK** — "**Cycloconverter = AC→lower-f AC (no DC link), P & N groups. Matrix = 9 switches, any f, Vo ≤ 0.866 Vi.**"

### 📐 Formula Sheet

| Quantity | Expression |
|---|---|
| Cycloconverter output freq | `fo < fi` (practical: fo ≤ fi/3 … fi/2) |
| Per-phase structure | positive (P) + negative (N) group (anti-parallel) |
| Firing modulation | α varied sinusoidally → sine output |
| Voltage ratio | `r = Vo/Vo,max` (0 ≤ r ≤ 1) |
| Matrix converter Vo limit | `Vo ≤ (√3/2)Vi = 0.866 Vi` |
| Matrix switches | 3×3 = 9 bidirectional |

### 🧮 Solved Examples

**Example 1 — Output frequency limit.**
A cycloconverter is fed from a 50 Hz supply, with the practical output limited to one-third of input. Find the maximum output frequency.

```
fo,max ≈ fi/3 = 50/3 = 16.67 Hz
```

Maximum practical output frequency **≈ 16.7 Hz** (acceptable waveform quality).

**Example 2 — Matrix converter voltage limit.**
A matrix converter is fed from a 400 V (line) supply. Find the maximum achievable output line voltage.

```
Vo,max = 0.866 × Vi = 0.866 × 400 = 346.4 V
```

Maximum output line voltage **≈ 346 V** (the √3/2 limit).

### ⚠️ Common Traps

1. **Cycloconverter steps frequency up** — a basic cycloconverter only **steps down** frequency (`fo < fi`).
2. **It has a DC link** — cycloconverter is **direct AC-AC** (no DC link); that's the point.
3. **Good input power factor** — cycloconverters have **poor** input pf and rich harmonics.
4. **Matrix converter Vo = Vi** — limited to **0.866 Vi** (√3/2).
5. **Matrix converter only steps down** — it can go **higher or lower** than input frequency.
6. **One converter per phase** — a cycloconverter uses **two** (anti-parallel P and N groups) per output phase.

### 📝 Test — Power Electronics (8 Q)

1. A cycloconverter converts:
   (a) DC to AC (b) AC to DC (c) AC to AC (direct) (d) DC to DC
2. The output frequency of a basic cycloconverter is:
   (a) higher than input (b) lower than input (c) equal (d) zero
3. Each output phase of a cycloconverter uses:
   (a) one converter (b) two anti-parallel converters (c) a DC link (d) a diode bridge
4. A matrix converter uses how many bidirectional switches (3-φ to 3-φ)?
   (a) 6 (b) 9 (c) 12 (d) 18
5. The maximum output voltage of a matrix converter is about:
   (a) Vi (b) 0.866 Vi (c) 1.5 Vi (d) 0.5 Vi
6. **(NAT)** A cycloconverter from a 60 Hz supply, output limited to fi/3. Find the max output frequency (Hz).
7. **(NAT)** A matrix converter fed from 415 V line. Find the max output line voltage (V).
8. **(NAT)** A cycloconverter output is limited to half the input. For a 50 Hz supply, find the max output frequency (Hz).

<details><summary>🔑 Solutions</summary>

**1 → (c).** Direct AC-AC.

**2 → (b).** Lower than input.

**3 → (b).** Two anti-parallel converters (P and N groups).

**4 → (b).** 9 (3×3).

**5 → (b).** 0.866 Vi.

**6 (NAT).** `fo,max = 60/3 = 20 Hz`.

**7 (NAT).** `Vo,max = 0.866×415 = 359.4 V`.

**8 (NAT).** `fo,max = 50/2 = 25 Hz`.

</details>

---

## 📊 Tech Progress

```
Measurements      [████████████░░░░░░]  Round 5 · topic 12/20 (DC & AC potentiometers)
Electrical Mach.  [████████████████░░]  Round 5 · topic 16/19 (Synchronous generator: regulation)
Power Electronics [████████████████░░]  Round 5 · topic 16/19 (Cycloconverters & matrix)
```

> 🎯 **Day 96 one-liners:** (1) **Potentiometer: null balance (zero current), standardised by Weston cell (1.0186 V); AC coordinate → √(Vx²+Vy²).** (2) **Alternator: %Reg = (E−V)/V; EMF pessimistic, MMF optimistic, Potier accurate; sync = V,f,phase-seq,phase.** (3) **Cycloconverter = direct AC→lower-f AC (P+N groups); matrix = 9 switches, Vo ≤ 0.866 Vi.**

*Correctness over length — derive, don't memorise blindly; verify any "verify" figure. Onward. ⚡*
