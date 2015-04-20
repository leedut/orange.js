(function(){
/*require实现
	list待加载模块 Array
	factory回调函数
*/
	window.require = function(list,factory){
		if(typeof list == "string"){
			LoadIt(list);
		}
		if(typeof list == "object" && list instanceof Array){
			console.log("run");
			var i;
			for(i=0;i<list.length;i++){
				LoadIt(list[i]);
			}
		}
	};

/*LoadIt脚本加载函数

*/
	function LoadIt(url){
		console.log(url);
		var node = document.createElement('script');
		var head = document.getElementsByTagName('head');
		head = head[0];
		node.onerror = function(){
			console.log("error");
		}
		node.src = url;
		head.insertBefore(node,head.firstChild);
	}
})();