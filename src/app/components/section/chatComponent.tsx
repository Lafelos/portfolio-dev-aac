"use client";

import React, { useState, useEffect } from 'react';
import { CreateMLCEngine } from "@mlc-ai/web-llm";

const selectedModel = "Llama-3-8B-Instruct-q4f32_1-MLC";

export default function ChatComponent() {
    const [showChat, setShowChat] = useState(false);
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState<{ role: string; content: string; }[]>([]);
    const [engine, setEngine] = useState<any>(null);

    useEffect(() => {
        initializeEngine();
    }, []);

    const initializeEngine = async () => {
        const engine = await CreateMLCEngine(selectedModel, {
            initProgressCallback: console.info
        });
        setEngine(engine);
    };

    const handleChatToggle = () => {
        setShowChat(!showChat);
    };

    const handleSendMessage = async () => {
        if (!engine) return;

        const messages = [
            ...chatHistory,
            { role: "user", content: message }
        ];

        const chunks = await engine.chat.completions.create({
            messages,
            temperature: 1,
            stream: true,
            stream_options: { include_usage: true },
        });

        let newChatHistory: { role: string; content: string; }[] = [...chatHistory];
        for await (const chunk of chunks) {
            newChatHistory.push({ role: "system", content: chunk.choices[0]?.delta.content || "" });
            setChatHistory(newChatHistory);
        }

        setMessage('');
    };

    return (
        <div className="relative">
            <div className="rounded-full w-12 h-12 bg-blue-500 flex items-center justify-center text-white cursor-pointer" onClick={handleChatToggle}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </div>
            {showChat && (
                <div className="absolute bottom-0 right-0 bg-white border border-gray-300 p-4 rounded-lg">
                    <div className="flex items-center mb-4">
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="flex-grow border border-gray-300 rounded-lg p-2 mr-2" placeholder="Escribe tu mensaje..." />
                        <button onClick={handleSendMessage} className="bg-blue-500 text-white px-4 py-2 rounded-lg">Enviar</button>
                    </div>
                    <div className="overflow-auto max-h-48">
                        {chatHistory.map((msg, index) => (
                            <div key={index} className={`text-sm ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                                {msg.content}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
