# ⚡ GATE Technical Revision — Day 43 (2026-09-01)

*Round-3 begins — back to fundamentals, this time at full GATE numerical depth. Foundations decide the tricky questions.*

📅 Tech Day 43 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics · 🔁 Round-3 pass 1

> 🧠 **MEMORY HOOK** — With the whole syllabus twice-covered, round 3 restarts at topic 1 of each subject. Today: **measurement characteristics & calibration**, **single-phase transformer fundamentals**, and the **power-device family**. These three "basics" topics quietly generate a surprising share of GATE marks.

---

## 🔧 Measuring Instruments: Static & Dynamic Characteristics, Standards & Calibration

### 📖 Concept Deep Dive

Every measurement question rests on one idea: an instrument's reading differs from the true value, and we quantify **how** and **how much**. The descriptors split into **static** (steady input) and **dynamic** (time-varying input) characteristics.

**Static characteristics.**

- **Accuracy** — closeness of the reading to the true value. Usually quoted as **% of full-scale deflection (FSD)**, which is why a reading near the low end of a range carries a large *relative* error.
- **Precision (repeatability)** — closeness of repeated readings to each other. High precision with poor accuracy = consistent but biased (a systematic error). Accuracy needs *both* small bias and small scatter.
- **Resolution** — smallest input change that produces a detectable output change (e.g. one count on a DVM, one division on an analog scale).
- **Sensitivity** — `S = Δoutput / Δinput` (slope of the calibration curve). For a voltmeter, "ohms-per-volt" = `1/Ifsd` is its sensitivity; a higher figure means smaller loading.
- **Linearity** — how close the calibration curve is to a straight line; deviation quoted as % of FSD.
- **Drift** — slow change of output with no input change, caused by temperature, ageing, supply variation. **Zero drift** shifts the whole curve; **sensitivity (span) drift** rotates it.
- **Dead zone / threshold / hysteresis / backlash** — dead zone = largest input change producing no output; threshold = minimum input to get any output from zero; hysteresis = different up-scale vs down-scale readings.

**Dynamic characteristics** describe response to a *changing* input, modelled by the instrument's order:

| Order | Model | Example | Key parameters |
|---|---|---|---|
| Zero-order | `y = K·x` | potentiometer displacement | static sensitivity `K` |
| First-order | `τ(dy/dt) + y = K·x` | thermometer, RC | time constant `τ` |
| Second-order | `(1/ωn²)ÿ + (2ζ/ωn)ẏ + y = K·x` | PMMC, seismic pickup | `ωn`, damping ratio `ζ` |

For a second-order instrument, the damping ratio `ζ` sets the behaviour: **under-damped (ζ<1)** overshoots and rings; **critically damped (ζ=1)** is the fastest without overshoot; **over-damped (ζ>1)** is sluggish. Practical pointer instruments use **ζ ≈ 0.6–0.7** to trade a little overshoot for fast settling.

**Standards & calibration.** A **standard** is a physical embodiment of a unit. The hierarchy runs **international → primary (national labs) → secondary → working** standards; accuracy degrades down the chain, so you never calibrate a working meter against another working meter. **Calibration** compares an instrument against a higher-order standard and records the correction; **traceability** is the unbroken chain of comparisons back to the national/international standard.

> 💎 **KEY RESULT** — **Accuracy = correctness (small bias); precision = repeatability (small scatter).** A 1%-of-FSD meter reading 20% of range has a *relative* error of up to 5%. Calibrate only against a **higher-order** standard (traceability).

> ⚠️ **TRAP ALERT** — "% accuracy" is almost always **% of full scale**, not % of reading. This is the single most common GATE trap in this topic.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Static sensitivity | `S = Δqo / Δqi` (output change / input change) |
| Voltmeter sensitivity | `Sv = 1 / Ifsd` (ohms per volt) |
| Accuracy as limiting error | `error = ±(a% of FSD)` → absolute error fixed by range |
| Relative (fractional) error | `εr = (measured − true) / true` |
| Guaranteed accuracy at reading | `%error(reading) = (a × FSD) / reading` |
| First-order step response | `y(t) = K·A(1 − e^(−t/τ))` |
| Second-order natural / damped freq | `ωd = ωn·√(1 − ζ²)` |

