import React from 'react';
import Image from '../../image';
import "./feeds.css";
import ImageGallery from './getfeeds';


function Feeds() {


  return (
    <div className='feeds_main'>
      <ImageGallery />
      {Image.map((item) => (
        <div key={item.id} className='feed_img'>
          <div className='feeds_content' /*data-aos="fade-up"*/>
            <div>
              <p>{item.name}</p>
              <div><i class="fa-solid fa-ellipsis-vertical"></i></div>
            </div>
            <span>{item.caption}</span><br />
            <img src={item.path} />

          </div>
        </div>
      ))}
      <br />
    </div>
  );
}

export default Feeds;
