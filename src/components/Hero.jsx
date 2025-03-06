import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm
            <a
              href="www.linkedin.com/in/anishkumar-a-0a1520235"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#915EFF] hover:underline ml-1"
            >
              Anishkumar A
            </a>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Passionate about building innovative solutions for real-world problems with a technical touch.
          </p>

          <div className="mt-4 text-white-100">
            <h2 className="text-lg font-semibold text-[#915EFF]">Expertised in</h2>
            <ul className="mt-2 space-y-1">
              <li> Custom Web & App Development  ||  User-Centric UI/UX  ||  Cloud & Scalable Solutions  ||  SEO & Digital Strategy  ||  Quality Assurance & Support</li>
            </ul>
          </div>

        </div>

      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
