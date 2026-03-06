import { FEATURES } from "@/lib/featureRegistry";

export const QUESTIONS_REGISTRY = {
  ocd: [
    {
      id: "ocd_urge_repeat",
      question: "Do you feel a strong urge to repeat actions until they feel right?",
      options: [
        {
          text: "Often",
          tags: ["compulsion", "urge_control"],
          moduleBoosts: [FEATURES.OCD_RITUAL_DELAYER, FEATURES.OCD_HEATMAP],
        },
        {
          text: "Sometimes",
          tags: ["compulsion"],
          moduleBoosts: [FEATURES.OCD_RITUAL_DELAYER],
        },
        { text: "Rarely", tags: [] },
      ],
    },
    {
      id: "ocd_avoidance",
      question: "Do you avoid places or situations because of fear of discomfort?",
      options: [
        {
          text: "Often",
          tags: ["avoidance", "fear", "exposure"],
          moduleBoosts: [FEATURES.OCD_ERP_TRACKER, FEATURES.ANXIETY],
        },
        {
          text: "Sometimes",
          tags: ["avoidance"],
          moduleBoosts: [FEATURES.OCD_ERP_TRACKER],
        },
        { text: "Rarely", tags: [] },
      ],
    },
  ],
  asd: [
    {
      id: "asd_overload",
      question: "Do sensory-heavy environments (noise, lights, crowding) quickly become overwhelming?",
      options: [
        {
          text: "Often",
          tags: ["overwhelm", "sensory_overload", "panic"],
          moduleBoosts: [FEATURES.ASD, FEATURES.ANXIETY],
        },
        {
          text: "Sometimes",
          tags: ["sensory_overload"],
          moduleBoosts: [FEATURES.ASD],
        },
        { text: "Rarely", tags: [] },
      ],
    },
    {
      id: "asd_social_decode",
      question: "Would structured social guidance help with uncertain interactions?",
      options: [
        {
          text: "Yes",
          tags: ["social_stress", "planning"],
          moduleBoosts: [FEATURES.APD, FEATURES.ASD],
        },
        {
          text: "Sometimes",
          tags: ["social_stress"],
          moduleBoosts: [FEATURES.APD],
        },
        { text: "No", tags: [] },
      ],
    },
  ],
  dyslexia: [
    {
      id: "dyslexia_reading_load",
      question: "Does dense reading cause fast fatigue or loss of focus?",
      options: [
        {
          text: "Often",
          tags: ["reading_fatigue", "focus"],
          moduleBoosts: [FEATURES.DYSLEXIA, FEATURES.ADHD_FOCUS],
        },
        {
          text: "Sometimes",
          tags: ["reading_fatigue"],
          moduleBoosts: [FEATURES.DYSLEXIA],
        },
        { text: "Rarely", tags: [] },
      ],
    },
    {
      id: "dyslexia_night_reading",
      question: "Do calmer reading and audio support help you settle at night?",
      options: [
        {
          text: "Yes",
          tags: ["sleep", "night_rumination"],
          moduleBoosts: [FEATURES.DYSLEXIA, FEATURES.ADHD_SOUNDS],
        },
        {
          text: "Maybe",
          tags: ["sleep"],
          moduleBoosts: [FEATURES.ADHD_SOUNDS],
        },
        { text: "No", tags: [] },
      ],
    },
  ],
  dyscalculia: [
    {
      id: "dyscalculia_steps",
      question: "Do multi-step number tasks become confusing without clear structure?",
      options: [
        {
          text: "Often",
          tags: ["number_confusion", "step_support"],
          moduleBoosts: [FEATURES.DYSCALCULIA, FEATURES.ADHD_BREAKDOWN],
        },
        {
          text: "Sometimes",
          tags: ["step_support"],
          moduleBoosts: [FEATURES.DYSCALCULIA],
        },
        { text: "Rarely", tags: [] },
      ],
    },
    {
      id: "dyscalculia_timing",
      question: "Would visual pacing and timelines improve confidence for number-heavy routines?",
      options: [
        {
          text: "Yes",
          tags: ["working_memory", "planning"],
          moduleBoosts: [FEATURES.ADHD_TIMELINE, FEATURES.DYSCALCULIA],
        },
        {
          text: "Maybe",
          tags: ["planning"],
          moduleBoosts: [FEATURES.ADHD_TIMELINE],
        },
        { text: "No", tags: [] },
      ],
    },
  ],
  dyspraxia: [
    {
      id: "dyspraxia_sequence",
      question: "Do movement or daily routines feel easier with step-by-step sequencing?",
      options: [
        {
          text: "Often",
          tags: ["routine", "planning", "step_support"],
          moduleBoosts: [FEATURES.DYSPRAXIA, FEATURES.ADHD_BREAKDOWN],
        },
        {
          text: "Sometimes",
          tags: ["routine"],
          moduleBoosts: [FEATURES.DYSPRAXIA],
        },
        { text: "Rarely", tags: [] },
      ],
    },
    {
      id: "dyspraxia_stress",
      question: "Do coordination-heavy situations increase stress levels quickly?",
      options: [
        {
          text: "Often",
          tags: ["stress", "overwhelm"],
          moduleBoosts: [FEATURES.ANXIETY, FEATURES.DYSPRAXIA],
        },
        {
          text: "Sometimes",
          tags: ["stress"],
          moduleBoosts: [FEATURES.ANXIETY],
        },
        { text: "Rarely", tags: [] },
      ],
    },
  ],
  anxiety: [
    {
      id: "anx_physical",
      question: "Do physical stress signs (heart racing, chest tightness) make it hard to function?",
      options: [
        {
          text: "Often",
          tags: ["physical_anxiety", "panic"],
          moduleBoosts: [FEATURES.ANXIETY, FEATURES.ADHD_EMOTION],
        },
        {
          text: "Sometimes",
          tags: ["stress"],
          moduleBoosts: [FEATURES.ANXIETY],
        },
        { text: "Rarely", tags: [] },
      ],
    },
    {
      id: "anx_rumination",
      question: "Do worry loops or intrusive thoughts continue for long periods?",
      options: [
        {
          text: "Often",
          tags: ["rumination", "intrusive_thoughts"],
          moduleBoosts: [FEATURES.OCD_LOGIC_JOURNAL, FEATURES.DEPRESSION],
        },
        {
          text: "Sometimes",
          tags: ["rumination"],
          moduleBoosts: [FEATURES.OCD_LOGIC_JOURNAL],
        },
        { text: "Rarely", tags: [] },
      ],
    },
  ],
  depression: [
    {
      id: "dep_low_mood",
      question: "Do low mood periods reduce your motivation to start daily tasks?",
      options: [
        {
          text: "Often",
          tags: ["low_mood", "task_start"],
          moduleBoosts: [FEATURES.DEPRESSION, FEATURES.ADHD_BREAKDOWN],
        },
        {
          text: "Sometimes",
          tags: ["low_mood"],
          moduleBoosts: [FEATURES.DEPRESSION],
        },
        { text: "Rarely", tags: [] },
      ],
    },
    {
      id: "dep_energy",
      question: "Do you feel mentally exhausted even on lighter days?",
      options: [
        {
          text: "Often",
          tags: ["low_mood", "stability"],
          moduleBoosts: [FEATURES.DEPRESSION, FEATURES.DYSPRAXIA],
        },
        {
          text: "Sometimes",
          tags: ["stability"],
          moduleBoosts: [FEATURES.DYSPRAXIA],
        },
        { text: "Rarely", tags: [] },
      ],
    },
  ],
  adhd: [
    {
      id: "adhd_overwhelm",
      question: "Do large tasks often feel overwhelming?",
      options: [
        {
          text: "Yes",
          tags: ["overwhelm", "planning"],
          moduleBoosts: [FEATURES.ADHD_BREAKDOWN, FEATURES.ADHD_TIMELINE],
        },
        {
          text: "Sometimes",
          tags: ["planning"],
          moduleBoosts: [FEATURES.ADHD_TIMELINE],
        },
        { text: "No", tags: [] },
      ],
    },
    {
      id: "adhd_time",
      question: "Do you lose track of time while working?",
      options: [
        {
          text: "Often",
          tags: ["time_blindness"],
          moduleBoosts: [FEATURES.ADHD_TIMELINE, FEATURES.ADHD_FOCUS],
        },
        {
          text: "Sometimes",
          tags: ["planning"],
          moduleBoosts: [FEATURES.ADHD_TIMELINE],
        },
        { text: "Rarely", tags: [] },
      ],
    },
    {
      id: "adhd_focus",
      question: "Do you struggle to maintain focus for long periods?",
      options: [
        {
          text: "Often",
          tags: ["focus", "distraction"],
          moduleBoosts: [FEATURES.ADHD_FOCUS, FEATURES.ADHD_SOUNDS],
        },
        {
          text: "Sometimes",
          tags: ["focus"],
          moduleBoosts: [FEATURES.ADHD_FOCUS],
        },
        { text: "Rarely", tags: [] },
      ],
    },
  ],
};
