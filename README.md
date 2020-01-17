# Serverless Azure Apollo GraphQL API

[Click to see deployed version](https://apollographql.azurewebsites.net/api/graphql?code=R62xgLLzPcux8HUHftxEjTG97jjaP8WUlom4K2p0nTZJU1zbIgOKoA==)

## Steps to host the function

### 1. Setup an Azure account

> [click here to setup](https://azure.microsoft.com/en-us/)

### 2. Install Azure Functions Core Tools CLI version 2.x.

> npm install -g azure-functions-core-tools

### 3. Install the Azure CLI 2.0.x to deploy to Azure. (for Windows)

> Invoke-WebRequest -Uri https://aka.ms/installazurecliwindows -OutFile .\AzureCLI.msi; Start-Process msiexec.exe -Wait -ArgumentList '/I AzureCLI.msi /quiet'

### 4. create storage for function

> az storage account create --name azurenodejs --location uksouth --resource-group azure-nodejs --sku Standard_LRS

### 5. create resource group

> az functionapp create --resource-group azure-nodejs --name apollographql --consumption-plan-location uksouth --runtime node --storage-account azurenodejs

### 6. deploy a new version

> npm run deploy
