# ⚡ GATE Technical Revision — Day 47 (2026-09-06)

*Round-3 pass 5 — PMMC range extension, autotransformers, and thyristor commutation. Bread-and-butter GATE numericals.*

📅 Tech Day 47 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics · 🔁 Round-3 pass 5

> 🧠 **MEMORY HOOK** — Today: **extending a PMMC's range** (shunts & multipliers), the **autotransformer's copper saving**, and **turning an SCR off** (commutation & string efficiency). Three near-guaranteed exam themes.

---

## 🔧 Measuring Instruments: PMMC — Shunts, Multipliers & Range Extension

### 📖 Concept Deep Dive

The **PMMC (Permanent Magnet Moving Coil)** movement is the basis of DC analog meters. A coil in a radial field deflects with torque `Td = NBAI = G·I`, balanced by spring torque `K·θ`, so **deflection `θ ∝ I`** — a **uniform (linear) scale**. It responds to the **average (DC)** value; on AC it reads zero (needs a rectifier).

A basic movement has a **full-scale deflection current `Im`** (e.g. 50 µA–1 mA) and coil resistance `Rm`. To measure larger currents/voltages we **extend the range**.

**Ammeter — shunt.** A low resistance `Rsh` in **parallel** diverts most of the current:

```
Ish·Rsh = Im·Rm   ⇒   Rsh = Im·Rm/(I − Im) = Rm/(m − 1)
where multiplying power  m = I/Im  (total current / meter current)
```

**Voltmeter — multiplier (series resistance).** A high resistance `Rse` in **series** drops the excess voltage:

```
V = Im(Rm + Rse)  ⇒   Rse = V/Im − Rm = Rm(n − 1)
where  n = V/(Im·Rm)  (voltage multiplying factor)
```

**Voltmeter sensitivity** = `1/Im` in **ohms-per-volt** — a `50 µA` movement gives `20 kΩ/V`, drawing less current (less loading) than a `1 mA` (1 kΩ/V) movement.

**Swamping resistance.** The copper coil's resistance rises with temperature (positive tempco), causing error. A **swamping resistor** of manganin/constantan (near-zero tempco) in series with the coil "swamps" the copper's variation, stabilising the total resistance against temperature.

**Ayrton (universal) shunt** — a tapped shunt giving **multiple current ranges** with one resistor chain, avoiding the risk of an open shunt (which would send full current through the movement). For a total shunt `R` tapped so a fraction is across the movement, each tap gives a different multiplying power.

> 💎 **KEY RESULT** — Ammeter shunt `Rsh = Rm/(m−1)` (`m = I/Im`). Voltmeter multiplier `Rse = Rm(n−1)`. Voltmeter sensitivity `= 1/Im` (Ω/V). **PMMC reads DC average, linear scale.**

> ⚠️ **TRAP ALERT** — For the ammeter use **m = I/Im** (total/meter current); for the voltmeter use **n = V/(Im·Rm)**. Mixing the two formulas is the classic slip. PMMC on AC (no rectifier) reads **zero**.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Deflection | `θ = (NBA/K)·I` (linear) |
| Shunt (ammeter) | `Rsh = Im·Rm/(I−Im) = Rm/(m−1)` |
| Multiplying power | `m = I/Im = 1 + Rm/Rsh` |
| Multiplier (voltmeter) | `Rse = V/Im − Rm = Rm(n−1)` |
| Voltmeter sensitivity | `S = 1/Im` (Ω/V) |
| Total voltmeter resistance | `Rv = S × range = Rm + Rse` |

### 🧮 Solved Examples

**Example 1 — shunt for an ammeter.**
A movement reads full scale at `Im = 1 mA`, `Rm = 100 Ω`. Find the shunt to read `1 A` full scale.

- `m = I/Im = 1/0.001 = 1000`.
- `Rsh = Rm/(m−1) = 100/(1000−1) = 100/999 = 0.1001 Ω`.

**Example 2 — multiplier and sensitivity.**
Same movement (`Im = 1 mA`, `Rm = 100 Ω`) as a `0–150 V` voltmeter. Find `Rse` and the sensitivity.

