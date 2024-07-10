import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HighlightText } from "../components/core/HomePage/HighlightText";
import CTaButton from "../components/core/HomePage/Button";
import Banner from "../assets/Images/banner.mp4";
import { Codeblock } from "../components/core/HomePage/Codeblock";
import { TimeLineSection } from "../components/core/HomePage/TimeLineSection";
import { LearningSection } from "../components/core/HomePage/LearningSection";
import { InstructorSection } from "../components/core/HomePage/InstructorSection";
import { ExploreMore } from "../components/core/HomePage/ExploreMore";
import Footer from "../components/common/Footer";

const Home = () => {
  return (
    <div>
      <div className="relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center justify-between text-white">
        <Link to={"/signup"}>
          <div className=" w-fit group bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-75 mx-auto rounded-full">
            <div className="mt-16 px-10 py-[5px]  gap-4 flex flex-row items-center group-hover:bg-richblack-900">
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>
        <div className="mt-10 text-center text-4xl">
          Empower Your Future With{" "}
          <HighlightText text={"Coding Skills"}></HighlightText>
        </div>
        <div className="mt-4 min-w-min text-center">
          Mastery of version control with tools like Git ensures effective
          collaboration and code management. Familiarity with frameworks and
          libraries, such as React for web development and Django for backend
          services, enhances productivity. Additionally, knowledge of database
          management, testing, debugging, and software development practices
          ensures robust and maintainable code.
        </div>
        <div className="flex flex-row gap-6 mt-4">
          <CTaButton active={true} linkto={"/signup"}>
            Learn More
          </CTaButton>
          <CTaButton active={false} linkto={"/login"}>
            Book a Demo
          </CTaButton>
        </div>
        <div className="mx-3 my-11 shadow-blue-200">
          <video muted loop autoPlay>
            <source src={Banner} type="video/mp4"></source>
          </video>
        </div>
        <div>
          <Codeblock
            postion={"lg:flex-row"}
            btn1={{
              active: true,
              btnText: "try it yourself",
              linkto: "/signup",
            }}
            heading={
              <div className="text-4xl items-center">
                Unlock Your{" "}
                <HighlightText text={"Coding Potential"}></HighlightText> With
                Our Online Course.
              </div>
            }
            subheading={
              "Online coding courses offer a flexible and accessible way to learn programming skills from the comfort of your home. These courses cater to various skill levels, from beginners to advanced developers, and cover a wide range of programming languages and technologies. With interactive lessons, real-time feedback, and practical projects, learners can apply their knowledge in real-world scenarios. Many platforms also provide community support and resources to enhance the learning experience. Overall, online coding courses are an excellent resource for anyone looking to advance their career or explore new interests in technology"
            }
            btn2={{
              active: false,
              btnText: "learn more",
              linkto: "/login",
            }}
            codeblock={`<!DOCTYPE html>\n<html>\n<head>\n<title>My Simple Webpage</title>\n</head>\n<body>\n<h1>Welcome to My Simple Webpage!</h1>\n<p>This is a paragraph of text to HTML structure.</p>\n<ul>\n<li>First item</li>\n<li>Second item</li>\n<li>Third item</li>\n</ul>\n<a href="https://www.example.com">Visit Example</a>\n</body>\n</html>`}
            codecolor={"text-yellow-50"}
          ></Codeblock>
        </div>
        <div>
          <Codeblock
            postion={"lg:flex-row-reverse"}
            btn1={{
              active: true,
              btnText: "try it yourself",
              linkto: "/signup",
            }}
            heading={
              <div className="text-4xl items-center">
                Unlock Your{" "}
                <HighlightText text={"Coding Potential"}></HighlightText> With
                Our Online Course.
              </div>
            }
            subheading={
              "Online coding courses offer a flexible and accessible way to learn programming skills from the comfort of your home. These courses cater to various skill levels, from beginners to advanced developers, and cover a wide range of programming languages and technologies. With interactive lessons, real-time feedback, and practical projects, learners can apply their knowledge in real-world scenarios. Many platforms also provide community support and resources to enhance the learning experience. Overall, online coding courses are an excellent resource for anyone looking to advance their career or explore new interests in technology"
            }
            btn2={{
              active: false,
              btnText: "learn more",
              linkto: "/login",
            }}
            codeblock={`<!DOCTYPE html>\n<html>\n<head>\n<title>My Simple Webpage</title>\n</head>\n<body>\n<h1>Welcome to My Simple Webpage!</h1>\n<p>This is a paragraph of text to HTML structure.</p>\n<ul>\n<li>First item</li>\n<li>Second item</li>\n<li>Third item</li>\n</ul>\n<a href="https://www.example.com">Visit Example</a>\n</body>\n</html>`}
            codecolor={"text-yellow-50"}
          ></Codeblock>
        </div>
        <ExploreMore></ExploreMore>
      </div>
      <div className="bg-pure-greys-5 text-richblack-700">
        <div className="homepage_bg h-[300px]">
          <div className="w-11/12 max-w-maxContent flex flex-col items-center justify-between mx-auto gap-5">
            <div className="h-[150px]"></div>
            <div className="flex flex-row gap-7 text-white ]">
              <CTaButton active={true} linkto={"/signup"}>
                <div className="flex flex-row gap-2 items-center">
                  Explore Full Catalog
                  <FaArrowRight></FaArrowRight>
                </div>
              </CTaButton>
              <CTaButton active={false} linkto={"/signup"}>
                <div className="flex flex-row gap-2 items-center">
                  Learn more
                </div>
              </CTaButton>
            </div>
          </div>
        </div>
        <div className="w-11/12 max-w-maxContent flex flex-col items-center justify-between mx-auto gap-5">
          <div className="flex flex-row gap-5 mb-10 mt-[95px]">
            <div className=" w-[50%] text-4xl font-semibold">
              Get the Skills you need for accessible{" "}
              <HighlightText text={"Job this is in demand"}></HighlightText>
            </div>
            <div className="flex flex-col gap-10 w-[50%] items-start">
              <div className="text-[20px]">
                The modern StudyNotion is the dictates its own terms. Today , to
                be a compititive specialist requires more than professional
                skills.
              </div>
              <CTaButton active={true} linkto={"/signup"}>
                <div>Learn more</div>
              </CTaButton>
            </div>
          </div>
          <div>
            <TimeLineSection></TimeLineSection>
            <LearningSection></LearningSection>
          </div>
        </div>
        <div className="bg-richblack-900 text-white">
          <div className="w-11/12 max-w-maxContent flex flex-col items-center justify-between mx-auto gap-5">
            <InstructorSection></InstructorSection>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default Home;
