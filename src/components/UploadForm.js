import React from 'react'
import { useForm } from 'react-hook-form'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'

const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}))

const UploadForm = () => {
  const { register, handleSubmit } = useForm()

  //   const onSubmit = async (data) => {
  //     const file = data.upload[0]; // Assuming the field is named 'upload'

  //     // Handle the file here (e.g., upload to server)
  //     console.log('File:', file);
  //   };

  return (
    <ButtonStyled component='label' variant='contained' htmlFor='account-settings-upload-image'>
      <input {...register('upload', { required: true })} type='file' accept='.pdf' />
      {/* No need for a separate upload button */}
    </ButtonStyled>
  )
}

export default UploadForm
