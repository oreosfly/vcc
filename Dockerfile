# Version: 0.0.1
FROM mongo:latest
MAINTAINER hurrytospring "ddyz1993@gmail.com"
RUN apt-get update
#nginx
RUN apt-get install -y nginx
#git
RUN apt-get install git
#nvm
RUN sudo apt-get install -y build-essential libssl-dev 
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash  
#node 
RUN nvm install 10.13.0
#yarn
RUN npm install yarn -g
#app
RUN git clone https://github.com/vitelabs/vcc
RUN cd vcc && yarn install 
RUN yarn build:server && start:server
RUN yarn build:client
EXPOSE 80 27398