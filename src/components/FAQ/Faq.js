import React from "react";
import "./Faq.css";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import faq1 from '../images/faq2.svg'

const Faq = () => {
  return (
    <div className="section-faq">
      <div className="faq-top--container">
        <h2>Frequently asked questions</h2>
        <p>Everything you need to know about the product and billing.</p>
      </div>
      <div className="faq-mid">
        <div className="faq-mid--container">
          <div className="faq-mid-1--div">
            <div className="faq-mid-1-heading-icon--container">
              <h3>Is there a free trial available?</h3>
              <CiCircleMinus size={20} />
            </div>
            <p>
              Yes, you can try us for free for 30 days. If you want, we’ll
              provide you with a free, personalized 30-minute onboarding call to
              get you up and running as soon as possible.
            </p>
          </div>

          <div className="faq-mid-1--div">
            <div className="faq-mid-1-heading-icon--container">
            <h3>Can I change my plan later?</h3>
            <CiCirclePlus size={20} />
            </div>
          </div>

          <div className="faq-mid-1--div">
            <div className="faq-mid-1-heading-icon--container">
            <h3>Can I change my plan later?</h3>
            <CiCirclePlus size={20} />
            </div>
          </div>

          <div className="faq-mid-1--div">
            <div className="faq-mid-1-heading-icon--container">
            <h3>Can I change my plan later?</h3>
            <CiCirclePlus size={20} />
            </div>
          </div>

          <div className="faq-mid-1--div">
            <div className="faq-mid-1-heading-icon--container">
            <h3>Can I change my plan later?</h3>
            <CiCirclePlus size={20} />
            </div>
          </div>

          <div className="faq-mid-1--div">
            <div className="faq-mid-1-heading-icon--container">
            <h3>Can I change my plan later?</h3>
            <CiCirclePlus size={20} />
            </div>
          </div>

          <div className="faq-mid-1--div">
            <div className="faq-mid-1-heading-icon--container">
            <h3>Can I change my plan later?</h3>
            <CiCirclePlus size={20} />
            </div>
          </div>

        </div>
      </div>


    <div className="faq-still-questions">
        <figure>
            <img src={faq1} alt="stil question" />
        </figure>
        <h3>Still have questions?</h3>
        <p>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
        <button>Get in touch</button>
    </div>


    </div>
  );
};

export default Faq;
