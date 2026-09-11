# ⚡ GATE Technical Revision — Day 52 (2026-09-11)

*Round-3 pass 10 — two-wattmeter method, the induction motor, and rectifier performance. High-frequency GATE numericals.*

📅 Tech Day 52 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics · 🔁 Round-3 pass 10

> 🧠 **MEMORY HOOK** — Today: the **two-wattmeter method** (pf from the two readings), the **3-φ induction motor** (slip & torque), and **rectifier performance** (ripple factor, TUF, overlap angle). All three are dense with NAT questions.

---

## 🔧 Measuring Instruments: Power Measurement II — Two-Wattmeter Method

### 📖 Concept Deep Dive

**Blondel's theorem:** power in an **n-wire** system can be measured by **(n−1) wattmeters**. So a **3-phase, 3-wire** system needs **two wattmeters**; a 3-phase 4-wire needs three.

**Two-wattmeter connection:** current coils in **two lines** (say R and Y), pressure coils from those lines to the **third** line (B). For a **balanced** load with phase angle `φ` (pf = cosφ):

```
W1 = VL·IL·cos(30° − φ)
W2 = VL·IL·cos(30° + φ)
Total power  P = W1 + W2 = √3·VL·IL·cosφ
Reactive power Q = √3·(W1 − W2)
tanφ = √3·(W1 − W2)/(W1 + W2)
```

**Power-factor cases (the key GATE points):**
- **pf = 1 (φ = 0):** `W1 = W2` (both equal, both positive).
- **pf = 0.5 (φ = 60°):** `W2 = VL·IL·cos(90°) = 0` — **one wattmeter reads zero**.
- **pf < 0.5 (φ > 60°):** `W2` becomes **negative** — one wattmeter reads **negative** (reverse the connection/pressure-coil to read it, then subtract).
- **pf = 0 (φ = 90°):** `W1 = −W2` (equal and opposite); total = 0.

So as the load becomes more reactive, the two readings **diverge**; at pf = 0.5 one reads zero, below that one goes negative.

> 💎 **KEY RESULT** — `P = W1 + W2 = √3 VL IL cosφ`; `tanφ = √3(W1−W2)/(W1+W2)`. **pf = 1 → equal**; **pf = 0.5 → one reads 0**; **pf < 0.5 → one reads negative**; **pf = 0 → equal & opposite**.

> ⚠️ **TRAP ALERT** — Below **pf = 0.5 (φ > 60°)** one wattmeter reads **negative** — it must be **subtracted** (total = W1 + W2 with the negative sign). Don't take the arithmetic sum of magnitudes. `tanφ` uses `√3(W1−W2)/(W1+W2)`.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Blondel's theorem | n-wire → (n−1) wattmeters |
| Wattmeter readings | `W1 = VLIL cos(30−φ)`, `W2 = VLIL cos(30+φ)` |
| Total power | `P = W1 + W2 = √3 VL IL cosφ` |
| Reactive power | `Q = √3 (W1 − W2)` |
| Power factor | `tanφ = √3(W1−W2)/(W1+W2)` |
| pf = 0.5 case | `W2 = 0` (φ = 60°) |

### 🧮 Solved Examples

**Example 1 — pf from readings.**
Two wattmeters read `W1 = 1000 W` and `W2 = 400 W` (balanced load). Find total power and pf.

- `P = W1 + W2 = 1400 W`.
- `tanφ = √3(W1−W2)/(W1+W2) = 1.732 × (600/1400) = 1.732 × 0.4286 = 0.742`.
- `φ = arctan(0.742) = 36.6°`; `cosφ = 0.803` (lagging).

**Example 2 — negative reading.**
A balanced load at pf = 0.3 lagging draws such that `W1 = 1200 W`. Will `W2` be positive? What's the sign significance?

