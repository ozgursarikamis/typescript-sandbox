import * as Hapi from '@hapi/hapi';

import { homeRoutes } from './Home';
import { usersRoutes } from './Users';
import { productRoutes } from './Product';

export class Routes {
    public static init(server: Hapi.Server<Hapi.ServerApplicationState>): Hapi.Server<Hapi.ServerApplicationState> {
        server.realm.modifiers.route.prefix = '/api';
        server.route(homeRoutes);
        server.route(productRoutes);
        server.route(usersRoutes);
    
        return server;
    }
}