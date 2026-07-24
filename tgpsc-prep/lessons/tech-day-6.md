# ⚡ GATE Technical Revision — Day 6 (2026-07-24)

*The AC-reading iron vane, the transformer under load, and the diode's hidden switching cost.*

`📅 Tech Day 6  ·  ⏱ ~45 min  ·  🎯 Measurements + Machines + Power Electronics`

Attempt each section's test **before** opening its solutions — recall beats re-reading.

---

## 🔧 Measuring Instruments: Moving Iron (MI) Instruments

Unlike PMMC (DC only), the **Moving Iron** instrument reads **both AC and DC** — the everyday panel ammeter/voltmeter. GATE tests its **square-law scale** and the energy-based torque.

### 📖 Concept Deep Dive

An MI instrument works on the force between a fixed coil's magnetic field and a piece of soft iron. Two types:

| Type | Principle |
|---|---|
| **Attraction** | Current in coil magnetises & pulls a soft-iron disc inward |
| **Repulsion** | Two iron pieces (one fixed, one moving) inside the coil are magnetised with the **same polarity** and repel |

Because the iron is magnetised by the coil current **regardless of direction**, the deflecting torque depends on **current squared** — so MI reads **RMS** on AC (works on DC too).

**Torque from energy principle.** The coil-iron system stores magnetic energy `W = ½·L·I²`, where `L` is the inductance (varies with pointer position θ). At constant current, deflecting torque:

```
Td = ½ · I² · (dL/dθ)
```

Balanced by spring control `Tc = K·θ`:

```
θ = (I²/2K) · (dL/dθ)   ⇒   θ ∝ I²  (if dL/dθ ≈ constant)
```

> 💎 **KEY RESULT** — MI deflection `θ ∝ I²` → **non-uniform, cramped-at-start "square-law" scale**; it indicates the **RMS** value on AC and works on DC as well.

**Errors:**
- **Hysteresis error** — iron's residual magnetism; reading differs on rising vs falling current (worse on DC). Minimised with **nickel-iron (low hysteresis)** cores.
- **Frequency error** — instrument inductance makes readings frequency-dependent (voltmeter). Compensated by a **capacitor across the series (swamping) resistor**.
- **Temperature, stray-field** errors (shielding needed — MI has no strong own field).

> 🧠 **MEMORY HOOK** — "**MI = My Iron reads RMS, square-law scale**"; PMMC = DC uniform, MI = AC/DC square-law.

> ⚠️ **TRAP ALERT** — MI reads **RMS** (true RMS-responding, being square-law), NOT average — a key contrast with rectifier-type meters. Scale is **non-uniform**, unlike PMMC.

### 📐 Formula Sheet

```
Td = ½ I² (dL/dθ)        deflecting torque (energy method)
θ  = (I²/2K)(dL/dθ)      steady deflection (spring control K)
θ ∝ I²                    square-law scale (RMS-reading)
```

### 🧮 Solved Example

An MI instrument's inductance varies as `L = (10 + 4θ − θ²) µH`, θ in radians. Find the deflecting torque at θ = 1 rad for a current of 5 A.

- `dL/dθ = (4 − 2θ) µH/rad = (4 − 2) = 2 µH/rad = 2×10⁻⁶ H/rad`
- `Td = ½ I² (dL/dθ) = ½ × 25 × 2×10⁻⁶ = 25×10⁻⁶ = 2.5×10⁻⁵ N·m`

### ⚠️ Common Traps
- MI reads **RMS**, works on **both AC & DC** (PMMC = DC only).
- Scale is **square-law** (crowded near zero), not uniform.
- Torque uses `dL/dθ` — inductance gradient, not L itself.
- Hysteresis error is worse on **DC**; frequency error affects the **voltmeter**.

#### 📝 Test

**Q1.** A moving-iron instrument reads:
- A) Average value  B) RMS value  C) Peak value  D) DC only

**Q2.** The scale of an MI instrument is:
- A) Uniform  B) Square-law (non-uniform)  C) Logarithmic  D) Reverse

**Q3.** The deflecting torque of an MI instrument is proportional to:
- A) I  B) I²  C) 1/I  D) √I

