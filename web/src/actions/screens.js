import main from 'screens/main';

const store = require('foundations/store');
const screens = {
	main,
};

function getScreenByName(name) {
	return screens[name] || 'div';
}

function setSelected(name) {
	store.set('screens.selected', name);
}

module.exports = {
	getScreenByName,
	setSelected,
};


