type WindowLike = Pick<
    typeof globalThis,
    | "NodeFilter"
    | "Node"
    | "Element"
    | "HTMLTemplateElement"
    | "DocumentFragment"
    | "HTMLFormElement"
    | "DOMParser"
    | "NamedNodeMap"
>;

export interface PurifyParams {
    context?: Window | WindowLike;
}
