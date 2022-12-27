import React,  {useContext, useEffect, useState}  from 'react'
import Datatable from '../../components/datatable/Datatable'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import "./listTraines.scss"
import ListContext from '../../context/ListData';
import RetrieveContext from '../../context/retrieveContext'
import { useNavigate } from "react-router-dom";
import CreateContext from '../../context/CreateData'
import DeleteConfirmation from '../../components/deleteConfirm/DeleteConfirmation'
import AuthContext from '../../context/authContext'
// import 'react-bootstrap/dist/react-bootstrap.css'

// import { shouldForwardProp } from '@mui/styled-engine'

const ListTrainees = () => {
  // let user = "smart"

  let {getTraineesList} = useContext(ListContext)
  let {traineesList} = useContext(ListContext)
  let {retrievedTrainee} = useContext(RetrieveContext)
  let {retrievedData} = useContext(RetrieveContext)
  let {deleteTrainee} = useContext(CreateContext)
  let {user} = useContext(AuthContext)
  let navigate = useNavigate()
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(false)

  function handleDeleteClick(event, params) {
    setDeleteId(params.row.id)
    setShowModal(true);
  }

  function handleModalClose() {
    setShowModal(false);
  }

  function handleModalConfirm() {
    deleteTrainee(deleteId)
    getTraineesList(user)
    setShowModal(false);
  }

  
  let view = (event, params) => {
    // console.log(params.row.id)
    retrievedTrainee(params.row.id)
    // navigate(`${params.row.id}`)
    console.log(retrievedData)
  
  }
  
  const columns = [
    {
      field: 'profile_picture',
      headerName: '',
      sortable: false,
      width: 70,
      renderCell: (params) => {
          return (
              <>
                <div className ="imageContainer">
                  <img className="cellImage" src={params.row.profile_picture} alt="profile" />
                </div>
              </>
          )
      }
    },
    { field: 'last_name', headerName: 'Last name', width: 130 },
    { field: 'first_name', headerName: 'First name', width: 130 },
    { field: "course_learning", headerName: 'Course', width: 170 },
    {field: "registrationDate", headerName: "Registration Date", width: 130},
    { field: 'amount_paid', headerName: 'Amount paid', width: 130 },
    { field: 'balance', headerName: 'Balance', width: 130 },
    {
      field: 'action',
      headerName: 'Actions',
      sortable: false,
      width: 250,
      renderCell: (params) => {
          return (
              <>
                  <div className='actions'>
                      <a href="/trainee">
                        <button onClick={event => view(event, params)} className='view'>
                          View
                        </button>
                      </a>
                      <button onClick={event => handleDeleteClick(event, params)} className='delete'>
                          Delete
                      </button>
                      <a href="/editTrainee">
                        <button onClick={event => view(event, params)} className='edit'>
                          Edit
                        </button>
                      </a>
                      <button className='move'>
                          Move
                      </button>
                  </div>
              </>
          )
      }
    },
  ];
  
  

  
  console.log(traineesList)

  useEffect(() => {
   getTraineesList(user)
  }, [])

  let data = {"rows":traineesList, "columns":columns}
  return (
    <div className='listTrainees'>
      
      <Sidebar/>
      <div className="listTraineesContainer">
        <Navbar/>
        <div className="info">
          <h4> Trainees </h4>
          <a href="/newTrainee">
            <button> Add Trainee</button>
          </a>
        </div>
        <DeleteConfirmation show={showModal} onHide={handleModalClose} onConfirm={handleModalConfirm}/>
        <Datatable value={data}/>
      </div>
    </div>
  )
}

export default ListTrainees