import React, { useEffect } from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <div
      name="about"
      className="w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto">
        <div className="pb-8">
          <h2 className="text-4xl  font-bold inline border-b-4 border-gray-500">
            About
          </h2>
        </div>

        <p
          data-aos="slide-up"
          data-aos-duration="500"
          className="text-xl mt-5 ease-in fade-in"
        >
          I'm Akarsh Mishra, a Full Stack Developer (MERN) with an MCA from KIET
          Group of Institutions (AKTU) and hands-on experience in building
          scalable, secure, and high-performance web applications. 💻 What I Do
          Currently working at FoodNEST(S) Technologies, where I contribute to
          end-to-end full stack development, focusing on: Building dynamic and
          responsive user interfaces using React.js & Next.js Developing robust
          and scalable backend services with Node.js & Express.js Designing,
          managing, and optimizing databases using MongoDB REST API development,
          bug fixing, and performance optimization Writing clean, secure, and
          maintainable code following best practices I’m passionate about
          continuous learning, solving real-world problems, and delivering
          impactful digital solutions through modern web technologies.
        </p>
        <br />
        <p
          data-aos="slide-up"
          data-aos-duration="500"
          className="text-xl mt-5 ease-in fade-in"
        >
          In a constant pursuit of sharing knowledge and fostering growth, I've
          organized numerous technical workshops, imparting valuable insights on
          technologies like Python, Android, and Google Cloud to aspiring
          learners. With a commitment to personal development and a drive for
          making a positive impact within the tech community.
        </p>
        {/* <br />
                <p data-aos="fade-in" data-aos-duration="500" className='text-xl mt-5 ease-in  fade-in'>
                    I've worked for many projects for my clients as well as my personal projects. I also contributed for the GDSC RKMGEC web page. I have a Instagram page (@codewithbiki) where I create content for those who are just starting with programming and have more that 70k followers. I have learning attitude and growth mindset which helps me to collaborate with people and work for the society.
                </p> */}
        <div
          data-aos="zoom-in"
          data-aos-duration="500"
          className="mb-20 fade-in flex mx-auto items-center justify-center hover:scale-105 duration-300 rounded bg-gradient-to-b from-cyan-500 to-blue-500 lg:w-1/5 md:w-1/5 w-2/4 h-10 text-center cursor-pointer mt-10 gap-2"
        >
          <AiOutlineCloudDownload />
          <a href="./Akarsh Mishra.pdf" download>
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
