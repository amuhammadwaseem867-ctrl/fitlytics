"use client";

import { useState, useRef } from "react";
import "./WhatsAppButton.css";

export default function WhatsAppButton() {
  const phoneNumber = "923000000000";

  const message = encodeURIComponent(
    "Hi FitLytics! I would like to know more about your training programs."
  );

  const buttonRef = useRef(null);

  const [position, setPosition] = useState({
    right: 24,
    bottom: 24,
  });

  const dragging = useRef(false);
  const start = useRef({
    x: 0,
    y: 0,
    right: 24,
    bottom: 24,
  });

  const handlePointerDown = (e) => {
    dragging.current = true;

    buttonRef.current?.setPointerCapture(e.pointerId);

    start.current = {
      x: e.clientX,
      y: e.clientY,
      right: position.right,
      bottom: position.bottom,
    };
  };

  const handlePointerMove = (e) => {
    if (!dragging.current) return;

    const deltaX = e.clientX - start.current.x;
    const deltaY = e.clientY - start.current.y;

    const newRight = Math.max(
      5,
      Math.min(window.innerWidth - 50, start.current.right - deltaX)
    );

    const newBottom = Math.max(
      5,
      Math.min(window.innerHeight - 50, start.current.bottom - deltaY)
    );

    setPosition({
      right: newRight,
      bottom: newBottom,
    });
  };

  const handlePointerUp = () => {
    dragging.current = false;
  };

  const handleClick = (e) => {
    if (
      Math.abs(e.clientX - start.current.x) > 5 ||
      Math.abs(e.clientY - start.current.y) > 5
    ) {
      e.preventDefault();
    }
  };

  return (
    <a
      ref={buttonRef}
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Contact us on WhatsApp"
      style={{
        right: `${position.right}px`,
        bottom: `${position.bottom}px`,
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onClick={handleClick}
    >
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.52 0 .18 5.34.18 11.9c0 2.1.55 4.15 1.59 5.95L.1 24l6.29-1.65a11.9 11.9 0 0 0 5.69 1.45h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.47-8.42ZM12.09 21.8a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.73.98.99-3.64-.23-.37a9.88 9.88 0 0 1-1.52-5.28c0-5.46 4.45-9.9 9.91-9.9 2.64 0 5.13 1.03 7 2.9a9.85 9.85 0 0 1 2.9 7c0 5.46-4.45 9.9-9.91 9.9Zm5.43-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.09 4.49.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z"
          fill="currentColor"
        />
      </svg>
    </a>
  );
}