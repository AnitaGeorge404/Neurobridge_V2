import { FEATURES } from "@/lib/featureRegistry";

export const QUESTIONS_REGISTRY = {
  ocd: [
    {
      id: "ocd_urge_repeat",
      question: "Do you feel strong urges to repeat actions until they feel exactly right?",
      options: [
        { text: "Often", tags: ["compulsion", "urge_control"], moduleBoosts: [FEATURES.OCD_RITUAL_DELAYER, FEATURES.OCD_HEATMAP] },
        { text: "Sometimes", tags: ["compulsion"], moduleBoosts: [FEATURES.OCD_RITUAL_DELAYER] },
        { text: "Rarely", tags: [] },
      ],
    },
    {
      id: "ocd_avoidance",
      question: "Do you avoid places or situations to prevent fear or discomfort?",
      options: [
        { text: "Often", tags: ["avoidance", "fear", "exposure"], moduleBoosts: [FEATURES.OCD_ERP_TRACKER, FEATURES.ANXIETY] },
        { text: "Sometimes", tags: ["avoidance"], moduleBoosts: [FEATURES.OCD_ERP_TRACKER] },
        { text: "Rarely", tags: [] },
      ],
    },
    {
      id: "ocd_intrusive",
      question: "Do unwanted or distressing thoughts come into your mind and stick around?",
      options: [
        { text: "Often", tags: ["intrusive_thoughts", "rumination"], moduleBoosts: [FEATURES.OCD_LOGIC_JOURNAL, FEATURES.OCD_ERP_TRACKER] },
        { text: "Sometimes", tags: ["intrusive_thoughts"], moduleBoosts: [FEATURES.OCD_LOGIC_JOURNAL] },
        { text: "Rarely", tags: [] },
      ],
    },
    {
      id: "ocd_triggers",
      question: "Are there specific places, objects or times when urges or thoughts are strongest?",
      options: [
        { text: "Yes, clearly", tags: ["triggers", "patterns", "compulsion"], moduleBoosts: [FEATURES.OCD_HEATMAP, FEATURES.OCD_RITUAL_DELAYER] },
        { text: "Sort of", tags: ["triggers"], moduleBoosts: [FEATURES.OCD_HEATMAP] },
        { text: "Not really", tags: [] },
      ],
    },
    {
      id: "ocd_exposure",
      question: "Would practicing gradual exposure to feared situations help you build tolerance?",
      options: [
        { text: "Yes", tags: ["exposure", "fear"], moduleBoosts: [FEATURES.OCD_ERP_TRACKER, FEATURES.ANXIETY] },
        { text: "Maybe", tags: ["exposure"], moduleBoosts: [FEATURES.OCD_ERP_TRACKER] },
        { text: "Not yet", tags: [] },
      ],
    },
  ],
  asd: [
    {
      id: "asd_overload",
      question: "Do sensory-heavy environments (noise, lights, crowds) quickly become overwhelming?",
      options: [
        { text: "Often", tags: ["overwhelm", "sensory_overload", "panic"], moduleBoosts: [FEATURES.ASD, FEATURES.ANXIETY] },
        { text: "Sometimes", tags: ["sensory_overload"], moduleBoosts: [FEATURES.ASD] },
        { text: "Rarely", tags: [] },
      ],
    },
    {
      id: "asd_social_decode",
      question: "Would structured social guidance help you handle uncertain interactions?",
      options: [
        { text: "Yes", tags: ["social_stress", "planning"], moduleBoosts: [FEATURES.APD, FEATURES.ASD] },
        { text: "Sometimes", tags: ["social_stress"], moduleBoosts: [FEATURES.APD] },
        { text: "No", tags: [] },
      ],
    },
    {
      id: "asd_routine",
      question: "Do unexpected changes to your routine significantly increase stress?",
      options: [
        { text: "Often", tags: ["routine", "stability", "stress"], moduleBoosts: [FEATURES.ASD, FEATURES.DYSPRAXIA] },
        { text: "Sometimes", tags: ["routine"], moduleBoosts: [FEATURES.ASD] },
        { text: "Rarely", tags: [] },
      ],
    },
    {
      id: "asd_communication",
      question: "Do you find it hard to interpret tone, sarcasm or unspoken social rules?",
      options: [
        { text: "Often", tags: ["social_stress", "avoidance"], moduleBoosts: [FEATURES.APD, FEATURES.ADHD_EMOTION] },
        { text: "Sometimes", tags: ["social_stress"], moduleBoosts: [FEATURES.APD] },
        { text: "Not much", tags: [] },
      ],
    },
    {
      id: "asd_meltdown",
      question: "When overloaded, do you need a quick calming strategy to exit the moment?",
      options: [
        { text: "Yes", tags: ["panic", "emotion_regulation"], moduleBoosts: [FEATURES.ANXIETY, FEATURES.ADHD_EMOTION] },
        { text: "Sometimes", tags: ["emotion_regulation"], moduleBoosts: [FEATURES.ANXIETY] },
        { text: "No", tags: [] },
      ],
    },
  ],
  dyslexia: [
    {
      id: "dyslexia_reading_load",
      question: "Does dense reading cause fast fatigue, skipping lines or losing your place?",
      options: [
        { text: "Often", tags: ["reading_fatigue", "focus"], moduleBoosts: [FEATURES.DYSLEXIA, "dyslexia.adaptive-reading"] },
        { text: "Sometimes", tags: ["reading_fatigue"], moduleBoosts: [FEATURES.DYSLEXIA] },
        { text: "Rarely", tags: [] },
      ],
    },
    {
      id: "dyslexia_phonics",
      question: "Do you struggle to sound out unfamiliar or complex words?",
      options: [
        { text: "Often", tags: ["working_memory", "reading_fatigue"], moduleBoosts: ["dyslexia.phonology", "dyslexia.reinforcement"] },
        { text: "Sometimes", tags: ["working_memory"], moduleBoosts: ["dyslexia.phonology"] },
        { text: "Rarely", tags: [] },
      ],
    },
    {
      id: "dyslexia_writing",
      question: "Do you find writing and spelling significantly harder than speaking?",
      options: [
        { text: "Often", tags: ["planning", "working_memory"], moduleBoosts: ["dyslexia.writing-assistant", "dyslexia.personal-profile"] },
        { text: "Sometimes", tags: ["planning"], moduleBoosts: ["dyslexia.writing-assistant"] },
        { text: "Rarely", tags: [] },
      ],
    },
    {
      id: "dyslexia_night_reading",
      question: "Would calmer reading or audio support help you settle at night?",
      options: [
        { text: "Yes", tags: ["sleep", "night_rumination"], moduleBoosts: [FEATURES.DYSLEXIA, FEATURES.ADHD_SOUNDS] },
        { text: "Maybe", tags: ["sleep"], moduleBoosts: [FEATURES.ADHD_SOUNDS] },
        { text: "No", tags: [] },
      ],
    },
    {
      id: "dyslexia_profile",
      question: "Would understanding your specific reading patterns help you improve faster?",
      options: [
        { text: "Yes", tags: ["stability", "planning"], moduleBoosts: ["dyslexia.personal-profile", "dyslexia.adaptive-reading"] },
        { text: "Maybe", tags: ["stability"], moduleBoosts: ["dyslexia.personal-profile"] },
        { text: "No", tags: [] },
      ],
    },
  ],
  dyscalculia: [
    {
      id: "dyscalculia_steps",
      question: "Do multi-step calculations or number tasks get confusing without clear structure?",
      options: [
        { text: "Often", tags: ["number_confusion", "step_support"], moduleBoosts: [FEATURES.DYSCALCULIA, "dyscalculia.step-practice"] },
        { text: "Sometimes", tags: ["step_support"], moduleBoosts: ["dyscalculia.step-practice"] },
        { text: "Rarely", tags: [] },
      ],
    },
    {
      id: "dyscalculia_everyday",
      question: "Do everyday tasks like budgeting or time estimation feel harder than they should?",
      options: [
        { text: "Often", tags: ["number_confusion", "working_memory"], moduleBoosts: ["dyscalculia.real-life-math", "dyscalculia.number-sense"] },
        { text: "Sometimes", tags: ["number_confusion"], moduleBoosts: ["dyscalculia.real-life-math"] },
        { text: "Rarely", tags: [] },
      ],
    },
    {
      id: "dyscalculia_timing",
      question: "Would visual timelines and schedules improve your number-related confidence?",
      options: [
        { text: "Yes", tags: ["working_memory", "planning"], moduleBoosts: [FEATURES.ADHD_TIMELINE, FEATURES.DYSCALCULIA] },
        { text: "Maybe", tags: ["planning"], moduleBoosts: [FEATURES.ADHD_TIMELINE] },
        { text: "No", tags: [] },
      ],
    },
    {
      id: "dyscalculia_anxiety",
      question: "Does dealing with numbers trigger stress or avoidance reactions?",
      options: [
        { text: "Often", tags: ["stress", "overwhelm"], moduleBoosts: ["dyscalculia.calm-mode", FEATURES.ANXIETY] },
        { text: "Sometimes", tags: ["stress"], moduleBoosts: ["dyscalculia.calm-mode"] },
        { text: "Rarely", tags: [] },
      ],
    },
    {
      id: "dyscalculia_patterns",
      question: "Do you struggle to see number patterns or sequences quickly?",
      options: [
        { text: "Often", tags: ["working_memory", "number_confusion"], moduleBoosts: ["dyscalculia.patterns", "dyscalculia.number-sense"] },
        { text: "Sometimes", tags: ["working_memory"], moduleBoosts: ["dyscalculia.patterns"] },
        { text: "Rarely", tags: [] },
      ],
    },
  ],
  dyspraxia: [
    {
      id: "dyspraxia_sequence",
      question: "Do movement or daily routines feel easier with step-by-step sequencing?",
      options: [
        { text: "Often", tags: ["routine", "planning", "step_support"], moduleBoosts: [FEATURES.DYSPRAXIA, FEATURES.ADHD_BREAKDOWN] },
        { text: "Sometimes", tags: ["routine"], moduleBoosts: [FEATURES.DYSPRAXIA] },
        { text: "Rarely", tags: [] },
      ],
    },
    {
      id: "dyspraxia_stress",
      question: "Do coordination-heavy or physical tasks quickly raise your stress or frustration?",
      options: [
        { text: "Often", tags: ["stress", "overwhelm"], moduleBoosts: [FEATURES.ANXIETY, FEATURES.DYSPRAXIA] },
        { text: "Sometimes", tags: ["stress"], moduleBoosts: [FEATURES.ANXIETY] },
        { text: "Rarely", tags: [] },
      ],
    },
    {
      id: "dyspraxia_instructions",
      question: "Do visual or illustrated instructions help you complete tasks more accurately?",
      options: [
        { text: "Yes", tags: ["step_support", "planning"], moduleBoosts: [FEATURES.DYSPRAXIA_AR, FEATURES.DYSPRAXIA_AOMI] },
        { text: "Sometimes", tags: ["step_support"], moduleBoosts: [FEATURES.DYSPRAXIA_AR] },
        { text: "No", tags: [] },
      ],
    },
    {
      id: "dyspraxia_timing",
      question: "Do regular rhythm or pacing cues help you stay coordinated through a task?",
      options: [
        { text: "Yes", tags: ["stability", "routine"], moduleBoosts: [FEATURES.DYSPRAXIA_HAPTIC, FEATURES.ADHD_TIMELINE] },
        { text: "Sometimes", tags: ["stability"], moduleBoosts: [FEATURES.DYSPRAXIA_HAPTIC] },
        { text: "No", tags: [] },
      ],
    },
    {
      id: "dyspraxia_planning",
      question: "Do you need to plan routes or navigation in advance to manage physical tasks?",
      options: [
        { text: "Often", tags: ["planning", "stress"], moduleBoosts: [FEATURES.DYSPRAXIA_ROUTE, FEATURES.ADHD_TIMELINE] },
        { text: "Sometimes", tags: ["planning"], moduleBoosts: [FEATURES.DYSPRAXIA_ROUTE] },
        { text: "Rarely", tags: [] },
      ],
    },
  ],
  anxiety: [
    {
      id: "anx_physical",
      question: "Do physical stress signs (racing heart, chest tightness) make it hard to function?",
      options: [
        { text: "Often", tags: ["physical_anxiety", "panic"], moduleBoosts: [FEATURES.ANXIETY, FEATURES.ADHD_EMOTION] },
        { text: "Sometimes", tags: ["stress"], moduleBoosts: [FEATURES.ANXIETY] },
        { text: "Rarely", tags: [] },
      ],
    },
    {
      id: "anx_rumination",
      question: "Do worry loops or intrusive thoughts continue for long periods?",
      options: [
        { text: "Often", tags: ["rumination", "intrusive_thoughts"], moduleBoosts: [FEATURES.OCD_LOGIC_JOURNAL, FEATURES.DEPRESSION] },
        { text: "Sometimes", tags: ["rumination"], moduleBoosts: [FEATURES.OCD_LOGIC_JOURNAL] },
        { text: "Rarely", tags: [] },
      ],
    },
    {
      id: "anx_social",
      question: "Does anticipating social situations or interactions cause significant anxiety?",
      options: [
        { text: "Often", tags: ["social_stress", "avoidance"], moduleBoosts: [FEATURES.APD, FEATURES.ASD] },
        { text: "Sometimes", tags: ["social_stress"], moduleBoosts: [FEATURES.APD] },
        { text: "Rarely", tags: [] },
      ],
    },
    {
      id: "anx_recovery",
      question: "Do you need guided steps to recover after intense stress or panic moments?",
      options: [
        { text: "Yes", tags: ["panic", "emotion_regulation"], moduleBoosts: [FEATURES.ADHD_EMOTION, FEATURES.ANXIETY] },
        { text: "Sometimes", tags: ["emotion_regulation"], moduleBoosts: [FEATURES.ADHD_EMOTION] },
        { text: "No", tags: [] },
      ],
    },
    {
      id: "anx_sleep",
      question: "Does anxiety regularly affect your ability to fall or stay asleep?",
      options: [
        { text: "Often", tags: ["sleep", "night_rumination"], moduleBoosts: [FEATURES.ADHD_SOUNDS, FEATURES.DEPRESSION] },
        { text: "Sometimes", tags: ["sleep"], moduleBoosts: [FEATURES.ADHD_SOUNDS] },
        { text: "Rarely", tags: [] },
      ],
    },
  ],
  adhd: [
    {
      id: "adhd_overwhelm",
      question: "Do large tasks often feel so overwhelming that you freeze and can't start?",
      options: [
        { text: "Yes", tags: ["overwhelm", "planning", "task_start"], moduleBoosts: [FEATURES.ADHD_BREAKDOWN, FEATURES.ADHD_TIMELINE] },
        { text: "Sometimes", tags: ["planning"], moduleBoosts: [FEATURES.ADHD_BREAKDOWN] },
        { text: "No", tags: [] },
      ],
    },
    {
      id: "adhd_time",
      question: "Do you lose track of time unexpectedly and miss deadlines?",
      options: [
        { text: "Often", tags: ["time_blindness"], moduleBoosts: [FEATURES.ADHD_TIMELINE, FEATURES.ADHD_FOCUS] },
        { text: "Sometimes", tags: ["planning"], moduleBoosts: [FEATURES.ADHD_TIMELINE] },
        { text: "Rarely", tags: [] },
      ],
    },
    {
      id: "adhd_focus",
      question: "Do you struggle to sustain focus, especially on low-stimulus tasks?",
      options: [
        { text: "Often", tags: ["focus", "distraction"], moduleBoosts: [FEATURES.ADHD_FOCUS, FEATURES.ADHD_SOUNDS] },
        { text: "Sometimes", tags: ["focus"], moduleBoosts: [FEATURES.ADHD_FOCUS] },
        { text: "Rarely", tags: [] },
      ],
    },
    {
      id: "adhd_emotion",
      question: "Do emotional reactions hit suddenly and feel difficult to manage?",
      options: [
        { text: "Often", tags: ["emotion_regulation", "stress"], moduleBoosts: [FEATURES.ADHD_EMOTION, FEATURES.ANXIETY] },
        { text: "Sometimes", tags: ["emotion_regulation"], moduleBoosts: [FEATURES.ADHD_EMOTION] },
        { text: "Rarely", tags: [] },
      ],
    },
    {
      id: "adhd_accountability",
      question: "Does working alongside someone else (even virtually) help you stay on task?",
      options: [
        { text: "Yes", tags: ["focus", "task_start"], moduleBoosts: [FEATURES.ADHD_DOUBLING, FEATURES.ADHD_FOCUS] },
        { text: "Maybe", tags: ["focus"], moduleBoosts: [FEATURES.ADHD_DOUBLING] },
        { text: "No", tags: [] },
      ],
    },
  ],
  depression: [
    {
      id: "dep_low_mood",
      question: "Do periods of low mood reduce your motivation to start or finish daily tasks?",
      options: [
        { text: "Often", tags: ["low_mood", "task_start"], moduleBoosts: [FEATURES.DEPRESSION, FEATURES.DEPRESSION_MVH] },
        { text: "Sometimes", tags: ["low_mood"], moduleBoosts: [FEATURES.DEPRESSION_MVH] },
        { text: "Rarely", tags: [] },
      ],
    },
    {
      id: "dep_energy",
      question: "Do you feel mentally exhausted or empty even on days without clear reasons?",
      options: [
        { text: "Often", tags: ["low_mood", "stability"], moduleBoosts: [FEATURES.DEPRESSION, FEATURES.DEPRESSION_VOID] },
        { text: "Sometimes", tags: ["stability"], moduleBoosts: [FEATURES.DEPRESSION_VOID] },
        { text: "Rarely", tags: [] },
      ],
    },
    {
      id: "dep_thoughts",
      question: "Do negative thoughts about yourself or the future loop repeatedly?",
      options: [
        { text: "Often", tags: ["rumination", "intrusive_thoughts"], moduleBoosts: [FEATURES.DEPRESSION_REALITY, FEATURES.DEPRESSION_PROOF] },
        { text: "Sometimes", tags: ["rumination"], moduleBoosts: [FEATURES.DEPRESSION_REALITY] },
        { text: "Rarely", tags: [] },
      ],
    },
    {
      id: "dep_social",
      question: "Do you withdraw from social connections when mood drops?",
      options: [
        { text: "Often", tags: ["social_stress", "low_mood"], moduleBoosts: [FEATURES.DEPRESSION_SOCIAL, FEATURES.ANXIETY] },
        { text: "Sometimes", tags: ["social_stress"], moduleBoosts: [FEATURES.DEPRESSION_SOCIAL] },
        { text: "Rarely", tags: [] },
      ],
    },
    {
      id: "dep_overwhelm",
      question: "Does anxiety layer on top of low mood, creating spirals that are hard to exit?",
      options: [
        { text: "Often", tags: ["panic", "emotion_regulation", "stress"], moduleBoosts: [FEATURES.DEPRESSION_ANXIETY_DISSOLVER, FEATURES.ANXIETY] },
        { text: "Sometimes", tags: ["emotion_regulation"], moduleBoosts: [FEATURES.DEPRESSION_ANXIETY_DISSOLVER] },
        { text: "Rarely", tags: [] },
      ],
    },
  ],
};
