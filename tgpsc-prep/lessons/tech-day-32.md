# ⚡ GATE Technical Revision — Day 32 (2026-08-21)

*Three subjects, one sitting — the energy meter, DC machine testing, and three-phase rectifiers.*

📅 Tech Day 32 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics

> 🧠 **MEMORY HOOK** — Today is **"count the turns, test without loading, and go three-phase"**: the induction **energy meter** (revolutions ∝ energy), **Swinburne & Hopkinson** tests for DC machines, and the **3-pulse vs 6-pulse** rectifier.

---

## 🔧 Measuring Instruments: Measurement of Energy — Single-Phase Induction Energy Meter

### 📖 Concept Deep Dive

The **single-phase induction energy meter** is an **integrating** instrument that records **energy (kWh)**. It has two electromagnets acting on an aluminium **disc**:
- a **shunt (pressure) magnet** carrying a voltage coil (many turns), whose flux `φsh` should **lag the voltage by 90°**;
- a **series (current) magnet** carrying the load current, with flux `φse ∝ I`.

The interaction of the two AC fluxes produces a **driving torque**:

```
Td ∝ φsh · φse · sin(angle) ∝ V · I · cosφ = active power P
```

A **permanent (braking) magnet** induces eddy currents in the moving disc, giving a **braking torque `Tb ∝ N`** (speed). At steady state:

```
Td = Tb ⇒ N ∝ P ⇒ (revolutions) ∝ energy
```

So the **number of disc revolutions is proportional to energy consumed**, and the **meter constant `K`** is expressed in **revolutions per kWh**.

**Key adjustments:**

| Adjustment | Purpose |
|---|---|
| **Lag (power-factor)** | Makes `φsh` lag `V` by exactly **90°** (shading band on shunt magnet) |
| **Light-load / friction** | Small shading loop near shunt magnet adds torque to overcome friction at low load |
| **Braking (speed)** | Position of the permanent magnet sets the full-load speed calibration |
| **Creep holes** | Two diametrically opposite holes in the disc stop **creeping** |

> 💎 **KEY RESULT** — Revolutions ∝ energy: `Energy (kWh) = (number of revolutions) / K`, where `K` = meter constant (rev/kWh). Equivalent power `P(kW) = (rev × 3600)/(K × t_sec)`.

**Creeping** is slow continuous rotation of the disc with the **pressure coil energised but no load current** — caused by over-compensation of friction, stray fields, or vibration; cured by **two holes** drilled in the disc (which lock it against a pole).

**Testing — phantom (fictitious) loading:** to test a high-current meter without supplying full power, the **pressure coil is fed rated voltage** while the **current coil is fed rated current from a separate low-voltage source** — so only the small `I²R` of the current circuit is drawn, not full load power.

> ⚠️ **TRAP ALERT** — The energy meter measures **energy (kWh)**, not power. **Creeping** happens on **no load** (pressure coil only). **Phantom loading** saves power during testing by supplying voltage and current circuits **separately**.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Driving torque | `Td ∝ V·I·cosφ` |
| Braking torque | `Tb ∝ N` |
| Energy | `E(kWh) = N_rev / K` |
| Power from meter | `P(kW) = (N_rev × 3600)/(K × t_sec)` |
| Percentage error | `= (measured − true)/true × 100` |

### 🧮 Solved Examples

**Example 1 — Load power from disc speed.** An energy meter has constant `K = 1200 rev/kWh`. Its disc makes `40` revolutions in `60 s` on a steady load. Find the load power.

```
P(kW) = (N_rev × 3600)/(K × t_sec) = (40 × 3600)/(1200 × 60)
      = 144000 / 72000 = 2.0 kW
```

**Example 2 — Meter error.** A meter of constant `600 rev/kWh` supplies a `5 kW` load for `30 min`; the disc makes `1530` revolutions. Find the percentage error.

