
FROM node:16.13-alpine
WORKDIR /usr/src/app/sever
COPY ["package.json", "package-lock.json", "./"]
RUN npm install 
COPY . .
EXPOSE 3001
CMD ["node", "server.js"]