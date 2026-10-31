# ⚡ GATE Technical Revision — Day 102 (2026-10-31)

*The cathode-ray oscilloscope — deflection sensitivity, time-base and Lissajous patterns; transformer losses, efficiency and the OC/SC tests; and the thyristor (SCR) — construction, two-transistor analogy, V-I characteristics with latching & holding current.*

📅 Tech Day 102 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics

---

## 🔧 Measuring Instruments: CRO — CRT, Deflection Sensitivity, Time-base, Sync, Lissajous & DSO

### 📖 Concept Deep Dive

The **cathode-ray oscilloscope (CRO)** displays a voltage waveform versus time. Its heart is the **cathode-ray tube (CRT)**: an **electron gun** (heated cathode, control grid for intensity, focusing & accelerating anodes) produces a fine electron beam; two pairs of **electrostatic deflection plates** (vertical = Y, horizontal = X) steer it; the beam strikes a **phosphor screen** producing a glowing spot.

**Electrostatic deflection.** With deflecting voltage `Vd` across plates of length `l`, separation `d`, at anode (accelerating) voltage `Va`, and screen distance `L` from the plate centre, the beam deflection on screen is:

```
D = (l·L·Vd) / (2·d·Va)
```

- **Deflection sensitivity** `S = D/Vd = (l·L)/(2·d·Va)` — screen displacement per volt (mm/V). It is **inversely proportional to the accelerating voltage `Va`**.
- **Deflection factor** `G = 1/S = Vd/D` (V/mm) — the reciprocal.

**Time-base (sweep).** To plot voltage vs time, the X-plates get a **sawtooth** sweep voltage: a linear ramp (trace) that moves the spot left→right at constant speed, then a fast **flyback (retrace)**, usually blanked. A **sweep generator** sets the time/div.

**Synchronization / triggering.** For a **stationary** display the sweep must start at the same point of the signal each cycle — the sweep is **triggered** by the input (internal), the line, or an external signal. A **triggered sweep** (modern CROs) starts only on a selected slope/level, giving stable traces; older **free-running** sweeps used sync.

**Measurements.** Amplitude = (vertical divisions) × (volts/div); time period = (horizontal divisions) × (time/div); frequency `f = 1/T`. Phase can be read from two traces or via Lissajous.

**Lissajous patterns.** Apply one sine to Y and another to X (no time-base). The shape gives the **frequency ratio** and **phase**:

```
fx / fy = (number of tangencies to a horizontal line) / (number of tangencies to a vertical line)
        = Ny (horizontal tangencies) : Nx (vertical tangencies)
```

For equal frequencies, the pattern is an **ellipse**; a straight line means 0° or 180°, a circle means 90° (with equal amplitudes). Phase: `sinφ = y-intercept / y-max` (= `x₀/x_max`).

**Probes.** A **×10 (attenuator) probe** has a 9 MΩ series resistor forming a 10:1 divider with the 1 MΩ CRO input, raising input impedance and reducing loading; it must be **compensated** (adjustable capacitor) so the RC divider is frequency-independent. Trade-off: signal reduced ×10.

**DSO (Digital Storage Oscilloscope).** Samples the input via a **sample-and-hold + ADC**, stores samples in memory, and reconstructs the waveform. Advantages: storage, pre-trigger view, math/FFT, automatic measurements. Key specs: **sampling rate** (must satisfy **Nyquist**, `fs > 2·f_signal`; practically `fs ≥ 5–10×`), **bandwidth**, and **memory depth**. Aliasing occurs if under-sampled.

> 💎 **KEY RESULT** — Deflection `D = l·L·Vd/(2·d·Va)`; sensitivity `S = l·L/(2·d·Va)` (∝ 1/Va). Time-base = sawtooth (X). Lissajous: `fx/fy = (horizontal tangencies)/(vertical tangencies)`. ×10 probe = 9 MΩ + 1 MΩ, must be compensated. DSO: Nyquist `fs > 2f`.

> 🧠 **MEMORY HOOK** — "**D = lLVd/2dVa (S ∝ 1/Va); sawtooth sweeps X; Lissajous ratio = tangency counts; ×10 probe needs compensation; DSO obeys Nyquist.**"

