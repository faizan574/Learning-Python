# ⚡ GATE Technical Revision — Day 69 (2026-09-28)

*Measurements covers the moving-iron meter (square-law, true-RMS), Machines does the DC motor (torque-speed, starters, speed control), and Power Electronics compares the single-phase full-converter and semiconverter.*

📅 Tech Day 69 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics · 🔁 Round 4 (all three sections)

> 🧠 **MEMORY HOOK** — Today: the **moving-iron** meter (`Td = ½ I²·dL/dθ`, square-law, true-RMS), the **DC motor** (`N ∝ (V − IaRa)/φ`, series ⇒ high starting torque), and the converters (**full** `Vdc = (2Vm/π)cosα` vs **semi** `Vdc = (Vm/π)(1+cosα)`).

---

## 🔧 Measuring Instruments: Moving-Iron (MI) Instruments

### 📖 Concept Deep Dive

**Moving-Iron (MI)** meters are rugged, cheap, **AC-and-DC** instruments used for panel voltmeters/ammeters. Two types:
- **Attraction type** — a single soft-iron plate is **drawn into** the coil's magnetic field as current flows.
- **Repulsion type** — two iron pieces (one fixed, one moving) inside the coil are **magnetised with the same polarity** and **repel** each other; deflection follows.

**Torque from the energy principle.** For a coil of inductance `L(θ)` carrying current `I`, the deflecting torque is:
```
Td = ½ · I² · (dL/dθ)
Control torque:  Tc = K·θ
At balance:  θ = (I²/2K)·(dL/dθ)
```
Since `Td ∝ I²`, the deflection is proportional to `I²` ⇒ a **non-uniform, square-law scale** (crowded at the low end, expanded at the high end). Because it responds to `I²`, the MI meter reads the **true RMS** value on AC (and works on DC too).

**Errors:**
- **Hysteresis error** (on DC) — residual magnetism causes different up/down readings; minimised with **nickel-iron** (low-hysteresis) alloy.
- **Eddy-current & frequency error** (on AC) — the coil's **inductive reactance rises with frequency**, so the current (for a voltmeter) falls; MI meters are **calibrated at one frequency** and err at others.
- **Temperature and stray-field** errors — MI meters have **weak operating fields**, so external fields cause error (shielding needed).

**Damping** — usually **air-friction** (a light piston/vane), since eddy-current damping magnets would disturb the working field.

| Feature | Moving Iron |
|---|---|
| Works on | AC & DC (reads **true RMS**) |
| Scale | square-law (non-uniform) |
| Torque | `Td = ½ I² dL/dθ` |
| Main AC error | frequency (reactance) |
| Damping | air friction |

> 💎 **KEY RESULT** — MI: `Td = ½ I²·(dL/dθ)` ⇒ **square-law**, **true-RMS**, works on AC & DC. Main errors: **hysteresis (DC)** and **frequency (AC)**; damping is **air-friction**.

> ⚠️ **TRAP ALERT** — The MI scale is **non-uniform (square-law)**, unlike the linear PMMC. MI reads **true RMS** on any waveform (up to its frequency limit); a **rectifier-PMMC** reads average and errs on non-sinusoids.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Deflecting torque | `Td = ½ I²·(dL/dθ)` |
| Deflection | `θ = (I²/2K)·(dL/dθ)` |
| Scale | `θ ∝ I²` (square-law) |
| Reads | true RMS (AC & DC) |
| Main AC error | frequency (coil reactance) |

### 🧮 Solved Examples

**Example 1 — Deflection ratio (square law).**
An MI instrument deflects `θ1 = 20°` at `I = 2 A`. If `dL/dθ` is roughly constant, find the deflection at `I = 3 A`.

```
θ ∝ I²  ⇒  θ2/θ1 = (I2/I1)² = (3/2)² = 2.25
θ2 = 20° × 2.25 = 45°
```

**Example 2 — Torque from inductance rate.**
An MI meter carries `I = 5 A` and has `dL/dθ = 2 µH/rad`. Find the deflecting torque.

