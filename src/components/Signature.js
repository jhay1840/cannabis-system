import { Margin } from 'mdi-material-ui'
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
      <div>
        <button onClick={handleSave} style={{ margin: '5px' }}>
          Save Signature
        </button>
        <button onClick={handleReset} style={{ margin: '5px' }}>
          Reset Signature
        </button>
      </div>
    </div>
  )
}

export default Signature
