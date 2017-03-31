#Cookbook

Cookbook is going to be a recipe sharing application at first the basic funcationality is going to built with VanillaJS, and then later on we will come back and rebuilt the site, with all of its internal features like posting new recipes and such, using Vue

These are the goals for the first section of the project with Vanilla Js

1. Designing the landing page and create filler Content. I will post a mockup of what this will look like soon and then you can start working on that. The landing page will contain the following
..* A header banner section with an input for searching
..* A short container featuring trending authors
..* A section display one or a couple recipes as featured content
..* A container that will eventually become a carousel to display the newest recipes
..* A section for popular categories of recipes and groups dedicated to types of cooking

This seems like a lot and it is, but don't worry. We won't be building the functionality for all of these things any time soon. That will wait until you are comfortable with Vue and this will be your first large-scale production ready project. When that time comes I will collaborate with you a bit and we will turn out a good product. This is actually a project that someone had mentioned to me as a "Social-networking" site for chefs that would allow restaurants to join and share their recipes, write articles, and be able to use it as a method of communication between all of their many stores and employees to push through changes worldwide. At a later date we could push the platform to this and actually turn it into a marketable application. Anyway, continuing on.

2. Once the landing page is mocked out, you will need to create a JSON file to contain the infomation stored on the landing page and figure out how to EFFECTIVELY inject this content into the page
..* You're going to be adding a lot of content to the DOM, that can be expensive. You should make sure you are creating as many virtual nodes in JS as you can, (document.createElement and such, and doing as few document.appendChilds as possible
..* This might take a while to load, so while this function is running you should create a loading indicator for the page, you should do this with a Promise. Initialize the loading state, start your promise to fetch the data, resolve it, sort the data, handle the dom creation, append to dom, then remove the loading state
..* 

3. Using the Flickity plugin for a slider. It is a Vanilla JS slider and is super customizable and easy to use. 
..* There is a trick to this part because of how you creating the DOM. You can't just initialize the slider because there are no Nodes in the DOM for it to work with
..* Because of this you might initialize the Slider somewhere in your promise chain after the Carousel DOM nodes have been appended to the actual Document


4. Make the Search Bar actually functional. It doesn't have to be pretty because we will change it later
..* For now the search bar will just search for recipes, but when we get going with Vue in the future it will include everything. This kind of data is much easier to handle with Vue, so that is why we are going to wait
..* The search bar should, when a user types in it, wait a small amount of time, and then try to match the string the user has typed in against the recipe titles that you have stored in your javascript
..* If one is found then it will display a drop down under the search bar with the item names, and if not it will display no items found. We can discuss how to handle this feature when it comes time


## Part 2
=========

1. Create the all recipes page. This page will also need a JSON file containing a lot of recipes and their data.
..* Design the page according to a mockup and create some fake posts temporarily
..* construct your javascript again to pull data from the JSON file and then construct your DOM nodes in an efficient manner
..* Here is where things get a little different. DOM manipulation is expensive, and we will probably be loading a lot of image data as well. There is no reason to make users load that much data when they first visit the page. We are going to implement lazy-loading.
..* This means that users will only load that content when they choose. There are a couple ways to do this.
..* The first is append the new nodes as the user scrolls, say when they get 300px above where the next 3 images should be, they will then be appended to the DOM. The other and slightly easier way is with a load more button. The page will only append say 10 recipes and then a load more button will be displayed. The user will click this and you will cut out the next 10 recipes and append them. When the number of recipes shown = the total number then the button will go away


2. Add some UI features that we have neglected so far. I will update this section later when you have the mockups and a better idea of how this will look.




## Part 3
=========

1. This will be the newest section for you. We are going to host and deploy and application
..* This actually isn't very scary or hard and I will help you out with this a good bit, but it is important to learn and can be impressive.
..* We will need to setup a very basic Node server. This server doesn't need to be complex at all. It basically just needs to route and send us our pages correctly
..* We will then need to chose a host. Heroku is the easier, but I'm going to have us go with Amazon Web Service. It has a bit higher of a learning curve, mostly because you have a lot more control, but it isn't hard
..* The steps are fairly simple. Create an account, create an EC2 instance from their menu choosing the free options. Create a "Key" and download it and save it on your computer. You will need this
..* Create something called "Security groups" to allow connections to certain ports. Say your server is running on localhost:8000, then you will need to allow connections on port 8000. Super easy
..* You'll need to SSH into your instance, just a single command line command and then install all the dependency your app needs and clone the github project
..* Start up your application, that is all there is to it. We could set up something like Nginx here to run infront of our application and handle caching and such, but that is way more than is necessary right now and we can put that off until far in the future






## Yay!
=======

I know that seems like a lot, and honestly it is. This is not a short project. This is something that you will be working on for a while. It is done that way intentionally. You'll learn a lot from this, but by the time you finish everything, you probably will have finished ES6, started on Node, and have started on and might understand decently Vue. That will give you the perfect opportunity to dive into the full features of this Application with Vue which will be much more in-depth and take some time, but will definitely be an incredibly impressive project for a Portfolio. It could be your "premium" project that will get you the job you want.

So, here goes. This is training wheels off. If you can do this first part, then you are ready for a large-scale project and should feel comfortable calling yourself a developer to people around you

As always, feel free to ask me about anything. I don't expect you to do all of this blind on your own or even with resources you can find. If you do then even better and you're doing a bang-up job, but you'll ask for help a lot when you get a job so don't be shy!