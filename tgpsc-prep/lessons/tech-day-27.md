# ⚡ GATE Technical Revision — Day 27 (2026-08-16)

*Three subjects, one sitting — square-law meters, three-phase transformer banks, and thyristor protection.*

📅 Tech Day 27 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics

> 🧠 **MEMORY HOOK** — Today is the day of **"square, shift, and snub"**: the MI meter's **square-law** scale, the Y-Δ transformer's **30° phase shift**, and the thyristor's **snubber** that tames dv/dt. Nail those three ideas and the marks follow.

---

## 🔧 Measuring Instruments: Moving-Iron (MI) Instruments

### 📖 Concept Deep Dive

The **Moving-Iron (MI)** instrument is the universal, rugged AC/DC meter of the switchboard. It works on the force experienced by a piece of **soft iron** in the magnetic field of a current-carrying coil. Two constructions exist:

| Type | Principle | Construction |
|---|---|---|
| **Attraction** | A single soft-iron disc is **drawn into** the coil | One oval soft-iron vane pivoted eccentrically near the coil mouth |
| **Repulsion** | Two soft-iron pieces (one fixed, one moving) inside the coil are magnetised to the **same polarity and repel** | Two vanes inside a coil; moving vane carries the pointer |

**Torque from the energy principle.** Energy stored in the coil is `½·L·I²`. If the moving iron changes the coil inductance `L` with deflection `θ`, the deflecting torque is:

```
Td = ½ · I² · (dL/dθ)
```

The controlling torque (spring) is `Tc = K·θ`. Equating:

```
K·θ = ½ · I² · (dL/dθ)   ⇒   θ = I²·(dL/dθ) / (2K)
```

> 💎 **KEY RESULT** — Because `θ ∝ I²`, the MI instrument responds to the **RMS value** and works on **both AC and DC**. Its scale is **non-uniform (square-law)** — crowded at the low end — though vane shaping (`dL/dθ` tailored) can linearise the mid-scale.

**Damping** is by **air friction** (a light piston or vane in a chamber) — never eddy-current, since a permanent magnet would disturb the weak operating field.

**Errors (know these cold):**

| Error | Cause | Remedy |
|---|---|---|
| **Hysteresis** | Soft iron retains residual magnetism ⇒ reads differently on rising vs falling current | Use **nickel-iron (mumetal)** with a narrow hysteresis loop |
| **Frequency** | Coil impedance rises with `f` ⇒ (as a voltmeter) reads **low** at high frequency | Add a **capacitor across the swamping (series) resistor** for compensation |
| **Stray field** | Weak operating field is easily disturbed by external fields | Magnetic **shielding** or astatic construction |
| **Eddy current** | Induced currents in metal parts (AC) | Minimise solid metal near coil |
| **Temperature** | Resistance/spring change with heat | Swamping resistance (manganin) |

> ⚠️ **TRAP ALERT** — On DC, the **hysteresis error** makes an MI meter read slightly **high on rising** and **low on falling** current. MI instruments are more accurate on **AC** (the iron is cyclically magnetised, averaging out residual effects).

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Deflecting torque | `Td = ½ · I² · (dL/dθ)` |
| Deflection | `θ = I²·(dL/dθ) / (2K)` |
| Reads | RMS value (`θ ∝ I²`) |
| Scale | Square-law (non-uniform) |
| Damping | Air-friction |

### 🧮 Solved Examples

**Example 1 — Torque from inductance rate.** An MI instrument's coil inductance varies uniformly from `8 mH` to `12 mH` as the pointer sweeps `0` to `90°` (`π/2` rad). Find `dL/dθ` and the deflecting torque at `5 A`.

```
dL/dθ = (12 − 8)×10⁻³ / (π/2) = 4×10⁻³ / 1.5708 = 2.546×10⁻³ H/rad
Td = ½ · I² · (dL/dθ) = ½ × 5² × 2.546×10⁻³
   = ½ × 25 × 2.546×10⁻³ = 0.0318 N·m = 31.8 mN·m
```

