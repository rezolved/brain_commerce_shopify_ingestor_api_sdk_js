# BrainCommerceShopifyIngestorApi.ProductApi

All URIs are relative to */shopify*

Method | HTTP request | Description
------------- | ------------- | -------------
[**collectionExists**](ProductApi.md#collectionExists) | **GET** /v1/product/collection-exists | Check If Product Collection Exists.
[**createCollection**](ProductApi.md#createCollection) | **POST** /v1/product/collection | Create Product Collection
[**createProductBySku**](ProductApi.md#createProductBySku) | **POST** /v1/product/{sku} | Create Product By Sku
[**deleteCollection**](ProductApi.md#deleteCollection) | **DELETE** /v1/product/collection | Delete Product Collection
[**deleteProductByInternalId**](ProductApi.md#deleteProductByInternalId) | **DELETE** /v1/product/by-internal-id/{internal_id} | Delete Product By Internal Id
[**deleteProductBySku**](ProductApi.md#deleteProductBySku) | **DELETE** /v1/product/{sku} | Delete Product By Sku
[**getAllProducts**](ProductApi.md#getAllProducts) | **GET** /v1/product | Get All Products
[**getProductBySku**](ProductApi.md#getProductBySku) | **GET** /v1/product/{sku} | Gest Product By Sku
[**importMultipleProducts**](ProductApi.md#importMultipleProducts) | **POST** /v1/product | Import Multiple Products
[**resetProductCollection**](ProductApi.md#resetProductCollection) | **DELETE** /v1/product/reset-collection | Deletes All Products From Collection
[**updateProductBySku**](ProductApi.md#updateProductBySku) | **PUT** /v1/product/{sku} | Update Product By Sku



## collectionExists

> Object collectionExists()

Check If Product Collection Exists.

Returns true if product collection exists else return false

### Example

```javascript
import BrainCommerceShopifyIngestorApi from 'brain_commerce_shopify_ingestor_api';
let defaultClient = BrainCommerceShopifyIngestorApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new BrainCommerceShopifyIngestorApi.ProductApi();
apiInstance.collectionExists().then((data) => {
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


## createCollection

> Object createCollection(opts)

Create Product Collection

Creates product collection/schema in Weaviate database

### Example

```javascript
import BrainCommerceShopifyIngestorApi from 'brain_commerce_shopify_ingestor_api';
let defaultClient = BrainCommerceShopifyIngestorApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new BrainCommerceShopifyIngestorApi.ProductApi();
let opts = {
  'delete_existing_collection': false // Boolean | 
};
apiInstance.createCollection(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **delete_existing_collection** | **Boolean**|  | [optional] [default to false]

### Return type

**Object**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## createProductBySku

> Product createProductBySku(sku, product)

Create Product By Sku

Create Product by SKU

### Example

```javascript
import BrainCommerceShopifyIngestorApi from 'brain_commerce_shopify_ingestor_api';
let defaultClient = BrainCommerceShopifyIngestorApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new BrainCommerceShopifyIngestorApi.ProductApi();
let sku = "sku_example"; // String | 
let product = new BrainCommerceShopifyIngestorApi.Product(); // Product | 
apiInstance.createProductBySku(sku, product).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sku** | **String**|  | 
 **product** | [**Product**](Product.md)|  | 

### Return type

[**Product**](Product.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteCollection

> Boolean deleteCollection()

Delete Product Collection

Delete product collection

### Example

```javascript
import BrainCommerceShopifyIngestorApi from 'brain_commerce_shopify_ingestor_api';
let defaultClient = BrainCommerceShopifyIngestorApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new BrainCommerceShopifyIngestorApi.ProductApi();
apiInstance.deleteCollection().then((data) => {
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


## deleteProductByInternalId

> Boolean deleteProductByInternalId(internal_id)

Delete Product By Internal Id

Delete product by internal_id

### Example

```javascript
import BrainCommerceShopifyIngestorApi from 'brain_commerce_shopify_ingestor_api';
let defaultClient = BrainCommerceShopifyIngestorApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new BrainCommerceShopifyIngestorApi.ProductApi();
let internal_id = 56; // Number | 
apiInstance.deleteProductByInternalId(internal_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **internal_id** | **Number**|  | 

### Return type

**Boolean**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteProductBySku

> Boolean deleteProductBySku(sku)

Delete Product By Sku

Delete product by SKU

### Example

```javascript
import BrainCommerceShopifyIngestorApi from 'brain_commerce_shopify_ingestor_api';
let defaultClient = BrainCommerceShopifyIngestorApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new BrainCommerceShopifyIngestorApi.ProductApi();
let sku = "sku_example"; // String | 
apiInstance.deleteProductBySku(sku).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sku** | **String**|  | 

### Return type

**Boolean**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllProducts

> [Product] getAllProducts()

Get All Products

Returns All Products. If collection has a large number of products, response may take long time

### Example

```javascript
import BrainCommerceShopifyIngestorApi from 'brain_commerce_shopify_ingestor_api';
let defaultClient = BrainCommerceShopifyIngestorApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new BrainCommerceShopifyIngestorApi.ProductApi();
apiInstance.getAllProducts().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Product]**](Product.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProductBySku

> Product getProductBySku(sku)

Gest Product By Sku

Get Product by SKU

### Example

```javascript
import BrainCommerceShopifyIngestorApi from 'brain_commerce_shopify_ingestor_api';
let defaultClient = BrainCommerceShopifyIngestorApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new BrainCommerceShopifyIngestorApi.ProductApi();
let sku = "sku_example"; // String | 
apiInstance.getProductBySku(sku).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sku** | **String**|  | 

### Return type

[**Product**](Product.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## importMultipleProducts

> Object importMultipleProducts(product)

Import Multiple Products

Import multiple products. If a product already exist, it is update. Otherwise new product is created

### Example

```javascript
import BrainCommerceShopifyIngestorApi from 'brain_commerce_shopify_ingestor_api';
let defaultClient = BrainCommerceShopifyIngestorApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new BrainCommerceShopifyIngestorApi.ProductApi();
let product = [new BrainCommerceShopifyIngestorApi.Product()]; // [Product] | 
apiInstance.importMultipleProducts(product).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product** | [**[Product]**](Product.md)|  | 

### Return type

**Object**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## resetProductCollection

> Object resetProductCollection(opts)

Deletes All Products From Collection

Deletes all products from the Weaviate product.

### Example

```javascript
import BrainCommerceShopifyIngestorApi from 'brain_commerce_shopify_ingestor_api';
let defaultClient = BrainCommerceShopifyIngestorApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new BrainCommerceShopifyIngestorApi.ProductApi();
let opts = {
  'dry_run': true // Boolean | 
};
apiInstance.resetProductCollection(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dry_run** | **Boolean**|  | [optional] [default to true]

### Return type

**Object**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateProductBySku

> Product updateProductBySku(sku, product)

Update Product By Sku

Update Product By SKU

### Example

```javascript
import BrainCommerceShopifyIngestorApi from 'brain_commerce_shopify_ingestor_api';
let defaultClient = BrainCommerceShopifyIngestorApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new BrainCommerceShopifyIngestorApi.ProductApi();
let sku = "sku_example"; // String | 
let product = new BrainCommerceShopifyIngestorApi.Product(); // Product | 
apiInstance.updateProductBySku(sku, product).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sku** | **String**|  | 
 **product** | [**Product**](Product.md)|  | 

### Return type

[**Product**](Product.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

