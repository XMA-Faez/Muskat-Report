"use client";

import * as React from "react";
import { createContext, useContext, useState } from "react";

type TooltipProps = {
  children: React.ReactNode;
  content: React.ReactNode;
};

const TooltipContext = createContext<{
  showTooltip: (content: React.ReactNode) => void;
  hideTooltip: () => void;
}>({
  showTooltip: () => {},
  hideTooltip: () => {},
});

export const TooltipProvider = ({ children }: { children: React.ReactNode }) => {
  const [tooltip, setTooltip] = useState<{
    visible: boolean;
    content: React.ReactNode;
    x: number;
    y: number;
  }>({
    visible: false,
    content: null,
    x: 0,
    y: 0,
  });

  const showTooltip = (content: React.ReactNode) => {
    setTooltip((prev) => ({ ...prev, visible: true, content }));
  };

  const hideTooltip = () => {
    setTooltip((prev) => ({ ...prev, visible: false }));
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    setTooltip((prev) => ({ ...prev, x: e.clientX + 10, y: e.clientY + 10 }));
  };

  return (
    <TooltipContext.Provider value={{ showTooltip, hideTooltip }}>
      <div onMouseMove={handleMouseMove}>
        {children}
        {tooltip.visible && (
          <div
            className="absolute bg-gray-800 text-white p-2 rounded shadow-lg z-50 max-w-xs"
            style={{ left: tooltip.x, top: tooltip.y }}
          >
            {tooltip.content}
          </div>
        )}
      </div>
    </TooltipContext.Provider>
  );
};

export const Tooltip = ({ children, content }: TooltipProps) => {
  const { showTooltip, hideTooltip } = useContext(TooltipContext);

  return (
    <div
      onMouseEnter={() => showTooltip(content)}
      onMouseLeave={() => hideTooltip()}
    >
      {children}
    </div>
  );
};