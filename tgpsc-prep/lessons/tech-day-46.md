# ⚡ GATE Technical Revision — Day 46 (2026-09-05)

*Round-3 pass 4 — galvanometers, three-phase transformer banks, and thyristor protection. Detail work that separates ranks.*

📅 Tech Day 46 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics · 🔁 Round-3 pass 4

> 🧠 **MEMORY HOOK** — Today: the **d'Arsonval galvanometer** (heart of every analog meter), **three-phase transformer connections & vector groups**, and **SCR protection** (dv/dt, di/dt, snubbers). Each rewards clean formula recall.

---

## 🔧 Measuring Instruments: Galvanometers (d'Arsonval, Ballistic, Fluxmeter)

### 📖 Concept Deep Dive

A **galvanometer** detects/measures small currents via the torque on a coil in a magnetic field — the basis of the PMMC movement.

**d'Arsonval (PMMC) galvanometer.** A coil of `N` turns, area `A`, in a radial field `B` carries current `I`, producing a **deflecting torque**:

```
Td = N·B·A·I = G·I      (G = NBA = displacement constant)
```

At steady deflection, `Td` is balanced by the **control (spring) torque** `Tc = K·θ`, so:

```
θ = (NBA/K)·I = (G/K)·I     ⇒   current sensitivity Si = θ/I = NBA/K
```

**Dynamic behaviour** is second-order (inertia J, damping D, control K). The **damping** determines response:
- **Underdamped** — oscillates before settling.
- **Critically Damped Resistance eXternal (CDRX)** — the external resistance giving critical (fastest non-oscillatory) damping. Damping is partly **electromagnetic** (eddy currents + the coil circuit) — so it depends on the **total circuit resistance**.

**Sensitivities.**

```
Current sensitivity  Si = θ/I        (rad or mm per µA)
Voltage sensitivity  Sv = θ/V = Si/Rg
Megohm sensitivity   = deflection per unit current with 1 V, 1 MΩ
```

**Ballistic galvanometer** — designed to measure **charge** (`Q = ∫i dt`) from a brief current pulse (e.g. discharging a capacitor or a flux change). It has a **large moment of inertia** and **low damping** so the coil gets an impulsive "kick"; the **first-swing throw** `θ1 ∝ Q`:

```
Q = (T/2π)·(Kd)·θ1   ... (Q ∝ first throw θ1);   with correction for damping (logarithmic decrement λ)
```

**Fluxmeter** — a ballistic galvanometer variant with **no (or negligible) control torque** and **heavy electromagnetic damping**, so its deflection is **proportional to the change in flux-linkage** and it holds the reading; used for magnetic flux measurement.

> 💎 **KEY RESULT** — d'Arsonval: `θ = (NBA/K)·I`, `Si = NBA/K`. **Ballistic galvo** measures **charge** (first-throw `θ1 ∝ Q`, high inertia, low damping). **Fluxmeter** = no control torque, heavy damping, reads **flux change**.

> ⚠️ **TRAP ALERT** — A **ballistic** galvanometer needs **high inertia + low damping** (opposite of a normal indicating galvanometer, which wants low inertia + near-critical damping for a fast steady reading).

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Deflecting torque | `Td = N·B·A·I = G·I` |
| Steady deflection | `θ = (NBA/K)·I` |
| Current sensitivity | `Si = θ/I = NBA/K` |
| Voltage sensitivity | `Sv = Si/Rg` |
| Damping (external) | critical at `CDRX` (total-circuit-R dependent) |
| Ballistic charge | `Q ∝ θ1` (first throw), correct with `λ` |
| Logarithmic decrement | `λ = ln(θ1/θ2)` (successive swings) |

### 🧮 Solved Examples

**Example 1 — sensitivity.**
A galvanometer coil has `N = 100` turns, `B = 0.2 T`, area `A = 4 cm² = 4×10⁻⁴ m²`, spring constant `K = 2×10⁻⁶ N·m/rad`. Find the deflection for `I = 5 µA`.

- `G = NBA = 100 × 0.2 × 4×10⁻⁴ = 8×10⁻³ N·m/A`.
- `θ = (G/K)·I = (8×10⁻³ / 2×10⁻⁶) × 5×10⁻⁶ = 4000 × 5×10⁻⁶ = 0.02 rad`.
- Current sensitivity `Si = G/K = 4000 rad/A = 4×10⁻³ rad/µA`.

