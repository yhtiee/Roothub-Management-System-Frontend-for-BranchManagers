import Home from "./pages/home/Home"
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
  // Switch
} from "react-router-dom";
import Login from "./pages/login/Login";
import ListTrainees from "./pages/listTrainees/ListTrainees";
import NewTrainees from "./pages/newTrainees/NewTrainees";
import Trainee from "./pages/trainee/Trainee";
import { ListProvider } from "./context/ListData";
import { RetrieveProvider } from "./context/retrieveContext";
import AuthContext, { AuthProvider } from "./context/authContext";
import { CreateProvider } from "./context/CreateData";
import EditTrainee from "./pages/editTrainee/EditTrainee";
import { UpdateProvider } from "./context/updateContext";
import { useContext } from "react";
import PrivateRoute from "./route/PrivateRoute";
import { TotalDataProvider } from "./context/TotalData";
import ListTrainer from "./pages/listTrainer/ListTrainer";
import Trainer from "./pages/trainer/Trainer";
import NewTrainer from "./pages/newTrainer/NewTrainer";


function App() {

  // let user = useContext(AuthContext)
  // let auth = localStorage.getItem("authtokens")
  
  return (
    <div className="App">
      <BrowserRouter>
        <ListProvider>
          <AuthProvider>
            <CreateProvider>
              <RetrieveProvider>
                <UpdateProvider>
                  <TotalDataProvider>
                  <Routes>
                      <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>}/>
                      
                      <Route path="/login" element = {<Login/>} />
                      
                      <Route path="/trainees" element = {<PrivateRoute><ListTrainees/></PrivateRoute>} />
                      <Route path="/newTrainee" element = {<PrivateRoute><NewTrainees/></PrivateRoute>} />
                      <Route path="/trainee" element = {<PrivateRoute><Trainee/></PrivateRoute>} />
                      <Route path="/editTrainee" element = {<PrivateRoute><EditTrainee/></PrivateRoute>} />
                      
                      <Route path="/trainers" element = {<ListTrainer/>} />
                      <Route path="/newTrainer" element = {<NewTrainer/>} />
                      <Route path="/trainer" element = {<Trainer/>} />
                  </Routes>
                  </TotalDataProvider>
                </UpdateProvider>
              </RetrieveProvider>
            </CreateProvider>
          </AuthProvider>
        </ListProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
