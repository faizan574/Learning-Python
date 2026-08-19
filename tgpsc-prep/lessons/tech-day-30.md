# ⚡ GATE Technical Revision — Day 30 (2026-08-19)

*Three subjects, one sitting — the wattmeter, the DC generator, and phase-controlled rectifiers. Day 30 milestone.*

📅 Tech Day 30 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics · 🏁 Day 30

> 🧠 **MEMORY HOOK** — Day 30's trio is **"measure power, build voltage, control the DC"**: the dynamometer **wattmeter** and its errors, the self-excited DC **generator's voltage build-up**, and the **firing-angle control** of single-phase rectifiers.

---

## 🔧 Measuring Instruments: Measurement of Power I — Dynamometer Wattmeter

### 📖 Concept Deep Dive

A **dynamometer wattmeter** uses **fixed current coils (CC)** in series with the load and a **moving pressure coil (PC)** (with a large series resistance) across the supply. The deflecting torque is proportional to the **product of the two coil currents**, giving average power:

```
Deflection ∝ V · I · cosφ = active power P
```

**Connection error.** The PC can be connected two ways, and each includes an extra loss:

| PC connection | Wattmeter reads | Best for |
|---|---|---|
| PC **across the load** (after CC) | `P_load + I²·R_cc` (current-coil loss) | **Large load current** small |
| PC **across the supply** (before CC) | `P_load + V²/R_pc` (pressure-coil loss) | **Small load current** |

**Pressure-coil inductance error.** The PC is not purely resistive; its current `Ip` lags the voltage by a small angle `β = tan⁻¹(ωLp/Rp)`. For a **lagging** load the wattmeter then reads **high**:

```
Indicated / True = cosβ · cos(φ − β) / cosφ
⇒ True power = Indicated × cosφ / (cosβ · cos(φ − β))
```

> 💎 **KEY RESULT** — Pressure-coil inductance makes the wattmeter read **high on lagging** loads (and low on leading). The fix is a **compensating capacitor** across part of the PC series resistance, chosen so `C ≈ Lp/Rp²`, cancelling the inductive lag.

**Low-power-factor (LPF) wattmeter.** At low pf an ordinary wattmeter gives a tiny deflection with large relative error. An **LPF wattmeter** modifies the design:
1. **Low PC resistance** (higher pressure-coil current) for adequate torque.
2. A **compensating winding** to cancel the error from the pressure-coil current flowing in the current coil.
3. **Inductance compensation** for the pressure coil.
4. **Small control (spring) torque** for a larger, readable deflection.

> ⚠️ **TRAP ALERT** — Choose the PC connection by which loss is smaller: **PC across supply** when the **load current is small** (CC loss would dominate); **PC across load** when the **load voltage/PC current is small**. And remember the inductance error direction: **reads high for lagging pf**.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Ideal reading | `P = V·I·cosφ` |
| PC inductance angle | `β = tan⁻¹(ω·Lp/Rp)` |
| Correction factor | `CF = cosφ / (cosβ · cos(φ − β))` |
| True power | `= Indicated × CF` |
| Compensating capacitor | `C ≈ Lp / Rp²` |
| Connection error (PC across load) | `= I²·R_cc` |

### 🧮 Solved Examples

**Example 1 — Inductance-error correction.** A wattmeter's PC has an impedance angle `β = 1°`. The load pf is `0.5 lagging` (`φ = 60°`) and the wattmeter reads `220 W`. Find the true power.

```
CF = cosφ / (cosβ · cos(φ − β)) = cos60° / (cos1° · cos59°)
   = 0.5 / (0.99985 × 0.5150) = 0.5 / 0.51492 = 0.9710
True power = 220 × 0.9710 = 213.6 W
```
(The wattmeter over-read by ~6 W because of PC inductance on a lagging load.)

**Example 2 — Connection error.** A wattmeter with PC connected **across the load** measures a `100 W` load. Current-coil resistance `R_cc = 0.5 Ω`, load current `I = 5 A`. Find the reading.