**Example 2 — Deflection.** For the same meter, if the spring constant `K = 0.05 N·m/rad`, find the steady deflection at `5 A` (assume `dL/dθ` constant).

```
θ = I²·(dL/dθ)/(2K) = 25 × 2.546×10⁻³ / (2 × 0.05)
  = 0.06366 / 0.1 = 0.6366 rad ≈ 36.5°
```

### ⚠️ Common Traps

1. Assuming MI reads **average** — it reads **RMS** (`θ ∝ I²`).
2. Claiming the scale is uniform — it is **square-law / non-uniform**.
3. Using **eddy-current damping** — MI uses **air-friction**.
4. Forgetting the **frequency error** correction (capacitor across series R).
5. Saying MI works only on AC — it works on **both AC and DC**.
6. Mixing up attraction (one iron piece) vs repulsion (two iron pieces).

### 📝 Test — Measuring Instruments (8 Q)

**Q1 (MCQ).** The deflecting torque of an MI instrument is proportional to:
(a) I (b) I² (c) √I (d) 1/I

**Q2 (MCQ).** The scale of a moving-iron instrument is:
(a) uniform (b) square-law/non-uniform (c) logarithmic (d) reciprocal

**Q3 (MCQ).** Damping in MI instruments is provided by:
(a) eddy currents (b) air friction (c) fluid friction (d) electromagnetic braking

**Q4 (MCQ).** An MI voltmeter, if uncompensated, at higher frequency reads:
(a) higher (b) lower (c) unchanged (d) zero

**Q5 (MCQ).** MI instruments respond to the ___ value of current:
(a) average (b) peak (c) RMS (d) instantaneous

**Q6 (NAT).** An MI instrument has `dL/dθ = 3 mH/rad` at a point. Find the deflecting torque (mN·m) at 4 A.

**Q7 (NAT).** For an MI meter, `θ = I²·(dL/dθ)/(2K)`. If `dL/dθ = 2×10⁻³ H/rad`, `K = 0.04 N·m/rad`, find the deflection (degrees) at 6 A.

**Q8 (NAT).** The inductance of an MI coil is `L = (10 + 4θ) mH` (θ in rad). Find the deflecting torque (mN·m) at 5 A.

<details><summary>🔑 Solutions</summary>

**Q1 — (b) I².**

**Q2 — (b) square-law/non-uniform.**

**Q3 — (b) air friction.**

**Q4 — (b) lower.** Coil reactance rises, so current (and reading) drops for a voltmeter.

**Q5 — (c) RMS.**

**Q6.** `Td = ½·I²·(dL/dθ) = ½ × 16 × 3×10⁻³ = 24×10⁻³ N·m = 24 mN·m`.

**Q7.** `θ = 36 × 2×10⁻³ / (2×0.04) = 0.072/0.08 = 0.9 rad = 0.9 × 57.3 = 51.6°`.

**Q8.** `dL/dθ = 4 mH/rad = 4×10⁻³`; `Td = ½ × 25 × 4×10⁻³ = 50×10⁻³ N·m = 50 mN·m`.

</details>

---

## 🔧 Electrical Machines: Three-Phase Transformer Connections, Vector Groups & Parallel Operation

### 📖 Concept Deep Dive

Three-phase transformation uses either **three single-phase units (a bank)** or **one three-phase core**. Each winding can be **star (Y)** or **delta (Δ)**, giving four principal connections plus the **open-delta (V-V)**.

**Line–phase relations** (per side):

```
Star (Y):   VL = √3 · Vph ,  IL = Iph
Delta (Δ):  VL = Vph      ,  IL = √3 · Iph
```

With **per-phase turns ratio `n = N1/N2`**, the **line-voltage ratio** depends on the connection:

