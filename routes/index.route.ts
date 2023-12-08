import * as Hapi from '@hapi/hapi';

const indexHandler = (request: Hapi.Request, h: Hapi.ResponseToolkit) => {
    return {
        message: 'Hello World!',
        timestamp: new Date().toISOString()
    }
}

export const indexRoute = {
    method: 'GET',
    path: '/',
    handler: indexHandler
}