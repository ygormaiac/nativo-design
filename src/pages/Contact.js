import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import { Grid } from '@mui/material';

export default function Contact() {
  const [form, setForm] = useState(true)
  const [finish, setFinish] = useState(false)

  const handleClick = () => {
    setForm(false)
    setFinish(true)
  }

  return (
    <Grid container rowSpacing={1} justifyContent="center">
      <Grid item xs={9}>
        <div class="container-navbar">
            <Navbar />
        </div>
      </Grid>
      <Grid item xs={9}>
        <div class="contact-container">
          {form && (
            <>
              <div>
                <h3>Fala com a gente</h3>
                <p>Preencha o formulário ao lado ou entre em contato por meio de nossas redes sociais:</p>
              </div>
              <i class="uil uil-arrow-right"></i>
            </>
          )}
          {finish && (
            <>
              <div class="finish-container">
                <h3>Obrigado</h3>
                <p>Em breve entraremos em contato</p>
              </div>
              <div></div>
            </>
          )}
      
          {form && (
            <div>
              <form
                action="https://formsubmit.co/ygor.maia@rdstation.com"
                method="POST"
                class="form"
              >
                <label for="name">Nome *</label>
                <input type="text" name="name" id="name" required />
                <label for="email">E-mail *</label>
                <input type="email" name="email" id="email" required />
                <label for="message">Mensagem *</label>
                <textarea name="message" id="message" required></textarea>
                <input type="hidden" name="_captcha" value="false" />
                <div class="cta-button"> 
                  <button onClick={handleClick} type="submit">enviar</button>
                </div>
              </form>
            </div>
          )}
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