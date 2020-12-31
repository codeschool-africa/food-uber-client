import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { FaQuoteLeft } from "react-icons/all"

import "swiper/swiper.scss"

import "./testimonies.sass"
const Testimonies = () => {
  return (
    <section className="testimonies">
      <div className="intro">
        <h1>What our customers say about our food!</h1>
      </div>
      <div className="stories">
        <div className="showcase">
          <Swiper spaceBetween={0} grabCursor={true}>
            <SwiperSlide>
              <article className="card">Hello</article>
            </SwiperSlide>
            <SwiperSlide>
              <article className="card">Hello</article>
            </SwiperSlide>
            <SwiperSlide>
              <article className="card">Hello</article>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Testimonies
