# ⚡ GATE Technical Revision — Day 42 (2026-08-31)

*Capstone revision — consolidated formula sheets & mixed PYQ-style numericals across all three subjects.*

📅 Tech Day 42 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics · 🎓 Round-2 syllabus complete

> 🧠 **MEMORY HOOK** — Today ties it together: **one formula sheet per subject + mixed numericals**. This completes the second full pass of the whole GATE syllabus — Measuring Instruments, Electrical Machines, and Power Electronics.

---

## 🔧 Measuring Instruments: Consolidated Revision & Mixed Numericals

### 📖 Concept Deep Dive

The subject splits into **analog meters, instrument transformers, bridges, and digital/special instruments**. The recurring theme is **what each meter reads** (average vs RMS) and **which method suits which quantity**.

- **PMMC** — DC, **average**, uniform scale; extend with shunt/multiplier.
- **MI & EMMC** — **RMS** (`θ ∝ I²`); EMMC is the **wattmeter/transfer** instrument.
- **Thermocouple/electrostatic** — **true RMS**; **rectifier** meter = average × 1.11.
- **CT** (never open) / **PT** (never short).
- **Bridges** — Wheatstone (medium R), Kelvin (low R), Maxwell (medium-Q L), Hay's (high-Q), Schering (tan δ), Wien (frequency).
- **Energy meter** (rev ∝ energy), **two-wattmeter** (3-φ power), **Q-meter** (resonance), **CRO** (deflection), **DVM** (dual-slope/SAR).

> 💎 **KEY RESULT** — Read-type map: **PMMC = average (DC); MI/EMMC/thermocouple/electrostatic = RMS; rectifier = average×1.11**. Bridge map: **Maxwell (med-Q), Hay's (high-Q), Schering (tan δ), Wien (freq)**.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| PMMC deflection / shunt / multiplier | `θ = NBAI/K` ; `Rsh = Rm/(m−1)` ; `Rse = Rm(m−1)` |
| MI / EMMC torque | `Td = ½I²(dL/dθ)` ; `Ti = i1·i2·(dM/dθ)` |
| Two-wattmeter (3-φ) | `P = W1+W2` ; `tanφ = √3(W1−W2)/(W1+W2)` |
| Energy meter | `E(kWh) = N_rev/K` |
| Wheatstone / Maxwell / Schering | `S=R·Q/P` ; `Lx=R2R3C4` ; `tan δ=ωC4R4` |
| Wien / Q-meter / CRO / DVM | `f=1/(2πRC)` ; `Q=Vc/V=ωL/R` ; `S=Ll/(2dVa)` ; `res=FS/2ⁿ` |

### 🧮 Solved Examples

**Example 1 — PMMC + range extension.** A `1 mA`, `50 Ω` movement is used (a) as a `0-1 A` ammeter, and (b) as a `0-100 V` voltmeter. Find the shunt and multiplier.

```
(a) m = I/Im = 1/0.001 = 1000 ; Rsh = Rm/(m−1) = 50/999 = 0.05 Ω
(b) Rse = V/Im − Rm = 100/0.001 − 50 = 100000 − 50 = 99950 Ω
```

**Example 2 — Two-wattmeter method.** Two wattmeters read `1200 W` and `400 W` on a balanced 3-φ load. Find the total power and power factor.

```
P = W1 + W2 = 1200 + 400 = 1600 W
tanφ = √3(W1−W2)/(W1+W2) = 1.732 × (800)/(1600) = 0.866
φ = 40.9° ⇒ pf = cos40.9° = 0.756
```

### ⚠️ Common Traps

