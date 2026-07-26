# ⚡ GATE Technical Revision — Day 8 (2026-07-25)

*The form-factor traps of rectifier meters, the three-phase transformer connections, and how to keep a thyristor from firing itself.*

`📅 Tech Day 8  ·  ⏱ ~45 min  ·  🎯 Measurements + Machines + Power Electronics`

Attempt each section's test **before** opening its solutions — recall beats re-reading.

---

## 🔧 Measuring Instruments: Electrostatic, Thermal & Rectifier Instruments

A grab-bag of AC meters — each with a different "what does it actually read" answer. GATE loves the **rectifier-type form-factor error**.

### 📖 Concept Deep Dive

**Electrostatic instrument** — force between charged plates (like a capacitor). Torque ∝ V², so it reads **RMS voltage**, works on **AC and DC**, draws **almost no current** (ideal for **high-voltage voltmeters**, no power drawn on DC).

```
Td = ½ · V² · (dC/dθ)     ⇒   θ ∝ V²  (square-law, RMS-reading)
```

**Thermal instruments** — heating effect `∝ I²R`, so they read **true RMS** regardless of waveform:
- **Hot-wire**: current heats a wire; its expansion moves the pointer. Square-law scale, true RMS, AC/DC, but slow and fragile.
- **Thermocouple**: load current heats a junction; the thermo-emf drives a PMMC. Reads **true RMS**, excellent at **high/radio frequency** (RF ammeter). Deflection ∝ I² (heating).

**Rectifier-type instrument** — a **bridge rectifier + PMMC**. The PMMC responds to the **average** of the rectified current, but the scale is **calibrated in RMS assuming a sine wave** using the **form factor**:

```
Form factor  kf = RMS/Average = 1.11   (for a pure sine)
Reading = 1.11 × (average value)
```

So a rectifier meter reads correctly **only for sine waves**. For any other waveform it shows `1.11 × true-average`, which is **not** the true RMS → **waveform (form-factor) error**.

| Meter | Responds to | Scale reads | AC/DC | Best use |
|---|---|---|---|---|
| Electrostatic | V² | RMS voltage | Both | HV voltmeter |
| Hot-wire | I²(heat) | true RMS | Both | RMS current |
| Thermocouple | I²(heat) | true RMS | Both | **RF** current |
| Rectifier+PMMC | average | RMS (sine only) | AC | Multimeter AC ranges |

> 💎 **KEY RESULT** — Rectifier meters are **average-responding, RMS-calibrated** (`RMS = 1.11 × avg` for a sine). They read true RMS **only for sinusoids**; thermocouple/hot-wire read **true RMS for any waveform**.

> 🧠 **MEMORY HOOK** — "**Heat = true RMS (thermocouple/hot-wire); Rectifier = average dressed as RMS (×1.11)**." Electrostatic = HV, no current.

> ⚠️ **TRAP ALERT** — A rectifier-type AC voltmeter on a **non-sinusoidal** wave gives a **form-factor error** — it multiplies the *average* by 1.11, which is not the actual RMS. Thermocouple = best for **high frequency**.

### 📐 Formula Sheet

```
Electrostatic:  Td = ½ V²(dC/dθ) ,  θ ∝ V²  (RMS)
Thermal (I²R heating): reads true RMS (any waveform)
Form factor kf = RMS/Avg = 1.11 (sine)
Peak factor  kp = Peak/RMS = 1.414 (sine)
Rectifier meter reading = 1.11 × average
```

### 🧮 Solved Example

A rectifier-type (sine-calibrated) AC voltmeter is fed a waveform whose **average** value is 100 V. What does it read, and is it the true RMS if the wave is a square wave (true RMS also 100 V for a square wave, kf = 1)?

- Reading = `1.11 × avg = 1.11 × 100 = 111 V`.
- True RMS of a square wave = average = 100 V → the meter over-reads by 11% (form-factor error).

### ⚠️ Common Traps
- Rectifier meter reads true RMS **only for sine** (else form-factor error).
- Thermocouple/hot-wire read **true RMS** for any waveform.
- Thermocouple = best for **RF/high-frequency** current.
- Electrostatic draws **no steady current on DC** and reads **RMS voltage**.

#### 📝 Test

**Q1.** A thermocouple instrument reads:
- A) Average value  B) True RMS value  C) Peak value  D) DC only