**Q4.** Frequency error in an MI voltmeter is compensated by:
- A) A series inductor  B) A capacitor across the series resistor  C) A shunt  D) A diode

**Q5.** MI instruments can measure:
- A) DC only  B) AC only  C) Both AC and DC  D) High frequency only

**Q6. (NAT)** An MI instrument has `dL/dθ = 3×10⁻⁶ H/rad` (constant). The deflecting torque at 4 A is ______ ×10⁻⁶ N·m.

**Q7. (NAT)** If deflection θ ∝ I² and θ = 20° at 2 A, then at 3 A the deflection is ______ degrees.

**Q8. (NAT)** `L = (5 + 6θ) µH`. The torque at I = 2 A is ______ ×10⁻⁶ N·m.

<details><summary>🔑 Solutions</summary>

**Q1: B** — Square-law response makes it RMS-reading. **Q2: B** — Square-law, cramped near zero. **Q3: B** — Td ∝ I². **Q4: B** — A capacitor across the swamping resistor. **Q5: C** — Both AC and DC.

**Q6:** `Td = ½ × 4² × 3×10⁻⁶ = ½×16×3×10⁻⁶ = 24×10⁻⁶ N·m`.
**Q7:** `θ ∝ I²` → `θ₂ = 20 × (3/2)² = 20 × 2.25 = 45°`.
**Q8:** `dL/dθ = 6×10⁻⁶`; `Td = ½ × 2² × 6×10⁻⁶ = ½×4×6×10⁻⁶ = 12×10⁻⁶ N·m`.

</details>

---

## 🔧 Electrical Machines: Transformers II — Equivalent Circuit & Voltage Regulation

Day 5 was the no-load ideal; today the transformer **under load** — the equivalent circuit, phasor picture, and voltage regulation.

### 📖 Concept Deep Dive

**Equivalent circuit.** Real windings have resistance `R1, R2` and leakage reactance `X1, X2`; the core needs a magnetising branch. Referring the secondary to the primary (multiply by `a² = (N1/N2)²`):

```
R2' = a²·R2 ,   X2' = a²·X2 ,   V2' = a·V2 ,   I2' = I2/a
Requivalent  Req = R1 + R2'     (total series resistance ref. to primary)
Xequivalent  Xeq = X1 + X2'     (total series reactance ref. to primary)
Zeq = √(Req² + Xeq²)
```

The **magnetising branch** (Ro parallel Xo, carrying the no-load current Io) sits across the input; often shifted to the primary terminals ("approximate equivalent circuit") for load calculations.

**Voltage regulation** = the drop in secondary terminal voltage from no-load to full-load, as a fraction of no-load voltage:

```
%VR = (E2 − V2)/E2 × 100 = (Vno-load − Vfull-load)/Vno-load × 100
```

Using per-unit series drops (referred), for load power-factor angle φ:

```
%VR ≈ (I·Req·cosφ ± I·Xeq·sinφ)/V × 100
     = %R·cosφ ± %X·sinφ
```

`+` sign for a **lagging** pf (inductive load), `−` for **leading** pf.

> 💎 **KEY RESULT** — `%VR ≈ %R·cosφ ± %X·sinφ` (+ lagging, − leading). Regulation is **worst at lagging pf**, can be **zero or negative** at a leading pf.

**Zero-regulation condition:** occurs at a leading pf where `%R·cosφ = %X·sinφ`, i.e. `tanφ = %R/%X` (leading).
**Maximum regulation:** at `tanφ = %X/%R` (lagging).

> 🧠 **MEMORY HOOK** — "Referring to primary: multiply R and X by **a²**, voltage by **a**, current by **1/a**." Regulation "**+lag, −lead**".

> ⚠️ **TRAP ALERT** — A **leading** power-factor load can give **negative** regulation (secondary voltage *rises* on load). Regulation is not efficiency — different concept.

### 📐 Formula Sheet

```
R2' = a²R2 , X2' = a²X2 , a = N1/N2
Req = R1 + R2' ,  Xeq = X1 + X2'
%VR = (E2 − V2)/E2 × 100
%VR ≈ %R·cosφ ± %X·sinφ   (+lag, −lead)
Zero VR: tanφ = %R/%X (leading) ; Max VR: tanφ = %X/%R (lagging)
```

