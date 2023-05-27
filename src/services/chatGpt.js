const api ="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"
const { Configuration, OpenAIApi } = require("openai");


async function getMessagesChatGpt(text) {

const configuration = new Configuration({
  apiKey:api,
});


const openai = new OpenAIApi(configuration);

const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: text,
  max_tokens: 100,

});

  if (response.status == 200 && response.data.choices.length > 0) {
    return response.data.choices[0].text;
   
    
  }else{
    return null;

  }
}

module.exports = {
  getMessagesChatGpt,
};


