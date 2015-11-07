class CreateSuggestions < ActiveRecord::Migration
  def change
    create_table :suggestions do |t|
      t.text :content
      t.string :sign

      t.timestamps
    end
  end
end
