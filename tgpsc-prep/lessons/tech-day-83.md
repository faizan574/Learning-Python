# ⚡ GATE Technical Revision — Day 83 (2026-10-12)

*The Q-meter's resonance trick, the transformer's loss-and-efficiency accounting, and the SCR brought to life by its two-transistor analogy.*

📅 Tech Day 83 · ⏱ ~50 min · 🎯 Measurements + Machines + Power Electronics

> Today: **Q-meter + frequency/phase/ohm/earth measurement** (closing in on the end of round 4 for Measurements), **transformer losses & efficiency** (OC/SC tests, max & all-day efficiency), and the **thyristor's construction and two-transistor model** (latching vs holding current).

---

## 🔧 Measuring Instruments: Q-Meter, Frequency, Phase, Ohm & Earth Measurement

### 📖 Concept Deep Dive

**Q-meter.** Measures the **quality factor Q** of a coil (and indirectly L, C, and effective resistance) using **series resonance**. A known small voltage `E` is injected into a series R-L-C circuit; the tuning capacitor `C` is varied until **resonance** (`XL = XC`). At resonance the voltage across the capacitor is **Q times** the injected voltage:

```
Q = VC / E       (voltage magnification at resonance)
Q = XL/R = ωL/R = 1/(ωCR)
Resonance:  f = 1/(2π√(LC)),   XL = XC
```

So the voltmeter across `C`, calibrated in Q, reads directly. Corrections are needed for the coil's **distributed (self) capacitance `Cd`** and the insertion resistance. Q-meters work in the RF range.

**Frequency measurement.** A **digital frequency counter** counts input cycles over a precise **gate time**:

```
f = (counts) / (gate time)
```

Longer gate time → better resolution. Analog methods include **Lissajous figures** (CRO) and the **Wien bridge** (Day 80).

**Phase measurement.** Via **Lissajous ellipse** (`sin φ = A/B`), a **dual-trace CRO** (measure time shift Δt → φ = 360°·Δt/T), or an electronic phase meter.

**Ohmmeters.** Measure resistance using a battery + meter:
- **Series ohmmeter** — resistor in series with the unknown; **zero ohms → full-scale deflection**, **infinite ohms → no deflection**. Scale is **non-linear and reversed** (0 on the right). Good for **mid/high** resistance.
- **Shunt ohmmeter** — unknown in parallel with the movement; **zero ohms → no deflection**. Good for **low** resistance.

**Earth-resistance measurement.** Uses the **fall-of-potential (three-electrode) method** with an **earth tester / earth megger**: inject current between the earth electrode and a current spike, measure potential at an intermediate spike; `R_earth = V/I`. The potential electrode is moved to the **flat (62%) region** of the curve for a true reading.

| Instrument | Measures | Key relation |
|---|---|---|
| Q-meter | Q (and L, C) | `Q = VC/E = ωL/R` |
| Frequency counter | frequency | `f = counts/gate time` |
| Series ohmmeter | mid/high R | 0 Ω → full-scale |
| Shunt ohmmeter | low R | 0 Ω → no deflection |
| Earth tester | earth resistance | `R = V/I` (62% rule) |

> 💎 **KEY RESULT** — Q-meter: `Q = VC/E` at resonance, and `Q = ωL/R = 1/(ωCR)`. Resonance frequency `f = 1/(2π√(LC))`.

> 🧠 **MEMORY HOOK** — "**Q = Voltage across C ÷ injected E** (magnification). Series ohmmeter: **0 Ω = full swing**; shunt ohmmeter: **0 Ω = no swing**."

> ⚠️ **TRAP ALERT** — In a **series** ohmmeter the scale is **reversed** (0 Ω at full deflection, ∞ at no deflection). The Q-meter reading is **inflated** if the coil's distributed capacitance `Cd` is ignored — the *true* Q is slightly higher than measured.

### 📐 Formula Sheet

| Quantity | Formula | Notes |
|---|---|---|
| Quality factor | `Q = ωL/R = 1/(ωCR)` | — |
| Q via magnification | `Q = VC/E` | at resonance |
| Resonance freq | `f = 1/(2π√(LC))` | XL = XC |
| Frequency counter | `f = counts/gate time` | digital |
| Phase (CRO) | `φ = 360°·Δt/T` | dual-trace |
| Earth resistance | `R = V/I` | 62% rule |

