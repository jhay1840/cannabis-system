import React, { useRef } from 'react'
import SignatureCanvas from 'react-signature-canvas'

const Signature = ({ onSignatureSave }) => {
  const signatureRef = useRef(null)

  const handleSave = e => {
    e.preventDefault()
    const signatureImage = signatureRef.current.toDataURL()
    onSignatureSave(signatureImage)
  }

  const handleReset = e => {
    e.preventDefault()
    signatureRef.current.clear()
  }

  return (
    <div>
      <SignatureCanvas
        ref={signatureRef}
        canvasProps={{
          width: 500,
          height: 250,
          className: 'signatureCanvas',
          style: { backgroundColor: '#f5f5f5', height: '250px' }
        }}
      />
      <button onClick={handleSave}>Save Signature</button>
      <button onClick={handleReset}>Reset Signature</button>
    </div>
  )
}

export default Signature
