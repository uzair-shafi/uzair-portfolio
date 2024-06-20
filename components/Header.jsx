"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { colors, fonts, items } from "@/main.config";
import ScreenSizr from "@sdevs/screen-sizr";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const screensize = ScreenSizr.getScreenSize();

  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
    bottom: -3,
  });
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [settingsColorsOpen, setSettingsColorsOpen] = useState(false);
  const [settingsFontsOpen, setSettingsFontsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("Blue");
  const [currentFont, setCurrentFont] = useState("inter");
  const [socialsOpen, setSocialsOpen] = useState(false);
  const [currentScreen, setCurrentScreen] = useState("laptop");
  const navItemRefs = useRef([]);

  

  useEffect(() => {
    if (typeof window !== "undefined") {
      const theme = window.localStorage.getItem("theme");
      const font = window.localStorage.getItem("font");
      if (theme) {
        const filteredTheme = theme.charAt(0).toUpperCase() + theme.slice(1);
        setCurrentTheme(filteredTheme);
      }
      if (font) {
        setCurrentFont(font);
      }
    }
  }, []);

  

  return (
    <>
      <header className="fixed top-0 z-50 flex w-full flex-row items-center justify-between bg-neutral-900 px-8 py-4 backdrop-blur-lg backdrop-filter lg:px-32">
        
          <div
            className="flex cursor-pointer flex-row gap-4 transition-opacity duration-300 ease-in-out hover:opacity-80"
            onClick={() => router.push("/")}
          >
            <h1 className="text-2xl font-bold">
              Uzair Shafi<span className="text-primary-500">.</span>
            </h1>
          </div>
        
        <div className="relative hidden flex-row items-center justify-center gap-4 lg:flex">
         
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
          <div className="relative">
            <button
              className={`flex items-center justify-center rounded-lg bg-transparent px-3 py-3 font-bold transition-colors hover:bg-white/5 ${settingsOpen ? "text-primary-500 bg-white/5" : "text-white"}`}
            >
            <a
            href="https://github.com/uzair-shafi"
            className="flex w-full items-center justify-start  rounded-lg "
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
        </svg>
            
          </a>
            </button>
            
          </div>
          <a
          href="https://www.linkedin.com/in/uzair-shafi/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary-500 hover:bg-primary-600 hidden items-center justify-center rounded-lg px-6 py-2 font-bold text-white shadow-lg transition-colors lg:flex"
        >
          LinkedIn
        </a>
        </div>
      </header>
    </>
  );
}