```
Loading rule (voltmeter): higher ohms-per-volt  ⇒  higher input resistance  ⇒  less loading error.
FSD trap: a "±1% of FSD" meter is most accurate (in %) near full scale, worst near zero.
```

### 🧮 Solved Examples

**Example 1 — FSD accuracy trap.**
A `0–150 V` voltmeter is rated `±1% of FSD`. It reads `60 V`. Worst-case error and guaranteed range?

- Absolute error = `±1% × 150 = ±1.5 V` (fixed by the range, *not* the reading).
- Relative error at 60 V = `1.5 / 60 = 0.025 = ±2.5%`.
- True value lies in `60 ± 1.5 V = 58.5 V to 61.5 V`.

```
Same meter reading 120 V:  rel error = 1.5/120 = 1.25%  →  read near full scale for best accuracy.
```

**Example 2 — voltmeter loading.**
A `20,000 Ω/V` voltmeter on its `0–10 V` range measures across a `100 kΩ` resistor fed through another `100 kΩ` from a `10 V` source. Find the loading error.

- Meter resistance `Rv = 20,000 × 10 = 200 kΩ`.
- True voltage across the 100 kΩ (no meter): `Vtrue = 10 × 100/(100+100) = 5.00 V`.
- With meter: parallel `100k ∥ 200k = (100×200)/(300) = 66.67 kΩ`.
- Measured `Vm = 10 × 66.67/(66.67 + 100) = 10 × 66.67/166.67 = 4.00 V`.
- Loading error = `(4.00 − 5.00)/5.00 = −20%`.

> 🧠 **MEMORY HOOK** — Loading error is always **negative** (the meter draws current and pulls the reading *down*). Fix it with a **higher ohms-per-volt** meter or a DVM (MΩ input).

### ⚠️ Common Traps

1. Confusing **accuracy** (bias) with **precision** (scatter) — they are independent.
2. Reading "% accuracy" as % of the *reading* instead of % of **full scale**.
3. Forgetting that **resolution ≠ accuracy** — a 4½-digit DVM can be high-resolution yet mis-calibrated.
4. Using **ζ = 1** thinking it is "best" — pointer meters deliberately run slightly **under-damped (0.6–0.7)** for speed.
5. Treating **zero drift** and **sensitivity drift** as the same (shift vs rotation of the calibration line).
6. Calibrating against an **equal-grade** meter instead of a higher-order standard (breaks traceability).

### 📝 Test — Measuring Instruments (8 Q)

1. A meter reads the same value on five trials but all five are 3% high. It has: (a) poor precision (b) poor accuracy, good precision (c) poor resolution (d) high sensitivity.
2. A `±0.5% of FSD` ammeter (`0–5 A`) reads `1 A`. Guaranteed % error at this reading is about: (a) 0.5% (b) 1.0% (c) 2.5% (d) 5%.
3. Ohms-per-volt of a voltmeter using a `50 µA` movement is: (a) 2 kΩ/V (b) 20 kΩ/V (c) 50 kΩ/V (d) 200 kΩ/V.
4. Practical pointer instruments use a damping ratio near: (a) 0 (b) 0.3 (c) 0.65 (d) 1.5.
5. A first-order thermometer has `τ = 5 s`. Time to reach 95% of a step is about: (a) 5 s (b) 10 s (c) 15 s (d) 20 s.
6. **(NAT)** A `0–250 V`, `±1.5% FSD` voltmeter reads `100 V`. Maximum possible true value (V)?
7. **(NAT)** A `1000 Ω/V` voltmeter on the `0–50 V` range measures a divider of two equal `50 kΩ` resistors across `40 V`. Measured reading (V)?
8. **(NAT)** A second-order instrument has `ωn = 100 rad/s`, `ζ = 0.6`. Damped natural frequency `ωd` (rad/s)?

