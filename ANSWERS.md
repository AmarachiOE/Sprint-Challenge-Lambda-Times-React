## Self-Study/Essay Questions

- [x] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

PropTypes are used to validate or type check our data. It helps prevent bugs before we introduce them.


- [x] Describe a life-cycle event in React?

There are 3 phases to a component life-cycle: mounting (birth), updating (growth), and unmounting (death). During mounting, component is built with constructor and render functions. Also, componentDidMount function is called. When updating, setState can be used to change state of component. Also, shouldComponentUpdate can be used here to stop a component from calling render if needed and componentDidUpdate is called. During unmounting, the component is removed from the screen and componentWillUnmount can be invoked for any necessary cleaning (useful for event listeners).

- [x] Explain the details of a Higher Order Component?

A HOC is a commonly used, advanced javascript pattern. It’s a function that takes in another function as an argument. Higher Order Components are used to share logic/functionality between similar components. Array methods are considered HOC’s.

- [x] What are three different ways to style components in React? Explain some of the benefits of each.

1. Importing external .css files keep the styles in a separate file, which can be beneficial for organization purposes.
2. Inline js styles adds styles within the js code, which can be beneficial for having js and css code in one place to easily access.
3. Importing styled components combines the best of both worlds. All styled components can be kept in one place but on the same js file as the code you’re styling, while still having access to all the features of CSS.
