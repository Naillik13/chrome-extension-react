chrome.runtime.onMessage.addListener(async (msg, sender, response) => {
    response("hello");
    return true
});
export {}
