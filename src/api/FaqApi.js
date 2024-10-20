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


import ApiClient from "../ApiClient";
import Faq from '../model/Faq';
import HTTPValidationError from '../model/HTTPValidationError';

/**
* Faq service.
* @module api/FaqApi
* @version 0.2.0
*/
export default class FaqApi {

    /**
    * Constructs a new FaqApi. 
    * @alias module:api/FaqApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create Faq By Question
     * Create FAQ by question
     * @param {String} question 
     * @param {module:model/Faq} faq 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Faq} and HTTP response
     */
    createFaqByQuestionWithHttpInfo(question, faq) {
      let postBody = faq;
      // verify the required parameter 'question' is set
      if (question === undefined || question === null) {
        throw new Error("Missing the required parameter 'question' when calling createFaqByQuestion");
      }
      // verify the required parameter 'faq' is set
      if (faq === undefined || faq === null) {
        throw new Error("Missing the required parameter 'faq' when calling createFaqByQuestion");
      }

      let pathParams = {
        'question': question
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKeyHeader'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Faq;
      return this.apiClient.callApi(
        '/v1/faq/{question}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create Faq By Question
     * Create FAQ by question
     * @param {String} question 
     * @param {module:model/Faq} faq 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Faq}
     */
    createFaqByQuestion(question, faq) {
      return this.createFaqByQuestionWithHttpInfo(question, faq)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create Faq Collection
     * Creates FAQ collection/schema in Weaviate database
     * @param {Object} opts Optional parameters
     * @param {Boolean} [delete_existing_collection = false)] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    createFaqCollectionWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'delete_existing_collection': opts['delete_existing_collection']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKeyHeader'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/v1/faq/collection', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create Faq Collection
     * Creates FAQ collection/schema in Weaviate database
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.delete_existing_collection  (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    createFaqCollection(opts) {
      return this.createFaqCollectionWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete Faq By Internal Id
     * Delete FAQ by internal_id
     * @param {Number} internal_id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Boolean} and HTTP response
     */
    deleteFaqByInternalIdWithHttpInfo(internal_id) {
      let postBody = null;
      // verify the required parameter 'internal_id' is set
      if (internal_id === undefined || internal_id === null) {
        throw new Error("Missing the required parameter 'internal_id' when calling deleteFaqByInternalId");
      }

      let pathParams = {
        'internal_id': internal_id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKeyHeader'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = 'Boolean';
      return this.apiClient.callApi(
        '/v1/faq/by-internal-id/{internal_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete Faq By Internal Id
     * Delete FAQ by internal_id
     * @param {Number} internal_id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Boolean}
     */
    deleteFaqByInternalId(internal_id) {
      return this.deleteFaqByInternalIdWithHttpInfo(internal_id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete Faq By Question
     * Delete FAQ by question
     * @param {String} question 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Boolean} and HTTP response
     */
    deleteFaqByQuestionWithHttpInfo(question) {
      let postBody = null;
      // verify the required parameter 'question' is set
      if (question === undefined || question === null) {
        throw new Error("Missing the required parameter 'question' when calling deleteFaqByQuestion");
      }

      let pathParams = {
        'question': question
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKeyHeader'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = 'Boolean';
      return this.apiClient.callApi(
        '/v1/faq/{question}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete Faq By Question
     * Delete FAQ by question
     * @param {String} question 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Boolean}
     */
    deleteFaqByQuestion(question) {
      return this.deleteFaqByQuestionWithHttpInfo(question)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete Faq Collection
     * Delete FAQ collection
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Boolean} and HTTP response
     */
    deleteFaqCollectionWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKeyHeader'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = 'Boolean';
      return this.apiClient.callApi(
        '/v1/faq/collection', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete Faq Collection
     * Delete FAQ collection
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Boolean}
     */
    deleteFaqCollection() {
      return this.deleteFaqCollectionWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get All Faqs
     * Returns All FAQs. If collection has a large number of FAQs                 response may take long time
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Faq>} and HTTP response
     */
    getAllFaqsWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKeyHeader'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Faq];
      return this.apiClient.callApi(
        '/v1/faq', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get All Faqs
     * Returns All FAQs. If collection has a large number of FAQs                 response may take long time
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Faq>}
     */
    getAllFaqs() {
      return this.getAllFaqsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Faq By Question
     * Get FAQ by question
     * @param {String} question 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Faq} and HTTP response
     */
    getFaqByQuestionWithHttpInfo(question) {
      let postBody = null;
      // verify the required parameter 'question' is set
      if (question === undefined || question === null) {
        throw new Error("Missing the required parameter 'question' when calling getFaqByQuestion");
      }

      let pathParams = {
        'question': question
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKeyHeader'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Faq;
      return this.apiClient.callApi(
        '/v1/faq/{question}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Faq By Question
     * Get FAQ by question
     * @param {String} question 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Faq}
     */
    getFaqByQuestion(question) {
      return this.getFaqByQuestionWithHttpInfo(question)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Check If Faq Collection Exists.
     * Returns true if FAQ collection exists else return false
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    getFaqCollectionExistsWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKeyHeader'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/v1/faq/collection-exists', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Check If Faq Collection Exists.
     * Returns true if FAQ collection exists else return false
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    getFaqCollectionExists() {
      return this.getFaqCollectionExistsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Import Multiple Faqs
     * Import multiple FAQs. If a FAQ same question already exist, it is updated. Otherwise new FAQ is created
     * @param {Array.<module:model/Faq>} faq 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Faq>} and HTTP response
     */
    importMultipleFaqsWithHttpInfo(faq) {
      let postBody = faq;
      // verify the required parameter 'faq' is set
      if (faq === undefined || faq === null) {
        throw new Error("Missing the required parameter 'faq' when calling importMultipleFaqs");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKeyHeader'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = [Faq];
      return this.apiClient.callApi(
        '/v1/faq', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Import Multiple Faqs
     * Import multiple FAQs. If a FAQ same question already exist, it is updated. Otherwise new FAQ is created
     * @param {Array.<module:model/Faq>} faq 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Faq>}
     */
    importMultipleFaqs(faq) {
      return this.importMultipleFaqsWithHttpInfo(faq)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Deletes All Faq From Collection
     * Deletes all FAQ from collection.
     * @param {Object} opts Optional parameters
     * @param {Boolean} [dry_run = true)] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    resetFaqCollectionWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'dry_run': opts['dry_run']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKeyHeader'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/v1/faq/reset-collection', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Deletes All Faq From Collection
     * Deletes all FAQ from collection.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.dry_run  (default to true)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    resetFaqCollection(opts) {
      return this.resetFaqCollectionWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update Faq By Question
     * Update FAQ By question
     * @param {String} question 
     * @param {module:model/Faq} faq 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Faq} and HTTP response
     */
    updateFaqByQuestionWithHttpInfo(question, faq) {
      let postBody = faq;
      // verify the required parameter 'question' is set
      if (question === undefined || question === null) {
        throw new Error("Missing the required parameter 'question' when calling updateFaqByQuestion");
      }
      // verify the required parameter 'faq' is set
      if (faq === undefined || faq === null) {
        throw new Error("Missing the required parameter 'faq' when calling updateFaqByQuestion");
      }

      let pathParams = {
        'question': question
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKeyHeader'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Faq;
      return this.apiClient.callApi(
        '/v1/faq/{question}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update Faq By Question
     * Update FAQ By question
     * @param {String} question 
     * @param {module:model/Faq} faq 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Faq}
     */
    updateFaqByQuestion(question, faq) {
      return this.updateFaqByQuestionWithHttpInfo(question, faq)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