### 📐 Formula Sheet

| Quantity | Expression |
|---|---|
| Screen deflection | `D = l·L·Vd/(2·d·Va)` |
| Deflection sensitivity | `S = D/Vd = l·L/(2·d·Va)` (mm/V) |
| Deflection factor | `G = 1/S` (V/mm) |
| Amplitude read | `V = (div) × (volts/div)` |
| Time period | `T = (div) × (time/div)`, `f = 1/T` |
| Lissajous ratio | `fx/fy = N_horizontal-tangencies / N_vertical-tangencies` |
| Lissajous phase | `sinφ = y₀/y_max` |
| DSO sampling | `fs > 2·f_max` (Nyquist) |

### 🧮 Solved Examples

**Example 1 — Deflection sensitivity.**
A CRT has deflection plates `l = 2 cm` long, separation `d = 0.5 cm`, screen distance `L = 20 cm`, accelerating voltage `Va = 2000 V`. Find the deflection sensitivity and the deflection for `Vd = 50 V`.

```
S = l·L/(2·d·Va) = (0.02·0.20)/(2·0.005·2000)
  = (0.004)/(20) = 2×10⁻⁴ m/V = 0.2 mm/V
D = S·Vd = 0.2 mm/V · 50 V = 10 mm = 1.0 cm
```

Sensitivity `S = 0.2 mm/V`; deflection `D = 10 mm`.

**Example 2 — Lissajous frequency ratio.**
A Lissajous figure is tangent to a horizontal line at **3** points and to a vertical line at **2** points. If the X-input frequency is 100 Hz, find the Y-input frequency.

```
fx/fy = (horizontal tangencies)/(vertical tangencies) = 3/2  (standard convention)
⇒ fx/fy = 3/2 ⇒ 100/fy = 3/2 ⇒ fy = 100·2/3 ≈ 66.7 Hz
```

(Using the common convention `fx:fy = N_horiz:N_vert`.) `fy ≈ 66.7 Hz`. *(Note: some texts define the ratio the other way — state the convention used.)*

### ⚠️ Common Traps

1. **Sensitivity increases with Va** — it is **inversely** proportional: `S ∝ 1/Va`.
2. **Deflection factor = sensitivity** — they are **reciprocals** (`G = 1/S`).
3. **Time-base is sinusoidal** — the sweep is a **sawtooth (ramp)**, not a sine.
4. **×10 probe boosts the signal** — it **attenuates** ×10 (but raises input impedance, reduces loading).
5. **DSO can sample at any rate** — it must satisfy **Nyquist** (`fs > 2f`) or **aliasing** occurs.
6. **Lissajous counts both axes the same** — the frequency ratio uses the **ratio** of tangencies on the two axes (mind the convention).

### 📝 Test — Measuring Instruments (8 Q)

1. In a CRT, the beam is deflected by:
   (a) magnetic coils only (b) electrostatic plates (c) a prism (d) a grid
2. Deflection sensitivity of a CRT is proportional to:
   (a) Va (b) 1/Va (c) Va² (d) Vd
3. The horizontal plates of a CRO are driven by a:
   (a) sine wave (b) sawtooth time-base (c) square wave (d) DC level
4. A ×10 oscilloscope probe uses a series resistance of about:
   (a) 1 MΩ (b) 9 MΩ (c) 100 kΩ (d) 10 Ω
5. To avoid aliasing, a DSO must sample at:
   (a) fs > 2·f_max (b) fs < f_max (c) fs = f_max (d) any rate
6. An ellipse on a CRO (X-Y mode) with equal frequencies indicates:
   (a) a phase difference (b) unequal frequency (c) DC (d) no signal
7. **(NAT)** A CRT: l = 2.5 cm, L = 24 cm, d = 0.4 cm, Va = 1500 V. Find S (mm/V).
8. **(NAT)** A signal shows 4 divisions peak-to-peak at 2 V/div and a period of 5 divisions at 1 ms/div. Find its frequency (Hz).

<details><summary>🔑 Solutions</summary>

**1 → (b).** Electrostatic deflection plates.

**2 → (b).** `S ∝ 1/Va`.

