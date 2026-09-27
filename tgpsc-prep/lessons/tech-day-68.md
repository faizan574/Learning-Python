# ⚡ GATE Technical Revision — Day 68 (2026-09-27)

*Measurements details the PMMC movement (shunts, multipliers, Ayrton shunt), Machines covers DC generators (build-up & critical resistance), and Power Electronics starts the rectifiers with single-phase half-wave & half-controlled circuits.*

📅 Tech Day 68 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics · 🔁 Round 4 (all three sections)

> 🧠 **MEMORY HOOK** — Today: the **PMMC** (`θ ∝ I`, shunt `Rsh = Im·Rm/(I−Im)`), the **DC-shunt generator's voltage build-up** (residual flux + field line below **critical resistance**), and the **half-wave/semiconverter** output (`Vdc = (Vm/2π)(1+cosα)` half-wave controlled).

---

## 🔧 Measuring Instruments: PMMC — Torque, Swamping, Shunts, Multipliers & Ayrton Shunt

### 📖 Concept Deep Dive

The **PMMC (Permanent-Magnet Moving-Coil)** instrument is the standard **DC** meter: a light coil pivots in the radial field of a permanent magnet, with control springs providing restoring torque.

**Torque & scale.**
```
Deflecting torque:  Td = N·B·A·I = G·I
Control torque:     Tc = K·θ
Deflection:  θ = (G/K)·I   ⇒  scale is LINEAR (uniform)
```
PMMC responds to the **average** value; on pure AC it reads (near) **zero**, so it needs a rectifier for AC.

**Swamping resistance.** The copper coil's resistance rises with temperature (+0.4%/°C), causing error. A **series "swamping" resistor of manganin/constantan** (near-zero temperature coefficient), typically several times the coil resistance, **dilutes** the copper's temperature effect.

**Range extension:**
- **Ammeter — shunt.** A low resistance `Rsh` in parallel diverts most current:
```
Rsh = Im·Rm /(I − Im)
Multiplying power:  m = I/Im = 1 + Rm/Rsh
```
- **Voltmeter — series multiplier.** A high resistance `Rse` in series:
```
Rse = Rm·(m − 1) ,  where  m = V/Vm
Voltmeter sensitivity = 1/Ifs  (Ω/V)
```
- **Ayrton (universal) shunt.** A tapped shunt giving **several current ranges** from one resistor chain; the shunt is **always in circuit**, so the movement is never left unprotected when switching ranges.

> 💎 **KEY RESULT** — PMMC: `θ = (G/K)I`, **linear**, DC/average-reading. Shunt `Rsh = Im Rm/(I−Im)`, `m = 1 + Rm/Rsh`. Multiplier `Rse = Rm(m−1)`. **Swamping** (manganin) cuts temperature error; **Ayrton shunt** gives safe multi-range.

> ⚠️ **TRAP ALERT** — PMMC reads **average** — useless on symmetric AC without a rectifier. Voltmeter **sensitivity = 1/Ifs (Ω/V)**, independent of range. In the Ayrton shunt the **whole chain** stays in circuit — don't apply the plain single-shunt formula per range.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Torque | `Td = NBAI = G·I` |
| Deflection | `θ = (G/K)·I` |
| Shunt | `Rsh = Im·Rm/(I − Im)` |
| Multiplying power (ammeter) | `m = 1 + Rm/Rsh` |
| Multiplier (voltmeter) | `Rse = Rm(m − 1)` , `m = V/Vm` |
| Voltmeter sensitivity | `1/Ifs` (Ω/V) |

### 🧮 Solved Examples

**Example 1 — Shunt for an ammeter.**
A PMMC movement: `Im = 5 mA`, `Rm = 20 Ω`. Find the shunt to extend the range to `5 A`.

```
Rsh = Im·Rm/(I − Im) = (5×10⁻³ × 20)/(5 − 5×10⁻³)
    = 0.1/4.995 = 0.02002 Ω ≈ 20.0 mΩ
m = I/Im = 5/0.005 = 1000
```

**Example 2 — Multiplier for a voltmeter.**
The same movement (`Im = 5 mA`, `Rm = 20 Ω`) is to read `150 V` full scale. Find `Rse`.

