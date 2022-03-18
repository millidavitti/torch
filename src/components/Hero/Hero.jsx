import React from "react";
import hero from "components/Hero/hero.module.css";

// Assets
import two from "assets/images/two.jpg";
import six from "assets/images/six.jpg";

// Components
import Slider from "./Slider";
import Author from "components/Reuse/Author";

function Hero() {
  return (
    <section className={hero.hero}>
      <Slider css={hero} />
      <div className={hero.post}>
        <h2 className={hero.postHead}>
          You Have as much Laughter as You Have Faith
        </h2>
        <img src={two} alt='' className={hero.postThumb} />
        <Author
          cssWrap={hero.authorInfo}
          cssAvatar={hero.avatar}
          cssName={hero.name}
          src={six}
          name='Donald Abua'
        />
      </div>
    </section>
  );
}

export default Hero;
