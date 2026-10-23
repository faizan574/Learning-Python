# ⚡ GATE Technical Revision — Day 94 (2026-10-23)

*Three-phase power measurement and the two-wattmeter method that reads power factor off the meter ratio, the single-phase induction motor and why it needs a starting trick, and the single-phase voltage-source inverter with its square-wave harmonics.*

📅 Tech Day 94 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics

---

## 🔧 Measuring Instruments: Measurement of Power II — Three-Phase Power & the Two-Wattmeter Method

### 📖 Concept Deep Dive

Measuring power in a three-phase system uses **Blondel's theorem**: for an **n-wire** system, power can be measured with **(n − 1) wattmeters**. So a **3-wire** three-phase system (star or delta, balanced or unbalanced) needs **two wattmeters**; a **4-wire** system needs three.

**Two-wattmeter method (3-wire).** Two wattmeters are connected with their **current coils in two lines** (say R and Y) and their **pressure coils between those lines and the third line (B)**. The algebraic sum of the two readings gives the **total three-phase power**, for any load (balanced or unbalanced), any power factor:

```
Total power P = W1 + W2
```

For a **balanced** load at power-factor angle φ:

```
W1 = VL·IL·cos(30° − φ)
W2 = VL·IL·cos(30° + φ)
W1 + W2 = √3·VL·IL·cosφ    (total 3-φ power)
W1 − W2 = VL·IL·sinφ
```

**Power factor from the ratio.** Dividing:

```
tanφ = √3 · (W1 − W2)/(W1 + W2)
```

So the **power factor** can be found directly from the two readings — a key GATE result. Special cases (balanced load):
- **pf = 1 (φ = 0):** `W1 = W2` (both equal, cos30° each).
- **pf = 0.5 (φ = 60°):** `W2 = VL·IL·cos90° = 0` → **one wattmeter reads zero**.
- **pf < 0.5 (φ > 60°):** `W2` becomes **negative** → reverse its connection and subtract (`P = W1 − |W2|`).
- **pf = 0 (φ = 90°):** `W1 = −W2` → sum = 0 (no real power).

**Reactive power.** `Q = √3·(W1 − W2)` gives the total **reactive power** (balanced load) — the two-wattmeter method also yields VARs.

**Why Blondel.** With a common neutral point (real or created by PC star), each wattmeter measures a line current × the voltage from that line to the reference; summing cancels the reference term. This is why **one wattmeter suffices only for a balanced load with accessible neutral** (`P = 3 × one-phase reading`).

| pf (balanced) | W1, W2 |
|---|---|
| 1.0 (φ=0) | W1 = W2 (equal) |
| 0.5 (φ=60°) | W2 = 0 |
| <0.5 (φ>60°) | W2 negative |
| 0 (φ=90°) | W1 = −W2 |

> 💎 **KEY RESULT** — Two-wattmeter: `P = W1 + W2 = √3 VL IL cosφ`; `tanφ = √3(W1−W2)/(W1+W2)`; `Q = √3(W1−W2)`. At **pf 0.5 one meter reads zero**, below 0.5 it goes **negative**.

> 🧠 **MEMORY HOOK** — "**Blondel: (n−1) meters. 3-wire → 2 wattmeters. tanφ = √3·(W1−W2)/(W1+W2); pf 0.5 → W2 = 0.**"

### 📐 Formula Sheet

| Quantity | Expression |
|---|---|
| Blondel's theorem | n-wire → (n−1) wattmeters |
| Total power | `P = W1 + W2` |
| Balanced readings | `W1 = VL IL cos(30°−φ)`, `W2 = VL IL cos(30°+φ)` |
| Total (balanced) | `W1+W2 = √3 VL IL cosφ` |
| Power factor | `tanφ = √3(W1−W2)/(W1+W2)` |
| Reactive power | `Q = √3(W1−W2)` |

### 🧮 Solved Examples

**Example 1 — Power factor from two readings.**
Two wattmeters read `W1 = 8 kW` and `W2 = 4 kW` for a balanced 3-φ load. Find the total power and the power factor.

```
P = W1 + W2 = 8 + 4 = 12 kW
tanφ = √3(W1−W2)/(W1+W2) = √3(8−4)/(8+4) = √3·4/12 = √3·0.3333 = 0.5774
φ = arctan(0.5774) = 30°  ⇒  cosφ = cos30° = 0.866
```

