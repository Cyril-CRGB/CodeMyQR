import React from 'react'

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <p className="footer-text">
          © {new Date().getFullYear()} CodeMyQR. All rights reserved.
        </p>
        <div className="footer-links">
          <a href="/privacy" className="footer-link">Privacy Policy</a>
          <a href="/terms" className="footer-link">Terms of Service</a>
          <a
            href="https://github.com/yourusername/qr-generator"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}