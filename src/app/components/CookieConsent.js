"use client"; // Marca para garantir que o componente use renderização no cliente
import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowBanner(false);
  };

  return (
    showBanner && (
      <div className="cookie-banner">
        <p>
          Este site utiliza cookies para melhorar sua experiência. Ao continuar
          navegando, você concorda com o uso de cookies.
        </p>
        <button onClick={handleAccept}>Aceitar</button>
      </div>
    )
  );
}