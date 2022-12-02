# Development

### Link to Deployed Website
https://stresseddolphin154.github.io/development/

### Goal and Value of the Application
The goal of this application is to allow a personalized sports store where user
can filter by the sport and brand. It has value because the user can customize a store based on the sport of their choosing and the brand of their liking. With more sports and store items this application will be very useful so a Hockey player does not have to look through Soccer equipment to find a new pair of skates. 
 
### Usability Principles Considered
In terms of usability, it makes sense for the user to filter both by OR and by AND.
Thus there are two OR filters, one for sport and one for brand. However these filters
can work together so you can filter by both brand and sport. I considered making the cart and sort features not at the bottom of the page but on the side for usability, but as we are not being graded on design, I left it on the bottom to focus on functionality. 
 
### Organization of Components
My components are organized into a separate component folder and then are imported in the App.js file. There are two components, one for store items and one for the aggregator. I would have liked to add one for the filter but was unsure how to do that while maintaining the functionality.
 
### How Data is Passed Down Through Components
Data is passed down through components using props. In my Aggregator component it passes down the data of the cart and total price associated with the itemData that is being passed into the web application. The StoreItem component passes down the data of the item, cart, and updateCart function from the App.js file. 
 
### How the User Triggers State Changes
 
The user triggers state changes by clicking on either the radio buttons or one of the filtering checkboxes. This call functions that sort and filter through the data to display the desired outcome. I would like to point out that the popular radio button did work before deploying and now is currently not resetting the data but I did not change any of my code.


