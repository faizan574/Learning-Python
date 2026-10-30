# ⚡ GATE Technical Revision — Day 101 (2026-10-30)

*AC bridges for capacitance & dielectric loss (Schering, De Sauty, Wien) plus Wagner earthing; the transformer equivalent circuit, phasor diagram and voltage regulation; and the power diode's static/dynamic behaviour, reverse recovery and the freewheeling diode.*

📅 Tech Day 101 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics

---

## 🔧 Measuring Instruments: AC Bridges II — Schering, De Sauty, Wien & Wagner Earthing

### 📖 Concept Deep Dive

This group of AC bridges measures **capacitance, dielectric loss (tan δ) and frequency**. All obey the general balance `Z1·Z4 = Z2·Z3` (products of opposite arms equal) — giving **two** equations (real and imaginary parts).

**Schering bridge** — the standard bridge for **capacitance and dissipation factor (tan δ)** of capacitors and, at high voltage, **insulation testing**. The unknown is a capacitor `C1` with a small series loss resistance `r1` (modelling its dielectric loss). The opposite arm uses a **loss-free standard capacitor `C2`**; the other two arms are a non-inductive resistor `R3` and a parallel combination `R4 ∥ C4`. Balancing the real and imaginary parts gives:

```
C1  = C2 · (R4/R3)
r1  = R3 · (C4/C2)
tan δ = ω·r1·C1 = ω·C4·R4      ← the key invariant result
```

The beauty is that **`tan δ = ω C4 R4`** depends only on the `R4∥C4` arm and is independent of the standard capacitor — so the dissipation factor is read directly. (Arm labelling varies between texts, but `tan δ = ω C4 R4` is the universally quoted result.)

**De Sauty bridge** — the simplest **capacitance-comparison** bridge: two capacitor arms (unknown `C1`, standard `C2`) and two resistor arms `R3`, `R4`. Balance:

```
C1 = C2 · (R4/R3)      (ideal, loss-free capacitors)
```

Its limitation: a **perfect balance is only possible with loss-free capacitors**. Real (lossy) capacitors never fully null, so a **modified De Sauty** adds series resistances in the capacitor arms — this also lets it measure the **dissipation factors**, and the difference of the two series resistances gives the difference of loss angles.

**Wien bridge** — measures **frequency** (and is the heart of the **Wien-bridge oscillator**). One arm is a **series R-C** (`R1`, `C1`), the adjacent arm a **parallel R-C** (`R2`, `C2`), plus resistors `R3`, `R4`. The two balance conditions are:

```
R4/R3 = R1/R2 + C2/C1
f = 1 / (2π·√(R1·R2·C1·C2))
```

For the common symmetric case `R1 = R2 = R`, `C1 = C2 = C`: `f = 1/(2πRC)` and `R4/R3 = 2`. Because balance depends on frequency, the Wien bridge is **frequency-selective** (hence its use in oscillators and harmonic-distortion analysers).

**Sources & detectors.** AC bridges are energised by an **AC source/oscillator**; detectors are **headphones** (audio range), a **tuned amplifier + detector**, or a **vibration galvanometer** (power/low frequency). The source frequency must be stable for frequency-dependent bridges (Hay, Wien).

**Wagner earthing device.** At high frequency or high impedance, **stray capacitances to earth** shunt the bridge arms and spoil balance. The **Wagner earth** is an auxiliary pair of impedances (an extra arm) whose junction is earthed; it is adjusted so the **detector terminals sit at earth potential**, so the stray earth capacitances carry no current through the detector. It removes earth-capacitance errors (it does **not** itself measure anything).

> 💎 **KEY RESULT** — **Schering**: `C1 = C2·R4/R3`, `tan δ = ω·C4·R4` (insulation/HV loss testing). **De Sauty**: `C1 = C2·R4/R3` (needs loss-free caps; modified version for lossy). **Wien**: `f = 1/(2π√(R1R2C1C2))`, symmetric → `f = 1/(2πRC)`, `R4/R3 = 2`.

> 🧠 **MEMORY HOOK** — "**Schering → tan δ = ωC4R4; De Sauty → compare C; Wien → frequency (1/2πRC); Wagner → kills earth-capacitance error.**"

### 📐 Formula Sheet

| Quantity | Expression |
|---|---|
| General AC balance | `Z1·Z4 = Z2·Z3` |
| Schering capacitance | `C1 = C2·(R4/R3)` |
| Schering dissipation factor | `tan δ = ω·C4·R4` |
| De Sauty (ideal) | `C1 = C2·(R4/R3)` |
| Wien frequency | `f = 1/(2π·√(R1R2C1C2))` |
| Wien symmetric | `f = 1/(2πRC)`, `R4/R3 = 2` |

