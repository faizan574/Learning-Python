# ⚡ GATE Technical Revision — Day 99 (2026-10-28)

*The DC bridge family (Wheatstone, Kelvin, high-R, megger) for resistance measurement, a full master formula sheet + mixed-PYQ sweep of Electrical Machines, and the same consolidation for Power Electronics — closing out this revision round.*

📅 Tech Day 99 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics

---

## 🔧 Measuring Instruments: DC Bridges — Wheatstone, Kelvin, High-R & Megger

### 📖 Concept Deep Dive

DC bridges measure **resistance** by a **null (balance)** method — comparing the unknown against known standards, independent of supply voltage at balance.

**Wheatstone bridge (medium R, ~1 Ω to 1 MΩ).** Four arms `P, Q, R, S` with a galvanometer across one diagonal and a battery across the other. At balance (no galvanometer current):

```
P/Q = R/S   ⇒   unknown S = R·Q/P
```

**Sensitivity** (galvanometer deflection per unit resistance unbalance) is maximised when the four arms are of comparable magnitude and depends on galvanometer current sensitivity. Errors: lead/contact resistance (significant for low R), thermoelectric EMFs, self-heating.

**Kelvin double bridge (low R, < 1 Ω).** For very low resistances, **lead and contact resistances** corrupt a Wheatstone reading. The Kelvin bridge adds a **second pair of ratio arms** (p, q) and a **yoke** to eliminate the connecting-lead resistance. At balance, with ratio arms matched (`P/Q = p/q`):

```
Rx = (P/Q)·S     (the yoke/lead resistance term cancels when P/Q = p/q)
```

So it accurately measures **milliohm-level** resistances (e.g., shunts, contacts).

**High-resistance measurement (> ~1 MΩ).** For insulation/high R, leakage currents over surfaces dominate — use **guard circuits** (guard terminal/ring to divert surface leakage away from the measuring galvanometer), **direct-deflection**, **loss-of-charge**, or a **megohmmeter (megger)**. 

**Megger.** A portable insulation-resistance tester with a **hand-cranked (or electronic) DC generator** (e.g., 500 V / 1 kV / 5 kV) and a **crossed-coil (ohmmeter) movement** that reads resistance **independent of generator speed** (two coils — deflecting & control — in the same field). Reads insulation resistance in **MΩ/GΩ**.

| Bridge/Method | Range | Key idea |
|---|---|---|
| Wheatstone | ~1 Ω – 1 MΩ | `S = R·Q/P` (null) |
| Kelvin double | < 1 Ω (mΩ) | cancels lead/contact R |
| Guarded/Megger | > 1 MΩ (insulation) | guard against leakage; megger generator |

> 💎 **KEY RESULT** — Wheatstone balance `P/Q = R/S` → `S = R·Q/P` (medium R). **Kelvin double bridge** eliminates lead/contact resistance for **low R** (`Rx = (P/Q)S` when ratio arms match). **Megger** = insulation tester (crossed-coil, reading independent of speed).

> 🧠 **MEMORY HOOK** — "**Wheatstone = medium (P/Q=R/S); Kelvin = low (kills lead R); megger/guard = high (insulation).**"

### 📐 Formula Sheet

| Quantity | Expression |
|---|---|
| Wheatstone balance | `P/Q = R/S` ⇒ `S = R·Q/P` |
| Kelvin balance | `Rx = (P/Q)·S` (ratio arms matched) |
| Bridge sensitivity | ∝ galvanometer sensitivity, arm ratios |
| High-R | guard circuit / loss-of-charge / megger |
| Megger | crossed-coil ohmmeter, 500 V–5 kV |

### 🧮 Solved Examples

**Example 1 — Wheatstone unknown.**
A Wheatstone bridge balances with `P = 100 Ω`, `Q = 1000 Ω`, `R = 200 Ω`. Find the unknown `S`.

```
At balance: P/Q = R/S ⇒ S = R·Q/P = 200·1000/100 = 2000 Ω
```

Unknown **S = 2000 Ω**.

