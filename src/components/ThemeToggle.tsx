import React, { useEffect, useMemo, useState } from 'react';
import { Moon, Sun, Monitor } from 'lucide-react';
import { setTheme as applyTheme } from '../main';

type Mode = 'system' | 'light' | 'dark';

const modes: Mode[] = ['system', 'light', 'dark'];

function getInitial(): Mode {
  const saved = localStorage.getItem('theme') as Mode | null;
  return saved === 'light' || saved === 'dark' || saved === 'system' ? saved : 'system';
}

const ThemeToggle: React.FC<{ compact?: boolean }> = ({ compact }) => {
  const [mode, setMode] = useState<Mode>(getInitial());
  const label = useMemo(() => {
    switch (mode) {
      case 'light':
        return 'Light theme';
      case 'dark':
        return 'Dark theme';
      default:
        return 'System theme';
    }
  }, [mode]);

  useEffect(() => {
    applyTheme(mode);
  }, [mode]);

  const cycle = () => {
    const idx = modes.indexOf(mode);
    const next = modes[(idx + 1) % modes.length];
    setMode(next);
  };

  const Icon = mode === 'light' ? Sun : mode === 'dark' ? Moon : Monitor;

  return (
    <button
      type="button"
      className={`btn ${compact ? 'btn-outline-secondary btn-sm' : 'btn-outline-secondary'} d-inline-flex align-items-center gap-2`}
      onClick={cycle}
      aria-label={`${label}. Click to change theme`}
      title={`${label} (click to change)`}
    >
      <Icon size={16} />
      {!compact && <span className="small">{label}</span>}
    </button>
  );
};

export default ThemeToggle;
