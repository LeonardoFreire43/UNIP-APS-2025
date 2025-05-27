
import { Layout } from "@/components/layout/Layout";
import { ChatInterface } from "@/components/chatbot/ChatInterface";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Info, Link, Search, Leaf } from "lucide-react"; // Adicionado Leaf aqui

const Chatbot = () => {
  return (
    <Layout requireAuth>
      <div className="container py-6 space-y-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Assistente Virtual</h1>
          <p className="text-muted-foreground">
            Tire suas dúvidas sobre os dados ambientais com nosso assistente virtual e acesse informações precisas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <ChatInterface />
          </div>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bot className="h-5 w-5" />
                  Sobre o EcoBot
                </CardTitle>
                <CardDescription>
                  Assistente especializado em dados ambientais brasileiros
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  O EcoBot foi desenvolvido para fornecer dados ambientais atualizados e confiáveis sobre o Brasil.
                  Nossas informações são coletadas de fontes oficiais e atualizadas regularmente.
                </p>
                <div className="mt-4 space-y-4">
                  <div>
                    <div className="flex items-center gap-2 font-medium text-sm mb-2">
                      <Search className="h-4 w-4" />
                      <h3>Como utilizar</h3>
                    </div>
                    <p className="text-sm">
                      Digite o número da opção desejada ou faça perguntas sobre temas ambientais específicos.
                      O EcoBot entende linguagem natural e responderá com dados relevantes.
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 font-medium text-sm mb-2">
                      <Info className="h-4 w-4" />
                      <h3>Dados disponíveis</h3>
                    </div>
                    <ul className="mt-2 space-y-1 text-sm list-disc pl-5">
                      <li>Qualidade do ar em diferentes regiões</li>
                      <li>Temperatura e mudanças climáticas</li>
                      <li>Qualidade da água em rios e lagos</li>
                      <li>Níveis de poluição e seus impactos</li>
                      <li>Fatos sobre fauna e flora brasileiras</li>
                      <li>Áreas de conservação ambiental</li>
                    </ul>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 font-medium text-sm mb-2">
                      <Link className="h-4 w-4" />
                      <h3>Fontes de dados</h3>
                    </div>
                    <p className="text-sm">
                      Utilizamos dados de instituições como INPE, IBAMA, ANA, SISAM e Ministério do Meio Ambiente.
                      Todas as fontes são verificadas e confiáveis.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Leaf className="h-5 w-5" /> {/* Corrigido de leaf para Leaf */}
                  Atualização de Dados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Os dados ambientais são atualizados mensalmente com base nas informações mais recentes
                  disponibilizadas pelos órgãos oficiais. Última atualização: 13/05/2025.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Chatbot;
