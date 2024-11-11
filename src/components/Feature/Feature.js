

import React from 'react'
import './Feature.css'
import messageChartCircle from '../images/message_chat_circle.svg'

const Feature = () => {
  return (
    <div className='section-feature'>
      <div className='container'>
          <div className='feature-top--container'>
            <p>Features</p>
            <h2>Analytics that feels like it’s from the future</h2>
            <p>Powerful, self-serve product and growth analytics to help you convert, engage,<br/> and retain more users. Trusted by over 4,000 startups.</p>
          </div>
          <div className='features-cards--container'>
              <div className='features-card-1--div'>
                  <figure>
                    <img src={messageChartCircle} alt="message chat circle" />
                  </figure>
                  <h3>Share team inboxes</h3>
                  <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
              </div>
              <div className='features-card-1--div'>
                  <figure>
                    <img src={messageChartCircle} alt="message chat circle" />
                  </figure>
                  <h3>Share team inboxes</h3>
                  <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
              </div>
              <div className='features-card-1--div'>
                  <figure>
                    <img src={messageChartCircle} alt="message chat circle" />
                  </figure>
                  <h3>Share team inboxes</h3>
                  <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
              </div>
              <div className='features-card-1--div'>
                  <figure>
                    <img src={messageChartCircle} alt="message chat circle" />
                  </figure>
                  <h3>Share team inboxes</h3>
                  <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
              </div>
              <div className='features-card-1--div'>
                  <figure>
                    <img src={messageChartCircle} alt="message chat circle" />
                  </figure>
                  <h3>Share team inboxes</h3>
                  <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
              </div>
              <div className='features-card-1--div'>
                  <figure>
                    <img src={messageChartCircle} alt="message chat circle" />
                  </figure>
                  <h3>Share team inboxes</h3>
                  <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Feature