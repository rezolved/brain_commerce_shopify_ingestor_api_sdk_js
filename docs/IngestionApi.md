# BrainCommerceShopifyIngestorApi.IngestionApi

All URIs are relative to */shopify*

Method | HTTP request | Description
------------- | ------------- | -------------
[**configureRarbbitmq**](IngestionApi.md#configureRarbbitmq) | **POST** /v1/configure-rabbitmq | Configures Rabbitmq With Exchange, Queues And Bindings.
[**getFullProductIngestionQueue**](IngestionApi.md#getFullProductIngestionQueue) | **GET** /v1/product-ingestion-queue | Get Full Product Ingestion Status.
[**queueFullProductIngestion**](IngestionApi.md#queueFullProductIngestion) | **POST** /v1/product-ingestion-queue | Queue Full Product Ingestion.
[**terminateFullProductIngestion**](IngestionApi.md#terminateFullProductIngestion) | **DELETE** /v1/product-ingestion-queue | Terminates Currently Running Full Product Ingestion.



## configureRarbbitmq

> Boolean configureRarbbitmq()

Configures Rabbitmq With Exchange, Queues And Bindings.

Configures RabbitMQ with exchange, queues and bindings.

### Example

```javascript
import BrainCommerceShopifyIngestorApi from 'brain_commerce_shopify_ingestor_api';
let defaultClient = BrainCommerceShopifyIngestorApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new BrainCommerceShopifyIngestorApi.IngestionApi();
apiInstance.configureRarbbitmq().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

**Boolean**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFullProductIngestionQueue

> ResponseGetFullProductIngestionQueue getFullProductIngestionQueue()

Get Full Product Ingestion Status.

Return status for full ingestion ingestion queue

### Example

```javascript
import BrainCommerceShopifyIngestorApi from 'brain_commerce_shopify_ingestor_api';
let defaultClient = BrainCommerceShopifyIngestorApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new BrainCommerceShopifyIngestorApi.IngestionApi();
apiInstance.getFullProductIngestionQueue().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ResponseGetFullProductIngestionQueue**](ResponseGetFullProductIngestionQueue.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## queueFullProductIngestion

> Boolean queueFullProductIngestion()

Queue Full Product Ingestion.

Published message to RabbitMQ to start full ingestion

### Example

```javascript
import BrainCommerceShopifyIngestorApi from 'brain_commerce_shopify_ingestor_api';
let defaultClient = BrainCommerceShopifyIngestorApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new BrainCommerceShopifyIngestorApi.IngestionApi();
apiInstance.queueFullProductIngestion().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

**Boolean**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## terminateFullProductIngestion

> Object terminateFullProductIngestion()

Terminates Currently Running Full Product Ingestion.

Terminates currently running full ingestion ingestion.

### Example

```javascript
import BrainCommerceShopifyIngestorApi from 'brain_commerce_shopify_ingestor_api';
let defaultClient = BrainCommerceShopifyIngestorApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new BrainCommerceShopifyIngestorApi.IngestionApi();
apiInstance.terminateFullProductIngestion().then((data) => {
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

