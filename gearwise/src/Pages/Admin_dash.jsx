import React, { useEffect, useRef, useState } from 'react'; 
import { Link, useNavigate } from "react-router-dom"; 
import A_Sidebar from '../Components/Sidebar/A_Sidebar';
import A_Dashboard from '../Components/A_Dashboard';
import Charts from '../Components/Charts/Charts';



export default function Admin_dash() {
  const navigate = useNavigate();     
  const [customerId, setCustomerId] = useState(null);     
  const [role, setRole] = useState(null);  // Store user role

// Fetch customer ID and role from localStorage     
useEffect(() => {         
    const storedCustomerId = localStorage.getItem('customerId');         
    const storedRole = localStorage.getItem('Role'); // Assuming role is also stored in localStorage
  
    if (storedCustomerId && storedRole) {            
        setCustomerId(storedCustomerId);            
        setRole(storedRole);            
        if (storedRole === 'customer' || storedRole=== 'supplier' || storedRole==='moderator') {                
            navigate('/unauth'); // Redirect if not an admin            
        }      
    } else {            
        navigate('/unauthrehome'); // Redirect if no customerId or role found
        // navigate('/login'); // You can also redirect to login if that fits your flow
    }     
}, [navigate]);

  return (
<div>
    <div className='  container-fluid'>
      <div className='row'>
        <div className='col-2'>
          <A_Sidebar />
        </div>
        <div className='col-10 row'>

          <div className='sticky-top'>
            
           {/* <Navbar/>           */}
               
          </div>
          <div className='mt-5'>
            <A_Dashboard/>
          </div>
        </div>
      </div>
      <div className='row' style={{ marginTop: '-120px' }}>
        <div className='col-2'>
          <A_Sidebar />
        </div>
        <div className='col-10 row'>
          <div>
            <Charts/>
          </div>
        </div>
      </div>
    </div>
    </div>


  )
}