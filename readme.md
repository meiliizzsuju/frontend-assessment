# Ticha | Frontend Assessment

[![Netlify Status](https://api.netlify.com/api/v1/badges/f146159c-f0c4-443a-bacd-dd8214b4f4ea/deploy-status)](https://app.netlify.com/sites/mindarc-assessment/deploys)

Preview link: https://mindarc-assessment.netlify.app/


## Exercise 1

Build a responsive page based on the designs.

To view the page please following the command below:
`npm i` to get all the dependency
`npm start` to start local preview



## Exercise 2
please navigate to page `/exercise2` to view the accordion/tab result or https://mindarc-assessment.netlify.app/exercise2

**Explain why the result of ('b' + 'a' + + 'a' + 'a').toLowerCase() is banana.**
> Answer: 
This is the result of type coercion and string concatenation.
Usually, When all the string are adding up wih '+' the result will still have type of sthing.
In this case, there is a gap where ' + + ' is used together with no value to add up, following by a string . This make it auttomatically convert the type NAN.
**'ba' + + 'a' is result in 'baNANa'**
then is being lowercased with the `toLowerCase()` which result in banana




Thank you for your time and consideration!