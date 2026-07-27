# ⚡ GATE Technical Revision — Day 10 (2026-07-27)

*Measuring three-phase power with just two wattmeters, the back-EMF that governs every DC machine, and the whole zoo of switches beyond the plain SCR.*

`📅 Tech Day 10  ·  ⏱ ~45 min  ·  🎯 Measurements + Machines + Power Electronics`

Attempt each section's test **before** opening its solutions — recall beats re-reading.

---

## 🔧 Measuring Instruments: Measurement of Power II — Three-Phase Power & the Two-Wattmeter Method

Yesterday we dissected the single dynamometer wattmeter. Today we scale up: **how many wattmeters do you need for an n-wire system, and what does the two-wattmeter method reveal about power factor?**

### 📖 Concept Deep Dive

**Blondel's theorem** — the master rule. *In a system of `n` conductors, the total power is measured by `(n − 1)` wattmeters*, with their current coils in `(n−1)` lines and their pressure coils connected between each of those lines and the `n`-th (common) line.

```
Number of wattmeters required = (n − 1),  where n = number of conductors (wires)
```

- **3-phase, 4-wire** (n = 4): needs **3** wattmeters.
- **3-phase, 3-wire** (n = 3): needs **2** wattmeters → the **two-wattmeter method**.
- **1-phase, 2-wire** (n = 2): needs **1** wattmeter.

**Two-wattmeter method (3-phase, 3-wire).** Current coils go in lines **R** and **Y**; pressure coils are referenced to line **B**. For a balanced load with phase angle `φ` (line voltage `VL`, line current `IL`):

```
W1 = VL·IL·cos(30° − φ)
W2 = VL·IL·cos(30° + φ)
W1 + W2 = √3·VL·IL·cos φ = total three-phase power P   ✓
W1 − W2 = VL·IL·sin φ
```

Dividing gives the **power factor from the two readings** — the method's signature result:

```
tan φ = √3·(W1 − W2)/(W1 + W2)
```

This works for **balanced** loads whether **star or delta**, and needs **no neutral**.

**Sign / power-factor cases** — GATE's favourite table:

| Power factor | φ | W1 = cos(30−φ) | W2 = cos(30+φ) | Note |
|---|---|---|---|---|
| Unity (pf = 1) | 0° | cos(30°) (+) | cos(30°) (+) | **W1 = W2**, both equal & positive |
| pf = 0.866 | 30° | cos 0° = 1 (max) | cos 60° = 0.5 | both positive |
| pf = 0.5 | 60° | cos(−30°) (+) | **cos 90° = 0** | **W2 reads zero** |
| pf < 0.5 | > 60° | positive | **negative** | one wattmeter reads **negative** — reverse its connection and subtract |
| pf = 0 (pure reactive) | 90° | cos(−60°)=0.5 (+) | cos(120°)=−0.5 (−) | W1 = −W2, **sum = 0** |

> 💎 **KEY RESULT** — For 3-phase 3-wire, **two** wattmeters suffice (Blondel), `P = W1 + W2`, and `tan φ = √3(W1−W2)/(W1+W2)`. At **pf = 0.5 one wattmeter reads zero**; below 0.5 it reads **negative**.

> 🧠 **MEMORY HOOK** — "**Sum gives power, difference gives reactive (×√3), ratio gives tan φ.** At half-pf, one meter naps (zero); below half, it goes negative."

> ⚠️ **TRAP ALERT** — When one wattmeter reads negative (pf < 0.5), the **total power is still W1 + W2** (algebraically, i.e. subtract the magnitude). Never add the magnitudes — you'd overstate P.

**Reactive power** from the two readings: `Q = √3·(W1 − W2)`. A single wattmeter can also measure **3-phase reactive power** by connecting its PC across the *other two* lines (the "one-wattmeter VAR" method), reading `VL·IL·sin φ`, so `Q = √3 × (reading)`.

### 📐 Formula Sheet

```
Blondel:      wattmeters needed = (n − 1)
Total power   P = W1 + W2 = √3 VL IL cos φ
Difference    W1 − W2 = VL IL sin φ
Power factor  tan φ = √3 (W1 − W2)/(W1 + W2)
Reactive Q    Q = √3 (W1 − W2)
W1 = VL IL cos(30° − φ) ,  W2 = VL IL cos(30° + φ)
pf = 0.5 ⇒ W2 = 0 ;  pf < 0.5 ⇒ W2 negative ;  pf = 0 ⇒ W1 = −W2
```

