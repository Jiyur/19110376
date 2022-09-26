const array = require("../models/studentModel");
let mygroup = array.mygroup;

const getStudentList = (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(mygroup));
  console.log(req.method,req.url)

};
const getStudentInfoById = (req, res) => {
  const id = req.params.id;
  if (req.method == "GET") {
    if (id) {
      const student = mygroup.find((student) => student.id == id);
      if (student != null) {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.write(
          "<html><body><ul><li>" + student.name + "</li></ul></body></html>",
          "utf-8"
        );
        res.end();
      } else {
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/html");
        res.write("Not valid");
        res.end();
      }
    } else {
      const listAll = mygroup;
      if (listAll.length > 0) {
        mygroup.forEach((element) => {
          res.write(
            "<html><body><ul><li>" + element.name + "</li></ul></body></html>",
            "utf-8"
          );
        });
        // res.render('index',{
        //     mygroup: listAll
        // })
        res.end();
      } else {
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/html");
        res.write("Not valid");
        res.end();
      }
    }
  } 
  console.log(req.method,req.url)

};
const addStudent=(req,res)=>{
    const id=req.params.id;
    const idChecker=mygroup.find((student)=>student.id==id);
    if(id==19110376||id==19110464||id==19110408){
        if(idChecker){
            res.write('Not valid')
            res.end()
        }
        else{
            const name=req.body.name;
            const student={
                id:id/1,
                name:name
            }
            array.mygroup.push(student);
            res.end()
        }
    }
    else{
        res.write('Not valid')
        res.end()
    }
    console.log(req.method,req.url)

}
const loadStudentId=(req,res)=>{
    const id=req.params.id;
    if(id==19110376||id==19110464||id==19110408){
        const idChecker=mygroup.find((student)=>student.id==id);
        res.end(JSON.stringify(idChecker))
       
    }
    else{
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({error:'Not valid'}))
        res.end()
    }
    console.log(req.method,req.url)

}
module.exports = {
  getStudentList,
  getStudentInfoById,
  addStudent,
  loadStudentId
};
