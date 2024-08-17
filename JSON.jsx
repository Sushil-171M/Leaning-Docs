`
JSON stands for JavaScript Object Notation
JSON is a lightweight format for storing and transporting data
JSON is often used when data is sent from a server to a web page
JSON is "self-describing" and easy to understand

stores data in key/value pair.

Note**
  JSON names require double quotes. JavaScript names do not.

 ******* Convert JSON to JS Object ::
      var obj = JSON.parse(text);

  {
    name:'Sushil'    // JS Object
  }

  {
  "name":"Sushil"   // Json ,   ( " is must not '  ) 
  }

*****88 COnvert JS object to JSON
             Use the JavaScript function 
             JSON.stringify()       // to convert it into a string.
  --------------------------------------------------------------JSON vs XML -------------------------------------------------
  Both JSON and XML can be used to receive data from a web server.

  Advantage JSOnN : 
     Lightweight in comparison to XML. Fewer characters = smaller time going through the internet tubes.
       Easier to handle with Javascript if you need something for a web application.
  Adavnateg XML :
      Provide more feature than json e.g  schema, namespace
      U can send data like video , image also.     

`