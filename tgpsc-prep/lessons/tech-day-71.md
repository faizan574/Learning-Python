# ⚡ GATE Technical Revision — Day 71 (2026-09-30)

*Measurements finishes the analog-meter family (electrostatic, induction, thermal, rectifier), Machines starts the induction motor (rotating field, slip, torque), and Power Electronics analyses rectifier performance (ripple, TUF, pf, source-inductance overlap).*

📅 Tech Day 71 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics · 🔁 Round 4 (all three sections)

> 🧠 **MEMORY HOOK** — Today: **electrostatic/thermal = true-RMS**, **rectifier-PMMC = average (form-factor 1.11)**; the **induction motor** (`Ns = 120f/P`, `s = (Ns−N)/Ns`, max torque at `s = R2/X2`); and **rectifier metrics** (`RF = √(FF²−1)`, TUF, **overlap angle** from source inductance).

---

## 🔧 Measuring Instruments: Electrostatic, Induction, Thermal & Rectifier Instruments

### 📖 Concept Deep Dive

**Electrostatic instruments.** Use the **force between charged plates** (like a variable capacitor). Torque:
```
Td = ½ · V² · (dC/dθ)
```
- Deflection `∝ V²` ⇒ **square-law**, reads **true RMS**, works on **AC & DC**.
- Draws **negligible current** (very high input impedance) ⇒ ideal for **high-voltage** measurement; no power drawn on DC.

**Induction instruments.** Work only on **AC** — two alternating fluxes induce eddy currents in a disc/drum, producing torque (shaded-pole/split-phase principle). Main use: the **energy meter** (integrating). Not usable on DC.

**Thermal instruments:**
- **Thermocouple type** — the measured current heats a small element; a thermocouple produces an EMF `∝` heat `∝ I²`, read by a PMMC. **True RMS**, works to **high (RF) frequencies**.
- **Hot-wire type** — a wire heats and **expands** with current; the sag deflects a pointer. True RMS, frequency-independent.

**Rectifier instruments.** A **rectifier + PMMC**. The PMMC responds to the **average** of the rectified wave; the scale is **calibrated in RMS assuming a sine** using the **form factor**:
```
Reading = form factor × average = 1.11 × V(avg)   (for a sine)
Form factor = RMS/average = 1.11  (sine)
```
They are **average-responding** (not true-RMS), so a **non-sinusoidal** input gives a **form-factor error**.

| Instrument | AC/DC | Reads |
|---|---|---|
| Electrostatic | both | true RMS (square-law, hi-Z, hi-V) |
| Induction | AC only | energy (integrating) |
| Thermal (t/c, hot-wire) | both | true RMS (RF capable) |
| Rectifier + PMMC | AC | **average**, RMS-calibrated for sine |

> 💎 **KEY RESULT** — **True-RMS:** electrostatic (`½V²dC/dθ`), thermal, EMMC, MI. **Average-responding:** rectifier-PMMC (`1.11 × avg`, sine-calibrated). Electrostatic draws ~no current (high-V); thermal works at **RF**.

> ⚠️ **TRAP ALERT** — A **rectifier instrument reads average, calibrated for a sine** — a non-sinusoid gives a **form-factor error** (`kf ≠ 1.11`). **Induction meters work only on AC**. Electrostatic meters read **voltage** (draw negligible current).

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Electrostatic torque | `Td = ½ V²·(dC/dθ)` |
| Form factor (sine) | `kf = RMS/avg = 1.11` |
| Rectifier reading | `1.11 × V(avg)` (sine) |
| Thermocouple | `EMF ∝ heat ∝ I²` |
| Sync/energy (induction) | AC only |

### 🧮 Solved Examples

**Example 1 — Rectifier meter error.**
A rectifier (average-responding) voltmeter is calibrated for a sine (`kf = 1.11`). It is fed a symmetrical square wave (true `kf = 1.0`) of RMS 100 V. What does it indicate?

```
Square wave: V(avg over half-cycle) = V(rms) = 100 V  (kf = 1.0)
Meter shows 1.11 × avg = 1.11 × 100 = 111 V
Error = +11 %  (reads high because it assumes a sine kf = 1.11)
```

