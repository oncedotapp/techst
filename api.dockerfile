FROM node:12-slim

ENV DISABLE_OPENCOLLECTIVE=true
RUN apt-get update &&\
  apt-get install --no-install-recommends -y curl ca-certificates &&\
  apt-get autoremove -y &&\
  rm -rf /var/lib/apt/lists/* &&\
  npm i -g prisma
WORKDIR /app
ENTRYPOINT [ "/bin/bash" ]

COPY ./start.sh /usr/local/bin/start

CMD ["/usr/local/bin/start"]