### 🧮 Solved Examples

**Example 1 — power & pf from two readings.**
Two wattmeters read `W1 = 8 kW` and `W2 = 4 kW` on a balanced 3-phase load. Find total power and power factor.

```
P = W1 + W2 = 8 + 4 = 12 kW
tan φ = √3 (W1 − W2)/(W1 + W2) = 1.7320 × (8 − 4)/(8 + 4)
      = 1.7320 × 4/12 = 1.7320 × 0.33333 = 0.57735
φ = arctan(0.57735) = 30°
cos φ = cos 30° = 0.866
```
**P = 12 kW, pf = 0.866 lagging.**

**Example 2 — negative reading case.**
On a low-pf load the wattmeters read `W1 = 6 kW` and `W2 = −2 kW`. Find total power and pf.

```
P = W1 + W2 = 6 + (−2) = 4 kW
tan φ = √3 (W1 − W2)/(W1 + W2) = 1.7320 × (6 − (−2))/(6 + (−2))
      = 1.7320 × 8/4 = 1.7320 × 2 = 3.4641
φ = arctan(3.4641) = 73.9°
cos φ = cos 73.9° = 0.2774
```
**P = 4 kW, pf ≈ 0.277 lagging** — note W2 was negative because pf < 0.5, and we **added algebraically**.

### ⚠️ Common Traps

1. **Blondel counts conductors, not phases:** 3-phase 4-wire needs **3** wattmeters, 3-phase 3-wire needs **2**.
2. **Algebraic sum:** when one wattmeter reads negative, `P = W1 + W2` means **subtract** — don't add magnitudes.
3. **tan φ formula sign:** `√3(W1 − W2)/(W1 + W2)` — mixing up which reading is larger flips the sign of φ (leading vs lagging).
4. **Two-wattmeter method needs a balanced load** for the pf formula; for **unbalanced** loads it still gives correct *total power* (P = W1 + W2) but the tan φ relation no longer holds.
5. **pf = 0.5 ⇒ one meter zero**, not both — students often say "both read equal."
6. `Q = √3(W1 − W2)`, **not** `(W1 − W2)` — the √3 is easy to drop.

### 📝 Test — Measuring Instruments (8 Q)

1. **(MCQ)** By Blondel's theorem, a 3-phase 4-wire system needs how many wattmeters?
   (a) 1  (b) 2  (c) 3  (d) 4
2. **(MCQ)** In the two-wattmeter method, at **unity** power factor:
   (a) one wattmeter reads zero  (b) both read equal and positive  (c) one reads negative  (d) both read zero
3. **(MCQ)** One wattmeter reads negative when the load power factor is:
   (a) 1  (b) 0.866  (c) exactly 0.5  (d) less than 0.5
4. **(MCQ)** Total three-phase power by the two-wattmeter method equals:
   (a) W1 − W2  (b) W1 + W2  (c) √3(W1+W2)  (d) √3(W1−W2)
5. **(MCQ)** The reactive power from the two readings is:
   (a) W1 + W2  (b) √3(W1 − W2)  (c) (W1 − W2)/√3  (d) W1·W2
6. **(NAT)** Two wattmeters read 10 kW and 5 kW on a balanced load. Find the power factor (to 3 decimals). ______
7. **(NAT)** A balanced load draws 15 kW at pf 0.8 lagging. Find W1 − W2 in kW. ______ kW
8. **(NAT)** Wattmeters read W1 = 5 kW, W2 = −1 kW. Find the total power in kW. ______ kW

<details>
<summary>🔑 Solutions</summary>

**1 → (c) 3.** n = 4 conductors ⇒ (n−1) = 3 wattmeters.

**2 → (b).** φ = 0 ⇒ W1 = W2 = VL IL cos 30°, both equal and positive.

**3 → (d).** pf < 0.5 ⇒ φ > 60° ⇒ cos(30°+φ) < 0.

**4 → (b) W1 + W2.**

