# ⚡ GATE Technical Revision — Day 62 (2026-09-21)

*Q-meter finishes the Measurements-style topics, while Machines & Power Electronics open round 4 with transformer and device fundamentals.*

📅 Tech Day 62 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics · 🔁 Measurements R3 · Machines/PE R4 begins

> 🧠 **MEMORY HOOK** — Today: the **Q-meter** (resonance measurement of Q, L, C), the **single-phase transformer** (`E = 4.44 fNφm`, round-4 restart), and the **power-device family** (diode→SCR→MOSFET/IGBT, round-4 restart). Foundations, revisited.

---

## 🔧 Measuring Instruments: Q-meter, Frequency & Phase Measurement

### 📖 Concept Deep Dive

**Q-meter** — measures the **quality factor (Q)** of coils/capacitors (and thereby inductance, capacitance, effective resistance, distributed capacitance) using the principle of **series resonance**.

**Principle.** A known variable-frequency oscillator injects a small, accurately-known voltage `E` (via a very low resistance) into a series R-L-C circuit; a variable calibrated capacitor `C` is tuned to **resonance**. At series resonance, the **voltage across the capacitor is Q times the injected voltage**:

```
At resonance:  Vc = Q·E   ⇒   Q = Vc/E
Q = (1/R)·√(L/C) = ωL/R = 1/(ωCR)
Resonance:  ω = 1/√(LC) ,  f = 1/(2π√(LC))
```

The voltmeter across `C` is calibrated **directly in Q** (since `E` is fixed and known). Because the actual (**effective/circuit**) Q includes the meter's insertion resistance, the reading is the **circuit Q** (slightly less than the true coil Q).

**Measurements with a Q-meter:**
- **Q of a coil**, and hence `L` (from `f` and `C` at resonance).
- **Effective resistance** `R = ωL/Q`.
- **Distributed/self-capacitance** of a coil (by two-frequency method).
- **Unknown C** (substitution).

**Frequency measurement:**
- **CRO methods:** Lissajous figures (`fy/fx` = tangency ratio); or the sweep/time-base (`f = 1/T`).
- **Digital frequency counter** — counts input cycles over a precise gate time (`f = count/gate time`); high accuracy, the modern standard.
- **Wien bridge** (balances at one frequency, `f = 1/2πRC`).

**Phase measurement:**
- **CRO:** Lissajous ellipse (`sinφ = y-intercept/y-max`), or dual-trace time-shift (`φ = 360°·Δt/T`).
- **Phase meters / phase-sensitive detectors**.

> 💎 **KEY RESULT** — Q-meter (series resonance): **Q = Vc/E**, `Q = (1/R)√(L/C) = ωL/R`; resonance `f = 1/(2π√(LC))`; effective `R = ωL/Q`. Frequency: **digital counter** (count/gate) or Lissajous/Wien. Phase: Lissajous `sinφ = y1/ymax` or `φ = 360°·Δt/T`.

> ⚠️ **TRAP ALERT** — The Q-meter reads **circuit (effective) Q** ≤ true coil Q. `Q = ωL/R = 1/(ωCR)` — high Q means **low R** relative to reactance. Frequency counter accuracy depends on the **gate-time/clock**, not the input amplitude.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Q from Q-meter | `Q = Vc/E` |
| Q factor | `Q = ωL/R = 1/(ωCR) = (1/R)√(L/C)` |
| Resonance frequency | `f = 1/(2π√(LC))` |
| Effective resistance | `R = ωL/Q` |
| Frequency counter | `f = count / gate-time` |
| Phase (time shift) | `φ = 360°·(Δt/T)` |

### 🧮 Solved Examples

**Example 1 — Q and effective resistance.**
A Q-meter at `f = 1 MHz` resonates a coil with `C = 100 pF`; the Q reads **120**. Find `L` and the effective resistance `R`.

- `L = 1/((2πf)²·C) = 1/((2π×10⁶)²×100×10⁻¹²)`; `(2π×10⁶)² = 3.948×10¹³`; `×100×10⁻¹² = 3.948`; `L = 1/3.948 = 0.253 mH ≈ 253 µH`.
- `R = ωL/Q = (2π×10⁶ × 253×10⁻⁶)/120 = (1589.5)/120 = 13.2 Ω`.

**Example 2 — frequency counter.**
A digital frequency counter records **48,000 counts** in a gate time of **0.1 s**. Frequency?

- `f = count/gate = 48000/0.1 = 480,000 Hz = 480 kHz`.

> 🧠 **MEMORY HOOK** — "**Q-meter: Vc = Q·E at resonance.**" Frequency counter = **count/gate**; phase = **360·Δt/T**.

### ⚠️ Common Traps

