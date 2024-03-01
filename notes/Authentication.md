# Authentication

### Level 1 - Basic Username/Password
This first stage is essentially username and password stored as text. Authenticating simply checks equality between stored password and input password. 

### Level 2 - Encryption/Hashing
Level 2 involves encryption and hashing. Applying an encryption algorithm to a text password generates a hash. Storing the hash in the database instead of the password increases security. Comparing the hashed, *stored* password with the hashed, *input* password provides authentication.

### Level 3 - Hashing + Salt
'Salting' the input before generating a hash helps obfuscate the user's original password. This can be implemented over several rounds, providing *further* obfuscation. Similar to level 2, comparing the stored hash to a sufficiently salted input provides proper authentication.

#### Recommended Packages
**bcrypt**: Uses the Blowfish algorithm to aid in hashing, salting, and checking passwords.

### Level 4 - Environment Variables
Environment variables are key pieces of data that typically lay just outside the codebase. They can be used for convenience, e.g. certain sensitive variables in a specific spot that are isolated from the main code. 

Environment variables are also used for security, storing API keys, authentication keys, and other secrets from the general public. 

Create a literal '.env' file and add it to gitignore.