import { Link } from "react-router-dom";
import CategoryCreate from "./CategoryCreate";
import TransactionCreate from "./TransactionCreate";
import UserCreate from "./UserCreate";



function Admin() {





  return (
    <div className="Admin">
        <div className="Button">
          
          <Link to="/"><button type="button" class="btn btn-primary">Homepage</button></Link>

  
    
    </div>
      <UserCreate/>
        <CategoryCreate/>
        <TransactionCreate/>
    
    </div>
  );
}



export default Admin;