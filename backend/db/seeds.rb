User.destroy_all
Opportunity.destroy_all
Contact.destroy_all

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

contacts = [
    {
        first_name: "Jennifer",
        last_name: "Jennings",
        company: "Google",
        email: "jjennings@gmail.com",
        phone: 5556737256,
        linked_in: "www.linkedin.com",
        user_id: User.first.id,
        last_contact: "09/23/2021"
    },
    {
        first_name: "Bobby",
        last_name: "Roberts",
        company: "Apple",
        email: "broberts@gmail.com",
        phone: 5558432764,
        linked_in: "www.linkedin.com",
        user_id: User.first.id,
        last_contact: "09/23/2021"
    },
    {
        first_name: "Sherry",
        last_name: "Sharon",
        company: "Apple",
        email: "ssharon@gmail.com",
        phone: 5558737763,
        linked_in: "www.linkedin.com",
        user_id: User.first.id,
        last_contact: "09/23/2021"
    },
    {
        first_name: "Billy",
        last_name: "Williams",
        company: "Facebook",
        email: "bwilliams@gmail.com",
        phone: 5558737763,
        linked_in: "www.linkedin.com",
        user_id: User.first.id,
        last_contact: "09/18/2021"
    },
    {
        first_name: "Sam",
        last_name: "Samuels",
        company: "Google",
        email: "ssamuels@gmail.com",
        phone: 5558737763,
        linked_in: "www.linkedin.com",
        user_id: User.first.id,
        last_contact: "09/05/2021"
    },
    {
        first_name: "Jessica",
        last_name: "Jessup",
        company: "Google",
        email: "jjessup@gmail.com",
        phone: 5558737763,
        linked_in: "www.linkedin.com",
        user_id: User.first.id,
        last_contact: "08/23/2021"
    },
    {
        first_name: "Ted",
        last_name: "Theodore",
        company: "Netflix",
        email: "ttheo@gmail.com",
        phone: 5558737763,
        linked_in: "www.linkedin.com",
        user_id: User.first.id,
        last_contact: "09/18/2021"
    },
    {
        first_name: "Wendy",
        last_name: "Wenderson",
        company: "Stripe",
        email: "ww@gmail.com",
        phone: 5558737763,
        linked_in: "www.linkedin.com",
        user_id: User.first.id,
        last_contact: "09/12/2021"
    },
    {
        first_name: "Steve",
        last_name: "Stevenson",
        company: "AWS",
        email: "sstevenson@gmail.com",
        phone: 5558737763,
        linked_in: "www.linkedin.com",
        user_id: User.first.id,
        last_contact: "09/08/2021"
    },
    {
        first_name: "Mary",
        last_name: "Meredith",
        company: "Facebook",
        email: "mmer@gmail.com",
        phone: 5558737763,
        linked_in: "www.linkedin.com",
        user_id: User.first.id,
        last_contact: "09/13/2021"
    },
    {
        first_name: "Alex",
        last_name: "Alexanderson",
        company: "Apple",
        email: "aason@gmail.com",
        phone: 5558737763,
        linked_in: "www.linkedin.com",
        user_id: User.first.id,
        last_contact: "09/21/2021"
    },
]

contacts.each { | contact | Contact.create(contact) }