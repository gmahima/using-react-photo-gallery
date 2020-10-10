import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import styled, {css} from 'styled-components'
import tw from 'twin.macro'
// import "./slider.css";

const Image = styled(motion.img) `
position: absolute;
max-width: 100vw;
`
const Btn = styled.div `
top: calc(50% - 20px);
position: absolute;
background: white;
border-radius: 30px;
width: 40px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
user-select: none;
cursor: pointer;
font-weight: bold;
font-size: 18px;
z-index: 2;
${props => {
    if(props.next) {
        return `
        right: 10px;
        `
    }
    if(props.prev) {
        return `
        left: 10px;
        transform: scale(-1);
        `
    }
}}
`
const images = [
  "https://unsplash.it/200/200",
  "https://unsplash.it/400/200",
  "https://unsplash.it/200/400",
  "https://unsplash.it/600/600",
  "https://unsplash.it/1200/600",
  "https://unsplash.it/640/360"
];
// .example-container {
//     width: 100vw;
//     height: 100vh;
//     position: relative;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
// .next,
// .prev {
//   top: calc(50% - 20px);
//   position: absolute;
//   background: white;
//   border-radius: 30px;
//   width: 40px;
//   height: 40px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   user-select: none;
//   cursor: pointer;
//   font-weight: bold;
//   font-size: 18px;
//   z-index: 2;
// }

// .next {
//   right: 10px;
// }

// .prev {
//   left: 10px;
//   transform: scale(-1);
// }

// img {
//   position: absolute;
//   max-width: 100vw;
// }

// .refresh {
//   padding: 10px;
//   position: absolute;
//   background: rgba(0, 0, 0, 0.4);
//   border-radius: 10px;
//   width: 20px;
//   height: 20px;
//   top: 10px;
//   right: 10px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   cursor: pointer;
// }

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

export const Example = ({i, photos}) => {
    console.log(i)
  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(i, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <Image
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 100, damping: 100 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <Btn onClick={() => paginate(1)} next>
        {"‣"}
      </Btn>
      <Btn prev onClick={() => paginate(-1)}>
        {"‣"}
      </Btn>
    </>
  );
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export default Example;