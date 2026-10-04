# ⚡ GATE Technical Revision — Day 75 (2026-10-04)

*Measurements covers the DC potentiometer (null method, standardisation), Machines does the single-phase induction motor (double-revolving-field, starting), and Power Electronics begins inverters (single-phase VSI, THD).*

📅 Tech Day 75 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics · 🔁 Round 4 (all three sections)

> 🧠 **MEMORY HOOK** — Today: the **DC potentiometer** (null/comparison, standardised with a **standard cell**), the **single-phase induction motor** (pulsating field = two revolving fields ⇒ **not self-starting**), and the **single-phase VSI** (full-bridge square-wave fundamental `= 0.9 Vs`, THD ≈ **48.3%**).

---

## 🔧 Measuring Instruments: DC Potentiometer

### 📖 Concept Deep Dive

A **potentiometer** measures an unknown **EMF/voltage by a null (comparison) method** — balancing it against a calibrated voltage drop so that **no current flows from the source at balance**, giving the **true EMF** (no loading error).

**Principle.** A steady **working current** flows through a calibrated **slide-wire/resistance**. The unknown EMF is balanced against the drop across a length of this wire; at **null** (galvanometer reads zero):
```
Ex = I·R(balance)      (I = working current, R = resistance up to the balance point)
```

**Crompton potentiometer.** A practical lab form: a **dial of precision resistors** (coarse) + a **calibrated slide-wire** (fine), giving high resolution.

**Standardisation.** Before measurement, the **working current is set accurately** using a **standard cell** (e.g., **Weston cadmium cell, ≈ 1.0186 V at 20 °C**): the slide is set to the cell's known EMF position and the **rheostat adjusted until the galvanometer nulls** — fixing a known, calibrated working current.

**Applications:** measure **EMF/voltage**; **current** (drop across a known standard resistor); **resistance**; and **calibrate voltmeters, ammeters and wattmeters** (as a precise DC standard).

**AC potentiometers:** extend the idea to AC:
- **Polar type** — reads **magnitude and phase** directly.
- **Coordinate type (Gall-Tinsley)** — reads **in-phase and quadrature** components separately.

> 💎 **KEY RESULT** — Potentiometer = **null method**, `Ex = I·R(balance)`, **no current drawn at balance** (true EMF). **Standardised** with a **standard (Weston) cell** (~1.0186 V). AC versions: **polar** (magnitude+phase) and **coordinate** (in-phase+quadrature).

> ⚠️ **TRAP ALERT** — The potentiometer draws **zero current at balance**, so it reads the **true EMF** (unlike a voltmeter, which loads the source). **Standardisation** (setting working current via the standard cell) must precede measurement, or readings are wrong.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Balance condition | `Ex = I·R(balance)` |
| Working current | set via standard cell |
| Standard (Weston) cell | `≈ 1.0186 V @ 20°C` |
| Current measurement | `I = V(std R)/R(std)` |
| At balance | galvanometer null (no current) |

### 🧮 Solved Examples

**Example 1 — Balance voltage.**
A potentiometer slide-wire carries a working current of `2 mA` through a `1000 Ω` resistance section at balance. Find the measured EMF.

```
Ex = I·R = 2×10⁻³ × 1000 = 2 V
```

**Example 2 — Current measurement via standard resistor.**
An unknown current flows through a `0.1 Ω` standard resistor; the potentiometer measures the drop as `0.05 V`. Find the current.

```
I = V/R(std) = 0.05/0.1 = 0.5 A
```

### ⚠️ Common Traps

1. **Zero current at balance** — reads true EMF (no loading).
2. **Standardise first** — set working current with the standard cell before measuring.
3. **Weston cell ≈ 1.0186 V** (20 °C) — the DC reference.
4. **Current via a standard resistor** — potentiometer measures the drop.
5. **AC: polar vs coordinate** — magnitude/phase vs in-phase/quadrature.
6. **Crompton** = dial resistors + slide-wire (high resolution).

### 📝 Test (5 MCQ + 3 NAT)

**Q1 (MCQ).** A potentiometer measures EMF by:
(a) deflection (b) null/comparison (c) square-law (d) rectification

**Q2 (MCQ).** At balance, the current drawn from the unknown source is:
(a) maximum (b) zero (c) half (d) rated

**Q3 (MCQ).** The potentiometer is standardised using a:
(a) voltmeter (b) standard (Weston) cell (c) ammeter (d) CRO

