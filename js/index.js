var data=[
	{
		id:1,
		title:'新列表1',
		color:'#C970E3',
		todo:[
			{t:'下午开会',
				done:false
			},
			{t:'下午开会',
				done:false
			},
			{t:'下午开会',
				done:false
			}
		]
	},
	{
		id:2,
		title:'新列表2',
		color:'#6CDC30',
		todo:[
			{t:'下午开会',
				done:true
			},
			{t:'清晨开会',
				done:true
			},
			{t:'早上开会',
				done:false
			}
		]
	},
	{
		id:3,
		title:'新列表3',
		color:'#3FACF9',
		todo:[
			{t:'晚上开会',
				done:false
			},
			{t:'下午开会',
				done:true
			},
			{t:'下午开会',
				done:true
			}
		]
	}
]

var color=['#C970E3','#6CDC30','#3FACF9','#F3CC00','#9F855C','#F82368','#FA9600']
var app=angular.module('app',[]);
app.controller('left',function($scope){
	$scope.data=data;
	$scope.color=color;
	$scope.index=0;
	$scope.changColor=$scope.data[$scope.index].color;
	$scope.select=function(i){
		$scope.index=i;

		
	}

	$scope.btn=function(){
		var i=$scope.data.length;
		$scope.index=i+1;
		$scope.data.push({
			id:$scope.data.length+1,
			title:"新列表"+($scope.data.length+1),
			color:$scope.color[($scope.data.length)%7],
			todo:''}
			)
		$scope.index=i;
	}

	$scope.tabs=function(){
		$scope.show=false;
	}
	$scope.changTitle=$scope.data.title;
	$scope.com=function(){
		$scope.data[$scope.index].title=$scope.changTitle;
		$scope.data[$scope.index].color=$scope.changColor;
		$scope.show=false;
	}

	$scope.setting=function(v){
		$scope.changTitle=$scope.data[$scope.index].title;
		$scope.changColor=$scope.data[$scope.index].color;
		$scope.show=!$scope.show;
	}

	$scope.changeC=function(v){
		$scope.changColor=v;
		console.log(v);
	}

	$scope.del=function(v){
		$scope.data.splice($scope.index,1);
		$scope.show=false;
		$scope.index=0;
	}

	$scope.saveItem=function(ev,v){
		v.t=ev.target.innerText;
		console.dir(ev.target);
	}

	$scope.add=function(){
		$scope.data[$scope.index].todo.push(
			{
				t:"",
				done:false
			})
		// alert(1);
	}

	$scope.complete=function(v){
		v.done=!v.done
	}
})

