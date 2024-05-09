import React,{useState,useEffect} from 'react'
import "./profile.css"

const Profile = () => {
  let userData = JSON.parse(sessionStorage.getItem("userData"));
  const [profile_img, setProfile_img] = useState("")

  const defaultimg = "./img/profile.jpg"

  useEffect(() => {
    if (userData && userData.profile_path && userData.profile_path.length > 0) {
      setProfile_img(userData.profile_path);
    } else {
      setProfile_img(defaultimg);
    }
  }, [userData]);


  return (
    <div className='profile_head'>
      <h2>User Information</h2><br />
      <div className='profile_main'>

        <div className='profile_img'>
          <img src={profile_img} alt="" />
        </div>
        <div className='profile_name'>
          <div>
            <h3>{userData.firstname}</h3>
            <h5>Username={userData.email}</h5>
          </div>
        </div>

      </div>
      <hr />
      <div className='profile_content'>
        <h3>Personal Information</h3>
        <br />
        <div >
          <table className='profile_information'>
            <tr>
              <th>Gender:</th>
              <td>Male</td>
            </tr>
            <tr>
              <th>Number:</th>
              <td>+9198663746382</td>
            </tr>
            <tr>
              <th>Email:</th>
              <td>{userData.email}</td>
            </tr>
            <tr>
              <th>D.O.B.</th>
              <td>01/JAN/2000</td>
            </tr>
          </table>
          <br />
          <h3>Education Qualification</h3>
          <table className='profile_school'>
            <h3>School</h3>
            <tr>
              <th>10th Class:</th>
              <td>Albany High School,  New York</td>
            </tr>
            <tr>
              <th>12th Class:</th>
              <td>Bethlehem Central High School,  New York</td>
            </tr>
            <h3>College</h3>
            <tr>
              <th>B tech :</th>
              <td>Brookyln College</td>
            </tr>
            <tr>
              <th>M tech :</th>
              <td>Oxford College, NY</td>
            </tr>
            <h3>Extra Courses</h3>
            <tr>
              <th>Development:</th>
              <td>App developer, Web Developer</td>
            </tr>
            <tr>
              <th>Database:</th>
              <td>SQL, MongoDB </td>
            </tr>

          </table>


        </div>

      </div>
    </div >
  )
}

export default Profile