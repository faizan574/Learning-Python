# ⚡ GATE Technical Revision — Day 93 (2026-10-22)

*The dynamometer wattmeter and the coil errors that bias its reading, the many ways to control an induction motor's speed (plus the double-cage rotor and induction generator), and the buck-boost/Cuk choppers with four-quadrant drive operation.*

📅 Tech Day 93 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics

---

## 🔧 Measuring Instruments: Measurement of Power I — Dynamometer Wattmeter & Its Errors

### 📖 Concept Deep Dive

The **electrodynamometer wattmeter** is the standard analogue power meter (Day 91 introduced the movement). It has a **current coil (CC)** — the **fixed** coils carrying load current `i` — and a **pressure/voltage coil (PC)** — the **moving** coil carrying a current `ip ∝ v` through a high series resistance. Average torque:

```
Tavg ∝ average of (i · ip) ∝ VI cosφ = active power P
```

So it reads **true active power** with a **uniform scale**. But two connection choices and two coil properties introduce systematic **errors**.

**Connection errors (CC-PC placement).** The PC can be connected on the **load side** or the **supply side** of the CC:
- **PC across load (CC on supply side):** the CC carries load current **plus** PC current → wattmeter reads **P_load + power lost in PC (V²/Rp)**. Error = **pressure-coil power**. Better for **large load currents**.
- **PC on supply side (CC in series with load only):** the PC sees **supply voltage = load V + CC drop** → wattmeter reads **P_load + power lost in CC (I²·Rcc)**. Error = **current-coil power**. Better for **large load voltages / small currents**.

Choose the connection whose extra loss is smaller; or use a **compensated wattmeter** (an extra compensating winding cancels the PC-current effect).

**Pressure-coil inductance error.** Ideally the PC branch is purely resistive so `ip` is in phase with `v`. But the PC has inductance `Lp`, so `ip` **lags** `v` by a small angle `β` (where `tanβ = ωLp/Rp`). This makes the wattmeter read:

```
True reading × (cos φ / cos β · cos(φ − β))   ... (correction factor)
Error is positive for lagging pf, negative for leading pf
```

For **lagging** loads the inductance error makes the wattmeter read **high**; for **leading** loads, **low**. Compensation: a **capacitor** across part of the series resistor (Silsbee) brings `β → 0`.

**Eddy-current & stray-field errors.** Eddy currents in metal parts set up fluxes that distort the reading (reduced by using stranded/laminated, non-metallic formers). Stray external fields need **shielding** (astatic construction uses two opposing systems).

**Low-Power-Factor (LPF) wattmeter.** At **low pf** (e.g. 0.1), the deflection is small and errors are magnified. An **LPF wattmeter** is modified: (1) **PC has low resistance** (more current, bigger torque); (2) **pressure-coil inductance compensation**; (3) **compensation for pressure-coil current** (compensating winding). It gives accurate readings at low pf (e.g., measuring iron loss, no-load tests).

| Error source | Effect | Fix |
|---|---|---|
| Connection (PC/CC) | adds PC or CC power loss | choose connection / compensated wattmeter |
| PC inductance | reads high (lag), low (lead) | capacitor compensation (Silsbee) |
| Eddy currents | distortion | non-metallic formers |
| Stray fields | deflection error | shielding / astatic |

> 💎 **KEY RESULT** — Wattmeter average torque `∝ VI cosφ` (uniform scale). Connection error = **PC-power** (PC across load) or **CC-power** (PC on supply side). PC-inductance error: reads **high for lagging**, **low for leading** pf; correction factor `cosφ/[cosβ·cos(φ−β)]`.

> 🧠 **MEMORY HOOK** — "**PC-across-load adds PC loss; PC-on-supply adds CC loss.**" Inductance → **lag reads high, lead reads low**. LPF meter = low-R PC + compensation.

### 📐 Formula Sheet