**Example 2 — Electrostatic torque.**
An electrostatic voltmeter has `dC/dθ = 2 pF/rad`. Find the torque at 1000 V.

```
Td = ½ V²·(dC/dθ) = 0.5 × (1000)² × 2×10⁻¹²
   = 0.5 × 10⁶ × 2×10⁻¹² = 1×10⁻⁶ N·m = 1 µN·m
```

### ⚠️ Common Traps

1. **Rectifier = average-responding** — sine-calibrated (1.11); errs on non-sinusoids.
2. **Electrostatic reads voltage** — high input impedance, negligible current, high-V use.
3. **Induction meters: AC only** — used for energy metering, not DC.
4. **Thermal = true RMS at RF** — thermocouple/hot-wire independent of waveform/frequency.
5. **Form factor 1.11 is for a sine** — don't apply it blindly to other waveforms.
6. **Square-law electrostatic** — non-uniform scale, like MI/EMMC.

### 📝 Test (5 MCQ + 3 NAT)

**Q1 (MCQ).** An electrostatic instrument deflection is proportional to:
(a) V (b) V² (c) I² (d) I

**Q2 (MCQ).** Which instrument works only on AC?
(a) electrostatic (b) induction (c) thermal (d) PMMC

**Q3 (MCQ).** A thermocouple instrument reads:
(a) average (b) peak (c) true RMS (d) form factor

**Q4 (MCQ).** A rectifier-type meter is calibrated for a sine using form factor:
(a) 1.0 (b) 1.11 (c) 1.57 (d) 2.0

**Q5 (MCQ).** For high-voltage measurement drawing negligible current, use:
(a) PMMC (b) electrostatic (c) induction (d) rectifier

**Q6 (NAT).** A rectifier meter (kf = 1.11) reads a waveform whose true form factor is 1.0, RMS 200 V. Find the indicated value (V).

**Q7 (NAT).** Electrostatic torque for V = 2000 V, dC/dθ = 1 pF/rad (µN·m).

**Q8 (NAT).** A sine of RMS 230 V is applied to a rectifier meter. Find the half-cycle average it responds to (V). (avg = RMS/1.11.)

<details><summary>🔑 Solutions</summary>

**Q1 — (b) V².**

**Q2 — (b) induction.**

**Q3 — (c) true RMS.**

**Q4 — (b) 1.11.**

**Q5 — (b) electrostatic.**

**Q6 — 222 V.** `1.11 × 200 = 222 V` (11% high).

**Q7 — 2 µN·m.** `Td = ½ × (2000)² × 1×10⁻¹² = 0.5×4×10⁶×10⁻¹² = 2×10⁻⁶`.

**Q8 — 207.2 V.** `avg = 230/1.11 = 207.2 V`.
</details>

---

## 🔧 Electrical Machines: Induction Motor I — Rotating Field, Slip & Torque

### 📖 Concept Deep Dive

**Rotating magnetic field.** Balanced **3-phase currents** in space-displaced windings produce a **constant-magnitude field rotating** at **synchronous speed**:
```
Ns = 120·f / P   (rpm)   (f = supply frequency, P = poles)
```

**Slip.** The rotor runs slightly **slower** than `Ns` (else no relative motion, no induced current, no torque):
```
Slip  s = (Ns − N)/Ns        N = (1 − s)·Ns
Rotor (slip) frequency:  fr = s·f
```
At standstill `s = 1` (`fr = f`); at rated load `s` is small (~2-5%).

**Rotor quantities.** With standstill rotor EMF `E2` and reactance `X2`:
```
Running rotor EMF = s·E2
Running rotor reactance = s·X2   (rotor resistance R2 stays constant)
Rotor current  I2 = s·E2 / √(R2² + (s·X2)²)
```

**Torque equation.**
```
T ∝ (s·E2²·R2) / (R2² + (s·X2)²)
```
- **Starting torque** (`s = 1`): `Tst ∝ (E2²·R2)/(R2² + X2²)`.
- **Maximum (pull-out) torque:** occurs when `R2 = s·X2`, i.e. at slip
```
s(maxT) = R2 / X2
T(max) ∝ E2² / (2·X2)   — INDEPENDENT of R2
```
So adding **rotor resistance** (wound rotor) **increases starting torque** and shifts the peak toward `s = 1`, but **does not change `Tmax`**. Torque also `∝ V²` (supply voltage squared).

