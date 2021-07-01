# Habitats-AroundtheWorld-Interactive

## Table of Contents

* Project Description + Background
* Directions
* Documentation
* Functions/Variables in main.js

## Project Description + Background

As a web developer for the University of Oregon I am the lead developer which maintains and adds features/interactives to an existing site which was built using Joomla CMS. I work with a graphic designer which creats mock ups for the designs whether it be a feature or interactive and I implement them into the site using HTML, CSS, JS, and PHP. In this project I created an interactive which allows its users (Which are middle school students) to roam around the world map and explore different habitats around the world. The main features include:

* Text-to-Speech feature. When opening a habitat and faced with a description a text-to-speech feature is shown which allows the students to read and hear the description this is throughout the interactive
* After getting past the description you are faced with the world map but now with pins located at different habitats. (This is only finished in the forest habitat) After clicking on the pins a video plays which gives you insight into that specific habitat.
* After the video ends a popup is shown with descirition about that habitat and after clicking on the right arrow animals are displayed which live in that habitat
* To exit press the x in the top right corner and you are back at the map with the pins.
* This interactive is not completely filled with content however the foundation of the code is already finished.

A main feature also added is allowing a designer/developer to easily insert content/images for this reason inside main.js consists of two objects containing all the data such as habitat location, habitat name, ... , and even videos. A plan to update this further to allow the main.js to instead grab the data from a JSON file instead of it being stored inside the javascript file.

## Directions:

* Either Download through git or go to https://odb2.github.io/Habitats-AroundtheWorld-Interactive/
* Open index.html and click start
* Click on a habitat (forest) on the left sidebar and click next
* Click on a pin which plays a video.
* After the video click on the right arrow and click an animal
* exit by clicking on the x button on the top right

## Documentation:

index.html - contains html code for the landing page that has the start button
styles.css - css code for index.html
start.html - html code for the main interactive
start.css - css code for the main interactive
main.js - contains the js code for the main interactive

## Functions/Variables in main.js:

    let modalDesc =

Description: modalDesc is a object inside an object which Contains habitat types and then descriptions/content for each type
Parameters:
habitattype -> 
	heading, content, img


    let habitats =

Description: habitats is an array full of parameters inside each location object which is inside the habitat object
parameters: 
habitattype -> 
	locations -> 
		[
		habitat1 -> 
			top,left,location,img,desc,gearth,gearth_Button,video,animals->
				[animal1->name,img,desc,animal2->name,img,desc],
		habitat2 -> 
			top,left,location,img,desc,gearth,gearth_Button,video,animals->
				[animal1->name,img,desc,animal2->name,img,desc]
		]

    function showMap(place)

desc: Displays the locations of the pin for each habitat
parameters; takes in place which is the habitattype
returns: map filled with different habitat pins

    function showInstruction()

desc: Displays the instrunction popup
parameters: none
returns: the popup is shown

    function speech(n)

desc: enables the text-to-speech feature to be stopped
parameters: takes in n which is can determine if the text-to-speech is disabled in the middle of talking
returns: text-to-speech disabled


    function speak(content)

desc: instructs browser to speak the t-t-s
parameters: takes in content
returns: 

    function showModel(model)

desc: This functions displays the popup after clicking on a habitat on the left sidebar
parameters: model is taking in as parameter this is a habitattype (forest,grassland,...)
returns: popup which contains habitattype and content inside

    function checkEnded()

desc: check if video ended so it can display next popup
parameters:
returns:

    function showlocDet(place, n)

desc: displays popup after video ends which contains content/imgs
parameters: takes in a habitat and n which keeps track of which habitat to show daintree rainforest or daintree rainforest2
returns: locations description

    function showAniDesc(place, n, i)

desc: Shows the animals content which includes a description and image and tts
parameters: takes in place=habitat, n= counter keeps track which habitat its on, i=keeps track of which animal content to display
returns:animal description