```
Error = I²·R_cc = 5² × 0.5 = 12.5 W
Reading = 100 + 12.5 = 112.5 W
```

### ⚠️ Common Traps

1. Forgetting the wattmeter includes a **coil loss** depending on PC connection.
2. Getting the **inductance-error direction** wrong — reads **high** for lagging pf.
3. Using an **ordinary** wattmeter for low-pf loads (needs an **LPF** wattmeter).
4. Sizing the compensating capacitor wrongly — `C ≈ Lp/Rp²`.
5. Assuming the PC is purely resistive.
6. Mixing up which connection suits small load current (PC across **supply**).

### 📝 Test — Measuring Instruments (8 Q)

**Q1 (MCQ).** A dynamometer wattmeter's deflection is proportional to:
(a) V² (b) I² (c) VI cosφ (d) VI sinφ

**Q2 (MCQ).** Pressure-coil inductance causes a wattmeter on a lagging load to read:
(a) low (b) high (c) correct (d) zero

**Q3 (MCQ).** For a small load current, the pressure coil is best connected:
(a) across the load (b) across the supply (c) in series with load (d) either way

**Q4 (MCQ).** An LPF wattmeter differs from an ordinary one by having:
(a) higher PC resistance (b) compensation & low control torque (c) no springs (d) iron core

**Q5 (MCQ).** The compensating capacitor for PC inductance is about:
(a) Rp/Lp (b) Lp/Rp² (c) Lp·Rp (d) 1/Lp

**Q6 (NAT).** A wattmeter (PC across load) reads a 200 W load; current-coil resistance 0.4 Ω, load current 10 A. Find the reading (W).

**Q7 (NAT).** A wattmeter with β = 2° measures a load of pf 0.6 lagging (φ = 53.13°), indicating 300 W. Find the true power (W).

**Q8 (NAT).** A pressure coil has Rp = 2000 Ω and Lp = 8 mH. Find the compensating capacitance (µF).

<details><summary>🔑 Solutions</summary>

**Q1 — (c) VI cosφ.**

**Q2 — (b) high.**

**Q3 — (b) across the supply.**

**Q4 — (b) compensation & low control torque.**

**Q5 — (b) Lp/Rp².**

**Q6.** Error = `10² × 0.4 = 40 W`; reading = `200 + 40 = 240 W`.

**Q7.** `CF = cos53.13°/(cos2°·cos51.13°) = 0.6/(0.99939×0.6280) = 0.6/0.62762 = 0.9560`; True = `300 × 0.9560 = 286.8 W`.

**Q8.** `C ≈ Lp/Rp² = 8×10⁻³/(2000)² = 8×10⁻³/4×10⁶ = 2×10⁻⁹ F = 0.002 µF`.

</details>

---

## 🔧 Electrical Machines: DC Generators — Types, Characteristics & Voltage Build-Up

### 📖 Concept Deep Dive

DC generators are classified by **how the field is excited**:

| Type | Field connection | Key relations |
|---|---|---|
| **Separately excited** | Field from external DC source | `E = V + Ia·Ra` |
| **Shunt** | Field **parallel** with armature | `Ish = V/Rsh` , `Ia = IL + Ish` , `E = V + Ia·Ra` |
| **Series** | Field **in series** (few thick turns) | `Ia = Ise = IL` , `E = V + Ia(Ra + Rse)` |
| **Compound** | Both shunt + series (cumulative/differential; long/short shunt) | combination |

**Voltage build-up in a self-excited shunt generator.** Starting from **residual magnetism**, a small EMF drives a small field current, which increases the flux, which raises the EMF — a **regenerative** process that settles where the **open-circuit characteristic (OCC)** intersects the **field-resistance line**.

**Conditions for build-up:**
1. **Residual magnetism** must be present.
2. Field must be connected so its flux **aids** the residual flux (correct polarity).
3. Field-circuit resistance **< critical resistance**.
4. Speed **> critical speed**.

> 💎 **KEY RESULT** — The **critical field resistance** is the **slope of the tangent to the OCC at the origin** (its initial straight-line part). If the shunt field resistance **exceeds** this, the machine **fails to build up** voltage. The **critical speed** is the speed at which the given field resistance becomes the critical resistance.

