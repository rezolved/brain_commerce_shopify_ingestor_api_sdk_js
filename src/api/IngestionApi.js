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
import ResponseGetFullProductIngestionQueue from '../model/ResponseGetFullProductIngestionQueue';

/**
* Ingestion service.
* @module api/IngestionApi
* @version 0.2.0
*/
export default class IngestionApi {

    /**
    * Constructs a new IngestionApi. 
    * @alias module:api/IngestionApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Configures Rabbitmq With Exchange, Queues And Bindings.
     * Configures RabbitMQ with exchange, queues and bindings.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Boolean} and HTTP response
     */
    configureRarbbitmqWithHttpInfo() {
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
        '/v1/configure-rabbitmq', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Configures Rabbitmq With Exchange, Queues And Bindings.
     * Configures RabbitMQ with exchange, queues and bindings.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Boolean}
     */
    configureRarbbitmq() {
      return this.configureRarbbitmqWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Full Product Ingestion Status.
     * Return status for full ingestion ingestion queue
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResponseGetFullProductIngestionQueue} and HTTP response
     */
    getFullProductIngestionQueueWithHttpInfo() {
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
      let returnType = ResponseGetFullProductIngestionQueue;
      return this.apiClient.callApi(
        '/v1/product-ingestion-queue', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Full Product Ingestion Status.
     * Return status for full ingestion ingestion queue
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResponseGetFullProductIngestionQueue}
     */
    getFullProductIngestionQueue() {
      return this.getFullProductIngestionQueueWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Queue Full Product Ingestion.
     * Published message to RabbitMQ to start full ingestion
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Boolean} and HTTP response
     */
    queueFullProductIngestionWithHttpInfo() {
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
        '/v1/product-ingestion-queue', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Queue Full Product Ingestion.
     * Published message to RabbitMQ to start full ingestion
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Boolean}
     */
    queueFullProductIngestion() {
      return this.queueFullProductIngestionWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Terminates Currently Running Full Product Ingestion.
     * Terminates currently running full ingestion ingestion.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    terminateFullProductIngestionWithHttpInfo() {
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
        '/v1/product-ingestion-queue', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Terminates Currently Running Full Product Ingestion.
     * Terminates currently running full ingestion ingestion.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    terminateFullProductIngestion() {
      return this.terminateFullProductIngestionWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
