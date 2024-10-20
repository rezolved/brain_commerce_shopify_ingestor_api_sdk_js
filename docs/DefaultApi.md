# BrainCommerceShopifyIngestorApi.DefaultApi

All URIs are relative to */shopify*

Method | HTTP request | Description
------------- | ------------- | -------------
[**healthCheck**](DefaultApi.md#healthCheck) | **GET** /v1/health | Health Check



## healthCheck

> Object healthCheck()

Health Check

Checks the health of a project.  It returns 200 if the project is healthy.

### Example

```javascript
import BrainCommerceShopifyIngestorApi from 'brain_commerce_shopify_ingestor_api';
let defaultClient = BrainCommerceShopifyIngestorApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new BrainCommerceShopifyIngestorApi.DefaultApi();
apiInstance.healthCheck().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