**Q4 (MCQ).** The Weston standard cell EMF is about:
(a) 1.0186 V (b) 1.5 V (c) 2.0 V (d) 1.1 V

**Q5 (MCQ).** A coordinate-type AC potentiometer reads:
(a) magnitude & phase (b) in-phase & quadrature components (c) power (d) frequency

**Q6 (NAT).** Working current 5 mA, balance resistance 400 Ω. Find the measured EMF (V).

**Q7 (NAT).** A 0.2 Ω standard resistor shows a drop of 0.08 V. Find the current (A).

**Q8 (NAT).** A potentiometer balances at 0.6 m of a slide-wire of 1.5 V/m gradient. Find the EMF (V).

<details><summary>🔑 Solutions</summary>

**Q1 — (b) null/comparison.**

**Q2 — (b) zero.**

**Q3 — (b) standard (Weston) cell.**

**Q4 — (a) 1.0186 V.**

**Q5 — (b) in-phase & quadrature components.**

**Q6 — 2 V.** `Ex = 5×10⁻³ × 400 = 2 V`.

**Q7 — 0.4 A.** `I = 0.08/0.2 = 0.4 A`.

**Q8 — 0.9 V.** `Ex = 0.6 × 1.5 = 0.9 V`.
</details>

---

## 🔧 Electrical Machines: Single-Phase Induction Motors — Double-Revolving-Field Theory & Starting

### 📖 Concept Deep Dive

A **single-phase induction motor** has a single stator winding producing a **pulsating (not rotating)** magnetic field. **Double-revolving-field theory** resolves this pulsating field into **two equal fields rotating in opposite directions**, each of **half amplitude**:
- **Forward field** (slip `s`) produces forward torque,
- **Backward field** (slip `2 − s`) produces backward torque.

**At standstill (`s = 1`):** both fields are equal (slip 1 and 1), so the **net starting torque is zero** — a single-phase induction motor is **not self-starting**. Once rotated (by any means), the forward torque dominates and the motor runs up.

```
Forward-field slip = s
Backward-field slip = 2 − s
At s = 1 (standstill): forward = backward ⇒ net torque = 0
```

**Starting methods** (create a rotating field at start by a phase-split):
- **Split-phase (resistance-start):** an **auxiliary winding** with higher R/X gives a phase difference; moderate starting torque (fans, pumps).
- **Capacitor-start:** a **series capacitor** in the auxiliary winding gives ~90° phase split ⇒ **high starting torque** (compressors); cut out by a centrifugal switch.
- **Capacitor-start capacitor-run (two-value):** best starting *and* running performance.
- **Permanent-split capacitor (PSC):** capacitor always in; smooth, low-torque (fans).
- **Shaded-pole:** a shading ring on part of the pole gives a weak rotating field; **cheap, low torque** (small fans).

> 💎 **KEY RESULT** — Single-phase IM: pulsating field = **two revolving fields** (half amplitude each); forward slip `s`, backward slip `2−s`; **net starting torque = 0** ⇒ **not self-starting**. Start by phase-split: **split-phase, capacitor-start, PSC, shaded-pole**.

> 🧠 **MEMORY HOOK** — **"One winding = pulsating = two opposite fields = no starting torque."** A capacitor (≈90° split) gives the **best starting torque**; shaded-pole the cheapest/weakest.

> ⚠️ **TRAP ALERT** — Backward-field slip is **`2 − s`**, not `−s`. The motor is **not self-starting** (zero net torque at standstill). **Capacitor-start** → high starting torque; **shaded-pole** → very low torque.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Forward-field slip | `s` |
| Backward-field slip | `2 − s` |
| Net starting torque | `0` (at s = 1) |
| Pulsating field | 2 rotating fields, each ½ amplitude |
| Best starting torque | capacitor-start |

### 🧮 Solved Examples

**Example 1 — Backward slip.**
A single-phase induction motor runs at a forward slip `s = 0.05`. Find the slip of the backward-rotating field.

```
Backward slip = 2 − s = 2 − 0.05 = 1.95
```

**Example 2 — Rotor frequencies.**
For a 50 Hz single-phase motor at `s = 0.04`, find the rotor frequencies w.r.t. the forward and backward fields.

```
Forward:  f_f = s·f = 0.04 × 50 = 2 Hz
Backward: f_b = (2 − s)·f = 1.96 × 50 = 98 Hz
```

