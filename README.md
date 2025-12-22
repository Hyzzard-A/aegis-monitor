Plataforma de Monitoramento de Alarmes (SaaS)

📌 Visão Geral

Este projeto é uma plataforma SaaS de monitoramento de centrais de alarme, desenvolvida com foco em baixo custo, alta escalabilidade e manutenção simples. Inicialmente, o sistema é compatível com centrais JFL via protocolo Contact ID, com arquitetura preparada para expansão futura (ex: Intelbras, outras marcas e protocolos).

O software permite que empresas de monitoramento utilizem a plataforma de forma multi-tenant, recebendo, processando e exibindo eventos em tempo real, com dashboard moderno e responsivo.


---

🚀 Principais Funcionalidades

📡 Recebimento de eventos Contact ID via TCP/IP

🧠 Processamento e classificação de eventos no backend

⚡ Atualizações em tempo real no dashboard

🔔 Alerta sonoro para novos eventos

🏢 Suporte a múltiplas empresas (multi-tenancy)

🔐 Autenticação e controle de acesso por empresa

🗂️ Separação de eventos por conta, classe e porta

📊 Dashboard moderno (inspirado em softwares como Sigma)

🧩 Arquitetura preparada para novas marcas de centrais

🧪 Ambiente de testes com SQLite

☁️ Pronto para migração para MongoDB



---

🧱 Arquitetura Geral

[ Central de Alarme ]
          ↓
[ Servidor de Ingestão TCP ]
          ↓
[ Parser Contact ID ]
          ↓
[ Processador de Eventos ]
          ↓
[ Banco de Dados ]
          ↓
[ Realtime / WebSocket ]
          ↓
[ Frontend Dashboard ]

📍 Separação por Marca

Cada marca de central possui:

Porta TCP dedicada

Parser específico

Validação de protocolo



Exemplo:

Porta 5000 → JFL

Porta 5001 → Intelbras (futuro)



---

🛠️ Tecnologias Utilizadas

Backend

Node.js

TCP Server (net)

SQLite (desenvolvimento)

MongoDB (produção – planejado)

WebSocket / Realtime

Arquitetura modular e escalável


Frontend

Framework moderno (React / Next.js)

Interface web responsiva

Paleta de cores: Preto + Dourado

Dashboard em tempo real

Áudio para novos eventos


Infraestrutura

VPS Linux

Frontend hospedado em plataforma estática (ex: Vercel)

Backend auto-hospedado



---

🧪 Ambiente de Desenvolvimento

Pré-requisitos

Node.js >= 18

NPM ou Yarn

Git


Instalação

git clone https://github.com/seu-repositorio.git
cd projeto-monitoramento
npm install

Executar

npm run dev


---

🧩 Estrutura do Projeto

/ingest
  ├── server.js
  ├── ports/
  │     ├── jfl.js
  │     └── intelbras.js
  ├── parsers/
  │     └── contactid.jfl.js
  └── validators/

/backend
  ├── events
  ├── tenants
  ├── auth
  └── database

/frontend
  ├── dashboard
  ├── login
  └── realtime


---

🔐 Multi-Tenancy

Cada empresa possui:

Identificador único

Usuários próprios

Eventos isolados

Configurações individuais


Todas as consultas são filtradas por tenant_id



---

📈 Roadmap

[ ] Ingestão TCP Contact ID (JFL)

[ ] Parser completo conforme protocolo

[ ] Dashboard em tempo real

[ ] Suporte a Intelbras

[ ] Sistema de planos e assinaturas

[ ] Logs avançados e auditoria

[ ] SLA e alertas inteligentes

[ ] Aplicativo mobile



---

⚖️ Aspectos Legais

O software inclui (ou deverá incluir):

Termos de Uso

Política de Privacidade

LGPD-ready

Limitação de responsabilidade



---

📄 Licença

Este projeto é de uso privado/comercial. A redistribuição ou uso sem autorização é proibida.


---

🤝 Contribuição

Contribuições são bem-vindas mediante alinhamento prévio. Abra uma issue ou entre em contato.


---

📞 Contato

Projeto desenvolvido por Luiz Gustavo.

Para dúvidas, sugestões ou parcerias, entre em contato.
