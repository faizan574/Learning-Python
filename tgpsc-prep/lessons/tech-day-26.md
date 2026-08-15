# ⚡ GATE Technical Revision — Day 26 (2026-08-15)

*Three subjects, one sitting — deep revision with GATE-level numericals and full worked solutions.*

📅 Tech Day 26 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics

> 🧠 **MEMORY HOOK** — Today's trio is the "three T's of exam torque": **T**orque of a PMMC coil, the **T**ransformer efficiency curve, and the **T**hyristor's regenerative turn-on. Master when each *balances* and you own the marks.

---

## 🔧 Measuring Instruments: PMMC Instruments — Torque, Range Extension & Swamping

### 📖 Concept Deep Dive

The **Permanent Magnet Moving Coil (PMMC)** instrument, also called the **D'Arsonval movement**, is the workhorse DC indicating instrument. A light rectangular coil of `N` turns, wound on an aluminium former, is pivoted in the radial air-gap field of a permanent magnet. When current `I` flows, each conductor experiences a force `F = B·I·L`, producing a **deflecting torque**.

Because the pole shoes are shaped to give a **radial (uniform) field**, `B` is constant over the coil's travel, so:

```
Td = N · B · A · I      (deflecting torque, N·m)
```

The controlling torque comes from two **spiral springs** (which also carry current in/out), giving `Tc = K·θ` where `K` is the spring constant. At steady deflection `Td = Tc`:

```
θ = (N · B · A / K) · I   ⇒   θ ∝ I   (LINEAR / uniform scale)
```

**Damping** is provided by **eddy currents** induced in the aluminium former as it moves — elegant because it needs no extra parts.

Key properties worth memorising:

| Property | PMMC behaviour | Reason |
|---|---|---|
| Supply type | **DC only** | On AC, torque reverses each half-cycle → average torque = 0 |
| Scale | **Uniform (linear)** | θ ∝ I with radial field |
| Torque/weight | High | Strong permanent-magnet field |
| Power consumption | Very low | Sensitive movement |
| Reading responds to | **Average (DC) value** | Cannot read RMS of AC directly |

**Range extension.** The bare movement carries only a few mA at full-scale (`Ifsd`), with coil resistance `Rm`.
- **Ammeter** → parallel **shunt** `Rsh` diverts excess current. With multiplying power `m = I/Im`:
- **Voltmeter** → series **multiplier** `Rse` drops the excess voltage.

**Swamping resistance.** The copper coil's resistance rises with temperature (`α_Cu ≈ 0.004 /°C`), changing the reading. A series resistor of **manganin** (near-zero temperature coefficient), typically in ratio ≈ **20:1 (manganin:copper)**, "swamps" the copper so the *combined* temperature coefficient is small — this is a temperature-error compensation, not a range change.

> 💎 **KEY RESULT** — PMMC gives a **uniform scale** and responds to the **average** value. It is inherently a **DC** instrument; add a rectifier to read AC (then it responds to average, scaled by form factor for RMS).

> ⚠️ **TRAP ALERT** — A rectifier-type PMMC AC voltmeter is calibrated in RMS **assuming a sine wave** (form factor 1.11). For a non-sinusoidal wave it reads `1.11 × (actual average)`, which is **not** the true RMS.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Deflecting torque | `Td = N·B·A·I` |
| Deflection | `θ = N·B·A·I / K` |
| Current sensitivity | `Si = θ/I = N·B·A / K` |
| Ammeter shunt | `Rsh = Im·Rm / (I − Im) = Rm / (m − 1)` , `m = I/Im` |
| Voltmeter multiplier | `Rse = V/Im − Rm = Rm·(m − 1)` , `m = V/Vm` |
| Ohms-per-volt (sensitivity) | `Ω/V = 1 / Ifsd` |
| Shunt multiplying power | `m = 1 + Rm/Rsh` |

### 🧮 Solved Examples

**Example 1 — Shunt design.** A PMMC movement reads full-scale at `Im = 15 mA`, `Rm = 5 Ω`. Find the shunt to extend range to `0–5 A`.

