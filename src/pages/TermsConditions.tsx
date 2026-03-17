import React from 'react';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-luxury-dark py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="luxury-serif text-5xl md:text-6xl text-platinum mb-6">
            Terms & Conditions
          </h1>
          <p className="text-platinum/70 text-lg">
            Please read these terms and conditions carefully before using our website.
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none text-platinum/80 space-y-8">
          <section>
            <h2 className="luxury-serif text-3xl text-gold-primary mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our website.
            </p>
          </section>

          <section>
            <h2 className="luxury-serif text-3xl text-gold-primary mb-4">2. Intellectual Property</h2>
            <p>
              All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of MORAA by Trivani and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works from this content without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="luxury-serif text-3xl text-gold-primary mb-4">3. Product Descriptions</h2>
            <p>
              We strive to provide accurate descriptions and images of our products. However, we do not warrant that the product descriptions or other content are error-free, complete, or current. Colors may vary depending on your monitor settings.
            </p>
          </section>

          <section>
            <h2 className="luxury-serif text-3xl text-gold-primary mb-4">4. Pricing and Payment</h2>
            <p>
              All prices are listed in Indian Rupees (₹) and are subject to change without notice. We reserve the right to refuse or cancel any order if there is an error in pricing or availability.
            </p>
          </section>

          <section>
            <h2 className="luxury-serif text-3xl text-gold-primary mb-4">5. Shipping and Delivery</h2>
            <p>
              Shipping and delivery are subject to our <a href="/shipping-policy" className="text-gold-primary hover:text-gold-soft underline font-medium">Shipping Policy</a>. We are not responsible for delays caused by third-party carriers or customs.
            </p>
          </section>

          <section>
            <h2 className="luxury-serif text-3xl text-gold-primary mb-4">6. Returns and Refunds</h2>
            <p>
              Returns and refunds are subject to our <a href="/refund-policy" className="text-gold-primary hover:text-gold-soft underline font-medium">Refund Policy</a>.
            </p>
          </section>

          <section>
            <h2 className="luxury-serif text-3xl text-gold-primary mb-4">7. Limitation of Liability</h2>
            <p>
              MORAA by Trivani shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our products or website.
            </p>
          </section>

          <section>
            <h2 className="luxury-serif text-3xl text-gold-primary mb-4">8. Governing Law</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the courts in Jaipur, Rajasthan.
            </p>
          </section>

          <section className="pt-8 border-t border-gold-primary/20">
            <h2 className="luxury-serif text-3xl text-gold-primary mb-4">Contact Information</h2>
            <p>
              If you have any questions about these Terms and Conditions, please contact us at:
            </p>
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

export default TermsConditions;