Total power **12 kW**, power factor **0.866 lagging**.

**Example 2 — One wattmeter reads negative.**
For a balanced load, `W1 = 10 kW`, `W2 = −2 kW`. Find total power and pf.

```
P = W1 + W2 = 10 + (−2) = 8 kW
tanφ = √3(10−(−2))/(10+(−2)) = √3·12/8 = √3·1.5 = 2.598
φ = arctan(2.598) = 68.95°  ⇒  cosφ = cos68.95° ≈ 0.359
```

Total power **8 kW**, pf **≈ 0.36 lagging** (pf < 0.5, hence W2 negative).

### ⚠️ Common Traps

1. **Three wattmeters for 3-wire** — a 3-wire system needs only **two** (Blondel: n−1).
2. **W1 + W2 only for unity pf** — `P = W1 + W2` holds **always** (balanced or unbalanced); the cos(30°±φ) forms are for balanced loads.
3. **Negative reading is an error** — at **pf < 0.5**, W2 is genuinely **negative**; add it algebraically.
4. **pf from (W1+W2) alone** — pf needs the **difference too**: `tanφ = √3(W1−W2)/(W1+W2)`.
5. **One-wattmeter method for unbalanced loads** — one wattmeter (×3) works only for a **balanced** load with neutral.
6. **Forgetting √3 in Q** — reactive power `Q = √3(W1−W2)`, not `(W1−W2)`.

### 📝 Test — Measuring Instruments (8 Q)

1. By Blondel's theorem, a 3-phase 3-wire system needs:
   (a) 1 wattmeter (b) 2 wattmeters (c) 3 wattmeters (d) 4 wattmeters
2. In the two-wattmeter method, total power is:
   (a) W1 − W2 (b) W1 + W2 (c) √3(W1+W2) (d) (W1+W2)/√3
3. For a balanced load, the power factor is found from:
   (a) W1+W2 only (b) tanφ = √3(W1−W2)/(W1+W2) (c) W1/W2 (d) W1−W2 only
4. At a power factor of 0.5, one wattmeter reads:
   (a) maximum (b) zero (c) negative (d) equal to the other
5. One wattmeter reads negative when the power factor is:
   (a) 1 (b) 0.866 (c) below 0.5 (d) 0.5
6. **(NAT)** Two wattmeters read 6 kW and 2 kW (balanced load). Find the total power (kW).
7. **(NAT)** For Q6, find the power-factor angle φ (degrees).
8. **(NAT)** A balanced load: W1 = 5 kW, W2 = 5 kW. Find the power factor.

<details><summary>🔑 Solutions</summary>

**1 → (b).** Two wattmeters (n−1 = 2).

**2 → (b).** `P = W1 + W2`.

**3 → (b).** `tanφ = √3(W1−W2)/(W1+W2)`.

**4 → (b).** At pf 0.5 (φ=60°), W2 = VL IL cos90° = 0.

**5 → (c).** pf below 0.5 (φ > 60°).

**6 (NAT).** `P = 6 + 2 = 8 kW`.

**7 (NAT).** `tanφ = √3(6−2)/(6+2) = √3·4/8 = √3·0.5 = 0.866 ⇒ φ = 40.9°`.

**8 (NAT).** W1 = W2 ⇒ `tanφ = 0 ⇒ φ = 0 ⇒ pf = cos0 = 1.0` (unity).

</details>

---

## 🔧 Electrical Machines: Single-Phase Induction Motors — Double-Revolving-Field Theory & Starting

### 📖 Concept Deep Dive

A **single-phase induction motor (1-φ IM)** has a single stator winding producing a **pulsating** (not rotating) magnetic field. The key question: why is it **not self-starting**, and how is it started?

**Double-revolving-field theory.** A pulsating field `Fm·cosωt` along one axis can be resolved into **two rotating fields** of **half the amplitude** rotating in **opposite directions** at synchronous speed:

```
Fm cosωt (pulsating) = (Fm/2) forward-rotating + (Fm/2) backward-rotating
```

At **standstill**, the forward field produces a torque `+T` and the backward field `−T` — equal and opposite → **net torque = 0** → **not self-starting**. But once the rotor is **given a spin** in either direction, the slip with respect to the two fields differs: the forward field (low slip `s`) produces much more torque than the backward field (high slip `2−s`), so a **net torque** develops and the motor runs up. Hence a 1-φ IM **runs in whichever direction it is started**.