```
m  = I/Im = 5 / 0.015 = 333.33
Rsh = Rm/(m − 1) = 5 / 332.33 = 0.01505 Ω  ≈ 15.05 mΩ
```

**Example 2 — Multiplier & sensitivity.** A `1 mA`, `Rm = 100 Ω` movement is made a `0–150 V` voltmeter.

```
Rse = V/Im − Rm = 150/0.001 − 100 = 150000 − 100 = 149900 Ω
Ω/V = 1/Im = 1/0.001 = 1000 Ω/V
```
A 1000 Ω/V voltmeter on a 150 V range presents 150 kΩ — high enough to avoid heavy loading error on most circuits.

### ⚠️ Common Traps

1. Using PMMC directly on AC — average torque is **zero**; it needs a rectifier.
2. Forgetting that the rectifier meter's RMS calibration is **valid only for sine waves**.
3. Writing `Rsh = Rm/m` instead of `Rm/(m − 1)`.
4. Confusing **current sensitivity** (A) with **voltage sensitivity / ohms-per-volt** (1/Ifsd).
5. Thinking swamping *extends range* — it **compensates temperature error**.
6. Assuming the scale is non-uniform (that is Moving-Iron); PMMC is **linear**.

### 📝 Test — Measuring Instruments (8 Q)

**Q1 (MCQ).** A PMMC instrument has a scale that is:
(a) crowded at the start (b) crowded at the end (c) uniform (d) logarithmic

**Q2 (MCQ).** A PMMC ammeter connected to a symmetrical AC supply of 50 Hz will read:
(a) RMS value (b) peak value (c) average = 0 (d) form factor × RMS

**Q3 (MCQ).** The main purpose of a swamping resistance in a PMMC instrument is to reduce error due to:
(a) friction (b) temperature (c) hysteresis (d) stray fields

**Q4 (MCQ).** Damping in a PMMC instrument is:
(a) air-friction (b) fluid-friction (c) eddy-current (d) hysteresis

**Q5 (MCQ).** Increasing the number of turns `N` of the moving coil, other things equal:
(a) reduces sensitivity (b) increases deflecting torque (c) makes scale non-uniform (d) has no effect

**Q6 (NAT).** A 20 mA, 4 Ω movement is to read 0–10 A. Find the shunt resistance (mΩ).

**Q7 (NAT).** A 50 µA, 2 kΩ movement is used as a voltmeter of 100 V range. Find the ohms-per-volt sensitivity (Ω/V).

**Q8 (NAT).** A PMMC movement has full-scale deflection at 25 mA with a coil of 100 turns, flux density 0.15 T and coil area 4 cm². Find the spring constant K (in µN·m/rad) if full-scale deflection is 90° (π/2 rad).

<details><summary>🔑 Solutions</summary>

**Q1 — (c).** θ ∝ I with a radial field ⇒ uniform scale.

**Q2 — (c).** Over a full cycle the torque averages to zero, so a pure PMMC reads **0** on symmetrical AC.

**Q3 — (b) temperature.** Manganin swamps the copper coil's positive temperature coefficient.

**Q4 — (c) eddy-current** damping via the aluminium former.

**Q5 — (b).** `Td = N·B·A·I`, so torque rises with N (sensitivity `NBA/K` also rises).

**Q6.** `m = 10/0.02 = 500`; `Rsh = Rm/(m−1) = 4/499 = 0.008016 Ω = 8.02 mΩ`.

**Q7.** `Ω/V = 1/Ifsd = 1/50 µA = 1/(50×10⁻⁶) = 20000 Ω/V`.

**Q8.** `Td = N·B·A·I = 100 × 0.15 × 4×10⁻⁴ × 0.025 = 1.5×10⁻⁴ N·m`.
At balance `K = Td/θ = 1.5×10⁻⁴ / (π/2) = 1.5×10⁻⁴ / 1.5708 = 9.55×10⁻⁵ N·m/rad ≈ 95.5 µN·m/rad`.

</details>

---

## 🔧 Electrical Machines: Transformer Losses, Efficiency, OC/SC Tests & All-Day Efficiency

### 📖 Concept Deep Dive

A transformer has **no rotating parts**, so its only losses are electromagnetic. They split into two families:

