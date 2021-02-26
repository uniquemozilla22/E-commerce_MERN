module.exports=(app,passport)=>{
    app.get("/login/google",passport.authenticate("google",{
        scope:["profile","email"]
    }))
}