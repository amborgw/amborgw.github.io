import React from "react";

export default function IconLink(props) {
  return (
    <a href={props.link} target="_blank" aria-label="amborgw github link">
      {props.children}
    </a>
  );
}
