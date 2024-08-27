  1) What is Javascript ??
  JavaScript is a scripting/Programing language for creating dynamic web page content. We can updated HTML and CSS using Javascript.
  Javascript is a synchronous, single-threaded language.
 
Single Threaded :
This means that it has only one call stack and one memory heap. Only one set of instructions is executed at a time.

Javascript is Synchronous and blocking in nature. meaning that code is executed line by line and one task must be completed before the next one begins.

Javascript is loosely typed language.

Loosly Typed/ Weakly Typed Language :
               In a loosely typed language, data types are flexible and implicit conversions are often performed automatically.
         Variables can change their data type during execution without explicit casting.
 
Strongly/strict Typed Language : 
 
     Variables have fixed data types and cannot change their type implicitly.
   Tightly typed languages often require explicit type conversions and provide better type safety.

JAVA   VS   JAVASCRIPT :
    Javascript is a client side scripting language while Java is a object oriented programming language.

Data Types in Javascript :
    Primitive Data Type : Number, Strings, Boolean, Null , Undefined
    User Defined Data Type : Object, Array, Function
 
----------------------------------------------------------------------------------------------------

  2) Global Execution Context :  whenever a javascript code run, there is a global execution context has been created and this GEC been pushed into
     call stack.

     Every GEC has 2 part.  
      A) Memory Component (varibale environment)
      B) Code Component (thread of execution)

    *Execution Context*
       Each execution context has two phases:
       A)  the Memory Creation phase and 
       B) the execution phase.


4. this keyword ???
   this point to the obj that is calling the method.
   In other words, the this references the object that is currently calling the function.
   
 Note:   GEC is cretaed along with window and this object.   window===this //true
         this is not bind to arraow function/. In arrow function this point to parent scope's object.
         In strict mode this point to undefined and in non strict mode this point to global object.


'5. Arrow functions

Arrow functions create closures over the this value of the enclosing execution context. 
In arrow functions, JavaScript sets the this lexically. 
In a regular function, the this value is dynamically scoped, which means it is determined by how the function is called. 
In contrast, arrow functions inherit the this value from the enclosing lexical context. 
This means that the this value inside an arrow function is the same as the this value outside the function.'        

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
'
Everything in Javascript happens inside an Execution Context.
Execution Context :  Execution Context has two main component .
         A)  Memory Component (Variable Environment ) : All the variable and function define in it as key value pair.
        B)  Code component (Thread of Execution ): Here this the place where all the code is run by line by line.



Whenever is a JS program is run , execution context is being created known as global execution context. Every GEC has been created in two phases.

A) Memory Creation Phase : This is the first phase and in this phase JS engine read all the program and assign memory to variable and function inside the memory component/gloabal space. Initially all the variable assigned as undefined value by JS engine
and for function it copied all the code of function and assign memory to it.


B) Code Execution Phase : In this phase JS Engine read all the code line by line again and assigned actual value to variable and do actual code execution. 
In this phase if it encounter the function then it do nothing till function call.

: whenever a function is invoked, a new execution context has been created inside code component and it follow the same process as follow global context execution. 
Like memory creation phase(passed parameter is also a variable) and code execution phase.

Whenever a return statement encounter it means now return the control of the program, to the place where this function was invoked and this local execution context will be removed from memory.

when all the code is completed then global context execution goes off (deleted). 

Note : If a function is assign to a variable then it will treat as a variable (like initially it will be undefined, then function will be assigned)   
Note : all the execution context has the reference to it's parent execution context (lexical environment). (scope chain)'


7. How does JS engine manage all these things ?
 Ans:  JS engine has one call stack. using call stack it handle all the execution. 
 First GEC is pushed into stack and whenever a function is invoked means a local execution context will be created so that
  will be pushed into stack once these context perform all the operation then it will popped out from stack and 
  control goes back to the top() of the stack's execution context.'

Call Stack maintains the order of execution of execution context.
also known as Program stack, control stack, runtime stack, machine stack, Execution Context Stack.

