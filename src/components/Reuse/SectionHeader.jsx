import React from "react";
import reuse from "components/Reuse/reuse.module.css";

function SectionHeader(props) {
  return (
    <div className={reuse.wrapSh}>
      <h2 className={reuse.sectionHeader}>{props.text}</h2>
      <h3 className={reuse.sectioDescription}>
        Lorem ipsum dolor sit amet adipisicing elit.
      </h3>
    </div>
  );
}

export default SectionHeader;
