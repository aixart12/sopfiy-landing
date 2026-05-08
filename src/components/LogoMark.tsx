type LogoMarkProps = {
  variant?: "default" | "lg" | "menu" | "footer";
};

const variantClass: Record<NonNullable<LogoMarkProps["variant"]>, string> = {
  default: "block h-8 max-h-8 w-auto max-w-[min(11rem,55vw)] object-contain object-left shrink-0",
  lg:      "block h-9 max-h-9 w-auto max-w-[min(12rem,60vw)] object-contain object-left shrink-0",
  menu:    "block h-10 max-h-10 w-auto max-w-[min(13rem,85vw)] object-contain object-left shrink-0",
  footer:  "block h-7 max-h-7 w-auto max-w-[10rem] object-contain object-left shrink-0",
};

export function LogoMark({ variant = "default" }: LogoMarkProps) {
  return (
    <img
      src="/sopsage-logo.png"
      alt="SOPSAGE"
      className={variantClass[variant]}
      decoding="async"
    />
  );
}
