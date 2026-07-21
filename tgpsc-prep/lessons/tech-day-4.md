# ⚡ GATE Measuring Instruments — Day 4 (2026-07-21)

*Statistics done — now the hardware. The galvanometer is the ancestor of every pointer instrument you'll meet.*

`📅 Tech Day 4  ·  ⏱ ~30 min  ·  🎯 Topic 4 of 23`

Attempt every question in the test **before** opening the solutions — recall beats re-reading.

---

## 🔧 Today's Topic: Galvanometers — D'Arsonval, Ballistic Galvanometer & Damping

The **D'Arsonval (moving-coil) galvanometer** is the seed of the PMMC instrument (tomorrow). GATE loves the **damping** condition (CDRX) and the **ballistic** charge-vs-throw relation.

---

## 📖 Concept Deep Dive

### 1. D'Arsonval galvanometer — construction & torque

A rectangular coil (`N` turns, area `A`) hangs in the **radial** field of a permanent magnet (flux density `B`), suspended by a fine wire that also carries current and provides the **controlling** (restoring) torque.

**Deflecting torque** (current `I`):
$$T_d = N B I A = G I, \qquad G = NBA$$
where `G` is the **galvanometer constant** (displacement/current sensitivity factor), units `N·m/A`.

**Controlling torque** from suspension of stiffness `K` (`N·m/rad`) at steady deflection `θ`:
$$T_c = K\theta$$

**At balance** `T_d = T_c`:
$$\boxed{\theta = \frac{NBA}{K}\,I}$$

> 💎 **KEY RESULT** — Steady deflection `θ = (NBA/K)·I` is **linear** in current — the radial field keeps `B` constant regardless of coil position, giving a **uniform scale**.

**Current sensitivity** `S_I = θ/I = NBA/K` (rad/A or mm/µA on a scale). **Voltage sensitivity** `= θ/V`. **Megohm sensitivity** relates to the current giving unit deflection.

### 2. The dynamic equation & damping

The moving system obeys (inertia `J`, damping `D`, control `K`):
$$J\ddot{\theta} + D\dot{\theta} + K\theta = G i$$

This is a standard **second-order** system. Its behaviour depends on the damping:

| Condition | Damping | Response |
|---|---|---|
| Under-damped | `D` small | Oscillates before settling |
| **Critically damped** | `D = 2√(JK)` | Fastest **non-oscillatory** settling |
| Over-damped | `D` large | Sluggish, no oscillation |

Damping comes from **air friction**, **fluid friction**, and chiefly **eddy-current (electromagnetic)** damping in the coil circuit.

### 3. CDRX — Critical Damping Resistance (External)

The coil's motion induces an emf; the current it drives through the **external circuit resistance** provides electromagnetic damping. There is a specific external resistance that makes the system **critically damped** — the **CDRX** (Critical Damping Resistance eXternal).

- `R < CDRX` (low external R, more current) → **over-damped**.
- `R = CDRX` → critically damped (ideal for quick reading).
- `R > CDRX` (open-ish) → **under-damped**, coil oscillates.

> ⚠️ **TRAP ALERT** — **Lower** external resistance → **more** damping (more induced current opposes motion). Students often reason backwards. Short-circuited coil (R→0) is maximally (over-)damped.

### 4. Ballistic galvanometer (BG)

Designed to measure a **charge** `Q` from a **transient** current pulse (e.g., flux change). It has a **large moment of inertia** and **light damping**, so the whole charge passes *before* the coil moves appreciably. The coil then swings, and the **first (maximum) throw** `θ₁` is proportional to charge:
$$Q = \frac{K}{G}\cdot\frac{T}{2\pi}\,\theta_1 = k_q\,\theta_1$$
where `T` is the free oscillation period. In practice `Q ∝ θ₁` (first swing).

**Fluxmeter**: a special heavily-damped BG variant (Grassot) with negligible control torque — its deflection is proportional to the **flux linkage change**, and it holds the reading (used for magnetic measurements).

### 5. Where it leads

- Radial field + moving coil + controlling spring = the **PMMC** movement (Day 5).
- Damping condition reappears in oscilloscope galvanometers and recorder pens.
- Charge-throw principle underlies flux and magnetic-material testing.

> 🧠 **MEMORY HOOK** — "**J-D-K**": inertia **J**, damping **D**, control **K** — critical damping is `D = 2√(JK)`, the geometric-mean rule.

---

## 📐 Formula Sheet

| Formula | Symbols | Notes |
|---|---|---|
| `T_d = NBIA = GI` | G = NBA | Deflecting torque |
| `θ = NBA·I/K` | K control stiffness | Linear, uniform scale |
| `S_I = θ/I = NBA/K` | current sensitivity | rad/A |
| `Jθ̈ + Dθ̇ + Kθ = Gi` | 2nd-order | Dynamic equation |
| `D_critical = 2√(JK)` | — | Critical damping |
| `ω_n = √(K/J)` | natural freq | Undamped |
| `Q = k_q·θ₁` | first throw | Ballistic galvanometer |

---

## 🧮 Solved Examples

**Example 1.** A moving-coil galvanometer has `N = 100` turns, coil area `A = 4 cm²`, flux density `B = 0.2 T`, and control stiffness `K = 2 × 10⁻⁶ N·m/rad`. Find the deflection for a current of `1 µA`.

