# Image source
FROM node:12

# Docker working directory
WORKDIR /src

# Copying file into APP directory of docker
COPY ./package.json .

# Then install the NPM module

RUN npm install

# Copy current directory to APP folder
COPY . /src/

EXPOSE 3000
CMD ["npm", "run", "start:dev"]