**5 → (b) √3(W1 − W2).**

**6 →**
```
tan φ = √3(10−5)/(10+5) = 1.7320 × 5/15 = 1.7320 × 0.33333 = 0.57735
φ = 30°,  cos φ = 0.866
```
**pf = 0.866 lagging.**

**7 →** P = 15 kW, cos φ = 0.8 ⇒ φ = 36.87°, tan φ = 0.75.
```
W1 − W2 = VL IL sin φ,  and P = √3 VL IL cos φ ⇒ VL IL = P/(√3 cos φ)
W1 − W2 = P·tan φ/√3 = 15 × 0.75 / 1.7320 = 11.25/1.7320 = 6.495 kW
```
**W1 − W2 ≈ 6.50 kW.** *(Also Q = √3(W1−W2) = P·tan φ = 11.25 kVAR ✓.)*

**8 →** P = W1 + W2 = 5 + (−1) = **4 kW** (algebraic sum).

</details>

---

## 🔧 Electrical Machines: DC Machines I — Construction, EMF Equation, Armature Reaction & Commutation

We finished transformers on Day 9. Now the rotating DC machine — same electromagnetic principles, plus a **commutator** that mechanically rectifies.

### 📖 Concept Deep Dive

**Construction.** A DC machine has a stationary **field** (poles + field winding on the yoke) and a rotating **armature** (slotted core carrying the winding), with a **commutator** (copper segments) and **brushes** that connect the rotating winding to the external circuit. The commutator's job: keep the torque/EMF **unidirectional** by switching connections as coils pass the magnetic neutral.

**EMF equation.** For a machine with `P` poles, `Z` armature conductors, flux per pole `φ` (Wb), speed `N` (rpm), and `A` parallel paths:

```
Eb = (φ · Z · N · P) / (60 · A)        [volts]
```

`A` depends on winding type: **lap winding A = P** (parallel paths = poles, for high-current/low-voltage); **wave winding A = 2** (for high-voltage/low-current). A useful compact form:

```
Eb = (P/A) · φ · Z · (N/60) = Ka · φ · ω     where Ka = ZP/(2πA), ω in rad/s
```

**Torque equation.** From power balance `Eb·Ia = Tω`:

```
Ta = (φ · Z · Ia · P)/(2π · A) = Ka · φ · Ia     [N·m]
```

So both EMF and torque share the machine constant `Ka = ZP/(2πA)`.

| Winding | Parallel paths A | Best for | Equalizer / dummy |
|---|---|---|---|
| **Lap** | A = P (= mP for multiplex) | high current, low voltage | needs **equalizer rings** |
| **Wave** | A = 2 | high voltage, low current | may need **dummy coils** |

**Armature reaction.** The **armature MMF** (due to load current) distorts and weakens the **main field MMF**. Effects:
1. **Cross-magnetising** component — shifts the **Magnetic Neutral Axis (MNA)** in the direction of rotation (generator) / against rotation (motor).
2. **Demagnetising** component — the part of armature MMF that directly opposes the field (arises once brushes are shifted), reducing flux and hence EMF.

```
Demagnetising AT/pole   = (Z·Ia)/(2A·P) × (2βm/180)   [β in mechanical degrees of brush shift]
Cross-magnetising AT/pole = (Z·Ia)/(2A·P) × ((180 − 2βm)/180)
```

**Cure:** **interpoles (commutating poles)** placed on the MNA to neutralise reaction in the commutation zone, and **compensating windings** (in pole-face slots, carrying armature current) to cancel cross-magnetisation under the main poles.

**Commutation.** As a coil passes the brush, its current must **reverse** (from +Ia/A to −Ia/A) in the short **commutation period**. If reversal lags, the trailing brush edge sparks. The self-induced **reactance voltage** `L·di/dt` opposes the reversal.

- **Resistance commutation** — high-resistance (carbon) brushes force current to switch paths.
- **EMF (voltage) commutation** — **interpoles** inject a rotational EMF into the commutating coil that drives the reversal ("ideal/sinusoidal commutation"). Interpole polarity: **same as the next main pole ahead** (generator), **same as the previous main pole** (motor).

