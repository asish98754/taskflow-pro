export default function PageHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8 rounded-4xl border border-slate-800 bg-slate-900/90 p-6 text-white">
      <h1 className="text-3xl font-semibold">{title}</h1>
      {description ? <p className="mt-3 text-slate-400">{description}</p> : null}
    </div>
  );
}
