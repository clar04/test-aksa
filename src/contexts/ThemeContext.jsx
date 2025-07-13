import { createContext, useContext, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

// Buat context
const ThemeContext = createContext();

// Provider yang membungkus aplikasi
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useLocalStorage('theme', 'system');

  useEffect(() => {
    const root = document.documentElement;
    const media = window.matchMedia('(prefers-color-scheme: dark)');

    const apply = (mode) => {
      const isDark = mode === 'dark' || (mode === 'system' && media.matches);

      root.classList.remove('dark', 'light');
      root.classList.add(isDark ? 'dark' : 'light');

      if (isDark) {
        root.style.setProperty('--grad-from', '#1e3a8a');
        root.style.setProperty('--grad-to', '#7e22ce');
      } else {
        root.style.setProperty('--grad-from', '#c084fc');
        root.style.setProperty('--grad-to', '#f87171');
      }
    };

    apply(theme);

    const listener = () => theme === 'system' && apply('system');
    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook untuk pakai context
export function useTheme() {
  return useContext(ThemeContext);
}

export default ThemeContext;
