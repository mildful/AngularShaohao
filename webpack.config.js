var path = require('path');

var config = {
   module: {
      loaders: [
         {
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass']
         }
      ]
   }
};