// import original moment library
const moment = require.requireActual('moment');

// create a mock (fake) moment library
export default (timestamp = 0) => {
	return moment(timestamp);
};