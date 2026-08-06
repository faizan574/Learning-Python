# ⚡ GATE Technical Revision — Day 17 (2026-08-06)

*The bridges that measure capacitance and dielectric loss, the many ways to control an induction motor's speed, and the choppers that invert polarity and run in four quadrants.*

`📅 Tech Day 17  ·  ⏱ ~45 min  ·  🎯 Measurements + Machines + Power Electronics`

Attempt each section's test **before** opening its solutions — recall beats re-reading.

---

## 🔧 Measuring Instruments: AC Bridges II — Schering, De Sauty, Wien & Wagner Earthing

Day 16 covered inductance bridges. Now **capacitance & frequency** bridges: **Schering** (capacitance + dielectric loss), **De Sauty** (capacitance comparison), **Wien** (frequency), plus **Wagner earthing** (stray-capacitance elimination).

### 📖 Concept Deep Dive

**Schering Bridge** — the standard for **capacitance and dielectric loss (tan δ)** measurement (insulation/HV testing). Unknown capacitor `(C1, r1)` in arm 1; a **standard loss-free capacitor C2**; arm 4 is a **parallel R4-C4**; arm 3 is R3. Balance gives:

```
C1 = C2·(R4/R3)
r1 = R3·(C4/C2)
Dissipation factor  tan δ = ω·C4·R4      (δ = loss angle)
```

The **dissipation factor / loss tangent `tan δ = ωC4R4`** directly reads the dielectric quality — crucial for **cable/insulation testing**. Schering is a **high-voltage** bridge (the low-voltage arms are earthed for safety).

**De Sauty Bridge** — **compares two capacitances** (unknown vs standard) via two resistive ratio arms:

```
C1/C2 = R4/R3      ⇒    C1 = C2·(R4/R3)
```

Simplest capacitance bridge; balance is difficult if the capacitors have **loss** (needs a modified/ Schering form for lossy capacitors).

**Wien Bridge** — measures **frequency** (or capacitance); a **series R-C** and **parallel R-C** in adjacent arms. At balance, the frequency is:

```
f = 1/(2π·√(R1 R2 C1 C2))
With R1 = R2 = R, C1 = C2 = C:   f = 1/(2π R C)
Balance also requires:  R3/R4 = R1/R2 + C2/C1  (component condition)
```

The Wien bridge is the basis of the **Wien-bridge oscillator** (frequency-selective).

