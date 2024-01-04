import React, { Component } from 'react'
import { useState } from 'react'
import {MdCloudUpload,MdDelete} from 'react-icons/md'
import {AiFillFileImage} from 'react-icons/ai'
import '/Users/gokul.reddy/Downloads/login-signup-react-bootstrap-main/src/signup.css'
function SignUp(){
        const [image,setImage]=useState(null)
        const [fileName,setFileName]=useState("No File Selected")
        return (
            <div className='auth-wrappers'>
                <div className='auth-inners'>
           <main>
            <form onClick={()=> document.querySelector('.inputfield').click()} className='formlay'>
                <input type='file' accept='image/*' className='inputfield' hidden/>
                {image ?
                <img src={image} width={60} height={60} alt={filename}/>:
                <MdCloudUpload color='#1475cf' size={60} />}
            </form>
           </main>
           </div>
           </div>
            )
}

export default SignUp