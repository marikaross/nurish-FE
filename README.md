# Nurish - Turing Mod 4 FEE Capstone Project
A site for nutritionists who specialize in tube-feeding to quickly search to find the appropriate formula for their patients.

## Background / About
With a vast number of tube feeding formulas available from multiple suppliers, nutritionists have resorted to referencing the numerous options from multiple booklets that they carry with them on the job.  Nurish aims to compile all of the relelvant data in one place, allowing the nutritionist to search the formulas using a variety of parameters for specific needs or filter formulas based on patient's needs.   

## See It Live
[Nurish](https://nurish-app-fe.herokuapp.com/) on Heroku


## Primary JavaScript Technologies Used
* React
* React Router
* Redux

## Back End Technologies
* Ruby v. 2.4.1  
* Rails v. 5.2.1
* Factory Bot

## Additional Libraries/FrameWorks
* Semantic UI
* Jest/Enzyme
* RSpec


## Next Steps
### Additional enhancements could include:

* Incorporate more formula data from other suppliers
* Create a sign-in for nutritionists with adequate security to save previous formula recommendations for individual patients
* Add calulations option from formula details page to determine amount of formula to order for each patient


## Screenshots
### Splash Page:
<img src="https://github.com/marikaross/nurish-FE/blob/master/public/images/splashPage.png">


## Set Up
### Front-end
Clone the repo

Run ```npm install``` from the root directory

Run ```npm start``` and visit [localhost:3000](https://www.localhost:8080) in your browser

## Back-end
Clone the associated [back-end repo](https://github.com/shebesabrina/Nurish-BE)

Run ```bundle install``` from the root directory
Set-Up the Database ```rake db:{create,migrate,seed}```
Run ```rails s``` from the root directory

## Testing
Nurish uses Jest and Enzyme for front-end testing and RSpec for back-end testing

Run with ```npm test```  or ```rspec``` from the associated root directory

## Original Assignment
[Capstone Project](http://frontend.turing.io/projects/capstone.html) from the Turing School of Software & Design

## Contributors
[Jeremiah Stanley](https://github.com/jeremiahjstanley)
[Marika Ross](https://github.com/marikaross)
[Sabrina Robinson](https://github.com/shebesabrina)

