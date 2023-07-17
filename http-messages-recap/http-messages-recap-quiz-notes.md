# http-messages-recap-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a client?
  Clients, therefore, initiate communication sessions with servers, which await incoming requests
- What is a server?
  A server host runs one or more server programs, which share their resources with clients.
- Which HTTP method does a browser issue to a web server when you visit a URL?
  TC P connection, o transfer data packets between your computer(client) and the server, it is important to have a TCP connection established.
- What is on the first line of an HTTP **request** message?
  An HTTP method, a verb (like GET , PUT or POST ) or a noun (like HEAD or OPTIONS ), that describes the action to be performed
- What is on the first line of an HTTP **response** message?
  he status line is the first line in the response message. It consists of three items: The HTTP version number, showing the HTTP specification to which the server has tried to make the message comply. A status code, which is a three-digit number indicating the result of the request.
- What are HTTP headers?
  HTTP headers let the client and the server pass additional information with an HTTP request or response. An HTTP header consists of its case-insensitive name followed by a colon ( : ), then by its value.
- Is a body required for a valid HTTP message?
  HTTP requests have a body if they have a Content-Length or Transfer-Encoding header (RFC 2616 4.3). If the request has neither, it has no body, and your server should treat it as such.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
