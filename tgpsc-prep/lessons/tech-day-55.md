# ⚡ GATE Technical Revision — Day 55 (2026-09-14)

*Round-3 pass 13 — current transformers, induction-motor speed control, and buck-boost/Cuk choppers. Detailed, exam-relevant.*

📅 Tech Day 55 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics · 🔁 Round-3 pass 13

> 🧠 **MEMORY HOOK** — Today: the **CT** (never open the secondary!), induction-motor **speed control & the induction generator**, and the **buck-boost (Vo = −DVs/(1−D))** & Cuk converters. Three high-yield topics.

---

## 🔧 Measuring Instruments: Instrument Transformers — Current Transformer (CT)

### 📖 Concept Deep Dive

A **Current Transformer (CT)** steps down a large primary current to a standard measurable value (usually **5 A** or **1 A** secondary) for metering/protection, and **isolates** the instrument from high voltage. The primary is a few turns (or a bus bar) in series with the line; the secondary (many turns) feeds an ammeter/relay (a **low-impedance burden**).

**Ratios & errors.** Ideally `Ip/Is = Ns/Np` (turns ratio). The **nominal (rated) ratio `Kn`** vs **actual (transformation) ratio `R`** differ because of the **magnetising current**:

```
Ratio (current) error = (Kn − R)/R × 100 %
Actual ratio  R = Ip/Is  ;  R ≈ turns ratio + (magnetising-current effect)
```

- **Ratio error** — the actual ratio differs from nominal (secondary current a bit low) due to the exciting current.
- **Phase-angle error `θ`** — the secondary current reversed is not exactly in phase with the primary; the small angle (minutes) matters for **power/energy metering** (affects `cosφ` measurement).

Both errors depend on the **exciting current** (`Iw` working + `Iμ` magnetising components). Reducing core loss and using high-permeability cores (mumetal/nickel-iron) **minimises** errors.

**Open-secondary hazard (critical).** The CT secondary must **NEVER be open-circuited** while primary current flows. Normally the secondary ampere-turns oppose the primary (small net flux). If the secondary opens, the **entire primary MMF magnetises the core** → **very high flux** → **dangerous high voltage** across the open secondary (can be kV, insulation failure, hazard) and core overheating. So a CT secondary is **short-circuited** before disconnecting the meter.

**Burden** = the load on the secondary (in VA at rated current), including instrument + leads. Accuracy classes (0.1, 0.2, 0.5, 1 for metering; 5P, 10P for protection).

> 💎 **KEY RESULT** — CT: standard secondary **5 A (or 1 A)**; ratio & phase-angle errors from **exciting current**. **NEVER open the secondary** (high voltage/flux hazard) — short it before disconnecting. Burden in VA; metering classes 0.1-1, protection 5P/10P.

> ⚠️ **TRAP ALERT** — **CT secondary must never be open** (unlike a PT, which must never be **shorted**). CT secondary is a near-**short** (low burden). Phase-angle error matters for **power/energy** metering, not just current magnitude.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Ideal ratio | `Ip/Is = Ns/Np` (turns ratio) |
| Nominal ratio | `Kn = rated Ip / rated Is` |
| Actual (transformation) ratio | `R = Ip/Is` (actual) |
| Ratio error | `(Kn − R)/R × 100 %` |
| Phase-angle error | small angle θ (minutes), from exciting current |
| Burden | VA on secondary at rated current |

### 🧮 Solved Examples

**Example 1 — ratio error.**
A CT has nominal ratio `1000/5` (`Kn = 200`). At a certain load the actual ratio `R = 201`. Ratio error?

- Ratio error `= (Kn − R)/R × 100 = (200 − 201)/201 × 100 = −0.498 ≈ −0.5%`.

**Example 2 — secondary current.**
A `500/5` CT carries `300 A` in the primary. Ideal secondary current?

- `Is = Ip × (Np/Ns) = Ip/Kn = 300/(500/5) = 300/100 = 3 A`.
- (Actual would be slightly less due to exciting current.)

> 🧠 **MEMORY HOOK** — "**CT: never open; PT: never short.**" Errors come from the **exciting current**; phase-angle error hits **power metering**.

### ⚠️ Common Traps

1. Open-circuiting a CT secondary (dangerous — always **short** it first).
2. Confusing CT (never open) with PT (never short).
3. Ignoring **phase-angle error** for energy/power metering.
4. Treating the actual ratio as exactly the turns ratio (exciting current shifts it).
5. Overloading the burden (raises errors).
6. Forgetting standard secondary is **5 A (or 1 A)**.

### 📝 Test — Current Transformer (8 Q)

