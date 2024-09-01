"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var movies = [
    {
        title: "Sarileru Neekevvaru",
        description: "An army major goes on a mission to meet the family of a fallen comrade and ends up saving the day.",
        duration: 10500, // in seconds
        date: new Date("2020/01/11"),
        genre: ["ACTION", "COMEDY"],
        awards: ["Best_Actor"],
        rating: "UA"
    },
    {
        title: "RRR",
        description: "A fictional story about two Indian revolutionaries and their fight against the British Raj.",
        duration: 12000, // in seconds
        date: new Date("2022/03/25"),
        genre: ["ACTION", "DRAMA"],
        awards: ["Best_Original_Screenplay"],
        rating: "A+"
    },
    {
        title: "Baahubali: The Beginning",
        description: "A young man learns about his heritage and takes on the responsibility to save his kingdom.",
        duration: 11000, // in seconds
        date: new Date("2015/07/10"),
        genre: ["ACTION", "DRAMA", "FANTASY"],
        awards: ["Best_Director", "Best_Cinematography"],
        rating: "A++"
    },
    {
        title: "Pushpa: The Rise",
        description: "A story of a laborer who rises to become the king of a red sandalwood smuggling syndicate.",
        duration: 10800, // in seconds
        date: new Date("2021/12/17"),
        genre: ["ACTION", "THRILLER"],
        awards: ["Best_Actor"],
        rating: "UA"
    },
    {
        title: "Mahanati",
        description: "A biographical film based on the life of legendary Indian actress Savitri.",
        duration: 11800, // in seconds
        date: new Date("2018/05/09"),
        genre: ["DRAMA", "DOCUMENTARY"],
        awards: ["Best_Actress", "Best_Costume_Design"],
        rating: "UA+"
    },
    {
        title: "Baahubali 2: The Conclusion",
        description: "The conclusion to the epic tale of Baahubali and his quest for justice.",
        duration: 12300, // in seconds
        date: new Date("2017/04/28"),
        genre: ["ACTION", "DRAMA", "FANTASY"],
        awards: ["Best_Film_Editing", "Best_Original_Screenplay"],
        rating: "A"
    },
    {
        title: "Dilwale Dulhania Le Jayenge",
        description: "A romantic drama about a young couple who fall in love during a trip to Europe.",
        duration: 11300, // in seconds
        date: new Date("1995/10/20"),
        genre: ["ROMANCE", "DRAMA"],
        awards: ["Best_Foreign_Language_Film", "Best_Adapted_Screenplay"],
        rating: "UA"
    }
];
exports.default = movies;
