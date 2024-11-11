

import React from 'react'
import './CuttingEdge.css'
import cuttingEdge from '../images/cutting_edge.svg'
import messageChartCircle from '../images/message_chat_circle.svg'
import cuttingEdgeSmall from '../images/cutting_edge_small_img.svg'

const CuttingEdge = () => {
  return (
    <div className='section-cuttingedge'>
        <div className='section-cuttingedge-top--container'>
                <button>Features</button>
                <h2>Cutting-edge features for advanced analytics</h2>
                <p>Powerful, self-serve product and growth analytics to help you convert, engage,<br/> and retain more users. Trusted by over 4,000 startups.    </p>
        </div>

        <div className='cutting-edge-img--container'>
            <figure className='large'>
                <img src={cuttingEdge} alt="cuttingedge" />
            </figure>
            <figure className='small'>
                <img src={cuttingEdgeSmall} alt="cuttingedge" />
            </figure>
        </div>

        <div className='cutting-edge-cards--container'>
                {/* <div className='cutting-edge-card-1--container'>

                </div> */}
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
  )
}

export default CuttingEdge