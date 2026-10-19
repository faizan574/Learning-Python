# ⚡ GATE Technical Revision — Day 90 (2026-10-19)

*Moving-iron meters that square the current, the three-phase rotating field that spins every induction motor, and the performance metrics — ripple, TUF, pf and overlap — that grade a rectifier.*

📅 Tech Day 90 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics

---

## 🔧 Measuring Instruments: Moving-Iron (MI) Instruments

### 📖 Concept Deep Dive

**Moving-iron (MI)** instruments are the workhorse AC panel meters: cheap, rugged, and able to read **both AC and DC** directly. A coil carries the measured current and sets up a magnetic field; one or more soft-iron pieces move in that field, and the resulting deflection drives the pointer. There are two constructional types:

- **Attraction type:** a single soft-iron disc/plate is drawn into the coil's field. Deflection depends on the disc being pulled toward the region of stronger field.
- **Repulsion type (more common):** two soft-iron pieces (one fixed, one movable) sit inside the coil. The coil magnetises **both with the same polarity**, so they **repel**, deflecting the pointer. Because both pieces reverse together when current reverses, torque is **independent of current direction** — hence AC/DC capability.

**Torque from the energy principle.** The coil has inductance `L` that *changes* as the iron moves (angle θ). Energy stored is `½ L i²`. The deflecting torque is the rate of change of stored field energy with angle at constant current:

```
Td = ½ i² (dL/dθ)
```

At balance against a **spring control** (`Tc = K θ`):

```
θ = (½ i² / K)(dL/dθ)
```

So **θ ∝ i²** (to the extent `dL/dθ` is constant). Two consequences follow:
1. The instrument responds to the **mean of the square** of the current, so on AC it reads the **true RMS** value — independent of waveform (within design limits). This is its biggest strength.
2. The scale is **non-uniform (square-law)** — crowded at the low end, spread out at the high end. Shaping the iron vanes (so `dL/dθ` falls as θ rises) linearises the mid-scale region in practice.

**Damping** is by **air friction** (a light piston/vane in a chamber) — *not* eddy-current damping, because a permanent magnet near the soft iron would distort the working field. **Control** is spring (or gravity).

**Errors.** MI meters have more error sources than PMMC:
- **Hysteresis error:** soft iron retains some magnetism, so readings differ on rising vs falling current (reduced by using nickel-iron with a thin hysteresis loop).
- **Frequency/eddy errors:** coil inductance makes the reading frequency-dependent; series/shunt compensation (a capacitor across a swamping resistor) flattens the response.
- **Temperature error** and **stray-field error** (shielding needed, since the working field is weak).

**Range extension.** For an **ammeter**, the coil is wound with few turns of thick wire for the full-scale current; for AC, shunts are not simple resistors (inductance matters), so current range is usually extended with a **current transformer (CT)**. For a **voltmeter**, a series **multiplier resistance** (plus frequency compensation) is used; the AC voltage range is extended with a **potential transformer (PT)**.

| Feature | PMMC | Moving Iron (MI) |
|---|---|---|
| Supply | DC only | **AC and DC** |
| Reads on AC | — | **True RMS** |
| Scale | Uniform (θ ∝ I) | **Non-uniform (θ ∝ I²)** |
| Torque/direction | Reverses with current | **Independent of direction** |
| Damping | Eddy current | **Air friction** |
| Cost / power | Higher cost, low burden | Cheap, higher burden |

> 💎 **KEY RESULT** — MI deflection `θ = (i²/2K)(dL/dθ)` → **θ ∝ I²**, so MI meters read **true RMS** on any waveform, with a **square-law scale**.

> 🧠 **MEMORY HOOK** — "**MI = Mean of I-squared**": squares the current → RMS reading, cramped-then-spread scale, works on AC & DC.

### 📐 Formula Sheet

| Quantity | Expression |
|---|---|
| Deflecting torque | `Td = ½ i² (dL/dθ)` |
| Spring control | `Tc = K θ` |
| Steady deflection | `θ = (i²/2K)(dL/dθ)` |
| Reading on AC | `I_rms = √(mean of i²)` |
| Multiplier (voltmeter) | `Rs = Rm(m − 1)`, where `m = V/Vm` |
| Scale law | `θ ∝ I²` (square-law) |

### 🧮 Solved Examples

**Example 1 — Square-law scale spacing.**
An MI ammeter with a perfect square-law scale (`θ ∝ I²`) reads full scale (deflection 90°) at `I = 10 A`. What current gives a deflection of `22.5°`?

