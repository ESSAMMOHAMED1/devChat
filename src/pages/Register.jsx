import React from "react";
import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, storage, db } from "../firebase";
import Add from "../assets/imgs/addAvatar.png";

const Register = () => {
  const [err, seterr] = useState(false);
  const handelSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {

      const res = await createUserWithEmailAndPassword(auth, email, password);
      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
        
          seterr(true);
        
        },
        () => {
         
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
           
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            try{
              
              await setDoc(doc(db, "users", res.user.uid), {
                uid: res.user.uid,
                displayName,
                email,
                photoURL: downloadURL,
              });
            }catch{
              console.log(err);
            }

          });
        }
      );
    } catch {
      seterr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">DevChat</span>
        <span className="title">Register</span>
        <form onSubmit={handelSubmit}>
          <input required type="text" placeholder="display name" />
          <input required type="email" placeholder="email" />
          <input required type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        {err && <span> error </span>}
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