**Slips w.r.t. the two fields:**
```
Forward slip  = s
Backward slip = 2 − s
```

**Starting methods (create a rotating field at start).** A single-phase motor needs an **auxiliary (starting) winding** displaced 90° in space, carrying a current phase-shifted in time — making it momentarily "two-phase" to produce a rotating field:
- **Split-phase:** auxiliary winding has **high R/X** → its current leads; modest starting torque; auxiliary cut out by centrifugal switch. (fans, small tools)
- **Capacitor-start:** a **capacitor** in series with the auxiliary winding gives ≈90° phase split → **high starting torque**; cap cut out after start. (compressors, pumps)
- **Capacitor-start capacitor-run (two-value):** two capacitors → high starting torque + good running pf.
- **Permanent-split capacitor (PSC):** capacitor stays in run; smooth, low starting torque. (fans)
- **Shaded-pole:** a shorted copper ring (shading coil) on part of the pole creates a sweeping flux → very low starting torque, cheap. (small fans, toys)

| Method | Starting torque | Use |
|---|---|---|
| Split-phase | low-moderate | fans, grinders |
| Capacitor-start | high | pumps, compressors |
| Cap-start cap-run | high + good pf | AC compressors |
| Shaded-pole | very low | toys, small fans |

> 💎 **KEY RESULT** — Pulsating field = forward (slip `s`) + backward (slip `2−s`) rotating fields of half amplitude → **zero starting torque** (not self-starting). Starting needs an **auxiliary winding** (split-phase, capacitor, shaded-pole) to make a rotating field.

> 🧠 **MEMORY HOOK** — "**One pulsating = two counter-rotating halves → no start.** Capacitor-start = high torque; shaded-pole = cheap, weak."

### 📐 Formula Sheet

| Quantity | Expression |
|---|---|
| Field resolution | `Fm cosωt = (Fm/2)fwd + (Fm/2)bwd` |
| Forward slip | `s` |
| Backward slip | `2 − s` |
| Net starting torque | `0` (fields cancel at standstill) |
| Phase split (start) | auxiliary winding ≈90° in space + time |
| Running direction | same as the direction given at start |

### 🧮 Solved Examples

**Example 1 — Backward slip.**
A single-phase induction motor runs at a forward slip of `s = 0.04`. Find the slip with respect to the backward-rotating field.

```
Backward slip = 2 − s = 2 − 0.04 = 1.96
```

The rotor sees the backward field at slip **1.96** (high slip → small backward torque, mostly loss).

**Example 2 — Speed from slip.**
A 4-pole, 50 Hz single-phase induction motor runs at forward slip 0.05. Find the rotor speed.

```
Ns = 120f/P = 120·50/4 = 1500 rpm
N = Ns(1 − s) = 1500(1 − 0.05) = 1500·0.95 = 1425 rpm
```

Rotor speed **= 1425 rpm**.

### ⚠️ Common Traps

1. **1-φ IM is self-starting** — it is **not**; net starting torque is zero (double-field cancellation).
2. **Backward slip = s** — it is **2 − s**.
3. **Capacitor-start cap stays in** — in capacitor-**start**, the capacitor is **cut out** after start (unlike PSC/cap-run).
4. **Shaded-pole has high starting torque** — it has **very low** starting torque (cheap, simple).
5. **Direction is fixed** — a 1-φ IM runs in **whichever direction it is started**.
6. **Auxiliary winding is for running** — it is mainly for **starting** (except PSC/cap-run).

### 📝 Test — Electrical Machines (8 Q)

1. A single-phase induction motor is:
   (a) self-starting (b) not self-starting (c) a synchronous motor (d) a DC motor
2. The pulsating field is resolved into two rotating fields of:
   (a) full amplitude (b) half amplitude, opposite directions (c) quarter amplitude (d) same direction
3. The slip with respect to the backward field is:
   (a) s (b) 1 − s (c) 2 − s (d) 1 + s
4. The highest starting torque among these is given by:
   (a) shaded-pole (b) capacitor-start (c) split-phase (d) PSC
5. A shaded-pole motor's starting torque is:
   (a) very high (b) very low (c) infinite (d) negative
