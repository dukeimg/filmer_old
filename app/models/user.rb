class User < ActiveRecord::Base
  before_save { self.email = email.downcase }
  has_secure_password
  validates_confirmation_of :password_digest
  has_many :projects
  attr_accessor :old_password

  validates :name, presence: true, length: {maximum: 50}
  validates :username, presence: true, uniqueness: { case_sensitive: false }, length: {maximum: 50}
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, format: {with: VALID_EMAIL_REGEX}, uniqueness: { case_sensitive: false }
  validates :password, presence: true, length: {minimum: 6}
  validates :password_confirmation, presence: true
end