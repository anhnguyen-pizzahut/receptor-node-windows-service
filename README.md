# br-core
Core library for Converting data provided by NCR into GMS expected format

 - This will include functions for getting data from [ncr-client](https://github.com/pizzahutuk/ncr-client).
 - Tranforming the data into GMS expected format
 - Type information for **NCR** is available in [ncr-client](https://github.com/pizzahutuk/ncr-client)
 - Type information for **GMS** is available in [gms-client](https://github.com/pizzahutuk/gms-client)


# Set Up

1. Clone this repo
2. CD into the directory
3. run `npm i`

# How to use

All the resource can be accessed from `market`

A new resource can be added in src folder and referenced in `market/index.ts`

```
import {Market} from '@pizza-hut/br-core'

const market = Market()
const getOutletById = market.outlets.getById({params})

```

