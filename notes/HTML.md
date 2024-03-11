# Basic HTML
Code with accessibility in mind, avoid using **Semantic** elements. 
- Semantic examples: ```<form>, <table>, <article>```
- Non-Semantic: ```<div>, <span>```


### Tags
```<h1>``` through ```<h6>``` are header tags.  
```<h1>``` is typically used once for titles, etc.  
```<p>``` is for paragraphs, nice separation of texblocks.  
```<hr>``` is for Horizontal Rule; adds separating line. Void element.  
```<br>``` is a Break element. Essentially a '/n'. Void element.  
```<ul>``` | ```<li>``` | ```</ol>```      Unordered and Ordered lists. Can be nested.  

```<a>``` is the anchor element.  
Usage:  
```<a href="https://www.googlcom">Google</a```

```<img>``` is the image element. Void element.  
Usage:  
```<img src="url" alt="description" />``` 

- Use of 'alt' tag recommended for accessibility.

### Forms
To prevent forms from refreshing the page when submitted, modify the ```onSubmit``` event listener to point to a custom function. At the **end** of the function, call ```event.preventDefault()``` to prevent reloading.

For example, using React:

```
function App() {
    function handleClick(event) {
        
        //Handle the click event

        event.preventDefault();
    }

    return (
        <form onSubmit={ handleClick }>
            <input type="text"/>
            <button type="submit">Submit</button>
        </form>
    );
}
```


