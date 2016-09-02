# angular-es6
Sample code - beginner

Transform response in AngularJS
		return $http({
			  url: url,
			  method: 'POST',
			  config: config,
			  data: data,
			  transformResponse: function(data, headersGetter, status) {
			  console.log(11,data, headersGetter, status)
					return {content: data};
				}
			});