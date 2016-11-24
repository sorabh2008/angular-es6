# angular-es6
Sample code - beginner

Transform response in AngularJS
```javascript
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
```

Study Links
```
http://stackoverflow.com/questions/224664/difference-between-proxy-server-and-reverse-proxy-server
http://thinkapps.com/blog/post-launch/mobile-app-performance-tips/
```
