-----------------------------------------------------------------------** DOM **-----------------------------------------------------------------------------------



DOM :    DOM stands for Document Object Model.

When a web page is loaded, the browser creates a Document Object Model of the page, which is a tree-like representation of the HTML document.
 

Document: Refers to the entire HTML document, including the elements, attributes, and text content.

Element :  Elements are defined by HTML tags, which enclose content and provide structure to the document.

Attribute: Attributes provide additional information about HTML elements and modify their behavior or appearance.


Text Content :  Text content refers to the textual information enclosed within HTML elements.

Object: Each element in the HTML document becomes an object in the DOM. 
      These objects can be manipulated and interacted with using programming languages like JavaScript.
 

Model: The structure of the document is represented as a tree-like model. 
       Each node in the tree corresponds to an object in the document, such as an element, attribute, or text node.
    The DOM allows developers to dynamically access and manipulate the content, structure, and
    style of a web page using scripting languages like JavaScript. 
    This enables tasks such as adding or removing HTML elements, changing element attributes, responding to user interactions, 
    and updating the content of the page without requiring a full page reload.
    
The HTML DOM Document Object =>
    The document object contain all information/data about DOM which is helpful for accessing the data.
    
    If you want to access any element in an HTML page, you always start with accessing the document object.

    //Get the data
getElementByClassName
getElementByTagName
getElementById

//Adding & deleting Child
   document.createElement()
   document.removeChild()
   document.appendChild()

   `The easiest way to modify the content of an HTML element is by using the innerHTML property.
   document.getElementById(id).innerHTML = new HTML`

//==================================================** The Difference Between an HTMLCollection and a NodeList**=================================================
    A NodeList and an HTMLcollection is very much the same thing.

    Both are array-like collections (lists) of nodes (elements) extracted from a document. The nodes can be accessed by index numbers. The index starts at 0.

    Both have a length property that returns the number of elements in the list (collection).

    An HTMLCollection is a collection of document elements.

    A NodeList is a collection of document nodes (element nodes, attribute nodes, and text nodes).

    HTMLCollection items can be accessed by their name, id, or index number.

    NodeList items can only be accessed by their index number.

    An HTMLCollection is always a live collection. Example: If you add a <li> element to a list in the DOM, the list in the HTMLCollection will also change.

    A NodeList is most often a static collection. Example: If you add a <li> element to a list in the DOM, the list in NodeList will not change.

    The getElementsByClassName() and getElementsByTagName() methods return a live HTMLCollection.

    The querySelectorAll() method returns a static NodeList.

    The childNodes property returns a live NodeList.

Note :: 
    An HTMLCollection may look like an array, but it is not.

    You can loop through the list and refer to the elements with a number (just like an array).

    However, you cannot use array methods like valueOf(), pop(), push(), or join() on an HTMLCollection.