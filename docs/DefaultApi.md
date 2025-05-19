# MerchantStoreApi.DefaultApi

All URIs are relative to */merchant*

Method | HTTP request | Description
------------- | ------------- | -------------
[**healthCheckV1HealthGet**](DefaultApi.md#healthCheckV1HealthGet) | **GET** /v1/health | Health Check
[**publicProbeV1PublicProbeGet**](DefaultApi.md#publicProbeV1PublicProbeGet) | **GET** /v1/public-probe | Public Probe



## healthCheckV1HealthGet

> Object healthCheckV1HealthGet()

Health Check

Checks the health of a project.  It returns 200 if the project is healthy.

### Example

```javascript
import MerchantStoreApi from 'merchant_store_api';
let defaultClient = MerchantStoreApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new MerchantStoreApi.DefaultApi();
apiInstance.healthCheckV1HealthGet().then((data) => {
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


## publicProbeV1PublicProbeGet

> Object publicProbeV1PublicProbeGet()

Public Probe

Used for public health probes.

### Example

```javascript
import MerchantStoreApi from 'merchant_store_api';
let defaultClient = MerchantStoreApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new MerchantStoreApi.DefaultApi();
apiInstance.publicProbeV1PublicProbeGet().then((data) => {
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

