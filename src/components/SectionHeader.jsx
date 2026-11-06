// Shared heading block so every section uses the same sizes and spacing.
export const SectionHeader = ({
  eyebrow,
  title,
  accent,
  intro,
  center = false,
  className = "mb-8 md:mb-10",
}) => {
  return (
    <div
      className={`max-w-2xl ${className} ${center ? "mx-auto text-center" : ""}`}
    >
      <span className="eyebrow animate-fade-in">{eyebrow}</span>
      <h2 className="text-3xl md:text-4xl font-bold mt-2 tracking-tight text-balance text-text animate-fade-in animation-delay-100">
        {title}
        {accent && (
          <span className="font-serif italic font-normal">
            {" "}
            {accent}
          </span>
        )}
      </h2>
      {intro && (
        <p className="mt-3 text-muted leading-relaxed animate-fade-in animation-delay-200">
          {intro}
        </p>
      )}
    </div>
  );
};
