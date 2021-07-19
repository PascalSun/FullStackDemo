# syntax=docker/dockerfile:1
FROM microsoft/dotnet:2.1-sdk
COPY ./asp /app
WORKDIR /app
RUN ["dotnet", "restore"]
RUN ["dotnet", "build"]
COPY ./dev/asp/entrypoint.sh /home/entrypoint.sh
CMD /bin/bash /home/entrypoint.sh