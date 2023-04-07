FROM node:latest
WORKDIR /usr/src/app
COPY package.json .
#RUN npm config set unsafe-perm true
RUN npm install 
#--unsafe-perm=true -g now
EXPOSE 3000
CMD [ "npm", "start" ] 
COPY . .

