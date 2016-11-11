var React = require('react');
var ListItem = require('./ListItem.jsx');

var testItems = [{"id": 1, "text": "1st test item"}, {"id": 2, "text":"2nd test item"}, {"id": 3, "text": "3rd test item"}];

var List = React.createClass({
  render: function() {
    var listItems = testItems.map(function(item) {
      return <ListItem key={item.id} testItem={item.text} />;
    });

    return (<ul>{listItems}</ul>);
  }
});

module.exports = List;