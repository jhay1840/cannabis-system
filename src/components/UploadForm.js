import React from 'react'
import { useForm } from 'react-hook-form'

const UploadForm = () => {
  const { register, handleSubmit } = useForm()

  //   const onSubmit = async (data) => {
  //     const file = data.upload[0]; // Assuming the field is named 'upload'

  //     // Handle the file here (e.g., upload to server)
  //     console.log('File:', file);
  //   };

  return (
    <div>
      <input {...register('upload', { required: true })} type='file' accept='.pdf' />
      {/* No need for a separate upload button */}
    </div>
  )
}

export default UploadForm
