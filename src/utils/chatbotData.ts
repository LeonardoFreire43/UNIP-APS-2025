
// Structured data for the chatbot responses
export interface EnvironmentalLink {
  title: string;
  url: string;
  description: string;
}

export interface ChatbotMenuOption {
  key: string;
  title: string;
  description: string;
}

// Environmental data sources
export const environmentalLinks: EnvironmentalLink[] = [
  {
    title: "INPE - Instituto Nacional de Pesquisas Espaciais",
    url: "https://www.gov.br/inpe/pt-br",
    description: "Dados oficiais sobre desmatamento, queimadas e qualidade do ar no Brasil"
  },
  {
    title: "Sistema de Informações Ambientais - SISAM",
    url: "https://queimadas.dgi.inpe.br/queimadas/sisam/",
    description: "Monitoramento da qualidade do ar e impactos na saúde"
  },
  {
    title: "Ministério do Meio Ambiente",
    url: "https://www.gov.br/mma/pt-br",
    description: "Portal com informações sobre políticas ambientais e conservação"
  },
  {
    title: "IBAMA - Instituto Brasileiro do Meio Ambiente",
    url: "https://www.gov.br/ibama/pt-br",
    description: "Dados sobre fiscalização ambiental e licenciamento"
  },
  {
    title: "ANA - Agência Nacional de Águas",
    url: "https://www.gov.br/ana/pt-br",
    description: "Informações sobre recursos hídricos e qualidade da água no Brasil"
  }
];

// Fauna and flora interesting facts
export const environmentalFacts = [
  {
    category: "Fauna",
    title: "Amazônia",
    fact: "A Amazônia abriga mais de 2.000 espécies de peixes e 1.300 espécies de aves, sendo a região com maior biodiversidade do planeta."
  },
  {
    category: "Flora",
    title: "Mata Atlântica",
    fact: "A Mata Atlântica possui mais de 20.000 espécies de plantas, das quais 8.000 são endêmicas, ou seja, só existem nesse bioma."
  },
  {
    category: "Fauna",
    title: "Cerrado",
    fact: "O lobo-guará, símbolo do Cerrado, está ameaçado de extinção com menos de 25.000 indivíduos na natureza."
  },
  {
    category: "Flora",
    title: "Pantanal",
    fact: "Durante as cheias, o Pantanal pode ficar com até 80% de sua área inundada, criando um dos maiores sistemas de áreas úmidas do mundo."
  },
  {
    category: "Fauna",
    title: "Mico-leão-dourado",
    fact: "O mico-leão-dourado é um caso de sucesso de conservação. Em 1970 havia apenas 200 indivíduos, hoje são mais de 3.200 na natureza."
  }
];

// Air quality data
export const airQualityData = {
  regions: [
    {
      name: "São Paulo - Centro",
      quality: "Moderada",
      pm25: 18.2,
      pm10: 39.5,
      no2: 45.2,
      o3: 62.3,
      description: "A qualidade do ar apresenta níveis moderados de poluição, especialmente nos horários de pico. Pessoas sensíveis devem limitar atividades ao ar livre."
    },
    {
      name: "Rio de Janeiro - Zona Sul",
      quality: "Boa",
      pm25: 9.8,
      pm10: 22.1,
      no2: 32.7,
      o3: 48.5,
      description: "A qualidade do ar é considerada satisfatória, com baixo potencial de danos à saúde pública."
    },
    {
      name: "Brasília - Plano Piloto",
      quality: "Boa",
      pm25: 7.2,
      pm10: 18.6,
      no2: 21.3,
      o3: 42.9,
      description: "A qualidade do ar é boa durante a maior parte do ano, exceto em períodos de seca intensa."
    },
    {
      name: "Manaus - Centro",
      quality: "Moderada",
      pm25: 14.8,
      pm10: 31.2,
      no2: 29.8,
      o3: 55.6,
      description: "A qualidade do ar varia conforme a estação, com piora significativa durante períodos de queimadas na região amazônica."
    },
    {
      name: "Porto Alegre - Centro",
      quality: "Boa",
      pm25: 10.3,
      pm10: 25.7,
      no2: 27.9,
      o3: 45.2,
      description: "A qualidade do ar é geralmente boa, com episódios de poluição associados a inversões térmicas no inverno."
    }
  ],
  lastUpdated: "13/05/2025",
  source: "Monitores ambientais das principais capitais brasileiras"
};

// Water quality data
export const waterQualityData = {
  sources: [
    {
      name: "Rio Tietê - São Paulo",
      quality: "Ruim",
      ph: 6.2,
      oxygen: "3.1 mg/L",
      temperature: 23.4,
      description: "O rio ainda apresenta altos níveis de poluição, especialmente em trechos que cortam áreas urbanas densas. Projetos de despoluição continuam em andamento."
    },
    {
      name: "Baía de Guanabara - Rio de Janeiro",
      quality: "Moderada a Ruim",
      ph: 7.1,
      oxygen: "4.2 mg/L",
      temperature: 25.8,
      description: "A qualidade da água varia significativamente entre diferentes pontos da baía, com áreas próximas à desembocadura de rios urbanos apresentando maior poluição."
    },
    {
      name: "Lago Paranoá - Brasília",
      quality: "Boa",
      ph: 7.8,
      oxygen: "6.9 mg/L",
      temperature: 22.5,
      description: "A qualidade da água é considerada boa para recreação de contato primário na maior parte do lago, com episódios ocasionais de floração de algas."
    },
    {
      name: "Rio Negro - Manaus",
      quality: "Excelente",
      ph: 5.2, // Naturalmente ácido
      oxygen: "5.8 mg/L",
      temperature: 28.1,
      description: "O Rio Negro mantém excelente qualidade de água, com baixa interferência humana em sua composição natural."
    },
    {
      name: "Lago Guaíba - Porto Alegre",
      quality: "Moderada",
      ph: 6.8,
      oxygen: "5.1 mg/L",
      temperature: 21.2,
      description: "A qualidade varia sazonalmente e é afetada pelo aporte de contaminantes de áreas urbanas e industriais no entorno."
    }
  ],
  lastUpdated: "10/05/2025",
  source: "Agência Nacional de Águas e órgãos ambientais estaduais"
};

// Temperature data
export const temperatureData = {
  trends: [
    {
      region: "Sudeste",
      averageTemperature: "21.8°C",
      increase: "+1.2°C nos últimos 50 anos",
      description: "O aumento de temperatura é mais perceptível nas grandes áreas urbanas, onde o efeito de ilha de calor intensifica o aquecimento."
    },
    {
      region: "Nordeste",
      averageTemperature: "26.5°C",
      increase: "+0.9°C nos últimos 50 anos",
      description: "Regiões semiáridas têm apresentado aumento nas temperaturas máximas e períodos de seca mais prolongados."
    },
    {
      region: "Norte",
      averageTemperature: "27.1°C",
      increase: "+1.1°C nos últimos 50 anos",
      description: "Alterações no ciclo hidrológico têm sido observadas, com impactos nas vazões de rios e na sazonalidade das chuvas."
    },
    {
      region: "Sul",
      averageTemperature: "18.3°C",
      increase: "+0.8°C nos últimos 50 anos",
      description: "Aumento na frequência de eventos extremos, como chuvas intensas e períodos de estiagem severa."
    },
    {
      region: "Centro-Oeste",
      averageTemperature: "24.7°C",
      increase: "+1.3°C nos últimos 50 anos",
      description: "Alterações nos padrões de precipitação têm impactado a agricultura e os biomas naturais da região."
    }
  ],
  projection: "Modelos climáticos indicam aumento médio de 1.5°C a 3.5°C até 2100, dependendo das emissões de gases de efeito estufa.",
  source: "Instituto Nacional de Meteorologia e Painel Brasileiro de Mudanças Climáticas",
  lastUpdated: "05/05/2025"
};

// Conservation areas data
export const conservationData = {
  types: [
    {
      name: "Unidades de Conservação Federais",
      area: "195 milhões de hectares",
      percentage: "22.9% do território nacional",
      description: "Divididas em Unidades de Proteção Integral e Unidades de Uso Sustentável, protegem ecossistemas representativos e garantem a manutenção da biodiversidade."
    },
    {
      name: "Terras Indígenas",
      area: "117 milhões de hectares",
      percentage: "13.8% do território nacional",
      description: "Áreas habitadas por povos indígenas que contribuem significativamente para a conservação ambiental, especialmente na Amazônia."
    },
    {
      name: "Reservas Particulares do Patrimônio Natural",
      area: "0.5 milhão de hectares",
      percentage: "0.06% do território nacional",
      description: "Áreas privadas dedicadas à conservação da biodiversidade, complementando o sistema público de áreas protegidas."
    }
  ],
  challenges: "Pressões de desmatamento, mineração ilegal, grilagem de terras e redução de orçamento para fiscalização e gestão ambiental.",
  source: "Ministério do Meio Ambiente e Instituto Chico Mendes de Conservação da Biodiversidade",
  lastUpdated: "01/05/2025"
};

// Main menu options
export const chatbotMenuOptions: ChatbotMenuOption[] = [
  {
    key: "1",
    title: "Qualidade do Ar",
    description: "Dados sobre qualidade do ar em diferentes regiões do Brasil"
  },
  {
    key: "2",
    title: "Qualidade da Água",
    description: "Informações sobre rios, lagos e qualidade da água"
  },
  {
    key: "3",
    title: "Temperatura e Mudanças Climáticas",
    description: "Dados sobre temperatura e tendências climáticas"
  },
  {
    key: "4",
    title: "Fauna e Flora",
    description: "Fatos interessantes sobre fauna e flora brasileiras"
  },
  {
    key: "5",
    title: "Áreas de Conservação",
    description: "Dados sobre unidades de conservação e proteção ambiental"
  },
  {
    key: "6",
    title: "Recursos e Links",
    description: "Links para fontes confiáveis de informações ambientais"
  },
  {
    key: "ajuda",
    title: "Ajuda",
    description: "Instruções sobre como usar o chatbot"
  }
];

