import { createContext, useContext, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useLocalStorage('theme', 'system');

  useEffect(() => {
    const root = document.documentElement;
    const media = window.matchMedia('(prefers-color-scheme: dark)');

    const apply = (mode) => {
      const isDark = mode === 'dark' || (mode === 'system' && media.matches);
      root.classList.remove('dark', 'light'); // optional cleanup
      root.classList.add(isDark ? 'dark' : 'light');
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

export const useTheme = () => useContext(ThemeContext);