**Wagner Earthing Device.** In AC bridges, **stray capacitances** between the bridge arms/detector and earth cause errors (the detector isn't truly at earth potential). The **Wagner earth** is an auxiliary arm (two impedances) that brings the **detector terminals to earth potential**, so stray-capacitance currents bypass the detector — improving balance accuracy at high frequency/high impedance.

| Bridge | Measures | Key formula |
|---|---|---|
| **Schering** | capacitance + tan δ | C1 = C2·R4/R3 ; tan δ = ωC4R4 |
| **De Sauty** | capacitance comparison | C1 = C2·R4/R3 |
| **Wien** | frequency | f = 1/(2πRC) (equal components) |

> 💎 **KEY RESULT** — **Schering: C1 = C2·R4/R3, tan δ = ωC4R4** (dielectric-loss/HV testing). **De Sauty** compares capacitances (C1 = C2·R4/R3). **Wien: f = 1/(2πRC)** (frequency). **Wagner earthing** removes stray-capacitance errors.

> 🧠 **MEMORY HOOK** — "**Schering = capacitance + tan δ (ωC4R4); De Sauty = compare C; Wien = frequency (1/2πRC); Wagner = kill stray-C.**"

> ⚠️ **TRAP ALERT** — **Schering's dissipation factor tan δ = ωC4R4** (the loss tangent) — a signature GATE result. **Wien bridge is frequency-dependent** (used to measure f). **Wagner earthing** eliminates **stray capacitance**, not resistance error.

### 📐 Formula Sheet

```
Schering:  C1 = C2·(R4/R3) ;  r1 = R3·(C4/C2) ;  tan δ = ω C4 R4
De Sauty:  C1 = C2·(R4/R3)   (capacitance comparison)
Wien:      f = 1/(2π√(R1R2C1C2)) ;  equal components: f = 1/(2πRC)
   balance: R3/R4 = R1/R2 + C2/C1
Wagner earth: auxiliary arm → detector at earth potential (removes stray C)
```

### 🧮 Solved Examples

**Example 1 — Schering bridge.**
A Schering bridge balances with `C2 = 100 pF` (standard), `R3 = 1000 Ω`, `R4 = 3140 Ω`, `C4 = 0.5 µF`, at **50 Hz**. Find the unknown capacitance `C1` and the dissipation factor `tan δ`.

```
C1 = C2·(R4/R3) = 100 pF × (3140/1000) = 100 × 3.14 = 314 pF
ω = 2π×50 = 314.16 rad/s
tan δ = ω C4 R4 = 314.16 × 0.5e−6 × 3140 = 314.16 × 1.57e−3 = 0.493
```
**C1 = 314 pF, tan δ ≈ 0.493.** *(A high loss tangent — a lossy dielectric.)*

**Example 2 — Wien bridge frequency.**
A Wien bridge has `R1 = R2 = 10 kΩ` and `C1 = C2 = 0.01 µF`. Find the frequency at balance.

```
f = 1/(2πRC) = 1/(2π × 10000 × 0.01e−6)
  = 1/(2π × 10000 × 1e−8) = 1/(2π × 1e−4) = 1/(6.2832e−4)
  = 1591.5 Hz
```
**f ≈ 1591.5 Hz (≈ 1.59 kHz).**

### ⚠️ Common Traps

1. **Schering tan δ = ωC4R4** — the dissipation factor / loss tangent (dielectric quality).
2. **Schering & De Sauty both give C1 = C2·R4/R3** — but Schering also gives **loss (r1, tan δ)**.
3. **Wien bridge measures frequency** (f = 1/2πRC for equal components) and is the basis of the Wien oscillator.
4. **Wagner earthing removes stray CAPACITANCE errors**, not resistive imbalance.
5. **Schering is a high-voltage bridge** — the LV arms are earthed for operator safety.
6. **De Sauty struggles with lossy capacitors** — needs a modified (Schering-like) form.

### 📝 Test — Measuring Instruments (8 Q)

1. **(MCQ)** The Schering bridge is primarily used to measure:
   (a) inductance  (b) capacitance and dielectric loss  (c) frequency  (d) resistance
2. **(MCQ)** The dissipation factor in a Schering bridge is:
   (a) ωC4R4  (b) 1/(ωC4R4)  (c) ωL/R  (d) R4/R3
3. **(MCQ)** The Wien bridge is used to measure:
   (a) capacitance loss  (b) frequency  (c) low resistance  (d) inductance
4. **(MCQ)** The De Sauty bridge compares:
   (a) two inductances  (b) two capacitances  (c) two resistances  (d) frequency
5. **(MCQ)** The Wagner earthing device eliminates errors due to:
   (a) lead resistance  (b) stray capacitance  (c) temperature  (d) frequency drift
6. **(NAT)** A Schering bridge: C2 = 200 pF, R4 = 2000 Ω, R3 = 500 Ω. Find C1 in pF. ______ pF
7. **(NAT)** A Schering bridge: C4 = 0.4 µF, R4 = 2500 Ω, ω = 314 rad/s. Find tan δ. ______
8. **(NAT)** A Wien bridge with R = 5 kΩ, C = 0.02 µF (equal components). Find the frequency in Hz. ______ Hz

<details>
<summary>🔑 Solutions</summary>

**1 → (b) capacitance and dielectric loss.**

**2 → (a) ωC4R4.**

**3 → (b) frequency.**

**4 → (b) two capacitances.**

**5 → (b) stray capacitance.**

**6 →** C1 = C2·R4/R3 = 200 × 2000/500 = 200 × 4 = **800 pF.**

**7 →** tan δ = ωC4R4 = 314 × 0.4e−6 × 2500 = 314 × 1e−3 = **0.314.**

**8 →** f = 1/(2πRC) = 1/(2π × 5000 × 0.02e−6) = 1/(2π × 1e−4) = **1591.5 Hz.**

</details>

---

## 🔧 Electrical Machines: Induction Motor IV — Speed Control, Double-Cage Rotor & Induction Generator

Day 16 gave the tests and starting. Now **speed control** methods, the **double-cage** rotor (for good starting + running), and the **induction generator**.

### 📖 Concept Deep Dive

**Speed control** (from `Nr = Ns(1 − s) = (120f/P)(1 − s)`) — vary **Ns** (via f or P) or the **slip s**:

**Stator-side methods:**
1. **Stator voltage control** — torque ∝ V², so reducing V raises slip (limited range; for fans/pumps).
2. **V/f control (variable frequency)** — vary supply **frequency f** keeping **V/f constant** (to keep flux constant, avoid saturation). The **standard modern method** (VFDs) — wide, smooth speed range.
3. **Pole changing** — change the number of **poles P** (consequent-pole / separate windings) → discrete speeds (2-speed motors).

**Rotor-side methods (slip-ring motors):**
4. **Rotor resistance control** — add external rotor R → increases slip at a given torque (speed **below** synchronous); wastes energy in the resistors.
5. **Slip-power recovery (Kramer/Scherbius)** — recover the rotor slip power instead of wasting it (efficient, for large drives).

```
V/f control: keep V/f ≈ constant ⇒ flux constant ⇒ torque capability maintained
   below base speed: V/f const (constant torque)
   above base speed: V max, f increases (field weakening, constant power)
Pole changing: Ns = 120f/P ⇒ discrete speeds
```

**Double-cage rotor.** Two concentric rotor bars: an **outer cage** (high-resistance, low-reactance) and an **inner cage** (low-resistance, high-reactance).
- **At starting (high slip / high rotor freq):** rotor reactance dominates → current flows mostly in the **outer (high-R) cage** → **high starting torque**.
- **At running (low slip):** reactance small → current shifts to the **inner (low-R) cage** → **good efficiency / low slip**.
- Gives the **best of both**: high starting torque **and** good running performance without external resistance.

**Induction generator.** If an induction machine is driven **above synchronous speed** (`Nr > Ns`, so **slip becomes negative**), it **feeds power back** to the supply — acts as a **generator**:

```
Slip s = (Ns − Nr)/Ns < 0  (super-synchronous) ⇒ generating mode
```
- Needs **reactive power (magnetising VARs)** from the grid (or capacitors for **self-excited** stand-alone operation).
- Widely used in **wind turbines** (grid-connected). No separate DC excitation.

> 💎 **KEY RESULT** — Speed control: **V/f (VFD)** is the modern standard (constant flux); also **pole-changing, stator voltage, rotor resistance, slip-power recovery**. **Double-cage**: outer (high-R) for **starting torque**, inner (low-R) for **running efficiency**. **Induction generator**: driven **above Ns** (s < 0), needs external VARs.

> 🧠 **MEMORY HOOK** — "**V/f keeps flux constant (VFD); pole-change = discrete; rotor-R = wasteful. Double-cage: outer starts, inner runs. Over-speed it (s<0) → generator (wind).**"

> ⚠️ **TRAP ALERT** — In **V/f control**, you keep **V/f constant** (not V constant) to hold flux — else low-f operation saturates the core. An **induction generator needs reactive power from the grid/capacitors** (it can't self-excite without them).

### 📐 Formula Sheet

```
Nr = Ns(1 − s) = (120f/P)(1 − s)
V/f control: V/f = constant (below base, constant torque)
Pole changing: Ns = 120f/P (discrete speeds)
Stator voltage control: T ∝ V² (limited range)
Double cage: outer = high R/low X (start) ; inner = low R/high X (run)
Induction generator: Nr > Ns ⇒ s < 0 ⇒ delivers power ; needs magnetising VARs
```

### 🧮 Solved Examples

**Example 1 — V/f control.**
A 4-pole, 50 Hz induction motor has a rated synchronous speed of 1500 rpm. Under V/f control the frequency is reduced to **30 Hz**. Find the new synchronous speed.

```
Ns(new) = 120 f/P = 120 × 30/4 = 3600/4 = 900 rpm
```
**New synchronous speed = 900 rpm** (rotor runs slightly below this by the slip).

**Example 2 — induction generator slip.**
A 6-pole, 50 Hz induction machine is driven at **1050 rpm**. Determine whether it motors or generates, and the slip.

```
Ns = 120×50/6 = 1000 rpm
Nr = 1050 rpm > Ns ⇒ super-synchronous ⇒ GENERATING
s = (Ns − Nr)/Ns = (1000 − 1050)/1000 = −50/1000 = −0.05 (−5%)
```
**Generating mode; slip = −5 %** (negative slip = generator).

### ⚠️ Common Traps

1. **V/f control keeps V/f constant** (flux constant), not V constant — crucial for low-speed operation.
2. **Double-cage: outer = high resistance (starting), inner = low resistance (running)** — don't reverse.
3. **Induction generator: slip is negative** (Nr > Ns); it still **draws magnetising VARs** from the grid.
4. **Pole-changing gives discrete speeds only** (Ns = 120f/P).
5. **Rotor-resistance speed control wastes energy** (I²R in resistors); slip-power recovery avoids this.
6. **Stator voltage control range is small** (T ∝ V², high slip losses) — used for fans/pumps.

### 📝 Test — Electrical Machines (8 Q)

1. **(MCQ)** The modern standard method of induction-motor speed control is:
   (a) rotor resistance  (b) V/f (variable frequency)  (c) stator voltage  (d) pole changing
2. **(MCQ)** In V/f control, the quantity kept constant is:
   (a) V  (b) f  (c) V/f  (d) V·f
3. **(MCQ)** In a double-cage rotor, the outer cage has:
   (a) high resistance, low reactance  (b) low resistance, high reactance  (c) high R and high X  (d) no resistance
4. **(MCQ)** An induction machine generates when driven at:
   (a) below synchronous speed  (b) above synchronous speed  (c) synchronous speed  (d) standstill
5. **(MCQ)** The slip of an induction generator is:
   (a) zero  (b) positive  (c) negative  (d) one
6. **(NAT)** A 4-pole motor under V/f control runs at f = 40 Hz. Find the synchronous speed in rpm. ______ rpm
7. **(NAT)** An 8-pole, 50 Hz machine is driven at 780 rpm. Find the slip (%) and state motor/generator. ______
8. **(NAT)** A 6-pole, 50 Hz machine runs at 1030 rpm. Find the slip. ______

<details>
<summary>🔑 Solutions</summary>

**1 → (b) V/f (variable frequency).**

**2 → (c) V/f.**

**3 → (a) high resistance, low reactance.**

**4 → (b) above synchronous speed.**

**5 → (c) negative.**

**6 →** Ns = 120×40/4 = **1200 rpm.**

**7 →** Ns = 120×50/8 = 750 rpm; s = (750−780)/750 = −30/750 = −0.04 = **−4% (generator).**

**8 →** Ns = 1000; s = (1000−1030)/1000 = **−0.03 (generating).**

</details>

---

## 🔧 Power Electronics: DC-DC Choppers II — Buck-Boost, Cuk & Four-Quadrant Operation

Day 16 covered buck & boost. Now the **buck-boost** and **Cuk** converters (both invert polarity) and **multi-quadrant** chopper operation.

### 📖 Concept Deep Dive

**Buck-Boost converter.** Steps voltage **up OR down** with **inverted polarity**. Continuous conduction:

```
Vo = − Vs · D/(1 − D)        (magnitude |Vo| = Vs·D/(1−D))
D < 0.5 ⇒ |Vo| < Vs (buck) ;  D > 0.5 ⇒ |Vo| > Vs (boost)
Is = Io · D/(1 − D)   (from power balance, magnitudes)
```

The inductor stores energy from the source when the switch is ON, then delivers it to the load (reverse polarity) when OFF. Output is **negative** w.r.t. input ground.

**Cuk converter.** Uses a **capacitor** as the main energy-transfer element (plus two inductors). Same voltage ratio as buck-boost but with **continuous input AND output current** (low ripple both sides) — output also **inverted**:

```
Vo = − Vs · D/(1 − D)     (same ratio as buck-boost, inverted)
Advantage: continuous input & output current (low ripple)
```

**Comparison of the four basic converters:**

| Converter | Vo/Vs | Polarity | Note |
|---|---|---|---|
| Buck | D | + | step-down |
| Boost | 1/(1−D) | + | step-up |
| Buck-boost | −D/(1−D) | **−** | up or down, inverted |
| Cuk | −D/(1−D) | **−** | up/down, low ripple |

**Four-quadrant chopper operation.** A chopper's operating quadrant is defined by output **voltage (±)** and **current (±)**:

```
Quadrant I:   +V, +I  → forward motoring
Quadrant II:  +V, −I  → forward regenerative braking
Quadrant III: −V, −I  → reverse motoring
Quadrant IV:  −V, +I  → reverse regenerative braking
```

**Chopper classes (Bedford):**

| Class | Quadrants | Operation |
|---|---|---|
| **Class A** | I only (+V,+I) | motoring (step-down) |
| **Class B** | II only (+V,−I) | regenerative braking |
| **Class C** | I & II | motoring + braking (one direction) |
| **Class D** | I & IV | two-quadrant (voltage reverses) |
| **Class E** | I, II, III, IV | **four-quadrant** (full drive) |

**Class E (four-quadrant)** uses **four switches** (like an H-bridge) → full forward/reverse motoring and braking — the complete DC drive.

> 💎 **KEY RESULT** — **Buck-boost & Cuk: Vo = −Vs·D/(1−D)** (up/down, **inverted**; Cuk has low input/output ripple). **Chopper classes: A (Q-I), B (Q-II), C (Q-I&II), D (Q-I&IV), E (four-quadrant)**.

> 🧠 **MEMORY HOOK** — "**Buck-boost/Cuk = −D/(1−D) (inverted, up or down). Classes: A motors, B brakes, C both (1 dir), D reverses V, E does all four quadrants.**"

> ⚠️ **TRAP ALERT** — Buck-boost and Cuk **invert the output polarity** (Vo negative). At **D = 0.5** both give |Vo| = Vs (unity). **Class E = four-quadrant** (H-bridge); don't confuse with Class C (two-quadrant, single direction).

### 📐 Formula Sheet

```
Buck:        Vo = D·Vs
Boost:       Vo = Vs/(1−D)
Buck-boost:  Vo = −Vs·D/(1−D) ;  |Vo|=Vs at D=0.5
Cuk:         Vo = −Vs·D/(1−D)  (low ripple, capacitor transfer)
Input current (buck-boost): Is = Io·D/(1−D)
Quadrants: I(+V+I motor), II(+V−I brake), III(−V−I rev motor), IV(−V+I rev brake)
Classes: A(I), B(II), C(I,II), D(I,IV), E(all four)
```

### 🧮 Solved Examples

**Example 1 — buck-boost.**
A buck-boost converter operates from `Vs = 24 V` at duty `D = 0.6`. Find the output voltage (magnitude and sign).

```
Vo = − Vs·D/(1−D) = − 24 × 0.6/(1 − 0.6) = − 24 × 0.6/0.4 = − 24 × 1.5 = − 36 V
```
**Vo = −36 V** (boost mode, D > 0.5, inverted polarity).

**Example 2 — buck-boost step-down.**
The same converter at `D = 0.25`, `Vs = 40 V`. Find Vo and the input current if `Io = 3 A`.

```
Vo = − Vs·D/(1−D) = − 40 × 0.25/0.75 = − 40 × 0.3333 = − 13.33 V
Is = Io·D/(1−D) = 3 × 0.25/0.75 = 3 × 0.3333 = 1.0 A
   (power check: Vs·Is = 40×1 = 40 W ; |Vo|·Io = 13.33×3 = 40 W ✓)
```
**Vo = −13.33 V (buck, D < 0.5); Is = 1.0 A.**

### ⚠️ Common Traps

1. **Buck-boost & Cuk output is inverted** (negative): `Vo = −Vs·D/(1−D)`.
2. **At D = 0.5, buck-boost |Vo| = Vs** (unity gain); D<0.5 buck, D>0.5 boost.
3. **Cuk = low ripple both sides** (continuous input & output current) via a transfer capacitor — the distinguishing feature.
4. **Class E = four-quadrant** (four switches / H-bridge); Class C is two-quadrant, one direction.
5. **Quadrant II & IV = regenerative braking** (current reverses, energy returns).
6. **Power balance** gives input current: `Is = Io·D/(1−D)` for buck-boost.

### 📝 Test — Power Electronics (8 Q)

1. **(MCQ)** The output voltage of a buck-boost converter is:
   (a) D·Vs  (b) Vs/(1−D)  (c) −Vs·D/(1−D)  (d) Vs·(1−D)
2. **(MCQ)** At D = 0.5, the buck-boost output magnitude equals:
   (a) Vs/2  (b) Vs  (c) 2Vs  (d) 0
3. **(MCQ)** The Cuk converter's distinguishing feature is:
   (a) positive output  (b) low ripple input & output current  (c) no inductor  (d) step-down only
4. **(MCQ)** A four-quadrant chopper is:
   (a) Class A  (b) Class C  (c) Class E  (d) Class B
5. **(MCQ)** Regenerative braking corresponds to which quadrants?
   (a) I & III  (b) II & IV  (c) I only  (d) III only
6. **(NAT)** A buck-boost converter: Vs = 50 V, D = 0.4. Find |Vo| in volts. ______ V
7. **(NAT)** A buck-boost converter: Vs = 20 V, D = 0.75. Find |Vo| in volts. ______ V
8. **(NAT)** A buck-boost converter Vs = 30 V, D = 0.5, Io = 2 A. Find the input current in A. ______ A

<details>
<summary>🔑 Solutions</summary>

**1 → (c) −Vs·D/(1−D).**

**2 → (b) Vs.**

**3 → (b) low ripple input & output current.**

**4 → (c) Class E.**

**5 → (b) II & IV.**

**6 →** |Vo| = Vs·D/(1−D) = 50 × 0.4/0.6 = 50 × 0.6667 = **33.33 V.**

**7 →** |Vo| = 20 × 0.75/0.25 = 20 × 3 = **60 V.**

**8 →** Is = Io·D/(1−D) = 2 × 0.5/0.5 = 2 × 1 = **2.0 A** (at D=0.5, unity ⇒ Is = Io).

</details>

---

`✅ Day 17 complete — AC bridges II (Schering tan δ, De Sauty, Wien, Wagner earthing), induction motor IV (V/f control, double-cage, induction generator), and DC-DC choppers II (buck-boost/Cuk = −Vs·D/(1−D), four-quadrant classes A–E). Tomorrow: CRO & measurements, single-phase induction motors, and single-phase inverters (VSI).`

*Correctness over length — re-derive any result you're unsure of and mark "verify" before the exam.*
