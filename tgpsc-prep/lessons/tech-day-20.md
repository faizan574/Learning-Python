# ⚡ GATE Technical Revision — Day 20 (2026-08-09)

*The Q-meter that measures coil quality by resonance, the synchronous generator's voltage regulation and parallel operation, and the cycloconverter that changes frequency directly.*

`📅 Tech Day 20  ·  ⏱ ~45 min  ·  🎯 Measurements + Machines + Power Electronics`

Attempt each section's test **before** opening its solutions — recall beats re-reading.

---

## 🔧 Measuring Instruments: Q-Meter, Frequency/Phase & Earth-Resistance Measurement

Day 19 covered digital voltmeters. Today: the **Q-meter** (coil quality via resonance), plus **frequency/phase** and **earth-resistance** measurement.

### 📖 Concept Deep Dive

**Q-meter (principle: series resonance).** Measures the **quality factor Q** of a coil/inductor. A known-frequency oscillator injects a small voltage `E` into a series **L-C-R** circuit; the tuning capacitor `C` is varied to **resonance** (max current). At resonance the voltage across `C` is **Q times** the injected voltage:

```
At resonance:  VC = Q·E   ⇒   Q = VC/E
Q = ωL/R = 1/(ωCR) = (1/R)·√(L/C)
Resonant frequency  f0 = 1/(2π√(LC))
```

The voltmeter across `C` is calibrated **directly in Q** (since `E` is fixed). Used to measure **Q, inductance, capacitance, distributed capacitance, and dielectric loss**.

```
Bandwidth relation:  Q = f0/BW = f0/(f2 − f1)
```

**Frequency measurement.**
- **Digital frequency counter:** counts input cycles over a precise **gate time** → `f = count/gate time`. High accuracy.
- **Lissajous (CRO):** frequency ratio from tangency counts (Day 18).
- **Wien bridge:** `f = 1/(2πRC)` (Day 17).

**Phase measurement.**
- **CRO (dual-trace or X-Y):** phase from the Lissajous ellipse (`sin φ = intercept/max`) or time-shift between two traces.
- **Phase meter:** digital, measures the time delay between zero-crossings.

**Earth (ground) resistance measurement.**
- **Fall-of-potential method (3-terminal):** inject current between the earth electrode (E) and a **current spike (C)**; measure voltage between E and a **potential spike (P)** placed at ~**62%** of the E-C distance (the flat region of the potential curve):

```
Earth resistance  R = V_EP/I    (P at ~62% of E–C spacing)
```
- **Earth tester / Megger earth tester:** a hand-cranked instrument giving earth resistance directly.

> 💎 **KEY RESULT** — **Q-meter: at series resonance VC = Q·E, so Q = VC/E = (1/R)√(L/C)**; f0 = 1/(2π√(LC)). **Earth resistance** by the **fall-of-potential method** with the potential spike at **~62%** of the electrode-to-current-spike distance.

> 🧠 **MEMORY HOOK** — "**Q-meter: resonate, VC = Q·E (voltmeter reads Q). Q = (1/R)√(L/C) = f0/BW.** Earth resistance: 62% rule (fall-of-potential)."

> ⚠️ **TRAP ALERT** — The Q-meter reads **VC/E = Q** only **at resonance** (max VC). Q = **ωL/R** (increases with frequency for fixed R, but R itself is frequency-dependent via skin effect). Earth-test **potential spike at 62%** (not 50%) of the E–C distance.

### 📐 Formula Sheet

```
Q-meter (series resonance):  VC = Q·E ⇒ Q = VC/E
Q = ωL/R = 1/(ωCR) = (1/R)√(L/C) = f0/BW
Resonance:  f0 = 1/(2π√(LC))
Frequency counter:  f = (count)/(gate time)
Phase (CRO): sinφ = intercept/max
Earth resistance (fall-of-potential): R = V_EP/I ; P at 62% of E–C distance
```

### 🧮 Solved Examples

**Example 1 — Q-meter.**
A coil resonates in a Q-meter at `f0 = 1 MHz` with a tuning capacitor `C = 100 pF`. The injected voltage is `E = 10 mV` and the voltage across C at resonance is `VC = 2 V`. Find the coil's Q and its inductance L.

```
Q = VC/E = 2/0.010 = 200
f0 = 1/(2π√(LC)) ⇒ L = 1/((2πf0)²·C)
   (2πf0) = 2π×1e6 = 6.2832e6 ;  (2πf0)² = 3.9478e13
L = 1/(3.9478e13 × 100e−12) = 1/(3.9478e13 × 1e−10) = 1/(3947.8) = 2.533e−4 H
  = 253.3 µH
```
**Q = 200; L ≈ 253 µH.**

