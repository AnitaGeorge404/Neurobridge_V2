import { useMemo } from "react";
import { useAuth } from "@/context/AuthContext";
import ModuleCard from "@/components/ModuleCard";
import { MODULES_REGISTRY } from "@/data/modulesRegistry";

export default function Home() {
  const { user, enabledModules } = useAuth();

  const modules = useMemo(
    () => (enabledModules || []).map((moduleId) => MODULES_REGISTRY[moduleId]).filter(Boolean),
    [enabledModules],
  );

  return (
    <div className="min-h-screen bg-[#f8fafc] px-4 py-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Welcome back{user?.name ? `, ${user.name}` : ""} 👋</h1>
          <p className="mt-2 text-slate-600">Your personalized support tools are ready.</p>
        </header>

        {modules.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <p className="text-sm text-slate-600">No tools enabled yet. Complete onboarding to build your toolkit.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((module) => (
              <ModuleCard
                key={module.id}
                title={module.title}
                description={module.description}
                icon={module.icon}
                launchRoute={module.launchRoute}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
