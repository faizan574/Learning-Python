# ⚡ GATE Technical Revision — Day 5 (2026-07-22)

*Three subjects, one lesson — the moving-coil meter, the transformer, and the power switch that runs the modern grid.*

`📅 Tech Day 5  ·  ⏱ ~45 min  ·  🎯 Measurements + Machines + Power Electronics`

Attempt each section's test **before** opening its solutions — recall beats re-reading.

---

## 🔧 Measuring Instruments: PMMC Instruments & Range Extension

The **Permanent Magnet Moving Coil (PMMC)** movement is the galvanometer (Day 4) turned into a practical DC ammeter/voltmeter. GATE's staple here is the **shunt/multiplier numerical** and the **Ayrton shunt**.

### 📖 Concept Deep Dive

A coil of `N` turns, area `A`, in a radial field `B`, carries current `Iₘ`; a spring gives control `K`. As in the galvanometer:
$$T_d = NBAI_m = T_c = K\theta \;\Rightarrow\; \theta = \frac{NBA}{K}I_m$$

**Key properties:**
- **Uniform scale** (radial field), **DC only** (on AC the average torque is zero → reads zero), **polarity-sensitive**, high torque/weight ratio, very **efficient** (low power).
- Errors: weakening of magnet, spring fatigue, temperature (changes coil resistance).

**Temperature error & swamping:** the copper coil's resistance rises with temperature. A **swamping resistance** (manganin, low temperature-coefficient) in series — typically making the total `≈ 20–30×` the coil resistance — dilutes the copper's variation, stabilising readings.

**Ammeter — shunt:** the movement carries only `Iₘ` (full-scale, e.g. µA–mA). To read `I`, a **shunt** `Rₛ` diverts the rest. With coil resistance `Rₘ`:
$$I_s R_s = I_m R_m,\quad I = I_m + I_s$$
$$\boxed{R_s = \frac{I_m R_m}{I - I_m}} ,\qquad \text{multiplying power } m=\frac{I}{I_m}=1+\frac{R_m}{R_s}$$

**Voltmeter — multiplier:** a **series** resistance `R_{se}` drops the extra voltage:
$$V = I_m(R_m + R_{se}) \;\Rightarrow\; R_{se} = \frac{V}{I_m} - R_m,\quad m=\frac{V}{V_m}=1+\frac{R_{se}}{R_m}$$
Voltmeter **sensitivity** `= 1/I_m` ohms/volt (e.g. `I_m = 50 µA → 20 kΩ/V`).

**Ayrton (universal) shunt:** a tapped shunt giving several ranges with **no risk of the movement being unprotected** while switching — a make-before-break design.

> 💎 **KEY RESULT** — Ammeter shunt `R_s = I_m R_m /(I − I_m)`; voltmeter multiplier `R_{se} = V/I_m − R_m`. Everything else is these two.

> 🧠 **MEMORY HOOK** — "Shunt for **A**mmeter (parallel), Series multiplier for **V**oltmeter" — **A**‖, **V**–series.

> ⚠️ **TRAP ALERT** — PMMC on **AC reads zero** (average torque = 0), not the RMS. And sensitivity (Ω/V) depends only on `I_m`, not on the range.

### 📐 Formula Sheet

| Formula | Meaning |
|---|---|
| `θ = NBA·Iₘ/K` | deflection |
| `R_s = Iₘ Rₘ/(I−Iₘ)` | ammeter shunt |
| `m = 1 + Rₘ/R_s` | ammeter multiplying power |
| `R_se = V/Iₘ − Rₘ` | voltmeter multiplier |
| `Sensitivity = 1/Iₘ` (Ω/V) | voltmeter |

### 🧮 Solved Example

A movement reads full-scale at `Iₘ = 1 mA`, `Rₘ = 100 Ω`. (a) Shunt for `1 A` range; (b) multiplier for `100 V` range.

- (a) `R_s = (1m×100)/(1−0.001) = 0.1/0.999 ≈ 0.1001 Ω`
- (b) `R_se = 100/0.001 − 100 = 100000 − 100 = 99,900 Ω`

### ⚠️ Common Traps
- PMMC = DC only; on AC → zero, not RMS.
- Shunt (parallel) extends **current**; multiplier (series) extends **voltage** — don't swap.
- Sensitivity in Ω/V is `1/Iₘ`, independent of the selected range.
- Include `Rₘ` when subtracting for the multiplier — forgetting it is the classic slip.

#### 📝 Test

**Q1.** A PMMC instrument connected to a pure AC source reads:
- A) RMS value  B) Average value  C) Zero  D) Peak value