```
True revolutions = K × energy = 600 × (5 × 0.5) = 600 × 2.5 = 1500 rev
Error = (1530 − 1500)/1500 × 100 = +2%   (meter runs 2% FAST)
```

### ⚠️ Common Traps

1. Treating the meter as reading **power** — it integrates **energy**.
2. Forgetting the **3600** when converting rev/time to kW.
3. Thinking creeping needs a load — it occurs on **no load** (voltage only).
4. Confusing **lag adjustment** (90° flux) with **friction** compensation.
5. Mislabeling **phantom loading** as full-power testing — it's the opposite.
6. Using rpm instead of consistent time units in the power formula.

### 📝 Test — Measuring Instruments (8 Q)

**Q1 (MCQ).** The driving torque of an induction energy meter is proportional to:
(a) V² (b) I² (c) VI cosφ (d) N

**Q2 (MCQ).** The braking torque in an energy meter is provided by:
(a) a spring (b) a permanent magnet (c) air friction (d) the shunt coil

**Q3 (MCQ).** Slow rotation of the disc on no load is called:
(a) braking (b) creeping (c) lagging (d) damping

**Q4 (MCQ).** Creeping is prevented by:
(a) a stronger magnet (b) two holes in the disc (c) more turns (d) a spring

**Q5 (MCQ).** Phantom loading is used to:
(a) increase accuracy (b) test meters with low power consumption (c) prevent creeping (d) measure power factor

**Q6 (NAT).** An energy meter (1500 rev/kWh) makes 25 revolutions in 30 s. Find the load power (kW).

**Q7 (NAT).** A meter of 750 rev/kWh serves a 4 kW load for 15 min. Find the true number of revolutions.

**Q8 (NAT).** For Q7, if the disc actually makes 735 revolutions, find the percentage error.

<details><summary>🔑 Solutions</summary>

**Q1 — (c) VI cosφ.**

**Q2 — (b) a permanent magnet.**

**Q3 — (b) creeping.**

**Q4 — (b) two holes in the disc.**

**Q5 — (b) test meters with low power consumption.**

**Q6.** `P = (25 × 3600)/(1500 × 30) = 90000/45000 = 2.0 kW`.

**Q7.** `True rev = K × E = 750 × (4 × 0.25) = 750 × 1.0 = 750 rev`.

**Q8.** `Error = (735 − 750)/750 × 100 = −2%` (runs 2% slow).

</details>

---

## 🔧 Electrical Machines: DC Machine Losses, Efficiency & Testing (Swinburne, Hopkinson)

### 📖 Concept Deep Dive

**Losses in a DC machine:**

| Loss | Type | Nature |
|---|---|---|
| **Armature copper** `Ia²·Ra` | Variable | ∝ load² |
| **Field copper** (shunt `V²/Rsh`) | Constant | fixed at rated voltage |
| **Iron/core** (hysteresis + eddy) | Constant | fixed |
| **Mechanical** (friction + windage) | Constant | fixed |

Constant losses (iron + friction + windage + field) are grouped; the only major **variable** loss is **armature copper**.

**Efficiency:**

```
Generator:  η = V·IL / (V·IL + losses)
Motor:      η = (V·IL − losses)/(V·IL)
Max efficiency when:  variable loss = constant loss  ⇒  Ia²·Ra = Wc
```

**Swinburne's Test (no-load, indirect).** The machine is run as a **motor at no load**; the small no-load input gives the constant losses, from which efficiency at **any** load is predicted:

```
No-load: measure V, I0 (no-load line current), Ish, Ra
Ia0 = I0 − Ish
Total constant loss (rotational + field) = V·I0 − Ia0²·Ra
Total loss at load current IL:  = (V·I0 − Ia0²·Ra) + Ia²·Ra ,  where Ia = IL ∓ Ish
```

> 💎 **KEY RESULT** — Swinburne's test finds efficiency **cheaply from a no-load reading** but **cannot** reveal temperature rise, stray-load losses, or commutation quality, and is **not valid for series motors** (they can't run at no load).

