(function()
{   
    $('.page-3,.page-4,.page-5,.page-6,.page-7').show();
    
    $('.wp-inner').fullpage(
    {
        css3: true,
        change: function( e )
        {
            switch( e.cur )
            {
                case 0:
                {
                    $('.page-1 .content h2.animation-element').animate(
                    {
                        opacity: 1,
                        top: '50px'
                    }, 1200, 'ease-in-out', function()
                    {
                        $('.page-1 .content .p-1').animate(
                        {
                            opacity: 1,
                            top: '180px'
                        }, 800, 'ease-in-out', function()
                        {
                            $('.page-1 .content .p-2').animate(
                            {
                                opacity: 1,
                                top: '250px'
                            }, 800, 'ease-in-out');
                        });
                    });
                    break;
                }

                case 1:
                {
                    $('.page-2 .content .p-1').animate(
                    {
                        opacity: 1,
                        top: '60px'
                    }, 1200, 'ease-in-out', function()
                    {
                        $('.page-2 .content .p-2').animate(
                        {
                            opacity: 1,
                            top: '130px'
                        }, 800, 'ease-in-out', function()
                        {
                            $('.page-2 .content .p-3').animate(
                            {
                                opacity: 1,
                                top: '230px'
                            }, 800, 'ease-in-out', function()
                            {
                                $('.page-2 .content h4').animate(
                                {
                                    opacity: 1,
                                    top: '360px'
                                }, 800, 'ease-in-out');
                            });
                        });
                    });
                    break;
                }

                case 2:
                {
                    page31();
                    
                    break;
                }

                case 3:
                {
                    page41();
                    
                    break;
                }
            }

            $('.page.page-' + (e.cur + 1)).addClass('active');
        }
    });

    function page31()
    {
        if( $('.page-3.active').size() > 0 )
        {
            return;
        }
        var $cite = $('.page-3 .content .item-1 cite');
        var _citeVal = 2;
        var _citeInterval = setInterval(function()
        {
            _citeVal+=2;
            if(_citeVal > 100)
            {
                clearInterval( _citeInterval );

                page32();

                return;
            }
            $cite.html( _citeVal + '%' );

        }, 30);
    }


    function page32()
    {
        var $cite = $('.page-3 .content .item-2 cite');
        var _citeVal = 40;
        var _citeInterval = setInterval(function()
        {
            _citeVal+=40;
            if(_citeVal > 1600)
            {
                clearInterval( _citeInterval );

                page33();

                return;
            }
            $cite.html( _citeVal );

        }, 30);
    }

    function page33()
    {
        var $cite = $('.page-3 .content .item-3 cite');
        var _citeVal = 40;
        var _citeInterval = setInterval(function()
        {
            _citeVal+=40;
            if(_citeVal > 1680)
            {
                clearInterval( _citeInterval );
                return;
            }
            $cite.html( _citeVal );

        }, 30);
    }



    function page41()
    {
        if( $('.page-4.active').size() > 0 )
        {
            return;
        }

        var $cite = $('.page-4 .content .item-2 cite');
        var _citeVal = 29;
        var _citeInterval = setInterval(function()
        {
            _citeVal+=29;
            if(_citeVal > 2900)
            {
                clearInterval( _citeInterval );

                page42();

                return;
            }
            $cite.html( _citeVal + '%' );

        }, 20);
    }


    function page42()
    {
        var $cite = $('.page-4 .content .item-3 cite');
        var _citeVal = 4;
        var _citeInterval = setInterval(function()
        {
            _citeVal+=4;
            if(_citeVal > 428)
            {
                clearInterval( _citeInterval );
                
                return;
            }
            $cite.html( _citeVal );

        }, 20);
    }

})();