const fs = require("fs");
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));
const  processMessage  = require("../shared/processMessage");

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
async function RecivedMenssage  (req, res)  {
  try {
    let entry = req.body["entry"][0];
    let changes = entry["changes"][0];
    let value = changes["value"];
    let messageObject = value["messages"];

    if (typeof messageObject != "undefined") {
      let messages = messageObject[0];
      let number = messages["from"];

      let text = GetTextUser(messages);
/* condicionales para pedir algun tipo de datos 
      if (text == "image") {
        let data = sample.sampleImage(number);
        whatsappService.sendMenssagesWhatsapp(data);
      } else if (text == "audio") {
        let data = sample.sampleAudio(number);
        whatsappService.sendMenssagesWhatsapp(data);
      } else if (text == "video") {
        let data = sample.sampleVideo(number);
        whatsappService.sendMenssagesWhatsapp(data);
      } else if (text == "document") {
        let data = sample.sampleDocument(number);
        whatsappService.sendMenssagesWhatsapp(data);
      } else if (text == "location") {
        let data = sample.sampleLocation(number);
        whatsappService.sendMenssagesWhatsapp(data);
      } else if (text == "list") {
        let data = sample.sampleList(number);
        whatsappService.sendMenssagesWhatsapp(data);
      } else if (text == "button") {
        let data = sample.sampleButtons(number);
        whatsappService.sendMenssagesWhatsapp(data);
      } else if (text == "text") {
        let data = sample.sampleText("hola" + number);
        whatsappService.sendMenssagesWhatsapp(data);
      } else {
        let data = sample.sampleText("no entiendo" + number);
        whatsappService.sendMenssagesWhatsapp(data);
      }
      */
    
    if (text != "") {
      myConsole.log( text);
      //let data = processMessage.process(text, number);
      await processMessage.process(text, number);
      myConsole.log("data" + data);
      //whatsappService.sendMenssagesWhatsapp(data);
    }
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
  if (typeMessage === "text") {
    text = messages["text"]["body"];
    myConsole.log("es un texto" + text);
  } else if (typeMessage == "interactive") {
    let interactiveObject = messages["interactive"];
    let typeInteractive = interactiveObject["type"];

    if (typeInteractive == "button_reply") {
      text = interactiveObject["button_reply"]["title"];
    } else if (typeInteractive == "list_reply") {
      text = interactiveObject["list_reply"]["title"];
    } else {
      myConsole.log("error del boton");
    }
  } else {
    myConsole.log("error del mensaje INTERACTIVO");

    myConsole.log("espero que si lo pinte" + text);
  }
  return text;
}
module.exports = {
  verifyToken,
  RecivedMenssage,
};
