# ⚡ GATE Technical Revision — Day 37 (2026-08-26)

*Three subjects, one sitting — AC bridges, the single-phase induction motor, and the voltage-source inverter.*

📅 Tech Day 37 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics

> 🧠 **MEMORY HOOK** — Today is **"balance the AC bridge, split the phase, invert to AC"**: Maxwell/Hay/Anderson bridges (by **Q range**), the single-phase motor's **double-revolving-field** theory & starting methods, and the **half/full-bridge VSI**.

---

## 🔧 Measuring Instruments: AC Bridges I — Maxwell, Hay's & Anderson

### 📖 Concept Deep Dive

AC bridges measure **inductance, capacitance, and frequency** by null balance. The balance condition equates the **products of opposite-arm impedances** (both magnitude and phase):

```
Z1·Z4 = Z2·Z3
```

The choice of bridge depends on the coil's **quality factor Q**:

| Bridge | Best for | Standard element |
|---|---|---|
| **Maxwell's inductance-capacitance** | **medium-Q** coils (`1 < Q < 10`) | capacitance `C4` (with `R4` in parallel) |
| **Hay's** | **high-Q** coils (`Q > 10`) | `C4` in **series** with `R4` |
| **Anderson's** | **low-Q** coils (`Q < 1`) | precise; extra arm |

**Maxwell's inductance-capacitance bridge** — unknown `Lx, Rx` balanced against a **capacitance standard**:

```
Lx = R2·R3·C4 ,   Rx = R2·R3/R4 ,   Q = ω·Lx/Rx = ω·C4·R4
```

**Hay's bridge** (high Q) uses `C4` in series with `R4`; for large Q, `Lx ≈ R2·R3·C4` and `Q = 1/(ω·C4·R4)`.

> 💎 **KEY RESULT** — **Maxwell (medium Q, 1-10)**, **Hay's (high Q, >10)**, **Anderson (low Q, <1)**. Maxwell's key result: `Lx = R2·R3·C4` and `Q = ω·C4·R4` — inductance measured via a **capacitance standard** (capacitors are more stable/accurate than standard inductors).

> ⚠️ **TRAP ALERT** — Match the bridge to **Q**: Hay's for **high-Q** (its `Lx` formula has a `(1+ω²C4²R4²)` term that vanishes at high Q), Maxwell for **medium**, Anderson for **low-Q**. Maxwell's balance is **frequency-independent** (`Lx = R2R3C4`), an advantage.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Balance | `Z1·Z4 = Z2·Z3` |
| Maxwell inductance | `Lx = R2·R3·C4` |
| Maxwell resistance | `Rx = R2·R3/R4` |
| Maxwell Q | `Q = ω·C4·R4` |
| Hay's (high Q) | `Lx ≈ R2·R3·C4` , `Q = 1/(ω·C4·R4)` |

### 🧮 Solved Examples

**Example 1 — Maxwell L-C bridge.** `R2 = 4000 Ω`, `R3 = 1000 Ω`, `C4 = 1 µF`, `R4 = 8000 Ω`, `f = 50 Hz`. Find `Lx`, `Rx`, and `Q`.