**Q2.** A rectifier-type AC meter is calibrated to read RMS assuming:
- A) Square wave  B) Sine wave  C) Triangular wave  D) Any wave

**Q3.** The form factor of a pure sine wave is:
- A) 1.0  B) 1.11  C) 1.414  D) 2.0

**Q4.** The best instrument to measure high-frequency (RF) current is:
- A) PMMC  B) Thermocouple  C) Rectifier type  D) Moving iron

**Q5.** An electrostatic voltmeter is especially suited for:
- A) Low DC voltage  B) High voltage measurement  C) RF current  D) Power measurement

**Q6. (NAT)** A rectifier meter reads 220 V on a sine input. The average value of that input is ______ V (2 decimals).

**Q7. (NAT)** The peak factor of a sine wave is ______ (3 decimals).

**Q8. (NAT)** A sine-calibrated rectifier meter shows 111 V for a waveform of average 100 V. The percentage form-factor error if true RMS is 100 V is ______ %.

<details><summary>🔑 Solutions</summary>

**Q1: B** — Heating-based → true RMS. **Q2: B** — Sine wave (kf = 1.11). **Q3: B** — 1.11. **Q4: B** — Thermocouple (RF). **Q5: B** — High-voltage voltmeter.

**Q6:** `avg = RMS/1.11 = 220/1.11 = 198.20 V`.
**Q7:** `kp = √2 = 1.414`.
**Q8:** `(111 − 100)/100 × 100 = 11%`.

</details>

---

## 🔧 Electrical Machines: Transformers IV — Three-Phase Connections

Three single-phase units (or a 3-phase core) connect in **Y or Δ** on each side, giving four basic connections and a **30° phase shift** rule. GATE tests ratios and vector groups.

### 📖 Concept Deep Dive

Line vs phase relations: in **star (Y)**, `VL = √3·Vph`, `IL = Iph`; in **delta (Δ)**, `VL = Vph`, `IL = √3·Iph`.

The four connections (primary–secondary):

| Connection | Line-voltage ratio (per turns ratio a = N1/N2) | Notes |
|---|---|---|
| **Y-Y** | `= a` | Needs neutral/tertiary for harmonics; used for high-V |
| **Δ-Δ** | `= a` | No phase shift; one unit can be removed (**open-delta / V-V**) |
| **Y-Δ** | `= a/√3` → step-**down** shift −30° | Grid step-down; secondary line-V lower |
| **Δ-Y** | `= a·√3` → step-**up** shift +30° | Generator step-up; provides neutral |

**Vector groups & 30° shift.** Y-Δ and Δ-Y introduce a **30° phase displacement** between primary and secondary line voltages (e.g. **Dyn11** = delta primary, star secondary with neutral, 11 o'clock = +30°). This matters for **parallel operation**.

**Parallel operation conditions** (must satisfy):
1. Same **voltage ratio** (turns ratio).
2. Same **percentage impedance** (for correct load sharing: `S ∝ 1/Z%`).
3. Same **polarity**.
4. Same **phase sequence** and **phase displacement / vector group** (for 3-phase).

Load sharing between two parallel transformers A, B: they share the total load **inversely as their per-unit impedances**:

```
SA/SB = Z%B / Z%A     (with equal voltage ratios)
```

> 💎 **KEY RESULT** — Y-Δ / Δ-Y give a **±30° line-voltage phase shift**; line-voltage ratios: Y-Y & Δ-Δ = `a`, Y-Δ = `a/√3`, Δ-Y = `a·√3`. Parallel load sharing: `S ∝ 1/Z%`.

> 🧠 **MEMORY HOOK** — "**Y adds √3 in voltage, Δ adds √3 in current**"; Δ-Y **steps up** (+30°), Y-Δ **steps down** (−30°).

> ⚠️ **TRAP ALERT** — Only transformers with **compatible vector groups** (same phase shift, e.g. both Dyn11) can be paralleled. Open-delta (V-V) delivers only **57.7% (1/√3)** of the two-transformer rating, not 66.7%.

### 📐 Formula Sheet

```
Star: VL = √3·Vph , IL = Iph
Delta: VL = Vph , IL = √3·Iph
Line-V ratio:  Y-Y = a ; Δ-Δ = a ; Y-Δ = a/√3 ; Δ-Y = a·√3
Parallel share:  SA/SB = Z%B/Z%A  (equal voltage ratio)
Open-delta capacity = (1/√3) × (2-unit bank) = 57.7%
```

### 🧮 Solved Example

Two transformers in parallel: A rated 100 kVA at 4% impedance, B rated 200 kVA at 5%. Total load 250 kVA. Find each load (use per-unit on a common base — approximate by kVA/Z%).

- Sharing ∝ (rating / Z%): A → 100/4 = 25 ; B → 200/5 = 40. Total = 65.
- A carries `250 × 25/65 = 96.2 kVA`; B carries `250 × 40/65 = 153.8 kVA`.

### ⚠️ Common Traps
- Y-Δ steps voltage **down** by √3 (extra); Δ-Y **up** by √3.
- Parallel transformers need **same vector group** (phase shift), not just same ratio.
- Open-delta capacity = **57.7%** of the two-transformer bank.
- Load sharing is **inverse** to per-unit impedance.

#### 📝 Test

**Q1.** In a star connection, the line voltage is:
- A) Equal to phase voltage  B) √3 × phase voltage  C) Phase voltage/√3  D) 3 × phase voltage