| Quantity | Expression |
|---|---|
| Wattmeter reading | `W ∝ VI cosφ = P` |
| PC-across-load error | `+ V²/Rp` (pressure-coil power) |
| PC-on-supply error | `+ I²·Rcc` (current-coil power) |
| PC inductance angle | `tanβ = ωLp/Rp` |
| Correction factor | `CF = cosφ / [cosβ · cos(φ − β)]` |
| True power | `P = W × CF` |

### 🧮 Solved Examples

**Example 1 — Connection error.**
A wattmeter measures power in a load drawing 5 A at 230 V. The pressure coil has resistance `Rp = 5000 Ω`; the current coil resistance `Rcc = 0.1 Ω`. Compare the error power for the two connections.

```
PC across load (adds PC power): V²/Rp = 230²/5000 = 52900/5000 = 10.58 W
PC on supply (adds CC power):  I²·Rcc = 5²·0.1 = 25·0.1 = 2.5 W
```

CC-on-load-only (PC on supply side) adds just **2.5 W** vs **10.58 W** — so for this 5 A / 230 V load, connect **PC on the supply side** (smaller error).

**Example 2 — Pressure-coil inductance error.**
A wattmeter PC has `Rp = 2000 Ω`, `Lp = 10 mH`, at 50 Hz. Find the error angle β and the correction factor for a load pf of 0.5 lagging (φ = 60°).

```
tanβ = ωLp/Rp = (2π·50·0.010)/2000 = 3.1416/2000 = 0.00157 ⇒ β = 0.09°
CF = cosφ/[cosβ·cos(φ−β)] = cos60°/[cos0.09°·cos(60°−0.09°)]
   = 0.5/[0.9999·cos(59.91°)] = 0.5/[0.9999·0.50137] = 0.5/0.50132 = 0.99737
```

Correction factor ≈ **0.9974** (wattmeter reads ≈ 0.26% high for this lagging load).

### ⚠️ Common Traps

1. **Wattmeter always reads exact P** — it includes a **coil-loss** error depending on connection.
2. **PC inductance reads low for lagging** — it reads **high** for lagging pf (low for leading).
3. **LPF wattmeter = ordinary wattmeter** — LPF type has **low-resistance PC + compensation**; ordinary ones are inaccurate at low pf.
4. **Choosing PC-across-load for small currents** — for **small current / high voltage**, PC-on-supply (CC error) is usually smaller; evaluate both.
5. **Ignoring compensation winding** — a compensated wattmeter cancels the PC-current effect.
6. **Confusing CC and PC** — CC = **fixed, series, load current**; PC = **moving, shunt, ∝ voltage**.

### 📝 Test — Measuring Instruments (8 Q)

1. In a dynamometer wattmeter, the current coil is:
   (a) the moving coil (b) the fixed coil carrying load current (c) across the load (d) a shunt
2. When the pressure coil is connected across the load, the wattmeter reads power plus:
   (a) current-coil loss (b) pressure-coil loss (c) zero error (d) iron loss
3. Pressure-coil inductance causes the wattmeter (lagging pf) to read:
   (a) low (b) high (c) exactly (d) zero
4. An LPF wattmeter uses a pressure coil of:
   (a) high resistance (b) low resistance (c) infinite resistance (d) zero turns
5. The wattmeter indicates:
   (a) apparent power (b) active power (c) reactive power (d) RMS voltage
6. **(NAT)** A load draws 10 A at 200 V. PC resistance = 4000 Ω, CC resistance = 0.2 Ω. Find the error power (W) when the PC is across the load.
7. **(NAT)** For Q6, find the error power (W) when the PC is on the supply side.
8. **(NAT)** A wattmeter PC: Rp = 1000 Ω, Lp = 8 mH, 50 Hz. Find the error angle β in degrees.

<details><summary>🔑 Solutions</summary>

**1 → (b).** CC = fixed coil carrying load current.

**2 → (b).** PC across load → adds pressure-coil power loss.

**3 → (b).** Reads high for lagging pf.

