# ⚡ GATE Technical Revision — Day 25 (2026-08-14)

*A galvanometer revision, a transformer equivalent-circuit & regulation revision, and a power-diode/reverse-recovery revision — the revision cycle continues while we wait for the Power Systems PDFs.*

`📅 Tech Day 25  ·  ⏱ ~45 min  ·  🎯 Measurements + Machines + Power Electronics`

Attempt each section's test **before** opening its solutions — recall beats re-reading.

> 📌 All three GATE sections fully covered — running **revision cycles**. Next new subject: **Power Systems** (send reference PDFs to begin).

---

## 🔧 Measuring Instruments: Revision — Galvanometers (d'Arsonval & Ballistic)

Reconsolidating **galvanometers** (Day 4): the sensitive current detectors behind PMMC instruments.

### 📖 Concept Deep Dive

**d'Arsonval (moving-coil) galvanometer.** A coil suspended in a permanent-magnet field; current produces a **deflecting torque**; a spring/suspension provides **controlling torque**; deflection ∝ current:

```
Deflecting torque  Td = NBAI ; at balance Td = Tc = K·θ
⇒ θ = NBAI/K   (θ ∝ I, linear)
Current sensitivity Si = θ/I = NBA/K [rad/A] ; Voltage sensitivity = θ/V
```

**Damping.** The motion is damped (air/eddy/electromagnetic) to settle quickly. The **CDRX (Critical Damping Resistance eXternal)** is the external resistance giving **critical damping** (fastest non-oscillatory response):
```
Underdamped: oscillates ; Overdamped: sluggish ; Critically damped: fastest settle
CDRX = external R for critical damping
```

**Ballistic galvanometer.** Designed to measure a **charge (impulse)** — a short current pulse (∫i dt = Q) passed before the coil moves much. The **first (throw) deflection ∝ charge**:
```
Charge Q ∝ first swing (throw) θ1 ; Q = (K/NBA)·(T/2π)·θ1... (calibration constant)
Used to measure charge, flux (with a search coil)
```
Has a **large moment of inertia** (long period) so the impulse is delivered before deflection.

**Flux meter (Grassot).** A special ballistic galvanometer with **negligible controlling torque and heavy damping** — reads **flux linkage change directly**, deflection stays where it stops (used for magnetic measurements).

> 💎 **KEY RESULT** — d'Arsonval: **θ = NBAI/K** (θ ∝ I), current sensitivity **NBA/K**. **CDRX** = external resistance for **critical damping** (fastest settle). **Ballistic galvanometer** measures **charge** (first throw ∝ Q); **fluxmeter** reads flux change directly.

> 🧠 **MEMORY HOOK** — "**d'Arsonval θ = NBAI/K (linear, PMMC). CDRX = critical damping (fastest). Ballistic = charge (first throw ∝ Q); fluxmeter = flux directly.**"

> ⚠️ **TRAP ALERT** — A **ballistic galvanometer measures CHARGE** (impulse), not steady current — it has a **large inertia/long period**. **Critical damping** gives the **fastest non-oscillatory** response (not overdamped). d'Arsonval deflection is **linear** (θ ∝ I).

### 📐 Formula Sheet

```
d'Arsonval: Td = NBAI ; θ = NBAI/K ; current sensitivity Si = NBA/K
Damping: underdamped/critical/overdamped ; CDRX = R for critical damping
Ballistic: first throw θ1 ∝ charge Q ; large inertia (long period)
Fluxmeter: negligible control torque + heavy damping ⇒ reads flux change
```

### 🧮 Solved Examples

**Example 1 — galvanometer deflection.**
A moving-coil galvanometer: **N = 100 turns, B = 0.2 T, coil area A = 4 cm², spring constant K = 2×10⁻⁶ N·m/rad**. Find the deflection for a current of **1 mA**.

