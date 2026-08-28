# ⚡ GATE Technical Revision — Day 39 (2026-08-28)

*Three subjects, one sitting — the oscilloscope, alternator voltage regulation, and AC-AC converters.*

📅 Tech Day 39 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics

> 🧠 **MEMORY HOOK** — Today is **"deflect the beam, regulate the alternator, and convert AC-to-AC"**: the **CRO** (deflection sensitivity & Lissajous), synchronous-generator **voltage regulation** (EMF/MMF/ZPF), and the **cycloconverter/matrix** converter.

---

## 🔧 Measuring Instruments: The Cathode Ray Oscilloscope (CRO)

### 📖 Concept Deep Dive

The **CRO** displays voltage waveforms versus time. Its heart is the **Cathode Ray Tube (CRT)**:
- **Electron gun** (cathode, control grid, focusing & accelerating anodes) produces and focuses the beam;
- **Deflection plates** — **vertical (Y)** for the signal and **horizontal (X)** for the time base — deflect the beam **electrostatically**;
- a **phosphor screen** glows where the beam lands.

**Electrostatic deflection** on the screen:

```
D = (L·l·Vd) / (2·d·Va)
```
where `L` = plate-to-screen distance, `l` = plate length, `d` = plate separation, `Va` = accelerating voltage, `Vd` = deflecting voltage.

**Deflection sensitivity** (screen deflection per volt) and **deflection factor** (its reciprocal):

```
S = D/Vd = (L·l)/(2·d·Va)     [m/V]
Deflection factor = 1/S        [V/m]
```

**Time base:** a **sawtooth (ramp)** on the X-plates sweeps the beam left-to-right, creating the time axis; **synchronization/triggering** locks the display so the waveform stands still.

**Lissajous figures (X-Y mode):** applying two sine waves to X and Y gives closed patterns from which the **frequency ratio** and **phase** are found:

```
f_y / f_x = (number of horizontal tangencies) / (number of vertical tangencies)
```

**Probes:** a **10:1 probe** attenuates ×10 but raises input impedance (less circuit loading). **DSO (Digital Storage Oscilloscope):** samples the signal with an ADC, stores it in memory, and displays it — enabling capture of transients.

> 💎 **KEY RESULT** — CRO deflection `D = (L·l·Vd)/(2·d·Va)`, so **sensitivity `S = (L·l)/(2·d·Va)`** — **higher accelerating voltage `Va` reduces sensitivity** (a faster, harder-to-deflect beam). Lissajous frequency ratio = ratio of **tangency points** on the two axes.

> ⚠️ **TRAP ALERT** — Deflection sensitivity is **inversely proportional to Va** (and to `d`). A **10:1 probe** attenuates the signal ×10 (accounted for by the scope). Use **X-Y (Lissajous)** mode for frequency/phase comparison, not normal sweep.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Deflection | `D = (L·l·Vd)/(2·d·Va)` |
| Sensitivity | `S = (L·l)/(2·d·Va)` [m/V] |
| Deflection factor | `= 1/S` [V/m] |
| Lissajous ratio | `f_y/f_x = (horiz. tangencies)/(vert. tangencies)` |

### 🧮 Solved Examples

**Example 1 — Deflection sensitivity.** A CRT: plate length `l = 2 cm`, plate-to-screen `L = 20 cm`, plate separation `d = 0.5 cm`, accelerating voltage `Va = 2000 V`. Find the deflection sensitivity and the deflection for `Vd = 10 V`.

```
S = (L·l)/(2·d·Va) = (0.20 × 0.02)/(2 × 0.005 × 2000)
  = 0.004 / 20 = 2×10⁻⁴ m/V = 0.2 mm/V
D = S·Vd = 0.2 × 10 = 2 mm
```

**Example 2 — Lissajous frequencies.** A Lissajous pattern shows `2` horizontal tangencies and `1` vertical tangency, with the horizontal (X) input at `100 Hz`. Find the vertical (Y) input frequency.

```
f_y/f_x = (horizontal tangencies)/(vertical tangencies) = 2/1 = 2
f_y = 2 × f_x = 2 × 100 = 200 Hz
```

### ⚠️ Common Traps

1. Forgetting sensitivity **falls** as `Va` rises.
2. Ignoring the **10× attenuation** of a 10:1 probe.
3. Mixing up sensitivity (m/V) and deflection factor (V/m).
4. Using normal sweep instead of **X-Y** for Lissajous.
5. Reversing the tangency ratio in Lissajous frequency.
6. Confusing the sawtooth **time base** with the signal input.

