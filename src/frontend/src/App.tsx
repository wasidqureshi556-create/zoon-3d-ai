import { useState } from "react";

// ─── DATA CONSTANTS ────────────────────────────────────────────────────────────

const CHARACTERS = [
  {
    id: 1,
    name: "Cyber Warrior",
    emoji: "🥷",
    color: "#00f5ff",
    category: "Human",
  },
  {
    id: 2,
    name: "Magic Wizard",
    emoji: "🧙",
    color: "#a855f7",
    category: "Human",
  },
  {
    id: 3,
    name: "Space Astronaut",
    emoji: "👨‍🚀",
    color: "#3b82f6",
    category: "Human",
  },
  {
    id: 4,
    name: "Ninja Fox",
    emoji: "🦊",
    color: "#f97316",
    category: "Animal",
  },
  {
    id: 5,
    name: "Dragon King",
    emoji: "🐉",
    color: "#ef4444",
    category: "Animal",
  },
  {
    id: 6,
    name: "Iron Robot",
    emoji: "🤖",
    color: "#6b7280",
    category: "Robot",
  },
  {
    id: 7,
    name: "Crystal Fairy",
    emoji: "🧚",
    color: "#ec4899",
    category: "Fantasy",
  },
  {
    id: 8,
    name: "Arctic Wolf",
    emoji: "🐺",
    color: "#93c5fd",
    category: "Animal",
  },
  {
    id: 9,
    name: "Lava Demon",
    emoji: "😈",
    color: "#dc2626",
    category: "Fantasy",
  },
  {
    id: 10,
    name: "Golden Samurai",
    emoji: "⚔️",
    color: "#fbbf24",
    category: "Human",
  },
  {
    id: 11,
    name: "Panda Chef",
    emoji: "🐼",
    color: "#e5e7eb",
    category: "Animal",
  },
  {
    id: 12,
    name: "Mech Titan",
    emoji: "🦾",
    color: "#10b981",
    category: "Robot",
  },
];

const VEHICLES = [
  {
    id: 1,
    name: "Neon Supercar",
    emoji: "🏎️",
    color: "#00f5ff",
    type: "Sports",
  },
  {
    id: 2,
    name: "Monster Truck",
    emoji: "🚛",
    color: "#f97316",
    type: "Off-Road",
  },
  {
    id: 3,
    name: "Space Shuttle",
    emoji: "🚀",
    color: "#6366f1",
    type: "Space",
  },
  {
    id: 4,
    name: "Hover Bike",
    emoji: "🏍️",
    color: "#a855f7",
    type: "Futuristic",
  },
  { id: 5, name: "Pirate Ship", emoji: "🚢", color: "#8b5cf6", type: "Marine" },
  {
    id: 6,
    name: "Battle Tank",
    emoji: "🪖",
    color: "#4b5563",
    type: "Military",
  },
  { id: 7, name: "Dragon Jet", emoji: "✈️", color: "#ef4444", type: "Air" },
  {
    id: 8,
    name: "Cyber Truck",
    emoji: "⚡",
    color: "#fbbf24",
    type: "Electric",
  },
  {
    id: 9,
    name: "Lava Buggy",
    emoji: "🔥",
    color: "#dc2626",
    type: "Off-Road",
  },
  { id: 10, name: "Ice Cruiser", emoji: "❄️", color: "#60a5fa", type: "Arctic" },
];

const BACKGROUNDS = [
  {
    id: 1,
    name: "Cyber City",
    emoji: "🌃",
    gradient: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
    style: "futuristic",
  },
  {
    id: 2,
    name: "Lava World",
    emoji: "🌋",
    gradient: "linear-gradient(135deg, #700000, #d63031, #ff8c00)",
    style: "adventure",
  },
  {
    id: 3,
    name: "Ice Kingdom",
    emoji: "❄️",
    gradient: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    style: "frozen",
  },
  {
    id: 4,
    name: "Jungle Temple",
    emoji: "🌿",
    gradient: "linear-gradient(135deg, #134e5e, #71b280)",
    style: "nature",
  },
  {
    id: 5,
    name: "Space Galaxy",
    emoji: "🌌",
    gradient: "linear-gradient(135deg, #000000, #130f40, #7b2ff7)",
    style: "space",
  },
  {
    id: 6,
    name: "Golden Desert",
    emoji: "🏜️",
    gradient: "linear-gradient(135deg, #f7971e, #ffd200)",
    style: "desert",
  },
  {
    id: 7,
    name: "Ocean Deep",
    emoji: "🌊",
    gradient: "linear-gradient(135deg, #000428, #004e92)",
    style: "underwater",
  },
  {
    id: 8,
    name: "Neon Arena",
    emoji: "⚡",
    gradient: "linear-gradient(135deg, #0d0d0d, #1a0533, #0a2a4a)",
    style: "neon",
  },
];

const ANIMALS = [
  { id: 1, name: "Phoenix Bird", emoji: "🦅", color: "#f97316" },
  { id: 2, name: "Crystal Tiger", emoji: "🐯", color: "#fbbf24" },
  { id: 3, name: "Shadow Panther", emoji: "🐆", color: "#6b21a8" },
  { id: 4, name: "Electric Shark", emoji: "🦈", color: "#0ea5e9" },
  { id: 5, name: "Neon Lion", emoji: "🦁", color: "#f59e0b" },
  { id: 6, name: "Cyber Eagle", emoji: "🦅", color: "#00f5ff" },
  { id: 7, name: "Ghost Bear", emoji: "🐻", color: "#e5e7eb" },
  { id: 8, name: "Flame Horse", emoji: "🐴", color: "#ef4444" },
];

const RENDER_STYLES = [
  { id: "cartoon", label: "🎨 Cartoon", desc: "Bold, stylized" },
  { id: "realistic", label: "📸 Realistic", desc: "Photo-real" },
  { id: "anime", label: "✨ Anime", desc: "Japanese style" },
  { id: "clay", label: "🏺 Clay", desc: "Soft clay" },
  { id: "neon", label: "💡 Neon", desc: "Glow effects" },
  { id: "pixel", label: "👾 Pixel", desc: "Retro 8-bit" },
];