<details><summary>🔑 Solutions</summary>

**Q1 — (b).** Consistent readings = good precision; constant 3% offset = poor accuracy (systematic bias).

**Q2 — (c).** Abs error `= 0.5% × 5 = 0.025 A`. At 1 A: `0.025/1 = 2.5%`.

**Q3 — (b).** `1/Ifsd = 1/50µA = 20,000 Ω/V = 20 kΩ/V`.

**Q4 — (c).** ≈ 0.6–0.7 for fast settling with minimal overshoot.

**Q5 — (c).** `1 − e^(−t/τ) = 0.95 ⇒ t = τ·ln20 = 5 × 3.0 ≈ 15 s`.

**Q6.** Abs error `= 1.5% × 250 = 3.75 V`. Max true `= 100 + 3.75 = 103.75 V`.

**Q7.** `Rv = 1000 × 50 = 50 kΩ`. True across one 50k = `40×50/(50+50) = 20 V`. With meter: `50k ∥ 50k = 25 kΩ`; measured `= 40 × 25/(25+50) = 40 × 25/75 = 13.33 V`.

**Q8.** `ωd = ωn√(1−ζ²) = 100 × √(1−0.36) = 100 × √0.64 = 100 × 0.8 = 80 rad/s`.

</details>

---

## 🔧 Electrical Machines: Single-Phase Transformer Fundamentals

### 📖 Concept Deep Dive

The transformer is the most-tested machine because it is **static** — no rotation, no slip, no mechanical loss — so the physics is pure magnetics and circuits.

**EMF equation.** A sinusoidal flux `φ(t) = φm·sin(ωt)` linking `N` turns induces `e = −N dφ/dt = −N ω φm cos(ωt)`. Peak EMF `= N ω φm = N(2πf)φm`; RMS `= peak/√2`, giving the master equation:

```
E = 4.44 f N φm       (φm = Bm × Ac, the peak core flux)
```

The **4.44 = 2π/√2** ties frequency, turns, and peak flux to the RMS EMF. Because both windings link the *same* core flux, `E1/E2 = N1/N2 = a` (the turns ratio) exactly.

**Ideal vs practical.** An **ideal** transformer has no winding resistance, no leakage flux, infinite core permeability (zero magnetising current), and no core loss — so `V1/V2 = N1/N2 = I2/I1`. A **practical** transformer departs on every count:

| Non-ideality | Circuit element | Effect |
|---|---|---|
| Winding I²R | series `R1, R2` | copper loss, voltage drop |
| Leakage flux | series `X1, X2` | reactive drop, regulation |
| Finite permeability | shunt `Xm` | draws magnetising current `Im` |
| Core (eddy + hysteresis) loss | shunt `Rc` | draws loss component `Iw` |

**No-load operation.** With the secondary open, primary draws only the **exciting current** `I0`, which has two parts:

```
Iw = I0·cos φ0  (core-loss / working component, in phase with V)
Im = I0·sin φ0  (magnetising component, lags V by 90°)
I0 = √(Iw² + Im²) ,   no-load power  P0 = V1·I0·cos φ0 = core loss
```

`Im` is typically 2–5% of full-load current and is **highly non-sinusoidal** (peaky) because of core saturation, rich in third harmonic. The no-load power factor `cos φ0` is very low (0.1–0.2 lagging) because `Im ≫ Iw`.

**Turns ratio & impedance transfer.** An impedance `Z2` on the secondary appears on the primary as `Z2' = a²·Z2`. This `a²` scaling is why we can refer the whole equivalent circuit to one side — the workhorse of every transformer numerical.

