import { useState } from 'react';

export default function Demo() {
  const [url, setUrl]       = useState('');
  const [qrSrc, setQrSrc]   = useState(null);
  const [loading, setLoading]= useState(false);

  const generate = async () => {
    if (!url) return;
    setLoading(true);
    try {
      const fd = new FormData();
      fd.append('url', url);
      const res = await fetch(`${import.meta.env.VITE_API_BASE}/generate`, {
        method: 'POST', body: fd
      });
      if (!res.ok) throw new Error('QR failed');
      const blob = await res.blob();
      setQrSrc(URL.createObjectURL(blob));
    } catch (e) {
      alert(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="qr-demo" id="demo">
      <h2>Try It Now</h2>
      <div className="demo-container">
        <input
          type="url"
          className="url-input"
          placeholder="Enter your URL…" 
          value={url}
          onChange={e => setUrl(e.target.value)}
        />
        <button 
          className="generate-btn" 
          onClick={generate}
          disabled={loading}
        >
          {loading ? 'Generating…' : 'Generate QR Code'}
        </button>

        <div className="qr-display">
          {qrSrc
            ? <img src={qrSrc} width={200} alt="QR Code"/>
            : <p style={{color:'#64748b'}}>Enter a URL above to generate your QR code</p>
          }
        </div>

        <div className="ad-banner">
          {/* Your ad code goes here (e.g. Google AdSense snippet) */}
          <p>Your Ad Here</p>
        </div>
      </div>
    </section>
  );
}