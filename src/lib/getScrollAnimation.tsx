import { Variants } from "framer-motion";

interface ScrollAnimationProps {
  duration?: number;
}

const getScrollAnimation = () => {
  const variants: Variants = {
    offscreen: {
      y: 150,
      opacity: 0,
    },
    onscreen: ({ duration = 2 }: ScrollAnimationProps = {}) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration,
      },
    }),
  };

  return variants;
};

export default getScrollAnimation;
