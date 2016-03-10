var React = require('react');
var ListItem = require('./ListItem.jsx');

var vegetables = [{"id":1,"text":"spinach"}, {"id":2,"text":"lettuce"},{"id":3,"text":"red cabbage"}];

var List = React.createClass({
 
	render: function() {
		var listItems = vegetables.map(function(item) {
			return <ListItem key={item.id} vegetable={item.text} />;
		});
		return <ul>{listItems}</ul>;
	}
});

module.exports = List;