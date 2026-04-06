type SectionTitleProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export function SectionTitle({ eyebrow, title, subtitle }: SectionTitleProps) {
  return (
    <header className="mb-8 md:mb-10">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-slate-500">
        {eyebrow}
      </p>
      <h2 className="font-heading text-3xl font-semibold leading-tight text-slate-900 md:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 max-w-3xl text-base text-slate-600 md:text-lg">
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}
