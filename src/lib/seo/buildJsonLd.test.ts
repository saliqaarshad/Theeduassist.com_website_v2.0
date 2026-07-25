import { test, describe } from 'node:test';
import * as assert from 'node:assert';
import { buildPageSchema } from './buildJsonLd';
import { organizationEntity } from '../../data/organizationEntity';

describe('buildPageSchema', () => {
    test('returns Service schema for type Service', () => {
        const result = buildPageSchema('Service', 'Test Service', 'A test service', '/test-service/');

        assert.strictEqual(result['@type'], 'Service');
        assert.strictEqual(result.name, 'Test Service');
        assert.strictEqual(result.description, 'A test service');
        assert.strictEqual(result.url, 'https://www.theeduassist.com/test-service/');

        assert.ok(result.provider);
        assert.strictEqual(result.provider['@type'], 'Organization');
        assert.strictEqual(result.provider.name, organizationEntity.name);
    });

    test('returns CollectionPage schema for type CollectionPage', () => {
        const result = buildPageSchema('CollectionPage', 'My Collection', 'A test collection', '/my-collection/');

        assert.strictEqual(result['@type'], 'CollectionPage');
        assert.strictEqual(result.name, 'My Collection');
        assert.strictEqual(result.description, 'A test collection');
        assert.strictEqual(result.url, 'https://www.theeduassist.com/my-collection/');
    });

    test('returns Article schema for type Article', () => {
        const result = buildPageSchema('Article', 'My Article', 'A test article', '/blog/my-article/', {
            datePublished: '2023-01-01T00:00:00.000Z'
        });

        assert.strictEqual(result['@type'], 'Article');
        assert.strictEqual(result.name, 'My Article');
        assert.strictEqual(result.description, 'A test article');
        assert.strictEqual(result.url, 'https://www.theeduassist.com/blog/my-article/');

        // Article specific props
        assert.strictEqual(result.headline, 'My Article');
        assert.ok(result.author);
        assert.strictEqual(result.author['@type'], 'Organization');
        assert.strictEqual(result.author.name, 'TheEduAssist');

        // Additional props
        assert.strictEqual(result.datePublished, '2023-01-01T00:00:00.000Z');
    });

    test('returns WebPage schema as fallback', () => {
        const result = buildPageSchema('WebPage', 'My Page', 'A test page', '/my-page/');

        assert.strictEqual(result['@type'], 'WebPage');
        assert.strictEqual(result.name, 'My Page');
        assert.strictEqual(result.description, 'A test page');
        assert.strictEqual(result.url, 'https://www.theeduassist.com/my-page/');
    });

    test('formats URL correctly without leading slash', () => {
        const result = buildPageSchema('Article', 'Test', 'Test', 'no-slash/');
        assert.strictEqual(result.url, 'https://www.theeduassist.com/no-slash/');
    });

    test('formats URL correctly without trailing slash', () => {
        const result = buildPageSchema('Article', 'Test', 'Test', '/no-slash');
        assert.strictEqual(result.url, 'https://www.theeduassist.com/no-slash/');
    });

    test('formats URL correctly without leading or trailing slash', () => {
        const result = buildPageSchema('Article', 'Test', 'Test', 'no-slash');
        assert.strictEqual(result.url, 'https://www.theeduassist.com/no-slash/');
    });

    test('formats URL correctly for root', () => {
        const result = buildPageSchema('Article', 'Test', 'Test', '/');
        assert.strictEqual(result.url, 'https://www.theeduassist.com/');
    });
});