```
θ ∝ I²  ⇒  I = I_fs · √(θ/θ_fs)
I = 10 · √(22.5/90) = 10 · √0.25 = 10 · 0.5 = 5 A
```

So **5 A** gives one-quarter of full-scale deflection — illustrating the crowded low end (half current → quarter deflection).

**Example 2 — Inductance variation and torque.**
The coil inductance of an MI instrument varies with deflection as `L = (20 + 10θ − 2θ²) µH`, θ in radians. Find the deflecting torque when `I = 5 A` at `θ = 1 rad`.

```
dL/dθ = (10 − 4θ) µH/rad
At θ = 1:  dL/dθ = (10 − 4) = 6 µH/rad = 6×10⁻⁶ H/rad
Td = ½ I² (dL/dθ) = ½ (5²)(6×10⁻⁶)
   = ½ · 25 · 6×10⁻⁶ = 75×10⁻⁶ N·m = 75 µN·m
```

Deflecting torque **≈ 75 µN·m**.

### ⚠️ Common Traps

1. **"MI reads average"** — No. MI responds to **mean of square** → **RMS**, regardless of waveform. (PMMC reads average.)
2. **Using eddy-current damping** — MI uses **air-friction** damping; eddy damping would need a magnet that distorts the weak working field.
3. **Linear scale** — MI scale is **square-law (non-uniform)**, not uniform.
4. **Shunting an MI ammeter like a PMMC** — AC shunts must match the coil's inductance/frequency behaviour; practically use a **CT**, not a plain resistor.
5. **Ignoring hysteresis/frequency errors** — present in MI (absent in PMMC); need compensation.
6. **Direction of torque** — MI deflects the **same way** for either current direction (both irons reverse together).

### 📝 Test — Measuring Instruments (8 Q)

1. A moving-iron instrument's deflection is proportional to:
   (a) I (b) I² (c) √I (d) 1/I
2. On AC, an MI meter indicates the ______ value of current:
   (a) average (b) peak (c) RMS (d) form-factor
3. Damping in MI instruments is usually by:
   (a) eddy current (b) air friction (c) fluid friction (d) electromagnetic
4. The torque in an MI instrument is `Td =`:
   (a) `BANI` (b) `½ i²(dL/dθ)` (c) `K θ` (d) `i²R`
5. The repulsion-type MI works because the two iron pieces are magnetised:
   (a) oppositely and attract (b) with same polarity and repel (c) not at all (d) by a permanent magnet
6. **(NAT)** An MI ammeter with a true square-law scale reads full scale (full deflection) at 20 A. Find the current (A) at one-ninth of full-scale deflection.
7. **(NAT)** For an MI instrument `L = (30 + 8θ) µH` (θ in rad). Compute the deflecting torque (µN·m) at `I = 10 A` (note `dL/dθ` is constant).
8. **(NAT)** A 15 mA, 5 Ω MI movement is used as a 150 V voltmeter. Find the required series multiplier resistance (kΩ), ignoring frequency effects.

<details><summary>🔑 Solutions</summary>

**1 → (b).** From `θ = (i²/2K)(dL/dθ)`, θ ∝ I².

**2 → (c).** Mean of square → RMS.

**3 → (b).** Air-friction damping (a magnet would distort the working field).

**4 → (b).** `Td = ½ i²(dL/dθ)`.

**5 → (b).** Same polarity on both irons → they repel → deflection independent of current direction.

**6 (NAT).** θ ∝ I² ⇒ `I = I_fs·√(θ/θ_fs) = 20·√(1/9) = 20/3 ≈ 6.67 A`.

**7 (NAT).** `dL/dθ = 8 µH/rad`. `Td = ½·I²·(dL/dθ) = ½·100·8×10⁻⁶ = 400×10⁻⁶ N·m = 400 µN·m`.

**8 (NAT).** Full-scale current `Im = 15 mA = 0.015 A`. Total resistance needed `= V/Im = 150/0.015 = 10,000 Ω`. Multiplier `Rs = 10,000 − 5 = 9,995 Ω ≈ 9.995 kΩ ≈ 10 kΩ`.

</details>

---

## 🔧 Electrical Machines: Three-Phase Induction Motor I — Rotating Field, Slip & Torque

### 📖 Concept Deep Dive

The three-phase induction motor is the most widely used industrial motor — simple, rugged, self-starting. Its operation rests on a **rotating magnetic field** produced by balanced three-phase currents in a symmetric stator winding.