------------------------------------------------------------------------
Parameter vs Arguments :   
Argument :  An argument is a value which is passed to a function when the function is called.
Parameter:  function which receive the value in function definition known as Parameter.

Note : we can use rest parameter (...) to receive a parameter in form of array.

-------------------------------------------------------------Hoisting-------------------------------

Hoisting is a phenomena where u can access variables and functions even before you have initialized it.

This is happening, answer is lying in memory creation phase where all variable inside the code initialized with undefined and 
function copied being created inside the memory.

So variables and regular/normal function both are hoisted in JS.
ex->

x()   // 'Hello'

function x(){
    console.log('Hello')
}

If u r using arrow function or acting function as variable then it is treated as a variable and 
it is stored in memory  with undefined value (in first phase). In memory creation phase it will be stored value as undefined.
then if we r trying to access it it will throw an error.

x()    //x === undefined

const x = ()=> { console.log('something')}              
or
const x = function (){
    console.log('hello')
}     //x === undefined

 
Note :
     Even JS file is empty , global execution context has been created and it created a window and this global object which has lot of inbuilt method and 
     function which can be use anywhere in program. These functionality is given by JS engine.

           window === this (at global level)

Global Space : any js code which is not in any inside function and It is attached to global object (window)

Let and const declarations are Hoisted. These are in temporal dead zone for the time being. 
Memory is allocated to the variables but not in global space , they are stored in a different memory space(script) than global. 
You cannot access it without initialize first.

Temporal Dead Zone :

The Temporal Dead Zone (TDZ) refers to the time period between allocating memory and the actual declaration of a variable. 
During this time, accessing the variable results in a Reference Error.

TDZ is the time since this let and const variable are hoisted and till it is initialized some value. That time known as TDZ.

with let keyword u cannot declare same variable two times.
 It will throw syntaxError.but in case of var it is working.

 let x = 10;
 let x = 20;  // error , same for const

 var x = 10;
 var x = 20;  // work
 
-------------------------------------------------- Undefined vs not defined -------------------------------------------------------------
Undefined : 
           In JavaScript, "undefined" is a primitive value that is automatically assigned to variables that 
           have been declared but not initialized. It indicates that the variable has been declared but has no assigned value. Memory is allocated to that variables.

Not Defined :

"Not defined" typically refers a variable or function, has not been declared or does not exist or memory has not been allocated to that variable.



----------------------------------------------------------Scope--------------------------------------------------------------------------------

Scope : Scope means where u can access a variable or function.

Scope is directly dependent on the lexical environment.

lexical environment : lexical  environment is the local memory/scope along with the lexical environment of its parent.

lexical means in heirerchy or in a sequance manner or in a order.
In execution context along with variable and function storing, there is a reference of its lexical parent's also stored.

Scope Chain :  
     In JavaScript, the scope chain refers to the hierarchy of scopes that are accessible to a particular piece of code. 
      Chain of lexical environment known as scope chain. 
      When you declare a variable or a function in JavaScript, it is accessible within a certain scope, which can be a function, a block, or the global scope.

Here's how the scope chain works:

Global Scope: This is the outermost scope in JavaScript. Any variables or functions declared outside of any functions or blocks belong to the global scope. 
    These variables and functions are accessible from anywhere in your code.

Local Scope: When you declare a variable or a function inside a function or a block, they belong to the local scope of that function or block. 
This means they are accessible only within that specific function or block and are not visible from outside.

Nested Scope: If you have nested functions or blocks, each inner scope has access to variables and 
functions declared in its outer scopes. This forms the scope chain. So, a variable declared in the outer scope is accessible in the inner scopes, 
but the reverse is not true.

 -------------------------------------------------------------Error----------------------------------------------------------------------

Syntax-Error:
      A SyntaxError is an error that occurs when you have written code that violates the rules of the JavaScript language syntax.
     It typically indicates that there is a mistake in the structure of your code that prevents it from being parsed correctly by the JavaScript engine.