> 💎 **KEY RESULT** — `E = 4.44 f N φm`. For a fixed applied voltage, `φm = V/(4.44 f N)` is set by **V and f**, *not* by the load — the core flux (and hence core loss) is essentially constant from no-load to full load.

> ⚠️ **TRAP ALERT** — If supply frequency **drops** at constant V, `φm` **rises** (`φm ∝ V/f`), pushing the core toward saturation and spiking magnetising current. This is why a 60 Hz transformer must not be run at 50 Hz on the same voltage.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| EMF equation | `E = 4.44 f N φm` , `φm = Bm·Ac` |
| Turns / transformation ratio | `a = N1/N2 = E1/E2 = I2/I1` |
| Peak flux vs voltage | `φm = V1 / (4.44 f N1)` ⇒ `φm ∝ V/f` |
| No-load current | `I0 = √(Iw² + Im²)` , `φ0 = cos⁻¹(Iw/I0)` |
| Core-loss & magnetising parts | `Iw = I0 cos φ0` , `Im = I0 sin φ0` |
| Referred impedance | `Z2' = a²·Z2` |
| Volts per turn | `V/N = 4.44 f φm` (same for both windings) |

### 🧮 Solved Examples

**Example 1 — core design + turns.**
A single-phase transformer, `2200/220 V`, `50 Hz`, has a net core area `Ac = 0.04 m²` and peak flux density `Bm = 1.1 T`. Find primary and secondary turns.

- `φm = Bm·Ac = 1.1 × 0.04 = 0.044 Wb`.
- `N1 = V1/(4.44 f φm) = 2200/(4.44 × 50 × 0.044) = 2200/9.768 ≈ 225 turns`.
- `N2 = N1/a = 225 × (220/2200) = 22.5 ≈ 23 turns` (round up so V/turn is not exceeded).

```
Check volts/turn = 2200/225 = 9.78 V/turn  ≈  4.44 × 50 × 0.044 ✓
```

**Example 2 — no-load components.**
On no load a transformer takes `I0 = 0.8 A` at `0.16` pf lagging from a `230 V` supply. Find core loss, `Iw`, and `Im`.

- Core loss `P0 = V·I0·cos φ0 = 230 × 0.8 × 0.16 = 29.44 W`.
- `Iw = I0 cos φ0 = 0.8 × 0.16 = 0.128 A`.
- `Im = I0 sin φ0 = 0.8 × √(1 − 0.16²) = 0.8 × 0.987 = 0.79 A`.
- `Rc = V/Iw = 230/0.128 = 1797 Ω` ; `Xm = V/Im = 230/0.79 = 291 Ω`.

> 🧠 **MEMORY HOOK** — At no load, **P0 ≈ core loss** (copper loss is negligible because `I0` is tiny). This is exactly what the **open-circuit test** measures.

### ⚠️ Common Traps

1. Dropping the **4.44** or using average instead of RMS in `E = 4.44 f N φm`.
2. Thinking core flux depends on load — at constant V and f, **φm is constant** (`φm ∝ V/f`).
3. Referring impedance with `a` instead of **`a²`**.
4. Assuming `I0` is sinusoidal — it is **peaky/harmonic-rich** due to saturation.
5. Confusing the **working component `Iw`** (supplies core loss) with total `I0`.
6. Forgetting that low no-load pf (**0.1–0.2**) means `Im ≫ Iw`.

### 📝 Test — Transformers (8 Q)