### 🧮 Solved Examples

**Example 1 — Q-meter.** A coil is resonated in a Q-meter at `f = 1 MHz` with a tuning capacitance `C = 100 pF`. The capacitor voltage is 80 V for an injected `E = 0.8 V`. Find Q and the coil inductance L.

```
Q = VC/E = 80/0.8 = 100
At resonance: L = 1/((2πf)²·C) = 1/((2π×10⁶)²×100×10⁻¹²)
  (2π×10⁶)² = (6.283×10⁶)² = 3.948×10¹³
  L = 1/(3.948×10¹³ × 1×10⁻¹⁰) = 1/(3.948×10³) = 2.53×10⁻⁴ H = 253 µH
```

**Q = 100, L ≈ 253 µH.** ✔

**Example 2 — Frequency counter resolution.** A frequency counter uses a gate time of 0.1 s and counts 47,382 pulses. Find the measured frequency and the resolution.

```
f = counts/gate time = 47382 / 0.1 = 473 820 Hz = 473.82 kHz
Resolution = 1 count / 0.1 s = 10 Hz
```

**f = 473.82 kHz, resolution = 10 Hz** (a 1 s gate would give 1 Hz). ✔

### ⚠️ Common Traps
1. **Series ohmmeter scale is reversed** (0 Ω = full-scale deflection).
2. **Q = VC/E** (magnification) — not VC·E.
3. **Distributed capacitance** inflates the apparent C and lowers the measured Q vs true Q.
4. **Longer gate time → finer frequency resolution** (fewer Hz per count).
5. **Earth test uses the 62% potential-electrode position** for a valid reading.
6. **Shunt ohmmeter for low R, series for high R** — don't swap.

### 📝 Test (8 questions)

**Q1 (MCQ).** In a Q-meter, the quality factor equals:
(a) E/VC  (b) VC/E  (c) VC·E  (d) VC + E

**Q2 (MCQ).** A series-type ohmmeter shows full-scale deflection for:
(a) infinite resistance  (b) zero resistance  (c) mid-scale resistance  (d) negative resistance

**Q3 (MCQ).** The resolution of a digital frequency counter improves with:
(a) shorter gate time  (b) longer gate time  (c) higher input amplitude  (d) lower frequency

**Q4 (MCQ).** The Q of a coil is given by:
(a) R/ωL  (b) ωL/R  (c) ωCR  (d) R/(ωC)

**Q5 (MCQ).** Earth resistance is commonly measured by the:
(a) Wheatstone bridge  (b) fall-of-potential method  (c) Q-meter  (d) Schering bridge

**Q6 (NAT).** A Q-meter resonates a coil at 2 MHz with C = 50 pF. Find the inductance L in µH (1 decimal).

**Q7 (NAT).** A Q-meter shows VC = 120 V for an injected E = 1.0 V. Find Q.

**Q8 (NAT).** A frequency counter with a 1 s gate counts 1,000,000 pulses. Find the frequency in MHz and the resolution in Hz.

<details><summary>🔑 Solutions</summary>

**Q1 → (b).** `Q = VC/E`.

**Q2 → (b).** Series ohmmeter: 0 Ω → full-scale deflection.

**Q3 → (b).** Longer gate time → finer resolution.

**Q4 → (b).** `Q = ωL/R`.

**Q5 → (b).** Fall-of-potential (earth tester).

**Q6.**
```
L = 1/((2πf)²·C) = 1/((2π×2×10⁶)²×50×10⁻¹²)
  (2π×2×10⁶)² = (1.2566×10⁷)² = 1.579×10¹⁴
  L = 1/(1.579×10¹⁴ × 5×10⁻¹¹) = 1/(7.896×10³) = 1.266×10⁻⁴ H = 126.6 µH
```
**L ≈ 126.6 µH.**

**Q7.**
```
Q = VC/E = 120/1.0 = 120
```
**Q = 120.**

