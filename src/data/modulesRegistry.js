import { FEATURES } from "@/lib/featureRegistry";

export const CHALLENGE_CATEGORIES = [
  { id: "ocd", label: "OCD" },
  { id: "anxiety", label: "Anxiety" },
  { id: "depression", label: "Depression" },
  { id: "adhd", label: "ADHD" },
  { id: "panic", label: "Panic" },
  { id: "ptsd", label: "PTSD" },
  { id: "insomnia", label: "Insomnia" },
  { id: "social_anxiety", label: "Social Anxiety" },
];

export const MODULES_REGISTRY = {
  [FEATURES.ADHD_TIMELINE]: {
    id: FEATURES.ADHD_TIMELINE,
    title: "Visual Timeline",
    description: "Organize schedules for better time awareness.",
    icon: "Clock",
    launchRoute: "/adhd/timeline",
    tags: ["time_blindness", "planning"],
  },
  [FEATURES.ADHD_BREAKDOWN]: {
    id: FEATURES.ADHD_BREAKDOWN,
    title: "Task Breakdown",
    description: "Split large tasks into easier guided steps.",
    icon: "Activity",
    launchRoute: "/adhd/breakdown",
    tags: ["overwhelm", "planning", "task_start"],
  },
  [FEATURES.ADHD_FOCUS]: {
    id: FEATURES.ADHD_FOCUS,
    title: "Focus Sessions",
    description: "Use timed focus blocks with reset cues.",
    icon: "Timer",
    launchRoute: "/adhd/focus",
    tags: ["focus", "distraction"],
  },
  [FEATURES.ADHD_SOUNDS]: {
    id: FEATURES.ADHD_SOUNDS,
    title: "Soundscapes",
    description: "Stabilize attention with supportive ambient audio.",
    icon: "Leaf",
    launchRoute: "/adhd/sounds",
    tags: ["focus", "noise_sensitivity", "sleep"],
  },
  [FEATURES.ADHD_EMOTION]: {
    id: FEATURES.ADHD_EMOTION,
    title: "Emotion Coach",
    description: "Regulate emotional spikes with quick prompts.",
    icon: "Brain",
    launchRoute: "/adhd/emotion-coach",
    tags: ["emotion_regulation", "panic", "stress"],
  },
  [FEATURES.ANXIETY]: {
    id: FEATURES.ANXIETY,
    title: "Breathing Guide",
    description: "Calm your body during stress moments.",
    icon: "Leaf",
    launchRoute: "/anxiety",
    tags: ["panic", "stress", "physical_anxiety"],
  },
  [FEATURES.OCD_LOGIC_JOURNAL]: {
    id: FEATURES.OCD_LOGIC_JOURNAL,
    title: "Thought Journal",
    description: "Capture intrusive thoughts and grounding facts.",
    icon: "Brain",
    launchRoute: "/ocd/logic-journal",
    tags: ["intrusive_thoughts", "rumination"],
  },
  [FEATURES.OCD_RITUAL_DELAYER]: {
    id: FEATURES.OCD_RITUAL_DELAYER,
    title: "Compulsion Delay Timer",
    description: "Practice delaying rituals with timed support.",
    icon: "Timer",
    launchRoute: "/ocd/ritual-delayer",
    tags: ["compulsion", "urge_control"],
  },
  [FEATURES.OCD_ERP_TRACKER]: {
    id: FEATURES.OCD_ERP_TRACKER,
    title: "Exposure Tracker",
    description: "Track graduated exposure and progress.",
    icon: "Activity",
    launchRoute: "/ocd/erp-hierarchy",
    tags: ["avoidance", "fear", "exposure"],
  },
  [FEATURES.OCD_HEATMAP]: {
    id: FEATURES.OCD_HEATMAP,
    title: "Trigger Mapping",
    description: "Map when and where urges are strongest.",
    icon: "Clock",
    launchRoute: "/ocd/compulsion-heatmap",
    tags: ["triggers", "compulsion", "patterns"],
  },
  [FEATURES.DEPRESSION]: {
    id: FEATURES.DEPRESSION,
    title: "Mood Check-ins",
    description: "Track mood changes and emotional load.",
    icon: "Activity",
    launchRoute: "/depression",
    tags: ["low_mood", "emotion_regulation"],
  },
  [FEATURES.DYSLEXIA]: {
    id: FEATURES.DYSLEXIA,
    title: "Sleep Wind-down Reader",
    description: "Low-load reading to settle before sleep.",
    icon: "Leaf",
    launchRoute: "/dyslexia",
    tags: ["sleep", "night_rumination"],
  },
  [FEATURES.ASD]: {
    id: FEATURES.ASD,
    title: "Grounding Toolkit",
    description: "Use sensory grounding for overload moments.",
    icon: "Brain",
    launchRoute: "/asd",
    tags: ["panic", "overwhelm", "social_stress"],
  },
  [FEATURES.DYSPRAXIA]: {
    id: FEATURES.DYSPRAXIA,
    title: "Calm Routine Builder",
    description: "Build predictable routines to reduce stress.",
    icon: "Clock",
    launchRoute: "/dyspraxia",
    tags: ["routine", "sleep", "stability"],
  },
  [FEATURES.APD]: {
    id: FEATURES.APD,
    title: "Social Rehearsal",
    description: "Practice communication and conversation cues.",
    icon: "Activity",
    launchRoute: "/apd",
    tags: ["social_stress", "avoidance"],
  },
};

export const CHALLENGE_MODULE_MAP = {
  ocd: [FEATURES.OCD_ERP_TRACKER, FEATURES.OCD_RITUAL_DELAYER, FEATURES.OCD_LOGIC_JOURNAL, FEATURES.OCD_HEATMAP, FEATURES.ANXIETY],
  anxiety: [FEATURES.ANXIETY, FEATURES.ASD, FEATURES.ADHD_EMOTION, FEATURES.OCD_LOGIC_JOURNAL, FEATURES.DEPRESSION],
  depression: [FEATURES.DEPRESSION, FEATURES.ADHD_BREAKDOWN, FEATURES.ADHD_FOCUS, FEATURES.DYSPRAXIA, FEATURES.ANXIETY],
  adhd: [FEATURES.ADHD_TIMELINE, FEATURES.ADHD_BREAKDOWN, FEATURES.ADHD_FOCUS, FEATURES.ADHD_SOUNDS, FEATURES.ADHD_EMOTION],
  panic: [FEATURES.ANXIETY, FEATURES.ASD, FEATURES.ADHD_EMOTION, FEATURES.OCD_RITUAL_DELAYER, FEATURES.DEPRESSION],
  ptsd: [FEATURES.ANXIETY, FEATURES.OCD_LOGIC_JOURNAL, FEATURES.DEPRESSION, FEATURES.ASD, FEATURES.ADHD_EMOTION],
  insomnia: [FEATURES.DYSLEXIA, FEATURES.ADHD_SOUNDS, FEATURES.DYSPRAXIA, FEATURES.ANXIETY, FEATURES.DEPRESSION],
  social_anxiety: [FEATURES.APD, FEATURES.ASD, FEATURES.ANXIETY, FEATURES.OCD_LOGIC_JOURNAL, FEATURES.ADHD_EMOTION],
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
