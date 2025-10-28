import React, { useEffect, useState } from "react";
import polityka from "../documents/Politykaprywatnosci.pdf";
import { Link } from "react-router-dom";

const defaultSettings = {
  necessary: true,
  preferences: false,
  statistics: false,
  marketing: false,
};

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [tab, setTab] = useState("zgoda");
  const [settings, setSettings] = useState(defaultSettings);

  useEffect(() => {
    const saved = localStorage.getItem("cookieSettings");
    if (!saved) setVisible(true);
  }, []);

  const saveSettings = (newSettings) => {
    localStorage.setItem("cookieSettings", JSON.stringify(newSettings));
    setVisible(false);
  };

  const handleToggle = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-container">
        <div className="cookie-tabs">
          <button
            className={`cookie-tab ${tab === "zgoda" ? "active" : ""}`}
            onClick={() => setTab("zgoda")}
          >
            Zgoda
          </button>
          <button
            className={`cookie-tab ${tab === "szczegoly" ? "active" : ""}`}
            onClick={() => setTab("szczegoly")}
          >
            Szczegóły
          </button>
          <button
            className={`cookie-tab ${tab === "cookies" ? "active" : ""}`}
            onClick={() => setTab("cookies")}
          >
            O plikach cookies
          </button>
        </div>

        {tab === "zgoda" && (
          <div className="cookie-content">
            <p>
              Niniejsza strona korzysta z plików cookie w celu poprawy
              doświadczeń użytkownika oraz analizy ruchu. Więcej informacji
              znajdziesz w naszej{" "}
              <Link
                to={polityka}
                download="Regulamin nbt-estetyka"
                target="_blank"
                rel="noopener noreferrer"
              >
                Polityce Prywatności
              </Link>
            </p>

            <div className="cookie-grid">
              {Object.entries(settings).map(([key, value]) => (
                <div key={key} className="cookie-option">
                  <span>
                    {key === "necessary"
                      ? "Niezbędne"
                      : key.charAt(0).toUpperCase() + key.slice(1)}
                  </span>
                  <label className="cookie-switch">
                    <input
                      type="checkbox"
                      checked={value}
                      disabled={key === "necessary"}
                      onChange={() => handleToggle(key)}
                    />
                    <span className="slider"></span>
                  </label>
                </div>
              ))}
            </div>

            <div className="cookie-buttons">
              <button
                className="btn-outline"
                onClick={() => saveSettings(defaultSettings)}
              >
                Odrzuć wszystkie
              </button>
              <button
                className="btn-outline"
                onClick={() => saveSettings(settings)}
              >
                Zezwól na wybór
              </button>
              <button
                className="btn-solid"
                onClick={() =>
                  saveSettings({
                    necessary: true,
                    preferences: true,
                    statistics: true,
                    marketing: true,
                  })
                }
              >
                Zezwól na wszystkie
              </button>
            </div>
          </div>
        )}

        {tab === "szczegoly" && (
          <div className="cookie-content">
            <p>
              Szczegółowe informacje o kategoriach plików cookie oraz ich
              zastosowaniu znajdziesz w polityce prywatności.
            </p>
          </div>
        )}

        {tab === "cookies" && (
          <div className="cookie-content">
            <p>
              Pliki cookies to małe pliki tekstowe zapisywane na Twoim
              urządzeniu, które pomagają w prawidłowym działaniu strony oraz
              analizie ruchu.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieConsent;