**Q8.**
```
f = 1 000 000 / 1 = 1 000 000 Hz = 1 MHz
Resolution = 1 count/1 s = 1 Hz
```
**f = 1 MHz, resolution = 1 Hz.**

</details>

---

## 🔧 Electrical Machines: Transformers III — Losses, Efficiency & OC/SC Tests

### 📖 Concept Deep Dive

A transformer's performance is governed by its **two loss types** and how they trade off.

**Losses.**
- **Core (iron) loss `Pi`** — constant (independent of load), present whenever energised. It is the sum of **hysteresis** `Ph = Kh·f·Bmˣ` (Steinmetz exponent x ≈ 1.6–2) and **eddy-current** `Pe = Ke·f²·Bm²·t²` losses. Minimised by silicon steel (low Ph) and thin laminations (low Pe).
- **Copper (I²R) loss `Pcu`** — variable, proportional to the **square of load current**: at a load fraction `x`, `Pcu = x²·Pcu,fl`.

**Efficiency.** With output `= x·S·cos φ` (S = rated VA):

```
η = (x·S·cos φ) / (x·S·cos φ + Pi + x²·Pcu,fl)
```

**Maximum efficiency** occurs when **variable loss = constant loss**:

```
x²·Pcu,fl = Pi   ⇒   x = √(Pi / Pcu,fl)
```

i.e. at the load where **copper loss equals iron loss**.

**Open-circuit (OC) test.** Secondary open, rated voltage applied (usually on the **LV side** for convenience). Since no load current flows, the input power ≈ **core loss `Pi`**; it also gives the **no-load current** and the **shunt branch** (`R0, X0`).

**Short-circuit (SC) test.** Secondary shorted, a reduced voltage applied (usually on the **HV side**) to circulate **full-load current**. The input power ≈ **full-load copper loss `Pcu,fl`**; it gives the **equivalent impedance** (`R01, X01` or `Z01`) and hence voltage regulation.

**All-day (energy) efficiency.** For **distribution transformers** (energised 24 h but lightly loaded much of the time):

```
η_all-day = (energy output in 24 h) / (energy output + 24h·Pi + copper-loss energy)
```

Because iron loss runs all day, a distribution transformer is designed with **low iron loss** (accepting higher copper loss) to maximise all-day efficiency.

| Test | Side | What it gives |
|---|---|---|
| OC (no-load) | LV, rated V | core loss Pi, R0, X0 |
| SC (short-circuit) | HV, reduced V | Pcu,fl, R01, X01 |

> 💎 **KEY RESULT** — Max efficiency at `x = √(Pi/Pcu,fl)` (Cu loss = iron loss). **OC test → iron loss**; **SC test → full-load copper loss**. All-day efficiency uses **energy** over 24 h.

> 🧠 **MEMORY HOOK** — "**OC = Open = iron (core); SC = Short = copper.**" Max-η: "**variable = constant.**"

> ⚠️ **TRAP ALERT** — Core loss is **constant** (independent of load); copper loss scales with **x²**. The load fraction for max efficiency is `√(Pi/Pcu,fl)`, **not** full load (unless they happen to be equal there).

### 📐 Formula Sheet

| Quantity | Formula | Notes |
|---|---|---|
| Hysteresis loss | `Ph = Kh·f·Bmˣ` | x ≈ 1.6–2 |
| Eddy loss | `Pe = Ke·f²·Bm²·t²` | thin laminations |
| Copper loss at load x | `Pcu = x²·Pcu,fl` | variable |
| Efficiency | `η = xS cosφ/(xS cosφ + Pi + x²Pcu,fl)` | — |
| Max-efficiency load | `x = √(Pi/Pcu,fl)` | Cu = iron |
| OC test | → `Pi, R0, X0` | LV side |
| SC test | → `Pcu,fl, Z01` | HV side |

### 🧮 Solved Examples

**Example 1 — Efficiency at a given load.** A 50 kVA transformer has iron loss 500 W and full-load copper loss 800 W. Find the efficiency at full load, 0.8 pf.

```
Output = S·cosφ = 50 000 × 0.8 = 40 000 W
Total loss = Pi + Pcu,fl = 500 + 800 = 1300 W
η = 40000/(40000 + 1300) = 40000/41300 = 0.9685 = 96.85%
```

