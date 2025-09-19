"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

export default function Live2D() {
  const [loaded, onLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) return;

    if (!window.__live2d_initialization) {
      window.__live2d_initialization = true;
      // @ts-expect-error need to work on configuring this
      window.L2Dwidget?.init({
        model: {
          jsonPath: "/live2d_models/whitecat/whitecat.model.json",
        },
        display: {
          position: "left",
          width: 240,
          height: 240,
          hOffset: -50,
          vOffset: 0,
        },
        mobile: {
          show: false,
          scale: 0.5,
          motion: true,
        },
      });
    }
  }, [loaded]);

  return (
    <>
      <Script
        strategy="afterInteractive" // load after hydration
        src="https://cdn.jsdelivr.net/npm/live2d-widget@3.1.4/lib/L2Dwidget.min.js"
        onLoad={() => {
          console.log("loading");
          onLoaded(true);
        }}
      />
    </>
  );
}
