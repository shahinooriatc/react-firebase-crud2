import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {



    return (
        <>
            <div className="main">
                <div className="nav" style={{display: 'flex',justifyContent: 'center'}}>
                    <div className="name">
                        <h4>User Name</h4>
                    </div> &nbsp;
                    <div className="contact">
                        <h4>+8801758463210</h4>
                    </div>
                </div>
                <div className="add_Contact">
                    <button>
                        <Link to="addcontact">Add Contact</Link>
                    </button>
                </div>
                <div className="login_Reg">
                    <button>
                        <Link to="register">Register</Link>
                    </button>
                    <button>
                        <Link to="login">
                        Login</Link>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Home;