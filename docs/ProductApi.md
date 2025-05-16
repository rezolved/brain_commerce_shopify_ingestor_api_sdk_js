# MerchantStoreApi.ProductApi

All URIs are relative to */merchant*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkIfProductCollectionExistsV1ProductsCollectionExistsGet**](ProductApi.md#checkIfProductCollectionExistsV1ProductsCollectionExistsGet) | **GET** /v1/products/collection-exists | Check If Product Collection Exists.
[**createProductBySKUV1ProductsSkuPost**](ProductApi.md#createProductBySKUV1ProductsSkuPost) | **POST** /v1/products/{sku} | Create Product By Sku
[**createProductCollectionV1ProductsCollectionPost**](ProductApi.md#createProductCollectionV1ProductsCollectionPost) | **POST** /v1/products/collection | Create Product Collection
[**deleteProductByInternalIdV1ProductsByInternalIdInternalIdDelete**](ProductApi.md#deleteProductByInternalIdV1ProductsByInternalIdInternalIdDelete) | **DELETE** /v1/products/by-internal-id/{internal_id} | Delete Product By Internal Id
[**deleteProductBySKUV1ProductsSkuDelete**](ProductApi.md#deleteProductBySKUV1ProductsSkuDelete) | **DELETE** /v1/products/{sku} | Delete Product By Sku
[**deleteProductCollectionV1ProductsCollectionDelete**](ProductApi.md#deleteProductCollectionV1ProductsCollectionDelete) | **DELETE** /v1/products/collection | Delete Product Collection
[**deletesAllProductsFromCollectionV1ProductsResetCollectionDelete**](ProductApi.md#deletesAllProductsFromCollectionV1ProductsResetCollectionDelete) | **DELETE** /v1/products/reset-collection | Deletes All Products From Collection
[**getAllProductsV1ProductsGet**](ProductApi.md#getAllProductsV1ProductsGet) | **GET** /v1/products | Get All Products
[**getProductBySKUV1ProductsSkuGet**](ProductApi.md#getProductBySKUV1ProductsSkuGet) | **GET** /v1/products/{sku} | Get Product By Sku
[**importMultipleProductsV1ProductsPost**](ProductApi.md#importMultipleProductsV1ProductsPost) | **POST** /v1/products | Import Multiple Products
[**updateProductBySKUV1ProductsSkuPut**](ProductApi.md#updateProductBySKUV1ProductsSkuPut) | **PUT** /v1/products/{sku} | Update Product By Sku



## checkIfProductCollectionExistsV1ProductsCollectionExistsGet

> Object checkIfProductCollectionExistsV1ProductsCollectionExistsGet()

Check If Product Collection Exists.

Returns true if product collection exists else return false

### Example

```javascript
import MerchantStoreApi from 'merchant_store_api';
let defaultClient = MerchantStoreApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new MerchantStoreApi.ProductApi();
apiInstance.checkIfProductCollectionExistsV1ProductsCollectionExistsGet().then((data) => {
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


## createProductBySKUV1ProductsSkuPost

> Product createProductBySKUV1ProductsSkuPost(sku, product)

Create Product By Sku

Create Product by SKU

### Example

```javascript
import MerchantStoreApi from 'merchant_store_api';
let defaultClient = MerchantStoreApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new MerchantStoreApi.ProductApi();
let sku = "sku_example"; // String | 
let product = new MerchantStoreApi.Product(); // Product | 
apiInstance.createProductBySKUV1ProductsSkuPost(sku, product).then((data) => {
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


## createProductCollectionV1ProductsCollectionPost

> Object createProductCollectionV1ProductsCollectionPost(opts)

Create Product Collection

Creates product collection/schema in Weaviate database

### Example

```javascript
import MerchantStoreApi from 'merchant_store_api';
let defaultClient = MerchantStoreApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new MerchantStoreApi.ProductApi();
let opts = {
  'delete_existing_collection': false // Boolean | 
};
apiInstance.createProductCollectionV1ProductsCollectionPost(opts).then((data) => {
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


## deleteProductByInternalIdV1ProductsByInternalIdInternalIdDelete

> Boolean deleteProductByInternalIdV1ProductsByInternalIdInternalIdDelete(internal_id)

Delete Product By Internal Id

Delete product by internal_id

### Example

```javascript
import MerchantStoreApi from 'merchant_store_api';
let defaultClient = MerchantStoreApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new MerchantStoreApi.ProductApi();
let internal_id = 56; // Number | 
apiInstance.deleteProductByInternalIdV1ProductsByInternalIdInternalIdDelete(internal_id).then((data) => {
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


## deleteProductBySKUV1ProductsSkuDelete

> Boolean deleteProductBySKUV1ProductsSkuDelete(sku)

Delete Product By Sku

Delete product by SKU

### Example

```javascript
import MerchantStoreApi from 'merchant_store_api';
let defaultClient = MerchantStoreApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new MerchantStoreApi.ProductApi();
let sku = "sku_example"; // String | 
apiInstance.deleteProductBySKUV1ProductsSkuDelete(sku).then((data) => {
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


## deleteProductCollectionV1ProductsCollectionDelete

> Boolean deleteProductCollectionV1ProductsCollectionDelete()

Delete Product Collection

Delete product collection

### Example

```javascript
import MerchantStoreApi from 'merchant_store_api';
let defaultClient = MerchantStoreApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new MerchantStoreApi.ProductApi();
apiInstance.deleteProductCollectionV1ProductsCollectionDelete().then((data) => {
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


## deletesAllProductsFromCollectionV1ProductsResetCollectionDelete

> Object deletesAllProductsFromCollectionV1ProductsResetCollectionDelete(opts)

Deletes All Products From Collection

Deletes all products from the Weaviate product.

### Example

```javascript
import MerchantStoreApi from 'merchant_store_api';
let defaultClient = MerchantStoreApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new MerchantStoreApi.ProductApi();
let opts = {
  'dry_run': true // Boolean | 
};
apiInstance.deletesAllProductsFromCollectionV1ProductsResetCollectionDelete(opts).then((data) => {
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


## getAllProductsV1ProductsGet

> [Product] getAllProductsV1ProductsGet()

Get All Products

Returns All Products. If collection has a large number of products, response may take long time

### Example

```javascript
import MerchantStoreApi from 'merchant_store_api';
let defaultClient = MerchantStoreApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new MerchantStoreApi.ProductApi();
apiInstance.getAllProductsV1ProductsGet().then((data) => {
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


## getProductBySKUV1ProductsSkuGet

> Product getProductBySKUV1ProductsSkuGet(sku)

Get Product By Sku

Get Product by SKU

### Example

```javascript
import MerchantStoreApi from 'merchant_store_api';
let defaultClient = MerchantStoreApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new MerchantStoreApi.ProductApi();
let sku = "sku_example"; // String | 
apiInstance.getProductBySKUV1ProductsSkuGet(sku).then((data) => {
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


## importMultipleProductsV1ProductsPost

> [Object] importMultipleProductsV1ProductsPost(product)

Import Multiple Products

Import multiple products. If a product already exist, it is update. Otherwise new product is created

### Example

```javascript
import MerchantStoreApi from 'merchant_store_api';
let defaultClient = MerchantStoreApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new MerchantStoreApi.ProductApi();
let product = [new MerchantStoreApi.Product()]; // [Product] | 
apiInstance.importMultipleProductsV1ProductsPost(product).then((data) => {
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

**[Object]**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateProductBySKUV1ProductsSkuPut

> Product updateProductBySKUV1ProductsSkuPut(sku, product)

Update Product By Sku

Update Product By SKU

### Example

```javascript
import MerchantStoreApi from 'merchant_store_api';
let defaultClient = MerchantStoreApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new MerchantStoreApi.ProductApi();
let sku = "sku_example"; // String | 
let product = new MerchantStoreApi.Product(); // Product | 
apiInstance.updateProductBySKUV1ProductsSkuPut(sku, product).then((data) => {
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