**Rotating magnetic field.** Three stator windings, spaced **120° electrical** apart, carry currents `120°` out of time-phase. Each winding produces a pulsating MMF; their vector sum is a **constant-magnitude field of (3/2)·Fm that rotates** at the **synchronous speed**:

```
Ns = 120 f / P   (rpm)
ωs = 4πf / P     (mechanical rad/s)
```

where `f` = supply frequency, `P` = number of poles. The field rotates at `Ns`; the rotor tries to chase it.

**Slip.** The rotor never quite reaches `Ns` (at `Ns` there would be no relative motion, no induced EMF, no torque). The fractional lag is the **slip**:

```
s = (Ns − N) / Ns     (N = rotor speed)
N = Ns(1 − s)
```

At standstill `s = 1`; at no-load `s` is small (≈ 0.01–0.05). Key frequency relations in the rotor:

```
Rotor EMF frequency:  fr = s·f
Rotor induced EMF:    E2s = s·E2   (E2 = standstill rotor EMF per phase)
Rotor reactance:      X2s = s·X2   (X2 = standstill reactance)
```

**Torque equation.** The rotor current per phase and the torque are:

```
I2 = s·E2 / √(R2² + (sX2)²)
T = (k · s·E2² · R2) / (R2² + (sX2)²)
```

with `k = 3/ωs` (per-phase constant). Starting torque (`s = 1`):

```
Tst = (k · E2² · R2) / (R2² + X2²)
```

**Maximum torque (pull-out).** Differentiating `T` w.r.t. `s` and setting to zero gives the slip at maximum torque and the torque value:

```
s_maxT = R2 / X2
Tmax = k · E2² / (2 X2)   — independent of R2
```

So **R2 sets the slip at which Tmax occurs, but not its magnitude.** Adding external rotor resistance (wound-rotor motor) shifts the peak toward `s = 1`, improving **starting torque** — the basis of rotor-resistance starting. Because `s_maxT = R2/X2`, if rotor resistance is made equal to standstill reactance (`R2 = X2`), maximum torque occurs at starting.

**Power flow.** With `Pag` the air-gap (rotor-input) power:

```
Rotor copper loss  Pcu2 = s · Pag
Mechanical power   Pm   = (1 − s) · Pag
⇒  Pag : Pcu2 : Pm = 1 : s : (1 − s)
```

This ratio is a gold-mine for GATE numericals: efficiency of the rotor cannot exceed `(1 − s)`, so running at high slip is lossy.

| Quantity | At standstill (s=1) | Running (slip s) |
|---|---|---|
| Rotor EMF | `E2` | `s·E2` |
| Rotor frequency | `f` | `s·f` |
| Rotor reactance | `X2` | `s·X2` |
| Rotor cu-loss share | — | `s·Pag` |

> 💎 **KEY RESULT** — `s_maxT = R2/X2` and `Tmax = kE2²/(2X2)` (independent of R2); `Pag : Pcu2 : Pm = 1 : s : (1−s)`.

> 🧠 **MEMORY HOOK** — "**One-ess-one-minus-ess**": air-gap power splits as `1 : s : (1−s)` into input : rotor-loss : mechanical.

### 📐 Formula Sheet

| Quantity | Expression |
|---|---|
| Synchronous speed | `Ns = 120f/P` rpm, `ωs = 4πf/P` |
| Slip | `s = (Ns − N)/Ns` |
| Rotor EMF / freq / Xr | `sE2`, `sf`, `sX2` |
| Rotor current | `I2 = sE2/√(R2² + (sX2)²)` |
| Torque | `T = k·sE2²R2/(R2² + (sX2)²)`, `k = 3/ωs` |
| Slip at Tmax | `s_maxT = R2/X2` |
| Maximum torque | `Tmax = kE2²/(2X2)` |
| Power split | `Pag : Pcu2 : Pm = 1 : s : (1−s)` |

### 🧮 Solved Examples

**Example 1 — Speed, slip, rotor frequency.**
A 4-pole, 50 Hz, 3-phase induction motor runs at 1440 rpm. Find (a) synchronous speed, (b) slip, (c) rotor frequency.

```
(a) Ns = 120f/P = 120·50/4 = 1500 rpm
(b) s  = (Ns − N)/Ns = (1500 − 1440)/1500 = 60/1500 = 0.04 (4%)
(c) fr = s·f = 0.04·50 = 2 Hz
```

