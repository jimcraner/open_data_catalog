(function(window, $){

	// Set up a namespace.
	var ns = {
		dom: {},
		event: {}
	};

	ns.event.searchFocus = function(e) {
		// Event that takes when the search bar becomes focused.
		var self = $(this),
			time = 200,
			animation;

		if (e.type == 'focusin') {
			animation = { width: '+=25%' };
		} else {
			animation = { width: '100%' };
		}

		self.animate(animation, time);
	}

	ns.dom.search = function(e) {
		// Bind the searchFocus function and add autocomplete.
		var search = $('input.search_bar');
		search.bind('focusin focusout', ns.event.searchFocus)
			  .autocomplete({
				  // Need to implement Ajax sources.
				  source: ['abc', 'def', 'ghi'],
				  select: function(e) {
					var form = $('form');
					form.submit();
				  }
			  });
	}

	ns.dom.init = function(){
		// Initalize function for DOM functionality.
		var dom = ns.dom;
		dom.search();
	}

	ns.main = (function(){
		// Anonymous function that acts much like C's ``int main``.
		var dom = ns.dom;
		dom.init();

		// Bind the namespace function to the window.
		window.ns = ns;

		// Just making sure that it executed.
		return true;
	})();


})(window, jQuery);