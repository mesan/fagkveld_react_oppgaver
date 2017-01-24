'use strict';

const server = require('../server');
const fetch = require('node-fetch');
const assert = require('assert');

describe('trumpnewsServer', () => {

    let serverInst;

    before((done) => {
        server.start()
            .then(s => serverInst = s)
            .then(() => done());
    });

    after((done) => {
        serverInst.stop()
            .then(() => done());
    });

    it('returns all news', (done) => {
        fetch(`${serverInst.info.uri}/news`)
            .then(r => {
                assert.equal(r.status, 200);
                return r;
            })
            .then(r => r.json())
            .then(body => assert.equal(body.length, 1))
            .then(() => done())
            .catch(err => done(err));
    });

    it('returns a news item if it exists', (done) => {
        const id = 1;
        fetch(`${serverInst.info.uri}/news/${id}`)
            .then(r => {
                assert.equal(r.status, 200);
                return r;
            })
            .then(r => r.json())
            .then(body => assert.equal(body.title, `Trump's order on abortion policy: What does it mean?`))
            .then(() => done())
            .catch(err => done(err));
    });

    it('returns 404 if a news item does not exist', (done) => {
        const id = 10;
        fetch(`${serverInst.info.uri}/news/${id}`)
            .then(r => assert.equal(r.status, 404))
            .then(() => done())
            .catch(err => done(err));
    });

    it('returns location in header when news item is created', (done) => {
        const newsItem = {
            title: 'Title',
            leadText: 'LeadText',
            text: 'Text',
            imageUrl: 'http://google.com',
            category: 'Category'
        };

        fetch(`${serverInst.info.uri}/news`, {
            method: 'POST',
            headers: { Content: 'application/json' },
            body: JSON.stringify(newsItem)
        })
            .then(r => {
                assert.equal(r.status, 201);
                assert.equal(r.headers.get('Location'), `${serverInst.info.uri}/news/2`);
            })
            .then(() => done())
            .catch(err => done(err));
    });

    it('returns 400 if news item to create is invalid', (done) => {
        const invalidNewsItem = { a : 'b' };

        fetch(`${serverInst.info.uri}/news`, {
            method: 'POST',
            headers: { Content: 'application/json' },
            body: JSON.stringify(invalidNewsItem)
        })
            .then(r => assert.equal(r.status, 400))
            .then(() => done())
            .catch(err => done(err));
    });

    it('updates news item', (done) => {
        const newsItem = {
            title: 'Updated Title',
            leadText: 'LeadText',
            text: 'Text',
            imageUrl: 'http://google.com',
            category: 'Category'
        };

        fetch(`${serverInst.info.uri}/news/1`, {
            method: 'PUT',
            headers: { Content: 'application/json' },
            body: JSON.stringify(newsItem)
        })
            .then(r => { 
                assert.equal(r.status, 200);
                return r.json();
            })
            .then(body => assert.deepEqual(body, Object.assign({}, newsItem, { id: 1 })))
            .then(() => done())
            .catch(err => done(err));
    });

    it('returns 404 if news item to update does not exist', (done) => {
        const newsItem = {
            title: 'Updated Title',
            leadText: 'LeadText',
            text: 'Text',
            imageUrl: 'http://google.com',
            category: 'Category'
        };

        fetch(`${serverInst.info.uri}/news/10`, {
            method: 'PUT',
            headers: {
                Content: 'application/json'
            },
            body: JSON.stringify(newsItem)
        })
            .then(r => assert.equal(r.status, 404))
            .then(() => done())
            .catch(err => done(err));
    });

    it('returns 400 if news item to create is invalid', (done) => {
        const invalidNewsItem = { a : 'b' };

        fetch(`${serverInst.info.uri}/news/1`, {
            method: 'PUT',
            headers: { Content: 'application/json' },
            body: JSON.stringify(invalidNewsItem)
        })
            .then(r => assert.equal(r.status, 400))
            .then(() => done())
            .catch(err => done(err));
    });
});