```
Td = ½ I²·(dL/dθ) = ½ × 5² × 2×10⁻⁶
   = 0.5 × 25 × 2×10⁻⁶ = 25×10⁻⁶ N·m = 25 µN·m
```

### ⚠️ Common Traps

1. **Square-law scale** — MI is non-uniform; don't treat it like a linear PMMC.
2. **True-RMS reading** — MI responds to `I²`, so it reads RMS on any waveform (within frequency limits).
3. **Frequency error** — a voltmeter's reactance rises with `f`, so the reading drops; calibrate at rated frequency.
4. **Hysteresis on DC** — up/down readings differ; use low-hysteresis iron.
5. **Weak field ⇒ stray-field error** — shielding needed; not eddy-current damped (would disturb field).
6. **Torque uses `½ I²`** — the half factor is essential.

### 📝 Test (5 MCQ + 3 NAT)

**Q1 (MCQ).** The deflecting torque of an MI instrument is proportional to:
(a) I (b) I² (c) √I (d) 1/I

**Q2 (MCQ).** An MI instrument scale is:
(a) linear (b) square-law (non-uniform) (c) logarithmic (d) exponential

**Q3 (MCQ).** MI instruments read:
(a) average (b) peak (c) true RMS (d) form factor

**Q4 (MCQ).** The main error of an MI voltmeter on AC is:
(a) hysteresis (b) frequency (reactance) (c) parallax (d) friction

**Q5 (MCQ).** MI instruments are usually damped by:
(a) eddy-current (b) air friction (c) fluid (d) magnetic

**Q6 (NAT).** An MI meter reads 16° at 2 A. Find the deflection (°) at 4 A (assume dL/dθ constant).

**Q7 (NAT).** Td for I = 10 A and dL/dθ = 1.5 µH/rad (µN·m).

**Q8 (NAT).** An MI meter deflects 45° at 3 A. Find the current (A) for 20° deflection.

<details><summary>🔑 Solutions</summary>

**Q1 — (b) I².**

**Q2 — (b) square-law.**

**Q3 — (c) true RMS.**

**Q4 — (b) frequency.**

**Q5 — (b) air friction.**

**Q6 — 64°.** `θ ∝ I²; θ2 = 16 × (4/2)² = 16 × 4 = 64°`.

**Q7 — 75 µN·m.** `Td = ½ × 10² × 1.5×10⁻⁶ = 0.5×100×1.5×10⁻⁶ = 75×10⁻⁶`.

**Q8 — 2 A.** `I2 = I1·√(θ2/θ1) = 3·√(20/45) = 3·√0.444 = 3×0.667 = 2 A`.
</details>

---

## 🔧 Electrical Machines: DC Motors — Types, Torque-Speed, Starters & Speed Control

### 📖 Concept Deep Dive

**Fundamentals.** A DC motor develops **back-EMF** `Eb` opposing the supply:
```
Eb = PφZN/(60A) ,   V = Eb + Ia·Ra (+ brush drop)
Speed:   N ∝ Eb/φ = (V − Ia·Ra)/φ
Torque:  Ta ∝ φ·Ia    (Ta = (PφZ/2πA)·Ia)
```

**Types & torque-speed characteristics:**
- **Shunt motor** — field across the supply, so `φ ≈ constant`. Then `Ta ∝ Ia` and **speed is nearly constant** (drops slightly with load). Good for **constant-speed** drives (lathes, fans, pumps).
- **Series motor** — field carries armature current, so `φ ∝ Ia` (before saturation). Then **`Ta ∝ Ia²`** — very **high starting torque** — but speed **varies inversely** with load and **races dangerously at no load** (never belt-couple/uncouple a series motor on no load). Used for **traction, cranes, hoists**.
- **Compound motor** — combines features (cumulative gives high starting torque + limited no-load speed).

**Starters.** At start `Eb = 0`, so `Ia = V/Ra` is dangerously large. A **starter** inserts external resistance, cut out as the motor speeds up:
- **3-point starter** (shunt) — holding coil in series with the field (problem: field weakening trips it).
- **4-point starter** — separate holding-coil supply (works with field-control speed variation).

