import attribute from "../enums/attribute";

//TODO: Get higher res images from fandom
import kiroshi_basic from "../../assets/eyes/kiroshi_basic.png";
import kiroshi_stalker from "../../assets/eyes/kiroshi_stalker.webp";
import kiroshi_cockatrice from "../../assets/eyes/kiroshi_cockatrice.png";
import kiroshi_sentry from "../../assets/eyes/kiroshi_sentry.webp";
import kiroshi_oracle from "../../assets/eyes/kiroshi_oracle.png";

const eyes = [
  {
    name: "Basic Kiroshi Optics",
    effect: "-44% camera detection speed\n10x optical zoom when scanning",
    capacity: 1,
    attunement: attribute.unknown,
    icon: kiroshi_basic,
  },
  {
    name: 'Kiroshi "Clairvoyant" Optics',
    effect:
      "Effect active when scanning:\nHighlights enemies within 19.5m.\nThe effect remains active for 60 sec. after scanning.\n10x optical zoom when scanning ",
    capacity: 8,
    attunement: attribute.unknown,
    icon: kiroshi_stalker,
  },
  {
    name: 'Kiroshi "Cockatrice" Optics',
    effect: "Increases Crit Chance by 35%\n10x optical zoom when scanning",
    capacity: 30,
    attunement: attribute.unknown,
    icon: kiroshi_cockatrice,
    iconic: true,
  },
  {
    name: 'Kiroshi "Doomsayer" Optics',
    effect:
      "Effect active when scanning:\nHighlight explosive devices and traps near your crosshair and within 29m.\nThe effect remains active for 60 sec. after scanning.\n10x optical zoom when scanning",
    capacity: 2,
    attunement: attribute.unknown,
    icon: kiroshi_sentry,
  },
  {
    name: 'Kiroshi "Sentry" Optics',
    effect:
      "Effect active when scanning:\nHighlights cameras and turrets within 39m.\nThe effect remains active for 60 sec. after scanning.\n10x optical zoom when scanning ",
    capacity: 2,
    attunement: attribute.unknown,
    icon: kiroshi_sentry,
  },
  {
    name: 'Kiroshi "Stalker" Optics',
    effect:
      "Automatically connects to your equipped Tech weapon.\nWhen aiming:\nHighlights enemies behind cover for 24% of your field of vision and up to 53 m. deep.\n10x optical zoom when scanning",
    capacity: 2,
    attunement: attribute.unknown,
    icon: kiroshi_stalker,
  },
  {
    name: 'Kiroshi "The Oracle" Optics',
    effect:
      "Effects active when scanning:\nHighlights enemies within 19.5m, including enemies behind cover.\nHighlights cameras and turrets within 39m.\nHighlights explosive devices and traps near your crosshair and within 29m.\nThese effects remain active for 60 sec. after scanning.\n10x optical zoom when scanning ",
    capacity: 10,
    attunement: attribute.unknown,
    icon: kiroshi_oracle,
  },
];

export default eyes;
