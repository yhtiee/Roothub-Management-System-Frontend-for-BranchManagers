import React from 'react'

const EditTrainer = () => {
  return (
    <div className='new'>
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h4> Edit Existing Trainee </h4>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={
                file
                  ? URL.createObjectURL(file)
                  : traineeData.profile_picture
              } alt="" />
          </div>
          <div className="right">
            <form onSubmit={submitForm} encType="multipart/form-data">
              <div className="formInput">
                <label htmlFor='file'> Image: <DriveFolderUploadIcon className='icon'/> </label>
                <input type="file" id='file' onChange={(e) => setFile(e.target.files[0])} style={{display:"none"}} ref={myfile}/>
              </div>
              <div className="formInput">
                <label>Last Name</label>
                <input type="text" required ref={last} defaultValue={traineeData.last_name} />
              </div>
              <div className="formInput">
                <label>First Name</label>
                <input type="text" required ref={first} defaultValue={traineeData.first_name}/>
              </div>
              <div className="formInput">
                <label>Other Name</label>
                <input type="text" required ref={other} defaultValue={traineeData.other_names}/>
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="text" required ref={email} defaultValue={traineeData.email}/>
              </div>
              <div className="formInput">
                <label>Phone Number</label>
                <input type="number" required ref={phone} defaultValue={traineeData.phone_number}/>
              </div>
              <div className="formInput">
                <label>Course</label>
                <select id="course" name="course" value={selectedCourse} onChange={handleChangeCourse}>
                  <option value="Frontend Web Development">Frontend Web Development</option>
                  <option value="Backend Web Development">Backend Web Development</option>
                  <option value="Full Stack Web Development">Full Stack Web Development</option>
                  <option value="Visual Communications">Visual Communications</option>
                  <option value="UI/UX">UI/UX</option>
                  <option value="Data Analysis">Data Analysis</option>
                  <option value="App Developement">App Developement</option>
                  <option value="Computer Basics">Computer Basics</option>
                </select>
              </div>
              <div className="formInput">
                <label>Course Duration</label>
                <select id="course_duration" name="course_duration" value={selectedDuration} onChange={handleChangeDuration}>
                  <option value="6 Months">6 Months</option>
                  <option value="4 Months">4 Months</option>
                  <option value="3 Months">3 Months</option>
                  <option value="1 Month">1 Month</option>
                </select>
              </div>
              <div className="formInput" style={{display:"none"}}>
                <label>Location</label>
                <input type="text" defaultValue={user} required ref={location} />
              </div>
              <div className="formInput">
                <label>Amount Paid</label>
                <input type="number" required ref={amount} defaultValue={traineeData.amount_paid}/>
              </div>
              <div className="formInput">
                <label>Balance</label>
                <input type="number" required ref={balance} defaultValue={traineeData.balance}/>
              </div>
              {/* <Link to="/trainees"> */}
                <button type='submit'>
                  Edit
                </button>
              {/* </Link> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditTrainer