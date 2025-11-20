import React from 'react';

const NewSection = () => {
  return (
    <section className="new-section">
      <div className="new-section-content">
        <h2 className="section-title">Nuova Sezione</h2>
        <p className="section-subtitle">
          Contenuto della nuova sezione visibile sia su desktop che mobile
        </p>
      </div>
    </section>
  );
};

export default NewSection;