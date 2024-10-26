const  { OpenAI } =  require("openai")

async function chatgpt(content, apiKey) {

    try {
        const openai = new OpenAI({apiKey})

        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { 
                    role: "system", 
                    content : `Compare o código original com a minha sugestão de melhoria. Apresente o código original sob o título 'Alterações no Código' e a sugestão de melhoria sob o título 'Sugestão de Melhoria'. Inclua uma seção de 'Considerações Finais' que seja breve e explique as melhorias em termos de performance e legibilidade ${content}` 
                }
            ],
        })
        
        return completion.choices[0].message

    } catch (error) {
        console.error(error)
        return 'erro'
    }
}

module.exports = chatgpt