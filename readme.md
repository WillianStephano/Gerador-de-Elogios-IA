# 🚀 Gerador de Elogios com IA Gemini

Um sistema inteligente que utiliza a API do Google Gemini para criar elogios para desenvolvedores que estão tristes com seus codigos.

![Interface Preview](https://via.placeholder.com/800x400?text=Preview+do+Gerador+de+Elogios)

## ✨ Funcionalidades

- Geração automática de elogios;
- Integração com frontend web simples e intuitivo

## 🛠️ Tecnologias

- **Backend**: Node.js + Express
- **IA Generativa**: Google Gemini API
- **Frontend**: HTML5, CSS3, JS

## 📦 Pré-requisitos

- Node.js 18+
- Conta no [Google AI Studio](https://aistudio.google.com/) (para API Key)
- Git

## 🚀 Como Executar Localmente

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/gerador-elogios-ia.git
cd gerador-elogios-ia

# 2. Instale as dependências do backend
cd server
npm install

# 3. Configure sua API Key
cp .env.example .env
# Edite o .env com sua GEMINI_KEY

# 4. Inicie o servidor
node index.js

# 5. Acesse o frontend
Abra o arquivo client/index.html no navegador
```