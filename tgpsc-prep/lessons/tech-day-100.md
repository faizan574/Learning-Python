# ⚡ GATE Technical Revision — Day 100 (2026-10-29)

*Tech century! AC bridges for inductance (Maxwell, Hay, Anderson), single-phase transformer fundamentals and the EMF equation, and the power-device family (diode, BJT, MOSFET, IGBT, thyristor) that switches it all.*

📅 Tech Day 100 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics · 🎉 **Tech Day 100**

---

## 🔧 Measuring Instruments: AC Bridges I — Maxwell, Hay & Anderson

### 📖 Concept Deep Dive

**AC bridges** measure **inductance, capacitance and frequency** by null balance — four impedance arms, an AC source, and a detector (headphone/tuned amplifier). At balance **both magnitude and phase** must match, giving **two balance equations** (real & imaginary parts). General balance: `Z1·Z4 = Z2·Z3` (products of opposite arms equal).

**Maxwell's inductance-capacitance bridge.** Measures a **medium-Q inductor** by comparison with a **standard capacitor**. One arm has the unknown `Lx, Rx`; the opposite arm has a **parallel R-C** standard. Balance gives:

```
Lx = R2·R3·C4
Rx = R2·R3/R4
Quality factor Q = ωLx/Rx = ωC4·R4
```

Best for **medium Q (1–10)**. Limitation: needs a variable standard capacitor; **unsuitable for high-Q** coils (balance convergence poor) and **very low-Q**.

**Hay's bridge.** A modification using a **series R-C** in the arm (instead of parallel) — suited to **high-Q (> 10)** coils. Balance:

```
Lx = R2·R3·C4 / (1 + ω²C4²R4²)
Rx = ω²C4²R4·R2·R3 / (1 + ω²C4²R4²)
For high Q:  Lx ≈ R2·R3·C4   (the correction term → 0)
```

Hay's balance is **frequency-dependent** (ω appears), a drawback.

**Anderson's bridge.** A refinement of Maxwell's for measuring **inductance in terms of a standard capacitor** accurately over a **wide range (esp. low Q)**; it adds an extra arm/junction (point e) so a **fixed standard capacitor** can be used. More complex (more components, harder to balance) but accurate for **low-Q** coils.

| Bridge | Measures | Q range | Note |
|---|---|---|---|
| Maxwell L-C | L (via std C) | medium (1–10) | parallel RC; freq-independent |
| Hay | L (via std C) | high (>10) | series RC; freq-dependent |
| Anderson | L (via std C) | low Q, wide | fixed C; complex |

> 💎 **KEY RESULT** — General AC balance `Z1Z4 = Z2Z3`. **Maxwell**: `Lx = R2R3C4`, `Rx = R2R3/R4` (medium Q, freq-independent). **Hay**: for **high Q**, `Lx ≈ R2R3C4` (freq-dependent). **Anderson**: low-Q, wide range, fixed standard capacitor.

> 🧠 **MEMORY HOOK** — "**Maxwell = medium Q (parallel RC); Hay = high Q (series RC, freq-dependent); Anderson = low Q (fixed C, complex).** All: Lx = R2R3C4 (base)."

### 📐 Formula Sheet

| Quantity | Expression |
|---|---|
| General balance | `Z1·Z4 = Z2·Z3` |
| Maxwell Lx | `Lx = R2·R3·C4` |
| Maxwell Rx | `Rx = R2·R3/R4` |
| Maxwell Q | `Q = ωC4·R4` |
| Hay (high Q) | `Lx ≈ R2·R3·C4` |
| Q (Hay) | `Q = 1/(ωC4R4)` |

### 🧮 Solved Examples

**Example 1 — Maxwell bridge inductance.**
A Maxwell bridge balances with `R2 = 1000 Ω`, `R3 = 500 Ω`, `C4 = 0.5 µF`, `R4 = 2000 Ω`. Find `Lx`, `Rx` and `Q` at ω = 5000 rad/s.

```
Lx = R2·R3·C4 = 1000·500·0.5×10⁻⁶ = 500000·0.5×10⁻⁶ = 0.25 H
Rx = R2·R3/R4 = 1000·500/2000 = 500000/2000 = 250 Ω
Q = ωC4R4 = 5000·0.5×10⁻⁶·2000 = 5000·0.001 = 5
```

`Lx = 0.25 H`, `Rx = 250 Ω`, `Q = 5` (medium Q — Maxwell suitable).

