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

## React Basics
### Rendering Elements
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
- **NOTE:** Only *expressions* are valid; *statements* are invalid. Why? See [Rendering Elements Conditionally](#rendering-elements-conditionally).  

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

### React Components
A basic React component can be created through a function that returns JSX parsable html. This component can then be inserted with html element syntax.
```
function Heading() {
    return <h1>My favorite books</h1>;
}

ReactDOM.render(<Heading />, ...);
```
- **NOTE:** Common practice is separate major components into individual ```.jsx``` files.    

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
- **NOTE:** HTML native attributes are *not* recognized when passed inside react components (e.g. **className** or **color**)

## Developing with React

Over the course of developing with React, there are some common features and quirks you should be aware of. 

### Rendering Elements Conditionally
You may find yourself wanting to render elements of a compenent based on certain conditions. **If** statements and **For** loops are invalid because they cannot be *evaluated* to a particular value. 

#### If Statements
> For this first example, I describe a user visiting a website; The user should see a login prompt if they are not logged in, and the home page if they *are* logged in.

There are two immediate solutions for integrating **if** statements into components. The first solution is essentially... not to use that statement *inside* the component. Evaluate the statement outside of the component, and render the result.  

For example:
```
function conditionalRender() {
    if(isLoggedIn) {
        return <h1>Welcome!</h1>;
    } else {
        return <Login />
    }
}

function App() {
    return <div>
        { conditionalRender() }
    </div>
}
```
You can see that *calling* the function results in a determinate value, and therefore is an expression. The issue with if "***statements***" is the parsing capabilities of JSX.

A more concise method to integrate the if statement utilizes the conditional ternary operator.
```
CONDITION_STATEMENT ? TRUE_STATEMENT : FALSE_STATEMENT
```
Under the hood, this achieves the same thing. One of the primary differences is that each part of the conditional ternary operator is an individual statement, making it valid for JSX. This allows to slip that line code *into* a component.  

Here we can see it in action:
```
function App() {
  return (
    <div>
      { isLoggedIn ? (<h1>Hello</h1>) : (<Login />) }
    </div>
  );
}
```
#### && Operator

React offers a way to quickly render *something* or ***nothing*** based on a condition. Previous examples saw the ternary operator being used to display **one** component out of multiple. In a more precise operation, you may want to render a compenent **or not** based on a condition.

>*This simple example displays a message after lunch time.*
```
const time = new Date().getHours();
function App() {
  return (
    <div>
      { time > 12 && <h1>Aren't you hungry?</h1>}
    </div>
  );
}
``` 
If the first statement evaluates to false, the second statement does ***not*** execute.


#### Loops
The use of **for** loops is also invalid with the JSX parser. Similar to the example mentioned above, a valid way to 'get around' using loops is to evaluate the data *outside* the component, and pass the result. Often times, as in this case, there is a simpler way to achieve that goal.   

Use of the ```Map()```, ```Filter()```, and ```Reduce()``` functions (with notable mentions ```Find()``` and ```FindIndex()```) are highly encouraged.  
> *See examples of these functions in my* [*Array snippet*](https://github.com/SBSoftwareDev/toolbox/blob/main/snippets/Arrays.js)

### Mapping Data to Components
When using any sort of loop to map data to a stream of React components, you will need to a provide a *key* inside the looped component(s) to uniquely identify each one. Failure to do so will throw an error. It should be noted that the *key* value is not restricted to integers.

For Example:  
```app.jsx```
```
...
function createContact(contact) {
    return (
        <Contact
            key={ contact.id }
            name={ contact.name }
            phone={ contact.phone }
            email={ contact.email }
        />
    );
}

function App() {
    return (
        <div>
        <h1>Contacts</h1>

        {contacts.map(createContact)}

        </div>
    );
}
```

The *key* property is **not** accessible as a prop. Attempting to do so will result in *undefined*. 

## React Developer Tools
A chromium (and Firefox) based extension that allows a user to view React component heirarchies in the developer tools pane, and utilize a profiling tool.

This extension is a valuable tool when debugging with React.