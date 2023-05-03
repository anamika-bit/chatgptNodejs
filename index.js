const {Configuration, OpenAIApi} = require("openai");
require ('dotenv').config()

const configuration = new Configuration({
    apikey : process.env.OPENAI_API_KEY,
});
console.log(configuration.apikey);

const openai = new OpenAIApi(configuration);

async function runCompletion() {
    const completion = await openai.createCompletion({
        model : "text-davinci-003",
        prompt : "How are you?",
    });
    console.log(completion.data.choices[0].text);
}

runCompletion();