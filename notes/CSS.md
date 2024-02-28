# Basic CSS

### Three ways to implement CSS
    Inline: <tag style="css" />
    Internal: <style>css</style>
    External: <link href="style.css"/>

### Identifying elements in a document:
- Use class selector to group any set of elements together. Use ```.```
- Use id selector to identify any unique element.  
Use ```#```  
- Use attribute selector to identify all with a certain attribute.  
Use ```[]```
- Use universal selector for everything.  
Use ```*```  

### Quick Selector Examples 
**class:**
```
    <h1 class="green-text">Heading 1</h1>

    .green-text {
        color: green;
    }
```

**id:**
```
    <h1 id="main">Heading 1</h1>

    #main {
        color: green;
    }
```

**attribute:**
```
    <p draggable="true">Drag me</p>

    p[draggable="true"] {
        color: black;
    }
```
    
**universal:**
```
    <...>

    * {
        margin: 0;
        padding: 0;
        color: rainbow;
    } 
```

## Font Properties

    1px is 1/96 of an inch.
    1pt is 1/72 of an inch.
    1em is 100% the size of the parent element.
    1rem is 100% the size of the root element.

    font-size: xx-large;

    font-weight: [Number: 100-900] [Keywords: normal; bold;] [Relative Keywords: lighter; bolder; +/-100] 

    font-family: Helvetica, sans-serif
    font-family: "Times New Roman", serif

    text-align: [center, left, right, start, end, etc.]

## Box Model
Refers to a basic layout design of elements in a webpage. The box model containerizes all elements in a configurable box.

**Content** - The content of the box, where text and images appear  
**Padding** - Clears an area around the content. The padding is transparent  
**Border** - A border that goes around the padding and content  
**Margin** - Clears an area outside the border. The margin is transparent

    border: 10px solid black;
    This line does not change element, border extends from object.

    border-top:
    border-width: 0px 20px 40px 60px;

    padding: 10px;
    Inside of border.

    margin: 10px;
    Outside of border.
    
    <div> </div>
    This is a containerizing element. Invisible.