**Example 2 — Kelvin bridge low resistance.**
A Kelvin double bridge (ratio arms matched, `P/Q = 0.01`) balances against a standard `S = 0.5 Ω`. Find the unknown low resistance `Rx`.

```
Rx = (P/Q)·S = 0.01 × 0.5 = 0.005 Ω = 5 mΩ
```

Unknown **Rx = 5 mΩ**.

### ⚠️ Common Traps

1. **Wheatstone for very low R** — lead/contact R corrupts it; use the **Kelvin double bridge**.
2. **Balance depends on supply voltage** — at **null**, balance is **independent** of the battery voltage.
3. **Megger reading varies with crank speed** — the **crossed-coil** movement makes the reading **independent** of generator speed.
4. **High-R without guarding** — surface leakage dominates; use a **guard** circuit.
5. **Kelvin for high resistance** — Kelvin is for **low** R; high R needs megger/guard.
6. **Confusing P/Q with R/S** — unknown `S = R·Q/P` (keep arm positions straight).

### 📝 Test — Measuring Instruments (8 Q)

1. The Wheatstone bridge balance condition is:
   (a) P·Q = R·S (b) P/Q = R/S (c) P+Q = R+S (d) PQ = RS²
2. The Kelvin double bridge is used for:
   (a) high resistance (b) low resistance (c) capacitance (d) inductance
3. A megger measures:
   (a) low resistance (b) insulation (high) resistance (c) capacitance (d) frequency
4. A guard circuit is used in measuring:
   (a) low R (b) high/insulation R (c) inductance (d) current
5. At bridge balance, the galvanometer current is:
   (a) maximum (b) zero (c) rated (d) half
6. **(NAT)** A Wheatstone bridge: P = 10 Ω, Q = 100 Ω, R = 40 Ω. Find S (Ω).
7. **(NAT)** A Kelvin bridge with P/Q = 0.02 balances against S = 2 Ω. Find Rx (mΩ).
8. **(NAT)** A Wheatstone bridge balances with P = Q and R = 500 Ω. Find S (Ω).

<details><summary>🔑 Solutions</summary>

**1 → (b).** `P/Q = R/S`.

**2 → (b).** Low resistance.

**3 → (b).** Insulation (high) resistance.

**4 → (b).** High/insulation R (surface leakage).

**5 → (b).** Zero at balance.

**6 (NAT).** `S = R·Q/P = 40·100/10 = 400 Ω`.

**7 (NAT).** `Rx = (P/Q)·S = 0.02·2 = 0.04 Ω = 40 mΩ`.

**8 (NAT).** `S = R·Q/P = 500·1 = 500 Ω`.

</details>

---

## 🔧 Electrical Machines: Revision — Master Formula Sheet & Mixed PYQ

### 📖 Concept Deep Dive

A consolidated sweep of the machines covered this round — **transformers, DC machines, induction motors, synchronous machines, special machines**. Keep these core relations ready.

**Transformers.** EMF `E = 4.44 f N Φm`; turns ratio `a = N1/N2 = V1/V2 = I2/I1`; referred impedance scales by `a²`. Efficiency max when **copper loss = iron loss**; `%regulation = (I(R cosφ ± X sinφ))/V2 ×100` (+ lagging). OC test → core loss & magnetising branch; SC test → copper loss & series Z.

**DC machines.** `E = (ΦZNP)/(60A)`; torque `T = (ΦZIaP)/(2πA)`; back-EMF `Eb = V − IaRa` (motor); `V = Eb + IaRa` (gen). Speed `N ∝ (V − IaRa)/Φ`. Max efficiency when **variable loss = constant loss** (`Ia²Ra = Pconst`).

**Induction motor.** `Ns = 120f/P`; slip `s = (Ns−N)/Ns`; rotor freq `fr = sf`; `Pag : Pcu2 : Pm = 1 : s : (1−s)`; `s_maxT = R2'/X2'`; `Tmax ⟂ R2'`. Star-delta start → 1/3 of DOL; autotransformer → x².

**Synchronous machines.** `E = 4.44 f N Φ Kw`; `P = (EV/Xs)sinδ` (cylindrical); salient adds reluctance power `(V²/2)(1/Xq−1/Xd)sin2δ`; `%Reg = (E−V)/V`; synchronize on V, f, phase-seq, phase; V-curve min at unity pf; over-excited = leading (condenser).

