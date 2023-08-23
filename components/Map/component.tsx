import React from "react";
import { useSuperblocksContext } from "@superblocksteam/custom-components";
import { type Props, type EventTriggers } from "./types";
import Map from "./components/Map";

export default function Component({ mapArea }: Props) {
  const {
    updateProperties,
    events: { onMapResize },
  } = useSuperblocksContext<Props, EventTriggers>();

  const handleZoom = () => {
    updateProperties({
      mapArea: {
        x: mapArea.x,
        y: mapArea.y,
      },
    });
    onMapResize();
  };

  return (
    <Map
      title={"Real Estate Permits Heatmap"}
      theme="dark"
      mileRadius={50}
      onZoom={handleZoom}></Map>
  );
}
