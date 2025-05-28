"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

export type Language = "pt" | "en"

interface LanguageStore {
  language: Language
  setLanguage: (language: Language) => void
}

export const useLanguage = create<LanguageStore>()(
  persist(
    (set) => ({
      language: "pt",
      setLanguage: (language) => set({ language }),
    }),
    {
      name: "triangle-media-language",
    },
  ),
)
