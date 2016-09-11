(function($,window,document,undefined){
	//为什么要传递undefined
	//创建对象，这个对象上挂载了我的插件方法
	var lmy = {
		version:'1.0.1',
		author:'朱林峰',
		description:'这是我自己写的插件，如果大家想要学习的话，可以参考',
		init:function(){
			var $this = $(this)
			//可以初始化的操作
		}
		//其他的方法
		
	}
	
	$.fn.tab = function(options){
		return this.each(function(){
			var $this = $(this)
			if(typeof  options == 'string' && lmy[options]){
				return lmy[options].call(this)
			}else if(!lmy[options] && typeof options == 'object'){
				return lmy.init(this)
			}else{
				$.error('方法不存在')
				return this
			}
		})
	}
})(jQuery,window,document,undefined)