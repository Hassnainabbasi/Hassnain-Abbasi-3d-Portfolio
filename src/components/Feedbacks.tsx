// import { styles } from "../styles";
// import { motion } from "framer-motion";
// import { SectionWrapper } from "../hoc";
// // import { testimonials } from "../constants";
// import { fadeIn, textVariant } from "../utils/motion";

// interface FeedbackCardProps {
//   name: string;
//   image: string;
//   index: number;
//   // testimonial: string;
// }

// const FeedbackCard = ({
//   name,
//   image,
//   index,
//   // testimonial,
// }: FeedbackCardProps) => (
//   <motion.div
//     // @ts-expect-error
//     variants={fadeIn("", "spring", index * 0.5, 0.75)}
//     className="bg-c-white dark:bg-secondary p-5 rounded-3xl max-w-[400px] w-full h-full min-h-[350px] flex flex-col justify-between mx-auto"
//   >
//     <p className="text-c-black dark:text-gray-100 font-black text-[36px] sm:text-[48px]">
//       "
//     </p>

//     <p className="mt-1 text-c-black dark:text-gray-100 tracking-wider text-sm sm:text-[16px]">
//       {/* {testimonial} */}
//     </p>

//     <div className="mt-7 flex justify-between items-center gap-1">
//       <div className="flex-1 flex flex-col">
//         <p className="text-c-black dark:text-gray-100 font-medium text-[16px]">
//           <span className="blue-text-gradient">@</span> {name}
//         </p>
//       </div>

//       <img
//         src={image}
//         alt={`feedback_by-${name}`}
//         className="w-12 h-12 object-top rounded-full object-cover"
//       />
//     </div>
//   </motion.div>
// );

// const Feedbacks = () => {
//   return (
//     <div className="p-0 sm:p-14 border-0 sm:border border-solid theme-gradient rounded-3xl">
//       {/* @ts-expect-error */}
//       <motion.div variants={textVariant()}>
//         <p className={`${styles.sectionSubText} text-center md:text-left`}>
//           What others say
//         </p>
//         <h2 className={`${styles.sectionHeadText} text-center md:text-left`}>
//           Testimonials.
//         </h2>
//       </motion.div>

//       <div className="w-full flex">
//         <motion.p
//           // @ts-expect-error
//           variants={fadeIn("", "", 0.1, 1)}
//           className="mt-3 max-w-3xl leading-[30px] text-c-black dark:text-gray-300 text-center md:text-left text-[15px] sm:text-lg"
//         >
//           Here's what clients have to say about the services I've provided.
//           Their feedback reflects how my work has helped them achieve success
//           and solve problems. Each testimonial offers a personal look into how
//           working together has made a real difference. I’m grateful for their
//           trust and the opportunity to contribute to their journeys.
//         </motion.p>
//       </div>

//       {/* @ts-expect-error */}
//       <motion.div variants={fadeIn("up", "spring", 0.5, 0.75)}>
//         <div className="mt-20 grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {testimonials.map((testimonial, index) => (
//             <FeedbackCard
//               key={testimonial.name}
//               index={index}
//               {...testimonial}
//             />
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default SectionWrapper(Feedbacks);