**Example 2 — Power split.**
A 3-phase induction motor has air-gap power 30 kW and runs at slip 0.03. Find rotor copper loss and gross mechanical power.

```
Pcu2 = s·Pag = 0.03·30 = 0.9 kW
Pm   = (1 − s)·Pag = 0.97·30 = 29.1 kW
```

Rotor copper loss **0.9 kW**; mechanical (gross) power **29.1 kW**.

### ⚠️ Common Traps

1. **Rotor frequency = supply frequency** — No: `fr = s·f`. Only at standstill (`s=1`) is `fr = f`.
2. **Tmax depends on R2** — Magnitude of `Tmax` is **independent of R2**; R2 only sets the **slip** at which it occurs.
3. **Confusing `ωs` (mechanical) and electrical ω** — `ωs = 4πf/P` mechanical rad/s = `2π·Ns/60`.
4. **Mechanical power = air-gap power** — `Pm = (1−s)Pag`, not `Pag`; the difference is rotor copper loss `sPag`.
5. **Slip in rpm vs per-unit** — slip is a ratio; convert speeds consistently.
6. **Rotor cu-loss formula** — it's `sPag`, not `s²Pag`.

### 📝 Test — Electrical Machines (8 Q)

1. The synchronous speed of a 6-pole, 50 Hz machine is:
   (a) 1000 rpm (b) 1500 rpm (c) 3000 rpm (d) 750 rpm
2. At the instant of starting, the slip of an induction motor is:
   (a) 0 (b) 1 (c) ∞ (d) 0.05
3. The slip at which maximum torque occurs is:
   (a) `R2/X2` (b) `X2/R2` (c) `R2·X2` (d) 1
4. Maximum torque of a 3-φ induction motor is:
   (a) proportional to R2 (b) independent of R2 (c) proportional to X2 (d) zero
5. Rotor copper loss in terms of air-gap power is:
   (a) `(1−s)Pag` (b) `sPag` (c) `s²Pag` (d) `Pag`
6. **(NAT)** A 4-pole, 50 Hz induction motor runs at 1455 rpm. Find the slip (%).
7. **(NAT)** A 3-φ, 8-pole, 50 Hz motor has rotor frequency 1.5 Hz. Find the rotor speed (rpm).
8. **(NAT)** An induction motor delivers 22 kW gross mechanical power at slip 0.04. Find the rotor copper loss (kW).

<details><summary>🔑 Solutions</summary>

**1 → (a).** `Ns = 120·50/6 = 1000 rpm`.

**2 → (b).** At start N = 0 ⇒ `s = 1`.

**3 → (a).** `s_maxT = R2/X2`.

**4 → (b).** `Tmax = kE2²/(2X2)` — independent of R2.

**5 → (b).** `Pcu2 = sPag`.

**6 (NAT).** `Ns = 120·50/4 = 1500`. `s = (1500−1455)/1500 = 45/1500 = 0.03 = 3%`.

**7 (NAT).** `s = fr/f = 1.5/50 = 0.03`. `Ns = 120·50/8 = 750 rpm`. `N = Ns(1−s) = 750·0.97 = 727.5 rpm`.

**8 (NAT).** `Pm = (1−s)Pag ⇒ Pag = Pm/(1−s) = 22/0.96 = 22.917 kW`. `Pcu2 = sPag = 0.04·22.917 ≈ 0.917 kW`. (Equivalently `Pcu2 = Pm·s/(1−s) = 22·0.04/0.96 ≈ 0.917 kW`.)

</details>

---

## 🔧 Power Electronics: Rectifier Performance — Ripple, TUF, Input PF & Source Inductance

### 📖 Concept Deep Dive

Beyond "what is the average output," GATE tests how **good** a rectifier is. The performance metrics quantify DC quality, transformer utilisation, and the burden placed on the AC supply.

**Ripple factor (RF).** The AC-content of the output relative to its DC value:

```
RF = (ripple RMS) / Vdc = √(Vrms² − Vdc²)/Vdc = √(FF² − 1)
```

where the **form factor** `FF = Vrms/Vdc`. Lower RF = smoother DC. (1-φ half-wave: FF = π/2 ≈ 1.57 ⇒ RF ≈ 1.21; 1-φ full-wave: FF = π/(2√2) ≈ 1.11 ⇒ RF ≈ 0.48.)

**Rectification efficiency** `η = Pdc/Pac = Vdc²/Vrms² = 1/FF²` (resistive load).

**Transformer Utilisation Factor (TUF).** How well the transformer's VA rating is used:

