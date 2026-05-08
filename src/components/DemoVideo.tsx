import { useEffect, useRef, useState } from "react";

const DEMO_SRC   = `${import.meta.env.BASE_URL}demo.mp4`;
const POSTER_SRC = `${import.meta.env.BASE_URL}demo-poster.jpg`;
const PLAYBACK_RATE = 1.5;

export function DemoVideo() {
  const sectionRef = useRef<HTMLElement>(null);
  const [showFallback, setShowFallback] = useState(false);
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadVideo(true);
          obs.disconnect();
        }
      },
      { rootMargin: "240px 0px", threshold: 0.01 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="demo"
      className="demo py-16 lg:py-20"
      data-animate-section
      aria-labelledby="demo-heading"
    >
      <div className="container-wide">
        {/* Header */}
        <header className="demo-header text-center max-w-[40rem] mx-auto mb-10">
          <p className="section-eyebrow">Product tour</p>
          <h2 id="demo-heading" className="font-bold tracking-[-0.03em] text-foreground mb-3"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>
            From first draft to approved, published SOP
          </h2>
          <p className="text-base text-body leading-relaxed">
            The same flows as production: editor, Ask AI, collaboration, and export —
            the path your team already follows inside Sopsage.
          </p>
        </header>

        {/* Video */}
        <div className="video-window relative w-full py-6 lg:py-8" aria-label="Product demo video">
          {/* Indigo glow */}
          <div
            className="video-window-glow absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1240px] aspect-video rounded-[1.375rem] pointer-events-none z-0"
            style={{
              background: "radial-gradient(ellipse 75% 80% at 50% 45%, hsl(238 62% 58% / 0.45) 0%, hsl(238 55% 48% / 0.20) 42%, transparent 68%)",
              filter: "blur(44px)",
              opacity: 0.9,
            }}
            aria-hidden
          />

          {/* Frame */}
          <div
            className="relative z-10 w-full rounded-[1.25rem] overflow-hidden bg-dark aspect-video border border-[hsl(238_20%_86%/0.65)]"
            style={{
              boxShadow:
                "0 0 0 1px hsl(0 0% 100% / 0.06) inset, 0 12px 40px -8px hsl(238 55% 7% / 0.12), 0 28px 80px -20px hsl(238 62% 48% / 0.38), 0 0 100px -12px hsl(38 94% 50% / 0.18)",
            }}
          >
            {!showFallback && (
              <video
                autoPlay={loadVideo}
                muted
                playsInline
                loop
                controls
                preload="none"
                poster={POSTER_SRC}
                className="w-full h-full object-cover block"
                onLoadedMetadata={(e) => {
                  e.currentTarget.playbackRate = PLAYBACK_RATE;
                  void e.currentTarget.play().catch(() => {});
                }}
                onError={() => setShowFallback(true)}
              >
                {loadVideo ? <source src={DEMO_SRC} type="video/mp4" /> : null}
              </video>
            )}

            {showFallback && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center bg-gradient-to-br from-[hsl(238_55%_12%)] to-dark text-white/88">
                <p className="text-base font-semibold">Add your product video</p>
                <p className="opacity-88 max-w-[26rem] leading-[1.55] text-[0.9rem]">
                  Save your recording as{" "}
                  <kbd className="font-mono text-xs px-2 py-0.5 rounded bg-white/8 border border-white/12">demo.mp4</kbd>
                  {" "}in the{" "}
                  <kbd className="font-mono text-xs px-2 py-0.5 rounded bg-white/8 border border-white/12">public</kbd>
                  {" "}folder, then rebuild.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