const LIGHTING = [
  "🌟 Studio",
  "🌅 Sunset",
  "🌙 Night",
  "💡 Neon",
  "☀️ Daylight",
  "🔦 Dramatic",
];
const POSES = [
  "🧍 Standing",
  "🏃 Running",
  "⚔️ Battle",
  "🦸 Heroic",
  "🧘 Idle",
  "🤺 Fighting",
];
const EXPRESSIONS = [
  "😤 Fierce",
  "😄 Happy",
  "😐 Cool",
  "😡 Angry",
  "😮 Surprised",
  "😎 Epic",
];

const VIDEO_DURATIONS = ["4s", "8s", "16s"];
const VIDEO_RATIOS = ["16:9 Landscape", "9:16 Portrait", "1:1 Square"];
const VIDEO_QUALITIES = ["720p HD", "1080p FHD", "4K Ultra"];

const CAMERA_MOVES = [
  { id: "dolly", label: "🎥 Dolly In", desc: "Push toward subject" },
  { id: "orbit", label: "🔄 Orbit", desc: "Circle around character" },
  { id: "crane", label: "🏗️ Crane Up", desc: "Rise from ground" },
  { id: "tracking", label: "🏃 Tracking", desc: "Follow character" },
  { id: "static", label: "📷 Static", desc: "Fixed camera" },
  { id: "drone", label: "🚁 Drone", desc: "Aerial overhead" },
];

const MOTION_STYLES = [
  { id: "action", label: "⚡ Action Burst", color: "#ef4444" },
  { id: "cinematic", label: "🎬 Cinematic", color: "#a855f7" },
  { id: "slowmo", label: "🌊 Slow Motion", color: "#3b82f6" },
  { id: "timelapse", label: "⏩ Time Lapse", color: "#fbbf24" },
  { id: "loop", label: "🔁 Seamless Loop", color: "#10b981" },
  { id: "epic", label: "🔥 Epic Reveal", color: "#f97316" },
];

const SOUND_FX = [
  "🔇 No Sound",
  "💥 Epic Score",
  "🎵 Ambient",
  "⚡ Electric",
  "🥁 Drum Beat",
  "🌊 Nature",
];

const VEO3_SCENES = [
  {
    id: "intro",
    label: "🎬 Character Intro",
    template: "dramatic entrance with particle effects",
  },
  {
    id: "battle",
    label: "⚔️ Battle Scene",
    template: "intense combat sequence with dynamic movements",
  },
  {
    id: "race",
    label: "🏎️ Vehicle Race",
    template: "high-speed chase through environment",
  },
  {
    id: "fly",
    label: "🚀 Flight Sequence",
    template: "soaring through sky with speed trails",
  },
  {
    id: "transform",
    label: "✨ Transformation",
    template: "magical transformation with glowing effects",
  },
  {
    id: "showcase",
    label: "🌟 360° Showcase",
    template: "slow 360-degree rotation showcase",
  },
];

// ─── TYPES ─────────────────────────────────────────────────────────────────────

type Character = (typeof CHARACTERS)[number];
type Vehicle = (typeof VEHICLES)[number];
type Background = (typeof BACKGROUNDS)[number];
type Animal = (typeof ANIMALS)[number];

// ─── FLOATING PARTICLE ─────────────────────────────────────────────────────────

function FloatingParticle({
  delay,
  x,
  color,
}: { delay: number; x: number; color: string }) {
  return (
    <div
      style={{
        position: "absolute",
        left: `${x}%`,
        bottom: "-10px",
        width: "4px",
        height: "4px",
        borderRadius: "50%",
        background: color,
        boxShadow: `0 0 8px ${color}`,
        animation: `floatUp ${3 + (x % 3)}s ${delay}s infinite linear`,
        opacity: 0.7,
      }}
    />
  );
}

// ─── SECTION HEADER ────────────────────────────────────────────────────────────

function SectionHeader({
  title,
  subtitle,
}: { title: string; subtitle: string }) {
  return (
    <div style={{ marginBottom: "24px" }}>
      <h2
        style={{
          fontSize: "22px",
          fontWeight: 900,
          letterSpacing: "3px",
          color: "#00f5ff",
          textTransform: "uppercase",
          margin: 0,
        }}
      >
        {title}
      </h2>
      <p
        style={{
          fontSize: "13px",
          color: "rgba(255,255,255,0.45)",
          margin: "4px 0 0",
          fontFamily: "'Rajdhani', sans-serif",
          letterSpacing: "1px",
        }}
      >
        {subtitle}
      </p>
    </div>
  );
}

// ─── PILL BUTTON ───────────────────────────────────────────────────────────────

function PillBtn({
  label,
  active,
  onClick,
  accentColor,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  accentColor?: string;
}) {
  const ac = accentColor ?? "#00f5ff";
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        padding: "6px 14px",
        borderRadius: "20px",
        fontSize: "11px",
        fontWeight: 600,
        fontFamily: "'Orbitron', monospace",
        cursor: "pointer",
        border: active ? `1px solid ${ac}` : "1px solid rgba(255,255,255,0.12)",
        background: active ? `${ac}22` : "rgba(255,255,255,0.04)",
        color: active ? ac : "rgba(255,255,255,0.55)",
        boxShadow: active ? `0 0 12px ${ac}55` : "none",
        transition: "all 0.2s",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </button>
  );
}

// ─── SELECTABLE CARD ───────────────────────────────────────────────────────────

function SelectCard({
  ocid,
  selected,
  color,
  onToggle,
  children,
  extraStyle,
}: {
  ocid: string;
  selected: boolean;
  color: string;
  onToggle: () => void;
  children: React.ReactNode;
  extraStyle?: React.CSSProperties;
}) {
  return (
    <button
      type="button"
      data-ocid={ocid}
      onClick={onToggle}
      style={{
        borderRadius: "16px",
        border: `2px solid ${selected ? color : "rgba(255,255,255,0.07)"}`,
        background: selected
          ? `linear-gradient(135deg, ${color}22, ${color}08)`
          : "rgba(255,255,255,0.03)",
        padding: "16px 12px",
        textAlign: "center" as const,
        boxShadow: selected ? `0 0 24px ${color}50` : "none",
        cursor: "pointer",
        transition: "all 0.25s ease",
        width: "100%",
        ...extraStyle,
      }}
      className="card-hover"
    >
      {children}
    </button>
  );
}

