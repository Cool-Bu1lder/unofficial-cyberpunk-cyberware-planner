import attribute from "../enums/attribute";

import adrenaline_booster from "../../assets/circulatory_system/adrenaline_booster.webp";
import biomonitor from "../../assets/circulatory_system/biomonitor.webp";
import black_mamba from "../../assets/circulatory_system/black_mamba.webp";
import blood_pump from "../../assets/circulatory_system/blood_pump.webp";
import clutch_padding from "../../assets/circulatory_system/clutch_padding.webp";
import feedback_circuit from "../../assets/circulatory_system/feedback_circuit.webp";
import heal_on_kill from "../../assets/circulatory_system/heal_on_kill.webp";
import microrotors from "../../assets/circulatory_system/microrotors.webp";
import second_heart from "../../assets/circulatory_system/second_heart.webp";
import threat_evac from "../../assets/circulatory_system/threat_evac.webp";

const circulatory_system = [
  {
    name: "Adrenaline Booster",
    effect:
      "+25% Stamina whenever you use a melee weapon to neutralize an enemy.",
    capacity: 14,
    attunement: attribute.unknown,
    icon: adrenaline_booster,
  },
  {
    name: "Biomonitor",
    effect:
      "Automatically heals you with your equipped Health Item when your Health drops below 50%.\n+16% Health item effectiveness.",
    capacity: 14,
    attunement: attribute.unknown,
    icon: biomonitor,
  },
  {
    name: "Black Mamba",
    effect:
      "Against Poisoned enemies:\n-90% Poison damage\n+22% all other damage",
    capacity: 16,
    attunement: attribute.unknown,
    icon: black_mamba,
  },
  {
    name: "Blood Pump",
    effect:
      "Functions as a powerful Health Item.\nInstantly restores 110 Health, then regenerates 23 Health per second for 6 sec.",
    capacity: 15,
    attunement: attribute.unknown,
    icon: blood_pump,
  },
  {
    name: "Clutch Padding",
    effect: "-20% Stamina cost for shooting.",
    capacity: 12,
    attunement: attribute.unknown,
    icon: clutch_padding,
  },
  {
    name: "Electromag Recycler",
    effect:
      "+5% Health and Stamina when you hit an enemy with a fully charged Tech weapon shot.",
    capacity: 40,
    attunement: attribute.unknown,
    icon: feedback_circuit,
    iconic: true,
  },
  {
    name: "Feedback Circuit",
    effect:
      "+3.5% Health when you hit an enemy with a fully charged Tech weapon shot.",
    capacity: 14,
    attunement: attribute.unknown,
    icon: feedback_circuit,
  },
  {
    name: "Heal-On-Kill",
    effect: "+7.5% Health when you neutralize an enemy.",
    capacity: 10,
    attunement: attribute.unknown,
    icon: heal_on_kill,
  },
  {
    name: "Isometric Stabilizer",
    effect: "-20% Stamina cost for all attacks.",
    capacity: 40,
    attunement: attribute.unknown,
    icon: clutch_padding,
    iconic: true,
  },
  {
    name: "Microrotors",
    effect: "+25% melee attack speed",
    capacity: 12,
    attunement: attribute.unknown,
    icon: microrotors,
  },
  {
    name: "Second Heart",
    effect: "+100% Health when your Health reaches 0.\nCooldown: 220 sec.",
    capacity: 30,
    attunement: attribute.unknown,
    icon: second_heart,
  },
  {
    name: "ThreatEvac",
    effect:
      "+5-29% movement speed when your Health drops to 25%.\nThe more your Health drops, the more movement speed increases (max. +39%).",
    capacity: 5,
    attunement: attribute.unknown,
    icon: threat_evac,
  },
];

export default circulatory_system;
