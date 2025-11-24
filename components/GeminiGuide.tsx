import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, User, Bot, Loader2 } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const GeminiGuide: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '0',
      role: 'model',
      text: "Welcome, seeker. The path is open. Tell me of the burden you carry, or the light you wish to find.",
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const history = messages.map(m => ({ role: m.role, text: m.text }));
    const responseText = await sendMessageToGemini(input, history);

    const botMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: responseText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="bg-forest-950 min-h-screen pt-28 pb-12 px-4 md:px-8 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Background Ambient Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-forest-800/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="w-full max-w-4xl glass-panel rounded-xl overflow-hidden flex flex-col h-[75vh] relative z-10 shadow-2xl shadow-black/50">
        
        {/* Header */}
        <div className="bg-forest-900/50 backdrop-blur-md p-6 flex items-center justify-between border-b border-white/5">
          <div className="flex items-center space-x-4">
            <div className="p-2 border border-gold-400/50 rounded-full text-gold-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-xl tracking-wide text-sand-50">The Oracle</h2>
              <p className="text-[10px] text-gold-400 uppercase tracking-[0.2em]">AI Spiritual Guide</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex items-start max-w-[85%] ${msg.role === 'user' ? 'ml-auto flex-row-reverse' : ''}`}
            >
              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1 border border-white/10 ${
                msg.role === 'user' ? 'bg-sand-100 text-forest-900 ml-4' : 'bg-forest-800 text-gold-400 mr-4'
              }`}>
                {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>
              
              <div className={`p-6 text-sm leading-relaxed font-light tracking-wide ${
                msg.role === 'user' 
                  ? 'bg-sand-100/10 text-sand-50 rounded-2xl rounded-tr-sm border border-white/5' 
                  : 'text-gray-300 rounded-2xl rounded-tl-sm'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-center space-x-3 text-gold-400 text-xs tracking-widest uppercase animate-pulse pl-12">
               <Loader2 className="w-4 h-4 animate-spin" />
               <span>Communing with spirits...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-6 bg-forest-900/30 border-t border-white/5">
          <div className="flex items-center bg-forest-950/50 rounded-full px-2 py-2 border border-white/10 focus-within:border-gold-400/50 transition-all shadow-inner">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask for guidance..."
              className="flex-1 bg-transparent border-none focus:ring-0 text-sand-100 placeholder-gray-600 px-4 py-2 outline-none font-light"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="p-3 bg-gold-500 text-forest-950 rounded-full hover:bg-gold-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      
      <p className="mt-6 text-[10px] text-white/20 uppercase tracking-widest text-center max-w-lg">
        The Oracle uses Gemini AI. Insights are generated for spiritual reflection and travel inspiration.
      </p>
    </div>
  );
};

export default GeminiGuide;