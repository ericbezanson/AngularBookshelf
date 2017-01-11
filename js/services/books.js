app.factory("books",['$http', function($http){
  return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/books-api/books.json')
  .success(function(data){
    return data; // uppon successfull get request return data from json
  })
  .error(function(err){
    return err;
  });
}]);

