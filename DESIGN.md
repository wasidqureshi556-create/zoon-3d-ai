# ZOON — Cyberpunk 3D Scene & Video Generator

**Tone & Purpose:** Futuristic arcade UI for 3D character/scene composition and VEO 3 video generation. Maximalist neon cyberpunk aesthetic with layered motion effects.

**Primary Aesthetic:** Neon-soaked, geometric, retro-futuristic arcade. Dark background with vibrant cyan/purple accents. Glowing selections, animated particles, shimmer text, spinning emoji.

## Palette (OKLCH)

| Token              | OKLCH Value       | Hex Reference | Usage                          |
| :----------------- | :---------------- | :------------ | :----------------------------- |
| background         | 0.03 0 0          | #050510       | Deep navy-black base           |
| foreground         | 0.95 0 0          | #ffffff       | Text, high contrast            |
| primary (cyan)     | 0.72 0.21 220     | #00f5ff       | Accents, active states, glow   |
| secondary (purple) | 0.48 0.32 290     | #7b2ff7       | Accent highlights, borders     |
| card               | 0.08 0.04 270     | #0f0a1f       | Card background, elevated      |
| muted              | 0.18 0.08 270     | #1a1030       | Disabled, subtle borders       |
| border             | 0.18 0.08 270     | #1a1030       | Card edges, dividers           |
| destructive        | 0.58 0.28 15      | #ef4444       | Alerts, errors                 |

## Typography

| Layer   | Family     | Weight | Size    | Line-height | Usage                    |
| :------ | :--------- | :----- | :------ | :---------- | :----------------------- |
| Display | Orbitron   | 900    | 32–48px | 1.2         | Logo, headers, titles    |
| Body    | Rajdhani   | 500    | 14–16px | 1.5         | Text, UI labels          |
| Mono    | JetBrains  | 400    | 12–14px | 1.4         | Code, tech details       |

## Structural Zones

| Zone        | Background        | Border                | Treatment                                             |
| :---------- | :---------------- | :-------------------- | :---------------------------------------------------- |
| Header      | card              | border / primary glow | Sticky, blurred backdrop, shimmer logo               |
| Tab nav     | muted/low opacity | primary on active     | Glowing buttons, cyan for active, state indicators   |
| Card grid   | card with glow    | dynamic on select     | Hover lift, spin emoji, colored glow border          |
| Bg overlay  | transparent       | none                  | Floating particles + 40px grid pattern (cyan tint)   |

## Component Patterns

- **Card Selection:** Border color shifts to character/item color with glowing box-shadow. Emoji scales/rotates. Transition: 0.25s ease.
- **Tab Navigation:** Inactive: muted border, transparent bg. Active: solid cyan bg, dark text, uppercase. Hover: scale 1.02.
- **Buttons:** Crisp border-radius (8px). Neon glow on hover. Disabled: opacity 0.4, cursor not-allowed.
- **Shimmer Text:** Gradient loop: cyan → purple → orange → cyan over 3s. Used for logo + accent text.
- **Glow Boxes:** 0 0 20px primary / 0.5 opacity, layered with 0 0 40px / 0.25. Applied to selected cards + pulse-glow header logo.

## Motion Choreography

| Effect          | Duration | Easing             | Usage                                     |
| :-------------- | :------- | :----------------- | :---------------------------------------- |
| float-up        | 3–6s     | linear infinite    | Particle rise from bottom                 |
| spin-slow       | 5s       | linear infinite    | Emoji 360° rotation on selected cards     |
| pulse-glow      | 2s       | ease-in-out        | Logo header glow pulse                    |
| fade-in-up      | 0.4s     | ease               | Tab content entrance                      |
| transition      | 0.25s    | cubic-bezier       | Hover lift, card state changes            |

## Spacing & Rhythm

- **Gap:** 12px (cards), 16px (sections), 8px (inline)
- **Padding:** 16px (cards), 20px (sections)
- **Border-radius:** 8px (cards), 16px (prominent), 20px (pill buttons)
- **Density:** Compact grid (140px cards), tight spacing for arcade feel

## Constraints & Guardrails

- No pure grey; always tint borders/muted toward blue-purple (H: 270°)
- Glow effects use OKLCH ONLY; no opacity blending in hex
- All motion has choreography; no random durations or staggered animations
- Tab colors: Cyan for Hero/Rides/Animals/Worlds/Scene; Orange warmth for Veo 3
- No full-page gradients; layer effects via cards + particles + grid

## Signature Details

- **Shimmer text loop** on logo creates brand identity
- **Neon glow box-shadow** layering (2-part) for depth without 3D transforms
- **Floating particles** with randomized x/delay for organic arcade feel
- **Spinning emoji** on card selection = playful, tech-forward interaction
- **Grid underlay** (40px, cyan tint at 2.5% opacity) = digital/matrix aesthetic
