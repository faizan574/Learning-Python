# ⚡ GATE Technical Revision — Day 77 (2026-10-06)

*Measurements covers the potential transformer (PT) and its contrast with the CT, Machines does synchronous-generator voltage regulation & synchronisation, and Power Electronics covers cycloconverters & matrix converters.*

📅 Tech Day 77 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics · 🔁 Round 4 (all three sections)

> 🧠 **MEMORY HOOK** — Today: the **PT** (shunt, 110 V secondary, secondary may be open), **synchronous-generator regulation** (EMF/MMF/**Potier-ZPF**; synchronise on V-f-phase-sequence), and **cycloconverters** (direct AC-AC, `fo ≤ fi/3`) & **matrix converters** (ratio ≤ 0.866).

---

## 🔧 Measuring Instruments: Instrument Transformers — Potential Transformer (PT)

### 📖 Concept Deep Dive

A **Potential (Voltage) Transformer (PT)** steps a **high line voltage** down to a **standard low secondary voltage** (commonly **110 V**) for voltmeters/relays. The **primary** is across the **line (shunt)**; the **secondary** feeds a **high-impedance** load (small burden).

**Operation & errors.** A PT is essentially a small **step-down transformer operating near no-load** (high-impedance secondary). The exciting current and the small load current cause:
```
Nominal ratio  Kn = Vp(rated)/Vs(rated)
Actual ratio R (includes drops);  Ratio (voltage) error % = (Kn − R)/R × 100
Phase-angle error = angle between Vp and the reversed Vs
```
Lower burden and good core design reduce both errors.

**PT vs CT — the key contrast:**

| Feature | PT (voltage) | CT (current) |
|---|---|---|
| Connection | **shunt** (across line) | **series** (in line) |
| Secondary rating | **~110 V** | **5 A / 1 A** |
| Secondary load | high-impedance (voltmeter) | low-impedance (ammeter) |
| Operates like | near **no-load** transformer | near **short-circuit** transformer |
| Open secondary | **safe** (loses reading) | **dangerous** (saturation, high V) |
| Primary current | depends on load | = line current (independent of burden) |

> 💎 **KEY RESULT** — PT: **shunt**, secondary **~110 V**, high-impedance burden, behaves like a **no-load** transformer; **secondary may be open safely**. Errors (ratio + phase-angle) from exciting current, like a CT, but the **open-secondary hazard is a CT-only issue**.

> 🧠 **MEMORY HOOK** — **"PT = Parallel/Potential (safe open); CT = series/Current (never open)."** PT ≈ no-load transformer; CT ≈ short-circuit transformer.

> ⚠️ **TRAP ALERT** — A **PT secondary can be left open** (just loses the reading) — unlike a CT. PT is **across the line** (shunt); CT is **in series**. Both have **ratio & phase-angle** errors from the exciting current.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Nominal ratio | `Kn = Vp/Vs` |
| Ratio (voltage) error | `(Kn − R)/R × 100 %` |
| Phase-angle error | angle between Vp and reversed Vs |
| Secondary standard | ~110 V |
| Burden | VA on secondary |

### 🧮 Solved Examples

**Example 1 — PT ratio.**
An `11 kV / 110 V` PT. Find its nominal ratio.

```
Kn = Vp/Vs = 11000/110 = 100
```

**Example 2 — Ratio error.**
A PT has `Kn = 100`; the actual transformation ratio is `R = 100.5`. Find the ratio error.

```
Ratio error % = (Kn − R)/R × 100 = (100 − 100.5)/100.5 × 100
             = (−0.5/100.5)×100 = −0.498 % ≈ −0.5 %
```

### ⚠️ Common Traps

1. **PT secondary can be open** (safe) — only the **CT** secondary is dangerous open.
2. **PT = shunt (across line)**; CT = series.
3. **Secondary ~110 V** (PT) vs 5 A / 1 A (CT).
4. **Errors from exciting current** — ratio + phase-angle (both PT & CT).
5. **PT ≈ no-load** transformer; CT ≈ short-circuit transformer.
6. **Lower burden ⇒ smaller errors.**

### 📝 Test (5 MCQ + 3 NAT)

**Q1 (MCQ).** A PT is connected: (a) in series (b) in shunt/parallel (c) in delta (d) floating → 

**Q2 (MCQ).** The standard PT secondary voltage is about: (a) 11 V (b) 110 V (c) 230 V (d) 440 V

**Q3 (MCQ).** A PT secondary left open is: (a) dangerous (b) safe (loses reading) (c) explosive (d) saturating

**Q4 (MCQ).** A PT behaves like a transformer operating near: (a) short circuit (b) no load (c) full load (d) overload

**Q5 (MCQ).** PT errors arise mainly from the: (a) burden voltage (b) exciting current (c) primary turns (d) frequency

**Q6 (NAT).** A 33 kV/110 V PT. Find the nominal ratio.

**Q7 (NAT).** Kn = 120, actual ratio R = 120.6. Find the ratio error (%).

**Q8 (NAT).** A PT secondary of 110 V feeds a 25 VA burden. Find the secondary current (A).

<details><summary>🔑 Solutions</summary>

**Q1 — (b) in shunt/parallel.**

**Q2 — (b) 110 V.**

**Q3 — (b) safe (loses reading).**

**Q4 — (b) no load.**

**Q5 — (b) exciting current.**

**Q6 — 300.** `33000/110 = 300`.

**Q7 — −0.5%.** `(120 − 120.6)/120.6×100 = −0.497 ≈ −0.5%`.

**Q8 — 0.227 A.** `I = VA/V = 25/110 = 0.227 A`.
</details>

---

## 🔧 Electrical Machines: Synchronous Generator — Voltage Regulation, Parallel Operation & Synchronisation

### 📖 Concept Deep Dive

**Voltage regulation** of an alternator = rise in terminal voltage from full load to no load, as a fraction of rated voltage:
```
%Reg = (E − V)/V × 100
E = √( (V cosφ + I·Ra)² + (V sinφ ± I·Xs)² )
   (+ for lagging pf, − for leading pf)
```
`E` = no-load EMF, `V` = rated terminal voltage, `Xs` = synchronous reactance.

**Methods to find regulation:**
- **EMF (synchronous-impedance) method** — uses OC & SC tests to get `Zs`; treats armature reaction as a reactance ⇒ gives a **pessimistic (too high)** regulation.
- **MMF (ampere-turn) method** — works in terms of field MMF ⇒ gives an **optimistic (too low)** regulation.
- **ZPF / Potier method** — separates **leakage reactance** and **armature reaction** using the **zero-power-factor (ZPF) characteristic** and the **Potier triangle** ⇒ the most **accurate** for salient/large machines.

**Synchronisation (paralleling an alternator to the bus/grid).** Conditions:
1. **Same terminal voltage** (magnitude),
2. **Same frequency**,
3. **Same phase sequence**,
4. **Same phase (in-phase at the instant of closing)**.
Methods: **dark-lamp**, **two-bright-one-dark**, and the **synchroscope** (the practical instrument).

**Operation on infinite bus.** Once synchronised, **excitation controls reactive power (pf)** and the **prime-mover input controls real power (load angle δ)**; `P ∝ (EV/Xs)·sinδ`.

> 💎 **KEY RESULT** — `%Reg = (E−V)/V`, `E = √((Vcosφ+IRa)² + (Vsinφ ± IXs)²)` (+lag/−lead). **EMF method pessimistic**, **MMF optimistic**, **Potier/ZPF accurate**. Synchronise on **V, f, phase sequence, phase**.

> 🧠 **MEMORY HOOK** — **"EMF high (pessimistic), MMF low (optimistic), Potier just right."** Sync needs the **four matches**; `P ∝ sinδ`, excitation sets pf.

> ⚠️ **TRAP ALERT** — Lagging pf uses **+ IXs** (regulation positive); leading pf uses **− IXs** (can be negative). **EMF method over-estimates**, **MMF under-estimates** regulation. Synchronise only when **all four** conditions match.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Regulation | `%Reg = (E − V)/V × 100` |
| EMF (lag/lead) | `E = √((Vcosφ+IRa)² + (Vsinφ ± IXs)²)` |
| EMF method | OC & SC tests ⇒ Zs (pessimistic) |
| Potier/ZPF | separates leakage X & armature reaction (accurate) |
| Power | `P = (E·V/Xs)·sinδ` |
| Sync conditions | V, f, phase sequence, phase |

### 🧮 Solved Examples

**Example 1 — Regulation (lagging pf).**
An alternator: `V = 230 V`, `I = 10 A`, `Ra = 1 Ω`, `Xs = 8 Ω`, pf `= 0.8 lagging`. Find E and the % regulation.

```
cosφ = 0.8, sinφ = 0.6
E = √((Vcosφ + IRa)² + (Vsinφ + IXs)²)
  = √((230×0.8 + 10×1)² + (230×0.6 + 10×8)²)
  = √((184 + 10)² + (138 + 80)²) = √(194² + 218²)
  = √(37636 + 47524) = √85160 = 291.8 V
%Reg = (291.8 − 230)/230 ×100 = 26.9 %
```

**Example 2 — Power vs load angle.**
An alternator on an infinite bus: `E = 1.2 pu`, `V = 1.0 pu`, `Xs = 1.0 pu`, `δ = 30°`. Find the per-unit power.

```
P = (E·V/Xs)·sinδ = (1.2×1.0/1.0)·sin30° = 1.2 × 0.5 = 0.6 pu
```

### ⚠️ Common Traps

1. **+ IXs for lagging, − IXs for leading** in the EMF formula.
2. **EMF method pessimistic, MMF optimistic, Potier accurate.**
3. **Four synchronising conditions** — all must match.
4. **Excitation sets pf (Q); prime mover sets P (δ).**
5. **P ∝ sinδ** — pull-out at δ = 90°.
6. **Regulation can be negative** at leading pf.

### 📝 Test (5 MCQ + 3 NAT)

**Q1 (MCQ).** Which method gives a pessimistic regulation?
(a) EMF (synchronous impedance) (b) MMF (c) Potier (d) ZPF

**Q2 (MCQ).** The most accurate regulation method is:
(a) EMF (b) MMF (c) Potier/ZPF (d) short-circuit

**Q3 (MCQ).** For leading pf, the EMF uses:
(a) +IXs (b) −IXs (c) no Xs (d) +IRa only

**Q4 (MCQ).** Which is NOT a synchronising condition?
(a) same voltage (b) same frequency (c) same phase sequence (d) same power rating

**Q5 (MCQ).** On an infinite bus, real power is controlled by:
(a) excitation (b) prime-mover input (load angle) (c) frequency only (d) armature resistance

**Q6 (NAT).** V = 200 V, E = 260 V. Find the % regulation.

**Q7 (NAT).** E = 1.5 pu, V = 1.0 pu, Xs = 1.0 pu, δ = 30°. Find P (pu).

**Q8 (NAT).** V = 100 V, I = 5 A, Ra = 0, Xs = 10 Ω, upf. Find E (V).

<details><summary>🔑 Solutions</summary>

**Q1 — (a) EMF (synchronous impedance).**

**Q2 — (c) Potier/ZPF.**

**Q3 — (b) −IXs.**

**Q4 — (d) same power rating.**

**Q5 — (b) prime-mover input (load angle).**

**Q6 — 30%.** `(260−200)/200×100 = 30%`.

**Q7 — 0.75 pu.** `(1.5×1/1)·sin30° = 1.5×0.5 = 0.75 pu`.

**Q8 — 111.8 V.**
```
upf: cosφ=1, sinφ=0; E = √((V+0)² + (0 + IXs)²) = √(100² + (5×10)²)
  = √(10000 + 2500) = √12500 = 111.8 V
```
</details>

---

## 🔧 Power Electronics: Cycloconverters & Matrix Converters

### 📖 Concept Deep Dive

**Cycloconverter.** A **direct AC-AC** converter that changes frequency **without a DC link** — it fabricates a **lower-frequency** output directly from the mains using **phase-controlled converter groups**.
- Uses a **dual converter** per phase (a **positive group** for the positive output half, a **negative group** for the negative half).
- **Types:** step-down (most common) vs step-up; **blocked-group** (no circulating current) vs **circulating-current** operation.
- **Output frequency limit:** for an acceptable waveform, `fo` is typically **≤ `fi`/3** (about one-third of input frequency); higher ratios distort badly.
- **Applications:** **low-speed, high-power** AC drives — **ball mills, cement kilns, rolling-mill and ship propulsion drives**.

```
Direct AC → AC (no DC link)
Practical output frequency:  fo ≤ fi/3
Two groups: positive (P) + negative (N) converter
```

**Matrix converter.** A modern **direct AC-AC** converter using a **matrix of bidirectional switches** (for 3-φ to 3-φ, a **3×3 = 9 bidirectional switch** array) — **no DC link, no bulky energy storage**:
- Gives **variable voltage and variable frequency** with **sinusoidal input and output currents** and **controllable input power factor**.
- **Voltage transfer ratio is limited to `0.866` (= √3/2)** — the output line voltage cannot exceed ~86.6% of the input.
- Trade-off: needs many switches and complex commutation/control, and that 0.866 voltage ceiling.

| Converter | DC link? | Freq range | Note |
|---|---|---|---|
| Cycloconverter | No | `fo ≤ fi/3` | low-speed high-power drives |
| Matrix converter | No | variable (up & down) | ratio ≤ 0.866, 9 switches (3-φ) |

> 💎 **KEY RESULT** — **Cycloconverter**: direct AC-AC, **no DC link**, `fo ≤ fi/3`, dual-converter (P & N groups), for **low-speed high-power** drives. **Matrix converter**: 9 bidirectional switches (3-φ), no DC link, **voltage ratio ≤ 0.866**, sinusoidal I/O.

> 🧠 **MEMORY HOOK** — **"Cycloconverter: direct, step-down, fo ≤ fi/3."** **"Matrix: 9 switches, no DC link, ceiling 0.866."** Both skip the DC link.

> ⚠️ **TRAP ALERT** — A cycloconverter is a **direct** converter (no DC link) and is practically **step-down** (`fo ≤ fi/3`). The matrix converter's **voltage transfer ratio is capped at 0.866** — it cannot boost above that. Don't confuse either with a DC-link VSI inverter.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Cycloconverter | direct AC-AC, no DC link |
| Output frequency limit | `fo ≤ fi/3` |
| Cyclo groups | positive (P) + negative (N) |
| Matrix converter switches (3-φ) | `3×3 = 9` bidirectional |
| Matrix voltage transfer ratio | `≤ 0.866 (√3/2)` |

### 🧮 Solved Examples

**Example 1 — Cycloconverter output frequency.**
A cycloconverter is fed from a `50 Hz` supply. Find the maximum practical output frequency for a good waveform.

```
fo(max) ≈ fi/3 = 50/3 ≈ 16.7 Hz
(Low-frequency output — ideal for low-speed drives.)
```

**Example 2 — Matrix converter output voltage.**
A 3-φ matrix converter has an input line voltage of `400 V`. Find the maximum achievable output line voltage.

```
Vo(max) = 0.866 × Vin = 0.866 × 400 = 346.4 V
(Output line voltage is capped at ~86.6% of input.)
```

### ⚠️ Common Traps

1. **Cycloconverter = direct AC-AC (no DC link)**, practically step-down.
2. **fo ≤ fi/3** — output frequency is limited.
3. **Matrix converter ratio ≤ 0.866** — cannot exceed input voltage.
4. **9 bidirectional switches** for a 3-φ→3-φ matrix converter.
5. **Dual-converter (P & N groups)** per phase in a cycloconverter.
6. **Both avoid the DC link** (and its bulky capacitor/inductor).

### 📝 Test (5 MCQ + 3 NAT)

**Q1 (MCQ).** A cycloconverter converts:
(a) DC to AC (b) AC to AC directly (c) AC to DC (d) DC to DC

**Q2 (MCQ).** A cycloconverter has:
(a) a DC link (b) no DC link (c) a battery (d) a transformer only

**Q3 (MCQ).** The practical output-frequency limit of a cycloconverter is about:
(a) fi (b) fi/3 (c) 3·fi (d) 2·fi

**Q4 (MCQ).** A 3-φ matrix converter uses how many bidirectional switches?
(a) 6 (b) 9 (c) 12 (d) 18

**Q5 (MCQ).** The voltage transfer ratio of a matrix converter is limited to:
(a) 0.5 (b) 0.707 (c) 0.866 (d) 1.0

**Q6 (NAT).** A cycloconverter from a 60 Hz supply. Find the max practical output frequency (Hz).

**Q7 (NAT).** Matrix converter, input line voltage 415 V. Find the max output line voltage (V).

**Q8 (NAT).** A cycloconverter output is 15 Hz from a 50 Hz supply. Find the ratio fo/fi.

<details><summary>🔑 Solutions</summary>

**Q1 — (b) AC to AC directly.**

**Q2 — (b) no DC link.**

**Q3 — (b) fi/3.**

**Q4 — (b) 9.**

**Q5 — (c) 0.866.**

**Q6 — 20 Hz.** `60/3 = 20 Hz`.

**Q7 — 359.4 V.** `0.866 × 415 = 359.4 V`.

**Q8 — 0.3.** `15/50 = 0.3` (≤ 1/3 ✓).
</details>

---

### 📊 GATE Tech Coverage Progress

```
Measuring Instruments  ██████████████░░░░░░  14/21  🔁 Round 4
Electrical Machines    ████████████████░░░░  16/19  🔁 Round 4
Power Electronics      ████████████████░░░░  16/18  🔁 Round 4
```

*Next: Measurements → DC bridges (Wheatstone, Kelvin); Machines → Synchronous motor (V-curves, hunting); Power Electronics → Fourier/waveform analysis of converter outputs.*

> ✅ **Self-check before you close:** Can you (1) contrast PT vs CT (shunt/series, open-secondary), (2) rank EMF/MMF/Potier regulation methods and list the sync conditions, and (3) give the cycloconverter `fo ≤ fi/3` and matrix-converter 0.866 limits? Re-read any KEY RESULT that felt shaky.
