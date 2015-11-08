class PagesController < ApplicationController
  layout "landing", only: [:index]

  def index
    if user_signed_in?
      redirect_to projects_url
    end
  end
end
