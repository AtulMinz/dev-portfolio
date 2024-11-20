"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div style={{ width: "40px", height: "40px" }} />;
  }

  return (
    <Button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle Theme"
      variant={"ghost"}
      className="w-0 h-0 hover:bg-transparent"
    >
      {resolvedTheme === "dark" ? <Sun /> : <Moon />}
    </Button>
  );
}
