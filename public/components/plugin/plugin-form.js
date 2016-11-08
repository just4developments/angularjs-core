app.component('pluginForm', {
    template: require('./plugin-form.html'),
    controller: ['$config', function ($config) {
        require('./plugin-form.css');
        var self = this;
        this.current = {};
        this.current.data = {};
        this.currentData = {};
        this.obj = [{
            "_id": "582059c5c6ce911a609d3a80",
            "name": "test batch",
            "des": "test des",
            "input": [{ 
                "a": {
                    "type": "Number",
                    "default": 1,
                    "component":"select-box",
                    "data": [{
                        "0": "None"
                    }, {
                        "1": "Pick someone"
                    }]
                },
                "b": {
                    "type": "Number",
                    "default": 2,
                    "component":"text"
                },
                "c":{
                    "type": "String",
                    "default": "Hello world",
                    "component":"text"
                },
                "d": {
                    "type":"Date",
                    "default":"",
                    "component":"date"
                },
                "e": {
                    "type":"Number",
                    "default": 1,
                    "component":"radio",
                    "data":[{
                        "0":"1st choice"
                    },{
                        "1":"2nd choice"
                    }]
                },
                "f":{
                    "type":"Number",
                    "default": 1,
                    "component":"multi-choice",
                    "data": [{
                        "0":"Hi"
                    },{
                        "1":"The"
                    },{
                        "2":"World"
                    },{
                        "3":"You"
                    }]  
                }
            }],
            "content": "/assets/shells/upload_bc80ad8be343d99b276e28df432a1ab1.zip"
        },{
            "_id": "582059c5c6ce911a609d4902",
            "name": "test batch 2",
            "des": "test des",
            "input": [{ 
                "f1": {
                    "type": "Number",
                    "default": 1,
                    "component":"select-box",
                    "data": [{
                        "0": "None"
                    }, {
                        "1": "Pick someone"
                    }]
                },
                "f2": {
                    "type": "Number",
                    "default": 2,
                    "component":"text"
                },
                "f3":{
                    "type": "String",
                    "default": "Hello world",
                    "component":"text"
                }
            }],
            "content": "/assets/shells/upload_bc80ad8be343d99b276e28df432a1ab1.zip"
        }];

        this.SelectPlugin = () => {
            this.current = this.obj[this.plugin_index];
        }
        this.exec = () => {
            this.currentData._id = this.current._id;
            this.currentData.name = this.current.name;
            this.currentData.des = this.current.des;
            this.currentData.content = this.current.content;

            //parser data type
            for(var o in this.current.input[0]){
                if(this.current.input[0][o].type == 'Number') {
                    this.currentData.data[o] = parseInt(this.currentData.data[o]);
                }
            }
            console.log(JSON.stringify(this.currentData));
        }
        
    }]
});