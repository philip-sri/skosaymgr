angular.module('skosayMgr.login', [])

.controller('LoginController', function($http, $state, $scope, $localstorage, ApiEndpoint){
    
    this.loginData = {
        email: '',
        password: ''
    };
    
    this.login = function (loginData){
//
      console.log(ApiEndpoint);

      var req = {
            method: 'POST',
            url: ApiEndpoint.url+'/v1/managerLogin',
//            url: ApiEndpoint.url+'/v1/oauth/access_token',
            headers: {
                 'Content-Type': 'application/x-www-form-urlencoded' 
            },           
            data: "client_id=" + loginData.email + "&client_secret=" + 12345 + "&username=" + loginData.email + "&password=" + loginData.password

/*            data: { 
                client_id: loginData.email,
                client_secret: "12345",
                username: loginData.email,
                password: loginData.password 
            }   */
      };
        
      console.log(req);
      
//    $http.post(ApiEndpoint.url+'/v1/managerLogin', $scope.loginData).
        
      $http(req)
          .success(function(data, status, headers, config) {
          
            $localstorage.set('access_token', data.access_token);
            console.log($localstorage.get('access_token'));

          $scope.id = data.userid;
          $scope.expires = new Date;
          console.log('***SUCCESS***');
          console.log($scope);
          
          $state.go('tab.dash', { id: data.access_token });
 //           $state.go('app.inProgress', { id: data.userid });
   //         $state.go('app.resolved', { id: data.userid });
          })
          .error(function(data, status, headers, config) {

            console.log('***ERROR***'+'\n\n'+
                  'Status: '+status+'\n\n'+
                  'Details: '+data.message+'\n\n');
        
            
            console.log(config,status, data, status,headers);
            
        });
    }
    $scope.loginData = {};
})