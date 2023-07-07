@description('Set the deployment environment')
@allowed([
  'dev'
  'prod'
])
param environmentType string

@description('Region that resources will be deployed to')
@minLength(3)
@maxLength(24)
param location string = 'australiaeast'

@description('Name of the web app')
param appServiceAppName string = 'mernauth00${uniqueString(resourceGroup().id)}'

@description('App Service Plan name')
param appServicePlanName string = 'mernauth-plan'

@description('The runtime stack')
param linuxFxVersion string = 'NODE|18-lts'

var appServicePlanSkuName = (environmentType == 'prod') ? 'P1V2' : 'F1'

resource appServicePlan 'Microsoft.Web/serverFarms@2022-03-01' = {
  name: appServicePlanName
  location: location
  sku: {
    name: appServicePlanSkuName
  }
  kind: 'linux'
  properties:{
    reserved: true
  }
}

resource appServiceApp 'Microsoft.Web/sites@2022-03-01' = {
  name: appServiceAppName
  location: location
  properties: {
    serverFarmId: appServicePlan.id
    httpsOnly: true
    siteConfig: {
      linuxFxVersion: linuxFxVersion
      minTlsVersion: '1.2'
      ftpsState: 'FtpsOnly'
    }
  }
}

resource slot 'Microsoft.Web/sites/slots@2022-09-01' = if(environmentType == 'prod') {
  name: 'preprod'
  location: location
  parent: appServiceApp
  kind: 'app'
  properties: {
    serverFarmId: appServicePlan.id
  }
}
