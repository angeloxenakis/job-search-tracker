class CreateOpportunities < ActiveRecord::Migration[6.1]
  def change
    create_table :opportunities do |t|
      t.string :company
      t.string :job_title
      t.string :description
      t.string :salary
      t.string :location
      t.string :interest_level
      t.string :date_applied
      t.string :last_contact

      t.integer :user_id

      t.timestamps
    end
  end
end