**Example 2 — Q from L, C, R.**
A coil has `L = 100 µH`, `R = 5 Ω`, resonated with `C = 250 pF`. Find Q at resonance.

```
Q = (1/R)·√(L/C) = (1/5)·√(100e−6/250e−12)
  = 0.2 × √(4e5) = 0.2 × 632.46 = 126.5
```
**Q ≈ 126.5.**

### ⚠️ Common Traps

1. **Q-meter reads Q = VC/E only at resonance** (tune C for max VC).
2. **Q = (1/R)√(L/C)** — higher L/C ratio or lower R gives higher Q.
3. **Earth-resistance potential spike at 62%** of the electrode–current-spike distance (fall-of-potential).
4. **Frequency counter accuracy** depends on the **gate-time/time-base** precision.
5. **Q = f0/BW** — a high-Q circuit is sharply selective (narrow bandwidth).
6. **Distributed (self) capacitance** of the coil shifts the true resonance — the Q-meter can measure it via two-frequency methods.

### 📝 Test — Measuring Instruments (8 Q)

1. **(MCQ)** A Q-meter works on the principle of:
   (a) series resonance  (b) bridge balance  (c) null deflection  (d) integration
2. **(MCQ)** At resonance in a Q-meter, the voltage across C equals:
   (a) E  (b) Q·E  (c) E/Q  (d) 2E
3. **(MCQ)** The quality factor Q of a coil equals:
   (a) ωR/L  (b) (1/R)√(L/C)  (c) R√(C/L)  (d) ωRC
4. **(MCQ)** In the fall-of-potential method, the potential spike is placed at ______ of the E–C distance.
   (a) 50%  (b) 62%  (c) 75%  (d) 100%
5. **(MCQ)** A digital frequency counter measures frequency by counting cycles over a precise:
   (a) voltage  (b) gate time  (c) resistance  (d) phase
6. **(NAT)** A Q-meter: E = 20 mV, VC at resonance = 4 V. Find Q. ______
7. **(NAT)** A coil L = 200 µH, R = 8 Ω, C = 200 pF. Find Q = (1/R)√(L/C). ______
8. **(NAT)** A resonant circuit has f0 = 2 MHz and bandwidth 20 kHz. Find Q. ______

<details>
<summary>🔑 Solutions</summary>

**1 → (a) series resonance.**

**2 → (b) Q·E.**

**3 → (b) (1/R)√(L/C).**

**4 → (b) 62%.**

**5 → (b) gate time.**

**6 →** Q = VC/E = 4/0.020 = **200.**

**7 →** Q = (1/8)√(200e−6/200e−12) = 0.125 × √(1e6) = 0.125 × 1000 = **125.**

**8 →** Q = f0/BW = 2e6/20e3 = **100.**

</details>

---

## 🔧 Electrical Machines: Synchronous Generator — Voltage Regulation & Parallel Operation

Day 19 built the synchronous machine. Now its **voltage regulation** (EMF, MMF, ZPF/Potier methods) and **parallel operation / synchronization**.

### 📖 Concept Deep Dive

**Voltage regulation** — the rise in terminal voltage when full load is thrown off, at constant excitation & speed:

```
% Voltage Regulation = (E − V)/V × 100     (E = no-load EMF, V = full-load terminal voltage)
```

For **lagging** pf, E > V ⇒ **positive** regulation; for **leading** pf, E can be < V ⇒ **negative** regulation.

**Methods to find regulation (find E from V, I, Ra, Xs):**

