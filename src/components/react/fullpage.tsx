"use client";
import * as React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

interface FullpageProps {
  licenseKey: string;
  scrollingSpeed: number;
  children: React.ReactNode;
}

export function FullpageDemo({ licenseKey, scrollingSpeed, children }: FullpageProps) {
  return (
    <ReactFullpage
      licenseKey={licenseKey}
      scrollingSpeed={scrollingSpeed}
      render={({ state, fullpageApi }) => {
        return <ReactFullpage.Wrapper>{children}</ReactFullpage.Wrapper>;
      }}
    />
  );
}