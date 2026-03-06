export const QUESTIONS_REGISTRY = {
  ocd: [
    {
      id: "ocd_urge_repeat",
      question: "Do you feel a strong urge to repeat actions until they feel right?",
      options: [
        { text: "Often", tags: ["compulsion", "urge_control"] },
        { text: "Sometimes", tags: ["compulsion"] },
        { text: "Rarely", tags: [] },
      ],
    },
    {
      id: "ocd_avoidance",
      question: "Do you avoid places or situations because of fear of discomfort?",
      options: [
        { text: "Often", tags: ["avoidance", "fear", "exposure"] },
        { text: "Sometimes", tags: ["avoidance"] },
        { text: "Rarely", tags: [] },
      ],
    },
  ],
  anxiety: [
    {
      id: "anx_physical",
      question: "Do physical stress signs (heart racing, chest tightness) make it hard to function?",
      options: [
        { text: "Often", tags: ["physical_anxiety", "panic"] },
        { text: "Sometimes", tags: ["stress"] },
        { text: "Rarely", tags: [] },
      ],
    },
    {
      id: "anx_rumination",
      question: "Do worry loops or intrusive thoughts continue for long periods?",
      options: [
        { text: "Often", tags: ["rumination", "intrusive_thoughts"] },
        { text: "Sometimes", tags: ["rumination"] },
        { text: "Rarely", tags: [] },
      ],
    },
  ],
  depression: [
    {
      id: "dep_low_mood",
      question: "Do low mood periods reduce your motivation to start daily tasks?",
      options: [
        { text: "Often", tags: ["low_mood", "task_start"] },
        { text: "Sometimes", tags: ["low_mood"] },
        { text: "Rarely", tags: [] },
      ],
    },
    {
      id: "dep_energy",
      question: "Do you feel mentally exhausted even on lighter days?",
      options: [
        { text: "Often", tags: ["low_mood", "stability"] },
        { text: "Sometimes", tags: ["stability"] },
        { text: "Rarely", tags: [] },
      ],
    },
  ],
  adhd: [
    {
      id: "adhd_overwhelm",
      question: "Do large tasks often feel overwhelming?",
      options: [
        { text: "Yes", tags: ["overwhelm", "planning"] },
        { text: "Sometimes", tags: ["planning"] },
        { text: "No", tags: [] },
      ],
    },
    {
      id: "adhd_time",
      question: "Do you lose track of time while working?",
      options: [
        { text: "Often", tags: ["time_blindness"] },
        { text: "Sometimes", tags: ["planning"] },
        { text: "Rarely", tags: [] },
      ],
    },
    {
      id: "adhd_focus",
      question: "Do you struggle to maintain focus for long periods?",
      options: [
        { text: "Often", tags: ["focus", "distraction"] },
        { text: "Sometimes", tags: ["focus"] },
        { text: "Rarely", tags: [] },
      ],
    },
  ],
  panic: [
    {
      id: "panic_spikes",
      question: "Do sudden panic spikes interrupt your routine?",
      options: [
        { text: "Often", tags: ["panic", "stress"] },
        { text: "Sometimes", tags: ["panic"] },
        { text: "Rarely", tags: [] },
      ],
    },
    {
      id: "panic_recovery",
      question: "Do you need guided steps to recover after intense stress moments?",
      options: [
        { text: "Yes", tags: ["panic", "emotion_regulation"] },
        { text: "Sometimes", tags: ["emotion_regulation"] },
        { text: "No", tags: [] },
      ],
    },
  ],
  ptsd: [
    {
      id: "ptsd_triggers",
      question: "Do reminders of past events trigger intense emotional reactions?",
      options: [
        { text: "Often", tags: ["triggers", "stress"] },
        { text: "Sometimes", tags: ["triggers"] },
        { text: "Rarely", tags: [] },
      ],
    },
    {
      id: "ptsd_sleep",
      question: "Do distressing thoughts affect your ability to settle at night?",
      options: [
        { text: "Often", tags: ["night_rumination", "sleep"] },
        { text: "Sometimes", tags: ["night_rumination"] },
        { text: "Rarely", tags: [] },
      ],
    },
  ],
  insomnia: [
    {
      id: "sleep_onset",
      question: "Do you struggle to fall asleep because your mind stays active?",
      options: [
        { text: "Often", tags: ["sleep", "night_rumination"] },
        { text: "Sometimes", tags: ["sleep"] },
        { text: "Rarely", tags: [] },
      ],
    },
    {
      id: "sleep_routine",
      question: "Would a structured wind-down routine help your nights?",
      options: [
        { text: "Yes", tags: ["sleep", "routine"] },
        { text: "Maybe", tags: ["routine"] },
        { text: "No", tags: [] },
      ],
    },
  ],
  social_anxiety: [
    {
      id: "social_stress",
      question: "Do social settings create significant stress before or during interactions?",
      options: [
        { text: "Often", tags: ["social_stress", "avoidance"] },
        { text: "Sometimes", tags: ["social_stress"] },
        { text: "Rarely", tags: [] },
      ],
    },
    {
      id: "social_rehearsal",
      question: "Would practicing responses in advance help you feel more prepared?",
      options: [
        { text: "Yes", tags: ["social_stress", "planning"] },
        { text: "Maybe", tags: ["planning"] },
        { text: "No", tags: [] },
      ],
    },
  ],
};
