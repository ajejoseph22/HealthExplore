const env = require('dotenv').config();
const path = require('path');

module.exports = {
	
	env,

	webpack: (config, options) => {
		config.resolve.alias['@'] = path.join(__dirname);
		return config;
	}

}