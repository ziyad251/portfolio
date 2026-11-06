// Primary button: solid vermilion with white text (5.1:1 contrast).
// Hover keeps the solid colour (a faded hover would drop contrast below AA).
export const Button = ({
  className = "",
  size = "default",
  children,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium bg-accent text-on-accent shadow-[var(--shadow-card)] transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
