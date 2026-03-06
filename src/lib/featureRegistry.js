/**
 * featureRegistry.js  —  Central authority for feature availability.
 *
 * Rules:
 *  • Every feature MUST appear here.
 *  • "disorders" lists which conditions unlock the feature.
 *  • "modeConfig" (optional) records per-disorder behaviour differences so the
 *    same component can adapt without duplicating features.
 *  • resolveEnabledFeatures() is the ONLY place access decisions are made.
 *    Nothing else may gate features manually.
 */

import { DISORDERS } from "./disorders";

// ─────────────────────────────────────────────
//  Feature keys  (union of all valid strings)
// ─────────────────────────────────────────────
export const FEATURES = /** @type {const} */ ({
  // ── Module roots ─────────────────────────────
  DYSCALCULIA: "dyscalculia",
  ASD:         "asd",

  // ── ASD sub-features ────────────────────────
  ASD_ROUTINE:  "asd.routine",
  ASD_SENSORY:  "asd.sensory",
  ASD_STORIES:  "asd.stories",
  ASD_MELTDOWN: "asd.meltdown",
  ASD_EMOTION:  "asd.emotion",
});

// ─────────────────────────────────────────────
//  Feature registry
//
//  Each entry:
//    label:      Human-readable name (never shown as diagnosis)
//    disorders:  Which conditions unlock this feature
//    modeConfig: (optional) per-disorder behaviour overrides
// ─────────────────────────────────────────────
export const FEATURE_REGISTRY = {
  // ── Module roots ────────────────────────────
  [FEATURES.DYSCALCULIA]: {
    label: "Number Support",
    disorders: [DISORDERS.DYSCALCULIA],
  },
  [FEATURES.ASD]: {
    label: "Sensory & Social",
    disorders: [DISORDERS.ASD],
  },


  // ── ASD sub-features ────────────────────────
  [FEATURES.ASD_ROUTINE]: {
    label: "Routine Visualizer",
    disorders: [DISORDERS.ASD],
  },
  [FEATURES.ASD_SENSORY]: {
    label: "Sensory Regulation",
    disorders: [DISORDERS.ASD],
  },
  [FEATURES.ASD_STORIES]: {
    label: "Social Story Builder",
    disorders: [DISORDERS.ASD],
  },
  [FEATURES.ASD_MELTDOWN]: {
    label: "Meltdown Prevention",
    disorders: [DISORDERS.ASD],
  },
  [FEATURES.ASD_EMOTION]: {
    label: "Emotional Check-in",
    disorders: [DISORDERS.ASD],
  },
};

// ─────────────────────────────────────────────
//  Core algorithm — O(F × D)
//
//  Pure function: no side effects, no imports from
//  React, no context reads.  Safe to call anywhere.
// ─────────────────────────────────────────────

/**
 * Resolve feature access from either explicit module IDs (preferred)
 * or disorder fallback (legacy support).
 *
 * @param {{ disorders?: string[], enabledModules?: string[] } | string[]} input
 * @returns {Set<string>}
 */
export function resolveEnabledFeatures(input) {
  const explicitModules = Array.isArray(input)
    ? []
    : Array.isArray(input?.enabledModules)
    ? input.enabledModules
    : [];

  if (explicitModules.length > 0) {
    const enabled = new Set();
    for (const moduleId of explicitModules) {
      if (FEATURE_REGISTRY[moduleId]) {
        enabled.add(moduleId);
      }
    }
    return enabled;
  }

  const disorders = Array.isArray(input) ? input : input?.disorders ?? [];
  const active = new Set(disorders ?? []);
  const enabled = new Set();

  for (const [key, config] of Object.entries(FEATURE_REGISTRY)) {
    if (config.disorders.some((d) => active.has(d))) {
      enabled.add(key);
    }
  }

  return enabled;
}

/**
 * Return the per-disorder mode config for a given feature + active disorder.
 * Useful inside a component to adapt behaviour without duplicating features.
 *
 * @param {string} featureKey
 * @param {string} disorder
 * @returns {Record<string, unknown> | null}
 */
export function getFeatureModeConfig(featureKey, disorder) {
  return FEATURE_REGISTRY[featureKey]?.modeConfig?.[disorder] ?? null;
}
