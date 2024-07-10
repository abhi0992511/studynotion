import React from "react";
import { HighlightText } from "../components/core/HomePage/HighlightText";
import Banner1 from "../assets/Images/aboutus1.webp";
import Banner2 from "../assets/Images/aboutus2.webp";
import Banner3 from "../assets/Images/aboutus3.webp";
import { Quote } from "../components/core/AboutPage/Quote";
import FoundingImage from "../assets/Images/FoundingStory.png";
import { StatsComponent } from "../components/core/AboutPage/StatsComponent";
import { LearnGrid } from "../components/core/AboutPage/LearnGrid";
import { ContactUs } from "../components/core/AboutPage/ContactUs";
import Footer from "../components/common/Footer"

export const About = () => {
  return (
    <div className="flex flex-col text-white items-center mt-[100px]">
      <section className="w-11/12 max-w-maxContent justify-between items-center">
        <header className="text-4xl text-center">
          <h1 className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg">
            Driving Innovation In Online Education For{" "}
            <HighlightText text={"Bright Future"} />
          </h1>
          <p className="text-xl mt-10 mb-10 drop-shadow-md">
            Driving innovation in online education is pivotal for shaping a
            bright future. By leveraging cutting-edge technologies such as
            artificial intelligence, virtual reality, and adaptive learning
            platforms, we can create personalized, engaging, and accessible
            educational experiences for learners worldwide. These innovations
            not only enhance the quality of education but also bridge gaps,
            offering opportunities to those in remote or underserved areas.
          </p>
        </header>
        <div className="flex gap-x-2 justify-between drop-shadow-lg">
          <img src={Banner1} alt="Banner1" className="rounded-lg" />
          <img src={Banner2} alt="Banner2" className="rounded-lg" />
          <img src={Banner3} alt="Banner3" className="rounded-lg" />
        </div>
      </section>
      <section className="mt-[100px] w-11/12 max-w-maxContent justify-between items-center">
        <div>
          <Quote />
        </div>
      </section>
      <section className="w-11/12 max-w-maxContent justify-between items-center mt-[100px]">
        <div className="flex flex-col">
          <div className="flex gap-x-4 items-center justify-between mx-auto mb-5">
            <div className="w-[40%]">
              <h1 className="text-4xl bg-gradient-to-r from-brown-500 to-brown-300 bg-clip-text text-transparent drop-shadow-lg mb-8">
                Our Founding Story
              </h1>
              <p className="text-md text-left drop-shadow-md">
                Our founding story is one of passion, vision, and a commitment
                to transforming education. It began with a group of educators
                and technologists who shared a common belief: that quality
                education should be accessible to everyone, regardless of their
                location or circumstances. Frustrated by the limitations of
                traditional education systems and inspired by the potential of
                technology, we set out to create a platform that could bridge
                the gap between learners and the knowledge they seek.
              </p>
              <p className="mt-5 drop-shadow-md">
                With countless hours of dedication and a relentless pursuit of
                excellence, we built an online education ecosystem that is
                innovative, inclusive, and impactful. Our journey has been
                driven by the desire to empower learners, inspire educators, and
                shape a brighter future through the power of education.
              </p>
            </div>
            <img
              className="w-[50%] rounded-lg drop-shadow-lg"
              height={5}
              width={5}
              src={FoundingImage}
              alt="Founding"
              loading="lazy"
            />
          </div>
          <div className="flex gap-x-4 items-center justify-between mx-auto mb-5">
            <div className="w-[40%]">
              <h1 className="text-4xl bg-gradient-to-r from-brown-500 to-brown-300 bg-clip-text text-transparent drop-shadow-lg mb-8">
                Our Vision
              </h1>
              <p className="text-md text-left drop-shadow-md">
                Our vision is to revolutionize education by making high-quality,
                innovative learning experiences accessible to everyone,
                everywhere. We strive to create a world where education
                transcends traditional boundaries, leveraging technology to
                foster personalized, engaging, and inclusive learning
                environments. By empowering learners and educators with the
                tools and resources they need to succeed, we aim to unlock the
                full potential of every individual.
              </p>
            </div>
            <div className="w-[40%]">
              <h1 className="text-4xl bg-gradient-to-r from-blue-300 to-blue-200 bg-clip-text text-transparent drop-shadow-lg mb-8">
                Our Mission
              </h1>
              <p className="text-md text-left drop-shadow-md">
                Our mission is to democratize education by providing innovative,
                accessible, and high-quality learning experiences to individuals
                worldwide. We are committed to harnessing the power of
                technology to break down barriers and create personalized
                educational pathways that cater to the diverse needs of
                learners. Through collaboration with educators, technologists,
                and communities, we strive to deliver content that inspires,
                engages, and equips learners with the skills and knowledge
                necessary to succeed in a dynamic global environment.
              </p>
            </div>
          </div>
        </div>
      </section>
      <StatsComponent></StatsComponent>
      <section className="mt-[100px] w-11/12 max-w-maxContent justify-between items-center">
        <LearnGrid></LearnGrid>
      </section>
      <section>
       <ContactUs></ContactUs>
      </section>
     <div className="w-full">
     <Footer></Footer>
     </div>
    </div>

  );
};