```
TUF = Pdc / (VA rating of transformer) = Vdc·Idc / (Vsec,rms · Isec,rms)
```

Higher is better. Half-wave suffers low TUF (≈ 0.287) and DC magnetisation of the core; a bridge uses the secondary in both half-cycles → much higher TUF (≈ 0.812 for 1-φ bridge).

**Input power factor.** For a phase-controlled converter feeding a highly inductive (constant-current) load, the input current is a quasi-square wave. Two components matter:
- **Displacement factor** `= cos(α)` (fundamental current lags by the firing angle α for a full converter).
- **Distortion factor** `= I1/Is` (fundamental RMS / total RMS), which for a 1-φ full converter with level DC current is `(2√2/π) ≈ 0.9`.

```
Input pf = (distortion factor)·(displacement factor) = (I1/Is)·cos α
1-φ full converter (ripple-free Id):  pf = (2√2/π)·cos α ≈ 0.9 cos α
```

So firing-angle control lowers pf (more reactive burden) and injects harmonics. The input current harmonic spectrum (square-wave) contains the fundamental plus odd harmonics; **harmonic factor / THD** measures the distortion.

**Effect of source inductance (overlap / commutation).** Real supplies have series inductance `Ls`. Current cannot switch instantaneously between devices, so two devices conduct together for an **overlap (commutation) angle µ**. This **reduces the average output voltage** by a drop proportional to load current and `Ls`:

```
1-φ full converter:   Vdc = (2Vm/π)cos α − (2ωLs/π)Io
3-φ full converter:   Vdc = (3Vml/π)cos α − (3ωLs/π)Io
```

