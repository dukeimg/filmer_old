class SuggestionsController < ApplicationController
  def index
    @suggestions = Suggestion.all
    @suggestion = Suggestion.new
  end

  def create
    @suggestion = Suggestion.new(suggestion_params)
    @suggestion.save
    respond_to do |format|
      format.js
      format.html {redirect_to beta_path}
    end
  end

  private

  def suggestion_params
    defaults = {sign: current_user.username}
    params.require(:suggestion).permit(:content, :sign).merge(defaults)
  end
end
