import React, { useEffect, useState } from 'react';
import API from '../../../API/API';

const ImageGallery = () => {
  const [imagePaths, setImagePaths] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const ipAddress = API.defaults.baseURL;
  const endpoint = `${ipAddress}/get_image_paths`; // Update the endpoint URL to match your backend route

  const userdata = JSON.parse(sessionStorage.getItem('userData'));
  const userEmail = userdata?.email; // Use optional chaining to avoid errors if userdata is null

  useEffect(() => {
    const fetchImagePaths = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${endpoint}?userId=${userEmail}`);

        if (response.status === 400) {
          setErrorMessage('Please upload some files to see your posts.');
          return;
        }

        const data = await response.json();
        console.log("imageData", data.imageData);
        if (data.imageData) {
          setImagePaths(data.imageData);
        } else {
          throw new Error('Image paths not found in response');
        }
      } catch (error) {
        console.error('Error fetching image paths:', error);
      } finally {
        setLoading(false);
      }
    };

    if (userEmail) {
      fetchImagePaths();
    }
  }, [userEmail]);

  return (
    <div className="image_gallery">
      {errorMessage && <h4>{errorMessage}</h4>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        imagePaths.map((path, index) => (
          <div key={index} className='feed_img'>
            <div className='feeds_content'>
              <div>
                <p>{userdata.firstname}</p>
                <div><i class="fa-solid fa-ellipsis-vertical"></i></div>
              </div>
              <img src={path} alt={`Image ${index}`} />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ImageGallery;