**3 → (b).** Sawtooth time-base.

**4 → (b).** 9 MΩ (with 1 MΩ input → 10:1).

**5 → (a).** `fs > 2·f_max` (Nyquist).

**6 → (a).** A phase difference (0°/180° → line; 90° → circle).

**7 (NAT).** `S = l·L/(2·d·Va) = (0.025·0.24)/(2·0.004·1500) = 0.006/12 = 5×10⁻⁴ m/V = 0.5 mm/V`.

**8 (NAT).** `T = 5 div · 1 ms = 5 ms = 5×10⁻³ s`; `f = 1/T = 1/0.005 = 200 Hz`.

</details>

---

## 🔧 Electrical Machines: Transformers III — Losses, Efficiency, OC & SC Tests

### 📖 Concept Deep Dive

A transformer has two loss groups: **core (iron) losses** and **copper (I²R) losses**.

**Core losses** `Pi` (hysteresis + eddy) depend on the **flux/voltage and frequency**, essentially **constant** from no-load to full-load (voltage and frequency fixed): `Ph ∝ f·Bm^1.6`, `Pe ∝ f²·Bm²·t²`.

**Copper losses** `Pc = I²·Req` vary as the **square of load current** (or load fraction `x`): at load fraction `x`, copper loss `= x²·Pc(fl)`.

**Efficiency.**

```
η = Pout / (Pout + Pi + Pc)
At load fraction x, pf = cosφ, rating S (VA):
η = (x·S·cosφ) / (x·S·cosφ + Pi + x²·Pc(fl))
```

**Condition for maximum efficiency:** variable (copper) loss = constant (iron) loss:

```
x²·Pc(fl) = Pi   ⇒   x = √(Pi / Pc(fl))
```

So max efficiency occurs at the load fraction where **copper loss equals iron loss**. The kVA at max efficiency = `S·√(Pi/Pc(fl))`.

**Open-Circuit (OC / no-load) test** — done on the **LV side** (HV open), LV energised at **rated voltage**. Since no-load current is small and secondary is open, copper loss is negligible → the **wattmeter reads core loss `Pi`**. Gives the **shunt branch**: `cosφ0 = Woc/(V·I0)`, `Iw = I0cosφ0`, `Im = I0sinφ0`, `R0 = V/Iw`, `X0 = V/Im`.

**Short-Circuit (SC) test** — done on the **HV side** (LV shorted), applying a **reduced voltage** (~5–10% rated) to circulate **rated current**. Core loss is negligible (low flux) → the **wattmeter reads full-load copper loss `Pc`**. Gives **equivalent series impedance**: `Zeq = Vsc/Isc`, `Req = Wsc/Isc²`, `Xeq = √(Zeq² − Req²)`.

**All-day (energy) efficiency** — for distribution transformers (energised 24 h, loaded part-time):

```
η_all-day = (energy output in kWh over 24 h) / (energy output + core-loss energy + copper-loss energy over 24 h)
```

Because core loss runs all 24 h, distribution transformers are designed with **low core loss** (they may have low commercial efficiency yet high all-day efficiency).

> 💎 **KEY RESULT** — `η = xScosφ/(xScosφ + Pi + x²Pc)`. Max η when `x²Pc = Pi` ⇒ `x = √(Pi/Pc)` (copper = iron loss). **OC test** (LV, rated V) → **core loss + shunt branch**; **SC test** (HV, rated I, reduced V) → **copper loss + series impedance**. All-day efficiency uses energy over 24 h.

> 🧠 **MEMORY HOOK** — "**OC = iron loss (no-load, Ro/Xo); SC = copper loss (Req/Xeq); max η when copper = iron, x = √(Pi/Pc).**"

### 📐 Formula Sheet

| Quantity | Expression |
|---|---|
| Efficiency | `η = xScosφ/(xScosφ + Pi + x²Pc)` |
| Copper loss at load x | `Pc(x) = x²·Pc(fl)` |
| Max-efficiency load | `x = √(Pi/Pc(fl))` |
| Condition | copper loss = iron loss |
| OC test (power) | `Woc = Pi` (core loss) |
| SC test (power) | `Wsc = Pc` (full-load copper loss) |
| SC impedances | `Zeq = Vsc/Isc`, `Req = Wsc/Isc²`, `Xeq = √(Zeq²−Req²)` |