**Q2.** A shunt is used to convert a movement into an:
- A) Voltmeter  B) Ammeter  C) Wattmeter  D) Ohmmeter

**Q3.** Voltmeter sensitivity (Ω/V) equals:
- A) Iₘ  B) 1/Iₘ  C) Rₘ  D) Iₘ·Rₘ

**Q4.** Swamping resistance is made of manganin to:
- A) Increase sensitivity  B) Reduce temperature error  C) Provide damping  D) Extend range

**Q5.** The Ayrton shunt is preferred because it:
- A) Is cheaper  B) Protects the movement while switching ranges  C) Works on AC  D) Needs no coil

**Q6. (NAT)** Movement: `Iₘ = 2 mA`, `Rₘ = 50 Ω`. Shunt resistance for a `2 A` ammeter is ______ Ω (3 decimals).

**Q7. (NAT)** For `Iₘ = 50 µA`, the voltmeter sensitivity is ______ kΩ/V.

**Q8. (NAT)** Movement `Iₘ = 1 mA`, `Rₘ = 200 Ω`. Multiplier for a `10 V` range is ______ Ω.

<details><summary>🔑 Solutions</summary>

**Q1: C** — Average torque on AC is zero. **Q2: B** — Shunt → ammeter. **Q3: B** — 1/Iₘ. **Q4: B** — Low-temp-coefficient manganin dilutes copper's variation. **Q5: B** — Make-before-break protection.

**Q6:** `R_s = (2m×50)/(2−0.002) = 0.1/1.998 = 0.050 Ω`.
**Q7:** `1/50µA = 20,000 Ω/V = 20 kΩ/V`.
**Q8:** `R_se = 10/0.001 − 200 = 10000 − 200 = 9,800 Ω`.

</details>

---

## 🔧 Electrical Machines: Transformers I — Single-Phase Fundamentals

The transformer is the most-tested machine in GATE. Today: the EMF equation, ideal behaviour, and the no-load story.

### 📖 Concept Deep Dive

A transformer transfers energy between two magnetically-coupled windings via a **mutual flux** in a laminated core — **no moving parts**, so no rotational losses.

**EMF equation.** Sinusoidal flux `φ = φ_m sin ωt` links `N` turns; induced emf `e = −N dφ/dt`. Its RMS:
$$\boxed{E = 4.44\, f\, N\, \phi_m = 4.44\, f\, N\, B_m A_{core}}$$
Derivation: `e = −Nφ_mω cos ωt`, peak `= Nωφ_m = 2πfNφ_m`; RMS `= 2πfNφ_m/√2 = 4.44 fNφ_m`.

**Turns ratio.** For primary/secondary:
$$\frac{E_1}{E_2} = \frac{N_1}{N_2} = a,\qquad \frac{I_1}{I_2} = \frac{1}{a}\;(\text{ideal, MMF balance})$$
Since both windings see the **same core flux and frequency**, `E_1/N_1 = E_2/N_2 = 4.44 fφ_m` (**volts per turn is constant**).

**Ideal vs practical:**

| Aspect | Ideal | Practical |
|---|---|---|
| Winding resistance | 0 | `R_1, R_2` (copper loss) |
| Leakage flux | 0 | `X_1, X_2` |
| Core | infinite µ, no loss | finite µ, hysteresis + eddy loss |
| No-load current | 0 | `I_0` (small) |

**No-load operation.** With secondary open, primary draws `I_0`, resolved into:
- **Magnetising component** `I_μ = I_0 sinφ_0` — sets up the flux (lags `V` by 90°).
- **Core-loss (working) component** `I_w = I_0 cosφ_0` — supplies hysteresis + eddy losses (in phase with `V`).
$$I_0=\sqrt{I_\mu^2+I_w^2},\quad \cos\phi_0=\frac{I_w}{I_0},\quad P_{core}=V_1 I_0\cos\phi_0$$

> 💎 **KEY RESULT** — `E = 4.44 fNφ_m`. Since `φ_m = V/(4.44fN)`, holding `V/f` constant keeps flux (and core saturation) constant — the basis of V/f control later.

> 🧠 **MEMORY HOOK** — "**4.44**" = `2π/√2`. Flux ∝ `V/f`; raise `f` at fixed `V` → flux **falls**.

> ⚠️ **TRAP ALERT** — No-load current is **not** the core loss; `I_0` has two parts — only `I_w` (in-phase) carries the core loss. And leakage reactance ≠ magnetising reactance.

### 📐 Formula Sheet

