export default function SectionContainer({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={`relative min-h-96 py-24 px-4 md:px-6 ${className}`}>
      {children}
    </section>
  );
}
