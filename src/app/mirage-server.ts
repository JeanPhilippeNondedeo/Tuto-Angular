import { createServer, Model } from 'miragejs';

export function makeServer({ environment = 'development' } = {}) {
    const server = createServer({
        environment,

        models: {
            user: Model,
        },

        seeds(server) {
            server.create('user', { id: '1', name: 'Jean', email: 'jean@example.com' });
            server.create('user', { id: '2', name: 'Philippe', email: 'philippe@example.com' });
        },

        routes() {
            this.namespace = 'api'; // Toutes les requêtes passeront par /api

            this.get('/users', (schema) => {
                return schema.all('user');
            });

            this.post('/users', (schema, request) => {
                const attrs = JSON.parse(request.requestBody);
                return schema.create('user', attrs);
            });
        },
    });

    return server;
}
