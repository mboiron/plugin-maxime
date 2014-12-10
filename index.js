exports.Plugin = function (config) {
    config.addJS('/node_modules/maxime/front.js');
    config.addCSS('/node_modules/maxime/front.css');
};



/*

var direBonjour = function() {
    console.log('Bonjour !');
}

var direByeBye = function() {
    console.log('Bye bye !');
}

exports.direBonjour = direBonjour;
exports.direByeBye = direByeBye;

*/

//exports.Plugin = maxime;
