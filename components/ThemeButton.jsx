export default function ThemeButton({ setDark, isDark }) {
  const toggleTheme = () => setDark(!isDark);

  return (
    <div>
      <button onClick={toggleTheme}>Theme</button>
    </div>
  );
}
