class SessionsController < Devise::SessionsController
  layout 'header-only', only: [:new]
end