fetch('hi-curious', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
        'Content-Type': 'application/json'
    },
    body: '{"text": "Hello, this is some text\nThis is more text. :tada:"}'
});
