import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SwiperHomepage from '../components/Swiper'

export default function Homepage() {
  return (
    <>
      <div class="container-initial">
        <Navbar />
        <SwiperHomepage />
        <Footer />
      </div>
    </>
  )
}