**Example 2 — logarithmic decrement.**
Successive swings of a galvanometer are `θ1 = 40 mm` and `θ2 = 32 mm`. Find the logarithmic decrement.

- `λ = ln(θ1/θ2) = ln(40/32) = ln(1.25) = 0.223`.
- A small λ ⇒ light damping (many visible oscillations).

> 🧠 **MEMORY HOOK** — Deflecting torque `= NBA·I`; the **NBA** product (the "displacement constant G") is what a designer maximises for sensitivity. Sensitivity ↑ with N, B, A and ↓ with a stiffer spring K.

### ⚠️ Common Traps

1. Forgetting deflection `∝ NBA/K` (all four matter).
2. Assuming a galvanometer's damping is independent of the **external circuit resistance** (it isn't — CDRX).
3. Designing a **ballistic** galvo like a normal one — it needs **high inertia, low damping**.
4. Confusing **current** sensitivity with **voltage** sensitivity (`Sv = Si/Rg`).
5. Treating fluxmeter deflection as current-proportional — it's **flux-change**-proportional.
6. Ignoring the damping correction (log decrement) when computing charge from the first throw.

### 📝 Test — Galvanometers (8 Q)

1. The deflecting torque of a PMMC galvanometer is: (a) NBA/I (b) NBAI (c) NBA·θ (d) K·θ.
2. Steady deflection is proportional to: (a) I² (b) I (c) √I (d) 1/I.
3. A ballistic galvanometer measures: (a) power (b) charge (c) frequency (d) resistance.
4. For a ballistic galvanometer, the design needs: (a) low inertia, high damping (b) high inertia, low damping (c) high K (d) no coil.
5. CDRX refers to the external resistance for: (a) maximum deflection (b) critical damping (c) zero torque (d) max current.
6. **(NAT)** `N = 80`, `B = 0.25 T`, `A = 5×10⁻⁴ m²`, `K = 1×10⁻⁶ N·m/rad`. Current sensitivity Si (rad/A)?
7. **(NAT)** For Q6, deflection (rad) for `I = 2 µA`?
8. **(NAT)** Successive throws 50 mm and 40 mm. Logarithmic decrement λ (3 dp)?

<details><summary>🔑 Solutions</summary>

**Q1 — (b) NBAI.**

**Q2 — (b).** `θ ∝ I`.

**Q3 — (b) charge.**

**Q4 — (b).** High inertia, low damping (impulse response).

**Q5 — (b).** Critically Damped Resistance eXternal.

**Q6.** `G = NBA = 80×0.25×5×10⁻⁴ = 0.01`; `Si = G/K = 0.01/1×10⁻⁶ = 10,000 rad/A`.

**Q7.** `θ = Si·I = 10,000 × 2×10⁻⁶ = 0.02 rad`.

**Q8.** `λ = ln(50/40) = ln(1.25) = 0.223`.

</details>

---

## 🔧 Electrical Machines: Three-Phase Transformer Connections & Parallel Operation

### 📖 Concept Deep Dive

Three single-phase transformers (or one 3-phase unit) can be connected in four basic ways: **Y-Y, Δ-Δ, Y-Δ (star-delta), Δ-Y (delta-star)**.

**Voltage/current relations** (per connection, line vs phase):

| Connection | Line-voltage ratio | Notes |
|---|---|---|
| Y-Y | `= turns ratio` (a) | neutral available; 3rd-harmonic & unbalanced-load issues (no Δ path) |
| Δ-Δ | `= a` | no neutral; one unit can be removed → **open-delta (V-V)** |
| Y-Δ (step-down) | `= a/√3` × ... → line ratio `= √3·a` reduced | 30° phase shift; good for step-down at load end |
| Δ-Y (step-up) | line ratio `= a·√3` (approx, √3 factor) | 30° phase shift; neutral on HV for transmission |

The **star (Y)** side has `Vline = √3·Vphase`; the **delta (Δ)** side has `Vline = Vphase`. So Y-Δ and Δ-Y introduce a **√3 factor** in the overall line-voltage ratio plus a **30° phase displacement** between primary and secondary line voltages.

**Vector groups.** Standardised as **Yy0, Dd0, Yd1, Dy1, Yd11, Dy11**, etc. The number is the **clock-hour phase shift** (×30°): **0** = in phase, **1** = 30° lag, **11** = 30° lead. Y-Y and Δ-Δ give **0° or 180°** shifts; Y-Δ and Δ-Y give **±30°**.

