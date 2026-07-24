# ⚡ GATE Technical Revision — Day 7 (2026-07-24)

*The transfer-standard wattmeter movement, the transformer's efficiency secrets, and the latching thyristor that switched on power electronics.*

`📅 Tech Day 7  ·  ⏱ ~45 min  ·  🎯 Measurements + Machines + Power Electronics`

Attempt each section's test **before** opening its solutions — recall beats re-reading.

---

## 🔧 Measuring Instruments: Electrodynamometer (EMMC) Instruments

The **electrodynamometer** replaces PMMC's permanent magnet with a **current-carrying fixed coil**. Because both field and moving-coil currents come from the circuit, it reads **true RMS on AC and DC alike** — the basis of the **dynamometer wattmeter** (next topic).

### 📖 Concept Deep Dive

Two **fixed coils** (in series, producing the field) and one **moving coil** carry currents `i1` and `i2`. The instantaneous torque depends on the mutual inductance gradient `dM/dθ`:

```
Ti = i1 · i2 · (dM/dθ)
```

**As an ammeter/voltmeter** the same current flows through fixed and moving coils (`i1 = i2 = i`), so:

```
Td(avg) = I² · (dM/dθ)      (I = RMS current)
θ = (I²/K) · (dM/dθ)   ⇒   θ ∝ I²   (square-law scale)
```

Being square-law, it indicates **RMS** and works on **both AC and DC** — and because it can be **calibrated on DC and used on AC without correction**, it is a **transfer instrument** (a transfer standard).

**As a wattmeter:** the fixed (current) coil carries load current `I`, the moving (pressure) coil carries a current ∝ voltage `V`; average torque ∝ `V·I·cosφ` = **power**, with a **uniform (linear) wattmeter scale**.

| Feature | PMMC | Electrodynamometer |
|---|---|---|
| Field source | Permanent magnet | Current-carrying fixed coil |
| AC/DC | DC only | **Both** (RMS) |
| Scale (ammeter) | Uniform | Square-law |
| Transfer standard | No | **Yes** |
| Sensitivity/torque | High | Low (weak air field) |

**Errors:** low torque/weight (weak field), frequency & eddy-current errors, stray-field error (needs shielding/astatic design), temperature.

> 💎 **KEY RESULT** — Electrodynamometer torque `Td = I²·(dM/dθ)` (ammeter) or `∝ V·I·cosφ` (wattmeter). It is a **transfer instrument**: calibrate on DC, use on AC.

> 🧠 **MEMORY HOOK** — "**EMMC = two coils, reads RMS, and is the wattmeter's heart**"; ammeter scale square-law, **wattmeter scale uniform**.

> ⚠️ **TRAP ALERT** — As an **ammeter/voltmeter** the scale is **square-law**; as a **wattmeter** the scale is **uniform** (because torque ∝ V·I·cosφ, linear in power). Weak field ⇒ **stray-field errors** (unlike PMMC).

### 📐 Formula Sheet

```
Ti = i1·i2·(dM/dθ)                instantaneous torque
Td(avg, ammeter) = I²·(dM/dθ)     θ ∝ I² (square-law)
Td(wattmeter) ∝ V·I·cosφ = P      uniform scale
Transfer instrument: DC calibration valid on AC
```

### 🧮 Solved Example

An electrodynamometer ammeter has `dM/dθ = 0.2 mH/rad` (constant) and spring constant `K = 0.4×10⁻³ N·m/rad`. Find the deflection at I = 2 A.

- `Td = I²(dM/dθ) = 2² × 0.2×10⁻³ = 4 × 0.2×10⁻³ = 0.8×10⁻³ N·m`
- `θ = Td/K = 0.8×10⁻³ / 0.4×10⁻³ = 2 rad`

### ⚠️ Common Traps
- Reads **RMS**, works on AC **and** DC (transfer instrument).
- Ammeter scale = square-law; **wattmeter scale = uniform**.
- Torque uses `dM/dθ` (mutual-inductance gradient).
- Low sensitivity and stray-field errors (weak field) — opposite of PMMC's strong magnet.

#### 📝 Test