Ex -  let let = 10;
          const a;   // syntax Error

     let a = 10;

    let a = 100;  // syntax Error

Type-Error:

        In JavaScript, a TypeError is an error that occurs when a value is not of the expected data type. 
        It typically happens when you try to perform an operation on a value that is not supported for that type,
         or when you try to access properties or methods on a value that is null or undefined.
         when attempting to modify a value that cannot be changed; or
         when attempting to use a value in an inappropriate way.

Ex -   const a;
        a= 1000; // typeError

        let a = 1
        console.log(a())  //typeError

Const type variable should be declare and initialize on the same line;

Reference Error :

A Reference-Error is an error that occurs when you try to access a variable or function that is not defined.

when occurred:
1) Misspelled variable and function
2) trying to access a variable outside the scope

EX-     console.log(x)  // Reference Error bcz of demporal dead zone
        let x = 100;  

 -----------------------------------------------------------Block Scope--------------------------------

Block :
      a block is a set of statements enclosed within curly braces. It is used to combined multiple javascript statement into one group.

Block Scope:
     Block scope refers to the scope of variables which can be accessed within this block only. let and const has block scope.

Variables declared using let and const are block-scoped, meaning they are accessible only within the block where they are defined in, including any nested blocks.

Shadowing :
    In JavaScript, shadowing refers to the situation where a variable declared within a nested scope has the same name as a variable in an outer scope. 
    This can lead to unexpected behavior because the inner variable "shadows" or hides the outer variable within its scope.

 function x(){
    let x  = 10;
    function y(){
        let x = 20;
        console.log(x) //x=20,   x is shadowing of outer scope's x
    }
    console.log(x); //x=10;
 }
 

ILLegal Shadowing :

     Illegal shadowing in JavaScript typically refers to unintentionally redeclaring a variable within the same scope, which leads to confusion or errors.

Ex-     let a=100;
        {
         var a = 100;  // error
          }

-------------------------------------------------------------------Closure--------------------------------------------------------------------

Closure : Closure is a function along with it lexical scope bundle together known as closure.

 2nd -> A closure is a combination of a function along with the lexical environment bundled together known as closure.

 

When a function is defined within another function, the inner function has access to the outer function's variables even after the outer function has finished executing. This is because the inner function maintains a reference to the variables of the outer function's scope, forming a closure.
 

Note : They are commonly used to create private variables, implement data hiding.

function outerFunction() {

  let outerVariable = 'I am from the outer function';
  function innerFunction() {
    console.log(outerVariable); // Inner function has access to outerVariable
  }
  return innerFunction;
}

let closure = outerFunction();

closure(); // Output: "I am from the outer function"

Whenever a function is returned in case of closure ,it always remember it's lexical scope., means it return complete closure not only that function.
 
----------------------------------------------------Functions------------------------------------------------------

Function :  A reusable block of code that  perform a particular task known as function.

Type of Function : 

Function Statement or function declaration:  
               Function Declaration is the traditional way to define a function.
               We start declaring using the keyword “function”. Then we write the function name and the parameters.
 
        if we r creating a function using function keyword and not assigning in any variable that is function statement.

The Function Statement or function declaration is hoisted, which means it can be called before it's defined in the code.

Ex - function add(){
    console.log('Function Statement')
}

Function expression :    if we r creating a function using function keyword and assigning return value in any variable that is function expression.
                       Here, the whole function is an expression and the returned value is stored in the variable. We use the variable name to call the function.

 const x = function (){
 console.log('Function Expression')
 }
 x();

It's not hoisted. You must define it before calling it.


 

Const add = function (){……..} 
 or  const add = ()=>{…….}

The main difference in both is hoisting , function statement can be hoisted but function expression cann't be hoisted bcz it is treated as a variable 
 and intially it will store undefined.

 add();   // this will throw error , undefined is not a function

 const add = function(a,b){
       return a+b
 }
 

 
    Named function Expression:

    A named function expression is a type of function expression where the function being defined has a name.

    Ex->    const add = function xyz(){
        Console.log('add called')  // give no error return function
        }

        add() // 'add called'
        xyz() // ReferenceError: xyz is not defined

    const add = function xyz(){
         Console.log('Hello XYZ calling', xyz())  // give no error return function
         }

