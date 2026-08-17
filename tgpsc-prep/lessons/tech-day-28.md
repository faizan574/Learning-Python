# ⚡ GATE Technical Revision — Day 28 (2026-08-17)

*Three subjects, one sitting — the transfer instrument, the copper-saving autotransformer, and thyristor commutation.*

📅 Tech Day 28 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics

> 🧠 **MEMORY HOOK** — Today is **"share and switch off"**: the electrodynamometer *shares* current between fixed & moving coils to read true power, the autotransformer *shares* one winding to save copper, and commutation is how a thyristor is *switched off*. Three ideas, three subjects.

---

## 🔧 Measuring Instruments: Electrodynamometer (EMMC) Instruments

### 📖 Concept Deep Dive

The **electrodynamometer (EMMC)** instrument replaces the PMMC's permanent magnet with **fixed current-carrying coils**, so it works on the interaction between a **fixed coil** and a **moving coil** — both air-cored (no iron). This makes it the natural basis of the **wattmeter** and a **transfer instrument**.

The **instantaneous torque** depends on the rate of change of **mutual inductance `M`** between the fixed and moving coils:

```
Ti = i1 · i2 · (dM/dθ)
```

**As an ammeter/voltmeter** the fixed and moving coils carry the **same current** (`i1 = i2 = i`), so `Ti = i²·(dM/dθ)`. Averaged over an AC cycle the deflecting torque is proportional to the **mean square**, so at balance:

```
θ = I² · (dM/dθ) / K
```

Because `θ ∝ I²`, the EMMC **reads RMS**, works on **AC and DC alike**, and (uncompensated) has a **square-law scale**.

> 💎 **KEY RESULT** — Since the same DC and AC RMS current produce the same deflection, the EMMC is a **transfer instrument**: calibrate it on **DC** (against a potentiometer) and use it on **AC** — the basis of precision AC standardisation.

**As a wattmeter** (its most important use): the **fixed (current) coil** carries the load current `I`, and the **moving (pressure) coil** carries a current proportional to the voltage `V`. The average torque then becomes proportional to **real power**:

```
Td ∝ V · I · cosφ   (reads true/active power)
```

**Errors and features:**

| Feature | Note |
|---|---|
| Torque/weight ratio | **Low** (no iron ⇒ weak field) ⇒ sensitive to friction |
| Stray magnetic field | Large error (weak own field) ⇒ use **shielding / astatic** design |
| Frequency error | Reactance of pressure-coil circuit changes with `f` |
| Damping | **Air-friction** (no eddy magnet allowed) |
| Cost/accuracy | Expensive, but very accurate ⇒ used as **standard** |

> ⚠️ **TRAP ALERT** — The EMMC's great strength is that it reads **RMS on AC** and is calibrated identically on **DC** — the transfer-instrument property. But its **low operating torque** makes it prone to friction and stray-field errors, so it is a lab standard, not a rugged panel meter.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Instantaneous torque | `Ti = i1·i2·(dM/dθ)` |
| Ammeter/voltmeter (AC) | `Td = I²·(dM/dθ)` , `θ = I²·(dM/dθ)/K` |
| Wattmeter | `Td ∝ V·I·cosφ` |
| Reads | RMS value; works on AC & DC (transfer instrument) |
| Damping | Air-friction |

### 🧮 Solved Examples

**Example 1 — Deflection of an EMMC ammeter.** The mutual inductance changes at `dM/dθ = 0.2 mH/rad` (constant), spring constant `K = 2×10⁻⁶ N·m/rad`. Find the deflection at `I = 0.1 A`.

```
θ = I²·(dM/dθ)/K = (0.1)² × 0.2×10⁻³ / (2×10⁻⁶)
  = 0.01 × 2×10⁻⁴ / 2×10⁻⁶ = 2×10⁻⁶ / 2×10⁻⁶ = 1 rad ≈ 57.3°
```

**Example 2 — Wattmeter deflection.** An EMMC wattmeter has `dM/dθ = 0.15 mH/rad`, `K = 15×10⁻⁶ N·m/rad`. Load: `V = 200 V`, `I = 5 A`, `cosφ = 0.8`, pressure-coil resistance `Rp = 2000 Ω`. Find the deflection.
Pressure-coil current `Ip = V/Rp = 200/2000 = 0.1 A`. Torque `Td = Ip·I·cosφ·(dM/dθ)`:

