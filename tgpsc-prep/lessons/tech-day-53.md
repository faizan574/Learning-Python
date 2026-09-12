# ⚡ GATE Technical Revision — Day 53 (2026-09-12)

*Round-3 pass 11 — the energy meter, induction-motor equivalent circuit, and AC voltage controllers. Detailed, high-yield GATE material.*

📅 Tech Day 53 · ⏱ ~45 min · 🎯 Measurements + Machines + Power Electronics · 🔁 Round-3 pass 11

> 🧠 **MEMORY HOOK** — Today: the **induction energy meter** (creeping, phantom loading), the **induction-motor equivalent circuit** (Thevenin torque, max-torque slip), and **AC voltage controllers** (phase vs integral-cycle control). Three exam favourites.

---

## 🔧 Measuring Instruments: Single-Phase Induction Energy Meter

### 📖 Concept Deep Dive

The domestic **energy meter** is an **induction (motor + brake)** instrument that integrates power over time to read **energy (kWh)**. An aluminium disc rotates; the number of revolutions is proportional to energy.

**Construction & torques.**
- **Driving system** — a **shunt (pressure/voltage) magnet** (many turns across supply) and a **series (current) magnet** (load current). Their fluxes induce eddy currents in the disc; the interaction produces a **driving torque** proportional to power:

```
Td ∝ V·I·cosφ = P   (with correct 90° flux phase relationship)
```

- **Braking system** — a **permanent magnet** over the disc induces eddy currents that oppose motion, giving a **braking torque ∝ speed N**: `Tb ∝ N`.
- At steady speed `Td = Tb`, so `N ∝ P`; revolutions `∝ ∫P dt = energy`. The **meter constant** = revolutions per kWh.

**Adjustments & errors.**
- **Lag (power-factor) adjustment** — ensures the shunt-magnet flux lags the applied voltage by exactly **90°** (so `Td ∝ VI cosφ` correctly). Done with a **shading band/lag coil**.
- **Creeping** — the disc slowly rotates with the **pressure coil energised but no load current** (due to over-compensation/stray fields/vibration). Prevented by **two diametrically opposite holes** in the disc (or a small iron tongue) that lock the disc after at most half a revolution.
- **Friction compensation** — a small shading loop near the shunt magnet adds a torque to overcome friction at **low loads**.
- **Overload/temperature/frequency** errors — compensated by magnetic shunts, temperature shunts.

**Testing & phantom (fictitious) loading.** To test at rated current without dissipating full load power, **phantom loading** supplies the **current circuit** from a **low-voltage high-current** source and the **pressure circuit** from rated voltage separately — so the power drawn from the supply is small (only the coil losses), yet the meter sees rated V and rated I.

```
Meter error = (Meter reading − True energy)/True energy × 100
Energy over test = P × time ;  revolutions counted / meter constant = recorded energy
```

> 💎 **KEY RESULT** — Energy meter: `Td ∝ P`, `Tb ∝ N` → `N ∝ P` → revolutions ∝ energy. **Lag adjustment** sets 90° flux; **creeping** stopped by **two holes**; **friction** compensated by a shading loop; **phantom loading** tests at rated V & I with low power drawn.

> ⚠️ **TRAP ALERT** — **Creeping** = slow rotation with **no load** (voltage only), fixed by **two holes** in the disc. **Phantom loading** feeds current and pressure circuits **separately** to save power during testing. Driving torque ∝ **power** (not current).

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Driving torque | `Td ∝ V·I·cosφ = P` |
| Braking torque | `Tb ∝ N` (permanent magnet) |
| Steady state | `N ∝ P` ⇒ revolutions ∝ energy |
| Meter constant | revolutions per kWh |
| Recorded energy | `revolutions / meter-constant` |
| % error | `(recorded − true)/true × 100` |

### 🧮 Solved Examples

**Example 1 — meter error.**
A meter with constant `1500 rev/kWh` makes **60 revolutions** while a `1 kW` load runs for **150 s**. Find the error.

