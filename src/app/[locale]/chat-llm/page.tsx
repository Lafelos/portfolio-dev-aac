'use client';

import Head from 'next/head';
import { useEffect, useState, ChangeEvent, KeyboardEvent, FormEvent } from 'react';
import { CreateWebWorkerMLCEngine } from "@mlc-ai/web-llm";
import { useTranslations } from 'next-intl';

const ChatLlm = () => {
    const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
    const [engine, setEngine] = useState<any>(null);
    const [inputValue, setInputValue] = useState('');
    const [infoText, setInfoText] = useState('0');
    const [buttonDisabled, setButtonDisabled] = useState(true);

    useEffect(() => {
        const loadMLCEngine = async () => {
            const SELECTED_MODEL = 'gemma-2b-it-q4f32_1-MLC';
          
            try {
                const webWorker = new Worker('/js/worker.js', { type: 'module' });
          
                const mlcEngine = await CreateWebWorkerMLCEngine(webWorker, SELECTED_MODEL, {
                    initProgressCallback: (info: { text: string; progress: number }) => {
                        setInfoText(`${info.text}%`);
                        if (info.progress === 1) {
                            setButtonDisabled(false);
                        }
                    },
                });
            
                setEngine(mlcEngine);
            } catch (error) {
              console.error('Error loading MLCEngine:', error);
            }
        };

        loadMLCEngine();
    }, []);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const messageText = inputValue.trim();

        if (messageText === '') {
        return;
        }

        setInputValue('');
        setButtonDisabled(true);

        const userMessage = { role: 'user', content: messageText };
        setMessages([...messages, userMessage]);

        try {
        const chunks = await engine.chat.completions.create({ messages, stream: true });
        let reply = '';

        for await (const chunk of chunks) {
            const [choice] = chunk.choices;
            const content = choice?.delta?.content ?? '';
            reply += content;
        }

        setMessages([...messages, { role: 'assistant', content: reply }]);
        } catch (error) {
        console.error('Error fetching response from MLCEngine:', error);
        } finally {
        setButtonDisabled(false);
        }
    };

    const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
        handleSubmit(event);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <Head>
            <title>ChatGPT Local 100% privado, gratis y maravilloso</title>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>

        <main className="flex flex-col items-center justify-between pt-24 bg-white text-black w-full max-w-screen-lg mx-auto rounded-lg shadow-lg">
            <ul className="w-full max-h-80 overflow-y-auto p-4">
            {messages.map((message, index) => (
                <li key={index} className={`message ${message.role === 'user' ? 'user' : 'bot'}`}>
                <span>{message.role === 'user' ? 'Tú' : 'AndyBot'}</span>
                <p>{message.content}</p>
                </li>
            ))}
            </ul>

            <form className="w-full flex items-center justify-center p-4 border-t" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Escribe tu mensaje aquí..."
                className="flex-grow border rounded-full py-2 px-4 mr-2 focus:outline-none"
                value={inputValue}
                onChange={handleMessageChange}
                onKeyPress={handleKeyPress}
            />
            <button
                type="submit"
                className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none ${buttonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={buttonDisabled}
            >
                Enviar
            </button>
            </form>
        </main>

        <small className="text-xs text-gray-500 mt-4">
            Cargando modelo: {infoText}
        </small>
        </div>
    );
};

export default ChatLlm;
