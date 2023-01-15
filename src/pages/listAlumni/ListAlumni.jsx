import React,  {useContext, useEffect, useState}  from 'react'
import Datatable from '../../components/datatable/Datatable'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import "./listAlumni.scss"
import ListContext from '../../context/ListData';
import RetrieveContext from '../../context/retrieveContext'
import { Link, useNavigate } from "react-router-dom";
import CreateContext from '../../context/CreateData'
import DeleteConfirmation from '../../components/deleteConfirm/DeleteConfirmation'
import AuthContext from '../../context/authContext'
import LoadingAnimation from '../../components/loading/Loading'

const ListAlumni = () => {
    let {getAlumniList} = useContext(ListContext)
    let {alumniList} = useContext(ListContext)
    let {dataFetched} = useContext(ListContext)
    let {retrievedAlumni} = useContext(RetrieveContext)
    let {retrievedAlumniData} = useContext(RetrieveContext)
    let {deleteAlumni} = useContext(CreateContext)
    // let user = "Uyo"
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
      deleteAlumni(deleteId)
      getAlumniList(user)
      setShowModal(false);
      window.location.reload()
    }
  
    
    let view = (event, params) => {
      retrievedAlumni(params.row.id)
      console.log(retrievedAlumniData)
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
      {field: "email", headerName: "Email", width:200},
      {field: "phone_number", headerName: "Phone", width:150},
      {field: "registrationDate", headerName: "Registration Date", width: 130},
      {field: "completionDate", headerName: "Completion Date", width: 130},
      {
        field: 'action',
        headerName: 'Actions',
        sortable: false,
        width: 200,
        renderCell: (params) => {
            return (
                <>
                    <div className='actions'>
                        <Link to="/singleAlumni">
                          <button onClick={event => view(event, params)} className='view'>
                            View
                          </button>
                        </Link>
                        <button onClick={event => handleDeleteClick(event, params)} className='delete'>
                            Delete
                        </button>
                        <Link to="/editAlumni">
                          <button onClick={event => view(event, params)} className='edit'>
                            Edit
                          </button>
                        </Link>
                    </div>
                </>
            )
        }
      },
    ];
    
    useEffect(() => {
        getAlumniList(user)
        console.log(alumniList)
    }, [])
  
    let data = {"rows":alumniList, "columns":columns}
  return (
    <div className='listTrainees'>
      <Sidebar/>
      <div className="listTraineesContainer">
        <Navbar/>
        <div className="info">
          <h4> Alumni </h4>
        </div>
        <DeleteConfirmation show={showModal} onHide={handleModalClose} onConfirm={handleModalConfirm}/>
        {!dataFetched? <div className='loader'><LoadingAnimation/></div>:<Datatable value={data}/>}
      </div>
    </div>
  )
}

export default ListAlumni