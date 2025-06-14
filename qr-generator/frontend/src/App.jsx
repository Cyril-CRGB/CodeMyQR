import { useState } from 'react'
import './App.css'

function App() {
  const [url, setUrl] = useState('')
  const [qrImage, setQrImage] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleGenerate = async () => {
    if (!url) return
    setLoading(true)
    setQrImage(null)

    try {
      const formData = new FormData()
      formData.append('url', url)

      const response = await fetch('https://8000-cyrilcrgb-codemyqr-uq0gu0mdn2k.ws-eu120.gitpod.io/generate', {
        method: 'POST',
        body: formData
      })

      if (!response.ok) throw new Error('Failed to generate QR')

      const blob = await response.blob()
      const imageUrl = URL.createObjectURL(blob)
      setQrImage(imageUrl)
    } catch (err) {
      alert('Error: ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ padding: 40, fontFamily: 'Arial' }}>
      <h1>QR Code Generator</h1>
      <input
        type="text"
        placeholder="Enter a URL"
        value={url}
        onChange={e => setUrl(e.target.value)}
        style={{ padding: 8, width: 300 }}
      />
      <button onClick={handleGenerate} style={{ marginLeft: 10, padding: 8 }}>
        Generate
      </button>

      {loading && <p>Loading...</p>}

      {qrImage && (
        <div style={{ marginTop: 20 }}>
          <img src={qrImage} alt="QR Code" width={200} />
          <p>Right-click to save the QR code</p>
        </div>
      )}
    </div>
  )
}

export default App