# Use a imagem base do Node.js
FROM node:latest

# Defina o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copie os arquivos de configuração do pacote e instale as dependências
COPY package*.json ./
RUN npm install

# Copie todo o restante dos arquivos do frontend para o diretório de trabalho
COPY . .

# Exponha a porta 3001 para fora do container
EXPOSE 3001

# Comando padrão para iniciar o servidor de aplicação (neste caso, o frontend)
CMD [ "npm", "start" ]
