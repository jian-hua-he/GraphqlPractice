# Build form ubuntu 17.10
FROM ubuntu:17.10

# Use bin/bash instead bin/sh
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# Install basic tools
RUN apt-get update && apt-get upgrade -y

RUN apt-get install -y \
    make \
    vim \
    locate \
    curl \
    bash \
    git

# Fetch Node and install it
RUN curl -sL https://deb.nodesource.com/setup_9.x | bash -
RUN apt-get -y install nodejs

# Install yarn
RUN npm install -g yarn@1.3.2

# Install webpack
RUN yarn global add webpack@3.8.1
