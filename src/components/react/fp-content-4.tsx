import React from 'react';

const Section4 = () => {
  return (
    <div className="section-content">
      <h2>Get in Touch</h2>
      <p>We'd love to hear from you! If you have any questions or feedback, feel free to reach out to us.</p>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Section4;