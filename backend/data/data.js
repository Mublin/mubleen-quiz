const quizStart = [{
    time: new Date().getTime(),
    targetTime: new Date().getTime() + 10 * 60 * 1000
}]

const mathQuestions= [
    {
      id: 1,
      questions: "Find the sum of the first 10 terms of the arithmetic sequence: 2, 5, 8, ...",
      options: ["150", "170", "190", "210"],
      answerIndex: 1
    },
    {
      id: 2,
      questions: "Simplify the logarithmic expression: log₂(8).",
      options: ["1", "2", "3", "4"],
      answerIndex: 2
    },
    {
      id: 3,
      questions: "Solve for x in the equation: 2^x = 16.",
      options: ["2", "3", "4", "5"],
      answerIndex: 2
    },
    {
      id: 4,
      questions: "If A = P(1 + rt), solve for P given A = $200, r = 0.05, t = 3 years, and interest I = $30.",
      options: ["$120", "$130", "$140", "$150"],
      answerIndex: 3
    },
    {
      id: 5,
      questions: "Find the sum of the first 15 even numbers.",
      options: ["120", "150", "180", "210"],
      answerIndex: 2
    },
    {
      id: 6,
      questions: "Calculate the common ratio (r) of the geometric sequence: 3, 6, 12, ...",
      options: ["1", "2", "3", "4"],
      answerIndex: 1
    },
    {
      id: 7,
      questions: "Evaluate log₄(64).",
      options: ["1", "2", "3", "4"],
      answerIndex: 2
    },
    {
      id: 8,
      questions: "If F = 9/5C + 32, solve for C when F = 68°F.",
      options: ["10°C", "20°C", "30°C", "40°C"],
      answerIndex: 1
    },
    {
      id: 9,
      questions: "Find the sum of the first 20 terms of the arithmetic sequence: 3, 7, 11, ...",
      options: ["350", "450", "550", "650"],
      answerIndex: 2
    },
    {
      id: 10,
      questions: "Simplify the expression: 2^3 × 2^5.",
      options: ["2^4", "2^6", "2^7", "2^8"],
      answerIndex: 3
    },
    {
      id: 11,
      questions: "If the simple interest on a principal of $500 for 2 years is $60, what is the annual interest rate?",
      options: ["4%", "5%", "6%", "7%"],
      answerIndex: 2
    },
    {
      id: 12,
      questions: "Solve for x in the equation: 3x + 7 = 16.",
      options: ["2", "3", "4", "5"],
      answerIndex: 1
    },
    {
      id: 13,
      questions: "Find the 10th term of the geometric sequence: 2, 6, 18, ...",
      options: ["4374", "6561", "8748", "19683"],
      answerIndex: 3
    },
    {
      id: 14,
      questions: "Calculate log₅(25).",
      options: ["1", "2", "3", "4"],
      answerIndex: 2
    },
    {
      id: 15,
      questions: "If V = πr²h, solve for r when V = 500 cubic centimeters and h = 10 centimeters.",
      options: ["2.5 cm", "3.5 cm", "4.5 cm", "5.5 cm"],
      answerIndex: 0
    },
    {
      id: 16,
      questions: "Find the sum of the first 25 terms of the arithmetic sequence: 4, 9, 14, ...",
      options: ["600", "650", "700", "750"],
      answerIndex: 3
    },
    {
      id: 17,
      questions: "Simplify the expression: (3²)³.",
      options: ["81", "243", "729", "2187"],
      answerIndex: 2
    },
    {
      id: 18,
      questions: "If the principal is $1000 and the interest is $150, calculate the time (in years) required for a simple interest rate of 10%.",
      options: ["0.5", "1.0", "1.5", "2.0"],
      answerIndex: 1
    },
    {
      id: 19,
      questions: "Find the 12th term of the geometric sequence: 3, 9, 27, ...",
      options: ["177147", "19683", "59049", "531441"],
      answerIndex: 3
    },
    {
      id: 20,
      questions: "Calculate log₇(49).",
      options: ["1", "2", "3", "4"],
      answerIndex: 2
    }
  ];
  
    
  
  const physicsQuestions = [
    {
      id: 'phy1',
      questions: "What is the SI unit of force?",
      options: ["joule", "watt", "newton", "ampere"],
      answerIndex: 2 // Correct answer: "newton"
    },
    {
      id: 'phy2',
      questions: "Which law of motion states that every object persists in its state of rest or uniform motion unless acted upon by an external force?",
      options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Universal Gravitation"],
      answerIndex: 0 // Correct answer: "Newton's First Law"
    },
    {
      id: 'phy3',
      questions: "What is the speed of light in a vacuum?",
      options: ["299,792,458 meters per second", "100 meters per second", "1,000,000 meters per second", "50,000 meters per second"],
      answerIndex: 0 // Correct answer: "299,792,458 meters per second"
    },
    {
      id: 'phy4',
      questions: "Which type of energy is associated with motion?",
      options: ["potential energy", "kinetic energy", "thermal energy", "nuclear energy"],
      answerIndex: 1 // Correct answer: "kinetic energy"
    },
    {
      id: 'phy5',
      questions: "What is the formula for calculating work?",
      options: ["W = Fd", "W = Pt", "W = mv", "W = qV"],
      answerIndex: 0 // Correct answer: "W = Fd"
    },
    {
      id: 'phy6',
      questions: "What is the unit of electric current?",
      options: ["joule", "watt", "ampere", "volt"],
      answerIndex: 2 // Correct answer: "ampere"
    },
    {
      id: 'phy7',
      questions: "What is the force that opposes the motion of an object in a fluid called?",
      options: ["frictional force", "centripetal force", "magnetic force", "gravitational force"],
      answerIndex: 0 // Correct answer: "frictional force"
    },
    {
      id: 'phy8',
      questions: "What is the SI unit of electric charge?",
      options: ["coulomb", "ampere", "volt", "watt"],
      answerIndex: 0 // Correct answer: "coulomb"
    },
    {
      id: 'phy9',
      questions: "What is the law that states that for every action, there is an equal and opposite reaction?",
      options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Universal Gravitation"],
      answerIndex: 2 // Correct answer: "Newton's Third Law"
    },
    {
      id: 'phy10',
      questions: "What is the unit of resistance in an electric circuit?",
      options: ["ohm", "watt", "volt", "ampere"],
      answerIndex: 0 // Correct answer: "ohm"
    },
    {
      id: 'phy11',
      questions: "What is the SI unit of power?",
      options: ["joule", "watt", "newton", "ampere"],
      answerIndex: 1 // Correct answer: "watt"
    },
    {
      id: 'phy12',
      questions: "Which type of lens converges light rays to a single point?",
      options: ["concave lens", "convex lens", "bifocal lens", "plano-convex lens"],
      answerIndex: 1 // Correct answer: "convex lens"
    },
    {
      id: 'phy13',
      questions: "What is the phenomenon where a wave bends as it passes from one medium to another due to a change in its speed?",
      options: ["reflection", "diffraction", "interference", "refraction"],
      answerIndex: 3 // Correct answer: "refraction"
    },
    {
      id: 'phy14',
      questions: "What is the force that keeps planets in orbit around the Sun?",
      options: ["frictional force", "centripetal force", "magnetic force", "gravitational force"],
      answerIndex: 1 // Correct answer: "centripetal force"
    },
    {
      id: 'phy15',
      questions: "What is the unit of electric potential difference?",
      options: ["joule", "watt", "ampere", "volt"],
      answerIndex: 3 // Correct answer: "volt"
    },
    {
      id: 'phy16',
      questions: "Which law of thermodynamics states that energy cannot be created or destroyed, only converted from one form to another?",
      options: ["First Law of Thermodynamics", "Second Law of Thermodynamics", "Third Law of Thermodynamics", "Zeroth Law of Thermodynamics"],
      answerIndex: 0 // Correct answer: "First Law of Thermodynamics"
    },
    {
      id: 'phy17',
      questions: "What is the force of attraction between two objects with mass due to gravity?",
      options: ["magnetic force", "centripetal force", "gravitational force", "nuclear force"],
      answerIndex: 2 // Correct answer: "gravitational force"
    },
    {
      id: 'phy18',
      questions: "Which type of mirror forms a virtual, upright, and diminished image of an object?",
      options: ["concave mirror", "convex mirror", "plane mirror", "parabolic mirror"],
      answerIndex: 1 // Correct answer: "convex mirror"
    },
    {
      id: 'phy19',
      questions: "What is the SI unit of frequency?",
      options: ["hertz", "watt", "newton", "ampere"],
      answerIndex: 0 // Correct answer: "hertz"
    },
    {
      id: 'phy20',
      questions: "What is the unit of electric capacitance?",
      options: ["farad", "ohm", "volt", "ampere"],
      answerIndex: 0 // Correct answer: "farad"
    }
  ];
  
