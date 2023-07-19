targetScope='subscription'

param location string = 'australiaeast'

resource mernRg 'Microsoft.Resources/resourceGroups@2022-09-01' = {
  name: 'mern-auth-rg'
  location: location
}
