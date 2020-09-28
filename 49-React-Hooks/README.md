# React Hooks

---
## LGs:
- [ ] Understand how react hooks are used to declare and update state

---
### Understand how react hooks are used to declare and update state
* **Why Hooks?**
    * Problem: Which type of component to use? Class vs Functional
    * Solution: Hooks allow you to use local state and other React features without writing a class component
    
* **What is a Hook?**
    * Hooks are functions that let you “hook into” React state and lifecycle features from function components.
    * react v16.8.0
    * to hook react class functionality to a functional component

* **Current components tree:**
```react
    <App />
        <Counter />
```

* **Deliverable:** Convert `Counter` class component to functional component having same functionality using hooks.

* **useState:**
    * Returns a stateful value, and a function to update it.
    * import`useState `
    * declare:
    ```react
        const [count, setCount] = useState(0);
    ```
    * Array destructuring
    * display:
    ```react
        count
    ```
    * update:
    ```react
        setCount(count+1)
    ``` 
    * Multiple state variables:
    ```react
        const [num, changeNum] = useState(10);
    ```

#### Task: In task component, create a `amount` state with `100` as initial value and when clicked on spend button deduct `5` from `amount` state.

### Extra reading:
* [Hooks at a Glance](https://reactjs.org/docs/hooks-overview.html)
* [React Hooks for beginners](https://www.valentinog.com/blog/hooks/) 
* [Benefits of React Hooks](https://www.darrenlester.com/blog/benefits-of-react-hooks)
* [Why React Hooks?](https://hackernoon.com/why-react-hooks-a-developers-perspective-2aedb8511f38)
* [The hooks of react router](https://css-tricks.com/the-hooks-of-react-router/)
* [Lifecycle with hooks](https://dev.to/trentyang/replace-lifecycle-with-hooks-in-react-3d4n)