1. Forgetting the Q-meter reads **circuit Q** (≤ true coil Q).
2. Mixing `Q = ωL/R` with `1/(ωCR)` (both valid at resonance).
3. Thinking counter accuracy depends on amplitude (it's the **gate/clock**).
4. Wrong resonance formula (`f = 1/2π√(LC)`).
5. Ignoring distributed capacitance in high-frequency coils.
6. Phase from Lissajous: `sinφ = y-intercept/y-max`.

### 📝 Test — Q-meter & Freq/Phase (8 Q)

1. A Q-meter works on the principle of: (a) bridge balance (b) series resonance (c) deflection (d) null current.
2. At resonance, the capacitor voltage is: (a) E/Q (b) Q·E (c) E (d) 2E.
3. Q factor equals: (a) ωL/R (b) R/ωL (c) ωRL (d) 1/ωL.
4. A digital frequency counter measures: (a) count/gate-time (b) amplitude (c) phase (d) power.
5. Phase from a time shift Δt over period T is: (a) 360·Δt/T (b) Δt/T (c) T/Δt (d) 180·T/Δt.
6. **(NAT)** Q-meter: E = 20 mV, Vc = 4 V. Q?
7. **(NAT)** Coil: ωL = 2000 Ω, Q = 100. Effective R (Ω)?
8. **(NAT)** Counter: 90,000 counts in 0.05 s. Frequency (kHz)?

<details><summary>🔑 Solutions</summary>

**Q1 — (b) series resonance.**

**Q2 — (b) Q·E.**

**Q3 — (a) ωL/R.**

**Q4 — (a) count/gate-time.**

**Q5 — (a) 360·Δt/T.**

**Q6.** `Q = Vc/E = 4/0.02 = 200`.

**Q7.** `R = ωL/Q = 2000/100 = 20 Ω`.

**Q8.** `f = 90000/0.05 = 1,800,000 Hz = 1800 kHz`.

</details>

---

## 🔧 Electrical Machines: Single-Phase Transformer Fundamentals (Round-4 Restart)

### 📖 Concept Deep Dive

Round 4 restarts machines at the transformer — the most-tested topic (static, pure magnetics + circuits).

**EMF equation.** Sinusoidal core flux `φ = φm sin(ωt)` in `N` turns induces RMS EMF:

```
E = 4.44 f N φm     (φm = Bm·Ac, peak core flux)
E1/E2 = N1/N2 = a  (turns ratio, same core flux links both windings)
```

**Ideal vs practical.** Ideal: no winding R, no leakage, infinite permeability, no core loss → `V1/V2 = a = I2/I1`. Practical departures: winding resistance (`R1,R2`), leakage reactance (`X1,X2`), finite permeability (magnetising `Xm`), core loss (`Rc`).

**No-load operation.** Exciting current `I0 = √(Iw² + Im²)`; `Iw = I0cosφ0` (core-loss/working component, supplies `P0 ≈ core loss`), `Im = I0sinφ0` (magnetising, lags V by 90°, sets up flux). `I0` is 2-5% of full-load current, peaky (harmonic-rich due to saturation), low pf (0.1-0.2 lag).

**Impedance transfer.** `Z2' = a²·Z2` — refer everything to one side. This `a²` scaling underlies all transformer numericals.

**Key relations recap:**

```
φm = V1/(4.44 f N1)  ⇒  φm ∝ V/f   (flux set by V & f, not load)
V/N = 4.44 f φm       (volts per turn, same both windings)
```

> 💎 **KEY RESULT** — `E = 4.44 f N φm`; `a = N1/N2 = E1/E2 = I2/I1`; refer impedance by **a²**; no-load `P0 ≈ core loss`, `I0 = √(Iw²+Im²)`; **φm ∝ V/f** (constant with load at fixed V, f).

> ⚠️ **TRAP ALERT** — Drop in frequency at constant V **raises φm** (`φm ∝ V/f`) → saturation/high magnetising current. Refer impedance by **a²** (not a). No-load current is **peaky** (3rd-harmonic-rich), not sinusoidal.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| EMF | `E = 4.44 f N φm` |
| Turns ratio | `a = N1/N2 = E1/E2 = I2/I1` |
| Flux vs voltage | `φm = V1/(4.44 f N1)` ⇒ `φm ∝ V/f` |
| No-load current | `I0 = √(Iw² + Im²)` |
| Referred impedance | `Z2' = a²·Z2` |
| Core loss (no-load) | `P0 = V1·I0·cosφ0` |

### 🧮 Solved Examples

**Example 1 — EMF & turns.**
A 1-φ transformer, 50 Hz, net core area `0.03 m²`, `Bm = 1.2 T`, secondary `220 V`. Secondary turns?

- `φm = Bm·Ac = 1.2 × 0.03 = 0.036 Wb`.
- `N2 = V2/(4.44 f φm) = 220/(4.44 × 50 × 0.036) = 220/7.992 = 27.5 ≈ 28 turns`.

**Example 2 — no-load components.**
No-load: `I0 = 1.0 A` at 0.2 pf lag, `230 V`. Core loss, `Iw`, `Im`?

- `P0 = 230 × 1.0 × 0.2 = 46 W` (core loss).
- `Iw = 1.0 × 0.2 = 0.2 A`; `Im = 1.0 × √(1−0.04) = 0.98 A`.

> 🧠 **MEMORY HOOK** — "**4.44 fNφm; refer by a²; φm ∝ V/f; no-load P0 = core loss.**"

### ⚠️ Common Traps

1. Dropping the **4.44** (= 2π/√2).
2. Thinking flux depends on load (it's `∝ V/f`).
3. Referring impedance by `a` not `a²`.
4. Assuming `I0` sinusoidal (peaky/harmonic).
5. Confusing `Iw` (core loss) with total `I0`.
6. Low no-load pf (0.1-0.2) means `Im ≫ Iw`.

### 📝 Test — Transformer Fundamentals (8 Q)

1. In `E = 4.44 f N φm`, 4.44 = : (a) √3 (b) 2π (c) 2π/√2 (d) π.
2. At constant V, halving frequency makes φm: (a) halve (b) double (c) unchanged (d) quarter.
3. Impedance is referred to the other side by: (a) a (b) a² (c) 1/a (d) √a.
4. The open-circuit test measures: (a) copper loss (b) core loss (c) both (d) stray loss.
5. No-load current is rich in: (a) 2nd harmonic (b) 3rd harmonic (c) 5th only (d) none.
6. **(NAT)** 1100/220 V, 50 Hz, φm = 0.04 Wb. Primary turns N1?
7. **(NAT)** No-load I0 = 0.8 A at 0.25 pf. Magnetising Im (A, 2 dp)?
8. **(NAT)** Volts per turn: 50 Hz, φm = 0.02 Wb?

<details><summary>🔑 Solutions</summary>

**Q1 — (c) 2π/√2.**

**Q2 — (b) double.**

**Q3 — (b) a².**

**Q4 — (b) core loss.**

**Q5 — (b) 3rd harmonic.**

**Q6.** `N1 = 1100/(4.44×50×0.04) = 1100/8.88 = 123.9 ≈ 124`.

**Q7.** `Im = 0.8×√(1−0.0625) = 0.8×0.968 = 0.77 A`.

**Q8.** `V/N = 4.44×50×0.02 = 4.44 V`.

</details>

---

## 🔧 Power Electronics: The Power-Device Family (Round-4 Restart)

### 📖 Concept Deep Dive

Round 4 restarts power electronics with the switches. The **controllability tiers**:

- **Uncontrolled** — **power diode** (conducts when forward-biased; off by circuit).
- **Semi-controlled** — **SCR/thyristor** (gate turns ON only; off by commutation; latching, `α1+α2→1`).
- **Fully controlled** — **BJT, MOSFET, IGBT, GTO** (gate/base controls both on and off).

| Device | Drive | Carrier | Speed | Rating | On-drop |
|---|---|---|---|---|---|
| Diode | none | bipolar | fast | kV/kA | ~0.7-1 V |
| SCR | current pulse (latch) | bipolar | slow | highest | ~1.5 V |
| BJT | continuous base I | bipolar | medium | medium | low Vce,sat |
| MOSFET | voltage (gate) | **unipolar** | **fastest** | low-med V | I²·Ron |
| IGBT | voltage (gate) | bipolar-out | fast | high V&I | ~1.5-2 V |
| GTO | current (turn-off) | bipolar | slow | very high | ~2-3 V |

**Key comparisons:**
- **MOSFET** — voltage-controlled, **majority-carrier/unipolar** → very fast, no storage/second-breakdown; conduction loss **I²·Ron** rises steeply with voltage rating; **positive Ron tempco** → easy paralleling. Best for **high frequency / low-medium voltage** (SMPS).
- **IGBT** — MOSFET gate + BJT output → low, flat `Vce,sat` at high voltage, easy voltage drive; **tail current** at turn-off limits `fsw`. Dominates **medium/high-power** (motor drives, inverters).
- **BJT** — current-controlled (`Ib = Ic/β`), storage delay, second breakdown.
- **Frequency map:** MOSFET (high fsw) → IGBT (medium) → GTO/SCR (line frequency).

> 💎 **KEY RESULT** — Diode (uncontrolled), SCR (semi, gate-on-only, latching), BJT/MOSFET/IGBT/GTO (fully controlled). **MOSFET = voltage/unipolar/fast/I²Ron**; **IGBT = voltage gate + bipolar output/low Vce,sat/tail current**; frequency map MOSFET→IGBT→SCR.

> ⚠️ **TRAP ALERT** — SCR gate turns it **ON only** (off needs commutation). **MOSFET** conduction loss is `I²Ron` (quadratic); **IGBT/diode** is `V·I` (linear) — crossover current `I = Vce/Ron`. Only **GTO** (not SCR) turns off from the gate.

### 📐 Formula Sheet

| Quantity | Relation |
|---|---|
| BJT base drive | `Ib = Ic/β` |
| MOSFET conduction loss | `Pcond = Irms²·Ron` |
| IGBT/diode conduction loss | `Pcond = Vce·I` (linear) |
| MOSFET/IGBT crossover current | `I = Vce/Ron` |
| Switching loss | `Psw = ½·V·I·(ton+toff)·fsw` |
| SCR turn-on | `α1 + α2 → 1` |

### 🧮 Solved Examples

**Example 1 — device choice.**
A `150 kHz`, `36 V`, `8 A` converter switch — pick the device.

- High `fsw` (150 kHz) + low voltage (36 V) → **MOSFET** (fastest, low Ron loss, no tail current). IGBT would suffer tail-current loss; BJT needs continuous base drive.

**Example 2 — MOSFET vs IGBT crossover.**
MOSFET `Ron = 0.05 Ω`; IGBT `Vce,sat = 1.5 V`. Crossover current?

- `I = Vce/Ron = 1.5/0.05 = 30 A`. Below 30 A MOSFET is lower-loss; above 30 A the IGBT wins.

> 🧠 **MEMORY HOOK** — "**High freq → MOSFET; high power → IGBT; highest power/low freq → SCR/GTO.**" Crossover `I = Vce/Ron`.

### ⚠️ Common Traps

1. Calling the SCR fully controllable (gate turns it **on** only).
2. Assuming MOSFET best at all powers (I²Ron hurts at high V).
3. Forgetting IGBT **tail current** limits fsw.
4. MOSFETs hard to parallel — actually **easy** (positive Ron tempco).
5. Power BJT needs **continuous** base current.
6. Switching loss `∝ fsw`.

### 📝 Test — Power Devices (8 Q)

1. Voltage-controlled AND unipolar device: (a) BJT (b) MOSFET (c) IGBT (d) GTO.
2. An SCR turns off when: (a) gate removed (b) anode I < holding current (c) gate reversed (d) gate current reversed.
3. For 100 kHz SMPS, choose: (a) SCR (b) GTO (c) MOSFET (d) diode.
4. The IGBT combines: (a) MOSFET gate + BJT output (b) BJT gate + MOSFET output (c) two SCRs (d) two MOSFETs.
5. MOSFETs parallel easily because Ron: (a) falls with temperature (b) rises with temperature (c) is zero (d) negative.
6. **(NAT)** MOSFET Ron = 0.1 Ω, IGBT Vce = 1.8 V. Crossover current (A)?
7. **(NAT)** Switching loss: V = 400, I = 15, ton = toff = 0.4 µs, fsw = 25 kHz. Psw (W)?
8. **(NAT)** BJT Ic = 30 A, β = 15. Base current (A)?

<details><summary>🔑 Solutions</summary>

**Q1 — (b) MOSFET.**

**Q2 — (b) anode I < holding current.**

**Q3 — (c) MOSFET.**

**Q4 — (a) MOSFET gate + BJT output.**

**Q5 — (b) rises with temperature.**

**Q6.** `I = 1.8/0.1 = 18 A`.

**Q7.** `Psw = ½×400×15×(0.8×10⁻⁶)×25000 = ½×400×15×0.02 = 60 W`.

**Q8.** `Ib = 30/15 = 2.0 A`.

</details>

---

> 🧠 **DAY-62 WRAP** — **Q-meter:** `Vc = Q·E` at resonance, `Q = ωL/R`, freq counter = count/gate. **Transformer:** `E = 4.44 fNφm`, refer by a², φm ∝ V/f. **Devices:** diode/SCR(semi)/MOSFET-IGBT(full); MOSFET I²Ron/fast, IGBT V·I/high-power, crossover `I = Vce/Ron`. ⚡

**🔁 Round progress:** Measurements ▓▓▓▓▓▓▓▓▓▓ (20/21 round-3; 1 topic left) · Machines & Power Electronics → **Round 4 begins** (Transformer & devices restarted). 🎓 Power Systems joins as a 4th subject once the reference PDFs arrive.
