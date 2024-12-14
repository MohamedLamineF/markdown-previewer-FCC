import "./App.css";
import { Header } from "./components/Layout/Header";
import { useDarkMode } from "./hooks/useDarkMode";

function App() {
  const { isDark, setIsDark } = useDarkMode();
  return (
    <>
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)]  dark:bg-gray-900 dark:bg-[linear-gradient(to_right,#535377_1px,transparent_1px),linear-gradient(to_bottom,#535377_1px,transparent_1px)] bg-[size:5rem_5rem] [&>div]:absolute [&>div]:inset-0  [&>div]:bg-[radial-gradient(circle_300px_at_50%_500px,#82b5ff,transparent)] dark:[&>div]:bg-[radial-gradient(circle_300px_at_50%_500px,#4f98ff,transparent)]">
            <div></div>
          </div>
          <Header isDark={isDark} onToggleTheme={() => setIsDark(!isDark)} />
        </div>
      </div>
    </>
  );
}

export default App;
