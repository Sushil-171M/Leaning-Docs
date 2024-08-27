`

----------------------------------------------------React, advantages, Limitation, Virtual DOM -------------------------------------------
What is React ??
   React is a javascript library building user interfaces without wrting complex JS code.
It follows the Component based architecture.

Why React ??
 1) Component Based Architecture : We can break a big component into smaller component and make it reusable also, later we can merge all these component together for  the result.
 2) Use of Virtual DOM : 
                   DOM :  DOM stands for ‘Document Object Model’. 
                   it is a tree structured representation of the HTML elements that are present in a webpage. DOM represents the entire UI 			of your application. 
                   The DOM is represented as a tree data structure.    
        Disadvantages of real DOM :
            Every time the DOM gets updated, the updated element and its children have to be rendered again to update the UI of our page. 
            For this, each time there is a component update, the DOM needs to be updated and the UI components have to be re-rendered.

When code updated in the JavaScript file, these things happen: 

    The browser parses the HTML to find the node with this id.
    It removes the child element of this specific element.
    Updates the element(DOM) with the ‘updated value’.
    Recalculates the CSS for the parent and child nodes.
    Update the layout.
    Finally, traverse the tree and paint it on the screen(browser) display.
    Recalculating the CSS and changing the layouts involves complex algorithms, and they do affect the performance.

**************************************************************************************************************************************************************
Note : Manipulating Real DOM is slow, but manipulating Virtual DOM is fast as nothing gets drawn on the screen.   

When anything new is added to the application, a virtual DOM is created and it is lightweight copy of Real-DOM.
React maintains two Virtual DOM at each time, one contains the updated Virtual DOM and one which is just the pre-update version of this updated Virtual DOM.
 Now it compares the pre-update version with the updated Virtual DOM and figures out what exactly has changed in the DOM like which components have been changed. This process of comparing the current Virtual DOM tree with the previous one is known as ‘diffing’. Once React finds out what exactly has changed then React-DOm updates those objects only, on real DOM. 

Note:  It is React-DOm's task to update the real DOM not react.

React uses something called batch updates to update the real DOM. It just means that the changes to the real DOM are sent in batches instead of sending any update for a single change in the state of a component. 

We have seen that the re-rendering of the UI is the most expensive part and React manages to do this most efficiently by ensuring that the Real DOM receives batch updates to re-render the UI. This entire process of transforming changes to the real DOM is called Reconciliation.

That is why React is much faster than other frameworks like anular or vue.

--------------------------------------------Differences between Virtual DOM and Real DOM---------------------------------------------
Virtual DOM	                                                                                            Real DOM 
It is a lightweight copy of the original DOM	                                                    It is a tree representation of HTML elements
It is maintained by JavaScript libraries	                                                        It is maintained by the browser after parsing HTML elements
After manipulation it only re-renders changed elements	                                            After manipulation, it re-render the 															entire DOM
Updates are lightweight	                                                                            Updates are heavyweight
Performance is fast and UX is optimised	                                                             Performance is slow and the UX 															quality is low
Highly efficient as it performs batch updates	                                                     Less efficient due to re-rendering of 														DOM after each update


--------------------------------------------------------------------------**Limitation of React**----------------------------------------------

1) React’s Rapid Evolution :
   Development Speed in React.JS can be challenging due to its rapid evolution, requiring developers to constantly update their skills and learn new techniques. 
2) JSX Complexity : It will be difficult for who those don't know about this.   
3) Integration Complexity with Existing Projects
    Integrating React into existing projects, especially those not initially built with React in mind, can be complex and time-consuming. It often requires significant refactoring and an understanding of both the existing codebase and React’s architecture.

-------------------------------------------------------------------** JSX **-----------------------------------------------------------------------

JSX : JSX stand for javascript XML. It is a templating langauge which allows us to write HTML code in inside JS file.

1) In react , We can return a single JSX only,  if u want to return multiple then u have to combine in a single elemnent using div or <> tag.
2) JSX should


---------------------------------------------------------------** Diffing algorithm ---------------------------------------------------------------

Diffing short for Differences Algorithm is used to differentiate the DOM Tree for efficient updates. React utilize diffing algorithm to identify the changes in the newly created virtual dom and previous version of dom after any changes are made.

How Diffing Algorithm Works?
        First, the content is rendered on the webpage and the DOM tree is created.
        On change in any content due to user interaction or change in data from API,React works on observable patterns, hence, whenever 	there is a change in the state, it updates the nodes in the virtual DOM
        In reconcilliation phase,  the old tree is compared to the newest version to determine the number of changes needed for updation.
        After determining the changes a set of optimized and minimal instruction is created to implement on the real DOM.
        These changes are then implemented and only content that changed is re-rendered on the web pages.

React checks the root elements for changes and the updates depend on the types of the root elements,

    Element in different types: Whenever the type of the element changes in the root, react will scrap the old tree and build a new one i.e a full rebuild of the tree.
    Elements of the same type: When the type of changed element is the same, React then checks for attributes of both versions and then only updates the node which has changes without any changes in the tree. The component will be updated in the next lifecycle call.

Advantages of Diffing Algorithm:
    It enhance the performance by updateing only the required components/ nodes.
    Results in faster respose while change by reducing the unwated and unnecessary re-renderings.

-----------------------------------------------------------React Hooks ----------------------------------------------------------------------------
  React Hooks provide ability to use , states and other React features with the help of functional component wihtout writing class components.   
  Hooks are introduced in React 16.8.

  Types of React Hooks
    The Built-in React Hooks are:

    State Hooks :  used for state management.  Ex- useState,  useReducer
    Context Hooks : Context hooks used to pass data from one component to another component without being passed as a prop. Solved Prop Drilling issue.   ex - useContext
    Ref Hooks : React Refs hooks creates the variable containing the information about DOM 
           ex-> useRef (Declares a reference to the DOM elements mostly a DOM Node.)
    Effect Hooks : used to handle side Effects in react : ex-> useEffect
    Performance Hooks : Performace hooks are a way to skip the unnecessary work and optimise the rendering preformance.
            useMemo: return a memoized value reducing unnecessary computations (Ex-sort , filter).
            useCallback: returns a memoized callback that changes if the dependencies are changed.( ex - passing callback from parent to child)
    
    Benefits of using Hooks
        Hooks can improve code reusability and make it easier to split complex components into smaller functions.

        Simpler, cleaner code ::::: Functional components with hooks are often more concise and easier to understand than class components.
        Better for complex UIs :::: Hooks make it easier to manage state and side effects in components.
        Improved maintainability			 :: Code using hooks is often easier to test and debug.

Why React Hooks ???????
  1) 'this' keyword :  u must have better understanding about this keyword. Implementing class components requires binding event handlers, adding complexity.
  2) Reusable stateful logics: Addressing higher-level concepts like Higher-order components (HOC) and render props, reusing stateful logic is challenging.
  Hooks offer a cleaner way to share stateful logic without altering component hierarchy, enhancing code organization and clarity.

Rules for using Hooks
    Only functional components can use hooks
    Hooks must be imported from React
    Calling of hooks should always be done at top level of components
    Hooks should not be inside conditional statements  

----------------------------------------------------** LifeCycle of a Component **--------------------------------------------------
Lifecycle of Components :  React lifecycle starts from its initialization and ends when it is unmounted from the DOM.
   Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.

The three phases are: Mounting, Updating, and Unmounting.
 
1. Initialization Phase : 
    In this phase, the developer has to define the props and initial state of the component this is generally done in the constructor of the class component.

1) Mounting Phase :  Mounting is the first phase of the component lifecycle when the initialization of the component is completed and the component is mounted on the DOM and rendered for the first time on the webpage.
  ex->  
   constructor():
     Method to initialize state and bind methods. Executed before the component is mounted.
   render() method:
    Responsible for rendering JSX and updating the DOM. It is responsible for mounting the DOM.  
  componentDidMount() Function :
    This function is invoked right after the component is mounted on the DOM i.e. this function gets invoked once after the render() function is executed for the first time.

2) Updating Phase : A component is updated whenever there is a change in the component's state or props.
   ex->
      componentDidUpdate() Function :
            Similarly this function is invoked after the component is rerendered i.e. this function gets invoked once after the render() function is executed after the updation of State or Props.  
            
3) Unmounting phase :  The next phase in the lifecycle is when a component is removed from the DOM
     The componentWillUnmount method is called when the component is about to be removed from the DOM.

---------------------------------------------------------------------** ES6 **-----------------------------------------------------

What is ES6?
    ES6 stands for ECMAScript 6.
    ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015, and is also known as ECMAScript 2015.

Why Should I Learn ES6?
    React uses ES6, and you should be familiar with some of the new features like:

    Arrow Functions
    Variables (let, const, var)
    Array Methods like .map()
    Destructuring
    Modules
    Ternary Operator
    Spread Operator

---------------------------------------------------------------** States and Props **------------------------------------------------    

state : State is the objects which hold the data about the component. EVerything in JS is object. state cannot be accessed and modified outside the component, and can only be used inside the component.
Props : props are the way to pass the data from one component to another component.

 PROPS                                                                                       STATE

The Data is passed from one component to another.                               	  The Data is passed within the component only.
It is Immutable (cannot be modified).	                                                It is Mutable ( can be modified) within component.
Props can be used with state and functional components.	                             The state can be used only with the state components/class component (Before 16.0).
Props are read-only.	                                                                    The state is both read and write.

-------------------------------------------------------** Babel and webpack **-----------------------------------------------------------
Babel is used to transpile the JavaScript code, making it compatible with older browsers, while Webpack is used to bundle and optimize the code


------------------------------------------------------ Hooks with Example ----------------------------------------------------------------

1) useState :   used for the state management
                It takes an initial value as an argument and return the updated state and a mehtod which is used for updating the state .

                 const [sum, setSum] = useState(0) // 0 is initial value, u can give [], {}, true/false


2) useEffect : used to handle side effect in functional component. Takes callback function as argument and depencies array as second argumnet.
              fetching data, directly updating the DOM and timers are some side effects. It is called every time any state if the dependency array is modified or updated.
                
              useEffect(()=>{
                console.log(`Count : ${count}`)
                }, [count])
       
      Note : useEffect() works similar as  componentDidMount, componentDidUpdate and componentWillUnmount(). By default, this function runs after every render of the component..      
      
      passing [] to dependencies array, we can achieve componentDidMount functionality in functional component using useEffect.

      return and callback function for unmounting.

      ex->

      useEffect(()=>{
        
        return ()=>{
            console.log('Unmounting)
            }
        })

Prop Drilling :  Prop drilling refers to the process of passing data from a parent component to deeply nested child components by passing props through intermediate components that do not need the data themselves.

to avoid prop drilling situation to use useContext hooks.

Reasons to Avoid Prop Drilling : 
       ***** Performance: Prop drilling can lead to unnecessary re-renders of intermediate components that don’t use the props themselves. This can degrade the performance of the application.
    Maintenance Complexity: Prop drilling makes components tightly coupled because intermediate components have to pass down props that they don't actually use. 
    Scalability Issues: As the component hierarchy deepens, prop drilling can lead toerror-prone code. It can be difficult to track which component needs which props, especially when the data needs to be passed through many layers.
    Code Readability: Prop drilling can significantly reduce the readability of the code.
  

3) useContext : The Context API in React provides a way to share values/data between components without having to pass props through every level of the tree. This helps to avoid prop drilling and simplifies state management across deeply nested components.

Drawback of UseContext ::

   **Performance Issues: Updating the context value can potentially cause unnecessary re-renders in consuming components, even if the changes are not relevant to them.
   ** Scaling Challenges: The Context API can be hard to scale and maintain for a large-scale app. You have to manage the dependencies and updates of multiple contexts, which can lead to code duplication and inconsistency.
   **Lack of Type Safety: Context values are not type-checked by default, which means that incorrect usage or changes in the shape of the context value may not be caught by the compiler or development tools. This can lead to runtime errors and debugging challenges.

4) useReducer :  A useReducer is a hook in React that allows you add a reducer to your component. 
                It takes in the reducer function and an initialState as arguments. 
                The useReducer also returns an array of the current state and a dispatch function.
            state: represents the current value and is set to the initialState value during the initial render.
            dispatch: is a function that updates the state value and always triggers a re-render, just like the updater function in useState.
            reducer: is a function that contain all the logic of how the state gets updated. It takes state and action as arguments and returns the next state.
            initialState: contain the initial value and can be of any type. 

Note: The action of clicking the button triggers a dispatch function that sends an information of type to the reducer function.
     The dispatching (clicking of the button) causes a re-render of the component. The reducer function conditionally matches the case with the type from the action object and updates the state accordingly after evaluation has taken place.

NOTE: At dispatch, the reducer function still holds the old value. This means that the dispatch function only updates the state variable for the next render.
    To check this out,we can log the state and action arguments to the console before the switch statement:   
    (https://www.freecodecamp.org/news/react-usereducer-hook/)      

    Performance Hooks :::

5) useCallback()::     
    The useCallback hook is a performance optimization mechanism in React that helps prevent unnecessary re-renders of child components when their parent component re-renders. 
    It achieves this by memoizing (caching) callback functions based on their dependencies. 
    If the dependencies haven't changed, the same function reference is returned, avoiding the creation of a new function object on every render.

    When to Use useCallback:
        Passing callbacks as props to child components: When a parent component passes a callback function as a prop to a child component, and the child component relies on the same callback reference across renders (e.g., for event handlers), useCallback can prevent the child from re-rendering unnecessarily due to a change in the parent's state or props.
        Callbacks that are expensive to create: If creating the callback function involves complex calculations or fetching data, using useCallback can improve performance by ensuring it's only created when its dependencies change.
        

        When Not to Use useCallback:
            Simple callbacks without dependencies: If a callback function is simple and doesn’t have any dependencies that change frequently, using useCallback might not be necessary. The overhead of memoization could outweigh the potential performance benefit.
            Callbacks used within the same component: If a callback is only used within the same component where it’s created, there’s no need for useCallback as React already handles component re-renders efficiently.

    ex->               function ParentComponent() {
                            const [count, setCount] = useState(0);
                            const handleClick = useCallback(() => {
                                setCount(count + 1);                       // suppose what if this calculation is so expensive, 
                            }, [count]);                                  // Only recreate handleClick when count changes
                            return (
                                <div>
                                <p>Count: {count}</p>
                                <ChildComponent onClick={handleClick} />
                                </div>
                            );
                            }

                            function ChildComponent({ onClick }) {
                            return (
                                <button onClick={onClick}>Increment</button>
                            );
                        }   
                            
     Note : whenever component re-render same reference of handleClick is passed to the child component and when count changes that time it will create new reference of handleClick and passed to child component.  

     Link : ( https://medium.com/@amanrags/usecallback-hook-in-react-2b9346380c04 )
     
6) useMemo :: usememo is react hooks which is used for performance optimization. 
             The useMemo hook in React allows you to memorize expensive computations so that they are not recalculated on every render. This is helpful when you have computationally heavy calculations that depend on certain variables, and you want to avoid performing these calculations unnecessarily when the component re-renders.

             Ex-> Filteing , Sorting me use karte hai mostly.
                  const UserList = ({ users, filter }) => {
                        const filteredUsers = useMemo(
                            () => users.filter(user => user.name.includes(filter)),
                            [users, filter]
                        );
                        return (
                            <ul>
                            {filteredUsers.map(user => (
                                <li key={user.id}>{user.name}</li>
                            ))}
                            </ul>
                        );
                        };


    Benefit of Performance Optimization Hooks (useMemo, useCallback)::   
          1. Avoiding unnecessary re-rendering(useCallback) or Recalculations( usememo ) :: 
          2. Optimizing Rendering Performance:
          3. Enhancing User Experience:
          
Reference ::  https://www.freecodecamp.org/news/how-to-work-with-usememo-in-react/#what-is-usememo

7) useRef ::   In React.js, useRef is a hook that allows you to create a mutable reference to an element or a value. Unlike the useState hook, updating a useRef does  not trigger a re-render of the component. It's commonly used for accessing and managing DOM elements directly, storing persistent values, or working with values that should not trigger a re-render.


Primary Uses of useRef
1. Accessing DOM elements:
 One of the most common use cases of useRef is accessing DOM elements. Instead of using document.getElementById or other DOM queries, you can use useRef to directly reference an element within your component.
 import React, { useRef } from 'react';

const ExampleComponent = () => {
  const inputRef = useRef(null);      // it creates an object hidden side ->   inputRef = {current:null} 

  const handleClick = () => {
    // Focus the input element on button click
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
};
2. Storing previous values
You can use useRef to store a value that persists across renders but doesn't trigger a re-render when updated. This can be useful when you need to keep track of previous values.  It helps in keeping track of a component's previous state or props to compare with current values.

3. Referencing Interval or Timeout IDs: Useful for keeping track of setInterval or setTimeout IDs, so you can clear them (like with clearInterval or clearTimeout) when needed.

// createRef use in class based component and useRef used in functional component.
Difference Between useRef and createRef ::
  1) The useRef hook takes an initial value as an argument and returns a ref object. React will set the ref object's current property to the initial value. If you don't pass an initial value, the value of the current property will initially be undefined. On the other hand, the createRef function doesn't take an argument. The ref object's current property will initially be set to null.

 2) The useRef hook will always return the same ref object when a functional component re-renders. On the other hand, the createRef function returns a different object on every render.

 Note :  Do not access or mutate refs during render. Accessing a ref during render leads to unpredictable results.

Reference : https://refine.dev/blog/react-useref-hook-and-ref/#using-refs-to-access-dom-elements-in-react
            https://medium.com/@zahidbashirkhan/react-useref-use-cases-with-examples-d7680d48a6e1


------------------------------------------------------** Error Boundaries **------------------------------------------------------------------
Error Boundary ::
    Error boundaries are React components that detect JavaScript errors anywhere in their child component tree, log them, and display a fallback UI.
   
    Fallback UI : Displaying a backup UI instead of actual UI which has been crashed. known as fallback UI.

    Error boundaries do not catch errors for the following events:

        Event Handlers 
        Asynchronous code(like fetching api)
        Server-Side Rendering
        Errors are thrown in the error boundary itself (mean in the same component where it is defined)

 Note : Try/Catch: One question which might be tickling in your mind is since Error Boundaries works like Catch, Why not just go with try/catch and why should you learn this new Concept. Well, the answer is try/catch is used with imperative code but As we know that React is declarative in nature, and Error Boundaries help in preserving the declarative nature of React.       
--------------------------------------------------------------------------------------------------------------------------------------------

Single page application

Long back when a client side made a request to server , server used to send HTML page.
now  Javascript run in the browser on the loaded page and manipulate the HTML structure(DOM) of the page

 

Why React : React follow these 2 approach that why react is so popular.

1.  Component Driven approach : I can break my entire application to small small component and can write code for it and later we can merge it.

2.  Declarative Approach :

JSX : JSX stand for javascript XML. It allows us to write the HTML code in JS.

React is converting these JSX into javascript behind the scene which can be understand by browser. (By using babel)

 

Every Javascript function return 1 value at a time. That why in react, we need a parent div or react fragment which enclose all the child element.

 

Props:

    Props are an objects which can be used to passing the data to another component.

 

State:

A state are object that hold all the data about the component, that cannot be accessed and modified outside the component, and can only be used inside the component.


Why key attribute is important :  In React, the key attribute is used to uniquely identify the elements in a list. When a list is rendered, React tracks the identity of each element, so that it can efficiently update the list if the elements change.


Reusable Components - Key Attribute

 

image.png
 


Why  Split Component :  Splitting The Components

 

image.png
 

 

Composition :  Concept of Composition

In React , building UI from smaller building block/component known as composition

 

image.png
 

 

Nested Component :

     Nested Components refer to components that are used within other components, enabling a modular approach to build UI in React.JS.


Wrapper Component :

a wrapper component refers to a component that encapsulates another component or elements within it.

 This encapsulation can serve various purposes such as adding extra functionality, modifying behavior, or simply styling the wrapped content.

 

One-way data binding:

  One-way means that the binding happens in one direction. In this case, changes in the data automatically update the UI, but changes in the UI do not automatically update the data. That’s why it is referred to as one-way data binding.

React achieves one-way data binding by using state and props.

Two way binding :

    Two-way data binding allows bidirectional data flow, meaning that changes in the UI automatically update the component’s state, and changes in the state automatically update the UI. In React, two-way data binding is achieved using controlled components


child to parent component
Lifting state UP :

Lifting state up is a technique where the state is moved to a common ancestor component, enabling sibling components to share and synchronize data. This approach allows for better communication between components and promotes a unidirectional data flow.

 


controlled vs uncontrolled component :

In a controlled component, form data is handled by a React component. 
The alternative is uncontrolled components, where form data is handled by the DOM itself.


stateless vs statefull component :

     The difference between stateful and stateless is that one has state, and the other doesn’t. That means the stateful components are keeping track of changing data, while stateless components always render the same thing or static things.


 

What happens when you don't use keys ?
if the key is missing, React must search through the entire list to determine which component has changed.

React will have to rely on other methods to determine which component has changed in the absence of keys. This can lead to performance issues and even unexpected bugs

 

What is the advantage of using keys?
     React will easily identify the element which has been addded or updated or removed from the list. It increases the performance.
 

Why you should not use index as keys?
The array index is not a stable identifier as it can change based on the ordering or the addition/deletion of elements from the list. This can cause issues when React tries to update the list, as it may not be able to identify the correct element to update or delete.

 

`value` prop on `select` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.

 

What is the main limitation of JSX?
You can't return more than one "root" JSX element (you also can'ts store more than one "root" JSX element in a variable
 We can avoid error using react fragement, enclose in root div or wrapper component.

 

 

How does useEffect hook works and solve the problem?
useEffect hook is part of React’s Hooks API. The core principle of this hook is to let you perform side effects in your functional components. The useEffect hook is a smooth combination of React’s lifecycle methods like componentDidMount, componentDidUpdate and componentWillUnmount.

 

What the hell are cleanup functions in react? Super important concept to prevent memory leakage. [FAVOURITE INTERVIEW QUESTION]

the cleanup function is an essential tool for managing resources in React applications, as it ensures that all operations performed by the effect are correctly closed. This not only protects our application from memory leaks, but also other potential issues.

 

Why do we use React Memo? What are the advantages of React Memo?
React. memo() is a Higher Order Component (HOC) that memoizes the passed in component along with the  props. It is used for performance optimization by preventing re-render of component unnecessary due to props or state changes.
What is the difference between React memo and use memo?
React. memo() and useMemo() are essential tools for performance  optimization . While React. memo() focuses on memoizing functional components to prevent unnecessary re-renders based on props,
 useMemo() is used to memoize expensive computations(sort,filter)  within functional components.
 

When should we not use React Memo?
 
If the props are static or primitive, using React.memo for the child component will solve the problem. However, problems arise when the prop is not static and is an object.
 

So, when parent component re-render and we have object/Array/function type props passed to the child component then using memo doesn’t solve our problem. Because, value of object will be new and child component will re-render. So, using React.memo to child component which takes object as a props doesn’t solve the re-rendering of child problem.
We can solve this problem using useMemo().

 

useMemo =>

In React useMemo Hook returns a memoized value and prevents the application from unnecessary re-renders. It is useful in heavy computations and processes when using functional components. It takes dependencies array as second argument to invoke useMemo() hook.

 

What is useCallback hook , where to use , what is advantages ??
 

The useCallback hook is a built-in hook in React that lets you memoize a function by preventing it from being recreated on every render.

 

When you define a function inside a component, it is recreated on every render, even if the component’s state or props have not changed. This can lead to unnecessary re-renders, which can slow down your application’s performance. The useCallback hook helps you avoid this problem by memoizing the function and only recreating it when necessary(when dependencies array changed).

 

What is the second argument of usecallback? What does it do?
Second argument of useCallback is dependencies array ,if any values in dependecies array changed so useCallback re-evalute the function.
 

Why doesn't useState get re-initialized when the function component gets re-evaluated or "state gets initialized only once " why ??
 

  React preserves a component’s state for as long as it is a part of DOM tree . If it gets removed from DOM , then React discards its state.

 

What is state scheduling ?
 

What is state batching . please explain with example
 
Batching, introduced in React 18, allows React to group multiple state updates that occur within a single task or event handler into a single batch. This means that React won't re-render the component after each individual state update but will instead wait until the end of the batch to perform the re-render.

Higher Order COmponent ??
  A higher-order component is a function that takes a component and returns a new component with enhanced functionality. It's essentially a function that wraps around a component to provide additional features or behavior.

Why HOCs ??
 - to share common functionality between components then we can create a HOC and share. similiar like prop Drilling.
 Suppose there is nested component. and many component using same function , then we have pass through props to avoid that we can use HOCs.

Bundling ??
 Bundling is the process of following imported files and merging them into a single file: a “bundle”. This bundle can then be included on a webpage to load an entire app at once.

Code Splitting :
It allows you to split your JavaScript bundle into smaller chunks. With code splitting, you can only load the code that is needed in a particular context, reducing the initial load time and improving the overall user experience. 
  Bundling is great, but as your app grows, your bundle will grow too. Especially if you are including large third-party libraries.
 A large bundle takes longer to load, especially on slower networks or mobile devices, leading to increased load times.
  To avoid winding up with a large bundle, it’s good to get ahead of the problem and start “splitting” your bundle. 

Code-Splitting is a feature supported by bundlers like Webpack, Rollup and Browserify (via factor-bundle) which can create multiple bundles that can be dynamically loaded at runtime.
 
For more Details-> ( https://medium.com/@shriharim006/code-splitting-in-react-optimize-performance-by-splitting-your-code-e3e70d0c3d91 )
                   https://www.youtube.com/watch?v=6CYCD7kE8Qs


 Render Props :  The Render Props is a technique in ReactJS for sharing code between React components using a prop whose value is a function.
 
 defer vs async :: With async, the script executes as soon as it's downloaded, potentially before the HTML document is fully parsed. With defer, 
 the script executes only after the HTML document is fully parsed, but before the DOMContentLoaded event.


 -----------------------------------Data Binding-----------------------------------------

 One-way data binding :: 
One-way means that the binding happens in one direction. In this case, changes in the data automatically update the UI, but changes in the UI do not automatically update the data. That’s why it is referred to as one-way data binding.

React achieves one-way data binding by using state and props.
Ex-> Increment button, click on the button , it is incrementing the state value and it is reflecting in the UI also.


Two-way data binding ::
Two-way data binding allows bidirectional data flow, meaning that changes in the UI automatically update the component’s state, and changes in the state automatically update the UI. In React, two-way data binding is achieved using controlled components.
Controlled components are form elements whose values are controlled by the state. They maintain a consistent, bidirectional data flow between the UI components and the data models.


*********************************      Debouncing vs Throttling   **********************************
Throttling is useful in scenarios like scroll event handlers, resize event handlers, or handling user input events like mousemove or keydown, where frequent calls can lead to performance degradation.

Debouncing is typically used in scenarios where a function is called repeatedly, such as in response to user input like typing.


********************************* ProtoType ***********************************

every function in JavaScript has a prototype property that references an object.
it allows us to share methods across all the instances of a function. 

function Animal (name, energy) {
  // const this = Object.create(Animal.prototype)

  this.name = name
  this.energy = energy

  // return this
}

const leo = new Animal('Leo', 7)
const snoop = new Animal('Snoop', 10)



Note:: when we r calling constructor with new keyword, it will create a this keyword for us then
commneted line we don't need to write (object creation and return part).
but if u r calling like this
const leo =  Animal('Leo', 7)

then u have to use those line otherwise it will not work.

By default, the prototype object will have a constructor property which points to the original function or the class that the instance was created from


*********************************** Validation in React **************************************************

1. Using PropTypes for Type Checking
    PropTypes allow you to validate the type and presence of props passed to your components.
    This is useful for ensuring that the data your components receive is of the expected type.

    Ex-> 
    MyComponent.propTypes = {
            name: PropTypes.string.isRequired,  // name must be a string and required
            age: PropTypes.number.isRequired,   // age must be a number and required
            isMember: PropTypes.bool            // isMember must be a boolean
};

2. Using Controlled Components and State
      For form validation, you can use controlled components where the form data is handled by the React state. 
      You can validate the form data as the user types or when they submit the form.(manually validating like length of password, 
      value is there or not , etc.  using if else cases)

3.  Custom validation  ::  allows you to implement business-specific logic (based on requirement like u have implemented for LDAP URL)  

4. Using the library like formik or react-hook-form

`

Reference :

HOC :  https://medium.com/@vitorbritto/react-design-patterns-compound-component-pattern-ec247f491294
Code Splitting : https://medium.com/@shriharim006/code-splitting-in-react-optimize-performance-by-splitting-your-code-e3e70d0c3d91
OTP Generator : https://medium.com/@tejas.shirnalkar/building-otp-and-password-inputs-with-validation-in-react-step-by-step-fda703742088
React Interview : https://github.com/sudheerj/reactjs-interview-questions?tab=readme-ov-file#when-to-use-a-class-component-over-a-function-component
Controlled vs uncontrolled : https://www.freecodecamp.org/news/what-are-controlled-and-uncontrolled-components-in-react/
useReducer : https://www.freecodecamp.org/news/react-usereducer-hook/
Data Binding : https://handsontable.com/blog/understanding-data-binding-in-react

React feaure must know : https://betterprogramming.pub/these-are-the-concepts-you-should-know-in-react-js-after-you-learn-the-basics-2023-edition-9594f3d0f6d3
throttling :: https://www.freecodecamp.org/news/throttling-in-javascript/

React Best Practices : https://www.tatvasoft.com/blog/reactjs-best-practices/
