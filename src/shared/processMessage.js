const whatsappModels = require('./whatsappModels');
const whatsappServices = require('../services/whatsappServices');
const chatGptServices = require('../services/chatGpt');

async function process(textUser,number){
    textUser = textUser.toLowerCase();
    let models=[];
    /*

    if(textUser.includes("hola")){
       let model = whatsappModels.menssageText("Hola, un gusto saludarte",number);
         models.push(model);
         let modelList = whatsappModels.menssageList(number);
         models.push(modelList);
    } else if(textUser.includes("gracias")){
        let model = whatsappModels.menssageText("De nada, ¿En que más te puedo ayudar?",number);
        models.push(model);
    } else if(textUser.includes("trabajos") 
    || textUser.includes("empastados")
    ){
        let modelButoon = whatsappModels.menssageButton(number);
        models.push(modelButoon);
       
    } else if(textUser.includes("adios")
    || textUser.includes("chao")
    || textUser.includes("bye")
    || textUser.includes("hasta luego")
    || textUser.includes("hasta pronto")
    || textUser.includes("hasta mañana")
    || textUser.includes("hasta la próxima")){
        let model = whatsappModels.menssageText("Adios, espero verte pronto",number);
        models.push(model);
    } else if(textUser.includes("bien")){
        let model = whatsappModels.menssageText("Me alegra que estes bien",number);
        models.push(model);
    } else if(textUser.includes("mal")){
        let model = whatsappModels.menssageText("Lo siento, ¿En que más te puedo ayudar?",number);
        models.push(model);
    } else{
        let model = whatsappModels.menssageText("No entiendo, ¿En que más te puedo ayudar?",number);
        models.push(model);
    }
    */
   
   const resultChatgpt= await chatGptServices.getMessagesChatGpt(textUser);
    
   if(resultChatgpt !=null){
    let model = whatsappModels.menssageText(resultChatgpt,number);
    console.log("resultChatgpt",resultChatgpt);
    models.push(model);
    }else{
        let model = whatsappModels.menssageText("No entiendo, ¿En que más te puedo ayudar?",number);
        models.push(model);
    }
   
   
   
   
   
   
   models.forEach(model => {
    whatsappServices.sendMenssagesWhatsapp(model);

    });
}
module.exports = {
    process
}