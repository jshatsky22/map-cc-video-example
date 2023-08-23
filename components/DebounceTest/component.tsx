import React from "react";
import { useSuperblocksContext } from "@superblocksteam/custom-components";
import { type Props, type EventTriggers } from "./types";
import { debounce, now } from "lodash";

export default function Component({}: Props) {
  const {
    updateProperties,
    events: {},
  } = useSuperblocksContext<Props, EventTriggers>();

  const clickLogger = (random: string) => {
    console.log("clicked!", random, new Date(now()));
    debouncedClickLogger(random);
  };

  const debouncedClickLogger = debounce(
    (random: string) => {
      console.log("debounced click!", random, new Date(now()));
    },
    1000,
    { leading: true, trailing: true }
  );

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#a7aebe",
      }}>
      <h1 style={{ color: "white" }}>{"<Insert Component Here>"}</h1>
      <button
        onClick={() => clickLogger(Math.random().toString(36).substring(2, 8))}>
        Click
      </button>
    </div>
  );
}
