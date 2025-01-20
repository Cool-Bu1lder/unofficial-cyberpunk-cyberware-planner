import attribute from "../enums/attribute";

import fortified_ankles from "../../assets/legs/fortified_ankles.webp";
import jenkins_tendons from "../../assets/legs/jenkins_tendons.webp";
import leeroy_ligament_system from "../../assets/legs/leeroy_ligament_system.webp";
import lynx_paws from "../../assets/legs/lynx_paws.webp";
import reinforced_tendons from "../../assets/legs/reinforced_tendons.webp";

const legs = [
  {
    name: "Fortified Ankles",
    effect:
      "Allows you to charge jumps for greater distance.\nHold down the jump button to charge, then release to jump.",
    capacity: 6,
    armor: 103,
    attunement: attribute.body,
    icon: fortified_ankles,
  },
  {
    name: "Jenkins' Tendons",
    effect:
      "Increases sprint speed, starting at +30% and tapering off to +10% after 5 sec. of continued sprinting. The effect recovers at the same rate when not sprinting.",
    capacity: 6,
    armor: 22,
    attunement: attribute.body,
    icon: jenkins_tendons,
  },
  {
    name: "Leeroy Ligament System",
    effect: "+20% Movement Speed",
    capacity: 8,
    armor: 26,
    attunement: attribute.unknown,
    icon: leeroy_ligament_system,
    iconic: true,
  },
  {
    name: "Lynx Paws",
    effect:
      "+50% quieter movement\n+12% crouched movement speed\n-20% fall damage",
    capacity: 5,
    armor: 34,
    attunement: attribute.cool,
    icon: lynx_paws,
  },
  {
    name: "Reinforced Tendons",
    effect: "Press jump in midair to perform a double jump.",
    capacity: 8,
    armor: 20,
    attunement: attribute.unknown,
    icon: reinforced_tendons,
  },
];

export default legs;
