exports.isISO8601 = function(dString){
    var regexp = /(\d\d\d\d)(-)(\d\d)(-)(\d\d)(T)?(\d\d)(:)(\d\d)(:)(\d\d)(\.\d+)?(Z|([+-])?(\d\d)(:)?(\d\d))?/;
    if (dString.toString().match(regexp)) {
        return true;
    } else
        return false;
};
