export const pageAnimation = {
  hidden: {
    opacity: 1,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeIn",
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
  exit: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
export const titleAnime = {
  hidden: { y: 100 },
  show: { y: 0, transition: { duration: 0.5, ease: "easeIn" } },
};
export const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1, ease: "easeIn" } },
};
export const photoAnime = {
  hidden: { scale: 1.5, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};
export const lineAnime = {
  hidden: { width: "0%" },
  show: {
    width: "100%",
    transition: {
      duration: 1,
    },
  },
};
export const slider = {
  hidden: { x: "-130%", skew: "45deg" },
  show: {
    x: "100%",
    skew: "0deg",
    transition: { duration: 0.5, ease: "easeOut" },
  },
};
