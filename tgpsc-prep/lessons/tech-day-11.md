# ⚡ GATE Technical Revision — Day 11 (2026-07-28)

*The spinning aluminium disc that bills your electricity, the DC generator that bootstraps its own field, and the first taste of controlled rectification.*

`📅 Tech Day 11  ·  ⏱ ~45 min  ·  🎯 Measurements + Machines + Power Electronics`

Attempt each section's test **before** opening its solutions — recall beats re-reading.

---

## 🔧 Measuring Instruments: Measurement of Energy — Single-Phase Induction Energy Meter

Yesterday we measured **power** (watts). Energy is power integrated over time (kWh) — measured by the **induction-type energy meter**, the rotating-disc device on every old house wall. It is an **integrating** instrument.

### 📖 Concept Deep Dive

**Construction.** Two electromagnets act on an aluminium **disc**:
- **Shunt (pressure) magnet** — a coil of many turns across the supply voltage `V`, producing flux `φp ∝ V` that (because the coil is highly inductive) **lags V by nearly 90°**.
- **Series (current) magnet** — a few turns carrying load current `I`, producing flux `φs ∝ I` in phase with `I`.
- A **braking (permanent) magnet** near the disc rim provides a retarding (eddy-current) torque proportional to speed.
- A **worm gear + register** counts revolutions → kWh.

**Driving torque (induction principle).** Two alternating fluxes displaced in space and time induce eddy currents in the disc; the interaction produces torque:

```
Td ∝ φp · φs · sin(α)      where α = phase angle between φp and φs
```

Since `φp ∝ V` (lagging V by ~90°) and `φs ∝ I`, with a proper **lag adjustment** the angle works out so that:

```
Td ∝ V · I · cos φ = P   (true active power)   [with correct 90° lag]
```

**Braking torque.** The braking magnet induces eddy currents ∝ disc speed `N`:

```
Tb ∝ N   (braking torque proportional to speed)
```

At steady speed **Td = Tb**, so `N ∝ P`. Total revolutions ∝ ∫P dt = **energy**:

```
Steady state:  N ∝ P   ⇒   Revolutions ∝ Energy (kWh)
Meter constant  K = revolutions per kWh  (e.g. 1500 rev/kWh)
```

**Adjustments (each fixes a specific error):**

| Adjustment | Purpose |
|---|---|
| **Lag (power-factor) adjustment** | Makes shunt flux lag V by exactly 90° so torque ∝ VI cos φ (correct at all pf) |
| **Light-load (friction) adjustment** | Small shading loops near shunt magnet add torque to overcome friction at low load |
| **Creep adjustment** | Two holes drilled in the disc stop **creeping** (slow rotation at no load, only voltage applied) |
| **Braking (full-load) adjustment** | Move the braking magnet to set correct speed/registration at full load |

**Creeping** = the disc slowly rotates even with **no load current** (only the pressure coil energised), due to over-compensation of friction or stray fields. Cured by **two diametrically opposite holes** in the disc (the hole distorts eddy currents and locks the disc).

**Errors** — phase-angle error (bad lag adjustment), friction error (low load), temperature error, frequency error, and errors from waveform/voltage variation.

**Testing & phantom loading.** To test a meter at, say, 230 V and 20 A, a **direct load** would waste `230 × 20 = 4.6 kW`. **Phantom (fictitious) loading** separates the circuits: the **pressure coil** is fed rated voltage from one low-power source, while the **current coil** is fed rated current from a **separate low-voltage** source. Power drawn ≈ (small CC voltage × current) + (voltage × tiny PC current) — a fraction of the real power:

```
Phantom-load power ≈ I·(CC voltage) + V·(PC current)   ≪ V·I
Percentage error = (meter reading − true energy)/true energy × 100
```

> 💎 **KEY RESULT** — An induction energy meter is an **integrating** instrument: `Td ∝ φp φs sin α ∝ VI cos φ`, braking `Tb ∝ N`, so **revolutions ∝ energy**. **Creeping** (rotation at no load) is cured by **two holes** in the disc; **phantom loading** tests it economically.