**Example 2 — Q selects the bridge.**
A coil has `Q = 25` at the test frequency. Which bridge is most appropriate, and what is the approximate `Lx` if `R2 = 2 kΩ`, `R3 = 1 kΩ`, `C4 = 0.1 µF`?

```
High Q (>10) ⇒ use Hay's bridge.
Lx ≈ R2·R3·C4 = 2000·1000·0.1×10⁻⁶ = 2×10⁶·0.1×10⁻⁶ = 0.2 H
```

Use **Hay's bridge**; `Lx ≈ 0.2 H`.

### ⚠️ Common Traps

1. **Maxwell for high-Q coils** — Maxwell suits **medium Q**; high-Q needs **Hay's**.
2. **Hay's balance is frequency-independent** — Hay's is **frequency-dependent** (ω in the equations).
3. **Only one balance equation** — AC bridges need **two** (real & imaginary); both must be satisfied.
4. **Anderson for high Q** — Anderson is best for **low-Q**, wide range.
5. **Lx = R2R3/C4** — it is `Lx = R2·R3·C4` (product with C).
6. **Detector is a galvanometer** — AC bridges use a **headphone/tuned detector**, not a DC galvanometer.

### 📝 Test — Measuring Instruments (8 Q)

1. The general AC bridge balance condition is:
   (a) Z1+Z4 = Z2+Z3 (b) Z1·Z4 = Z2·Z3 (c) Z1/Z4 = Z2·Z3 (d) Z1·Z2 = Z3·Z4
2. Maxwell's inductance bridge is best for:
   (a) high-Q coils (b) medium-Q coils (c) capacitance (d) frequency
3. Hay's bridge is suited to:
   (a) low-Q (b) high-Q coils (c) resistance (d) medium Q only
4. In Maxwell's bridge, Lx equals:
   (a) R2R3/C4 (b) R2·R3·C4 (c) R2/C4 (d) R3·C4/R2
5. Hay's bridge balance is:
   (a) frequency-independent (b) frequency-dependent (c) DC only (d) Q-independent
6. **(NAT)** A Maxwell bridge: R2 = 400 Ω, R3 = 600 Ω, C4 = 1 µF. Find Lx (H).
7. **(NAT)** For Q6, R4 = 1000 Ω. Find Rx (Ω).
8. **(NAT)** A Maxwell bridge: ω = 10000 rad/s, C4 = 0.2 µF, R4 = 1000 Ω. Find Q.

<details><summary>🔑 Solutions</summary>

**1 → (b).** `Z1·Z4 = Z2·Z3`.

**2 → (b).** Medium-Q.

**3 → (b).** High-Q.

**4 → (b).** `Lx = R2·R3·C4`.

**5 → (b).** Frequency-dependent.

**6 (NAT).** `Lx = R2R3C4 = 400·600·1×10⁻⁶ = 240000×10⁻⁶ = 0.24 H`.

**7 (NAT).** `Rx = R2R3/R4 = 400·600/1000 = 240000/1000 = 240 Ω`.

**8 (NAT).** `Q = ωC4R4 = 10000·0.2×10⁻⁶·1000 = 10000·2×10⁻⁴ = 2`.

</details>

---

## 🔧 Electrical Machines: Transformers I — Single-Phase Fundamentals & EMF Equation

### 📖 Concept Deep Dive

A **transformer** is a static device transferring AC power between circuits by **mutual induction**, changing voltage/current levels at **constant frequency**. (Round-6 restart.)

**Construction.** A **laminated silicon-steel core** (reduces eddy/hysteresis loss) with **primary** and **secondary** windings. **Core type** (windings surround the core) and **shell type** (core surrounds the windings) are the two forms. Laminations + CRGO (cold-rolled grain-oriented) steel minimise losses.

**EMF equation.** With sinusoidal flux `φ = φm sinωt`, the induced EMF per winding:

```
E = 4.44 · f · N · φm       (φm = Bm·A, peak flux)
E1/E2 = N1/N2 = a   (turns ratio)
```

Derivation: `e = −N dφ/dt`; RMS of the induced EMF works out to `4.44 f N φm` (where 4.44 = 2π/√2).

**Ideal vs practical.** **Ideal:** no losses, no leakage, infinite core permeability — `V1/V2 = N1/N2 = I2/I1`. **Practical:** has **winding resistance (R1, R2)**, **leakage reactance (X1, X2)**, **finite magnetising current**, and **core losses**. Turns ratio:

```
a = N1/N2 = V1/V2 = I2/I1   (step-down if a>1)
```

**No-load operation.** With the secondary open, the primary draws a small **no-load current I0** = **magnetising component Im** (90° lagging, sets up flux) + **core-loss component Iw** (in phase with V1, supplies hysteresis+eddy loss):

```
I0 = √(Im² + Iw²);  no-load pf = cosφ0 = Iw/I0
Core loss (no-load) ≈ V1·I0·cosφ0
```

The no-load power factor is **very low (lagging)** because `Im >> Iw`.

**Losses.** **Core (iron) loss** = hysteresis (`∝ f·Bm^1.6`) + eddy (`∝ f²·Bm²·t²`); roughly **constant** (voltage/frequency fixed). **Copper loss** = `I²R`, **variable** with load.

| Quantity | Relation |
|---|---|
| EMF | `E = 4.44 f N φm` |
| Turns ratio | `a = N1/N2 = V1/V2 = I2/I1` |
| No-load current | `I0 = √(Im² + Iw²)` |
| Core loss | hysteresis + eddy (≈ constant) |
| Copper loss | `I²R` (variable) |

> 💎 **KEY RESULT** — `E = 4.44 f N φm`; `a = N1/N2 = V1/V2 = I2/I1`. No-load: `I0 = √(Im²+Iw²)`, low lagging pf; core loss ≈ constant, copper loss ∝ I². Hysteresis `∝ f·Bm^1.6`, eddy `∝ f²Bm²t²`.

> 🧠 **MEMORY HOOK** — "**E = 4.44 f N φm**; ideal V/N/I ratios; no-load I0 = mag (Im) + core-loss (Iw) components, low pf."

### 📐 Formula Sheet

| Quantity | Expression |
|---|---|
| EMF per winding | `E = 4.44 f N φm` |
| Peak flux | `φm = Bm·A` |
| Turns ratio | `a = N1/N2 = V1/V2 = I2/I1` |
| No-load current | `I0 = √(Im² + Iw²)` |
| No-load pf | `cosφ0 = Iw/I0` |
| Hysteresis loss | `Ph ∝ f·Bm^1.6` |
| Eddy loss | `Pe ∝ f²·Bm²·t²` |

### 🧮 Solved Examples

**Example 1 — EMF & turns.**
A 50 Hz single-phase transformer has a peak flux of **0.02 Wb** and **200 primary turns**. Find the primary EMF; if the secondary has 50 turns, find E2.

```
E1 = 4.44·f·N1·φm = 4.44·50·200·0.02 = 4.44·200 = 888 V
a = N1/N2 = 200/50 = 4 ⇒ E2 = E1/a = 888/4 = 222 V
```

Primary EMF **888 V**, secondary **222 V**.

**Example 2 — No-load current components.**
A transformer draws a no-load current of **0.5 A** at **0.2 pf lagging** from a 230 V supply. Find the magnetising and core-loss components, and the core loss.

```
Iw = I0·cosφ0 = 0.5·0.2 = 0.1 A   (core-loss component)
Im = I0·sinφ0 = 0.5·sin(78.46°) = 0.5·0.9798 = 0.49 A  (magnetising)
Core loss = V1·I0·cosφ0 = 230·0.5·0.2 = 23 W
```

Core-loss component **0.1 A**, magnetising **≈ 0.49 A**, core loss **23 W**.

### ⚠️ Common Traps

1. **EMF uses average flux** — the EMF equation uses **peak flux φm** (with the 4.44 factor).
2. **No-load pf is high** — it is **very low lagging** (Im >> Iw).
3. **Core loss varies with load** — it is ~**constant** (depends on V, f); copper loss is the load-varying one.
4. **Turns ratio for current** — current ratio is **inverse**: `I2/I1 = N1/N2 = a`.
5. **Transformer changes frequency** — frequency is **unchanged**.
6. **Hysteresis ∝ f²** — hysteresis `∝ f`; **eddy** `∝ f²`.

### 📝 Test — Electrical Machines (8 Q)

1. The transformer EMF equation is:
   (a) 4.44 f N φm (b) 1.11 f N φm (c) 2 f N φm (d) f N φm
2. The turns ratio a equals:
   (a) V2/V1 (b) V1/V2 = N1/N2 (c) I1/I2 (d) N2/N1
