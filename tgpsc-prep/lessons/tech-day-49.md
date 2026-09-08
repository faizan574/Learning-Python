# ⚡ GATE Technical Revision — Day 49 (2026-09-08)

*Round-3 pass 7 — the electrodynamometer, DC generator characteristics, and single-phase controlled rectifiers. The workhorse topics.*

📅 Tech Day 49 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics · 🔁 Round-3 pass 7

> 🧠 **MEMORY HOOK** — Today: the **EMMC** (the transfer instrument & wattmeter), **DC generator** types & voltage build-up, and the **1-φ half-wave / half-controlled rectifier** (average output vs firing angle). Core GATE bread-and-butter.

---

## 🔧 Measuring Instruments: Electrodynamometer (EMMC) Instruments

### 📖 Concept Deep Dive

An **electrodynamometer (EMMC)** replaces the PMMC's permanent magnet with **fixed coils** carrying current, so both the field and the moving-coil currents are supplied electrically. The torque depends on the **product of the two currents** and the rate of change of **mutual inductance** `M` between fixed and moving coils.

**Torque equation.** Instantaneous torque `= i1·i2·(dM/dθ)`. For:
- **DC:** `Td = I1·I2·(dM/dθ)`, balanced by `K·θ` → `θ = (I1I2/K)(dM/dθ)`.
- **AC (same current in both, as ammeter):** the deflection depends on the **mean of i²**, i.e. `θ ∝ Irms²·(dM/dθ)` → **square-law**, reads **RMS**.

**As a wattmeter** (the most important use): the **fixed (current) coils** carry the load current `I`, the **moving (pressure/voltage) coil** carries a current `∝ V`. The average deflection:

```
θ ∝ (average of v·i) = V·I·cosφ = active power P
Wattmeter reading = V·I·cosφ  (with a near-uniform scale for power)
```

So the electrodynamometer wattmeter reads **true (active) power** for any waveform/pf — its key strength. Because it reads correctly on both AC and DC and can be calibrated on DC and used on AC, it is called a **transfer instrument** (a transfer standard between AC and DC).

**Errors:**
- **Pressure-coil (PC) inductance** — the PC current lags V slightly, causing an error dependent on pf (worse at low pf); compensated with a capacitor across part of the PC resistance.
- **PC/CC connection error** — two ways to connect; one includes PC current in CC (error `= V²/Rpc`), the other includes CC voltage drop in PC reading (error `= I²·Rcc`). Choose the connection to minimise error (PC across load for large loads).
- **Eddy currents, stray fields** (weak field → shielding), **temperature**.

**Low-power-factor (LPF) wattmeter** — a modified electrodynamometer with a low-current pressure coil and compensation, for accurate reading at **low pf** (where a normal wattmeter reads a tiny, error-prone deflection).

> 💎 **KEY RESULT** — EMMC torque `= i1·i2·(dM/dθ)`. As **ammeter/voltmeter** → square-law, RMS. As **wattmeter** → reads `V·I·cosφ` (active power), **transfer instrument** (AC=DC calibration). PC-inductance error worsens at **low pf**.

> ⚠️ **TRAP ALERT** — The electrodynamometer is the **wattmeter/transfer** instrument (reads true power, RMS on AC/DC). Its scale as an ammeter is **square-law** (like MI), but as a **wattmeter** it is essentially **uniform** in power.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Torque (general) | `Td = i1·i2·(dM/dθ)` |
| As ammeter (AC) | `θ ∝ Irms²·(dM/dθ)` (square-law, RMS) |
| As wattmeter | `reading = V·I·cosφ = P` |
| PC-across-load error | `≈ I²·Rcc` (CC drop counted) |
| CC-includes-PC error | `≈ V²/Rpc` (PC current counted) |
| LPF wattmeter | compensated for accurate low-pf reading |

### 🧮 Solved Examples

**Example 1 — wattmeter reading & connection error.**
A wattmeter reads with the pressure coil connected across the load. Load: `V = 200 V`, `I = 5 A`, pf `= 0.8`. `Rcc = 0.1 Ω` (current-coil resistance). True load power and the connection error?

