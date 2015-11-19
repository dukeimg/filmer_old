# Fix "unpermitted parameters"  devise & rails 4 strong parameters issue
class RegistrationsController < Devise::RegistrationsController
  before_filter :configure_permitted_parameters

  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up).push(:name, :email, :avatar)
    devise_parameter_sanitizer.for(:account_update).push(:name, :email, :avatar)
  end

  protected

  def after_update_path_for(resource)
    user_path(current_user)
    puts 'hey'
  end
end