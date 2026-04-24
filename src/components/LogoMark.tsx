type LogoMarkProps = {
  /** Preset height for header / footer / mobile sheet */
  variant?: "default" | "lg" | "menu" | "footer";
};

const variantClass: Record<NonNullable<LogoMarkProps["variant"]>, string> = {
  default: "logo-mark",
  lg: "logo-mark logo-mark--lg",
  menu: "logo-mark logo-mark--menu",
  footer: "logo-mark logo-mark--footer",
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
