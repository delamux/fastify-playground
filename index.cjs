const fastify = require('fastify');

const BODY_LIMIT = 1_048_576 * 10; // 10MB
const serverOptions = {
	logger: true,
	bodyLimit: BODY_LIMIT,
};

const APP_HOOKS = {
	ON_READY: 'onReady',
	ON_LISTEN: 'onListen',
	ON_CLOSE: 'onClose',
	PRECLOSE: 'preClose',
	ON_ROUTE: 'onRoute',
	ON_REGISTER: 'onRegister',
};

const REQUEST_HOOKS = {
	ON_REQUEST: 'onRequest',
	PREPARSING: 'preParsing',
	PREVALIDATION: 'preValidation',
	PREHANDLER: 'preHandler',
	PRESERIALIZATION: 'preSerialization',
	ON_ERROR: 'onError',
	ON_SEND: 'onSend',
	ON_RESPONSE: 'onResponse',
	ON_TIMEOUT: 'onTimeout',
	ON_REQUEST_ABORT: 'onRequestAbort',
};

const app = fastify(serverOptions);

app.listen({ port: 3001, host: '0.0.0.0' }).then((address) => {
	console.log(`Server listening on ${address}`);
});

app.get('/', (request, reply) => {
	return { hello: 'world' };
});

app.addHook(REQUEST_HOOKS.ON_REQUEST, async (routeOptions) => {
	console.log('On request');
});

app.addHook(APP_HOOKS.ON_ROUTE, (routeOptions) => {
	console.log('onRoute ');
});

app.addHook(APP_HOOKS.ON_REGISTER, (plugin, pluginOptions) => {
	console.log('onRequest');
});

app.addHook(APP_HOOKS.ON_READY, async () => {
	console.log('onReady');
});

app.addHook(APP_HOOKS.ON_CLOSE, (done) => {
	console.log('onClose');
	done();
});
