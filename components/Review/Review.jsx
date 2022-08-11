import React from 'react'
import moment from 'moment'
import Image from 'next/image'
import {
  Container,
  Created,
  Delete,
  ImageContainer,
  Rating,
  ReviewContainer,
  Wrapper,
} from './style'
import starsolid from '../../images/star-solid.svg'

const Review = ({ productId, review, session, deleteReview }) => {
  let arr = []
  for (let i = 1; i <= review.rating; i++) {
    arr.push(
      <div key={i}>
        <Image
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="cover"
          src={starsolid}
          alt=""
        />
      </div>
    )
  }

  let isAuthor = false;
  if (session && review.id === session.user.id){
    isAuthor = true
  }
  return (
    <Container>
      <ImageContainer>
        <Image
          src={review.imageURL}
          style={{ borderRadius: '50%' }}
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="cover"
          alt=""
        />
      </ImageContainer>
      <ReviewContainer>
        <Wrapper>
          <Rating>{arr}</Rating>
          {isAuthor &&<Delete onClick={() => deleteReview(productId, session.user.id)}>delete</Delete>}
        </Wrapper>
        <Created>
          {review.name}, {moment(review.created).fromNow()}
        </Created>
        <div>{review.review}</div>
      </ReviewContainer>
    </Container>
  )
}

export default Review
