/**
 * Created by Sarfraz on 4/3/2015.
 */

$(function () {
    // enable syntax highlighting
    hljs.initHighlightingOnLoad();
    
    // add line numbering to code
    $('pre code').each(function(){
        var lines = $(this).text().split('\n').length - 1;
        var $numbering = $('<ul/>').addClass('pre-numbering');
        $(this)
            .addClass('has-numbering')
            .parent()
            .append($numbering);
        for(i=1;i<=lines;i++){
            $numbering.append($('<li/>').text(i));
        }
    });    

    // lowercase link hrefs
    $('a.lowercase').each(function () {
        this.href = this.href.toLowerCase();
    });

    // set nav link as selected if on the page
    var pageArray = document.location.href.split('/');
    var page = pageArray[pageArray.length - 1];    
    
    $('.page-links a').each(function(){
      var linkArray = this.href.split('/');
      var link = linkArray[linkArray.length - 1];
      
      if (link === page) {
        $(this).closest('li').addClass('active');
      }      
    });
    
});