```
Td = 0.1 × 5 × 0.8 × 0.15×10⁻³ = 6×10⁻⁵ N·m
θ  = Td/K = 6×10⁻⁵ / 15×10⁻⁶ = 4 rad
```
(In practice the scale/springs are designed so full-scale ≈ a smaller angle; the method is the point.)

### ⚠️ Common Traps

1. Thinking EMMC reads **average** — it reads **RMS** (`θ ∝ I²`).
2. Forgetting it is a **transfer instrument** (DC calibration valid on AC).
3. Assuming a **strong** field — it has **no iron**, hence low torque and stray-field sensitivity.
4. Using eddy-current damping — it uses **air-friction**.
5. In wattmeter mode, forgetting the **pressure coil** carries `V/Rp`, giving `Td ∝ VI cosφ`.
6. Ignoring frequency error in the pressure-coil circuit.

### 📝 Test — Measuring Instruments (8 Q)

**Q1 (MCQ).** The torque in an electrodynamometer instrument depends on:
(a) dL/dθ (b) dM/dθ (c) B only (d) 1/M

**Q2 (MCQ).** An electrodynamometer used as an ammeter reads the ___ value:
(a) average (b) peak (c) RMS (d) form-factor

**Q3 (MCQ).** The most important application of the electrodynamometer movement is the:
(a) energy meter (b) wattmeter (c) frequency meter (d) ohmmeter

**Q4 (MCQ).** The electrodynamometer is called a "transfer instrument" because it:
(a) transfers power (b) is calibrated on DC and used on AC (c) transfers heat (d) has moving iron

**Q5 (MCQ).** Damping in an electrodynamometer instrument is provided by:
(a) eddy currents (b) air friction (c) a permanent magnet (d) fluid

**Q6 (NAT).** An EMMC ammeter has `dM/dθ = 0.5 mH/rad`, `K = 5×10⁻⁶ N·m/rad`. Find the deflection (rad) at 0.1 A.

**Q7 (NAT).** An EMMC wattmeter: current coil carries 4 A, pressure-coil current 0.1 A, `cosφ = 1`, `dM/dθ = 0.2 mH/rad`. Find the deflecting torque (µN·m).

**Q8 (NAT).** For an EMMC instrument `θ = I²(dM/dθ)/K`. If deflection is 0.8 rad at 2 A and `dM/dθ = 0.1 mH/rad`, find K (µN·m/rad).

<details><summary>🔑 Solutions</summary>

**Q1 — (b) dM/dθ.**

**Q2 — (c) RMS.**

**Q3 — (b) wattmeter.**

**Q4 — (b)** calibrated on DC, used on AC.

**Q5 — (b) air friction.**

**Q6.** `θ = (0.1)² × 0.5×10⁻³ / 5×10⁻⁶ = 0.01 × 5×10⁻⁴/5×10⁻⁶ = 5×10⁻⁶/5×10⁻⁶ = 1 rad`.

**Q7.** `Td = Ip·I·cosφ·(dM/dθ) = 0.1 × 4 × 1 × 0.2×10⁻³ = 8×10⁻⁵ N·m = 80 µN·m`.

**Q8.** `K = I²(dM/dθ)/θ = 4 × 0.1×10⁻³ / 0.8 = 4×10⁻⁴/0.8 = 5×10⁻⁴ N·m/rad = 500 µN·m/rad`.

</details>

---

## 🔧 Electrical Machines: Transformers V — Autotransformer, Tap Changing, Inrush, Cooling, Scott

### 📖 Concept Deep Dive

An **autotransformer** has a **single winding**, part of which is common to both primary and secondary. Power passes partly by **transformer action (inductively)** and partly by **direct conduction**, which is why it saves copper.

Let `k = LV/HV = N2/N1` (with `k < 1` for step-down). Key results:

```
Weight of copper (auto) = (1 − k) × weight of copper (two-winding)
Copper saving fraction = k
(VA)auto / (VA)two-winding = 1 / (1 − k)
Power transferred conductively = k × (total VA)
Power transferred inductively  = (1 − k) × (total VA)
```

> 💎 **KEY RESULT** — The **closer `k` is to 1** (small voltage difference), the **greater the copper saving** and the more VA the same core/copper can handle. Autotransformers shine when the transformation ratio is near unity.