// ─── PROMPT OUTPUT BOX ─────────────────────────────────────────────────────────

function PromptBox({ prompt, isVeo }: { prompt: string; isVeo?: boolean }) {
  const [copied, setCopied] = useState(false);
  const ac = isVeo ? "#ff8c00" : "#00f5ff";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      data-ocid="prompt.success_state"
      style={{
        marginTop: "20px",
        borderRadius: "12px",
        border: `1px solid ${ac}44`,
        background: `linear-gradient(135deg, ${ac}08, rgba(5,5,16,0.9))`,
        padding: "16px",
        animation: "fadeInUp 0.4s ease",
        boxShadow: `0 0 20px ${ac}25`,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <span
          style={{
            fontSize: "10px",
            fontWeight: 700,
            color: ac,
            letterSpacing: "2px",
          }}
        >
          {isVeo ? "✅ VEO 3 PROMPT READY" : "✅ SCENE PROMPT READY"}
        </span>
        <button
          type="button"
          data-ocid="prompt.copy_button"
          onClick={handleCopy}
          style={{
            padding: "4px 12px",
            borderRadius: "8px",
            fontSize: "10px",
            fontWeight: 700,
            fontFamily: "'Orbitron', monospace",
            cursor: "pointer",
            border: `1px solid ${ac}55`,
            background: copied ? `${ac}33` : "rgba(255,255,255,0.05)",
            color: copied ? ac : "rgba(255,255,255,0.6)",
            transition: "all 0.2s",
          }}
        >
          {copied ? "✓ Copied!" : "Copy"}
        </button>
      </div>
      <pre
        style={{
          fontFamily: "'Courier New', monospace",
          fontSize: "11px",
          color: "rgba(255,255,255,0.75)",
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
          margin: 0,
          lineHeight: 1.6,
        }}
      >
        {prompt}
      </pre>
    </div>
  );
}

// ─── CHARACTERS TAB ────────────────────────────────────────────────────────────

function CharactersTab({
  selectedChar,
  setSelectedChar,
  filterCategory,
  setFilterCategory,
}: {
  selectedChar: Character | null;
  setSelectedChar: (c: Character | null) => void;
  filterCategory: string;
  setFilterCategory: (c: string) => void;
}) {
  const categories = ["All", "Human", "Animal", "Robot", "Fantasy"];
  const filtered =
    filterCategory === "All"
      ? CHARACTERS
      : CHARACTERS.filter((c) => c.category === filterCategory);

  return (
    <div style={{ animation: "fadeInUp 0.4s ease" }}>
      <SectionHeader
        title="Choose Your Hero"
        subtitle="Select a 3D character for your scene"
      />
      <div
        style={{
          display: "flex",
          gap: "8px",
          marginBottom: "20px",
          flexWrap: "wrap",
        }}
      >
        {categories.map((cat) => (
          <PillBtn
            key={cat}
            label={cat}
            active={filterCategory === cat}
            onClick={() => setFilterCategory(cat)}
          />
        ))}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
          gap: "12px",
        }}
      >
        {filtered.map((char, idx) => {
          const sel = selectedChar?.id === char.id;
          return (
            <SelectCard
              key={char.id}
              ocid={`character.item.${idx + 1}`}
              selected={sel}
              color={char.color}
              onToggle={() => setSelectedChar(sel ? null : char)}
            >
              <div
                style={{
                  fontSize: "40px",
                  marginBottom: "8px",
                  filter: sel ? `drop-shadow(0 0 10px ${char.color})` : "none",
                  animation: sel ? "spin-slow 5s linear infinite" : "none",
                  display: "inline-block",
                }}
              >
                {char.emoji}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: sel ? char.color : "#fff",
                  marginBottom: "4px",
                  lineHeight: 1.2,
                }}
              >
                {char.name}
              </div>
              <div
                style={{
                  fontSize: "9px",
                  padding: "2px 8px",
                  borderRadius: "10px",
                  display: "inline-block",
                  background: `${char.color}22`,
                  color: char.color,
                  border: `1px solid ${char.color}44`,
                  letterSpacing: "1px",
                }}
              >
                {char.category}
              </div>
            </SelectCard>
          );
        })}
      </div>
    </div>
  );
}

// ─── VEHICLES TAB ──────────────────────────────────────────────────────────────

function VehiclesTab({
  selectedVehicle,
  setSelectedVehicle,
}: {
  selectedVehicle: Vehicle | null;
  setSelectedVehicle: (v: Vehicle | null) => void;
}) {
  return (
    <div style={{ animation: "fadeInUp 0.4s ease" }}>
      <SectionHeader
        title="Choose Your Ride"
        subtitle="Optional — equip your character with a vehicle"
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
          gap: "12px",
        }}
      >
        {VEHICLES.map((v, idx) => {
          const sel = selectedVehicle?.id === v.id;
          return (
            <SelectCard
              key={v.id}
              ocid={`vehicle.item.${idx + 1}`}
              selected={sel}
              color={v.color}
              onToggle={() => setSelectedVehicle(sel ? null : v)}
            >
              <div
                style={{
                  fontSize: "40px",
                  marginBottom: "8px",
                  filter: sel ? `drop-shadow(0 0 10px ${v.color})` : "none",
                  display: "inline-block",
                }}
              >
                {v.emoji}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: sel ? v.color : "#fff",
                  marginBottom: "4px",
                }}
              >
                {v.name}
              </div>
              <div
                style={{
                  fontSize: "9px",
                  padding: "2px 8px",
                  borderRadius: "10px",
                  display: "inline-block",
                  background: `${v.color}22`,
                  color: v.color,
                  border: `1px solid ${v.color}44`,
                  letterSpacing: "1px",
                }}
              >
                {v.type}
              </div>
            </SelectCard>
          );
        })}
      </div>
    </div>
  );
}

// ─── ANIMALS TAB ───────────────────────────────────────────────────────────────

