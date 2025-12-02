import React, { useState, useTransition } from "react";
import { createUSer } from "../service/userService";



function Transitions(){
    const[name,setname] = useState("");
    const[email,setemail] = useState("");
    const[error,seterror] = useState(null);
    const[isPending,startTransition] = useTransition();
    const  handlesubmit = (e)=>{
        let data = {
            name:name,
            email:email
        }
        e.preventDefault();
        startTransition(async()=>{
        const error = await createUSer(data);
        if(error){
            seterror(error);
            return;
        }
        seterror(null);
        })
        console.log("Form submitted");
    }
    return(
        <>
        <h2>Transitions / useTransition Example</h2>
        <form>
            <div>
                <label htmlFor="name">Enter the username</label>
                <input type="text" name="name" id="name" className="name" placeholder="Enter your name...." value={name} onChange={(e)=>setname(e.target.value)} />
            </div>
            <div>
                <label htmlFor="email">Enter the useremail</label>
                <input type="text" name="email" id="email" className="name" placeholder="Enter your email...." value={email} onChange={(e)=>setemail(e.target.value)} />
            </div>
         <button onClick={handlesubmit} disabled={isPending}>
            update

         </button>
         {error && <p style={{color:"red"}}>{error}</p>}
        </form>
        </>
    )
}

export default Transitions;