import attribute from "../enums/attribute";

//TODO: Get higher res images from fandom
import newton_module from "../../assets/fontal_cortex/newton_module.webp";
import bio_conductor from "../../assets/fontal_cortex/bio_conductor.webp";
import cammilo_ram_manager from "../../assets/fontal_cortex/cammilo_ram_manager.png";
import ex_disk from "../../assets/fontal_cortex/ex_disk.webp";
import kerenzikov_boost_system from "../../assets/fontal_cortex/kerenzikov_boost_system.webp";
import mechatronic_core from "../../assets/fontal_cortex/mechatronic_core.webp";
import memory_boost from "../../assets/fontal_cortex/memory_boost.webp";
import ram_upgrade from "../../assets/fontal_cortex/ram_upgrade.png";
import self_ice from "../../assets/fontal_cortex/self_ice.webp";
import quantum_tuner from "../../assets/fontal_cortex/quantum_tuner.webp";

const frontal_cortex = [
  {
    name: "Axolotl",
    effect:
      "-7.5% Cooldown instantly for all cyberware after neutralizing an enemy.",
    capacity: 48,
    attunement: attribute.unknown,
    icon: newton_module,
    iconic: true,
  },
  {
    name: "Bioconductor",
    effect:
      "Allows your quickhacks to deal Crit Hits.\n35% Crit Chance with quickhacks.\n-4 Max RAM",
    capacity: 16,
    attunement: attribute.unknown,
    icon: bio_conductor,
  },
  {
    name: "COX-2 Cybersomatic Optimizer",
    effect:
      "Allows your quickhacks to deal Crit Hits.\n100% Crit Chance with quickhacks.\n-8 Max RAM ",
    capacity: 50,
    attunement: attribute.unknown,
    icon: bio_conductor,
    iconic: true,
  },
  {
    name: "Camillo RAM Manager",
    effect:
      "Instantly recovers 23% Max RAM when available RAM falls to 20%.\n+2 Max RAM\nCooldown: 80 sec.",
    capacity: 8,
    attunement: attribute.unknown,
    icon: cammilo_ram_manager,
  },
  {
    name: "Ex-Disk",
    effect: "+6 Max RAM\n+35% upload speed for quickhacks",
    capacity: 10,
    attunement: attribute.unknown,
    icon: ex_disk,
  },
  {
    name: "Kerenzikov Boost System",
    effect:
      "Improves Kerenzikov by enhancing the user's speed and reflexes.\nWhen Kerenzikov is active:\n-100% Stamina cost from shooting.\nSlows time by +15 relative to your enemies. ",
    capacity: 3,
    attunement: attribute.unknown,
    icon: kerenzikov_boost_system,
  },
  {
    name: "Mechatronic Core",
    effect:
      "+40% damage against drones, robots, mechs and turrets.\n+2 Max RAM",
    capacity: 5,
    attunement: attribute.unknown,
    icon: mechatronic_core,
  },
  {
    name: "Memory Boost",
    effect: "+1.25 RAM when you neutralize an enemy\n+1 Max RAM",
    capacity: 18,
    attunement: attribute.unknown,
    icon: memory_boost,
  },
  {
    name: "Newton Module",
    effect:
      "-1.35% Cooldown instantly for all cyberware after neutralizing an enemy. ",
    capacity: 14,
    attunement: attribute.unknown,
    icon: newton_module,
  },
  {
    name: "Quantum Tuner",
    effect:
      "Whenever another cyberware implant is fully used, Quantum Tuner instantly restores its Cooldown. (up to a max of 50 sec.)\nCooldown: 60 sec. outside of combat\nPassive Effect:\n-15% Cooldown Time for all other cyberware.",
    capacity: 45,
    attunement: attribute.unknown,
    icon: quantum_tuner,
    iconic: true,
  },
  {
    name: "RAM Reallocator",
    effect:
      "Instantly recovers 23% Max RAM when available RAM falls to 20%.\n+2 Max RAM\nCooldown: 85 sec. ",
    capacity: 40,
    attunement: attribute.unknown,
    icon: cammilo_ram_manager,
    iconic: true,
  },
  {
    name: "RAM Upgrade",
    effect:
      "+Increases RAM recovery rate by +0.2 unit(s) per sec.\n+2 Max RAM ",
    capacity: 8,
    attunement: attribute.unknown,
    icon: ram_upgrade,
  },
  {
    name: "Self-ICE",
    effect:
      "Automatically negates an enemy quickhack.\n+1-2 Max RAM.\nCooldown: 45-20 sec.",
    capacity: 5,
    attunement: attribute.unknown,
    icon: self_ice,
  },
];

export default frontal_cortex;
