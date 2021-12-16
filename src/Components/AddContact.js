import React from 'react';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../fireBase_Config";
import { useEffect, useState } from 'react';


const Add_Contact = () => {

    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [phone, setPhone] = useState('');

    const dbPath = collection(db, 'users');
    const [userData, setUserData] = useState([]);
    const [newPhone, setNewPhone] = useState('');

    // Post data to server
    const handlePost = async () => {
        const dataPack = await addDoc(dbPath, { first: first, last: last, phone: phone });
        console.log('User Id:', dataPack.id)
    }

    // Receive Data from Server
    useEffect(() => {
        let loadData = async () => {
            const storedData = await getDocs(dbPath);
            setUserData(storedData.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        }
        loadData();
    }, []);

    // Update data from database
    const handleUpdate = async (id) => {
        let newAddress = doc(db, 'users', id);
        await updateDoc(newAddress, { phone: newPhone })
    }

    // Delete data from database
    const handleDelete = async (id) => {
        let newAddress = doc(db, "users", id)
        await deleteDoc(newAddress);
    }

    return (
        <>


            <div className="post_data">
                <h2><u>Add Contact</u></h2>
                <input type="text" name='first' placeholder="First" onChange={(e) => setFirst(e.target.value)} /> <br />
                <input type="text" name='last' placeholder="Last" onChange={(e) => setLast(e.target.value)} /> <br />
                <input type="phone" name='phone' placeholder="Phone" onChange={(e) => setPhone(e.target.value)} /> <br />
                <button type="submit" onClick={() => handlePost()}>Post Data</button>
                <hr /><hr />
            </div>

            <h3><u>All User From Database</u></h3>
            <table style={{ margin: '0 auto', border: '1px solid black' }}>
                <tr>
                    <th>First Name</th>&nbsp;
                    <th>Last Name</th>&nbsp;
                    <th>Phone Number</th>&nbsp;
                </tr>
                {userData.map((info) => (
                    <tr>
                        <td>{info.first}</td> &nbsp;
                        <td>{info.last}</td>&nbsp;
                        <td>{info.phone}</td>&nbsp;
                        <input type="phone" onChange={(e) => setNewPhone(e.target.value)} placeholder={info.phone} />
                        <button onClick={() => { handleUpdate(info.id) }}>Update</button>&nbsp;
                        <button onClick={() => { handleDelete(info.id) }}>Delete</button>&nbsp;
                    </tr>
                ))}
            </table>

        </>
    );
};

export default Add_Contact;