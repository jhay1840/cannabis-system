import { useQRCode } from 'next-qrcode'

const QRCodeComponent = ({ qrLink }) => {
  const { Canvas } = useQRCode()

  return (
    <Canvas
      text={qrLink}
      options={{
        level: 'M',
        margin: 3,
        scale: 4,
        width: 200,
        color: {
          dark: '#000000',
          light: '#ffffff'
        }
      }}
      // logo={{
      //   src: 'publicimageslogos\bornhigh.svg',
      //   options: {
      //     width: 35,
      //     x: undefined,
      //     y: undefined
      //   }
      // }}
    />
  )
}

export default QRCodeComponent
