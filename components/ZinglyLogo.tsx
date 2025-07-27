import React from "react";

interface ZinglyLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function ZinglyLogo({
  size = "md",
  className = "",
}: ZinglyLogoProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  return (
    <div className={`${sizeClasses[size]} ${className} relative`}>
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Magical sparkle background */}
        <defs>
          <radialGradient id="sparkleGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFD700" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#FF6B9D" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.4" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Main Z shape with magical effects */}
        <path
          d="M8 8 L20 8 L8 20 L20 20 L8 32 L20 32 L32 32 L20 20 L32 20 L20 8 L32 8"
          stroke="url(#sparkleGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          filter="url(#glow)"
          className="animate-pulse"
        />

        {/* Floating sparkles */}
        <circle
          cx="12"
          cy="12"
          r="1.5"
          fill="#FFD700"
          className="animate-bounce"
        >
          <animate
            attributeName="opacity"
            values="1;0.3;1"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          cx="36"
          cy="36"
          r="1.5"
          fill="#FF6B9D"
          className="animate-bounce"
          style={{ animationDelay: "0.5s" }}
        >
          <animate
            attributeName="opacity"
            values="1;0.3;1"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          cx="36"
          cy="12"
          r="1"
          fill="#4F46E5"
          className="animate-bounce"
          style={{ animationDelay: "1s" }}
        >
          <animate
            attributeName="opacity"
            values="1;0.3;1"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          cx="12"
          cy="36"
          r="1"
          fill="#FFD700"
          className="animate-bounce"
          style={{ animationDelay: "1.5s" }}
        >
          <animate
            attributeName="opacity"
            values="1;0.3;1"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Magical trail effect */}
        <path
          d="M24 24 L28 28 L32 24"
          stroke="#FFD700"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.6"
          className="animate-pulse"
        />
      </svg>
    </div>
  );
}
