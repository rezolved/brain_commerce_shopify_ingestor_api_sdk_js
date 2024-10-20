/**
 * Brain Commerce Shopify Ingestor API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import Content from './model/Content';
import Faq from './model/Faq';
import HTTPValidationError from './model/HTTPValidationError';
import Product from './model/Product';
import ProductAvailability from './model/ProductAvailability';
import ProductIngestorStatus from './model/ProductIngestorStatus';
import ResponseGetFullProductIngestionQueue from './model/ResponseGetFullProductIngestionQueue';
import ValidationError from './model/ValidationError';
import ValidationErrorLocInner from './model/ValidationErrorLocInner';
import ContentApi from './api/ContentApi';
import DefaultApi from './api/DefaultApi';
import FaqApi from './api/FaqApi';
import IngestionApi from './api/IngestionApi';
import ProductApi from './api/ProductApi';


/**
* JS API client generated by OpenAPI Generator.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var BrainCommerceShopifyIngestorApi = require('index'); // See note below*.
* var xxxSvc = new BrainCommerceShopifyIngestorApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new BrainCommerceShopifyIngestorApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new BrainCommerceShopifyIngestorApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new BrainCommerceShopifyIngestorApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 0.2.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Content model constructor.
     * @property {module:model/Content}
     */
    Content,

    /**
     * The Faq model constructor.
     * @property {module:model/Faq}
     */
    Faq,

    /**
     * The HTTPValidationError model constructor.
     * @property {module:model/HTTPValidationError}
     */
    HTTPValidationError,

    /**
     * The Product model constructor.
     * @property {module:model/Product}
     */
    Product,

    /**
     * The ProductAvailability model constructor.
     * @property {module:model/ProductAvailability}
     */
    ProductAvailability,

    /**
     * The ProductIngestorStatus model constructor.
     * @property {module:model/ProductIngestorStatus}
     */
    ProductIngestorStatus,

    /**
     * The ResponseGetFullProductIngestionQueue model constructor.
     * @property {module:model/ResponseGetFullProductIngestionQueue}
     */
    ResponseGetFullProductIngestionQueue,

    /**
     * The ValidationError model constructor.
     * @property {module:model/ValidationError}
     */
    ValidationError,

    /**
     * The ValidationErrorLocInner model constructor.
     * @property {module:model/ValidationErrorLocInner}
     */
    ValidationErrorLocInner,

    /**
    * The ContentApi service constructor.
    * @property {module:api/ContentApi}
    */
    ContentApi,

    /**
    * The DefaultApi service constructor.
    * @property {module:api/DefaultApi}
    */
    DefaultApi,

    /**
    * The FaqApi service constructor.
    * @property {module:api/FaqApi}
    */
    FaqApi,

    /**
    * The IngestionApi service constructor.
    * @property {module:api/IngestionApi}
    */
    IngestionApi,

    /**
    * The ProductApi service constructor.
    * @property {module:api/ProductApi}
    */
    ProductApi
};