**Hopkinson's Test (back-to-back / regenerative).** **Two identical** machines are **mechanically coupled**; one runs as a **motor** and drives the other as a **generator**, whose output is **fed back electrically** to the motor. The mains supplies **only the losses**, so a **full-load** test is done **without consuming full-load power** — and it reveals **temperature rise** and real performance.

> 🧠 **MEMORY HOOK** — "**Swinburne = 1 machine, no load, cheap but blind; Hopkinson = 2 machines, full load fed back, realistic**". Max efficiency at **Ia²Ra = constant loss**.

> ⚠️ **TRAP ALERT** — Swinburne is **not** suitable for **series** motors (no-load runaway) and **ignores stray-load & temperature effects**. Hopkinson needs **two identical** machines but tests true full-load behaviour with minimal energy from the supply.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| No-load armature current | `Ia0 = I0 − Ish` |
| Constant loss (rot + field) | `= V·I0 − Ia0²·Ra` |
| Total loss at load | `= (V·I0 − Ia0²·Ra) + Ia²·Ra` |
| Motor efficiency | `η = (V·IL − loss)/(V·IL)` |
| Max-η condition | `Ia²·Ra = constant loss` |

### 🧮 Solved Examples

**Example 1 — Swinburne efficiency (motor).** A `250 V` DC shunt motor: no-load line current `I0 = 5 A`, `Ra = 0.2 Ω`, `Rsh = 250 Ω`. Find the efficiency at a full-load line current of `50 A`.

```
Ish = V/Rsh = 250/250 = 1 A
Ia0 = I0 − Ish = 5 − 1 = 4 A
Constant loss = V·I0 − Ia0²·Ra = 250×5 − 4²×0.2 = 1250 − 3.2 = 1246.8 W

At load: Ia = IL − Ish = 50 − 1 = 49 A
Armature Cu = Ia²·Ra = 49² × 0.2 = 480.2 W
Total loss = 1246.8 + 480.2 = 1727 W
Input = V·IL = 250 × 50 = 12500 W
η = (12500 − 1727)/12500 = 10773/12500 = 0.862 = 86.2%
```

**Example 2 — Max-efficiency load.** For the same machine, at what armature current is efficiency maximum?

```
Ia²·Ra = constant loss ⇒ Ia² × 0.2 = 1246.8
Ia² = 6234 ⇒ Ia = 78.9 A   (armature current for max efficiency)
```

### ⚠️ Common Traps

1. Applying **Swinburne's test to a series motor** — invalid (no-load runaway).
2. Forgetting Swinburne ignores **stray-load and temperature** effects.
3. Using `Ia = IL` for a shunt machine — it's `IL ∓ Ish`.
4. Forgetting max efficiency needs **variable = constant** loss.
5. Thinking Hopkinson draws full-load power from mains — it draws **only losses**.
6. Not distinguishing motor `η = (in−loss)/in` from generator `η = out/(out+loss)`.

### 📝 Test — Electrical Machines (8 Q)

**Q1 (MCQ).** Swinburne's test is a:
(a) full-load test (b) no-load indirect test (c) short-circuit test (d) heat-run test

**Q2 (MCQ).** Swinburne's test cannot be applied to:
(a) shunt motors (b) series motors (c) generators (d) compound motors

**Q3 (MCQ).** Hopkinson's test requires:
(a) one machine (b) two identical machines (c) a dynamometer (d) a brake drum

**Q4 (MCQ).** In a DC machine, the variable loss is:
(a) iron loss (b) armature copper loss (c) friction (d) windage

**Q5 (MCQ).** Maximum efficiency occurs when:
(a) copper loss = 2× constant loss (b) variable loss = constant loss (c) load = no load (d) speed is max

**Q6 (NAT).** A 220 V shunt motor: I0 = 4 A, Ra = 0.25 Ω, Rsh = 220 Ω. Find the constant loss (W).