const chemistryQuestions= [
    {
      id: 'chem1',
      questions: "What is the chemical symbol for oxygen?",
      options: ["O", "O2", "OX", "O3"],
      answerIndex: 0 // Correct answer: "O"
    },
    {
      id: 'chem2',
      questions: "Which gas is commonly known as laughing gas?",
      options: ["oxygen", "carbon dioxide", "nitrous oxide", "hydrogen"],
      answerIndex: 2 // Correct answer: "nitrous oxide"
    },
    {
      id: 'chem3',
      questions: "What is the chemical formula for water?",
      options: ["H2O2", "CO2", "H2O", "CH4"],
      answerIndex: 2 // Correct answer: "H2O"
    },
    {
      id: 'chem4',
      questions: "What is the atomic number of carbon?",
      options: ["5", "12", "6", "8"],
      answerIndex: 2 // Correct answer: "6"
    },
    {
      id: 'chem5',
      questions: "What is the process by which a solid changes directly into a gas without passing through the liquid phase?",
      options: ["sublimation", "vaporization", "condensation", "melting"],
      answerIndex: 0 // Correct answer: "sublimation"
    },
    {
      id: 'chem6',
      questions: "Which element is the most abundant in the Earth's crust?",
      options: ["oxygen", "carbon", "silicon", "aluminum"],
      answerIndex: 0 // Correct answer: "oxygen"
    },
    {
      id: 'chem7',
      questions: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "Fe", "Hg"],
      answerIndex: 0 // Correct answer: "Au"
    },
    {
      id: 'chem8',
      questions: "What is the pH scale used to measure?",
      options: ["temperature", "acidity", "density", "volume"],
      answerIndex: 1 // Correct answer: "acidity"
    },
    {
      id: 'chem9',
      questions: "What is the chemical formula for table salt (sodium chloride)?",
      options: ["NaCl", "KCl", "HCl", "MgCl2"],
      answerIndex: 0 // Correct answer: "NaCl"
    },
    {
      id: 'chem10',
      questions: "Which gas is responsible for the green color of plants?",
      options: ["oxygen", "carbon dioxide", "nitrogen", "chlorophyll"],
      answerIndex: 3 // Correct answer: "chlorophyll"
    },
    {
      id: 'chem11',
      questions: "What is the chemical symbol for helium?",
      options: ["H", "He", "Li", "Be"],
      answerIndex: 1 // Correct answer: "He"
    },
    {
      id: 'chem12',
      questions: "What is the process of a substance changing from a gas to a liquid?",
      options: ["sublimation", "vaporization", "condensation", "melting"],
      answerIndex: 2 // Correct answer: "condensation"
    },
    {
      id: 'chem13',
      questions: "What is the chemical formula for methane?",
      options: ["CH2", "C2H2", "CH3OH", "CH4"],
      answerIndex: 3 // Correct answer: "CH4"
    },
    {
      id: 'chem14',
      questions: "What is the chemical symbol for sodium?",
      options: ["So", "Sa", "Na", "No"],
      answerIndex: 2 // Correct answer: "Na"
    },
    {
      id: 'chem15',
      questions: "What is the process of a liquid changing into a gas at the surface?",
      options: ["sublimation", "vaporization", "condensation", "melting"],
      answerIndex: 1 // Correct answer: "vaporization"
    },
    {
      id: 'chem16',
      questions: "Which gas is produced when an acid reacts with a metal?",
      options: ["oxygen", "carbon dioxide", "nitrogen", "hydrogen"],
      answerIndex: 3 // Correct answer: "hydrogen"
    },
    {
      id: 'chem17',
      questions: "What is the chemical symbol for carbon dioxide?",
      options: ["CO2", "C2O", "CO", "C2O2"],
      answerIndex: 0 // Correct answer: "CO2"
    },
    {
      id: 'chem18',
      questions: "What is the chemical formula for sulfuric acid?",
      options: ["H2SO4", "H2O", "SO2", "H2S"],
      answerIndex: 0 // Correct answer: "H2SO4"
    },
    {
      id: 'chem19',
      questions: "What is the chemical symbol for nitrogen?",
      options: ["N", "Ni", "Ne", "No"],
      answerIndex: 0 // Correct answer: "N"
    },
    {
      id: 'chem20',
      questions: "What is the chemical symbol for silver?",
      options: ["Au", "Ag", "Fe", "Hg"],
      answerIndex: 1 // Correct answer: "Ag"
    }
  ];

  
    
  const biologyQuestions = [
    {
      id: 'bio1',
      questions: "What is the powerhouse of the cell?",
      options: ["nucleus", "mitochondria", "ribosome", "cytoplasm"],
      answerIndex: 1 // Correct answer: "mitochondria"
    },
    {
      id: 'bio2',
      questions: "Which gas do plants absorb from the atmosphere during photosynthesis?",
      options: ["oxygen", "carbon dioxide", "nitrogen", "hydrogen"],
      answerIndex: 1 // Correct answer: "carbon dioxide"
    },
    {
      id: 'bio3',
      questions: "What is the largest organ in the human body?",
      options: ["brain", "liver", "skin", "heart"],
      answerIndex: 2 // Correct answer: "skin"
    },
    {
      id: 'bio4',
      questions: "What is the function of red blood cells?",
      options: ["carrying oxygen", "digesting food", "producing antibodies", "filtering blood"],
      answerIndex: 0 // Correct answer: "carrying oxygen"
    },
    {
      id: 'bio5',
      questions: "What is the process by which plants make their own food using sunlight?",
      options: ["respiration", "photosynthesis", "germination", "transpiration"],
      answerIndex: 1 // Correct answer: "photosynthesis"
    },
    {
      id: 'bio6',
      questions: "What is the smallest unit of life?",
      options: ["cell", "organism", "atom", "molecule"],
      answerIndex: 0 // Correct answer: "cell"
    },
    {
      id: 'bio7',
      questions: "What is the chemical structure of DNA?",
      options: ["single-stranded", "double-stranded helix", "triple-stranded", "random coils"],
      answerIndex: 1 // Correct answer: "double-stranded helix"
    },
    {
      id: 'bio8',
      questions: "What is the function of the heart?",
      options: ["pumping blood", "digesting food", "filtering waste", "storing energy"],
      answerIndex: 0 // Correct answer: "pumping blood"
    },
    {
      id: 'bio9',
      questions: "Which gas do humans exhale when they breathe?",
      options: ["oxygen", "carbon dioxide", "nitrogen", "hydrogen"],
      answerIndex: 1 // Correct answer: "carbon dioxide"
    },
    {
      id: 'bio10',
      questions: "What is the process by which organisms produce offspring of the same kind?",
      options: ["respiration", "photosynthesis", "germination", "reproduction"],
      answerIndex: 3 // Correct answer: "reproduction"
    },
    {
      id: 'bio11',
      questions: "What is the chemical substance responsible for the green color of plant leaves?",
      options: ["chlorophyll", "hemoglobin", "melanin", "collagen"],
      answerIndex: 0 // Correct answer: "chlorophyll"
    },
    {
      id: 'bio12',
      questions: "What is the term for the loss of water vapor from plant leaves?",
      options: ["respiration", "photosynthesis", "germination", "transpiration"],
      answerIndex: 3 // Correct answer: "transpiration"
    },
    {
      id: 'bio13',
      questions: "Which gas is produced during the process of respiration?",
      options: ["oxygen", "carbon dioxide", "nitrogen", "hydrogen"],
      answerIndex: 1 // Correct answer: "carbon dioxide"
    },
    {
      id: 'bio14',
      questions: "What is the chemical formula for glucose?",
      options: ["C6H12O6", "H2O", "CO2", "CH4"],
      answerIndex: 0 // Correct answer: "C6H12O6"
    },
    {
      id: 'bio15',
      questions: "What is the main function of the ribosomes in a cell?",
      options: ["energy production", "protein synthesis", "DNA replication", "cell division"],
      answerIndex: 1 // Correct answer: "protein synthesis"
    },
    {
      id: 'bio16',
      questions: "Which organelle is responsible for detoxifying harmful substances in the cell?",
      options: ["nucleus", "mitochondria", "ribosome", "smooth endoplasmic reticulum"],
      answerIndex: 3 // Correct answer: "smooth endoplasmic reticulum"
    },
    {
      id: 'bio17',
      questions: "What is the process by which plants absorb water and nutrients from the soil?",
      options: ["respiration", "photosynthesis", "germination", "osmosis"],
      answerIndex: 3 // Correct answer: "osmosis"
    },
    {
      id: 'bio18',
      questions: "Which of the following is not a function of the cell membrane?",
      options: [
        "Regulating the passage of substances in and out of the cell",
        "Providing structural support to the cell",
        "Protecting the cell from its surroundings",
        "Maintaining cell shape"
      ],
      answerIndex: 1 // Correct answer: "Providing structural support to the cell"
    },
    {
      id: 'bio19',
      questions: "What is the chemical formula for water?",
      options: ["H2O2", "CO2", "H2O", "CH4"],
      answerIndex: 2 // Correct answer: "H2O"
    },
    {
      id: 'bio20',
      questions: "Which of the following is a plant hormone responsible for cell elongation and growth?",
      options: ["insulin", "cytokinin", "estrogen", "adrenaline"],
      answerIndex: 1 // Correct answer: "cytokinin"
    }
  ];
  
