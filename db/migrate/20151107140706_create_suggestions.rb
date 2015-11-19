class CreateSuggestions < ActiveRecord::Migration
  def change
    create_table :suggestions do |t|
      t.text :content
      t.string :avatar
      t.string :name
      t.string :username

      t.timestamps
    end
  end
end
