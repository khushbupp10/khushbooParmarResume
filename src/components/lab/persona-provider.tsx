"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import type { PersonaMode } from "@/types/persona";

interface PersonaContextValue {
  persona: PersonaMode;
  setPersona: (mode: PersonaMode) => void;
  resetPersona: () => void;
}

const PersonaContext = createContext<PersonaContextValue | null>(null);

export function PersonaProvider({ children }: { children: React.ReactNode }) {
  const [persona, setPersonaState] = useState<PersonaMode>("default");

  useEffect(() => {
    const root = document.documentElement;
    if (persona === "default") {
      root.removeAttribute("data-persona");
    } else {
      root.setAttribute("data-persona", persona);
    }
  }, [persona]);

  const setPersona = useCallback((mode: PersonaMode) => setPersonaState(mode), []);
  const resetPersona = useCallback(() => setPersonaState("default"), []);

  return (
    <PersonaContext.Provider value={{ persona, setPersona, resetPersona }}>
      {children}
    </PersonaContext.Provider>
  );
}

export function usePersona() {
  const ctx = useContext(PersonaContext);
  if (!ctx) throw new Error("usePersona must be used within PersonaProvider");
  return ctx;
}
