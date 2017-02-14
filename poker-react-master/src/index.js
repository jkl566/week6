// DO NOT MODIFY

// So we can use React
var React = require('react')
var ReactDOM = require('react-dom')

// Helper functions
// .shuffle() shuffles (randomizes the order of) an array
// e.g. [1,2,3,4,5].shuffle()
// getDeck() gives us an array of cards, represented as strings
// Hint: JavaScript's built-in .splice() function will remove elements from an
// array to create a new array. For example, a "hand" from a deck of cards might
// go something like this:
//
// deck.splice(0,5)
var helpers = require('./components/Helpers')
var getDeck = helpers.getDeck
Array.prototype.shuffle = helpers.shuffle

// Our component classes
var Card = require('./components/Card')
var Deal = require('./components/Deal')
// END OF STUFF TO NOT MODIFY

var App = React.createClass({
  dealClicked: function() {
/*      window.alert("Hello")*/
      this.setState({
        cards: getDeck().shuffle().splice(0,5)
      })
    },
   getInitialState: function(){
     return {
       cards: ["face_down", "face_down", "face_down", "face_down", "face_down"]};
   },
 render: function() {
   return (
     <div>
       <h1>Welcome to the KIEI-924 Casino!</h1>
       <div className="row">
         <Deal dealClicked={this.dealClicked}/>
         <Card  cards={this.state.cards[0]}/>
         <Card  cards={this.state.cards[1]}/>
         <Card  cards={this.state.cards[2]}/>
         <Card  cards={this.state.cards[3]}/>
         <Card  cards={this.state.cards[4]}/>
       </div>
     </div>
   )
 }
})


  /*render: function() {
    return (
      <div>
        <h1>Welcome to the KIEI-924 Casino!</h1>
        <div className="row">
          <Card />
          /*<Card dealClicked={this.dealClicked}
                        movie={this.state.currentCards} />    */

                      /*<div className="col-sm-2">
            <h1><img className="img-responsive" src={"http://golearntocode.com/images/cards/" + "face_down" + ".png"} /></h1>
          </div>
          <div className="col-sm-2">
            <h1><img className="img-responsive" src={"http://golearntocode.com/images/cards/" + "face_down" + ".png"} /></h1>
          </div>
          <div className="col-sm-2">
            <h1><img className="img-responsive" src={"http://golearntocode.com/images/cards/" + "face_down" + ".png"} /></h1>
          </div>
          <div className="col-sm-2">
            <h1><img className="img-responsive" src={"http://golearntocode.com/images/cards/" + "face_down" + ".png"} /></h1>
          </div>
          <div className="col-sm-2">
            <h1><img className="img-responsive" src={"http://golearntocode.com/images/cards/" + "face_down" + ".png"} /></h1>
          </div>
          <div className="col-sm-2">
            <h1><a href="#" className="btn btn-success">Deal</a></h1>
          </div>*/
/*        </div>
      </div>
    )
  }
})*/

ReactDOM.render(<App />, document.getElementById("app"))
