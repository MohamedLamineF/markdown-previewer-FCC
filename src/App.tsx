import { useState } from "react";
import "./App.css";
import { Header } from "./components/Layout/Header";
import { useDarkMode } from "./hooks/useDarkMode";
import { Editor } from "./components/Editor";
import { Preview } from "./components/Preview";
import { defaultMarkdown } from "./utils/defaultMarkdow";
import { Footer } from "./components/Layout/Footer";

function App() {
  const { isDark, setIsDark } = useDarkMode();
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  return (
    <>
      <div className="relative min-h-screen">
        <div className="absolute inset-0">
          <div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)]  dark:bg-gray-900 dark:bg-[linear-gradient(to_right,#535377_1px,transparent_1px),linear-gradient(to_bottom,#535377_1px,transparent_1px)] bg-[size:5rem_5rem] [&>div]:absolute [&>div]:inset-0  [&>div]:bg-[radial-gradient(circle_300px_at_50%_500px,#82b5ff,transparent)] dark:[&>div]:bg-[radial-gradient(circle_300px_at_50%_500px,#4f98ff,transparent)]">
            <div></div>
          </div>
          <Header isDark={isDark} onToggleTheme={() => setIsDark(!isDark)} />
          <main className="container mx-auto px-4 py-8 mb-28">
            <div className="grid md:grid-cols-2 gap-6 min-h-[calc(100vh-16rem)]">
              <Editor value={markdown} onChange={setMarkdown} />
              <Preview markdown={markdown} />
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
