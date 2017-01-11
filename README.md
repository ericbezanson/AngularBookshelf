# AngularBookshelf

## Installation
####In Browser
for quick access to the app visit this <a href="https://ericbezanson.github.io/AngularBookshelf/#/books">Link</a>
####Local
To run the app locally you will need to use a local server, I suggest installing <a href="https://www.mamp.info/en/">MAMP</a> and while in the console navigate to the htdocs folder within MAMP and run: <pre>git clone https://github.com/ericbezanson/AngularBookshelf.git</pre>
######(note: MAMP is just a personal suggestion, any local server will do)

##Functionality
Angular bookshelf is an app built using the angular JS framework. It allows users to select a book on a virtual bookshelf and begin reading it in browser. to do this simply click on the desired book and BookController will give you the "back of the book" experience. To continue on and actually read the book, simply click on the "read" button and you will be able to begin reading the book.

the Data for each book is stored on a amazon web server provided by CodeAcademy&reg; <a href="https://s3.amazonaws.com/codecademy-content/courses/ltp4/books-api/books.json">here</a> in a JSON format. The books.js service then grabs that data via http.get request inside an angular factory. That service is injected to the dependancy array of the controller and then fed to the view for your viewing pleasure.