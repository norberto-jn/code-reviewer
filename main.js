const chatgpt = require("./chatgpt")

async function generateReviewText(content, apiKey) {
    try {
        const response = await chatgpt(content, apiKey)
        return response?.content
    } catch (err) {
        return 'Erro de integração'
    }
}

module.exports = generateReviewText