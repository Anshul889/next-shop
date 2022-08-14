import React, { useState } from 'react'
import { Button } from '../Button/styles'
import { Form, Login } from './styles'
import StarRating from '../StarRating/StarRating'
import { useForm } from 'react-hook-form'
import { TextArea } from './styles'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

const ReviewForm = ({ productId, addReview }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [rating, setRating] = useState(0)
  const [error, setError] = useState(false)
  const { data: session } = useSession()

  return (
    <Form
      onSubmit={handleSubmit(async (data) => {
        if (rating === 0) {
          setError(true)
        } else {
          console.log('data', data)
          addReview(productId, rating, data)
        }
      })}
    >
      {' '}
      <h3>Add a review</h3>
      <StarRating rating={rating} setRating={setRating} />
      {error && rating === 0 && (
        <p style={{ color: 'red' }}>Please select a rating</p>
      )}
      <TextArea
        {...register('review', { required: 'This is required' })}
        placeholder={'What did you like or dislike?'}
      ></TextArea>
      <p style={{ color: 'red' }}>{errors.review?.message}</p>
      {session && <Button type="submit">Submit</Button>}
      {!session && (
        <Link href={'/auth/signin'}>
          <Login>Login to submit a review</Login>
        </Link>
      )}
    </Form>
  )
}

export default ReviewForm
