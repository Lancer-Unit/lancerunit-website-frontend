import React from "react";
import Image from "next/image";
import ButtonPrimary from "@/components/ui/buttonPrimary";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "@/lib/ScrollAnimationWrapper";


const Hero: React.FC = () => {
  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="about">
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          
          <div className="flex w-full">
            <motion.div className="h-full w-full">
              <Image
                src="/assets/Illustration1.png"
                alt="VPN Illustration"
                quality={100}
                width={612}
                height={383}
                layout="responsive"
              />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default Hero;





