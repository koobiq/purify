import dompurify from "dompurify";
import { PurifyParams } from '../types/purify-params';

const createDOMPurify = dompurify;

export const purify = (payload: string, params: PurifyParams = {}): string => {
    const { context = window } = params;

    const DOMPurify = createDOMPurify(context);

    if (typeof DOMPurify.sanitize !== "function") {
        throw new Error('Context should be defined');
    }

    return DOMPurify.sanitize(payload);
}
