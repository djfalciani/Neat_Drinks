#NEAT
***
*Have you ever wanted to know how your favorite bar or restaurant makes their tasty cocktails?*

###**NEAT** is the app for you! 

![Birb, the Neat mascot](/client/public/images/birb.png)

**NEAT** allows a bar or restaurant to upload recipes to some of their prized cocktails. Non-commercial users can then search the database for these recipes and rate them. Rated cocktail recipes are saved on the user's home page.

![Neat logo]((/client/public/images/neat-Logo.png)

###Collaborators
-Dan Falciani   | *back end*  
-Brendan McBryan  | *vision/management*  
-Cody Ballard   | *front end*

###Tech outline
***
Built in React, Neat uses MySQL to store the data users enter. Material UI was also used to bootstrap the front-end. Passport, Sequelize, and React Router were implemented as well.

###Usage
***
Using Neat is simple! From the landing page, login or create an account if you haven't already. 

![landing page](/client/public/images/landing-page.png)

Here, your profile page will display the drinks you've already rated and the bars that uploaded them. 
~image goes here~

To search the database by bar or cocktail name, go to the search page by clicking the **Birb** logo at the bottom of any page.

![Birb!](/client/public/images/neat-Logo-bird.png)

There you can find a bar's page where they list their cocktails
~image goes here~

or a specific drink you already know the name of. Give it a rating if you've tasted or made it!
~image goes here~

###Future developments
***
For rollouts, we have some features planned:

*Restructuring the data architecture so that drinks are made from a list of ingredients kept in the database. This way the data is more sanitized and uniform. Ultimately this would be a lot easier to maintain and provide a smoother experience for the user.

*Allowing users to upload their own recipes and optionally link them to the recipes they found and used for inspiration. 

*Bars could be able to edit their home pages by uploading an image for a background/using their logo

*Adding a drink journal where a beginner could go through a variety of classic cocktails and take notes/add ratings to better discern their tastes. 

*Connecting to a map API so users could search for bars in any given area that have uploaded their drinks to Neat.

###Issues encountered
Our issues in the front-end mostly stemmed from using Material UI. Given that it hooks into React and disallows the normal use of state, we had a lot of recalibrating to do-- our lessons in the bootcamp were more in the opposite direction. 

In the back-end, we had problems with manipulating data on tables that had been joined. Authentication also caused us significant delays. 