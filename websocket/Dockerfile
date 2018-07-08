FROM node:alpine
COPY . /work/app
RUN npm install -g -s --no-progress yarn && \
    cd /work/app && \
    # yarn config set registry 'https://registry.npm.taobao.org' && \
    yarn install && \
    yarn cache clean

CMD ["node","/work/app/index.js"]