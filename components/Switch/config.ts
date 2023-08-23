import { type ComponentConfig } from "@superblocksteam/custom-components";

export default {
  // DO NOT CHANGE THE ID ONCE THE COMPONENT HAS BEEN REGISTERED!
  id: "eef98f8c-22e5-4669-acfb-fa1819bc77f0",
  name: "Switch",
  displayName: "Switch",
  componentPath: "components/Switch/component.tsx",
  properties: [
    {
      path: "checked",
      dataType: "boolean",
      propertiesPanelDisplay: undefined,
    },
    {
      path: "labelPosition",
      dataType: "string",
      propertiesPanelDisplay: {
        label: "Label Position",
        controlType: "text",
        placeholder: "left",
        exampleData: "left, right",
      },
    },
    {
      path: "label",
      dataType: "string",
      propertiesPanelDisplay: {
        label: "Label",
        controlType: "text",
        placeholder: "Allow Notifications",
      },
    },
    {
      path: "description",
      dataType: "string",
      propertiesPanelDisplay: { label: "Description", controlType: "text" },
    },
    {
      path: "size",
      dataType: "string",
      propertiesPanelDisplay: { label: "Size", controlType: "text" },
    },
    {
      path: "radius",
      dataType: "string",
      propertiesPanelDisplay: { label: "Radius", controlType: "text" },
    },
    {
      path: "color",
      dataType: "string",
      propertiesPanelDisplay: { label: "Color", controlType: "text" },
    },
    {
      path: "disabled",
      dataType: "boolean",
      propertiesPanelDisplay: { label: "Disabled", controlType: "switch" },
    },
  ],
  events: [
    {
      label: "On Change",
      path: "onChange",
    },
  ],
} satisfies ComponentConfig;
