$(document).ready(function () {
    var currentFloor = 2;
    var floorPath = $(".home-image path");
    var counterUp = $(".counter-up");
    var counterDown = $(".counter-down");
    var modal = $(".modal");
    var modalCloseButton = $(".modal-close-button");
    var viewFlatsButton = $(".view-flats");
    var flatPath = $(".flats path");
    var flatDesc = $(".flat-link");

    flatPath.on("mouseover", function(){
        flatPath.removeClass("current-flat");
        flatDesc.removeClass("flat-hover");
        currentFlat = $(this).attr('data-flat-img');
        $(`[data-flat='${currentFlat}']`).toggleClass("flat-hover");
    });

    flatDesc.on("mouseover", function(){
        flatPath.removeClass("current-flat");
        flatDesc.removeClass("flat-hover");
        currentFlatImg = $(this).attr('data-flat');
        $(`[data-flat-img='${currentFlatImg}']`).toggleClass("current-flat");
    });


    floorPath.on("mouseover", function(){
        floorPath.removeClass("current-floor");
        currentFloor = $(this).attr('data-floor');
        $('.counter').text(currentFloor);
    });

    floorPath.on('click', toggleModal);

    modalCloseButton.on('click', toggleModal);

    viewFlatsButton.on('click', toggleModal);

    counterUp.on("click", function() {
        if(currentFloor<18) {
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    });

    counterDown.on("click", function() {
        if (currentFloor>02) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    })
    function toggleModal() {
         modal.toggleClass("is-open");
    }
});