```
Full-scale voltage across movement Vm = Im·Rm = 5×10⁻³ × 20 = 0.1 V
m = V/Vm = 150/0.1 = 1500
Rse = Rm(m − 1) = 20 × (1500 − 1) = 20 × 1499 = 29 980 Ω ≈ 29.98 kΩ
(check: total R = V/Im = 150/5mA = 30 kΩ; minus Rm = 29.98 kΩ ✓)
```

### ⚠️ Common Traps

1. **PMMC on AC** — reads ~zero without a rectifier; it is a DC/average device.
2. **Shunt is very small, multiplier very large** — order-of-magnitude sanity check.
3. **Swamping resistor material** — manganin/constantan (low temp-coefficient), not copper.
4. **Sensitivity Ω/V** — `1/Ifs`; a 20 kΩ/V meter has `Ifs = 50 µA`.
5. **Ayrton shunt** — tapped ladder always in circuit; protects the movement during range change.
6. **m for ammeter vs voltmeter** — `m = I/Im` (shunt) vs `m = V/Vm` (multiplier).

### 📝 Test (5 MCQ + 3 NAT)

**Q1 (MCQ).** A PMMC instrument has a scale that is:
(a) square-law (b) linear (c) logarithmic (d) cramped

**Q2 (MCQ).** A PMMC meter on pure AC reads approximately:
(a) RMS (b) peak (c) zero (d) average of |v|

**Q3 (MCQ).** The swamping resistance is made of:
(a) copper (b) manganin/constantan (c) aluminium (d) iron

**Q4 (MCQ).** A voltmeter's sensitivity in Ω/V equals:
(a) Ifs (b) 1/Ifs (c) Rm (d) Vm

**Q5 (MCQ).** The Ayrton shunt is used to:
(a) increase voltage range (b) provide multi-current-range safely (c) reduce temperature error (d) rectify AC

**Q6 (NAT).** A movement Im = 1 mA, Rm = 50 Ω. Find the shunt (Ω) for a 1 A range.

**Q7 (NAT).** Same movement, find the multiplier (kΩ) for 100 V full scale.

**Q8 (NAT).** A voltmeter reads 30 kΩ on the 300 V range using Ifs = ? Find Ifs (µA) if sensitivity is 100 Ω/V... (compute Ifs). [Hint: sensitivity = 1/Ifs.]

<details><summary>🔑 Solutions</summary>

**Q1 — (b) linear.**

**Q2 — (c) zero.** Average of a symmetric AC = 0.

**Q3 — (b) manganin/constantan.**

**Q4 — (b) 1/Ifs.**

**Q5 — (b) multi-current-range safely.**

**Q6 — 0.05 Ω.** `Rsh = (1e-3×50)/(1 − 1e-3) = 0.05/0.999 ≈ 0.05005 Ω`.

**Q7 — 49.95 kΩ.**
```
Vm = Im Rm = 1e-3 × 50 = 0.05 V ; m = 100/0.05 = 2000
Rse = Rm(m−1) = 50 × 1999 = 99 950 Ω ≈ 99.95 kΩ
```
(≈ 99.95 kΩ.)

**Q8 — 10 000 µA = 10 mA.** `sensitivity = 1/Ifs ⇒ Ifs = 1/100 = 0.01 A = 10 mA = 10 000 µA`.
</details>

---

## 🔧 Electrical Machines: DC Generators — Types, Characteristics, Voltage Build-up & Critical Resistance

### 📖 Concept Deep Dive

**Types (by excitation):**
- **Separately excited** — field from an external DC source.
- **Self-excited** — field draws from the machine's own output:
  - **Shunt** (field across armature), **Series** (field in series with armature/load), **Compound** (both — *cumulative* if fields aid, *differential* if they oppose; *long-shunt* / *short-shunt* by connection).

**Circuit relations (shunt generator):**
```
Shunt field current:  Ish = V/Rsh
Armature current:  Ia = IL + Ish
Generated EMF:  Eg = V + Ia·Ra (+ brush drop)
```

**Characteristics:**
- **Open-circuit (magnetisation) characteristic (OCC):** `Eg vs If` at constant speed — shows saturation and **residual voltage** at `If = 0`.
- **Internal characteristic:** `Eg vs Ia` (after armature reaction).
- **External (load) characteristic:** `V vs IL` — droops due to `Ia Ra` drop and armature reaction (shunt); rises with load for (cumulative) series/compound.