**Q1.** An electrodynamometer instrument can be used on:
- A) DC only  B) AC only  C) Both AC and DC  D) High frequency only

**Q2.** As an ammeter, its scale is:
- A) Uniform  B) Square-law  C) Logarithmic  D) Exponential

**Q3.** As a wattmeter, the scale is:
- A) Square-law  B) Uniform  C) Reverse  D) Non-linear

**Q4.** The electrodynamometer is called a transfer instrument because:
- A) It transfers power  B) DC calibration is valid on AC  C) It has two coils  D) It uses a magnet

**Q5.** The deflecting torque (ammeter mode) is proportional to:
- A) I  B) I²  C) V·I  D) 1/I

**Q6. (NAT)** `dM/dθ = 0.5 mH/rad`, I = 3 A. The deflecting torque is ______ ×10⁻³ N·m.

**Q7. (NAT)** A dynamometer wattmeter with V = 200 V, I = 5 A, pf = 0.8 reads ______ W.

**Q8. (NAT)** If θ ∝ I² and θ = 10° at 1 A, the deflection at 2.5 A is ______ degrees.

<details><summary>🔑 Solutions</summary>

**Q1: C** — Both AC and DC. **Q2: B** — Square-law (ammeter). **Q3: B** — Uniform (torque ∝ power). **Q4: B** — DC calibration valid on AC. **Q5: B** — Td ∝ I².

**Q6:** `Td = 3² × 0.5×10⁻³ = 9 × 0.5×10⁻³ = 4.5×10⁻³ N·m`.
**Q7:** `P = VI·cosφ = 200×5×0.8 = 800 W`.
**Q8:** `θ ∝ I²` → `10 × (2.5)² = 10 × 6.25 = 62.5°`.

</details>

---

## 🔧 Electrical Machines: Transformers III — Losses, Efficiency & Testing

The heart of transformer numericals: **which losses**, **maximum-efficiency condition**, and the **OC/SC tests** that measure them.

### 📖 Concept Deep Dive

**Two loss groups:**

| Loss | Depends on | Found by |
|---|---|---|
| **Core (iron) loss** `Pi` | Voltage/flux & frequency — **constant** with load | **OC (open-circuit) test** |
| **Copper loss** `Pc = I²R` | Load current² — **variable** | **SC (short-circuit) test** |

Core loss = hysteresis (`∝ f·Bmax^1.6`) + eddy (`∝ f²·Bmax²·t²`).

**Efficiency:**

```
η = Output/(Output + losses) = (S·x·cosφ)/(S·x·cosφ + Pi + x²·Pc)
```

where `S` = rated VA, `x` = fraction of full load, `Pc` = full-load copper loss.

**Maximum-efficiency condition:** differentiate → η is max when **variable loss = constant loss**:

```
x²·Pc = Pi   ⇒   x = √(Pi/Pc)   (load fraction for max η)
```

At max efficiency, **copper loss = iron loss**.

**OC test** (rated voltage on LV, HV open): supplies only core loss → gives `Pi`, `Ro`, `Xo` (no-load branch). Wattmeter reads **iron loss**.
**SC test** (reduced voltage on HV, LV shorted, rated current): supplies only copper loss → gives `Pc`, `Req`, `Zeq`, `Xeq`. Wattmeter reads **full-load copper loss**.

**All-day (energy) efficiency:** for distribution transformers (energised 24 h, loaded part-time):

```
ηall-day = (kWh output over 24 h)/(kWh output + kWh losses over 24 h)
```

Iron loss runs all 24 h, so distribution transformers are designed with **low iron loss**.

> 💎 **KEY RESULT** — Max efficiency when **copper loss = iron loss**, at load fraction `x = √(Pi/Pc)`. OC test → iron loss; SC test → copper loss.

> 🧠 **MEMORY HOOK** — "**OC = Iron (Open→ no load→ core), SC = Copper (Short→ full current→ I²R)**." Max-η: losses equal.

> ⚠️ **TRAP ALERT** — Do the **OC test on the LV side** (apply rated voltage safely) and the **SC test on the HV side** (apply small voltage, rated current). All-day efficiency uses **energy (kWh)**, not power.