But you can call add() not xyz() gives reference error.

Anonymous Function :

A function that does not have a name known as a Anonymous function.
 Anonymous functions are commonly used as callback functions and used as value also.

Ex-> function (){………}

 
First Class Function/citizens : 
        The ability of function to be used as value, can be passed as argument in another function and 
        can be returned from a function known as first class function. It is a programming concept. Many languages supports it.

High Order Functions : 
             Higher-Order Functions are functions that can accept other functions as arguments and return functions as a result known as HOF, 

     ex->        fucntion add(a,b){
                return a+b
             }

      const sum =  function getSum(a,b){
            return add(a,b);
        }

----------------------------------------------------------------------------------Callback and Promises--------------------------------------------------

Callback Function : 

A callback function is a function that is passed as an argument to another function.

Advantages :

   1.  Asynchronous Operations: Callback functions are essential for handling asynchronous operations in JavaScript, such as fetching data from a server,
       reading files, or handling user interactions.

Disadvantages:

Callback Hell:  A common issue associated with callback functions is callback hell, also known as the pyramid of doom. 
If there are multiple callback is nested in this case callback hell is created.
 
Javascript is a synchronous single threaded language. It means it can execute a single instruction in a specific order.
using callback we can make it asynchronous. Javascript has one call stack or main thread.

--------------------------------------------------------------------------Promises-------------------------------------------------------------------------

Promise :

A promise is an object representing the eventual completion or failure of an asynchronous operation.  To resolve callback hell issue Promises is introduced.

It allows you to handle asynchronous operations more easily , especially when dealing with multiple asynchronous operations that depend on each other or 
 need to be executed in a specific order.

It takes 2 argument resolve and reject.
If there are multiple promise which are independent so we can pass as an array in promise.
 New Promise.all([p1,p2,p3])

Advantage :
                       1. Error Handling
                       2. Code readability
                       3. avoid callback hell
                       4. chaining multiple asynchronous operations
Disadvantage : 
                      1.  Promise Hell ( if there are multiple async operation and not handling In proper way)

Dependent Promise : 
          Dependent promises, also known as chaining promises, refer to a pattern in asynchronous programming where one promise depends on the result of another promise. This pattern allows you to execute asynchronous operations sequentially, ensuring that the next operation doesn't start until the previous one has completed successfully.
          In this case we can return dependent promise.

Ex->
    let myPromise = new Promise(function(resolve, reject) {
    // some code that takes time, like loading data
    let success = true; 

    if (success) {
        resolve("The data has loaded successfully!");
    } else {
        reject("There was an error loading the data.");
    }
    });

        myPromise.then(function(message) {
        // This runs if the promise is fulfilled
        console.log(message); 
        }).catch(function(error) {
        // This runs if the promise is rejected
        console.log(error); 
        });

 Chaining Promises : Promise chaining is the practice of sequentially executing asynchronous operations using multiple then() calls on a Promise.

 Ex->
    fetchData()
    .then(function(data) {
    console.log("Data received:", data);
    return processData(data); 
    })
    .then(function(processedData) {
    console.log("Processed data:", processedData);
    })
    .catch(function(error) {
    console.log("Error:", error);
    });


NOte : Promises have three states: pending (initial state), fulfilled (successful completion), and rejected (failure).
       Use promise.all() if you want to resolve the promise only if all of the promise objects resolve and reject if even one rejects.


Async-Await : 

async and await are modern JavaScript features introduced in ECMAScript 2017 (ES8) that simplify asynchronous code. 
They provide a more readable and intuitive way to work with asynchronous operations compared to traditional callback-based or promise-based approaches.

 Advantages of Async and Await
        Improved Readability: Async and Await allow asynchronous code to be written in a synchronous style, making it easier to read and understand.
        Error Handling: Using try/catch blocks with async/await simplifies error handling.
        Avoids Callback Hell: Async and Await prevent nested callbacks and complex promise chains, making the code more linear and readable.
        Better Debugging: Debugging async/await code is more intuitive since it behaves similarly to synchronous code.