- `Rse = V/Im − Rm = 150/0.001 − 100 = 150,000 − 100 = 149,900 Ω`.
- Sensitivity `= 1/Im = 1/0.001 = 1000 Ω/V`; total `Rv = 1000 × 150 = 150 kΩ` ✓.

```
A 50 µA movement instead → sensitivity 20 kΩ/V, Rv = 3 MΩ for the same range → far less loading.
```

> 🧠 **MEMORY HOOK** — **Shunt = parallel = low R** (ammeter); **multiplier = series = high R** (voltmeter). Lower `Im` → higher Ω/V → better voltmeter.

### ⚠️ Common Traps

1. Using `m = I/Im` in the voltmeter formula (should use `n = V/ImRm`).
2. Forgetting the `−Rm` term in `Rse = V/Im − Rm`.
3. Assuming PMMC reads AC (it reads **average**; on pure AC → 0 without a rectifier).
4. Ignoring the temperature error of the copper coil (**swamping resistor** fixes it).
5. Leaving out the **Ayrton shunt**'s safety role (no open-shunt hazard).
6. Confusing sensitivity (Ω/V) with accuracy.

### 📝 Test — PMMC & Range Extension (8 Q)

1. A PMMC meter has a scale that is: (a) square-law (b) linear (c) logarithmic (d) cramped at start.
2. To extend an ammeter range we add a: (a) series high R (b) parallel low R (shunt) (c) capacitor (d) inductor.
3. A voltmeter using a 50 µA movement has sensitivity: (a) 2 kΩ/V (b) 20 kΩ/V (c) 50 kΩ/V (d) 1 kΩ/V.
4. The swamping resistor is made of: (a) copper (b) manganin/constantan (c) aluminium (d) iron.
5. A PMMC meter on pure AC reads: (a) RMS (b) peak (c) zero (average) (d) average×1.11.
6. **(NAT)** `Im = 2 mA`, `Rm = 50 Ω`. Shunt (Ω, 4 dp) to read 2 A full scale?
7. **(NAT)** Same movement as a 0–100 V voltmeter. Multiplier `Rse` (Ω)?
8. **(NAT)** A 1 mA, 100 Ω movement — its multiplying power m with a 0.05 Ω shunt (1 dp)?

<details><summary>🔑 Solutions</summary>

**Q1 — (b) linear** (`θ ∝ I`).

**Q2 — (b).** Parallel shunt.

**Q3 — (b).** `1/50µA = 20 kΩ/V`.

**Q4 — (b).** Manganin/constantan (low tempco).

**Q5 — (c).** Average of AC = 0.

**Q6.** `m = 2/0.002 = 1000`; `Rsh = Rm/(m−1) = 50/999 = 0.0501 Ω`.

**Q7.** `Rse = V/Im − Rm = 100/0.002 − 50 = 50,000 − 50 = 49,950 Ω`.

**Q8.** `m = 1 + Rm/Rsh = 1 + 100/0.05 = 1 + 2000 = 2001 ≈ 2001.0`.

</details>

---

## 🔧 Electrical Machines: Autotransformer, Tap-Changing & Scott Connection

### 📖 Concept Deep Dive

**Autotransformer.** A single tapped winding serves as both primary and secondary — part of the winding is **common** to both. Because energy is transferred **partly by conduction** (through the common winding) and partly by transformation, it uses **less copper** than a two-winding transformer of the same rating.

For an autotransformer stepping between `V1` (full winding) and `V2` (tapped), with ratio `a = V1/V2` (`a > 1` for step-down):

```
Copper (and material) saving:  weight of Cu in auto / two-winding = (1 − 1/a) ... for step-down (a=V1/V2)
Equivalently, saving = (1/a) × (two-winding Cu)   → so saving fraction = 1/a of the "series" part
kVA transferred:  by transformation = (input kVA)(1 − V2/V1) ; by conduction = (input kVA)(V2/V1)
```

