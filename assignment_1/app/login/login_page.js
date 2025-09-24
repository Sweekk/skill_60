function Login(){
    return <div>
        <div style = {{
            height:"50px",
            width: "100%",
            backgroundColor:"lightgrey",

            }}>
                <input type="text" placeholder="Username" />
        </div>

         <div style = {{
            height:"50px",
            width: "100%",
            backgroundColor:"lightgrey",
            }}>
                <input type="text" placeholder="Passwerd" />
        </div>
        
         <div>
        <button
        style = {{
            height:"50px",
            width: "150px",
            backgroundColor:"blue",
        }}
        >Login</button>
    </div>
    </div>
    
    
}
export default Login;