### 📐 Formula Sheet

```
η = (S·x·cosφ)/(S·x·cosφ + Pi + x²·Pc)
Max η at:  x²·Pc = Pi  ⇒  x = √(Pi/Pc)
At max η:  copper loss = iron loss
Pi from OC test ; Pc(full load) from SC test
ηall-day = kWh_out /(kWh_out + kWh_loss)  (24 h)
```

### 🧮 Solved Examples

**Ex 1.** A transformer has iron loss `Pi = 400 W` and full-load copper loss `Pc = 1600 W`. At what load fraction is efficiency maximum?

- `x = √(Pi/Pc) = √(400/1600) = √0.25 = 0.5` → **50% of full load**.

**Ex 2.** A 100 kVA transformer, `Pi = 1 kW`, full-load `Pc = 2 kW`. Efficiency at full load, 0.8 pf?

- Output `= 100×0.8 = 80 kW`. Losses `= 1 + 2 = 3 kW`.
- `η = 80/(80+3) = 80/83 = 0.964 = 96.4%`.

### ⚠️ Common Traps
- Iron loss is **constant**; copper loss ∝ (load)² — scale `Pc` by `x²`.
- Max efficiency ⇒ **copper = iron**, not "both zero".
- OC → iron loss (LV side), SC → copper loss (HV side) — don't swap.
- All-day efficiency uses **energy**, favouring low iron loss.

#### 📝 Test

**Q1.** The OC (open-circuit) test on a transformer gives:
- A) Copper loss  B) Iron (core) loss  C) Total loss  D) Regulation

**Q2.** Maximum efficiency occurs when:
- A) Copper loss = iron loss  B) Copper loss = 0  C) Iron loss = 0  D) Load = full

**Q3.** Iron loss in a transformer is:
- A) Proportional to load²  B) Constant with load  C) Zero at no load  D) Proportional to load

**Q4.** The SC test is usually performed on the:
- A) LV side  B) HV side  C) Either, at rated voltage  D) Tertiary

**Q5.** All-day efficiency is based on:
- A) Power (kW)  B) Energy (kWh) over 24 h  C) Voltage  D) Current only

**Q6. (NAT)** `Pi = 225 W`, full-load `Pc = 900 W`. Max efficiency occurs at load fraction ______.

**Q7. (NAT)** A 50 kVA transformer at full load 0.9 pf has total loss 1.5 kW. Efficiency is ______ % (1 decimal).

**Q8. (NAT)** At half load, a transformer's copper loss is 500 W. Its full-load copper loss is ______ W.

<details><summary>🔑 Solutions</summary>

**Q1: B** — Iron/core loss. **Q2: A** — Copper = iron. **Q3: B** — Constant (voltage-dependent). **Q4: B** — HV side. **Q5: B** — Energy over 24 h.

**Q6:** `x = √(225/900) = √0.25 = 0.5`.
**Q7:** Output = 50×0.9 = 45 kW; `η = 45/(45+1.5) = 45/46.5 = 96.8%`.
**Q8:** `Pc ∝ x²`; at x=0.5, `500 = 0.25·Pc(FL)` → `Pc(FL) = 2000 W`.

</details>

---

## 🔧 Power Electronics: Thyristor (SCR) — Construction & V-I Characteristics

The **SCR (Silicon Controlled Rectifier)** is the workhorse of high-power control. Today: the 4-layer structure, the two-transistor latch, and the V-I curve with **latching/holding** currents.

### 📖 Concept Deep Dive

An SCR is a **4-layer P-N-P-N** device with three terminals: **anode (A), cathode (K), gate (G)** and **three junctions J1-J2-J3**.

**Two-transistor analogy.** Split the PNPN into a PNP (Q1) and NPN (Q2) transistor with cross-coupled collectors/bases. When a gate pulse injects base current, the loop gain builds up. The SCR turns **fully ON when α1 + α2 → 1** (regenerative latch):

```
Anode current  IA = (α2·IG + ICO)/(1 − (α1 + α2))
Turn-on (latch) when  (α1 + α2) → 1
```

Once latched, the **gate loses control** — the device stays ON by internal regeneration.

