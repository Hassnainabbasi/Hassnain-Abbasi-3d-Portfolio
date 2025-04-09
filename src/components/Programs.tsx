import { styles } from "../styles";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { ProgramInterface, programs } from "../constants";

const ProgramCard = ({
  date,
  title,
  company,
  description,
}: ProgramInterface) => (
  <div className="xs:max-w-[498px] w-full mx-auto">
    <div className="bg-c-white dark:bg-secondary rounded-[20px] py-5 px-5 min-h-[250px] flex justify-start flex-col">
      <div className="flex justify-between items-start">
        <div className="flex-1 flex flex-col">
          <h3 className="text-c-black dark:text-gray-100 font-bold  text-base mb-1 md:text-[24px]">
            {title}
          </h3>
          <p className={styles.sectionSubText}>{company}</p>
          <p className="mt-1 text-sm md:text-[15px] text-gray-500 dark:text-gray-400">
            <i>{date}</i>
          </p>
        </div>
        
      </div>
      <p className="text-c-black mt-3 dark:text-gray-100 tracking-wider text-sm sm:text-[15px]">
        {description}
      </p>
    </div>
  </div>
);

const Programs = () => {
  return (
    <div>
      {/* @ts-expect-error */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center md:text-left`}>
          My Learnings
        </p>
        <h2 className={`${styles.sectionHeadText} text-center md:text-left`}>
          Certifications.
        </h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          // @ts-expect-error
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-[15px] sm:text-lg max-w-3xl leading-[30px] text-c-black dark:text-gray-300 text-center md:text-left"
        >
          I have successfully completed the Saylani Mass IT Training Program and will receive the certificate soon. While I currently don’t hold other official certifications, I am continuously improving my skills through self-learning and real-world project experience. I am passionate about learning modern technologies and strive to enhance my expertise every day.
        </motion.p>
      </div>
      {/* @ts-expect-error */}
      <motion.div variants={fadeIn("up", "spring", 0.5, 0.75)}>
        <div className="mt-20 grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {programs.map((program: ProgramInterface) => (
            <ProgramCard key={program.title} {...program} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Programs);