> 🧠 **MEMORY HOOK** — "**Pressure flux lags 90°, series flux with I; disc speed ∝ power; revs ∝ energy.** Lag fixes pf, holes fix creep, shading fixes friction, phantom saves power."

> ⚠️ **TRAP ALERT** — Energy meter measures **energy (kWh)**, an **integral** — not instantaneous power. The braking torque ∝ **speed**, which is what makes speed settle proportional to power.

### 📐 Formula Sheet

```
Driving torque   Td ∝ φp φs sin α ∝ V I cos φ   (with correct lag)
Braking torque   Tb ∝ N (disc speed)
Steady state     Td = Tb ⇒ N ∝ P ⇒ revolutions ∝ energy
Meter constant   K = revolutions per kWh
Energy recorded  = (No. of revolutions)/K   kWh
% error          = (recorded − true)/true × 100
Phantom load P   ≈ I·Vcc + V·Ipc  ≪ V·I  (test power)
```

### 🧮 Solved Examples

**Example 1 — meter constant & error.**
An energy meter has a constant of **1500 revolutions/kWh**. On a load of **5 kW** for **2 hours**, the disc makes **14,700 revolutions**. Find the percentage error.

```
True energy = P × t = 5 kW × 2 h = 10 kWh
Expected revolutions = K × energy = 1500 × 10 = 15 000 rev
Recorded (by revs) energy = 14 700/1500 = 9.8 kWh
% error = (9.8 − 10)/10 × 100 = −2.0%
```
**Meter reads 2 % slow** (under-registers).

**Example 2 — disc speed check.**
The same 1500 rev/kWh meter supplies a **3 kW** load. Find the disc speed in **rpm**.

```
Revolutions per hour = K × energy per hour = 1500 rev/kWh × 3 kWh/h = 4500 rev/h
Speed = 4500/60 = 75 rev/min
```
**Disc speed = 75 rpm.**

### ⚠️ Common Traps

1. **Energy (kWh) not power** — the register counts **revolutions** (an integral). Speed, not position, tracks instantaneous power.
2. **Creeping** happens at **no load with only voltage** applied — cured by **two holes** in the disc (not by the braking magnet).
3. **Lag adjustment** is what makes the reading correct at **all power factors** (shunt flux must lag V by exactly 90°).
4. **Phantom loading** energises PC and CC **separately** to save power — it does **not** change the meter's calibration test result.
5. **Braking torque ∝ speed** (eddy currents from the permanent magnet) — moving the braking magnet **outward** (toward rim) increases braking → slows the disc.
6. Meter constant **K** is **rev/kWh**; energy = revolutions/K — don't invert it.

### 📝 Test — Measuring Instruments (8 Q)

1. **(MCQ)** In an induction energy meter, the braking torque is proportional to:
   (a) V·I  (b) disc speed N  (c) V²  (d) I²
2. **(MCQ)** "Creeping" in an energy meter is:
   (a) slow rotation at no load with voltage applied  (b) fast rotation at full load  (c) reverse rotation  (d) disc stopping
3. **(MCQ)** Creeping is prevented by:
   (a) the braking magnet  (b) two holes drilled in the disc  (c) the shading band  (d) a larger register
4. **(MCQ)** The lag adjustment ensures the shunt flux lags the voltage by:
   (a) 0°  (b) 45°  (c) 90°  (d) 180°
5. **(MCQ)** Phantom loading is used to:
   (a) increase accuracy  (b) test the meter with low power consumption  (c) measure power factor  (d) stop creeping
6. **(NAT)** A meter of 1200 rev/kWh runs for a 4 kWh consumption. How many revolutions does the disc make? ______ rev
7. **(NAT)** A 1500 rev/kWh meter records 7350 rev while the true energy is 5 kWh. Find the % error. ______ %
8. **(NAT)** A 900 rev/kWh energy meter supplies a 2 kW load. Find the disc speed in rpm. ______ rpm

