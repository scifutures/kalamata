
global.MockModel = function(tableName, modelMocks) {

    if(!modelMocks) modelMocks = {};

    var m = function() {};

    m.forge = function() {
        return { tableName: tableName };
    };

    m.prototype.fetchAll = modelMocks.fetchAll || function() {};
    m.prototype.where = modelMocks.where || function() {};

    return m;
};