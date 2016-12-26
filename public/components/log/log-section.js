module.exports = {
    name: 'logSection',
    bindings: {
        windowId: '<',
        sectionId: '<',
        sectionTitle: '<'
    },
    template: require('./log-section.html'),
    controller: ['$config', 'SocketIO', function ($config, SocketIO) {
        require('./log-section.scss');
        let self = this;
        let isAutoScroll = true;
        let log;
        setTimeout(() => {
           SocketIO.log((data) => {
                if(!log) {
                    log = $(`#${self.windowId} .${self.sectionId}`);
                    log.mouseenter(() => {
                        isAutoScroll = false;
                    });
                    log.mouseleave(() => {
                        isAutoScroll = true;
                    });
                }
                data = JSON.parse(data);
                if(data.WindowId !== self.windowId || data.SectionId !== self.sectionId) return;                
                for(var msg of data.Msg){
                    if(msg.info)
                        log.append(`<div class="info"><i class="fa fa-info" aria-hidden="true"></i> ${msg.info}</div>`);
                    if(msg.warn)
                        log.append(`<div class="warn">${msg.warn}</div>`);
                    if(msg.log)
                        log.append(`<div class="log">${msg.log}</div>`);
                    if(msg.error)
                        log.append(`<div class="error">${msg.error}</div>`);
                    if(msg.debug)
                        log.append(`<div class="debug">${msg.debug}</div>`);
                }
                if(isAutoScroll) log.animate({ scrollTop: $(document).height() }, "slow"); 
            }); 
        });        
    }]
}
