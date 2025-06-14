import React from 'react'

const featuresData = [
  {
    icon: '🎨',
    title: 'Fully Customizable',
    description: 'Adjust colors, sizes, and even embed your logo for perfect branding.',
  },
  {
    icon: '🔒',
    title: 'Secure & Private',
    description: 'We never store your URLs or data—100% client-side generation.',
  },
  {
    icon: '💎',
    title: 'Free Forever',
    description: 'No limits, no subscriptions, no hidden costs. Professional QR generation, completely free.',
  },
]

export default function Features() {
  return (
    <section id="features" className="features">
      <h2 className="section-title">Powerful Features</h2>
      <div className="features-grid">
        {featuresData.map(({ icon, title, description }) => (
          <div key={title} className="feature-card">
            <div className="feature-icon">{icon}</div>
            <h3 className="feature-title">{title}</h3>
            <p className="feature-description">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}