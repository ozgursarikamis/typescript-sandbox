import * as Hapi from '@hapi/hapi';
import { Routes } from './routes';

const init = async () => {
    let server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server = Routes.init(server);

    await server.start();
    console.log('Server running on %s', server.info.uri);
}

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

(async () => {
    await init();
})();
