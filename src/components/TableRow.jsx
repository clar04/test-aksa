import { createContext, useContext, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useLocalStorage('theme', 'system');

  useEffect(() => {
    const root = document.documentElement;
    const media = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = (currentTheme) => {
      const isDark = currentTheme === 'dark' || (currentTheme === 'system' && media.matches);
      
      // Remove existing theme classes
      root.classList.remove('dark', 'light');
      
      // Add appropriate theme class
      if (isDark) {
        root.classList.add('dark');
      } else {
        root.classList.add('light');
      }

      // Set CSS custom properties for gradients
      if (isDark) {
        root.style.setProperty('--grad-from', '#1e3a8a'); // indigo-900
        root.style.setProperty('--grad-to', '#7e22ce');   // purple-800
      } else {
        root.style.setProperty('--grad-from', '#c084fc'); // purple-400
        root.style.setProperty('--grad-to', '#f87171');   // red-400
      }
    };

    // Apply theme immediately
    applyTheme(theme);

    // Listen for system theme changes
    const handleSystemThemeChange = () => {
      if (theme === 'system') {
        applyTheme('system');
      }
    };

    media.addEventListener('change', handleSystemThemeChange);

    return () => {
      media.removeEventListener('change', handleSystemThemeChange);
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};