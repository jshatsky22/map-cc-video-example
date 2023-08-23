import React from "react";
import { useSuperblocksContext } from "@superblocksteam/custom-components";
import { type Props, type EventTriggers } from "./types";
import { Switch } from "@mantine/core";

export default function Component({
  checked,
  label,
  labelPosition,
  description,
  size,
  radius,
  color,
  disabled,
}: Props) {
  const {
    updateProperties,
    events: { onChange },
  } = useSuperblocksContext<Props, EventTriggers>();

  const handleToggle = () => {
    updateProperties({ checked: !checked });
    onChange();
  };

  const position = labelPosition !== "left" ? "right" : "left";

  // check if size is one of "xs", "sm", "md", "lg", "xl", otherwise set it to "md"
  const sizeOptions = ["xs", "sm", "md", "lg", "xl"];
  if (!sizeOptions.includes(size)) {
    size = "md";
  }

  // check if radius is one of "xs", "sm", "md", "lg", "xl", otherwise set it to "md"
  if (!sizeOptions.includes(radius)) {
    radius = "xl";
  }

  // create a colorOptions array which contains the valid color strings for the MatineColor type
  const colorOptions = [
    "dark",
    "lime",
    "grape",
    "pink",
    "teal",
    "blue",
    "red",
    "cyan",
    "gray",
    "yellow",
    "indigo",
    "green",
    "orange",
  ];
  // check if color is one of the valid color strings, otherwise set it to "dark"
  if (!colorOptions.includes(color)) {
    color = "dark";
  }

  return (
    <Switch
      disabled={disabled}
      labelPosition={position}
      description={description}
      size={size}
      radius={radius}
      color={color}
      onChange={handleToggle}
      checked={checked}
      label={label}></Switch>
  );
}