### 🧮 Solved Examples

**Example 1 — Schering bridge (tan δ).**
A Schering bridge at `f = 50 Hz` balances with standard `C2 = 100 pF`, `R3 = 1000 Ω`, `R4 = 3183 Ω`, `C4 = 1 nF`. Find the unknown capacitance `C1` and its dissipation factor.

```
C1 = C2·R4/R3 = 100 pF · (3183/1000) = 318.3 pF
ω  = 2π·50 = 314.16 rad/s
tan δ = ω·C4·R4 = 314.16 · 1×10⁻⁹ · 3183 = 1.0×10⁻³
```

`C1 ≈ 318 pF`, `tan δ ≈ 0.001` (a very low-loss capacitor).

**Example 2 — Wien bridge frequency.**
A symmetric Wien bridge uses `R = 10 kΩ`, `C = 10 nF` in both RC arms. Find the balance frequency.

```
f = 1/(2πRC) = 1 / (2π · 10000 · 10×10⁻⁹)
  = 1 / (2π · 1×10⁻⁴) = 1 / (6.283×10⁻⁴) ≈ 1591.5 Hz
```

Balance frequency `f ≈ 1.59 kHz` (with `R4/R3 = 2`).

### ⚠️ Common Traps

1. **tan δ depends on the standard capacitor** — no; `tan δ = ω C4 R4` uses only the `R4∥C4` arm.
2. **De Sauty balances for any capacitor** — only for **loss-free** caps; lossy caps need the **modified** De Sauty.
3. **Wien bridge is frequency-independent** — it is **frequency-dependent** (`f = 1/2πRC`), used for frequency measurement/oscillators.
4. **Wagner earth measures capacitance** — it only **removes earth-capacitance errors**; it measures nothing.
5. **Using a DC galvanometer** — AC bridges need an **AC detector** (headphone / tuned amp / vibration galvanometer).
6. **Schering ratio inverted** — keep `C1 = C2·R4/R3`; check dimensions (capacitance × resistance-ratio = capacitance).

### 📝 Test — Measuring Instruments (8 Q)

1. The Schering bridge is primarily used to measure:
   (a) inductance (b) capacitance & tan δ (c) frequency (d) resistance
2. In a Schering bridge the dissipation factor is:
   (a) ωC4R4 (b) ωC2R3 (c) 1/ωC4R4 (d) ωL/R
3. The De Sauty bridge compares an unknown capacitor with a:
   (a) standard inductor (b) standard capacitor (c) standard resistor (d) frequency source
4. A perfect De Sauty balance requires the capacitors to be:
   (a) lossy (b) loss-free (c) high-voltage (d) electrolytic
5. The Wien bridge balance frequency (symmetric) is:
   (a) 2πRC (b) 1/(2πRC) (c) 1/(RC) (d) RC/2π
6. The Wagner earthing device is used to:
   (a) measure earth resistance (b) eliminate stray earth-capacitance errors (c) increase sensitivity (d) measure tan δ
7. **(NAT)** A Schering bridge: C4 = 0.2 µF, R4 = 500 Ω, f = 50 Hz. Find tan δ.
8. **(NAT)** A symmetric Wien bridge: R = 1 kΩ, C = 100 nF. Find f (Hz).

<details><summary>🔑 Solutions</summary>

**1 → (b).** Capacitance and dissipation factor (HV insulation testing).

**2 → (a).** `tan δ = ω C4 R4`.

**3 → (b).** Standard capacitor.

**4 → (b).** Loss-free.

**5 → (b).** `f = 1/(2πRC)`.

**6 → (b).** Eliminates stray earth-capacitance errors.

**7 (NAT).** `tan δ = ωC4R4 = 2π·50·0.2×10⁻⁶·500 = 314.16·1×10⁻⁴ = 0.0314`.

**8 (NAT).** `f = 1/(2πRC) = 1/(2π·1000·100×10⁻⁹) = 1/(2π·1×10⁻⁴) ≈ 1591.5 Hz`.

</details>

---

## 🔧 Electrical Machines: Transformers II — Equivalent Circuit, Phasor Diagram, Voltage Regulation & Per-Unit

### 📖 Concept Deep Dive

