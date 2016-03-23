$('.tabpanelen').each( function() {
    var mijnTab = $(this);
    var actieveButton = mijnTab.find('li.actief');
    var link = actieveButton.find('a');
    var actiefTab = $(link.attr('href'));
    
    mijnTab.on('click' , 'a' , function(e) {
        e.preventDefault();
        var link = $(this);
        var beoogdID = this.hash;
        
        if(beoogdID && !link.parent().is('.actief')){
            actiefTab.removeClass('actief');
            actieveButton.removeClass('actief');
            
            actiefTab = $(beoogdID).addClass('actief');
            actieveButton = link.parent().addClass('actief');
        }
    })
    
    
});