1. PMMC on AC reads **zero** (average); it's a **DC** meter.
2. Rectifier meter reads correctly **only for sine** (×1.11).
3. **CT open / PT short** — both destructive.
4. Wrong bridge for the Q-range (Maxwell vs Hay's).
5. `Rsh = Rm/(m−1)`, not `Rm/m`.
6. Forgetting `W2` goes negative below pf 0.5.

### 📝 Test — Measuring Instruments (8 Q)

**Q1 (MCQ).** A thermocouple instrument reads the ___ value:
(a) average (b) peak (c) true RMS (d) form factor

**Q2 (MCQ).** For measuring a low resistance, use a:
(a) Wheatstone bridge (b) Kelvin double bridge (c) Megger (d) Schering bridge

**Q3 (MCQ).** The dissipation factor is measured by the:
(a) Maxwell bridge (b) Schering bridge (c) Wien bridge (d) Wheatstone bridge

**Q4 (MCQ).** A CT secondary must never be:
(a) shorted (b) open-circuited (c) earthed (d) loaded

**Q5 (MCQ).** In a Q-meter, Q equals:
(a) V/Vc (b) Vc/V (c) VVc (d) 1/(VVc)

**Q6 (NAT).** A 20 mA, 5 Ω movement is used as a 0-2 A ammeter. Find the shunt (mΩ).

**Q7 (NAT).** Two wattmeters read 900 W and 900 W. Find the power factor.

**Q8 (NAT).** A Maxwell bridge: R2 = 1000 Ω, R3 = 800 Ω, C4 = 0.5 µF. Find Lx (H).

<details><summary>🔑 Solutions</summary>

**Q1 — (c) true RMS.**

**Q2 — (b) Kelvin double bridge.**

**Q3 — (b) Schering bridge.**

**Q4 — (b) open-circuited.**

**Q5 — (b) Vc/V.**

**Q6.** `m = 2/0.02 = 100` ; `Rsh = 5/99 = 0.0505 Ω = 50.5 mΩ`.

**Q7.** Equal readings ⇒ `tanφ = 0` ⇒ `φ = 0` ⇒ **pf = 1** (unity).

**Q8.** `Lx = R2·R3·C4 = 1000 × 800 × 0.5×10⁻⁶ = 0.4 H`.

</details>

---

## 🔧 Electrical Machines: Consolidated Revision & Mixed Numericals

### 📖 Concept Deep Dive

The subject covers **transformers, DC machines, induction motors, and synchronous machines**. Central ideas: **EMF equations**, **loss/efficiency**, **torque-speed**, and **excitation effects**.

- **Transformer:** `E = 4.44 f N φm`; **max η at Cu loss = Fe loss**; OC→iron, SC→copper.
- **DC machine:** `E = PφZN/(60A)`; **lap A=P, wave A=2**; `N ∝ Eb/φ`; series `T∝Ia²`.
- **Induction motor:** `Ns = 120f/P`; `s = (Ns−N)/Ns`; **Pag:Pcu:Pm = 1:s:(1−s)**; `s_maxT = R2/X2`.
- **Synchronous:** `E = 4.44 Kw f φ T`; lagging **demagnetises**; salient **Xd>Xq**; over-excited = **leading** (synchronous condenser).

> 💎 **KEY RESULT** — **Transformer max efficiency: Cu loss = Fe loss.** **Induction power split 1:s:(1−s).** **DC: E = PφZN/(60A).** **Synchronous over-excitation ⇒ leading pf.** Star-delta start ⇒ **1/3** current and torque.

### 📐 Formula Sheet

| Machine | Key formulas |
|---|---|
| Transformer | `E=4.44 f N φm` ; max η at `x=√(Pi/Pcu_fl)` ; `η=Pout/(Pout+Pi+x²Pcu)` |
| DC machine | `E=PφZN/(60A)` ; `Ta=PφZIa/(2πA)` ; `Eb=V−IaRa` |
| Induction motor | `Ns=120f/P` ; `Pag:Pcu:Pm=1:s:(1−s)` ; `s_maxT=R2/X2` |
| Synchronous | `E=4.44 Kw f φ T` ; `Ns=120f/P` ; `Xd>Xq` |
| Starting | Star-delta: `1/3` ; auto-transformer: `x²` |

### 🧮 Solved Examples

**Example 1 — Transformer max efficiency.** A `50 kVA` transformer: iron loss `500 W`, full-load copper loss `800 W`. Find the load fraction for maximum efficiency and the load (kVA).

```
x = √(Pi/Pcu_fl) = √(500/800) = √0.625 = 0.791
Load = x × 50 = 0.791 × 50 = 39.5 kVA
(At max η, total loss = 2×Pi = 1000 W)
```

**Example 2 — Induction motor power split.** A 3-φ induction motor takes `10 kW` air-gap power at slip `s = 0.05`. Find the rotor copper loss and the mechanical power developed.

```
Pcu = s·Pag = 0.05 × 10000 = 500 W
Pm = (1 − s)·Pag = 0.95 × 10000 = 9500 W
```

### ⚠️ Common Traps

1. Lap `A=P`, wave `A=2` (not the reverse).
2. Max transformer η at **Cu = Fe** loss.
3. Induction `Pag:Pcu:Pm = 1:s:(1−s)`.
4. Synchronous **over-excited = leading** pf.
5. Star-delta reduces **both** current and torque to 1/3.
6. Series DC motor: **T ∝ Ia²**, runs away at no load.

### 📝 Test — Electrical Machines (8 Q)

**Q1 (MCQ).** Maximum transformer efficiency occurs when:
(a) Cu loss = 2 Fe loss (b) Cu loss = Fe loss (c) Fe loss = 0 (d) load = full

**Q2 (MCQ).** In a lap winding, parallel paths = :
(a) 2 (b) P (c) P/2 (d) 2P

**Q3 (MCQ).** The induction-motor power ratio Pag:Pcu:Pm is:
(a) 1:s:(1−s) (b) 1:(1−s):s (c) s:1:(1−s) (d) 1:s²:s

**Q4 (MCQ).** An over-excited synchronous motor has:
(a) lagging pf (b) leading pf (c) unity pf (d) zero pf

**Q5 (MCQ).** A star-delta starter reduces starting current to:
(a) 1/2 (b) 1/3 (c) 1/√3 (d) equal

**Q6 (NAT).** A transformer: iron loss 400 W, FL copper loss 900 W. Find the load fraction for max efficiency.

**Q7 (NAT).** A 4-pole, wave-wound DC generator: 600 conductors, flux/pole 0.03 Wb, 1000 rpm. Find the EMF (V).

**Q8 (NAT).** A 6-pole, 50 Hz induction motor runs at 950 rpm. Find the slip (%).

<details><summary>🔑 Solutions</summary>

**Q1 — (b) Cu loss = Fe loss.**

**Q2 — (b) P.**

**Q3 — (a) 1:s:(1−s).**

**Q4 — (b) leading pf.**

**Q5 — (b) 1/3.**

**Q6.** `x = √(400/900) = √0.444 = 0.667`.

**Q7.** Wave: A=2. `E = PφZN/(60A) = 4×0.03×600×1000/(60×2) = 72000/120 = 600 V`.

**Q8.** `Ns = 120×50/6 = 1000` ; `s = (1000−950)/1000 = 0.05 = 5%`.

</details>

---

## 🔧 Power Electronics: Consolidated Revision & Mixed Numericals

### 📖 Concept Deep Dive

The subject covers **devices, rectifiers, choppers, and inverters**. Key ideas: **triggering/commutation**, **average output vs firing angle**, **duty ratio**, and **ripple/THD**.

- **Devices:** SCR (**latching > holding**, `tc > tq`), TRIAC (bidirectional), GTO (gate turn-off), MOSFET/IGBT (voltage-controlled).
- **Rectifiers:** half-wave controlled `(Vm/2π)(1+cosα)`; **semiconverter `(Vm/π)(1+cosα)`** (1-quadrant); **full converter `(2Vm/π)cosα`** (2-quadrant); 3-φ bridge `(3√3/π)Vm·cosα`. **Ripple = p·f**.
- **Choppers:** buck `D·Vs`; boost `Vs/(1−D)`; buck-boost `−D·Vs/(1−D)`.
- **Inverters:** 1-φ full bridge `Vo=Vs` (fundamental `0.9Vs`); 3-φ 180° `VL=0.816Vs`; **SPWM** ma=Vr/Vc.

> 💎 **KEY RESULT** — Rectifier map: **half-wave `(Vm/2π)(1+cosα)`, semiconverter `(Vm/π)(1+cosα)`, full `(2Vm/π)cosα`, 3-φ bridge `(3√3/π)Vm·cosα`**. Chopper map: **buck `DVs`, boost `Vs/(1−D)`**. Only the **full converter inverts**; the **semiconverter is one-quadrant**.

### 📐 Formula Sheet

| Converter | Average output |
|---|---|
| Half-wave controlled (R) | `(Vm/2π)(1+cosα)` |
| 1-φ semiconverter | `(Vm/π)(1+cosα)` |
| 1-φ full converter | `(2Vm/π)cosα` |
| 3-φ full bridge | `(3√3/π)Vm·cosα` |
| Buck / Boost / Buck-boost | `DVs` / `Vs/(1−D)` / `−DVs/(1−D)` |
| Ripple frequency | `= p·f` (p = pulses) |

### 🧮 Solved Examples

**Example 1 — Converters at α = 60°.** With `Vm = 325 V`, find `Vdc` for (a) a 1-φ semiconverter and (b) a 1-φ full converter.

```
(a) Semiconverter: Vdc = (Vm/π)(1+cosα) = (325/π)(1+cos60°) = 103.45 × 1.5 = 155.2 V
(b) Full converter: Vdc = (2Vm/π)cosα = (2×325/π)×cos60° = 206.9 × 0.5 = 103.5 V
```

**Example 2 — Chopper & string efficiency.** (a) A boost chopper: `Vs = 48 V`, `D = 0.25`; find `Vo`. (b) Four SCRs (each `800 V`) in series hold `2800 V`; find the string efficiency.

```
(a) Vo = Vs/(1−D) = 48/(1−0.25) = 48/0.75 = 64 V
(b) String efficiency = V_string/(n·V_Dm) = 2800/(4×800) = 2800/3200 = 0.875 = 87.5%
```

### ⚠️ Common Traps

1. Semiconverter `(Vm/π)(1+cosα)` ≠ full converter `(2Vm/π)cosα`.
2. Only the **full converter** can invert (α > 90°).
3. Ripple frequency = **p·f** (6f for 3-φ bridge).
4. Buck `DVs`, boost `Vs/(1−D)` — don't swap.
5. **Latching > holding** current; gate can't turn off an SCR.
6. String efficiency **< 1** — always derate.

### 📝 Test — Power Electronics (8 Q)

**Q1 (MCQ).** The 3-φ full-bridge rectifier ripple frequency (50 Hz supply) is:
(a) 50 Hz (b) 100 Hz (c) 150 Hz (d) 300 Hz

**Q2 (MCQ).** A single-phase semiconverter operates in:
(a) one quadrant (b) two quadrants (c) four quadrants (d) three quadrants

**Q3 (MCQ).** A boost chopper output is:
(a) DVs (b) Vs/(1−D) (c) (1−D)Vs (d) Vs/D

**Q4 (MCQ).** Which device can be turned off by the gate?
(a) SCR (b) TRIAC (c) GTO (d) DIAC

**Q5 (MCQ).** The fundamental RMS of a full-bridge square-wave inverter is:
(a) 0.45 Vs (b) 0.9 Vs (c) Vs (d) 1.11 Vs

**Q6 (NAT).** A 1-φ full converter, Vm = 300 V, α = 0°. Find Vdc (V).

**Q7 (NAT).** A buck chopper, Vs = 200 V, D = 0.35. Find Vo (V).

**Q8 (NAT).** Five SCRs (each 1000 V) in series hold 4500 V. Find the string efficiency (%).

<details><summary>🔑 Solutions</summary>

**Q1 — (d) 300 Hz** (6×50).

**Q2 — (a) one quadrant.**

**Q3 — (b) Vs/(1−D).**

**Q4 — (c) GTO.**

**Q5 — (b) 0.9 Vs.**

**Q6.** `Vdc = (2×300/π)cos0° = 190.99 V`.

**Q7.** `Vo = D·Vs = 0.35 × 200 = 70 V`.

**Q8.** `η = 4500/(5×1000) = 4500/5000 = 0.90 = 90%`.

</details>

---

> 🧠 **DAY-42 WRAP (Round-2 complete!)** — Measurements: read-type map (**PMMC avg, MI/EMMC RMS, rectifier ×1.11**), bridges by quantity. Machines: **transformer max η at Cu=Fe**, **induction 1:s:(1−s)**, **DC E=PφZN/60A**, synchronous over-excited = leading. Power electronics: **semiconverter (Vm/π)(1+cosα)**, **full (2Vm/π)cosα**, buck/boost, ripple **p·f**. 🎓 The full GATE syllabus (Measurements + Machines + Power Electronics) is now twice-covered — **Power Systems can be added next** with the reference PDFs. ⚡