**Voltage build-up (shunt generator).** Needs three conditions:
1. **Residual magnetism** present (gives a small starting EMF).
2. **Field connection aiding** the residual flux (else it wipes it out).
3. **Field-circuit resistance below the critical value.**

The generator builds up along the OCC until the **field-resistance line** (slope `Rf`) intersects the OCC. 

**Critical resistance `Rc`.** The **field resistance whose line is tangent to the initial (linear) part of the OCC**. If `Rf > Rc`, the lines meet only near the origin ⇒ **no build-up**. Similarly, at a given `Rf`, there is a **critical speed** below which the OCC is too low to build up.

> 💎 **KEY RESULT** — Shunt build-up needs **residual flux + aiding field + `Rf < Rc`**. **Critical resistance** = slope of the OCC's tangent through the origin; above it the machine won't excite. Series/cumulative-compound external characteristic **rises**; shunt **droops**.

> 🧠 **MEMORY HOOK** — **"No residual, no build-up."** The field-resistance line must stay **below** the OCC knee — go above **critical resistance** and the voltage collapses.

> ⚠️ **TRAP ALERT** — Failure to build up = (i) no residual magnetism (re-flash the field), (ii) reversed field connection, or (iii) `Rf ≥ Rc` / speed below critical. **Critical resistance** is a **slope**, read off the OCC — not a fixed catalogue value.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Shunt field current | `Ish = V/Rsh` |
| Armature current (shunt) | `Ia = IL + Ish` |
| Generated EMF | `Eg = V + Ia·Ra (+ Vbrush)` |
| Series generator | `Ia = Ise = IL` |
| Build-up conditions | residual flux, aiding field, `Rf < Rc` |
| Critical resistance | slope of OCC tangent at origin |

### 🧮 Solved Examples

**Example 1 — Shunt generator EMF.**
A shunt generator supplies `IL = 50 A` at `V = 220 V`. Field resistance `Rsh = 110 Ω`, armature resistance `Ra = 0.1 Ω` (ignore brush drop). Find the generated EMF.

```
Ish = V/Rsh = 220/110 = 2 A
Ia = IL + Ish = 50 + 2 = 52 A
Eg = V + Ia·Ra = 220 + 52 × 0.1 = 220 + 5.2 = 225.2 V
```

**Example 2 — Critical resistance (concept numeric).**
An OCC at a given speed has, on its initial straight part, `Eg = 50 V` at `If = 0.5 A`. Estimate the critical field resistance.

```
Rc ≈ slope of OCC (linear region) = Eg/If = 50/0.5 = 100 Ω
If the field resistance exceeds ~100 Ω, the generator won't build up.
```

### ⚠️ Common Traps

1. **`Ia = IL + Ish`** for a shunt generator (field current adds), but **`Ia = IL − Ish`** for a shunt **motor**.
2. **Build-up conditions** — residual flux + correct field polarity + `Rf < Rc`; missing any one prevents excitation.
3. **Critical resistance is a slope** — read from the OCC, not memorised.
4. **Series vs shunt external characteristic** — series/cumulative rises with load; shunt droops.
5. **Reversed rotation/field** — can destroy residual flux, blocking build-up.
6. **Critical speed** — below it, even `Rf < Rc` won't build up at rated voltage.

### 📝 Test (5 MCQ + 3 NAT)

**Q1 (MCQ).** For a DC shunt generator, `Ia` equals:
(a) `IL − Ish` (b) `IL + Ish` (c) `IL` (d) `Ish`

**Q2 (MCQ).** Voltage build-up requires:
(a) no residual flux (b) residual flux + aiding field + Rf < Rc (c) Rf > Rc (d) reversed field

**Q3 (MCQ).** The critical resistance is the field resistance that is:
(a) zero (b) tangent to the OCC (c) equal to Ra (d) infinite

**Q4 (MCQ).** The OCC plots:
(a) V vs IL (b) Eg vs If (c) Eg vs Ia (d) IL vs speed

**Q5 (MCQ).** A cumulatively-compounded generator's external characteristic:
(a) droops steeply (b) can rise with load (c) is flat always (d) is zero

**Q6 (NAT).** A shunt generator: V = 250 V, Rsh = 125 Ω, IL = 40 A, Ra = 0.2 Ω. Find Eg (V) (ignore brush drop).

**Q7 (NAT).** OCC linear part: Eg = 60 V at If = 0.4 A. Find the critical resistance (Ω).

