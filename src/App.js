import logo from './logo.svg';
import './App.css';
import AllRouting from './AllRouting/AllRouting';
import axios from "axios";
// axios.defaults.baseURL = "https://hummstaffing.herokuapp.com/api";
// axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem('access_key')}`;
// console.log(localStorage.getItem("access_token"));
// axios.defaults.headers.common["secretKey"] = `rosx.AD-98dBXZnC7rb794a5593PjPQfzDsQgwy.BXF1LNPw4lZLK6BR6Kidf90.@$%hummstaffing???AD`;
function App() {
  return (
    <div className="App">
     <AllRouting/>
    </div>
  );
}

export default App;