**4 → (b).** Low-resistance PC (more torque at low pf).

**5 → (b).** Active power.

**6 (NAT).** PC across load: `V²/Rp = 200²/4000 = 40000/4000 = 10 W`.

**7 (NAT).** PC on supply: `I²·Rcc = 10²·0.2 = 100·0.2 = 20 W`.

**8 (NAT).** `tanβ = ωLp/Rp = (2π·50·0.008)/1000 = 2.513/1000 = 0.002513 ⇒ β = arctan(0.002513) = 0.144°`.

</details>

---

## 🔧 Electrical Machines: Induction Motor IV — Speed Control, Double-Cage Rotor & Induction Generator

### 📖 Concept Deep Dive

The induction motor runs at `N = Ns(1 − s) = (120f/P)(1 − s)`. Speed control therefore acts on **f, P, s** (and voltage). Methods split into **stator-side** and **rotor-side**.

**Stator-side methods.**
- **Stator voltage control:** since `T ∝ V²`, reducing voltage reduces torque and raises slip for a given load — crude, lossy, narrow range; used for small fan loads and soft-starters.
- **Supply frequency (V/f) control:** vary `f` to change `Ns`. To keep flux constant and avoid saturation, keep **V/f constant** (so `φ ∝ V/f` stays fixed). This is the **modern VFD** method — wide range, efficient; above base speed, V saturates → **field-weakening** (constant-power) region.
- **Pole changing:** change `P` (e.g., consequent-pole or separate windings) → discrete speeds (e.g., 2/4 pole). Only for squirrel-cage.

**Rotor-side methods (wound rotor).**
- **Rotor-resistance control:** add external rotor R → increases slip for a given torque (shifts torque-slip curve). Simple, but **lossy** (I²R in resistors), narrow downward range.
- **Slip-power recovery (Kramer/Scherbius):** instead of wasting rotor-slip power in resistors, feed it back to the supply (static Scherbius with converters) or to an auxiliary machine (Kramer) → **efficient** sub-synchronous/super-synchronous control for large drives.

**Double-cage rotor.** To get **high starting torque with low starting current** in a squirrel-cage motor, the rotor has **two concentric cages**:
- **Outer cage:** high-resistance, low-reactance (near surface) → dominates at **start** (high slip, high rotor frequency) → high starting torque.
- **Inner cage:** low-resistance, high-reactance (deep) → dominates at **running** (low slip) → good efficiency.

So the effective rotor resistance is **high at start, low at run** — best of both worlds, without external resistance (deep-bar rotors use the same skin-effect idea).

**Induction generator.** If an induction machine is driven **above synchronous speed** (`N > Ns`, so **slip is negative**), it delivers power to the grid — an **induction generator**. It needs **reactive magnetising power** from the grid (or capacitors for **self-excited** standalone operation). Widely used in **wind turbines**. No separate DC excitation; simple and rugged, but cannot supply its own reactive power.

| Method | Acts on | Notes |
|---|---|---|
| Stator voltage | V (T ∝ V²) | lossy, small range |
| V/f (VFD) | f, keep V/f | modern, wide, efficient |
| Pole changing | P | discrete, cage only |
| Rotor resistance | s | lossy, wound rotor |
| Slip-power recovery | s | efficient, large drives |

> 💎 **KEY RESULT** — `N = (120f/P)(1−s)` → control via **V (T∝V²), V/f (constant flux), P (pole change), rotor-R, slip-power recovery**. Double-cage: **outer high-R (start), inner low-R (run)**. Induction generator: driven **above Ns** (negative slip), needs external reactive power.

> 🧠 **MEMORY HOOK** — "**V/f keeps flux constant (VFD); double-cage = high-R outer (start) + low-R inner (run); drive above Ns → generator.**"

### 📐 Formula Sheet