### 📝 Test — Measuring Instruments (8 Q)

**Q1 (MCQ).** In a CRT, beam deflection is by:
(a) magnetic field (b) electrostatic field (c) gravity (d) heat

**Q2 (MCQ).** CRO deflection sensitivity is proportional to:
(a) Va (b) 1/Va (c) Va² (d) d

**Q3 (MCQ).** The horizontal plates of a CRO carry the:
(a) signal (b) time-base sawtooth (c) DC bias (d) trigger only

**Q4 (MCQ).** Lissajous figures are used to measure:
(a) power (b) frequency/phase (c) resistance (d) current

**Q5 (MCQ).** A 10:1 probe primarily:
(a) amplifies the signal (b) reduces circuit loading (c) increases frequency (d) filters noise

**Q6 (NAT).** A CRT: L = 25 cm, l = 2.5 cm, d = 0.5 cm, Va = 2500 V. Find the deflection sensitivity (mm/V).

**Q7 (NAT).** For Q6, find the deflection (mm) for Vd = 20 V.

**Q8 (NAT).** A Lissajous figure has 3 horizontal and 2 vertical tangencies; fx = 400 Hz. Find fy (Hz).

<details><summary>🔑 Solutions</summary>

**Q1 — (b) electrostatic field.**

**Q2 — (b) 1/Va.**

**Q3 — (b) time-base sawtooth.**

**Q4 — (b) frequency/phase.**

**Q5 — (b) reduces circuit loading.**

**Q6.** `S = (0.25×0.025)/(2×0.005×2500) = 0.00625/25 = 2.5×10⁻⁴ m/V = 0.25 mm/V`.

**Q7.** `D = 0.25 × 20 = 5 mm`.

**Q8.** `fy/fx = 3/2 ⇒ fy = 1.5 × 400 = 600 Hz`.

</details>

---

## 🔧 Electrical Machines: Synchronous Generator — Voltage Regulation & Synchronisation

### 📖 Concept Deep Dive

**Voltage regulation** of an alternator is the rise in terminal voltage from full load to no load (field & speed constant):

```
%VR = (E − V)/V × 100        (E = no-load EMF, V = full-load terminal voltage)
```

Because loading a large alternator directly is impractical, `E` is found **indirectly** from Open-Circuit (OCC) and Short-Circuit (SCC) tests:

| Method | Nature |
|---|---|
| **EMF (synchronous impedance)** | **Pessimistic** — over-estimates regulation |
| **MMF (ampere-turn)** | **Optimistic** — under-estimates regulation |
| **ZPF (Potier)** | **Most accurate** — separates leakage reactance & armature reaction |

**EMF method:** `Zs = Voc/Isc` (at the same field current), `Xs = √(Zs² − Ra²)`, and:

```
E = √( (V·cosφ + Ia·Ra)² + (V·sinφ ± Ia·Xs)² )
   ( + for LAGGING pf ,  − for LEADING pf )
```

**Synchronisation** (paralleling an alternator to the grid) needs **four conditions**:
1. **Same voltage** (magnitude)
2. **Same frequency**
3. **Same phase sequence**
4. **Same phase** (in-phase at the instant of closing)

Checked by **dark-lamp / bright-lamp** methods or a **synchroscope**.

> 💎 **KEY RESULT** — `E = √((V cosφ + IaRa)² + (V sinφ ± IaXs)²)` (+ lagging, − leading). The **EMF method is pessimistic**, the **MMF method optimistic**, and the **ZPF/Potier method most accurate**. Regulation is **highest at lagging pf** and can be **negative at leading pf**.

> 🧠 **MEMORY HOOK** — "**EMF pessimistic, MMF optimistic, Potier accurate**"; synchronise on **voltage, frequency, phase sequence, phase**. Lagging pf → high (worst) regulation.

> ⚠️ **TRAP ALERT** — Use **+ for lagging, − for leading** in the E formula; a leading pf can give **negative regulation** (terminal voltage rises with load). The **EMF (synchronous-impedance) method over-estimates** regulation because it lumps armature reaction into `Xs`.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Voltage regulation | `%VR = (E − V)/V × 100` |
| Synchronous impedance | `Zs = Voc/Isc` (same If) |
| Synchronous reactance | `Xs = √(Zs² − Ra²)` |
| EMF | `E = √((VcosΦ + IaRa)² + (VsinΦ ± IaXs)²)` |
| Synchronising conditions | voltage, frequency, phase sequence, phase |

### 🧮 Solved Examples

