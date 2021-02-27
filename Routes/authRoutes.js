module.exports=(app,passport)=>{

    //initializing the passport to the application
    app.use(passport.initialize())

    //using the sessions in the application
    app.use(passport.session())


    //authenticating the login through a specific HTTP URL
    app.get("/login/google",passport.authenticate("google",{
        scope:["profile","email"]
    }))

    //using the call back URL to authenticate the user in the system
    app.get("/login/authenticated",passport.authenticate("google"))

    //Displaying the user information in the HTTP URl
    app.get("/login/user",(req , res )=>{
        res.send(req.user)
        res.end()
    })
}