6. **(NAT)** A 1-φ IM runs at forward slip 0.06. Find the backward slip.
7. **(NAT)** A 6-pole, 50 Hz 1-φ IM runs at forward slip 0.05. Find the rotor speed (rpm).
8. **(NAT)** A 1-φ IM runs at 2820 rpm on a 50 Hz supply (2-pole). Find the forward slip.

<details><summary>🔑 Solutions</summary>

**1 → (b).** Not self-starting (fields cancel at standstill).

**2 → (b).** Half amplitude, opposite directions.

**3 → (c).** `2 − s`.

**4 → (b).** Capacitor-start (≈90° phase split).

**5 → (b).** Very low.

**6 (NAT).** Backward slip `= 2 − 0.06 = 1.94`.

**7 (NAT).** `Ns = 120·50/6 = 1000 rpm`; `N = 1000(1−0.05) = 950 rpm`.

**8 (NAT).** `Ns = 120·50/2 = 3000 rpm`; `s = (3000−2820)/3000 = 180/3000 = 0.06`.

</details>

---

## 🔧 Power Electronics: Inverters I — Single-Phase VSI (Half & Full Bridge) & THD

### 📖 Concept Deep Dive

An **inverter** converts **DC to AC** (adjustable voltage/frequency). A **Voltage Source Inverter (VSI)** has a stiff DC voltage source (capacitor) at the input. We analyse the **single-phase half-bridge** and **full-bridge** with square-wave output.

**Half-bridge VSI.** Two switches (S1, S2) and a **split DC supply** (two capacitors giving ±Vs/2). The output swings between **+Vs/2 and −Vs/2** (a square wave of peak Vs/2). RMS of the output (square wave):

```
Vo,rms = Vs/2
Fundamental RMS: Vo1,rms = (1/√2)·(4/π)·(Vs/2) = (2Vs)/(√2·π) = 0.45 Vs
```

**Full-bridge VSI.** Four switches (two legs, H-bridge); output swings between **+Vs and −Vs** (square wave of peak Vs) — **twice** the half-bridge output for the same DC. For a square wave:

```
Vo,rms = Vs
Fundamental RMS: Vo1,rms = (4/π)·(Vs/√2) = (4Vs)/(√2·π) = 0.90 Vs
```

**Fourier / harmonics.** A square-wave output has only **odd harmonics** (1, 3, 5, 7, …); the nth harmonic RMS is `(1/n)` of the fundamental's peak scaling:

```
Von = (4Vs/√2·π)·(1/n)   for n = 1,3,5,…  (full bridge)
```

**Total Harmonic Distortion (THD).** Measures the harmonic content relative to the fundamental:

```
THD = √(Vrms² − Vo1,rms²) / Vo1,rms = √(Σ Von² for n≥3) / Vo1
```

For a **square wave**, `Vrms = Vs` (full bridge) and `Vo1 = 0.90 Vs`:

```
THD = √(Vs² − (0.90Vs)²)/(0.90Vs) = √(1 − 0.81)/0.9 = √0.19/0.9 = 0.436/0.9 ≈ 0.484 (48.4%)
```

So a pure square wave has **≈48.3% THD** — high; reduced by **PWM** (next lesson), **quasi-square (notched)** control, or filtering.

**Voltage control** of a square-wave inverter: vary the DC link (`Vs`), or use **quasi-square wave** (introduce a zero-voltage notch of angle, varying the conduction angle), which also lets you **eliminate specific harmonics** (harmonic elimination).

| Inverter | Peak output | RMS | Fundamental RMS |
|---|---|---|---|
| Half-bridge | ±Vs/2 | Vs/2 | 0.45 Vs |
| Full-bridge | ±Vs | Vs | 0.90 Vs |

> 💎 **KEY RESULT** — Square-wave full-bridge: `Vo,rms = Vs`, fundamental `Vo1 = (4/√2π)Vs ≈ 0.90 Vs`; half-bridge gives half these. Square wave has only **odd harmonics** and **THD ≈ 48.3%**.

> 🧠 **MEMORY HOOK** — "**Half-bridge = 0.45 Vs fundamental; full-bridge = 0.90 Vs (double). Square wave = odd harmonics, ~48% THD.**"

### 📐 Formula Sheet