### 🧮 Solved Example

A transformer has `%R = 2%`, `%X = 4%`. Find the regulation at (a) 0.8 pf lagging, (b) 0.8 pf leading.

- cosφ = 0.8, sinφ = 0.6.
- (a) Lagging: `%VR = 2(0.8) + 4(0.6) = 1.6 + 2.4 = 4.0%`.
- (b) Leading: `%VR = 2(0.8) − 4(0.6) = 1.6 − 2.4 = −0.8%` (voltage rises).

### ⚠️ Common Traps
- Refer impedances by **a²**, not a.
- Lagging pf → **+** sign (voltage drops); leading pf → **−** (can rise).
- Regulation compares no-load vs full-load voltage — not input vs output power.
- `%R, %X` are the per-unit resistance/reactance drops at rated current.

#### 📝 Test

**Q1.** To refer secondary resistance to the primary, multiply by:
- A) a  B) a²  C) 1/a  D) 1/a²

**Q2.** Voltage regulation is worst at:
- A) Unity pf  B) Lagging pf  C) Leading pf  D) Zero current

**Q3.** Negative voltage regulation occurs at:
- A) Lagging pf  B) Unity pf  C) Leading pf  D) No load

**Q4.** The approximate %VR is given by:
- A) %R·sinφ ± %X·cosφ  B) %R·cosφ ± %X·sinφ  C) %R + %X  D) %R·%X

**Q5.** Maximum voltage regulation occurs when:
- A) tanφ = %X/%R (lagging)  B) tanφ = %R/%X (leading)  C) φ = 0  D) φ = 90°

**Q6. (NAT)** `%R = 3`, `%X = 4`. Voltage regulation at unity pf is ______ %.

**Q7. (NAT)** `%R = 1.5`, `%X = 3.5`, load 0.6 pf lagging (sinφ = 0.8). %VR is ______ %.

**Q8. (NAT)** A transformer: no-load secondary 250 V, full-load 240 V. Voltage regulation is ______ %.

<details><summary>🔑 Solutions</summary>

**Q1: B** — Multiply by a². **Q2: B** — Lagging pf gives the largest drop. **Q3: C** — Leading pf can raise the voltage. **Q4: B** — %R·cosφ ± %X·sinφ. **Q5: A** — Max at tanφ = %X/%R (lagging).

**Q6:** Unity pf: cosφ=1, sinφ=0 → `%VR = 3(1) + 4(0) = 3%`.
**Q7:** `%VR = 1.5(0.6) + 3.5(0.8) = 0.9 + 2.8 = 3.7%`.
**Q8:** `(250 − 240)/250 × 100 = 4%`.

</details>

---

## 🔧 Power Electronics: Power Diode & Switching Behaviour

The diode is the simplest power switch — but its **reverse recovery** is a real GATE favourite, and the **freewheeling diode** is everywhere.

### 📖 Concept Deep Dive

A power diode conducts when forward-biased (small drop `VF ≈ 0.7–1 V`) and blocks when reverse-biased (small leakage). Key ratings: **PIV** (peak inverse voltage), average/RMS current, `VF`.

**Reverse recovery.** When a conducting diode is suddenly reverse-biased, stored minority-carrier charge must be swept out before it blocks. During the **reverse recovery time trr**, a **reverse current** flows:

```
trr = ta + tb          (ta: charge removal, tb: recovery tail)
QRR = ½ · IRR · trr     (stored/recovered charge, approx triangular)
IRR = trr · (di/dt)·(ta/trr) ...  ; peak reverse current IRR ≈ √(2·QRR·(di/dt))
```

A useful GATE approximation (triangular, ta≈trr): `QRR ≈ ½ · trr · IRR` and `IRR ≈ (di/dt)·ta`.

**Diode types by recovery:**

| Type | trr | Use |
|---|---|---|
| General-purpose (rectifier) | large (µs) | Line-frequency rectifiers |
| **Fast-recovery** | small (ns) | Choppers, inverters (high f) |
| **Schottky** | ~zero (majority carrier) | Low-voltage, very high f, low VF |

