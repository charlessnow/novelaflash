"use client";

import { useEffect } from "react";

export const NavigationRefresh = () => {
  useEffect(() => {
    window.addEventListener("pageshow", (e: PageTransitionEvent) => {
      if (e.persisted) window.location.reload();
    });

    window.addEventListener("popstate", () => {
      window.location.reload();
    });
  }, []);

  return null;
};