- True energy `= P × t = 1 kW × (150/3600) h = 0.04167 kWh`.
- Recorded energy `= revolutions/constant = 60/1500 = 0.04 kWh`.
- Error `= (0.04 − 0.04167)/0.04167 × 100 = −4.0%` (meter reads **4% slow**).

**Example 2 — expected revolutions.**
For the same meter, how many revolutions **should** occur for a correct reading over that period?

- True energy `= 0.04167 kWh`; correct revolutions `= 0.04167 × 1500 = 62.5 rev`.
- It made only 60 → slow by 2.5 rev → the −4% error.

> 🧠 **MEMORY HOOK** — "**Drive ∝ power, brake ∝ speed → speed ∝ power → count ∝ energy.**" Creeping fix = **holes**; test economically with **phantom loading**.

### ⚠️ Common Traps

1. Saying driving torque ∝ current (it's ∝ **power**).
2. Confusing **creeping** (no-load rotation) with normal running.
3. Forgetting the **two-hole** anti-creep fix.
4. Thinking phantom loading needs full load power (it draws only **losses**).
5. Missing the **lag adjustment** (90° flux) role in pf accuracy.
6. Mixing meter constant units (rev/kWh).

### 📝 Test — Energy Meter (8 Q)

1. The energy-meter driving torque is proportional to: (a) current (b) voltage (c) power (d) speed.
2. The braking torque is proportional to: (a) power (b) speed (c) current² (d) voltage.
3. Creeping is rotation with: (a) full load (b) voltage but no load current (c) no voltage (d) reversed load.
4. Creeping is prevented by: (a) a lag coil (b) two holes in the disc (c) a shunt (d) a capacitor.
5. Phantom loading is used to: (a) increase load (b) test at rated V & I with low power (c) brake the disc (d) calibrate voltage only.
6. **(NAT)** Meter constant 1200 rev/kWh; 48 revolutions for a 2 kW load in 60 s. Recorded energy (kWh, 3 dp)?
7. **(NAT)** True energy in Q6 (kWh, 4 dp)?
8. **(NAT)** Percentage error in Q6 (1 dp)?

<details><summary>🔑 Solutions</summary>

**Q1 — (c) power.**

**Q2 — (b) speed.**

**Q3 — (b).** Voltage energised, no load current.

**Q4 — (b) two holes.**

**Q5 — (b).** Rated V & I, low power drawn.

**Q6.** `= 48/1200 = 0.040 kWh`.

**Q7.** `= 2 × (60/3600) = 2 × 0.01667 = 0.0333 kWh`.

**Q8.** `error = (0.040 − 0.0333)/0.0333 × 100 = 0.0067/0.0333 × 100 = +20.0%` (reads high).

</details>

---

## 🔧 Electrical Machines: Induction Motor II — Equivalent Circuit & Max Torque

### 📖 Concept Deep Dive

The per-phase **equivalent circuit** models the induction motor like a transformer with a **variable rotor resistance** `R2/s`. Referred to the stator:

```
Stator: R1, X1 ; shunt: Rc || Xm ; rotor (referred): R2', X2' with resistance R2'/s
The term R2'/s splits as R2' (rotor Cu) + R2'(1−s)/s  (the mechanical/output equivalent).
```

**Torque via Thevenin.** Reduce the stator side to a Thevenin equivalent `Vth, Rth, Xth` looking from the rotor branch:

```
Vth ≈ V1·Xm/√(R1² + (X1+Xm)²)   (≈ V1·Xm/(X1+Xm) for large Xm)
Torque  T = (3/ωs)·Vth²·(R2'/s) / [ (Rth + R2'/s)² + (Xth + X2')² ]
where ωs = 2π·Ns/60 (synchronous angular speed)
```

**Maximum torque (breakdown).** Differentiate T w.r.t. slip → maximum when:

```
R2'/s = √(Rth² + (Xth + X2')²)      ⇒   s_maxT = R2' / √(Rth² + (Xth+X2')²)
T_max = (3/ωs)·Vth² / [ 2( Rth + √(Rth² + (Xth+X2')²) ) ]
```

`T_max` is **independent of rotor resistance R2'** (rotor resistance only sets **s_maxT**). Increasing R2' (wound rotor + external resistance) shifts max torque toward **higher slip** (used to get **high starting torque**: set `s_maxT = 1` when `R2' = √(Rth²+(Xth+X2')²)`).

**Starting vs full-load torque:** starting torque (s = 1) can be boosted by rotor resistance; too much R2' lowers running efficiency (higher rotor Cu loss).

> 💎 **KEY RESULT** — Rotor branch resistance `= R2'/s`. `s_maxT = R2'/√(Rth²+(Xth+X2')²)`; `T_max = 3Vth²/[2ωs(Rth + √(Rth²+(Xth+X2')²))]` — **independent of R2'**. Add rotor R to shift max torque to start (high starting torque).

> ⚠️ **TRAP ALERT** — `T_max` does **not** depend on `R2'`; `R2'` only moves the **slip** at which it occurs. The rotor resistance appears as `R2'/s` — at low slip this is large (low current), at s=1 it's just `R2'`.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Rotor equivalent resistance | `R2'/s = R2' + R2'(1−s)/s` |
| Thevenin voltage | `Vth ≈ V1·Xm/(X1+Xm)` |
| Torque | `T = (3/ωs)·Vth²(R2'/s)/[(Rth+R2'/s)²+(Xth+X2')²]` |
| Slip at max torque | `s_maxT = R2'/√(Rth²+(Xth+X2')²)` |
| Max torque | `T_max = 3Vth²/[2ωs(Rth+√(Rth²+(Xth+X2')²))]` |
| Synchronous ang. speed | `ωs = 2πNs/60 = 4πf/P` |

### 🧮 Solved Examples

**Example 1 — slip at max torque.**
An induction motor (referred): `R2' = 0.4 Ω`, `Rth = 0.3 Ω`, `Xth + X2' = 1.2 Ω`. Find s_maxT.

- Denominator `= √(Rth² + (Xth+X2')²) = √(0.3² + 1.2²) = √(0.09 + 1.44) = √1.53 = 1.237 Ω`.
- `s_maxT = R2'/1.237 = 0.4/1.237 = 0.323 ≈ 0.32 (32%)`.

**Example 2 — rotor resistance for max starting torque.**
For the same machine, what external rotor resistance (referred) gives **maximum torque at start** (s = 1)?

- Need `R2'(total) = √(Rth² + (Xth+X2')²) = 1.237 Ω`.
- External resistance `= 1.237 − 0.4 = 0.837 Ω` (referred to stator).

> 🧠 **MEMORY HOOK** — "**s_maxT = R2'/(impedance);** raise R2' to push max torque to standstill." `T_max` value is fixed by voltage & reactance, **not** rotor R.

### ⚠️ Common Traps

1. Thinking rotor resistance changes **T_max** (only **s_maxT**).
2. Forgetting the rotor branch is `R2'/s` (not just R2').
3. Using `V1` instead of **`Vth`** in the torque formula.
4. Omitting `(Xth + X2')` (leakage sum) in the max-torque impedance.
5. Setting external R too high (kills running efficiency).
6. Mixing `ωs` (sync) with rotor speed in `T = P/ω`.

### 📝 Test — Induction Motor II (8 Q)

1. The rotor branch resistance in the equivalent circuit is: (a) R2' (b) R2'/s (c) sR2' (d) R2'·s².
2. Maximum torque is: (a) proportional to R2' (b) independent of R2' (c) zero at s=0.5 (d) at s=0.
3. Slip at maximum torque is: (a) R2'/√(Rth²+(Xth+X2')²) (b) R2'·X2' (c) 1 (d) 0.
4. To get max torque at start, set R2'(total) equal to: (a) Rth (b) √(Rth²+(Xth+X2')²) (c) X2' (d) 0.
5. Thevenin voltage Vth ≈ : (a) V1 (b) V1·Xm/(X1+Xm) (c) V1/2 (d) V1·s.
6. **(NAT)** R2' = 0.5 Ω, Rth = 0.4 Ω, (Xth+X2') = 1.4 Ω. s_maxT (2 dp)?
7. **(NAT)** For Q6, external rotor R (referred) for max torque at start (Ω, 2 dp)?
8. **(NAT)** A 4-pole 50 Hz motor: synchronous angular speed ωs (rad/s, 1 dp)?

