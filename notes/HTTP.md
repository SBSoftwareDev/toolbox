# Notes on (Basic) HTTP

**Network Request** - Communicates information between computers (e.g. client/server)
- Typically uses HTTP/HTTPS protocols

**IP Address** - identifies machine in network. Determines destination of data packets.

**Port Number** - identifies particular application or service on a system.

**REST Design and HTTP Methods**

    GET - Give/Get information

    POST - Send package (Creates a child resource)

    PUT - Send package (Creates/Replaces the resource)

    PATCH - Send package (Updates part of resource)

    DELETE - Delete target resource (Remove package)


### Request Response Cycle
    1. Network request to specified port on server located by IP Address (or URL)

    2. Port identifies connection endpoint; directs data to specified service

    3. The HTTP method determines which action to perform on server

    4. Server performs service based on requested method

    5. Server responds to client with status code (required) and data (optional)

    6. Client receives responce and request is fulfilled

**Status Codes** - 2xx & 4xx most common

    1xx Informational

    2xx Request successful

    3xx Client redirected to different resource

    4xx Request contains error (client side)

    5xx Server encountered error while fulfilling request

**HTTP Headers** - Field of the HTTP Request/Response that provides additional context/metadata
                (e.g. Describing content type, authorization tokens, HTTP method)

EXAMPLE:
        [Landing on login page]
    GET https://www.instagram.com/login
    Response: Status 200 Contents HTML
        [Performing login request]
    POST https://www.instagram.com/login Contents User
    Response Status 300 Contents Redirection User

    