**Speed control.** From `N ∝ (V − Ia Ra)/φ`:
- **Shunt motor:** **field control** (reduce `φ` ⇒ speed **above** base, constant-power region); **armature/rheostatic control** (drop voltage across series R ⇒ speed **below** base, lossy); **Ward-Leonard** (smooth armature-voltage control, four-quadrant).
- **Series motor:** **field diverter/ tapped field** (reduce effective flux ⇒ higher speed), **armature resistance** (lower speed), **series-parallel** control (traction).

> 💎 **KEY RESULT** — `N ∝ (V − IaRa)/φ`, `Ta ∝ φIa`. **Shunt**: constant speed, `Ta ∝ Ia`. **Series**: `Ta ∝ Ia²` (high starting torque, no-load runaway). Starters limit the `V/Ra` inrush; speed control by **field (above base)** or **armature (below base)**.

> 🧠 **MEMORY HOOK** — **"Series for starting torque, shunt for steady speed."** Field-weakening ⇒ **faster** (above base); armature-voltage/resistance ⇒ **slower** (below base).

> ⚠️ **TRAP ALERT** — A **series motor must never run on no load** (speed → dangerously high). **Field weakening raises speed**, not lowers it. Use a **4-point starter** when doing field-control speed variation on a shunt motor.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Back EMF | `Eb = PφZN/(60A)` |
| Voltage equation | `V = Eb + Ia·Ra` |
| Speed | `N ∝ (V − Ia·Ra)/φ` |
| Torque | `Ta ∝ φ·Ia` |
| Series torque | `Ta ∝ Ia²` (pre-saturation) |
| Starting current | `Ia(start) = V/Ra` (large) |

### 🧮 Solved Examples

**Example 1 — Speed from back-EMF.**
A 220 V shunt motor draws `Ia = 20 A`, `Ra = 0.5 Ω`. Back-EMF and, if flux is constant, the speed change if load raises `Ia` to 40 A.

```
Eb1 = V − Ia1·Ra = 220 − 20×0.5 = 220 − 10 = 210 V
Eb2 = 220 − 40×0.5 = 220 − 20 = 200 V
N ∝ Eb (φ constant):  N2/N1 = Eb2/Eb1 = 200/210 = 0.952
⇒ speed drops ~4.8% as load doubles the armature current.
```

**Example 2 — Starting resistance.**
A 200 V motor, `Ra = 0.2 Ω`, must limit starting current to `50 A`. Find the external starter resistance.

```
Ia(start) = V/(Ra + Rext) ⇒ Rext = V/Ia − Ra
Rext = 200/50 − 0.2 = 4 − 0.2 = 3.8 Ω
```

### ⚠️ Common Traps

1. **Series motor no-load runaway** — `φ → 0`, so `N → ∞`; never run unloaded.
2. **Field-weakening raises speed** — increases `N` (above base), doesn't reduce it.
3. **Ta ∝ Ia (shunt) vs Ta ∝ Ia² (series)** — different torque laws.
4. **Starter needed** — `V/Ra` inrush is destructive without external resistance.
5. **3-point vs 4-point starter** — 4-point needed for field-control speed variation.
6. **Speed equation sign** — `N ∝ (V − IaRa)/φ`; both the drop and the flux matter.

### 📝 Test (5 MCQ + 3 NAT)

**Q1 (MCQ).** In a DC shunt motor, torque is proportional to:
(a) Ia² (b) Ia (c) √Ia (d) 1/Ia

**Q2 (MCQ).** A DC series motor has torque proportional to (pre-saturation):
(a) Ia (b) Ia² (c) √Ia (d) constant

**Q3 (MCQ).** A series motor should not be run at:
(a) full load (b) no load (c) half load (d) rated speed

**Q4 (MCQ).** Field weakening in a shunt motor:
(a) reduces speed (b) increases speed (c) no effect (d) stops motor

**Q5 (MCQ).** A starter is needed because at start:
(a) Eb is maximum (b) Eb = 0 so Ia = V/Ra is large (c) torque is zero (d) flux is zero