3. A transformer's no-load power factor is:
   (a) near unity (b) low lagging (c) leading (d) zero
4. Core (iron) loss in a transformer is approximately:
   (a) variable with load (b) constant (c) zero (d) ∝ I²
5. Eddy-current loss is proportional to:
   (a) f (b) f² (c) 1/f (d) f^1.6
6. **(NAT)** A 50 Hz transformer: φm = 0.01 Wb, N1 = 500. Find E1 (V).
7. **(NAT)** A transformer has N1 = 600, N2 = 150, V1 = 240 V. Find V2 (V).
8. **(NAT)** No-load: I0 = 0.8 A at 0.25 pf, V1 = 200 V. Find the core loss (W).

<details><summary>🔑 Solutions</summary>

**1 → (a).** `4.44 f N φm`.

**2 → (b).** `V1/V2 = N1/N2`.

**3 → (b).** Low lagging.

**4 → (b).** Approximately constant.

**5 → (b).** `f²`.

**6 (NAT).** `E1 = 4.44·50·500·0.01 = 4.44·250 = 1110 V`.

**7 (NAT).** `a = 600/150 = 4`; `V2 = 240/4 = 60 V`.

**8 (NAT).** `Core loss = V1·I0·cosφ0 = 200·0.8·0.25 = 40 W`.

</details>

---

## 🔧 Power Electronics: Basics & Devices — Diode, BJT, MOSFET, IGBT, Thyristor

### 📖 Concept Deep Dive

Power-electronic switches convert/control electrical power. (Round-6 restart.) The ideal switch: **zero on-drop, infinite off-resistance, instant switching, zero loss**. Real devices approximate this with trade-offs in **voltage/current rating, switching speed, and drive**.

**Power diode.** Uncontrolled (2-terminal) switch; conducts when forward-biased, blocks reverse. Types: **general-purpose, fast-recovery (for high-frequency/chopper), Schottky (low drop, low voltage)**. Key: **reverse recovery charge/time** (trr, Qrr) matters at high frequency.

**Power BJT.** Current-controlled (base current) 3-terminal switch; **NPN** common. Needs continuous base drive; moderate speed; suffers **secondary breakdown**. Largely superseded by MOSFET/IGBT.

**Power MOSFET.** **Voltage-controlled** (gate), **majority-carrier** device; **very fast switching**, simple drive, no secondary breakdown, positive temp-coefficient (easy paralleling). But **higher on-resistance (Rds(on))** at high voltage → best for **low-voltage, high-frequency** (SMPS, <~200 V, >100 kHz).

**IGBT (Insulated Gate Bipolar Transistor).** Combines **MOSFET gate (voltage drive, easy)** with **BJT output (low conduction drop, high current)** → **high voltage + high current + moderate-to-fast switching**. The workhorse for **medium-high power** (motor drives, inverters, ~600 V–6.5 kV, up to ~tens of kHz). Slight **tail current** at turn-off.

**Thyristor (SCR).** **Latching**, current-controlled 4-layer (PNPN) device; a gate pulse turns it **on** and it **stays on** until current drops below **holding current** (needs **commutation** to turn off). Highest **voltage/current ratings** (kV, kA) but **slow** (low frequency), used in **HVDC, large rectifiers, cycloconverters**. Family: TRIAC (bidirectional), GTO (gate turn-off), IGCT.

| Device | Control | Speed | Power | Use |
|---|---|---|---|---|
| Diode | none | — | wide | rectifier, freewheeling |
| BJT | current (base) | moderate | low-med | legacy |
| MOSFET | voltage (gate) | **fastest** | low V, HF | SMPS |
| IGBT | voltage (gate) | fast | **high** | drives, inverters |
| Thyristor | current (gate, latch) | **slow** | **highest** | HVDC, big rectifiers |

> 💎 **KEY RESULT** — **MOSFET** = voltage-driven, fastest, low-voltage/HF (high Rds(on) at HV). **IGBT** = MOSFET gate + BJT conduction → high-voltage/current, drives/inverters. **Thyristor** = latching, highest ratings, slow (needs commutation). Diode = uncontrolled.

> 🧠 **MEMORY HOOK** — "**MOSFET = fast/low-V (SMPS); IGBT = high-power drives; thyristor = highest-V, slow, latching (HVDC); BJT = legacy.**"

### 📐 Formula Sheet

