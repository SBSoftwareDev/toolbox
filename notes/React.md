# React 
React is a frontend framework for Javascript. React performs almost like a tree, working with components.
React works well with dynamic content loading. React loads new frontend content by *comparing changes* in the webpage, almost like tracking with Git.

## Getting Started
### Setting up index.html
In ```index.html```, add a div with an id of 'root'. This is the root of the react application, where react stuff goes.
```
<div id="root"></div>
```
Don't forget to link index.js.
```
<script src="../src/index.js" type="text/JSX"></script>
```
For the most part, we won't touch index.html; React uses javascript to render frontend components.

### Setting up index.js
Install dependencies ```react``` and ```react-dom``` to the project.   
Import both packages.
```
import React from "react";
import ReactDOM from "react-dom";
```


## Rendering Elements
Start displaying elements with the render function of ```ReactDOM```.
```
ReactDOM.render(WHAT TO SHOW, WHERE TO SHOW IT)
        as in
ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("root"))

``` 
The render function only takes a 'single' html element. This is simple to get around. Wrap the elements to be inserted inside of a div.

React uses **JSX** and **Babel** to render native javascript on browsers.  
**JSX** parses the html inside of javascript files. This can even be nested. JSX can parse javascript inside of html inside of javascript.  
**Babel** compiles the javascript code to a version thats readable by most browers that surf the web.

The nesting described above is a common occurence. One example is a simple name variable used in an html element. 

```
const name = "Joe";
ReactDOM.render(<h1>Hello {name}!</h1>, document.getElementById("root"));
```

By using curly braces, JSX will interpret the contents as javascript.
- **NOTE:** Only *expressions* are valid; *statements* are invalid.

### JSX Attributes
When declaring an html element through the *render* function, it is not advised to use the attribute ```class```. Instead, use ```className``` to apply the desired class. This is because the HTML being sent to the *render* function gets parsed into javascript, which uses a variable called ```className``` to access those attributes. This is usually handled behind the scenes in the event you use ```class```, but it is not something to rely on with 100% confidence. 
```
ReactDOM.render(<h1 class="title">Hello {name}!</h1>, ...);
```
becomes
```
ReactDOM.render(<h1 className="title">Hello {name}!</h1>, ...);
```

### JSX Inline Styling
Inline styling with JSX does differ from traditional html inline styling. JSX requires an object with style properties rather than a string. 
```
ReactDOM.render(<h1 style="color: red">Hello {name}!</h1>, ...);
```
becomes
```
ReactDOM.render(<h1 style={{ color: "red" }}>Hello {name}!</h1>, ...);
```
Doubling up on the curly braces is necessary because the style attribute is looking for a JS object, and for JSX to interpret that object as JS code, it needs the outer braces.

#### Why use inline styling instead of a CSS stylesheet?
Inline styling is useful for React elements that should be dynamically updated.

## React Components
A basic React component can be created through a function that returns JSX parsable html. This component can then be inserted with html element syntax.
```
function Heading() {
    return <h1>My favorite books</h1>;
}

ReactDOM.render(<Heading />, ...);
```
Common practice is separate components into individual ```.jsx``` files.   
For example, separating the above code yields:  
```Heading.jsx```
```
import React from "react";

function Heading() {
    return <h1>My favorite books</h1>;
}

export default Heading;
```
```index.js```
```
import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading";

ReactDOM.render(<Heading />, document.getElementById("root"));
```

### Props
Shorthand for properties.  
Props are the properties of components that can be used like normal JS arguments.  
You can think of React components almost like 'Custom HTML elements'. You are able to add custom attributes to these, unlike classic HTML elements.  
Here is an example:
```
function Contact(props) {
    return 
        <div>
            <p>{ props.name }</p>
            <p>{ props.phone }</p>
            <p>{ props.email }</p>
        </div>;
}   

ReactDOM.render(
    <div>
        <Contact
            name="John Smith"
            phone="123 456 7890"
            email="johnsmith@email.com"
        /> 
        <Contact
            name="Jane Smith"
            phone="123 456 7891"
            email="janesmith@email.com"
        /> 
    </div>,
    ...);
```
- **NOTE:** HTML native attributes are *not* recognized when passed inside react components (e.g. className or color)

## React Developer Tools
A chromium (and Firefox) based extension that allows a user to view React component heirarchies in the developer tools pane.

This extension is a valuable tool when debugging with React.