**V-I characteristic (forward region):**
- With `IG = 0`, the SCR blocks forward voltage up to the **forward break-over voltage VBO**; beyond it, it switches on (avalanche — undesirable).
- A **gate current** turns it on at a much lower anode voltage; larger IG → lower break-over.
- **Reverse** region: blocks up to reverse break-down (like a diode).

**Two key currents:**

| Current | Definition |
|---|---|
| **Latching current (IL)** | Minimum anode current to **latch ON** (must be reached while the gate pulse is applied) |
| **Holding current (IH)** | Minimum anode current to **stay ON**; below it the SCR turns OFF |

Typically **IL ≈ 2–3 × IH** (latching > holding).

> 💎 **KEY RESULT** — SCR latches when **(α1 + α2) → 1**; **latching current IL > holding current IH** (IL ≈ 2–3·IH). After latching, the gate has **no control** — turn-off needs anode current < IH.

> 🧠 **MEMORY HOOK** — "**Latch to start (IL, higher), Hold to stay (IH, lower)**"; SCR = gate-**on** only, a one-way latch.

> ⚠️ **TRAP ALERT** — **Latching current > holding current** (a common reversal). The gate can only turn the SCR **ON**, never OFF — turning off needs the main (anode) current to drop below IH (commutation).

### 📐 Formula Sheet

```
IA = (α2·IG + ICO)/(1 − (α1 + α2))     two-transistor model
Turn-on: (α1 + α2) → 1
IL (latching) > IH (holding) ,  IL ≈ 2 to 3 × IH
Forward blocking up to VBO (lowered by gate current)
```

### 🧮 Solved Example

An SCR has a holding current `IH = 4 mA`. If latching current is 3 times the holding current, find IL.

- `IL = 3 × IH = 3 × 4 = 12 mA`.

### ⚠️ Common Traps
- **Latching current > holding current** (IL is the larger one).
- The gate turns the SCR **ON only** — never off.
- After latch, removing gate current does **not** turn it off.
- Forward break-over (without gate) is an **undesirable** turn-on mode.

#### 📝 Test

**Q1.** An SCR is a:
- A) 3-layer, 2-junction device  B) 4-layer, 3-junction PNPN device  C) 2-layer diode  D) 5-layer device

**Q2.** After an SCR latches ON, the gate:
- A) Controls current continuously  B) Loses control  C) Turns it off  D) Reverses polarity

**Q3.** The relation between latching (IL) and holding (IH) current is:
- A) IL < IH  B) IL = IH  C) IL > IH  D) IL = 0

**Q4.** In the two-transistor model, the SCR turns on when:
- A) α1 + α2 → 0  B) α1 + α2 → 1  C) α1 = α2  D) α1·α2 = 1

**Q5.** The gate of an SCR can:
- A) Turn it on and off  B) Turn it on only  C) Turn it off only  D) Do nothing

**Q6. (NAT)** An SCR has holding current 5 mA and latching current 2.5 times higher. IL is ______ mA.

**Q7. (NAT)** If α1 = 0.4 and α2 = 0.55, the sum (α1 + α2) is ______ (turn-on when this → 1).

**Q8. (NAT)** An SCR's latching current is 30 mA and holding is 10 mA. The ratio IL/IH is ______.

<details><summary>🔑 Solutions</summary>

**Q1: B** — 4-layer PNPN, 3 junctions. **Q2: B** — Gate loses control after latching. **Q3: C** — IL > IH. **Q4: B** — (α1 + α2) → 1. **Q5: B** — Turn-on only.

**Q6:** `IL = 2.5 × 5 = 12.5 mA`.
**Q7:** `0.4 + 0.55 = 0.95` (approaching 1 → near turn-on).
**Q8:** `30/10 = 3`.

</details>

---

*The transfer wattmeter, the transformer at peak efficiency, the latching thyristor — the technical base keeps rising. Onward!* 💪

`🟩🟩🟩🟩🟩🟩🟩⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜` Measurements **7/21**
`🟩🟩🟩⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜` Machines **3/19**
`🟩🟩🟩⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜` Power Electronics **3/19**
