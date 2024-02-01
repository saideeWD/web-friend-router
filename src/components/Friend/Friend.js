import React from 'react';
import './Friend.css'
import { Link, useHistory, useNavigate } from 'react-router-dom';
const Friend = (props) => {
 const {name , email,id} = props.friend;
 const navigate =  useNavigate();
 function handleClick(friendId) {
    navigate(`/Friend/${friendId}`);
  }
    return (
        
        <div className='friend'>
            <h3>Name : {name}</h3>
            <h4>Email : {email}</h4>
            <h5>id :  <Link to={`/Friend/${id}`}>Show Detiel of {id} </Link></h5>
            <button onClick={()=> handleClick(id)}>Click Me</button>
        </div>
    );
};

export default Friend;