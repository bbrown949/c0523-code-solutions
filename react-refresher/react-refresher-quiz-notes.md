# react-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How do you define a React component?
  In its own file, like a function but the name was start with a capital letter.-

How do you use JSX in a React component?
you write it similiar to how you would write html in index.html for example

- How do you declare the props a React component needs?
  Inside curly braces inside the component definition.
- How do you pass props to a React component?
  Props are usually passed from a parent component to a child component.
- How do you include JavaScript expressions in JSX?
  within curly brackets
- What are React hooks and what are the three "Rules of Hooks"?

Hooks allow function components to have access to state and other React features.

There are 3 rules for hooks:

Hooks can only be called inside React function components.
Hooks can only be called at the top level of a component.
Hooks cannot be conditional

- How do you manage state in a React component?
  have a React state on a top-level component and pass down the state via props
- How do you handle events in React?
  by defining functions in your App to handle the events, and then passing those event handlers in props to the component that are supposed to handle.
- How do you let a parent component know that an event happened?
  the event handler is declared within the parent component, and this component is passed to a child component tho=rough props.

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