| Quantity | Expression |
|---|---|
| Half-bridge RMS | `Vo,rms = Vs/2` |
| Half-bridge fundamental | `Vo1 = (2√2/π)(Vs/2) ≈ 0.45 Vs` |
| Full-bridge RMS | `Vo,rms = Vs` |
| Full-bridge fundamental | `Vo1 = (4/√2·π)Vs ≈ 0.90 Vs` |
| nth harmonic | `Von = Vo1/n` (n = 1,3,5,…) |
| THD | `√(Vrms² − Vo1²)/Vo1` |
| Square-wave THD | `≈ 0.483 (48.3%)` |

### 🧮 Solved Examples

**Example 1 — Full-bridge fundamental.**
A single-phase full-bridge square-wave VSI has `Vs = 200 V` DC. Find the RMS output and the fundamental RMS.

```
Vo,rms = Vs = 200 V
Vo1,rms = 0.90·Vs = 0.90·200 = 180 V  (precisely (4/√2π)·200 = 180.1 V)
```

Output RMS **200 V**, fundamental RMS **≈ 180 V**.

**Example 2 — Third-harmonic content.**
For the inverter in Example 1, find the RMS of the 3rd harmonic.

```
Vo3 = Vo1/3 = 180/3 = 60 V
```

Third-harmonic RMS **= 60 V** (one-third of the fundamental).

### ⚠️ Common Traps

1. **Full-bridge output = half-bridge** — full-bridge gives **double** the voltage (±Vs vs ±Vs/2).
2. **Square wave has even harmonics** — it has only **odd** harmonics (3, 5, 7, …).
3. **Fundamental = RMS** — fundamental `Vo1 = 0.90 Vs` (full bridge) is **less** than `Vrms = Vs`.
4. **THD of square wave is small** — it is **≈48.3%**, quite high.
5. **nth harmonic amplitude = fundamental** — it falls as **1/n**.
6. **VSI needs a current source** — a **VSI** has a stiff **voltage** source (capacitor); a CSI has a current source.

### 📝 Test — Power Electronics (8 Q)

1. A voltage source inverter converts:
   (a) AC to DC (b) DC to AC (c) DC to DC (d) AC to AC (same f)
2. The RMS output of a single-phase full-bridge square-wave inverter is:
   (a) Vs/2 (b) Vs (c) 2Vs (d) 0.45Vs
3. The fundamental RMS output of a full-bridge square-wave VSI is:
   (a) 0.45 Vs (b) 0.90 Vs (c) Vs (d) 1.11 Vs
4. A square-wave inverter output contains:
   (a) even harmonics (b) odd harmonics only (c) all harmonics (d) none
5. The THD of a square-wave inverter output is about:
   (a) 5% (b) 48% (c) 100% (d) 0%
6. **(NAT)** A full-bridge square-wave VSI has Vs = 300 V. Find the fundamental RMS output (V).
7. **(NAT)** For Q6, find the RMS of the 5th harmonic (V).
8. **(NAT)** A half-bridge square-wave VSI has Vs = 400 V. Find the RMS output voltage (V).

<details><summary>🔑 Solutions</summary>

**1 → (b).** DC to AC.

**2 → (b).** `Vo,rms = Vs`.

**3 → (b).** `Vo1 ≈ 0.90 Vs`.

**4 → (b).** Odd harmonics only.

**5 → (b).** ≈48.3%.

**6 (NAT).** `Vo1 = 0.90·300 = 270 V` (precisely 270.2 V).

**7 (NAT).** `Vo5 = Vo1/5 = 270/5 = 54 V`.

**8 (NAT).** Half-bridge: `Vo,rms = Vs/2 = 400/2 = 200 V`.

</details>

---

## 📊 Tech Progress

```
Measurements      [██████████░░░░░░░░]  Round 5 · topic 10/20 (Power II: two-wattmeter method)
Electrical Mach.  [██████████████░░░░]  Round 5 · topic 14/19 (1-φ induction motors)
Power Electronics [██████████████░░░░]  Round 5 · topic 14/19 (Inverters I: 1-φ VSI)
```

> 🎯 **Day 94 one-liners:** (1) **2-wattmeter: P = W1+W2 = √3VLILcosφ; tanφ = √3(W1−W2)/(W1+W2); pf 0.5 → W2=0.** (2) **1-φ IM: pulsating = fwd(s)+bwd(2−s); not self-starting; capacitor-start = high torque.** (3) **Full-bridge square VSI: Vrms = Vs, Vo1 = 0.90Vs, odd harmonics, THD ≈ 48.3%.**

*Correctness over length — derive, don't memorise blindly; verify any "verify" figure. Onward. ⚡*