> 💎 **KEY RESULT** — `Eb = φZNP/(60A)` and `Ta = φZIaP/(2πA) = Ka φ Ia`. **Lap: A = P; Wave: A = 2.** Armature reaction is cured by **interpoles + compensating windings**; interpoles primarily aid **commutation**.

> 🧠 **MEMORY HOOK** — "**Lap = Lots of paths (A=P), Wave = A=2.** Interpoles fix **commutation**; compensating windings fix **cross-magnetisation**. GEnerator interpole = next pole ahead; MOtor = pole behind."

> ⚠️ **TRAP ALERT** — **Interpoles** are for **commutation** (neutralise reactance voltage in the commutating coil); **compensating windings** are for **armature-reaction distortion** under the pole faces. Don't swap their roles.

### 📐 Formula Sheet

```
EMF        Eb = φ Z N P /(60 A)      (N in rpm)
Machine k  Ka = Z P /(2π A);  Eb = Ka φ ω  (ω rad/s)
Torque     Ta = φ Z Ia P /(2π A) = Ka φ Ia
Paths      Lap A = P ;  Wave A = 2
Power      Eb Ia = mechanical power developed = Ta ω
Demag AT/pole   = (Z Ia /(2 A P)) × (2β/180)
Cross AT/pole   = (Z Ia /(2 A P)) × ((180 − 2β)/180)
```

### 🧮 Solved Examples

**Example 1 — generated EMF.**
A 4-pole, **lap**-wound DC generator has `Z = 500` conductors, flux per pole `φ = 20 mWb`, running at `N = 1200 rpm`. Find the generated EMF.

```
Lap ⇒ A = P = 4
Eb = φ Z N P /(60 A) = (20e−3 × 500 × 1200 × 4)/(60 × 4)
   = (0.020 × 500 × 1200 × 4)/240
   = (0.020 × 500 × 1200)/60           [the 4/240 = 1/60]
   = (12 000)/60... let's compute directly:
   numerator = 0.020 × 500 = 10;  10 × 1200 = 12 000;  × 4 = 48 000
   denominator = 60 × 4 = 240
   Eb = 48 000 / 240 = 200 V
```
**Eb = 200 V.**

**Example 2 — same machine wave-wound.**
Rewound as a **wave** winding (A = 2), same φ, Z, N. Find the new EMF.

```
A = 2
Eb = φ Z N P /(60 A) = 48 000 / (60 × 2) = 48 000/120 = 400 V
```
**Eb = 400 V** — a wave winding doubles the voltage (halves the paths) but each path now carries the full line current, so it suits **high-voltage, low-current** machines.

### ⚠️ Common Traps

1. **A = P for lap, A = 2 for wave** — using the wrong A doubles or halves your EMF answer.
2. **Eb and Ta share Ka = ZP/(2πA)** — a favourite one-mark link.
3. **Armature reaction is fundamentally cross-magnetising** (at the geometric neutral); the demagnetising part appears **only after brush shift**.
4. **Interpole vs compensating winding:** commutation vs distortion — keep them separate.
5. **Flux per pole φ is per pole**, not total; total flux = Pφ.
6. **N is in rpm** in `φZNP/60A`; if given ω (rad/s), use `Eb = Ka φ ω` with `N = 60ω/2π`.

### 📝 Test — Electrical Machines (8 Q)

1. **(MCQ)** In a lap winding, the number of parallel paths equals:
   (a) 2  (b) P  (c) Z  (d) P/2
2. **(MCQ)** The EMF equation of a DC machine is:
   (a) φZNP/(60A)  (b) 4.44 f N φ  (c) φZN/A  (d) ZIaP/(2πA)
3. **(MCQ)** Armature reaction in a DC machine is primarily:
   (a) demagnetising  (b) cross-magnetising  (c) purely resistive  (d) capacitive
4. **(MCQ)** Interpoles are provided mainly to:
   (a) increase flux  (b) improve commutation  (c) reduce copper loss  (d) raise speed
5. **(MCQ)** A wave winding is preferred for machines that are:
   (a) high current, low voltage  (b) high voltage, low current  (c) low speed only  (d) single pole
