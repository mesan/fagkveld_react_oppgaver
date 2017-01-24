const Hapi = require('hapi');
const validateNewsItem = require('./validateNewsItem');

const server = new Hapi.Server();
server.connection({ port: 3001, host: 'localhost' });

const news = [
    {
        id: 1,
        title: `Trump's order on abortion policy: What does it mean?`,
        imageUrl: 'http://ichef.bbci.co.uk/news/660/cpsprodpb/150E8/production/_93784268_828d316b-0dae-4ced-bbda-7606f5cf6cdc.jpg',
        leadText: 'A group of men standing around a desk: it is not the typical image that goes viral online.',
        text: `The photograph in question was taken on US President Donald Trump's first day in the Oval Office on Monday, when he signed a ban on federal money going to international groups that perform or provide information on abortions.
"Men making decisions about women's bodies" was a much-repeated phrase on Twitter, as it was shared hundreds of thousands of times, including by author JK Rowling.`,
        category: 'Abortion'
    }
];

server.route({
    method: 'GET',
    path: '/news',
    handler(request, reply) {
        reply(news);
    }
});

server.route({
    method: 'POST',
    path: '/news',
    handler(request, reply) {
        const newsItem = request.payload;

        validateNewsItem(newsItem)
            .then(validNewsItem => {
                news.push(validNewsItem);
                reply().code(201).header('Location', `${request.server.info.uri}/news/${news.length}`);
            })
            .catch(err => {
                reply(err.isJoi ? err.details : err).code(err.isJoi ? 400 : 500);
            });
    }
});

server.route({
    method: 'GET',
    path: '/news/{id}',
    handler(request, reply) {
        const id = parseInt(request.params.id);
        if (isNaN(id)) {
            return reply().code(400);
        }

        const newsItem = news[id - 1];

        reply(newsItem).code(newsItem ? 200: 404);
    }
});

server.route({
    method: 'PUT',
    path: '/news/{id}',
    handler(request, reply) {
        const id = parseInt(request.params.id);
        if (isNaN(id)) {
            return reply().code(400);
        }

        const prevNewsItem = news[id - 1];

        if (!prevNewsItem) {
            return reply().code(404);
        }

        const newsItem = request.payload;

        validateNewsItem(newsItem)
            .then(validNewsItem => {
                news[id - 1] = validNewsItem;
                reply(Object.assign({}, validNewsItem, { id }));
            })
            .catch(err => {
                reply(err.isJoi ? err.details : err).code(err.isJoi ? 400 : 500);
            });
    }
});

module.exports.start = () => {
    return server.start()
        .then(() => server)
        .catch(err => console.error(err));
};

module.exports.stop = () => {
    return server.stop()
        .then(() => server)
        .catch(err => console.error(err));
};