The drop term `(ωLs/π)·(number of commutations per cycle)·Io` behaves like an equivalent "commutation resistance" (though it dissipates no real power — it's a reactive effect). Overlap also softens `di/dt`, which is mildly beneficial for the devices but degrades regulation and pf.

| Metric | Meaning | Good value |
|---|---|---|
| Ripple factor | AC content / DC | low |
| Form factor FF | Vrms/Vdc | near 1 |
| TUF | Pdc / transformer VA | high |
| Input pf | (I1/Is)·cos α | near 1 |
| Overlap µ | co-conduction due to Ls | small |

> 💎 **KEY RESULT** — `RF = √(FF² − 1)`; 1-φ full converter input `pf ≈ (2√2/π)cos α`; source-inductance drop (1-φ) `= (2ωLs/π)Io`, reducing Vdc.

> 🧠 **MEMORY HOOK** — "**Ripple from form, pf from firing, droop from Ls**": RF uses FF; pf scales with cos α; `Ls` cuts the average output.

### 📐 Formula Sheet

| Quantity | Expression |
|---|---|
| Form factor | `FF = Vrms/Vdc` |
| Ripple factor | `RF = √(FF² − 1)` |
| Rectifier efficiency | `η = Vdc²/Vrms² = 1/FF²` |
| TUF | `Pdc/(Vrms,sec·Irms,sec)` |
| Input pf (1-φ full conv., level Id) | `(2√2/π)cos α ≈ 0.9 cos α` |
| Source-inductance drop (1-φ) | `ΔVd = (2ωLs/π)Io` |
| Source-inductance drop (3-φ full) | `ΔVd = (3ωLs/π)Io` |
| Overlap relation (1-φ) | `cos α − cos(α+µ) = 2ωLs·Io/(2Vm)` |

### 🧮 Solved Examples

**Example 1 — Ripple factor from form factor.**
A single-phase full-wave rectifier (R load) has `Vdc = 0.637 Vm` and `Vrms = 0.707 Vm`. Find the form factor and ripple factor.

```
FF = Vrms/Vdc = 0.707/0.637 = 1.11
RF = √(FF² − 1) = √(1.11² − 1) = √(1.2321 − 1) = √0.2321 = 0.482
```

Ripple factor **≈ 0.48** (48%), the standard full-wave value.

**Example 2 — Source-inductance drop.**
A 1-φ full converter is fed from 230 V, 50 Hz with source inductance `Ls = 2 mH`, firing angle `α = 30°`, constant load current `Io = 10 A`. Find the average output voltage.

```
Vm = √2·230 = 325.3 V
No-load term: (2Vm/π)cos α = (2·325.3/π)·cos30° = (207.1)·(0.866) = 179.3 V
ω = 2π·50 = 314.16 rad/s
Drop: (2ωLs/π)Io = (2·314.16·0.002/π)·10 = (1.2566/π)·10 = 0.4·10 = 4.0 V
Vdc = 179.3 − 4.0 = 175.3 V
```

Average output **≈ 175.3 V** (source inductance costs ≈ 4 V).

### ⚠️ Common Traps

1. **`RF = √(FF² − 1)`, not `FF − 1`** — it's the quadrature subtraction of RMS and DC.
2. **pf = cos α only** — that's just the **displacement** factor; true input pf also needs the **distortion** factor `(2√2/π)` for a 1-φ full converter.
3. **Source inductance dissipates power** — the Vdc drop is a **reactive/commutation** effect; `Ls` ideally stores/returns energy (no average real-power loss in `Ls` itself).
4. **TUF of half-wave ≈ bridge** — No; half-wave TUF (≈ 0.287) is far worse and the core sees DC magnetisation.
5. **Overlap raises output** — overlap **reduces** average output voltage and worsens regulation.
6. **Form factor < 1** — impossible; FF ≥ 1 always (Vrms ≥ Vdc).

### 📝 Test — Power Electronics (8 Q)

1. The ripple factor in terms of form factor FF is:
   (a) `FF − 1` (b) `√(FF² − 1)` (c) `FF² − 1` (d) `1 − 1/FF`
2. Rectification efficiency of a rectifier equals:
   (a) `FF²` (b) `1/FF²` (c) `FF` (d) `1 − FF`
3. For a 1-φ full converter with ripple-free DC current, the input power factor is approximately:
   (a) `cos α` (b) `0.9 cos α` (c) `0.637 cos α` (d) `cos²α`
4. The effect of source inductance on a converter's average output voltage is to:
   (a) increase it (b) decrease it (c) leave it unchanged (d) make it zero
5. A low TUF and DC core magnetisation are characteristic of the:
   (a) 1-φ bridge (b) 1-φ half-wave (c) 3-φ bridge (d) semiconverter
6. **(NAT)** A rectifier output has `Vrms = 1.11 Vdc`. Find its ripple factor (to 2 decimals).
7. **(NAT)** A 1-φ full converter (constant Id) fires at `α = 0°`. Find the input displacement power factor.
8. **(NAT)** A 1-φ full converter: 200 V peak secondary, `Ls = 1.5 mH`, 50 Hz, `α = 0°`, `Io = 20 A`. Find the average output voltage (V).

<details><summary>🔑 Solutions</summary>

**1 → (b).** `RF = √(FF² − 1)`.

**2 → (b).** `η = Vdc²/Vrms² = 1/FF²`.

**3 → (b).** `(2√2/π)cos α ≈ 0.9 cos α`.

**4 → (b).** Overlap/commutation drop reduces Vdc.

**5 → (b).** Half-wave: low TUF (≈0.287), DC magnetisation.

**6 (NAT).** `RF = √(1.11² − 1) = √(1.2321 − 1) = √0.2321 ≈ 0.48`.

**7 (NAT).** Displacement factor `= cos α = cos 0° = 1.0`. (Overall pf would be `0.9×1 = 0.9` due to distortion.)

**8 (NAT).**
```
No-load: (2Vm/π)cos α = (2·200/π)·1 = 400/π = 127.32 V
ω = 2π·50 = 314.16 rad/s
Drop: (2ωLs/π)Io = (2·314.16·0.0015/π)·20 = (0.9425/π)·20 = 0.3·20 = 6.0 V
Vdc = 127.32 − 6.0 = 121.32 V
```
Average output **≈ 121.3 V**.

</details>

---

## 📊 Tech Progress

```
Measurements      [██████░░░░░░░░░░░░░░]  Round 5 · topic  6/20 (Moving-Iron instruments)
Electrical Mach.  [██████████░░░░░░░░░]  Round 5 · topic 10/19 (Induction motor I)
Power Electronics [██████████░░░░░░░░░]  Round 5 · topic 10/19 (Rectifier performance)
```

> 🎯 **Day 90 one-liners:** (1) **MI: θ ∝ I² → true-RMS, square-law scale, air-friction damping.** (2) **IM: Ns = 120f/P, s = (Ns−N)/Ns, s_maxT = R2/X2, Pag:Pcu2:Pm = 1:s:(1−s).** (3) **Rectifier: RF = √(FF²−1), pf ≈ 0.9 cos α, source-L drop = (2ωLs/π)Io.**

*Correctness over length — derive, don't memorise blindly; verify any "verify" figure. Onward. ⚡*
