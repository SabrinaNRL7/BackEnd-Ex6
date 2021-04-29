import React, { useEffect, useState } from "react";
import NavBar from '../../molecules/NavBar';
import Card from '../../molecules/Card';
import Axios from "axios";

const Dashboard = () => {

    const [users, setUsers] = useState ([]);

    useEffect(() => {
        //Ambil API dengan 2 cara
        //1. Fetch
        // fetch('https://reqres.in/api/users')
        // .then(res => res.json())
        // .then(json => setUsers(json.data));

        //2. Axios
        Axios.get('http://localhost:3004/users').then((res) => setUsers(res.data));
    }, [users]);

    const addUser = () => {
        const data = {
            avatar: 'https://source.unsplash.com/user/erondu',
            email: 'sabrina@gmail.com',
            first_name: "Sabrina",
            last_name: "Lingga",
        };
        Axios.post('http://localhost:3004/users', data);
    }

    return (
        <div className="container">
            <NavBar />
            <h3>Dashboard</h3>  
            <br/>
            <button className="btn btn-primary mb-3" onClick={addUser}>Tambah User</button>
            <div className="row align-items-start">
                {
                    users.map(item => (
                    <Card
                    avatar={item.avatar}
                    fullName={`${item.first_name} ${item.last_name}`}
                    email={item.email}
                    />
                    ))
                }
                
            </div>          
        </div>
    ); 
};

export default Dashboard;
