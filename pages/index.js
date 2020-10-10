import React, {useState, useCallback, useEffect} from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from "react-images";
import Example from '../components/example'
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
const ExampleContainer = styled.div `

  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

`
const photos = [
  {
    src: 'https://source.unsplash.com/400x400/?book,pen',
    alt: 'random unsplash',
    key: '1'
  },
  {
    src: 'https://source.unsplash.com/200x300/?nature,tree',
    alt: 'random unsplash',
    key: '2'
  },
  {
    src: 'https://source.unsplash.com/400x300/?bird,peacock',
    alt: 'random unsplash',
    key: '3'
  },
  {
    src: 'https://source.unsplash.com/400x400/?pet,cat',
    alt: 'random unsplash',
    key: '4'
  },
  {
    src: 'https://source.unsplash.com/400x300/?dessert,icecream',
    alt: 'random unsplash',
    key: '5'
  }
]
const Image = (props) => {
  console.log(props)
  return (
    <div css={tw `m-1 bg-white`}>
    <img src={props.photo.src} css={tw`w-full h-full`} onClick={(e) => {props.handleClick(e, {
            photo: props.photo,
            index: props.index
          })}}/>
    </div>
  )
}

const View = (props) => {
  console.log(props)
  return <div></div>
}

export default function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, {photo, index}) => {
    console.log(index)
    setCurrentImage(index);
    setViewerIsOpen(true)
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <Container>
      <GalleryContainer>
        <Gallery photos={photos} onClick={openLightbox} renderImage={(props) => {return (<Image {...props } handleClick={openLightbox}/>)}}/>
      </GalleryContainer>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <ExampleContainer>
              <button onClick={closeLightbox} css={tw `border text-white bg-red-500 self-start ml-auto`}>X</button>
              <Example i={currentImage} />
            </ExampleContainer>
            
          </Modal>
        ) : null}
      </ModalGateway>
    </Container>
  );
}


