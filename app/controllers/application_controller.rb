class ApplicationController < ActionController::Base
  before_action :basic_auth

  private

  def basic_auth
    authenticate_or_request_with_http_basic do |id, diarypass|
      id == ENV["BASIC_AUTH_DIARY_USER"] && diarypass == ENV["BASIC_AUTH_DIARY_PASSWORD"]
    end
  end
end
