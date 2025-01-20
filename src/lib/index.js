import frontal_cortex from "./modules/frontal_cortex";
// os
import eyes from "./modules/eyes";
import arms from "./modules/arms";
import skeleton from "./modules/skeleton";
import hands from "./modules/hands";
import nervous_system from "./modules/nervous_system";
import circulatory_system from "./modules/circulatory_system";
import integumentary_system from "./modules/integumentary_system";
import legs from "./modules/legs";

const cyberware = [
  {
    name: "Frontal Cortex",
    slots: [null, null, null],
    items: frontal_cortex,
  },
  // os 1: sandevistan, cyberdeck, beserk, chrome compressor
  {
    name: "Arms",
    slots: [null],
    items: arms,
  },
  {
    name: "Face",
    slots: [null],
    items: eyes,
  },
  {
    name: "Skeleton",
    slots: [null, null, null],
    items: skeleton,
  },
  {
    name: "Hands",
    slots: [null, null],
    items: hands,
  },
  {
    name: "Nervous System",
    slots: [null, null, null],
    items: nervous_system,
  },
  {
    name: "Circulatory System",
    slots: [null, null, null],
    items: circulatory_system,
  },
  {
    name: "Integumentary System",
    slots: [null, null, null],
    items: integumentary_system,
  },
  {
    name: "Legs",
    slots: [null],
    items: legs,
  },
];

cyberware.forEach((category) => {
  category.items.forEach((item, itemIndex) => {
    item.id = itemIndex;
  });
});

export default cyberware;
