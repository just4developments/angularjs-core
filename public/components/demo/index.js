module.exports = {
    name: 'index',
    template: require('./index.html'),
    controller: ['$config', function ($config) {
        require('./index.scss');
        this.uploadDone = function(rs){
            if(rs.error) {
                // error
            }
            //Done: rs.resp.data
        }
        
    }]
}
