import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./pages/root-layout/index";
import Home from "./pages/home/index";
import Create from "./pages/create/index";
import Update from "./pages/update/index";
import Read from "./pages/read/index";
import { UserContextProvider } from "./hooks/UserContext";

const App = () => {
  return (
    <div>
       <UserContextProvider>
        <Router>
          <Routes>

            <Route element={<RootLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<Create />} />
              <Route path="/read/:id" element={<Read />} />
              <Route path="/update/:id" element={<Update />} />
            </Route>

          </Routes>
        </Router>
      </UserContextProvider>
    </div>
  )
}

export default App