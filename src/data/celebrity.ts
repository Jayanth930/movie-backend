import { Celebrity } from "@prisma/client"

const celebrities : Omit<Celebrity , "id" | "created_at" | "updated_at">[]= [
    {
        "firstname": "Mahesh",
        "lastname": "Babu",
        "date_of_birth": new Date("1975-08-09"),
        "education": "Mahesh Babu completed his schooling at St. Bede's Anglo Indian Higher Secondary School, Chennai. He then pursued a bachelor's degree in commerce from Loyola College, Chennai. Additionally, Mahesh has undergone formal training in acting to hone his skills.",
        "biography": "Mahesh Babu, known as the 'Prince of Tollywood,' is one of the leading actors in the Telugu film industry. He made his debut as a child artist and transitioned into a leading role with the film 'Rajakumarudu' in 1999. Over the years, Mahesh has established himself as a bankable star, delivering blockbuster hits. His performances are widely appreciated for their charm and depth, earning him numerous awards.",
        "occupation": ["ACTOR", "PRODUCER", "BUSINESS_MAN"],
        "awards": ["Best_Actor"]
    },
    {
        "firstname": "Nandamuri",
        "lastname": "Tarak Rama Rao Jr.",
        "date_of_birth": new Date("1983-05-20"),
        "education": "Jr. NTR completed his schooling at Vidyaranya High School, Hyderabad. He then graduated from St. Mary's College, Hyderabad, with a degree in commerce. In addition to his formal education, he has undergone classical dance training in Kuchipudi, which has greatly influenced his performances.",
        "biography": "Jr. NTR, the grandson of the legendary N. T. Rama Rao, is a versatile actor in Telugu cinema. He debuted with the film 'Ninnu Choodalani' in 2001 but gained massive popularity with 'Student No.1.' Known for his powerful performances and dance skills, Jr. NTR has carved a niche for himself in the industry. He has a significant fan base and is also involved in various philanthropic activities.",
        "occupation": ["ACTOR", "DIRECTOR", "PHILANTROPIST"],
        "awards": ["Best_Actor"]
    },
    {
        "firstname": "Prabhas",
        "lastname": "Raju Uppalapati",
        "date_of_birth": new Date("1979-10-23"),
        "education": "Prabhas completed his schooling at DNR School, Bhimavaram. He then pursued a B.Tech degree from Sri Chaitanya College, Hyderabad. Prabhas has also received training in acting and action choreography, which has helped him perform challenging roles in his films.",
        "biography": "Prabhas, often referred to as the 'Rebel Star,' rose to international fame with the 'Baahubali' series. He made his acting debut with 'Eeshwar' in 2002, but it was his performance in 'Varsham' that established him as a star. Prabhas is known for his dedication and versatility, taking on a variety of roles that challenge his abilities. His portrayal of Baahubali made him a household name, and he continues to be one of the most sought-after actors in Indian cinema.",
        "occupation": ["ACTOR", "PRODUCER"],
        "awards": ["Best_Actor"]
    },{
        "firstname": "Rashmika",
        "lastname": "Mandanna",
        "date_of_birth": new Date("1996-04-05"),
        "education": "Rashmika Mandanna completed her schooling at Coorg Public School in Karnataka. She then pursued a bachelor's degree in Psychology, Journalism, and English Literature from M.S. Ramaiah College of Arts, Science, and Commerce in Bengaluru. Rashmika has also undergone formal training in acting, which has contributed to her successful film career.",
        "biography": "Rashmika Mandanna, known as the 'National Crush,' is one of the most popular actresses in the South Indian film industry. She made her acting debut with the Kannada film 'Kirik Party' in 2016, which was a massive success. Rashmika has since starred in numerous Telugu and Tamil films, earning a strong fan base. Her charming personality and versatile performances have made her a sought-after actress in Indian cinema.",
        "occupation": ["ACTRESS"],
        "awards": ["Best_Actress"]
    },
    {
        "firstname": "Samantha",
        "lastname": "Ruth Prabhu",
        "date_of_birth": new Date("1987-04-28"),
        "education": "Samantha completed her schooling at Holy Angels Anglo Indian Higher Secondary School in Chennai. She then earned a degree in commerce from Stella Maris College, Chennai. During her college years, Samantha began modeling, which eventually led her to pursue a career in acting.",
        "biography": "Samantha Ruth Prabhu is a prominent actress in Telugu and Tamil cinema, known for her compelling performances. She made her acting debut in 2010 with the film 'Ye Maaya Chesave,' which earned her critical acclaim and several awards. Samantha is celebrated for her versatility, taking on a variety of roles that showcase her acting range. Beyond acting, she is also involved in philanthropic work and has launched her own clothing line.",
        "occupation": ["ACTRESS", "PRODUCER", "PHILANTROPIST"],
        "awards": ["Best_Actress"]
    },
    {
        "firstname": "Anushka",
        "lastname": "Shetty",
        "date_of_birth": new Date("1981-11-07"),
        "education": "Anushka Shetty completed her schooling at Mount Carmel College in Bengaluru. She pursued a bachelor's degree in Computer Applications (BCA) from the same institution. Before entering the film industry, Anushka was a trained yoga instructor, which she continues to practice and promote.",
        "biography": "Anushka Shetty, often referred to as the 'Lady Superstar,' is one of the leading actresses in Telugu and Tamil cinema. She made her acting debut with the Telugu film 'Super' in 2005. Anushka gained immense popularity with her performances in films like 'Arundhati,' 'Baahubali,' and 'Bhaagamathie.' Known for her strong screen presence and ability to carry a film on her shoulders, Anushka has won numerous awards and accolades throughout her career.",
        "occupation": ["ACTRESS"],
        "awards": ["Best_Actress"]
    },
    {
        "firstname": "Kajol",
        "lastname": "",
        "date_of_birth": new Date("1974-08-05"),
        "education": "Kajol attended St. Joseph's Convent School in Panchgani, Maharashtra, but she left school at the age of 16 to pursue a full-time career in acting. Despite not completing her formal education, Kajol is known for her sharp intellect and has often spoken about the importance of education.",
        "biography": "Kajol is one of the most celebrated actresses in Indian cinema, known for her natural acting style and iconic roles. She made her acting debut in the film 'Bekhudi' in 1992, but it was 'Baazigar' in 1993 that catapulted her to fame. Kajol's performances in films like 'Dilwale Dulhania Le Jayenge,' 'Kuch Kuch Hota Hai,' and 'My Name Is Khan' have left an indelible mark on Indian cinema. Beyond her acting career, Kajol is involved in various social causes and is known for her candid and charismatic personality.",
        "occupation": ["ACTRESS", "PRODUCER"],
        "awards": ["Best_Actress"]
    }
]



export default celebrities