1. A CT secondary standard current is: (a) 1 A or 5 A (b) 10 A (c) 100 A (d) 230 V.
2. A CT secondary must never be: (a) shorted (b) open-circuited (c) grounded (d) loaded.
3. CT ratio error arises mainly from: (a) burden voltage (b) exciting current (c) frequency (d) temperature only.
4. Phase-angle error of a CT is important for: (a) current only (b) power/energy metering (c) resistance (d) frequency.
5. Before disconnecting a meter, the CT secondary should be: (a) opened (b) short-circuited (c) left as is (d) reversed.
6. **(NAT)** A 800/5 CT carries 480 A primary. Ideal secondary current (A)?
7. **(NAT)** Nominal ratio Kn = 160, actual ratio R = 161. Ratio error (%, 2 dp)?
8. **(NAT)** A CT is rated 5 A secondary with a 10 VA burden. Secondary burden impedance (Ω)?

<details><summary>🔑 Solutions</summary>

**Q1 — (a) 1 A or 5 A.**

**Q2 — (b) open-circuited.**

**Q3 — (b) exciting current.**

**Q4 — (b) power/energy metering.**

**Q5 — (b) short-circuited.**

**Q6.** `Is = 480/(800/5) = 480/160 = 3 A`.

**Q7.** `(160 − 161)/161 × 100 = −0.62%`.

**Q8.** `VA = Is²·Z ⇒ Z = 10/5² = 10/25 = 0.4 Ω`.

</details>

---

## 🔧 Electrical Machines: Induction Motor IV — Speed Control, Double-Cage & Induction Generator

### 📖 Concept Deep Dive

**Speed control** of a 3-φ induction motor (`N = Ns(1−s)`, `Ns = 120f/P`):

**Stator-side methods:**
- **Stator voltage control** — torque ∝ V², so lowering V reduces torque/speed (limited range; used for fans with fan-load torque). Cheap but inefficient.
- **V/f (variable frequency) control** — vary supply **frequency** to change `Ns`, keeping **V/f constant** to maintain flux (avoid saturation at low f, and constant torque). The **standard modern method** via VFDs; wide smooth range.
- **Pole-changing** — change the number of stator poles (consequent poles / separate windings) → discrete speeds (used in cage motors).

**Rotor-side methods (wound rotor):**
- **Rotor-resistance control** — add external rotor resistance → increases slip at a given torque → lowers speed (but wastes energy as I²R; and reduces efficiency).
- **Slip-power recovery** (Kramer/Scherbius) — recover the rotor slip power instead of wasting it → efficient speed control below synchronous (Kramer) or above/below (Scherbius).

**Double-cage rotor** — two rotor cages: an **outer cage** (high resistance, low reactance — dominant at **start**, giving **high starting torque**) and an **inner cage** (low resistance, high reactance — dominant at **run**, giving good running efficiency). Combines high starting torque with efficient running (better than a single cage).

**Induction generator** — if an induction machine is driven **above synchronous speed** (negative slip, `s < 0`), it **feeds power back** to the grid, acting as a generator. It needs **reactive power/excitation** from the grid (or capacitors for **self-excited** standalone operation, e.g. wind/micro-hydro). No separate DC excitation; simple and robust.

> 💎 **KEY RESULT** — Speed control: **V/f (constant flux)** is the modern standard; pole-changing (discrete), stator-voltage (T∝V²), rotor-resistance & slip-power recovery (wound rotor). **Double-cage**: outer = high-R (start), inner = low-R (run). **Induction generator**: driven above Ns (s < 0), needs reactive excitation.

> ⚠️ **TRAP ALERT** — In **V/f control**, keep **V/f constant** to hold flux (constant torque); at high speed (above base) V is capped → field-weakening region. An **induction generator** runs at **negative slip (above synchronous)** and **draws reactive power** (needs capacitors if standalone).

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Speed | `N = Ns(1−s)`, `Ns = 120f/P` |
| V/f control | keep `V/f = constant` (constant flux) |
| Stator-voltage torque | `T ∝ V²` |
| Induction generator | `s < 0` (N > Ns), exports power |
| Double cage | outer high-R (start), inner low-R (run) |
| Slip-power recovery | Kramer/Scherbius (efficient) |

### 🧮 Solved Examples

**Example 1 — V/f control.**
A 4-pole motor on 50 Hz runs near 1440 rpm. To run near 720 rpm with constant flux, what supply frequency and (if rated 400 V/50 Hz) voltage?

- Half speed → about half frequency: `f ≈ 25 Hz` (Ns = 120×25/4 = 750, minus slip ≈ 720).
- Constant V/f: `V = (400/50) × 25 = 200 V`.

