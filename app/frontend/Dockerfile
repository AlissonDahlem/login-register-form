FROM node:16.14-alpine
WORKDIR /app-frontend
COPY . .
RUN npm install
CMD npm start --host 0.0.0.0 --port 3000 --disableHostCheck true