> 💎 **KEY RESULT** — `Ns = 120f/P`; `s = (Ns−N)/Ns`; `fr = s·f`. Torque `∝ sE2²R2/(R2² + (sX2)²)`; **max torque at `s = R2/X2`**, `Tmax ∝ E2²/(2X2)` **independent of R2**; `T ∝ V²`.

> 🧠 **MEMORY HOOK** — **"Max torque when rotor resistance = slip × reactance."** More rotor R ⇒ more **starting** torque (peak moves to higher slip), but the **peak value stays the same**.

> ⚠️ **TRAP ALERT** — At **standstill s = 1** (rotor frequency = supply frequency). **Tmax is independent of R2** (only the *slip at which it occurs* changes). Torque falls with the **square** of voltage — a small voltage dip cuts torque sharply.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Synchronous speed | `Ns = 120f/P` |
| Slip | `s = (Ns − N)/Ns` |
| Rotor frequency | `fr = s·f` |
| Running rotor EMF / X | `sE2` ; `sX2` |
| Torque | `T ∝ sE2²R2/(R2² + (sX2)²)` |
| Slip at max torque | `s = R2/X2` |
| Max torque | `Tmax ∝ E2²/(2X2)` (indep. of R2) |

### 🧮 Solved Examples

**Example 1 — Slip & rotor frequency.**
A 4-pole, 50 Hz induction motor runs at `1440 rpm`. Find synchronous speed, slip and rotor frequency.

```
Ns = 120×50/4 = 1500 rpm
s = (1500 − 1440)/1500 = 60/1500 = 0.04 = 4%
fr = s·f = 0.04 × 50 = 2 Hz
```

**Example 2 — Slip for maximum torque.**
A rotor has `R2 = 0.5 Ω`, standstill reactance `X2 = 2 Ω`. Find the slip at maximum torque.

```
s(maxT) = R2/X2 = 0.5/2 = 0.25
(To get maximum torque at starting, s=1, we would need R2 = X2 = 2 Ω.)
```

### ⚠️ Common Traps

1. **Ns is synchronous, N is rotor** — slip uses both; don't equate them.
2. **fr = s·f** — rotor frequency is slip times supply frequency (= f at standstill).
3. **Tmax independent of R2** — rotor resistance changes the **slip** at which it occurs, not its value.
4. **T ∝ V²** — torque drops sharply with voltage.
5. **Running reactance = sX2** — only the reactance scales with slip; R2 is constant.
6. **Max torque condition** — `R2 = sX2` (rotor resistance = slip × standstill reactance).

### 📝 Test (5 MCQ + 3 NAT)

**Q1 (MCQ).** Synchronous speed of a 6-pole, 50 Hz machine is:
(a) 1500 rpm (b) 1000 rpm (c) 3000 rpm (d) 750 rpm

**Q2 (MCQ).** Rotor frequency at slip s is:
(a) f (b) s·f (c) f/s (d) (1−s)f

**Q3 (MCQ).** Maximum torque occurs when:
(a) R2 = X2 (b) R2 = s·X2 (c) s = 1 (d) R2 = 0

**Q4 (MCQ).** Maximum torque of an induction motor is:
(a) proportional to R2 (b) independent of R2 (c) inversely ∝ E2² (d) zero

**Q5 (MCQ).** Induction motor torque varies with supply voltage as:
(a) V (b) V² (c) √V (d) 1/V

**Q6 (NAT).** An 8-pole, 50 Hz motor runs at 720 rpm. Find the slip (%).

**Q7 (NAT).** R2 = 0.4 Ω, X2 = 1.6 Ω. Find the slip at maximum torque.

**Q8 (NAT).** A 4-pole, 50 Hz motor has slip 5%. Find the rotor speed (rpm).

<details><summary>🔑 Solutions</summary>

**Q1 — (b) 1000 rpm.** `Ns = 120×50/6 = 1000`.

**Q2 — (b) s·f.**

**Q3 — (b) R2 = s·X2.**

