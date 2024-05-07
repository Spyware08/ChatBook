import React, { useRef, useState } from 'react'
import API from '../../../API/API'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
import "./createpost.css"
const CreatePost = () => {
  const [Loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const file_upload = useRef()

  const ipAddress = API.defaults.baseURL;
  const endpoint = `${ipAddress}/upload_file`;

  async function file_submit() {
    let userData = JSON.parse(sessionStorage.getItem("userData"));

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

      }).then(e => {
        if (e.status === 200) {
          setLoading(false)
          toast.success("File Uploaded")
          setTimeout(() => {
            navigate("/feeds")
          }, 1500)
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
        <h2>CreatePost</h2>
      </div>

      <div className='create_content'>
        <div className='create_center'>
          <div className='create_addfiles'>
            <h2>Add Files</h2>
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

export default CreatePost