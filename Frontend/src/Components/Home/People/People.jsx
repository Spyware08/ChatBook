import React from 'react'
import Profile from '../../profileimg'
import "./people.css"

const People = () => {
  return (
    <div className='people_head'>
      <h2>All Friends</h2> <br />
      <div className='people_content'>
        
        {Profile.map((item) =>
          <div key={item.id} className='people_main'>
            <div className='people_img'>
              <img src={item.path} alt="" />
            </div>
            <div className='people_name'>
              <h3>{item.name}</h3>
              <p>{item.link}</p>
              <div>
                <span className='people_msg'>Message</span>
                <span className='people_vw'>View Friends</span>
              </div>
            </div>
           
          </div>)
        }
      </div>
    </div>
  )
}

export default People