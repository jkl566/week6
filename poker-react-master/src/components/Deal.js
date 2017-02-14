var React = require('react')

var Deal = React.createClass({
  render: function() {
    return (
      <div className="col-sm-2">
        <h1><a href="#" className="btn btn-success" onClick={this.props.dealClicked}>Deal</a></h1>
      </div>
    )
  }
})



module.exports = Deal
