import React from 'react';

function Map() {
  return (
    <div className="container">
      <iframe
        title="Map Vinasa Office Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.547297885296!2d106.70010007451701!3d10.769330259325589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f28e765763d%3A0x77f1898eabb4410c!2sV%C4%83n%20ph%C3%B2ng%20VINASA%20HCM!5e0!3m2!1svi!2s!4v1714231833791!5m2!1svi!2s"
        className="w-full h-[400px] mb-10"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export default Map;