**Example 2 — induction generator slip.**
A 6-pole, 50 Hz induction machine is driven at 1050 rpm. Is it motoring or generating, and what is the slip?

- `Ns = 120×50/6 = 1000 rpm`. Speed 1050 > 1000 → **generating** (above synchronous).
- `s = (Ns − N)/Ns = (1000 − 1050)/1000 = −0.05` (negative slip, generator).

> 🧠 **MEMORY HOOK** — "**V/f keeps flux; double-cage = high-R outer for start, low-R inner for run; drive above Ns → generator (negative slip).**"

### ⚠️ Common Traps

1. Forgetting to keep **V/f constant** (flux changes → saturation/low torque).
2. Thinking rotor-resistance control is efficient (it **wastes** energy).
3. Swapping double-cage roles (outer = **high-R/start**).
4. Believing an induction generator needs no reactive power (it **does**).
5. Confusing negative slip (generator) with s > 1 (braking).
6. Using stator-voltage control for constant-torque loads (limited range).

### 📝 Test — Induction Motor IV (8 Q)

1. The modern standard IM speed-control method is: (a) rotor resistance (b) V/f (VFD) (c) stator voltage (d) pole-changing only.
2. In V/f control, we keep constant: (a) V (b) f (c) V/f (flux) (d) slip.
3. An induction machine generates when driven: (a) below Ns (b) above Ns (s<0) (c) at Ns (d) at s=1.
4. In a double-cage rotor, the outer cage is: (a) high-R (start) (b) low-R (run) (c) open (d) DC-fed.
5. Slip-power recovery schemes are: (a) Kramer/Scherbius (b) Ward-Leonard (c) Hopkinson (d) Swinburne.
6. **(NAT)** 4-pole, 50 Hz: synchronous speed (rpm)?
7. **(NAT)** 6-pole, 50 Hz machine driven at 1080 rpm. Slip (sign & value)?
8. **(NAT)** Rated 415 V/50 Hz; for V/f control at 30 Hz, applied voltage (V)?

<details><summary>🔑 Solutions</summary>

**Q1 — (b) V/f (VFD).**

**Q2 — (c) V/f.**

**Q3 — (b) above Ns.**

**Q4 — (a) high-R (start).**

**Q5 — (a) Kramer/Scherbius.**

**Q6.** `Ns = 120×50/4 = 1500 rpm`.

**Q7.** `Ns = 1000`; `s = (1000−1080)/1000 = −0.08` (negative → generating).

**Q8.** `V = (415/50)×30 = 8.3 × 30 = 249 V`.

</details>

---

## 🔧 Power Electronics: DC-DC Choppers II — Buck-Boost & Cuk

### 📖 Concept Deep Dive

Beyond buck and boost, converters that can step **up or down**:

**Buck-boost converter.** Output can be lower or higher than input, with **inverted polarity**:

```
Vo = −Vs·D/(1−D)      (magnitude); |Vo| < Vs for D<0.5, |Vo| > Vs for D>0.5
Is(avg)/Io = D/(1−D)   (input/output current relation)
```

- D < 0.5 → step-down; D = 0.5 → |Vo| = Vs; D > 0.5 → step-up. Output is **negative** w.r.t. input ground.
- The inductor is charged from the source when the switch is on, and discharges into the load (through the diode) when off — energy-transfer via the inductor.

**Cuk converter.** Uses a **capacitor as the main energy-transfer element** (plus two inductors); output is also **inverted**:

```
Vo = −Vs·D/(1−D)   (same ratio as buck-boost, but via a capacitor)
```

Advantages over buck-boost: **continuous input AND output current** (both inductors), so **lower ripple** on both sides — better EMI. Downsides: more components, the coupling capacitor carries high ripple current.

**SEPIC** (single-ended primary-inductance converter) — a related topology giving **non-inverted** step-up/down output (`Vo = Vs·D/(1−D)`, positive).

**Four-quadrant chopper (Class E).** Combines step-up/down with both voltage and current polarities — allows motoring and regenerative braking in both directions (used in DC drives). Classes A-E of choppers map to quadrants of the V-I plane (A: Q1; B: Q2; C: Q1+Q2; D: Q1+Q4; E: all four).

**SMPS regulators** — buck/boost/buck-boost/Cuk/flyback/forward topologies form the basis of switched-mode power supplies (high efficiency vs linear regulators).

> 💎 **KEY RESULT** — Buck-boost & Cuk: `Vo = −Vs·D/(1−D)` (**inverted**; step up or down about D = 0.5). **Cuk** transfers energy via a **capacitor**, giving **continuous input & output current** (low ripple). **SEPIC** = non-inverted version. Four-quadrant (Class E) chopper for full DC-drive control.

