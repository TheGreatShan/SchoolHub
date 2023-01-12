FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["SchoolHub.API/SchoolHub.API.csproj", "SchoolHub.API/"]
RUN dotnet restore "SchoolHub.API/SchoolHub.API.csproj"
COPY . .
WORKDIR "/src/SchoolHub.API"
RUN dotnet build "SchoolHub.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "SchoolHub.API.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "SchoolHub.API.dll"]
