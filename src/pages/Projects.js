import Navbar from '../components/Navbar';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Footer from '../components/Footer';
import { Grid } from '@mui/material';
import centenarioProject from '../assets/centenario-project.png'
import sescProject from '../assets/sesc-project.png'
import exibeProject from '../assets/exibe-project.png'
import observatorioProject from '../assets/observatorio-project.png'
import hotelProject from '../assets/hotel-project.png'
import { useState } from 'react';

const itemData = [
  {
    id: 1,
    img: centenarioProject,
    title: 'Centenário',
    type: ['sinalização', 'identidade'],
    url: '/projects/centenario',
  },
  {
    id: 2,
    img: sescProject,
    title: 'Escola Educar Sesc',
    type: ['sinalização', 'identidade'],
    url: '/projects/fecomercio',
  },
  {
    id: 3,
    img: exibeProject,
    title: 'Exibe',
  },
  {
    id: 4,
    img: observatorioProject,
    title: 'Observatório',
  },
  {
    id: 5,
    img: hotelProject,
    title: 'Hotel',
  },
];

export default function Projects() {
  const [showDetails, setShowDetails] = useState(false)
  const [showImage, setShowImage] = useState(true)

  const handlerDetails = () => {
    setShowImage(false)
    setShowDetails(true)
  }

  const handlerImage = () => {
    setShowDetails(false)
    setShowImage(true)
  }

  return (
    <Grid container rowSpacing={5} justifyContent="center">
  <Grid item xs={9}>
    <div class="container-navbar">
        <Navbar />
    </div>
  </Grid>
  <Grid item xs={9} justifyContent="center">
  <div class="filter-projects">
        <button value="sinalização">sinalização</button>
        <button value="identidade">identidade visual</button>
        <button value="editorial">editorial</button>
        <button value="all">todos</button>
      </div>
  <ImageList gap={20} cols={3}>
          {itemData.map((item) => (
            <ImageListItem key={item.img} sx={{ cursor: 'pointer' }}>
              {showDetails && (
                <div class='project-item' onMouseEnter={handlerDetails}>
                  <h3>{item.title}</h3>
                  <button>identidade visual</button>
                  <button>sinalização</button>
                </div>
              )}
              {showImage && (
                <a href={item.url}>
                  <img
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                  onMouseLeave={handlerImage}
                />
                </a>
              )}
            </ImageListItem>
          ))}
        </ImageList>
  </Grid>
  <Grid item xs={12}>
    <div class="container-footer">
        <Footer />
    </div>
  </Grid>
</Grid>
  )
}