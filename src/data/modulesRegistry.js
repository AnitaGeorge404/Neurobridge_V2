import { FEATURES } from "@/lib/featureRegistry";

export const CHALLENGE_CATEGORIES = [
  { id: "asd",         label: "Sensory & Social", emoji: "🌿" },
  { id: "dyscalculia", label: "Numbers & Maths",  emoji: "🔢" },
];

export const MODULES_REGISTRY = {
  // ── Number Confidence Builder ──────────────────────────────────
  [FEATURES.DYSCALCULIA]: {
    id: FEATURES.DYSCALCULIA,
    title: "Number Confidence Builder",
    description: "Use step-by-step numeric support for daily tasks.",
    icon: "Activity",
    launchRoute: "/dyscalculia",
    tags: ["number_confusion", "step_support", "working_memory"],
  },

  // ── ASD sub-features ──────────────────────────────────────────
  [FEATURES.ASD_ROUTINE]: {
    id: FEATURES.ASD_ROUTINE,
    title: "Routine Visualizer",
    description: "Build and track daily routines with visual timeline support.",
    icon: "Clock",
    launchRoute: "/asd/routine",
    tags: ["routine", "stability"],
  },
  [FEATURES.ASD_SENSORY]: {
    id: FEATURES.ASD_SENSORY,
    title: "Sensory Regulation",
    description: "Tune sensory thresholds and access calming tools.",
    icon: "Activity",
    launchRoute: "/asd/sensory",
    tags: ["sensory_overload", "overwhelm"],
  },
  [FEATURES.ASD_STORIES]: {
    id: FEATURES.ASD_STORIES,
    title: "Social Story Builder",
    description: "Practice social scenarios with visual story cards.",
    icon: "BookOpen",
    launchRoute: "/asd/stories",
    tags: ["social_stress", "communication"],
  },
  [FEATURES.ASD_MELTDOWN]: {
    id: FEATURES.ASD_MELTDOWN,
    title: "Meltdown Prevention",
    description: "Risk awareness and calming workflow for overload moments.",
    icon: "Shield",
    launchRoute: "/asd/meltdown",
    tags: ["panic", "overwhelm"],
  },
  [FEATURES.ASD_EMOTION]: {
    id: FEATURES.ASD_EMOTION,
    title: "Emotional Check-in",
    description: "Tap emotion cards to hear support guidance aloud.",
    icon: "Smile",
    launchRoute: "/asd/emotion",
    tags: ["emotion_regulation", "social_stress"],
  },
};

export const CHALLENGE_MODULE_MAP = {
  asd: [
    FEATURES.ASD_ROUTINE,
    FEATURES.ASD_SENSORY,
    FEATURES.ASD_STORIES,
    FEATURES.ASD_MELTDOWN,
    FEATURES.ASD_EMOTION,
  ],
  dyscalculia: [FEATURES.DYSCALCULIA],
};

export function getModulesForChallenges(challengeIds = []) {
  const moduleIds = new Set();
  for (const challengeId of challengeIds) {
    for (const moduleId of CHALLENGE_MODULE_MAP[challengeId] || []) {
      moduleIds.add(moduleId);
    }
  }

  if (moduleIds.size === 0) {
    Object.keys(MODULES_REGISTRY).forEach((moduleId) => moduleIds.add(moduleId));
  }

  return [...moduleIds].map((moduleId) => MODULES_REGISTRY[moduleId]).filter(Boolean);
}
