import attribute from "../enums/attribute";

import ballistic_coprocessor from "../../assets/hands/ballistic_coprocessor.webp";
import handle_wrap from "../../assets/hands/handle_wrap.webp";
import immovable_force from "../../assets/hands/immovable_force.webp";
import johnnys_special from "../../assets/hands/johnnys_special.webp";
import micro_generator from "../../assets/hands/micro_generator.webp";
import shock_absorber from "../../assets/hands/shock_absorber.webp";
import smart_link from "../../assets/hands/smart_link.webp";
import together_forever from "../../assets/hands/together_forever.webp";
import tyger_claws_dermal_imprint from "../../assets/hands/tyger_claws_dermal_imprint.webp";

const hands = [
  {
    name: "Ballistic Coprocessor",
    effect:
      "Increased ricochet chance with Power weapons.\n+30% ricochet damage\nLinks the user's weapon and optics, offering real-time data-tracking of the weapon's status and preview of ricochet trajectory.",
    capacity: 2,
    attunement: attribute.unknown,
    icon: ballistic_coprocessor,
  },
  {
    name: "Handle Wrap",
    effect:
      "When equipping or throwing a throwable weapon:\n+27% Crit Chance with throwable weapons for 6 sec.",
    capacity: 8,
    attunement: attribute.unknown,
    icon: handle_wrap,
  },
  {
    name: "Immovable Force",
    effect:
      "-35% recoil\n-25% bullet spread\nAutomatically activates effects for ranged weapons that otherwise only occur when behind cover. ",
    capacity: 35,
    attunement: attribute.unknown,
    icon: immovable_force,
    iconic: true,
  },
  {
    name: "Microgenerator",
    effect:
      "Reloading an empty weapon causes the next shot to release an electroshock that deals up to 250 Electrical damage to enemies near the point of impact.\nElectroshock damage increases with the number of bullet reloaded (max. 5 bullets). ",
    capacity: 9,
    attunement: attribute.unknown,
    icon: micro_generator,
  },
  {
    name: "Shock Absorber",
    effect: "-24% recoil ",
    capacity: 12,
    attunement: attribute.unknown,
    icon: shock_absorber,
  },
  {
    name: "Smart Link",
    effect:
      "Enables the use of smart-targeting in Smart weapons.\n+20% target-lock duration\n+15% Crit Damage with Smart weapons.\nDirectly links the user's optical implant to the weapon's system, offering real-time data-tracking of the weapon info.\n+2 Max RAM",
    capacity: 4,
    attunement: attribute.unknown,
    icon: smart_link,
  },
  {
    name: "Tattoo: Johnny's Special",
    effect:
      "Enables the use of smart-targeting in Smart weapons.\nDirectly links the user's optical implant to the weapon's system, offering real-time data-tracking of the weapon info.",
    capacity: 0,
    attunement: attribute.unknown,
    icon: johnnys_special,
  },
  {
    name: "Tattoo: Together Forever",
    effect:
      "Enables the use of smart-targeting in Smart weapons.\nDirectly links the user's optical implant to the weapon's system, offering real-time data-tracking of the weapon info.",
    capacity: 0,
    attunement: attribute.unknown,
    icon: together_forever,
  },
  {
    name: "Tattoo: Tyger Claws Dermal Imprint",
    effect:
      "Enables the use of smart-targeting in Smart weapons.\n+20% lock-on speed\n20% smaller Smart-targeting reticle\nDirectly links the user's optical implant to the weapon's system, offering real-time data-tracking of the weapon info. ",
    capacity: 0,
    attunement: attribute.unknown,
    icon: tyger_claws_dermal_imprint,
  },
];

export default hands;