<details><summary>🔑 Solutions</summary>

**Q1 — (b) R2'/s.**

**Q2 — (b) independent of R2'.**

**Q3 — (a).** `R2'/√(Rth²+(Xth+X2')²)`.

**Q4 — (b).** `√(Rth²+(Xth+X2')²)`.

**Q5 — (b).** `V1·Xm/(X1+Xm)`.

**Q6.** `√(0.4²+1.4²) = √(0.16+1.96) = √2.12 = 1.456`; `s_maxT = 0.5/1.456 = 0.34`.

**Q7.** external `= 1.456 − 0.5 = 0.96 Ω`.

**Q8.** `Ns = 1500 rpm`; `ωs = 2π×1500/60 = 157.1 rad/s`.

</details>

---

## 🔧 Power Electronics: AC Voltage Controllers

### 📖 Concept Deep Dive

An **AC voltage controller (AC-AC)** varies the **RMS voltage** delivered to a load from a fixed AC supply, using **anti-parallel SCRs (or a TRIAC)**. Two control strategies:

**Phase control** — the SCRs are fired at a delay angle `α` each half-cycle, so the load sees only part of each half-cycle. For a **single-phase, R load**:

```
Vo(rms) = Vs·√( (1/π)·(π − α + (sin2α)/2) )
At α = 0 → Vo = Vs (full);  at α = π → Vo = 0.
```