**Advantages:** less copper, lower losses, higher efficiency, better voltage regulation, smaller & cheaper.
**Disadvantages:** **no electrical isolation** (common winding); if the common winding opens, **full HV can appear across the LV**; higher short-circuit current.

**Tap changing** controls the secondary voltage by changing the effective turns:
- **Off-circuit (off-load)** tap changer — de-energised switching.
- **On-load tap changer (OLTC)** — switches under load using a diverter with reactor/resistor to avoid interruption.
- Taps are usually on the **HV side** (lower current, and more turns ⇒ finer control).

**Magnetising inrush current.** On switch-on, the transient magnetising current can reach **`8–10×` (even up to 20×)** rated current, depending on the **switching instant** and **residual flux** (worst at voltage-zero with aiding residual flux). It is rich in **second harmonic**, which is used to **restrain differential protection** from mis-tripping.

**Cooling codes** (4-letter): 1st = internal medium (**O** oil), 2nd = its circulation (**N** natural / **F** forced / **D** directed), 3rd = external medium (**A** air / **W** water), 4th = its circulation. E.g. **ONAN, ONAF, OFAF, ODWF**.

**Scott (T-T) connection:** converts **3-phase to 2-phase** using two transformers — a **main** transformer (centre-tapped at 50%) and a **teaser** transformer tapped at **`86.6%` (√3/2)** of the main winding — giving a balanced 2-phase supply.

**Three-winding (tertiary):** a delta **tertiary** provides a path for **third-harmonic** currents, stabilises the neutral in **Y-Y** banks, supplies **auxiliary load**, and connects **reactive compensation**.

> 🧠 **MEMORY HOOK** — "**Teaser at 86.6%**": Scott connection's teaser transformer taps at **√3/2 = 0.866** of the main winding. Inrush ≈ **8–10×**, second-harmonic-rich.

> ⚠️ **TRAP ALERT** — Autotransformer's biggest drawback is **no isolation** — never use it where galvanic separation is required. And copper **saving = k** (not `1 − k`); the copper **used** is `(1 − k)` of the two-winding value.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Copper saving fraction | `= k = N2/N1` (k<1) |
| Copper used (auto) | `= (1 − k) × two-winding copper` |
| VA ratio | `(VA)auto/(VA)2-wdg = 1/(1 − k)` |
| Conductive power | `= k × VA` ; Inductive `= (1 − k) × VA` |
| Scott teaser tap | `86.6% = √3/2` of main |
| Inrush current | `≈ 8–10 × rated`, 2nd-harmonic rich |

### 🧮 Solved Examples

**Example 1 — Copper saving.** An autotransformer steps `300 V` down to `240 V`. Find the copper saving.

```
k = LV/HV = 240/300 = 0.8
Copper saving = k = 0.8 = 80%
⇒ the auto uses only (1 − 0.8) = 20% of the copper of an equivalent two-winding transformer.
```

**Example 2 — VA rating as autotransformer.** A `10 kVA`, `2400/240 V` two-winding transformer is reconnected as an autotransformer to give `2640/2400 V`. Find its kVA rating.

```
k = LV/HV = 2400/2640 = 0.9091
(VA)auto = (VA)2-wdg / (1 − k) = 10 / (1 − 0.9091) = 10 / 0.0909 = 110 kVA

Check: series (240 V) winding rated current = 10000/240 = 41.67 A
HV line current = 110000/2640 = 41.67 A  ✓ (consistent)
```

### ⚠️ Common Traps

1. Saying copper **used** = `k` — it's the **saving** that equals `k`.
2. Claiming autotransformers give **isolation** — they do **not**.
3. Placing OLTC taps on the **LV** side — normally on **HV** (finer, lower current).
4. Quoting inrush as a small current — it's **8–10×** rated, transient.
5. Scott teaser tap as 50% — the **main** is centre-tapped (50%); the **teaser** is at **86.6%**.
6. Forgetting the tertiary's role in **third-harmonic suppression** for Y-Y banks.

### 📝 Test — Electrical Machines (8 Q)

**Q1 (MCQ).** The main advantage of an autotransformer over a two-winding transformer is:
(a) isolation (b) saving of copper (c) higher inrush (d) no regulation