**Q7 (NAT).** For Q6, find the total loss (W) at a load current of 40 A.

**Q8 (NAT).** For Q6-Q7, find the motor efficiency (%) at 40 A.

<details><summary>🔑 Solutions</summary>

**Q1 — (b) no-load indirect test.**

**Q2 — (b) series motors.**

**Q3 — (b) two identical machines.**

**Q4 — (b) armature copper loss.**

**Q5 — (b) variable loss = constant loss.**

**Q6.** `Ish = 220/220 = 1 A`; `Ia0 = 4 − 1 = 3 A`; `Constant = 220×4 − 3²×0.25 = 880 − 2.25 = 877.75 W`.

**Q7.** `Ia = 40 − 1 = 39 A`; `Ia²Ra = 39²×0.25 = 380.25 W`; `Total loss = 877.75 + 380.25 = 1258 W`.

**Q8.** `Input = 220×40 = 8800 W`; `η = (8800 − 1258)/8800 = 7542/8800 = 0.857 = 85.7%`.

</details>

---

## 🔧 Power Electronics: Three-Phase Rectifiers — Waveforms, Average Output & Ripple

### 📖 Concept Deep Dive

Three-phase rectifiers give **smoother DC** and **higher output** than single-phase, with a higher ripple frequency. Let `Vm` be the **peak phase voltage** and `f` the supply frequency.

**Three-phase half-wave (3-pulse):** three devices, each conducting **120°**:

```
Uncontrolled: Vdc = (3√3 / 2π)·Vm ≈ 0.827·Vm  (= 1.17·Vph_rms)
Controlled:   Vdc = (3√3 / 2π)·Vm·cosα   (for α ≤ 30°)
Ripple frequency = 3·f
```

**Three-phase full converter (6-pulse bridge):** six devices, each conducting **120°**, two in series at a time:

```
Uncontrolled: Vdc = (3√3 / π)·Vm ≈ 1.654·Vm  (= 3·VmL/π, VmL = peak line voltage)
Controlled:   Vdc = (3√3 / π)·Vm·cosα
Ripple frequency = 6·f
```

> 💎 **KEY RESULT** — For a **p-pulse** converter the **ripple frequency = p·f**. The **3-phase half-wave = 3-pulse (3f)**; the **3-phase full bridge = 6-pulse (6f)**. The full bridge doubles the average output of the half-wave and halves the ripple.

**Comparison:**

| Converter | Pulses | Vdc (uncontrolled) | Ripple freq |
|---|---|---|---|
| 1-φ full bridge | 2 | `2Vm/π` | `2f` |
| 3-φ half-wave | 3 | `(3√3/2π)Vm ≈ 0.827Vm` | `3f` |
| 3-φ full bridge | 6 | `(3√3/π)Vm ≈ 1.654Vm` | `6f` |

The **6-pulse bridge** has the **lowest ripple** and highest DC output for a given phase voltage, which is why it dominates high-power rectification and HVDC (in series as 12-pulse).

> 🧠 **MEMORY HOOK** — "**Pulses set the ripple**": 2-pulse → 2f, 3-pulse → 3f, 6-pulse → 6f. Full-bridge 3-φ: `Vdc = (3√3/π)Vm·cosα`, ripple **6f**.

> ⚠️ **TRAP ALERT** — Use **peak phase** voltage `Vm` in `(3√3/π)Vm`, or **peak line** voltage in `3·VmL/π` — they're equal since `VmL = √3·Vm`. Don't mix RMS and peak. The half-wave controlled formula holds only for `α ≤ 30°` (beyond that the waveform changes).

### 📐 Formula Sheet

| Converter | Average output Vdc | Ripple |
|---|---|---|
| 3-φ half-wave (controlled) | `(3√3/2π)·Vm·cosα` | `3f` |
| 3-φ full bridge (controlled) | `(3√3/π)·Vm·cosα` | `6f` |
| 3-φ full bridge (line form) | `(3·VmL/π)·cosα` | `6f` |
| General ripple frequency | `= p·f` (p = pulses) | — |

