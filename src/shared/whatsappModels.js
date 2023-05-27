function menssageText(textResponse, number){
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
function menssageButton( number){
    const data =JSON.stringify({
        "messaging_product": "whatsapp",    
        "to": number,
        "type": "interactive",
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
function menssageList( number){
    const data =JSON.stringify({
        "messaging_product": "whatsapp",    
        "to": number,
        "context": {
            "message_id": "<MSGID_OF_PREV_MSG>"
        },
       "type": "interactive",
            "interactive": {
                "type": "list",
                "header": {
                    "type": "text",
                    "text": "lista de opciones"
                },
                "body": {
                    "text": "tengo estas opciones para ti"
                },
                "footer": {
                    "text": "seleciona una opcion para poder ayudarte"
                },
                "action": {
                    "button": "ver mas",
                    "sections": [
                        {
                            "title": "servicios",
                            "rows": [
                                {
                                    "id": "<LIST_SECTION_1_ROW_1_ID>",
                                    "title": "trabajos empastados",
                                    "description": "trabajos empastados"
                                },
                                {
                                    "id": "<LIST_SECTION_1_ROW_2_ID>",
                                    "title": "venta de laptops",
                                    "description": "venta de laptops"
                                }
                            ]
                        },
                        {
                            "title": "ubicacion y contactos",
                            "rows": [
                                {
                                    "id": "<LIST_SECTION_2_ROW_1_ID>",
                                    "title": "frentw a la uasd",
                                    "description": "<SECTION_2_ROW_1_DESC>"
                                },
                                {
                                    "id": "<LIST_SECTION_2_ROW_2_ID>",
                                    "title": "lista de contactos",
                                    "description": "<SECTION_2_ROW_2_DESC>"
                                }
                            ]
                        }
                    ]
                }
            }
        
    })
    return data;
}

module.exports = {
    menssageText,
    menssageList,
    menssageButton
}