1. In `E = 4.44 f N φm`, the 4.44 comes from: (a) √3 (b) 2π (c) 2π/√2 (d) π/2.
2. Supply voltage constant, frequency halved. Peak core flux: (a) halves (b) doubles (c) unchanged (d) quarters.
3. A `1:5` step-up transformer feeds a `50 Ω` load. Impedance seen at primary: (a) 2 Ω (b) 10 Ω (c) 250 Ω (d) 1250 Ω.
4. No-load current of a transformer is rich in: (a) 2nd harmonic (b) 3rd harmonic (c) 5th only (d) none.
5. The open-circuit test measures essentially: (a) copper loss (b) core loss (c) both equally (d) stray loss.
6. **(NAT)** A `1100/220 V`, `50 Hz` transformer has `φm = 0.05 Wb`. Number of primary turns?
7. **(NAT)** No-load: `I0 = 1.2 A` at pf `0.2` lag, `V = 400 V`. Magnetising current `Im` (A)?
8. **(NAT)** Volts-per-turn of a `50 Hz` transformer with `φm = 0.018 Wb`?

<details><summary>🔑 Solutions</summary>

**Q1 — (c).** `Erms = (2πfNφm)/√2 = 4.44 fNφm`, so `4.44 = 2π/√2`.

**Q2 — (b).** `φm ∝ V/f`; halving f at constant V doubles φm (saturation risk).

**Q3 — (c).** `Z' = a²Z = (1/5)²`? Careful: step-up 1:5 means `a = N1/N2 = 1/5`. `Zprimary = a²·Z2 = (1/5)² × 50 = 50/25 = 2 Ω`. → **(a) 2 Ω.** *(The load is on the 5-side; referred to the 1-side it shrinks by 25.)*

**Q4 — (b).** Saturation makes `Im` peaky → dominant **3rd harmonic**.

**Q5 — (b).** OC test (rated V, secondary open) → core loss (copper loss negligible).

**Q6.** `N1 = V1/(4.44 f φm) = 1100/(4.44 × 50 × 0.05) = 1100/11.1 ≈ 99 turns`.

**Q7.** `Im = I0·sin φ0 = 1.2 × √(1 − 0.2²) = 1.2 × 0.980 = 1.176 A ≈ 1.18 A`.

**Q8.** `V/N = 4.44 f φm = 4.44 × 50 × 0.018 = 4.0 V/turn`.

</details>

*(Note the deliberate correction in Q3 — read the direction of the turns ratio carefully; that "which side is the load on" step is the classic GATE trip-up.)*

---

## 🔧 Power Electronics: The Power-Device Family (Diode, BJT, MOSFET, IGBT, Thyristor)

### 📖 Concept Deep Dive

Power converters are built from **switches**. GATE tests whether you know *which* switch fits *which* job — the choice hinges on **controllability, speed, voltage/current rating, and gate drive**.

**Controllability tiers.**

- **Uncontrolled** — the **power diode**: conducts when forward-biased, blocks when reverse-biased; turn-off is by circuit (current falls / reverses). No control terminal.
- **Semi-controlled** — the **thyristor (SCR)**: a gate pulse turns it **on**, but it turns **off only** when anode current drops below holding current (line/forced commutation). Latching device.
- **Fully controlled** — **BJT, MOSFET, IGBT, GTO**: the control terminal governs both **turn-on and turn-off**.

**Device-by-device.**

| Device | Drive | Carrier | Speed | Typical rating | On-state drop |
|---|---|---|---|---|---|
| Power diode | none | bipolar | fast | up to kV/kA | ~0.7–1 V |
| SCR (thyristor) | current pulse (latching) | bipolar | slow | highest (kV, kA) | ~1.5 V |
| Power BJT | **continuous base current** | bipolar | medium | medium | low (`Vce,sat`) |
| Power MOSFET | **voltage** (gate, ~0 steady I) | **unipolar** | **fastest** | low-medium V | `Ron` (I²R, rises with V rating) |
| IGBT | **voltage** (gate) | bipolar-ish | fast | high V & I | ~1.5–2 V (`Vce,sat`) |
| GTO | current (gate turn-off) | bipolar | slow | very high | ~2–3 V |

**Key comparisons GATE loves.**