> 💎 **KEY RESULT** — Reverse recovery charge `QRR ≈ ½·IRR·trr`; softer/faster diodes (Schottky, fast-recovery) minimise trr and switching loss. Schottky = **majority carrier → negligible trr**.

**Freewheeling diode (FWD).** Across an inductive load, a FWD provides a path for inductor current when the main switch turns off — it **prevents voltage spikes** (`L·di/dt`), **improves load-current continuity**, raises input power factor, and reduces load-current ripple.

> 🧠 **MEMORY HOOK** — "**Free-wheeling diode = the inductor's escape route**"; Schottky = fast + low drop + majority carrier.

> ⚠️ **TRAP ALERT** — Schottky has **negligible reverse recovery** (majority-carrier) but **low PIV** — not for high-voltage. Reverse recovery causes extra **turn-off switching loss** and current spikes in the switch.

### 📐 Formula Sheet

```
trr = ta + tb                    reverse recovery time
QRR ≈ ½ · IRR · trr              recovered charge (triangular approx)
IRR ≈ (di/dt) · ta               peak reverse current
Schottky: trr ≈ 0 (majority carrier), low VF, low PIV
FWD: clamps L·di/dt, keeps load current continuous
```

### 🧮 Solved Example

A diode has reverse recovery time `trr = 2 µs` and peak reverse current `IRR = 5 A`. Estimate the reverse recovery charge (triangular).

- `QRR ≈ ½ · IRR · trr = ½ × 5 × 2×10⁻⁶ = 5×10⁻⁶ = 5 µC`.

### ⚠️ Common Traps
- Schottky = **majority carrier**, negligible trr, but **low reverse voltage** rating.
- Reverse recovery adds **turn-off loss** and a current spike — worse at high di/dt.
- FWD conducts only when the main device is OFF (freewheeling the inductor).
- `VF` of a power diode (~1 V) is not negligible at high current (conduction loss = VF·I).

#### 📝 Test

**Q1.** A Schottky diode has negligible reverse recovery because it is a:
- A) Minority-carrier device  B) Majority-carrier device  C) Bipolar device  D) Wide-base device

**Q2.** The freewheeling diode across an inductive load:
- A) Increases voltage spikes  B) Provides a path for inductor current  C) Blocks load current  D) Rectifies the source

**Q3.** Reverse recovery time trr is the sum of:
- A) ton + toff  B) ta + tb  C) trr + tf  D) tq + tc

**Q4.** For high-frequency choppers, the preferred diode is:
- A) General-purpose rectifier  B) Fast-recovery / Schottky  C) Zener  D) Photodiode

**Q5.** Reverse recovery of a diode primarily causes:
- A) Lower conduction loss  B) Extra turn-off switching loss & current spike  C) Higher PIV  D) Zero leakage

**Q6. (NAT)** A diode has `IRR = 8 A`, `trr = 1.5 µs`. The reverse recovery charge (triangular) is ______ µC.

**Q7. (NAT)** A diode carries 20 A with `VF = 1.1 V`. Its conduction loss is ______ W.

**Q8. (NAT)** If `di/dt = 50 A/µs` and `ta = 0.4 µs`, the peak reverse current IRR ≈ ______ A.

<details><summary>🔑 Solutions</summary>

**Q1: B** — Majority-carrier (no stored minority charge). **Q2: B** — It freewheels the inductor current. **Q3: B** — trr = ta + tb. **Q4: B** — Fast-recovery or Schottky. **Q5: B** — Extra turn-off loss and a reverse current spike.

**Q6:** `QRR = ½ × 8 × 1.5×10⁻⁶ = 6×10⁻⁶ = 6 µC`.
**Q7:** `P = VF·I = 1.1 × 20 = 22 W`.
**Q8:** `IRR ≈ (di/dt)·ta = 50 A/µs × 0.4 µs = 20 A`.

</details>

---

*The iron vane, the loaded transformer, the recovering diode — three more bricks in the wall. Keep stacking.* 💪

`🟩🟩🟩🟩🟩🟩⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜` Measurements **6/21**
`🟩🟩⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜` Machines **2/19**
`🟩🟩⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜` Power Electronics **2/19**