1. **EMF (synchronous impedance) method** — treat Xs as a lumped reactance:
```
E = √( (V·cosφ + I·Ra)² + (V·sinφ ± I·Xs)² )     [+ for lag, − for lead]
```
Uses **OCC + SCC**; `Zs = Voc/Isc` (at same field current). Gives an **optimistic**-side/**pessimistic** result — actually the EMF method **over-estimates** regulation (pessimistic).

2. **MMF (Ampere-turn) method** — works with **MMFs/field currents** instead of impedances; **under-estimates** regulation (optimistic). It is the converse of the EMF method.

3. **ZPF (Potier) method** — the most accurate; separates **armature leakage reactance (XL)** from **armature reaction** using the **zero-power-factor (ZPF) characteristic** + OCC to build the **Potier triangle**; accounts for saturation.

| Method | Basis | Tendency |
|---|---|---|
| **EMF (Zs)** | synchronous impedance | **pessimistic** (over-estimates) |
| **MMF** | ampere-turns | **optimistic** (under-estimates) |
| **ZPF/Potier** | leakage + reaction separated | **most accurate** |

**Parallel operation & synchronization.** To connect an alternator to the grid (bus), **conditions for synchronization**:
1. **Same voltage** (magnitude) as the bus.
2. **Same frequency**.
3. **Same phase sequence**.
4. **Same phase** (in phase at the instant of closing).

Checked by **synchronizing lamps (dark/bright)** or a **synchroscope**. Once paralleled:
- **Increasing prime-mover input** → shares more **active power (P)** (changes power angle δ).
- **Increasing excitation** → changes **reactive power (Q)/pf** (supplies more VARs).

```
Power delivered  P = (E·V/Xs)·sin δ   (δ = load/power angle)
Synchronizing power/torque resists departure from synchronism (stability)
```

> 💎 **KEY RESULT** — **% Reg = (E − V)/V × 100**. **EMF method over-estimates (pessimistic); MMF under-estimates (optimistic); ZPF/Potier is most accurate**. Synchronization needs **equal voltage, frequency, phase sequence & phase**. Post-parallel: **prime mover controls P, excitation controls Q**.

> 🧠 **MEMORY HOOK** — "**EMF = pessimistic, MMF = optimistic, Potier = accurate. Sync: V, f, phase-sequence, phase.** Steam sets P, field sets Q."

> ⚠️ **TRAP ALERT** — **EMF (synchronous impedance) method gives pessimistic (higher) regulation**; **MMF method optimistic (lower)** — the truth lies between (Potier). For **leading** pf, regulation can be **negative** (terminal V rises on removing load... actually E < V, so V would fall when load applied — sign care!).

### 📐 Formula Sheet

```
% Reg = (E − V)/V × 100
EMF method: E = √((V cosφ + I Ra)² + (V sinφ ± I Xs)²) [+lag, −lead]
   Zs = Voc/Isc (same If) ; Xs = √(Zs² − Ra²)
EMF → pessimistic ; MMF → optimistic ; ZPF/Potier → accurate
Sync conditions: equal V, f, phase sequence, phase
Power  P = (E V/Xs) sin δ ; prime mover → P, excitation → Q
```

### 🧮 Solved Examples

**Example 1 — regulation (EMF method).**
A 3-φ alternator delivers rated current at **V = 230 V/phase**, pf **0.8 lagging**; `Ra = 0.5 Ω`, `Xs = 5 Ω`, `I = 20 A`. Find the no-load EMF and % regulation.

```
cosφ = 0.8, sinφ = 0.6 (lagging ⇒ +)
E = √((V cosφ + I Ra)² + (V sinφ + I Xs)²)
  = √((230×0.8 + 20×0.5)² + (230×0.6 + 20×5)²)
  = √((184 + 10)² + (138 + 100)²)
  = √(194² + 238²) = √(37636 + 56644) = √94280 = 307.1 V
% Reg = (E − V)/V × 100 = (307.1 − 230)/230 × 100 = 33.5%
```
**E ≈ 307 V; regulation ≈ 33.5 %.**

**Example 2 — synchronous power.**
An alternator has `E = 1.2 pu`, `V = 1.0 pu`, `Xs = 1.0 pu`, power angle `δ = 30°`. Find the power delivered (pu).

```
P = (E·V/Xs)·sin δ = (1.2 × 1.0/1.0) × sin 30° = 1.2 × 0.5 = 0.6 pu
```
**P = 0.6 pu.**

### ⚠️ Common Traps

1. **% Reg = (E − V)/V** — for **lagging** pf positive, for **leading** pf can be negative.
2. **EMF method: use "+I·Xs" for lagging, "−I·Xs" for leading** pf in the E formula.
3. **EMF method over-estimates** regulation (pessimistic); **MMF under-estimates**; **Potier is accurate**.
4. **Synchronization needs four matches:** voltage, frequency, phase sequence, phase.
5. **Prime mover controls active power P; excitation controls reactive power Q** — a favourite conceptual question.
6. **P = (EV/Xs)sinδ** — maximum at δ = 90° (steady-state stability limit).

### 📝 Test — Electrical Machines (8 Q)

1. **(MCQ)** Voltage regulation of an alternator is:
   (a) (E − V)/V  (b) (V − E)/E  (c) E/V  (d) V/E
2. **(MCQ)** Which method of finding regulation is pessimistic (over-estimates)?
   (a) EMF (synchronous impedance)  (b) MMF  (c) Potier  (d) ZPF
3. **(MCQ)** The most accurate method of finding regulation is:
   (a) EMF  (b) MMF  (c) ZPF/Potier  (d) direct loading only
4. **(MCQ)** Which is NOT a condition for synchronization?
   (a) same voltage  (b) same frequency  (c) same phase sequence  (d) same power rating
5. **(MCQ)** After paralleling, increasing the prime-mover input changes mainly the:
   (a) reactive power  (b) active power  (c) frequency of the grid  (d) voltage
6. **(NAT)** An alternator: E = 260 V, V = 230 V (per phase). Find the % regulation. ______ %
7. **(NAT)** E = 1.5 pu, V = 1.0 pu, Xs = 1.0 pu, δ = 30°. Find power in pu. ______ pu
8. **(NAT)** V = 200 V, I = 10 A, Ra = 1 Ω, Xs = 4 Ω, unity pf. Find E (EMF method) in V. ______ V

<details>
<summary>🔑 Solutions</summary>

**1 → (a) (E − V)/V.**

**2 → (a) EMF (synchronous impedance).**

**3 → (c) ZPF/Potier.**

**4 → (d) same power rating** (not required).

**5 → (b) active power.**

**6 →** % Reg = (260 − 230)/230 × 100 = 30/230 × 100 = **13.04%.**

**7 →** P = (1.5×1.0/1.0)×sin30° = 1.5 × 0.5 = **0.75 pu.**

**8 →** Unity pf: cosφ=1, sinφ=0.
```
E = √((V + IRa)² + (I Xs)²) = √((200 + 10)² + (10×4)²) = √(210² + 40²)
  = √(44100 + 1600) = √45700 = 213.8 V
```
**E ≈ 213.8 V.**

</details>

---

## 🔧 Power Electronics: Cycloconverters & Matrix-Converter Basics

Day 19 finished inverters. A **cycloconverter** converts AC of one frequency **directly** to AC of a **lower** frequency **without a DC link** (AC→AC). The **matrix converter** is its modern bidirectional-switch cousin.

### 📖 Concept Deep Dive

**Cycloconverter.** Uses two **back-to-back phase-controlled converters** (a positive-group and a negative-group) whose firing angles are **modulated** so the average output follows a low-frequency sine. It is a **direct AC-AC** converter (no intermediate DC).

- **Step-down frequency only:** output frequency `fo` must be **less than** the input `fi` (typically `fo ≤ fi/3` for a reasonable waveform).
- **Line (natural) commutated** — uses the AC supply for commutation (no forced commutation), so built with **thyristors**.
- **Types:** single-phase to single-phase, three-phase to single-phase, **three-phase to three-phase** (the practical one for large low-speed AC drives — e.g., cement mills, ship propulsion, mine hoists).

```
Output frequency  fo < fi   (step-down; practically fo ≤ fi/3)
Two converters: positive group (for +ve half of output) + negative group (−ve half)
Circulating-current mode vs blocking (non-circulating) mode
```

**Blocking vs circulating-current mode:**
- **Blocking (non-circulating):** only one group conducts at a time; the other is blocked → no circulating current, but a **dead band** at current zero.
- **Circulating-current mode:** both groups active with a **reactor** limiting circulating current → smoother output, no dead band, but extra losses.

**Advantages:** direct conversion (efficient), regeneration capability, good for **low-speed high-power** drives. **Disadvantages:** output **frequency limited to < fi**, poor input **power factor & harmonics**, many thyristors.

**Matrix converter.** A **direct AC-AC** converter using a matrix of **bidirectional switches** (e.g., **9 switches** for 3-φ to 3-φ) connecting any input phase to any output phase. Unlike the cycloconverter:
- Can produce output frequency **higher or lower** than input (not limited to step-down).
- **No bulky DC-link capacitor** (compact, long-life).
- **Sinusoidal input & output currents**, controllable input pf.
- Complex control (SVM/PWM), commutation of bidirectional switches is tricky; output voltage limited to **~0.866** of input.

| Feature | Cycloconverter | Matrix converter |
|---|---|---|
| Conversion | direct AC-AC | direct AC-AC |
| DC link | none | none |
| Frequency | step-down only (fo < fi) | up or down |
| Switches | thyristors (line-commutated) | bidirectional (IGBT), forced |
| Voltage ratio | — | ≤ 0.866 |
| Input pf/harmonics | poor | controllable/sinusoidal |

> 💎 **KEY RESULT** — A **cycloconverter** is a **direct AC-AC, line-commutated (thyristor)** converter that **steps frequency DOWN only** (fo < fi, practically ≤ fi/3), using positive/negative converter groups; used for **low-speed high-power drives**. A **matrix converter** (bidirectional switches, no DC link) can go **up or down** in frequency but limits voltage to **0.866× input**.

> 🧠 **MEMORY HOOK** — "**Cyclo = direct AC-AC, step-DOWN only (fo<fi), thyristors, line-commutated (big low-speed drives). Matrix = bidirectional switches, no DC link, up/down, 0.866 voltage limit.**"

> ⚠️ **TRAP ALERT** — A **cycloconverter only reduces frequency** (fo < fi); it cannot step up. It has **no DC link** (direct AC-AC). The **matrix converter's voltage transfer ratio is limited to ≈ 0.866** (√3/2).

### 📐 Formula Sheet

```
Cycloconverter: direct AC-AC, fo < fi (step-down; practically fo ≤ fi/3)
   positive group (output +ve half) + negative group (−ve half)
   line (natural) commutation; blocking vs circulating-current mode
Matrix converter: bidirectional switches (9 for 3φ-3φ), no DC link
   fo up or down ; voltage transfer ratio ≤ 0.866 (√3/2)
   sinusoidal input/output, controllable input pf
```

### 🧮 Solved Examples

**Example 1 — cycloconverter output frequency.**
A cycloconverter is fed from a **50 Hz** supply. For a good-quality output waveform (`fo ≤ fi/3`), find the maximum practical output frequency.

```
fo(max, practical) = fi/3 = 50/3 = 16.67 Hz
```
**fo(max) ≈ 16.7 Hz** (cycloconverters are used for low-frequency, low-speed drives).

**Example 2 — matrix converter voltage.**
A matrix converter is fed from a **415 V (line, rms)** 3-φ supply. Find the maximum achievable output line voltage (rms).

```
Vo(max) = 0.866 × Vin = 0.866 × 415 = 359.4 V
```
**Vo(max) ≈ 359 V** (the intrinsic 0.866 voltage-ratio limit of the matrix converter).

### ⚠️ Common Traps

1. **Cycloconverter steps frequency DOWN only** (fo < fi) — it cannot increase frequency.
2. **Cycloconverter has no DC link** — direct AC-AC (don't confuse with a rectifier-inverter cascade).
3. **Line (natural) commutation** — cycloconverters use thyristors commutated by the AC supply.
4. **Matrix converter voltage ratio ≤ 0.866** (√3/2) — an intrinsic limit.
5. **Blocking mode** has a dead band; **circulating-current mode** (with reactor) is smoother but lossier.
6. **Poor input pf & harmonics** are the cycloconverter's main drawbacks.

### 📝 Test — Power Electronics (8 Q)

1. **(MCQ)** A cycloconverter converts:
   (a) DC to AC  (b) AC of one frequency to AC of a lower frequency directly  (c) AC to DC  (d) DC to DC
2. **(MCQ)** The output frequency of a cycloconverter is:
   (a) higher than input  (b) lower than input  (c) equal to input  (d) DC
3. **(MCQ)** Cycloconverters use which type of commutation?
   (a) forced  (b) line (natural)  (c) load  (d) none
4. **(MCQ)** A matrix converter has no:
   (a) switches  (b) DC-link capacitor  (c) input  (d) output
5. **(MCQ)** The voltage transfer ratio of a matrix converter is limited to about:
   (a) 0.5  (b) 0.707  (c) 0.866  (d) 1.0
6. **(NAT)** A cycloconverter from 60 Hz, practical limit fo ≤ fi/3. Find the max output frequency in Hz. ______ Hz
7. **(NAT)** A matrix converter fed from 400 V line. Find the max output line voltage in V. ______ V
8. **(NAT)** How many bidirectional switches does a 3-φ to 3-φ matrix converter use? ______

<details>
<summary>🔑 Solutions</summary>

**1 → (b) AC of one frequency to AC of a lower frequency directly.**

**2 → (b) lower than input.**

**3 → (b) line (natural).**

**4 → (b) DC-link capacitor.**

**5 → (c) 0.866.**

**6 →** fo = 60/3 = **20 Hz.**

**7 →** Vo = 0.866 × 400 = **346.4 V.**

**8 →** 3 × 3 = **9 switches.**

</details>

---

`✅ Day 20 complete — Q-meter (VC = Q·E) & earth resistance (62% rule), synchronous generator regulation (EMF pessimistic/MMF optimistic/Potier accurate) & synchronization, and cycloconverters (AC-AC step-down) & matrix converters (0.866 limit). Tomorrow: measurements revision/PYQ, synchronous motor (V-curves, hunting), and PE applications (SMPS/UPS/HVDC).`

*Correctness over length — re-derive any result you're unsure of and mark "verify" before the exam.*
