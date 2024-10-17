/*
 *
 */
import { purify } from '../lib/purify.utils';
import { simpleAllowedTagsMock } from './mocks/purify.utils.allowed-tags.mocks';
import { simpleDisallowedPayload } from './mocks/purify.utils.disallowed-payload.mocks';

describe('PurifyUtils > purify()', () => {
    test.each(simpleAllowedTagsMock)('keep allowed tag: %s', (payload) => {
        const purifiedPayload: string = purify(payload);

        expect(purifiedPayload).toEqual(payload);
    });

    test.each(simpleDisallowedPayload)('remove disallowed tags: $payload', ({ payload, expectedPayload }) => {
        const purifiedPayload: string = purify(payload);

        expect(purifiedPayload).toEqual(expectedPayload);
    });

    it('empty context', () => {
        const purifyUndefinedContext = () => purify('some payload', { context: {} as Window });
        expect(purifyUndefinedContext).toThrow('Context should be defined');
    });
});
