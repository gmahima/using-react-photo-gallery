import Head from 'next/head'
import styled from 'styled-components'
import tw from 'twin.macro'
import Gallery from 'react-photo-gallery'

const Container = styled.div`
${tw `
 bg-gray-100 h-full min-h-screen pb-8 flex flex-col p-12 items-center justify-center
`}
`
const GalleryContainer = styled.div`
${tw `
 bg-gray-200 p-12 h-80 overflow-hidden overflow-y-auto overscroll-none
`}
`
const photos = [
  {
    src: 'https://source.unsplash.com/400x400/?nature,tree',
    alt: 'random unsplash',
    key: '1'
  },
  {
    src: 'https://source.unsplash.com/400x400/?nature,tree',
    alt: 'random unsplash',
    key: '2'
  },
  {
    src: 'https://source.unsplash.com/200x300/?nature,tree',
    alt: 'random unsplash',
    key: '3'
  },
  {
    src: 'https://source.unsplash.com/200x100/?nature,tree',
    alt: 'random unsplash',
    key: '4'
  },
  {
    src: 'https://source.unsplash.com/400x400/?nature,tree',
    alt: 'random unsplash',
    key: '5'
  }
]
const Image = (props) => {
  console.log(props)
  return (
    <div>
      <img src={props.photo.src} css={tw`w-full h-full p-1`}/>
    </div>
  )
}

export default function Home() {
  return (
    <Container>
      <GalleryContainer>
      <Gallery photos={photos} renderImage={(props) => {return (<Image {...props}/>)}}/>
      <hr />
      <Gallery photos={photos} />
      </GalleryContainer>
    </Container>
  )
}

// import React from "react";
// import { render } from "react-dom";
// import Gallery from "react-photo-gallery";
// import { photos } from "./photos";

// /* popout the browser and maximize to see more rows! -> */
// const BasicRows = () => <Gallery photos={photos} />;
// render(<BasicRows />, document.getElementById("app"));

// import React, { useState, useCallback } from "react";
// import { render } from "react-dom";
// import Gallery from "react-photo-gallery";
// import SelectedImage from "./SelectedImage";
// import { photos } from "./photos";

// function App() {
//   const [selectAll, setSelectAll] = useState(false);

//   const toggleSelectAll = () => {
//     setSelectAll(!selectAll);
//   };

//   const imageRenderer = useCallback(
//     ({ index, left, top, key, photo }) => (
//       <SelectedImage
//         selected={selectAll ? true : false}
//         key={key}
//         margin={"2px"}
//         index={index}
//         photo={photo}
//         left={left}
//         top={top}
//       />
//     ),
//     [selectAll]
//   );

//   return (
//     <div>
//       <p>
//         <button onClick={toggleSelectAll}>toggle select all</button>
//       </p>
//       <Gallery photos={photos} renderImage={imageRenderer} />
//     </div>
//   );
// }

// render(<App />, document.getElementById("app"));


// import React, { useState, useEffect } from "react";

const Checkmark = ({ selected }) => (
  <div
    style={
      selected
        ? { left: "4px", top: "4px", position: "absolute", zIndex: "1" }
        : { display: "none" }
    }
  >
    <svg
      style={{ fill: "white", position: "absolute" }}
      width="24px"
      height="24px"
    >
      <circle cx="12.5" cy="12.2" r="8.292" />
    </svg>
    <svg
      style={{ fill: "#06befa", position: "absolute" }}
      width="24px"
      height="24px"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  </div>
);

const imgStyle = {
  transition: "transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s"
};
const selectedImgStyle = {
  transform: "translateZ(0px) scale3d(0.9, 0.9, 1)",
  transition: "transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s"
};
const cont = {
  backgroundColor: "#eee",
  cursor: "pointer",
  overflow: "hidden",
  position: "relative"
};

const SelectedImage = ({
  index,
  photo,
  margin,
  direction,
  top,
  left,
  selected
}) => {
  const [isSelected, setIsSelected] = useState(selected);
  //calculate x,y scale
  const sx = (100 - (30 / photo.width) * 100) / 100;
  const sy = (100 - (30 / photo.height) * 100) / 100;
  selectedImgStyle.transform = `translateZ(0px) scale3d(${sx}, ${sy}, 1)`;

  if (direction === "column") {
    cont.position = "absolute";
    cont.left = left;
    cont.top = top;
  }

  const handleOnClick = e => {
    setIsSelected(!isSelected);
  };

  useEffect(() => {
    setIsSelected(selected);
  }, [selected]);

  return (
    <div
      style={{ margin, height: photo.height, width: photo.width, ...cont }}
      className={!isSelected ? "not-selected" : ""}
    >
      <Checkmark selected={isSelected ? true : false} />
      <img
        alt={photo.title}
        style={
          isSelected ? { ...imgStyle, ...selectedImgStyle } : { ...imgStyle }
        }
        {...photo}
        onClick={handleOnClick}
      />
      <style>{`.not-selected:hover{outline:2px solid #06befa}`}</style>
    </div>
  );
};

// export default SelectedImage;
