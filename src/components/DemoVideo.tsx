import { useState } from "react";

const DEMO_SRC = `${import.meta.env.BASE_URL}demo.mp4`;
const PLAYBACK_RATE = 1.5;

export function DemoVideo() {
  const [showFallback, setShowFallback] = useState(false);

  return (
    <section
      id="demo"
      className="demo"
      data-animate-section
      aria-labelledby="demo-heading"
    >
      <div className="container container--demo-wide">
        <header className="demo-header">
          <p className="section-eyebrow">Product tour</p>
          <h2 id="demo-heading" className="demo-title">
            From first draft to approved, published SOP
          </h2>
          <p className="demo-sub">
            The same flows as production: editor, Ask AI, collaboration, and
            export — the path your team already follows inside SOPify.ai.
          </p>
        </header>
        <div className="video-window" aria-label="Product demo video">
          <div className="video-window-glow" aria-hidden />
          <div className="video-frame">
            {!showFallback ? (
              <video
                autoPlay
                muted
                playsInline
                loop
                controls
                preload="auto"
                onLoadedMetadata={(e) => {
                  e.currentTarget.playbackRate = PLAYBACK_RATE;
                }}
                onError={() => setShowFallback(true)}
              >
                <source src={DEMO_SRC} type="video/mp4" />
              </video>
            ) : null}
            {showFallback ? (
              <div className="video-placeholder">
                <p style={{ fontSize: "1rem", fontWeight: 600 }}>
                  Add your product video
                </p>
                <p
                  style={{
                    opacity: 0.88,
                    maxWidth: "26rem",
                    lineHeight: 1.55,
                    fontSize: "0.9rem",
                  }}
                >
                  Save your recording as <kbd>demo.mp4</kbd> in the{" "}
                  <kbd>public</kbd> folder, then rebuild. Optional: add{" "}
                  <kbd>demo-poster.jpg</kbd> and a{" "}
                  <code style={{ fontSize: "0.85em" }}>poster</code> attribute
                  on the{" "}
                  <code style={{ fontSize: "0.85em" }}>&lt;video&gt;</code>{" "}
                  element.
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
