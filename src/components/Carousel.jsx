import React from 'react'

import useEmblaCarousel from 'embla-carousel-react'
import { iphone, iPhone12, macBook12, macBookair } from '../assets'
import Autoplay from 'embla-carousel-autoplay'

const Carousel = () => {
// const [emblaRef] = useEmblaCarousel()
const autoplayOptions = {
    delay: 4000,
    rootNode: (emblaRoot) => emblaRoot.parentElement,
  }
  
const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay(autoplayOptions)])
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide ]" ><img
                  src={iphone}
                 
                  alt=" menu"
                 
                />
                </div>
        <div className="embla__slide"><img
                  src={macBook12}
                
                  alt=" menu"
                /></div>
        <div className="embla__slide"><img
                  src={macBookair}
                  
                  alt=" menu"
                /></div>
      </div>
    </div>
  )
}

export default Carousel