**Third harmonic.** In **Y-Y without a neutral/tertiary**, the magnetising current's **3rd harmonic** cannot flow, distorting the flux/voltage. A **delta winding** (or a **tertiary delta** in Y-Y-Δ) provides a path for the 3rd-harmonic circulating current, restoring a sinusoidal voltage — a key reason to include a delta.

**Parallel operation — conditions.**
1. **Same voltage ratio** (and turns ratio).
2. **Same polarity** (essential — wrong polarity = dead short).
3. **Same phase sequence** and **same phase displacement / vector group** (for 3-φ) — e.g. you cannot parallel a **Yd1** with a **Yd11**.
4. **Same per-unit impedance** (desirable) — so load shares in proportion to rating.

Load sharing between two parallel units is **inversely proportional to their per-unit impedances**: `S1/S2 = (Z2 pu)/(Z1 pu)` (on a common base) — the unit with **lower pu impedance** takes **more** load.

> 💎 **KEY RESULT** — Y side: `Vline = √3 Vphase`. Y-Δ/Δ-Y → **√3 factor + 30° shift** (clock number ×30°). **Delta path clears the 3rd harmonic.** Parallel: same ratio/polarity/sequence/vector-group; load shares **inversely with pu impedance**.

> ⚠️ **TRAP ALERT** — You can parallel **Yy0 with Dd0** (both 0°) but **not Yd1 with Yd11** (30° lag vs 30° lead → 60° difference → circulating current). Open-delta (V-V) delivers only **57.7% (1/√3)** of the two-transformer Δ-Δ rating.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Star relations | `Vline = √3·Vphase` ; `Iline = Iphase` |
| Delta relations | `Vline = Vphase` ; `Iline = √3·Iphase` |
| Y-Δ / Δ-Y line ratio factor | includes `√3` and `±30°` shift |
| Open-delta (V-V) capacity | `= √3·(one-transformer kVA) = 57.7%` of Δ-Δ |
| Vector-group phase shift | clock number × 30° |
| Parallel load sharing | `S1/S2 = Z2(pu)/Z1(pu)` |

### 🧮 Solved Examples

**Example 1 — open delta.**
Two transformers each rated `50 kVA` operate in **open-delta (V-V)**. Total available 3-phase kVA?

- V-V capacity `= √3 × (one unit) = √3 × 50 = 86.6 kVA`.
- As a fraction of a full Δ-Δ bank (`3 × 50 = 150 kVA`): `86.6/150 = 57.7%`.

**Example 2 — parallel load sharing.**
Transformer A (`Z = 4% pu`) and B (`Z = 6% pu`), same rating and vector group, share a `100 kVA` load. Find each unit's load.

- Load ∝ 1/Zpu: weights `1/4 : 1/6 = 0.25 : 0.1667` → total `0.4167`.
- `SA = 100 × 0.25/0.4167 = 60 kVA` ; `SB = 100 × 0.1667/0.4167 = 40 kVA`.
- The **lower-impedance** unit (A) carries more.

> 🧠 **MEMORY HOOK** — "**Lower pu impedance hogs the load**." And "**always leave a delta somewhere**" to give 3rd-harmonic current a path.

### ⚠️ Common Traps

1. Forgetting the **√3** in star line voltage / delta line current.
2. Paralleling transformers of **different vector groups** (e.g. Dy1 with Dy11).
3. Ignoring **polarity** — reversed polarity is a short circuit.
4. Thinking open-delta gives 2/3 capacity — it's **57.7% (1/√3)**.
5. Assuming equal load sharing regardless of pu impedance.
6. Omitting a delta/tertiary in Y-Y → **3rd-harmonic** distortion.

### 📝 Test — 3-Phase Transformers (8 Q)

1. In a star winding, line voltage equals: (a) phase voltage (b) √3 × phase voltage (c) phase/√3 (d) 3 × phase.
2. The vector group Dy11 has a phase shift of: (a) 0° (b) 30° lag (c) 30° lead (d) 180°.
3. Which pair can be paralleled? (a) Yd1 & Yd11 (b) Yy0 & Dd0 (c) Yd1 & Dy1 (d) Yy0 & Yd1.
4. A delta winding is included mainly to: (a) raise voltage (b) provide a 3rd-harmonic path (c) reduce turns (d) add a neutral.
5. Open-delta capacity as a fraction of Δ-Δ is: (a) 50% (b) 57.7% (c) 66.7% (d) 86.6%.
6. **(NAT)** Two transformers each 30 kVA in V-V (open delta). Available 3-φ kVA (1 dp)?
7. **(NAT)** Parallel units, Z = 5% and Z = 10% pu, equal ratings, 90 kVA load. Load on the 5% unit (kVA)?
8. **(NAT)** A Δ-Y transformer has per-phase turns ratio 10:1 and delta primary line voltage 11 kV. Secondary line voltage (kV, 2 dp)? (secondary phase = 11k/10 = 1100 V, star line = √3×1100)

