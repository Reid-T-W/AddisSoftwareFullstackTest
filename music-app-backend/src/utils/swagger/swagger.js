const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const { version } = require('../../../package.json');
const logger = require('../../config/logger');
const { serverHost } = require('../../config/config');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: "Music App REST API Docs",
            version,
        },
        servers: [
            {
                url: `${serverHost}/api/v1`,
                // url: `${serverHost}:${port}/api/v1`,
            }
        ]
    },
    apis: [
        './src/utils/swagger/docs/*.js'
    ],
}

const swaggerSpec = swaggerJsDoc(options);

function SwaggerDocs(app){
    //Swagger page
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    // Docs in JSON format
    app.get('/docs.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });

    logger.info(`Docs available at ${serverHost}/docs`);
    // logger.info(`Docs available at ${serverHost}:${port}/docs`);
}

module.exports = SwaggerDocs;