### 🧮 Solved Examples

**Example 1 — Efficiency & max-efficiency load.**
A `50 kVA` transformer has iron loss `Pi = 400 W` and full-load copper loss `Pc = 625 W`. Find (i) efficiency at full load, 0.8 pf; (ii) the load fraction for maximum efficiency.

```
(i) Pout = 50000·0.8 = 40000 W
    η = 40000 / (40000 + 400 + 625) = 40000/41025 = 0.9750 = 97.5 %
(ii) x = √(Pi/Pc) = √(400/625) = √0.64 = 0.8
    ⇒ max efficiency at 80 % load (40 kVA)
```

Full-load η ≈ **97.5 %**; maximum efficiency at **80 % load**.

**Example 2 — SC test parameters.**
An SC test on the HV side gives `Vsc = 60 V`, `Isc = 20 A` (rated), `Wsc = 400 W`. Find `Zeq`, `Req`, `Xeq` (referred to HV).

```
Zeq = Vsc/Isc = 60/20 = 3.0 Ω
Req = Wsc/Isc² = 400/(20²) = 400/400 = 1.0 Ω
Xeq = √(Zeq² − Req²) = √(9 − 1) = √8 = 2.83 Ω
```

`Zeq = 3 Ω`, `Req = 1 Ω`, `Xeq ≈ 2.83 Ω`.

### ⚠️ Common Traps

1. **Core loss varies with load** — it is ~**constant**; **copper** loss varies as `x²`.
2. **OC test on HV side** — OC is done on the **LV side** (HV open); SC on the **HV side** (LV shorted).
3. **SC test gives core loss** — SC gives **copper loss** (low flux); OC gives **core loss**.
4. **Max efficiency at full load always** — only if `Pc(fl) = Pi`; generally at `x = √(Pi/Pc)`.
5. **All-day efficiency = commercial efficiency** — all-day is **energy**-based over 24 h (core loss runs continuously).
6. **Applying rated voltage in SC test** — apply only **reduced** voltage (~5–10%) to get rated current.

### 📝 Test — Electrical Machines (8 Q)

1. The open-circuit test on a transformer gives:
   (a) copper loss (b) core loss & shunt branch (c) series impedance (d) regulation
2. The short-circuit test is usually performed on the:
   (a) LV side (b) HV side (c) either, at rated V (d) tertiary
3. Maximum efficiency occurs when:
   (a) copper loss = iron loss (b) copper loss = 0 (c) iron loss = 0 (d) load = 0
4. Copper loss at half load compared to full load is:
   (a) half (b) one-quarter (c) same (d) double
5. In the SC test, the applied voltage is about:
   (a) rated voltage (b) 5–10% of rated (c) twice rated (d) zero
6. All-day efficiency is important for:
   (a) power transformers (b) distribution transformers (c) CTs (d) autotransformers
7. **(NAT)** Pi = 300 W, Pc(fl) = 1200 W. Find the load fraction for max efficiency.
8. **(NAT)** A 25 kVA transformer: Pi = 200 W, full-load Pc = 300 W. Find η (%) at full load, unity pf.

<details><summary>🔑 Solutions</summary>

**1 → (b).** Core loss and the shunt (magnetising) branch.

**2 → (b).** HV side (LV shorted).

**3 → (a).** Copper loss = iron loss.

**4 → (b).** `(0.5)² = 0.25` → one-quarter.

**5 → (b).** ~5–10% of rated voltage.

**6 → (b).** Distribution transformers.

**7 (NAT).** `x = √(Pi/Pc) = √(300/1200) = √0.25 = 0.5` → 50% load.

**8 (NAT).** `Pout = 25000·1 = 25000 W`; `η = 25000/(25000+200+300) = 25000/25500 = 0.9804 = 98.0 %`.

</details>

---

## 🔧 Power Electronics: Thyristor (SCR) I — Construction, Two-Transistor Analogy, V-I Characteristics, Latching & Holding Current

### 📖 Concept Deep Dive