<details><summary>🔑 Solutions</summary>

**Q1 — (b).** `√3 × Vphase`.

**Q2 — (c).** Clock 11 → 30° lead.

**Q3 — (b).** Both 0° shift.

**Q4 — (b).** 3rd-harmonic circulating path.

**Q5 — (b).** 1/√3 = 57.7%.

**Q6.** `√3 × 30 = 51.96 ≈ 52.0 kVA`.

**Q7.** Load ∝ 1/Z: `1/5 : 1/10 = 0.2 : 0.1`; 5% unit = `90 × 0.2/0.3 = 60 kVA`.

**Q8.** Secondary phase = `11000/10 = 1100 V`; star line = `√3 × 1100 = 1905 V ≈ 1.90 kV`.

</details>

---

## 🔧 Power Electronics: Thyristor II — Triggering, dv/dt & di/dt Protection, Snubbers

### 📖 Concept Deep Dive

An SCR must be turned on **reliably** and protected from **false turn-on** and **destruction**.

**Turn-on methods.**
- **Gate triggering** — the normal method: a gate current pulse. Higher `IG` lowers the forward breakover voltage needed.
- **Forward voltage (breakover)** — exceeding `VBO` turns it on without gate (usually undesirable/destructive).
- **dv/dt triggering** — a fast-rising anode voltage injects capacitive current `iC2 = Cj2·(dv/dt)` through junction J2's capacitance, which can falsely turn the SCR on.
- **Thermal / light triggering** — high temperature or (in a LASCR) light.