- True load power `P = VI·cosφ = 200 × 5 × 0.8 = 800 W`.
- With PC across the load, the CC carries load current, so the wattmeter also measures the **CC power loss** = `I²·Rcc = 25 × 0.1 = 2.5 W`.
- Wattmeter reads `≈ 800 + 2.5 = 802.5 W` (error +2.5 W).

**Example 2 — square-law as ammeter.**
An EMMC ammeter reads full scale (100 div) at 2 A. Deflection at 1.2 A?

- `θ ∝ I²`: `θ = 100 × (1.2/2)² = 100 × 0.36 = 36 div`.

> 🧠 **MEMORY HOOK** — "**EMMC = product of two currents.**" With both currents equal → square-law ammeter (RMS). With one ∝ V, one = I → wattmeter reading `VI·cosφ`.

### ⚠️ Common Traps

1. Thinking the wattmeter reads apparent power — it reads **active power** `VI·cosφ`.
2. Forgetting EMMC is a **transfer** instrument (AC=DC).
3. Ignoring **PC-inductance** error at **low pf** (needs LPF wattmeter).
4. Mixing the two wattmeter connections/errors (`I²Rcc` vs `V²/Rpc`).
5. Assuming a linear ammeter scale (it's **square-law**).
6. Neglecting stray-field shielding (weak operating field).

### 📝 Test — Electrodynamometer (8 Q)

1. The electrodynamometer torque depends on: (a) i1 only (b) i1·i2·(dM/dθ) (c) B·I (d) K·θ.
2. As an ammeter, its scale is: (a) linear (b) square-law (c) logarithmic (d) hyperbolic.
3. Its most important use is as a: (a) frequency meter (b) wattmeter (c) ohmmeter (d) galvanometer.
4. It is called a transfer instrument because it: (a) transfers heat (b) is calibrated on DC and used on AC (c) transfers current (d) has a transformer.
5. Pressure-coil inductance error is worst at: (a) unity pf (b) low pf (c) high frequency only (d) DC.
6. **(NAT)** Wattmeter: V = 250 V, I = 4 A, pf = 0.9. True power (W)?
7. **(NAT)** PC across load; I = 10 A, Rcc = 0.2 Ω. Connection error (W)?
8. **(NAT)** EMMC ammeter reads 80 div at 4 A. Deflection (div) at 2 A?

<details><summary>🔑 Solutions</summary>

**Q1 — (b).** `i1·i2·(dM/dθ)`.

**Q2 — (b) square-law.**

**Q3 — (b) wattmeter.**

**Q4 — (b).** DC calibration valid on AC.

**Q5 — (b) low pf.**

**Q6.** `P = 250 × 4 × 0.9 = 900 W`.

**Q7.** `I²Rcc = 100 × 0.2 = 20 W`.

**Q8.** `θ = 80 × (2/4)² = 80 × 0.25 = 20 div`.

</details>

---

## 🔧 Electrical Machines: DC Generators — Types, Characteristics & Build-up

### 📖 Concept Deep Dive

A **DC generator** converts mechanical to electrical energy; `E = PφZN/60A`. Types by **field excitation**:

- **Separately excited** — field from an external DC source.
- **Self-excited** — field from the generator's own output:
  - **Shunt** — field winding (many turns, thin wire) in **parallel** with armature; `Ish = V/Rsh`, `Ia = IL + Ish`.
  - **Series** — field (few turns, thick wire) in **series**; `Ia = Ise = IL`.
  - **Compound** — both shunt & series fields (**cumulative** aiding, or **differential** opposing); **long-shunt** vs **short-shunt** connection.

**Voltage build-up (self-excited shunt).** Requires: (1) **residual magnetism** in the poles, (2) field connected so its MMF **aids** the residual flux, and (3) field-circuit resistance **below the critical resistance**. The **Open-Circuit Characteristic (OCC)** — `E` vs `If` at constant speed — is the magnetisation curve. The generator builds up until the OCC meets the **field-resistance line**.
- **Critical field resistance `Rc`** = slope of the field line tangent to the initial (linear) part of the OCC. If `Rf > Rc`, the machine **fails to build up**.
- **Critical speed** = the speed at which the given field resistance line becomes tangent to the OCC — below it, no build-up.

**Characteristics.**
- **OCC / magnetisation** — `E0` vs `If` (starts at residual voltage, saturates).
- **Internal** — `E` vs `Ia` (generated EMF after armature reaction, before terminal drop).
- **External** — `V` vs `IL` (terminal voltage falls with load due to armature-reaction drop and `Ia·Ra`); **series** generators rise then fall; **cumulative compound** can be made **flat/level or over-compounded** (V roughly constant/rising with load).

> 💎 **KEY RESULT** — Self-excited build-up needs **residual magnetism + aiding field + Rf < Rc**. **Critical resistance** = tangent slope to OCC's linear part. Shunt: `Ia = IL + V/Rsh`; series: `Ia = IL`. **Cumulative compound** → level/over-compounded external characteristic.

> ⚠️ **TRAP ALERT** — A self-excited generator **won't build up** if there's no residual magnetism, if the field is reversed (opposes residual), or if `Rf > Rc` / speed < critical speed. **Differential** compound weakens with load (drooping); **cumulative** supports voltage.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Generated EMF | `E = PφZN/60A` |
| Shunt: currents | `Ish = V/Rsh` ; `Ia = IL + Ish` |
| Series: current | `Ia = Ise = IL` |
| Terminal voltage | `V = E − Ia·Ra (− brush drop)` |
| Critical resistance | slope of tangent to OCC linear region |
| Long/short shunt | shunt across (armature+series) / across armature only |

### 🧮 Solved Examples

**Example 1 — shunt generator currents.**
A shunt generator supplies `IL = 50 A` at `V = 220 V`. Field resistance `Rsh = 110 Ω`, armature resistance `Ra = 0.1 Ω`. Find `Ia` and generated EMF `E` (ignore brush drop).

- `Ish = V/Rsh = 220/110 = 2 A`.
- `Ia = IL + Ish = 50 + 2 = 52 A`.
- `E = V + Ia·Ra = 220 + 52 × 0.1 = 220 + 5.2 = 225.2 V`.

**Example 2 — critical resistance idea.**
The OCC's initial straight-line portion gives `E0 = 50 V` at `If = 0.5 A`. Estimate the critical field resistance.

- Critical resistance `≈ E0/If` on the tangent = `50/0.5 = 100 Ω`.
- If the field-circuit resistance exceeds ~`100 Ω`, the generator won't build up.

> 🧠 **MEMORY HOOK** — "**No residual, no build-up.**" And the field line must sit **below** the OCC tangent (`Rf < Rc`) for voltage to build.

### ⚠️ Common Traps

1. Forgetting **residual magnetism** as a build-up condition.
2. Using `E = V − IaRa` for a **generator** (it's `E = V + IaRa`).
3. Confusing **long-shunt** and **short-shunt** compound connections.
4. Thinking any field resistance works — must be **below critical**.
5. Mixing **cumulative** (aiding, supports V) vs **differential** (opposing, droops).
6. Ignoring **critical speed** (build-up also fails below it).

### 📝 Test — DC Generators (8 Q)

1. For a DC generator, `E = V + IaRa` because: (a) it absorbs power (b) it supplies IaRa drop internally (c) Ra = 0 (d) V > E always false.
2. Self-excitation build-up needs: (a) no residual flux (b) residual flux + aiding field + Rf<Rc (c) very high Rf (d) reversed field.
3. In a shunt generator, `Ia` equals: (a) IL (b) IL + Ish (c) IL − Ish (d) Ish.
4. Critical resistance is the field resistance at which the machine: (a) over-excites (b) just fails to build up (c) saturates (d) short-circuits.
5. A cumulative compound generator's external characteristic can be: (a) always drooping (b) level/over-compounded (c) zero (d) negative.
6. **(NAT)** Shunt gen: V = 250 V, Rsh = 125 Ω, IL = 40 A. Armature current Ia (A)?
7. **(NAT)** For Q6, Ra = 0.2 Ω. Generated EMF E (V)?
8. **(NAT)** OCC tangent: 60 V at If = 0.4 A. Critical field resistance (Ω)?

<details><summary>🔑 Solutions</summary>

**Q1 — (b).** Generator EMF exceeds terminal V by the internal drop.

**Q2 — (b).** Residual + aiding + Rf < Rc.

**Q3 — (b).** `Ia = IL + Ish`.

**Q4 — (b).** Just fails to build up.

**Q5 — (b).** Level or over-compounded.

**Q6.** `Ish = 250/125 = 2 A`; `Ia = 40 + 2 = 42 A`.

**Q7.** `E = V + IaRa = 250 + 42×0.2 = 250 + 8.4 = 258.4 V`.

**Q8.** `Rc ≈ 60/0.4 = 150 Ω`.

</details>

---

## 🔧 Power Electronics: 1-φ Half-Wave & Half-Controlled Rectifiers

### 📖 Concept Deep Dive

**Single-phase half-wave controlled rectifier (one SCR, R load).** The SCR conducts from firing angle `α` to `π` each positive half-cycle:

```
Average output   Vo = (Vm/2π)(1 + cosα)
RMS output       Vrms = (Vm/2)·√( (1/π)(π − α + (sin2α)/2) )
```

At `α = 0` it reduces to the uncontrolled half-wave `Vo = Vm/π`. Half-wave has high ripple, DC in the supply, and poor utilisation — mainly of academic interest.

**Effect of load:**
- **R load** — current follows voltage; conduction `α` to `π`.
- **RL load** — inductance prolongs conduction **beyond π** (current continues while `L` discharges), reducing average output; a **freewheeling diode (FWD)** across the load returns conduction to `0`-to-`π` behaviour and raises `Vo`.
- **RLE load** (motor/battery) — conduction only while instantaneous source > E.

**Single-phase semiconverter (half-controlled full-wave bridge).** Two SCRs + two diodes (or 2 SCR + 2 diode bridge). It has an **inherent freewheeling** action (the load current freewheels through a diode when the source reverses), so output cannot go negative — it operates in **one quadrant** (rectifier only, no inversion):

```
Average output (semiconverter, continuous):  Vo = (Vm/π)(1 + cosα)
Range: α = 0 → Vo = 2Vm/π (max);  α = π → Vo = 0
```

Contrast with the **full converter** (four SCRs), where `Vo = (2Vm/π)cosα` and output can go **negative** (α > 90°) → **two-quadrant** (rectifier + inverter) operation. The semiconverter's freewheeling gives **better input power factor** than the full converter at high firing angles, but it cannot invert.

> 💎 **KEY RESULT** — Half-wave (R): `Vo = (Vm/2π)(1 + cosα)`. **Semiconverter:** `Vo = (Vm/π)(1 + cosα)` (0 to 2Vm/π, one-quadrant, inherent freewheeling). **Full converter:** `Vo = (2Vm/π)cosα` (two-quadrant). FWD improves output & pf on RL loads.

> ⚠️ **TRAP ALERT** — **Semiconverter** `(Vm/π)(1+cosα)` cannot go negative (no inversion); **full converter** `(2Vm/π)cosα` can (α>90° → inverter). Don't use the full-converter formula for a semiconverter.

### 📐 Formula Sheet

| Converter (1-φ) | Average output Vo |
|---|---|
| Half-wave, R load | `(Vm/2π)(1 + cosα)` |
| Uncontrolled half-wave | `Vm/π` (α = 0) |
| Semiconverter (half-controlled) | `(Vm/π)(1 + cosα)` |
| Full converter | `(2Vm/π)cosα` |
| Uncontrolled full-wave | `2Vm/π` |
| FWD role (RL load) | restores 0→π conduction, raises Vo |

*(Vm = peak source voltage = √2·Vrms.)*

### 🧮 Solved Examples

**Example 1 — semiconverter output.**
A 1-φ semiconverter runs off `230 V` RMS at firing angle `α = 60°`. Average output voltage?

- `Vm = √2 × 230 = 325.3 V`.
- `Vo = (Vm/π)(1 + cosα) = (325.3/π)(1 + cos60°) = (325.3/3.1416)(1 + 0.5) = 103.5 × 1.5 = 155.3 V`.

**Example 2 — half-wave vs full converter.**
For `Vm = 100 V`, compare average output of a half-wave controlled (R) and a full converter, both at `α = 0`.

- Half-wave: `Vo = (Vm/2π)(1+cos0) = (100/6.283)(2) = 15.92 × 2 = 31.83 V` (= Vm/π ✓).
- Full converter: `Vo = (2Vm/π)cos0 = (2×100/3.1416)(1) = 63.66 V` (= 2Vm/π ✓).
- The full converter delivers **double** the half-wave average (both half-cycles used).

> 🧠 **MEMORY HOOK** — "**Semiconverter has a (1+cosα); full converter has cosα.**" Semiconverter → 1 quadrant (freewheels); full converter → 2 quadrants (can invert).

### ⚠️ Common Traps

1. Using `(2Vm/π)cosα` for a **semiconverter** (that's the full converter).
2. Forgetting the semiconverter **cannot invert** (one-quadrant).
3. Omitting the **FWD** effect on RL loads (raises Vo, improves pf).
4. Mixing peak `Vm` with RMS `Vrms` (`Vm = √2 Vrms`).
5. Forgetting half-wave average is `Vm/π` at α = 0 (not `2Vm/π`).
6. Assuming continuous conduction for RLE loads without checking `v > E`.

### 📝 Test — 1-φ Rectifiers (8 Q)

1. A 1-φ semiconverter average output is: (a) (2Vm/π)cosα (b) (Vm/π)(1+cosα) (c) Vm/π (d) (Vm/2π)(1+cosα).
2. The full converter can operate in: (a) one quadrant (b) two quadrants (c) four quadrants (d) none.
3. A semiconverter cannot: (a) rectify (b) invert (c) freewheel (d) conduct.
4. A freewheeling diode on an RL load: (a) lowers Vo (b) raises Vo & improves pf (c) blocks current (d) inverts.
5. Uncontrolled 1-φ half-wave average output is: (a) Vm/π (b) 2Vm/π (c) Vm/2 (d) Vm.
6. **(NAT)** 1-φ full converter, Vrms = 200 V, α = 45°. Average output (V, 1 dp)?
7. **(NAT)** 1-φ semiconverter, Vm = 300 V, α = 90°. Average output (V, 1 dp)?
8. **(NAT)** 1-φ half-wave (R), Vm = 141.4 V, α = 60°. Average output (V, 2 dp)?

<details><summary>🔑 Solutions</summary>

**Q1 — (b).** `(Vm/π)(1+cosα)`.

**Q2 — (b) two quadrants.**

**Q3 — (b) invert.**

**Q4 — (b).** Raises Vo, improves pf.

**Q5 — (a) Vm/π.**

**Q6.** `Vm = √2×200 = 282.8`; `Vo = (2×282.8/π)cos45° = (565.7/3.1416)(0.7071) = 180.06 × 0.7071 = 127.3 V`.

**Q7.** `Vo = (300/π)(1+cos90°) = (95.49)(1+0) = 95.5 V`.

**Q8.** `Vo = (141.4/2π)(1+cos60°) = (141.4/6.283)(1.5) = 22.51 × 1.5 = 33.76 V`.

</details>

---

> 🧠 **DAY-49 WRAP (Round-3 pass 7)** — **EMMC:** `i1·i2·(dM/dθ)`, wattmeter reads `VI·cosφ`, transfer instrument, LPF variant for low pf. **DC generator:** `E = V + IaRa`, build-up needs residual + aiding + `Rf < Rc`, cumulative compound supports V. **1-φ rectifiers:** semiconverter `(Vm/π)(1+cosα)` (1-quad), full converter `(2Vm/π)cosα` (2-quad), FWD helps RL loads. ⚡

**🔁 Round-3 progress:** Measurements ▓▓▓▓▓▓▓░░░ · Machines ▓▓▓▓▓▓▓░░░ · Power Electronics ▓▓▓▓▓▓▓░░░ — round-3 well past halfway. 🎓 Power Systems joins as a 4th subject once the reference PDFs arrive.