The **exact equivalent circuit** of a transformer represents every physical effect: primary winding resistance `R1` and leakage reactance `X1`; secondary `R2`, `X2`; and the **shunt (excitation) branch** at the primary — `R0` carrying the **core-loss** current `Iw` (`R0 = V1/Iw`) in parallel with magnetising reactance `X0` carrying `Im` (`X0 = V1/Im`).

**Referring quantities across the ratio `a = N1/N2`.** To combine the two windings, refer the secondary to the primary (multiply by `a²` for impedances):

```
R2' = a²·R2 ,  X2' = a²·X2
R01 = R1 + a²·R2  (equivalent resistance referred to primary)
X01 = X1 + a²·X2  (equivalent leakage reactance referred to primary)
Z01 = √(R01² + X01²)
```

Referred to the **secondary** side instead:

```
R02 = R2 + R1/a² ,  X02 = X2 + X1/a² ,  Z02 = √(R02² + X02²)
```

**Approximate equivalent circuit.** Because the no-load current is only ~2–5% of full load, the shunt branch is shifted to the input terminals, leaving a simple series `R0e + jX0e` — accurate enough for regulation/efficiency calculations.

**Phasor diagram (lagging pf load).** Take `V2` as reference; the load current `I2` lags by `φ`. Add the resistive drop `I2·R02` (in phase with `I2`) and the reactive drop `I2·X02` (leading `I2` by 90°) to reach the no-load secondary EMF `E2`. The phasor length difference between `E2` and `V2` is the regulation drop.

**Voltage regulation.** The change in secondary terminal voltage from no-load to full-load, as a fraction of the rated voltage:

```
VR = (E2 − V2)/V2 × 100 %
VR ≈ [I2·(R02·cosφ ± X02·sinφ)] / V2 × 100 %
      (+ for lagging pf, − for leading pf)
```

In per-unit (with `εr = I2R02/V2`, `εx = I2X02/V2`):

```
VR(pu) = εr·cosφ ± εx·sinφ
```

**Special pf conditions:**
- **Zero regulation** occurs at a **leading** pf with `tanφ = R02/X02` (the two terms cancel).
- **Maximum regulation** occurs at a **lagging** pf with `tanφ = X02/R02`, giving `VR_max = I2·Z02/V2`.

**Per-unit (pu) system.** Choose base VA (`S_base`) and base voltage (`V_base`); then `Z_base = V_base²/S_base` and `Z_pu = Z_actual/Z_base`. The great advantage: **pu impedance is the same referred to either side** of an ideal transformer, so the ratio vanishes from calculations. The **short-circuit test** directly yields the pu (or %) impedance, `%Z = Z_pu × 100`.

> 💎 **KEY RESULT** — `R01 = R1 + a²R2`, `X01 = X1 + a²X2` (`a = N1/N2`). `VR ≈ I2(R02cosφ ± X02sinφ)/V2` (+lag, −lead). Zero VR at **leading** pf, `tanφ = R02/X02`; max VR at **lagging** pf, `tanφ = X02/R02`. pu: `Z_base = V_base²/S_base`; pu Z same on both sides.

> 🧠 **MEMORY HOOK** — "**Refer with a²; regulation = I(Rcosφ ± Xsinφ)/V (+lag −lead); leading pf can give zero/negative regulation.**"

### 📐 Formula Sheet

| Quantity | Expression |
|---|---|
| Turns ratio | `a = N1/N2 = V1/V2` |
| Referred resistance (to pri) | `R01 = R1 + a²R2` |
| Referred reactance (to pri) | `X01 = X1 + a²X2` |
| Voltage regulation | `VR ≈ I2(R02cosφ ± X02sinφ)/V2` |
| Zero regulation | leading pf, `tanφ = R02/X02` |
| Max regulation | lagging pf, `tanφ = X02/R02` |
| Base impedance | `Z_base = V_base²/S_base` |
| Per-unit impedance | `Z_pu = Z_actual/Z_base` |

### 🧮 Solved Examples

**Example 1 — Voltage regulation.**
A single-phase transformer has equivalent values referred to the secondary `R02 = 0.02 Ω`, `X02 = 0.06 Ω`; rated secondary `V2 = 250 V`, full-load secondary current `I2 = 100 A`. Find the regulation at `0.8 pf lagging`.

```
cosφ = 0.8 ⇒ sinφ = 0.6
VR = I2(R02cosφ + X02sinφ)/V2
   = 100(0.02·0.8 + 0.06·0.6)/250
   = 100(0.016 + 0.036)/250
   = 100·0.052/250 = 5.2/250 = 0.0208 = 2.08 %
```