```
θ = NBAI/K = (100 × 0.2 × 4e−4 × 1e−3)/(2e−6)
  = (100 × 0.2 × 4e−4 × 1e−3) = 8e−6 ; /2e−6 = 4 rad
```
**θ = 4 rad** (large — implies a very sensitive galvanometer; practically a smaller sensitivity/larger K).

**Example 2 — current sensitivity.**
For the same galvanometer, find the current sensitivity.

```
Si = NBA/K = (100 × 0.2 × 4e−4)/(2e−6) = 8e−3/2e−6 = 4000 rad/A
```
**Si = 4000 rad/A.**

### ⚠️ Common Traps

1. **d'Arsonval deflection θ = NBAI/K** — linear in current (basis of PMMC).
2. **CDRX = external R for critical damping** (fastest non-oscillatory settle).
3. **Ballistic galvanometer measures charge** (first throw ∝ Q), not steady current.
4. **Fluxmeter** has negligible restoring torque — reads flux change directly.
5. **Critical damping = fastest settle** without overshoot (not overdamped).
6. **Sensitivity ∝ NBA/K** — more turns/field/area or weaker spring = more sensitive.

### 📝 Test — Measuring Instruments Revision (8 Q)

1. **(MCQ)** In a d'Arsonval galvanometer, deflection is:
   (a) ∝ I  (b) ∝ I²  (c) ∝ √I  (d) independent of I
2. **(MCQ)** CDRX refers to the external resistance for:
   (a) critical damping  (b) maximum deflection  (c) zero current  (d) full scale
3. **(MCQ)** A ballistic galvanometer measures:
   (a) steady current  (b) charge (impulse)  (c) voltage  (d) power
4. **(MCQ)** A fluxmeter reads:
   (a) flux/flux change directly  (b) steady current  (c) resistance  (d) frequency
5. **(MCQ)** Current sensitivity of a galvanometer is:
   (a) NBA/K  (b) K/NBA  (c) NB/K  (d) BA/K
6. **(NAT)** A galvanometer: N=80, B=0.25 T, A=5 cm², K=1e−6 N·m/rad. Find θ for 0.5 mA (rad). ______ rad
7. **(NAT)** For the galvanometer in Q6, find the current sensitivity in rad/A. ______ rad/A
8. **(NAT)** A ballistic galvanometer's first throw is 12° for a charge; if charge doubles, find the throw in degrees (linear). ______ °

<details>
<summary>🔑 Solutions</summary>

**1 → (a) ∝ I.**

**2 → (a) critical damping.**

**3 → (b) charge (impulse).**

**4 → (a) flux/flux change directly.**

**5 → (a) NBA/K.**

**6 →** θ = NBAI/K = (80×0.25×5e−4×0.5e−3)/1e−6 = (80×0.25×5e−4×0.5e−3) = 5e−6 ; /1e−6 = **5 rad.**

**7 →** Si = NBA/K = (80×0.25×5e−4)/1e−6 = 1e−2/1e−6 = **10000 rad/A.**

**8 →** Throw ∝ Q ⇒ 2×12 = **24°.**

</details>

---

## 🔧 Electrical Machines: Revision — Transformer Equivalent Circuit, Regulation & Per-Unit

Reconsolidating **transformer equivalent circuit, regulation and per-unit** (Day 6).

### 📖 Concept Deep Dive

**Equivalent circuit (referred to primary):**
```
Series: R01 = R1 + a²R2 (= R1 + R2') ; X01 = X1 + a²X2 (= X1 + X2')
Shunt (magnetising): R0 (core loss) || X0 (magnetising) — often moved to input
Approximate equivalent circuit: shunt branch at the supply terminals
```

**Voltage regulation:**
```
% Regulation ≈ (I(R01 cosφ ± X01 sinφ))/V1 × 100    [+ lag, − lead]
   = (Vpu drop) ; using per-unit: %Reg ≈ (εr cosφ ± εx sinφ)
where εr = I·R01/V (pu resistance drop), εx = I·X01/V (pu reactance drop)
Zero regulation (leading pf): tanφ = R01/X01 (leading)
Max regulation at: tanφ = X01/R01 (lagging)
```

**Per-unit (pu) system:**
```
Base impedance Zbase = Vbase²/Sbase = Vbase/Ibase
Per-unit quantity = actual/base
%Z = Zpu × 100 ; pu is the same referred to either side (its big advantage)
```

**Efficiency:**
```
η = output/(output + Pi + Pcu) ; max η at Pcu = Pi
All-day efficiency = energy output/energy input (over 24h) — for distribution transformers
```

> 💎 **KEY RESULT** — Equivalent circuit: **R01 = R1 + a²R2, X01 = X1 + a²X2**. **% Reg ≈ (I(R01cosφ ± X01sinφ))/V** (+lag, −lead); **zero reg at leading pf tanφ = R01/X01**. **Per-unit impedance is the same on both sides** — its key advantage.

> 🧠 **MEMORY HOOK** — "**R01=R1+a²R2, X01=X1+a²X2. Reg = I(Rcosφ±Xsinφ)/V (+lag/−lead). Per-unit same both sides; Zbase=V²/S.**"

> ⚠️ **TRAP ALERT** — **Impedance refers by a²** (R2' = a²R2). Regulation is **positive for lagging** pf, can be **negative for leading** pf (voltage rises). **Per-unit impedance is identical** referred to either winding — that's why pu is used.

### 📐 Formula Sheet

```
R01 = R1 + a²R2 ; X01 = X1 + a²X2 ; Z01 = √(R01² + X01²)
% Reg ≈ I(R01 cosφ ± X01 sinφ)/V1 ×100 [+lag, −lead]
Zero reg (leading): tanφ = R01/X01 ; Max reg (lagging): tanφ = X01/R01
Zbase = Vbase²/Sbase ; pu = actual/base ; %Z = Zpu×100
η = out/(out+Pi+Pcu) ; max η @ Pcu=Pi
```

### 🧮 Solved Examples

**Example 1 — voltage regulation.**
A transformer referred to primary has `R01 = 2 Ω`, `X01 = 5 Ω`, full-load current `I = 10 A`, `V1 = 500 V`, pf **0.8 lagging**. Find the % regulation.

```
cosφ = 0.8, sinφ = 0.6 (lagging ⇒ +)
% Reg = I(R01 cosφ + X01 sinφ)/V1 × 100
      = 10(2×0.8 + 5×0.6)/500 × 100 = 10(1.6 + 3.0)/500 × 100
      = 10 × 4.6/500 × 100 = 46/500 × 100 = 9.2%
```
**% Regulation = 9.2 %.**

**Example 2 — per-unit impedance.**
A 100 kVA transformer has a base voltage of 2000 V. Find the base impedance, and the pu value of a **4 Ω** impedance.

```
Zbase = Vbase²/Sbase = 2000²/100000 = 4,000,000/100,000 = 40 Ω
Zpu = actual/base = 4/40 = 0.1 pu (= 10%)
```
**Zbase = 40 Ω; Z = 0.1 pu (10%).**

### ⚠️ Common Traps

1. **R01 = R1 + a²R2** (refer by a²), similarly X01.
2. **Regulation: +I·X01·sinφ for lagging, −for leading** — leading pf can give negative regulation.
3. **Per-unit impedance is the same on both sides** — the reason pu is preferred.
4. **Zbase = Vbase²/Sbase.**
5. **Max efficiency at Pcu = Pi**; all-day efficiency for distribution transformers.
6. **Zero regulation occurs at a leading pf** (tanφ = R01/X01).

### 📝 Test — Electrical Machines Revision (8 Q)

1. **(MCQ)** Secondary resistance referred to primary is:
   (a) R2  (b) a²R2  (c) R2/a²  (d) aR2
2. **(MCQ)** Voltage regulation is positive for:
   (a) leading pf  (b) lagging pf  (c) unity pf  (d) never
3. **(MCQ)** Per-unit impedance of a transformer is:
   (a) different on each side  (b) the same on both sides  (c) zero  (d) infinite
4. **(MCQ)** Base impedance equals:
   (a) Vbase²/Sbase  (b) Sbase/Vbase  (c) Vbase·Sbase  (d) Vbase/Sbase²
5. **(MCQ)** Zero voltage regulation occurs at:
   (a) lagging pf  (b) leading pf  (c) unity pf  (d) zero pf
6. **(NAT)** R01=1 Ω, X01=4 Ω, I=20 A, V=400 V, pf=0.8 lag. Find % regulation. ______ %
7. **(NAT)** A 50 kVA transformer, base voltage 1000 V. Find base impedance in Ω. ______ Ω
8. **(NAT)** For Q7, find the pu value of a 5 Ω impedance. ______ pu

<details>
<summary>🔑 Solutions</summary>

**1 → (b) a²R2.**

**2 → (b) lagging pf.**

**3 → (b) the same on both sides.**

**4 → (a) Vbase²/Sbase.**

**5 → (b) leading pf.**

**6 →** %Reg = 20(1×0.8 + 4×0.6)/400 ×100 = 20(0.8+2.4)/400×100 = 20×3.2/400×100 = 64/400×100 = **16%.**

**7 →** Zbase = 1000²/50000 = 1e6/5e4 = **20 Ω.**

**8 →** Zpu = 5/20 = **0.25 pu.**

</details>

---

## 🔧 Power Electronics: Revision — Power Diode & Reverse Recovery

Reconsolidating the **power diode's switching behaviour** (Day 6): the reverse-recovery transient that limits switching frequency.

### 📖 Concept Deep Dive

**Static characteristics.** A power diode conducts in **forward bias** (small forward drop **VF ~0.7-1.5 V**) and blocks in **reverse bias** (small leakage until breakdown **VRRM**). Types: **general-purpose, fast-recovery, Schottky** (low VF, very fast, low voltage).

**Reverse recovery (the dynamic behaviour).** When a conducting diode is suddenly reverse-biased, the **stored charge** (minority carriers) must be removed before it blocks — current goes **negative** briefly:

```
Reverse recovery time trr = ta + tb   (ta = charge removal, tb = recombination)
Peak reverse recovery current IRR = ta·(di/dt)
Stored charge  QRR = ½·IRR·trr  (triangular approx)
Softness factor S = tb/ta
```

- **trr** limits the maximum switching frequency; **fast-recovery diodes** have small trr (for high-frequency converters/inverters).
- **Schottky diodes** have **negligible reverse recovery** (majority-carrier device) — very fast, but low reverse voltage.

**Reverse recovery affects circuits:** causes **switching loss**, voltage spikes (with stray inductance), and EMI; a **freewheeling diode** must be fast-recovery in a chopper/inverter.

> 💎 **KEY RESULT** — **Reverse recovery trr = ta + tb**; **IRR = ta·(di/dt)**; **QRR ≈ ½·IRR·trr**. **Fast-recovery diodes** (small trr) for high frequency; **Schottky = negligible recovery** (majority carrier) but low voltage. trr **limits switching frequency**.

> 🧠 **MEMORY HOOK** — "**trr = ta+tb; IRR = ta·di/dt; QRR ≈ ½·IRR·trr. Fast-recovery for HF; Schottky = no recovery (low V).**"

> ⚠️ **TRAP ALERT** — **Reverse recovery current flows in the NEGATIVE direction** (stored charge removal). **trr limits switching frequency** — a slow diode dissipates and causes spikes at high di/dt. **Schottky** has negligible trr but **low reverse-voltage** rating.

### 📐 Formula Sheet

```
Forward drop VF ≈ 0.7-1.5 V ; reverse blocks to VRRM
Reverse recovery: trr = ta + tb ; IRR = ta·(di/dt)
Stored charge QRR ≈ ½·IRR·trr (triangular) ; softness S = tb/ta
trr also: IRR = √(2·QRR·(di/dt))  and  trr ≈ √(2·QRR/(di/dt)) (soft, tb≈0 approx)
Schottky: majority carrier, negligible trr, low VRRM
```

### 🧮 Solved Examples

**Example 1 — reverse recovery.**
A power diode has a reverse-recovery time `trr = 5 µs` (mostly ta, di/dt = 100 A/µs). Estimate the peak reverse current and stored charge (assume ta ≈ trr).

```
IRR = ta·(di/dt) ≈ 5 µs × 100 A/µs = 5 × 100 = 500 A
QRR ≈ ½·IRR·trr = ½ × 500 × 5e−6 = ½ × 500 × 5e−6 = 1.25e−3 C = 1250 µC
```
**IRR ≈ 500 A; QRR ≈ 1250 µC.**

**Example 2 — QRR from data.**
A diode has a stored charge `QRR = 2 µC` and is switched at `di/dt = 50 A/µs`. Estimate the peak reverse recovery current (triangular, soft ≈ symmetric).

```
IRR = √(2·QRR·(di/dt)) = √(2 × 2e−6 × 50e6) = √(2 × 2e−6 × 5e7)
    = √(2 × 100) = √200 = 14.14 A
```
**IRR ≈ 14.1 A.**

### ⚠️ Common Traps

1. **Reverse recovery current is negative** (removing stored charge).
2. **trr = ta + tb**; **IRR = ta·(di/dt)**; **QRR ≈ ½·IRR·trr**.
3. **Fast-recovery diodes for high frequency**; slow diodes cause loss/spikes.
4. **Schottky = negligible trr (majority carrier) but low reverse voltage.**
5. **trr limits the maximum switching frequency** of the converter.
6. **Higher di/dt → higher IRR** (more severe recovery, more EMI/spikes).

### 📝 Test — Power Electronics Revision (8 Q)

1. **(MCQ)** During reverse recovery, the diode current:
   (a) stays positive  (b) briefly goes negative  (c) is zero  (d) doubles
2. **(MCQ)** The reverse-recovery time is:
   (a) ta − tb  (b) ta + tb  (c) ta·tb  (d) ta/tb
3. **(MCQ)** For high-frequency converters, use a ______ diode.
   (a) fast-recovery  (b) general-purpose  (c) slow  (d) rectifier-grade
4. **(MCQ)** A Schottky diode has:
   (a) large trr  (b) negligible trr but low reverse voltage  (c) high VF  (d) no forward conduction
5. **(MCQ)** The peak reverse recovery current IRR equals:
   (a) ta·(di/dt)  (b) tb·(di/dt)  (c) trr·V  (d) QRR·V
6. **(NAT)** A diode: ta ≈ trr = 4 µs, di/dt = 200 A/µs. Find IRR in A. ______ A
7. **(NAT)** For IRR = 400 A, trr = 4 µs, find QRR in µC (triangular). ______ µC
8. **(NAT)** A diode QRR = 8 µC, di/dt = 100 A/µs. Find IRR = √(2·QRR·di/dt) in A. ______ A

<details>
<summary>🔑 Solutions</summary>

**1 → (b) briefly goes negative.**

**2 → (b) ta + tb.**

**3 → (a) fast-recovery.**

**4 → (b) negligible trr but low reverse voltage.**

**5 → (a) ta·(di/dt).**

**6 →** IRR = 4 µs × 200 A/µs = **800 A.**

**7 →** QRR = ½·IRR·trr = ½ × 400 × 4e−6 = 8e−4 C = **800 µC.**

**8 →** IRR = √(2 × 8e−6 × 100e6) = √(2 × 8e−6 × 1e8) = √(1600) = **40 A.**

</details>

---

`✅ Day 25 complete — revision day: galvanometers, transformer equivalent circuit/regulation/per-unit, and power-diode reverse recovery. The technical track keeps cycling through deep revisions. 🎓 Power Systems begins as soon as you upload the reference PDFs.`

*Correctness over length — re-derive any result you're unsure of and mark "verify" before the exam.*
