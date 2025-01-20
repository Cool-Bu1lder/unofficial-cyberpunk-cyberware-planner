import attribute from "../enums/attribute";

import gorilla_arms from "../../assets/arms/gorilla_arms.webp";
import mantis_blades from "../../assets/arms/mantis_blades.webp";
import monowire from "../../assets/arms/monowire.webp";
import projectile_launch_system from "../../assets/arms/projectile_launch_system.webp";

const arms = [
  {
    name: "Gorilla Arms",
    effect:
      "Gorilla Arms are lightweight, efficient and hard-hitting arm replacement cyberware.",
    capacity: 8,
    attunement: attribute.unknown,
    icon: gorilla_arms,
  },
  {
    name: "Mantis Blades",
    effect:
      "Mantis Blades allow you to slice and dice your enemies with swift, deadly slashes.",
    capacity: 8,
    attunement: attribute.unknown,
    icon: mantis_blades,
  },
  {
    name: "Monowire",
    effect: "Empty Quickhack Slot",
    capacity: 8,
    attunement: attribute.unknown,
    icon: monowire,
  },
  {
    name: "Projectile Launch System",
    effect:
      "Launches an explosive projectile that deals massive Physical damage.",
    capacity: 8,
    attunement: attribute.unknown,
    icon: projectile_launch_system,
  },
];

export default arms;