6. **(NAT)** A 6-pole wave-wound DC generator has Z = 664 conductors, φ = 25 mWb, N = 500 rpm. Find Eb in volts. ______ V
7. **(NAT)** A DC motor has Ka φ = 1.2 (SI). If it draws Ia = 40 A, find the developed torque in N·m. ______ N·m
8. **(NAT)** A 4-pole lap-wound generator gives 220 V at 1000 rpm with Z = 440. Find the flux per pole in mWb. ______ mWb

<details>
<summary>🔑 Solutions</summary>

**1 → (b) P.** Lap: A = P (parallel paths = poles).

**2 → (a).** Eb = φZNP/(60A).

**3 → (b) cross-magnetising.** At the geometric neutral the armature MMF is perpendicular to the field — cross-magnetising; demagnetising appears with brush shift.

**4 → (b).** Interpoles inject an EMF to reverse the commutating-coil current — improve commutation.

**5 → (b).** Wave (A = 2) ⇒ high voltage, low current.

**6 →**
```
Wave ⇒ A = 2
Eb = φZNP/(60A) = (25e−3 × 664 × 500 × 6)/(60 × 2)
numerator = 0.025 × 664 = 16.6;  ×500 = 8300;  ×6 = 49 800
denominator = 120
Eb = 49 800/120 = 415 V
```
**Eb = 415 V.**

**7 →** Ta = Ka φ · Ia = 1.2 × 40 = **48 N·m.**

**8 →**
```
Lap ⇒ A = P = 4
Eb = φZNP/(60A) ⇒ 220 = φ × 440 × 1000 × 4/(60 × 4)
220 = φ × 440 × 1000/60 = φ × 7333.3
φ = 220/7333.3 = 0.030 Wb = 30 mWb
```
**φ = 30 mWb.**

</details>

---

## 🔧 Power Electronics: Other Devices & Gate Drives — TRIAC, DIAC, GTO, MOSFET/IGBT Drives

Day 8 completed the SCR trilogy. Now the rest of the switch family and how you actually **drive their gates**.

### 📖 Concept Deep Dive

**TRIAC (TRIode for AC).** A **bidirectional** thyristor — conducts in **both** directions, so it's the workhorse of **AC phase control** (light dimmers, fan regulators, heater control). It is equivalent to two **anti-parallel SCRs** with a common gate. Terminals: **MT1, MT2, gate G**. It can be triggered in **four quadrants** by ±MT2 and ±gate current:

| Quadrant | MT2 polarity | Gate polarity | Sensitivity |
|---|---|---|---|
| I (I+) | + | + | most sensitive |
| II (I−) | + | − | sensitive |
| III (III−) | − | − | sensitive |
| IV (III+) | − | + | **least sensitive** (avoid) |

**DIAC (DIode AC switch).** A **bidirectional trigger diode** — no gate; it stays off until the voltage reaches its **break-over voltage `VBO`** (≈ 30 V typical), then exhibits **negative resistance** (breaks back) and dumps a current pulse. Its classic job: **triggering a TRIAC** in a phase-control dimmer (RC + DIAC firing circuit).

**GTO (Gate Turn-Off thyristor).** Like an SCR but can be **turned OFF by a negative gate pulse** — no forced-commutation LC needed. Trade-off: turn-off needs a **large negative gate current** (turn-off gain typically only **3–5**), and it has higher on-state drop. Used in medium/high-power inverters and traction (largely superseded by IGBTs at lower ratings).

**Device comparison (the master table):**

| Device | Control | Turn-off | Direction | Drive | Freq |
|---|---|---|---|---|---|
| **SCR** | current-triggered | needs commutation | unidirectional | low gate power, pulse | low |
| **TRIAC** | current-triggered | line/natural | **bidirectional** | pulse | low (AC) |
| **GTO** | current-triggered | **gate turn-off** (−ve pulse) | unidirectional | high (−ve) gate current | medium |
| **Power BJT** | **current**-controlled | base current removed | unidirectional | continuous base drive | medium |
| **Power MOSFET** | **voltage**-controlled | gate discharged | unidirectional | high Zin, needs charge for Cgs | **very high** |
| **IGBT** | **voltage**-controlled | gate discharged | unidirectional | MOSFET-like gate | high |

