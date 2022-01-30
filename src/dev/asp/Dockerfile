FROM mcr.microsoft.com/dotnet/sdk:6.0-alpine
WORKDIR /app
COPY ./asp/FullStackDemo .
EXPOSE 5001
ENTRYPOINT [ "dotnet", "watch", "run" ]