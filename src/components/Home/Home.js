import React from 'react';
import { useEffect, useState } from 'react';
import Friend from './../Friend/Friend';

const Home = () => {

    const [friends, setFriend] = useState([]);

    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res=>res.json())
      .then(data => setFriend(data))
    })

  

    return (
        <div>
              <h1 className='friendLoded'>Data Lodead{friends.length}</h1>
      {
        friends.map(friend => <Friend friend={friend}> </Friend>)
      }
            
        </div>
    );
};

export default Home;