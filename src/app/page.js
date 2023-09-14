
import { Container } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import CatSlider from './components/catSlider'
import Gallery from './components/Gallery'
import WelcomSlider from './components/welcomSlider'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <section className="welcome-sec">
        <WelcomSlider />
      </section>
      <section className="categories-sec">
        <Container maxWidth="lg">
          <div className="head-sec">
            <h2 className="title">Categories</h2>
            <Link href='#' className='link-more'>
              See all
              <Image src="/img/Vector (2).svg" alt="" width={16} height={8} />
            </Link>
          </div>
          <div className="body-sec">
            <CatSlider />
          </div>
        </Container>
      </section>
      <section className="gallery-sec">
        <Container maxWidth="lg">
          <Gallery />
        </Container>
      </section>
    </>
  )
}