**Example 1 — Regulation (EMF method).** A single-phase alternator (per phase): `V = 230 V`, `Ia = 10 A`, `Ra = 1 Ω`, `Xs = 10 Ω`, load pf `0.8 lagging`. Find the EMF and % regulation.

```
cosφ = 0.8, sinφ = 0.6
E = √((V·cosφ + Ia·Ra)² + (V·sinφ + Ia·Xs)²)
  = √((230×0.8 + 10×1)² + (230×0.6 + 10×10)²)
  = √((184 + 10)² + (138 + 100)²) = √(194² + 238²)
  = √(37636 + 56644) = √94280 = 307.1 V
%VR = (307.1 − 230)/230 × 100 = 33.5%
```

**Example 2 — Synchronous impedance.** OC test gives `Voc = 400 V` and SC test gives `Isc = 20 A` at the same field current; `Ra = 2 Ω`. Find `Zs` and `Xs`.

```
Zs = Voc/Isc = 400/20 = 20 Ω
Xs = √(Zs² − Ra²) = √(20² − 2²) = √(400 − 4) = √396 = 19.9 Ω
```

### ⚠️ Common Traps

1. Using **− for lagging** — it's **+ for lagging, − for leading**.
2. Thinking regulation is always positive — **leading pf can be negative**.
3. Treating the EMF method as accurate — it's **pessimistic**.
4. Forgetting the **four** synchronising conditions.
5. Using `Zs` where `Xs` is needed (subtract `Ra²`).
6. Mixing line and phase quantities.

### 📝 Test — Electrical Machines (8 Q)

**Q1 (MCQ).** The synchronous-impedance (EMF) method of finding regulation is:
(a) accurate (b) pessimistic (c) optimistic (d) exact

**Q2 (MCQ).** The most accurate method of determining regulation is:
(a) EMF (b) MMF (c) ZPF/Potier (d) direct loading only

**Q3 (MCQ).** Voltage regulation is highest (worst) at:
(a) unity pf (b) lagging pf (c) leading pf (d) zero current

**Q4 (MCQ).** Which is NOT a condition for synchronisation?
(a) same voltage (b) same frequency (c) same power rating (d) same phase sequence

**Q5 (MCQ).** In the EMF equation, the sign for a leading pf load is:
(a) + (b) − (c) × (d) ÷

**Q6 (NAT).** OC voltage 500 V, SC current 25 A (same field), Ra negligible. Find Zs (Ω).

**Q7 (NAT).** An alternator: V = 200 V, Ia = 5 A, Ra = 0 Ω, Xs = 8 Ω, unity pf. Find the EMF (V).

**Q8 (NAT).** For Q7, find the % voltage regulation.

<details><summary>🔑 Solutions</summary>

**Q1 — (b) pessimistic.**

**Q2 — (c) ZPF/Potier.**

**Q3 — (b) lagging pf.**

**Q4 — (c) same power rating.**

**Q5 — (b) −.**

**Q6.** `Zs = 500/25 = 20 Ω`.

**Q7.** Unity pf: `E = √((V + 0)² + (0 + Ia·Xs)²) = √(200² + (5×8)²) = √(40000 + 1600) = √41600 = 203.96 V`.

**Q8.** `%VR = (203.96 − 200)/200 × 100 = 1.98%`.

</details>

---

## 🔧 Power Electronics: Cycloconverters & Matrix Converters

### 📖 Concept Deep Dive

Both are **direct AC-to-AC** converters (no intermediate DC link).

**Cycloconverter:** converts a fixed input frequency to a **variable, lower** output frequency directly, using thyristors with **line (natural) commutation**. It uses **two converter groups (positive & negative)** in antiparallel (a dual converter):

```
Output frequency f_out < f_in  (for a good waveform, typically f_out ≤ f_in/3)
```

Applications: **large low-speed AC drives** (cement mills, ball mills, ship propulsion), induction heating.

**Matrix converter:** connects each output phase to each input phase through **bidirectional switches** arranged in a **matrix** — a **3-phase to 3-phase** converter needs **9 bidirectional switches** (18 IGBTs). It has **no DC-link capacitor**, allows **bidirectional power flow**, and can produce **variable voltage and frequency (up or down)** with near-sinusoidal input currents.

```
Matrix (3φ→3φ): 9 bidirectional switches
Max voltage transfer ratio ≈ 0.866 (√3/2)
```

> 💎 **KEY RESULT** — **Cycloconverter**: direct AC-AC, **step-down frequency** (`f_out ≤ f_in/3` for clean output), line-commutated, for large low-speed drives. **Matrix converter**: **9 bidirectional switches** (3φ-3φ), no DC link, bidirectional, **max voltage ratio ≈ 0.866**.

