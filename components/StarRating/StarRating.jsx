import Image from 'next/image'
import React, { useState } from 'react'
import starlight from '../../images/star-light.svg'
import starsolid from '../../images/star-solid.svg'
import { RatingContainer } from './style'

const StarRating = ({ rating, setRating }) => {
  const [hover, setHover] = useState(0)
  return (
    <RatingContainer>
      {[1, 2, 3, 4, 5].map((star, index) => {
        index += 1
        return index <= ((rating && hover) || hover) ? (
          <div
            type="button"
            key={index}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <Image src={starsolid} height={25} width={25} alt="" />
          </div>
        ) : (
          <div
            type="button"
            key={index}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <Image src={starlight} alt="" height={25} width={25} />
          </div>
        )
      })}
    </RatingContainer>
  )
}

export default StarRating