**Q2.** A Δ-Y transformer produces a phase shift of:
- A) 0°  B) +30°  C) 60°  D) 180°

**Q3.** For parallel operation, transformers must have the same:
- A) Rating only  B) Voltage ratio, polarity, %impedance, vector group  C) Core type  D) Colour

**Q4.** Two parallel transformers share load in proportion to:
- A) Their impedances  B) The inverse of their per-unit impedances  C) Their ages  D) Their turns

**Q5.** The open-delta (V-V) bank delivers what fraction of the two-transformer rating?
- A) 50%  B) 57.7%  C) 66.7%  D) 86.6%

**Q6. (NAT)** A Δ-Y transformer has turns ratio a = 10. The line-voltage ratio (primary:secondary) is ______ (2 decimals; use a/√3 form → here Δ-Y = a·√3).

**Q7. (NAT)** Two transformers: A = 200 kVA at 4%, B = 100 kVA at 4%. For 240 kVA total load, A carries ______ kVA.

**Q8. (NAT)** In a star winding, phase voltage is 240 V. The line voltage is ______ V (nearest integer).

<details><summary>🔑 Solutions</summary>

**Q1: B** — VL = √3·Vph. **Q2: B** — +30°. **Q3: B** — All four conditions. **Q4: B** — Inverse of per-unit impedance. **Q5: B** — 57.7% (1/√3).

**Q6:** Δ-Y line ratio = `a·√3 = 10×1.732 = 17.32`.
**Q7:** Equal %Z → share by rating: A = 240 × 200/300 = 160 kVA.
**Q8:** `VL = √3 × 240 = 415.7 ≈ 416 V`.

</details>

---

## 🔧 Power Electronics: Thyristor II — Turn-On, dv/dt & di/dt Protection

An SCR can be fired the right way (gate) or the wrong way (dv/dt). Today: the turn-on methods and the **snubber/inductor** protection that GATE loves.

### 📖 Concept Deep Dive

**Turn-on methods** of an SCR:
1. **Gate triggering** — the normal, controlled method (a gate pulse injects current, latching the device).
2. **Forward-voltage (break-over)** — exceeding VBO; undesirable.
3. **dv/dt triggering** — a fast-rising anode voltage charges junction capacitance `Cj`, and the current `i = Cj·(dv/dt)` can turn the SCR on **without a gate signal** — a **false/undesired** turn-on.
4. **Temperature** and **light** (LASCR) triggering.

**dv/dt protection — the snubber.** A **series R-C snubber across the SCR** limits the rate of voltage rise:

```
Anode capacitive current  i = Cj · (dv/dt)
Snubber limits dv/dt so i stays below the trigger threshold
Initial dv/dt ≈ V/(Rs·Cs) ...  Rs damps the L-Cs oscillation
```

The **capacitor** slows the voltage rise; the **series resistor Rs** limits the capacitor's discharge current through the SCR at turn-on (and damps ringing with line inductance).

**di/dt protection — the series inductor.** At turn-on, conduction spreads from the gate region gradually; if anode current rises too fast, a **local hot spot** destroys the device. A **small series inductor L** limits `di/dt`:

```
di/dt = V/L   (limit by choosing L)
```

So: **series L limits di/dt; parallel R-C snubber limits dv/dt.**

> 💎 **KEY RESULT** — **dv/dt** can falsely turn on an SCR via `i = Cj·(dv/dt)`; a **parallel R-C snubber** limits dv/dt, and a **series inductor** limits di/dt (`di/dt = V/L`).

> 🧠 **MEMORY HOOK** — "**Series L for di/dt (current), parallel C for dv/dt (voltage)**." Capacitor smooths voltage; inductor smooths current.

> ⚠️ **TRAP ALERT** — dv/dt turn-on needs **no gate** (it's a fault mode). The snubber **resistor** exists to limit the capacitor's discharge surge into the SCR at turn-on — not just for damping. di/dt → **series L**; dv/dt → **shunt R-C**; don't swap.

### 📐 Formula Sheet

```
dv/dt capacitive current:  i = Cj·(dv/dt)
di/dt limit (series L):    di/dt = V/L
Snubber initial dv/dt ≈ V/(Rs·Cs)
Series L limits di/dt ; parallel R-C limits dv/dt
```

### 🧮 Solved Examples

**Ex 1.** An SCR junction capacitance `Cj = 20 pF` and a false-trigger threshold current of 2 mA. Maximum safe dv/dt?

- `dv/dt = i/Cj = (2×10⁻³)/(20×10⁻¹²) = 1×10⁸ V/s = 100 V/µs`.

**Ex 2.** A 200 V supply must have di/dt limited to 50 A/µs. Series inductor value?

- `L = V/(di/dt) = 200/(50×10⁶) = 4×10⁻⁶ = 4 µH`.

### ⚠️ Common Traps
- dv/dt triggering needs **no gate** — it's a fault, prevented by a snubber.
- **Series L → di/dt; parallel R-C → dv/dt** (don't reverse).
- The snubber resistor limits the capacitor's turn-on discharge current.
- Forward break-over turn-on (without gate) is undesirable/destructive.

#### 📝 Test

**Q1.** A high dv/dt across an SCR can:
- A) Turn it off  B) Falsely turn it on without a gate signal  C) Damage the gate  D) Do nothing

**Q2.** dv/dt protection of an SCR uses a:
- A) Series inductor  B) Parallel R-C snubber  C) Series resistor  D) Parallel diode

**Q3.** di/dt protection uses a:
- A) Series inductor  B) Parallel capacitor  C) Shunt resistor  D) Zener

**Q4.** The capacitive current during dv/dt is given by:
- A) Cj·(dv/dt)  B) L·(di/dt)  C) V/R  D) Cj·V

**Q5.** The snubber resistor's main role at turn-on is to:
- A) Increase dv/dt  B) Limit the capacitor's discharge current into the SCR  C) Provide gate current  D) Rectify

**Q6. (NAT)** Cj = 15 pF and trigger current 3 mA. Maximum dv/dt is ______ V/µs.

**Q7. (NAT)** To limit di/dt to 20 A/µs on a 100 V supply, the series inductance is ______ µH.

**Q8. (NAT)** A snubber with Rs = 20 Ω, Cs = 0.1 µF on a 400 V line gives an initial dv/dt of ______ V/µs (use V/(Rs·Cs)).

<details><summary>🔑 Solutions</summary>

**Q1: B** — False turn-on via junction capacitance. **Q2: B** — Parallel R-C snubber. **Q3: A** — Series inductor. **Q4: A** — i = Cj·(dv/dt). **Q5: B** — Limits capacitor discharge surge.

**Q6:** `dv/dt = 3×10⁻³/15×10⁻¹² = 2×10⁸ V/s = 200 V/µs`.
**Q7:** `L = 100/(20×10⁶) = 5×10⁻⁶ = 5 µH`.
**Q8:** `V/(Rs·Cs) = 400/(20×0.1×10⁻⁶) = 400/(2×10⁻⁶) = 2×10⁸ V/s = 200 V/µs`.

</details>

---

*Form factors, vector groups, and snubbers — the details that separate ranks. Precision compounds.* 💪

`🟩🟩🟩🟩🟩🟩🟩🟩⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜` Measurements **8/21**
`🟩🟩🟩🟩⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜` Machines **4/19**
`🟩🟩🟩🟩⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜` Power Electronics **4/19**
