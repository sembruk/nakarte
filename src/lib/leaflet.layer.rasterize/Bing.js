import L from 'leaflet';
import 'lib/leaflet.layer.bing';

L.BingLayer.include({
        waitTilesReadyToGrab: function() {
            if (this._url) {
                return Promise.resolve();
            } else {
                return new Promise((resolve) => {
                        let i = setInterval(() => {
                                if (this._url) {
                                    clearInterval(i);
                                    resolve();
                                }
                            }, 50
                        )
                    }
                );
            }
        },

        cloneForPrint: function(options) {
            return new L.BingLayer(this._key, L.Util.extend({}, this.options, options));
        },
    }
);
