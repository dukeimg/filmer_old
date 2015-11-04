class PagesController < ApplicationController
  layout "landing", only: [:index]

  def index
    if current_user
      redirect_to projects_url
    end
  end
end
