const fs = require("fs");
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));
const whatsappService = require("../services/whatsappServices");

const verifyToken = (req, res) => {
  try {
    let accessToken = "AVIWE478HTPE9RNV323RNSD";
    let token = req.query["hub.verify_token"];
    let challenge = req.query["hub.challenge"];
    if (challenge != null && token != null && token === accessToken) {
      res.status(200).send(challenge);
    } else {
      res.status(403).send("Error");
    }
  } catch (error) {
    res.status(400).send("Error");
  }
};
const RecivedMenssage = (req, res) => {
  try {
    let entry = (req.body["entry"])[0];
    let changes = (entry["changes"])[0];
    let value = changes["value"];
    let messageObject = value["messages"];
  
    if (typeof messageObject != "undefined") {
      let messages = messageObject[0];
      let number= messages["from"]

      let text = GetTextUser(messages);
      whatsappService.sendMenssagesWhatsapp(  text, number);
     
      myConsole.log(text);
   
    }
   

    res.send("EVENT_RECEIVED");
  } catch (error) {
    myConsole.log(error);
    res.send("EVENT_RECEIVED");
  }
};
function GetTextUser(messages) {
  let text = "";
  let typeMessage = messages["type"];
  if (typeMessage ==" text") {
    text = (messages["text"])["body"];
  } else if (typeMessage == "interactive") {
    let interactiveObject = messages["interactive"];
    let typeInteractive = interactiveObject["type"];
  

    if (typeInteractive == "button_reply") {
      text = (interactiveObject["button_reply"])["title"];
    } else if (typeInteractive == "list_reply") {
      text = (interactiveObject["list_reply"])["title"];
    } else {
      myConsole.log("error del boton");
    }
  } else {
    myConsole.log("error del mensaje");
  }
  return text;
}
module.exports = {
  verifyToken,
  RecivedMenssage,
};