Voltage regulation `≈ 2.08 %` (lagging).

**Example 2 — Per-unit impedance.**
A `100 kVA`, `2000/200 V` transformer has total equivalent impedance referred to the primary `Z01 = 4 + j6 Ω`. Find the per-unit impedance (on the primary side).

```
Z_base(pri) = V_base²/S_base = (2000)²/(100×10³) = 4×10⁶/1×10⁵ = 40 Ω
Z_pu = Z01/Z_base = (4 + j6)/40 = 0.10 + j0.15  pu
|Z_pu| = √(0.10² + 0.15²) = √(0.01+0.0225) = √0.0325 ≈ 0.180 pu  (≈ 18 %)
```

Per-unit impedance `≈ 0.10 + j0.15 pu` (magnitude ≈ 18%) — the same value if computed on the secondary side.

### ⚠️ Common Traps

1. **Referring with `a` instead of `a²`** — impedances scale with `a²` (`R2' = a²R2`).
2. **Sign in regulation** — **+** for lagging, **−** for leading pf; a leading pf can give **negative** regulation.
3. **Zero regulation at lagging pf** — it is at a **leading** pf (`tanφ = R02/X02`).
4. **Max regulation pf** — at `tanφ = X02/R02` (**lagging**), `VR_max = I2Z02/V2`.
5. **pu impedance differs per side** — pu impedance is **the same** on both sides (its key advantage).
6. **Using average instead of rated V2** — regulation is referenced to the **rated** terminal voltage.

### 📝 Test — Electrical Machines (8 Q)

1. Equivalent resistance referred to the primary is:
   (a) R1 + R2 (b) R1 + a²R2 (c) R1 + R2/a² (d) a²(R1+R2)
2. For voltage regulation, the sign for a lagging power factor is:
   (a) negative (b) positive (c) zero (d) depends on load
3. Zero voltage regulation occurs at:
   (a) unity pf (b) leading pf, tanφ = R02/X02 (c) lagging pf (d) zero pf
4. Maximum voltage regulation occurs when:
   (a) tanφ = X02/R02 (lagging) (b) tanφ = R02/X02 (c) unity pf (d) φ = 0
5. The per-unit impedance of a transformer:
   (a) differs on each side (b) is the same on both sides (c) depends on turns only (d) is always 1
6. Base impedance is given by:
   (a) S_base/V_base² (b) V_base²/S_base (c) V_base·S_base (d) V_base/S_base
7. **(NAT)** R02 = 0.05 Ω, X02 = 0.1 Ω, V2 = 200 V, I2 = 50 A. Find VR (%) at unity pf.
8. **(NAT)** A 50 kVA, 1000/100 V transformer has Z referred to primary = 2 + j4 Ω. Find |Z_pu| (%).

<details><summary>🔑 Solutions</summary>

**1 → (b).** `R01 = R1 + a²R2`.

**2 → (b).** Positive (+) for lagging.

**3 → (b).** Leading pf, `tanφ = R02/X02`.

**4 → (a).** `tanφ = X02/R02` (lagging).

**5 → (b).** Same on both sides.

**6 → (b).** `Z_base = V_base²/S_base`.

**7 (NAT).** At unity pf: cosφ=1, sinφ=0. `VR = I2·R02/V2 = 50·0.05/200 = 2.5/200 = 0.0125 = 1.25 %`.

**8 (NAT).** `Z_base = 1000²/50000 = 1×10⁶/5×10⁴ = 20 Ω`; `Z_pu = (2+j4)/20 = 0.1 + j0.2`; `|Z_pu| = √(0.01+0.04)=√0.05 = 0.2236 ≈ 22.4 %`.

</details>

---

## 🔧 Power Electronics: Power Diode & Switching Behaviour — Static/Dynamic Characteristics, Reverse Recovery & Freewheeling Diode

### 📖 Concept Deep Dive

The **power diode** is a two-terminal, **uncontrolled** switch — it conducts when forward-biased and blocks when reverse-biased. To block high reverse voltages it has a **lightly-doped n⁻ drift region** between the p and n⁺ layers; this wide drift region is the price for high `VRRM` and causes a **larger forward drop (~0.7–1.5 V)** than a signal diode.

