# MerchantStoreApi.FaqApi

All URIs are relative to */merchant*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkIfFAQCollectionExistsV1FaqsCollectionExistsGet**](FaqApi.md#checkIfFAQCollectionExistsV1FaqsCollectionExistsGet) | **GET** /v1/faqs/collection-exists | Check If Faq Collection Exists.
[**createFAQByQuestionV1FaqsQuestionPost**](FaqApi.md#createFAQByQuestionV1FaqsQuestionPost) | **POST** /v1/faqs/{question} | Create Faq By Question
[**createFAQCollectionV1FaqsCollectionPost**](FaqApi.md#createFAQCollectionV1FaqsCollectionPost) | **POST** /v1/faqs/collection | Create Faq Collection
[**deleteFAQByInternalIdV1FaqsByInternalIdInternalIdDelete**](FaqApi.md#deleteFAQByInternalIdV1FaqsByInternalIdInternalIdDelete) | **DELETE** /v1/faqs/by-internal-id/{internal_id} | Delete Faq By Internal Id
[**deleteFAQByQuestionV1FaqsQuestionDelete**](FaqApi.md#deleteFAQByQuestionV1FaqsQuestionDelete) | **DELETE** /v1/faqs/{question} | Delete Faq By Question
[**deleteFAQCollectionV1FaqsCollectionDelete**](FaqApi.md#deleteFAQCollectionV1FaqsCollectionDelete) | **DELETE** /v1/faqs/collection | Delete Faq Collection
[**deletesAllFAQFromCollectionV1FaqsResetCollectionDelete**](FaqApi.md#deletesAllFAQFromCollectionV1FaqsResetCollectionDelete) | **DELETE** /v1/faqs/reset-collection | Deletes All Faq From Collection
[**getAllFAQsV1FaqsGet**](FaqApi.md#getAllFAQsV1FaqsGet) | **GET** /v1/faqs | Get All Faqs
[**getFAQByQuestionV1FaqsQuestionGet**](FaqApi.md#getFAQByQuestionV1FaqsQuestionGet) | **GET** /v1/faqs/{question} | Get Faq By Question
[**importMultipleFAQsV1FaqsPost**](FaqApi.md#importMultipleFAQsV1FaqsPost) | **POST** /v1/faqs | Import Multiple Faqs
[**updateFAQByQuestionV1FaqsQuestionPut**](FaqApi.md#updateFAQByQuestionV1FaqsQuestionPut) | **PUT** /v1/faqs/{question} | Update Faq By Question



## checkIfFAQCollectionExistsV1FaqsCollectionExistsGet

> Object checkIfFAQCollectionExistsV1FaqsCollectionExistsGet()

Check If Faq Collection Exists.

Returns true if FAQ collection exists else return false

### Example

```javascript
import MerchantStoreApi from 'merchant_store_api';
let defaultClient = MerchantStoreApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new MerchantStoreApi.FaqApi();
apiInstance.checkIfFAQCollectionExistsV1FaqsCollectionExistsGet().then((data) => {
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


## createFAQByQuestionV1FaqsQuestionPost

> Faq createFAQByQuestionV1FaqsQuestionPost(question, faq)

Create Faq By Question

Create FAQ by question

### Example

```javascript
import MerchantStoreApi from 'merchant_store_api';
let defaultClient = MerchantStoreApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new MerchantStoreApi.FaqApi();
let question = "question_example"; // String | 
let faq = new MerchantStoreApi.Faq(); // Faq | 
apiInstance.createFAQByQuestionV1FaqsQuestionPost(question, faq).then((data) => {
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


## createFAQCollectionV1FaqsCollectionPost

> Object createFAQCollectionV1FaqsCollectionPost(opts)

Create Faq Collection

Creates FAQ collection/schema in Weaviate database

### Example

```javascript
import MerchantStoreApi from 'merchant_store_api';
let defaultClient = MerchantStoreApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new MerchantStoreApi.FaqApi();
let opts = {
  'delete_existing_collection': false // Boolean | 
};
apiInstance.createFAQCollectionV1FaqsCollectionPost(opts).then((data) => {
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


## deleteFAQByInternalIdV1FaqsByInternalIdInternalIdDelete

> Boolean deleteFAQByInternalIdV1FaqsByInternalIdInternalIdDelete(internal_id)

Delete Faq By Internal Id

Delete FAQ by internal_id

### Example

```javascript
import MerchantStoreApi from 'merchant_store_api';
let defaultClient = MerchantStoreApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new MerchantStoreApi.FaqApi();
let internal_id = 56; // Number | 
apiInstance.deleteFAQByInternalIdV1FaqsByInternalIdInternalIdDelete(internal_id).then((data) => {
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


## deleteFAQByQuestionV1FaqsQuestionDelete

> Boolean deleteFAQByQuestionV1FaqsQuestionDelete(question)

Delete Faq By Question

Delete FAQ by question

### Example

```javascript
import MerchantStoreApi from 'merchant_store_api';
let defaultClient = MerchantStoreApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new MerchantStoreApi.FaqApi();
let question = "question_example"; // String | 
apiInstance.deleteFAQByQuestionV1FaqsQuestionDelete(question).then((data) => {
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


## deleteFAQCollectionV1FaqsCollectionDelete

> Boolean deleteFAQCollectionV1FaqsCollectionDelete()

Delete Faq Collection

Delete FAQ collection

### Example

```javascript
import MerchantStoreApi from 'merchant_store_api';
let defaultClient = MerchantStoreApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new MerchantStoreApi.FaqApi();
apiInstance.deleteFAQCollectionV1FaqsCollectionDelete().then((data) => {
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


## deletesAllFAQFromCollectionV1FaqsResetCollectionDelete

> Object deletesAllFAQFromCollectionV1FaqsResetCollectionDelete(opts)

Deletes All Faq From Collection

Deletes all FAQ from collection.

### Example

```javascript
import MerchantStoreApi from 'merchant_store_api';
let defaultClient = MerchantStoreApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new MerchantStoreApi.FaqApi();
let opts = {
  'dry_run': false // Boolean | 
};
apiInstance.deletesAllFAQFromCollectionV1FaqsResetCollectionDelete(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dry_run** | **Boolean**|  | [optional] [default to false]

### Return type

**Object**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllFAQsV1FaqsGet

> [Faq] getAllFAQsV1FaqsGet()

Get All Faqs

Returns All FAQs. If collection has a large number of FAQs                 response may take long time

### Example

```javascript
import MerchantStoreApi from 'merchant_store_api';
let defaultClient = MerchantStoreApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new MerchantStoreApi.FaqApi();
apiInstance.getAllFAQsV1FaqsGet().then((data) => {
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


## getFAQByQuestionV1FaqsQuestionGet

> Faq getFAQByQuestionV1FaqsQuestionGet(question)

Get Faq By Question

Get FAQ by question

### Example

```javascript
import MerchantStoreApi from 'merchant_store_api';
let defaultClient = MerchantStoreApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new MerchantStoreApi.FaqApi();
let question = "question_example"; // String | 
apiInstance.getFAQByQuestionV1FaqsQuestionGet(question).then((data) => {
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


## importMultipleFAQsV1FaqsPost

> [Faq] importMultipleFAQsV1FaqsPost(faq)

Import Multiple Faqs

Import multiple FAQs. If a FAQ same question already exist, it is updated. Otherwise new FAQ is created

### Example

```javascript
import MerchantStoreApi from 'merchant_store_api';
let defaultClient = MerchantStoreApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new MerchantStoreApi.FaqApi();
let faq = [new MerchantStoreApi.Faq()]; // [Faq] | 
apiInstance.importMultipleFAQsV1FaqsPost(faq).then((data) => {
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


## updateFAQByQuestionV1FaqsQuestionPut

> Faq updateFAQByQuestionV1FaqsQuestionPut(question, faq)

Update Faq By Question

Update FAQ By question

### Example

```javascript
import MerchantStoreApi from 'merchant_store_api';
let defaultClient = MerchantStoreApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new MerchantStoreApi.FaqApi();
let question = "question_example"; // String | 
let faq = new MerchantStoreApi.Faq(); // Faq | 
apiInstance.updateFAQByQuestionV1FaqsQuestionPut(question, faq).then((data) => {
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

