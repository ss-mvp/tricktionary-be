FROM node:12.7.0-alpine

# Create app directory
WORKDIR /app

# COPY build .
COPY release/current.zip .
RUN unzip current.zip
# RUN npm install

# If you are building your code for production
RUN npm ci --only=production
RUN apk add fortune
# expose the api
EXPOSE 5000

CMD ["node", "src/index.js"]
