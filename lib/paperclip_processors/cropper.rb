module Paperclip
  class Cropper < Thumbnail
    def transformation_command
      if crop_command
        puts '2'
        crop_command + super.first.sub(/ -crop \S+/, '')
      else
        super
      end
    end

    def crop_command
      target = @attachment.instance
      if target.cropping?
        puts '3'
        " -crop '#{target.crop_w}x#{target.crop_h}+#{target.crop_x}+#{target.crop_y}'"
      end
    end
  end
end