/*******************************************************************************
PxWidget - Config
*******************************************************************************/
// Init
var pxWidget = pxWidget || {};

/**
 * Preset jQuery Ajax calls to be ASynch by default
 * @param {*} options
 * @param {*} originalOptions
 * @param {*} jqXHR
 */
pxWidget.jQuery.ajaxPrefilter(function (options, originalOptions, jqXHR) {
    options.async = originalOptions.async === undefined ? true : originalOptions.async;
});

pxWidget.config = {
    "baseMap": {
        "leaflet": [
            {
                "url": "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
                "options": {
                    "attribution": "&copy; <a target=\"_blank\" href=\"https://www.google.co.uk/copyright\">Google Maps</a>"
                }
            }
        ],
        
    }
};