| Connection | Line-voltage ratio `VL1/VL2` | Typical use |
|---|---|---|
| **Y-Y** | `n` | Small loads; needs tertiary/neutral (3rd-harmonic issues) |
| **Δ-Δ** | `n` | Large LV; allows **open-delta** operation |
| **Y-Δ** | `√3 · n` | **Step-DOWN** at receiving end |
| **Δ-Y** | `n / √3` | **Step-UP** at generating stations |

> 💎 **KEY RESULT** — **Y-Δ and Δ-Y** introduce a **30° phase shift** between corresponding primary and secondary line voltages; **Y-Y and Δ-Δ** give **0° (or 180°)**. This phase shift is captured by the **vector-group clock notation**.

**Vector groups (clock notation).** The HV winding is the "12 o'clock" reference; the LV line-voltage phasor points to a clock hour, each hour = `30°` **lag** of LV behind HV:

| Group | Phase shift | Examples |
|---|---|---|
| Group I | `0°` | **Yy0, Dd0** |
| Group II | `180°` | Yy6, Dd6 |
| Group III | `−30°` (LV lags 30°) | **Dy1, Yd1** |
| Group IV | `+30°` (LV leads 30°) | **Dy11, Yd11** |

> 🧠 **MEMORY HOOK** — **"Dyn11"** (delta HV, star LV with neutral, LV leads by 30°) is the standard **distribution transformer** group. The number is the o'clock position: `11 × 30° = 330°` lag = `30°` lead.

**Parallel operation — necessary conditions:**
1. **Same voltage ratio** (turns ratio) — else circulating current on no-load.
2. **Same polarity** — opposite polarity causes a dead short.
3. **Same phase sequence** (3-phase).
4. **Same phase displacement / vector group** — e.g. a **Dy1 cannot be paralleled with a Dy11**.
5. **Same per-unit impedance** (desirable) — for load sharing in proportion to rating.
6. Same `X/R` ratio (desirable — keeps the two currents in phase).

**Load sharing.** Transformers in parallel share the load in **inverse proportion to their per-unit impedances**. Using `Y = Sn / Z%` (rating ÷ percentage impedance):

```
S1 = SL · Y1/(Y1 + Y2) ,   S2 = SL · Y2/(Y1 + Y2)
```

> ⚠️ **TRAP ALERT** — Equal **percentage** impedances (not equal ohmic impedances) are needed for the two units to share load in proportion to their ratings. A transformer with **lower %Z takes more than its proportional share** and may overload.

**Open-delta (V-V):** if one unit of a Δ-Δ bank fails, the other two deliver `1/√3 = 57.7%` of the original three-phase bank rating (each unit then loaded to `86.6%`).

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Star | `VL = √3·Vph , IL = Iph` |
| Delta | `VL = Vph , IL = √3·Iph` |
| Y-Δ line ratio | `VL1/VL2 = √3·n` |
| Δ-Y line ratio | `VL1/VL2 = n/√3` |
| Load sharing | `S1 = SL·Y1/(Y1+Y2)` , `Y = Sn/Z%` |
| Open-delta capacity | `= 57.7% of Δ-Δ bank` , each unit at 86.6% |
| Clock shift | `hour × 30° = LV lag behind HV` |

### 🧮 Solved Examples

**Example 1 — Parallel load sharing.** Two transformers in parallel: **T1** = `100 kVA, 4%` impedance; **T2** = `200 kVA, 6%` impedance. Total load = `250 kVA`. Find the load on each and check for overload.

```
Y1 = Sn1/Z1% = 100/4 = 25
Y2 = Sn2/Z2% = 200/6 = 33.33
Y1 + Y2 = 58.33

S1 = 250 × 25/58.33   = 107.1 kVA   ← exceeds 100 kVA rating → T1 OVERLOADED
S2 = 250 × 33.33/58.33 = 142.9 kVA  (within 200 kVA)
```
T1 is overloaded because it has the **lower %Z**; the safe total is limited by T1 reaching 100 kVA.

