(function () {
  const courses = {
    java: {
      name: "Java Full Stack Development",
      slug: "java",
      sections: [
        {
          title: "Java foundations",
          questions: [
            ["Which component executes Java bytecode?", ["JVM", "JDK installer", "Maven"], 0],
            ["Which type stores a true-or-false value?", ["boolean", "char", "String"], 0],
            ["How do you compare two Java strings by content?", ["equals()", "== always", "sameText()"], 0],
            ["What does a constructor do?", ["Initializes a new object", "Runs every loop", "Declares a package"], 0],
            ["Which access modifier limits a field to its declaring class?", ["private", "public", "protected"], 0],
            ["What is an object?", ["An instance of a class", "A source file extension", "A Maven lifecycle"], 0],
            ["Which collection keeps elements in sequence and allows duplicates?", ["List", "Set", "Map"], 0],
            ["What does List<String> express?", ["A list whose elements are Strings", "A list sorted by string length", "A database table"], 0],
            ["Which block handles a matching exception?", ["catch", "finally", "throws"], 0],
            ["What does a Java interface primarily describe?", ["A contract of supported behavior", "A database connection", "A compiled application"], 0],
            ["Which JDK tool compiles Java source code?", ["javac", "npm", "mongosh"], 0],
            ["What is the conventional Java application entry point?", ["public static void main(String[] args)", "public void start(String args)", "static int index()"], 0],
            ["Which of these is a Java primitive integer type?", ["int", "Integer[]", "String"], 0],
            ["What does final prevent for a local variable after assignment?", ["Reassignment", "Reading its value", "Passing it to a method"], 0],
            ["What is method overloading?", ["Methods share a name but have different parameter lists", "A subclass replaces a method implementation", "A method calls itself"], 0],
            ["What is method overriding?", ["A subtype provides an implementation of an inherited method", "A method changes its name at runtime", "A class imports a package"], 0],
            ["What does @Override help the compiler verify?", ["That a method is intended to override an inherited method", "That a field is private", "That a class has a main method"], 0],
            ["Why is composition useful in object-oriented design?", ["It lets objects collaborate without rigid inheritance", "It prevents objects from having methods", "It eliminates the need for types"], 0],
            ["Which collection is designed to hold unique elements?", ["Set", "List", "ArrayList with duplicates"], 0],
            ["What does a Map store?", ["Key/value associations", "Only ordered duplicate values", "Compiled bytecode"], 0],
            ["What does try-with-resources do?", ["Closes eligible resources automatically", "Retries every exception", "Suppresses compiler errors"], 0],
            ["What is a checked exception?", ["An exception the compiler requires code to catch or declare", "An exception that cannot be handled", "A syntax error in a comment"], 0],
            ["What is a useful property of an immutable object?", ["Its state cannot change after construction", "It cannot be passed to a method", "It must be stored in SQL"], 0],
            ["Why use generics such as List<Course>?", ["To express and check element types", "To make every value nullable", "To select a database schema"], 0],
            ["What does a Java package help organize?", ["Related types and namespaces", "HTTP response bodies", "Browser cookies"], 0]
          ]
        },
        {
          title: "Spring Boot and APIs",
          questions: [
            ["What does dependency injection provide to a component?", ["Its required collaborators", "A browser stylesheet", "A database backup"], 0],
            ["Which Spring annotation commonly marks a REST controller?", ["@RestController", "@RepositoryOnly", "@ReactComponent"], 0],
            ["Which HTTP method is conventionally used to retrieve a resource?", ["GET", "DELETE", "PATCH"], 0],
            ["What is a DTO commonly used for?", ["Shaping data exchanged across an API boundary", "Starting the JVM", "Creating a CSS layout"], 0],
            ["What should an API usually return when a resource is created successfully?", ["A success status such as 201", "A 404 status", "A stack trace"], 0],
            ["Why validate request data on the server?", ["Clients can bypass browser-side checks", "It makes authentication unnecessary", "It converts JSON to HTML"], 0],
            ["What is middleware or a filter useful for?", ["Cross-cutting request processing", "Compiling Java source", "Designing entity relationships"], 0],
            ["Where should environment-specific configuration be supplied?", ["External configuration", "A public source-code constant", "A CSS class"], 0],
            ["What does inversion of control mean in a Spring application?", ["The framework manages object creation and wiring", "The client controls database credentials", "The API skips validation"], 0],
            ["What is a useful API error response?", ["A suitable status and safe, actionable details", "A successful status with an empty body for every failure", "A full production stack trace"], 0],
            ["Which Spring annotation maps a method to a GET endpoint?", ["@GetMapping", "@Entity", "@AutowiredOnly"], 0],
            ["Which annotation commonly binds a URL path value to a parameter?", ["@PathVariable", "@RequestBody", "@Column"], 0],
            ["What does @RequestBody commonly bind?", ["The HTTP request body to an object", "A URL path to a CSS class", "A response status to a database key"], 0],
            ["Which HTTP status is appropriate for successful resource creation?", ["201 Created", "401 Unauthorized", "404 Not Found"], 0],
            ["Which status commonly indicates invalid request data?", ["400 Bad Request", "301 Moved Permanently", "503 Service Unavailable"], 0],
            ["What does an application service layer usually contain?", ["Business operations and use-case logic", "Only CSS declarations", "Browser navigation history"], 0],
            ["Why keep controller methods focused?", ["To separate HTTP handling from business logic", "To make controllers own every database concern", "To avoid validating requests"], 0],
            ["What does @Transactional commonly provide?", ["A transaction boundary for data operations", "An HTTP cache policy", "A React render cycle"], 0],
            ["What does a REST resource usually represent?", ["A domain entity or collection addressed by a URI", "A Java compiler option", "A user-interface animation"], 0],
            ["Which HTTP method is commonly used to replace a resource representation?", ["PUT", "GET", "TRACE"], 0],
            ["What does idempotency mean for an HTTP operation?", ["Repeating it has the same intended effect as one request", "It always creates a new resource", "It encrypts the response"], 0],
            ["What is a Spring profile useful for?", ["Selecting environment-specific configuration", "Changing a method's visibility", "Generating SQL rows automatically"], 0],
            ["Why return a DTO instead of exposing a persistence entity directly?", ["To control the API shape and avoid leaking internal fields", "To prevent the application from using JSON", "To skip authorization"], 0],
            ["What should a production API avoid returning to clients?", ["Internal stack traces and secret values", "A suitable error code", "A documented validation message"], 0],
            ["What does HTTP content negotiation help determine?", ["Which representation format a client and server can exchange", "Which database password to use", "How many Java classes compile"], 0]
          ]
        },
        {
          title: "SQL, persistence, and security",
          questions: [
            ["What does a primary key identify?", ["A row uniquely within its table", "A web page heading", "A Java package"], 0],
            ["What does a foreign key represent?", ["A relationship to a key in another table", "A password hash", "A browser event"], 0],
            ["Which clause filters rows before grouping?", ["WHERE", "HAVING", "ORDER BY"], 0],
            ["Which clause filters groups after aggregation?", ["HAVING", "WHERE", "FROM"], 0],
            ["What is the purpose of a database transaction?", ["Commit or roll back a unit of work", "Render a React component", "Compile source code"], 0],
            ["Why use parameterized SQL queries?", ["To keep user input from changing query structure", "To automatically encrypt every database", "To make every query public"], 0],
            ["What does an ORM such as JPA help map?", ["Objects and relational data", "HTTP routes and CSS", "Tests and browser windows"], 0],
            ["What is password storage expected to use?", ["A strong one-way password hash", "Plain text", "Reversible encoding only"], 0],
            ["What is authorization?", ["Checking what an authenticated user may do", "Checking whether a class compiles", "Creating an account without credentials"], 0],
            ["What does a database index generally improve?", ["Lookup performance for selected queries", "Password strength", "API authorization rules"], 0],
            ["What is normalization intended to reduce?", ["Redundant data and update anomalies", "All database relationships", "The need for primary keys"], 0],
            ["What does an INNER JOIN return?", ["Rows with matching values on both sides", "Every left row regardless of a match", "Only rows with NULL keys"], 0],
            ["What does a LEFT JOIN preserve?", ["Every row from the left table", "Only rows from the right table", "No unmatched rows"], 0],
            ["What does COUNT(*) calculate?", ["The number of rows in a result group", "The sum of a numeric column", "The latest timestamp"], 0],
            ["Which SQL clause sorts query results?", ["ORDER BY", "HAVING", "VALUES"], 0],
            ["Why add a WHERE clause to an UPDATE statement?", ["To limit which rows are changed", "To create a new table", "To sort the updated rows"], 0],
            ["What does a UNIQUE constraint enforce?", ["No duplicate values for the constrained key", "No NULL values in every column", "A specific row order"], 0],
            ["What does a NOT NULL constraint enforce?", ["A column value cannot be NULL", "A column value must be unique", "A table must contain one row"], 0],
            ["What is optimistic locking used to detect?", ["Conflicting updates to the same data", "Slow CSS transitions", "Invalid HTML nesting"], 0],
            ["Why use a password-hashing algorithm for stored passwords?", ["To make recovery of the original password computationally difficult", "To make passwords searchable in plain text", "To avoid using unique salts"], 0],
            ["What does authentication establish?", ["The identity associated with a request", "Whether a database query is fast", "Which React component renders first"], 0],
            ["What does the principle of least privilege recommend?", ["Grant only the access necessary for a task", "Give every user administrator access", "Use one shared account for all services"], 0],
            ["Why use HTTPS for an authenticated web application?", ["To protect data in transit", "To replace server-side authorization", "To make SQL queries parameterized"], 0],
            ["What is a foreign-key constraint useful for?", ["Maintaining referential integrity", "Encrypting table contents", "Sorting rows alphabetically"], 0],
            ["What does a database migration manage?", ["A versioned change to database structure or data", "A user's browser history", "A Java thread pool"], 0]
          ]
        },
        {
          title: "React, testing, and delivery",
          questions: [
            ["In React, what are props?", ["Inputs passed to a component", "A database transaction", "A Java access modifier"], 0],
            ["What should usually trigger a React UI update?", ["A change to state or props", "A SQL index", "A Maven clean"], 0],
            ["What is a unit test intended to check?", ["A focused unit of behavior", "Every production user at once", "A deployment region"], 0],
            ["Why mock an external service in a unit test?", ["To isolate behavior from the service", "To skip all assertions", "To store production credentials"], 0],
            ["What does continuous integration commonly automate?", ["Builds and checks on proposed changes", "User authorization decisions", "Database backups only"], 0],
            ["What should a useful README explain?", ["Setup, how to run, tests, and important limits", "Private access tokens", "Only the project color palette"], 0],
            ["Why keep secrets out of source control?", ["Repository readers could misuse exposed credentials", "Secrets slow down CSS", "Java cannot read environment variables"], 0],
            ["What is an environment variable commonly used for?", ["Supplying runtime configuration", "Defining Java syntax", "Replacing all tests"], 0],
            ["What should happen before deploying a full-stack change?", ["Run relevant tests and review configuration", "Disable validation", "Commit local credentials"], 0],
            ["What is a good capstone practice?", ["Document architecture, tests, and known limitations", "Claim production readiness without testing", "Hide setup requirements"], 0],
            ["What is JSX?", ["A syntax for describing UI in JavaScript", "A database query language", "A Java package manager"], 0],
            ["What is React state?", ["Data that can change and cause a component to render again", "An immutable HTTP response", "A SQL constraint"], 0],
            ["What is a controlled form input in React?", ["An input whose value is driven by component state", "An input hidden from the browser", "A form validated only by CSS"], 0],
            ["Why provide a stable key when rendering a list?", ["To help React match items between renders", "To encrypt list values", "To create a server session"], 0],
            ["What does a React effect commonly synchronize with?", ["An external system such as a browser API", "A Java compiler", "A SQL primary key"], 0],
            ["What is a component test useful for?", ["Checking the component's rendered behavior", "Measuring database disk space", "Replacing every integration test"], 0],
            ["What is an integration test intended to verify?", ["Interactions between collaborating parts", "Only a method's local variable", "The developer's internet speed"], 0],
            ["Why use assertions in a test?", ["To state the expected behavior and fail when it is not met", "To hide test failures", "To install dependencies"], 0],
            ["What does code coverage measure?", ["Which code was exercised by tests", "Whether requirements are correct", "How fast users type"], 0],
            ["What is a regression test intended to catch?", ["A previously working behavior breaking after a change", "A code formatting difference only", "A missing production secret"], 0],
            ["What does a build artifact represent?", ["A packaged output produced by a build", "A browser cookie", "A test assertion"], 0],
            ["Why review dependency updates?", ["They can affect compatibility and security", "They always remove vulnerabilities", "They replace application tests"], 0],
            ["What is a health endpoint commonly used for?", ["Reporting whether an application is available", "Returning every user's private data", "Creating database migrations"], 0],
            ["Why separate development and production configuration?", ["To use suitable settings without hard-coding environment differences", "To skip configuration validation", "To expose secrets to the browser"], 0],
            ["What should a capstone demo communicate?", ["The user problem, key design choices, and known limitations", "Only a list of dependencies", "Unverified claims of perfect security"], 0]
          ]
        }
      ]
    },
    mern: {
      name: "MERN Stack Development",
      slug: "mern",
      sections: [
        {
          title: "JavaScript and Node.js",
          questions: [
            ["Which declaration can be reassigned within its block?", ["let", "const", "import"], 0],
            ["What does await do inside an async function?", ["Waits for a Promise to settle before continuing", "Synchronously starts MongoDB", "Converts a value to JSX"], 0],
            ["What does Array.map() return?", ["A new array of transformed values", "The first matching element only", "A MongoDB collection"], 0],
            ["What does a Promise represent?", ["A result that may become available asynchronously", "A React prop type", "An HTTP status code"], 0],
            ["What is Node.js?", ["A JavaScript runtime outside the browser", "A document database", "A CSS framework"], 0],
            ["What does npm commonly manage?", ["Packages and project scripts", "MongoDB indexes only", "Browser cookies"], 0],
            ["Why declare dependencies in package.json?", ["To make project requirements reproducible", "To store user passwords", "To define HTML semantics"], 0],
            ["What does JSON.stringify() do?", ["Converts a JavaScript value to JSON text", "Parses a URL route", "Hashes a password"], 0],
            ["What does a JavaScript module export?", ["Values or functions for other modules to import", "A database backup", "An HTTP response status"], 0],
            ["Why handle a rejected Promise?", ["To respond to an asynchronous failure", "To make it resolve automatically", "To disable server validation"], 0],
            ["What does const prevent for a variable binding?", ["Reassignment of the binding", "Mutation of every object it references", "Reading the variable"], 0],
            ["What does Array.filter() return?", ["A new array containing elements that pass a predicate", "The first element only", "A boolean for the whole array"], 0],
            ["What does Array.find() return?", ["The first matching element or undefined", "Every matching element in a new array", "The array length"], 0],
            ["What does the spread syntax commonly do with an array?", ["Expands its iterable elements", "Deep-clones nested objects automatically", "Sorts it in place"], 0],
            ["What is destructuring used for?", ["Extracting values from arrays or objects", "Encrypting variables", "Creating HTTP middleware"], 0],
            ["What does optional chaining help avoid?", ["Errors when accessing a property on nullish values", "All rejected Promises", "Type checking"], 0],
            ["What does the nullish coalescing operator ?? do?", ["Uses a fallback for null or undefined", "Falls back for every falsy value", "Compares two objects deeply"], 0],
            ["Why use strict equality ===?", ["It compares without implicit type coercion", "It always compares object contents deeply", "It converts both values to strings"], 0],
            ["What is lexical scope?", ["A variable's visibility based on where code is written", "A server's network boundary", "A MongoDB collection type"], 0],
            ["What does a closure retain?", ["Access to variables from its lexical environment", "A database connection forever", "A browser's full history"], 0],
            ["What does Promise.all() do when all input Promises fulfill?", ["Fulfills with an array of their results", "Returns only the first result", "Runs them sequentially by default"], 0],
            ["What does process.env commonly expose in Node.js?", ["Environment variables", "React component state", "MongoDB query results"], 0],
            ["What is package-lock.json used for?", ["Recording a resolved dependency tree", "Storing application passwords", "Describing HTML routes"], 0],
            ["Why avoid committing node_modules?", ["Dependencies can be restored from manifests and lockfiles", "Node cannot load local folders", "It contains only source code written by the app"], 0],
            ["What does a Node.js event loop help coordinate?", ["Asynchronous callbacks and I/O", "CSS media queries", "MongoDB schema validation"], 0]
          ]
        },
        {
          title: "Express and API design",
          questions: [
            ["What is Express commonly used for?", ["Routing and middleware in a Node web server", "Rendering MongoDB indexes", "Compiling React to SQL"], 0],
            ["What does middleware receive in Express?", ["Request, response, and next", "Only a CSS selector", "A Java class and constructor"], 0],
            ["Which HTTP method is conventionally used to retrieve a resource?", ["GET", "DELETE", "PATCH"], 0],
            ["Why validate an API request body on the server?", ["Client-side checks can be bypassed", "It prevents all network errors", "It replaces authorization"], 0],
            ["What should an API return for a missing resource?", ["A suitable 404 response", "A 200 response with unrelated data", "A database password"], 0],
            ["What is a route handler responsible for?", ["Handling a request for a particular route", "Creating a React build", "Choosing a MongoDB shard key only"], 0],
            ["Why use centralized error handling?", ["To return consistent and safe error responses", "To hide every failure silently", "To skip status codes"], 0],
            ["Where should authentication checks for protected actions occur?", ["On the server", "Only in a hidden browser button", "In a CSS media query"], 0],
            ["What is pagination useful for?", ["Returning large collections in manageable portions", "Encrypting a request", "Converting callbacks to Promises"], 0],
            ["What should an API contract describe?", ["Routes, inputs, outputs, and failure behavior", "Only server hardware", "Private deployment credentials"], 0],
            ["Which HTTP method is conventionally used to create a resource?", ["POST", "GET", "HEAD"], 0],
            ["Which status code indicates a successful request with no response body?", ["204 No Content", "401 Unauthorized", "302 Found"], 0],
            ["What should Express middleware call to pass control onward?", ["next()", "awaitRoute()", "continueCSS()"], 0],
            ["Why order Express middleware carefully?", ["Earlier middleware can transform or end a request", "Middleware always runs in parallel", "Routes ignore middleware order"], 0],
            ["What is express.json() commonly used for?", ["Parsing JSON request bodies", "Validating passwords", "Connecting to React state"], 0],
            ["What is a route parameter such as /courses/:id?", ["A named value captured from the URL path", "A query result count", "A response header"], 0],
            ["What does a query parameter commonly represent?", ["Optional values in the URL query string", "A field in a MongoDB schema only", "A JavaScript module export"], 0],
            ["What should an API return when validation fails?", ["A clear client error such as 400", "A success status and silently ignore it", "A server secret"], 0],
            ["What is a 401 response commonly used to indicate?", ["Authentication is required or invalid", "The resource was created", "The server is unavailable"], 0],
            ["What is a 403 response commonly used to indicate?", ["The request is understood but not permitted", "The user needs a browser refresh", "The database returned an empty array"], 0],
            ["Why avoid sending raw internal exception details to clients?", ["They can reveal implementation or sensitive information", "They make HTTP invalid", "They prevent error logging"], 0],
            ["What is rate limiting intended to help control?", ["Excessive request volume", "React component rendering", "SQL column types"], 0],
            ["Why use HTTPS for a production API?", ["To protect data in transit", "To replace input validation", "To make all endpoints public"], 0],
            ["What does an API version help communicate?", ["A compatibility boundary for clients", "A user's password age", "A database index size"], 0],
            ["What is a health check endpoint useful for?", ["Reporting service availability to monitoring", "Returning user credentials", "Creating an administrator"], 0]
          ]
        },
        {
          title: "MongoDB and data modeling",
          questions: [
            ["What does a MongoDB collection contain?", ["Documents", "CSS rules", "Java bytecode"], 0],
            ["What is a BSON document most similar to?", ["A structured object with fields", "A relational join statement", "A browser event"], 0],
            ["What is a MongoDB ObjectId commonly used for?", ["Identifying a document", "Encrypting a password", "Sorting CSS rules"], 0],
            ["What should guide document embedding versus referencing?", ["Access patterns and relationship needs", "The length of the collection name", "Browser viewport size"], 0],
            ["What does a MongoDB index generally help?", ["Speed selected queries", "Guarantee every query is fast", "Replace input validation"], 0],
            ["Why validate data before storing it?", ["To preserve expected shape and constraints", "To make documents immutable", "To avoid designing collections"], 0],
            ["What does an update operator such as $set do?", ["Sets specified fields on a document", "Deletes the whole database", "Creates an Express route"], 0],
            ["What should a delete operation target?", ["The intended document, using a specific filter", "Every document by default", "The nearest CSS selector"], 0],
            ["Why avoid putting untrusted input directly into a database query?", ["It can alter query behavior or expose data", "It makes JSON invalid in all cases", "It disables Node.js"], 0],
            ["What is a schema or validation layer useful for in a flexible database?", ["Making expected data rules explicit", "Changing MongoDB into a browser", "Removing all relationships"], 0],
            ["What is the usual default primary identifier field in a MongoDB document?", ["_id", "primaryKey", "documentNumber"], 0],
            ["What does a MongoDB find() query return?", ["Documents matching its filter", "A JavaScript Promise in every driver", "Only the collection name"], 0],
            ["What is an aggregation pipeline used for?", ["Processing documents through ordered transformation stages", "Creating React routes", "Compiling Node.js modules"], 0],
            ["What does the $match stage do in an aggregation pipeline?", ["Filters documents", "Sorts CSS rules", "Hashes field values"], 0],
            ["What does the $group stage commonly do?", ["Groups documents and computes accumulations", "Creates a new collection by default", "Validates an HTTP token"], 0],
            ["Why create a compound index?", ["To support queries using multiple indexed fields", "To encrypt fields together", "To prevent all collection scans"], 0],
            ["What is a possible cost of adding too many indexes?", ["More storage and write overhead", "Slower reads in every case", "Loss of document identifiers"], 0],
            ["What does an upsert operation do?", ["Updates a match or inserts when none exists", "Deletes every matching document", "Returns only an index definition"], 0],
            ["Why make an update filter specific?", ["To avoid changing unintended documents", "To increase the size of every result", "To enable browser CORS"], 0],
            ["When is embedding related data often useful?", ["When related data is read together and bounded", "When the relationship is unbounded in every case", "Whenever two collections exist"], 0],
            ["When can referencing documents be preferable?", ["For independently managed or large related data", "When no relationship exists", "Only for CSS assets"], 0],
            ["What should a backup strategy protect against?", ["Accidental loss and system failure", "Invalid JSX", "Slow browser animations"], 0],
            ["Why check a MongoDB query plan?", ["To understand index use and query work", "To view React component props", "To verify password strength"], 0],
            ["What does a replica set primarily provide?", ["Redundancy and failover for MongoDB", "A frontend router", "A Java application server"], 0],
            ["What should a database credential use?", ["Least privilege and protected configuration", "A public hard-coded value", "The same password as every user"], 0]
          ]
        },
        {
          title: "React, security, and deployment",
          questions: [
            ["What is a React component?", ["A reusable unit of UI", "A MongoDB index", "An HTTP header"], 0],
            ["What is JSX?", ["A syntax for describing UI in JavaScript", "A database query language", "A Node package manager"], 0],
            ["What should usually trigger a React UI update?", ["A change to state or props", "A server log entry", "A MongoDB collection rename"], 0],
            ["Why use a stable key when rendering a list?", ["To help React track items between renders", "To encrypt list contents", "To create a server session"], 0],
            ["Where should a MERN app keep API secrets?", ["Protected server-side configuration", "React source bundled for browsers", "A public README"], 0],
            ["What is CORS used to control?", ["Which origins may make browser cross-origin requests", "Which MongoDB documents are valid", "How JavaScript promises settle"], 0],
            ["Why hash passwords before storing them?", ["To avoid storing recoverable plain-text passwords", "To make usernames unique", "To remove the need for HTTPS"], 0],
            ["What does an integration test verify?", ["Interactions between connected parts", "Only a CSS color", "A student's network speed"], 0],
            ["What should a deployment pipeline do with environment settings?", ["Provide configuration without committing secrets", "Copy local credentials into source", "Disable application logs"], 0],
            ["What should a MERN capstone document?", ["Setup, architecture, tests, and known limitations", "Only its framework versions", "Private database credentials"], 0],
            ["What does React use props for?", ["Passing inputs from a parent to a child", "Persisting data in MongoDB automatically", "Registering Express middleware"], 0],
            ["What is a React hook?", ["A function that lets a component use React features", "A MongoDB trigger", "A Node.js package lock"], 0],
            ["Why should state updates be treated immutably?", ["React can detect changed values and avoid shared mutation bugs", "JavaScript arrays cannot be changed", "It encrypts the component tree"], 0],
            ["What does a form submit handler commonly do?", ["Prevents or handles default submission and validates input", "Creates a database index automatically", "Starts the Express server"], 0],
            ["What is a React Router route used for?", ["Mapping a URL to a rendered view", "Mapping a MongoDB field to a collection", "Hashing a user's password"], 0],
            ["Why display loading, success, and error states in a UI?", ["To communicate request progress and outcome", "To increase API latency", "To hide server responses"], 0],
            ["What is XSS?", ["Injection of attacker-controlled script into a page", "A MongoDB replication mode", "A JavaScript module format"], 0],
            ["Why escape or safely render untrusted user content?", ["To reduce cross-site scripting risk", "To make the content a trusted API key", "To disable browser events"], 0],
            ["What is CSRF intended to exploit?", ["A browser's authenticated request to a site without user intent", "A missing MongoDB index", "An unhandled Promise"], 0],
            ["Why is client-side route hiding not sufficient authorization?", ["A user can call the server endpoint directly", "React routes cannot render links", "Browsers do not send HTTP requests"], 0],
            ["What should an authentication token be protected from?", ["Theft and exposure in unsafe storage or logs", "JSON parsing", "CSS selectors"], 0],
            ["What does a unit test for a React component commonly assert?", ["Visible output or behavior for given inputs", "A MongoDB server's disk status", "The deployment region"], 0],
            ["What should an end-to-end test cover?", ["A user flow across the application boundary", "Only one pure helper function", "Database schema formatting only"], 0],
            ["What is a CI pipeline useful for?", ["Running repeatable checks on changes", "Managing user passwords", "Making all builds pass automatically"], 0],
            ["Why use production build assets instead of a development server?", ["They are optimized for deployment", "They include debug credentials", "They bypass API security"], 0]
          ]
        }
      ]
    },
    genai: {
      name: "Python Full Stack + GenAI",
      slug: "genai",
      sections: [
        {
          title: "Python and web foundations",
          questions: [
            ["What does input() return by default in Python?", ["A string", "An integer", "A dictionary"], 0],
            ["Which Python collection maps keys to values?", ["Dictionary", "Tuple", "Range"], 0],
            ["What does return do in a function?", ["Sends a result to the caller", "Repeats the function automatically", "Installs a package"], 0],
            ["Why validate values received from a user?", ["External input may be missing or malformed", "Python converts every value to a trusted type", "It prevents all runtime errors"], 0],
            ["Which format is commonly exchanged by web APIs?", ["JSON", "CSS", "JPEG only"], 0],
            ["What does an HTTP route connect?", ["A request path and method to application behavior", "A database table to a CSS selector", "A prompt to an API key"], 0],
            ["What should a web form input have?", ["An associated label", "A hidden placeholder only", "An animation"], 0],
            ["Why use a database transaction?", ["To commit or roll back a unit of work", "To render HTML", "To create a prompt template"], 0],
            ["Where should session authorization be enforced?", ["On the server", "Only by hiding a browser link", "In a model prompt"], 0],
            ["Where should a model API key be kept?", ["Protected server-side configuration", "Public browser JavaScript", "A downloadable page"], 0],
            ["What does a Python list comprehension produce?", ["A list built by iterating over an iterable", "A database transaction", "A compiled module"], 0],
            ["What is a Python set useful for?", ["Storing unique hashable values", "Preserving duplicate values by index", "Mapping every value to a row"], 0],
            ["What does a try/except block do?", ["Handles selected exceptions", "Prevents all possible failures", "Retries every function automatically"], 0],
            ["Why raise a specific exception for invalid input?", ["To report the failure clearly to a caller", "To silently change the input", "To bypass validation"], 0],
            ["What is a Python virtual environment useful for?", ["Isolating a project's installed dependencies", "Encrypting source code", "Serving static files automatically"], 0],
            ["What is a type hint primarily used for?", ["Documenting expected types and supporting analysis tools", "Enforcing all types at runtime automatically", "Replacing unit tests"], 0],
            ["Why use a context manager such as with open(...)?", ["To manage resource setup and cleanup", "To convert every exception to None", "To create a web route"], 0],
            ["What does json.loads() do?", ["Parses JSON text into Python values", "Writes a Python object to a file", "Encrypts a dictionary"], 0],
            ["What should a Django view generally do?", ["Handle a request and return a response", "Define database indexes only", "Render model embeddings"], 0],
            ["What is a Django model commonly used to define?", ["Application data and its persistence mapping", "A CSS theme", "An LLM system prompt"], 0],
            ["What does an ORM provide?", ["A way to work with database records through objects", "A guarantee of perfect query performance", "A browser-side session"], 0],
            ["Why use a CSRF token for a cookie-authenticated form?", ["To help verify the request originated from the intended application flow", "To encrypt the database", "To identify an embedding model"], 0],
            ["What does a 404 HTTP response indicate?", ["The requested resource was not found", "The request was created", "The server requires a new database"], 0],
            ["What does the POST method commonly submit?", ["Data for processing or resource creation", "A browser stylesheet", "A DNS record"], 0],
            ["Why keep configuration outside committed source code?", ["To adapt environments and protect secrets", "To make Python ignore imports", "To remove application validation"], 0]
          ]
        },
        {
          title: "LLMs, prompt design, and model APIs",
          questions: [
            ["What is a large language model (LLM)?", ["A model that generates text from learned patterns", "A guaranteed source of verified facts", "A vector database"], 0],
            ["Why can a fluent model answer still be wrong?", ["Fluency does not guarantee factual accuracy", "The model always uses a current database", "Grammar implies verification"], 0],
            ["What makes a prompt easier to follow?", ["A clear task, context, constraints, and output format", "Contradictory requirements", "A secret key in the prompt"], 0],
            ["What does a system instruction commonly define?", ["Broad behavior and constraints for the assistant", "The user's database password", "The vector dimensions"], 0],
            ["Why limit the context sent to a model?", ["To control relevance, cost, and context-window use", "To guarantee the answer is correct", "To disable tokenization"], 0],
            ["What is a model API response likely to include?", ["Generated output and usage or status metadata", "A signed certificate", "A guaranteed citation"], 0],
            ["How should an application handle a model API timeout?", ["Show a clear failure state and allow safe retry", "Display an invented answer as confirmed", "Expose the API key"], 0],
            ["Why keep model calls on a backend?", ["To protect credentials and apply server controls", "Browsers cannot display text", "It makes models deterministic"], 0],
            ["What is a token in language-model usage?", ["A unit of text processing used by the model", "An access certificate", "A database table"], 0],
            ["What does temperature generally influence?", ["Variation in generated output", "Whether a source is authentic", "The user's authorization level"], 0],
            ["What is a model context window?", ["The limited input and output token capacity for a request", "A browser viewport setting", "A database transaction"], 0],
            ["What is a common tradeoff of increasing temperature?", ["Potentially more varied output", "Guaranteed factual improvement", "Guaranteed shorter responses"], 0],
            ["What does a system message generally specify?", ["High-level behavior and constraints", "The database schema", "The current user's password"], 0],
            ["Why state the expected output format in a prompt?", ["To guide the structure of the response", "To guarantee the response is valid JSON", "To change model weights"], 0],
            ["Does a prompt alone guarantee a model follows every instruction?", ["No; outputs still need validation and testing", "Yes, if it is long enough", "Yes, if it uses uppercase text"], 0],
            ["What should an application do with model output before using it as structured data?", ["Parse and validate it against an expected schema", "Assume it is always valid", "Execute it as code"], 0],
            ["Why set a maximum output-token limit?", ["To bound response length and help control cost", "To guarantee correctness", "To disable content filtering"], 0],
            ["What does an API rate limit help control?", ["The number or pace of requests", "The model's training data", "The accuracy of citations"], 0],
            ["Why handle provider errors explicitly?", ["To distinguish failures and show a safe recovery path", "To present every failure as a valid answer", "To log API keys"], 0],
            ["When can retrying a model request be appropriate?", ["After a transient failure, with bounded retry behavior", "Forever on every error", "After exposing credentials"], 0],
            ["Why use bounded retries with backoff?", ["To reduce repeated load during transient failures", "To guarantee the provider never fails", "To hide the final error"], 0],
            ["What can structured output modes help with?", ["Constraining response shape when supported", "Proving every field is factually correct", "Eliminating application validation"], 0],
            ["What does a model's usage metadata help estimate?", ["Token consumption and request cost", "The user's identity", "Source-document permissions"], 0],
            ["Why should model and prompt versions be recorded for evaluation?", ["To compare behavior across changes", "To expose secret keys", "To avoid regression testing"], 0],
            ["What should be done before sending user data to an external model provider?", ["Review privacy, consent, retention, and data-minimization needs", "Send all available data by default", "Assume the provider deletes everything immediately"], 0]
          ]
        },
        {
          title: "Embeddings and retrieval-augmented generation",
          questions: [
            ["What is an embedding?", ["A vector representation of content", "A password hash", "An HTML landmark"], 0],
            ["What can vector similarity help find?", ["Content with semantically related representations", "The newest source automatically", "Every correct answer"], 0],
            ["What is a common purpose of chunking documents?", ["Creating manageable units for indexing and retrieval", "Encrypting the model response", "Removing source metadata"], 0],
            ["Why retain source metadata with a chunk?", ["To trace retrieved content back to its origin", "To increase hallucinations", "To replace access controls"], 0],
            ["What does retrieval-augmented generation (RAG) do?", ["Supplies retrieved context to a model for generation", "Fine-tunes every model automatically", "Guarantees the context is true"], 0],
            ["Why should retrieved results be checked for relevance?", ["Poor matches can mislead the generated answer", "Vector search never returns results", "Relevant results expose API keys"], 0],
            ["What is a useful response when retrieval finds no adequate evidence?", ["Say the available sources do not support an answer", "Invent a confident citation", "Pretend retrieval succeeded"], 0],
            ["What is a citation useful for in a grounded answer?", ["Helping a reader inspect the supporting source", "Proving the model cannot be wrong", "Replacing data permissions"], 0],
            ["Why apply access controls during retrieval?", ["To prevent users from receiving unauthorized source data", "To improve tokenization", "To make every source public"], 0],
            ["What does an embedding model do to text?", ["Maps it to a numerical vector representation", "Creates a signed document", "Validates user identity"], 0],
            ["Why split a long source into chunks for retrieval?", ["To retrieve focused portions within model context limits", "To remove the need for source metadata", "To train the model automatically"], 0],
            ["What can chunk overlap help preserve?", ["Context that spans a boundary between neighboring chunks", "User authentication", "The source file's permissions"], 0],
            ["What does top-k retrieval select?", ["Up to k candidate results", "Exactly k correct answers", "The k newest users"], 0],
            ["What does cosine similarity compare?", ["The angle between vector representations", "The dates of source documents", "The length of API keys"], 0],
            ["What is a reranker used for?", ["Reordering retrieved candidates by estimated relevance", "Generating embeddings from passwords", "Replacing source authorization"], 0],
            ["What is hybrid search?", ["Combining lexical and semantic retrieval signals", "Searching only the newest document", "Combining two model prompts"], 0],
            ["Why filter retrieval results by metadata?", ["To narrow candidates by attributes such as source or access", "To increase the model's context window", "To modify the source text"], 0],
            ["What does a retrieval similarity score indicate?", ["A ranking signal, not proof that a result is relevant or true", "A verified probability of truth", "The document's authorization level"], 0],
            ["Why avoid placing too much retrieved text into a prompt?", ["Irrelevant context can add noise and cost", "More context always improves accuracy", "The model cannot process multiple chunks"], 0],
            ["What should a displayed source citation link to?", ["The specific source or passage supporting the answer", "A random document in the same collection", "The model provider's home page"], 0],
            ["Does citing a retrieved passage prove a generated claim is supported?", ["No; the passage and claim still need checking", "Yes, every citation is automatically correct", "Yes, if the source is long"], 0],
            ["What should an indexing pipeline do when a source changes?", ["Refresh or invalidate its affected indexed chunks", "Keep stale content forever", "Change the user's permissions"], 0],
            ["Why may a retrieval system need document-level authorization filters?", ["To prevent unauthorized source content from entering model context", "To improve font rendering", "To guarantee better embeddings"], 0],
            ["What is a useful no-answer threshold for retrieval?", ["Abstain when evidence is insufficient or below a tested threshold", "Always select the lowest-ranked result", "Invent a source"], 0],
            ["What should be considered when choosing an embedding model?", ["Language, domain, dimensions, quality, and operational cost", "Only the logo color", "Whether it removes access controls"], 0]
          ]
        },
        {
          title: "Evaluation, safety, and production",
          questions: [
            ["What is a representative evaluation set for?", ["Measuring behavior on relevant example inputs", "Training users to trust every answer", "Replacing monitoring"], 0],
            ["Why include failure cases in evaluation?", ["To reveal where the system behaves poorly", "To ensure every score is perfect", "To avoid testing safety"], 0],
            ["What should human review do for consequential output?", ["Provide oversight where errors could matter", "Automatically confirm every model answer", "Expose hidden chain-of-thought"], 0],
            ["What is prompt injection?", ["Untrusted content attempting to override intended instructions", "A vector indexing method", "A harmless CSS property"], 0],
            ["How should untrusted retrieved text be treated?", ["As data, not as trusted instructions", "As an administrator command", "As a source of API credentials"], 0],
            ["Why minimize personal data sent to a model?", ["To reduce privacy exposure", "To guarantee model accuracy", "To improve CSS responsiveness"], 0],
            ["What should production logs avoid recording?", ["Secrets and unnecessary sensitive user content", "Operational error codes", "Request timing"], 0],
            ["Why monitor an AI feature after release?", ["To detect quality, safety, latency, and cost issues", "To guarantee zero failures", "To eliminate evaluation datasets"], 0],
            ["What should an AI capstone disclose?", ["Sources, evaluation, limitations, and safety boundaries", "Only a model brand", "Private credentials"], 0],
            ["What is responsible fallback behavior when the model fails?", ["Explain the issue without fabricating a result", "Return a made-up answer as verified", "Hide every error from the user"], 0],
            ["What is a golden evaluation set?", ["A reviewed set of examples and expected criteria for comparison", "A set guaranteed to include no failures", "A production credential store"], 0],
            ["Why separate evaluation examples from prompt-writing examples?", ["To reduce the risk of tuning only to the test set", "To avoid recording results", "To guarantee every output matches exactly"], 0],
            ["What does retrieval recall measure?", ["How many relevant items were retrieved from the relevant set", "How fluent the generated answer sounds", "The API's response time"], 0],
            ["What does retrieval precision measure?", ["How many retrieved items are relevant", "How many tokens a prompt contains", "How many users are logged in"], 0],
            ["What should an answer-quality rubric assess?", ["Grounding, relevance, completeness, and safety criteria", "Only response length", "Only model name"], 0],
            ["Why test adversarial prompts?", ["To find failures under intentional misuse attempts", "To improve the visual theme", "To bypass data authorization"], 0],
            ["What is output moderation used for?", ["Applying policies to generated content before or after display", "Verifying every factual claim", "Protecting database backups"], 0],
            ["Why validate tool calls made by a model?", ["Model output is untrusted and should not grant unrestricted actions", "Tool calls cannot contain errors", "The model has administrator authority"], 0],
            ["What is a human-in-the-loop review?", ["A person checks or approves selected system outputs", "A model reviews itself with certainty", "A logging format"], 0],
            ["What can a feedback control help users do?", ["Report whether an answer was helpful or problematic", "Change model weights directly", "Grant access to private documents"], 0],
            ["What should an AI system do when a source conflicts with another source?", ["Communicate the conflict or seek stronger evidence", "Choose one silently and present it as certain", "Invent a third source"], 0],
            ["Why monitor latency and token usage in production?", ["To understand responsiveness and operating cost", "To determine whether a citation is true", "To replace privacy controls"], 0],
            ["What should be included in a model change review?", ["Regression evaluation and safety checks", "Only a new product logo", "A promise that behavior cannot change"], 0],
            ["What is data minimization?", ["Collecting and using only data needed for a purpose", "Keeping all data indefinitely", "Sending every database field to the model"], 0],
            ["What should an AI feature's user-facing disclosure clarify?", ["Its capabilities, limits, and appropriate use", "That every answer is guaranteed", "How to retrieve hidden credentials"], 0]
          ]
        }
      ]
    }
  };

  const body = document.body;
  const course = courses[body.dataset.course];
  if (!course) return;

  const totalQuestions = course.sections.reduce((count, section) => count + section.questions.length, 0);
  const passMark = Math.ceil(totalQuestions * 0.4);
  const testHref = `${course.slug}-grand-test.html`;
  const resultHref = `${course.slug}-certificate.html`;

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  if (body.dataset.assessmentPage === "test") {
    const form = document.getElementById("grand-test-form");
    form.action = resultHref;
    let questionNumber = 0;

    course.sections.forEach((section, sectionIndex) => {
      const sectionElement = element("section", "test-section");
      sectionElement.setAttribute("aria-labelledby", `section-${sectionIndex + 1}`);
      const heading = element("div", "assessment-banner");
      const titleGroup = element("div");
      const sectionTitle = element("h2", "", section.title);
      sectionTitle.id = `section-${sectionIndex + 1}`;
      titleGroup.append(sectionTitle, element("p", "", `Questions ${questionNumber + 1}-${questionNumber + section.questions.length}`));
      heading.append(titleGroup, element("span", "", `${section.questions.length} questions`));
      sectionElement.append(heading);

      section.questions.forEach(([prompt, options, answer]) => {
        questionNumber += 1;
        const optionOffset = (questionNumber + sectionIndex) % options.length;
        const fieldset = element("fieldset", "question-block");
        const legend = element("legend");
        legend.append(element("h3", "", `${questionNumber}. ${prompt}`));
        fieldset.append(legend);

        options.forEach((_, optionIndex) => {
          const option = options[(optionIndex + optionOffset) % options.length];
          const label = element("label", "answer-row");
          const input = document.createElement("input");
          input.type = "radio";
          input.name = `q${questionNumber}`;
          input.value = String(optionIndex);
          label.append(input, element("span", "", option));
          fieldset.append(label);
        });
        sectionElement.append(fieldset);
      });
      form.insertBefore(sectionElement, form.querySelector(".submit-test"));
    });
  } else if (body.dataset.assessmentPage === "certificate") {
    const params = new URLSearchParams(window.location.search);
    const studentName = (params.get("studentName") || "").trim();
    const submitted = params.has("studentName") || params.has("q1");
    const retry = document.getElementById("retry-result");
    const certificate = document.getElementById("earned-certificate");

    document.querySelectorAll("[data-course-name]").forEach((node) => {
      node.textContent = course.name;
    });
    document.querySelectorAll("[data-test-href]").forEach((node) => {
      node.href = testHref;
    });

    if (!submitted) {
      document.getElementById("not-submitted").hidden = false;
    } else {
      let score = 0;
      let questionNumber = 0;
      course.sections.forEach((section, sectionIndex) => {
        section.questions.forEach(([, , answer]) => {
          questionNumber += 1;
          const optionOffset = (questionNumber + sectionIndex) % 3;
          const displayedAnswer = (answer - optionOffset + 3) % 3;
          if (params.get(`q${questionNumber}`) === String(displayedAnswer)) score += 1;
        });
      });

      if (studentName.length >= 2 && score >= passMark) {
        document.getElementById("certificate-name").textContent = studentName;
        document.getElementById("certificate-score").textContent = `Grand Test score: ${score}/${totalQuestions}`;
        document.getElementById("certificate-date").textContent = `Awarded ${new Date().toLocaleDateString()}`;
        certificate.hidden = false;
        document.getElementById("print-certificate").addEventListener("click", () => window.print());
      } else {
        document.getElementById("retry-name").textContent = studentName || "student";
        document.getElementById("retry-score").textContent = `${score}/${totalQuestions}`;
        document.getElementById("retry-message").textContent = studentName.length < 2
          ? "Enter your name on the test page before submitting."
          : `You need at least ${passMark} marks to pass. Review the lessons and try the Grand Test again.`;
        retry.hidden = false;
      }
    }
  }
})();
