import React from "react";

import one from "assets/images/one.jpg";
function Slide(props) {
  const { hero, id } = props;

  return (
    <div className={hero.slide}>
      <img src={one} alt='fire' className={hero.thumbNail} />
      <div className={hero.contentInfo}>
        <div className={hero.date}>
          <h3>Date</h3>
          <h4>Mar 6, 2019</h4>
        </div>
        <h2 className={hero.title}>
          {id} Every Level Of Your Life Will Demand A Different You!
        </h2>
        <button className={hero.readMore}>Read More</button>
      </div>
    </div>
  );
}

export default Slide;
