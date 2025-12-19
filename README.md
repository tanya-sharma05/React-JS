## What is React?

React is a JavaScript library for building user interfaces, created by Facebook (now Meta) in 2013. It lets you compose complex UIs from small, isolated pieces of code called "components."

## Why React is Needed?
Before React, building dynamic web applications was challenging:
- Direct DOM manipulation was slow and error-prone
- Code became messy as applications grew
- Managing UI state across different parts of an app was difficult
- Reusing UI components was difficult

---

## Core Concepts

### 1. Virtual DOM
React creates an in-memory representation of the actual DOM. When state changes:
1. React creates a new Virtual DOM tree
2. Compares it with the previous one
3. Updates only the changed elements in the real DOM (reconciliation)

**Why it matters**: Makes React fast and efficient.

### 2. One-Way Data Binding
Data flows from parent to child components through props. This makes the app more predictable and easier to debug.

### 3. Component-Based Architecture
Everything in React is a component. Components can be reused, nested, and composed together.

---

## Components

Components are the building blocks of React applications.

---

## JSX

JSX (JavaScript XML) is a syntax extension that looks like HTML but lives in JavaScript files.

**Interview Question**: Why JSX?
- Makes code more readable
- Provides better error messages
- Prevents injection attacks (auto-escaping)

---

## Props

Props (properties) are how components communicate. They're **read-only** and passed from parent to child.

---

## State

State is data that changes over time within a component. Unlike props, state is **mutable** and managed within the component.

--- 
## Hooks

Hooks let you use state and other React features in functional components.


**Key Points**:
- State updates are asynchronous
- Never modify state directly, always use setter function
- State updates trigger re-renders

---

### Most Common Hooks

#### 1. useState
Manages component state.

```javascript
const [state, setState] = useState(initialValue);
```

#### 2. useEffect
Performs side effects (data fetching, subscriptions, DOM manipulation).

```javascript
import { useEffect } from 'react';

function Example() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    // Runs after render
    fetchData().then(response => setData(response));
    
    // Cleanup function (optional)
    return () => {
      cleanup();
    };
  }, []); // Dependency array
}
```

**Dependency Array**:
- `[]` - Runs once (componentDidMount)
- `[var]` - Runs when var changes
- No array - Runs after every render

#### 3. useContext
Shares data without passing props manually.

```javascript
import { createContext, useContext } from 'react';

const ThemeContext = createContext();

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemedButton />
    </ThemeContext.Provider>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Themed Button</button>;
}
```

#### 4. useRef
Access DOM elements or persist values without re-rendering.

```javascript
import { useRef } from 'react';

function TextInput() {
  const inputRef = useRef(null);
  
  const focusInput = () => {
    inputRef.current.focus();
  };
  
  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}
```

#### 5. useMemo & useCallback
Optimize performance by memoizing values and functions.

```javascript
import { useMemo, useCallback } from 'react';

function ExpensiveComponent({ data }) {
  // Only recalculates when data changes
  const processedData = useMemo(() => {
    return expensiveOperation(data);
  }, [data]);
  
  // Function stays the same unless dependencies change
  const handleClick = useCallback(() => {
    doSomething(data);
  }, [data]);
  
  return <div onClick={handleClick}>{processedData}</div>;
}
```

---

## Lifecycle Methods

While lifecycle methods are used in class components, understanding them helps grasp useEffect.

### Class Component Lifecycle
- **Mounting**: constructor → render → componentDidMount
- **Updating**: render → componentDidUpdate
- **Unmounting**: componentWillUnmount

---

## Common Interview Questions

### 1. What is React and why use it?
React is a JavaScript library for building UIs. Use it for:
- Component reusability
- Virtual DOM for performance
- Large ecosystem and community
- Easy to learn and maintain

### 2. What is the difference between props and state?
- **Props**: Read-only data passed from parent to child
- **State**: Mutable data managed within a component

### 3. What is the Virtual DOM?
A lightweight copy of the actual DOM. React updates the Virtual DOM, compares it with the previous version, and efficiently updates only the changed parts in the real DOM.

### 4. What are React Hooks?
Functions that let you use state and other React features in functional components. Examples: useState, useEffect, useContext.

### 5. What is the difference between class and functional components?
- **Class Components**: Use lifecycle methods, verbose syntax
- **Functional Components**: Use hooks, simpler syntax, modern approach

### 6. What is JSX?
JavaScript XML - a syntax extension that allows writing HTML-like code in JavaScript files.

### 7. What is the purpose of keys in React lists?
Keys help React identify which items have changed, been added, or removed, improving performance and preventing bugs.

### 8. What is useEffect used for?
Performing side effects like data fetching, subscriptions, or manually changing the DOM. Equivalent to componentDidMount, componentDidUpdate, and componentWillUnmount combined.

### 9. How do you handle forms in React?
Using controlled components where form data is handled by React state, updating through onChange handlers.

### 10. What is prop drilling and how to avoid it?
Passing props through multiple levels of components. Avoid using:
- Context API
- State management libraries (Redux, Zustand)
- Component composition

### 11. What is lifting state up?
Moving state to the closest common ancestor when multiple components need to share the same state.

### 12. What is reconciliation?
The process where React updates the DOM by comparing the new Virtual DOM with the previous one and applying minimal changes.

### 13. What are Pure Components?
Components that only re-render when their props or state change (shallow comparison).

### 14. What is React.memo()?
A higher-order component that memoizes functional components, preventing unnecessary re-renders.

```javascript
const MemoizedComponent = React.memo(MyComponent);
```

### 15. What is the difference between useCallback and useMemo?
- **useCallback**: Memoizes functions
- **useMemo**: Memoizes values/computed results

---
