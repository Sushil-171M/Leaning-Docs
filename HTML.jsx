 `
 what is HTML ??
 HTML stands for Hyper Text Markup Language.  It is a standard text formatting language which is used to create and display pages on the Web. 

 What are tags ??
    HTML tags are the keywords that define how your data must format and display your web page. 
    Almost all tags contain 3 parts, an opening, content and a closing tag. 
    For example, <html> is the opening tag and </html> is the closing tag.

 Do all HTML tags have an end tag?
    No. There are some HTML tags that don't need a closing tag. For example: <image> tag, <br> tag. 

What is formatting in HTML ??
    The HTML formatting is a process of format the text for a better look and feel. It uses different tags to make text bold, italicized, underlined.

Here are some more differences between HTML elements and tags::
    Element composition
    An element is made up of an opening tag, content, and a closing tag. If an element has no content, it's called an empty element. Elements can also be nested,
     meaning one element can contain another element. 

    Tag composition
    Tags are made up of a tag name, content, and attributes. The tag name is between angle brackets, and attributes are name/value pairs that affect the tag.
     Opening and closing tags are distinguished by the presence of a slash. While most tags come in pairs, some tags, like the tag, don't have a closing tag. 

     How to create a nested webpage in HTML?
     The HTML iframe tag is used to display a nested webpage. In other words, it represents a webpage within a webpage. 
     The HTML <iframe> tag defines an inline frame. For example:     
    
Explain the layout of HTML ??
    Every website has a specific layout to display content in a specific manner.

    Following are different HTML5 elements which are used to define the different parts of a webpage.

    <header>: It is used to define a header for a document or a section.
    <nav>: It is used to define a container for navigation links
    <section>: It is used to define a section in a document
    <article>: It is used to define an independent, self-contained article
    <aside>: It is used to define content aside from the content (like a sidebar)
    <footer>: It is used to define a footer for a document or a section

 How to make a picture of a background image of a web page?
    To make a picture a background image on a web page, you should put the following tag code after the </head> tag.
        
        <body background = "image.gif">  

Does a <!DOCTYPE html> tag is a HTML tag?
     No

If I do not put <!DOCTYPE html> will HTML 5 work?
     No, the browser will not be able to identify that it is an HTML document 









*************************************************************************************************************************************************************************
                                                          CSS
*************************************************************************************************************************************************************************     

1. What is CSS?
  CSS stand for Cascading Style Sheets. CSS allows you to apply the styles to the web pages.

  Why CSS ??
    1) Offline Browsing: CSS can store web applications locally with the help of an offline cache. Using of this we can view offline websites.
    2) CSS save times also , suppose u have created a global css and we can reuse this css in anywhere in the code.

   Advantage :
   1) user experience Enhance, 
   2) offline store kiya ja skta hai like cache and we can CSS effect see offline also  .

   Disadvantage :
     2) Browser compatibility


6. How is CSS different from CSS 3?
S.No.

                     CSS                                                                                                         CSS3(latest Version)

                                                                                                   
2	Responsive designing is not supported in CSS	                                                     CSS3 is the latest version, hence it supports responsive design.
3	CSS cannot be split into modules.	                                                                 Whereas, whereas CSS3 can be breakdown into modules.
4	Using CSS, we cannot build 3D animation and transformation.	                                              We can 
5	CSS is very slow as compared to CSS3	                                                                 Whereas, CSS3 is faster than CSS.

7. List the CSS Frameworks.
The best CSS frameworks are:

        Bootstrap
        Foundation
        Bulma
        UIKit
        Semantic UI
        Materialize
        Pure
        Tailwind CSS


 9. In how many ways can we add CSS to our HTML file?
    Cascading Style Sheet(CSS) is used to set the style in web pages that contain HTML elements. It sets the background color, font size, font family, color, … etc properties of elements on a web page.
    There are three types of CSS which are given below:

Inline CSS:
         Inline CSS contains the CSS property in the body section attached with the element known as inline CSS. This kind of style is specified within an HTML tag using the style attribute.

ex ->   In HTML :  <h1 style="color: green;  font-size: 60px;   text-align: center;">  GeeksforGeeks  </h1>
         IN react :  <div style={{ color: 'blue', lineHeight : 10, padding: 20 }} >

Internal or Embedded CSS: This can be used when a single HTML document must be styled uniquely. The CSS ruleset should be within the HTML file in the head section i.e the CSS is embedded within the HTML file.
External CSS: External CSS contains a separate CSS file which contains only style property with the help of tag attributes (For example class, id, heading, … etc). CSS property is written in a separate file with .css extension and should be linked to the HTML document using the link tag. This means that for each element, style can be set only once and that will be applied across web pages.       


Which type of CSS holds the highest priority?
    Inline CSS has the highest priority, then comes Internal/Embedded followed by External CSS which has the least priority. Multiple style sheets can be defined on one page. If for an HTML tag, styles are defined in multiple style sheets then the below order will be followed.

What are CSS Selectors?
  CSS Selectors: 
      CSS Selectors are used to selecting HTML elements based on their element name, id, attributes, etc. It can select one or more elements simultaneously.

element selector: 
     The element selector in CSS is used to select HTML elements which are required to be styled. In a selector declaration, there is the name of the HTML element, and the CSS properties which are to be applied to that element is written inside the brackets {}.

Syntax:
     element_name {
       // CSS Property
     }

id selector: The #id selector is used to set the style of the given id. 
            The id attribute is the unique identifier in an HTML document. The id selector is used with a # character.

Syntax:

#id_name { 
    // CSS Property
}

class selector: The .class selector is used to select all elements which belong to a particular class attribute. To select the elements with a particular class, use the (.) character with specifying the class name. The class name is mostly used to set the CSS property to the given class.

 What are CSS backgrounds, list the properties?
    The CSS background properties are used to define the background effects for elements.

    CSS background properties are as follows:

    background-color: This property specifies the background color of an element.
    background-image: This property specifies an image to use as the background of an element. By default, the image is repeated so it covers the entire element.
    background-repeat: By default, the background image property repeats the image both horizontally and vertically.
    background-attachment: This property is used to fix the background ground image. The image will not scroll with the page.
    background-position: This property is used to set the image to a particular position.

What is the difference between margin and padding?
    Margin is used to create space around elements and padding is used to create space around elements inside the border. Margin property we can allow negative or float number but in padding we cannot allow negative values.

What is CSS Box Model ??
  The CSS Box Model is a fundamental concept in web design that describes the rectangular boxes generated for elements in the document tree .
  The web browser renders every element as a rectangular box according to the CSS box model.
   Box-Model has multiple properties in CSS. Some of them are given below:

            borders :It is the area between the box’s padding and margin.
            margins : around the elemnt
            padding : This area is actually the space around the content area and within the border box
            Content  : This area consists of content like text, images etc.

What is the difference between CSS border and outline?
    CSS border properties allow us to set the style, color, and width of the border.
    CSS outline property allows us to draw a line around the element, outside the border.   
    
    
22. What are the different CSS link states?

    a:link: This is a normal, unvisited link.
    a:visited: This is a link visited by a user at least once
    a:hover: This is a link when the mouse hovers over it
    a:active: This is a link that is just clicked. 
    
 How can we hide an element in CSS?
   hide =>  display : none
   show =>  display : block   

*** 25. What is the difference between display: none and visibility: hidden?
        Both of the property is quite useful in CSS. The visibility: “hidden”; property is used to specify whether an element is visible or not in a web document but the hidden elements take up space in the web document. The visibility is a property in CSS that specifies the visibility behavior of an element and display: “none” property is used to specify whether an element is exist or not on the website.

visibility: visible| hidden | collapse | initial | inherit;
display: none |  inline | block | inline-block;

***  Can we overlap elements in CSS?
        Creating an overlay effect simply means putting two div together at the same place but both the div appear when needed i.e while hovering or while clicking on one of the div to make the second one appear. Overlays are very clean and give the webpage a tidy look. It looks sophisticated and is simple to design. Overlays can create using two simple CSS properties:

        The z-index property is used to displace elements on the z-axis i.e in or out of the screen. It is used to define the order of elements if they overlap with each other.

 
        ************************************* After that Advanced CSS question's there,  to know more about please Visit  ******************************************
        ******************************** this Link ( https://www.geeksforgeeks.org/css-interview-questions-and-answers/ ) ******************************************


`