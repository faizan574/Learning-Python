# ⚡ GATE Technical Revision — Day 9 (2026-07-26)

*Wattmeters that lie about their own coils, transformers that share one winding, and how to force a thyristor to let go.*

`📅 Tech Day 9  ·  ⏱ ~45 min  ·  🎯 Measurements + Machines + Power Electronics`

Attempt each section's test **before** opening its solutions — recall beats re-reading.

---

## 🔧 Measuring Instruments: Measurement of Power I — Dynamometer Wattmeter

Yesterday we finished the AC-meter family. Power is where two of those movements team up: the **electrodynamometer wattmeter** puts the load current through a **fixed current coil (CC)** and the load voltage across a **moving pressure coil (PC)**. Its deflecting torque is proportional to the **product** of the two — which is exactly what "power" means.

### 📖 Concept Deep Dive

An electrodynamometer instrument has **no iron** — the field is produced by air-cored fixed coils, so the movement responds to the *instantaneous product* of the two coil currents. Wire the **CC in series** with the load (carries load current `i`) and the **PC in series with a high non-inductive resistance `Rp`** across the supply (carries `ip ≈ v/Rp`, in phase with `v`). Then:

```
Instantaneous torque  ti ∝ i · ip ∝ v · i
Average deflection     θ ∝ average of (v·i) = V·I·cos φ = real power P
```

Because the pointer responds to the **average of the product**, a dynamometer wattmeter reads **true active power P = VI cos φ** on any waveform (subject to its frequency limits) — this is why it is a **transfer instrument** (same calibration on AC and DC).

**Two connection choices** — the PC can be connected on the **load side** or the **supply side** of the CC:

| Connection | PC tapped across | Wattmeter over-reads by | Best when |
|---|---|---|---|
| CC nearest load (PC on supply side) | supply | **PC power** `V²/Rp` | load current large (I·Rcc small) |
| PC nearest load (CC on supply side) | load | **CC power** `I²·Rcc` | load current small / high voltage |

Neither is error-free — each includes one coil's own consumption. That is the **"which coil error"** GATE loves.

**Pressure-coil inductance error.** The PC circuit is not purely resistive — it has inductance `Lp`, so `ip` **lags `v`** by a small angle `β` (where `tan β = ωLp/Rp`) instead of being exactly in phase. This makes the wattmeter read as if the load angle were `(φ − β)`:

```
True power        P = V·I·cos φ
Wattmeter reads   Pw = V·I·cos(φ − β)/cos β     (approx.)
Correction factor  CF = cos β / cos(φ − β)
```

At **lagging** pf the meter **over-reads** (φ−β < φ). The fix is a **compensating (swamping) capacitor** across part of `Rp` so the PC branch becomes effectively resistive (`tan β → 0`).

**Current-coil (Rc·Cc) / mutual-inductance error** and **eddy-current error** (eddy currents in nearby metal set up a reaction field, slightly frequency-dependent) also exist but are second order at power frequency.

**Low-power-factor (LPF) wattmeter modifications.** At very low pf (e.g. no-load transformer test, φ ≈ 90°) an ordinary wattmeter gives a tiny, unreliable deflection and its PC-inductance error becomes huge. An LPF wattmeter fixes this with:
1. **Low-resistance pressure coil** (more current, more torque at low pf).
2. **Compensation for pressure-coil current** — an extra compensating winding cancels the CC flux due to `ip`, removing the `V²/Rp` error.
3. **Inductance compensation** — a capacitor makes the PC branch resistive so `β ≈ 0`.
4. **Small control torque** so a usable deflection is obtained.

