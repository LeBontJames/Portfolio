'use client';

export default function Features() {
  const features = [
    {
      icon: '⚡',
      title: 'Velocità',
      description: 'Tempi di risposta brevi,sono online 24/7 5 giorni su 5.'
    },
    {
      icon: '🎯',
      title: 'Efficienza',
      description: 'Grazie alle mie competenze di programmazione, posso personalizzare ogni pixel della tua finestra digitale sul mondo. '
    },
    {
      icon: '🌐',
      title: 'Visibilità',
      description: 'Offro anche un servizio di ottimizzazione SEO per i tuoi siti web,per aumentare la visibilità online, posizionarsi su google e portare nuovi clienti alla tua attivtà.'
    },
    {
      icon: '🔮',
      title: 'Neural Networks',
      description: 'AI-powered decision making that learns from your team\'s patterns and optimizes collaboration in real-time.'
    },
    {
      icon: '🌐',
      title: 'Holographic Interface',
      description: 'Immersive 3D workspace that transcends traditional boundaries, bringing remote teams into a shared reality.'
    },
    {
      icon: '🛡️',
      title: 'Quantum Encryption',
      description: 'Military-grade security protocols with quantum encryption that makes your data literally impossible to breach.'
    },
    {
      icon: '🚀',
      title: 'Hyperdrive Sync',
      description: 'Instantaneous synchronization across all devices and platforms with zero latency, no matter the distance.'
    },
    
  ];

  return (
    <section className="features fade-up pt-4 sm:pt-0" id="features">
      <div className="features-container">
        <div className="section-header">
          <h2 className="section-title">Cosa offro?</h2>
          <p className="section-subtitle">
            Grazie alle mie competenze, posso trasformare le tue idee in realtà digitali.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
