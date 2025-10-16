FROM node:20-slim
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install --production
COPY src ./src
COPY public ./public
EXPOSE 3000
CMD ["npm","start"]