import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppLayaut } from "./layouts";
import Dashboards from "./pages/Dashboards";

export default function App() {
   return (
    <Router>
      <Routes>
        <Route path="/" element = { <AppLayaut />}>
        <Route index element = {  <Dashboards/>}/>
        <Route path="store" element = { <h1>store</h1> }/>
        <Route path="wallet" element = { <h1>Wallet</h1> }/>
        <Route path="activebids" element = { <h1>Active Bids</h1> }/>
        <Route path="history" element = { <h1>History</h1> }/>
        <Route path="analytics" element = { <h1>Analytics</h1> }/>
        </Route>

        <Route path="*" element = { <h1>not found 404</h1> }/>

      </Routes>
    </Router>
      
  )
}


