var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
  searchMovies: function(movie){
    console.log('Sirve o que?? ' + movie.title);
    AppDispatcher.handleViewAction({
      actionType: AppConstants.SEARCH_MOVIES,
      movie: movie
    });
  }
}

module.exports = AppActions;