**1. Core (iron) losses — essentially CONSTANT** (depend on flux/frequency, both fixed once the supply voltage is fixed):
- **Hysteresis loss** — `Ph = Kh · f · Bm^n` (Steinmetz index `n ≈ 1.6–2`)
- **Eddy-current loss** — `Pe = Ke · f² · Bm² · t²` (`t` = lamination thickness)

Because `V1 ≈ 4.44 f N φm`, at rated voltage the flux `Bm` is fixed, so iron loss is treated as a **fixed loss** that runs whenever the transformer is energised — even at no load.

**2. Copper (I²R) losses — VARIABLE with load².** If `x` = fraction of full load, copper loss `= x² · Pcu(fl)`.

**Open-Circuit (No-Load) Test** — measures **iron loss**:
- Performed on the **LV side** (convenient low voltage), HV kept **open**.
- Rated voltage applied; only the small no-load current `I0` flows.
- Copper loss ∝ I0² is negligible ⇒ **`Woc ≈ Pi` (core loss)**.
- Also gives the magnetising branch: `cosφ0 = Woc/(V1·I0)`, `Iw = I0 cosφ0`, `Iμ = I0 sinφ0`, `R0 = V1/Iw`, `X0 = V1/Iμ`.

**Short-Circuit (Impedance) Test** — measures **full-load copper loss** and equivalent impedance:
- Performed on the **HV side** (so rated current flows at a small applied voltage), LV **shorted**.
- Apply reduced voltage (`≈ 5–10%`) to circulate **rated current**.
- Flux is tiny ⇒ iron loss negligible ⇒ **`Wsc = Pcu(fl)`**.
- `Zeq = Vsc/Isc`, `Req = Wsc/Isc²`, `Xeq = √(Zeq² − Req²)` (referred to the HV side).

**Efficiency:**

```
η = Pout / (Pout + Pi + Pcu)
  = (x·S·cosφ) / (x·S·cosφ + Pi + x²·Pcu_fl)
```

**Condition for maximum efficiency** — variable loss equals constant loss:

```
x² · Pcu_fl = Pi   ⇒   x = √(Pi / Pcu_fl)
Load(kVA) at max η = S · √(Pi / Pcu_fl)
```

> 💎 **KEY RESULT** — Max efficiency occurs when **copper loss = iron loss**. At that point total loss = `2·Pi`.

**All-Day (energy) Efficiency** — used for **distribution transformers**, which stay energised 24 h but are loaded only part of the day. It is based on **energy (kWh), not power**:

```
η_all-day = (output energy in kWh over 24 h) /
            (output energy + iron-loss energy + copper-loss energy)
```

Iron loss accrues for the **full 24 h**; copper-loss energy is summed over each load block using `x²·Pcu_fl × hours`. A good distribution transformer therefore has **low iron loss** even at the cost of slightly higher copper loss.

> 🧠 **MEMORY HOOK** — "**O**pen = **I**ron, **S**hort = **C**opper." OC on LV (open HV) → core loss; SC on HV (shorted LV) → copper loss.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Copper loss at load fraction x | `Pcu = x²·Pcu_fl` |
| Efficiency | `η = x·S·cosφ / (x·S·cosφ + Pi + x²·Pcu_fl)` |
| Load fraction for max η | `x = √(Pi / Pcu_fl)` |
| Total loss at max η | `2·Pi` |
| OC test | `Woc ≈ Pi` , `cosφ0 = Woc/(V1·I0)` |
| SC test | `Wsc = Pcu_fl` , `Zeq = Vsc/Isc` , `Req = Wsc/Isc²` |
| All-day efficiency | `η = Σ(output kWh) / [Σ(output) + Pi×24 + Σ(x²·Pcu_fl·h)]` |

### 🧮 Solved Examples

**Example 1 — Efficiency & max-η load.** A 25 kVA transformer has iron loss 300 W and full-load copper loss 400 W. Find (a) efficiency at full load, 0.8 pf; (b) the load for maximum efficiency and the value of max efficiency at 0.8 pf.

