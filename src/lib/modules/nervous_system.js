import attribute from "../enums/attribute";

import adrenaline_converter from "../../assets/nervous_system/adrenaline_converter.webp";
import atomic_sensor from "../../assets/nervous_system/atomic_sensor.webp";
import kerenzikov from "../../assets/nervous_system/kerenzikov.webp";
import neofiber from "../../assets/nervous_system/neofiber.webp";
import reflex_tuner from "../../assets/nervous_system/reflex_tuner.webp";
import stabber from "../../assets/nervous_system/stabber.webp";
import synaptic_accelerator from "../../assets/nervous_system/synaptic_accelerator.webp";
import tyrosine_injector from "../../assets/nervous_system/tyrosine_injector.webp";
import visual_cortex_support from "../../assets/nervous_system/visual_cortex_support.webp";

const nervous_system = [
  {
    name: "Adrenaline Converter",
    effect: "+40% movement speed for 9 sec. when entering combat.",
    capacity: 6,
    attunement: attribute.unknown,
    icon: adrenaline_converter,
  },
  {
    name: "Adreno-trigger",
    effect: "+30% movement speed for 35 sec. when entering combat.",
    capacity: 20,
    attunement: attribute.unknown,
    icon: adrenaline_converter,
    iconic: true,
  },
  {
    name: "Atomic Sensors",
    effect:
      "Increases movement speed proportional to the enemy's detection of you outside of combat. (max. 64% movement speed at 80% detection).\nThe effect ends when you enter combat.",
    capacity: 5,
    attunement: attribute.unknown,
    icon: atomic_sensor,
  },
  {
    name: "Deep-field Visual Interface",
    effect:
      "Crit Chance increases the further you are from the enemy. (max. 100% at 100m).",
    capacity: 40,
    attunement: attribute.unknown,
    icon: visual_cortex_support,
    iconic: true,
  },
  {
    name: "Kerenzikov",
    effect:
      "Allows you to aim and perform ranged attacks while sliding, dodging or Dashing.\nSlows time by 60% for 3.75 sec. when you aim a ranged attack during a slide, dodge or Dash.\nCooldown: 6 sec.",
    capacity: 12,
    attunement: attribute.unknown,
    icon: kerenzikov,
  },
  {
    name: "NeoFiber",
    effect: "+11% Mitigation Chance\n+11% Mitigation Strength",
    capacity: 14,
    attunement: attribute.unknown,
    icon: neofiber,
  },
  {
    name: "Reflex Tuner",
    effect:
      "Slows time by 60% for 4.5 sec. when your Health drops below 25%.\nCooldown: 35 sec.",
    capacity: 5,
    attunement: attribute.unknown,
    icon: reflex_tuner,
  },
  {
    name: "Revulsor",
    effect:
      "Slows time by 60% for 4.5 sec. when your Health drops below 25%.\nYour movement is not slowed.\nCooldown: 35 sec.",
    capacity: 35,
    attunement: attribute.unknown,
    icon: reflex_tuner,
    iconic: true,
  },
  {
    name: "Stabber",
    effect: "+20% Crit Chance with Blades and throwable weapons",
    capacity: 12,
    attunement: attribute.unknown,
    icon: stabber,
  },
  {
    name: "Synaptic Accelerator",
    effect:
      "Slows time by 50% for 4.5 sec. when enemy detection reaches 50%.\nCooldown: 60 sec.",
    capacity: 5,
    attunement: attribute.unknown,
    icon: synaptic_accelerator,
  },
  {
    name: "Tyrosine Injector",
    effect:
      "Successful Takedowns grant:\n+21% headshot damage for 15 sec.\n+11% Movement Speed for 15 sec.",
    capacity: 8,
    attunement: attribute.unknown,
    icon: tyrosine_injector,
  },
  {
    name: "Visual Cortex Support",
    effect:
      "Crit Chance increases the farther you are from the enemy. (max. 30% at 30m). ",
    capacity: 20,
    attunement: attribute.unknown,
    icon: visual_cortex_support,
  },
];

export default nervous_system;
