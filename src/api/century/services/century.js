'use strict';

/**
 * century service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::century.century');
