# react-form-controls-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How do controlled components differ from uncontrolled components?

  controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.

- What are some advantages of using uncontrolled components?

  No component re-renders.
  Browser DOM handles the changes to the element.
  Simple to use.
  Keeps track of the internal state.

- What are some advantages of using controlled components?

  The UI and the data are in sync.
  Form data can be passed between different components.
  The event handler and the value prop can be from the parent or a redux store.
  The React component acts as a source of truth for this component.

- Which style do you prefer?

  In most cases, we recommend using controlled components to implement forms. In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.

- What two props must you pass to an input for it to be "controlled"?
  value and onChange() props
- What are some popular npm packages for creating forms in React?
  The 3 most popular packages are React Hook Form, Formik, and React Final Form

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