- `φ = arccos(0.3) = 72.5° > 60°`, so `W2 = VLIL cos(30+72.5) = VLIL cos(102.5°) < 0` → **W2 is negative**.
- Total power `= W1 + W2` (with W2's negative value); must reverse the meter to read its magnitude then subtract.

> 🧠 **MEMORY HOOK** — "**One wattmeter zero at pf 0.5, negative below it.**" `tanφ = √3(W1−W2)/(W1+W2)` gives the pf straight from the two readings.

### ⚠️ Common Traps

1. Adding **magnitudes** when one reading is negative (must subtract).
2. Forgetting **Blondel**: 3-wire needs **2** wattmeters (not 3).
3. Dropping the **√3** in `tanφ`.
4. Thinking one reading is always positive (it's negative for pf < 0.5).
5. Using line vs phase quantities inconsistently.
6. Confusing reactive `Q = √3(W1−W2)` with `(W1+W2)`.

### 📝 Test — Two-Wattmeter Method (8 Q)

1. A 3-φ 3-wire system needs how many wattmeters? (a) 1 (b) 2 (c) 3 (d) 4.
2. At unity pf, the two wattmeter readings are: (a) equal (b) opposite (c) one zero (d) one negative.
3. One wattmeter reads zero when pf is: (a) 1.0 (b) 0.866 (c) 0.5 (d) 0.
4. Total power equals: (a) W1 − W2 (b) W1 + W2 (c) √3(W1−W2) (d) W1·W2.
5. Power factor angle: tanφ = (a) (W1−W2)/(W1+W2) (b) √3(W1−W2)/(W1+W2) (c) √3(W1+W2)/(W1−W2) (d) (W1+W2)/(W1−W2).
6. **(NAT)** W1 = 800 W, W2 = 400 W. Total power (W)?
7. **(NAT)** For Q6, tanφ (3 dp)?
8. **(NAT)** For Q6, power factor cosφ (3 dp)?

<details><summary>🔑 Solutions</summary>

**Q1 — (b) 2.**

**Q2 — (a) equal.**

**Q3 — (c) 0.5.**

**Q4 — (b) W1 + W2.**

**Q5 — (b).** `√3(W1−W2)/(W1+W2)`.

**Q6.** `P = 800 + 400 = 1200 W`.

**Q7.** `tanφ = √3(400)/(1200) = 1.732 × 0.3333 = 0.577`.

**Q8.** `φ = arctan(0.577) = 30°`; `cosφ = 0.866`.

</details>

---

## 🔧 Electrical Machines: 3-φ Induction Motor I — Slip & Torque

### 📖 Concept Deep Dive

A **3-phase induction motor** has a **stator** producing a **rotating magnetic field** and a **rotor** (squirrel-cage or wound) that follows it. It is the workhorse of industry.

**Rotating field & synchronous speed.** Three-phase currents in the stator create a field rotating at **synchronous speed**:

```
Ns = 120·f/P   rpm   (f = supply freq, P = poles)
```

**Slip.** The rotor runs slightly **slower** than `Ns` (it must, to induce rotor EMF). **Slip**:

```
s = (Ns − N)/Ns    (per unit);   N = Ns(1 − s)
At standstill s = 1; at synchronous speed s = 0.
```

**Rotor frequency** `fr = s·f`. Rotor EMF at slip s: `Er = s·E2` (E2 = standstill rotor EMF). Rotor reactance at slip s: `Xr = s·X2`.

**Torque equation.** The torque developed:

```
T ∝ (s·E2²·R2) / (R2² + (s·X2)²)
Starting torque (s=1):  T_st ∝ E2²·R2/(R2² + X2²)
```

**Maximum (breakdown) torque condition** — occurs when **rotor resistance equals rotor reactance at that slip**:

```
R2 = s·X2   ⇒   slip at max torque  s_max = R2/X2
Maximum torque  T_max ∝ E2²/(2·X2)   — INDEPENDENT of R2
```

So **adding rotor resistance** (wound rotor) **does not change the maximum torque** but **shifts it to a higher slip** — this is how rotor-resistance starters boost **starting** torque (at s=1, choose R2 = X2 to get max torque at start).

**Power flow:** `P_airgap : P_mech : P_rotorCu = 1 : (1−s) : s`. So rotor copper loss = `s × P_airgap`, and mechanical power = `(1−s) × P_airgap`.

> 💎 **KEY RESULT** — `Ns = 120f/P`, `s = (Ns−N)/Ns`, `fr = sf`. Max torque at **s_max = R2/X2**; `T_max ∝ E2²/(2X2)` (**independent of R2**). Power split **1 : (1−s) : s** (airgap : mech : rotor-Cu).

> ⚠️ **TRAP ALERT** — **Maximum torque is independent of rotor resistance**; R2 only sets the **slip** at which it occurs. Rotor copper loss `= s × airgap power` (so running at high slip is inefficient). `fr = sf` (rotor frequency is slip × supply).

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Synchronous speed | `Ns = 120f/P` |
| Slip | `s = (Ns − N)/Ns` ; `N = Ns(1−s)` |
| Rotor frequency | `fr = s·f` |
| Torque | `T ∝ sE2²R2/(R2² + (sX2)²)` |
| Slip at max torque | `s_max = R2/X2` |
| Max torque | `T_max ∝ E2²/(2X2)` (indep. of R2) |
| Power ratio | `Pairgap : Pmech : ProtorCu = 1 : (1−s) : s` |

### 🧮 Solved Examples

**Example 1 — slip & rotor frequency.**
A 4-pole, 50 Hz induction motor runs at `1440 rpm`. Find slip and rotor frequency.

- `Ns = 120×50/4 = 1500 rpm`.
- `s = (1500 − 1440)/1500 = 60/1500 = 0.04 = 4%`.
- `fr = s·f = 0.04 × 50 = 2 Hz`.

**Example 2 — power split.**
A motor's air-gap power is `10 kW` at slip `s = 0.05`. Rotor copper loss and mechanical power?

- Rotor Cu loss `= s × Pairgap = 0.05 × 10 = 0.5 kW`.
- Mechanical power `= (1−s) × Pairgap = 0.95 × 10 = 9.5 kW`.

> 🧠 **MEMORY HOOK** — "**s_max = R2/X2; T_max doesn't care about R2.**" Power splits **1 : (1−s) : s** — the slip fraction is lost as rotor heat.

### ⚠️ Common Traps

1. Thinking rotor resistance changes **maximum** torque (it changes only **s_max**).
2. Forgetting `fr = sf` (rotor frequency).
3. Using `N` instead of `Ns` in slip's denominator.
4. Mixing up the power ratio (rotor Cu = **s** × airgap, not (1−s)).
5. Assuming the rotor runs at Ns (then s = 0 and no torque).
6. Forgetting max torque occurs at `R2 = sX2`.

### 📝 Test — Induction Motor I (8 Q)

1. Synchronous speed is: (a) 120f/P (b) 60f/P (c) 120P/f (d) fP/120.
2. At standstill, slip equals: (a) 0 (b) 0.5 (c) 1 (d) ∞.
3. Rotor frequency is: (a) f (b) sf (c) f/s (d) Ns.
4. Maximum torque is: (a) proportional to R2 (b) independent of R2 (c) zero (d) at s=0.
5. Slip at maximum torque is: (a) R2·X2 (b) R2/X2 (c) X2/R2 (d) 1.
6. **(NAT)** 6-pole, 50 Hz motor at 960 rpm. Slip (%)?
7. **(NAT)** For Q6, rotor frequency (Hz)?
8. **(NAT)** Air-gap power 12 kW, s = 0.04. Mechanical power (kW)?

<details><summary>🔑 Solutions</summary>

**Q1 — (a) 120f/P.**

**Q2 — (c) 1.**

**Q3 — (b) sf.**

**Q4 — (b) independent of R2.**

**Q5 — (b) R2/X2.**

**Q6.** `Ns = 120×50/6 = 1000`; `s = (1000−960)/1000 = 0.04 = 4%`.

**Q7.** `fr = 0.04 × 50 = 2 Hz`.

**Q8.** `Pmech = (1−s)Pairgap = 0.96 × 12 = 11.52 kW`.

</details>

---

## 🔧 Power Electronics: Rectifier Performance (Ripple, TUF, pf, Overlap)

### 📖 Concept Deep Dive

Performance metrics let us compare rectifiers.

**Ripple factor (RF)** — the ratio of the AC (ripple) component to the DC component of the output:

```
RF = Vac(rms)/Vdc = √( (Vrms/Vdc)² − 1 )
Lower RF = smoother DC.  1-φ half-wave RF ≈ 1.21 ; 1-φ full-wave RF ≈ 0.48.
```

**Rectification efficiency** `η = Pdc/Pac = Vdc²/Vrms²` (for R load). Half-wave ≈ 40.6%, full-wave ≈ 81%.

**Transformer Utilisation Factor (TUF)** — `TUF = Pdc / (VA rating of transformer)`; measures how well the transformer is used. 1-φ half-wave ≈ 0.287; 1-φ full-wave (centre-tap) ≈ 0.693; bridge ≈ 0.812.

**Input power factor** — `pf = P(real)/S(apparent) = (Vrms·Irms of fundamental × displacement)/(Vrms·Irms total)`. For phase-controlled converters it **falls with firing angle** and with harmonic content:

```
pf = (distortion factor) × (displacement factor)
Distortion factor = I1(rms)/I(rms) ;  Displacement factor = cosφ1
```

**Effect of source inductance — overlap (commutation) angle `µ`.** Real supplies have inductance `Ls`, so current cannot transfer instantly between devices; during the **overlap angle `µ`** two devices conduct together, causing a **drop in average output voltage**:

```
Average voltage drop due to overlap (1-φ full converter):  ΔVd = (2·ω·Ls·Id)/π
For a p-pulse converter:  ΔVd = (p·ω·Ls·Id)/(2π)
Output:  Vd = Vd0·cosα − (overlap drop)
```

So source inductance **reduces output**, **softens commutation**, and the overlap grows with load current `Id`.

> 💎 **KEY RESULT** — RF = `√((Vrms/Vdc)²−1)` (full-wave ≈ 0.48, half-wave ≈ 1.21). TUF(bridge) ≈ 0.81. pf = **distortion × displacement factor**. Source inductance → **overlap angle µ** → output drop `ΔVd = 2ωLs·Id/π` (1-φ full converter).

> ⚠️ **TRAP ALERT** — Source inductance **reduces** the average DC output (overlap drop) and the drop **increases with load current Id**. Input pf of a controlled rectifier is **displacement × distortion** — harmonics (distortion factor < 1) lower it even at α = 0.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Ripple factor | `RF = √((Vrms/Vdc)² − 1)` |
| Rectification efficiency | `η = Vdc²/Vrms²` (R load) |
| TUF | `Pdc / (transformer VA)` |
| Input pf | `(I1/Irms)·cosφ1` = distortion × displacement |
| Overlap drop (1-φ full) | `ΔVd = 2ωLs·Id/π` |
| Overlap drop (p-pulse) | `ΔVd = p·ωLs·Id/(2π)` |

### 🧮 Solved Examples

**Example 1 — ripple factor.**
A full-wave rectifier (R load) has `Vdc = 0.637 Vm` and `Vrms = 0.707 Vm`. Ripple factor?

- `RF = √((Vrms/Vdc)² − 1) = √((0.707/0.637)² − 1) = √((1.1099)² − 1) = √(1.2319 − 1) = √0.2319 = 0.482`.
- ≈ **0.48** (standard full-wave value).

**Example 2 — overlap voltage drop.**
A 1-φ full converter with `Ls = 2 mH`, supply `50 Hz`, load current `Id = 20 A`. Average voltage drop due to source inductance?

- `ω = 2π×50 = 314.16 rad/s`.
- `ΔVd = 2ωLs·Id/π = 2 × 314.16 × 0.002 × 20 / 3.1416 = 2 × 314.16 × 0.04 / 3.1416`.
- `= 25.13/3.1416 = 8.0 V`.
- So the output is reduced by about **8 V** due to overlap.

> 🧠 **MEMORY HOOK** — "**Full-wave RF ≈ 0.48, bridge TUF ≈ 0.81.**" Source inductance → overlap µ → output drop `∝ Ls·Id` (grows with load).

### ⚠️ Common Traps

1. Thinking source inductance **raises** output (it **lowers** it via overlap).
2. Using only **displacement** factor for pf (must include **distortion** factor).
3. Forgetting RF(full-wave) ≈ 0.48 vs RF(half-wave) ≈ 1.21.
4. Mixing TUF values (bridge ≈ 0.81, centre-tap ≈ 0.69).
5. Thinking overlap is independent of **Id** (it grows with load).
6. Confusing ripple **factor** with ripple **frequency**.

### 📝 Test — Rectifier Performance (8 Q)

1. Ripple factor of a 1-φ full-wave rectifier (R load) is about: (a) 1.21 (b) 0.48 (c) 0.1 (d) 0.
2. The TUF of a single-phase bridge rectifier is about: (a) 0.287 (b) 0.5 (c) 0.812 (d) 1.0.
3. Input power factor = displacement factor × : (a) form factor (b) distortion factor (c) peak factor (d) ripple factor.
4. Source inductance causes the output voltage to: (a) increase (b) decrease (overlap drop) (c) stay same (d) oscillate.
5. The overlap (commutation) angle increases with: (a) lower load current (b) higher load current (c) zero Ls (d) lower frequency only.
6. **(NAT)** Vrms = 0.707Vm, Vdc = 0.637Vm. Ripple factor (2 dp)?
7. **(NAT)** 1-φ full converter: Ls = 1 mH, 50 Hz, Id = 30 A. Overlap voltage drop (V, 1 dp)?
8. **(NAT)** Rectification efficiency if Vdc = 0.9Vrms (%, whole number)?

<details><summary>🔑 Solutions</summary>

**Q1 — (b) 0.48.**

**Q2 — (c) 0.812.**

**Q3 — (b) distortion factor.**

**Q4 — (b) decrease.**

**Q5 — (b) higher load current.**

**Q6.** `RF = √((0.707/0.637)² − 1) = √(1.232 − 1) = √0.232 = 0.48`.

**Q7.** `ω = 314.16`; `ΔVd = 2×314.16×0.001×30/π = 18.85/3.1416 = 6.0 V`.

**Q8.** `η = Vdc²/Vrms² = 0.9² = 0.81 = 81%`.

</details>

---

> 🧠 **DAY-52 WRAP (Round-3 pass 10)** — **Two-wattmeter:** `P = W1+W2`, `tanφ = √3(W1−W2)/(W1+W2)`; pf 0.5 → one zero, <0.5 → one negative. **Induction motor:** `Ns = 120f/P`, `s_max = R2/X2`, `T_max` indep. of R2, power split **1:(1−s):s**. **Rectifier perf:** RF(full-wave) ≈ 0.48, TUF(bridge) ≈ 0.81, pf = distortion×displacement, overlap drop `2ωLs·Id/π`. ⚡

**🔁 Round-3 progress:** Measurements ▓▓▓▓▓▓▓▓▓▓ · Machines ▓▓▓▓▓▓▓▓▓▓ · Power Electronics ▓▓▓▓▓▓▓▓▓▓ — round-3 almost complete (topics 10/~21 revised this pass; a few remain). 🎓 Power Systems joins as a 4th subject once the reference PDFs arrive.
