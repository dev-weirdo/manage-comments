import { Route, Routes } from 'react-router-dom'
import ActiveComments from './components/ActiveComments';
import DeletedComments from './components/DeletedComments';
import ManageComments from "./components/ManageComments";

function App() {
  return (
    <div className="container mx-auto">
      <Routes>
        <Route path='/' element={<ManageComments></ManageComments>}>
          <Route index element={<ActiveComments></ActiveComments>}></Route>
          <Route path='deletedComments' element={<DeletedComments></DeletedComments>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
