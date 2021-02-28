module.exports=(app,passport)=>{

    //initializing the passport to the application
    app.use(passport.initialize())

    //using the sessions in the application
    app.use(passport.session())


    //authenticating the login through a specific HTTP URL
    app.get("/login/google",passport.authenticate("google",{
        scope:["profile","email"]
    }))

    //Displaying the user information in the HTTP URl
    app.get("/login/user",(req , res )=>{
        res.send(req.user)
    })

    //using the call back URL to authenticate the user in the system
    app.get("/login/authenticated",passport.authenticate("google"))
    
    //logging the user out the application 
        app.get("/logout",(req,res)=>{
             req.logout()
             res.send("<p>The user has sucessfully logged out of the system</p>")
            res.send(res.user)
             
            
        
        })  
}