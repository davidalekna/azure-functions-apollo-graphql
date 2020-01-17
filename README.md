[Click to see deployed version](https://apollographql.azurewebsites.net/api/graphql?code=R62xgLLzPcux8HUHftxEjTG97jjaP8WUlom4K2p0nTZJU1zbIgOKoA==)

## Steps to host the function

### 1. create storage for function

> az storage account create --name azurenodejs --location uksouth --resource-group azure-nodejs --sku Standard_LRS

### 2. create resource group

> az functionapp create --resource-group azure-nodejs --name apollographql --consumption-plan-location uksouth --runtime node --storage-account azurenodejs

### 3. deploy a new version run

> npm run deploy
