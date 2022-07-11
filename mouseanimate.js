// ------------------------------------------------------------
// ANIMATED DIV FOLLOWING CURSOR
// - Coverts mouse to a message hover certain elements
// ------------------------------------------------------------

function setMessage(msg,div) {
    div.html(msg);
}

function updateDisplay(e,div) {
    div.css('left', e.pageX + 'px');
    div.css('top', e.pageY + 'px');
}

function showBox(div) {
    if (!tablet) {
        div.css('transition', 'opacity 0.4s');
        div.css('opacity', '1');
        $(' body ').css('cursor','none');

    }
}

function hideBox(div) {
    div.css('opacity', '0');
    $(' body ').css('cursor','unset');
}

function mouseAnimate() {

    const boxes = $('.mouseanimate');
    const style = `<style type='text/css'>
        .mouseanimate-div {
            display: block;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-200%);

            border: 0.05em solid black;
            background-color: #fff;
            padding: 0.5em 0.8em;
            font-size: 1.1em;
            border-radius: 10px;
            line-height: 1;

            opacity: 0;
            transition: opacity 0 ease; 
            z-index: 10;
            pointer-events: none;
            @media only screen and (max-width : 1024px) { display: none; }
        }
    </style>`;
    $(style).appendTo("head");

    if (boxes.length) {

        let animatedDiv = $("<div>", {id: "animatedDiv", "class": "mouseanimate-div"});
        $(' body ').append(animatedDiv);

        boxes.each( function(){

            let box = $(this);
            let message = box.attr('data-mouseanimate');
            setMessage(message,animatedDiv);

            box.mouseenter((e) => {
                updateDisplay(e,animatedDiv);
                showBox(animatedDiv);
            });
            box.mousemove((e) => updateDisplay(e,animatedDiv));
            box.mouseleave((e) => hideBox(animatedDiv));
        });

    }
}