**η = 96.85%.** ✔

**Example 2 — Load for max efficiency.** For the same transformer, find the load fraction and kVA at which efficiency is maximum, and the efficiency there (0.8 pf).

```
x = √(Pi/Pcu,fl) = √(500/800) = √0.625 = 0.7906
kVA at max η = 0.7906 × 50 = 39.53 kVA
Loss at max η = 2·Pi = 2×500 = 1000 W  (Cu = iron = 500 each)
Output = 39530 × 0.8 = 31624 W
η = 31624/(31624 + 1000) = 31624/32624 = 0.9693 = 96.93%
```

**Max η at ~39.5 kVA (x ≈ 0.79), η ≈ 96.93%.** ✔

### ⚠️ Common Traps
1. **Iron loss is constant**; copper loss ∝ x².
2. **Max efficiency at Cu = iron**, load fraction `√(Pi/Pcu,fl)`.
3. **OC gives iron loss, SC gives copper loss** — not the reverse.
4. **All-day efficiency uses energy (kWh)** over 24 h, weighting iron loss heavily.
5. **Loss at max efficiency = 2·Pi** (since Cu = iron there).
6. **SC test is done at reduced voltage** (just enough for full-load current), so core loss in SC is negligible.

### 📝 Test (8 questions)

**Q1 (MCQ).** The open-circuit test on a transformer gives mainly:
(a) copper loss  (b) iron (core) loss  (c) regulation  (d) turns ratio

**Q2 (MCQ).** Maximum efficiency occurs when:
(a) copper loss = iron loss  (b) copper loss = 0  (c) load = full load  (d) iron loss = 0

**Q3 (MCQ).** Copper loss at half load compared with full-load copper loss is:
(a) half  (b) one-fourth  (c) double  (d) same

**Q4 (MCQ).** The short-circuit test is usually performed on the:
(a) LV side at rated voltage  (b) HV side at reduced voltage  (c) LV side at reduced voltage  (d) HV side at rated voltage

**Q5 (MCQ).** All-day efficiency is most relevant for:
(a) power transformers  (b) distribution transformers  (c) welding transformers  (d) instrument transformers

**Q6 (NAT).** A transformer has Pi = 400 W, Pcu,fl = 900 W. Find the load fraction for maximum efficiency (2 decimals).

**Q7 (NAT).** A 25 kVA transformer at full load, unity pf, has total losses of 600 W. Find the efficiency (%).

**Q8 (NAT).** Full-load copper loss is 1200 W. Find the copper loss at 60% load (W).

<details><summary>🔑 Solutions</summary>

**Q1 → (b).** OC test → iron loss.

**Q2 → (a).** Copper loss = iron loss.

**Q3 → (b).** `Pcu = x²·Pcu,fl = 0.25·Pcu,fl` → one-fourth.

**Q4 → (b).** SC test: HV side, reduced voltage.

**Q5 → (b).** Distribution transformers (energised 24 h, variable load).

**Q6.**
```
x = √(Pi/Pcu,fl) = √(400/900) = √0.444 = 0.67
```
**x = 0.67.**

**Q7.**
```
Output = 25000 × 1 = 25000 W
η = 25000/(25000 + 600) = 25000/25600 = 0.9766 = 97.66%
```
**η = 97.66%.**

**Q8.**
```
Pcu = x²·Pcu,fl = 0.6² × 1200 = 0.36 × 1200 = 432 W
```
**Pcu = 432 W.**

</details>

---

## 🔧 Power Electronics: Thyristor (SCR) I — Construction & Two-Transistor Analogy

### 📖 Concept Deep Dive

The **Silicon-Controlled Rectifier (SCR)** is the classic **latching** power switch — the backbone of high-power rectifiers and HVDC.

**Construction.** A **four-layer P-N-P-N** device with **three junctions (J1, J2, J3)** and **three terminals**: **Anode (A)**, **Cathode (K)**, and **Gate (G)**. When forward-biased (A positive), **J1 and J3 are forward-biased** but the **centre junction J2 is reverse-biased** — so the device blocks until triggered.