Phase control gives **continuous** voltage variation but injects **harmonics** into the supply and load. Used for **light dimming, fan speed, heater control**.

**Integral-cycle (on-off / burst) control** — the SCRs conduct for **n complete cycles** and stay off for **m cycles** (whole-cycle switching at zero crossings). The RMS output:

```
Vo(rms) = Vs·√( n/(n+m) )   = Vs·√(duty ratio in cycles)
```

Integral-cycle control produces **no harmonics of the supply frequency** (switching at zero crossings) but creates **sub-harmonic** flicker; suited to **large thermal loads** (furnaces) with slow time constants where flicker doesn't matter — **not** for lighting (visible flicker).

**Comparison:**

| Feature | Phase control | Integral-cycle |
|---|---|---|
| Switching | mid-cycle (angle α) | at zero crossings |
| Output RMS | `Vs√((π−α+sin2α/2)/π)` | `Vs√(n/(n+m))` |
| Harmonics | high (supply-freq harmonics) | none at supply freq, but sub-harmonics |
| Use | dimmers, fans | furnaces, heaters |
| Power factor | poor at high α | better |

**Load types:** with an **RL load**, the current continues past the voltage zero (extinction angle β > π), reducing the control range; a **TRIAC** with an RC-DIAC trigger is the common single-phase dimmer circuit.

> 💎 **KEY RESULT** — Phase control: `Vo = Vs√((π−α+sin2α/2)/π)` (continuous, harmonic-rich, dimmers). Integral-cycle: `Vo = Vs√(n/(n+m))` (zero-crossing, no supply-freq harmonics, for thermal loads).

> ⚠️ **TRAP ALERT** — **Integral-cycle** switches at **zero crossings** (whole cycles) → no supply-frequency harmonics, so it suits **heaters/furnaces**, not lighting (flicker). **Phase control** creates harmonics but gives smooth dimming.

### 📐 Formula Sheet

| Quantity | Formula |
|---|---|
| Phase control Vo (R load) | `Vs√((π − α + (sin2α)/2)/π)` |
| Full output (α=0) | `Vo = Vs` |
| Integral-cycle Vo | `Vs·√(n/(n+m))` |
| Power (R load) | `Vo²/R` |
| RL load extinction | current continues to angle β > π |
| Common dimmer | TRIAC + DIAC-RC trigger |

### 🧮 Solved Examples