The **thyristor (Silicon Controlled Rectifier, SCR)** is a **four-layer (P-N-P-N), three-terminal** (anode A, cathode K, gate G) **latching** switch — the workhorse of high-power control (rectifiers, HVDC, large drives).

**Construction & three junctions.** Four alternating layers P1-N1-P2-N2 create three junctions **J1, J2, J3**. Anode on P1, cathode on N2, gate on P2.

**Two-transistor analogy.** The P-N-P-N is modelled as an interconnected **PNP (Q1)** and **NPN (Q2)** pair: Q1's collector drives Q2's base and vice-versa — positive feedback. With common-base current gains `α1`, `α2`, the anode current is:

```
IA = (α2·IG + ICBO) / (1 − (α1 + α2))
```

As `(α1 + α2) → 1`, `IA → ∞` (regeneration) — the device **latches ON**. The gain `α` rises with current, so a small gate pulse that raises current triggers the runaway.

**Three operating modes:**
1. **Reverse blocking** — anode negative: J1, J3 reverse-biased, only small leakage; breaks down at reverse breakdown voltage.
2. **Forward blocking (OFF)** — anode positive, no gate: **J2 reverse-biased**, blocks forward current (only leakage). This is the stable OFF state.
3. **Forward conduction (ON)** — triggered by a gate pulse (or forward breakover `VBO`): all junctions effectively forward, large current flows with a small on-drop (~1–1.5 V).

**V-I characteristic (forward).** From origin, small forward leakage until the **forward breakover voltage `VBO`** (no gate), where it snaps into conduction (negative-resistance region) and the voltage collapses to the on-state. **Increasing gate current lowers `VBO`** — the practical way to turn on.

**Latching vs holding current:**
- **Latching current `IL`** — the **minimum anode current to latch** the SCR ON (the gate signal can then be removed and it stays ON). Measured at **turn-on**.
- **Holding current `IH`** — the **minimum anode current to keep it ON**; if `IA` falls below `IH`, the SCR **turns OFF**. Measured while turning off.
- Relationship: **`IL > IH`** (typically `IL ≈ 2–3×IH`).

A gate pulse need only be present until `IA > IL`; the SCR then self-holds.

> 💎 **KEY RESULT** — SCR = 4-layer PNPN, 3 junctions (J1,J2,J3); OFF = **J2 reverse-biased** (forward blocking). Two-transistor: `IA = (α2IG + ICBO)/(1 − (α1+α2))`; latches when `α1+α2 → 1`. **Latching `IL` > holding `IH`** (IL ≈ 2–3·IH). Gate current **reduces `VBO`**.

> 🧠 **MEMORY HOOK** — "**PNPN, J2 blocks forward; α1+α2→1 latches; IL (turn-on) > IH (stay-on); more IG → lower VBO.**"

### 📐 Formula Sheet

| Quantity | Expression |
|---|---|
| Anode current (2-transistor) | `IA = (α2·IG + ICBO)/(1 − (α1+α2))` |
| Latch condition | `α1 + α2 → 1` |
| Turn-on minimum | anode current `≥ IL` (latching) |
| Stay-on minimum | anode current `≥ IH` (holding) |
| Typical relation | `IL ≈ 2 to 3 × IH` |
| Forward-blocking junction | `J2` reverse-biased |
| On-state drop | `≈ 1 to 1.5 V` |

### 🧮 Solved Examples

**Example 1 — Latching vs holding behaviour.**
An SCR has latching current `IL = 60 mA` and holding current `IH = 20 mA`. A gate pulse of `50 µs` is applied while the anode current rises linearly at `2 A/ms` from zero after triggering. Will the SCR remain ON after the pulse ends?

```
Anode current at end of 50 µs pulse:
di/dt = 2 A/ms = 2×10³ A/s ... = 2 A per 1000 µs = 0.002 A/µs
IA(50 µs) = 0.002 A/µs · 50 µs = 0.1 A = 100 mA
Compare with IL = 60 mA: 100 mA > 60 mA ⇒ SCR has LATCHED.
```

Since `IA` (100 mA) exceeds `IL` (60 mA) before the gate pulse ends, the SCR **latches and stays ON** after the pulse. (It will only turn off when `IA < IH = 20 mA`.)