| Device | Key fact |
|---|---|
| Ideal switch | 0 on-drop, ∞ off-R, 0 loss, instant |
| MOSFET | voltage gate; `Rds(on)` conduction loss; fastest |
| IGBT | voltage gate + low Vce(sat); tail current |
| Thyristor | latches on; off needs I < holding or commutation |
| Diode | reverse recovery `Qrr, trr` at HF |
| Conduction loss | `P = Von·Iavg` (+ `I²R` for MOSFET) |

### 🧮 Solved Examples

**Example 1 — MOSFET conduction loss.**
A power MOSFET with `Rds(on) = 0.05 Ω` carries an RMS current of **10 A**. Find the conduction loss.

```
P_cond = Irms²·Rds(on) = 10²·0.05 = 100·0.05 = 5 W
```

Conduction loss **= 5 W**.

**Example 2 — IGBT conduction loss.**
An IGBT with on-state voltage `Vce(sat) = 2 V` carries an average current of **40 A**. Find the conduction loss.

```
P_cond = Vce(sat)·Iavg = 2·40 = 80 W
```

Conduction loss **= 80 W** (IGBT loss ≈ Vce·I, unlike the MOSFET's I²R).

### ⚠️ Common Traps

1. **MOSFET is current-controlled** — it is **voltage-controlled** (gate); BJT/thyristor use current.
2. **Thyristor turns off by removing gate** — no; once latched it needs **current < holding** or **commutation**.
3. **MOSFET best for high voltage** — high Rds(on) at HV makes it best for **low-voltage/HF**; use **IGBT** for high power.
4. **IGBT conduction loss = I²R** — IGBT ≈ **Vce(sat)·I** (BJT-like drop); MOSFET is I²R.
5. **Diode is controllable** — the **diode is uncontrolled** (no gate).
6. **BJT needs no continuous drive** — a BJT needs **continuous base current** (MOSFET/IGBT need only gate voltage).

### 📝 Test — Power Electronics (8 Q)

1. A power MOSFET is:
   (a) current-controlled (b) voltage-controlled (c) uncontrolled (d) latching
2. The device with the highest voltage/current ratings is the:
   (a) MOSFET (b) BJT (c) thyristor (d) diode
3. An IGBT combines the gate of a MOSFET with the conduction of a:
   (a) diode (b) BJT (c) thyristor (d) TRIAC
4. A thyristor turns off when:
   (a) gate removed (b) anode current < holding current (c) gate reversed (d) never
5. MOSFET conduction loss is modeled as:
   (a) Vce·I (b) Irms²·Rds(on) (c) constant (d) zero
6. **(NAT)** A MOSFET Rds(on) = 0.1 Ω carries 8 A RMS. Find conduction loss (W).
7. **(NAT)** An IGBT Vce(sat) = 1.8 V carries 50 A average. Find conduction loss (W).
8. **(NAT)** A diode with 1 V drop carries 20 A average. Find its conduction loss (W).

<details><summary>🔑 Solutions</summary>

**1 → (b).** Voltage-controlled.

**2 → (c).** Thyristor.

**3 → (b).** BJT.

**4 → (b).** Anode current below holding current (or commutation).

**5 → (b).** `Irms²·Rds(on)`.

**6 (NAT).** `P = 8²·0.1 = 64·0.1 = 6.4 W`.

**7 (NAT).** `P = 1.8·50 = 90 W`.

**8 (NAT).** `P = 1·20 = 20 W`.

</details>

---

## 📊 Tech Progress

```
Measurements      [████████████████░░]  Round 5 · topic 16/20 (AC bridges I)
Electrical Mach.  [█░░░░░░░░░░░░░░░░░░]  Round 6 · topic  1/19 (Transformers I)
Power Electronics [█░░░░░░░░░░░░░░░░░░]  Round 6 · topic  1/19 (Basics & devices)
```

> 🎯 **Day 100 one-liners:** (1) **Maxwell L-C (medium Q, Lx=R2R3C4); Hay (high Q, freq-dep); Anderson (low Q, fixed C).** (2) **Transformer E = 4.44 f N φm; a = V1/V2 = N1/N2 = I2/I1; no-load I0 = √(Im²+Iw²), low pf.** (3) **MOSFET = fast/low-V; IGBT = high-power drives; thyristor = highest-V, latching/slow.**

*Correctness over length — derive, don't memorise blindly; verify any "verify" figure. Onward. ⚡*
