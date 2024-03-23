# React 
React is a frontend framework for Javascript. React performs almost like a tree, working with components.
React works well with dynamic content loading. React loads new frontend content by *comparing changes* in the webpage, almost like tracking with Git. This note is a **quick-reference** to the *major* features of React.

### Table of Contents
1. [Getting Started](#getting-started)  

2. [React Basics](#react-basics)
    1. [Rendering Elements](#rendering-elements)
    2. [JSX Attributes](#jsx-attributes)
    3. [JSX Inline Styling](#jsx-inline-styling)
    4. [React Components](#react-components)
    5. [Props](#props)

3. [Developing With React](#developing-with-react)
    1. [Rendering Elements Conditionally](#rendering-elements-conditionally)
        1. [If Statments](#if-statements)
        2. [&& Operator](#operator)
        3. [Loops](#loops)
    2. [Mapping Data to Components](#mapping-data-to-components)
    3. [State](#state)
    4. [Hooks](#hooks)
    5. [Forms and Controlled Components](#forms-and-controlled-components)

4. [Advanced React](#advanced-react)
    1. [Class vs. Functional Components](#class-versus-functional-components)
    2. [Complex State](#complex-state)
    3. [Managing Component Trees](#managing-component-trees)

5. [Workflow and Tips](#workflow-and-tips)
    1. [Project Setup](#project-setup)
    2. [Styling](#styling)
    3. [Secrets and Sensitive Data](#secrets-and-sensitive-data)
    4. [Final Stages](#final-stages)
    5. [Shortcuts](#shortcuts)

## Getting Started
See [Workflow and Tips](#workflow-and-tips) for a guide on setting up a project template.
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

It should also be noted that multi-word style properties are turned into **camel case**. For instance, the CSS style property ```text-decoration``` is expected as ```textDecoration```.

For example: 
```
function ToDoItem(props) {
    return (
        <li style={{textDecoration: "line-through"}}>
        </li>
    );
}
```

#### Why use inline styling instead of a CSS stylesheet?
Inline styling is useful for React elements that should be dynamically updated. CSS stylesheets are pretty much hard coded styles.

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
Props are the properties of components that can be accessed like a JS object.  
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
    ...
);
```
- **NOTE:** HTML native attributes are *not* recognized when passed inside react components (e.g. **className** or **color**)

You can even pass *functions* as properties. If you want to execute a function when that element is clicked, for example, you can pass a click handler to the native event listener.

```
function App() {
    function handleClick() {}

    return (
        <div>
            <Contact
                onClick={handleClick} 
            />
        </div>
    );
}
```

Be careful using parentheses or passing data inside of the function that gets passed to the component property. Using parentheses will result in immediate evocation of that function. A solution to this is to pass an **anonymous function** to the event listener, which results in that anonymous function being called at the proper time, instead of the actual function at render.

Example solution:  
```App.jsx```
```
...
function App() {
    function deleteContact(id) {}

    return (
        <div>
            <Contact
                onDelete={deleteContact}} 
                name={...}
            />
        </div>
    );
}
...
```
```Contact.jsx```
```
...
function Contact(props) {
    return (
        <li onClick={() => {props.onDelete(props.name)}} >{props.name}</li>
    );
}
...
```

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
You can see that *calling* the function ```conditionalRender()``` results in a determinate value, and therefore is an expression. The issue with if "***statements***" is the parsing capabilities of JSX.

A more concise method to integrate the if statement utilizes the conditional ternary operator.
```
CONDITION_STATEMENT ? TRUE_STATEMENT : FALSE_STATEMENT
```
Under the hood, this achieves the same thing. One of the primary differences is that each part of the conditional ternary operator is an individual statement, making it valid for JSX. This allows us to slip that line of code *inside* a component.  

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
      { time > 12 && <h1>Aren't you hungry?</h1> }
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
When using any sort of loop to map data to a stream of React components, passing the data through as **props**, you will need to a provide a *key* inside the looped component(s) to uniquely identify each one. Failure to do so will throw an error. It should be noted that the *key* value is not restricted to integers.

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

### State
Higher levels of interactivity with React require understanding of State. State can be likened to a component's memory. Changing the State of a component changes its UI style or function. 

Using a state variable to control UI elements has some caveats in normal JavaScript. The changes don't typically happen immediately. The server would have to *re-render* the elements. Of course, you could directly access the DOM and modify the elements directly, however issues quickly arise when several elements depend multiple conditions.

React offers a way to manage the State of components using **Hooks**. Hooks are special React functions that 'hook' into many features, including **State**, which is particularly useful. 

### Hooks
All of the **Hook** functions offered by React start with the word 'use'. ```useState()``` is one of the more useful hooks offered. **Hooks** can only be used while React is *rendering*.

#### useState()
This function accomplishes two important tasks that need to happen. 
1. It provides a variable to **persist** data between renders
2. It provides a setter function that **updates** the variable and triggers a **re-render**.

To get started, you can call this function from React using ```React.useState()``` or import that function explicitly.
```
import { useState } from "react";
```

This function essentially tells React that a component should remember something. The conventions for this function are as follows:

```
const [something, setSomething] = useState(initial_value)
```

```useState()``` will **always** return an array with two items. The first one being the variable that holds data between renders; the variable that gets updated in the component. The second is the setter function that initializes the update and re-render. We are able to confidently use **array destructuring** to handle the objects from ```useState()```. 

> *Here is an example of a simple counter on a webpage, with a button to increment it by one.*

```
import React, { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);

    function increase() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={ increase }>+</button>
        </div>
    );
}
```

### Forms and Controlled Components
Similar to how buttons have **MouseEvent** attributes, input forms have an ```onChange``` attribute, and access to other HTML events. This attribute is particularly useful when attempting to retrieve information that a user has entered or modified. 

Here is a simple example of a text input form:

```
function App() {
    function handleChange(event) {
        console.log(event.target.value);
        console.log(event.target.placeholder);
        console.log(event.target.type);
    }

    return (
        <div>
            <input 
                onChange={ handleChange }
                type="text"
                placeholder="Enter your name"
            />
            <button>Submit</button>
        </div>
    );
}
```

The ```handleChange()``` function gets passed to the input form on creation. When the ```onChange``` event listener is activated, it calls ```handleChange()``` while passing information on its current state. 

It is **HIGHLY** encouraged to implement HTML form elements as *controlled components*. These are components whose **single source of truth** stems from React, instead of its own internal state based on input. This prevents managing the *value* of the input **and** the *state* of the component as separate values. 

Here is how we can turn the above example into a controlled component:
```
function App() {
    const [name, setName] = useState("");

    function handleChange(event) {
        setName(event.target.value);
    }

    return (
        <div>
            <input 
                onChange={ handleChange }
                type="text"
                placeholder="Enter your name"
                value={ name }
            />
            <button>Submit</button>
        </div>
    );
}
```

We implement a *State Hook* to keep track of the user input on the form. For the cherry on top, the *value* of the input is set to the ```name``` state that was created. 

Input forms keep track of their own internal state. When their input is updated, the form updates its *value* attribute. We essentially override this by telling the input form to execute ```handleChange()``` when there is new input. ```handleChange()``` then updates the value of the state hook, **and** by proxy the internal value attribute of the form itself. 

## Advanced React
Remember, this note is a simple reference. I cover topics as I experience them and integrate them into my projects. Not every topic is covered, and the term 'Advanced' is subjective. This section covers deeper topics in React development.

### Class versus Functional Components
Before we really get into it, I want to mention that thus far, React components have been implemented *functionally*. In the past, before Hooks made their debut as a feature, the concept of **State** was primarily usable inside of **Classes**. 

Here is an example of bare Class versus Functional implementation:  
```Class```
```
import React from "react";

class App extends React.Component {
    render() {
        return <h1>Hello, World!</h1>;
    }
}

export default App;
```
```Functional```
```
import React from "react";

function App {
    return <h1>Hello, World!</h1>;
}

export default App;
```

Here is a more in-depth example of class implementation, as a basic counter page:

```
class ClassComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
        this.increase = this.increase.bind(this);
    }

    increase() {
        this.setState(this.state.count + 1);
    }

    render() {
        return (
            <div>
                <h1>{ this.state.count }</h1>
                <button onClick={ this.increase }>+</button>
            </div>
        );
    }
}
```
The introduction of Hooks cut down on the necessary boilerplate code, and results in cleaner, more concise flow.

### Complex State
```useState()``` can store an object with multiple values. It's necessary in certain situations to retrieve previous values of a state, and only update certain parts of that state object.
```
...
function App() {
    const [fullName, setFullName] = useState({
        firstName: "",
        lastName: ""
    });
...
```

One way to manage previous values is to pass a *function* instead of a value to the set method provided by ```useState()```. This first argument passed to this function *is* the previous state value.   
Adding on the to above example:
```
...
function handleChange(event) {
    const { newInput, inputSrc } = event.target;

    //Pass set method a function which returns an object, that has the previous values and the new ones.
    setFullName(prevInput => ({...prevInput, [inputSrc]: newInput }));
}
...
```

> ***NOTE:*** *Avoid accessing the event argument inside of a state set method. This can cause issues because this event is synthetic and may cause access errors.*

### Managing Component Trees
This section entails communication between components in the React component tree.

One way to have child components affect their parents is to pass a function(s) through the props argument. 

You can achieve this by passing a custom property through your React component with a function handle. In the child component, you can utilize the native listeners by passing that function prop into ```onClick```.

For Example:  

```ToDoItem.jsx```
```
...
function ToDoItem(props) {
    function handleClick() {}

    return (
        <li 
            onClick={props.onChecked}
        >{props.text}</li>
    );
}
...
```
```App.jsx```
```
...
function App () {
    function deleteItem() {}

    return (
        <ul>
            <ToDoItem
                onChecked={deleteItem}
            />
        </ul>
    );
}
...
```
The ```deleteItem()``` method is passed to the child ```ToDoItem``` component as a custom property. The child component uses that function as its ```onClick``` listener. 

## Workflow and Tips
This section aims to serve as a workflow guideline, in terms of recommended steps and foundations for developing with React. 

### Project Setup
To start, use a terminal to navigate to the project *parent* directory. Use the node package manager to initialize a new **Vite** project. **Vite** is a frontend development tool. It runs a local development server that is *extremely* quick at replacing changed modules, so the near-instant you make a change, it's loaded into the dev server. **Vite** isn't just for testing; **Vite** has a build command that bundles code into highly-optimized assets for production, reducing end-user load times. 

#### Inside of example directory ```C:\Projects\```
```
npm create vite@latest
(Proceed to follow prompts)
```
OR, an alternative shortcut,
```
npm create vite@latest example-project -- --template react
(Double dash is necessary)
```

After running those commands, **npm** will have created a folder structure with a basic application using React and Vite. 

At this point, install the dependencies that were announced after creating the **Vite** project with npm. Do that by running: 
```
npm i
```

This finishes the creation of the basic template.
Using the command
```
npm run dev
```
will start the development server.

### Styling
There are several ways to style components; One recommend way to implement styling is through modular stylesheets. The imported style(s) are accessed similarly to an object.  
For instance:  
```Generic.jsx```
```
import React from 'react';
import styles from './generic.module.css';

...

    return (<h1 className={styles.generic}>Example</h1>)
```
```generic.module.css```
```
.generic {
    display: flex;
    ...
}
```


### Secrets and Sensitive Data
It's not a good idea to store **API Keys** and other secrets anywhere inside of the React build. The ideal course of action would see the client send an API request to the backend, where a valid request would be sent information.

### Final Stages
When you're ready to deploy, use
```
npm run build
```
to create a ```dist``` folder with the build version of your application.

### Shortcuts

In reference to VS Code extention ```dsznajder.es7-react-js-snippets```

Notable Prefixes:
|Prefix|Explanation|
|------|-----------|
|rfc|Functional Component Template|
|imr|import React from "react";|
|imrs|import React, { useState } from "react";|

















## React Developer Tools
A chromium (and Firefox) based extension by the same name that allows a user to view React component heirarchies in the developer tools pane, and utilize a profiling tool.

This extension is a valuable tool when debugging with React.

Thanks for reading, and good luck out there!
---
> See any issues? [Let me know!](https://www.DeveloperSean.com)