import React from 'react'
import { Input } from '../Input/styles'
import { Form } from './styles'
import { useForm } from 'react-hook-form'
import { Button } from '../Button/styles'

const ContactForm = () => {
  const { register, handleSubmit, formState: {errors} } = useForm()

  console.log(errors)
  return (
    <Form
      onSubmit={handleSubmit((data) => {
        console.log('data', data)
      })}
    >
      <Input
        {...register('firstName', { required: "This is required"})}
        placeholder={'First Name'}
      />
      <p style={{color: 'red'}}>{errors.firstName?.message}</p>
      <Input
        {...register('lastName', { required: "This is required", minLength: 4 })}
        placeholder={'Last Name'}
      />
      <Button type="submit">Submit</Button>
    </Form>
  )
}

export default ContactForm