function AnimalsTab({
  selectedAnimal,
  setSelectedAnimal,
}: {
  selectedAnimal: Animal | null;
  setSelectedAnimal: (a: Animal | null) => void;
}) {
  return (
    <div style={{ animation: "fadeInUp 0.4s ease" }}>
      <SectionHeader
        title="Choose Your Companion"
        subtitle="Select an animal companion — or use a hero instead"
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
          gap: "12px",
        }}
      >
        {ANIMALS.map((a, idx) => {
          const sel = selectedAnimal?.id === a.id;
          return (
            <SelectCard
              key={a.id}
              ocid={`animal.item.${idx + 1}`}
              selected={sel}
              color={a.color}
              onToggle={() => setSelectedAnimal(sel ? null : a)}
            >
              <div
                style={{
                  fontSize: "40px",
                  marginBottom: "8px",
                  filter: sel ? `drop-shadow(0 0 10px ${a.color})` : "none",
                  animation: sel ? "spin-slow 5s linear infinite" : "none",
                  display: "inline-block",
                }}
              >
                {a.emoji}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: sel ? a.color : "#fff",
                }}
              >
                {a.name}
              </div>
            </SelectCard>
          );
        })}
      </div>
    </div>
  );
}

// ─── WORLDS TAB ────────────────────────────────────────────────────────────────

