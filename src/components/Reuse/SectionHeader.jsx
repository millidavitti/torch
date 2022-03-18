import React from "react";
import reuse from "components/Reuse/reuse.module.css";

function SectionHeader(props) {
  const { text, description } = props;
  return (
    <div className={reuse.wrapSh}>
      <h2 className={reuse.sectionHeader}>{text}</h2>
      <h3 className={reuse.sectioDescription}>{description}</h3>
    </div>
  );
}

export default SectionHeader;
