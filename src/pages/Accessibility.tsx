import React from 'react';

const Accessibility = () => {
  return (
    <div className="min-h-screen bg-luxury-dark py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="luxury-serif text-5xl md:text-6xl text-platinum mb-6">
            Accessibility Statement
          </h1>
          <p className="text-platinum/70 text-lg">
            Our commitment to making our website accessible to everyone.
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none text-platinum/80 space-y-8">
          <section>
            <h2 className="luxury-serif text-3xl text-gold-primary mb-4">Our Commitment</h2>
            <p>
              At MORAA by Trivani, we are committed to ensuring that our website is accessible to the widest possible audience, regardless of technology or ability. We are actively working to increase the accessibility and usability of our website and in doing so adhere to many of the available standards and guidelines.
            </p>
          </section>

          <section>
            <h2 className="luxury-serif text-3xl text-gold-primary mb-4">Standards</h2>
            <p>
              We aim to comply with all relevant accessibility standards, including the World Wide Web Consortium (W3C) Web Content Accessibility Guidelines (WCAG) 2.1. These guidelines explain how to make web content more accessible for people with disabilities.
            </p>
          </section>

          <section>
            <h2 className="luxury-serif text-3xl text-gold-primary mb-4">Ongoing Efforts</h2>
            <p>
              Accessibility is an ongoing effort for us. We regularly review our website and implement improvements to ensure a seamless experience for all our users. Our team is trained on accessibility best practices to incorporate them into our digital presence.
            </p>
          </section>

          <section>
            <h2 className="luxury-serif text-3xl text-gold-primary mb-4">Feedback</h2>
            <p>
              We welcome your feedback on the accessibility of our website. If you encounter any accessibility barriers or have suggestions on how we can improve, please contact us.
            </p>
          </section>

          <section className="pt-8 border-t border-gold-primary/20">
            <h2 className="luxury-serif text-3xl text-gold-primary mb-4">Contact Information</h2>
            <div className="mt-6 space-y-3 text-platinum/70">
              <p><span className="text-gold-primary font-semibold">Email:</span> moraajewel@gmail.com</p>
              <p><span className="text-gold-primary font-semibold">Phone:</span> +91 78779 37350</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Accessibility;
