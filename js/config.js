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
                "url": "https://utility.arcgis.com/usrsvcs/servers/4e112f1a7fb047869a7247a0a2efb175/rest/services/VectorBasemaps/OSNIFusionBasemap_WGS84/MapServer"
            }
        ]
    }
};