**MOSFET / IGBT gate drives.** MOSFET and IGBT are **voltage-controlled** — the DC gate current is ~zero, but the gate has capacitance (`Ciss`, and the **Miller capacitance `Cgd`**) that must be **charged/discharged fast** to switch quickly. Key gate-drive facts:
1. **Gate charge `QG`** sets the drive current: `Ig(avg) = QG · fsw`. Peak drive current `Ipk ≈ ΔVgs/Rg`.
2. Drive `Vgs` typically **+12 to +15 V** to fully enhance (low `Rds(on)`); for IGBTs often **+15/−(5…15) V** (negative off-bias prevents false turn-on from Miller `dv/dt`).
3. The **Miller plateau** in the `Vgs` vs `QG` curve is where `Vds` swings — most switching loss occurs here.
4. **Isolation** between the low-voltage controller and the high-side switch: **opto-couplers**, **gate-drive transformers (pulse transformers)**, or dedicated isolated gate-driver ICs; high-side switches often use a **bootstrap** supply.

```
Average gate drive current   Ig = QG · fsw
Peak gate current            Ipk ≈ (Vdrive − Vgs(plateau))/Rg
Switching loss ∝ (Eon + Eoff)·fsw  (dominant at high fsw)
```

**Firing circuits.** For SCR/TRIAC: **R, RC, and UJT-based** relaxation oscillators generate the gate pulse; the **UJT** (with intrinsic standoff ratio η ≈ 0.5–0.8) fires when the capacitor reaches `η·VBB`. A **pulse transformer** isolates and delivers the trigger pulse to the gate.

```
UJT firing:  peak voltage Vp = η·VBB + VD  ;  T ≈ RC·ln(1/(1−η))
```

> 💎 **KEY RESULT** — **TRIAC = bidirectional (2 anti-parallel SCRs), 4-quadrant trigger, avoid quadrant IV.** **DIAC** triggers it. **GTO** turns off via a large **negative gate pulse** (turn-off gain 3–5). **MOSFET/IGBT** are **voltage-driven** — size the gate drive by **QG·fsw**.

> 🧠 **MEMORY HOOK** — "**TRIAC drives AC, DIAC triggers TRIAC, GTO gates itself off, MOSFET/IGBT want volts not amps (but charge Q·f).**"

> ⚠️ **TRAP ALERT** — MOSFET/IGBT gate current is **not** zero *dynamically* — you must supply **QG·fsw** to charge the gate every cycle. And a TRIAC's **quadrant IV (MT2−, G+)** is the least sensitive — good firing circuits avoid it.

### 📐 Formula Sheet

```
TRIAC ≈ two anti-parallel SCRs, common gate; triggers in 4 quadrants (avoid IV)
DIAC conducts when |V| ≥ VBO (≈ 30 V), then negative resistance
GTO turn-off gain βoff = IA/IG(off) ≈ 3–5  (needs large −ve gate pulse)
MOSFET/IGBT: voltage-controlled;  Ig(avg) = QG·fsw
Peak gate current  Ipk ≈ (Vdrive − Vplateau)/Rg
UJT firing  Vp = η VBB + VD ,  T = RC ln(1/(1−η))
Switching loss  Psw = (Eon + Eoff) fsw
```

### 🧮 Solved Examples

**Example 1 — gate drive current.**
An IGBT with total gate charge `QG = 120 nC` switches at `fsw = 20 kHz`. Find the **average** gate-drive current, and the peak current if `Vdrive − Vplateau = 9 V` and `Rg = 10 Ω`.

```
Average gate current  Ig = QG · fsw = 120e−9 × 20e3 = 120e−9 × 20 000
   = 2.4e−3 A = 2.4 mA
Peak gate current     Ipk ≈ (Vdrive − Vplateau)/Rg = 9/10 = 0.9 A
```
**Ig(avg) ≈ 2.4 mA; Ipk ≈ 0.9 A** — tiny average, but the driver must source ~1 A peaks.

**Example 2 — UJT firing.**
A UJT relaxation oscillator has `η = 0.63`, `VBB = 20 V`, `VD = 0.7 V`, `R = 47 kΩ`, `C = 0.1 µF`. Find the peak (firing) voltage and the oscillation period.