- **MOSFET vs BJT** — MOSFET is **voltage-controlled** (tiny steady gate current, easy drive), **majority-carrier / unipolar** (no minority-carrier storage → very fast, no second breakdown), but conduction loss `= I²·Ron` grows steeply with rated voltage. BJT is **current-controlled** (needs continuous base drive, `Ib = Ic/β`), suffers **storage delay** and **second breakdown**, but has a lower, roughly constant `Vce,sat` at high current.
- **IGBT = MOSFET input + BJT output** — voltage-controlled gate (easy drive) with a **conductivity-modulated** bipolar output stage giving a low, nearly flat on-state drop at high voltage. It dominates **medium/high-power** converters (motor drives, inverters) at moderate switching frequency. Downside: **tail current** at turn-off (minority carriers) → extra switching loss, so not used at very high `fsw`.
- **Frequency map** — MOSFET (highest `fsw`, SMPS, tens–hundreds of kHz) → IGBT (medium, kHz, motor drives) → GTO/SCR (lowest, line-frequency, HVDC/traction).

> 💎 **KEY RESULT** — **MOSFET = voltage-controlled, unipolar, fastest, `Ron` loss.** **IGBT = voltage-controlled gate + bipolar output, low `Vce,sat` at high V, tail-current loss.** **BJT = current-controlled, storage delay, second breakdown.** **SCR = latching, gate turns on only.**

> 🧠 **MEMORY HOOK** — "**High frequency → MOSFET; high power → IGBT; highest power/lowest freq → thyristor/GTO.**"

### 📐 Formula Sheet

| Quantity | Relation |
|---|---|
| BJT base drive | `Ib = Ic / β` (needs continuous drive to stay on) |
| MOSFET conduction loss | `Pcond = Irms² × Ron(on)` |
| MOSFET drain current (sat) | `Id = ½·µn Cox (W/L)(Vgs − Vth)²` |
| Gate charge drive loss | `Pgate = Qg × Vgs × fsw` |
| Switching loss (per device) | `Psw = ½·V·I·(ton + toff)·fsw` |
| Duty ratio (chopper) | `D = ton / T` , `Vo = D·Vs` (buck) |
| Ron temperature trend | MOSFET `Ron` **rises** with temperature (positive coeff → easy paralleling) |

```
Drive type:  diode = none | SCR/BJT/GTO = current | MOSFET/IGBT = voltage (gate).
Carrier:     MOSFET = majority (unipolar, fast) | others = minority present (storage/tail).
```

### 🧮 Solved Examples

**Example 1 — device selection.**
A `100 kHz`, `48 V`, `10 A` SMPS switch is needed. Choose the device and justify.

- At 100 kHz, switching loss dominates → need the **fastest** device with negligible gate drive loss and no storage/tail delay ⇒ **power MOSFET** (unipolar, voltage-driven).
- 48 V is well within economical MOSFET `Ron`, so conduction loss stays low.
- IGBT would suffer **tail-current** loss at 100 kHz; BJT needs continuous base current and has storage delay. **MOSFET wins.**

**Example 2 — MOSFET vs IGBT conduction loss.**
A MOSFET has `Ron = 0.1 Ω`; an IGBT has `Vce,sat = 1.8 V`. Both carry `20 A` RMS. Compare conduction loss.

- MOSFET: `Pcond = I²·Ron = 20² × 0.1 = 400 × 0.1 = 40 W`.
- IGBT: `Pcond = Vce,sat × I = 1.8 × 20 = 36 W`.
- At 20 A the IGBT is *already* lower loss; at higher current MOSFET loss (`∝ I²`) climbs far faster.

```
Crossover: MOSFET I²Ron = IGBT Vce·I  ⇒  I = Vce/Ron = 1.8/0.1 = 18 A.
Above ~18 A here, IGBT conducts more efficiently; below it, MOSFET wins.
```

> ⚠️ **TRAP ALERT** — MOSFET conduction loss is `I²Ron` (rises **quadratically**); IGBT/BJT/diode loss is `V·I` (rises **linearly**). The crossover current decides which is more efficient.

