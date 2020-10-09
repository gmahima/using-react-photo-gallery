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

export default function Home() {
  return (
    <Container>
      <GalleryContainer>
      <Gallery photos={photos}/>
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