Garbage Collection :

   Garbage collection in JavaScript is the process by which the JavaScript engine automatically reclaims memory that was previously allocated to objects
    that are no longer needed or accessible.

Note : EventListeners are heavy , we need to remove it after using it because it form closure and has a callback function.

 
---------------------------------------------------------- Currying ------------------------------------------------------------
Currying : 
              Currying in JavaScript is a process that allows you to transform a function with multiple arguments into a sequence of nesting function, each taking a single argument.


              This creates a chain of functions, where each function returns another function until the final result is achieved.

Advantages of currying : 
    It reduces the chances of error in our function by dividing it into multiple smaller functions that can handle one responsibility.
    It makes the code more readable
    Creating high order function
 
Ex->
Const add = function (a){
        return function(b){
                    Return a+b ;
                    }
                 }
            
                 add(a)(b)

-------------------------------------------------------- Event Loop ---------------------------------------------------------------------------------------                 
        
Event Loop :  Event loop is a mechanism that allows JavaScript to perform non-blocking I/O operations despite being single-threaded.
            Event loop continuos monitoring call stack and callback queue, whenever call stack is being empty and any task is waiting for executing in callback
            queue, it immediately popped out from CBQ and put into the call stack.

 
Note :  THere is a browser web api. Browser has more functionality that JS which we r dealing with daily but we don't know.
         console.log(), DOM api, Fetch(), setTimeout(), localStorage() etc...   all these feature or functionality is provided by browser web api not by JS.

         there is a microtask queue is also there which is highest priority than callback queue. But few important task take place in microtask queue like 
          data fetching, Promises, MutationObserver

macrotasks (callback queue): setTimeout, setInterval, setImmediate, requestAnimationFrame, I/O, UI rendering
microtasks: process.nextTick, Promises, queueMicrotask, MutationObserver

Note : due to highest priority, if microtask is getting continuously promises, in this case callback queue never gets a chance to run then this Scenario
       knows as Starvation.

       Event Loop :

In JavaScript, the event loop is a crucial mechanism for managing asynchronous operations and handling events. It allows the execution of non-blocking code.

The event loop continuously monitors the call stack and the Callback queue and microtask queue.

   When the call stack is empty (i.e., no code is executing), the event loop takes the first event from the microtask queue(if anything is there otherwise it will pick from callback queue) and
    pushes callback function onto the call stack.

Microtask queue Vs Callback Queue:

                   Microtask queue has the higher priority than callback queue. Callback function from promises and mutable observation(DOM changes) are pushes into microtask queue. 
                   Apart from that all other callback function (setTimeout, Dom api…etc) pushes into callback queue.

Whenever any web api's uses inside javascript (setTimeout, fetch() ) it is registered to web api's and once the timer expire or promises are resolved then 
it pushesh into the queue (callback or microtask queue).

 
----------------------------------------------- Undefined Vs Not Defined :---------------------------------------------------------------------------------
Undefined: undefined means variable is declared but not assigned any value but memory is allocated to this variable.
Not Defined:  not defined means variable is not declared hence not memory is allocated to particular variable.

 

Global Variable: Global variables are those variables which is defined outside the functions.
 These variables have a global scope, so they can be used by any function without passing them to the function as parameters. 

NULL:   Null is a special value in JS that represents empty value or has no value.

Delete:  using delete we can delete any property(or element) from object or objects. But we cannot delete object or array.
                  

This :  ‘this’ stores the current execution context of the JavaScript program. On the global space window === this

What are the types of Pop up boxes available in JavaScript?

