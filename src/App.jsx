import React from "react";
// import { Route, Routes } from "react-router-dom";

// Components
import Header from "components/Navigation/Header";
import Hero from "components/Hero/Hero";
import EditorsPick from "components/EditorsPick/EditorsPick";
import SectionHeader from "components/Reuse/SectionHeader";
import TitlePreview from "components/Reuse/TitlePreview";
import ReadMore from "components/Reuse/ReadMore";

// Assets
import five from "assets/images/five.jpg";
import six from "assets/images/six.jpg";
import seven from "assets/images/seven.jpg";
import eight from "assets/images/eight.jpg";
import nine from "assets/images/nine.jpg";
import ten from "assets/images/ten.jpg";

// CSS
import travel from "components/Reuse/CSS/travel.module.css";
import health from "components/Reuse/CSS/health.module.css";
import latest from "components/Reuse/CSS/latest.module.css";
import Author from "components/Reuse/Author";
import Date from "components/Reuse/Date";

export default function App() {
  return (
    <main className='container'>
      <Header />
      <Hero />
      <EditorsPick />
      <section className={travel.travel}>
        <SectionHeader
          text='Travel News'
          description='Lorem ipsum dolor sit amet adipisicing elit.'
        />
        <TitlePreview
          cssWrap={travel.wrapTp}
          cssTitle={travel.title}
          cssPreview={travel.postPreview}
          title={"That Which Does Not Kill Us Makes Us Stronger"}
          preview={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius et non aliquam dolor facere quam ducimus officia perspiciatis numquam assumenda."
          }
          href={"https://google.com"}
        />
        <ReadMore />
        <img src={five} alt='' className={travel.thumb} />
        <div>
          <img src={six} alt='' className={travel.thumb} />
          <TitlePreview
            cssWrap={travel.wrapTp}
            cssTitle={travel.title}
            cssPreview={travel.postPreview}
            title={"He Who Has a Why to Live Can Bear Almost Any How"}
            href={"https://google.com"}
          />
        </div>
        <div>
          <img src={seven} alt='' className={travel.thumb} />
          <TitlePreview
            cssWrap={travel.wrapTp}
            cssTitle={travel.title}
            cssPreview={travel.postPreview}
            title={
              "We Are All in the Gutter, but Some of Us Are Looking at the Stars"
            }
            href={"https://google.com"}
          />
        </div>
      </section>
      <section className={health.health}>
        <SectionHeader
          text='Health News'
          description='Lorem ipsum dolor sit amet adipisicing elit.'
        />
        <img src={eight} alt='' className={health.thumb} />
        <Author
          cssWrap={health.wrapAuth}
          cssAvatar={health.avatar}
          cssName={health.name}
          name='Desmond Abua'
          src={six}
        />
        <TitlePreview
          cssWrap={health.wrapTp}
          cssTitle={health.title}
          cssPreview={health.postPreview}
          title={"If You Don’t Stand for Something You Will Fall for Anything"}
          preview={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius et non aliquam dolor facere quam ducimus officia perspiciatis numquam assumenda."
          }
          href={"https://google.com"}
        />
        <ReadMore />
        <div>
          <TitlePreview
            cssWrap={`${health.wrapTp} ${health.modWrapTp}`}
            cssTitle={health.title}
            title={
              "The Greatest Thing in The World is to Know How to Belong to Oneself"
            }
            href={"https://google.com"}
          />
          <Date css={health.date} date={"Jan 17, 2037"} head={false} />{" "}
          <TitlePreview
            cssWrap={`${health.wrapTp} ${health.modWrapTp}`}
            cssTitle={health.title}
            title={"The Two Most Powerful Warriors Are Patience and Time"}
            href={"https://google.com"}
          />
          <Date css={health.date} date={"Jan 17, 2037"} head={false} />{" "}
          <TitlePreview
            cssWrap={`${health.wrapTp} ${health.modWrapTp}`}
            cssTitle={health.title}
            title={"You Will Become as Small as Your Controlling Desire"}
            href={"https://google.com"}
          />
          <Date css={health.date} date={"Jan 17, 2037"} head={false} />{" "}
        </div>
      </section>
      <section className={latest.latest}>
        <SectionHeader
          text={"Latest News"}
          description={"Lorem ipsum dolor sit amet adipisicing elit."}
        />
        <div className={latest.thumbWrap}>
          <img src={nine} alt='' className={latest.thumb} />
          <Author
            cssWrap={latest.wrapAuth}
            cssAvatar={latest.avatar}
            cssName={latest.name}
            name={"Vegan Bake"}
            src={ten}
          />
        </div>
        <div>
          <Date css={latest.date} date={"Dec 16, 3020"} head={true} />
          <TitlePreview
            cssWrap={latest.wrapTp}
            cssTitle={latest.title}
            cssPreview={latest.postPreview}
            title={
              "The Greatest Thing in The World is to Know How to Belong to Oneself"
            }
            preview={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius et non aliquam dolor numquam assumenda."
            }
          />
          <ReadMore href={"https://google.com"} />
        </div>
      </section>
    </main>
  );
}
