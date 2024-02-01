import React, { useRef } from 'react'
import SignatureCanvas from 'react-signature-canvas'

const Signature = ({ onSignatureSave }) => {
  const signatureRef = useRef(null)

  const handleSave = () => {
    const signatureImage = signatureRef.current.toDataURL()
    onSignatureSave(signatureImage)
  }

  return (
    <div>
      <SignatureCanvas
        ref={signatureRef}
        canvasProps={{
          width: 500, // Set width to 100% for full width
          height: 250,
          className: 'signatureCanvas',
          style: { backgroundColor: '#f5f5f5', height: '250px' } // Change background color to dirty white
        }}
      />
    </div>
  )
}

export default Signature
