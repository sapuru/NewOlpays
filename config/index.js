var nodeEnv = process.env.NODE_ENV || 'development';
var config = {
  				development: 	require('./development'),
  				stage: 		    require('./stage'),
				production: 	require('./production')
	};

module.exports = config[nodeEnv];