**Example 2 — Δ-Y step-up ratio.** A Δ-Y transformer has per-phase turns ratio `n = N1/N2 = 10`. Primary line voltage `= 11 kV` (delta). Find the secondary line voltage.

```
Primary phase voltage Vph1 = VL1 = 11 kV  (delta)
Secondary phase voltage Vph2 = Vph1/n = 11000/10 = 1100 V
Secondary is star ⇒ VL2 = √3 · Vph2 = 1.732 × 1100 = 1905 V ≈ 1.905 kV
(Line ratio = n/√3 = 10/1.732 = 5.77 ⇒ 11000/5.77 = 1905 V ✓)
```

### ⚠️ Common Traps

1. Using per-phase ratio `n` as the **line** ratio for Y-Δ / Δ-Y — it carries an extra `√3`.
2. Paralleling different **vector groups** (Dy1 with Dy11) — not allowed.
3. Thinking **equal ohmic** Z is needed — it's equal **per-unit/percentage** Z.
4. Forgetting the **30° shift** in Y-Δ/Δ-Y.
5. Quoting open-delta capacity as 50% — it is **57.7%**.
6. Assuming Y-Y is problem-free — it suffers **3rd-harmonic / unstable-neutral** issues without a delta tertiary.

### 📝 Test — Electrical Machines (8 Q)

**Q1 (MCQ).** The phase shift between primary and secondary line voltages in a Y-Δ transformer is:
(a) 0° (b) 30° (c) 60° (d) 90°

**Q2 (MCQ).** For parallel operation of two single-phase transformers, which is NOT essential?
(a) same voltage ratio (b) same polarity (c) same kVA rating (d) same p.u. impedance (for proportional sharing)

**Q3 (MCQ).** The vector group Dyn11 means LV:
(a) lags HV by 30° (b) leads HV by 30° (c) in phase (d) opposite phase

**Q4 (MCQ).** A Δ-Δ bank loses one transformer; remaining open-delta delivers about:
(a) 33.3% (b) 50% (c) 57.7% (d) 66.6%

**Q5 (MCQ).** The Δ-Y connection is preferred for:
(a) step-down at load (b) step-up at generation (c) instrument transformers (d) welding

**Q6 (NAT).** Two transformers, 500 kVA (5%) and 250 kVA (4%), are in parallel supplying 600 kVA. Find the load (kVA) on the 500 kVA unit.

**Q7 (NAT).** A Y-Δ transformer: primary line 33 kV (star), per-phase turns ratio N1/N2 = 6. Find the secondary line voltage (V).

**Q8 (NAT).** Two transformers of equal rating have impedances 4% and 6%. If total load is 500 kVA, find the load (kVA) shared by the 4% unit.

<details><summary>🔑 Solutions</summary>

**Q1 — (b) 30°.**

**Q2 — (c).** Equal kVA rating is **not** essential (equal %Z is, for proportional sharing).

