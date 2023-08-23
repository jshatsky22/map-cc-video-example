import React, { useCallback, useMemo } from "react";
import { EventTriggers, Props } from "./types";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { useSuperblocksContext } from "@superblocksteam/custom-components";

export default function Component({ surveyJson, currentPageNumber }: Props) {
  const survey = useMemo(() => new Model(surveyJson), [surveyJson]);

  const { updateProperties, events } = useSuperblocksContext<
    Props,
    EventTriggers
  >();
  const { onNext, onSubmit } = events;

  console.log("===survey", survey.currentPageNo);
  const onNextFunc = useCallback(() => {
    const navigatedForward = survey.nextPage();
    if (!navigatedForward) {
      alert("Navigation failed!");
    }
    updateProperties({ currentPageNumber: survey.currentPageNo });
    onNext();
  }, []);

  const alertResults = useCallback((sender: any) => {
    const results = JSON.stringify(sender.data);
    updateProperties({ surveyResult: results });
    onSubmit();
  }, []);

  survey.onComplete.add(alertResults);
  return (
    <div>
      <Survey model={survey} />
      <button onClick={onNextFunc}>Next</button>
    </div>
  );
}
