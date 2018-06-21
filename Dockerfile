FROM node:carbon
RUN mkdir -p /user/src/app

# Create app directory
WORKDIR /user/src/app

copy package.json ./

RUN npm install

# bundle app source
COPY . .

# Run tests
RUN npm test

EXPOSE 3000

cmd ["npm", "run", "production"]