```
Lx = R2·R3·C4 = 4000 × 1000 × 1×10⁻⁶ = 4 H
Rx = R2·R3/R4 = 4000 × 1000 / 8000 = 500 Ω
Q  = ω·C4·R4 = (2π×50) × 1×10⁻⁶ × 8000 = 314.16 × 0.008 = 2.51
```
(`Q ≈ 2.5` is in Maxwell's medium-Q range ✓.)

**Example 2 — Which bridge?** A coil has `Q ≈ 50` at the test frequency. Which bridge suits it, and what is the simplified inductance?

```
Q = 50 (high) ⇒ use HAY'S bridge
Lx ≈ R2·R3·C4  (the (1 + ω²C4²R4²) correction is negligible at high Q)
```

### ⚠️ Common Traps

1. Using **Maxwell** for a **high-Q** coil (needs a huge `R4`) — use **Hay's**.
2. Using **Hay's/Maxwell** for **low-Q** — use **Anderson**.
3. Forgetting Maxwell's `Lx = R2R3C4` is **frequency-independent**.
4. Swapping `R4` **parallel** (Maxwell) vs **series** (Hay's) with `C4`.
5. Confusing `Rx = R2R3/R4` with `R2R4/R3`.
6. Balancing only magnitude — AC bridges need **magnitude AND phase**.

### 📝 Test — Measuring Instruments (8 Q)

**Q1 (MCQ).** Maxwell's inductance-capacitance bridge is best for coils of:
(a) low Q (b) medium Q (c) high Q (d) any Q

**Q2 (MCQ).** Hay's bridge is preferred for:
(a) low-Q coils (b) high-Q coils (c) capacitors (d) resistors

**Q3 (MCQ).** Anderson's bridge suits coils of:
(a) low Q (b) high Q (c) medium Q (d) infinite Q

**Q4 (MCQ).** In Maxwell's L-C bridge, Lx equals:
(a) R2·R3·C4 (b) R2·R3/C4 (c) C4/(R2·R3) (d) R2/R3·C4

**Q5 (MCQ).** Maxwell's bridge balance is:
(a) frequency dependent (b) frequency independent (c) voltage dependent (d) temperature only

**Q6 (NAT).** A Maxwell L-C bridge: R2 = 2000 Ω, R3 = 500 Ω, C4 = 1 µF. Find Lx (H).

**Q7 (NAT).** For Q6 with R4 = 5000 Ω, find Rx (Ω).

**Q8 (NAT).** For Q6-Q7 at 50 Hz, find the Q factor.

<details><summary>🔑 Solutions</summary>

**Q1 — (b) medium Q.**

**Q2 — (b) high-Q coils.**

**Q3 — (a) low Q.**

**Q4 — (a) R2·R3·C4.**

**Q5 — (b) frequency independent.**

**Q6.** `Lx = 2000 × 500 × 1×10⁻⁶ = 1 H`.

**Q7.** `Rx = R2·R3/R4 = 2000×500/5000 = 200 Ω`.

**Q8.** `Q = ω·C4·R4 = 314.16 × 1×10⁻⁶ × 5000 = 1.571`.

</details>

---

## 🔧 Electrical Machines: Single-Phase Induction Motors — Double-Revolving-Field & Starting

### 📖 Concept Deep Dive

A single-phase induction motor has a **single stator winding** that produces a **pulsating** (not rotating) magnetic field, so it develops **no starting torque** on its own — but it **runs** if given an initial push.

**Double-revolving-field theory:** a pulsating field can be resolved into **two equal fields rotating in opposite directions**, each of **half magnitude**. At standstill the **forward** and **backward** fields produce **equal and opposite torques** → **net starting torque = 0**. Once rotating, the two fields see different slips:

```
Forward slip:  sf = s
Backward slip: sb = 2 − s
```

Because the forward field's torque now exceeds the backward field's, a **net torque** sustains rotation.

**Starting methods** (all create a **phase-shifted auxiliary flux** to make the field rotate):

| Type | Mechanism | Starting torque |
|---|---|---|
| **Split-phase** | Auxiliary winding (high R/low X) gives ~30° phase shift | Low |
| **Capacitor-start** | Capacitor in the auxiliary branch gives ~90° shift | **High** |
| **Capacitor-start capacitor-run** | Two capacitors (one stays in) | High + smooth run |
| **Permanent-split capacitor (PSC)** | Capacitor always in circuit | Low, smooth |
| **Shaded-pole** | Copper shading ring on part of the pole | Very low (cheap) |

> 💎 **KEY RESULT** — A single-phase induction motor has **zero starting torque** (double-revolving-field). Starting needs a **phase-split auxiliary flux**: a **capacitor-start** motor gives **high** starting torque (~90° shift); a **shaded-pole** motor gives very low torque but is cheap (fans, small appliances).

> 🧠 **MEMORY HOOK** — "**Pulsating = two opposite fields ⇒ zero start**". Forward slip `s`, backward slip `2−s`. **Capacitor-start = high torque; shaded-pole = cheap/low**.

> ⚠️ **TRAP ALERT** — The backward-field slip is `2 − s`, **not** `−s`. A pure single-phase motor **cannot self-start**. The **centrifugal switch** disconnects the split-phase/capacitor-start auxiliary winding at ~75% speed.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Forward slip | `sf = s` |
| Backward slip | `sb = 2 − s` |
| Synchronous speed | `Ns = 120·f/P` |
| Starting torque (1-φ) | `= 0` (needs phase split) |
| Capacitor-start shift | `≈ 90°` (high torque) |

### 🧮 Solved Examples

**Example 1 — Forward & backward slip.** A `4-pole`, `50 Hz` single-phase induction motor runs at `1440 rpm`. Find the forward and backward slips.

```
Ns = 120×50/4 = 1500 rpm
sf = (Ns − N)/Ns = (1500 − 1440)/1500 = 0.04
sb = 2 − s = 2 − 0.04 = 1.96
```

**Example 2 — Starting torque.** What is the net starting torque of an un-split single-phase induction motor, and why?

```
Net starting torque = 0
Reason: the forward and backward rotating fields produce equal & opposite
torques at standstill (double-revolving-field theory).
```

### ⚠️ Common Traps

1. Taking backward slip as `−s` — it's **`2 − s`**.
2. Expecting a single-phase motor to **self-start** — it doesn't.
3. Confusing capacitor-start (high torque) with shaded-pole (low torque).
4. Forgetting the **centrifugal switch** cuts out the auxiliary winding.
5. Thinking the field rotates with one winding — it **pulsates**.
6. Mixing split-phase (~30°) with capacitor-start (~90°) phase shift.

### 📝 Test — Electrical Machines (8 Q)

**Q1 (MCQ).** A single-phase induction motor has a starting torque of:
(a) high (b) zero (c) negative (d) infinite

**Q2 (MCQ).** The backward-field slip in a single-phase motor is:
(a) s (b) −s (c) 2 − s (d) 1 − s

**Q3 (MCQ).** Which motor has the highest starting torque?
(a) shaded-pole (b) capacitor-start (c) split-phase (d) PSC

**Q4 (MCQ).** A shaded-pole motor is used in:
(a) large pumps (b) small fans/appliances (c) traction (d) cranes

**Q5 (MCQ).** The auxiliary winding in a split-phase motor is disconnected by a:
(a) relay (b) centrifugal switch (c) fuse (d) diode

**Q6 (NAT).** A 6-pole, 50 Hz single-phase motor runs at 960 rpm. Find the forward slip.

**Q7 (NAT).** For Q6, find the backward slip.

**Q8 (NAT).** A 2-pole, 50 Hz single-phase motor runs at 2850 rpm. Find the forward slip (%).

<details><summary>🔑 Solutions</summary>

**Q1 — (b) zero.**

**Q2 — (c) 2 − s.**

**Q3 — (b) capacitor-start.**

**Q4 — (b) small fans/appliances.**

**Q5 — (b) centrifugal switch.**

**Q6.** `Ns = 120×50/6 = 1000 rpm`; `sf = (1000 − 960)/1000 = 0.04`.

**Q7.** `sb = 2 − 0.04 = 1.96`.

**Q8.** `Ns = 120×50/2 = 3000 rpm`; `sf = (3000 − 2850)/3000 = 0.05 = 5%`.

</details>

---

## 🔧 Power Electronics: Inverters I — Single-Phase VSI (Half & Full Bridge)

### 📖 Concept Deep Dive

An **inverter** converts **DC to AC**. A **Voltage Source Inverter (VSI)** has a stiff DC voltage input.

**Single-phase half-bridge VSI:** two switches + two diodes, with a **split DC supply** (`Vs/2` each). The output is a square wave of `±Vs/2`:

```
Output RMS:        Vo(rms) = Vs/2
Fundamental (RMS): V1 = (4/π)·(Vs/2)/√2 = √2·Vs/π ≈ 0.45·Vs
```

**Single-phase full-bridge VSI:** four switches, output swings the **full `±Vs`**:

```
Output RMS:        Vo(rms) = Vs
Fundamental peak:  V1(peak) = 4Vs/π
Fundamental (RMS): V1 = 4Vs/(π·√2) = 2√2·Vs/π ≈ 0.9·Vs
```

**Harmonics & THD:** a square-wave output contains only **odd harmonics** (3rd, 5th, 7th…), with the **nth-harmonic RMS = V1/n**. The **Total Harmonic Distortion**:

```
THD = √(Vrms² − V1²) / V1
For a square wave: THD ≈ 48.3%
```

> 💎 **KEY RESULT** — Full-bridge: `Vo(rms) = Vs`, fundamental `≈ 0.9·Vs` (peak `4Vs/π`). Half-bridge: `Vo(rms) = Vs/2`, fundamental `≈ 0.45·Vs`. The **full bridge gives twice the output** of the half bridge for the same `Vs`. Square-wave **THD ≈ 48.3%** (only odd harmonics).

> 🧠 **MEMORY HOOK** — "**Full bridge = Vs (0.9 fundamental); half bridge = Vs/2 (0.45)**". Fundamental peak `4Vs/π`; **THD ≈ 48%** for a square wave.

> ⚠️ **TRAP ALERT** — The **half-bridge** output is `±Vs/2` (RMS `Vs/2`), **half** the full-bridge value. Square-wave inverters have **no even harmonics**; harmonic magnitude falls as **1/n**. PWM (next lesson) reduces the low-order harmonics.

### 📐 Formula Sheet

| Quantity | Half-bridge | Full-bridge |
|---|---|---|
| Output RMS | `Vs/2` | `Vs` |
| Fundamental peak | `2Vs/π` | `4Vs/π` |
| Fundamental RMS | `≈ 0.45·Vs` | `≈ 0.9·Vs` |
| nth harmonic RMS | `V1/n` (n odd) | `V1/n` (n odd) |
| THD (square wave) | ≈ 48.3% | ≈ 48.3% |

### 🧮 Solved Examples

**Example 1 — Full-bridge outputs.** A single-phase full-bridge VSI has `Vs = 200 V` DC (square-wave output). Find the RMS output and fundamental RMS.

```
Vo(rms) = Vs = 200 V
V1(rms) = 0.9·Vs = 0.9 × 200 = 180 V
(check: 4Vs/(π√2) = 4×200/(3.1416×1.414) = 800/4.443 = 180 V ✓)
```

**Example 2 — THD.** For the above, find the total harmonic distortion.

```
THD = √(Vrms² − V1²)/V1 = √(200² − 180²)/180
    = √(40000 − 32400)/180 = √7600/180 = 87.18/180 = 0.484 = 48.4%
```

### ⚠️ Common Traps

1. Using `Vs` for a **half-bridge** RMS — it's `Vs/2`.
2. Forgetting the fundamental of a full bridge is **0.9 Vs** (not Vs).
3. Including **even** harmonics — a square wave has only **odd**.
4. Using peak instead of RMS in THD.
5. Taking half-bridge fundamental as 0.9 Vs — it's **0.45 Vs**.
6. Forgetting harmonic amplitudes scale as **1/n**.

### 📝 Test — Power Electronics (8 Q)

**Q1 (MCQ).** The RMS output of a single-phase full-bridge VSI (square wave) is:
(a) Vs/2 (b) Vs (c) 2Vs (d) Vs/π

**Q2 (MCQ).** The fundamental RMS of a full-bridge square-wave inverter is about:
(a) 0.45 Vs (b) 0.9 Vs (c) Vs (d) 1.11 Vs

**Q3 (MCQ).** A square-wave inverter output contains:
(a) only even harmonics (b) only odd harmonics (c) all harmonics (d) no harmonics

**Q4 (MCQ).** The fundamental peak of a full-bridge VSI is:
(a) 2Vs/π (b) 4Vs/π (c) Vs/π (d) Vs

**Q5 (MCQ).** The approximate THD of a square-wave inverter output is:
(a) 3% (b) 48% (c) 100% (d) 0%

**Q6 (NAT).** A half-bridge VSI has Vs = 400 V. Find the RMS output voltage (V).

**Q7 (NAT).** For Q6, find the fundamental RMS voltage (V).

**Q8 (NAT).** A full-bridge VSI, Vs = 300 V. Find the fundamental peak voltage (V).

<details><summary>🔑 Solutions</summary>

**Q1 — (b) Vs.**

**Q2 — (b) 0.9 Vs.**

**Q3 — (b) only odd harmonics.**

**Q4 — (b) 4Vs/π.**

**Q5 — (b) 48%.**

**Q6.** `Vo(rms) = Vs/2 = 400/2 = 200 V`.

**Q7.** `V1 = 0.45 × Vs = 0.45 × 400 = 180 V`.

**Q8.** `V1(peak) = 4Vs/π = 4×300/3.1416 = 1200/3.1416 = 381.97 V ≈ 382 V`.

</details>

---

> 🧠 **DAY-37 WRAP** — AC bridges: **Maxwell (medium Q, Lx=R2R3C4), Hay's (high Q), Anderson (low Q)**. Single-phase motor: **zero starting torque** (double field), slips **s and 2−s**, **capacitor-start = high torque, shaded-pole = cheap**. Inverter: full-bridge **Vo=Vs (0.9 fundamental)**, half-bridge **Vs/2 (0.45)**, peak `4Vs/π`, **THD ≈ 48%**. Revise the boxed KEY RESULTS. ⚡
