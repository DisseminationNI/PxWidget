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
                "url": "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                "options": {
                    "attribution": "&copy; <a target=\"_blank\" href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a>"
                }
            }
        ],
        "esri": [
            {
                "url": "https://utility.arcgis.com/usrsvcs/servers/ce02927505e346a1962d5c8479e0ce0e/rest/services/VectorBasemaps/OSNIFusionBasemap/MapServer"
            }
        ]
    }
};
      
   
