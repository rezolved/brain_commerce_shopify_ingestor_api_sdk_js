# BrainCommerceShopifyIngestorApi.FaqApi

All URIs are relative to */shopify*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFaqByQuestion**](FaqApi.md#createFaqByQuestion) | **POST** /v1/faq/{question} | Create Faq By Question
[**createFaqCollection**](FaqApi.md#createFaqCollection) | **POST** /v1/faq/collection | Create Faq Collection
[**deleteFaqByInternalId**](FaqApi.md#deleteFaqByInternalId) | **DELETE** /v1/faq/by-internal-id/{internal_id} | Delete Faq By Internal Id
[**deleteFaqByQuestion**](FaqApi.md#deleteFaqByQuestion) | **DELETE** /v1/faq/{question} | Delete Faq By Question
[**deleteFaqCollection**](FaqApi.md#deleteFaqCollection) | **DELETE** /v1/faq/collection | Delete Faq Collection
[**getAllFaqs**](FaqApi.md#getAllFaqs) | **GET** /v1/faq | Get All Faqs
[**getFaqByQuestion**](FaqApi.md#getFaqByQuestion) | **GET** /v1/faq/{question} | Get Faq By Question
[**getFaqCollectionExists**](FaqApi.md#getFaqCollectionExists) | **GET** /v1/faq/collection-exists | Check If Faq Collection Exists.
[**importMultipleFaqs**](FaqApi.md#importMultipleFaqs) | **POST** /v1/faq | Import Multiple Faqs
[**resetFaqCollection**](FaqApi.md#resetFaqCollection) | **DELETE** /v1/faq/reset-collection | Deletes All Faq From Collection
[**updateFaqByQuestion**](FaqApi.md#updateFaqByQuestion) | **PUT** /v1/faq/{question} | Update Faq By Question



## createFaqByQuestion

> Faq createFaqByQuestion(question, faq)

Create Faq By Question

Create FAQ by question

### Example

```javascript
import BrainCommerceShopifyIngestorApi from 'brain_commerce_shopify_ingestor_api';
let defaultClient = BrainCommerceShopifyIngestorApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new BrainCommerceShopifyIngestorApi.FaqApi();
let question = "question_example"; // String | 
let faq = new BrainCommerceShopifyIngestorApi.Faq(); // Faq | 
apiInstance.createFaqByQuestion(question, faq).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **question** | **String**|  | 
 **faq** | [**Faq**](Faq.md)|  | 

### Return type

[**Faq**](Faq.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createFaqCollection

> Object createFaqCollection(opts)

Create Faq Collection

Creates FAQ collection/schema in Weaviate database

### Example

```javascript
import BrainCommerceShopifyIngestorApi from 'brain_commerce_shopify_ingestor_api';
let defaultClient = BrainCommerceShopifyIngestorApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new BrainCommerceShopifyIngestorApi.FaqApi();
let opts = {
  'delete_existing_collection': false // Boolean | 
};
apiInstance.createFaqCollection(opts).then((data) => {
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


## deleteFaqByInternalId

> Boolean deleteFaqByInternalId(internal_id)

Delete Faq By Internal Id

Delete FAQ by internal_id

### Example

```javascript
import BrainCommerceShopifyIngestorApi from 'brain_commerce_shopify_ingestor_api';
let defaultClient = BrainCommerceShopifyIngestorApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new BrainCommerceShopifyIngestorApi.FaqApi();
let internal_id = 56; // Number | 
apiInstance.deleteFaqByInternalId(internal_id).then((data) => {
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


## deleteFaqByQuestion

> Boolean deleteFaqByQuestion(question)

Delete Faq By Question

Delete FAQ by question

### Example

```javascript
import BrainCommerceShopifyIngestorApi from 'brain_commerce_shopify_ingestor_api';
let defaultClient = BrainCommerceShopifyIngestorApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new BrainCommerceShopifyIngestorApi.FaqApi();
let question = "question_example"; // String | 
apiInstance.deleteFaqByQuestion(question).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **question** | **String**|  | 

### Return type

**Boolean**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteFaqCollection

> Boolean deleteFaqCollection()

Delete Faq Collection

Delete FAQ collection

### Example

```javascript
import BrainCommerceShopifyIngestorApi from 'brain_commerce_shopify_ingestor_api';
let defaultClient = BrainCommerceShopifyIngestorApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new BrainCommerceShopifyIngestorApi.FaqApi();
apiInstance.deleteFaqCollection().then((data) => {
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


## getAllFaqs

> [Faq] getAllFaqs()

Get All Faqs

Returns All FAQs. If collection has a large number of FAQs                 response may take long time

### Example

```javascript
import BrainCommerceShopifyIngestorApi from 'brain_commerce_shopify_ingestor_api';
let defaultClient = BrainCommerceShopifyIngestorApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new BrainCommerceShopifyIngestorApi.FaqApi();
apiInstance.getAllFaqs().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Faq]**](Faq.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFaqByQuestion

> Faq getFaqByQuestion(question)

Get Faq By Question

Get FAQ by question

### Example

```javascript
import BrainCommerceShopifyIngestorApi from 'brain_commerce_shopify_ingestor_api';
let defaultClient = BrainCommerceShopifyIngestorApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new BrainCommerceShopifyIngestorApi.FaqApi();
let question = "question_example"; // String | 
apiInstance.getFaqByQuestion(question).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **question** | **String**|  | 

### Return type

[**Faq**](Faq.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFaqCollectionExists

> Object getFaqCollectionExists()

Check If Faq Collection Exists.

Returns true if FAQ collection exists else return false

### Example

```javascript
import BrainCommerceShopifyIngestorApi from 'brain_commerce_shopify_ingestor_api';
let defaultClient = BrainCommerceShopifyIngestorApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new BrainCommerceShopifyIngestorApi.FaqApi();
apiInstance.getFaqCollectionExists().then((data) => {
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


## importMultipleFaqs

> [Faq] importMultipleFaqs(faq)

Import Multiple Faqs

Import multiple FAQs. If a FAQ same question already exist, it is updated. Otherwise new FAQ is created

### Example

```javascript
import BrainCommerceShopifyIngestorApi from 'brain_commerce_shopify_ingestor_api';
let defaultClient = BrainCommerceShopifyIngestorApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new BrainCommerceShopifyIngestorApi.FaqApi();
let faq = [new BrainCommerceShopifyIngestorApi.Faq()]; // [Faq] | 
apiInstance.importMultipleFaqs(faq).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **faq** | [**[Faq]**](Faq.md)|  | 

### Return type

[**[Faq]**](Faq.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## resetFaqCollection

> Object resetFaqCollection(opts)

Deletes All Faq From Collection

Deletes all FAQ from collection.

### Example

```javascript
import BrainCommerceShopifyIngestorApi from 'brain_commerce_shopify_ingestor_api';
let defaultClient = BrainCommerceShopifyIngestorApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new BrainCommerceShopifyIngestorApi.FaqApi();
let opts = {
  'dry_run': true // Boolean | 
};
apiInstance.resetFaqCollection(opts).then((data) => {
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


## updateFaqByQuestion

> Faq updateFaqByQuestion(question, faq)

Update Faq By Question

Update FAQ By question

### Example

```javascript
import BrainCommerceShopifyIngestorApi from 'brain_commerce_shopify_ingestor_api';
let defaultClient = BrainCommerceShopifyIngestorApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new BrainCommerceShopifyIngestorApi.FaqApi();
let question = "question_example"; // String | 
let faq = new BrainCommerceShopifyIngestorApi.Faq(); // Faq | 
apiInstance.updateFaqByQuestion(question, faq).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **question** | **String**|  | 
 **faq** | [**Faq**](Faq.md)|  | 

### Return type

[**Faq**](Faq.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

