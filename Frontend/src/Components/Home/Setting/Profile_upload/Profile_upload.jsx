import React, { useRef, useState,useEffect } from 'react'
import API from '../../../../API/API';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
import "./profile_upload.css"
const Profile_upload = () => {
  const [Loading, setLoading] = useState(false)

  const [profile_img, setProfile_img] = useState("")

  const navigate = useNavigate()

  const file_upload = useRef()

  const ipAddress = API.defaults.baseURL;
  const endpoint = `${ipAddress}/profile_pic`;

  const defaultimg = "./img/profile.jpg"

  let userData = JSON.parse(sessionStorage.getItem("userData"));


  useEffect(() => {
    if (userData && userData.profile_path && userData.profile_path.length > 0) {
      setProfile_img(userData.profile_path);
    } else {
      setProfile_img(defaultimg);
    }
  }, [userData]);

  async function file_submit() {
    

    if (file_upload.current.value) {
      const imagedata = new FormData()

      imagedata.append("image", file_upload.current.files[0])
      setLoading(true)
      toast.info("Uploading, Please Wait...")
      console.log("imagedata", imagedata);

      await fetch(endpoint, {
        method: 'POST',
        body: imagedata,
        headers: {
          'Authorization': `${userData.email}`,
        },

      }).then(async (e) => {
        if (e.status === 200) {
          const responseData = await e.json();
          const newProfile_pic=responseData.userdata.profile_path

          userData.profile_path = newProfile_pic;
          sessionStorage.setItem("userData", JSON.stringify(userData));
          
          setLoading(false)
          toast.success("File Uploaded")
          setTimeout(() => {
            navigate("/welcome")
          }, 1350)
        }
        else return toast.error("Server error")
      }

      )

    }
    else return toast.info("Please choose a file")
  }




  return (
    <div className='create_main'>

      <div className='create_head'>
        <h2>Profile Upload</h2>
      </div>
      <div className='profile_upload'>
        <img src={profile_img} alt="" />
      </div>

      <div className='create_content'>
        <div className='create_center'>
          <div className='create_addfiles'>
            <h2>Upload Profile Picture</h2>
            <input type="file" name='image' ref={file_upload} />
          </div>
          <br />
          <div className='create_btn'>
            <span className='create_cancel'>Cancel</span>
            <span className='create_sbt' onClick={file_submit}>{Loading ? "Uploading..." : "Submit"}</span>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1300}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

    </div>
  )
}

export default Profile_upload