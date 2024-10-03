import Navbar from '../components/Navbar';
import fecomercio from '../assets/fecomercio.png';
import aboutVitor from '../assets/about-vitor.png';
import aboutNatalia from '../assets/about-natalia.png';
import Footer from '../components/Footer';
import { Grid } from '@mui/material';

export default function About() {
  return (
    <Grid container rowSpacing={4} justifyContent="center">
      <Grid item xs={9}>
        <div class="container-navbar">
            <Navbar />
        </div>
      </Grid>
      <Grid item xs={9}>
          <div class="section">
            <div class="text-initial">
              <h3>Sobre nós</h3>
              <p>De onde somos e o que fazemos</p>
            </div>
            <p class="text-description">"Fortaleza, cidade litorânea onde o verão dura o ano inteiro, é a cidade base do estúdio."</p>
          </div>
        <img class="img-city" src={fecomercio} loading="lazy" />
      </Grid>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        <div class="third-section">
          <div class="text-section">
            <p>Nativo Estúdio de Design, fundado em 2023, é fundado por Natália Marques e Vitor Alencar.</p>
            <p>Os integrantes iniciaram o estúdio para atuar no campo do design gráfico impresso e digital, identidade visual e sinalização.</p>
            <p>Fazem parte do portfólio da Nativo trabalhos na área institucional (hospitais, parques, escolas, etc.) e comercial, com o principal enfoque em projetos de sinalização que dialoguem de forma funcional com o espaço e com o usuário, considerando como pontos importantes execução, materiais e estética dos elementos.</p>
          </div>
        </div>
      </Grid>
      <Grid item xs={8}>
        <div class="about-owners">
          <div class="details-owner">
            <img src={aboutVitor} />
            <div class="details-text-owner">
              <h3>Vitor Alencar</h3>
              <p>Arquiteto, formado pela Universidade Federal do Ceará (UFC) em 2009.</p>
            </div>
          </div>
          <div class="details-owner">
            <img src={aboutNatalia} />
            <div class="details-text-owner">
              <h3>Natália Marques</h3>
              <p>Mestre em Design e Arquitetura pela Faculdade de Arquitetura e Urbanismo da Universidade de São Paulo (FAU-USP) em 2016.</p>
              <p>Arquiteta, formado pela Universidade de Fortaleza (UNIFOR) em 2011.</p>
            </div>
          </div>
        </div>
      </Grid>
      <Grid item xs={12}>
        <div class="container-footer">
            <Footer />
        </div>
      </Grid>
    </Grid>
  )
}