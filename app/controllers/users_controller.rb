class UsersController < ApplicationController


  def new
    @user = User.new
  end

  def show
    @user = User.find_by_id(params[:id])
    @current = current_user
  end

  def edit
    @user = current_user
  end

  def update
    @user = current_user
    if params[:old_password].blank? && params[:password].blank? && params[:password_confirmation].blank?
      puts 'if'
      if @user.update(user_params)
        redirect_to user_path(current_user)
      else
        redirect_to edit_user_path
      end
    else
      puts 'else'
      if @user.update(user_edit_params)
        redirect_to user_path(current_user)
      else
        redirect_to edit_user_path
      end
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      redirect_to user_path(current_user)
    else
      redirect_to new_user_path
    end
  end

  private

  def user_params
    defaults = {avatar_link: 'avatar-placeholder.png'}
    params.require(:user).permit(:name, :username, :email, :password, :password_confirmation, :avatar_link).merge(defaults)
  end

  def user_edit_params
    params.require(:old_password).permit(:password, :password_confirmation)
  end
end