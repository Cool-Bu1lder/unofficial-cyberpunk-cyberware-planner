import attribute from "../enums/attribute";

//TODO: Get higher res images from fandom
import bionic_joints from "../../assets/skeleton/bionic_joints.webp";
import dense_marrow from "../../assets/skeleton/dense_marrow.webp";
import epimorphic_skeleton from "../../assets/skeleton/epimorphic_skeleton.webp";
import feen_x from "../../assets/skeleton/feen_x.webp";
import kinetic_frame from "../../assets/skeleton/kinetic_frame.webp";
import para_bellum from "../../assets/skeleton/para_bellum.webp";
import ram_recoup from "../../assets/skeleton/ram_recoup.png";
import scar_coalescer from "../../assets/skeleton/scar_coalescer.webp";
import scarab from "../../assets/skeleton/scarab.webp";
import spring_joints from "../../assets/skeleton/spring_joints.png";
import titanium_bones from "../../assets/skeleton/titanium_bones.webp";
import universal_booster from "../../assets/skeleton/universal_booster.webp";

const skeleton = [
  {
    name: "Bionic Joints",
    effect: "Armor - simple but effective.",
    capacity: 8,
    armor: 85,
    attunement: attribute.unknown,
    icon: bionic_joints,
  },
  {
    name: "Dense Marrow",
    effect: "+27% melee damage +20% melee Stamina cost",
    capacity: 16,
    armor: 42,
    attunement: attribute.unknown,
    icon: dense_marrow,
  },
  {
    name: "Epimorphic Skeleton",
    effect: "+13% Max Health",
    capacity: 40,
    armor: 126,
    attunement: attribute.unknown,
    icon: epimorphic_skeleton,
  },
  {
    name: "Feen-X",
    effect: "+250% RAM Regen Rate when available RAM is below 7",
    capacity: 16,
    armor: 31,
    attunement: attribute.unknown,
    icon: feen_x,
  },
  {
    name: "Kinetic Frame",
    effect: "+16% Mitigation Chance when Stamina is above 85%. ",
    capacity: 16,
    armor: 17,
    attunement: attribute.unknown,
    icon: kinetic_frame,
  },
  {
    name: "Para Bellum",
    effect: "+13% Armor",
    capacity: 25,
    armor: 150,
    attunement: attribute.unknown,
    icon: para_bellum,
  },
  {
    name: "RAM Recoup",
    effect:
      "Receiving damage restores RAM equal to 0.28% of damage received.\n+2 Max RAM",
    capacity: 14,
    armor: 34,
    attunement: attribute.unknown,
    icon: ram_recoup,
  },
  {
    name: "Rara Avis",
    effect: "+40% Armor",
    capacity: 45,
    armor: 0,
    attunement: attribute.unknown,
    icon: para_bellum,
    iconic: true,
  },
  {
    name: "Scar Coalescer",
    effect: "+22% Armor when below 50% Health.",
    capacity: 20,
    armor: 16,
    attunement: attribute.unknown,
    icon: scar_coalescer,
  },
  {
    name: "Scarab",
    effect: "When crouched:\n+110 Armor\n-20% Movement Speed",
    capacity: 14,
    armor: 34,
    attunement: attribute.unknown,
    icon: scarab,
  },
  {
    name: "Spring Joints",
    effect:
      "+16% Mitigation Strength\n(Total Mitigation Strength cannot exceed 90%)",
    capacity: 16,
    armor: 16,
    attunement: attribute.unknown,
    icon: spring_joints,
  },
  {
    name: "Titanium Bones",
    effect: "+62% Carrying Capacity",
    capacity: 5,
    armor: 34,
    attunement: attribute.unknown,
    icon: titanium_bones,
  },
  {
    name: "Universal Booster",
    effect:
      "Health Items now also give:\n+9% Armor for sec.\n-27% all Stamina cost for 5 sec.\nThese effects do not stack.",
    capacity: 25,
    armor: 42,
    attunement: attribute.unknown,
    icon: universal_booster,
  },
];

export default skeleton;
