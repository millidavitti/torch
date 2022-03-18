import React, { useRef, useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
// import three from "assets/images/three.jpg";

// import five from "assets/images/five.jpg";
// import six from "assets/images/six.jpg";

import editors from "components/EditorsPick/editors.module.css";

import SectionHeader from "components/Reuse/SectionHeader";
import EditorTab from "./EditorTab";

import CircularBtn from "./CircularBtn";

function EditorsPick() {
  const array = [
    {
      id: 1,
      author: "Donald Abua",
      category: "Fashion",
      date: "Jan 17, 2019",
      title: "Every Level Of Your Life Will Demand A Different You!",
      preview:
        "Fashion ipsum dolor sit amet consectetur adipisicing elit. Autem corrupti ad impedit? Incidunt, corrupti sequi.",
      isActive: true,
    },

    {
      id: 2,
      author: "Vegan Bake",
      category: "Ganja",
      date: "Dec 16, 2020",
      title: "Every Level Of Your Life Will Demand A Different You!",
      preview:
        "Ganja ipsum dolor sit amet consectetur adipisicing elit. Autem corrupti ad impedit? Incidunt, corrupti sequi.",
      isActive: false,
    },
    {
      id: 3,
      author: "Ukwun Abua ",
      category: "Drums",
      date: "Mar 28, 2020",
      title: "Every Level Of Your Life Will Demand A Different You!",
      preview:
        "David ipsum dolor sit amet consectetur adipisicing elit. Autem corrupti ad impedit? Incidunt, corrupti sequi.",
      isActive: false,
    },
  ];

  const [idd, setIdd] = useState(1);
  const [picks, setPicks] = useState(array);
  const renderBtns = array.map(({ id }) => (
    <CircularBtn key={id} id={id} Fn={switchPicks} />
  ));

  function switchPicks(id) {
    setIdd(id);
    setPicks((pre) =>
      pre.map((pick) =>
        pick.id === id
          ? { ...pick, isActive: true }
          : { ...pick, isActive: false }
      )
    );
  }

  return (
    <section className={editors.editorsPick}>
      <SectionHeader text={`Editor's Pick`} />
      <SwitchTransition>
        <CSSTransition key={idd} timeout={1500} classNames={editors}>
          <EditorTab
            css={editors}
            author={picks[idd - 1].author}
            category={picks[idd - 1].category}
            date={picks[idd - 1].date}
            title={picks[idd - 1].title}
            preview={picks[idd - 1].preview}
            btns={renderBtns}
          />
        </CSSTransition>
      </SwitchTransition>
    </section>
  );
}

export default EditorsPick;
/*<CSSTransition
  in={true}
  timeout={500}
  classNames={editors.tab}
  unmountOnExit={true}
>
   <div className={editors.tab}>
          <div className={editors.thumb}>
            <Author
              cssWrap={editors.authorInfo}
              cssAvatar={editors.avatar}
              cssName={editors.name}
              src={three}
              name='Vegan Bake'
            />
            <h2 className={editors.category}>Fashion</h2>
          </div>
          <div className={editors.info}>
            <Date css={editors.date} />
            <TitlePreview
              cssWrap={editors.wrapTp}
              cssTitle={editors.title}
              cssPreview={editors.postPreview}
              title='Every Level Of Your Life Will Demand A Different You!'
              preview='Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            corrupti ad impedit? Incidunt, corrupti sequi.'
            />
          </div>
        </div> 
</CSSTransition>;

*/