| Formula | Meaning |
|---|---|
| `E = 4.44 fNφ_m` | EMF equation |
| `a = N₁/N₂ = E₁/E₂ = I₂/I₁` | turns ratio |
| `φ_m = V/(4.44 fN)` | peak flux |
| `I₀ = √(I_μ² + I_w²)` | no-load current |
| `P_core = V₁I₀cosφ₀` | core loss |

### 🧮 Solved Example

A `250/125 V`, `50 Hz` transformer has `N_1 = 200`. Find `N_2`, volts/turn, and `φ_m`.

- `a = 250/125 = 2` → `N_2 = N_1/a = 100`.
- Volts/turn `= 250/200 = 1.25 V/turn`.
- `φ_m = V/(4.44fN) = 250/(4.44×50×200) = 250/44400 ≈ 5.63 mWb`.

### ⚠️ Common Traps
- `E = 4.44 fNφ_m` uses **φ_m** (peak flux), not RMS or average.
- Flux ∝ `V/f` — increasing frequency at constant voltage **reduces** flux.
- No-load current is small but its **core-loss part** is what dissipates power.
- Turns ratio inverts for current: `I_1/I_2 = N_2/N_1`.

#### 📝 Test

**Q1.** In the EMF equation `E = 4.44 fNφ_m`, `φ_m` is the:
- A) RMS flux  B) Average flux  C) Peak flux  D) Flux linkage

**Q2.** If supply frequency rises at constant voltage, the core flux:
- A) Rises  B) Falls  C) Unchanged  D) Doubles

**Q3.** The core-loss component of no-load current is:
- A) In quadrature with V  B) In phase with V  C) In phase with flux  D) Zero

**Q4.** Volts per turn in a transformer is:
- A) Different for each winding  B) Same for both windings  C) Zero at no load  D) Proportional to load

**Q5.** A transformer cannot operate on DC because:
- A) Windings burn  B) No changing flux → no induced emf  C) Core saturates instantly always  D) Turns ratio fails

**Q6. (NAT)** A `50 Hz` transformer has `N = 500`, `φ_m = 4 mWb`. The induced EMF is ______ V.

**Q7. (NAT)** `I₀ = 0.5 A` at `cosφ₀ = 0.2`. The magnetising component I_μ is ______ A (2 decimals).

**Q8. (NAT)** `1100/220 V` transformer, `N₂ = 40`. `N₁` is ______ turns.

<details><summary>🔑 Solutions</summary>

**Q1: C** — Peak flux φ_m. **Q2: B** — φ ∝ V/f, so flux falls. **Q3: B** — I_w is in phase with V. **Q4: B** — E/N is common to both windings. **Q5: B** — Constant DC flux induces no emf.

**Q6:** `E = 4.44×50×500×0.004 = 444 V`.
**Q7:** `I_μ = I₀ sinφ₀ = 0.5×√(1−0.04) = 0.5×0.98 = 0.49 A`.
**Q8:** `a = 1100/220 = 5` → `N₁ = 5×40 = 200`.

</details>

---

## 🔧 Power Electronics: Basics & Power Semiconductor Devices

Power electronics = controlled conversion of electrical power using **semiconductor switches**. Today's foundation: the device family, their characteristics, and the ideal-switch idea.

### 📖 Concept Deep Dive

A power converter processes power by switching devices **fully ON (small drop)** or **fully OFF (small leakage)** — never in the linear region, to minimise loss. The **ideal switch**: zero on-drop, zero off-current, instant switching, no power loss.

**The device family:**

| Device | Control | Conduction | Turn-off | Typical use |
|---|---|---|---|---|
| **Power diode** | Uncontrolled | 1-quadrant | Reverse bias (natural) | Rectifiers, freewheeling |
| **Thyristor (SCR)** | Turn-**on** only (gate) | Latches ON | Needs commutation | Phase-controlled rectifiers, high power |
| **TRIAC** | Gate | Bidirectional | Natural (AC) | AC voltage control |
| **GTO** | Gate on **and** off | Latching | Gate negative pulse | High-power inverters |
| **Power BJT** | Base current | Continuous | Remove base drive | (Legacy) |
| **Power MOSFET** | Gate **voltage** | Continuous | Remove gate voltage | High-freq, low-mid power |
| **IGBT** | Gate voltage | Continuous | Remove gate voltage | The workhorse — drives, inverters |

**Classification:**
- **Uncontrolled**: diode.
- **Semi-controlled** (turn-on only): SCR, TRIAC.
- **Fully controlled** (turn-on and off): BJT, MOSFET, IGBT, GTO.