const englishQuestions = [
    {
      id: 'eng1',
      questions: "What is the opposite of 'happiness'?",
      options: ["joy", "sadness", "pleasure", "contentment"],
      answerIndex: 1 // Correct answer: "sadness"
    },
    {
      id: 'eng2',
      questions: "What is the term for a word that is spelled the same forwards and backwards?",
      options: ["palindrome", "synonym", "antonym", "homonym"],
      answerIndex: 0 // Correct answer: "palindrome"
    },
    {
      id: 'eng3',
      questions: "Which literary device involves a contradiction in terms for effect?",
      options: ["irony", "metaphor", "oxymoron", "simile"],
      answerIndex: 2 // Correct answer: "oxymoron"
    },
    {
      id: 'eng4',
      questions: "What is the study of the origin and history of words called?",
      options: ["syntax", "linguistics", "etymology", "semantics"],
      answerIndex: 2 // Correct answer: "etymology"
    },
    {
      id: 'eng5',
      questions: "Which figure of speech involves an exaggeration for emphasis?",
      options: ["hyperbole", "personification", "onomatopoeia", "alliteration"],
      answerIndex: 0 // Correct answer: "hyperbole"
    },
    {
      id: 'eng6',
      questions: "What is a group of words that expresses a complete thought?",
      options: ["clause", "phrase", "sentence", "paragraph"],
      answerIndex: 2 // Correct answer: "sentence"
    },
    {
      id: 'eng7',
      questions: "Who wrote the novel '1984'?",
      options: ["George Orwell", "F. Scott Fitzgerald", "J.K. Rowling", "Charles Dickens"],
      answerIndex: 0 // Correct answer: "George Orwell"
    },
    {
      id: 'eng8',
      questions: "What is the term for a word that is the same or similar in meaning to another word?",
      options: ["antonym", "synonym", "homonym", "homophone"],
      answerIndex: 1 // Correct answer: "synonym"
    },
    {
      id: 'eng9',
      questions: "What is the main character in a story called?",
      options: ["villain", "protagonist", "antagonist", "sidekick"],
      answerIndex: 1 // Correct answer: "protagonist"
    },
    {
      id: 'eng10',
      questions: "What is a brief and witty statement expressing a universal truth or observation?",
      options: ["sarcasm", "metaphor", "aphorism", "hyperbole"],
      answerIndex: 2 // Correct answer: "aphorism"
    },
    {
      id: 'eng11',
      questions: "Who wrote the play 'Romeo and Juliet'?",
      options: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Emily Brontë"],
      answerIndex: 2 // Correct answer: "William Shakespeare"
    },
    {
      id: 'eng12',
      questions: "What is a story that is passed down through generations, often involving supernatural elements?",
      options: ["legend", "myth", "fable", "tale"],
      answerIndex: 1 // Correct answer: "myth"
    },
    {
      id: 'eng13',
      questions: "What is the term for a word that imitates the sound it represents?",
      options: ["simile", "metaphor", "onomatopoeia", "alliteration"],
      answerIndex: 2 // Correct answer: "onomatopoeia"
    },
    {
      id: 'eng14',
      questions: "What is the term for a word that sounds like the noise it describes?",
      options: ["irony", "metaphor", "oxymoron", "onomatopoeia"],
      answerIndex: 3 // Correct answer: "onomatopoeia"
    },
    {
      id: 'eng15',
      questions: "Who wrote the novel 'Pride and Prejudice'?",
      options: ["George Orwell", "F. Scott Fitzgerald", "J.K. Rowling", "Jane Austen"],
      answerIndex: 3 // Correct answer: "Jane Austen"
    },
    {
      id: 'eng16',
      questions: "What is the term for a group of lines in a poem?",
      options: ["stanza", "verse", "rhyme", "meter"],
      answerIndex: 0 // Correct answer: "stanza"
    },
    {
      id: 'eng17',
      questions: "What is the term for the use of symbols to represent ideas or qualities?",
      options: ["irony", "metaphor", "symbolism", "alliteration"],
      answerIndex: 2 // Correct answer: "symbolism"
    },
    {
      id: 'eng18',
      questions: "What is the term for the repetition of consonant sounds at the beginning of words in close proximity?",
      options: ["sarcasm", "metaphor", "aphorism", "alliteration"],
      answerIndex: 3 // Correct answer: "alliteration"
    },
    {
      id: 'eng19',
      questions: "Who wrote the novel 'To Kill a Mockingbird'?",
      options: ["J.K. Rowling", "George Orwell", "Harper Lee", "J.R.R. Tolkien"],
      answerIndex: 2 // Correct answer: "Harper Lee"
    },
    {
      id: 'eng20',
      questions: "What is the term for a story that explains natural phenomena, often involving gods and heroes?",
      options: ["legend", "myth", "fable", "tale"],
      answerIndex: 1 // Correct answer: "myth"
    }
  ];
  const users = [{
    name: "Aminu Jazuli",
    username: 'jaxulee',
    email: 'jaxulee@gmail.com',
    password: 1234,
    token: 'kkkbnv',
    highScroesubject : {
      eng: 8,
      maths: 4,
      chemistry: 4,
      physics: 3,
      biology: 5,
  }
  }]
  module.exports = {
    physicsQuestions,
    chemistryQuestions,
    biologyQuestions,
    englishQuestions,
    mathQuestions,
    users
  }