import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { MessageSquare, User, Send, Bot, Link as LinkIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import { 
  generateWelcomeMessage, 
  generateMenuResponse, 
  chatbotMenuOptions, 
} from "@/utils/chatbotData";

// Define o tipo de mensagem usada no chat
type Message = {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
  hasLinks?: boolean;
};

export function ChatInterface() {
  // Estado para armazenar as mensagens do chat
  const [messages, setMessages] = useState<Message[]>([]);
  // Estado para o texto digitado pelo usuário
  const [input, setInput] = useState("");
  // Estado para indicar se o bot está "digitando"
  const [isTyping, setIsTyping] = useState(false);
  // Referência para rolar o chat até o final automaticamente
  const bottomRef = useRef<HTMLDivElement>(null);
  // Usuário autenticado (se houver)
  const { user } = useAuth();
  // Toast para exibir notificações
  const { toast } = useToast();

  // Ao montar o componente, adiciona a mensagem de boas-vindas
  useEffect(() => {
    setMessages([
      {
        id: "welcome",
        content: generateWelcomeMessage(),
        isUser: false,
        timestamp: new Date(),
        hasLinks: false,
      },
    ]);
  }, []);

  // Sempre que as mensagens mudam, rola o chat para o final
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Envia a mensagem do usuário e gera a resposta do bot
  const handleSendMessage = (messageText: string = input) => {
    if (!messageText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: messageText,
      isUser: true,
      timestamp: new Date(),
      hasLinks: false,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simula tempo de resposta do bot
    setTimeout(() => {
      const botResponse = generateBotResponse(messageText);
      const hasLinks = botResponse.toLowerCase().includes("url:");
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botResponse,
        isUser: false,
        timestamp: new Date(),
        hasLinks,
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  // Gera a resposta do bot com base na mensagem do usuário
  const generateBotResponse = (message: string): string => {
    const exactMatch = chatbotMenuOptions.find(option => 
      option.key.toLowerCase() === message.toLowerCase()
    );
    
    if (exactMatch) {
      return generateMenuResponse(exactMatch.key);
    }
    
    const lowerMessage = message.toLowerCase();
    
    for (const option of chatbotMenuOptions) {
      if (lowerMessage.includes(option.title.toLowerCase())) {
        return generateMenuResponse(option.key);
      }
    }
    
    if (lowerMessage.includes("menu")) {
      return generateWelcomeMessage();
    }
    
    if (lowerMessage.includes("qualidade do ar") || 
        lowerMessage.includes("poluição") || 
        lowerMessage.includes("ar")) {
      return generateMenuResponse("1");
    }
    
    if (lowerMessage.includes("água") || 
        lowerMessage.includes("rios") || 
        lowerMessage.includes("lagos")) {
      return generateMenuResponse("2");
    }
    
    if (lowerMessage.includes("temperatura") || 
        lowerMessage.includes("clima") || 
        lowerMessage.includes("aquecimento")) {
      return generateMenuResponse("3");
    }
    
    if (lowerMessage.includes("fauna") || 
        lowerMessage.includes("flora") || 
        lowerMessage.includes("animais") || 
        lowerMessage.includes("plantas")) {
      return generateMenuResponse("4");
    }
    
    if (lowerMessage.includes("conservação") || 
        lowerMessage.includes("parques") || 
        lowerMessage.includes("reservas")) {
      return generateMenuResponse("5");
    }
    
    if (lowerMessage.includes("links") || 
        lowerMessage.includes("sites") || 
        lowerMessage.includes("recursos")) {
      return generateMenuResponse("6");
    }
    
    if (lowerMessage.includes("ajuda") || 
        lowerMessage.includes("como usar") || 
        lowerMessage.includes("funciona")) {
      return generateMenuResponse("ajuda");
    }
    
    // Resposta padrão caso não encontre correspondência
    return `Não tenho informações específicas sobre isso, mas posso ajudar com dados ambientais. 
    
Digite um número para acessar os dados:
1 - Qualidade do Ar
2 - Qualidade da Água
3 - Temperatura e Clima
4 - Fauna e Flora
5 - Áreas de Conservação
6 - Recursos e Links

Ou digite "ajuda" para instruções.`;
  };

  // Permite enviar mensagem ao pressionar Enter
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Envia mensagem ao clicar em uma sugestão do menu rápido
  const handleSuggestedQuestionClick = (question: string) => {
    handleSendMessage(question);
  };

  // Renderiza o conteúdo da mensagem, permitindo negrito com **
  const renderMessageContent = (content: string) => {
    const paragraphs = content.split("\n\n");
    
    return (
      <>
        {paragraphs.map((paragraph, idx) => {
          const parts = paragraph.split(/(\*\*.*?\*\*)/g);
          
          return (
            <p key={idx} className={`${idx > 0 ? "mt-2" : ""}`}>
              {parts.map((part, partIdx) => {
                if (part.startsWith("**") && part.endsWith("**")) {
                  return <strong key={partIdx}>{part.slice(2, -2)}</strong>;
                }
                return <span key={partIdx}>{part}</span>;
              })}
            </p>
          );
        })}
      </>
    );
  };
  
  // Estrutura visual do chat
  return (
    <div className="flex flex-col h-[calc(100vh-16rem)] bg-muted/30 rounded-lg border">
      <div className="bg-muted/20 p-4 border-b">
        <div className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-medium">EcoBot - Assistente Ambiental</h2>
        </div>
        <p className="text-sm text-muted-foreground">
          Tire suas dúvidas sobre dados ambientais
        </p>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.isUser ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`flex gap-3 max-w-[80%] ${
                  message.isUser ? "flex-row-reverse" : ""
                }`}
              >
                {/* Avatar do usuário ou do bot */}
                <Avatar className={`h-8 w-8 ${message.isUser ? "bg-primary" : "bg-muted"}`}>
                  {message.isUser ? (
                    user?.avatar ? (
                      <AvatarImage src={user.avatar} alt={user.name} />
                    ) : (
                      <AvatarFallback>
                        <User className="h-4 w-4" />
                      </AvatarFallback>
                    )
                  ) : (
                    <AvatarFallback>
                      <Bot className="h-4 w-4" />
                    </AvatarFallback>
                  )}
                </Avatar>
                <div className="flex flex-col">
                  <Card
                    className={`p-3 ${
                      message.isUser
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    <div className="text-sm whitespace-pre-line">
                      {renderMessageContent(message.content)}
                      {/* Exibe aviso de links se a mensagem tiver links */}
                      {message.hasLinks && (
                        <div className="mt-3 pt-2 border-t border-primary/10">
                          <div className="flex items-center gap-1 text-xs opacity-70">
                            <LinkIcon className="h-3 w-3" />
                            <span>Links disponíveis nas informações acima</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </Card>
                  <p className="text-xs text-muted-foreground mt-1">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            </div>
          ))}
          {/* Exibe "Digitando..." enquanto o bot está pensando */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex gap-3 max-w-[80%]">
                <Avatar className="h-8 w-8 bg-muted">
                  <AvatarFallback>
                    <Bot className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                <Card className="p-3 bg-muted">
                  <p className="text-sm">Digitando...</p>
                </Card>
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>
      </ScrollArea>

      {/* Área de input e sugestões rápidas */}
      <div className="p-4 border-t bg-background">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Digite uma opção ou sua pergunta sobre dados ambientais..."
            className="flex-1"
          />
          <Button onClick={() => handleSendMessage()} disabled={!input.trim()}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
        <div className="mt-4">
          <p className="text-sm font-medium text-muted-foreground mb-2">Acesso rápido:</p>
          <div className="flex flex-wrap gap-2">
            {/* Botões de acesso rápido para perguntas do menu */}
            {chatbotMenuOptions.slice(0, 6).map((option) => (
              <Button 
                key={option.key} 
                variant="outline" 
                size="sm" 
                className="text-xs"
                onClick={() => handleSuggestedQuestionClick(option.key)}
              >
                {option.key} - {option.title}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}