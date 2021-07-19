FROM ubuntu:20.04
ENV PYTHONUNBUFFERED 1
ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get  -y install gnupg2 wget git python3-pip
RUN wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | apt-key add -
# RUN echo "deb http://apt.postgresql.org/pub/repos/apt/ jessie-pgdg main" |  tee /etc/apt/sources.list.d/pgdg.list
RUN apt-get update && apt-get install -y postgresql-12 postgresql-client-12
RUN apt-get install -y postgis postgresql-12-postgis-3 postgresql-12-postgis-3-scripts

RUN git clone https://github.com/vishnubob/wait-for-it.git wait-for-it
RUN pip3 install django
ADD dev/db /home/dev/db
ADD dev/django /home/dev/django
ADD dev/worker /home/dev/worker
RUN mkdir /code
ADD django /code
WORKDIR /code
RUN cd /code && pip3 install -r requirements/requirements.txt && pip3 install -r requirements/requirements.dev.txt