**Static (steady-state) characteristics:**
- **Forward:** negligible current until the **threshold/cut-in** voltage, then current rises steeply; modelled as a voltage source `VF0` plus on-state resistance `rF` (`vF = VF0 + rF·iF`).
- **Reverse:** a tiny **leakage current** until the **reverse breakdown (avalanche)** voltage `VBR`; `VRRM` (peak repetitive reverse voltage) is the key rating.

**Dynamic (switching) behaviour — reverse recovery.** This dominates high-frequency performance. When a conducting diode is suddenly reverse-biased, the **stored minority-carrier charge** must be swept out before it can block. The current goes negative, reaches a **peak reverse current `IRR`**, then decays to zero over the **reverse recovery time `trr`**:

```
trr = ta + tb
```

- `ta` = time for charge removal until `IRR` (set by the external `di/dt`): `ta = IRR/(di/dt)`.
- `tb` = decay of reverse current to zero; the **softness factor** `S = tb/ta` describes how "snappy" (S small) or "soft" (S large) the recovery is.
- **Reverse recovery charge** `Qrr` = area under the reverse-current curve ≈ triangle:

```
Qrr = (1/2)·IRR·trr
```

For a **snappy** diode (`S → 0`, so `trr ≈ ta`), combining `ta = IRR/(di/dt)` with `Qrr = ½·IRR·trr`:

```
IRR = √(2·Qrr·(di/dt))
trr = √(2·Qrr/(di/dt))
```

A larger `di/dt` gives a higher `IRR` (more reverse-current spike) — important in choppers/inverters. **Fast-recovery diodes** minimise `trr` (via lifetime control/gold doping); **Schottky diodes** are **majority-carrier**, so they have **negligible reverse recovery** and a low forward drop — but only at **low reverse voltages** (~≤100–200 V). At turn-on there is also a brief **forward recovery** voltage overshoot.

**Freewheeling diode (FWD).** Connected **anti-parallel across an inductive load** (or across the output of a converter). When the main switch/SCR turns off, the inductor's current cannot change instantly; the FWD provides a **path for this trapped current**, so:
- it **prevents the large inductive voltage spike** (`L·di/dt`) that would otherwise damage the switch,
- it **freewheels** the stored energy, making **load current continuous and smoother**,
- in rectifiers it **improves input power factor** and prevents the output from going negative.

> 💎 **KEY RESULT** — `trr = ta + tb`, `Qrr = ½·IRR·trr`, `ta = IRR/(di/dt)`. Snappy diode: `IRR = √(2·Qrr·di/dt)`, `trr = √(2·Qrr/(di/dt))`. **Schottky** = majority carrier → ~no reverse recovery, low drop, low voltage. **FWD** = anti-parallel across inductive load; gives current a path, kills the L·di/dt spike.

> 🧠 **MEMORY HOOK** — "**Qrr = ½·IRR·trr; IRR = √(2·Qrr·di/dt). Schottky = no recovery. FWD = path for inductor current, no spike.**"

### 📐 Formula Sheet

| Quantity | Expression |
|---|---|
| Forward model | `vF = VF0 + rF·iF` |
| Recovery time | `trr = ta + tb` |
| Recovery charge | `Qrr = ½·IRR·trr` |
| `ta` from di/dt | `ta = IRR/(di/dt)` |
| Peak reverse current (snappy) | `IRR = √(2·Qrr·(di/dt))` |
| Recovery time (snappy) | `trr = √(2·Qrr/(di/dt))` |
| Softness factor | `S = tb/ta` |

### 🧮 Solved Examples

**Example 1 — Reverse recovery parameters.**
A power diode has reverse recovery charge `Qrr = 20 µC` and the circuit imposes `di/dt = 50 A/µs`. Assuming a snappy recovery (`S → 0`), find the peak reverse current `IRR` and the reverse recovery time `trr`.

```
di/dt = 50 A/µs = 50×10⁶ A/s ,  Qrr = 20×10⁻⁶ C
IRR = √(2·Qrr·(di/dt)) = √(2 · 20×10⁻⁶ · 50×10⁶)
    = √(2 · 20 · 50) = √2000 ≈ 44.7 A
trr = √(2·Qrr/(di/dt)) = √(2 · 20×10⁻⁶ / 50×10⁶)
    = √(40×10⁻⁶ / 50×10⁶) = √(8×10⁻¹³) ≈ 0.894 µs
```

Check: `Qrr = ½·IRR·trr = 0.5·44.7·0.894×10⁻⁶ ≈ 20 µC` ✓. So `IRR ≈ 44.7 A`, `trr ≈ 0.89 µs`.

