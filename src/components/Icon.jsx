// Ícones SVG simples (stroke), estilo lucide
const PATHS = {
  home: 'M3 10.5 12 3l9 7.5M5 9.5V21h5v-6h4v6h5V9.5',
  play: 'M6 4.5v15l13-7.5z',
  book: 'M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2zM4 19a2 2 0 0 1 2-2h13',
  dumbbell: 'M6.5 6.5v11M4 9v6M17.5 6.5v11M20 9v6M6.5 12h11M2 12h2M20 12h2',
  utensils: 'M7 3v7a2 2 0 0 0 2 2v9M7 3v4M11 3v4M9 12v9M17 3c-2 0-3 3-3 6 0 2 1 3 3 3v9',
  chart: 'M4 20V4M4 20h16M8 16l3-5 3 2 4-7',
  user: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21c0-4 3.5-6 8-6s8 2 8 6',
  flame: 'M12 3c1 3 5 5 5 9.5A5 5 0 0 1 7 12.5C7 10 8 8.5 9 7c.5 1.5 1.5 2 2 2-.5-2.5 0-4.5 1-6z',
  scale: 'M12 3v3M5 21h14M7 6l-3 7a3.5 3.5 0 0 0 6 0L7 6zM17 6l-3 7a3.5 3.5 0 0 0 6 0l-3-7zM12 6h5M7 6h5',
  target: 'M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18zM12 17a5 5 0 1 1 0-10 5 5 0 0 1 0 10zM12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z',
  calendar: 'M5 5h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM4 10h16M8 3v4M16 3v4',
  plus: 'M12 5v14M5 12h14',
  trash: 'M4 7h16M9 7V4h6v3M6 7l1 14h10l1-14M10 11v6M14 11v6',
  edit: 'M4 20h4l11-11-4-4L4 16v4zM13 7l4 4',
  download: 'M12 4v12m0 0-4-4m4 4 4-4M4 20h16',
  upload: 'M12 16V4m0 0-4 4m4-4 4 4M4 20h16',
  check: 'M4 12.5 9.5 18 20 6',
  x: 'M6 6l12 12M18 6 6 18',
  chevron: 'M9 5l7 7-7 7',
  'arrow-left': 'M19 12H5M12 19l-7-7 7-7',
  video: 'M4 6h12a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zM17 10l4-2.5v9L17 14',
  heart: 'M12 20s-7.5-4.6-9.5-9C1 7.5 3 4.5 6 4.5c2 0 3.5 1 4.5 2.5C11.5 5.5 13 4.5 15 4.5c3 0 5 3 3.5 6.5-2 4.4-6.5 9-6.5 9z',
  sparkles: 'M12 4l1.6 4.4L18 10l-4.4 1.6L12 16l-1.6-4.4L6 10l4.4-1.6zM19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9zM5 3l.8 1.7L7.5 5.5 5.8 6.3 5 8l-.8-1.7L2.5 5.5l1.7-.8z',
  clock: 'M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18zM12 7v5l3.5 2',
  ruler: 'M4 16 16 4l4 4L8 20zM8 12l1.5 1.5M11 9l1.5 1.5M14 6l1.5 1.5',
  refresh: 'M20 12a8 8 0 1 1-2.3-5.6M20 4v4h-4',
}

export default function Icon({ name, size = 20, color = 'currentColor', strokeWidth = 1.9, style }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
      aria-hidden="true"
    >
      <path d={PATHS[name] || PATHS.sparkles} />
    </svg>
  )
}
