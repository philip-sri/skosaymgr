angular.module('skosayMgr.messages', [])

.controller('NewMessagesController', function($http, $ionicPopup, $scope, $state, $stateParams, $ionicScrollDelegate, $localstorage, ApiEndpoint) {
    $scope.id = $stateParams.id;

    console.log('New Messages'+'\n'+$scope.id);
    
//    var newList = this;
    $scope.stores = [];
    
    console.log($scope);
    this.access_token = $localstorage.get('access_token');
    console.log('access_token: '+this.access_token);


/* $http({method: 'GET', 
       url: '/entity/'+id+'?access_token='+token, 
       headers: {'Authorization': 'Bearer '+token}})
        .then(function(response){ // do stuff }); */
    
    
    var req = {
            method: 'GET',      
            url: ApiEndpoint.url+'/v1/new/?access_token='+this.access_token, 
//            url: ApiEndpoint.url+'/v1/new/',
            header: {
/*                'Authorization': 'Bearer '+this.access_token, */
                'Content-Type': 'application/x-www-form-urlencoded'   
            },
/*            data: "access_token=" + $localstorage.get('access_token')  */
    };
        
    console.log(req);
        
    $http(req)
        .success(function(data, status, headers, config) {
            
            $scope.stores=data.stores;
        
            console.log($scope);
//            $state.go('tab.dash', { id: $scope.id });
        })
        .error(function(data, status, headers, config) {
            console.log(data, status, config);
            console.log('***ERROR***'+'\n\n'+
                  'Status: '+status+'\n\n'+
                  'Error: '+data.error+'\n\n'+
                  'Error Description: '+data.error_description+'\n\n'
                       );
            alert('***ERROR***'+'\n\n'+
                  'Status: '+status+'\n\n'+
                  'Error: '+data.error+'\n\n'+
                  'Error Description: '+data.error_description+'\n\n'
                 );
        
        });

})

.controller('InProcessController', function($http, $ionicPopup, $scope, $state, $stateParams, $localstorage, ApiEndpoint) {
    $scope.id = $stateParams.id;

    console.log('In Process'+'\n'+$scope.id);
    
//    var inProgList = this;
    $scope.stores = [];
    
    console.log($scope);
    this.access_token = $localstorage.get('access_token');
    console.log('access_token: '+this.access_token);

    var req = {
            method: 'GET',
//            url: ApiEndpoint.url+'/v1/inprogress'
            url: ApiEndpoint.url+'/v1/inprogress/?access_token='+this.access_token,
        //            data: $scope.id;
      };
        
    $http(req)
        .success(function(data, status, headers, config) {
            
            $scope.stores=data.stores;
        
            console.log($scope.stores);
//            $state.go('tab.chats', { id: $scope.id });
        })
        .error(function(data, status, headers, config) {
            console.log(data, status, headers, config);

        
            console.log('***ERROR***'+'\n\n'+
                  'Status: '+status+'\n\n'+
                  'Error: '+data.error+'\n\n'+
                  'Error Description: '+data.error_description+'\n\n'
                       );
            alert('***ERROR***'+'\n\n'+
                  'Status: '+status+'\n\n'+
                  'Error: '+data.error+'\n\n'+
                  'Error Description: '+data.error_description+'\n\n'
                 );
        

        });

})

.controller('ResolvedController', function($http, $ionicPopup, $scope, $state, $stateParams, $localstorage, ApiEndpoint) {
    
    $scope.id = $stateParams.id;

    console.log('Resolved'+'\n'+$scope.id);
    
    $scope.stores = [];
    
    console.log($scope);
    this.access_token = $localstorage.get('access_token');
    console.log('access_token: '+this.access_token);
    
    var req = {
            method: 'GET',
            url: ApiEndpoint.url+'/v1/resolved/?access_token='+this.access_token,
//            url: ApiEndpoint.url+'/v1/resolved'
      };
        
    $http(req)
    
        .success(function(data, status, headers, config) {
            
            $scope.stores=data.stores;
        
            console.log($scope.stores);
//            $state.go('tab.account', { id: $scope.id });
        })
        .error(function(data, status, headers, config) {
            console.log(data, status, headers, config);

        
            console.log('***ERROR***'+'\n\n'+
                  'Status: '+status+'\n\n'+
                  'Error: '+data.error+'\n\n'+
                  'Error Description: '+data.error_description+'\n\n'
                       );
            alert('***ERROR***'+'\n\n'+
                  'Status: '+status+'\n\n'+
                  'Error: '+data.error+'\n\n'+
                  'Error Description: '+data.error_description+'\n\n'
                 );
        });

})