| Quantity | Expression |
|---|---|
| Speed | `N = (120f/P)(1 − s)` |
| V/f control | keep `V/f = const` → `φ` constant |
| Torque vs voltage | `T ∝ V²` (at given slip) |
| Induction generator | `N > Ns ⇒ s < 0` (negative slip) |
| Slip | `s = (Ns − N)/Ns` |
| Double-cage | `Reff` high at start, low at run |

### 🧮 Solved Examples

**Example 1 — V/f control.**
A 4-pole, 50 Hz motor runs at near-synchronous speed. Using V/f control, the supply is changed to 30 Hz keeping V/f constant. Find the new synchronous speed.

```
Ns(new) = 120·f/P = 120·30/4 = 900 rpm
```

(At 50 Hz, Ns = 1500 rpm; at 30 Hz, Ns = 900 rpm — flux held constant by reducing V proportionally.)

**Example 2 — Induction generator slip.**
A 6-pole, 50 Hz induction machine is driven at 1050 rpm. Find the slip and state the mode.

```
Ns = 120·50/6 = 1000 rpm
s = (Ns − N)/Ns = (1000 − 1050)/1000 = −0.05 (−5%)
```

Slip is **negative (−5%)** ⇒ the machine runs as an **induction generator** (N > Ns).

### ⚠️ Common Traps

1. **V/f control varies only V** — it varies **f**, holding **V/f constant** to keep flux fixed.
2. **Pole-changing on wound rotor** — pole-changing is for **squirrel-cage** (consequent poles); wound rotor uses rotor-R/slip-recovery.
3. **Double-cage: inner cage for starting** — the **outer** (high-R) cage dominates at start; inner at run.
4. **Induction generator needs no reactive power** — it **draws** magnetising VARs (grid or capacitors).
5. **Rotor-resistance control is efficient** — it is **lossy** (power wasted in resistors); slip-power recovery is the efficient version.
6. **Stator-voltage control gives wide range** — it is **narrow** and torque falls as V² .

### 📝 Test — Electrical Machines (8 Q)

1. For constant-flux V/f control, as frequency is reduced the voltage is:
   (a) kept constant (b) reduced proportionally (c) increased (d) zero
2. Pole-changing speed control applies to:
   (a) wound rotor (b) squirrel-cage (c) synchronous (d) DC
3. In a double-cage rotor, high starting torque comes from the:
   (a) inner low-R cage (b) outer high-R cage (c) stator (d) shaft
4. An induction machine runs as a generator when:
   (a) s = 1 (b) s > 0 (c) s < 0 (N > Ns) (d) s = 0
5. The efficient way to control a wound-rotor motor's speed is:
   (a) rotor resistance (b) slip-power recovery (c) stator voltage (d) braking
6. **(NAT)** An 8-pole, 50 Hz motor under V/f control operates at 25 Hz. Find the new synchronous speed (rpm).
7. **(NAT)** A 4-pole, 50 Hz induction machine is driven at 1560 rpm. Find the slip (%).
8. **(NAT)** A 6-pole, 60 Hz motor runs at slip 0.04. Find the rotor speed (rpm).

<details><summary>🔑 Solutions</summary>

**1 → (b).** Reduce V proportionally to keep V/f (flux) constant.

**2 → (b).** Squirrel-cage (consequent poles).

**3 → (b).** Outer high-resistance cage.

**4 → (c).** Negative slip (N > Ns).

**5 → (b).** Slip-power recovery (Kramer/Scherbius).

**6 (NAT).** `Ns = 120·25/8 = 375 rpm`.

**7 (NAT).** `Ns = 120·50/4 = 1500`; `s = (1500−1560)/1500 = −60/1500 = −0.04 = −4%` (generator).

**8 (NAT).** `Ns = 120·60/6 = 1200 rpm`; `N = 1200(1−0.04) = 1200·0.96 = 1152 rpm`.

</details>

---

## 🔧 Power Electronics: DC-DC Choppers II — Buck-Boost, Cuk & Four-Quadrant Operation

### 📖 Concept Deep Dive

Building on buck and boost (Day 92), this covers converters that can **step up or down** and **reverse polarity**, plus **four-quadrant** chopper drives.

