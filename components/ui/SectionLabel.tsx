export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-dm-mono text-xs text-muted uppercase tracking-widest">
      {children}
    </p>
  );
}
