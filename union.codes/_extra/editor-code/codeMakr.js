$('*[doc-info]').each(function(){
	$(this).wrap('<div class="doc-container"></div>');
	$(this).closest('.doc-container').wrap('<div class="doc-wrapper"></div>');
   $(this).removeAttr('doc-info');

	var container = $(this).closest('.doc-container'),
		wrapper = $(this).closest('.doc-wrapper');

	//create button after div
	$("<div class='doc-button'>< /> Click to Show Code</div>").insertAfter(container);
	//create pre wrapper after button

	var button = container.next('.doc-button')
	$("<pre></pre>").insertAfter(button);
	//hide the pre so can slidetoggle later
	$("pre").hide();

	button.one("click", function() {

	  var cloned = $(this).prev('.doc-container').clone(),
	    code = $(cloned).html().split("\n").filter(function(n) {
	      return (n.replace(/\s+$/, '') != '');
	    }),
	    spacesOnLeft = code[0].match(/^ */)[0].length;

	  for (var i = 0, len = code.length; i < len; i++) {
	      var output = button.next('pre'),
	          existing_text=output.text(),
	          new_text=code[i].substring(spacesOnLeft);
	      output.text(existing_text + new_text + '\n');
	  }
	});
});

$(".doc-button").click(function() {
	$(this).next().slideToggle("fast", function() {});
});