**Switching characteristics:** real devices have finite **turn-on/turn-off times** and thus **switching losses** (∝ frequency). Conduction loss ∝ on-drop × current.
- **MOSFET**: voltage-controlled, **majority carrier** (no minority storage), **very fast**, positive temperature-coefficient of `R_DS(on)` (easy paralleling), best at **high frequency / lower voltage**.
- **IGBT**: MOS gate + BJT-like conduction → low on-drop at **high voltage/current**, moderate speed — dominates motor drives and inverters.
- **Thyristor**: highest power handling, but only gate-**on**; turning it off needs the current to fall below **holding current** (commutation).

> 💎 **KEY RESULT** — Switches are grouped by controllability: **uncontrolled (diode)** → **semi-controlled (SCR/TRIAC, on-only)** → **fully controlled (MOSFET/IGBT/GTO/BJT, on & off)**. This dictates which converter each can build.

> 🧠 **MEMORY HOOK** — "**MOSFET = fast & light, IGBT = heavy-duty, SCR = king of power but needs help to switch off.**"

> ⚠️ **TRAP ALERT** — MOSFET/IGBT are **voltage-controlled** (gate voltage); BJT is **current-controlled** (base current). And an SCR **cannot** be turned off by the gate — a very common wrong assumption.

### 📐 Formula Sheet

| Quantity | Relation |
|---|---|
| Ideal switch loss | `0` (on: V=0; off: I=0) |
| Conduction loss | `≈ V_on · I_avg` |
| Switching loss | `∝ f_sw · (E_on + E_off)` |
| Duty ratio | `D = t_on/T` |
| MOSFET on-loss | `I² · R_DS(on)` |

### 🧮 Solved Example

An IGBT carries `I = 20 A` with on-state drop `V_CE(sat) = 2 V`, switching at `f = 10 kHz` with `E_on + E_off = 3 mJ` per cycle. Estimate total loss.

- Conduction loss `≈ 2 × 20 = 40 W` (approx, if on most of the cycle).
- Switching loss `= f(E_on+E_off) = 10000 × 3×10⁻³ = 30 W`.
- **Total ≈ 70 W** (conduction + switching).

### ⚠️ Common Traps
- SCR/TRIAC are **turn-on only**; only fully-controlled devices switch off via the gate.
- MOSFET is **voltage-controlled majority-carrier** (fast); BJT is current-controlled.
- Switching loss rises with **frequency**; conduction loss does not.
- IGBT wins at **high voltage**, MOSFET at **high frequency / lower voltage**.

#### 📝 Test

**Q1.** Which device can be turned OFF by its gate?
- A) SCR  B) Diode  C) GTO  D) TRIAC

**Q2.** A power MOSFET is:
- A) Current-controlled  B) Voltage-controlled  C) Uncontrolled  D) Light-controlled

**Q3.** The workhorse device for medium-voltage motor drives is the:
- A) Power diode  B) IGBT  C) SCR  D) DIAC

**Q4.** Switching loss in a device is proportional to:
- A) On-state drop only  B) Switching frequency  C) Reverse leakage  D) Turns ratio

**Q5.** A device that conducts in both directions and is gate-triggered is the:
- A) SCR  B) TRIAC  C) IGBT  D) MOSFET

**Q6. (NAT)** A MOSFET with `R_DS(on) = 0.05 Ω` carries `10 A`. Conduction loss is ______ W.

**Q7. (NAT)** Device switches at `20 kHz`; energy per switching cycle `= 2 mJ`. Switching loss is ______ W.

**Q8. (NAT)** A chopper switch is ON for `30 µs` out of a `50 µs` period. Duty ratio D is ______.

<details><summary>🔑 Solutions</summary>

**Q1: C** — GTO (Gate Turn-Off) switches off via a negative gate pulse; SCR/TRIAC/diode cannot. **Q2: B** — Gate voltage controls it. **Q3: B** — IGBT. **Q4: B** — Proportional to switching frequency. **Q5: B** — TRIAC.

**Q6:** `P = I²R = 10²×0.05 = 5 W`.
**Q7:** `P = f×E = 20000×2×10⁻³ = 40 W`.
**Q8:** `D = 30/50 = 0.6`.

</details>

---

*Three subjects moving together — the meter, the transformer, the switch. This is how a whole syllabus falls in a month.* 💪

`🟩🟩🟩🟩🟩⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜` Measurements **5/21**
`🟩⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜` Machines **1/19**
`🟩⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜` Power Electronics **1/19**

<!-- email formatting revised: LaTeX now rendered as readable plain text -->