**Q8 (NAT).** A shunt generator has Ia = 42 A, Ra = 0.15 Ω, terminal V = 230 V. Find Eg (V).

<details><summary>🔑 Solutions</summary>

**Q1 — (b) `IL + Ish`.**

**Q2 — (b).**

**Q3 — (b) tangent to the OCC.**

**Q4 — (b) Eg vs If.**

**Q5 — (b) can rise with load.**

**Q6 — 258.4 V.**
```
Ish = 250/125 = 2 A ; Ia = 40 + 2 = 42 A
Eg = 250 + 42×0.2 = 250 + 8.4 = 258.4 V
```

**Q7 — 150 Ω.** `Rc = 60/0.4 = 150 Ω`.

**Q8 — 236.3 V.** `Eg = 230 + 42×0.15 = 230 + 6.3 = 236.3 V`.
</details>

---

## 🔧 Power Electronics: Single-Phase Half-Wave & Half-Controlled Rectifiers (R, RL, RLE)

### 📖 Concept Deep Dive

**Half-wave, uncontrolled (diode), R load.** The diode conducts only the positive half-cycle:
```
Vdc (avg) = Vm/π          Idc = Vm/(πR)
Vrms = Vm/2               Irms = Vm/(2R)
Form factor = Vrms/Vdc = π/2 = 1.571
Ripple factor = √(FF² − 1) = 1.21
Rectification efficiency = (2/π)² = 40.6 %
```

**Half-wave, controlled (SCR), R load, firing angle α.** The SCR conducts from `α` to `π`:
```
Vdc = (Vm/2π)(1 + cosα)        (α = 0 ⇒ Vm/π ; α = π ⇒ 0)
Vrms = (Vm/2)·√( (1/π)[(π − α) + (sin2α)/2] )
```
Increasing `α` reduces the average output — **phase control**.

**RL load (half-wave, no freewheeling).** Inductance keeps current flowing **past `π`** to an **extinction angle `β`** (the load voltage goes negative during `π → β`), reducing the average:
```
Vdc = (Vm/2π)(cosα − cosβ)     (β from the circuit's transcendental equation)
```
A **freewheeling diode (FWD)** across the RL load clamps the negative voltage to ~0, so the average returns toward the R-load value `(Vm/2π)(1+cosα)` and load current becomes smoother/continuous.

**RLE load (battery/motor emf E).** The SCR conducts only while `vs > E` (and it is triggered); conduction angle depends on `E`, `α`. Average current `Idc = (Vdc − E)/R`.

**Single-phase semiconverter (half-controlled bridge).** Two SCRs + two diodes (or 2 SCRs + FWD). It has **inherent freewheeling**, so for an RL load with continuous conduction:
```
Vdc = (Vm/π)(1 + cosα)        (α : 0 → π ; always ≥ 0, no negative output)
```
A semiconverter gives **one-quadrant** operation (Vdc ≥ 0) — cheaper than a full converter and with better input power factor at high `α`.

> 💎 **KEY RESULT** — Half-wave uncontrolled: `Vdc = Vm/π`, `Vrms = Vm/2`, RF = 1.21, η = 40.6%. Half-wave controlled (R): `Vdc = (Vm/2π)(1+cosα)`. **Semiconverter**: `Vdc = (Vm/π)(1+cosα)`, output never negative (inherent freewheeling).