**Two-transistor analogy.** The PNPN structure is modelled as a **PNP transistor** `Q1` and an **NPN transistor** `Q2` interconnected so that **each transistor's collector feeds the other's base** — a positive-feedback (regenerative) loop. Analysis gives the anode current:

```
IA = (ICBO1 + ICBO2 + α2·IG) / (1 − (α1 + α2))
```

where `α1, α2` are the common-base current gains. As the gate current (or anode voltage) raises the currents, the gains `α1, α2` rise with emitter current; when:

```
α1 + α2 → 1
```

the denominator → 0, `IA` rises sharply (regeneration), and the SCR **latches ON**. Once on, the gate loses control — the device stays on until the anode current falls below the holding value.

**V-I characteristics.**
- **Forward blocking** (off-state): small leakage up to the **forward breakover voltage `VBO`**; gate current **reduces `VBO`** (more gate current → triggers at lower voltage).
- **Forward conduction** (on-state): low voltage drop (~1–2 V), high current — after latching.
- **Reverse blocking**: blocks up to the **reverse breakdown voltage**, like a diode.

**Latching vs holding current.**
- **Latching current `IL`** — the **minimum anode current to latch the SCR ON** (during turn-on, while the gate pulse is present). The anode current must exceed `IL` before the gate is removed.
- **Holding current `IH`** — the **minimum anode current to keep it conducting** (during turn-off). If `IA` falls below `IH`, the SCR turns off.

```
IL > IH    (typically IL ≈ 2–3 × IH)
```

| Feature | SCR behaviour |
|---|---|
| Layers / junctions | 4 layers (PNPN) / 3 junctions |
| Terminals | Anode, Cathode, Gate |
| Turn-on condition | `α1 + α2 → 1` |
| Forward blocking | up to VBO (↓ with IG) |
| Latching vs holding | `IL > IH` |

> 💎 **KEY RESULT** — Turn-on when `α1 + α2 → 1`; `IA = (ICBO1+ICBO2+α2 IG)/(1−(α1+α2))`. **Latching current IL > holding current IH** (IL at turn-on, IH at turn-off).

> 🧠 **MEMORY HOOK** — "**L before H in the alphabet, Latching > Holding, Latching at turn-on, Holding at turn-off.**" Turn-on = "**alphas add to one.**"

