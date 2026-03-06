import { Link } from "react-router-dom";
import { Clock, Timer, Brain, Activity, Leaf } from "lucide-react";

const ICONS = {
  Clock,
  Timer,
  Brain,
  Activity,
  Leaf,
};

export default function ModuleCard({ title, description, icon = "Activity", launchRoute = "/" }) {
  const Icon = ICONS[icon] || Activity;

  return (
    <div className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm transition hover:shadow-[0_10px_30px_rgba(34,197,94,0.18)]">
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
      <Link
        to={launchRoute}
        className="mt-4 inline-flex rounded-lg bg-green-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-green-600"
      >
        Launch Tool →
      </Link>
    </div>
  );
}
