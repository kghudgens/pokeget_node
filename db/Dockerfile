FROM redis:7.2.3
WORKDIR /db

RUN brew install redis

COPY . /db/


EXPOSE 9443
CMD ["redis-server"]