"use client";

import { useEffect } from "react";

export function AccessibilityButton() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
    script.onload = () => {
      new window.VLibras.Widget("https://vlibras.gov.br/app");
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="enabled" data-vw>
      <div className="active" data-vw-access-button></div>
      <div data-vw-plugin-wrapper>
        <div className="vw-plugin-top-wrapper"></div>
      </div>
    </div>
  );
}