function WorldsTab({
  selectedBg,
  setSelectedBg,
}: { selectedBg: Background; setSelectedBg: (b: Background) => void }) {
  return (
    <div style={{ animation: "fadeInUp 0.4s ease" }}>
      <SectionHeader
        title="Choose Your World"
        subtitle="Select the environment for your scene"
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
          gap: "12px",
        }}
      >
        {BACKGROUNDS.map((bg, idx) => {
          const sel = selectedBg.id === bg.id;
          return (
            <button
              key={bg.id}
              type="button"
              data-ocid={`world.item.${idx + 1}`}
              onClick={() => setSelectedBg(bg)}
              style={{
                borderRadius: "16px",
                border: `2px solid ${sel ? "#00f5ff" : "rgba(255,255,255,0.07)"}`,
                overflow: "hidden",
                cursor: "pointer",
                boxShadow: sel ? "0 0 24px rgba(0,245,255,0.5)" : "none",
                transition: "all 0.25s ease",
                padding: 0,
                background: "transparent",
                width: "100%",
                textAlign: "left",
              }}
              className="card-hover"
            >
              <div
                style={{
                  background: bg.gradient,
                  height: "80px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "36px",
                }}
              >
                {bg.emoji}
              </div>
              <div
                style={{
                  padding: "10px 12px",
                  background: "rgba(5,5,16,0.85)",
                }}
              >
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    color: sel ? "#00f5ff" : "#fff",
                    letterSpacing: "1px",
                  }}
                >
                  {bg.name}
                </div>
                <div
                  style={{
                    fontSize: "9px",
                    color: "rgba(255,255,255,0.4)",
                    textTransform: "capitalize",
                    marginTop: "2px",
                  }}
                >
                  {bg.style}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── SCENE TAB ─────────────────────────────────────────────────────────────────

function SceneTab({
  selectedChar,
  selectedAnimal,
  selectedVehicle,
  selectedBg,
  renderStyle,
  setRenderStyle,
  lighting,
  setLighting,
  pose,
  setPose,
  expression,
  setExpression,
}: {
  selectedChar: Character | null;
  selectedAnimal: Animal | null;
  selectedVehicle: Vehicle | null;
  selectedBg: Background;
  renderStyle: string;
  setRenderStyle: (s: string) => void;
  lighting: string;
  setLighting: (s: string) => void;
  pose: string;
  setPose: (s: string) => void;
  expression: string;
  setExpression: (s: string) => void;
}) {
  const [generating, setGenerating] = useState(false);
  const [generatedPrompt, setGeneratedPrompt] = useState("");
  const canGenerate = !!(selectedChar || selectedAnimal);

  const handleGenerateScene = async () => {
    if (!canGenerate) return;
    setGenerating(true);
    setGeneratedPrompt("");
    const charName = selectedChar
      ? selectedChar.name
      : (selectedAnimal?.name ?? "");
    const vehicle = selectedVehicle ? ` riding ${selectedVehicle.name}` : "";
    const prompt = `ZOON 3D — Ultra-HD ${renderStyle} 3D render of ${charName}${vehicle}. Pose: ${pose.replace(/^\S+\s/, "")}. Expression: ${expression.replace(/^\S+\s/, "")}. World: ${selectedBg.name}. Lighting: ${lighting.replace(/^\S+\s/, "")}. 8K, cinema-quality, ray-tracing, volumetric lighting, depth of field.`;
    await new Promise((r) => setTimeout(r, 2600));
    setGenerating(false);
    setGeneratedPrompt(prompt);
  };

  return (
    <div style={{ animation: "fadeInUp 0.4s ease" }}>
      <SectionHeader
        title="Scene Studio"
        subtitle="Compose your 3D render settings"
      />

      {/* Render Style */}
      <div style={{ marginBottom: "24px" }}>
        <div
          style={{
            fontSize: "11px",
            fontWeight: 700,
            color: "#00f5ff88",
            letterSpacing: "2px",
            marginBottom: "10px",
          }}
        >
          RENDER STYLE
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
            gap: "8px",
          }}
        >
          {RENDER_STYLES.map((rs) => {
            const active = renderStyle === rs.id;
            return (
              <button
                key={rs.id}
                type="button"
                data-ocid={`scene.render_style.${rs.id}`}
                onClick={() => setRenderStyle(rs.id)}
                style={{
                  borderRadius: "12px",
                  border: `1px solid ${active ? "#00f5ff" : "rgba(255,255,255,0.1)"}`,
                  background: active
                    ? "rgba(0,245,255,0.1)"
                    : "rgba(255,255,255,0.03)",
                  padding: "10px",
                  cursor: "pointer",
                  textAlign: "center",
                  boxShadow: active ? "0 0 16px rgba(0,245,255,0.3)" : "none",
                  transition: "all 0.2s",
                  width: "100%",
                }}
              >
                <div style={{ fontSize: "20px", marginBottom: "4px" }}>
                  {rs.label.split(" ")[0]}
                </div>
                <div
                  style={{
                    fontSize: "10px",
                    fontWeight: 700,
                    color: active ? "#00f5ff" : "#fff",
                    letterSpacing: "1px",
                  }}
                >
                  {rs.label.replace(/^\S+\s/, "")}
                </div>
                <div
                  style={{
                    fontSize: "9px",
                    color: "rgba(255,255,255,0.4)",
                    marginTop: "2px",
                  }}
                >
                  {rs.desc}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Lighting */}
      <div style={{ marginBottom: "20px" }}>
        <div
          style={{
            fontSize: "11px",
            fontWeight: 700,
            color: "#00f5ff88",
            letterSpacing: "2px",
            marginBottom: "10px",
          }}
        >
          LIGHTING
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {LIGHTING.map((l) => (
            <PillBtn
              key={l}
              label={l}
              active={lighting === l}
              onClick={() => setLighting(l)}
            />
          ))}
        </div>
      </div>

      {/* Pose */}
      <div style={{ marginBottom: "20px" }}>
        <div
          style={{
            fontSize: "11px",
            fontWeight: 700,
            color: "#00f5ff88",
            letterSpacing: "2px",
            marginBottom: "10px",
          }}
        >
          POSE
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {POSES.map((p) => (
            <PillBtn
              key={p}
              label={p}
              active={pose === p}
              onClick={() => setPose(p)}
            />
          ))}
        </div>
      </div>

      {/* Expression */}
      <div style={{ marginBottom: "28px" }}>
        <div
          style={{
            fontSize: "11px",
            fontWeight: 700,
            color: "#00f5ff88",
            letterSpacing: "2px",
            marginBottom: "10px",
          }}
        >
          EXPRESSION
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {EXPRESSIONS.map((e) => (
            <PillBtn
              key={e}
              label={e}
              active={expression === e}
              onClick={() => setExpression(e)}
            />
          ))}
        </div>
      </div>

      {!canGenerate && (
        <div
          data-ocid="scene.empty_state"
          style={{
            marginBottom: "12px",
            fontSize: "11px",
            color: "rgba(255,255,255,0.4)",
            textAlign: "center",
          }}
        >
          ⚠️ Select a Hero or Animal Companion first
        </div>
      )}
      <button
        type="button"
        data-ocid="scene.generate_button"
        onClick={handleGenerateScene}
        disabled={!canGenerate || generating}
        style={{
          width: "100%",
          padding: "16px",
          borderRadius: "14px",
          border: "none",
          fontFamily: "'Orbitron', monospace",
          fontSize: "14px",
          fontWeight: 900,
          letterSpacing: "3px",
          cursor: canGenerate && !generating ? "pointer" : "not-allowed",
          opacity: canGenerate && !generating ? 1 : 0.4,
          background: canGenerate
            ? "linear-gradient(135deg, #00f5ff, #7b2ff7)"
            : "rgba(255,255,255,0.1)",
          color: canGenerate ? "#050510" : "#fff",
          transition: "all 0.3s",
          animation:
            canGenerate && !generating ? "pulse-glow 2s infinite" : "none",
          textTransform: "uppercase",
        }}
      >
        {generating ? "⟳ Generating Scene..." : "⚡ Generate Scene Prompt"}
      </button>
      {generating && (
        <div
          data-ocid="scene.loading_state"
          style={{
            textAlign: "center",
            marginTop: "10px",
            fontSize: "11px",
            color: "#00f5ff88",
          }}
        >
          Processing your 3D scene...
        </div>
      )}

      {generatedPrompt && <PromptBox prompt={generatedPrompt} />}
    </div>
  );
}

// ─── VEO 3 TAB ─────────────────────────────────────────────────────────────────

function Veo3Tab({
  selectedChar,
  selectedAnimal,
  selectedVehicle,
  selectedBg,
  renderStyle,
  lighting,
}: {
  selectedChar: Character | null;
  selectedAnimal: Animal | null;
  selectedVehicle: Vehicle | null;
  selectedBg: Background;
  renderStyle: string;
  lighting: string;
}) {
  const [videoDuration, setVideoDuration] = useState("8s");
  const [videoRatio, setVideoRatio] = useState("16:9 Landscape");
  const [videoQuality, setVideoQuality] = useState("1080p FHD");
  const [cameraMove, setCameraMove] = useState("orbit");
  const [motionStyle, setMotionStyle] = useState("cinematic");
  const [soundFx, setSoundFx] = useState("💥 Epic Score");
  const [veoScene, setVeoScene] = useState("intro");
  const [generatingVideo, setGeneratingVideo] = useState(false);
  const [videoPrompt, setVideoPrompt] = useState("");
  const [videoProgress, setVideoProgress] = useState(0);
  const [customVideoDesc, setCustomVideoDesc] = useState("");
  const canGenerate = !!(selectedChar || selectedAnimal);

  const handleGenerateVideo = async () => {
    if (!canGenerate) return;
    setGeneratingVideo(true);
    setVideoPrompt("");
    setVideoProgress(0);
    const charName = selectedChar
      ? selectedChar.name
      : (selectedAnimal?.name ?? "");
    const vehicle = selectedVehicle ? ` with ${selectedVehicle.name}` : "";
    const scenePick = VEO3_SCENES.find((s) => s.id === veoScene);
    const cameraPick = CAMERA_MOVES.find((c) => c.id === cameraMove);
    const motionPick = MOTION_STYLES.find((m) => m.id === motionStyle);
    const customNote = customVideoDesc
      ? ` Additional detail: ${customVideoDesc}.`
      : "";
    const veo3Prompt = `[Veo 3 Cinematic Video Prompt]\n\nSUBJECT: ${charName}${vehicle}, 3D ${renderStyle} style\nSCENE: ${scenePick?.template}\nWORLD: ${selectedBg.name} environment\nCAMERA: ${cameraPick?.label.replace(/^\S+\s/, "")} shot\nMOTION: ${motionPick?.label.replace(/^\S+\s/, "")} style\nDURATION: ${videoDuration}\nASPECT: ${videoRatio}\nQUALITY: ${videoQuality}\nSOUND: ${soundFx.replace(/^\S+\s/, "")}\nLIGHTING: ${lighting.replace(/^\S+\s/, "")}\n\nFULL DESCRIPTION: Generate a ${videoDuration} ${motionPick?.label.replace(/^\S+\s/, "").toLowerCase()} 3D animated video of ${charName}${vehicle} performing a ${scenePick?.template} in a cinematic ${selectedBg.name} environment. Use ${cameraPick?.label.replace(/^\S+\s/, "").toLowerCase()} camera movement. Render in ${renderStyle} 3D style with ${lighting.replace(/^\S+\s/, "").toLowerCase()} lighting. Output at ${videoQuality}, ${videoRatio} aspect ratio.${customNote}`;

    for (let i = 0; i <= 100; i += 5) {
      await new Promise((r) => setTimeout(r, 120));
      setVideoProgress(i);
    }
    setGeneratingVideo(false);
    setVideoPrompt(veo3Prompt);
  };

  const motionPick = MOTION_STYLES.find((m) => m.id === motionStyle);

  return (
    <div style={{ animation: "fadeInUp 0.4s ease" }}>
      <SectionHeader
        title="Veo 3 Video Engine"
        subtitle="Generate cinematic AI video prompts"
      />

      {/* Duration */}
      <div style={{ marginBottom: "20px" }}>
        <div
          style={{
            fontSize: "11px",
            fontWeight: 700,
            color: "#ff8c0088",
            letterSpacing: "2px",
            marginBottom: "10px",
          }}
        >
          VIDEO DURATION
        </div>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {VIDEO_DURATIONS.map((d) => (
            <PillBtn
              key={d}
              label={d}
              active={videoDuration === d}
              onClick={() => setVideoDuration(d)}
              accentColor="#ff8c00"
            />
          ))}
        </div>
      </div>

      {/* Ratio */}
      <div style={{ marginBottom: "20px" }}>
        <div
          style={{
            fontSize: "11px",
            fontWeight: 700,
            color: "#ff8c0088",
            letterSpacing: "2px",
            marginBottom: "10px",
          }}
        >
          ASPECT RATIO
        </div>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {VIDEO_RATIOS.map((r) => (
            <PillBtn
              key={r}
              label={r}
              active={videoRatio === r}
              onClick={() => setVideoRatio(r)}
              accentColor="#ff8c00"
            />
          ))}
        </div>
      </div>

      {/* Quality */}
      <div style={{ marginBottom: "20px" }}>
        <div
          style={{
            fontSize: "11px",
            fontWeight: 700,
            color: "#ff8c0088",
            letterSpacing: "2px",
            marginBottom: "10px",
          }}
        >
          VIDEO QUALITY
        </div>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {VIDEO_QUALITIES.map((q) => (
            <PillBtn
              key={q}
              label={q}
              active={videoQuality === q}
              onClick={() => setVideoQuality(q)}
              accentColor="#ff8c00"
            />
          ))}
        </div>
      </div>

      {/* Camera Move */}
      <div style={{ marginBottom: "20px" }}>
        <div
          style={{
            fontSize: "11px",
            fontWeight: 700,
            color: "#ff8c0088",
            letterSpacing: "2px",
            marginBottom: "10px",
          }}
        >
          CAMERA MOVE
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))",
            gap: "8px",
          }}
        >
          {CAMERA_MOVES.map((cm) => {
            const active = cameraMove === cm.id;
            return (
              <button
                key={cm.id}
                type="button"
                data-ocid={`veo3.camera.${cm.id}`}
                onClick={() => setCameraMove(cm.id)}
                style={{
                  borderRadius: "12px",
                  border: `1px solid ${active ? "#ff8c00" : "rgba(255,255,255,0.1)"}`,
                  background: active
                    ? "rgba(255,140,0,0.12)"
                    : "rgba(255,255,255,0.03)",
                  padding: "10px",
                  cursor: "pointer",
                  textAlign: "center",
                  boxShadow: active ? "0 0 16px rgba(255,140,0,0.35)" : "none",
                  transition: "all 0.2s",
                  width: "100%",
                }}
              >
                <div style={{ fontSize: "18px", marginBottom: "4px" }}>
                  {cm.label.split(" ")[0]}
                </div>
                <div
                  style={{
                    fontSize: "10px",
                    fontWeight: 700,
                    color: active ? "#ff8c00" : "#fff",
                    letterSpacing: "1px",
                  }}
                >
                  {cm.label.replace(/^\S+\s/, "")}
                </div>
                <div
                  style={{
                    fontSize: "9px",
                    color: "rgba(255,255,255,0.4)",
                    marginTop: "2px",
                  }}
                >
                  {cm.desc}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Motion Style */}
      <div style={{ marginBottom: "20px" }}>
        <div
          style={{
            fontSize: "11px",
            fontWeight: 700,
            color: "#ff8c0088",
            letterSpacing: "2px",
            marginBottom: "10px",
          }}
        >
          MOTION STYLE
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))",
            gap: "8px",
          }}
        >
          {MOTION_STYLES.map((ms) => {
            const active = motionStyle === ms.id;
            return (
              <button
                key={ms.id}
                type="button"
                data-ocid={`veo3.motion.${ms.id}`}
                onClick={() => setMotionStyle(ms.id)}
                style={{
                  borderRadius: "12px",
                  border: `1px solid ${active ? ms.color : "rgba(255,255,255,0.1)"}`,
                  background: active
                    ? `${ms.color}18`
                    : "rgba(255,255,255,0.03)",
                  padding: "10px",
                  cursor: "pointer",
                  textAlign: "center",
                  boxShadow: active ? `0 0 16px ${ms.color}55` : "none",
                  transition: "all 0.2s",
                  width: "100%",
                }}
              >
                <div style={{ fontSize: "18px", marginBottom: "4px" }}>
                  {ms.label.split(" ")[0]}
                </div>
                <div
                  style={{
                    fontSize: "10px",
                    fontWeight: 700,
                    color: active ? ms.color : "#fff",
                    letterSpacing: "1px",
                  }}
                >
                  {ms.label.replace(/^\S+\s/, "")}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Sound FX */}
      <div style={{ marginBottom: "20px" }}>
        <div
          style={{
            fontSize: "11px",
            fontWeight: 700,
            color: "#ff8c0088",
            letterSpacing: "2px",
            marginBottom: "10px",
          }}
        >
          SOUND FX
        </div>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {SOUND_FX.map((s) => (
            <PillBtn
              key={s}
              label={s}
              active={soundFx === s}
              onClick={() => setSoundFx(s)}
              accentColor="#ff8c00"
            />
          ))}
        </div>
      </div>

      {/* Scene Type */}
      <div style={{ marginBottom: "20px" }}>
        <div
          style={{
            fontSize: "11px",
            fontWeight: 700,
            color: "#ff8c0088",
            letterSpacing: "2px",
            marginBottom: "10px",
          }}
        >
          SCENE TYPE
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
            gap: "8px",
          }}
        >
          {VEO3_SCENES.map((scene) => {
            const active = veoScene === scene.id;
            return (
              <button
                key={scene.id}
                type="button"
                data-ocid={`veo3.scene.${scene.id}`}
                onClick={() => setVeoScene(scene.id)}
                style={{
                  borderRadius: "12px",
                  border: `1px solid ${active ? "#ff8c00" : "rgba(255,255,255,0.1)"}`,
                  background: active
                    ? "rgba(255,140,0,0.12)"
                    : "rgba(255,255,255,0.03)",
                  padding: "12px",
                  cursor: "pointer",
                  boxShadow: active ? "0 0 16px rgba(255,140,0,0.35)" : "none",
                  transition: "all 0.2s",
                  width: "100%",
                  textAlign: "left",
                }}
              >
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: 700,
                    color: active ? "#ff8c00" : "#fff",
                    marginBottom: "4px",
                  }}
                >
                  {scene.label}
                </div>
                <div
                  style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)" }}
                >
                  {scene.template}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Custom Description */}
      <div style={{ marginBottom: "24px" }}>
        <div
          style={{
            fontSize: "11px",
            fontWeight: 700,
            color: "#ff8c0088",
            letterSpacing: "2px",
            marginBottom: "10px",
          }}
        >
          CUSTOM DETAILS (OPTIONAL)
        </div>
        <textarea
          data-ocid="veo3.custom_desc.textarea"
          value={customVideoDesc}
          onChange={(e) => setCustomVideoDesc(e.target.value)}
          placeholder="Add any extra details, special effects, or specific visual elements..."
          rows={3}
          style={{
            width: "100%",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,140,0,0.25)",
            borderRadius: "12px",
            padding: "12px",
            color: "#fff",
            fontFamily: "'Rajdhani', sans-serif",
            fontSize: "13px",
            resize: "vertical",
            outline: "none",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/* Progress Bar */}
      {generatingVideo && (
        <div data-ocid="veo3.loading_state" style={{ marginBottom: "16px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "6px",
            }}
          >
            <span
              style={{
                fontSize: "10px",
                color: "#ff8c00",
                letterSpacing: "2px",
              }}
            >
              RENDERING VIDEO...
            </span>
            <span style={{ fontSize: "10px", color: "#ff8c00" }}>
              {videoProgress}%
            </span>
          </div>
          <div
            style={{
              height: "8px",
              borderRadius: "4px",
              background: "rgba(255,140,0,0.15)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${videoProgress}%`,
                background: "linear-gradient(90deg, #ff5000, #ff9900, #ffdd00)",
                borderRadius: "4px",
                transition: "width 0.1s linear",
                boxShadow: "0 0 12px rgba(255,140,0,0.6)",
              }}
            />
          </div>
        </div>
      )}

      {!canGenerate && (
        <div
          data-ocid="veo3.empty_state"
          style={{
            marginBottom: "12px",
            fontSize: "11px",
            color: "rgba(255,255,255,0.4)",
            textAlign: "center",
          }}
        >
          ⚠️ Select a Hero or Animal Companion first
        </div>
      )}
      <button
        type="button"
        data-ocid="veo3.generate_button"
        onClick={handleGenerateVideo}
        disabled={!canGenerate || generatingVideo}
        style={{
          width: "100%",
          padding: "16px",
          borderRadius: "14px",
          border: "none",
          fontFamily: "'Orbitron', monospace",
          fontSize: "14px",
          fontWeight: 900,
          letterSpacing: "3px",
          cursor: canGenerate && !generatingVideo ? "pointer" : "not-allowed",
          opacity: canGenerate && !generatingVideo ? 1 : 0.4,
          background: canGenerate
            ? "linear-gradient(135deg, #ff5000, #ff9900, #ffdd00)"
            : "rgba(255,255,255,0.1)",
          color: canGenerate ? "#050510" : "#fff",
          transition: "all 0.3s",
          textTransform: "uppercase",
        }}
      >
        {generatingVideo
          ? `⟳ Generating... ${videoProgress}%`
          : "🎥 Generate Veo 3 Prompt"}
      </button>
      <div
        style={{
          textAlign: "center",
          marginTop: "8px",
          fontSize: "10px",
          color: "rgba(255,140,0,0.6)",
        }}
      >
        Powered by Google Veo 3 · {motionPick?.label ?? "Cinematic"} ·{" "}
        {videoQuality}
      </div>

      {videoPrompt && <PromptBox prompt={videoPrompt} isVeo />}
    </div>
  );
}

