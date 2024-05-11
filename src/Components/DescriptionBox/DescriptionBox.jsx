import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus cum, quod praesentium dolorum quisquam nulla quibusdam maxime vel voluptate, eum veniam facere magni impedit, iure similique molestiae nostrum veritatis excepturi vitae ducimus nemo facilis unde placeat! Quidem blanditiis rerum excepturi dignissimos veniam? Pariatur, odit iusto!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo minima, dignissimos exercitationem quisquam animi earum, odio quia porro, assumenda repellendus atque nesciunt excepturi. Repellendus, ipsa.</p>
        </div>
    </div>
  )
}

export default DescriptionBox