**Example 2 — Recovery charge from measured values.**
A diode shows `IRR = 10 A` and `trr = 2 µs`. Estimate `Qrr` and the `ta` component if `di/dt = 20 A/µs`.

```
Qrr = ½·IRR·trr = 0.5 · 10 · 2×10⁻⁶ = 1×10⁻⁵ = 10 µC
ta  = IRR/(di/dt) = 10 / (20×10⁶) = 0.5×10⁻⁶ = 0.5 µs
⇒ tb = trr − ta = 2 − 0.5 = 1.5 µs ;  S = tb/ta = 1.5/0.5 = 3 (soft)
```

`Qrr = 10 µC`, `ta = 0.5 µs`, softness factor `S = 3` (a soft-recovery diode).

### ⚠️ Common Traps

1. **Power diode has a low forward drop like a signal diode** — the wide **n⁻ drift region** gives a **higher** forward drop.
2. **Schottky diodes have large reverse recovery** — they are **majority-carrier**, so reverse recovery is **negligible** (but low reverse-voltage only).
3. **`Qrr = IRR·trr`** — it is `Qrr = ½·IRR·trr` (triangular area).
4. **`IRR` independent of `di/dt`** — `IRR` **increases** with `di/dt` (`IRR = √(2Qrr·di/dt)`).
5. **FWD across the source** — it goes **anti-parallel across the inductive load**, not the supply.
6. **FWD conducts with the main switch** — it conducts only when the **main switch is off**, freewheeling the inductor current.

### 📝 Test — Power Electronics (8 Q)

1. The wide lightly-doped drift region in a power diode mainly increases its:
   (a) reverse voltage rating (b) forward current only (c) switching speed (d) gate charge
2. The reverse recovery charge is given by:
   (a) IRR·trr (b) ½·IRR·trr (c) 2·IRR·trr (d) IRR/trr
3. A Schottky diode has negligible reverse recovery because it is a:
   (a) minority-carrier device (b) majority-carrier device (c) bipolar device (d) latching device
4. A freewheeling diode is connected:
   (a) in series with the load (b) anti-parallel across the inductive load (c) across the source (d) in the gate circuit
5. If di/dt increases, the peak reverse recovery current IRR:
   (a) decreases (b) increases (c) stays constant (d) becomes zero
6. The softness factor is defined as:
   (a) ta/tb (b) tb/ta (c) trr/ta (d) IRR·trr
7. **(NAT)** A diode: Qrr = 8 µC, di/dt = 40 A/µs, snappy. Find IRR (A).
8. **(NAT)** For Q7, find trr (µs).

<details><summary>🔑 Solutions</summary>

**1 → (a).** Raises the reverse blocking (breakdown) voltage rating.

**2 → (b).** `Qrr = ½·IRR·trr`.

**3 → (b).** Majority-carrier device (no stored minority charge).

**4 → (b).** Anti-parallel across the inductive load.

**5 → (b).** Increases (`IRR = √(2Qrr·di/dt)`).

**6 → (b).** `S = tb/ta`.

**7 (NAT).** `IRR = √(2·Qrr·di/dt) = √(2·8×10⁻⁶·40×10⁶) = √(2·8·40) = √640 ≈ 25.3 A`.

**8 (NAT).** `trr = √(2·Qrr/(di/dt)) = √(2·8×10⁻⁶/40×10⁶) = √(16×10⁻⁶/40×10⁶) = √(4×10⁻¹³) = 0.632 µs`. (Check: `½·25.3·0.632µs ≈ 8 µC` ✓.)

</details>

---

## 📊 Tech Progress

```
Measurements      [█████████████████░]  Round 5 · topic 17/20 (AC bridges II — Schering/Wien)
Electrical Mach.  [██░░░░░░░░░░░░░░░░░]  Round 6 · topic  2/19 (Transformers II)
Power Electronics [██░░░░░░░░░░░░░░░░░]  Round 6 · topic  2/19 (Power diode & switching)
```

> 🎯 **Day 101 one-liners:** (1) **Schering → tan δ = ωC4R4; Wien → f = 1/(2π√R1R2C1C2); Wagner earth kills stray-earth-C error.** (2) **Refer with a²; VR = I(Rcosφ ± Xsinφ)/V (+lag −lead); pu Z same both sides.** (3) **Qrr = ½·IRR·trr; IRR = √(2Qrr·di/dt); Schottky = no recovery; FWD = anti-parallel path for inductor current.**

*Correctness over length — derive, don't memorise blindly; verify any "verify" figure. Onward. ⚡*
