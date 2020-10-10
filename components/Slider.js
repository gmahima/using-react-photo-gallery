import React, { useState } from "react";
import styled from "styled-components";
import {
  AnimatePresence,
  PanInfo,
  motion,
  useMotionValue,
  useDragControls,
  useAnimation,
  useTransform
} from "framer-motion";
import Slide  from "./Slide";

const SliderRoot = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  margin: 100px auto;
  height: 300px;
  width: 300px;
  border: 1px solid red;
`;

const circulate = (min, max,value) => {
    const range = max - min;
    return ((((value - min) % range) + range) % range) + min;
};

const Slider = ({images, initialSlide}) => {
  const [slide, setSlide] = useState(initialSlide);
  return (
    <div></div>
  )
}

export default Slider


// import React, { useState } from "react";
// import styled from "styled-components";
// import {
//   AnimatePresence,
//   PanInfo,
//   motion,
//   useMotionValue,
//   useDragControls,
//   useAnimation,
//   useTransform
// } from "framer-motion";

// /**
//  *
//  */
// import { Slide } from "./Slide";

// /**
//  *
//  */
// import { circulate } from "../utils";

// const DragOverlay = styled(motion.div)`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   z-index: 10;
// `;

// const SliderRoot = styled.div`
//   display: flex;
//   overflow: hidden;
//   position: relative;
//   margin: 100px auto;
//   height: 300px;
//   width: 300px;
//   border: 1px solid red;
// `;

// export type SliderProps = {
//   images: Array<string>;
// };

// export const Slider = ({ images }: SliderProps) => {
//   const [slide, setSlide] = useState(0);
//   const [direction, seDirection] = useState(0);
//   const x = useMotionValue(0);
//   const input = [-200, 0, 200];
//   const output = [0, 1, 0];
//   const opacity = useTransform(x, input, output);
//   const controls = useAnimation();
//   const dragControls = useDragControls();

//   const index = circulate(0, images.length, slide);
//   const nextIndex = circulate(0, images.length, slide + 1);
//   const prevIndex = circulate(0, images.length, slide - 1);

//   function startDrag(event) {
//     dragControls.start(event, { snapToCursor: true });
//   }

//   const paginate = (newDirection: number) => {
//     //setPage([page + newDirection, newDirection]);
//     seDirection(newDirection);
//     setSlide(val => val + newDirection);
//   };

//   const handleDrag = (
//     event: MouseEvent | TouchEvent | PointerEvent,
//     { offset, delta, point }: PanInfo
//   ) => {
//     // const newX = x.get() + delta.x;
//     const newX = point.x;
//     x.set(newX);
//     controls.start({ x: newX });
//   };

//   const handleDragEnd = (
//     event: MouseEvent | TouchEvent | PointerEvent,
//     { offset, velocity }: PanInfo
//   ) => {
//     //const swipe = swipePower(offset.x, velocity.x);
//     const swipe = offset.x;
//     const swipeThreshold = 100;
//     //x.set(0);
//     //x.start(0);
//     controls.start({ x: 0 });

//     if (swipe < -swipeThreshold) {
//       paginate(1);
//     } else if (swipe > swipeThreshold) {
//       paginate(-1);
//     }
//   };

//   return (
//     <AnimatePresence initial={false}>
//       <SliderRoot>
//         <DragOverlay
//           onMouseDown={startDrag}
//           //
//           drag="x"
//           dragConstraints={{ left: 0, right: 0 }}
//           style={{ x, opacity }}
//           onDragEnd={handleDragEnd}
//           // onDrag={handleDrag}
//         />
//         <Slide
//           images={images}
//           x={x}
//           index={index}
//           nextIndex={nextIndex}
//           prevIndex={prevIndex}
//         />
//       </SliderRoot>
//     </AnimatePresence>
//   );
// };


// slide

// const Image = styled(motion.img)`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   pointer-events: none;

//   &:nth-of-type(1) {
//     margin-left: -300px;
//   }
// `;

// export type SlideProps = {
//   images: Array<string>;
//   index: number;
//   prevIndex: number;
//   nextIndex: number;
//   x: MotionValue<number>;
// };

// export const Slide = ({
//   images,
//   index,
//   prevIndex,
//   nextIndex,
//   x
// }: SlideProps) => {
//   return (
//     <>
//       <Image
//         key={images[prevIndex]}
//         src={images[prevIndex]}
//         alt=""
//         style={{ x }}
//       />
//       <Image
//         key={images[index]}
//         src={images[index]}
//         alt=""
//         style={{ x }}
//         enter={{
//           x: -100
//         }}
//       />
//       <Image
//         key={images[nextIndex]}
//         src={images[nextIndex]}
//         alt=""
//         style={{ x }}
//       />
//     </>
//   );
// };
