User.destroy_all
Opportunity.destroy_all

User.create(username: "AngeloXenakis", password: "123")

opportunities = [
    {
        company: "Google",
        job_title: "Frontend Engineer",
        description: "Ballin' out in Google. Ballin' out in Google. Ballin' out in Google. Ballin' out in Google. Ballin' out in Google. Ballin' out in Google. Ballin' out in Google. Ballin' out in Google. Ballin' out in Google. Ballin' out in Google. Ballin' out in Google. ",
        salary: "150k",
        location: "Austin, Tx",
        interest_level: "High",
        date_applied: "08/23/21",
        last_contact: "09/01/21",
        user_id: User.first.id
    },
    {
        company: "Apple",
        job_title: "Backend Engineer",
        description: "Ballin' out in Apple",
        salary: "170k",
        location: "Austin, Tx",
        interest_level: "High",
        date_applied: "08/23/21",
        last_contact: "09/01/21",
        user_id: User.first.id
    },
    {
        company: "Google",
        job_title: "Frontend Engineer",
        description: "Ballin' out in Google",
        salary: "150k",
        location: "Austin, Tx",
        interest_level: "High",
        date_applied: "08/23/21",
        last_contact: "09/01/21",
        user_id: User.first.id
    },
    {
        company: "Apple",
        job_title: "Backend Engineer",
        description: "Ballin' out in Apple",
        salary: "170k",
        location: "Austin, Tx",
        interest_level: "High",
        date_applied: "08/23/21",
        last_contact: "09/01/21",
        user_id: User.first.id
    }
]

opportunities.each { | opportunity | Opportunity.create(opportunity) }