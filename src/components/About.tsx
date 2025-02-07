import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles.js";
import { IoMdCalendar } from "react-icons/io";
import { me} from "../assets/index.js";
import { SectionWrapper } from "../hoc/index.js";
import { fadeIn, textVariant } from "../utils/motion.js";
import {
  CALENDLY_LINK,
  EMAIL,
  EMAIL_LINK,
  services,
  SOCIALS,
} from "../constants/index.js";

interface ServiceCardProps {
  index: number;
  title: string;
  icon: string;
}

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => (
  <div className="mx-auto flex flex-1 w-[350px] h-[350px] sm:w-full sm:h-full">
    <motion.div
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      // @ts-expect-error
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full p-[1px] rounded-[20px] shadow-2xl dark:shadow-secondary border border-solid theme-gradient"
    >
      <div
        className={`${styles.buttonBg} w-full h-full rounded-[20px] py-5 min-h-[320px] flex justify-evenly items-center flex-col`}
      >
        <div className="px-10 w-full flex justify-center">
          <img src={icon} alt={title} className="w-52 h-52 object-contain" />
        </div>
        <h3 className="text-c-black dark:text-gray-100 px-5 mt-2 text-[20px] font-semibold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </div>
);

const About = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="order-last lg:order-first mt-12 lg:mt-0">
          {/* @ts-expect-error */}
          <motion.div variants={textVariant()}>
            <div>
              <p
                className={`${styles.sectionSubText} text-center md:text-left`}
              >
                Introduction
              </p>
              <h2
                className={`${styles.sectionHeadText} text-center md:text-left`}
              >
                Hi, I'm Hassnain.
              </h2>
            </div>
          </motion.div>
          {/* @ts-expect-error */}
          <motion.div variants={fadeIn("", "", 0.1, 1)}>
            <p className="mt-4 text-c-black dark:text-gray-300 text-[15px] sm:text-lg text-center md:text-left leading-[30px]">
            I'm a Full Stack Developer with 5+ months of experience in React.js, Next.js, React Native, and Node.js, building dynamic and scalable applications.
              <br /> <br />
              If you'd like to know more or discuss opportunities, feel free to
              email me at
              <a href={EMAIL_LINK}>
                {" "}
                <u>{EMAIL}</u>{" "}
              </a>
              or reach out any of the options given below. I'm always happy to
              chat and share more about my work!
            </p>
          </motion.div>
        </div>
        <motion.div
          // @ts-expect-error
          variants={fadeIn("", "", 0.1, 1)}
          className="order-first lg:order-last flex justify-center items-center"
        >
          <div className="bg-[#cbdcef] dark:bg-[#09283c] rounded-[20px] w-72 h-72 sm:w-96 sm:h-96 flex justify-evenly items-center overflow-hidden shadow-2xl dark:shadow-secondary border border-solid theme-gradient">
            <img
              src={me}
              alt="Hassnain Profile Picture"
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        // @ts-expect-error
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-10 flex flex-col sm:flex-row flex-wrap justify-center md:justify-start items-center gap-5"
      >
        <div className="flex gap-5 flex-wrap justify-center md:justify-start items-center">
          {SOCIALS?.map((social, index) => (
            <Tilt key={`socials-${index}`} className="h-full">
              <div className="border border-solid theme-gradient rounded-full">
                <div
                  className={`${styles.buttonBg} p-[1px] rounded-full flex justify-center items-center cursor-pointer select-none`}
                >
                  <a
                    href={social?.link}
                    title={social?.name}
                    target={social?.target}
                    rel="noopener noreferrer"
                    className="w-14 h-14 flex justify-center items-center"
                  >
                    {social?.icon}
                  </a>
                </div>
              </div>
            </Tilt>
          ))}
        </div>

        <div className="flex gap-5 flex-wrap justify-center md:justify-start items-center">
          <Tilt className="h-full">
            <div className="border border-solid theme-gradient rounded-full">
              <div
                className={`${styles.buttonBg} p-[1px] rounded-full flex justify-center items-center cursor-pointer select-none`}
              >
                <a
                  target="_blank"
                  href={CALENDLY_LINK}
                  title="Call Schedule with Hassnain Ahmed on Calendly"
                  className="py-2.5 px-5 rounded-xl outline-none font-medium text-c-black dark:text-gray-300 flex justify-center items-center"
                >
                  <IoMdCalendar size={22} />{" "}
                  <span className="pl-2">Schedule a Call</span>
                </a>
              </div>
            </div>
          </Tilt>

          
        </div>
      </motion.div>

      <div className="mt-20 grid items-center justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-7 xl:gap-10">
        {services.map((service, index) => (
          <ServiceCard key={`service-${index}`} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About);
