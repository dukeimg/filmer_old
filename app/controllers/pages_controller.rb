class PagesController < ApplicationController
  layout "pages"
  layout "landing", only: [:index]

  def index
  end
end