There are three types of popup-boxes available in JavaScript.
    Alert : An alert dialog box is mostly used to inform or alert the user by displaying some messages in a small dialogue box
    Confirm : A confirm box is often used if you want the user to verify or accept something.
                When a confirm box pops up, the user will have to click either "OK" or "Cancel" to proceed
    Prompt : A prompt box is often used if you want the user to input a value before entering a page.
           When a prompt box pops up, the user will have to click either "OK" or "Cancel" to proceed after entering an input value.
 

What is the difference between an alert box and a confirmation box?

An alert box will display only one button which is the OK button. It is used to inform the user about the agreement has to agree.
 But a Confirmation box displays two buttons OK and cancel, where the user can decide to agree or not.

--------------------------------------------------------------innerHTML Vs innerText------------------------------------------------

When you set innerHTML, you are providing new HTML content, which can include HTML tags, text, or a combination of both.

In case of InnerText HTML tags within the content are treated as literal text and displayed as such

------------------------------------------------------Event Bubbling, Event Propagation----------------------------
Event Bubbling : 
       Event Bubbling is a concept in the DOM where an child node receives and event and it propagated to its parent and ancestors, untill it reaches to the root element.
Consider a situation an element is present inside another element and both of them handle an event.
 When an event occurs in bubbling, the innermost element handles the event first, then the outer, and so on.

 How to Stop the Propagation ????

    button.addEventListener('click', (event) => {
        event.stopPropagation()
        console.log("button was clicked")
    })

------------------------------------------------------------------------ Type of Storage in browser -------------------------------------------

The Web Storage API is a simple syntax for storing and retrieving data in the browser

Local Storage :

The localStorage object stores data with no expiration date.

The data is not deleted when the browser is closed, and are available in future sessions.

Session Storage :

The sessionStorage object stores data for only one session.

(The data is deleted when the browser is closed).

Cookie :     

A Cookie is a piece of data from a website that is stored within a web-browser that the website can retrieve at a later time.

By default, the cookie is destroyed when the current browser window is closed, but it can be made to persist for a length of time after the page is closed. Some cookies are ‘session cookies’, which means they only exist when your browser is open and are automatically deleted when you close your browser or quit the app.

Other cookies are ‘persistent cookies’, meaning they survive after your browser or app is closed and can be used by websites or apps to recognize your computer when you re-open your browser or app later.


-------------------------------------------------------------------------API's--------------------------------------------------------------------------

API stands for Application Programming Interface.

A Web API is an api for the Web.

A Browser API can extend the functionality of a web browser.

A Server API can extend the functionality of a web server.

 

History.

back()

Loads the previous URL in the history list

forward()

Loads the next URL in the history list

go()

Loads a specific URL from the history list


 ****************************************** JS Coding Question ***********************************************

 Coding Interview Questions:

Write code to determine whether or not a string is a palindrome   && for Anagram also.
Generate any permutation of a String in an iterative and recursive manner?
What is the best way to find the first non-repeated character in a String?

Why is a Char array better than a String for storing passwords?  ->  

    Using a char[] for storing passwords is considered more secure because it gives you control over the contents in memory, allowing you to overwrite and erase the password data once it is no longer needed. In contrast, a String is immutable and can leave the password lingering in memory for an indeterminate amount of time, increasing the risk of exposure.

How can you find the duplicate number in an array of numbers from 1 to 100?

Find the number that is not present in the second array given two arrays: 1,2,3,4,5 and 2,3,1,0,5.

How can you find the top two most significant numbers in an array?

In a single pass, how do you find the middle element of a linked list?

In a single pass, how do you find the 3rd element from the bottom?

How do you reverse a singly linked list?

How can you figure out how deep a binary tree is?

Write a code to determine whether or not a tree is a binary search tree.

In a binary tree, how do you perform preorder traversal?

Write a programme that uses quick sort, Binary sort, Bubble sort, Insertion sort to sort numbers in a specific order.

How do you sort number in JS?

Create a code to implement Bubble Sort.

In a range of min to max, write code for generate random numbers.

Create an algorithm to determine the frequency in which a word appears in an article.