**dv/dt protection.** To prevent false dv/dt turn-on, limit the rate of rise of anode voltage with a **snubber** (an `R-C` across the SCR). The capacitor `Cs` slows the voltage rise; the series `Rs` limits the capacitor **discharge current** through the SCR at turn-on (to keep it below the SCR's di/dt limit).

```
Snubber initial dv/dt seen by SCR ≈ Vs / (Rs·Cs)   (roughly; R-C charging)
Snubber discharge current at turn-on: peak ≈ Vs/Rs  (must be within device rating)
```

**di/dt protection.** At turn-on, conduction spreads across the junction from the gate region gradually; if anode current rises too fast (`di/dt` too high), local current concentration causes a **hot spot** and failure. A **series inductor `Ls`** limits the rate of rise:

```
di/dt = Vs / Ls   ⇒   Ls = Vs / (di/dt)max
```

So a **series L** limits **di/dt**, and a **parallel R-C (snubber)** limits **dv/dt** — a symmetric, easily-remembered pair.

**Gate characteristics.** The gate has a **permissible region** bounded by minimum gate current/voltage to trigger (`Igmin`, `Vgmin`), maximum ratings (`Igmax`, `Vgmax`), and maximum **gate power dissipation** `Pgav`. The **load line** of the gate-drive source must intersect this region for reliable triggering:

```
Vg = Es − Ig·Rs   (gate source load line);  operating point within Pg,max hyperbola
```

> 💎 **KEY RESULT** — **Series inductor Ls limits di/dt** (`Ls = Vs/(di/dt)`). **R-C snubber limits dv/dt** (`Cs` slows rise; `Rs` limits turn-on discharge current). False turn-on comes from **dv/dt** (via J2 capacitance).

> ⚠️ **TRAP ALERT** — Snubber (R-C) = **dv/dt** protection (parallel); series inductor = **di/dt** protection. Don't swap them. Higher `IG` **reduces** the forward breakover voltage — it does not raise it.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| di/dt limit (series L) | `Ls = Vs/(di/dt)max` |
| dv/dt across SCR (snubber) | `dv/dt ≈ Vs/(Rs·Cs)` (order estimate) |
| Snubber discharge peak current | `≈ Vs/Rs` (must be within SCR rating) |
| Capacitive turn-on current | `iC = Cj2·(dv/dt)` |
| Gate source load line | `Vg = Es − Ig·Rs` |
| Gate power limit | `Vg·Ig ≤ Pg,max` |

### 🧮 Solved Examples

**Example 1 — di/dt inductor.**
An SCR circuit has `Vs = 200 V` and a maximum allowable `di/dt = 40 A/µs`. Find the minimum series inductance.

- `Ls = Vs/(di/dt)max = 200 / (40×10⁶) = 200/4×10⁷ = 5×10⁻⁶ H = 5 µH`.

**Example 2 — snubber discharge current.**
A snubber has `Rs = 20 Ω`, `Cs = 0.1 µF`, supply `Vs = 400 V`. Peak discharge current through the SCR at turn-on, and check dv/dt limiting.

- Peak discharge current `≈ Vs/Rs = 400/20 = 20 A` (must be within the SCR's surge rating).
- Order-of-magnitude `dv/dt ≈ Vs/(Rs·Cs) = 400/(20 × 0.1×10⁻⁶) = 400/(2×10⁻⁶) = 2×10⁸ V/s = 200 V/µs` — choose Rs, Cs so this stays below the SCR's dv/dt rating.

> 🧠 **MEMORY HOOK** — "**L for di/dt, C for dv/dt.**" The snubber resistor `Rs` exists to stop the capacitor from dumping a huge current spike into the SCR when it fires.

### ⚠️ Common Traps

1. Swapping **di/dt** (series L) and **dv/dt** (parallel R-C) protection.
2. Omitting the snubber **resistor** → capacitor discharge exceeds SCR di/dt at turn-on.
3. Thinking dv/dt turn-on needs a gate signal — it's **false** (capacitive) turn-on.
4. Believing higher `IG` raises breakover voltage (it **lowers** it).
5. Operating the gate outside the **Pg,max** (gate power) limit.
6. Ignoring that turn-on spreads gradually → the reason di/dt matters.

### 📝 Test — Thyristor II (8 Q)

1. A snubber circuit across an SCR protects against: (a) di/dt (b) dv/dt (c) overcurrent (d) reverse voltage.
2. A series inductor limits: (a) dv/dt (b) di/dt (c) leakage (d) gate current.
3. False turn-on by fast anode-voltage rise is due to: (a) J2 capacitance (dv/dt) (b) gate pulse (c) temperature only (d) light.
4. Increasing gate current: (a) raises breakover voltage (b) lowers breakover voltage (c) no effect (d) turns it off.
5. The snubber resistor primarily limits: (a) dv/dt only (b) capacitor discharge current at turn-on (c) gate voltage (d) holding current.
6. **(NAT)** `Vs = 300 V`, max `di/dt = 50 A/µs`. Minimum series inductance (µH)?
7. **(NAT)** Snubber `Rs = 25 Ω`, `Vs = 500 V`. Peak discharge current at turn-on (A)?
8. **(NAT)** Snubber `Rs = 10 Ω`, `Cs = 0.2 µF`, `Vs = 220 V`. Estimated dv/dt (V/µs)?

<details><summary>🔑 Solutions</summary>

**Q1 — (b) dv/dt.**

**Q2 — (b) di/dt.**

**Q3 — (a).** Capacitive current through J2 (`iC = Cj2·dv/dt`).

**Q4 — (b).** Higher `IG` lowers forward breakover voltage.

**Q5 — (b).** Limits the capacitor's turn-on discharge current.

**Q6.** `Ls = 300/(50×10⁶) = 6×10⁻⁶ = 6 µH`.

**Q7.** `Ipk ≈ Vs/Rs = 500/25 = 20 A`.

**Q8.** `dv/dt ≈ Vs/(Rs·Cs) = 220/(10 × 0.2×10⁻⁶) = 220/(2×10⁻⁶) = 1.1×10⁸ V/s = 110 V/µs`.

</details>

---

> 🧠 **DAY-46 WRAP (Round-3 pass 4)** — **Galvanometer:** `θ = (NBA/K)I`, ballistic → charge (high inertia/low damping), fluxmeter → flux change. **3-φ transformer:** star `Vline=√3 Vph`, Y-Δ/Δ-Y = √3 + 30°, delta clears 3rd harmonic, parallel needs same vector group, load ∝ 1/Zpu. **SCR protection:** `Ls = Vs/(di/dt)` for di/dt, **R-C snubber** for dv/dt (Rs limits discharge). ⚡

**🔁 Round-3 progress:** Measurements ▓▓▓▓░░░░░░ · Machines ▓▓▓▓░░░░░░ · Power Electronics ▓▓▓▓░░░░░░ — round-3 rolling on. 🎓 Power Systems joins as a 4th subject once the reference PDFs arrive.
