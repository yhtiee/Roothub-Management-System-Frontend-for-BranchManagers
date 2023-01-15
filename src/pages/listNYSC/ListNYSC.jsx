import React,  {useContext, useEffect, useState}  from 'react'
import Datatable from '../../components/datatable/Datatable'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import "./listNYSC.scss"
import ListContext from '../../context/ListData';
import RetrieveContext from '../../context/retrieveContext'
import { Link, useNavigate } from "react-router-dom";
import CreateContext from '../../context/CreateData'
import DeleteConfirmation from '../../components/deleteConfirm/DeleteConfirmation'
import AuthContext from '../../context/authContext'
import PH from "../../assets/defaultimage.jpg"
import LoadingAnimation from '../../components/loading/Loading'



const ListNYSC = () => {

  let {getNYSCList} = useContext(ListContext)
  let {NYSCList} = useContext(ListContext)
  let {retrievedNYSC} = useContext(RetrieveContext)
  let {dataFetched} = useContext(ListContext)
  let {retrievedEditNYSC} = useContext(RetrieveContext)
  let {deleteNYSC} = useContext(CreateContext)
  let {user} = useContext(AuthContext)
  // let user = "Uyo"

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
    deleteNYSC(deleteId)
    setShowModal(false);
  }

  useEffect(()=> {
    getNYSCList(user)
  }, [handleModalConfirm])

  let view = (event, params) => {
    retrievedNYSC(params.row.id)
  }

  let edit = (event, params) => {
    retrievedEditNYSC(params.row.id)
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
    { field: 'last_name', headerName: 'Last name', width: 130 },
    { field: 'first_name', headerName: 'First name', width: 130 },
    { field: 'email', headerName: 'Email', width: 210},
    { field: 'phone_number', headerName: 'Phone Number', width: 130 },
    { field: 'attached_area', headerName: 'Attached Area', width: 130 },
    {field: "registrationDate", headerName: "Registration Date", width: 130},
    {
      field: 'action',
      headerName: 'Actions',
      sortable: false,
      width: 210,
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
  
  

  
  console.log(NYSCList)

  useEffect(() => {
   getNYSCList(user)
  }, [])

  let data = {"rows":NYSCList, "columns":columns}
  return (
    <div className='listTrainees'>
      
      <Sidebar/>
      <div className="listTraineesContainer">
        <Navbar/>
        <div className="info">
          <h4> NYSC </h4>
          <Link to="/newNYSC">
            <button> Add NYSC</button>
          </Link>
        </div>
        <DeleteConfirmation show={showModal} onHide={handleModalClose} onConfirm={handleModalConfirm}/>
        {!dataFetched? <div className='loader'><LoadingAnimation/></div>:<Datatable value={data}/>}
      </div>
    </div>
  )
}

export default ListNYSC