> 💎 **KEY RESULT** — A dynamometer wattmeter reads **P = VI cos φ** (true active power) because torque ∝ *average of v·i*. Its two dominant errors are the **connection error** (it includes one coil's own consumption) and the **pressure-coil inductance error** (over-reads at lagging pf; corrected by a swamping capacitor).

> 🧠 **MEMORY HOOK** — "**Current coil in Series (with load), Pressure coil in Parallel (across supply).** CC = big wire, few turns; PC = fine wire, many turns + series R." At **lag**, an uncompensated wattmeter **over-reads**.

> ⚠️ **TRAP ALERT** — Choosing the connection: put the PC across the **supply** when load **current is large** (CC drop is the bigger error); put it across the **load** when the **voltage is high / current small** (PC power is the bigger error).

### 📐 Formula Sheet

```
Deflecting torque   Td ∝ V·I·cos φ  (average of v·i)
On DC               reads V·I directly (transfer instrument)
PC current          ip = V/Rp   (ideally in phase with V)
PC inductance angle tan β = ωLp/Rp
Reads at lag        Pw = P · cos(φ−β)/cos β  ⇒ over-reads for lagging pf
Correction factor   CF = cos β / cos(φ−β)
Connection error    over-reads by  V²/Rp  (PC on supply side)
              or    over-reads by  I²·Rcc (PC on load side)
Compensating cap    across part of Rp so that  tan β → 0
```

### 🧮 Solved Examples

**Example 1 — PC inductance error.**
A wattmeter has a pressure coil of resistance `Rp = 4000 Ω` and inductance `Lp = 42 mH`, on a 50 Hz supply. It measures the power drawn by a load at a lagging pf of **0.5** (φ = 60°). Find the percentage error due to PC inductance.

```
ω = 2π·50 = 314.16 rad/s
tan β = ωLp/Rp = 314.16 × 0.042 / 4000 = 13.19/4000 = 0.003298
β = 0.189°  ⇒ cos β ≈ 1.0000
φ = 60°,  φ − β = 59.811°
CF = cos β / cos(φ−β) = 1.0000 / cos(59.811°) = 1 / 0.50287 = 0.99429
Reading  Pw = P / CF = P × (1/0.99429) = 1.00574 P
% error = (Pw − P)/P × 100 = +0.574%   (over-reads by ≈ 0.57%)
```

The wattmeter **over-reads by ≈ 0.57 %** — small here, but at pf → 0 the error blows up (that is why LPF wattmeters exist).

**Example 2 — connection error.**
A load draws `I = 5 A` at `V = 200 V`, pf = 0.8 lag, so true `P = 200×5×0.8 = 800 W`. The wattmeter's **pressure-coil branch resistance Rp = 5000 Ω** and its **current-coil resistance Rcc = 0.1 Ω**. Compare the two connections.

```
True power P = 800 W

(a) PC across the supply (CC nearest load):
    extra reading = PC power = V²/Rp = 200²/5000 = 40000/5000 = 8 W
    Wattmeter reads ≈ 800 + 8 = 808 W   (+1.0%)

(b) PC across the load (CC on supply side):
    extra reading = CC power = I²·Rcc = 5² × 0.1 = 2.5 W
    Wattmeter reads ≈ 800 + 2.5 = 802.5 W  (+0.31%)
```

Here the current is modest and voltage is high-ish, so connection **(b)** (PC across the load) has the **smaller error** — the CC copper loss (2.5 W) beats the PC loss (8 W).

### ⚠️ Common Traps

1. A dynamometer wattmeter reads **active power P = VI cos φ**, *not* apparent power VI — the cos φ comes free from the averaging of `v·i`.
2. **Over-reading direction:** PC-inductance error makes it **over-read at lagging** pf and **under-read at leading** pf (sign of β relative to φ flips).
3. **Connection choice is about which loss dominates** — `V²/Rp` (PC) vs `I²·Rcc` (CC). Don't memorise one "correct" connection.
4. On **DC** a dynamometer wattmeter still works (transfer instrument); a *rectifier* or *induction* meter does not read true power on distorted waves.
5. **LPF wattmeter ≠ just a sensitive wattmeter** — its key feature is **pressure-coil compensation** (cancels the `V²/Rp` error) plus inductance compensation, not merely more turns.
6. The compensating **capacitor** for inductance error goes **across a portion of the series resistor Rp**, not across the whole PC.

### 📝 Test — Measuring Instruments (8 Q)

1. **(MCQ)** A dynamometer wattmeter's deflecting torque is proportional to:
   (a) V²  (b) I²  (c) the average of v·i  (d) the peak of v·i
2. **(MCQ)** An uncompensated wattmeter measuring a **lagging**-pf load has PC inductance. It will:
   (a) under-read  (b) over-read  (c) read correctly  (d) read zero
3. **(MCQ)** The pressure coil is connected on the **supply side** of the current coil. The wattmeter over-reads by:
   (a) I²·Rcc  (b) V²/Rp  (c) VI sin φ  (d) nothing
4. **(MCQ)** A low-power-factor wattmeter differs from an ordinary one mainly because it has:
   (a) an iron core  (b) pressure-coil (and inductance) compensation  (c) a rectifier  (d) a larger control spring
5. **(MCQ)** A dynamometer wattmeter is called a **transfer instrument** because it:
   (a) transfers heat  (b) can be calibrated on DC and used on AC  (c) uses a CT  (d) has a moving iron
6. **(NAT)** A wattmeter PC has Rp = 3000 Ω, Lp = 30 mH, f = 50 Hz. The load pf is 0.6 lagging (φ = 53.13°). Find the % error due to PC inductance (to 2 decimals). ______ %
7. **(NAT)** A load draws 10 A at 100 V, pf 0.8. PC branch resistance = 2500 Ω. If the PC is across the **supply**, find the wattmeter reading in W. ______ W
8. **(NAT)** For the same load in Q7 but with CC resistance 0.2 Ω and the PC across the **load**, find the wattmeter reading in W. ______ W

<details>
<summary>🔑 Solutions</summary>

**1 → (c).** Torque ∝ instantaneous product v·i; the pointer follows its average = VI cos φ.

**2 → (b) over-read.** PC current lags by β, so the meter behaves as angle (φ − β) < φ ⇒ cos(φ−β) > cos φ ⇒ over-reads at lag.

**3 → (b) V²/Rp.** PC on supply side carries the full supply voltage; its own power V²/Rp is included in the reading.

**4 → (b).** Defining feature of an LPF wattmeter is pressure-coil compensation + inductance compensation (plus low-resistance PC).

**5 → (b).** Same calibration on DC and AC because it responds to the true average of v·i.

**6 →**
```
ω = 314.16 rad/s
tan β = ωLp/Rp = 314.16 × 0.030 / 3000 = 9.4248/3000 = 0.0031416
β = 0.180°,  cos β ≈ 1.0000
φ = 53.13°,  φ − β = 52.95°
CF = cos β / cos(φ−β) = 1 / cos(52.95°) = 1 / 0.60251 = 1.65970
Reading Pw = P/CF = P × (1/1.65970)? 
   — careful: Pw = P·cos(φ−β)/cos β = P × 0.60251/1 = 0.60251 P;  true term is P = VIcosφ = 0.6 P... 
Compare to true (cos φ = 0.6):
   % error = [cos(φ−β) − cos φ]/cos φ × 100 = (0.60251 − 0.60000)/0.60000 × 100
           = 0.00251/0.60000 × 100 = +0.42%
```
**Answer ≈ +0.42 %** (over-reads). *(Method: error = [cos(φ−β)/cos φ − 1]×100, with cos β ≈ 1.)*

**7 →** True P = 100 × 10 × 0.8 = 800 W. PC on supply ⇒ add V²/Rp = 100²/2500 = 10000/2500 = **4 W**.
**Reading = 800 + 4 = 804 W.**

**8 →** True P = 800 W. PC on load ⇒ add I²·Rcc = 10² × 0.2 = 100 × 0.2 = **20 W**.
**Reading = 800 + 20 = 820 W.** *(Here CC error is larger — high current, so supply-side PC would have been the better connection.)*

</details>

---

## 🔧 Electrical Machines: Transformers V — Autotransformer, Tap Changing, Inrush & Scott Connection

We finished three-phase transformer connections on Day 8. Now the special variants: the single-winding **autotransformer**, on-load **tap changing**, the **inrush** transient at switch-on, **cooling** classes, and the **Scott (T-T)** connection for 3-phase ↔ 2-phase conversion.

### 📖 Concept Deep Dive

**Autotransformer.** One tapped winding serves as both primary and secondary — part of the winding (`common` turns) is shared. For a step-down auto (input across full winding `N1`, output across `N2` turns):

```
Voltage ratio   V2/V1 = N2/N1 = a  (a < 1 for step-down)
Current ratio   I1/I2 = a  (same as a 2-winding transformer)
```

The magic: the shared "common" winding carries only the **difference** current `(I2 − I1)`, so a large part of the power is **conducted** directly rather than **transformed**. Splitting the throughput:

```
Power transformed (inductively)   = V1·I1·(1 − a) = S·(1 − a)
Power conducted (directly)        = V1·I1·a       = S·a
```

**Saving of copper / rating advantage** — an autotransformer needs only `(1 − a)` of the winding material of an equivalent two-winding transformer of the same **throughput** `S`:

```
(weight of Cu in auto) / (weight of Cu in 2-winding) = (1 − a)
Equivalent 2-winding rating handled = S·(1 − a)   ["transformed VA"]
```

So the closer `a → 1` (ratio near unity), the greater the saving — that is why autos are used where **input and output voltages are close** (e.g. 220↔110 kV interconnecting transformers, motor starters, variacs).

| Feature | Auto-transformer | Two-winding |
|---|---|---|
| Windings | one (tapped) | two (isolated) |
| Copper needed (same S) | (1 − a) × | 1 × |
| Leakage reactance, losses | **lower** | higher |
| Regulation, efficiency | **better** | worse |
| Electrical isolation | **none** ✗ | yes ✓ |
| Fault (HV appears on LV) | dangerous if common winding opens | isolated |

> 💎 **KEY RESULT** — In an autotransformer, only `S·(1 − a)` is **transformed** and `S·a` is **conducted**; copper weight is `(1 − a)` of a two-winding unit of equal throughput. Best when `a ≈ 1`.

**Tap changing.** Turns are tapped to adjust the ratio and hence keep secondary voltage constant as load/regulation varies. **Taps are placed on the HV winding** (fewer amps → smaller, cheaper tap-changer contacts; finer % steps since more turns).
- **Off-load (off-circuit) tap changer** — must **de-energise** to change taps; cheap; seasonal adjustment.
- **On-load tap changer (OLTC)** — changes taps **without interrupting load** using a bridging reactor or resistor transition so the load is never open-circuited and adjacent taps are never dead-shorted. Essential for grid/distribution transformers.

**Inrush current.** At switch-on the flux does **not** start from the value the steady state demands. Worst case: switch at the **voltage zero** with residual flux `+φr` present. Because `φ = ∫v dt`, flux can swing toward `≈ (2φmax + φr)` — well into deep **saturation** — so the magnetising current spikes to **several times (up to ~8–10×) rated current** for the first few cycles, then decays. Key facts: inrush is worst at **voltage-zero switching**, is a **magnetising (transient) phenomenon** (no load involved), is rich in **2nd harmonic** (used to restrain differential protection from mis-tripping), and decays with the winding time constant.

```
Worst-case peak flux  φpeak ≈ 2·φmax + φr   ⇒ heavy saturation ⇒ inrush spike
Inrush is high in 2nd-harmonic → used to block differential relays
```

**Cooling classes (transformer cooling).** Coded by medium + circulation:
- **ONAN** — Oil Natural, Air Natural (distribution).
- **ONAF** — Oil Natural, Air Forced (fans).
- **OFAF** — Oil Forced, Air Forced (pumps + fans, large units).
- **ODAF** — Oil Directed, Air Forced.
- Dry-type: **AN / AF**.

**Scott (T-T) connection.** Converts **3-phase to 2-phase** (or vice-versa) using **two** single-phase transformers:
- **Main** transformer: across two lines, full turns, centre-tapped.
- **Teaser** transformer: from the third line to the **centre tap** of the main, using **0.866 (√3/2)** of the main's turns.

The 86.6 % teaser tap is what makes the two secondary phases **equal in magnitude and 90° apart** (true 2-phase). Also used (as a **T-T connection**) for ordinary 3-phase transformation with only two units.

```
Teaser turns = (√3/2) × main turns = 0.866 × main turns
Output: two-phase, equal voltage, 90° apart (balanced 3-φ input)
```

> 🧠 **MEMORY HOOK** — "**Auto saves copper when a→1; taps on HV side; inrush at voltage-ZERO (2nd-harmonic); Scott teaser = 0.866.**"

> ⚠️ **TRAP ALERT** — In an autotransformer, `S·a` is **conducted** and `S·(1−a)` is **transformed** — students often swap these. The **saving** and the **transformed VA** both scale with `(1 − a)`.

### 📐 Formula Sheet

```
Auto ratio           a = V2/V1 = N2/N1
Transformed VA       = S(1 − a)      Conducted VA = S·a
Cu saving ratio      = (1 − a)  of equal-throughput 2-winding transformer
Common-winding I     = (I2 − I1)  (step-down)
Tap changing         taps on HV winding; OLTC keeps load uninterrupted
Inrush worst flux    φpeak ≈ 2φmax + φr  (voltage-zero switching)
Inrush signature     rich in 2nd harmonic (relay restraint)
Scott teaser turns   = 0.866 × main turns  (3-φ ↔ 2-φ)
```

### 🧮 Solved Examples

**Example 1 — autotransformer power split & copper saving.**
A 2400/240 V, 50 kVA **two-winding** transformer is reconnected as a **step-up autotransformer** to give 2400/2640 V. Find (a) the auto's throughput kVA and (b) the copper saving vs an equivalent two-winding unit.

```
Reconnected as auto: series winding = 240 V winding, common = 2400 V winding.
Output voltage = 2400 + 240 = 2640 V; input = 2400 V.
Windings still limited by their original currents:
   series (240 V) winding rated current = 50 000/240 = 208.33 A
This series current is the auto's LINE (output) current I2 = 208.33 A.
Throughput S = V2 · I2 = 2640 × 208.33 = 550 000 VA = 550 kVA
```
So a 50 kVA two-winding unit handles **550 kVA** as an autotransformer — the transformed part is still only 50 kVA; the rest (500 kVA) is conducted. **Copper saving** — the auto delivers 550 kVA using the copper of a 50 kVA two-winding transformer, i.e. only `50/550 = 0.0909 = (1 − a)` of the copper an equal-throughput (550 kVA) two-winding transformer would need (here `a = 2400/2640 = 0.909`).

**Example 2 — inrush estimate.**
A transformer has `φmax` corresponding to normal operation and residual flux `φr = 0.6 φmax`. Estimate the worst-case peak flux (in terms of φmax) at voltage-zero switching, and comment on the magnetising current.

```
φpeak ≈ 2φmax + φr = 2φmax + 0.6φmax = 2.6 φmax
```
The core is driven to **2.6×** normal peak flux → deep into saturation on the B-H curve. Since µ collapses in saturation, the magnetising current no longer scales linearly — a 2.6× flux can demand a magnetising current of **many times** rated (commonly quoted 6–10× for the first cycle), decaying over subsequent cycles. This is why energisation inrush can trip instantaneous overcurrent relays unless **2nd-harmonic restraint** is used.

### ⚠️ Common Traps

1. **Autotransformer has NO isolation** — a break in the common winding puts full HV on the LV terminals. Never used where isolation is a safety requirement.
2. **Conducted vs transformed:** conducted = `S·a`, transformed = `S·(1 − a)`. The **rating advantage** and copper saving scale with `(1 − a)`, largest when `a → 1`.
3. **Taps go on the HV (low-current) winding**, not the LV side — smaller contacts, finer steps.
4. **Inrush is a no-load magnetising transient** — it does *not* depend on the secondary load, and is worst at **voltage-zero** switching (not voltage-peak).
5. **Inrush ≠ short-circuit current** — inrush is rich in **2nd harmonic** and decays; that harmonic is deliberately used to **restrain** differential protection.
6. **Scott teaser tap is 0.866 (√3/2), not 0.5** — the half is only the *centre tap* of the main winding.

### 📝 Test — Electrical Machines (8 Q)

1. **(MCQ)** In a step-down autotransformer with ratio a = V2/V1, the fraction of throughput that is **conducted** directly is:
   (a) (1 − a)  (b) a  (c) a²  (d) 1
2. **(MCQ)** Compared with a two-winding transformer, an autotransformer of equal throughput has:
   (a) higher leakage reactance and losses  (b) lower leakage reactance and losses, but no isolation  (c) full isolation  (d) larger copper requirement
3. **(MCQ)** On-load tap changers are provided so that:
   (a) the transformer can be switched off to change taps  (b) taps change without interrupting the load  (c) the LV winding is protected  (d) inrush is reduced
4. **(MCQ)** Transformer inrush current is **worst** when the transformer is energised at the instant the supply voltage is at:
   (a) its positive peak  (b) its negative peak  (c) a zero crossing  (d) 45°
5. **(MCQ)** In a Scott connection, the teaser transformer is tapped at ______ of the main winding turns:
   (a) 0.5  (b) 0.577  (c) 0.707  (d) 0.866
6. **(NAT)** A 1000/100 V, 40 kVA two-winding transformer is reconnected as a step-up autotransformer giving 1000/1100 V. Find its throughput in kVA. ______ kVA
7. **(NAT)** For the autotransformer in Q6, what is the ratio (transformed VA)/(throughput VA)? Give as a fraction to 3 decimals. ______
8. **(NAT)** A transformer's residual flux is 0.5 φmax. Estimate the worst-case peak flux at voltage-zero switching, as a multiple of φmax. ______

<details>
<summary>🔑 Solutions</summary>

**1 → (b) a.** Conducted power = S·a; transformed (inductive) power = S·(1 − a).

**2 → (b).** Single winding ⇒ lower leakage reactance, lower losses, better regulation/efficiency — but **no electrical isolation**.

**3 → (b).** OLTC changes taps while the load stays energised (bridging reactor/resistor transition).

**4 → (c) zero crossing.** With φ = ∫v dt, switching at voltage zero drives flux toward ≈ 2φmax (+φr) — deep saturation.

**5 → (d) 0.866.** Teaser turns = (√3/2)·(main turns) = 0.866 × main turns.

**6 →** Series winding = 100 V winding, rated current = 40 000/100 = 400 A = output line current.
Output V = 1000 + 100 = 1100 V.
```
S = V2 · I2 = 1100 × 400 = 440 000 VA = 440 kVA
```
**Throughput = 440 kVA.**

**7 →** Transformed VA = original 2-winding rating = 40 kVA; throughput = 440 kVA.
```
transformed/throughput = 40/440 = 0.0909
```
Check: a = V1/V2 = 1000/1100 = 0.909, and (1 − a) = 0.0909 ✓. **Answer ≈ 0.091.**

**8 →**
```
φpeak ≈ 2φmax + φr = 2φmax + 0.5φmax = 2.5 φmax
```
**Answer = 2.5 φmax.**

</details>

---

## 🔧 Power Electronics: Thyristor III — Turn-off & Commutation Techniques

Day 8 covered turn-**on**, gate characteristics and dv/dt–di/dt protection. But an SCR is a **latching** device — once on, the gate loses control. To turn it **off** you must force the anode current below the **holding current** `IH` for long enough. That is **commutation**, and it splits into **natural (line)** and **forced** classes.

### 📖 Concept Deep Dive

**The turn-off requirement.** To commutate an SCR you must:
1. Reduce anode current below `IH` (holding current), and
2. Hold a **reverse (or zero) voltage** across it for at least the **turn-off time `tq`** so the internal carriers recombine. Re-applying forward voltage before `tq` elapses re-triggers the device.

```
Turn-off time tq = reverse recovery time (trr) + gate recovery time (tgr)
Circuit turn-off time tc must satisfy:  tc ≥ tq
```

**tq (device turn-off time)** is a **device** rating; **tc (circuit turn-off time)** is what the circuit *provides*. A converter works only if `tc ≥ tq` (with margin). Devices are graded:
- **Converter-grade (phase-control) SCRs:** large tq (50–100 µs) — used with natural commutation at line frequency.
- **Inverter-grade (fast) SCRs:** small tq (5–50 µs) — used with forced commutation at high frequency.

**Class 0 — Natural (line) commutation.** The AC supply itself drives the anode current to zero and reverse-biases the SCR each half-cycle. Used in **AC-fed circuits**: phase-controlled rectifiers, AC voltage controllers, cycloconverters. **No extra components** — the supply does the work. Simple and lossless, but only available when there is an AC source.

**Forced commutation (needed in DC circuits — choppers, inverters).** An **external LC circuit** forces the current to zero. Classic classes (Bedford/GE scheme):

| Class | Name | Mechanism |
|---|---|---|
| A | Self / resonant (load) commutation | Underdamped **series/parallel LC** with the load rings the current to zero |
| B | Resonant-pulse (LC across SCR) | Pre-charged **LC** oscillates and diverts the anode current |
| C | Complementary | A **second SCR** turning on commutates the first (and vice-versa) |
| D | Auxiliary / impulse | An **auxiliary SCR** + charged capacitor applies a reverse pulse to the main SCR |
| E | External pulse | A separate **pulse source** reverse-biases the SCR |
| F | Line (AC) commutation | The **AC line** reverse-biases it (this is natural commutation) |

The common thread in forced schemes is a **pre-charged capacitor** dumped across the conducting SCR to momentarily reverse its voltage for `> tq`.

**Class B resonant-pulse essentials.** A commutating capacitor `C` and inductor `L` form a resonant loop; when fired, the peak resonant current and the reverse-bias duration are set by:

```
Resonant (ringing) frequency   ω0 = 1/√(L·C)
Peak commutating current       Ip = Vc·√(C/L)
Circuit turn-off time provided tc ≈ (available) depends on C, load current I:
       tc ≈ C·Vc / I     (constant-current discharge approximation)
Design rule:  choose C so that  tc = C·Vc/I ≥ tq
```

**Ratings quick-refresh (why turn-off matters for rating).** Besides `tq`, an SCR is limited by: average/RMS current, **surge current `ITSM`** (one-cycle non-repetitive), **I²t** (for fuse coordination), repetitive peak forward/reverse voltage `VDRM/VRRM`, and **dv/dt, di/dt** (Day 8).

**Series operation → string efficiency (voltage sharing).** No two SCRs are identical, so in a **series** string one device may take more than its share of voltage and fail. **String efficiency** quantifies how well they share:

```
String efficiency = (actual string voltage) / (n × individual device rating)
                  = V_string / (n · Vd(max))     ≤ 1
```

A string efficiency of 1 (100 %) means perfectly equal sharing. **Static sharing** uses equal **parallel resistors** across each SCR to swamp leakage-current differences; **dynamic sharing** uses **RC snubbers** across each to equalise transient (dv/dt) voltages. For **parallel** operation (current sharing) the analogous problem is unequal on-state drops, fixed with series inductors / matched devices; a **de-rating factor** applies.

> 💎 **KEY RESULT** — An SCR turns off only when its current stays below `IH` **and** reverse voltage is held for `tc ≥ tq`. **Natural commutation** (AC line) needs no components; **forced commutation** (DC circuits) uses a pre-charged **LC** to reverse the anode voltage.

> 🧠 **MEMORY HOOK** — "**A**utotune resonant, **B**y capacitor pulse, **C**omplementary pair, **D**edicated auxiliary SCR, **E**xternal pulse, **F**rom the line." (Classes A–F.) And: **tc ≥ tq** or the SCR re-fires.

> ⚠️ **TRAP ALERT** — Natural commutation works **only with an AC source**. A DC chopper or inverter **must** use forced commutation (or a self-commutating device like a GTO/IGBT). Reapplying forward voltage before `tq` → **commutation failure**.

### 📐 Formula Sheet

```
Turn-off time      tq = trr + tgr  (device rating)
Commutation rule   tc ≥ tq   (circuit must provide ≥ device turn-off time)
Resonant freq      ω0 = 1/√(LC)
Peak comm. current Ip = Vc·√(C/L)
Class-B/D turn-off tc ≈ C·Vc/I  ⇒  C ≥ I·tq/Vc  (min commutating capacitor)
String efficiency  η = V_string / (n · Vd)     (series operation)
Static sharing R   equal resistors swamp leakage-current spread
Dynamic sharing    RC snubber across each SCR (equalises dv/dt)
```

### 🧮 Solved Examples

**Example 1 — minimum commutating capacitor.**
In an impulse-commutated (Class D) chopper, the load current is `I = 50 A` and the commutating capacitor is charged to `Vc = 200 V`. The SCR's turn-off time is `tq = 30 µs`. Find the minimum capacitance for reliable commutation (constant-current discharge model), and add a 50 % safety margin.

```
Circuit turn-off time available:  tc = C·Vc / I  ≥ tq
Minimum C:   Cmin = I·tq / Vc = 50 × 30e−6 / 200
                  = 1500e−6 / 200 = 7.5e−6 F = 7.5 µF
With 50% margin (tc = 1.5 tq):  C = 1.5 × 7.5 = 11.25 µF
```
**Cmin ≈ 7.5 µF; use ≈ 11.25 µF** for margin.

**Example 2 — string efficiency.**
Five SCRs, each rated 800 V, are connected in **series** to block a DC of **3600 V**. Find the string efficiency and comment.

```
n = 5,  Vd = 800 V,  V_string = 3600 V
η = V_string / (n · Vd) = 3600 / (5 × 800) = 3600 / 4000 = 0.90 = 90%
```
**String efficiency = 90 %.** The 10 % shortfall is the safety margin absorbing unequal voltage sharing; **static resistors + RC snubbers** are added so no single SCR exceeds its 800 V rating.

### ⚠️ Common Traps

1. **Gate cannot turn an SCR off** — only reducing anode current below `IH` (and holding reverse voltage for `≥ tq`) does. GTO is the exception (gate-turn-off).
2. **tq vs tc:** `tq` is a *device* parameter; `tc` is what the *circuit* provides. Commutation succeeds only if **tc ≥ tq**.
3. **Natural commutation is not "free everywhere"** — it needs an **AC source**; DC circuits demand forced commutation.
4. **Class F = line (natural) commutation** — don't count it as a "forced" method even though it's in the A–F list.
5. **String efficiency < 100 % is normal** — perfect sharing (η = 1) is idealised; you always add sharing resistors/snubbers.
6. **Static vs dynamic sharing:** resistors handle **steady-state (leakage)** imbalance; **RC snubbers** handle **transient (dv/dt)** imbalance. Don't mix them up.

### 📝 Test — Power Electronics (8 Q)

1. **(MCQ)** To turn an SCR off, you must:
   (a) apply a negative gate pulse  (b) reduce anode current below IH and reverse-bias it for ≥ tq  (c) increase gate current  (d) raise the anode voltage
2. **(MCQ)** Natural (line) commutation is available in:
   (a) DC choppers  (b) AC-fed phase-controlled rectifiers  (c) DC-DC boost converters  (d) battery-fed inverters
3. **(MCQ)** Which commutation class uses an **auxiliary SCR** with a charged capacitor to reverse-bias the main SCR?
   (a) Class A  (b) Class B  (c) Class D  (d) Class F
4. **(MCQ)** In series operation of SCRs, **static** voltage sharing is achieved using:
   (a) RC snubbers  (b) equal parallel resistors  (c) series inductors  (d) a common gate pulse
5. **(MCQ)** An "inverter-grade" thyristor differs from a "converter-grade" one chiefly by its:
   (a) higher voltage rating  (b) much smaller turn-off time tq  (c) larger gate current  (d) higher holding current
6. **(NAT)** A Class-D commutation circuit has load current 40 A and commutating capacitor charged to 250 V. If the SCR turn-off time is 25 µs, find the minimum commutating capacitance in µF. ______ µF
7. **(NAT)** Six SCRs each rated 1200 V are connected in series to withstand 6000 V. Find the string efficiency in %. ______ %
8. **(NAT)** A resonant-pulse (Class B) circuit has L = 20 µH and C = 40 µF, with the capacitor charged to 100 V. Find the peak commutating current Ip in amperes. ______ A

<details>
<summary>🔑 Solutions</summary>

**1 → (b).** A latching device turns off only when anode current < IH and reverse voltage is held for at least tq; the gate has no turn-off control (except GTO).

**2 → (b).** Line/natural commutation needs an AC source, present in phase-controlled rectifiers, AC controllers, cycloconverters.

**3 → (c) Class D.** Auxiliary/impulse commutation: an auxiliary SCR dumps a charged capacitor across the main SCR to reverse-bias it.

**4 → (b).** Static (steady-state) sharing uses equal parallel resistors to swamp leakage-current differences; RC snubbers are for dynamic sharing.

**5 → (b).** Inverter-grade SCRs have much smaller tq (fast turn-off) for high-frequency forced-commutated circuits.

**6 →**
```
Cmin = I·tq/Vc = 40 × 25e−6 / 250 = 1000e−6/250 = 4.0e−6 F = 4.0 µF
```
**Cmin = 4.0 µF.**

**7 →**
```
η = V_string/(n·Vd) = 6000/(6×1200) = 6000/7200 = 0.8333 = 83.33%
```
**String efficiency = 83.33 %.**

**8 →**
```
Ip = Vc·√(C/L) = 100 × √(40e−6 / 20e−6) = 100 × √2 = 100 × 1.4142 = 141.42 A
```
**Ip ≈ 141.4 A.**

</details>

---

`✅ Day 9 complete — Dynamometer wattmeter (power measurement), Autotransformer/tap-changing/inrush/Scott, and Thyristor commutation. Tomorrow: three-phase power (two-wattmeter method), DC machines I, and TRIAC/GTO & gate drives.`

*Correctness over length — re-derive any result you're unsure of and mark "verify" before the exam.*