<details>
<summary>🔑 Solutions</summary>

**1 → (b).** Braking (eddy-current) torque ∝ disc speed N.

**2 → (a).** Slow no-load rotation with only the pressure coil energised.

**3 → (b).** Two diametrically opposite holes lock the disc against creep.

**4 → (c) 90°.** Correct lag ⇒ torque ∝ VI cos φ.

**5 → (b).** Separate PC & CC feeds ⇒ small test power.

**6 →** Revolutions = K × energy = 1200 × 4 = **4800 rev.**

**7 →**
```
Recorded energy = 7350/1500 = 4.9 kWh
% error = (4.9 − 5)/5 × 100 = −2.0%
```
**−2.0 % (reads slow).**

**8 →**
```
Rev per hour = 900 × 2 = 1800 rev/h
Speed = 1800/60 = 30 rpm
```
**30 rpm.**

</details>

---

## 🔧 Electrical Machines: DC Generators — Types, Characteristics, Voltage Build-up & Critical Resistance

Day 10 gave us the DC machine's EMF and torque. Now the **generator**: how it's excited, its load characteristics, and the elegant **self-excitation** of a shunt generator.

### 📖 Concept Deep Dive

**Classification by excitation:**

| Type | Field connection | Key trait |
|---|---|---|
| **Separately excited** | Field from external DC source | Flux independent of load |
| **Shunt** | Field in **parallel** with armature | Self-excited; nearly constant V |
| **Series** | Field in **series** with armature | Flux ∝ load current; rising V |
| **Compound** | Both shunt + series windings | Cumulative (V boosted) or differential |

**Key circuit relations:**

```
Separately excited:  Eg = V + Ia·Ra   (+ brush drop);  Ia = IL
Shunt:               Ia = IL + Ish ,  Ish = V/Rsh ,  Eg = V + Ia·Ra
Series:              Ia = Ise = IL ,  Eg = V + Ia(Ra + Rse)
Generated EMF        Eg = φZNP/(60A) = Ka φ N... (Day 10)
```

**Characteristics (three curves to know):**
1. **Open-Circuit / Magnetisation Characteristic (OCC)** — `Eg vs If` at constant speed, no load. Shape follows the **B-H curve**: linear then **saturates**. Has a small residual EMF at `If = 0`.
2. **Internal characteristic** — `Eg vs Ia` (generated EMF after armature reaction, before Ra drop).
3. **External characteristic** — `V vs IL` (terminal). **Shunt** droops slightly (Ra drop + armature reaction + falling If); **series** rises then falls; **cumulative compound** can be **flat/over/under-compounded**.

**Self-excitation & voltage build-up (the exam favourite).** A shunt generator builds voltage from **residual magnetism**:
1. Residual flux → small residual EMF `Er` when rotated.
2. `Er` drives a small field current `If` through `Rsh`.
3. If the field is connected so this `If` **aids** the residual flux, flux rises → EMF rises → more `If` → **cumulative build-up**.
4. Build-up stops where the **OCC intersects the field-resistance line** `V = If·Rsh` (equilibrium).

**Conditions for build-up (must all hold):**
- Residual magnetism present.
- Field connected to **aid** residual flux (else reverse field connection).
- Field resistance **below** the **critical resistance**.
- Speed **above** the **critical speed**.

**Critical field resistance `Rc`** = the slope of the field-resistance line that is **tangent to the initial (linear) part of the OCC**. If `Rsh > Rc`, the line stays below the OCC's knee and the machine **fails to build up** (only residual voltage). 

```
Critical resistance Rc = slope of tangent to OCC (initial region) = (Eg/If) at the linear part
If Rsh > Rc  ⇒  no build-up (only residual voltage)
If Rsh < Rc  ⇒  builds up to OCC ∩ resistance-line point
```

**Critical speed `Nc`** = the speed at which, for the **given Rsh**, the OCC (which scales with speed) is just tangent to the resistance line. Below `Nc`, no build-up. Since OCC ∝ N:

```
Nc / N = Rsh / Rc   (approx, using OCC ∝ speed)  ⇒  Nc = N × (Rsh/Rc)
```

> 💎 **KEY RESULT** — A shunt generator self-excites from **residual magnetism** if the **field aids** it, **Rsh < critical resistance**, and **speed > critical speed**. Build-up settles at **OCC ∩ field-resistance line**. Critical resistance = **tangent slope to the OCC's linear part**.

> 🧠 **MEMORY HOOK** — "**Residual, right-direction, resistance-below-critical, revs-above-critical** — the four R's of build-up. It settles where the OCC meets the field line."

> ⚠️ **TRAP ALERT** — If a shunt generator won't build up: check **residual magnetism** (flash the field), **field connection direction** (reverse it), **Rsh vs Rc** (reduce field R), and **speed** (raise it). Reversing rotation **or** field terminals (but not both) can also kill residual-aiding.

### 📐 Formula Sheet

```
Separately excited  Eg = V + Ia Ra ;  Ia = IL
Shunt   Ish = V/Rsh ;  Ia = IL + Ish ;  Eg = V + Ia Ra
Series  Ia = Ise = IL ;  Eg = V + Ia(Ra + Rse)
Power   generated Pg = Eg·Ia ;  output = V·IL ;  developed torque Ta = Eg Ia/ω
Critical resistance Rc = tangent slope to OCC (linear region)
Critical speed  Nc = N × (Rsh / Rc)   [OCC ∝ speed]
Build-up equilibrium:  V = If·Rsh  meets OCC
```

### 🧮 Solved Examples

**Example 1 — shunt generator EMF.**
A shunt generator delivers `IL = 50 A` at `V = 220 V`. Armature resistance `Ra = 0.1 Ω`, field resistance `Rsh = 110 Ω`. Find the generated EMF (ignore brush drop).

```
Ish = V/Rsh = 220/110 = 2 A
Ia = IL + Ish = 50 + 2 = 52 A
Eg = V + Ia·Ra = 220 + 52 × 0.1 = 220 + 5.2 = 225.2 V
```
**Eg = 225.2 V.**

**Example 2 — critical speed.**
A shunt generator's OCC is taken at **1000 rpm**; its critical resistance at that speed is **Rc = 60 Ω**. The field circuit resistance is **Rsh = 50 Ω**. Find the critical speed (below which it won't build up with this Rsh).