### ⚠️ Common Traps

1. **Backward slip = 2 − s** (not −s).
2. **Not self-starting** — zero net torque at standstill.
3. **Capacitor-start = high starting torque**; shaded-pole = lowest.
4. **Two equal half-amplitude fields** in the double-revolving-field model.
5. **Auxiliary winding** provides the phase split for starting.
6. **PSC** keeps the capacitor in permanently (smooth, low torque).

### 📝 Test (5 MCQ + 3 NAT)

**Q1 (MCQ).** A single-phase induction motor is:
(a) self-starting (b) not self-starting (c) a synchronous motor (d) a DC motor

**Q2 (MCQ).** Double-revolving-field theory resolves the pulsating field into:
(a) one rotating field (b) two opposite rotating fields (c) three fields (d) a DC field

**Q3 (MCQ).** The backward-field slip is:
(a) s (b) −s (c) 2 − s (d) 1 − s

**Q4 (MCQ).** The highest starting torque is given by the ___ motor:
(a) shaded-pole (b) capacitor-start (c) split-phase (d) PSC

**Q5 (MCQ).** The net starting torque of a single-phase IM is:
(a) maximum (b) zero (c) negative (d) rated

**Q6 (NAT).** A single-phase motor runs at s = 0.03. Find the backward-field slip.

**Q7 (NAT).** 50 Hz motor, s = 0.06. Find the backward rotor frequency (Hz).

**Q8 (NAT).** 50 Hz motor, s = 0.05. Find the forward rotor frequency (Hz).

<details><summary>🔑 Solutions</summary>

**Q1 — (b) not self-starting.**

**Q2 — (b) two opposite rotating fields.**

**Q3 — (c) 2 − s.**

**Q4 — (b) capacitor-start.**

**Q5 — (b) zero.**

**Q6 — 1.97.** `2 − 0.03 = 1.97`.

**Q7 — 97 Hz.** `(2 − 0.06)×50 = 1.94×50 = 97 Hz`.

**Q8 — 2.5 Hz.** `s·f = 0.05×50 = 2.5 Hz`.
</details>

---

## 🔧 Power Electronics: Inverters I — Single-Phase VSI (Half & Full Bridge), THD

### 📖 Concept Deep Dive

A **Voltage Source Inverter (VSI)** converts a **DC source** into **AC output** by switching. Single-phase forms:

**Half-bridge VSI.** Two switches and a **split DC supply** (±Vs/2). The output swings between **+Vs/2 and −Vs/2** (square wave):
```
Output (square wave) RMS:  Vo(rms) = Vs/2
Fundamental RMS:  Vo1 = (4/(π√2))·(Vs/2) = 0.45·Vs
```

**Full-bridge VSI.** Four switches (H-bridge); the output swings between **+Vs and −Vs**:
```
Output (square wave) RMS:  Vo(rms) = Vs
Fundamental RMS:  Vo1 = (4/(π√2))·Vs = 0.90·Vs
```
So the full bridge gives **twice** the fundamental of the half bridge for the same `Vs`.

**Harmonics & THD (square wave).** A square wave contains only **odd harmonics** (3rd, 5th, 7th …); the **nth-harmonic RMS = fundamental/n**:
```
Vo_n = Vo1 / n   (n = 3, 5, 7, …)
Total harmonic distortion:
THD = √(Vrms² − Vo1²)/Vo1 ≈ 48.3 %   (for a square wave)
```
**PWM/SPWM** techniques are used to **reduce low-order harmonics** and control the output (covered next).

| Inverter | Output RMS | Fundamental RMS |
|---|---|---|
| Half-bridge | `Vs/2` | `0.45·Vs` |
| Full-bridge | `Vs` | `0.90·Vs` |

> 💎 **KEY RESULT** — Half-bridge square wave: `Vo(rms)=Vs/2`, fundamental `0.45Vs`. Full-bridge: `Vo(rms)=Vs`, fundamental `0.90Vs`. Square wave: **odd harmonics**, `Vo_n = Vo1/n`, **THD ≈ 48.3%**.

> 🧠 **MEMORY HOOK** — **"Half-bridge 0.45 Vs, full-bridge 0.90 Vs (×2)."** Square-wave harmonics fall as **1/n** (odd only); THD ≈ **48%** until PWM cleans it up.