> 🧠 **MEMORY HOOK** — **"FWD kills the negative swing."** Freewheeling (or a semiconverter's built-in path) clamps the output to zero, raising the average and smoothing current.

> ⚠️ **TRAP ALERT** — For an **RL load without FWD**, current flows **past π** to `β`, so `Vdc = (Vm/2π)(cosα − cosβ)` — not the R-load formula. A **semiconverter** cannot go negative (no inversion); a **full converter** can (Vdc negative for α > 90°).

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| HW uncontrolled Vdc | `Vm/π` |
| HW uncontrolled Vrms | `Vm/2` |
| HW form factor / RF | `1.571 / 1.21` |
| HW efficiency | `(2/π)² = 40.6%` |
| HW controlled (R) Vdc | `(Vm/2π)(1 + cosα)` |
| HW RL (no FWD) Vdc | `(Vm/2π)(cosα − cosβ)` |
| 1-φ semiconverter Vdc | `(Vm/π)(1 + cosα)` |

### 🧮 Solved Examples

**Example 1 — Half-wave controlled average.**
A single-phase half-wave SCR rectifier, `Vm = 325 V` (≈230 V rms), R load, fired at `α = 60°`. Find `Vdc`.

```
Vdc = (Vm/2π)(1 + cosα) = (325/(2π))(1 + cos60°)
    = (325/6.283)(1 + 0.5) = 51.73 × 1.5 = 77.6 V
```

**Example 2 — Semiconverter average.**
A single-phase semiconverter, `Vm = 325 V`, RL load, `α = 90°`. Find `Vdc`.

```
Vdc = (Vm/π)(1 + cosα) = (325/π)(1 + cos90°)
    = (325/3.1416)(1 + 0) = 103.4 × 1 = 103.4 V
```

### ⚠️ Common Traps

1. **Half-wave vs semiconverter Vdc** — `(Vm/2π)(1+cosα)` vs `(Vm/π)(1+cosα)` — factor of 2 apart.
2. **RL without FWD goes past π** — use `(cosα − cosβ)`, not the R-load form.
3. **η = 40.6% for half-wave** — poor; full-wave is 81.2%.
4. **Semiconverter can't invert** — Vdc ≥ 0 always; only a full converter reaches negative Vdc.
5. **Form factor 1.571, ripple 1.21** — half-wave values worth memorising.
6. **RLE load conduction** — the SCR conducts only when `vs > E` and it's triggered.

### 📝 Test (5 MCQ + 3 NAT)

**Q1 (MCQ).** The average output of a half-wave uncontrolled rectifier (R load) is:
(a) 2Vm/π (b) Vm/π (c) Vm/2 (d) Vm/√2

**Q2 (MCQ).** The rectification efficiency of a half-wave rectifier is:
(a) 81.2% (b) 40.6% (c) 100% (d) 50%

**Q3 (MCQ).** A freewheeling diode across an RL load:
(a) increases negative output (b) clamps output to ~0 during the negative half (c) blocks load current (d) rectifies input

**Q4 (MCQ).** A single-phase semiconverter output voltage is:
(a) `(Vm/2π)(1+cosα)` (b) `(Vm/π)(1+cosα)` (c) `(2Vm/π)cosα` (d) `Vm cosα`

**Q5 (MCQ).** A semiconverter's output voltage is:
(a) always ≥ 0 (b) can be negative (c) always negative (d) zero

**Q6 (NAT).** Half-wave controlled, R load, Vm = 200 V, α = 0°. Find Vdc (V).

**Q7 (NAT).** Half-wave controlled, R load, Vm = 300 V, α = 90°. Find Vdc (V).

**Q8 (NAT).** Semiconverter, Vm = 314 V, α = 60°. Find Vdc (V).

<details><summary>🔑 Solutions</summary>

**Q1 — (b) Vm/π.**

**Q2 — (b) 40.6%.**

**Q3 — (b).** Clamps negative half to ~0.

**Q4 — (b) `(Vm/π)(1+cosα)`.**

**Q5 — (a) always ≥ 0.**

**Q6 — 63.7 V.** `Vdc = (200/2π)(1+1) = 31.83×2 = 63.66 V`.

**Q7 — 47.7 V.** `Vdc = (300/2π)(1+cos90°) = 47.75×1 = 47.75 V`.

**Q8 — ≈ 149.9 V.**
```
Vdc = (Vm/π)(1 + cosα) = (314/π)(1 + cos60°)
    = 99.95 × (1 + 0.5) = 99.95 × 1.5 = 149.9 V
```
</details>

---

### 📊 GATE Tech Coverage Progress

```
Measuring Instruments  █████░░░░░░░░░░░░░░░░  5/21  🔁 Round 4
Electrical Machines    ███████░░░░░░░░░░░░░░  7/19  🔁 Round 4
Power Electronics      ███████░░░░░░░░░░░░░░  7/18  🔁 Round 4
```

*Next: Measurements → Moving-Iron instruments; Machines → DC motors (torque-speed, starters, speed control); Power Electronics → single-phase full-converter & semiconverter (average/RMS, freewheeling).*

> ✅ **Self-check before you close:** Can you (1) design a shunt and a multiplier from `Im, Rm`, (2) state the three build-up conditions and what critical resistance means, and (3) write the half-wave-controlled and semiconverter `Vdc` formulas? Re-read any KEY RESULT that felt shaky.