**Q6 (NAT).** A 240 V shunt motor: Ia = 25 A, Ra = 0.4 Ω. Find the back-EMF (V).

**Q7 (NAT).** A 250 V motor, Ra = 0.25 Ω, limit start current to 40 A. Find Rext (Ω).

**Q8 (NAT).** A shunt motor runs at 1000 rpm with Eb = 200 V. If Eb becomes 180 V (φ constant), find the new speed (rpm).

<details><summary>🔑 Solutions</summary>

**Q1 — (b) Ia.** Shunt: φ constant ⇒ `Ta ∝ Ia`.

**Q2 — (b) Ia².** Series: `φ ∝ Ia ⇒ Ta ∝ Ia²`.

**Q3 — (b) no load.**

**Q4 — (b) increases speed.**

**Q5 — (b).**

**Q6 — 230 V.** `Eb = 240 − 25×0.4 = 240 − 10 = 230 V`.

**Q7 — 6 Ω.** `Rext = 250/40 − 0.25 = 6.25 − 0.25 = 6 Ω`.

**Q8 — 900 rpm.** `N ∝ Eb ⇒ N2 = 1000 × 180/200 = 900 rpm`.
</details>

---

## 🔧 Power Electronics: Single-Phase Full-Converter & Semiconverter

### 📖 Concept Deep Dive

Both circuits rectify single-phase AC to controlled DC; the difference is **how many controlled switches** they use and whether the output can go **negative**.

**Single-phase full (fully-controlled) converter.** Four SCRs (a bridge). With a highly-inductive (RL) load in **continuous conduction**:
```
Vdc = (2·Vm/π)·cosα        (Vm = √2·Vs, Vs = rms supply)
α = 0 → 90°  : Vdc > 0  (rectifying)
α = 90 → 180°: Vdc < 0  (inverting — feeds power back to AC)
```
So a full converter is a **two-quadrant** converter (Vdc can be **±**, Idc one direction). Firing beyond 90° makes it operate as a **line-commutated inverter**.

**Single-phase semiconverter (half-controlled).** Two SCRs + two diodes. It has **inherent freewheeling**, so the output **cannot go negative**:
```
Vdc = (Vm/π)(1 + cosα)     (α : 0 → π ; Vdc ≥ 0 always)
```
It is a **one-quadrant** converter (cheaper, better input pf at high α, but no inversion).

**Effect of a freewheeling diode (FWD).** Adding an FWD across the load of a **full converter** clamps the output to zero during the negative interval, so:
- the output **cannot go negative** (inversion is lost),
- the **average output rises** for a given α (toward the semiconverter value),
- **input power factor improves** and load-current ripple reduces.

| Feature | Full converter | Semiconverter |
|---|---|---|
| Switches | 4 SCRs | 2 SCR + 2 diode |
| `Vdc` | `(2Vm/π)cosα` | `(Vm/π)(1+cosα)` |
| Output sign | ± (2-quadrant) | ≥ 0 (1-quadrant) |
| Inversion | yes (α>90°) | no |

> 💎 **KEY RESULT** — **Full converter**: `Vdc = (2Vm/π)cosα`, two-quadrant, **inverts** for α>90°. **Semiconverter**: `Vdc = (Vm/π)(1+cosα)`, one-quadrant, **no inversion** (inherent freewheeling). An FWD on a full converter kills inversion and raises average output.

> 🧠 **MEMORY HOOK** — **"Full = cosα (can go negative); Semi = (1+cosα) (never negative)."** Freewheeling always pushes the output toward the semiconverter behaviour.

> ⚠️ **TRAP ALERT** — Only the **full converter** can **invert** (return power to the AC side). Adding an **FWD removes** that ability. Use `Vm = √2·Vs` (peak) in these formulas, not the RMS supply voltage.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Peak supply | `Vm = √2·Vs` |
| Full converter Vdc | `(2Vm/π)·cosα` |
| Semiconverter Vdc | `(Vm/π)(1 + cosα)` |
| Full converter at α=0 | `2Vm/π` (max) |
| Inversion region (full) | `90° < α < 180°` |
| FWD effect | clamps Vdc ≥ 0, raises average |