A cleaner standard result: for a two-winding transformer reconnected as an autotransformer, the **kVA rating is boosted** by the factor `1/(1 − V2/V1)` (or `(a)/(a−1)` depending on connection), because the conduction path carries extra throughput. Autotransformers are economical when the **ratio is close to 1** (`a ≈ 1` → large saving); the drawback is the **loss of electrical isolation** and a larger short-circuit current.

**Tap changing.** To regulate voltage, taps on a winding are switched:
- **Off-load (no-load) tap changer** — supply must be disconnected to change taps (cheap, infrequent adjustment).
- **On-load tap changer (OLTC)** — changes taps **without interrupting** load, using a diverter switch + transition resistor/reactor so the load current is never broken; taps are usually on the **HV side** (lower current, easier switching).

**Inrush current.** At switch-on, if the applied voltage catches the core near residual flux with the wrong polarity, the flux can nearly **double**, driving the core deep into **saturation** → a large **magnetising inrush current** (several times full-load), rich in harmonics. It is transient and decays; relays must be desensitised (2nd-harmonic restraint) to avoid false tripping.

**Scott connection (T-T).** Converts **3-phase to 2-phase** (or vice-versa) using **two transformers**: the **main** (with a centre tap) and the **teaser** (tapped at **86.6% = √3/2** of its winding). Used for two-phase supplies and phase conversion.

> 💎 **KEY RESULT** — Autotransformer saves copper (saving large when `a → 1`) but loses isolation; kVA is boosted by the conduction path. **OLTC** changes taps under load (HV side). **Scott (T-T)** = 3-φ ↔ 2-φ, teaser tapped at **86.6%**.

> ⚠️ **TRAP ALERT** — Autotransformer copper saving is greatest when the **ratio is near 1** (voltages close). The **teaser** transformer is tapped at **86.6% (√3/2)**, not 50%. Inrush is a **magnetising** phenomenon (not a load fault).

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Auto vs two-winding Cu (step-down, a=V1/V2) | `Cu_auto/Cu_2wdg = (1 − 1/a)` |
| Cu saving fraction | `= 1/a` (of two-winding copper) |
| kVA by conduction / transformation | `(V2/V1)·S` and `(1 − V2/V1)·S` |
| Teaser tap (Scott) | `= √3/2 = 0.866` of main winding |
| OLTC location | usually **HV** side (lower current) |

### 🧮 Solved Examples

**Example 1 — copper saving.**
A two-winding transformer is reconnected as a step-down autotransformer with `a = V1/V2 = 2`. Copper saving compared with the two-winding version?

- Saving fraction `= 1/a = 1/2 = 0.5 = 50%`.
- So the autotransformer uses **half** the copper of the equivalent two-winding transformer.

```
If a = 1.1 (voltages close): saving = 1/1.1 = 91% → auto is very economical.
If a = 10 (far apart): saving = 10% → little benefit, isolation lost — not worth it.
```

**Example 2 — Scott teaser voltage.**
A Scott-connected pair converts `400 V` 3-phase to 2-phase. Teaser transformer tapping point voltage (as a fraction)?

- Teaser is tapped at `√3/2 = 0.866` of the main winding.
- Teaser primary sees `0.866 × 400 = 346.4 V` across its active turns.

> 🧠 **MEMORY HOOK** — "**Close ratio → big copper saving**" (autotransformer). "**Teaser at 86.6%**" (Scott). "**OLTC on HV, never break the load**."

### ⚠️ Common Traps

