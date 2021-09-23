class CreateContacts < ActiveRecord::Migration[6.1]
  def change
    create_table :contacts do |t|
      t.string :first_name
      t.string :last_name
      t.string :company
      t.string :email
      t.string :phone
      t.string :linked_in
      t.string :last_contact
      t.integer :user_id

      t.timestamps
    end
  end
end