```
Nc = N × (Rsh/Rc) = 1000 × (50/60) = 1000 × 0.8333 = 833.3 rpm
```
**Nc ≈ 833 rpm.** (Above 833 rpm it builds up with Rsh = 50 Ω; below, it won't.)

### ⚠️ Common Traps

1. **Ia ≠ IL for shunt:** `Ia = IL + Ish` (armature also feeds the field). For **series**, `Ia = IL`.
2. **Generator: Eg = V + IaRa** (EMF **greater** than terminal V). For a **motor**, back-EMF `Eb = V − IaRa`. Sign flips.
3. **No build-up** almost always = lost residual magnetism, wrong field polarity, `Rsh > Rc`, or speed `< Nc`.
4. **Critical resistance is a slope** (tangent to OCC), not a fixed ohm value independent of the curve.
5. **OCC ∝ speed** — the whole magnetisation curve scales down at lower speed, which is why a **critical speed** exists for a fixed Rsh.
6. **Series generator can't build up on no load** (no load current ⇒ no field). It needs a load path.

### 📝 Test — Electrical Machines (8 Q)

1. **(MCQ)** In a DC shunt generator, the armature current is:
   (a) Ia = IL  (b) Ia = IL − Ish  (c) Ia = IL + Ish  (d) Ia = Ish
2. **(MCQ)** The generated EMF of a DC generator relates to terminal voltage as:
   (a) Eg = V − IaRa  (b) Eg = V + IaRa  (c) Eg = V  (d) Eg = IaRa − V
3. **(MCQ)** A shunt generator fails to build up voltage. The LEAST likely cause is:
   (a) no residual magnetism  (b) field resistance above critical  (c) speed below critical  (d) load resistance too high
4. **(MCQ)** Critical field resistance corresponds to:
   (a) the tangent to the linear part of the OCC  (b) armature resistance  (c) the saturated region slope  (d) zero
5. **(MCQ)** The open-circuit characteristic (OCC) plots:
   (a) V vs IL  (b) Eg vs If at constant speed  (c) Ia vs speed  (d) torque vs speed
6. **(NAT)** A shunt generator supplies 100 A at 250 V. Ra = 0.05 Ω, Rsh = 125 Ω. Find Eg in volts (ignore brush drop). ______ V
7. **(NAT)** OCC taken at 1500 rpm has critical resistance 80 Ω. For Rsh = 50 Ω, find the critical speed in rpm. ______ rpm
8. **(NAT)** A separately excited generator has Eg = 210 V and Ra = 0.2 Ω, delivering 40 A. Find the terminal voltage in V. ______ V

<details>
<summary>🔑 Solutions</summary>

**1 → (c).** Ia = IL + Ish (armature supplies both load and field).

**2 → (b).** Generator: Eg = V + IaRa.

**3 → (d).** Load resistance being high limits current, not voltage build-up; build-up depends on residual magnetism, field direction, Rsh<Rc, speed>Nc.

**4 → (a).** Tangent slope to the initial (linear) region of the OCC.

**5 → (b).** Eg vs If at constant speed (no load).

**6 →**
```
Ish = 250/125 = 2 A ;  Ia = 100 + 2 = 102 A
Eg = 250 + 102 × 0.05 = 250 + 5.1 = 255.1 V
```
**Eg = 255.1 V.**

**7 →**
```
Nc = N × (Rsh/Rc) = 1500 × (50/80) = 1500 × 0.625 = 937.5 rpm
```
**937.5 rpm.**

**8 →** Separately excited: V = Eg − IaRa = 210 − 40 × 0.2 = 210 − 8 = **202 V.**

</details>

---

## 🔧 Power Electronics: Single-Phase Half-Wave & Half-Controlled Rectifiers (R, RL, RLE loads)

Now we start **controlled rectification** — using the SCR's firing angle `α` to vary the DC output. We begin with the simplest: the single-phase **half-wave** controlled rectifier.

### 📖 Concept Deep Dive

**1-φ half-wave controlled rectifier, R load.** One SCR in series with `R`, fed by `vs = Vm sin ωt`. The SCR conducts from firing angle `α` to `π` (it turns off naturally at the current zero, ωt = π). Average and RMS output:

```
Vo(avg) = (Vm/2π)(1 + cos α)         [R load, conducts α → π]
Vo(rms) = (Vm/2)·√( (1/π)[(π − α) + (sin 2α)/2] )
```

At `α = 0` (diode case): `Vo(avg) = Vm/π`. Output is controllable from `Vm/π` (α=0) down to `0` (α=π).

**R-L load (half-wave).** Inductance stores energy; current **continues past ωt = π** (the SCR stays on into the negative half) until the current reaches zero at the **extinction angle `β`**. So the SCR conducts from `α` to `β` (β > π), and the output voltage goes **negative** during (π → β):

```
Conduction angle γ = β − α
Vo(avg) = (Vm/2π)(cos α − cos β)      [R-L load]
```

`β` is found from the current equation (transcendental) — the load inductance **reduces** average output because of the negative-voltage interval. A **freewheeling diode (FWD)** across the load prevents the negative excursion: current freewheels through the diode after ωt = π, clamping `vo ≥ 0` and **raising** the average back to the R-load value `(Vm/2π)(1+cos α)`.

**R-L-E load (motor/battery).** With a back-EMF `E`, the SCR can be fired only when `vs > E`; conduction is bounded by where `vs = E`. Governs battery charging and DC motor drives.

**Single-phase semiconverter (half-controlled bridge).** A bridge with **two SCRs + two diodes** (or 2 SCRs + 2 diodes with FWD action inherent). It is **"half-controlled"**: output is controllable but **cannot go negative** (no inversion) — the diodes provide an inherent freewheeling path. For an **R-L (highly inductive, continuous) load**:

```
Semiconverter (1-φ, continuous current):
Vo(avg) = (Vm/π)(1 + cos α)      [note: /π, twice the half-wave, full-wave rectification]
Range: α = 0 → Vo = 2Vm/π (max) ;  α = π → Vo = 0
```

Compare with the **full-converter** (4 SCRs, fully controlled, allows negative V / inversion) which gives `Vo = (2Vm/π)cos α` — that's tomorrow's territory. The semiconverter's `(1 + cos α)` form (always ≥ 0) is the signature of half-control.

| Circuit | Devices | Vo(avg), cont. current | Can invert? |
|---|---|---|---|
| Half-wave controlled | 1 SCR | (Vm/2π)(1+cos α) [R] | No |
| Semiconverter (half-controlled) | 2 SCR + 2 D | (Vm/π)(1+cos α) | **No** (Vo ≥ 0) |
| Full-converter (fully controlled) | 4 SCR | (2Vm/π)cos α | **Yes** (Vo can be −) |

> 💎 **KEY RESULT** — Half-wave controlled (R): `Vo = (Vm/2π)(1+cos α)`. A **semiconverter** gives `Vo = (Vm/π)(1+cos α)` — output **cannot go negative** (inherent freewheeling), so it **cannot invert**. A **freewheeling diode** on an R-L load restores the average by blocking the negative voltage interval.

> 🧠 **MEMORY HOOK** — "**Half-controlled = (1 + cos α), always positive, never inverts. Fully controlled = cos α, can go negative (invert).** FWD kills the negative dip."

> ⚠️ **TRAP ALERT** — For an **R-L load without FWD**, average output is **lower** than the R-load value because `vo` goes negative from π to β. Adding a **freewheeling diode** raises `Vo` to `(Vm/2π)(1+cos α)`. Don't apply the R-load formula to an R-L load lacking a FWD.

### 📐 Formula Sheet

```
Half-wave, R load:   Vo(avg) = (Vm/2π)(1 + cos α)
                     Vo(avg)|α=0 = Vm/π
Half-wave, R-L load: Vo(avg) = (Vm/2π)(cos α − cos β) ,  β = extinction angle
                     conduction angle γ = β − α
Semiconverter (1-φ, continuous): Vo(avg) = (Vm/π)(1 + cos α)
Full-converter (1-φ, continuous): Vo(avg) = (2Vm/π) cos α
FWD on R-L: clamps vo ≥ 0 ⇒ restores Vo = (Vm/2π)(1 + cos α)
Vm = √2 · Vrms (peak of supply)
```

### 🧮 Solved Examples

**Example 1 — half-wave, R load.**
A 1-φ half-wave controlled rectifier feeds a resistive load from a **230 V (rms), 50 Hz** supply, fired at `α = 60°`. Find the average output voltage.

```
Vm = √2 × 230 = 1.4142 × 230 = 325.27 V
Vo(avg) = (Vm/2π)(1 + cos α) = (325.27/(2×3.14159))(1 + cos 60°)
        = (325.27/6.28319)(1 + 0.5)
        = 51.77 × 1.5 = 77.65 V
```
**Vo(avg) ≈ 77.7 V.**

**Example 2 — semiconverter.**
A 1-φ semiconverter feeds a highly inductive (continuous-current) load from **120 V (rms)**, fired at `α = 90°`. Find the average output voltage.

```
Vm = √2 × 120 = 169.71 V
Vo(avg) = (Vm/π)(1 + cos α) = (169.71/3.14159)(1 + cos 90°)
        = 54.02 × (1 + 0) = 54.02 V
```
**Vo(avg) ≈ 54.0 V.** (Note: at α = 90° a full-converter would give `(2Vm/π)cos90° = 0`, but the semiconverter still gives 54 V — the freewheeling action.)

### ⚠️ Common Traps

1. **Half-wave R-load Vo = (Vm/2π)(1+cos α)** — the `/2π` (not `/π`); at α=0 it's `Vm/π`.
2. **Semiconverter vs full-converter:** `(Vm/π)(1+cos α)` vs `(2Vm/π)cos α`. Only the **full-converter can invert** (Vo negative).
3. **R-L load without FWD:** conduction extends to `β > π`, output dips negative ⇒ **lower** average. FWD fixes it.
4. **Vm is the PEAK** = √2·Vrms — a very common slip is using Vrms in the formula.
5. **Firing angle α measured from ωt = 0** (the natural turn-on instant of the corresponding diode).
6. **Semiconverter output can't be negative** — so it cannot feed power back to the AC side (no line-commutated inverter mode).

### 📝 Test — Power Electronics (8 Q)

1. **(MCQ)** For a 1-φ half-wave controlled rectifier with R load, the average output voltage is:
   (a) (Vm/π)(1+cos α)  (b) (Vm/2π)(1+cos α)  (c) (2Vm/π)cos α  (d) (Vm/π)cos α
2. **(MCQ)** A single-phase semiconverter with continuous current gives Vo(avg) =
   (a) (2Vm/π)cos α  (b) (Vm/π)(1+cos α)  (c) (Vm/2π)(1+cos α)  (d) (Vm/π)sin α
3. **(MCQ)** Which converter can operate in the inverting mode (Vo negative)?
   (a) half-wave  (b) semiconverter  (c) full-converter  (d) none
4. **(MCQ)** A freewheeling diode across an R-L load:
   (a) increases the negative voltage  (b) clamps output to ≥ 0 and raises average  (c) reduces the average  (d) has no effect
5. **(MCQ)** The extinction angle β in a half-wave R-L rectifier is:
   (a) always π  (b) always α  (c) greater than π  (d) zero
6. **(NAT)** A 1-φ half-wave controlled rectifier (R load) runs from 200 V rms, α = 90°. Find Vo(avg) in volts. ______ V
7. **(NAT)** A 1-φ semiconverter feeds a continuous-current load from 230 V rms at α = 60°. Find Vo(avg) in volts. ______ V
8. **(NAT)** A 1-φ half-wave R-load rectifier from 100 V rms is fired at α = 0°. Find Vo(avg) in volts. ______ V

<details>
<summary>🔑 Solutions</summary>

**1 → (b) (Vm/2π)(1+cos α).**

**2 → (b) (Vm/π)(1+cos α).**

**3 → (c) full-converter.** Only the fully-controlled converter allows Vo < 0 (inversion).

**4 → (b).** FWD clamps vo ≥ 0, raising the average.

**5 → (c) greater than π.** Inductance keeps current flowing past π to β.

**6 →**
```
Vm = √2 × 200 = 282.84 V
Vo = (Vm/2π)(1+cos 90°) = (282.84/6.28319)(1+0) = 45.02 V
```
**Vo ≈ 45.0 V.**

**7 →**
```
Vm = √2 × 230 = 325.27 V
Vo = (Vm/π)(1+cos 60°) = (325.27/3.14159)(1+0.5) = 103.54 × 1.5 = 155.3 V
```
**Vo ≈ 155.3 V.**

**8 →**
```
Vm = √2 × 100 = 141.42 V
Vo = (Vm/2π)(1+cos 0°) = (141.42/6.28319)(1+1) = 22.51 × 2 = 45.02 V
   = Vm/π = 141.42/3.14159 = 45.02 V ✓
```
**Vo ≈ 45.0 V.**

</details>

---

`✅ Day 11 complete — Induction energy meter (integrating, creep & phantom loading), DC generators & voltage build-up (critical resistance/speed), and half-wave/semiconverter controlled rectifiers. Tomorrow: DC potentiometers, DC motors (torque-speed & speed control), and single-phase full-converters.`

*Correctness over length — re-derive any result you're unsure of and mark "verify" before the exam.*
