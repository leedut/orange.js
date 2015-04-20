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
			var i;
			for(i=0;i<list.length;i++){
				LoadIt(list[i]);
			}
		}
	};

/*LoadIt脚本加载函数
	
*/
	function LoadIt(url){
		var node = document.createElement('script');
		var head = document.getElementsByTagName('head');
		head = head[0];
		node.onerror = function(){

		}
		node.src = url;
		head.insertBefore(node,head.firstChild);
	}

	function getBaseUrl(){
		//从上至下，顺序加载完orange.js后立即执行，所以拿到的script标签就是<script src="orange">
		//ie7一下存在兼容性问题 script加载之后虽然立即执行，但是拿到的标签却是所有html也中script的最后一个
		var scripts = document.getElementsByTagName('script');
		var node = scripts[scripts.length-1];
		return node.src;
	}

	console.log( getBaseUrl() );
})();