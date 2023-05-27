function sampleText(textResponse, number){
    const data =JSON.stringify({
        "messaging_product": "whatsapp",    
        "to": number,
        "type": "text",
        "text": {
            "body": textResponse
        },
        
    })
    return data;
}
function sampleImage(number){
    const data =JSON.stringify({
        "messaging_product": "whatsapp",    
        "to": number,
        "type": "image",
      
        "image": {
            "link": 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
        },
    })
    return data;
}
function sampleAudio( number){
    const data =JSON.stringify({
        "messaging_product": "whatsapp",    
        "to": number,
        "type": "audio",
      
        "audio": {
            "link": 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        },
    })
    return data;
}

function sampleVideo( number){
    const data =JSON.stringify({
        "messaging_product": "whatsapp",    
        "to": number,
        "type": "video",
      
        "video": {
            "link": "https://www.youtube.com/watch?v=6QjIHnb5yDs",
         },
         "preview_url": true
    })
    return data;
}
function sampleDocument( number){
    const data =JSON.stringify({
        "messaging_product": "whatsapp",    
        "to": number,
        "type": "document",
      
        "document": {
            "link": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
         },
    })
    return data;
}
function sampleButtons( number){
    const data =JSON.stringify({
        "messaging_product": "whatsapp",    
        "to": number,
        "type": "interative",
        "interactive": {
            "type": "button",
            "body": {
                "text": "deseas la suscripcion"
            },
            "action": {
                "buttons": [
                    {
                        "type": "reply",
                        "reply": {
                            "id": "001",
                            "title": "si"
                        }
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "002",
                            "title": "no"
                        }
                    }
                ]
            }
        }
    })
    return data;
}
function sampleLocation( number){
    const data =JSON.stringify({
        "messaging_product": "whatsapp",    
        "to": number,
        "type": "location",
        "location": {
            "latitude": "<LOCATION_LATITUDE>",
            "longitude": "<LOCATION_LONGITUDE>",
            "name": "<LOCATION_NAME>",
            "address": "<LOCATION_ADDRESS>"
        }
    })
    return data;
}
module.exports = {
    sampleText,
    sampleImage,
    sampleAudio,
    sampleVideo,
    sampleDocument,
    sampleButtons,
    sampleLocation
}
