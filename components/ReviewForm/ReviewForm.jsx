import React, { useState } from 'react'
import { Button } from '../Button/styles'
import { Form } from './styles'
import { Input } from '../Input/styles'
import StarRating from '../StarRating/StarRating'
import { set, useForm } from 'react-hook-form'
import { TextArea } from './styles'

const ReviewForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [rating, setRating] = useState(0)
  const [error, setError] = useState(false)
  return (
    <Form
      onSubmit={handleSubmit((data) => {
        if (rating === 0) {
          setError(true)
        } else {
          console.log('data', data)
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
      <Button type="submit">Submit</Button>
    </Form>
  )
}

export default ReviewForm