// ─── MAIN APP ──────────────────────────────────────────────────────────────────

type TabId =
  | "characters"
  | "vehicles"
  | "animals"
  | "backgrounds"
  | "scene"
  | "video";

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  x: (i * 5.5 + 3) % 100,
  delay: (i * 0.25) % 4,
  color: ["#00f5ff", "#a855f7", "#f97316", "#3b82f6", "#fbbf24"][i % 5],
}));

const TABS: { id: TabId; icon: string; label: string }[] = [
  { id: "characters", icon: "🥷", label: "Heroes" },
  { id: "vehicles", icon: "🏎️", label: "Rides" },
  { id: "animals", icon: "🦁", label: "Animals" },
  { id: "backgrounds", icon: "🌌", label: "Worlds" },
  { id: "scene", icon: "🎬", label: "Scene" },
  { id: "video", icon: "🎥", label: "Veo 3" },
];

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>("characters");
  const [selectedChar, setSelectedChar] = useState<Character | null>(null);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [selectedBg, setSelectedBg] = useState<Background>(BACKGROUNDS[0]);
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);
  const [renderStyle, setRenderStyle] = useState("cartoon");
  const [lighting, setLighting] = useState("🌟 Studio");
  const [pose, setPose] = useState("🏃 Running");
  const [expression, setExpression] = useState("😎 Epic");
  const [filterCategory, setFilterCategory] = useState("All");

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050510",
        color: "#fff",
        fontFamily: "'Orbitron', monospace",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;500;700&display=swap');
        @keyframes floatUp { 0%{transform:translateY(0) scale(1);opacity:.7} 100%{transform:translateY(-100vh) scale(0);opacity:0} }
        @keyframes pulse-glow { 0%,100%{box-shadow:0 0 20px rgba(0,245,255,.3)} 50%{box-shadow:0 0 50px rgba(0,245,255,.9),0 0 100px rgba(0,245,255,.3)} }
        @keyframes spin-slow { 0%{transform:rotateY(0deg) rotateX(5deg)} 100%{transform:rotateY(360deg) rotateX(5deg)} }
        @keyframes fadeInUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
        .card-hover { transition:all .25s ease; cursor:pointer; }
        .card-hover:hover { transform:translateY(-4px) scale(1.03); z-index:10; }
        .shimmer-text { background:linear-gradient(90deg,#00f5ff,#a855f7,#f97316,#00f5ff); background-size:200% auto; -webkit-background-clip:text; -webkit-text-fill-color:transparent; animation:shimmer 3s linear infinite; }
        ::-webkit-scrollbar{width:4px} ::-webkit-scrollbar-track{background:#0a0a1a} ::-webkit-scrollbar-thumb{background:#00f5ff44;border-radius:2px}
        textarea::placeholder { color: rgba(255,255,255,0.3); }
        textarea:focus { border-color: rgba(255,140,0,0.55) !important; }
        [role="button"]:focus-visible { outline: 2px solid #00f5ff; outline-offset: 2px; }
      `}</style>

      {/* Floating Particles */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        {PARTICLES.map((p) => (
          <FloatingParticle
            key={p.id}
            x={p.x}
            delay={p.delay}
            color={p.color}
          />
        ))}
      </div>

      {/* Grid Overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(0,245,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,245,255,.025) 1px,transparent 1px)",
          backgroundSize: "40px 40px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Header */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "rgba(5,5,16,.97)",
          borderBottom: "1px solid rgba(0,245,255,.2)",
          backdropFilter: "blur(20px)",
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              background: "linear-gradient(135deg,#00f5ff,#7b2ff7)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
              animation: "pulse-glow 2s infinite",
              flexShrink: 0,
            }}
          >
            🎮
          </div>
          <div>
            <div
              className="shimmer-text"
              style={{
                fontSize: "17px",
                fontWeight: 900,
                letterSpacing: "3px",
                lineHeight: 1,
              }}
            >
              ZOON
            </div>
            <div
              style={{
                fontSize: "8px",
                color: "#00f5ff88",
                letterSpacing: "2px",
              }}
            >
              3D MODEL AI • VEO 3
            </div>
          </div>
        </div>

        {/* Tabs */}
        <nav
          style={{
            display: "flex",
            gap: "5px",
            flexWrap: "wrap",
            justifyContent: "flex-end",
          }}
        >
          {TABS.map((t) => {
            const active = activeTab === t.id;
            const isVeo = t.id === "video";
            return (
              <button
                key={t.id}
                type="button"
                data-ocid={`nav.tab.${t.id}`}
                onClick={() => setActiveTab(t.id)}
                style={{
                  padding: "5px 10px",
                  borderRadius: "8px",
                  fontSize: "9px",
                  fontWeight: 700,
                  fontFamily: "'Orbitron', monospace",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  color: active ? "#050510" : isVeo ? "#ff8c00aa" : "#00f5ff88",
                  background: active
                    ? isVeo
                      ? "linear-gradient(135deg,#ff5000,#ff9900)"
                      : "linear-gradient(135deg,#00f5ff,#7b2ff7)"
                    : isVeo
                      ? "rgba(255,140,0,.08)"
                      : "rgba(0,245,255,.06)",
                  border: active
                    ? "none"
                    : isVeo
                      ? "1px solid rgba(255,140,0,.25)"
                      : "1px solid rgba(0,245,255,.15)",
                  transition: "all 0.2s",
                }}
              >
                {t.icon} {t.label}
              </button>
            );
          })}
        </nav>
      </header>

      {/* Main Content */}
      <main
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "20px 16px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {activeTab === "characters" && (
          <CharactersTab
            selectedChar={selectedChar}
            setSelectedChar={setSelectedChar}
            filterCategory={filterCategory}
            setFilterCategory={setFilterCategory}
          />
        )}
        {activeTab === "vehicles" && (
          <VehiclesTab
            selectedVehicle={selectedVehicle}
            setSelectedVehicle={setSelectedVehicle}
          />
        )}
        {activeTab === "animals" && (
          <AnimalsTab
            selectedAnimal={selectedAnimal}
            setSelectedAnimal={setSelectedAnimal}
          />
        )}
        {activeTab === "backgrounds" && (
          <WorldsTab selectedBg={selectedBg} setSelectedBg={setSelectedBg} />
        )}
        {activeTab === "scene" && (
          <SceneTab
            selectedChar={selectedChar}
            selectedAnimal={selectedAnimal}
            selectedVehicle={selectedVehicle}
            selectedBg={selectedBg}
            renderStyle={renderStyle}
            setRenderStyle={setRenderStyle}
            lighting={lighting}
            setLighting={setLighting}
            pose={pose}
            setPose={setPose}
            expression={expression}
            setExpression={setExpression}
          />
        )}
        {activeTab === "video" && (
          <Veo3Tab
            selectedChar={selectedChar}
            selectedAnimal={selectedAnimal}
            selectedVehicle={selectedVehicle}
            selectedBg={selectedBg}
            renderStyle={renderStyle}
            lighting={lighting}
          />
        )}

        {/* Footer */}
        <footer
          style={{
            marginTop: "48px",
            paddingTop: "24px",
            borderTop: "1px solid rgba(0,245,255,.08)",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "10px",
              color: "rgba(255,255,255,0.25)",
              fontFamily: "'Rajdhani', sans-serif",
              letterSpacing: "1px",
              margin: 0,
            }}
          >
            © {new Date().getFullYear()}. Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#00f5ff88", textDecoration: "none" }}
            >
              caffeine.ai
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
}