```
(a) Output = 25000 × 0.8 = 20000 W
    Losses  = 300 + 400 = 700 W
    η = 20000 / (20000 + 700) = 20000/20700 = 0.9662 = 96.62%

(b) x = √(Pi/Pcu_fl) = √(300/400) = √0.75 = 0.866
    Load = 0.866 × 25 = 21.65 kVA
    Output = 21650 × 0.8 = 17320 W ;  Loss = 2×Pi = 600 W
    η_max = 17320 / (17320 + 600) = 17320/17920 = 0.9665 = 96.65%
```

**Example 2 — All-day efficiency.** A 10 kVA distribution transformer: iron loss 150 W, full-load copper loss 250 W. Daily cycle: full load at 0.8 pf for 6 h, half load at 0.8 pf for 8 h, no load for 10 h. Find all-day efficiency.

```
Output energy:
  Full load : 10 × 0.8 × 6 = 48.0 kWh
  Half load : 5  × 0.8 × 8 = 32.0 kWh
  No load   : 0
  Total output = 80.0 kWh

Iron-loss energy = 150 W × 24 h = 3600 Wh = 3.6 kWh

Copper-loss energy:
  Full load : 250 W × 6 h            = 1500 Wh
  Half load : (0.5)² × 250 × 8 h      = 62.5 × 8 = 500 Wh
  No load   : 0
  Total Cu  = 2000 Wh = 2.0 kWh

Input = 80 + 3.6 + 2.0 = 85.6 kWh
η_all-day = 80 / 85.6 = 0.9346 = 93.46%
```

### ⚠️ Common Traps

1. Doing the **SC test on the LV side** — it should be on **HV** so rated current flows at low voltage.
2. Treating iron loss as load-dependent — it is **constant** at rated voltage.
3. Using power instead of **energy** for all-day efficiency.
4. Forgetting that copper loss scales with **x²**, not x.
5. Plugging `S` (kVA) directly into η numerator — multiply by **pf** to get watts.
6. At max efficiency, forgetting total loss = **2·Pi** (a fast shortcut).

### 📝 Test — Electrical Machines (8 Q)

**Q1 (MCQ).** The open-circuit test on a transformer gives:
(a) copper loss (b) iron loss (c) total loss (d) leakage reactance

**Q2 (MCQ).** Maximum efficiency of a transformer occurs when:
(a) copper loss = 2 × iron loss (b) iron loss = 2 × copper loss (c) copper loss = iron loss (d) load = full load

**Q3 (MCQ).** All-day efficiency is important for:
(a) power transformers (b) distribution transformers (c) welding transformers (d) instrument transformers

**Q4 (MCQ).** In the SC test the wattmeter reads approximately:
(a) iron loss (b) full-load copper loss (c) sum of both (d) magnetising VAR

**Q5 (MCQ).** If a transformer's load doubles (still within rating), copper loss becomes:
(a) 2× (b) 4× (c) unchanged (d) ½×

**Q6 (NAT).** A transformer has 400 W iron loss and 900 W FL copper loss. At what fraction of full load is efficiency maximum? (give to 3 decimals)

**Q7 (NAT).** A 100 kVA transformer, iron loss 1 kW, FL copper loss 1.5 kW. Find efficiency (%) at full load, 0.9 pf.

**Q8 (NAT).** For the transformer in Q7, find the kVA load at which efficiency is maximum.

<details><summary>🔑 Solutions</summary>

**Q1 — (b) iron loss.** OC test energises the core at rated voltage with negligible current.

**Q2 — (c) copper loss = iron loss.**

**Q3 — (b) distribution transformers** (energised 24 h, variable load).

**Q4 — (b) full-load copper loss.** Flux is small in SC test, so iron loss ≈ 0.

**Q5 — (b) 4×.** `Pcu ∝ I²`.

**Q6.** `x = √(Pi/Pcu_fl) = √(400/900) = √0.4444 = 0.667`.

**Q7.** Output = 100000×0.9 = 90000 W; loss = 1000 + 1500 = 2500 W.
`η = 90000/(90000+2500) = 90000/92500 = 0.9730 = 97.30%`.

**Q8.** `x = √(1000/1500) = √0.6667 = 0.8165`; load = 0.8165 × 100 = **81.65 kVA**.

</details>

---

