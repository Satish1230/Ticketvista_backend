const mongoose = require('mongoose');
const Event = require('../models/events');

const mongo_url = 'mongodb://127.0.0.1:27017/ticketvista'
main().then(() => console.log('MongoDB is connected'))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect(mongo_url)
}

const events = [
    {
        date: "SEP 8, 2024",
        location: "NOIDA, IN",
        title: "Cloud Community Day 2024",
        tags: ["AI", "Cloud", "DevOps"],
        description: "Google Cloud Community Day 2024 is set to be an engaging, all-day event hosted by GDG Cloud Noida. This event will spotlight the latest innovations and developments in Google Cloud technologies.",
        imageUrl: "https://cdn-ilammkn.nitrocdn.com/qTtDpgOiTmecTdXInTKYZKotqYeHbRQH/assets/images/optimized/rev-5f53600/www.namecoinnews.com/wp-content/uploads/2024/01/Top-Ai-Events-and-Conferences-in-2024.jpg",
    },
    {
        date: "OCT 15, 2024",
        location: "SAN FRANCISCO, USA",
        title: "Tech Innovators Summit",
        tags: ["Tech", "Startups", "Innovation"],
        description: "The Tech Innovators Summit brings together the brightest minds in technology and entrepreneurship. Join us to explore the future of tech innovations, meet industry leaders, and network with fellow innovators.",
        imageUrl: "https://i.ytimg.com/vi/ttYihbVq0UM/maxresdefault.jpg", // Replace with actual image URL
    },
    {
        date: "NOV 20, 2024",
        location: "LONDON, UK",
        title: "AI & Robotics Expo",
        tags: ["AI", "Robotics", "Engineering"],
        description: "The AI & Robotics Expo 2024 showcases the latest advancements in artificial intelligence and robotics. Attend keynote sessions, engage with cutting-edge technology, and connect with industry experts.",
        imageUrl: "https://live.staticflickr.com/4263/35008372172_e5ccee1972_b.jpg", // Replace with actual image URL
    },
    {
        date: "DEC 5, 2024",
        location: "BERLIN, GERMANY",
        title: "European Cybersecurity Conference",
        tags: ["Cybersecurity", "Network Security", "GDPR"],
        description: "Join Europe's leading cybersecurity experts at the European Cybersecurity Conference 2024. This event will focus on the latest trends in network security, GDPR compliance, and cyber threat mitigation.",
        imageUrl: "https://forum-europe.com/cms-data/news/DSCF8719.jpg", // Replace with actual image URL
    },
    {
        date: "JAN 10, 2025",
        location: "TOKYO, JAPAN",
        title: "Future of Blockchain",
        tags: ["Blockchain", "Cryptocurrency", "Finance"],
        description: "Explore the transformative potential of blockchain technology at the Future of Blockchain conference. Industry leaders will discuss the latest developments in blockchain, cryptocurrency, and decentralized finance.",
        imageUrl: "https://cdn.educba.com/academy/wp-content/uploads/2019/02/Is-Blockchain-the-Future-1.jpg", // Replace with actual image URL
    },
    {
        date: "FEB 14, 2025",
        location: "SYDNEY, AUSTRALIA",
        title: "Global HealthTech Forum",
        tags: ["HealthTech", "Medicine", "Innovation"],
        description: "The Global HealthTech Forum 2025 will bring together healthcare professionals and tech innovators to discuss the future of medicine. Discover the latest in health technology and its impact on patient care.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs_oTfONLEi51vUyQY3rBH3riXM1_Em4k5vA&s", // Replace with actual image URL
    },
    {
        date: "MAR 3, 2025",
        location: "NEW YORK, USA",
        title: "Big Data World",
        tags: ["Big Data", "Analytics", "Data Science"],
        description: "Big Data World 2025 is the premier event for data professionals. Learn about the latest trends in big data, analytics, and data science from industry experts and network with fellow data enthusiasts.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SG7PAfk5xz9pqhdAvvwyJ_BEEWVBK5G7Fw&s", // Replace with actual image URL
    },
    {
        date: "APR 25, 2025",
        location: "DUBAI, UAE",
        title: "Sustainability & Green Tech Expo",
        tags: ["Sustainability", "Green Tech", "Renewable Energy"],
        description: "The Sustainability & Green Tech Expo 2025 will focus on the latest developments in sustainable technologies. Attend sessions on renewable energy, green innovation, and the future of eco-friendly tech.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQZtZLNvkTcCADwOjJGvvU931PdzKFHwXwJQ&s", // Replace with actual image URL
    },

];

const initdb = async () => {
    await Event.deleteMany({});
    await Event.insertMany(events);
    console.log('Sample data inserted successfully');
}
initdb();
