import React from "react";
import Author from "components/Reuse/Author";
import Date from "components/Reuse/Date";
import three from "assets/images/three.jpg";

import TitlePreview from "components/Reuse/TitlePreview";
function EditorTab(props) {
  const { css, author, category, title, preview, btns } = props;
  return (
    <div className={css.tab}>
      <div className={css.thumb}>
        <Author
          cssWrap={css.authorInfo}
          cssAvatar={css.avatar}
          cssName={css.name}
          src={three}
          name={author}
        />
        <h2 className={css.category}>{category}</h2>
      </div>

      <div className={css.info}>
        <Date css={css.date} date={"Mar 6, 2019"} />
        <TitlePreview
          cssWrap={css.wrapTp}
          cssTitle={css.title}
          cssPreview={css.postPreview}
          title={title}
          preview={preview}
        />
      </div>
      <div className={css.navigate}>
        <button className={css.readMore}>Read More</button>
        <div className={css.circularBtnWrap}>{btns}</div>
      </div>
    </div>
  );
}
export default EditorTab;
