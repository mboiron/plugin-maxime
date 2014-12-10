L.K.Map.addInitHook(function () {
    this.whenReady(function () {
        var container = L.DomUtil.create('div', 'map-compare-container'),
            title = L.DomUtil.create('h3', '', container),
            params = {
                tms: false,
                url: '',
                suggestedUrl: L.K.Config.project.compareUrl,
                active: false,
                minZoom: this.options.minZoom,
                maxZoom: this.options.maxZoom
            };
        title.innerHTML = 'Map compare';
        var tilelayer, otherMap,
            init = function () {
                var container = L.DomUtil.create('div', 'map-compare', document.body);
                container.id = 'mapCompare';
                otherMap = L.map(container.id, {attributionControl: false});
                tilelayer = L.tileLayer(L.K.Config.project.compareUrl, params).addTo(otherMap);
                new L.Hash(otherMap);
            };

            container.appendChild(builder.build());
            this.sidebar.addTab({
            label: 'Max',
            className: 'maxime',
            content: container
        });
        
     });
});
