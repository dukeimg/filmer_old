class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :suggestions
  has_attached_file :avatar, styles: {preview: '600x600>',  medium: "250x250#", thumb: "50x50#" }, default_url: "/images/:style/missing.png", :processors => [:cropper]
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/
  attr_accessor :crop_x, :crop_y, :crop_w, :crop_h

  def cropping?
    !crop_x.blank? && !crop_y.blank? && !crop_w.blank? && !crop_h.blank?
  end

  def avatar_geometry(style = :original)
    @geometry ||= {}
    @geometry[style] ||= Paperclip::Geometry.from_file(avatar.path(style))
  end

  private

  def reprocess_avatar
    avatar.reprocess!
  end
end
