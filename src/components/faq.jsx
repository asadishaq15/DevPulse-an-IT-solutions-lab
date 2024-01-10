import React, { useState } from 'react';


const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      question: 'What is the estimated cost of my project?',
      answer:
        'For an accurate project cost, please schedule a brief call with us. We will discuss your project details and provide a tailored estimate based on your specific requirements',
    },
    {
      question: 'How long does the design process take?',
      answer:
        'The project timeline depends on your unique requirements. Share your timeframe during our initial discussions, and we will work on a realistic schedule to meet your needs.',
    },
    {
      question: 'How can I engage with DevPulse?',
      answer:
        'Start by sharing your project requirements with us. We will analyze your needs and provide a detailed proposal, guiding you through a seamless onboarding process.',
    },
    {
      question: 'Can you enhance the professionalism of my current site?',
      answer:
        'Certainly. Share your requirements, and our experienced team will collaborate with you to elevate the visual appeal and functionality of your existing site.',
    },
    {
      question: 'What is the payment schedule?',
      answer:
        'Payments are structured around project milestones. Typically, equal installments are made at the start, midway, and project completion, ensuring a fair and transparent payment process.',
    },
  ];

  return (
    <section className="faq">
      <h1 className="heading" style={{ marginTop: '-2rem', color: '#00bfff' }} id="faq">
        FAQ
      </h1>
      <div className="row">
        <div className="accordion-container">
          {faqData.map((faq, index) => (
            <div className="accordion" key={index}>
              <div
          className={`accordion-header ${openIndex === index ? 'open' : ''}`}
          onClick={() => handleAccordionToggle(index)}
        >
                <span>{openIndex === index ? '-' : '+'}</span>
                <h3>{faq.question}</h3>
              </div>
              <div className={`accordion-body ${openIndex === index ? 'open' : ''}`}>
              <p>{faq.answer}</p>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
