const openai = require('../config/config');

const request = async (req, res) => {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Say this is a test",
        max_tokens: 7,
        temperature: 0,
    });
    res.send(response.data.choices[0].text)
}

// const requestAPI = async (req, res) => {
//     const response = await openai.createCompletion({
//         model: "text-davinci-003",
//         prompt: "Say this is a test",
//         max_tokens: 7,
//         temperature: 0,
//     });
//     console.log(response.data.choices[0].text)
// }

// requestAPI()

module.exports = request