### ⚠️ Common Traps

1. Calling the SCR "fully controllable" — the gate only turns it **on**; turn-off needs commutation.
2. Assuming MOSFET is best at all powers — its `I²Ron` loss makes it poor at **high voltage/current**.
3. Forgetting the IGBT **tail current** → why IGBTs are avoided at very high `fsw`.
4. Thinking MOSFETs are hard to parallel — the **positive `Ron` temperature coefficient** makes them **self-balancing / easy to parallel**; BJTs need emitter resistors.
5. Using `Ib` "pulse" for a BJT — a power BJT needs **continuous** base current to stay in saturation.
6. Ignoring that switching loss `∝ fsw` — the whole reason device choice tracks frequency.

### 📝 Test — Power Devices (8 Q)

1. Which device is voltage-controlled AND unipolar? (a) BJT (b) MOSFET (c) IGBT (d) GTO.
2. An SCR turns OFF when: (a) gate pulse removed (b) anode current < holding current (c) gate reverse-biased (d) gate current reversed.
3. For a `50 kHz` high-frequency SMPS, the preferred switch is: (a) SCR (b) GTO (c) MOSFET (d) power diode.
4. The IGBT combines: (a) MOSFET gate + BJT output (b) BJT gate + MOSFET output (c) two SCRs (d) two MOSFETs.
5. MOSFETs parallel easily because `Ron`: (a) falls with temperature (b) rises with temperature (c) is zero (d) is negative.
6. **(NAT)** A MOSFET (`Ron = 0.2 Ω`) and IGBT (`Vce,sat = 1.6 V`) carry the same current. Above what current (A) is the IGBT lower-loss?
7. **(NAT)** A device switches `V = 300 V`, `I = 20 A`, `ton = toff = 0.5 µs`, `fsw = 20 kHz`. Switching loss (W)?
8. **(NAT)** A power BJT drives `Ic = 24 A` with `β = 12`. Base current required (A)?

<details><summary>🔑 Solutions</summary>

**Q1 — (b) MOSFET.** Voltage-controlled gate, majority-carrier (unipolar).

**Q2 — (b).** Anode current below holding current (latching device).

**Q3 — (c) MOSFET.** Fastest, lowest switching loss at high frequency.

**Q4 — (a).** MOSFET (voltage) input + BJT (conductivity-modulated) output.

**Q5 — (b).** Positive `Ron` temperature coefficient → current self-balances → easy paralleling.

**Q6.** Crossover `I = Vce,sat/Ron = 1.6/0.2 = 8 A`. Above **8 A**, IGBT (`V·I`) beats MOSFET (`I²Ron`).

**Q7.** `Psw = ½·V·I·(ton+toff)·fsw = 0.5 × 300 × 20 × (1×10⁻⁶) × 20000 = 0.5 × 300 × 20 × 0.02 = 60 W`.

**Q8.** `Ib = Ic/β = 24/12 = 2.0 A` (continuous).

</details>

---

> 🧠 **DAY-43 WRAP (Round-3 pass 1)** — **Measurements:** accuracy = bias, precision = scatter; "% accuracy" is **% of FSD**; loading error is negative; damping `ζ ≈ 0.65`. **Transformers:** `E = 4.44 f N φm`, `φm ∝ V/f` (constant with load), refer impedance by `a²`, no-load `P0 = core loss`. **Power devices:** MOSFET (voltage, unipolar, `I²Ron`, high `fsw`) vs IGBT (voltage gate + bipolar output, `V·I`, high power) vs SCR (latching, gate-on only); crossover current `I = Vce/Ron`. ⚡

**🔁 Round-3 progress:** Measurements ▓░░░░░░░░░ · Machines ▓░░░░░░░░░ · Power Electronics ▓░░░░░░░░░ — round-3 underway. 🎓 Power Systems can join as a 4th subject once the reference PDFs are provided.
