 `
 what is HTML ??
 HTML stands for Hyper Text Markup Language.  It is a standard text formatting language which is used to create and display pages on the Web. 

 HTML vs HTML5 ::
   HTML is 5th or latest version of HTML. 

   Difference between HTML vs HTML5 =>

   1. Doctype Declaration :  
   HTML: Uses a longer and more complicated doctype declaration.
    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

   HTML5: Simplified and more concise doctype declaration.
        <!DOCTYPE html>

2. Media Support (Audio and Video)
    HTML: Does not have native support for multimedia like audio and video. Embedding media  plugins required like Flash or Silverlight.

        <!-- Embedding media typically required plugins -->
        <embed src="video.mp4">

HTML5:
    Introduced native multimedia support with the <audio> and <video> elements, eliminating the need for third-party plugins.

    <video controls>
    <source src="video.mp4" type="video/mp4">
    </video>

    <audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    </audio>

3. New Semantic Elements  ( Semantic elements are elements that have a clear, meaningful purpose and convey the structure and content of the web page. 
These elements are designed to improve the accessibility, readability, and SEO of web pages by describing their intended purpose in the markup.)
    HTML: Uses generic <div> and <span> elements for structure, which don’t provide semantic meaning.
            
        <div id="header"></div>
        <div id="content"></div>
        <div id="footer"></div>

    HTML5: Introduced new semantic elements, making the structure of the document more meaningful and accessible.
      
        <header></header>
        <nav></nav>
        <section></section>
        <article></article>
        <footer></footer>


4. Graphics and Animation
    HTML: 
        Did not have native support for creating graphics and animations. Developers had to use external technologies like Flash or JavaScript.
    HTML5: 
        Introduced the <canvas> element for drawing 2D graphics and the <svg> element for scalable vector graphics, 
        providing native support for drawing and animations.

    <canvas id="myCanvas"></canvas>

    <svg width="100" height="100">
    <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
    </svg>

5. Form Elements and Attributes
HTML: Basic form elements with limited input types. For example, text, password, and checkbox.

    <input type="text">

HTML5: Introduced new form input types and attributes to enhance user input and validation.
    New input types: email, date, number, range, color, etc.
    New attributes: required, placeholder, autofocus, pattern.

    <input type="email" required>
    <input type="date">

6. APIs for Enhanced Functionality
HTML:  Does not have native APIs for things like offline storage or geolocation.
HTML5: 
    Introduced several new APIs, enhancing functionality and making web applications more powerful.
    Geolocation API: For accessing user location.
    Web Storage API: For storing data on the client-side (localStorage and sessionStorage).
    Canvas API: For drawing 2D graphics.
    Drag-and-Drop API: For native drag-and-drop functionality.
    Offline Web Applications: Using AppCache or Service Workers to enable offline access.

7. Mobile Optimization and Responsiveness
    HTML: Older versions of HTML were not inherently designed for mobile devices or responsive layouts.
    HTML5: Has better support for responsive design, including features like:
    The <meta> viewport tag for controlling layout on mobile devices.
    New input types (e.g., tel, email) for better mobile form usability.

        <meta name="viewport" content="width=device-width, initial-scale=1.0">

8. Browser Compatibility and Support
HTML: HTML 4 was widely supported by older browsers, but required polyfills and hacks for modern features.
HTML5: HTML5 is supported by all modern browsers, but may require fallbacks for older browsers.

9. JavaScript Enhancements
    HTML: Relied on external JavaScript libraries for certain features.
    HTML5: Works more efficiently with JavaScript through native APIs and improved DOM handling. 
    New attributes like async and defer allow for better control of JavaScript execution in the browser.

<script src="script.js" async></script>


**************************************HTML vs XHTML********************************

XHTML vs. HTML: Key Differences
    HTML (HyperText Markup Language) and XHTML (Extensible HyperText Markup Language) are both markup languages used to structure content on the web. 
    However, they differ in terms of syntax rules and how strictly they adhere to standards. Here's a detailed comparison between the two:

1. Syntax Strictness
    HTML: HTML is more lenient with its syntax. Browsers often "forgive" errors, meaning they can interpret and render the content even if the HTML is not perfectly written.

Example: Tags can be unclosed or improperly nested.

    <p>This is a paragraph.
    <br>
    <p>This is another paragraph.

XHTML: XHTML is stricter because it follows the rules of XML (Extensible Markup Language). Every tag must be properly closed, nested, and well-formed, or else the document will be invalid.
    Example: Every tag must be closed, and attributes must be quoted.
    <p>This is a paragraph.</p>
    <br />
    <p>This is another paragraph.</p>

2. Tag and Attribute Case Sensitivity
    HTML: Tags and attributes are not case-sensitive. This means you can write HTML tags in lowercase, uppercase, or mixed case, and browsers will still interpret them correctly.
    <BODY>
    <p>This is HTML</P>
    </BODY>

    XHTML: Tags and attributes must be written in lowercase because XHTML is based on XML, which is case-sensitive.

<body>
  <p>This is XHTML</p>
</body>

3. Self-Closing Tags
    HTML: In HTML, self-closing tags like <br>, <img>, or <input> don't need a closing slash.
    <br>
    <img src="image.jpg">

XHTML: All self-closing tags must include a trailing slash (/) to comply with XML's requirement for well-formedness.


******************** what is the use of <!Doctype> and what if I removed it************************************

The <!DOCTYPE> declaration in HTML specifies the document type and version of HTML being used. It helps the browser determine how to render the document and ensures consistent behavior across different browsers.


****************Difference b/w Head and body in HTML? where to place JS link reference??**********************************
Head tag contain all metadata about HTML file like JS references, CSS references, title and other imp references

Body tag contain all actual content of the HTML document/WebPage.

JS references or script tag u can put either in head tag or below the body tag.

if removed :::
    Inconsistent Rendering:
        Different browsers may render the page differently, leading to layout and design issues.
    Accessibility and SEO Impact:
        Without <!DOCTYPE>, modern accessibility and SEO features might not work correctly.


**********What is Title tag in HTML && adavntages************

   Used to define the title of the web page
   Advatages :
      SEO: Search engine use the title as the main heading for search results.
     Bookmark: Title name is used as the default name for the bookmark.

****************What are Meta tags? What are the 5 types of meta tags ??*********
  Meta tags in HTML are elemnets used to provide metadata or additional information about a web pages.

  1) charset (character Encoding-> UTF-8) ,  
  2) viewport (responsive design, mobile friendly), 
  3) keywords (used for SEO), description, author

******************Elements and tage***********************

 What are the HTML elements? what is the difeerence b/w element and tags ?
    HTML elements are the building blocks of the web pages. Element contain start tag, Content and end tag.
    while tag is specific part of element which denotes the begininng or end of the element
    <p> Interview </p>  --> Element 


 what are the roles and uses of div element in HTMl ?
     <div> are used to group together multiple HTMl element for a specific purpose(styling and layout).

 What is the difference between div and span element ?
     div is a block level container while span is a inline container used to apply style or scripting to a specific section of content

 What is the role of header, main, section, footer & address, progress, nav,time element in HYML ??
   these are the semantic elements, used to define the layout and structure of the webpages in a meaningful and organized way.


 what is the difference between <section> & <article> elements ?
    The section element is a generic container used to group related content together.


    **************Empty Elements************

    an empty element which dont have any content b/w start and end tag. also called self closing


    *********Block level content vs Inline Content***********

    Block level elements create block of content like div, p tag
    Inline level elemnet create inline content like <a>, <strong>,<em>  ,  can be embedded into an HTML element, u cannot set height and width for inline element.


    ******************HTML attributes*****************************
    HTML attributes provide additional information about HTML element
    <a href='..' alt='Image' />


    ******** ID , class, and style attribute************************
    id -> id attributes is used to uniquely identify an element on a page.
 the primary purpose of the id attributes is to allow JS and CSS to target and manipuate the specific elements

 class attribute is used to group together multiple elements that share common styles/property.

 style attribute allows you to apply inline styles directly to the HTML elemnt.

*************What will happen if two elemnts have same ids***************

it can lead to unexpected behaviour in the webPage.

******************************************

how to specify mulitple classes for single elemnt? what is the style precedence ??

<div class='class1 class2'></div>

style define in the last class will overwrite the previous class style if duplicate is there.

************  Data attributes ??  *******************

Data attributes in HTML allow you to store custom data directly on HTML elements. These attributes are defined by the prefix data- followed by a custom key. They provide a way to embed additional information in HTML elements that can be accessed via JavaScript,

<div data-user-id="123" data-role="admin">John Doe</div>


**************Links in HTML *****************************

1) anchor link <a> -> redirect to a page
2) External Resource Link : <link rel = 'stylesheet' href='style.css'>
3) Email link ->  <a href='mailto:abc@gmail.com' />


**************Absolute and Relative URLs********************************
 absolute URL are typically used to link resources on different websites.

Relative URLs specify the location of a resource in relation to the current documnet. full url is not required

*************purpose of the <nav> element in HTML ?? ******************
It is a semantic element in HTML 5. nav elemnt is used to define a section of a web page that contains navigation links.


********* Fragment Identifier in a URL ************************

A fragment Identifier is used to navigate to a specific section of the same webpages.

<a href = '#section1'>Go</a>
<section id='section1>
come here
</section>

******what is the purpose of the <base> element in HTML *********
the base element in HTML is used to specify a base URL for relative URLs within a document.
It should defined in head tag.


**********What are the different type of Lists in HTML***********
1) Ordered List - An ordered list is used to display items in a specific sequence, with each item numbered automatically.
            Attributes for <ol>:
                        type: Specifies the numbering type.
                        1 (default): Numbers (1, 2, 3)
                        A: Uppercase letters (A, B, C)
                        a: Lowercase letters (a, b, c)
                        I: Uppercase Roman numerals (I, II, III)
                        i: Lowercase Roman numerals (i, ii, iii)
                        start: Defines the starting number.
                        reversed: Displays the list in reverse order.


2) Unordered List : An unordered list is used to display items without any specific order, typically with bullets.

                        Attributes for <ul>:
                            type: Defines the bullet style (Deprecated in HTML5, but still supported in some browsers):
                            disc (default): A solid circle.
                            circle: A hollow circle.
                            square: A solid square.

3) Description List :  A description list is used for a list of terms and their corresponding definitions.
        <dl>
            <dt>HTML</dt>
            <dd>HyperText Markup Language</dd>
  
            <dt>CSS</dt>
            <dd>Cascading Style Sheets</dd>
        </dl>

        HTML: HyperText Markup Language



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
    A tag in HTML is a key component of the language's syntax, used to define and structure elements on a webpage. Tags are enclosed in angle brackets (< >) and are typically written in pairs: an opening tag and a closing tag, which enclose content or nested elements. Together, these tags define an HTML element.


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


************** In how many ways can we add CSS to our HTML file?*******
    Cascading Style Sheet(CSS) is used to set the style in web pages that contain HTML elements. It sets the background color, font size, font family, color, … etc properties of elements on a web page.
    There are three types of CSS which are given below:

1) Inline CSS:
        Inline styles apply styles directly to indiviual HTML elements using style attributes.

ex ->   In HTML :  <h1 style="color: green;  font-size: 60px;   text-align: center;">  GeeksforGeeks  </h1>
         IN react :  <div style={{ color: 'blue', lineHeight : 10, padding: 20 }} >

2) Internal or Embedded CSS: 
   Internal style sheet can be implemented by adding the <style> element in the <head> section of the HTML.

3) External CSS: 
   External CSS contains a separate CSS file which contains only style property with the help of tag attributes (For example class, id, heading, … etc). CSS property is written in a separate file with .css extension and should be linked to the HTML document using the link tag. This means that for each element, style can be set only once and that will be applied across web pages.       


   *********what is CSS Preprocessors? what is SCSS ?*************
   CSS preprocessor are scripting languages that provide additional syntax and feature that are not available in css.like look, variable, conditional statement.

   SCSS is a type of CSS preprocessor.

****************Type of CSS Preprocessors****************
 1) SCSS (.scss)
 2) LESS (.less)
 3) Stylus (.styl)

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
    Margin is used to create space around elements outside the border while padding is used to create space around elements inside the border. Margin property we can allow negative or float number but in padding we cannot allow negative values.

    *******************************************CSS Box Model***********************************************88

What is CSS Box Model ??
  The CSS Box Model is a fundamental concept in web design that describes how every HTML element is structured and how it interacts with layout and spacing on a webpage. It defines an element as a rectangular box, consisting of several layers that control the element's size, spacing, and boundaries.

Structure of the CSS Box Model
Each element's box is composed of the following layers, from innermost to outermost:

Content:
    The innermost part of the box that contains the actual content (text, images, etc.).
    The size is controlled by properties like width and height.

Padding:
    The space between the content and the border.
    Padding increases the space around the content but does not affect the border.

Border:
    The line that wraps around the padding and content.
    Its thickness and style can be adjusted using properties like border-width, border-style, and border-color.

Margin:
    The outermost layer, creating space between the element's border and neighboring elements.
    It is transparent and does not have a background color.

    ************************************************************************************

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
        Both of the properties is quite useful in CSS. The visibility: “hidden”; property is used to specify whether an element is visible or not in a web document but the hidden elements take up space in the web document. The visibility is a property in CSS that specifies the visibility behavior of an element and display: “none” property is used to specify whether an element is exist or not on the website.

visibility: visible| hidden | collapse | initial | inherit;
display: none |  inline | block | inline-block;

***  Can we overlap elements in CSS?
        Creating an overlay effect simply means putting two div together at the same place but both the div appear when needed i.e while hovering or while clicking on one of the div to make the second one appear. Overlays are very clean and give the webpage a tidy look. It looks sophisticated and is simple to design. Overlays can create using two simple CSS properties:

        The z-index property is used to displace elements on the z-axis i.e in or out of the screen. It is used to define the order of elements if they overlap with each other.

 
        ************************************* After that Advanced CSS question's there,  to know more about please Visit  ******************************************
        ******************************** this Link ( https://www.geeksforgeeks.org/css-interview-questions-and-answers/ ) ******************************************


       ******************** What is Bootstrap *****************

       Bootsrap is a open source frontend css frontend which provide resposiveness to the page without adding any css.

Advantage of Bootstrap::
1) rapid develpoment
2) Responsive Design
3) cross browser compatibility
4) Accessibility
`