### 🧮 Solved Examples

**Example 1 — Full converter output.**
A single-phase full converter fed from `Vs = 230 V` (rms), RL load, fired at `α = 60°`. Find `Vdc`.

```
Vm = √2 × 230 = 325.3 V
Vdc = (2Vm/π)·cosα = (2×325.3/π)·cos60°
    = (650.6/3.1416) × 0.5 = 207.1 × 0.5 = 103.5 V
```

**Example 2 — Inversion check.**
For the same converter at `α = 120°`, find `Vdc` and interpret.

```
Vdc = (2×325.3/π)·cos120° = 207.1 × (−0.5) = −103.5 V
Negative ⇒ the converter INVERTS (returns power to the AC source),
possible only because it is a full (not semi) converter.
```

### ⚠️ Common Traps

1. **Full vs semi formula** — `(2Vm/π)cosα` vs `(Vm/π)(1+cosα)`.
2. **Only full converter inverts** — semiconverter output is always ≥ 0.
3. **FWD removes inversion** — and raises the average output.
4. **Use peak Vm = √2 Vs** — not the RMS value, in the average formulas.
5. **Continuous conduction assumed** — these averages hold for highly-inductive loads.
6. **α range** — full converter inverts for 90°–180°; semiconverter has no such region.

### 📝 Test (5 MCQ + 3 NAT)

**Q1 (MCQ).** The average output of a single-phase full converter (continuous conduction) is:
(a) `(Vm/π)(1+cosα)` (b) `(2Vm/π)cosα` (c) `(Vm/2π)(1+cosα)` (d) `Vm cosα`

**Q2 (MCQ).** A single-phase full converter operates as an inverter when:
(a) α < 90° (b) α = 0 (c) 90° < α < 180° (d) never

**Q3 (MCQ).** A semiconverter output voltage is:
(a) always ≥ 0 (b) can be negative (c) always negative (d) zero

**Q4 (MCQ).** Adding a freewheeling diode to a full converter:
(a) enables inversion (b) prevents inversion & raises average (c) has no effect (d) reduces average

**Q5 (MCQ).** A full converter is a ___ quadrant converter:
(a) one (b) two (c) three (d) four

**Q6 (NAT).** Full converter, Vs = 230 V rms, α = 0°. Find Vdc (V).

**Q7 (NAT).** Semiconverter, Vm = 300 V, α = 90°. Find Vdc (V).

**Q8 (NAT).** Full converter, Vm = 340 V, α = 45°. Find Vdc (V).

<details><summary>🔑 Solutions</summary>

**Q1 — (b) `(2Vm/π)cosα`.**

**Q2 — (c) 90° < α < 180°.**

**Q3 — (a) always ≥ 0.**

**Q4 — (b) prevents inversion & raises average.**

**Q5 — (b) two.**

**Q6 — 207.1 V.** `Vm = √2×230 = 325.3; Vdc = (2×325.3/π)×1 = 207.1 V`.

**Q7 — 95.5 V.** `Vdc = (300/π)(1+cos90°) = 95.49×1 = 95.5 V`.

**Q8 — 153.0 V.** `Vdc = (2×340/π)cos45° = (680/π)×0.7071 = 216.45×0.7071 = 153.0 V`.
</details>

---

### 📊 GATE Tech Coverage Progress

```
Measuring Instruments  ██████░░░░░░░░░░░░░░░  6/21  🔁 Round 4
Electrical Machines    ████████░░░░░░░░░░░░  8/19  🔁 Round 4
Power Electronics      ████████░░░░░░░░░░░░  8/18  🔁 Round 4
```

*Next: Measurements → Electrodynamometer (EMMC) instruments; Machines → DC machine losses, efficiency & testing (Swinburne, Hopkinson); Power Electronics → three-phase rectifiers.*

> ✅ **Self-check before you close:** Can you (1) give the MI torque law and why its scale is square-law, (2) state the shunt vs series torque-speed behaviour and the no-load danger, and (3) contrast full-converter and semiconverter `Vdc` and the effect of an FWD? Re-read any KEY RESULT that felt shaky.
