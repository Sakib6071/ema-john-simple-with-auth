import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user]=useAuthState(auth)
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [address,setAddress]=useState('');
    const [phone,setPhone]=useState('');
    const [error,setError]=useState('');
    const navigate = useNavigate()
  

  

    const handleNameBlur = event =>{
      setName(event.target.value)
    }
    const handleAddressBlur = event =>{
      setAddress(event.target.value)
    }
    const handlePhoneBlur = event =>{
      setPhone(event.target.value)
    }
    const handleCreateUser = event =>{
        event.preventDefault()
        const shipping = {name, address, email, phone}
        console.log(shipping);

      }
    return (
        <div className="mt-5 w-2/5 mx-auto bg-gray-700 rounded-lg px-10 py-8">
        <p className="text-center text-3xl text-yellow-500">Shipping Information</p>
        <form onSubmit={handleCreateUser}>
          <div className="name-field">
            <label className="text-white text-xl">Enter Your Name</label>
            <br />
            <input onBlur={handleNameBlur}
              className=" px-2 py-3 w-full rounded-lg"
              type="text"
              placeholder="Your Name"
              name="name"
              required
            />
            
          </div>

          <div className="email-field my-5">
            <label className="text-white text-xl">Enter Your Email</label>
            <br />
            <input 
            value={user?.email}
              className=" px-2 py-3 w-full rounded-lg"
              type="email"
              readOnly
              name="email"
            />
            
          </div>

          <div className="address-field my-5">
            <label className="text-white text-xl">Your Address</label> <br />
            <input onBlur={handleAddressBlur}
              className=" px-2 py-3 w-full rounded-lg"
              type="text"
              name="address"
              required
              placeholder="Enter Your Address"
            />
            
          </div>

          <div className="phone-field">
            <label className="text-white text-xl">Your Phone No.</label>
            <br />
            <input onBlur={handlePhoneBlur}
              className=" px-2 py-3 w-full rounded-lg"
              type="text"
              placeholder="Enter Your Phone"
              required
            />
            
          </div>
          <p className="text-red-500">{error}</p>

          <div className="register-button mt-5 text-right">
            <input
              className="hover:cursor-pointer w-full bg-yellow-500 text-black px-5 py-2 text-xl font-semibold rounded-lg"
              type="submit"
              value="Add Shipping"
            />
          </div>
        </form>

{/*         <div className="sign-in-facebook">
          <button
            onClick={facebookSignIn}
            className="text-white py-3 px-2 my-2 text-left w-full border-2 rounded-lg"
          >
            <FontAwesomeIcon
              className=" w-1/6 inline-block text-left"
              icon={faFacebook}
              size={"xl"}
            ></FontAwesomeIcon>
            <span className="text-center w-5/6 mx-auto inline-block ">
              Continue With Facebook
            </span>
          </button>
        </div> */}
      </div>
    );
};

export default Shipment;