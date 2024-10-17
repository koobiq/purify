export const simpleDisallowedPayload: Array<{
    payload: string,
    expectedPayload: string
}> = [{
    payload: '<script>alert("xss");</script>',
    expectedPayload: ''
}, {
    payload: '<style>* { color: white; }</style>',
    expectedPayload: ''
}, {
    payload: '<div class="hide-it"><style>.hide-it { display: none; visibility: hidden; }</style>Here is some invisible text</div>',
    expectedPayload: '<div class="hide-it">Here is some invisible text</div>'
}];
