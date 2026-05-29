// Minimal line-icon set — gold-accented, geometric. No emoji.
const Icon = {
  Logo: ({size=28, className=""}) => (
    // Two-tone D: black bracket left half + gold half-circle right half
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-hidden="true">
      {/* Left half — black bracket (open right) */}
      <path d="M30 12 H18 V52 H30 M18 12 V52" fill="none" stroke="#0E0E10" strokeWidth="4.5" strokeLinejoin="miter" strokeLinecap="butt"/>
      {/* Right half — gold half circle */}
      <path d="M32 12 A20 20 0 0 1 32 52" fill="none" stroke="#B89556" strokeWidth="4.5" strokeLinecap="butt"/>
    </svg>
  ),
  Play: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}>
      <rect x="3" y="5" width="18" height="14" rx="1.5"/>
      <path d="M10 9.5 L15 12 L10 14.5 Z" fill="currentColor" stroke="none"/>
    </svg>
  ),
  AI: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}>
      <rect x="4" y="4" width="16" height="16" rx="2"/>
      <path d="M8 16 L8 10 L10 14 L12 10 L12 16 M15 10 L15 16"/>
      <circle cx="2.5" cy="9" r="0.6" fill="currentColor"/>
      <circle cx="2.5" cy="15" r="0.6" fill="currentColor"/>
      <circle cx="21.5" cy="9" r="0.6" fill="currentColor"/>
      <circle cx="21.5" cy="15" r="0.6" fill="currentColor"/>
    </svg>
  ),
  Web: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}>
      <rect x="3" y="4" width="18" height="14" rx="1.5"/>
      <path d="M3 8 H21"/>
      <circle cx="6" cy="6" r="0.6" fill="currentColor"/>
      <circle cx="8.5" cy="6" r="0.6" fill="currentColor"/>
      <path d="M9 21 H15"/>
    </svg>
  ),
  Spark: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 2 L13.6 9.4 L21 11 L13.6 12.6 L12 20 L10.4 12.6 L3 11 L10.4 9.4 Z"/>
      <path d="M19 18 L20 21 M21 19 L18 20" opacity="0.6"/>
    </svg>
  ),
  Mic: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}>
      <rect x="9" y="3" width="6" height="12" rx="3"/>
      <path d="M5 11 a7 7 0 0 0 14 0 M12 18 V21 M9 21 H15"/>
    </svg>
  ),
  Speed: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}>
      <path d="M4 16 a8 8 0 0 1 16 0"/>
      <path d="M12 16 L16 9"/>
      <circle cx="12" cy="16" r="1.4" fill="currentColor"/>
    </svg>
  ),
  Bulb: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}>
      <path d="M9 18 H15 M10 21 H14 M8 12 a4 4 0 1 1 8 0 c0 2-1 3-2 4 v1 H10 v-1 c-1-1-2-2-2-4Z"/>
    </svg>
  ),
  Hands: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}>
      <path d="M3 13 L8 9 L11 11 L13 9 L18 12 L21 11 M3 13 V17 H21 V13"/>
    </svg>
  ),
  Check: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <circle cx="12" cy="12" r="9"/>
      <path d="M8 12.5 L11 15.5 L16 9.5"/>
    </svg>
  ),
  ArrowRight: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <path d="M5 12 H19 M13 6 L19 12 L13 18"/>
    </svg>
  ),
  Hearing: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}>
      <circle cx="12" cy="8" r="3.2"/>
      <path d="M5 20 c1-4 4-6 7-6 s6 2 7 6"/>
    </svg>
  ),
  Doc: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}>
      <path d="M7 3 H15 L19 7 V21 H7 Z M15 3 V7 H19"/>
      <path d="M9 12 H17 M9 15 H17 M9 18 H14"/>
    </svg>
  ),
  Pen: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}>
      <path d="M4 20 L4 16 L16 4 L20 8 L8 20 Z M14 6 L18 10"/>
    </svg>
  ),
  Code: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}>
      <path d="M9 8 L4 12 L9 16 M15 8 L20 12 L15 16"/>
    </svg>
  ),
  Chart: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}>
      <path d="M4 20 H20 M7 20 V14 M12 20 V8 M17 20 V11"/>
    </svg>
  ),
};
window.Icon = Icon;
