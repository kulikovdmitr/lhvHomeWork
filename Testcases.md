I created a small checklist in which I listed a list of checks with a sequence of steps and basic approaches,
which I usually use when testing.

### Basic checks without automation 
After launching and passing the tests, it will be possible to move on to testing without automation.
In the first paragraphs, our task is to make sure that there are no serious problems (conduct smoke testing) and then, if successful
the product can be tested in more depth.

Visual display of form elements (buttons, fields, and so on) // check that the display is correct without detailed comparison with the layout
- Successful creation of an order with correct arbitrary values entered //check that the order is created correctly)
- Creation of an application using the technique of equivalence classes and boundary values //
- Attempt to create an application when entering incorrect values // check that the system will work correctly

### Checks that check interaction with the backend without using the user interface (API testing)

- send request with valid data
- sending a request with invalid data (empty fields, using a different data type (instead of a number - a string),
  sending an empty request)
- sending a request with valid data + additional fields (which the backend does not know about)

### Checks to ensure correct operation under client-side quirks

- displaying and creating an application at various screen resolutions (from the most popular to the least popular)
- display and work in incognito mode
- display and work with blocked cookies
- use of third-party extensions, such as ad blockers

### Checks that check the calculation
Based on the formula used in the calculations, it is possible, using the technique of pairwise testing, to compile a table
below is an example. This can include cases that are impossible or difficult to automate.

| Case                          | Expected offered result | Result |
|-------------------------------|:-----------------------:|-------:|
| price of vehicle : 1000, VAT |          1000*          |  12.84 |


### Crossbrowser testing
Check the display of the basic scenario for creating an application (by filling in all the required fields)
Browsers (Desktop/Mobile) :

- Сhrome (last.ver)
- Firefox (last.ver)
- Safari (last.ver)

Test for minimum supported versions*

#### Checking application performance during degradations

The system must be adapted to degradation. If a problem occurs, the system should allow
continue working with minimal loss of functionality. Conditionally, failure of one of the dependent (or independent) requests
should not break the application.

- blocking http requests (checking - we check that the system will work correctly during degradation)
- request spoofing, sending responses with response codes (400x, 500x), for example using Charles Proxy
- checking the operation of the system with a slow Internet from the client side

#### Test case design (example)

Testcase : Clearing the field "Net income" and checking the impossibility of creating an order

Steps:

1. Go to https://www.lhv.ee/en/leasing#max-payment
2. Make sure that the "Net income" input field is displayed
3. Clear the value in the "Net income" field

Expected Result :
The informational message "The net income is too small to calculate the monthly installment."
Application creation button "Apply here" - not displayed (hidden)

