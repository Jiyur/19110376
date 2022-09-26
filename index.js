const express=require('express');
var path=require('path')
const app=express();
const PORT=5000
const routers=require('./routers/studentRouter')

app.use((req,res,next)=>{
    res.locals.path = req.path
    next();
})

app.listen(PORT,()=>{
    console.log(`Listen port: ${PORT}`)
})
// Return JSON if the request header have content JSON:
app.use(express.json());
// App use routers:
app.use('/',routers)
app.use(
    express.urlencoded({
      extended: true,
    })
  );

app.use((req,res) => {
    res.status(404).render('404', { error: 'not valid' });
  }); 

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

