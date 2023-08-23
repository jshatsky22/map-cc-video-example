import { type ComponentConfig } from "@superblocksteam/custom-components";

export default {
  // DO NOT CHANGE THE ID ONCE THE COMPONENT HAS BEEN REGISTERED!
  id: "f7e40645-048b-4b00-917c-5e7d52678b89",
  name: "Map",
  displayName: "Map",
  componentPath: "components/Map/component.tsx",
  properties: [
    {
      path: "mapArea",
      dataType: "any",
    },
  ],
  events: [
    {
      label: "On Map Resize",
      path: "onMapResize",
    },
  ],
} satisfies ComponentConfig;
