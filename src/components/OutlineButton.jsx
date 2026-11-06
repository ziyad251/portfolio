// Secondary button: transparent with a solid border. Renders a link when
// `href` is set, otherwise a button.
export const OutlineButton = ({
  children,
  href,
  size = "md",
  className = "",
  ...props
}) => {
  const sizeClasses = {
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-transparent text-text font-medium transition-colors duration-300 hover:border-accent hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
};