**Example 2 — Minimum gate-pulse width.**
For the same SCR (`IL = 60 mA`) with anode current rising at `0.002 A/µs`, find the minimum gate-pulse width to ensure latching.

```
Need IA ≥ IL: t_min = IL/(di/dt) = 60×10⁻³ / (0.002 A/µs)
            = 0.060 / 0.002 µs = 30 µs
```

Minimum gate-pulse width `≈ 30 µs` (a 50 µs pulse, as in Example 1, is sufficient).

### ⚠️ Common Traps

1. **Holding > latching** — it's the reverse: **`IL > IH`** (latching is larger).
2. **Forward blocking has J2 forward-biased** — in forward blocking, **J2 is reverse-biased** (that's what blocks).
3. **SCR turns off by removing the gate** — no; once latched it needs **`IA < IH`** (or commutation). The gate has no turn-off control.
4. **Gate current increases VBO** — higher gate current **lowers** the forward breakover voltage `VBO`.
5. **Latching current matters for staying ON** — latching is for **turn-on**; **holding** governs staying ON.
6. **SCR conducts in both directions** — it conducts only **anode-to-cathode** (unidirectional); reverse is blocked.

### 📝 Test — Power Electronics (8 Q)

1. An SCR has how many layers and junctions?
   (a) 3 layers, 2 junctions (b) 4 layers, 3 junctions (c) 2 layers, 1 junction (d) 4 layers, 2 junctions
2. In the forward-blocking state, which junction is reverse-biased?
   (a) J1 (b) J2 (c) J3 (d) all
3. The SCR latches into conduction when:
   (a) α1 + α2 → 1 (b) α1 = α2 = 0 (c) IG = 0 (d) anode is negative
4. Which is larger for a given SCR?
   (a) holding current (b) latching current (c) they are equal (d) gate current
5. Increasing the gate current:
   (a) increases VBO (b) decreases VBO (c) has no effect (d) reverses polarity
6. Once an SCR is ON, it can be turned OFF by:
   (a) removing the gate signal (b) reducing IA below IH (c) increasing IG (d) raising anode voltage
7. **(NAT)** An SCR: IL = 80 mA, anode current rises at 0.004 A/µs. Find the minimum gate-pulse width (µs).
8. **(NAT)** Two-transistor model: α1 = 0.4, α2 = 0.55, IG = 2 mA, ICBO negligible. Find IA (mA).

<details><summary>🔑 Solutions</summary>

**1 → (b).** 4 layers (PNPN), 3 junctions.

**2 → (b).** J2 is reverse-biased in forward blocking.

**3 → (a).** `α1 + α2 → 1`.

**4 → (b).** Latching current (`IL > IH`).

**5 → (b).** Decreases `VBO`.

**6 → (b).** Reduce anode current below holding current `IH` (or use commutation).

**7 (NAT).** `t_min = IL/(di/dt) = 80×10⁻³/0.004 = 0.080/0.004 = 20 µs`.

**8 (NAT).** `IA = α2·IG/(1 − (α1+α2)) = 0.55·2/(1 − 0.95) = 1.1/0.05 = 22 mA`.

</details>

---

## 📊 Tech Progress

```
Measurements      [██████████████████]  Round 5 · topic 18/20 (CRO)
Electrical Mach.  [███░░░░░░░░░░░░░░░░]  Round 6 · topic  3/19 (Transformers III)
Power Electronics [███░░░░░░░░░░░░░░░░]  Round 6 · topic  3/19 (Thyristor SCR I)
```

> 🎯 **Day 102 one-liners:** (1) **CRO: D = lLVd/2dVa (S ∝ 1/Va); sawtooth X-sweep; Lissajous ratio = tangency counts; DSO → Nyquist fs>2f.** (2) **OC = iron loss (LV); SC = copper loss (HV); max η when copper = iron, x = √(Pi/Pc).** (3) **SCR = PNPN, J2 blocks forward; latches at α1+α2→1; IL > IH; gate lowers VBO, can't turn off.**

*Correctness over length — derive, don't memorise blindly; verify any "verify" figure. Onward. ⚡*
