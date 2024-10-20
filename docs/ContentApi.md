# BrainCommerceShopifyIngestorApi.ContentApi

All URIs are relative to */shopify*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createContentByTitle**](ContentApi.md#createContentByTitle) | **POST** /v1/content/{title} | Create Content By Title
[**createContentCollection**](ContentApi.md#createContentCollection) | **POST** /v1/content/collection | Create Content Collection
[**deleteContentByInternalId**](ContentApi.md#deleteContentByInternalId) | **DELETE** /v1/content/by-internal-id/{internal_id} | Delete Content By Internal Id
[**deleteContentByTitle**](ContentApi.md#deleteContentByTitle) | **DELETE** /v1/content/{title} | Delete Content By Title
[**deleteContentCollection**](ContentApi.md#deleteContentCollection) | **DELETE** /v1/content/collection | Delete Content Collection
[**getAllContents**](ContentApi.md#getAllContents) | **GET** /v1/content | Get All Contents
[**getContentByTitle**](ContentApi.md#getContentByTitle) | **GET** /v1/content/{title} | Gest Content By Title
[**getContentCollectionExists**](ContentApi.md#getContentCollectionExists) | **GET** /v1/content/collection-exists | Check If Content Collection Exists.
[**importMultipleContents**](ContentApi.md#importMultipleContents) | **POST** /v1/content | Import Multiple Contents
[**resetContentCollection**](ContentApi.md#resetContentCollection) | **DELETE** /v1/content/reset-collection | Deletes All Content From Collection
[**updateContentByTitle**](ContentApi.md#updateContentByTitle) | **PUT** /v1/content/{title} | Update Content By Title



## createContentByTitle

> Content createContentByTitle(title, content)

Create Content By Title

Create content by title

### Example

```javascript
import BrainCommerceShopifyIngestorApi from 'brain_commerce_shopify_ingestor_api';
let defaultClient = BrainCommerceShopifyIngestorApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new BrainCommerceShopifyIngestorApi.ContentApi();
let title = "title_example"; // String | 
let content = new BrainCommerceShopifyIngestorApi.Content(); // Content | 
apiInstance.createContentByTitle(title, content).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **title** | **String**|  | 
 **content** | [**Content**](Content.md)|  | 

### Return type

[**Content**](Content.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createContentCollection

> Object createContentCollection(opts)

Create Content Collection

Creates content collection/schema in Weaviate database

### Example

```javascript
import BrainCommerceShopifyIngestorApi from 'brain_commerce_shopify_ingestor_api';
let defaultClient = BrainCommerceShopifyIngestorApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new BrainCommerceShopifyIngestorApi.ContentApi();
let opts = {
  'delete_existing_collection': false // Boolean | 
};
apiInstance.createContentCollection(opts).then((data) => {
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


## deleteContentByInternalId

> Boolean deleteContentByInternalId(internal_id)

Delete Content By Internal Id

Delete content by internal_id

### Example

```javascript
import BrainCommerceShopifyIngestorApi from 'brain_commerce_shopify_ingestor_api';
let defaultClient = BrainCommerceShopifyIngestorApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new BrainCommerceShopifyIngestorApi.ContentApi();
let internal_id = 56; // Number | 
apiInstance.deleteContentByInternalId(internal_id).then((data) => {
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


## deleteContentByTitle

> Boolean deleteContentByTitle(title)

Delete Content By Title

Delete content by title

### Example

```javascript
import BrainCommerceShopifyIngestorApi from 'brain_commerce_shopify_ingestor_api';
let defaultClient = BrainCommerceShopifyIngestorApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new BrainCommerceShopifyIngestorApi.ContentApi();
let title = "title_example"; // String | 
apiInstance.deleteContentByTitle(title).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **title** | **String**|  | 

### Return type

**Boolean**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteContentCollection

> Boolean deleteContentCollection()

Delete Content Collection

Delete content collection

### Example

```javascript
import BrainCommerceShopifyIngestorApi from 'brain_commerce_shopify_ingestor_api';
let defaultClient = BrainCommerceShopifyIngestorApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new BrainCommerceShopifyIngestorApi.ContentApi();
apiInstance.deleteContentCollection().then((data) => {
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


## getAllContents

> [Content] getAllContents()

Get All Contents

Returns All contents. If collection has a large number of contentss, response may take long time

### Example

```javascript
import BrainCommerceShopifyIngestorApi from 'brain_commerce_shopify_ingestor_api';
let defaultClient = BrainCommerceShopifyIngestorApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new BrainCommerceShopifyIngestorApi.ContentApi();
apiInstance.getAllContents().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Content]**](Content.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getContentByTitle

> Content getContentByTitle(title)

Gest Content By Title

Get content by title

### Example

```javascript
import BrainCommerceShopifyIngestorApi from 'brain_commerce_shopify_ingestor_api';
let defaultClient = BrainCommerceShopifyIngestorApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new BrainCommerceShopifyIngestorApi.ContentApi();
let title = "title_example"; // String | 
apiInstance.getContentByTitle(title).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **title** | **String**|  | 

### Return type

[**Content**](Content.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getContentCollectionExists

> Object getContentCollectionExists()

Check If Content Collection Exists.

Returns true if content collection exists else return false

### Example

```javascript
import BrainCommerceShopifyIngestorApi from 'brain_commerce_shopify_ingestor_api';
let defaultClient = BrainCommerceShopifyIngestorApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new BrainCommerceShopifyIngestorApi.ContentApi();
apiInstance.getContentCollectionExists().then((data) => {
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


## importMultipleContents

> Object importMultipleContents(content)

Import Multiple Contents

Import multiple Contents. If a content same title already exist, it is updated. Otherwise new content is created

### Example

```javascript
import BrainCommerceShopifyIngestorApi from 'brain_commerce_shopify_ingestor_api';
let defaultClient = BrainCommerceShopifyIngestorApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new BrainCommerceShopifyIngestorApi.ContentApi();
let content = [new BrainCommerceShopifyIngestorApi.Content()]; // [Content] | 
apiInstance.importMultipleContents(content).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content** | [**[Content]**](Content.md)|  | 

### Return type

**Object**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## resetContentCollection

> Object resetContentCollection(opts)

Deletes All Content From Collection

Deletes all content from collection.

### Example

```javascript
import BrainCommerceShopifyIngestorApi from 'brain_commerce_shopify_ingestor_api';
let defaultClient = BrainCommerceShopifyIngestorApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new BrainCommerceShopifyIngestorApi.ContentApi();
let opts = {
  'dry_run': true // Boolean | 
};
apiInstance.resetContentCollection(opts).then((data) => {
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


## updateContentByTitle

> Content updateContentByTitle(title, content)

Update Content By Title

Update content By title

### Example

```javascript
import BrainCommerceShopifyIngestorApi from 'brain_commerce_shopify_ingestor_api';
let defaultClient = BrainCommerceShopifyIngestorApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new BrainCommerceShopifyIngestorApi.ContentApi();
let title = "title_example"; // String | 
let content = new BrainCommerceShopifyIngestorApi.Content(); // Content | 
apiInstance.updateContentByTitle(title, content).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **title** | **String**|  | 
 **content** | [**Content**](Content.md)|  | 

### Return type

[**Content**](Content.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