**Characteristics:**

| Characteristic | Meaning |
|---|---|
| **OCC (magnetisation)** | `E` vs `If` at constant speed (no load) |
| **Internal** | `E` vs armature current `Ia` |
| **External** | terminal `V` vs load current `IL` |

- **Shunt** external characteristic **droops** slightly with load (`Ia·Ra` drop + armature reaction + reduced field current).
- **Series** characteristic **rises** with load (used as a booster).
- **Cumulative compound** can be **over-, flat-, or under-compounded**.

> 🧠 **MEMORY HOOK** — "**Residual, polarity, resistance, speed**" — the four conditions for a shunt generator to build up. Critical resistance = **tangent slope of OCC at origin**.

> ⚠️ **TRAP ALERT** — A shunt generator that "won't build up" usually has **reversed field connection**, **lost residual magnetism**, `Rf > Rc`, or **low speed**. Series generators can't self-excite on **open circuit** (no load current ⇒ no field).

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Shunt field current | `Ish = V/Rsh` |
| Shunt armature current | `Ia = IL + Ish` |
| Generated EMF (shunt) | `E = V + Ia·Ra` |
| Series | `E = V + Ia·(Ra + Rse)` , `Ia = IL` |
| EMF equation | `E = P·φ·Z·N/(60·A)` |
| Critical resistance | slope of OCC tangent at origin |

### 🧮 Solved Examples

**Example 1 — Shunt generator terminal voltage.** A shunt generator has induced EMF `250 V`, `Ra = 0.2 Ω`, `Rsh = 125 Ω`, delivering a load current `IL = 40 A`. Find the terminal voltage.

```
E = V + Ia·Ra ,  Ia = IL + Ish ,  Ish = V/125
250 = V + (40 + V/125)(0.2)
250 = V + 8 + 0.0016·V
250 − 8 = 1.0016·V ⇒ 242 = 1.0016·V
V = 241.6 V   (Ish ≈ 1.93 A, Ia ≈ 41.93 A)
```

**Example 2 — Critical resistance.** A shunt generator's OCC at `1000 rpm` is linear near the origin, giving `E = 100 V` at `If = 1 A`. Will it build up with a field resistance of `80 Ω`? What is the critical resistance?

```
Critical resistance Rc = slope of OCC at origin = 100 V / 1 A = 100 Ω
Since Rf = 80 Ω < Rc = 100 Ω ⇒ the generator WILL build up.
```

### ⚠️ Common Traps

1. Forgetting `Ia = IL + Ish` for a shunt generator (not `Ia = IL`).
2. Thinking a **series** generator self-excites on **open circuit** — it cannot.
3. Treating critical resistance as a fixed number — it's the **OCC tangent slope**.
4. Ignoring **residual magnetism / polarity** as build-up requirements.
5. Assuming the shunt external characteristic is flat — it **droops**.
6. Mixing up **critical resistance** with **critical speed**.

### 📝 Test — Electrical Machines (8 Q)

**Q1 (MCQ).** For a DC shunt generator, the armature current is:
(a) IL (b) IL + Ish (c) IL − Ish (d) Ish

**Q2 (MCQ).** Critical field resistance is the:
(a) armature resistance (b) slope of OCC tangent at origin (c) load resistance (d) field resistance at full load

**Q3 (MCQ).** A self-excited shunt generator fails to build up. A likely cause is:
(a) too much residual magnetism (b) reversed field connection (c) high speed (d) low field resistance

**Q4 (MCQ).** The external characteristic of a shunt generator is:
(a) rising (b) drooping (c) flat always (d) vertical

**Q5 (MCQ).** A series generator cannot build up voltage on:
(a) full load (b) open circuit (c) half load (d) short circuit

**Q6 (NAT).** A shunt generator: E = 220 V, Ra = 0.1 Ω, Rsh = 110 Ω, IL = 50 A. Find the terminal voltage (V) (approximate).

