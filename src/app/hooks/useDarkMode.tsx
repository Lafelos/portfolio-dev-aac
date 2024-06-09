import { useEffect, useState } from 'react';

const useDarkMode = () => {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialTheme = localStorage.getItem('theme');
    if (initialTheme) {
      root.classList.add(initialTheme);
      setTheme(initialTheme);
    } else {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.add(systemTheme);
      setTheme(systemTheme);
    }
  }, []);

  const toggleTheme = () => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.replace('dark', 'light');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      root.classList.replace('light', 'dark');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  };

  return [theme, toggleTheme] as const;
};

export default useDarkMode;
