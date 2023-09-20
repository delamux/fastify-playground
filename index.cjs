const fastify = require('fastify');
const serverOptions = {
	logger: true,
};

const app = fastify(serverOptions);

app.listen({ port: 3001, host: '0.0.0.0' }).then((address) => {
	console.log(`Server listening on ${address}`);
});

app.get('/', async (request, reply) => {
	return { hello: 'world' };
});
