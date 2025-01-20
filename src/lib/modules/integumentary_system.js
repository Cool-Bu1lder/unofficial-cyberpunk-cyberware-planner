import attribute from "../enums/attribute";

import carapace from "../../assets/integumentary_system/carapace.webp";
import cellular_adapter from "../../assets/integumentary_system/cellular_adapter.webp";
import chitin from "../../assets/integumentary_system/chitin.webp";
import cogito_lattice from "../../assets/integumentary_system/cogito_lattice.webp";
import countershell from "../../assets/integumentary_system/countershell.webp";
import defenzikov from "../../assets/integumentary_system/defenzikov.webp";
import nano_plating from "../../assets/integumentary_system/nano_plating.webp";
import optical_camo from "../../assets/integumentary_system/optical_camo.webp";
import pain_editor from "../../assets/integumentary_system/pain_editor.webp";
import painducer from "../../assets/integumentary_system/painducer.webp";
import proxishield from "../../assets/integumentary_system/proxishield.webp";
import rangeguard from "../../assets/integumentary_system/rangeguard.webp";
import shock_n_awe from "../../assets/integumentary_system/shock_n_awe.webp";
import subdermal_armor from "../../assets/integumentary_system/subdermal_armor.webp";

const integumentary_system = [
  {
    name: "Carapace",
    effect: "+32% Armor effectiveness when attacked from the side or rear.",
    capacity: 16,
    armor: 94,
    attunement: attribute.unknown,
    icon: carapace,
  },
  {
    name: "Cellular Adapter",
    effect:
      "Required Perk: Built Different\nFor each point in Technical Ability gain:\n+1.0% explosion resistance\n+0.5% Tech weapon damage\n+0.5% Health Item recharge speed\n+0.5% Grenade recharge speed",
    capacity: 10,
    armor: 162,
    attunement: attribute.unknown,
    icon: cellular_adapter,
  },
  {
    name: "Chitin",
    effect:
      "An extremely durable subcutaneous shell made of genetically modified chitin. Provides additional Health Regen.",
    capacity: 42,
    armor: 200,
    attunement: attribute.unknown,
    icon: chitin,
    iconic: true,
  },
  {
    name: "Cogito Lattice",
    effect: "+240% Armor from this cyberware when available RAM is below 2-10",
    capacity: 12,
    armor: 54,
    attunement: attribute.unknown,
    icon: cogito_lattice,
  },
  {
    name: "Countershell",
    effect:
      "+50% Mitigation Chance for 4 sec. if you lose 35% Health within 3 sec.\nCooldown 6 sec.",
    capacity: 12,
    armor: 57,
    attunement: attribute.unknown,
    icon: countershell,
  },
  {
    name: "Defenzikov",
    effect: "When Kerenzikov ends:\n+90% Mitigation Chance for 3-4 sec.",
    capacity: 20,
    armor: 80,
    attunement: attribute.unknown,
    icon: defenzikov,
  },
  {
    name: "Nano-plating",
    effect:
      "7% chance to block an incoming projectile.\n+100% bonus chance after performing a dodge or Dash. This bonus lasts 1.7 sec. or until the next projectile is blocked, whichever comes first.\nCannot block more than 3 projectiles in a 5 sec. span.",
    capacity: 16,
    armor: 78,
    attunement: attribute.unknown,
    icon: nano_plating,
  },
  {
    name: "Optical Camo",
    effect:
      "-90% visibility to enemies for 7 sec., making it more difficult for them to detect you outside of combat and hit you during combat.\nCooldown: 50 sec.",
    capacity: 20,
    armor: 30,
    attunement: attribute.unknown,
    icon: optical_camo,
  },
  {
    name: "Pain Editor",
    effect: "-7% all incoming damage",
    capacity: 35,
    armor: 108,
    attunement: attribute.unknown,
    icon: pain_editor,
  },
  {
    name: "Painducer",
    effect: "Converts 30% of damage taken into damage-over-time.",
    capacity: 30,
    armor: 138,
    attunement: attribute.unknown,
    icon: painducer,
  },
  {
    name: "Peripheral Inverse",
    effect:
      "The closer an attacking enemy is, the less damage they deal to you.\n-45% incoming damage at 3 m.\nDamage reduction tapers off to 0% at 6 m.",
    capacity: 30,
    armor: 36,
    attunement: attribute.unknown,
    icon: proxishield,
    iconic: true,
  },
  {
    name: "ProxiShield",
    effect:
      "The closer an attacking enemy is, the less damage they deal to you.\n-20% incoming damage at 3 m.\nDamage reduction tapers off to 0% at 6 m.",
    capacity: 10,
    armor: 36,
    attunement: attribute.unknown,
    icon: proxishield,
  },
  {
    name: "RangeGuard",
    effect: "+90 Armor when there are no enemies within 6 m",
    capacity: 14,
    armor: 34,
    attunement: attribute.unknown,
    icon: rangeguard,
  },
  {
    name: "Shock-n-Awe",
    effect:
      "Whenever you take damage, you have a 10% chance to release a large electroshock that deals 500 damage to nearby enemies.",
    capacity: 25,
    armor: 92,
    attunement: attribute.unknown,
    icon: shock_n_awe,
  },
  {
    name: "Subdermal Armor",
    effect: "Armor - simple but effective.",
    capacity: 5,
    armor: 49,
    attunement: attribute.unknown,
    icon: subdermal_armor,
  },
];

export default integumentary_system;