**Q2 (MCQ).** The copper saving in an autotransformer with ratio k = N2/N1 is:
(a) (1 − k) (b) k (c) 1/k (d) k²

**Q3 (MCQ).** Magnetising inrush current is rich in which harmonic (used to restrain protection)?
(a) 3rd (b) 2nd (c) 5th (d) 7th

**Q4 (MCQ).** The Scott connection converts:
(a) 3-phase to 6-phase (b) 3-phase to 2-phase (c) 1-phase to 3-phase (d) DC to AC

**Q5 (MCQ).** In cooling code ONAF, the "F" stands for:
(a) forced oil (b) forced external air (c) water (d) natural air

**Q6 (NAT).** An autotransformer supplies 500 V from a 600 V source. Find the fraction of copper saved (%).

**Q7 (NAT).** A 5 kVA, 1000/200 V two-winding transformer is reconnected as an autotransformer for 1200/1000 V. Find its kVA rating.

**Q8 (NAT).** In a Scott connection, if the main winding has 100 turns (centre-tapped), how many turns does the teaser tap use?

<details><summary>🔑 Solutions</summary>

**Q1 — (b) saving of copper.**

**Q2 — (b) k.**

**Q3 — (b) 2nd.**

**Q4 — (b) 3-phase to 2-phase.**

**Q5 — (b) forced external air.**

**Q6.** `k = 500/600 = 0.833`; saving = 83.3%.

**Q7.** `k = 1000/1200 = 0.833`; `(VA)auto = 5/(1 − 0.833) = 5/0.1667 = 30 kVA`.

**Q8.** Teaser tap = 86.6% of the full main winding = `0.866 × 100 = 86.6 ≈ 87 turns`.

</details>

---

## 🔧 Power Electronics: Thyristor III — Turn-Off, Commutation & String Efficiency

### 📖 Concept Deep Dive

Since the gate cannot turn an SCR off, **commutation** — bringing the anode current below the holding current and applying reverse voltage for at least the **turn-off time `tq`** — is essential.

**Two broad classes:**

| Class | Mechanism | Where used |
|---|---|---|
| **Natural (line) commutation** | AC supply voltage reverses ⇒ anode current naturally falls to zero and reverse-biases the SCR | Phase-controlled rectifiers, AC voltage controllers, cycloconverters |
| **Forced commutation** | External L-C / auxiliary SCR forces the current to zero in a **DC** circuit | Choppers, (SCR) inverters |

**Forced commutation classes (A–F):**

| Class | Name | Idea |
|---|---|---|
| **A** | Load (self) commutation | Underdamped **R-L-C** load rings the current to zero |
| **B** | Resonant-pulse | **L-C** across SCR provides a reverse current pulse |
| **C** | Complementary | A **second SCR** turns the first off (capacitor) |
| **D** | Impulse / auxiliary | Auxiliary SCR + charged capacitor |
| **E** | External pulse | Separate pulse source reverse-biases SCR |
| **F** | Line (AC) commutation | Same as natural |

> 💎 **KEY RESULT** — The **circuit turn-off time `tc`** provided by the commutation circuit must exceed the SCR's **`tq`** (`tc > tq`), where `tq = reverse-recovery time + gate-recovery time`. Otherwise the SCR re-triggers (commutation failure).

**Series & parallel operation:**
- **Series** (for high voltage): unequal leakage/recovery makes SCRs share voltage **unequally**. **Static** equalisation uses parallel resistors; **dynamic** uses RC networks.
- **Parallel** (for high current): unequal on-state drops cause unequal current sharing; use matched devices and reactors.

**String efficiency** measures how well `n` series (or parallel) SCRs use their combined rating:

```
String efficiency = V_string / (n × V_Dm)        (< 1)
Derating factor (DRF) = 1 − String efficiency
```

**Static equalising resistor** for `n` series SCRs (spread in blocking currents `ΔIb`):

```
R = (n·V_Dm − V_string) / ((n − 1)·ΔIb)
```

> 🧠 **MEMORY HOOK** — "**Line reverses, DC needs a friend**": AC circuits get free **natural** commutation; DC circuits need **forced** commutation (an L-C or an auxiliary SCR). Always keep **tc > tq**.

