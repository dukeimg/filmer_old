class User < ActiveRecord::Base
  before_save { self.email = email.downcase }
  attr_accessor :name, :email
  has_secure_password
  validates_confirmation_of :password

  validates :name, presence: true, length:{ maximum: 16 }

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

  validates :email, presence: true, format: { with: VALID_EMAIL_REGEX },
            uniqueness: { case_sensitive: false }

  validates :password, length: { minimum: 6 }

  has_many :projects
end
