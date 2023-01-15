import React,  {useContext, useEffect, useState}  from 'react'
import Datatable from '../../components/datatable/Datatable'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import "./listTraines.scss"
import ListContext from '../../context/ListData';
import RetrieveContext from '../../context/retrieveContext'
import { Link} from "react-router-dom";
import CreateContext from '../../context/CreateData'
import DeleteConfirmation from '../../components/deleteConfirm/DeleteConfirmation'
import PH from "../../assets/defaultimage.jpg"
import LoadingAnimation from '../../components/loading/Loading'
import AuthContext from '../../context/authContext'



const ListTrainees = () => {

  
  let {getTraineesList} = useContext(ListContext)
  let {traineesList} = useContext(ListContext)
  let {dataFetched} = useContext(ListContext)
  let {retrievedTrainee} = useContext(RetrieveContext)
  let {retrievedEditTrainee} = useContext(RetrieveContext)
  let {deleteTrainee} = useContext(CreateContext)
  // let user = "Uyo"
  let {user} = useContext(AuthContext)
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

  useEffect(() => {
    getTraineesList(user)
   }, [handleModalConfirm])

  
  let view = (event, params) => {
    retrievedTrainee(params.row.id)
  }

  let edit = (event, params) => {
    retrievedEditTrainee(params.row.id)
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
                  <img className="cellImage" src={params.row.profile_picture? params.row.profile_picture: PH } alt="profile" />
                </div>
              </>
          )
      }
    },
    { field: 'last_name', headerName: 'Last name', width: 120 },
    { field: 'first_name', headerName: 'First name', width: 100},
    { field: "course_learning", headerName: 'Course', width: 200 },
    {field: "registrationDate", headerName: "Registration Date", width: 130},
    {field: "training_fee", headerName: "Training Fee", width: 110},
    { field: 'amount_paid', headerName: 'Amount paid', width: 130 },
    { field: 'balance', headerName: 'Balance', width: 100 },
    {
      field: 'action',
      headerName: 'Actions',
      sortable: false,
      width: 200,
      renderCell: (params) => {
          return (
              <>
                  <div className='actions'>

                        <button onClick={event => view(event, params)} className='view'>
                          View
                        </button>
                      <button onClick={event => handleDeleteClick(event, params)} className='delete'>
                          Delete
                      </button>
                        <button onClick={event => edit(event, params)} className='edit'>
                          Edit
                        </button>
                  </div>
              </>
          )
      }
    },
  ];


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
          <Link to="/newTrainee" >
            <button> Add Trainee</button>
          </Link>
        </div>
        <DeleteConfirmation show={showModal} onHide={handleModalClose} onConfirm={handleModalConfirm}/>
        {!dataFetched? <div className='loader'><LoadingAnimation/></div>:<Datatable value={data}/>}
      </div>
    </div>
  )
}

export default ListTrainees