**Special machines.** Stepper `β = 360/(m·Nr)`; universal = series (AC+DC); BLDC = PM + electronic commutation.

> 💎 **KEY RESULT** — Transformer `E = 4.44fNΦm`, η-max at Pcu=Pi; DC `Eb=V−IaRa`, `N∝(V−IaRa)/Φ`; IM `Pag:Pcu2:Pm=1:s:(1−s)`, `s_maxT=R2'/X2'`; Sync `P=(EV/Xs)sinδ`, over-excited=leading.

> 🧠 **MEMORY HOOK** — "**4.44fNΦ (EMF); max-η = equal losses; 1:s:(1−s) power split; s_maxT = R2'/X2'; P = (EV/X)sinδ.**"

### 📐 Formula Sheet (master)

| Machine | Key formulas |
|---|---|
| Transformer | `E = 4.44 f N Φm`; `a = V1/V2`; Z' = a²Z; η-max Pcu=Pi |
| DC machine | `E = ΦZNP/60A`; `T = ΦZIaP/2πA`; `Eb = V−IaRa` |
| Induction | `Ns=120f/P`; `s=(Ns−N)/Ns`; `Pag:Pcu2:Pm=1:s:(1−s)`; `s_maxT=R2'/X2'` |
| Synchronous | `E=4.44fNΦKw`; `P=(EV/Xs)sinδ`; `%Reg=(E−V)/V` |
| Special | stepper `β=360/(m·Nr)`; universal = series |

### 🧮 Solved Examples

**Example 1 — Transformer efficiency condition.**
A transformer has iron loss 400 W and full-load copper loss 625 W. At what fraction of full load is efficiency maximum?

```
Max η when Pcu = Pi ⇒ (x²·625) = 400 ⇒ x² = 400/625 = 0.64 ⇒ x = 0.8
```

Maximum efficiency at **80% of full load**.

**Example 2 — Induction motor mixed.**
A 4-pole, 50 Hz, 3-φ induction motor runs at 1440 rpm with air-gap power 20 kW. Find slip, rotor copper loss and gross mechanical power.

```
Ns = 120·50/4 = 1500 rpm;  s = (1500−1440)/1500 = 0.04
Pcu2 = s·Pag = 0.04·20 = 0.8 kW
Pm = (1−s)·Pag = 0.96·20 = 19.2 kW
```

Slip **0.04**, rotor cu-loss **0.8 kW**, mechanical **19.2 kW**.

### ⚠️ Common Traps

1. **Max η at full load always** — only when **Pcu = Pi** (often <100% load).
2. **Referred impedance scales by `a`** — it scales by **`a²`**.
3. **Rotor cu-loss = s²Pag** — it is **sPag**.
4. **Tmax depends on R2'** — only `s_maxT` does; `Tmax ⟂ R2'`.
5. **Over-excited synchronous = lagging** — it is **leading** (condenser).
6. **DC motor speed ∝ Φ** — speed `N ∝ (V−IaRa)/Φ` (inverse with flux).

### 📝 Test — Electrical Machines (8 Q)

1. A transformer's EMF equation is:
   (a) 4.44fNΦm (b) 1.11fNΦ (c) fNΦ (d) 2fNΦ
2. Maximum transformer efficiency occurs when:
   (a) Pcu = 0 (b) Pcu = Pi (c) Pi = 0 (d) load = 0
3. In an induction motor, Pag:Pcu2:Pm equals:
   (a) 1:s:(1−s) (b) 1:(1−s):s (c) s:1:(1−s) (d) 1:s²:(1−s)
4. The power of a cylindrical synchronous machine is:
   (a) (EV/Xs)cosδ (b) (EV/Xs)sinδ (c) EV sinδ (d) (E/V)sinδ
5. A DC motor's speed is proportional to:
   (a) Φ (b) (V−IaRa)/Φ (c) IaRa (d) V·Φ
6. **(NAT)** A transformer: Pi = 300 W, FL Pcu = 1200 W. Find the load fraction for max η.
7. **(NAT)** A 6-pole, 50 Hz IM at slip 0.05. Find rotor speed (rpm).
8. **(NAT)** A cylindrical alternator: E = 1.4 pu, V = 1.0 pu, Xs = 0.7 pu, δ = 30°. Find P (pu).

<details><summary>🔑 Solutions</summary>

**1 → (a).** `4.44fNΦm`.

**2 → (b).** Pcu = Pi.

**3 → (a).** `1:s:(1−s)`.

**4 → (b).** `(EV/Xs)sinδ`.

**5 → (b).** `(V−IaRa)/Φ`.

**6 (NAT).** `x² = Pi/Pcu = 300/1200 = 0.25 ⇒ x = 0.5` (50% load).

**7 (NAT).** `Ns = 1000`; `N = 1000·0.95 = 950 rpm`.

**8 (NAT).** `P = (1.4·1.0/0.7)·sin30° = 2·0.5 = 1.0 pu`.

</details>

---

## 🔧 Power Electronics: Revision — Master Formula Sheet & Mixed PYQ

### 📖 Concept Deep Dive

A consolidated sweep of power electronics — **devices, rectifiers, choppers, inverters, AC controllers, metrics**.

**Devices.** SCR: latching/holding current, dv/dt & di/dt protection (snubber/inductor), forced vs natural commutation. MOSFET (voltage-driven, fast, low power), IGBT (high power + fast). Diode reverse recovery.

**Rectifiers.** 1-φ half-wave `Vdc = Vm/π`; 1-φ full-wave `Vdc = 2Vm/π`; 1-φ full converter `Vdc = (2Vm/π)cosα`; 3-φ full `Vdc = (3Vml/π)cosα` (≈1.35 Vll cosα); ripple factor `RF = √(FF²−1)`; source-inductance drop reduces Vdc.

**Choppers.** Buck `Vo = D·Vs`; boost `Vo = Vs/(1−D)`; buck-boost/Cuk `Vo = −Vs·D/(1−D)`; four-quadrant = Class E.

**Inverters.** 1-φ full-bridge square: `Vrms = Vs`, fundamental `0.9 Vs`, THD ≈ 48.3%, odd harmonics. 3-φ VSI 180°: `VL,rms = 0.816 Vdc`, fundamental `0.78 Vdc`, no triplens. SPWM fundamental ∝ m.

**AC voltage controller / cycloconverter.** Phase control (harmonics) vs integral-cycle (V∝√k, P∝k). Cycloconverter = direct AC→lower-f AC; matrix Vo ≤ 0.866 Vi.

**Metrics.** `THD = √(Frms²−F1²)/F1`; input pf = (distortion)(displacement); `RF = √(FF²−1)`.

> 💎 **KEY RESULT** — 1-φ full conv. `Vdc=(2Vm/π)cosα`; 3-φ full `Vdc=(3Vml/π)cosα`; buck `D·Vs`, boost `Vs/(1−D)`, buck-boost `−Vs·D/(1−D)`; square inverter THD≈48.3%; 3-φ 180° `VL=0.816Vdc`.

> 🧠 **MEMORY HOOK** — "**Rectifier (2Vm/π)cosα; buck D, boost 1/(1−D), buck-boost D/(1−D); inverter 0.9Vs (1-φ), 0.78Vdc (3-φ line).**"

### 📐 Formula Sheet (master)

| Converter | Key formula |
|---|---|
| 1-φ full-wave rect | `Vdc = 2Vm/π` |
| 1-φ full converter | `Vdc = (2Vm/π)cosα` |
| 3-φ full converter | `Vdc = (3Vml/π)cosα ≈ 1.35 Vll cosα` |
| Buck / Boost | `D·Vs` / `Vs/(1−D)` |
| Buck-boost / Cuk | `−Vs·D/(1−D)` |
| 1-φ inverter (sq) | `Vrms=Vs`, V1=0.9Vs, THD≈48.3% |
| 3-φ VSI 180° | `VL,rms=0.816Vdc`, V1=0.78Vdc |

### 🧮 Solved Examples

**Example 1 — 1-φ full converter.**
A 1-φ full converter fed from `Vm = 325 V` (peak) fires at `α = 60°`. Find the average DC output (ripple-free load).

```
Vdc = (2Vm/π)cosα = (2·325/π)·cos60° = (206.9)·0.5 = 103.5 V
```

Average output **≈ 103.5 V**.

**Example 2 — Chopper mix.**
A boost chopper: `Vs = 24 V`, `D = 0.4`. Find Vo. Then a buck-boost at the same D and Vs — find its |Vo|.

```
Boost: Vo = Vs/(1−D) = 24/(1−0.4) = 24/0.6 = 40 V
Buck-boost: |Vo| = Vs·D/(1−D) = 24·0.4/0.6 = 9.6/0.6 = 16 V
```

Boost **40 V**; buck-boost **16 V**.

### ⚠️ Common Traps

1. **Full converter Vdc = (Vm/π)cosα** — 1-φ **full** converter is **(2Vm/π)cosα** (half-wave is Vm/π).
2. **Boost = D·Vs** — boost is `Vs/(1−D)`; buck is `D·Vs`.
3. **Square-wave inverter low THD** — ≈ **48.3%** (high).
4. **3-φ VSI line RMS = Vdc** — it is **0.816 Vdc** (180° mode).
5. **Cycloconverter steps frequency up** — only **down**.
6. **Integral-cycle power ∝ √k** — power **∝ k**, voltage ∝ √k.

### 📝 Test — Power Electronics (8 Q)

1. The average output of a 1-φ full converter is:
   (a) Vm/π cosα (b) (2Vm/π)cosα (c) Vm/π (d) 2Vm/π
2. A boost converter output is:
   (a) D·Vs (b) Vs/(1−D) (c) −Vs·D/(1−D) (d) (1−D)Vs
3. The THD of a square-wave inverter is about:
   (a) 5% (b) 48% (c) 100% (d) 0%
4. The RMS line voltage of a 180° 3-φ VSI is:
   (a) Vdc (b) 0.816 Vdc (c) 0.45 Vdc (d) 0.5 Vdc
5. A cycloconverter's output frequency is:
   (a) higher than input (b) lower than input (c) equal (d) zero
6. **(NAT)** A 1-φ full converter: Vm = 200 V, α = 0°. Find Vdc (V).
7. **(NAT)** A buck chopper: Vs = 100 V, D = 0.35. Find Vo (V).
8. **(NAT)** A 3-φ full converter: Vml (line peak) = 400 V, α = 0°. Find Vdc (V). [use (3/π)Vml]

<details><summary>🔑 Solutions</summary>

**1 → (b).** `(2Vm/π)cosα`.

**2 → (b).** `Vs/(1−D)`.

**3 → (b).** ≈48.3%.

**4 → (b).** `0.816 Vdc`.

**5 → (b).** Lower than input.

**6 (NAT).** `Vdc = (2·200/π)·cos0° = 400/π = 127.3 V`.

**7 (NAT).** `Vo = D·Vs = 0.35·100 = 35 V`.

**8 (NAT).** `Vdc = (3/π)·Vml = (3/π)·400 = 381.97 ≈ 382 V`.

</details>

---

## 📊 Tech Progress

```
Measurements      [███████████████░░░]  Round 5 · topic 15/20 (DC bridges)
Electrical Mach.  [████████████████████]  Round 5 · topic 19/19 — section complete ✅
Power Electronics [████████████████████]  Round 5 · topic 19/19 — section complete ✅
```

> 🎯 **Day 99 one-liners:** (1) **Wheatstone P/Q=R/S (medium R); Kelvin kills lead-R (low R); megger = insulation.** (2) **Machines: 4.44fNΦ, max-η at Pcu=Pi, 1:s:(1−s), s_maxT=R2'/X2', P=(EV/Xs)sinδ.** (3) **PE: full-conv (2Vm/π)cosα, buck D·Vs, boost Vs/(1−D), square THD≈48%, 3-φ 180° 0.816Vdc.**

*Correctness over length — derive, don't memorise blindly; verify any "verify" figure. Onward. ⚡*