## 🔧 Power Electronics: Thyristor (SCR) I — Structure, Two-Transistor Model & V-I Characteristics

### 📖 Concept Deep Dive

The **Silicon Controlled Rectifier (SCR)** is a **four-layer P-N-P-N** device with **three junctions** (`J1`, `J2`, `J3`) and **three terminals**: anode (A), cathode (K) and gate (G). It is the fundamental latching switch of phase-controlled converters.

**Three operating regions (V-I characteristic):**

| Region | Bias | State |
|---|---|---|
| **Reverse blocking** | Anode negative; `J1`, `J3` reverse-biased | Blocks until reverse breakdown `VBR` (avalanche — destructive) |
| **Forward blocking** | Anode positive, no gate; `J2` reverse-biased | OFF, small leakage, until forward breakover `VBO` |
| **Forward conduction** | Triggered ON; all junctions forward | Latched, low on-state drop ≈ 1–1.5 V |

Without a gate signal, the SCR stays OFF in forward blocking until the anode voltage reaches `VBO`. Applying **gate current `IG`** injects carriers that **lower `VBO`** — the larger `IG`, the smaller the forward voltage needed to switch ON. Normal operation triggers with a small `IG` at a safe anode voltage (we do **not** rely on breakover).

**Two-transistor analogy.** Split the PNPN into an overlapping **PNP (Q1)** and **NPN (Q2)**. The collector current of each feeds the base of the other:

```
IA = (α2·IG + ICBO1 + ICBO2) / (1 − (α1 + α2))
```

where `α1`, `α2` are the common-base current gains and `ICBO` the leakage currents. As anode current rises, `α` rises (α is current-dependent at low currents). When the loop gain reaches:

```
α1 + α2 → 1     ⇒     regenerative (positive-feedback) turn-ON
```

the denominator → 0, `IA` is limited only by the external circuit, and the device **latches**. Once latched, the gate loses control — it can only turn the SCR ON, not OFF.

**Two critical currents:**
- **Latching current `IL`** — the **minimum anode current** that must be reached, *while the gate pulse is still present*, for the device to stay ON after the gate is removed. It is a **turn-ON** parameter.
- **Holding current `IH`** — the **minimum anode current** to keep an already-conducting SCR ON; below `IH` it reverts to forward blocking. It is a **turn-OFF** parameter.

Typically `IL ≈ 2–3 × IH`, and both are a small fraction of the rated current.

> 💎 **KEY RESULT** — Turn-ON requires `α1 + α2 ≈ 1`. **Latching current > Holding current.** The gate can only turn an SCR ON; turn-OFF needs the anode current to fall below `IH` (natural or forced commutation).

> ⚠️ **TRAP ALERT** — For an **inductive load**, anode current rises **slowly** (`di/dt` limited by L). If the gate pulse ends before `IA` reaches `IL`, the SCR fails to latch and turns OFF. Inductive loads therefore need a **wider gate pulse** or a **pulse train**.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Two-transistor anode current | `IA = (α2·IG + ICBO1 + ICBO2) / (1 − α1 − α2)` |
| Turn-on condition | `α1 + α2 ≈ 1` |
| RL-load current rise | `i(t) = (V/R)·(1 − e^(−t/τ))` , `τ = L/R` |
| Latch time (pulse width, RL) | `t = −τ · ln(1 − IL·R/V)` |
| Current relation | `IL ≈ 2–3 × IH` (both ≪ I_rated) |

### 🧮 Solved Examples

**Example 1 — Regenerative action (concept).** From `IA = (α2·IG + ICBO1 + ICBO2)/(1 − α1 − α2)`: a gate pulse injects `IG`, raising `IA`; higher `IA` raises `α1` and `α2`; as `(α1 + α2) → 1` the denominator collapses, `IA` shoots up (limited only by the external `V/R`), and conduction is self-sustaining — the SCR **latches** even after `IG` is withdrawn.

**Example 2 — Gate-pulse width for latching.** A 200 V DC source drives an SCR into a series `R = 20 Ω`, `L = 0.2 H` load. Latching current `IL = 100 mA`. Find the minimum gate-pulse width to guarantee turn-ON.

