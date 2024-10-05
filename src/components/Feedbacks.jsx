// import React from "react";
// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { SectionWrapper } from "../hoc";
// import { fadeIn, textVariant } from "../utils/motion";
// import { testimonials } from "../constants/constants";

// const FeedbackCard = ({
//   index,
//   testimonial,
//   name,
//   designation,
//   company,
//   image,
// }) => (
//   <motion.div
//     variants={fadeIn("", "spring", index * 0.5, 0.75)}
//     className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
//   >
//     <p className='text-white font-black text-[48px]'>"</p>

//     <div className='mt-1'>
//       <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

//       <div className='mt-7 flex justify-between items-center gap-1'>
//         <div className='flex-1 flex flex-col'>
//           <p className='text-white font-medium text-[16px]'>
//             <span className='blue-text-gradient'>@</span> {name}
//           </p>
//           <p className='mt-1 text-secondary text-[12px]'>
//             {designation} of {company}
//           </p>
//         </div>

//         <img
//           src={image}
//           alt={`feedback_by-${name}`}
//           className='w-10 h-10 rounded-full object-cover'
//         />
//       </div>
//     </div>
//   </motion.div>
// );

// const Feedbacks = () => {
//   return (
//     <div className={`mt-12 bg-black-100 rounded-[20px]`}>
//       <div
//         className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
//       >
//         <motion.div variants={textVariant()}>
//           <p className={styles.sectionSubText}>What others say</p>
//           <h2 className={styles.sectionHeadText}>Testimonials.</h2>
//         </motion.div>
//       </div>
//       <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
//         {testimonials.map((testimonial, index) => (
//           <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SectionWrapper(Feedbacks, "");

import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import fhamid from "../assets/fhamid.jpg"; // replace with actual path to your photo
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa"; // React Icons for social media

const PersonalDetailCard = ({ title, value }) => (
  <motion.div
    variants={fadeIn("", "spring", 0.5, 0.75)}
    className='bg-black-200 p-7 rounded-3xl xs:w-[500px] w-full'
  >
    <div className='mt-1'>
      <p className='text-white font-medium text-[20px]'>{title}</p>
      <p className='mt-2 text-secondary text-[16px]'>{value}</p>
    </div>
  </motion.div>
);

const PersonalDetails = () => {
  const details = [
    { title: "Name", value: "Fhamid Mottaki Aurnob" },
    { title: "Occupation", value: "Software Developer at Orion Group" },
    { title: "Location", value: "Dhaka, Bangladesh" },
    { title: "Email", value: "fmaurnob0@gmail.com" },
    { title: "Phone", value: "+8801521204516" },
    { title: "Skills", value: "React, JavaScript, Node.js, Flutter, Kotlin" },
    { title: "Hobbies", value: "Reading, Traveling, Coding, Playing Outdoor Games" },
    // Social Media Links
    { 
      title: "Facebook", 
      value: (
        <a href="https://www.facebook.com/fahmid.muttaki" target="_blank" rel="noreferrer">
          <FaFacebook className="text-secondary hover:text-white text-[24px] cursor-pointer" />
        </a>
      ) 
    },
    { 
      title: "LinkedIn", 
      value: (
        <a href="https://www.linkedin.com/in/fhamid-aurnob-115a8915a/" target="_blank" rel="noreferrer">
          <FaLinkedin className="text-secondary hover:text-white text-[24px] cursor-pointer" />
        </a>
      ) 
    },
    { 
      title: "Github", 
      value: (
        <a href="https://github.com/FhamidAurnob" target="_blank" rel="noreferrer">
          <FaGithub className="text-secondary hover:text-white text-[24px] cursor-pointer" />
        </a>
      ) 
    },
  ];

  return (
    <div className={`mt-12 bg-black-100 rounded-[20px] flex flex-col md:flex-row`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px] md:flex-1`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Get to know me</p>
          <h2 className={styles.sectionHeadText}>Personal Details.</h2>
        </motion.div>
        <div className={`-mt-30 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
          {details.map((detail, index) => (
            <PersonalDetailCard key={index} {...detail} />
          ))}
        </div>
      </div>

      {/* Add the photo to the right side */}
      <div className="flex justify-center items-center md:w-[50%] w-full p-5">
        <img
          src={fhamid} // Replace with your actual image path
          alt="Fhamid Mottaki Aurnob"
          className="rounded-3xl object-cover md:w-[300px] w-[200px] h-[400px] md:h-[400px]"
        />
      </div>
    </div>
  );
};

export default SectionWrapper(PersonalDetails, "");
