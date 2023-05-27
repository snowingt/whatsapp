const https = require("https");
require('dotenv').config();
const apiKey = process.env.API_KEY;
function sendMenssagesWhatsapp(data){
   
    const options = {
        host :"graph.facebook.com",
        path:"/v16.0/109241808832264/messages",
        method:"POST",
        body:data,
        headers:{
            "Content-Type":"application/json",
            Authorization: apiKey
        }
    }
const req = https.request(options, res => {
    res.on("data", d=>{
        process.stdout.write(d);
    });
});
req.on("error", error => {
    console.error(error)
})

req.write(data)
req.end()

}
module.exports = {
    sendMenssagesWhatsapp
}