**Q7 (NAT).** A separately excited generator has E = 200 V, Ra = 0.5 Ω, delivering 20 A. Find the terminal voltage (V).

**Q8 (NAT).** An OCC gives E = 120 V at If = 1.2 A on the linear part. Find the critical field resistance (Ω).

<details><summary>🔑 Solutions</summary>

**Q1 — (b) IL + Ish.**

**Q2 — (b) slope of OCC tangent at origin.**

**Q3 — (b) reversed field connection.**

**Q4 — (b) drooping.**

**Q5 — (b) open circuit.**

**Q6.** `220 = V + (50 + V/110)(0.1) = V + 5 + 0.000909V` ⇒ `215 = 1.000909V` ⇒ `V ≈ 214.8 V`.

**Q7.** `V = E − Ia·Ra = 200 − 20×0.5 = 200 − 10 = 190 V`.

**Q8.** `Rc = 120/1.2 = 100 Ω`.

</details>

---

## 🔧 Power Electronics: Single-Phase Half-Wave & Half-Controlled Rectifiers

### 📖 Concept Deep Dive

**Half-wave controlled rectifier (SCR), R load.** The SCR is fired at angle `α` each positive half-cycle and conducts from `α` to `π`. With `Vm` the peak supply voltage:

```
Average output:  Vdc = (Vm / 2π)·(1 + cosα)
RMS output:      Vrms = (Vm/2)·√[ (1/π)·(π − α + (sin2α)/2) ]
```

At `α = 0` this reduces to the diode half-wave value `Vdc = Vm/π`. Increasing `α` from `0` to `π` reduces `Vdc` from `Vm/π` to `0`.

**RL load (no freewheeling diode):** the inductor keeps the SCR conducting **beyond `π`** until the current falls to zero at the **extinction angle `β`**; the output then contains a **negative portion**, lowering `Vdc`. Adding a **freewheeling diode (FD)** across the load clamps the output to zero during the negative interval, improving `Vdc` and the load-current waveform.

**RLE load (back-emf `E`):** the SCR conducts only while `vs > E` (from the point the instantaneous supply exceeds `E`), used in battery charging and DC-motor drives.

**Single-phase semiconverter (half-controlled full-wave):** built from **two SCRs and two diodes**. It has **inherent freewheeling** action (the output cannot go negative), so it operates in **one quadrant** only:

```
Semiconverter:  Vdc = (Vm / π)·(1 + cosα)     [range 2Vm/π → 0]
Full converter: Vdc = (2Vm / π)·cosα          [two-quadrant, for comparison]
```

> 💎 **KEY RESULT** — Half-wave controlled (R): `Vdc = (Vm/2π)(1 + cosα)`. Single-phase **semiconverter**: `Vdc = (Vm/π)(1 + cosα)` — output stays **≥ 0** (one quadrant) because of freewheeling, unlike the **full converter** `(2Vm/π)cosα` which can go negative (two quadrant).

> 🧠 **MEMORY HOOK** — "**Semiconverter can't go negative**": its `(1 + cosα)` form is always ≥ 0, so it works in a single quadrant; the full converter's `cosα` can be negative (inversion). FD/semiconverter both **freewheel**.

> ⚠️ **TRAP ALERT** — For an **RL load without a freewheeling diode**, the SCR conducts past `π` (to `β`), so `Vdc` is **less** than the R-load value. Adding the **FD** raises `Vdc` and makes the current continuous. Don't apply the pure-R formula to an uncompensated RL load.

### 📐 Formula Sheet

| Circuit | Average output Vdc |
|---|---|
| Half-wave diode (R) | `Vm/π` |
| Half-wave controlled (R) | `(Vm/2π)·(1 + cosα)` |
| 1-φ Semiconverter | `(Vm/π)·(1 + cosα)` |
| 1-φ Full converter | `(2Vm/π)·cosα` |
| Half-wave (R) RMS | `(Vm/2)·√[(1/π)(π − α + sin2α/2)]` |

### 🧮 Solved Examples

