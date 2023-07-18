# react-context-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of React "context"?
  allows us to pass data through our component trees, giving our components the ability to communicate and share data at different levels.
- What values can be stored in context?

- How do you create context and make it available to the components?
  To create a context, we can use React. createContext method, which creates a context object. This is used to ensure that the components at different levels can use the same context to fetch the data.
- How do you access the context values?
  through props with the help of useContext method in React. This hook (useContext) can be passed in as the argument along with our Context to consume the data in the functional component.
- When would you use context? (in addition to the best answer: "rarely")

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