> ⚠️ **TRAP ALERT** — Fundamental RMS uses `4/(π√2) = 0.90` (full bridge), **not** `4/π`. Only **odd** harmonics are present in a square wave. The **full bridge doubles** the half-bridge output for the same DC.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Half-bridge RMS | `Vo(rms) = Vs/2` |
| Half-bridge fundamental | `0.45·Vs` |
| Full-bridge RMS | `Vo(rms) = Vs` |
| Full-bridge fundamental | `0.90·Vs` |
| nth harmonic (square) | `Vo_n = Vo1/n` (odd n) |
| THD (square wave) | `≈ 48.3%` |

### 🧮 Solved Examples

**Example 1 — Full-bridge fundamental.**
A single-phase full-bridge VSI runs from `Vs = 200 V` DC (square-wave output). Find the output RMS and fundamental RMS.

```
Vo(rms) = Vs = 200 V
Vo1 = 0.90·Vs = 0.90 × 200 = 180 V
3rd harmonic RMS = Vo1/3 = 180/3 = 60 V
```

**Example 2 — Half-bridge fundamental.**
A half-bridge VSI with `Vs = 300 V`. Find the output RMS and fundamental RMS.

```
Vo(rms) = Vs/2 = 150 V
Vo1 = 0.45·Vs = 0.45 × 300 = 135 V
```

### ⚠️ Common Traps

1. **Fundamental RMS = 0.9 Vs (full), 0.45 Vs (half)** — includes the `1/√2`.
2. **Only odd harmonics** in a square wave; even harmonics absent.
3. **Harmonic amplitude ∝ 1/n** (3rd is 1/3, 5th is 1/5…).
4. **Full bridge doubles** the half-bridge output.
5. **THD ≈ 48.3%** for an unmodulated square wave.
6. **PWM/SPWM** reduces low-order harmonics (not plain square wave).

### 📝 Test (5 MCQ + 3 NAT)

**Q1 (MCQ).** A full-bridge single-phase VSI square-wave output RMS is:
(a) Vs/2 (b) Vs (c) 0.9Vs (d) 0.45Vs

**Q2 (MCQ).** The fundamental RMS of a full-bridge square wave is:
(a) 0.45Vs (b) 0.90Vs (c) Vs (d) 1.11Vs

**Q3 (MCQ).** A square wave contains:
(a) only even harmonics (b) only odd harmonics (c) all harmonics (d) no harmonics

**Q4 (MCQ).** The nth-harmonic amplitude of a square wave varies as:
(a) n (b) 1/n (c) n² (d) 1/n²

**Q5 (MCQ).** The THD of a square-wave inverter output is about:
(a) 48.3% (b) 10% (c) 0% (d) 100%

**Q6 (NAT).** Full-bridge VSI, Vs = 100 V. Find the fundamental RMS (V).

**Q7 (NAT).** Half-bridge VSI, Vs = 400 V. Find the output RMS (V).

**Q8 (NAT).** Full-bridge VSI, Vs = 240 V. Find the 5th-harmonic RMS (V).

<details><summary>🔑 Solutions</summary>

**Q1 — (b) Vs.**

**Q2 — (b) 0.90Vs.**

**Q3 — (b) only odd harmonics.**

**Q4 — (b) 1/n.**

**Q5 — (a) 48.3%.**

**Q6 — 90 V.** `0.9 × 100 = 90 V`.

**Q7 — 200 V.** `Vs/2 = 400/2 = 200 V`.

**Q8 — 43.2 V.** `Vo1 = 0.9×240 = 216 V; 5th = 216/5 = 43.2 V`.
</details>

---

### 📊 GATE Tech Coverage Progress

```
Measuring Instruments  ████████████░░░░░░░░  12/21  🔁 Round 4
Electrical Machines    ██████████████░░░░░░  14/19  🔁 Round 4
Power Electronics      ██████████████░░░░░░  14/18  🔁 Round 4
```

*Next: Measurements → Instrument transformers (CT); Machines → Synchronous machines I (EMF, armature reaction, Xd/Xq); Power Electronics → three-phase VSI (120°/180°, SPWM).*

> ✅ **Self-check before you close:** Can you (1) state the potentiometer balance principle and why it reads true EMF, (2) explain why a single-phase IM is not self-starting (forward slip s, backward 2−s), and (3) give the half/full-bridge fundamental (0.45/0.90 Vs) and square-wave THD? Re-read any KEY RESULT that felt shaky.