> ⚠️ **TRAP ALERT** — Gate current **reduces** the forward breakover voltage (it doesn't raise it). And it is the **centre junction J2** that is reverse-biased in forward blocking — the gate injects carriers to collapse it.

### 📐 Formula Sheet

| Quantity | Formula / fact | Notes |
|---|---|---|
| Anode current | `IA = (ICBO1+ICBO2+α2·IG)/(1−(α1+α2))` | two-transistor |
| Turn-on condition | `α1 + α2 → 1` | regeneration |
| Latching vs holding | `IL > IH` | IL≈2–3·IH |
| Forward blocking | up to `VBO` | ↓ with IG |
| On-state drop | ≈ 1–2 V | conduction |

### 🧮 Solved Examples

**Example 1 — Two-transistor turn-on.** In a thyristor the two sections have α1 = 0.4 and α2 = 0.52. Leakages are negligible and IG = 0. Compute (α1+α2) and comment on the state; then find the gate action needed.

```
α1 + α2 = 0.4 + 0.52 = 0.92  (< 1 ⇒ still in forward blocking, OFF)
IA = (0 + 0 + 0)/(1 − 0.92) → indeterminate small leakage; device OFF.
Applying gate current raises emitter currents ⇒ α1, α2 increase ⇒ when
(α1 + α2) reaches 1, IA → large, SCR latches ON.
```

**At α1+α2 = 0.92 the SCR is OFF; gate current drives (α1+α2) → 1 to turn it on.** ✔

**Example 2 — Latching/holding logic.** An SCR has IL = 60 mA and IH = 20 mA. The anode current during a short gate pulse rises to only 45 mA before the gate is removed. Will it stay on? What minimum anode current is needed to latch?

```
To latch, IA must exceed IL = 60 mA while the gate is applied.
Here IA = 45 mA < 60 mA ⇒ the SCR does NOT latch; it turns off when gate is removed.
Minimum to latch = IL = 60 mA.
```

**It will not stay on (45 mA < IL = 60 mA); need ≥ 60 mA to latch.** ✔

### ⚠️ Common Traps
1. **IL > IH** — latching (turn-on) current exceeds holding (turn-off) current.
2. **Turn-on when α1 + α2 → 1**, not when each α = 1.
3. **Gate current lowers VBO** (triggers at lower forward voltage).
4. **J2 (centre junction) is reverse-biased** in the forward-blocking state.
5. **Gate loses control once latched** — turn-off needs IA < IH (commutation).
6. **On-state drop is small (~1–2 V)** but conduction loss ≈ Vt·IA still matters at high current.

### 📝 Test (8 questions)

**Q1 (MCQ).** An SCR turns on (regeneratively) when:
(a) α1 = 1  (b) α2 = 1  (c) α1 + α2 → 1  (d) α1·α2 = 1

**Q2 (MCQ).** The latching current of an SCR, compared with its holding current, is:
(a) smaller  (b) larger  (c) equal  (d) zero

**Q3 (MCQ).** In the forward-blocking state, which junction is reverse-biased?
(a) J1  (b) J2  (c) J3  (d) all three

**Q4 (MCQ).** Increasing the gate current of an SCR:
(a) raises the forward breakover voltage  (b) lowers the forward breakover voltage  (c) has no effect  (d) reverses polarity

**Q5 (MCQ).** Once an SCR is latched on, the gate:
(a) controls the current continuously  (b) loses control  (c) can turn it off  (d) reverses it

**Q6 (NAT).** An SCR has α1 = 0.45 and α2 = 0.50 with IG = 0 and negligible leakage. Find (α1 + α2) and state whether it is on the verge of turn-on (yes/no as 1/0).

**Q7 (NAT).** An SCR has holding current IH = 15 mA and latching current IL = 3·IH. Find IL in mA.

**Q8 (NAT).** Two-transistor model: α1 = 0.3, α2 = 0.6, ICBO1 + ICBO2 = 2 mA, IG = 0. Find IA in mA.

<details><summary>🔑 Solutions</summary>

**Q1 → (c).** Regeneration at α1 + α2 → 1.

**Q2 → (b).** IL > IH.

**Q3 → (b).** Centre junction J2 is reverse-biased in forward blocking.

**Q4 → (b).** More gate current → lower breakover voltage.

**Q5 → (b).** Gate loses control after latching.

**Q6.**
```
α1 + α2 = 0.45 + 0.50 = 0.95  (< 1 ⇒ not yet turning on)
```
**(α1+α2) = 0.95; on the verge? No → 0.**

**Q7.**
```
IL = 3 × IH = 3 × 15 = 45 mA
```
**IL = 45 mA.**

**Q8.**
```
IA = (ICBO1+ICBO2 + α2·IG)/(1−(α1+α2)) = (2 + 0)/(1 − 0.9)
   = 2/0.1 = 20 mA
```
**IA = 20 mA.**

</details>

---

## 📊 Progress

```
Measuring Instruments  [████████████████████]  Round 4 · topic 21/22 (Q-meter & misc)
Electrical Machines    [███░░░░░░░░░░░░░░░░░░]  Round 5 · topic  3/20 (Transformers III)
Power Electronics       [███░░░░░░░░░░░░░░░░░░]  Round 5 · topic  3/20 (SCR I)
```

- **Section A (Measurements):** one topic (the final mixed-PYQ revision) from closing round 4.
- **Section B (Machines):** round 5 through transformer losses/efficiency. 🔄
- **Section C (Power Electronics):** round 5 into the thyristor. 🔄

> 🎯 **Today's three one-liners:** (1) **Q-meter: Q = VC/E = ωL/R; resonance f = 1/(2π√(LC)).** (2) **Max-η at x = √(Pi/Pcu,fl); OC→iron, SC→copper.** (3) **SCR turns on at α1+α2→1; IL > IH (latch at turn-on, hold at turn-off).**

*Measurements is one topic from a full revision cycle. Correctness over length — verify any value marked "verify" before the exam.*