1. Thinking autotransformers always save a lot — saving `= 1/a`, big only when `a ≈ 1`.
2. Forgetting the **loss of isolation** (a key disadvantage).
3. Placing the OLTC on the LV (high-current) side — usually **HV**.
4. Using 50% instead of **86.6%** for the Scott teaser tap.
5. Treating inrush as a load fault (it's a **magnetising** transient).
6. Ignoring 2nd-harmonic restraint needed to ride through inrush.

### 📝 Test — Autotransformer & Connections (8 Q)

1. An autotransformer, compared to a two-winding one, uses: (a) more copper (b) less copper (c) same copper (d) no copper.
2. Copper saving in an autotransformer is largest when the ratio is: (a) very large (b) close to 1 (c) exactly 10 (d) negative.
3. A major disadvantage of the autotransformer is: (a) heavy weight (b) loss of isolation (c) low efficiency (d) no regulation.
4. An OLTC changes taps: (a) only when off (b) without breaking the load (c) by rewinding (d) never.
5. Taps for voltage control are usually on the: (a) LV side (b) HV side (c) core (d) tank.
6. **(NAT)** A two-winding transformer reconnected as an auto with `a = 4`. Copper saving fraction (%)?
7. **(NAT)** Scott teaser tap fraction (%) of the main winding (1 dp)?
8. **(NAT)** Auto step-down, `V1 = 250 V`, `V2 = 200 V`, throughput 10 kVA. kVA transferred by conduction (V2/V1 × S)?

<details><summary>🔑 Solutions</summary>

**Q1 — (b) less copper.**

**Q2 — (b).** Ratio close to 1.

**Q3 — (b).** No electrical isolation.

**Q4 — (b).** Under load, via diverter/transition impedance.

**Q5 — (b).** HV side (lower current).

**Q6.** Saving `= 1/a = 1/4 = 0.25 = 25%`.

**Q7.** `√3/2 = 0.866 = 86.6%`.

**Q8.** Conduction kVA `= (V2/V1)·S = (200/250)×10 = 0.8×10 = 8 kVA` (transformation = 2 kVA).

</details>

---

## 🔧 Power Electronics: Thyristor III — Turn-off, Commutation & String Efficiency

### 📖 Concept Deep Dive

An SCR turns off only when its anode current falls **below holding current** and stays reverse-biased long enough to regain forward-blocking capability. This is **commutation**.

**Turn-off time `tq`** = **reverse recovery time `trr`** + **gate recovery time `tgr`**. The circuit must keep the SCR reverse-biased for at least `tq`; the available time is the **circuit turn-off time `tc`**, which must satisfy `tc ≥ tq`.

**Commutation types.**
- **Natural (line) commutation** — the AC supply itself drives the current to zero and reverse-biases the SCR every half-cycle (used in AC-fed converters: controlled rectifiers, AC voltage controllers, cycloconverters). No extra components.
- **Forced commutation** — in **DC circuits** the current does not naturally reverse, so external **L-C** elements (and sometimes an auxiliary SCR) force the main SCR's current to zero. Classes:
  - **Class A** — self/resonant (load-resonant) commutation.
  - **Class B** — resonant-pulse (L-C across the SCR).
  - **Class C** — complementary (one SCR turns off the other).
  - **Class D** — auxiliary/impulse commutation.
  - **Class E** — external pulse source.
  - **Class F** — line (AC) commutation.

**Series operation & string efficiency.** SCRs are connected in **series** to share high **voltage**, and in **parallel** to share high **current**. Because devices are not identical, sharing is unequal. **String efficiency** quantifies how well the string is utilised:

```
String efficiency = (actual string voltage or current) / (n × rating of one device)
                  = V(string) / (n × Vrating)          [series]
```

String efficiency is **always < 1 (100%)** due to parameter spread. It is improved by:
- **Series** — **static** equalising resistors (across each SCR) to equalise **off-state** voltage from leakage-current mismatch, and **dynamic** R-C (snubber) networks to equalise **transient** voltage during turn-on/turn-off.
- **Parallel** — series inductors / matched devices / magnetic coupling to equalise current sharing.

The **derating factor** `= 1 − string efficiency`.

> 💎 **KEY RESULT** — `tq = trr + tgr`; need `tc ≥ tq`. **Natural** commutation (AC, free) vs **forced** (DC, L-C, classes A-F). **String efficiency = V(string)/(n·Vrating) < 1**; equalise with static R (off-state) + dynamic R-C (transient).

> ⚠️ **TRAP ALERT** — **Natural** commutation is for **AC-fed** converters; **forced** commutation is needed in **DC** choppers/inverters. Series SCRs share **voltage**; parallel share **current**. String efficiency is never 100%.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Turn-off time | `tq = trr + tgr` |
| Commutation requirement | `tc ≥ tq` (circuit ≥ device) |
| String efficiency (series) | `η_s = V(string)/(n·Vrating)` |
| String efficiency (parallel) | `η_s = I(string)/(n·Irating)` |
| Derating factor | `DRF = 1 − η_s` |
| Static equalisation | resistor across each SCR (off-state balance) |

### 🧮 Solved Examples

**Example 1 — string efficiency.**
Four SCRs (each rated `800 V`) are in series to block `2800 V`. Find the string efficiency and derating factor.

- `η_s = V(string)/(n·Vrating) = 2800/(4×800) = 2800/3200 = 0.875 = 87.5%`.
- Derating factor `= 1 − 0.875 = 0.125 = 12.5%`.

**Example 2 — turn-off time check.**
An SCR has `trr = 8 µs`, `tgr = 4 µs`. The commutation circuit provides `tc = 15 µs`. Is turn-off reliable?

- `tq = trr + tgr = 8 + 4 = 12 µs`.
- `tc = 15 µs ≥ tq = 12 µs` → **yes**, the SCR turns off reliably (3 µs margin).

> 🧠 **MEMORY HOOK** — "**Series shares volts, parallel shares amps.**" String efficiency `= actual/(n×rating)` — the shortfall is the **derating**.

### ⚠️ Common Traps

1. Using natural commutation for a **DC** circuit (needs forced commutation).
2. Forgetting `tc` must be **≥** `tq` (else the SCR re-triggers / fails to commutate).
3. Swapping series (voltage) and parallel (current) sharing roles.
4. Expecting **100%** string efficiency (never — parameter spread).
5. Omitting **static** (off-state) vs **dynamic** (transient) equalisation.
6. Confusing turn-off time `tq` with reverse recovery `trr` alone (`tq = trr + tgr`).

### 📝 Test — Thyristor III (8 Q)

1. Turn-off time of an SCR is: (a) trr only (b) tgr only (c) trr + tgr (d) tc.
2. For reliable commutation: (a) tc < tq (b) tc = 0 (c) tc ≥ tq (d) tq = ∞.
3. AC-fed converters mostly use: (a) forced commutation (b) natural (line) commutation (c) no commutation (d) light triggering.
4. Series-connected SCRs share: (a) current (b) voltage (c) power only (d) nothing.
5. String efficiency is: (a) always 100% (b) always < 100% (c) > 100% (d) exactly 50%.
6. **(NAT)** Five SCRs (each 600 V) in series block 2400 V. String efficiency (%)?
7. **(NAT)** For Q6, the derating factor (%)?
8. **(NAT)** `trr = 10 µs`, `tgr = 5 µs`. Minimum circuit turn-off time tc (µs)?

<details><summary>🔑 Solutions</summary>

**Q1 — (c).** `tq = trr + tgr`.

**Q2 — (c).** `tc ≥ tq`.

**Q3 — (b).** Natural/line commutation.

**Q4 — (b).** Voltage.

**Q5 — (b).** Always below 100%.

**Q6.** `η_s = 2400/(5×600) = 2400/3000 = 0.80 = 80%`.

**Q7.** `DRF = 1 − 0.80 = 0.20 = 20%`.

**Q8.** `tq = 10 + 5 = 15 µs`; so `tc ≥ 15 µs` (minimum 15 µs).

</details>

---

> 🧠 **DAY-47 WRAP (Round-3 pass 5)** — **PMMC:** shunt `Rm/(m−1)`, multiplier `Rm(n−1)`, sensitivity `1/Im`, linear DC scale. **Autotransformer:** copper saving `= 1/a` (big when a→1), no isolation; OLTC on HV; Scott teaser at **86.6%**. **SCR:** `tq = trr + tgr`, natural (AC) vs forced (DC) commutation, series→volts/parallel→amps, string efficiency `= actual/(n·rating) < 1`. ⚡

**🔁 Round-3 progress:** Measurements ▓▓▓▓▓░░░░░ · Machines ▓▓▓▓▓░░░░░ · Power Electronics ▓▓▓▓▓░░░░░ — round-3 past the halfway mark. 🎓 Power Systems joins as a 4th subject once the reference PDFs arrive.