**Example 1 — Half-wave controlled, R load.** Supply `230 V` RMS (`Vm ≈ 325 V`), firing angle `α = 60°`. Find the average output voltage.

```
Vdc = (Vm/2π)·(1 + cosα) = (325 / 6.2832)·(1 + cos60°)
    = 51.73 × (1 + 0.5) = 51.73 × 1.5 = 77.6 V
```

**Example 2 — Single-phase semiconverter.** Same supply (`Vm ≈ 325 V`), `α = 90°`. Find `Vdc`.

```
Vdc = (Vm/π)·(1 + cosα) = (325 / 3.1416)·(1 + cos90°)
    = 103.45 × (1 + 0) = 103.45 V
```
(For comparison, a full converter at α = 90° would give `(2Vm/π)cos90° = 0 V`.)

### ⚠️ Common Traps

1. Using `(2Vm/π)cosα` (full converter) for a **semiconverter** — it's `(Vm/π)(1+cosα)`.
2. Forgetting the half-wave controlled factor is `(Vm/2π)`, not `(Vm/π)`.
3. Applying the R-load formula to an **uncompensated RL** load (conducts past π).
4. Believing a semiconverter can **invert** — it is **one-quadrant** (Vdc ≥ 0).
5. Ignoring the **freewheeling diode's** role in raising Vdc for RL loads.
6. Mixing up peak `Vm` with RMS `Vs` (`Vm = √2·Vs`).

### 📝 Test — Power Electronics (8 Q)

**Q1 (MCQ).** For a single-phase half-wave controlled rectifier (R load), Vdc equals:
(a) (Vm/π)(1+cosα) (b) (Vm/2π)(1+cosα) (c) (2Vm/π)cosα (d) Vm/π

**Q2 (MCQ).** A single-phase semiconverter operates in:
(a) one quadrant (b) two quadrants (c) four quadrants (d) three quadrants

**Q3 (MCQ).** Adding a freewheeling diode to a half-wave RL circuit:
(a) lowers Vdc (b) raises Vdc & smooths current (c) has no effect (d) reverses polarity

**Q4 (MCQ).** At α = 0, the half-wave controlled (R) output equals:
(a) Vm/2π (b) Vm/π (c) 2Vm/π (d) Vm

**Q5 (MCQ).** The full converter output that can go negative is:
(a) (Vm/π)(1+cosα) (b) (2Vm/π)cosα (c) Vm/π (d) (Vm/2π)(1+cosα)

**Q6 (NAT).** A half-wave controlled rectifier, Vm = 300 V, α = 90°, R load. Find Vdc (V).

**Q7 (NAT).** A single-phase semiconverter, Vm = 340 V, α = 60°. Find Vdc (V).

**Q8 (NAT).** A single-phase full converter, Vm = 325 V, α = 45°. Find Vdc (V).

<details><summary>🔑 Solutions</summary>

**Q1 — (b) (Vm/2π)(1+cosα).**

**Q2 — (a) one quadrant.**

**Q3 — (b) raises Vdc & smooths current.**

**Q4 — (b) Vm/π.**

**Q5 — (b) (2Vm/π)cosα.**

**Q6.** `Vdc = (300/2π)(1+cos90°) = 47.75 × (1+0) = 47.75 V`.

**Q7.** `Vdc = (340/π)(1+cos60°) = 108.23 × 1.5 = 162.3 V`.

**Q8.** `Vdc = (2×325/π)cos45° = 206.9 × 0.7071 = 146.3 V`.

</details>

---

> 🧠 **DAY-30 WRAP** — Wattmeter: `∝ VI cosφ`, **reads high on lagging** (PC inductance), pick PC connection by smaller loss, LPF wattmeter for low pf. DC generator: **build-up needs residual + polarity + Rf<Rc + speed**, critical R = **OCC tangent slope**. Rectifiers: half-wave `(Vm/2π)(1+cosα)`, **semiconverter `(Vm/π)(1+cosα)` one-quadrant**, full `(2Vm/π)cosα`. 🏁 Thirty tech days done — revise the boxed KEY RESULTS. ⚡
