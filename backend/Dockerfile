FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

# Adiciona o netcat
RUN apt-get update && apt-get install -y netcat

COPY wait-for-it.sh .

RUN chmod +x wait-for-it.sh

CMD ["./wait-for-it.sh", "mysql", "--", "npm", "start"]