**Q4 — (b) independent of R2.**

**Q5 — (b) V².**

**Q6 — 4%.** `Ns = 120×50/8 = 750; s = (750−720)/750 = 30/750 = 0.04 = 4%`.

**Q7 — 0.25.** `s = R2/X2 = 0.4/1.6 = 0.25`.

**Q8 — 1425 rpm.** `Ns = 1500; N = (1−0.05)×1500 = 0.95×1500 = 1425 rpm`.
</details>

---

## 🔧 Power Electronics: Rectifier Performance — Ripple Factor, TUF, Input pf, Harmonics & Source-Inductance Overlap

### 📖 Concept Deep Dive

**Performance metrics** quantify how "good" a rectifier's DC output and input behaviour are.

**Form factor & ripple factor.**
```
Form factor  FF = V(rms) / V(dc)
Ripple factor  RF = V(ac,rms)/V(dc) = √(FF² − 1)
```
| Rectifier | FF | RF |
|---|---|---|
| Half-wave | 1.57 | 1.21 |
| Full-wave / bridge | 1.11 | 0.48 |
Lower RF ⇒ smoother DC.

**Rectification efficiency** `η = Pdc/Pac`: half-wave 40.6%, full-wave 81.2%.

**Transformer Utilization Factor (TUF).**
```
TUF = Pdc / (VA rating of the transformer)
```
Typical: **half-wave ≈ 0.287**, **centre-tapped full-wave ≈ 0.693**, **bridge ≈ 0.812**. The bridge uses the transformer best.

**Input power factor & harmonics.** A phase-controlled rectifier draws a **non-sinusoidal, lagging** current. For a 1-φ full converter (continuous conduction, ignoring ripple):
```
Input pf ≈ (2√2/π)·cosα = 0.9·cosα   (displacement + distortion)
```
The current's harmonics (3rd, 5th, 7th …) raise the **THD** and worsen pf; higher **pulse number** reduces low-order harmonics.

**Effect of source inductance (commutation overlap).** Real supplies have inductance `Ls`; current can't transfer between devices instantly, so conduction **overlaps** for an angle `µ` (the **overlap/commutation angle**). This causes a **drop in average output voltage**. For a 1-φ full converter (2-pulse):
```
Vo = (2Vm/π)·cosα − (2·ω·Ls/π)·Io     (Io = load current)
Overlap:  cosα − cos(α + µ) = (2·ω·Ls·Io)/Vm
```
So source inductance **reduces `Vdc`** by `(2ωLs/π)Io` and **softens** commutation.

> 💎 **KEY RESULT** — `RF = √(FF²−1)` (HW 1.21, FW 0.48). **TUF**: HW 0.287, CT-FW 0.693, **bridge 0.812**. 1-φ converter input **pf ≈ 0.9 cosα**. **Source inductance** drops `Vdc` by `(2ωLs/π)Io` and creates **overlap angle µ**.

> 🧠 **MEMORY HOOK** — **"Ripple = √(FF²−1); bridge wins on TUF (0.812)."** Source inductance always **eats into `Vdc`** and blurs the switching (overlap).

> ⚠️ **TRAP ALERT** — **RF = √(FF²−1)**, not FF−1. **TUF** compares DC power to the transformer's VA — bridge (0.812) beats centre-tap (0.693). Overlap **reduces** output voltage; don't ignore `Ls` in "why is Vdc lower than ideal?" questions.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Form factor | `FF = Vrms/Vdc` |
| Ripple factor | `RF = √(FF² − 1)` |
| Rectification efficiency | `η = Pdc/Pac` |
| TUF | `Pdc/(transformer VA)` |
| 1-φ converter input pf | `≈ 0.9·cosα` |
| Vdc with source L | `(2Vm/π)cosα − (2ωLs/π)Io` |
| Overlap angle | `cosα − cos(α+µ) = 2ωLs·Io/Vm` |

### 🧮 Solved Examples

**Example 1 — Ripple factor from form factor.**
A rectifier has `Vdc = 100 V` and `Vrms = 111 V`. Find the form factor and ripple factor.

