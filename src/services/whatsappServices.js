const https = require("https");
function sendMenssagesWhatsapp(textResponse,number){
    const data =JSON.stringify({
        "messaging_product": "whatsapp",    
        "recipient_type": "individual",
        "to": number,
        "type": "text",
        "text": {
            "preview_url": false,
            "body": textResponse
        }
    })
    const options = {
        host :"graph.facebook.com",
        path:"/v16.0/109241808832264/messages",
        method:"POST",
        body:data,
        headers:{
            "Content-Type":"application/json",
            Authorization:"Bearer EAADFZCJXqZC7QBAF567k3yZAs4JYkELyPB9XtyQlcbWyPIRZCB6duVzI2bXHK2I1snsdPoX6ybMxfgrrZCsWRGybiHYyvPNfczoZBMloFe0j3aI7OpOdMBXZBU5FCxb9cZBdsitNWFCJ5SiNwq9gVQcXIA87zEofbRpmkrnnuBYkBThArozHBD8VZCxKv6PMfZC0Tj5LQWZCnb1uAZDZD"
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