**Q3 — (b) leads HV by 30°** (11 o'clock).

**Q4 — (c) 57.7%.**

**Q5 — (b) step-up at generation.**

**Q6.** `Y1 = 500/5 = 100`, `Y2 = 250/4 = 62.5`, sum = 162.5.
`S(500 kVA unit) = 600 × 100/162.5 = 369.2 kVA`.

**Q7.** Primary star: `Vph1 = 33000/√3 = 19053 V`. `Vph2 = 19053/6 = 3175.5 V`. Secondary delta ⇒ `VL2 = Vph2 = 3175.5 V ≈ 3.18 kV`. (Line ratio = √3·n = 10.39 ⇒ 33000/10.39 = 3176 V ✓)

**Q8.** Equal ratings ⇒ `Y1 = S/4`, `Y2 = S/6`; ratio `Y1:Y2 = 1/4 : 1/6 = 3:2`.
`S(4% unit) = 500 × 3/5 = 300 kVA`.

</details>

---

## 🔧 Power Electronics: Thyristor II — Triggering, Gate Characteristics & dv/dt, di/dt Protection

### 📖 Concept Deep Dive

Once an SCR's structure is understood, the practical questions are **how to turn it on reliably** and **how to protect it** from false turn-on and destructive current/voltage rates.

**Turn-on (triggering) methods:**

| Method | Mechanism | Practical? |
|---|---|---|
| **Forward voltage** | Anode voltage exceeds `VBO` ⇒ avalanche of `J2` | **No** — stresses device |
| **Gate triggering** | Inject gate current `Ig` at safe anode voltage | **Yes** — standard method |
| **dv/dt** | Fast anode-voltage rise: charging current `i = Cj·(dv/dt)` through junction capacitance turns it on | Unwanted (false) |
| **Temperature** | High junction temperature raises leakage until turn-on | Unwanted |
| **Light** | Photons generate carriers (LASCR) | Special (HVDC valves) |

**Gate characteristics.** The gate-cathode is a PN junction; its `Vg–Ig` curve lies in a spread (a band, not a line) between device samples. The trigger source must satisfy:
- Above the **minimum** gate voltage/current (`Vgt`, `Igt`) to guarantee turn-on of all devices, and above the non-triggering limit;
- Below the **maximum** gate voltage, current, and the **average gate power** hyperbola `Pgav`.

The source **load line** `Es = Vg + Ig·Rs` must pass through this **preferred gate-drive area**.

> 💎 **KEY RESULT** — Reliable triggering needs the load line to sit **inside** the preferred region: above `(Vgt, Igt)` and below the `Pg(max)` hyperbola. Hard, narrow, steep gate pulses turn the SCR on fast and reduce turn-on loss.

**di/dt protection.** At turn-on, conduction begins near the gate and **spreads gradually** across the junction. If anode current rises too fast, the small initial conducting area overheats → **local hot spot** and device failure. A **series inductor `Ls`** limits it:

```
di/dt = Vs / Ls    ⇒    Ls ≥ Vs / (di/dt)_rated
```

**dv/dt protection & the snubber.** A high **reapplied dv/dt** can falsely turn the SCR on (via `J2` capacitance). An **RC snubber** (`Rs` in series with `Cs`) is connected **across the SCR**:
- When the SCR is OFF, `Cs` charges through the load `RL` and `Rs`, limiting the rate of voltage rise across the device.
- When the SCR turns ON, `Cs` discharges through `Rs` and the SCR; `Rs` **limits the discharge current** (protecting di/dt).

For a DC supply `Vs` with load `RL`:

```
Initial dv/dt across SCR ≈ Vs / ((RL + Rs)·Cs)
Peak snubber discharge current at turn-on ≈ Vs / Rs
```

> ⚠️ **TRAP ALERT** — The snubber does **double duty**: `Cs` limits **dv/dt** (false turn-on), and `Rs` limits the **capacitor discharge current** (di/dt) at turn-on. Choosing `Cs` too large with `Rs` too small gives a dangerous discharge current spike.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| di/dt limiting inductor | `Ls ≥ Vs / (di/dt)_rated` , `di/dt = Vs/Ls` |
| Snubber dv/dt | `dv/dt ≈ Vs / ((RL + Rs)·Cs)` |
| Snubber discharge peak current | `Is(peak) ≈ Vs / Rs` |
| Gate source load line | `Es = Vg + Ig·Rs` |
| dv/dt trigger current | `i = Cj · (dv/dt)` |

### 🧮 Solved Examples

**Example 1 — Snubber capacitor for a dv/dt limit.** An SCR is rated `(dv/dt)max = 100 V/µs`. Supply `Vs = 200 V` DC, load `RL = 20 Ω`, snubber resistor `Rs = 10 Ω`. Find the minimum snubber capacitance `Cs`.

```
dv/dt ≈ Vs / ((RL + Rs)·Cs) ≤ 100 V/µs = 100×10⁶ V/s
Cs ≥ Vs / ((RL + Rs) × dv/dt)
   = 200 / (30 × 100×10⁶) = 200 / (3×10⁹)
   = 6.67×10⁻⁸ F = 0.0667 µF
```
Check discharge current: `Is = Vs/Rs = 200/10 = 20 A` — ensure the SCR's `ITSM` rating exceeds this.

**Example 2 — di/dt limiting inductor.** An SCR has `(di/dt)max = 50 A/µs`. It switches a `220 V` DC source. Find the minimum series inductance `Ls`.

```
di/dt = Vs / Ls ≤ 50 A/µs = 50×10⁶ A/s
Ls ≥ Vs / (di/dt) = 220 / (50×10⁶)
   = 4.4×10⁻⁶ H = 4.4 µH
```

### ⚠️ Common Traps

1. Believing higher **anode voltage** is a good turn-on method — `VBO` triggering damages the device.
2. Treating the gate `Vg–Ig` characteristic as a single line — it's a **spread/band**; design for the whole area.
3. Forgetting that the snubber `Rs` also limits **discharge di/dt**, not just power.
4. Using `dv/dt = Vs/(Rs·Cs)` — the load `RL` is in the charging path: `Vs/((RL+Rs)·Cs)`.
5. Sizing `Ls` from load current instead of the **rated di/dt**.
6. Ignoring that fast anode-current rise causes a **local hot spot** (why di/dt matters).

### 📝 Test — Power Electronics (8 Q)

**Q1 (MCQ).** Which SCR turn-on method is normally used in practice?
(a) forward voltage (b) gate triggering (c) dv/dt (d) thermal

**Q2 (MCQ).** A snubber circuit across an SCR primarily protects against:
(a) high di/dt only (b) high dv/dt (false turn-on) (c) reverse voltage (d) overcurrent

**Q3 (MCQ).** A series inductor with an SCR is used to limit:
(a) dv/dt (b) di/dt (c) holding current (d) gate current

**Q4 (MCQ).** In an RC snubber, the series resistor Rs mainly limits:
(a) the reapplied dv/dt (b) the capacitor discharge current at turn-on (c) the gate current (d) leakage

**Q5 (MCQ).** dv/dt triggering of an SCR occurs due to charging of its:
(a) gate resistance (b) junction capacitance (c) snubber inductor (d) load resistance

**Q6 (NAT).** An SCR has (dv/dt)max = 200 V/µs, Vs = 300 V, RL = 25 Ω, Rs = 5 Ω. Find the minimum snubber capacitance (µF).

**Q7 (NAT).** An SCR switches a 400 V DC source and its (di/dt)max = 80 A/µs. Find the minimum series inductance (µH).

**Q8 (NAT).** For the snubber in Q6, find the peak capacitor discharge current (A) at turn-on.

<details><summary>🔑 Solutions</summary>

**Q1 — (b) gate triggering.**

**Q2 — (b) high dv/dt** (false turn-on).

**Q3 — (b) di/dt.**

**Q4 — (b) capacitor discharge current at turn-on.**

**Q5 — (b) junction capacitance.**

**Q6.** `Cs ≥ Vs/((RL+Rs)·dv/dt) = 300/((30)×200×10⁶) = 300/(6×10⁹) = 5×10⁻⁸ F = 0.05 µF`.

**Q7.** `Ls ≥ Vs/(di/dt) = 400/(80×10⁶) = 5×10⁻⁶ H = 5 µH`.

**Q8.** `Is = Vs/Rs = 300/5 = 60 A`.

</details>

---

> 🧠 **DAY-27 WRAP** — MI meter: `Td = ½I²(dL/dθ)`, reads **RMS**, **square-law** scale, air-friction damping. Transformers: **Y-Δ/Δ-Y = 30° shift**, parallel needs **same %Z & vector group**, open-delta = **57.7%**. Thyristor: **gate triggering** normal, **Ls limits di/dt**, **RC snubber limits dv/dt** (`Cs`) and discharge (`Rs`). Revise the three boxed KEY RESULTS. ⚡