**Example 1 — phase control RMS.**
A 1-φ AC voltage controller (R load) on `230 V` fires at `α = 90°`. Output RMS voltage?

- `Vo = Vs·√((π − α + (sin2α)/2)/π)` with `α = π/2`, `sin2α = sinπ = 0`.
- `= 230·√((π − π/2 + 0)/π) = 230·√((π/2)/π) = 230·√(0.5) = 230 × 0.7071 = 162.6 V`.

**Example 2 — integral-cycle control.**
An integral-cycle controller conducts for **3 cycles** and is off for **2 cycles**, on a `200 V` supply. Output RMS and load power for `R = 10 Ω`?

- `Vo = Vs·√(n/(n+m)) = 200·√(3/5) = 200 × 0.7746 = 154.9 V`.
- `P = Vo²/R = 154.9²/10 = 23994/10 = 2399 W ≈ 2.4 kW`.

> 🧠 **MEMORY HOOK** — "**Phase control = angle α (dimmer); integral-cycle = n-on/m-off (furnace).**" Integral-cycle RMS = `Vs√(duty)`.

### ⚠️ Common Traps

1. Using integral-cycle for **lighting** (visible flicker).
2. Forgetting phase control injects **supply-frequency harmonics**.
3. Wrong RMS formula (phase vs integral-cycle).
4. Ignoring RL-load current continuation (extinction angle).
5. Assuming linear V vs α (it's the RMS integral).
6. Forgetting integral-cycle switches at **zero crossings**.

### 📝 Test — AC Voltage Controllers (8 Q)

1. An AC voltage controller varies the: (a) frequency (b) RMS voltage (c) phase sequence (d) DC level.
2. Phase control fires SCRs at: (a) zero crossings (b) a delay angle α mid-cycle (c) peak only (d) never.
3. Integral-cycle control switches at: (a) mid-cycle (b) zero crossings (c) peaks (d) random.
4. Integral-cycle control is best for: (a) lighting (b) thermal/furnace loads (c) motors (d) audio.
5. The integral-cycle RMS output is: (a) Vs·n/(n+m) (b) Vs√(n/(n+m)) (c) Vs(n+m) (d) Vs.
6. **(NAT)** 1-φ phase control, R load, Vs = 200 V, α = 90°. Output RMS (V, 1 dp)?
7. **(NAT)** Integral-cycle: 4 cycles on, 6 off, Vs = 240 V. Output RMS (V, 1 dp)?
8. **(NAT)** For Q7 with R = 12 Ω, load power (W, whole number)?

<details><summary>🔑 Solutions</summary>

**Q1 — (b) RMS voltage.**

**Q2 — (b) delay angle α.**

**Q3 — (b) zero crossings.**

**Q4 — (b) thermal/furnace loads.**

**Q5 — (b).** `Vs√(n/(n+m))`.

**Q6.** `Vo = 200√((π−π/2+0)/π) = 200√0.5 = 141.4 V`.

**Q7.** `Vo = 240√(4/10) = 240 × 0.6325 = 151.8 V`.

**Q8.** `P = Vo²/R = 151.8²/12 = 23043/12 = 1920 W`.

</details>

---

> 🧠 **DAY-53 WRAP (Round-3 pass 11)** — **Energy meter:** drive ∝ P, brake ∝ N; creeping → two holes; phantom loading tests at rated V,I. **Induction motor:** rotor `R2'/s`, `s_maxT = R2'/√(Rth²+(Xth+X2')²)`, `T_max` indep. of R2'. **AC controllers:** phase control `Vs√((π−α+sin2α/2)/π)` (dimmers), integral-cycle `Vs√(n/(n+m))` (furnaces). ⚡

**🔁 Round-3 progress:** Measurements ▓▓▓▓▓▓▓▓▓▓ · Machines ▓▓▓▓▓▓▓▓▓▓ · Power Electronics ▓▓▓▓▓▓▓▓▓▓ — round-3 nearly done (11/~21 topics revised; the rest queued). 🎓 Power Systems joins as a 4th subject once the reference PDFs arrive.
