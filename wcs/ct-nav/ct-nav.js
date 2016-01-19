Polymer({
	is: "ct-nav",
	
	ready : function(){
		var self = this;
		Array.from( self.querySelectorAll( "ct-button" ) ).forEach( ( elem ) => {
	elem.addEventListener( "click", ( event ) => {
		this.changeView( elem.getAttribute( "route" ) )
		});
	});
		},
	
  changeView: function ( newView ) {
    Array.from( document.querySelectorAll( "ct-page" ) ).forEach( function ( elem ) {
      elem.classList.add( "hidden" )
    });
    document.querySelector( "ct-page[view='" + newView + "']" ).classList.remove( "hidden" );
  }
});