class ApplicationController < ActionController::Base
  before_action :basic_auth
  before_action :configure_permitted_parameters, if: :devise_controller? 

  private

  def basic_auth
    authenticate_or_request_with_http_basic do |id, diarypass|
      id == ENV["BASIC_AUTH_DIARY_USER"] && diarypass == ENV["BASIC_AUTH_DIARY_PASSWORD"]
    end
  end

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up)
  end

end
