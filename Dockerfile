FROM 'nginx'
COPY . /usr/src/app
RUN apt update && apt install npm
RUN service nginx start
RUN npm run build 