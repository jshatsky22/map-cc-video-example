import { type ComponentConfig } from "@superblocksteam/custom-components";

export default {
  // DO NOT CHANGE THE ID ONCE THE COMPONENT HAS BEEN REGISTERED!
  id: "5dfff3ee-7183-4230-a3b3-5b6bdb593f72",
  name: "JSONSurvey",
  displayName: "JSON Survey",
  componentPath: "components/JSONSurvey/component.tsx",
  properties: [
    {
      propertiesPanelDisplay: {
        label: "Survey Json",
        controlType: "js-expr",
      },
      path: "surveyJson",
      dataType: "any",
    },
    {
      path: "surveyResult",
      dataType: "any",
    },
    {
      path: "currentPageNumber",
      dataType: "number",
    },
  ],
  events: [
    {
      label: "On Submit",
      path: "onSubmit",
    },
    {
      label: "On Next",
      path: "onNext",
    },
  ],
} satisfies ComponentConfig;