**Buck-boost converter.** Combines step-down and step-up; the output is **inverted** (opposite polarity to input). During `Ton` the inductor charges from the source; during `Toff` it discharges into the load through a diode. Average output (CCM):

```
Vo = −Vs · D/(1 − D)
```

- `D < 0.5` → |Vo| < Vs (buck mode); `D > 0.5` → |Vo| > Vs (boost mode); `D = 0.5` → |Vo| = Vs.
- Magnitude: `|Vo| = Vs·D/(1−D)`. Input current relation (ideal): `Is = Io·D/(1−D)`.

**Cuk converter.** Also steps up/down with **inverted output**, but uses a **capacitor as the main energy-transfer element** (between two inductors). Its key advantage: **continuous (low-ripple) input and output currents** (both inductors smooth the currents), reducing filtering. Same voltage ratio:

```
Vo = −Vs · D/(1 − D)
```

(SEPIC is a related topology with **non-inverted** output.)

**Four-quadrant chopper drives.** For DC motor drives, choppers are classified by the **quadrants of operation** in the torque-speed (or V-I) plane:
- **Class A (Type A):** first quadrant — `V > 0, I > 0` (motoring, forward). Step-down.
- **Class B:** second quadrant — `V > 0, I < 0` (regenerative braking). 
- **Class C:** two-quadrant (A + B) — motoring + regen in one direction (V > 0, I both signs).
- **Class D:** `V` both signs, `I > 0` (quadrants 1 and 4).
- **Class E:** **four-quadrant** — full forward/reverse motoring and braking (V and I both signs). Uses an H-bridge of 4 switches.

**Switching-mode power supplies (SMPS).** Choppers are the core of regulated DC supplies: **buck, boost, buck-boost, flyback, forward, push-pull** topologies provide isolated/non-isolated regulated output with high efficiency (vs linear regulators). Control is closed-loop PWM on the duty ratio.

| Converter | Vo | Polarity | Feature |
|---|---|---|---|
| Buck-boost | `−Vs·D/(1−D)` | inverted | up or down |
| Cuk | `−Vs·D/(1−D)` | inverted | low-ripple in/out (capacitor transfer) |
| SEPIC | `+Vs·D/(1−D)` | non-inverted | up or down |

> 💎 **KEY RESULT** — Buck-boost & Cuk: `Vo = −Vs·D/(1−D)` (inverted; buck for D<0.5, boost for D>0.5). **Class E** chopper = **four-quadrant** (H-bridge). Cuk gives **continuous input & output currents**.

> 🧠 **MEMORY HOOK** — "**Buck-boost/Cuk = −Vs·D/(1−D) (inverted). Class A→1Q, C→2Q, E→4Q.**"

### 📐 Formula Sheet

| Quantity | Expression |
|---|---|
| Buck-boost output | `Vo = −Vs·D/(1−D)` |
| Buck-boost magnitude | `|Vo| = Vs·D/(1−D)` |
| D = 0.5 | `|Vo| = Vs` |
| Cuk output | `Vo = −Vs·D/(1−D)` (low ripple) |
| SEPIC output | `Vo = +Vs·D/(1−D)` |
| Input current (ideal) | `Is = Io·D/(1−D)` |
| Four-quadrant | Class E (H-bridge) |

### 🧮 Solved Examples

**Example 1 — Buck-boost output.**
A buck-boost converter has `Vs = 24 V`, `D = 0.6`. Find the output voltage.

```
Vo = −Vs·D/(1−D) = −24·0.6/(1−0.6) = −24·0.6/0.4 = −24·1.5 = −36 V
```

Output **= −36 V** (boost mode, inverted; |Vo| = 36 V > 24 V since D > 0.5).

**Example 2 — Duty for a target buck-boost output.**
A buck-boost converter must produce |Vo| = 15 V from Vs = 30 V. Find D.