```
τ = L/R = 0.2/20 = 0.01 s = 10 ms
Final current V/R = 200/20 = 10 A
i(t) = 10·(1 − e^(−t/τ)) ; set i = 0.1 A
0.1 = 10·(1 − e^(−t/τ))  ⇒  1 − e^(−t/τ) = 0.01
e^(−t/τ) = 0.99  ⇒  t = −τ·ln(0.99) = 0.01 × 0.01005
t = 1.005×10⁻⁴ s ≈ 100.5 µs
```
The gate pulse must last at least **≈ 100.5 µs** for the anode current to reach the 100 mA latching level.

### ⚠️ Common Traps

1. Swapping `IL` and `IH` — **latching (turn-on) > holding (turn-off)**.
2. Believing the gate can turn an SCR **OFF** — it cannot; only anode current below `IH` does.
3. Forgetting `J2` is the junction that blocks in the **forward** direction.
4. Applying a narrow gate pulse to an **inductive** load — may not latch.
5. Confusing forward breakover `VBO` (switching) with reverse breakdown `VBR` (avalanche/destructive).
6. Thinking higher `IG` raises `VBO` — it **lowers** it.

### 📝 Test — Power Electronics (8 Q)

**Q1 (MCQ).** A conducting SCR turns OFF when its anode current falls below:
(a) latching current (b) holding current (c) gate current (d) leakage current

**Q2 (MCQ).** In the forward-blocking state of an SCR, the reverse-biased junction is:
(a) J1 (b) J2 (c) J3 (d) J1 and J3

**Q3 (MCQ).** The regenerative turn-on condition for an SCR is:
(a) α1 + α2 = 0 (b) α1 = α2 (c) α1 + α2 → 1 (d) α1·α2 = 1

**Q4 (MCQ).** As gate current is increased, the forward breakover voltage:
(a) increases (b) decreases (c) stays constant (d) becomes negative

**Q5 (MCQ).** For a given SCR, generally:
(a) IL = IH (b) IL < IH (c) IL > IH (d) IL = 0.5 IH

**Q6 (NAT).** An SCR has holding current 6 mA and its latching current is 3 times the holding current. Find the latching current (mA).

**Q7 (NAT).** A 100 V DC source, series R = 50 Ω (resistive load only), drives an SCR with latching current 50 mA. The gate pulse width is 30 µs. Assuming ideal (instant) current rise for a purely resistive load, will it latch? Find the anode current (mA) reached.

**Q8 (NAT).** A 220 V DC source drives an SCR into R = 10 Ω, L = 0.1 H. Latching current = 200 mA. Find the minimum gate-pulse width (µs).

<details><summary>🔑 Solutions</summary>

**Q1 — (b) holding current.**

**Q2 — (b) J2.** In forward blocking, the centre junction J2 is reverse-biased.

**Q3 — (c) α1 + α2 → 1.**

**Q4 — (b) decreases.** More gate current ⇒ smaller VBO.

**Q5 — (c) IL > IH** (typically 2–3×).

**Q6.** `IL = 3 × 6 = 18 mA`.

**Q7.** Resistive load: current rises essentially instantly to `V/R = 100/50 = 2 A = 2000 mA`, which far exceeds the 50 mA latching current, so **it latches**; anode current ≈ **2000 mA**.

**Q8.** `τ = L/R = 0.1/10 = 0.01 s`; `V/R = 220/10 = 22 A`.
`0.2 = 22·(1 − e^(−t/τ))` ⇒ `1 − e^(−t/τ) = 0.2/22 = 0.009091` ⇒ `e^(−t/τ) = 0.990909`.
`t = −0.01 × ln(0.990909) = 0.01 × 0.009133 = 9.13×10⁻⁵ s ≈ 91.3 µs`.

</details>

---

> 🧠 **DAY-26 WRAP** — PMMC: `θ ∝ I`, uniform scale, DC/average, shunt `Rm/(m−1)`. Transformer: **max η at Cu = Fe loss**, OC→iron, SC→copper, all-day uses **energy**. Thyristor: **α1+α2→1** latches, **IL > IH**, gate turns ON only. Revise the three boxed KEY RESULTS before you sleep. ⚡
