import * as Hapi from '@hapi/hapi';
import { indexRoute } from './routes/index.route';

console.log(Hapi);

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route(indexRoute);

    await server.start();
    console.log('Server running on %s', server.info.uri);
}

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();