> ⚠️ **TRAP ALERT** — Buck-boost/Cuk outputs are **inverted (negative)**; **SEPIC** is non-inverted. `Vo = −Vs·D/(1−D)`: at **D = 0.5**, `|Vo| = Vs`. Cuk's advantage is **low input/output ripple** (capacitive transfer).

### 📐 Formula Sheet

| Converter | Output |
|---|---|
| Buck | `Vo = D·Vs` |
| Boost | `Vo = Vs/(1−D)` |
| Buck-boost | `Vo = −Vs·D/(1−D)` (inverted) |
| Cuk | `Vo = −Vs·D/(1−D)` (via capacitor, low ripple) |
| SEPIC | `Vo = Vs·D/(1−D)` (non-inverted) |
| Input/output current (buck-boost) | `Is/Io = D/(1−D)` |

### 🧮 Solved Examples

**Example 1 — buck-boost step-down.**
A buck-boost converter: `Vs = 30 V`, `D = 0.4`. Output voltage?

- `Vo = −Vs·D/(1−D) = −30 × 0.4/0.6 = −30 × 0.6667 = −20 V`.
- Magnitude 20 V < 30 V → step-down (with inverted polarity).

**Example 2 — buck-boost step-up.**
Same converter with `D = 0.75`. Output voltage?

- `Vo = −30 × 0.75/0.25 = −30 × 3 = −90 V`.
- Magnitude 90 V > 30 V → step-up (inverted). At D=0.5 it would be exactly −30 V.

> 🧠 **MEMORY HOOK** — "**Buck-boost & Cuk: −DVs/(1−D), flip at D=0.5.**" Cuk = capacitor transfer → low ripple; SEPIC = same ratio but **positive** output.

### ⚠️ Common Traps

1. Forgetting the **negative (inverted)** output of buck-boost/Cuk.
2. Using boost/buck formula for a buck-boost.
3. Thinking Cuk uses an inductor as the main transfer element (it's a **capacitor**).
4. Confusing SEPIC (non-inverted) with buck-boost (inverted).
5. Missing that |Vo| = Vs at **D = 0.5**.
6. Ignoring Cuk's low-ripple (continuous current) advantage.

### 📝 Test — Choppers II (8 Q)

1. The buck-boost output voltage is: (a) DVs (b) Vs/(1−D) (c) −Vs·D/(1−D) (d) Vs(1−D).
2. Buck-boost output polarity is: (a) same as input (b) inverted (c) zero (d) AC.
3. At D = 0.5, buck-boost |Vo| equals: (a) 0 (b) Vs (c) 2Vs (d) Vs/2.
4. The Cuk converter's main energy-transfer element is a: (a) resistor (b) capacitor (c) transformer (d) diode.
5. A non-inverting step-up/down converter is the: (a) buck-boost (b) Cuk (c) SEPIC (d) boost.
6. **(NAT)** Buck-boost: Vs = 48 V, D = 0.6. Output magnitude (V)?
7. **(NAT)** Buck-boost: Vs = 20 V, D = 0.25. Output magnitude (V, 2 dp)?
8. **(NAT)** Buck-boost needs |Vo| = Vs. Required duty ratio?

<details><summary>🔑 Solutions</summary>

**Q1 — (c).** `−Vs·D/(1−D)`.

**Q2 — (b) inverted.**

**Q3 — (b) Vs.**

**Q4 — (b) capacitor.**

**Q5 — (c) SEPIC.**

**Q6.** `|Vo| = 48 × 0.6/0.4 = 48 × 1.5 = 72 V`.

**Q7.** `|Vo| = 20 × 0.25/0.75 = 20 × 0.3333 = 6.67 V`.

**Q8.** `D/(1−D) = 1 ⇒ D = 0.5`.

</details>

---

> 🧠 **DAY-55 WRAP (Round-3 pass 13)** — **CT:** 5A/1A secondary, **never open** (short before disconnect), errors from exciting current. **Induction motor:** V/f (constant flux) standard, double-cage (outer high-R start), induction generator (s<0, needs reactive Q). **Choppers:** buck-boost/Cuk `−DVs/(1−D)` (inverted), Cuk = low ripple, SEPIC non-inverted. ⚡

**🔁 Round-3 progress:** Measurements ▓▓▓▓▓▓▓▓▓▓ · Machines ▓▓▓▓▓▓▓▓▓▓ · Power Electronics ▓▓▓▓▓▓▓▓▓▓ — round-3 near completion (13/~21 revised). 🎓 Power Systems joins as a 4th subject once the reference PDFs arrive.