```
FF = Vrms/Vdc = 111/100 = 1.11
RF = √(FF² − 1) = √(1.11² − 1) = √(1.2321 − 1) = √0.2321 = 0.482
(These are the full-wave values.)
```

**Example 2 — Output drop from source inductance.**
A 1-φ full converter: `Vm = 325 V`, `α = 30°`, `Io = 10 A`, `ω = 314 rad/s`, `Ls = 2 mH`. Find `Vdc`.

```
Ideal = (2Vm/π)cosα = (2×325/π)×cos30° = 206.9 × 0.866 = 179.2 V
Drop = (2ωLs/π)·Io = (2×314×2×10⁻³/π)×10
     = (1.256/π)×10 = 0.3997×10 = 4.0 V
Vdc = 179.2 − 4.0 = 175.2 V
```

### ⚠️ Common Traps

1. **RF = √(FF²−1)** — not FF−1; HW 1.21, FW 0.48.
2. **TUF ranking** — bridge (0.812) > centre-tap (0.693) > half-wave (0.287).
3. **Source inductance lowers Vdc** — by `(2ωLs/π)Io` for a 2-pulse converter.
4. **Input pf ≈ 0.9 cosα** — includes distortion (0.9) and displacement (cosα).
5. **Overlap angle µ** — from `cosα − cos(α+µ) = 2ωLs Io/Vm`.
6. **Higher pulse number** — fewer low-order harmonics, better pf and lower ripple.

### 📝 Test (5 MCQ + 3 NAT)

**Q1 (MCQ).** The ripple factor of a full-wave rectifier is about:
(a) 1.21 (b) 0.48 (c) 1.11 (d) 0.29

**Q2 (MCQ).** The TUF of a bridge rectifier is about:
(a) 0.287 (b) 0.693 (c) 0.812 (d) 1.0

**Q3 (MCQ).** Ripple factor in terms of form factor is:
(a) FF − 1 (b) √(FF² − 1) (c) FF² − 1 (d) 1/FF

**Q4 (MCQ).** Source inductance in a converter causes:
(a) higher Vdc (b) overlap and a drop in Vdc (c) no effect (d) higher pf only

**Q5 (MCQ).** The input pf of a 1-φ full converter is approximately:
(a) cosα (b) 0.9 cosα (c) sinα (d) 1.0

**Q6 (NAT).** A rectifier: Vrms = 1.11·Vdc. Find the ripple factor.

**Q7 (NAT).** 1-φ converter: ωLs = 0.5 Ω, Io = 20 A. Find the Vdc drop (V) due to source inductance. (drop = (2/π)·ωLs·Io.)

**Q8 (NAT).** A converter at α = 0°, Vm = 300 V. Find the ideal Vdc (V) (2Vm/π).

<details><summary>🔑 Solutions</summary>

**Q1 — (b) 0.48.**

**Q2 — (c) 0.812.**

**Q3 — (b) √(FF² − 1).**

**Q4 — (b) overlap and a drop in Vdc.**

**Q5 — (b) 0.9 cosα.**

**Q6 — 0.483.** `RF = √(1.11²−1) = √0.2321 = 0.482`.

**Q7 — 6.37 V.** `drop = (2/π)×0.5×20 = 0.6366×10 = 6.37 V`.

**Q8 — 191 V.** `Vdc = 2×300/π = 600/3.1416 = 190.99 V`.
</details>

---

### 📊 GATE Tech Coverage Progress

```
Measuring Instruments  ████████░░░░░░░░░░░░  8/21  🔁 Round 4
Electrical Machines    ██████████░░░░░░░░░░  10/19  🔁 Round 4
Power Electronics      ██████████░░░░░░░░░░  10/18  🔁 Round 4
```

*Next: Measurements → Measurement of power I (dynamometer wattmeter); Machines → Induction motor II (equivalent circuit, torque-slip, max torque); Power Electronics → AC voltage controllers.*

> ✅ **Self-check before you close:** Can you (1) say which meters are true-RMS vs average-responding, (2) write `Ns`, `s`, `fr` and the max-torque slip `R2/X2`, and (3) give `RF = √(FF²−1)`, the TUF ranking, and the source-inductance voltage drop? Re-read any KEY RESULT that felt shaky.