### 🧮 Solved Examples

**Example 1 — 3-φ full bridge, uncontrolled.** Phase voltage `230 V` RMS (`Vm = √2×230 ≈ 325 V`), `α = 0`. Find `Vdc`.

```
Vdc = (3√3/π)·Vm = (3 × 1.732 / 3.1416) × 325 = 1.654 × 325 = 537.5 V
Check (line): VmL = √3×325 = 563 V ; 3×563/π = 537.6 V ✓
```

**Example 2 — Controlled bridge & ripple.** Same converter, `α = 30°`, supply `50 Hz`. Find `Vdc` and the ripple frequency.

```
Vdc = 537.5 × cos30° = 537.5 × 0.866 = 465.5 V
Ripple frequency = 6 × f = 6 × 50 = 300 Hz
```

### ⚠️ Common Traps

1. Using the **1-φ** formula for a 3-φ converter.
2. Getting ripple frequency wrong — it's **p·f** (6f for the bridge).
3. Mixing **peak phase** `Vm` with **peak line** `VmL = √3·Vm`.
4. Applying the half-wave controlled formula beyond `α = 30°`.
5. Forgetting the 6-pulse bridge output is `(3√3/π)Vm`, **double** the half-wave.
6. Using RMS where the formula needs **peak**.

### 📝 Test — Power Electronics (8 Q)

**Q1 (MCQ).** The ripple frequency of a 3-phase full-bridge rectifier on a 50 Hz supply is:
(a) 50 Hz (b) 100 Hz (c) 150 Hz (d) 300 Hz

**Q2 (MCQ).** A 3-phase half-wave rectifier is a ___-pulse converter:
(a) 2 (b) 3 (c) 6 (d) 12

**Q3 (MCQ).** The average output of a 3-φ full bridge (uncontrolled) is:
(a) 2Vm/π (b) (3√3/2π)Vm (c) (3√3/π)Vm (d) Vm/π

**Q4 (MCQ).** For a p-pulse converter, the ripple frequency is:
(a) f (b) 2f (c) p·f (d) f/p

**Q5 (MCQ).** Compared to a 3-pulse converter, a 6-pulse converter has:
(a) higher ripple (b) lower ripple & higher Vdc (c) same output (d) lower Vdc

**Q6 (NAT).** A 3-φ full bridge, peak phase voltage 300 V, α = 0. Find Vdc (V).

**Q7 (NAT).** For Q6 at α = 60°, find Vdc (V).

**Q8 (NAT).** A 3-φ half-wave controlled rectifier, Vm = 340 V, α = 0. Find Vdc (V).

<details><summary>🔑 Solutions</summary>

**Q1 — (d) 300 Hz** (6 × 50).

**Q2 — (b) 3.**

**Q3 — (c) (3√3/π)Vm.**

**Q4 — (c) p·f.**

**Q5 — (b) lower ripple & higher Vdc.**

**Q6.** `Vdc = (3√3/π)×300 = 1.654 × 300 = 496.2 V`.

**Q7.** `Vdc = 496.2 × cos60° = 496.2 × 0.5 = 248.1 V`.

**Q8.** `Vdc = (3√3/2π)×340 = 0.827 × 340 = 281.2 V`.

</details>

---

> 🧠 **DAY-32 WRAP** — Energy meter: **rev ∝ energy**, `E = N/K`, creeping on no-load (fix: holes), phantom loading for testing. DC testing: **Swinburne (no-load, cheap, not for series)**, **Hopkinson (two machines, full-load fed back)**, max η at **Ia²Ra = Wc**. Rectifiers: **ripple = p·f**, 3-φ bridge `Vdc = (3√3/π)Vm·cosα` (6-pulse, 6f). Revise the three boxed KEY RESULTS. ⚡
