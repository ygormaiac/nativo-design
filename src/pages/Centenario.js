import Navbar from '../components/Navbar';
import centenario from '../assets/centenario.png';
import centenario1 from '../assets/centenario-1.png';
import centenario2 from '../assets/centenario-2.png';
import centenario3 from '../assets/centenario-3.png';
import centenario4 from '../assets/centenario-4.png';
import centenario5 from '../assets/centenario-5.png';
import centenario6 from '../assets/centenario-6.png';
import centenario7 from '../assets/centenario-7.png';
import centenario8 from '../assets/centenario-8.png';
import centenario9 from '../assets/centenario-9.png';
import centenario10 from '../assets/centenario-10.png';
import Footer from '../components/Footer';
import { Grid } from '@mui/material';

export default function Centenario() {
  return (
    <Grid container rowSpacing={4} justifyContent="center">
      <Grid item xs={9}>
        <div class="container-navbar">
            <Navbar />
        </div>
      </Grid>
      <Grid item xs={9}>
          <div class="section-centenario">
            <div class="text-initial-centenario">
              <h3>Centenário</h3>
              <p>COMPLEXO CORPORATIVO</p>
              <span>São Paulo - SP. 2019</span>
            </div>
          </div>
        <img class="img-city" src={centenario} loading="lazy" />
      </Grid>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        <div class="third-section">
          <div class="text-section">
            <p>Através de um projeto de wayfinding moderno em harmonia com o espaço, buscou-se fortalecer a nova identidade arquitetônica do complexo.</p>
            <p>Fazendo conexão com o Namming, o conceito aqui usado se fortifica com o uso inevitável da curva. Esta, formada através do pontilhismo, que traz leveza e gera um grafismo que remete as colunas da torre projetada por Carlos Bratke.</p>
            <p>Devido ao uso edifício optou-se por tipografia e ícones sóbrios construindo uma linguagem visual corporativa, facilitando a funcionalidade das peças e a transmissão das mensagens. Os materiais escolhidos geram constraste entre a luz e as chapas metálicas perfuradas, demarcando os acessos e destacando as informações presentes nas peças.</p>
          </div>
        </div>
      </Grid>
      <Grid item xs={9}>
        <div class="section-centenario-initial">
          <img src={centenario1} />
          <img src={centenario2} />
        </div>
      </Grid>
      <Grid item xs={9}>
        <div class="centenario-second-section">
          <p>"Através de um projeto de wayfinding moderno em harmonia com o espaço, buscou-se fortalecer a nova identidade arquitetônica do complexo."</p>
        </div>
      </Grid>
      <Grid item xs={9}>
        <div class="section-centenario-img">
          <img src={centenario3} />
        </div>
      </Grid>
      <Grid item xs={9}>
        <div class="section-centenario-initial">
          <img src={centenario4} />
          <img src={centenario5} />
        </div>
      </Grid>
      <Grid item xs={9}>
        <div class="section-centenario-multiple">
          <img src={centenario6} />
          <img src={centenario7} />
          <img src={centenario8} />
        </div>
      </Grid>
      <Grid item xs={9}>
        <div class="section-centenario-initial">
          <img src={centenario9} />
          <img src={centenario10} />
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