> 🧠 **MEMORY HOOK** — "**Cyclo = step-down frequency (≤ fin/3), line-commutated**; **Matrix = 9 switches, no DC link, 0.866 ratio**". Both are **direct AC-AC** (no DC stage).

> ⚠️ **TRAP ALERT** — A **cycloconverter** is limited to **lower output frequencies** (harmonics worsen as `f_out` rises toward `f_in`). The **matrix converter's** output voltage is inherently capped at **≈ 0.866** of the input — it cannot boost voltage above that ratio.

### 📐 Formula Sheet

| Quantity | Formula / fact |
|---|---|
| Cycloconverter output | `f_out < f_in` (good waveform `≤ f_in/3`) |
| Cycloconverter groups | two (positive & negative), line-commutated |
| Matrix switches (3φ-3φ) | **9** bidirectional (18 devices) |
| Matrix max voltage ratio | `≈ 0.866 (√3/2)` |
| Both | **direct AC-AC** (no DC link) |

### 🧮 Solved Examples

**Example 1 — Cycloconverter output frequency.** A cycloconverter is fed from a `50 Hz` supply and gives an acceptable waveform up to `1/3` of the input frequency. Find the maximum recommended output frequency.

```
f_out(max) ≈ f_in/3 = 50/3 = 16.67 Hz
```

**Example 2 — Matrix converter switches.** How many bidirectional switches (and IGBTs) does a 3-phase to 3-phase matrix converter need?

```
Switches = 3 (inputs) × 3 (outputs) = 9 bidirectional switches
Each bidirectional switch = 2 IGBTs ⇒ 18 IGBTs
```

### ⚠️ Common Traps

1. Thinking a cycloconverter **steps up** frequency — it primarily **steps down**.
2. Ignoring the `f_out ≤ f_in/3` guideline for good output.
3. Forgetting a matrix converter has **no DC-link** capacitor.
4. Taking matrix max voltage ratio as 1 — it's **≈ 0.866**.
5. Miscounting matrix switches (3φ-3φ = **9**).
6. Assuming cycloconverters use forced commutation — they use **line** commutation.

### 📝 Test — Power Electronics (8 Q)

**Q1 (MCQ).** A cycloconverter converts:
(a) DC to AC (b) AC to DC (c) fixed-freq AC to variable-freq AC (d) AC to AC same freq

**Q2 (MCQ).** A cycloconverter primarily produces an output frequency that is:
(a) higher than input (b) lower than input (c) equal to input (d) DC

**Q3 (MCQ).** A cycloconverter uses which commutation?
(a) forced (b) line (natural) (c) load (d) none

**Q4 (MCQ).** A 3φ-3φ matrix converter uses how many bidirectional switches?
(a) 6 (b) 9 (c) 12 (d) 18

**Q5 (MCQ).** The maximum voltage transfer ratio of a matrix converter is about:
(a) 0.5 (b) 0.707 (c) 0.866 (d) 1.0

**Q6 (NAT).** A cycloconverter from 60 Hz supply gives good output up to 1/3 of input. Find the max output frequency (Hz).

**Q7 (NAT).** A 3φ-3φ matrix converter — find the total number of IGBTs (2 per bidirectional switch).

**Q8 (NAT).** A cycloconverter output is limited to fin/3. For a 300 V, 50 Hz input, find the maximum output frequency (Hz).

<details><summary>🔑 Solutions</summary>

**Q1 — (c) fixed-freq AC to variable-freq AC.**

**Q2 — (b) lower than input.**

**Q3 — (b) line (natural).**

**Q4 — (b) 9.**

**Q5 — (c) 0.866.**

**Q6.** `f_out = 60/3 = 20 Hz`.

**Q7.** `9 switches × 2 = 18 IGBTs`.

**Q8.** `f_out = 50/3 = 16.67 Hz`.

</details>

---

> 🧠 **DAY-39 WRAP** — CRO: **D = (L·l·Vd)/(2·d·Va)**, sensitivity ∝ **1/Va**, Lissajous = tangency ratio, 10:1 probe reduces loading. Alternator: **%VR=(E−V)/V**, EMF **pessimistic**/MMF optimistic/**Potier accurate**, synchronise on **V, f, phase-seq, phase**. AC-AC: **cycloconverter (step-down f, ≤ fin/3, line-commutated)**, **matrix (9 switches, no DC link, 0.866 ratio)**. Revise the boxed KEY RESULTS. ⚡
