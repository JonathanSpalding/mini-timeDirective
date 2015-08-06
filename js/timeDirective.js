var app = angular.module('timeApp');

app.directive('showTime', function(){
  return {
    restrict: 'E',
    template: '<div> {{formalIntroduction}}: {{personName}}' + '<button id="btn">Meet</button></div>', //The current time is {{time}} </div>
      
      scope: {
        formalIntroduction: '@', //String-literal  
        personName: '=name', //Two-way binding back to a controller
        meetFn: '&' //expression
      },
      
    link: function(scope, element, attrs){ //"link" means "when this directive is called, call this function." for the function, you can name those whatever you want, the first one is always the scope, the second is always the elemt, and the last is always the attribute.
      var currentTime = new Date();
      scope.time = currentTime.toLocaleString();
        
        element.on("click", function() {
            scope.meetFn(scope.personName);
        });
    }
  }
});