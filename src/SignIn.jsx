import { createUserWithEmailAndPassword } from 'firebase/auth'
import {useState} from 'react'
import { auth, db } from './firebase'
import { setDoc,doc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
const SignIn = () => {
    const[name,setName]=useState('')
    const[lastname,setLastName]=useState('')
    const[mail,setMail]=useState('')
    const[password,setPassword]=useState('')
    const navigate=useNavigate()
    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(name.trim()==='' || name==='' ){
            return(
                alert('First name required')
            )
        }
        try{
            await createUserWithEmailAndPassword(auth,mail,password);
            const user=auth.currentUser;
            console.log(user);
            if(user){
                await setDoc(doc(db,"Users",user.uid),{
                    email:user.email,
                    firstName:name,
                    lastname:lastname
                })
            }
            console.log('success');
            alert('Success');
            navigate('/login')
            
            
        }catch(err){
         console.error(err);
         alert(err)
        }
    }
    return (
    <div className='siginDiv relative'>
        <form onSubmit={handleSubmit} className='text-white bg-[rgba(0,0,0,0.8)] flex flex-col gap-5' >

            <h1 className='font-bold'>Signin</h1>
          <div className='flex items-center justify-center gap-5'>
            <label htmlFor="First">First Name</label>
            <input required value={name} onChange={e=>setName(e.target.value)} className='bg-transparent border border-violet-500 rounded-md p-3' type="text" id='First' />
            <label htmlFor="Last">Last Name</label>

            <input required value={lastname} onChange={e=>setLastName(e.target.value)} className='bg-transparent border border-violet-500 rounded-md p-3' type="text" id='Last' />
            </div>
            <label htmlFor='signMail'>E-mail</label>
            <input required className='bg-transparent border border-md p-2' onChange={e=>setMail(e.target.value)} value={mail} type="email" name="" id="signMail"/>
            
            <label htmlFor="signPass">Password</label>
            <input required className='bg-transparent border border-md p-2' onChange={e=>setPassword(e.target.value)} type="password" value={password} name="" id="signPass" />
           <button type='submit' className='bg-purple-500 w-full p-2 rounded-lg'>SignIn</button>
        </form>
    </div>
  )
}

export default SignIn