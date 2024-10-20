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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.BrainCommerceShopifyIngestorApi);
  }
}(this, function(expect, BrainCommerceShopifyIngestorApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new BrainCommerceShopifyIngestorApi.Content();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Content', function() {
    it('should create an instance of Content', function() {
      // uncomment below and update the code to test Content
      //var instance = new BrainCommerceShopifyIngestorApi.Content();
      //expect(instance).to.be.a(BrainCommerceShopifyIngestorApi.Content);
    });

    it('should have the property uuid (base name: "uuid")', function() {
      // uncomment below and update the code to test the property uuid
      //var instance = new BrainCommerceShopifyIngestorApi.Content();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new BrainCommerceShopifyIngestorApi.Content();
      //expect(instance).to.be();
    });

    it('should have the property content (base name: "content")', function() {
      // uncomment below and update the code to test the property content
      //var instance = new BrainCommerceShopifyIngestorApi.Content();
      //expect(instance).to.be();
    });

    it('should have the property file_path (base name: "file_path")', function() {
      // uncomment below and update the code to test the property file_path
      //var instance = new BrainCommerceShopifyIngestorApi.Content();
      //expect(instance).to.be();
    });

    it('should have the property internal_id (base name: "internal_id")', function() {
      // uncomment below and update the code to test the property internal_id
      //var instance = new BrainCommerceShopifyIngestorApi.Content();
      //expect(instance).to.be();
    });

  });

}));
