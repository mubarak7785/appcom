import "./Login.css"

export const Login=()=>{
    return(
        <div class="main">
           <div class="one">
                <p>Welcome to App Name</p>
                <p>Get ahead of the curve. Join the next generation of health heroes.</p>
            <img src="./Frame.png" alt="" />
           </div>
           <div class="two">
            <div>
                <p>Sign-in to your account</p>
                <input type="text" placeholder="    Username" />
                <input type="password" placeholder="   Password"/>
                <input type="text" placeholder="    Unit Name" />
                <button>Sign In</button>
            </div>
           </div>
        </div>
    )

}
   
