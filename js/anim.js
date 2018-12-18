function anim(selector){
	var selector = document.querySelectorAll(selector);
	if (selector.length == 1) {
		return selector[0];
	}else {
		return selector;
	}
}