> ⚠️ **TRAP ALERT** — String efficiency is **always < 100%** because real SCRs never share voltage/current perfectly. You must **derate** the string (add equalising resistors/RC) — never assume `n` devices give `n ×` the single rating.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Turn-off requirement | `tc > tq` , `tq = trr + tgr` |
| String efficiency | `= V_string / (n × V_Dm)` |
| Derating factor | `= 1 − string efficiency` |
| Static equalising R | `R = (n·V_Dm − V_string) / ((n − 1)·ΔIb)` |

### 🧮 Solved Examples

**Example 1 — String efficiency.** Four SCRs, each rated `800 V`, are connected in series and the string blocks `2800 V`. Find the string efficiency and derating factor.

```
String efficiency = V_string/(n·V_Dm) = 2800/(4 × 800) = 2800/3200 = 0.875 = 87.5%
Derating factor = 1 − 0.875 = 0.125 = 12.5%
```

**Example 2 — Static equalising resistance.** Three SCRs in series, each with maximum blocking voltage `1500 V`, hold a string voltage of `3600 V`. The spread in blocking (leakage) currents is `ΔIb = 6 mA`. Find the static equalising resistance.

```
R = (n·V_Dm − V_string) / ((n − 1)·ΔIb)
  = (3 × 1500 − 3600) / ((3 − 1) × 6×10⁻³)
  = (4500 − 3600) / (2 × 0.006)
  = 900 / 0.012 = 75000 Ω = 75 kΩ
```

### ⚠️ Common Traps

1. Believing the **gate** can turn off an SCR — it needs **commutation**.
2. Using **forced** commutation where **natural** (line) works — wastes components.
3. Forgetting the requirement **tc > tq** (else commutation failure).
4. Assuming `n` series SCRs give `n ×` voltage — **string efficiency < 1**, must derate.
5. Mixing up **static** (resistor) vs **dynamic** (RC) voltage equalisation.
6. Confusing turn-off time `tq` with turn-on delay.

### 📝 Test — Power Electronics (8 Q)

**Q1 (MCQ).** In a phase-controlled rectifier fed from AC mains, the SCRs are turned off by:
(a) forced commutation (b) natural (line) commutation (c) gate signal (d) snubber

**Q2 (MCQ).** For successful commutation, the circuit turn-off time tc must be:
(a) < tq (b) = 0 (c) > tq (d) independent of tq

**Q3 (MCQ).** Class C forced commutation uses:
(a) resonant load (b) a complementary (second) SCR (c) external pulse (d) line reversal

**Q4 (MCQ).** String efficiency of series-connected SCRs is always:
(a) > 1 (b) = 1 (c) < 1 (d) zero

**Q5 (MCQ).** Static voltage equalisation across series SCRs uses:
(a) parallel resistors (b) series inductors (c) RC snubbers only (d) diodes

**Q6 (NAT).** Five SCRs, each 1000 V, in series hold 4000 V. Find the string efficiency (%).

**Q7 (NAT).** For the string in Q6, find the derating factor (%).

**Q8 (NAT).** Four SCRs in series, each max blocking voltage 1200 V, string voltage 4000 V, blocking-current spread 5 mA. Find the static equalising resistance (kΩ).

<details><summary>🔑 Solutions</summary>

**Q1 — (b) natural (line) commutation.**

**Q2 — (c) tc > tq.**

**Q3 — (b) a complementary (second) SCR.**

**Q4 — (c) < 1.**

**Q5 — (a) parallel resistors.**

**Q6.** `η = 4000/(5×1000) = 4000/5000 = 0.80 = 80%`.

**Q7.** `DRF = 1 − 0.80 = 0.20 = 20%`.

**Q8.** `R = (n·V_Dm − V_s)/((n−1)·ΔIb) = (4×1200 − 4000)/((4−1)×5×10⁻³) = (4800−4000)/(3×0.005) = 800/0.015 = 53333 Ω ≈ 53.3 kΩ`.

</details>

---

> 🧠 **DAY-28 WRAP** — EMMC: `Ti = i1·i2·(dM/dθ)`, reads **RMS**, **transfer instrument**, best as **wattmeter** (`Td ∝ VI cosφ`). Autotransformer: **copper saving = k**, **VA = 2wdg/(1−k)**, **no isolation**, inrush **8–10×** (2nd harmonic). Thyristor: **natural** commutation on AC, **forced** on DC, **tc > tq**, **string efficiency < 1** (derate). Revise the three boxed KEY RESULTS. ⚡
