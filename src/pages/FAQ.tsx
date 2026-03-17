import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "How do I care for my MORAA jewelry?",
      answer: "We recommend keeping your jewelry away from moisture, chemicals, and perfumes. Store each piece separately in a dry place, preferably in the airtight bags provided. Please refer to our Jewellery Care Guide for detailed instructions."
    },
    {
      question: "What are the shipping charges?",
      answer: "We charge a flat rate of ₹70 for shipping across India. However, we offer free shipping on all orders above ₹1499."
    },
    {
      question: "How long will it take to receive my order?",
      answer: "Orders are typically dispatched within 2-3 working days. Once shipped, delivery takes approximately 4-8 working days depending on your location."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Currently, we only ship within India. We are working on expanding our reach to international enthusiasts soon."
    },
    {
      question: "Can I return or exchange a product?",
      answer: "We accept returns only for damaged products with a mandatory unboxing video proof. Size exchanges are available for finger rings only. Please check our Refund Policy for more details."
    },
    {
      question: "Is your jewelry authentic?",
      answer: "Yes, all our pieces are certified authentic and crafted with the highest quality materials. We stand behind the craftsmanship of every item we sell."
    }
  ];

  return (
    <div className="min-h-screen bg-luxury-dark py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="luxury-serif text-5xl md:text-6xl text-platinum mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-platinum/70 text-lg">
            Find answers to common questions about our products and services.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="glass-card-emerald border border-teal-luxury/20 p-8 rounded-2xl hover:border-gold-primary/40 transition-all duration-300"

            >
              <h3 className="luxury-serif text-xl text-gold-primary mb-4 flex items-start gap-4">
                <span className="bg-gold-primary/10 text-gold-primary w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm">Q</span>
                {faq.question}
              </h3>
              <div className="text-platinum/80 leading-relaxed flex items-start gap-4">
                <span className="bg-teal-luxury/10 text-teal-luxury w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm">A</span>

                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-gradient-to-r from-gold-primary/10 to-gold-soft/10 p-12 rounded-3xl border border-gold-primary/20 text-center">
          <h2 className="luxury-serif text-3xl text-platinum mb-4">Still have questions?</h2>
          <p className="text-platinum/70 mb-8 max-w-xl mx-auto">
            Our luxury consultants are available to assist you with any inquiries you may have.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-gradient-to-r from-gold-primary to-gold-soft text-luxury-dark px-10 py-4 rounded-xl font-bold tracking-widest text-sm hover:shadow-glow transition-all duration-300"
          >
            CONTACT CUSTOMER CARE
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
