'use strict';

var APP = window.APP = window.APP || {};

APP.interstitial = (function(){

    var bindModals = function() {
        var $enrollBtn = $('.enroll-btn');
        var $intTrigger = $enrollBtn;
        var $d3a1Interstitial = $('#d3a1-interstitial');
        var marginTop = 30;
        $enrollBtn.on('click', function(e){
            e.preventDefault();
            $intTrigger = $(this);
            modalBehavior($d3a1Interstitial,this.href,$intTrigger);
        });

        $('.interstitial').on('shown.bs.modal', function(e){
            $(this).trap().find('a:first').focus();
            //if you want to vertically-center the modal
            //marginTop = Math.round(($(window).height() - $(this).children('.modal-dialog').height()) / 2);
            //if (marginTop > 30) {
            //    $(this).children('.modal-dialog').css('margin-top', marginTop+'px');
            //}
        });

        $('.interstitial').on('hidden.bs.modal', function(e){
            $intTrigger.focus();
        });
    };

    var modalBehavior = function($modal,href) {
        //var href = $modal[0].href;
        $modal.modal();
        $modal.find('#interstitial-continue').attr('href', href);
    };

    var init = function() {
        console.log('APP.interstitial');
        bindModals();
    };

    /**
     * interfaces to public functions
     */
    return {
        init: init
    };

}());

$(APP.interstitial.init);
