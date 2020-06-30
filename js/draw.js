/*******************************************************************************
PxWidget - Draw
*******************************************************************************/

pxWidget.jQuery(document).ready(function () {
    // Process all pxWidgets in the queue
    pxWidget.jQuery.each(pxWidget.queue, function (index, args) {
        var type = args[0] || null;
        var id = args[1] || null;
        var params = args[2] || null;

        pxWidget.draw.init(type, id, params);
    });
});
