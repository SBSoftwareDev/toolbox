# Cookies and Sessions
Websites use cookies to save information in the browser. For instance, items in an online shopping cart. Typically you can close a browser and come back to a full shopping cart. This cookie data can also be transmitted to advertisements that display in different websites. 

Cookies are sent along with GET and POST requests. They can be used to maintain a session, say for a user log in. Sessions allow the user to remain logged in after leaving a website (there are other reasons too) for a certain period of time (depending on the website). 

## Recommend Packages
**express-session**: Enables session persistence. Allows you to utilize cookies to create sessions. Session data can be stored in cookies themselves (see cookie-session npm) or on the backend.  

**passport**: Authentication middleware that can work with sessions. Can be used with or OAuth or local strategies.  