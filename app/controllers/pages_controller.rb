class PagesController < ApplicationController
  layout "landing", only: [:index]
  skip_before_action :authenticate_user!

  def index
    if user_signed_in?
      redirect_to projects_url
    end
  end
end