// Generate response based on menu option
export const generateMenuResponse = (option: string): string => {
  const lowerOption = option.toLowerCase();
  
  // Check for menu option number
  if (lowerOption === "1" || lowerOption.includes("ar")) {
    const data = airQualityData;
    let response = `📊 **QUALIDADE DO AR** 📊\n\nDados atualizados em ${data.lastUpdated}:\n\n`;
    
    data.regions.forEach(region => {
      response += `🏙️ **${region.name}**\nQualidade: ${region.quality}\nPM2.5: ${region.pm25} µg/m³\nPM10: ${region.pm10} µg/m³\nNO₂: ${region.no2} µg/m³\nO₃: ${region.o3} µg/m³\n\n${region.description}\n\n`;
    });
    
    response += `Fonte: ${data.source}\n\nDigite um número para ver outras informações ou "menu" para voltar ao menu principal.`;
    return response;
  }
  
  if (lowerOption === "2" || lowerOption.includes("agua") || lowerOption.includes("água")) {
    const data = waterQualityData;
    let response = `💧 **QUALIDADE DA ÁGUA** 💧\n\nDados atualizados em ${data.lastUpdated}:\n\n`;
    
    data.sources.forEach(source => {
      response += `🌊 **${source.name}**\nQualidade: ${source.quality}\npH: ${source.ph}\nOxigênio Dissolvido: ${source.oxygen}\nTemperatura: ${source.temperature}°C\n\n${source.description}\n\n`;
    });
    
    response += `Fonte: ${data.source}\n\nDigite um número para ver outras informações ou "menu" para voltar ao menu principal.`;
    return response;
  }
  
  if (lowerOption === "3" || lowerOption.includes("temperatura") || lowerOption.includes("clima")) {
    const data = temperatureData;
    let response = `🌡️ **TEMPERATURA E MUDANÇAS CLIMÁTICAS** 🌡️\n\nDados atualizados em ${data.lastUpdated}:\n\n`;
    
    data.trends.forEach(trend => {
      response += `🌍 **${trend.region}**\nTemperatura média: ${trend.averageTemperature}\nAumento: ${trend.increase}\n\n${trend.description}\n\n`;
    });
    
    response += `📈 **Projeção futura**\n${data.projection}\n\nFonte: ${data.source}\n\nDigite um número para ver outras informações ou "menu" para voltar ao menu principal.`;
    return response;
  }
  
  if (lowerOption === "4" || lowerOption.includes("fauna") || lowerOption.includes("flora")) {
    let response = `🦜 **FAUNA E FLORA BRASILEIRAS** 🌿\n\nCuriosidades sobre nossa biodiversidade:\n\n`;
    
    environmentalFacts.forEach(fact => {
      response += `${fact.category === "Fauna" ? "🦁" : "🌴"} **${fact.title}** (${fact.category}):\n${fact.fact}\n\n`;
    });
    
    response += `O Brasil abriga cerca de 20% de toda a biodiversidade do planeta, com mais de 116.000 espécies de animais e 46.000 espécies de plantas catalogadas.\n\nDigite um número para ver outras informações ou "menu" para voltar ao menu principal.`;
    return response;
  }
  
  if (lowerOption === "5" || lowerOption.includes("conservação") || lowerOption.includes("conservacao")) {
    const data = conservationData;
    let response = `🌳 **ÁREAS DE CONSERVAÇÃO** 🌳\n\nDados atualizados em ${data.lastUpdated}:\n\n`;
    
    data.types.forEach(type => {
      response += `🏞️ **${type.name}**\nÁrea total: ${type.area}\nPercentual do território: ${type.percentage}\n\n${type.description}\n\n`;
    });
    
    response += `**Desafios atuais**\n${data.challenges}\n\nFonte: ${data.source}\n\nDigite um número para ver outras informações ou "menu" para voltar ao menu principal.`;
    return response;
  }
  
  if (lowerOption === "6" || lowerOption.includes("link") || lowerOption.includes("recurso")) {
    let response = `🔗 **RECURSOS E LINKS ÚTEIS** 🔗\n\nFontes confiáveis de informações ambientais:\n\n`;
    
    environmentalLinks.forEach(link => {
      response += `📌 **${link.title}**\n${link.description}\nURL: ${link.url}\n\n`;
    });
    
    response += `Esses sites oferecem dados oficiais e confiáveis sobre temas ambientais no Brasil.\n\nDigite um número para ver outras informações ou "menu" para voltar ao menu principal.`;
    return response;
  }
  
  if (lowerOption === "ajuda" || lowerOption === "help" || lowerOption.includes("ajuda")) {
    return `❓ **COMO USAR O ECOBOT** ❓\n\nDigite o número da opção desejada ou escreva sua pergunta.\n\nExemplos:\n- Digite "1" para dados sobre qualidade do ar\n- Digite "fauna" para informações sobre biodiversidade\n- Digite "menu" para ver todas as opções\n\nTambém respondo perguntas diretas sobre temas ambientais. Experimente!`;
  }
  
  if (lowerOption === "menu" || lowerOption.includes("menu")) {
    return generateWelcomeMessage();
  }
  
  // Default response if no specific option is matched
  return `Não encontrei informações específicas sobre "${option}". Tente uma das opções do menu principal ou uma pergunta mais específica sobre meio ambiente.`;
};

// Generate welcome message with menu options
export const generateWelcomeMessage = (): string => {
  let welcomeMessage = `👋 **Olá! Eu sou o EcoBot, seu assistente virtual para dados ambientais.**\n\nPosso fornecer informações atualizadas sobre diversos temas ambientais. Escolha uma das opções abaixo digitando o número correspondente:\n\n`;
  
  chatbotMenuOptions.forEach(option => {
    welcomeMessage += `**${option.key}** - ${option.title}: ${option.description}\n\n`;
  });
  
  welcomeMessage += `Ou simplesmente escreva sua pergunta sobre dados ambientais que tentarei responder da melhor forma possível.`;
  
  return welcomeMessage;
};