1. `G = NBA = 100 × 0.2 × 4×10⁻⁴ = 8×10⁻³ N·m/A`
2. `θ = G·I/K = (8×10⁻³ × 1×10⁻⁶)/(2×10⁻⁶)`
3. `θ = (8×10⁻⁹)/(2×10⁻⁶) = 4×10⁻³ rad`

*Answer: `θ = 4 × 10⁻³ rad` (≈ 0.229°).* 

**Example 2.** The moving system has `J = 0.5 × 10⁻⁶ kg·m²` and control stiffness `K = 2 × 10⁻⁶ N·m/rad`. Find the critical damping coefficient.

1. `D_c = 2√(JK) = 2√(0.5×10⁻⁶ × 2×10⁻⁶)`
2. `= 2√(1×10⁻¹²) = 2 × 10⁻⁶ N·m·s/rad`

*Answer: `D_c = 2 × 10⁻⁶ N·m·s/rad`.*

---

## ⚠️ Common Traps

- **Lower external R ⇒ more damping** (not less) — the coil circuit carries more induced current.
- Radial field is what makes the scale **uniform**; a parallel field would give a non-linear scale.
- Ballistic galvanometer wants **large J, light damping**; a fluxmeter wants **heavy damping, ~no control torque** — opposite design intents.
- Critical damping = `2√(JK)`, not `√(2JK)` or `2JK`.
- Charge (not current) is read from the **first throw** of a BG.
- Sensitivity rises with `N, B, A` and falls with stiffness `K`.

---

**Quick self-check** (say the answers aloud before the test):

- [ ] Write `θ` in terms of N, B, A, K, I and state why the scale is uniform.
- [ ] Which way does external resistance move the damping (more/less)?
- [ ] What quantity does a ballistic galvanometer's first throw measure?

---

## 📝 Today's Test

**Q1. In a D'Arsonval galvanometer, the scale is uniform because:**
- A) The control spring is non-linear
- B) The magnetic field is radial, keeping B constant
- C) Damping is critical
- D) The coil has many turns

**Q2. The galvanometer constant G equals:**
- A) NBA
- B) NB/A
- C) K/NBA
- D) BA/N

**Q3. Critical damping coefficient is given by:**
- A) √(JK)
- B) 2√(JK)
- C) JK
- D) 2JK

**Q4. Reducing the external circuit resistance of a moving-coil galvanometer makes it:**
- A) More under-damped
- B) More over-damped
- C) Unaffected
- D) Oscillate more

**Q5. A ballistic galvanometer is designed with:**
- A) Small inertia and heavy damping
- B) Large inertia and light damping
- C) Zero control torque
- D) Radial iron core removed

**Q6. Consider the following statements:**
1. The first throw of a ballistic galvanometer is proportional to charge.
2. A fluxmeter has negligible control torque.
3. Eddy-current damping requires an external battery.

**Which are correct?**
- A) 1 and 2
- B) 2 and 3
- C) 1 and 3
- D) 1, 2 and 3

**Q7. (NAT) A galvanometer has N = 200 turns, A = 5 cm², B = 0.1 T, K = 5 × 10⁻⁶ N·m/rad. The current sensitivity θ/I is ______ rad/A.**

**Q8. (NAT) For J = 2 × 10⁻⁶ kg·m² and K = 8 × 10⁻⁶ N·m/rad, the critical damping coefficient is ______ × 10⁻⁶ N·m·s/rad.**

**Q9. (NAT) A moving-coil galvanometer gives θ = 0.5 rad for I = 2 mA. Its current sensitivity is ______ rad/A.**

**Q10. (NAT) The undamped natural frequency ωₙ for J = 1 × 10⁻⁶ kg·m² and K = 4 × 10⁻⁶ N·m/rad is ______ rad/s.**

<details><summary>🔑 Solutions (open only after attempting!)</summary>

**Q1: B** — The radial field keeps B (and hence torque per unit current) constant at all positions → linear θ vs I.

**Q2: A** — G = NBA, the deflecting-torque-per-ampere constant.

**Q3: B** — Critical damping D_c = 2√(JK).

**Q4: B** — Lower R ⇒ larger induced current ⇒ stronger electromagnetic damping ⇒ over-damped.

**Q5: B** — Large inertia + light damping lets the charge pass before the coil moves. (C describes a fluxmeter, not a BG.)

**Q6: A** — Statements 1 and 2 correct; eddy-current damping is self-induced, no external battery.

**Q7: 2000** — G = NBA = 200 × 0.1 × 5×10⁻⁴ = 0.01; S = G/K = 0.01/5×10⁻⁶ = 2000 rad/A.

**Q8: 8** — D_c = 2√(2×10⁻⁶ × 8×10⁻⁶) = 2√(16×10⁻¹²) = 2 × 4×10⁻⁶ = 8×10⁻⁶.

**Q9: 250** — S = θ/I = 0.5 / (2×10⁻³) = 250 rad/A.

**Q10: 2** — ωₙ = √(K/J) = √(4×10⁻⁶ / 1×10⁻⁶) = √4 = 2 rad/s.

</details>

---

*The needle moves, the maths holds — tomorrow this galvanometer becomes the PMMC ammeter and voltmeter.* 💪

`🟩🟩🟩🟩⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜` **Topic 4 of 23 done**
