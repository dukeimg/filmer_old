class UsersController < ApplicationController
  def show
    @user = User.find_by_id(params[:id])
    @current = current_user
  end

  def update
    @user = current_user
    @user.update(user_params)
    respond_to do |format|
      format.json
      format.html {redirect_to user_path}
    end
  end

  def avatar_popup

  end

  private

  def user_params
    params.require(:user).permit(:avatar)
  end
end