```
|Vo| = Vs·D/(1−D) ⇒ 15 = 30·D/(1−D) ⇒ 15(1−D) = 30D
15 − 15D = 30D ⇒ 15 = 45D ⇒ D = 15/45 = 0.333
```

Duty ratio **D = 0.333** (buck mode, D < 0.5, |Vo| < Vs).

### ⚠️ Common Traps

1. **Buck-boost output same polarity** — it is **inverted** (opposite sign to input).
2. **Cuk ratio differs from buck-boost** — both share `Vo = −Vs·D/(1−D)`; Cuk's advantage is **low ripple**, not a different ratio.
3. **Class A is four-quadrant** — Class A = **one-quadrant**; **Class E** is four-quadrant.
4. **SEPIC inverts output** — SEPIC is **non-inverting** (unlike buck-boost/Cuk).
5. **D > 1 for boost mode** — in buck-boost, boost mode is simply **D > 0.5** (D stays ≤ 1).
6. **Regenerative braking in Class A** — regen needs reverse current (Class B/C/E), not Class A alone.

### 📝 Test — Power Electronics (8 Q)

1. The output voltage of a buck-boost converter is:
   (a) `D·Vs` (b) `Vs/(1−D)` (c) `−Vs·D/(1−D)` (d) `(1−D)Vs`
2. A buck-boost converter operates in boost mode when:
   (a) D < 0.5 (b) D > 0.5 (c) D = 0 (d) D = 1
3. The Cuk converter's main advantage is:
   (a) higher voltage (b) continuous low-ripple input & output currents (c) no inductor (d) no switch
4. A four-quadrant chopper is classified as:
   (a) Class A (b) Class C (c) Class E (d) Class B
5. The SEPIC converter output is:
   (a) inverted (b) non-inverted (c) always < Vs (d) always > Vs
6. **(NAT)** A buck-boost converter: Vs = 40 V, D = 0.25. Find |Vo| (V).
7. **(NAT)** A buck-boost converter must give |Vo| = 60 V from Vs = 20 V. Find D.
8. **(NAT)** A buck-boost converter with Vs = 50 V operates at D = 0.5. Find |Vo| (V).

<details><summary>🔑 Solutions</summary>

**1 → (c).** `Vo = −Vs·D/(1−D)`.

**2 → (b).** D > 0.5 → |Vo| > Vs (boost).

**3 → (b).** Continuous (low-ripple) input and output currents.

**4 → (c).** Class E (H-bridge, four-quadrant).

**5 → (b).** SEPIC is non-inverting.

**6 (NAT).** `|Vo| = Vs·D/(1−D) = 40·0.25/0.75 = 10/0.75 = 13.33 V`.

**7 (NAT).** `60 = 20·D/(1−D) ⇒ 60(1−D) = 20D ⇒ 60 = 80D ⇒ D = 0.75`.

**8 (NAT).** `|Vo| = 50·0.5/0.5 = 50 V` (D = 0.5 ⇒ |Vo| = Vs).

</details>

---

## 📊 Tech Progress

```
Measurements      [█████████░░░░░░░░░]  Round 5 · topic  9/20 (Power I: dynamometer wattmeter)
Electrical Mach.  [█████████████░░░░░]  Round 5 · topic 13/19 (IM IV: speed control, gen)
Power Electronics [█████████████░░░░░]  Round 5 · topic 13/19 (DC-DC choppers II)
```

> 🎯 **Day 93 one-liners:** (1) **Wattmeter: PC-across-load adds V²/Rp, PC-on-supply adds I²Rcc; PC inductance reads high (lag)/low (lead); LPF = low-R PC + compensation.** (2) **IM speed: V/f (flux const), pole-change, rotor-R, slip-recovery; double-cage (outer-start/inner-run); gen at N>Ns.** (3) **Buck-boost/Cuk Vo = −Vs·D/(1−D); Class E = four-quadrant.**

*Correctness over length — derive, don't memorise blindly; verify any "verify" figure. Onward. ⚡*