```
Vp = η VBB + VD = 0.63 × 20 + 0.7 = 12.6 + 0.7 = 13.3 V
T = RC · ln(1/(1 − η)) = 47e3 × 0.1e−6 × ln(1/(1 − 0.63))
  = 4.7e−3 × ln(1/0.37) = 4.7e−3 × ln(2.7027)
  = 4.7e−3 × 0.9943 = 4.673e−3 s ≈ 4.67 ms
```
**Vp = 13.3 V, T ≈ 4.67 ms** (firing frequency ≈ 214 Hz).

### ⚠️ Common Traps

1. **TRIAC is bidirectional; SCR is not.** A TRIAC ≈ two anti-parallel SCRs with **one** common gate.
2. **DIAC has no gate** — it's a two-terminal break-over trigger device, not a rectifier.
3. **GTO turn-off is not "free"** — it needs a **large negative gate current** (low turn-off gain), unlike the near-zero holding of an SCR after commutation.
4. **MOSFET/IGBT are voltage-controlled but charge-hungry:** average drive current = **QG·fsw**, so it rises with switching frequency.
5. **Miller capacitance (Cgd)** causes the plateau and false-turn-on via **dv/dt** — hence negative off-bias on IGBTs.
6. **Quadrant IV of a TRIAC is least sensitive** — don't assume all four quadrants trigger equally.

### 📝 Test — Power Electronics (8 Q)

1. **(MCQ)** A TRIAC is functionally equivalent to:
   (a) two series SCRs  (b) two anti-parallel SCRs with a common gate  (c) an SCR + diode  (d) two DIACs
2. **(MCQ)** A DIAC is used mainly to:
   (a) rectify AC  (b) turn off an SCR  (c) trigger a TRIAC  (d) regulate voltage
3. **(MCQ)** The distinguishing feature of a GTO is that it:
   (a) is bidirectional  (b) can be turned off by a negative gate pulse  (c) needs no gate  (d) is voltage-controlled
4. **(MCQ)** The average gate-drive current of a MOSFET/IGBT is given by:
   (a) Vgs/Rg  (b) QG·fsw  (c) zero always  (d) QG/fsw
5. **(MCQ)** Which TRIAC triggering quadrant is the **least** sensitive and normally avoided?
   (a) I (MT2+, G+)  (b) II (MT2+, G−)  (c) III (MT2−, G−)  (d) IV (MT2−, G+)
6. **(NAT)** A MOSFET has QG = 60 nC and switches at 100 kHz. Find the average gate-drive current in mA. ______ mA
7. **(NAT)** A GTO carries anode current 600 A and has a turn-off gain of 4. Find the required negative gate current in A. ______ A
8. **(NAT)** A UJT has η = 0.6, VBB = 24 V, VD = 0.7 V. Find the peak firing voltage Vp in volts. ______ V

<details>
<summary>🔑 Solutions</summary>

**1 → (b).** Two anti-parallel SCRs sharing one gate ⇒ bidirectional.

**2 → (c).** DIAC breaks over at VBO and fires the TRIAC's gate (RC-DIAC dimmer).

**3 → (b).** Gate-Turn-Off thyristor turns off with a large negative gate pulse.

**4 → (b) QG·fsw.**

**5 → (d).** Quadrant IV (MT2−, gate +) is least sensitive.

**6 →**
```
Ig = QG·fsw = 60e−9 × 100e3 = 60e−9 × 100 000 = 6e−3 A = 6 mA
```
**Ig = 6 mA.**

**7 →**
```
βoff = IA/IG(off) ⇒ IG(off) = IA/βoff = 600/4 = 150 A
```
**IG(off) = 150 A** (a large negative pulse — GTO's main drawback).

**8 →**
```
Vp = η VBB + VD = 0.6 × 24 + 0.7 = 14.4 + 0.7 = 15.1 V
```
**Vp = 15.1 V.**

</details>

---

`✅ Day 10 complete — Two-wattmeter three-phase power, DC machine EMF/torque & armature reaction, and the TRIAC/DIAC/GTO/MOSFET-IGBT drive family. Tomorrow: single-phase induction energy meter, DC generators (characteristics & build-up), and single-phase controlled rectifiers.`

*Correctness over length — re-derive any result you're unsure of and mark "verify" before the exam.*
