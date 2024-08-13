document.addEventListener("DOMContentLoaded", () => {
  const questions = [
    {
      question:
        "__________ takes a trial-like hearing to peacefully resolve a conflict.",
      options: {
        A: "Arbitration",
        B: "Early Neutral Evaluation (ENE)",
        C: "Negotiation",
        D: "Mediation",
      },
      answer: "A",
    },
    {
      question:
        "When negotiating, a competitor will likely be a __________ negotiator?",
      options: {
        A: "soft",
        B: "hard",
        C: "trusted",
        D: "principled",
      },
      answer: "B",
    },
    {
      question:
        "The underlying assumption of conflict transformation is that conflict (is) ___________.",
      options: {
        A: "only a social process",
        B: "the absence of war",
        C: "potentially brings constructive change",
        D: "inevitable in every society today",
      },
      answer: "C",
    },
    {
      question:
        "Alpha Plc. and Beta Trading Company decides to utilize arbitration to resolve their conflict worth $100,250. How many Arbitrators will they utilize for the arbitration?",
      options: {
        A: "1",
        B: "2",
        C: "3",
        D: "4",
      },
      answer: "C",
    },
    {
      question:
        "Alpha Plc. and Beta Trading Company decides to input in their contract agreement the use of Arbitration if there is a contract bridge. This action is known as _____________?",
      options: {
        A: "Submission to arbitration",
        B: "Award",
        C: "Arbitration",
        D: "None of the above",
      },
      answer: "A",
    },
    {
      question:
        "A placating response is characteristic of which conflict management style?",
      options: {
        A: "Confrontational",
        B: "Compromise",
        C: "Accommodation",
        D: "Principled",
      },
      answer: "C",
    },
    {
      question: "Who among these negatively expands a conflict situation?",
      options: {
        A: "A spoiler",
        B: "A neutral mediator",
        C: "A connector",
        D: "An honest facilitator",
      },
      answer: "A",
    },
    {
      question: "A conflict is constructive when?",
      options: {
        A: "There is a clear winner",
        B: "It prevents new conflict",
        C: "There is a mediator",
        D: "Each other’s opinion is recognised",
      },
      answer: "D",
    },
    {
      question: "Rwandan genocide is an example of a/an _______ conflict.",
      options: {
        A: "ideological",
        B: "ethnic",
        C: "political",
        D: "religious",
      },
      answer: "B",
    },
    {
      question:
        "PCR Political Party fails to agree on who should be the Presidential candidate for the forthcoming general election. This conflict is an ____________.",
      options: {
        A: "inter-group conflict",
        B: "intra-national conflict",
        C: "inter-political conflict",
        D: "intra-group conflict",
      },
      answer: "D",
    },
    {
      question: "Under whose regime was ECOMOG troop deployed to Liberia?",
      options: {
        A: "Gen. Muhammadu Buhari",
        B: "Gen. Yakubu Gowon",
        C: "Gen. Ibrahim Babangida",
        D: "Gen Olusegun Obasanjo",
      },
      answer: "C",
    },
    {
      question:
        "________________ a process where mandated representatives meet to resolve their differences and reach an agreement?",
      options: {
        A: "Confrontation",
        B: "Mediation",
        C: "Negotiation",
        D: "Arbitration",
      },
      answer: "C",
    },
    {
      question:
        "“Since war begins in the minds of men, it is in the minds of men that the defences of peace must be constructed.” The statement above is towards achieving _________",
      options: {
        A: "positive peace",
        B: "security",
        C: "international cooperation",
        D: "culture of peace",
      },
      answer: "D",
    },
    {
      question:
        "“Since war begins in the minds of men, it is in the minds of men that the defences of peace must be constructed.” The statement is the preamble to the constitution of ___________?",
      options: {
        A: "UNICEF",
        B: "UNESCO",
        C: "ECOWAS",
        D: "United Nations",
      },
      answer: "B",
    },
    {
      question: "Conflict within oneself is called?",
      options: {
        A: "Inter-Personal Conflict",
        B: "Inner Conflict",
        C: "Lack of Inner Peace",
        D: "Intra-Personal Conflict",
      },
      answer: "D",
    },
    {
      question: "The following are advantages of adopting ADR except?",
      options: {
        A: "Agreement is reached by conflicting parties",
        B: "Publicity",
        C: "Flexibility",
        D: "Saves cost",
      },
      answer: "B",
    },
    {
      question: "Banditry could be equated as ______ terrorism.",
      options: {
        A: "criminal",
        B: "religious",
        C: "dissent",
        D: "state-sponsored",
      },
      answer: "A",
    },
    {
      question:
        "Which of these counter terrorism mechanisms is the most subtle?",
      options: {
        A: "The use of violence",
        B: "The use of negotiation",
        C: "The use of international convention",
        D: "The use of carrot and stick approach",
      },
      answer: "B",
    },
    {
      question: "The United Nations Agenda for Peace was prepared by ________?",
      options: {
        A: "Antonio Guterres",
        B: "Boutrous Ghali",
        C: "Kofi Annan",
        D: "Ban Ki-moon",
      },
      answer: "B",
    },
    {
      question: "ECOWAS was created in the year ______________ ?",
      options: {
        A: "1980",
        B: "1945",
        C: "1975",
        D: "1992",
      },
      answer: "C",
    },
    {
      question: "All these are threats to conflict resolution except?",
      options: {
        A: "Spoilers",
        B: "Dividers",
        C: "Connectors",
        D: "Position",
      },
      answer: "C",
    },
    {
      question:
        "______________ is believed to be the most satisfactory method of dispute resolution.",
      options: {
        A: "Negotiation",
        B: "Arbitration",
        C: "Mediation",
        D: "Litigation",
      },
      answer: "A",
    },
    {
      question:
        "All these geo-political zones are relatively peaceful, except _______?",
      options: {
        A: "South-South",
        B: "North-East",
        C: "South-East",
        D: "North-Central",
      },
      answer: "B",
    },
    //second batch
    {
      question:
        "The difference between terrorism and Insurgency is that the former is _______ while the latter is _________.",
      options: {
        A: "indiscriminate / collective",
        B: "indiscriminate / selective",
        C: "selective / indiscriminate",
        D: "collective / indiscriminate",
      },
      answer: "B",
    },
    {
      question: "Who was the leader of Biafra secessionists?",
      options: {
        A: "Nnamdi Philip",
        B: "Nnaji Peter",
        C: "Nzogwu Kaduna",
        D: "Odumegwu Ojukwu",
      },
      answer: "D",
    },
    {
      question: "Johan Galtung (2000) defines Negative Peace as ________",
      options: {
        A: "absence of direct physical violence and social justice",
        B: "presence of social justice",
        C: "absence war and structural violence",
        D: "absence of structural violence and presence of social justice",
      },
      answer: "A",
    },
    {
      question: "Which of these terrorist groups is found in Nigeria?",
      options: {
        A: "ISIS",
        B: "L R A",
        C: "Al Qaida",
        D: "ISWAP",
      },
      answer: "D",
    },
    {
      question: "________ is the correct meaning of ECOMOG?",
      options: {
        A: "ECOWAS Military Group",
        B: "ECOWAS Monitoring Group",
        C: "ECOWAS Maintenance Group",
        D: "ECOWAS Militia Group",
      },
      answer: "B",
    },
    {
      question:
        "The first country which ECOMOG went on a peace mission is ________?",
      options: {
        A: "Ghana",
        B: "Sierra Leone",
        C: "Mali",
        D: "Liberia",
      },
      answer: "D",
    },
    {
      question: "Negative Peace has also been called _______?",
      options: {
        A: "peace of the people",
        B: "peace for social justice",
        C: "peace of the graveyard",
        D: "peace for inner peace",
      },
      answer: "C",
    },
    {
      question: "All these are radical structural conflict scholars, except?",
      options: {
        A: "Johan Galtung",
        B: "Karl Marx",
        C: "Vladimir Lenin",
        D: "All of the above",
      },
      answer: "A",
    },
    {
      question:
        "Which of these conflict theories best explains the farmers-herders conflict?",
      options: {
        A: "Structural Conflict Theories",
        B: "Frustration-Aggression Theory",
        C: "Human Needs Theory",
        D: "Greed vs. Grievance Theory",
      },
      answer: "C",
    },
    {
      question: "Conflict over __________ is the most difficult to resolve?",
      options: {
        A: "values",
        B: "psychological needs",
        C: "power",
        D: "information",
      },
      answer: "A",
    },
    {
      question:
        "Mediators often spend time with each conflicting parties through what is known as _________?",
      options: {
        A: "facilitation",
        B: "meetings",
        C: "communication",
        D: "shuttle",
      },
      answer: "D",
    },
    {
      question: "________ is a proponent of the Frustration-Aggression Theory?",
      options: {
        A: "John Dollard",
        B: "Karl Marx",
        C: "Walter Rodney",
        D: "Adam Smith",
      },
      answer: "A",
    },
    {
      question:
        "“I want him to leave my land right now!” is a statement of a Conflicting party’s ______?",
      options: {
        A: "Command",
        B: "Attitude",
        C: "Position",
        D: "Behaviour",
      },
      answer: "C",
    },
    {
      question:
        "Which conflict analysis tool analyses parties’ power relation?",
      options: {
        A: "Conflict Tree",
        B: "Conflict Map",
        C: "Onion",
        D: "ABC Triangle",
      },
      answer: "B",
    },
    {
      question:
        "“If you repeat that again, I won’t spare you” is a/an _____________ statement.",
      options: {
        A: "competitor’s",
        B: "avoider’s",
        C: "collaborator’s",
        D: "accommodator’s",
      },
      answer: "B",
    },
    {
      question: "In which year was the Treaty of Westphalia ratified?",
      options: {
        A: "1817",
        B: "1920",
        C: "1917",
        D: "1648",
      },
      answer: "D",
    },
    {
      question: "The United Nations was established on_______?",
      options: {
        A: "24th October 1945",
        B: "1st October 1946",
        C: "25th October 1939",
        D: "17th October 1946",
      },
      answer: "A",
    },
    {
      question: "A society CAN attain Positive Peace.",
      options: {
        A: "True",
        B: "False",
        C: "Only in Western societies",
        D: "Only in African societies",
      },
      answer: "B",
    },
    {
      question:
        "“If you want peace, prepare for war” is the tenet of ________ theory?",
      options: {
        A: "Democratic Peace",
        B: "Liberal Peace",
        C: "Idealism",
        D: "Pax",
      },
      answer: "D",
    },
    {
      question:
        "Which conflict analysis tool helps you to analyse the stakeholders involved in a conflict?",
      options: {
        A: "Doughnut",
        B: "Conflict Map",
        C: "ABC Triangle",
        D: "Conflict Tree",
      },
      answer: "B",
    },
    {
      question: "The following are non-binding ADR except?",
      options: {
        A: "Mediation",
        B: "Negotiation",
        C: "Arbitration",
        D: "Early Neutral Evaluation",
      },
      answer: "C",
    },
    {
      question: "_____________ is the father of peace studies.",
      options: {
        A: "Fredrick Engels",
        B: "Karl Marx",
        C: "Thomas Hopes",
        D: "Johan Galtung",
      },
      answer: "D",
    },
    {
      question:
        "The following are the issues associated with human security except?",
      options: {
        A: "Regional security",
        B: "Personal security",
        C: "Political security",
        D: "Food security",
      },
      answer: "A",
    },
    {
      question:
        "Which of these countries is not in the West African sub-region?",
      options: {
        A: "Mali",
        B: "Cape Verde",
        C: "Niger",
        D: "Chad",
      },
      answer: "D",
    },
    {
      question:
        "The _______________ conflict theory best explains the Rwandan Genocide.",
      options: {
        A: "Identity",
        B: "Human Need",
        C: "Radical Structural",
        D: "Greed vs. Grievance",
      },
      answer: "A",
    },
    //third batch
    {
      question:
        "The following are disputes that can be resolved with ADR, except?",
      options: {
        A: "Business disputes",
        B: "Landlord/Tenant Disputes",
        C: "Fraud",
        D: "Family disputes",
      },
      answer: "C",
    },
    {
      question:
        "Which conflict analysis tool helps to link the causes and effects of a conflict?",
      options: {
        A: "Map",
        B: "Onion",
        C: "Conflict Tree",
        D: "ABC Triangle",
      },
      answer: "C",
    },
    {
      question:
        "The last step in the final hearing of an Arbitration Process is _______________?",
      options: {
        A: "issue of award",
        B: "closing argument",
        C: "presentation of arbitral order",
        D: "summary of process",
      },
      answer: "A",
    },
    {
      question: "Indirect Violence is also known as __________?",
      options: {
        A: "Structural Violence",
        B: "Peaceful Violence",
        C: "Physical Violence",
        D: "Social Violence",
      },
      answer: "A",
    },
    {
      question:
        "A Termite is associated with ___________ Conflict Handling Style?",
      options: {
        A: "competitive",
        B: "compromising",
        C: "collaborative",
        D: "accommodating",
      },
      answer: "B",
    },
    {
      question:
        "An Owl is associated with ___________ Conflict Handling Style?",
      options: {
        A: "competitive",
        B: "compromising",
        C: "collaborative",
        D: "avoidance",
      },
      answer: "C",
    },
    {
      question: "An avoider is associated with which animal?",
      options: {
        A: "Teddy bear",
        B: "Turtle",
        C: "Owl",
        D: "Termite",
      },
      answer: "B",
    },
    {
      question: "A competitor is associated with which animal?",
      options: {
        A: "Shark",
        B: "Turtle",
        C: "Owl",
        D: "Termite",
      },
      answer: "A",
    },
    {
      question: "In a conflict map, the ZIGZAG (        ) line signifies?",
      options: {
        A: "Conflict",
        B: "Conflict issue",
        C: "Broken relationship",
        D: "Close relationship",
      },
      answer: "A",
    },
    {
      question: "In a conflict map, the DOTTED (--------) line signifies?",
      options: {
        A: "Alliance",
        B: "Weak/informal relationship",
        C: "Broken relationship",
        D: "Close relationship",
      },
      answer: "B",
    },
    {
      question: "In a conflict map, the STRAIGHT line signifies?",
      options: {
        A: "Alliance",
        B: "Weak/informal relationship",
        C: "Broken relationship",
        D: "Close relationship",
      },
      answer: "D",
    },
    {
      question: "In a conflict map, the DOUBLE line signifies?",
      options: {
        A: "Alliance",
        B: "Weak/informal relationship",
        C: "Broken relationship",
        D: "Close relationship",
      },
      answer: "A",
    },
    {
      question: "In a conflict map, ARROW (         ) signifies?",
      options: {
        A: "Direction of influence",
        B: "Close relationship",
        C: "Direction of a bigger power",
        D: "Direction of conflict",
      },
      answer: "A",
    },
    {
      question: "BATNA Means",
      options: {
        A: "Best Alternative Towards a Neutral Acceptance",
        B: "Bargaining Another Tough Negotiation Again",
        C: "Best Alternative To a Negotiated Agreement",
        D: "Best Alternative Than No Agreement",
      },
      answer: "C",
    },
    {
      question: "DDR Means",
      options: {
        A: "Disagreement, Difference and Retribution",
        B: "Destruction, Disruption and Reinforcement",
        C: "Display, Dissolve and Revolve",
        D: "Demobilization, Disarmament and Reintegration",
      },
      answer: "D",
    },
    {
      question: "SSR Means",
      options: {
        A: "Security and Strategic Reform",
        B: "Soft and Strategic Response",
        C: "Strategic Sector Response",
        D: "Security Sector Reform",
      },
      answer: "D",
    },
    {
      question: "Which mediator does the Early Neutral Evaluation (ENE)?",
      options: {
        A: "Facilitative Mediator",
        B: "Evaluative Mediator",
        C: "Principled Mediator",
        D: "Neutral Mediator",
      },
      answer: "B",
    },
    {
      question: "An arbitral award remains binding, except where _________",
      options: {
        A: "one of the conflicting parties disagrees with the award",
        B: "one of the conflicting parties refuses to sign the award",
        C: "the lead Arbitrator dies",
        D: "there is fraud on the part of the arbitrator",
      },
      answer: "D",
    },
    {
      question:
        "Janet and John have been fighting over which one of them will have to deal with a particularly difficult client. Neither wants to put in the time and effort and has been arguing that it is the other’s job to deal with it. Musa decides it is Janet’s job to handle the client, even though it arguably could be either person’s job. Which conflict handling style did Musa utilize?",
      options: {
        A: "Accommodating",
        B: "Avoidance",
        C: "Collaborative",
        D: "Competitive",
      },
      answer: "D",
    },
    {
      question:
        "Conflict resolution is the process of reaching a/an __________settlement.",
      options: {
        A: "skilful",
        B: "conflict",
        C: "peaceful",
        D: "formal",
      },
      answer: "C",
    },
    {
      question: "________ is an important step of conflict resolution?",
      options: {
        A: "Listening carefully",
        B: "Looking carefully",
        C: "Thinking carefully",
        D: "Acting carefully",
      },
      answer: "A",
    },
    {
      question: "Which stage of conflict is security sector reforms done?",
      options: {
        A: "De-escalation stage",
        B: "Manifestation stage",
        C: "Peace Building stage",
        D: "Resolution stage",
      },
      answer: "C",
    },
    {
      question: "Westphalia treaty was held in _________?",
      options: {
        A: "France",
        B: "Russia",
        C: "Germany",
        D: "Italy",
      },
      answer: "C",
    },
    {
      question:
        "__________________ is an extension or elaboration of a negotiation process that involves a third party?",
      options: {
        A: "ADR",
        B: "Negotiation",
        C: "Mediation",
        D: "Med-Arb",
      },
      answer: "C",
    },
    //4th batch
    {
      question:
        "Decision/agreement made after an arbitration is called a/an ________?",
      options: {
        A: "Arbitration Agreement",
        B: "Submission",
        C: "Award",
        D: "ADR",
      },
      answer: "C",
    },
    {
      question:
        "An agreement to utilize arbitration instead of going to court to resolve future contract-related conflicts is called _________?",
      options: {
        A: "Contract Agreement",
        B: "Arbitration Award",
        C: "Award Agreement",
        D: "Arbitration Agreement",
      },
      answer: "D",
    },
    {
      question:
        "Utilizing the court to resolve conflict is known as _________?",
      options: {
        A: "law",
        B: "litigation",
        C: "arbitration",
        D: "justice",
      },
      answer: "B",
    },
    {
      question:
        "The diagram that showcases the de-escalation, manifestation, escalation, stalemate stages of conflict is called _________?",
      options: {
        A: "conflict manifestation stages",
        B: "curve stages",
        C: "conflict progression",
        D: "peace progression",
      },
      answer: "C",
    },
    {
      question: "The first stage of conflict is the ___________?",
      options: {
        A: "manifestation stage",
        B: "latent stage",
        C: "escalation stage",
        D: "peace-building stage",
      },
      answer: "B",
    },
    {
      question:
        "The stage of conflict where there is a total breakdown of law and order is the ________?",
      options: {
        A: "manifest stage",
        B: "escalation stage",
        C: "stalemate stage",
        D: "crisis stage",
      },
      answer: "D",
    },
    {
      question:
        "The stage of conflict where neither party can win, but neither party want to breakdown, but are war fatigued is the ________?",
      options: {
        A: "de-escalation stage",
        B: "peace stage",
        C: "stalemate Stage",
        D: "crisis stage",
      },
      answer: "C",
    },
    {
      question:
        "The stage of conflict where the intrinsic and immediate causes of a conflict are addressed is the ___________?",
      options: {
        A: "peace stage",
        B: "post-conflict peacebuilding",
        C: "resolution Stage",
        D: "de-escalation stage",
      },
      answer: "B",
    },
    {
      question:
        "The year _________ was proclaimed as the International year for the Culture of Peace?",
      options: {
        A: "2010",
        B: "1945",
        C: "2000",
        D: "1997",
      },
      answer: "C",
    },
    {
      question:
        "Due to rampant insecurity, _________ could be tagged as a failed state?",
      options: {
        A: "Somalia",
        B: "Morocco",
        C: "Zimbabwe",
        D: "Rwanda",
      },
      answer: "A",
    },
    {
      question: "“Can we talk” is the statement of a/an ______________?",
      options: {
        A: "competitor",
        B: "avoider",
        C: "collaborator",
        D: "accommodator",
      },
      answer: "C",
    },
    {
      question:
        "The following countries are the permanent members of the United Nations Security Council except?",
      options: {
        A: "USA",
        B: "Germany",
        C: "China",
        D: "France",
      },
      answer: "B",
    },
    {
      question:
        "The following are the elements in the United Nations Agenda for Peace, except?",
      options: {
        A: "Peace Support",
        B: "Peace Making",
        C: "Peace Building",
        D: "Peace Keeping",
      },
      answer: "A",
    },
    {
      question:
        "The use of overwhelming surprise force by heavily armed Personnel to bring peace to a society is called ________?",
      options: {
        A: "War",
        B: "Peace Keeping",
        C: "War Enforcement",
        D: "Peace Enforcement",
      },
      answer: "D",
    },
    {
      question:
        "Conflict is from the Latin word ‘confligere’ which means to ____________?",
      options: {
        A: "disagree",
        B: "compete",
        C: "strike together",
        D: "talk together",
      },
      answer: "C",
    },
    {
      question:
        "The use of early warning, shuttle diplomacy, and fact-finding to maintain peace in a society is called _________?",
      options: {
        A: "peace diplomacy",
        B: "preventive diplomacy",
        C: "peace keeping",
        D: "peace making",
      },
      answer: "B",
    },
    {
      question:
        "The following are areas of action of the United Nation’s Agenda for Peace, except?",
      options: {
        A: "Armed confrontation",
        B: "Peace enforcement",
        C: "Peace keeping",
        D: "Peace making",
      },
      answer: "A",
    },
    {
      question: "In the Onion Conflict Analysis Tool, P I N means?",
      options: {
        A: "People Interest Needs",
        B: "Peace In Nations",
        C: "Position Interest Needs",
        D: "Position and Interest of Nations",
      },
      answer: "C",
    },
    {
      question:
        "The Second World War (WWII) started in ___________ and ended in ___________.",
      options: {
        A: "1939, 1945",
        B: "1945, 1950",
        C: "1930, 1939",
        D: "1919, 1925",
      },
      answer: "A",
    },
    {
      question:
        "The Nigerian Civil War was between the year _____________ and ______________.",
      options: {
        A: "1970, 1975",
        B: "1960, 1963",
        C: "1963, 1967",
        D: "1967, 1970",
      },
      answer: "D",
    },
    {
      question:
        "These are the types of parties/stakeholders in a conflict, except?",
      options: {
        A: "Secondary parties",
        B: "Shadow parties",
        C: "Tertiary parties",
        D: "Primary parties",
      },
      answer: "C",
    },
    {
      question: "Which of the following is not a cause of conflict?",
      options: {
        A: "Psychological Needs",
        B: "Information",
        C: "Dispute",
        D: "Value System",
      },
      answer: "C",
    },
    {
      question:
        "The measures for preventive diplomacy include one of the following?",
      options: {
        A: "Early warning",
        B: "Mediation",
        C: "Deployment of Humanitarian Aid workers",
        D: "DDR",
      },
      answer: "A",
    },
    {
      question: "ADR is categorised into _____________ and ____________.",
      options: {
        A: "Negotiation and Mediation",
        B: "Facilitative and Evaluative",
        C: "Binding and Non-Binding",
        D: "Negotiation and Litigation",
      },
      answer: "C",
    },
    //5th batch
    {
      question: "“Quid Pro Quo” means?",
      options: {
        A: "Reaching an agreement",
        B: "Too quick to reach an agreement",
        C: "giving up something to get something else in return",
        D: "Not being Bias in decision making",
      },
      answer: "C",
    },
    {
      question:
        "The stage in Arbitration where parties attempt to identify and track down all the documents, information and witnesses they need to defend their claim is __________?",
      options: {
        A: "Discovery",
        B: "Identification",
        C: "Trial Prep",
        D: "Pro bono",
      },
      answer: "A",
    },
    {
      question: "Identify the Odd one in the options below",
      options: {
        A: "Competition",
        B: "Collaboration",
        C: "Avoidance",
        D: "Accommodation",
      },
      answer: "B",
    },
    {
      question:
        "The individual that has low concern for self and high concern for others is a/an _________?",
      options: {
        A: "Competitor",
        B: "Collaborator",
        C: "Avoider",
        D: "Accommodator",
      },
      answer: "D",
    },
    {
      question:
        "The individual that has low concern for self and low concern for others is a/an _________?",
      options: {
        A: "Competitor",
        B: "Collaborator",
        C: "Avoider",
        D: "Accommodator",
      },
      answer: "C",
    },
    {
      question: "Which conflict handling style is grid 5:5 ______________?",
      options: {
        A: "Competition",
        B: "Collaboration",
        C: "Compromise",
        D: "Avoidance",
      },
      answer: "C",
    },
    {
      question: "Which conflict handling style is grid 1:1 ______________?",
      options: {
        A: "Competition",
        B: "Collaboration",
        C: "Compromise",
        D: "Avoidance",
      },
      answer: "D",
    },
    {
      question: "Which conflict handling style is grid 9:1 ______________?",
      options: {
        A: "Competition",
        B: "Collaboration",
        C: "Compromise",
        D: "Avoidance",
      },
      answer: "A",
    },
    {
      question: "Which conflict handling style is grid 9:9 ______________?",
      options: {
        A: "Competition",
        B: "Collaboration",
        C: "Compromise",
        D: "Avoidance",
      },
      answer: "B",
    },
    {
      question: "The nature of conflicts is _________ and _____________?",
      options: {
        A: "Direct and Indirect",
        B: "Destructive and Creative",
        C: "Structural and Cultural",
        D: "Inter-Personal and Inter-Group",
      },
      answer: "B",
    },
    {
      question: "Conflict arises from ____________ goals?",
      options: {
        A: "Common",
        B: "Uncommon",
        C: "Incompatible",
        D: "Compatible",
      },
      answer: "C",
    },
    {
      question: "As long as __________ exists conflict becomes unavoidable.",
      options: {
        A: "Life",
        B: "Human",
        C: "Charity",
        D: "Ideas",
      },
      answer: "A",
    },
    {
      question: "The nature of conflict can be categorized into?",
      options: {
        A: "7",
        B: "4",
        C: "3",
        D: "2",
      },
      answer: "D",
    },
    {
      question: "Another name for constructive conflict is?",
      options: {
        A: "Destructive",
        B: "Creative",
        C: "Catastrophic",
        D: "Pandemonium",
      },
      answer: "B",
    },
    {
      question:
        "A conflict characterized by violence is known as _____________?",
      options: {
        A: "Essential Conflict",
        B: "Proper Conflict",
        C: "Security Conflict",
        D: "Destructive Conflict",
      },
      answer: "D",
    },
    {
      question:
        "A level of conflict that is accompanied by change within an individual is called?",
      options: {
        A: "Change Conflict",
        B: "Intrapersonal Conflict",
        C: "Interpersonal Conflict",
        D: "Group Conflict",
      },
      answer: "B",
    },
    {
      question: "The levels of conflict can be categorized into?",
      options: {
        A: "6",
        B: "10",
        C: "8",
        D: "4",
      },
      answer: "A",
    },
    {
      question: "Conflict over resources is one of the ________ of conflict?",
      options: {
        A: "Nature",
        B: "Stages",
        C: "Levels",
        D: "Causes",
      },
      answer: "D",
    },
    {
      question:
        "It has become evident today that people can die for what they believe and identify with. This is an example of what type of conflict?",
      options: {
        A: "Information",
        B: "Value system",
        C: "Resources",
        D: "Needs",
      },
      answer: "B",
    },

    //all done
  ];

  const questionContainer = document.getElementById("question-container");
  const attemptedElement = document.getElementById("attempted");
  const totalElement = document.getElementById("total");
  const nextButton = document.getElementById("next-button");
  const resultContainer = document.getElementById("result-container");
  const resultMessage = document.getElementById("result-message");
  const restartButton = document.getElementById("restart-button");

  let currentQuestionIndex = 0;
  let attemptedQuestions = 0;
  let correctAnswers = 0;
  let correctAnswerSelected = false;

  function displayQuestion(questionData) {
    const questionHTML = `
            <div class="question">
                <p>${questionData.question}</p>
                <ul class="options">
                    ${Object.keys(questionData.options)
                      .map(
                        (optionKey) => `
                        <li data-answer="${optionKey}">${optionKey}. ${questionData.options[optionKey]}</li>
                    `
                      )
                      .join("")}
                </ul>
            </div>
        `;

    questionContainer.innerHTML = questionHTML;
    totalElement.textContent = questions.length;
    attemptedElement.textContent = attemptedQuestions;
    correctAnswerSelected = false;
    nextButton.disabled = true;
    addOptionEventListeners();
  }

  function addOptionEventListeners() {
    const options = document.querySelectorAll(".options li");
    options.forEach((option) => {
      option.addEventListener("click", () => {
        if (correctAnswerSelected) return; // Prevent multiple selections
        handleAnswer(option.dataset.answer);
      });
    });
  }

  function handleAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    const options = document.querySelectorAll(".options li");

    if (selectedOption === currentQuestion.answer) {
      options.forEach((option) => {
        if (option.dataset.answer === currentQuestion.answer) {
          option.classList.add("correct");
        }
      });
      correctAnswers++;
      attemptedQuestions++;
      correctAnswerSelected = true;
    } else {
      options.forEach((option) => {
        if (option.dataset.answer === currentQuestion.answer) {
          option.classList.add("correct");
        } else if (option.dataset.answer === selectedOption) {
          option.classList.add("incorrect");
        }
      });
      attemptedQuestions++;
      correctAnswerSelected = true;
    }
    attemptedElement.textContent = attemptedQuestions;
    nextButton.disabled = false; // Enable the next button after an answer is selected
  }

  function loadNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      displayQuestion(questions[currentQuestionIndex]);
    } else {
      showResults();
    }
  }

  function showResults() {
    resultContainer.style.display = "block";
    questionContainer.style.display = "none";
    nextButton.style.display = "none";
    resultMessage.textContent = `You answered ${correctAnswers} out of ${questions.length} questions correctly.`;
  }

  function restartQuiz() {
    currentQuestionIndex = 0;
    attemptedQuestions = 0;
    correctAnswers = 0;
    resultContainer.style.display = "none";
    questionContainer.style.display = "block";
    nextButton.style.display = "inline-block";
    displayQuestion(questions[currentQuestionIndex]);
  }

  nextButton.addEventListener("click", loadNextQuestion);
  restartButton.addEventListener("click", restartQuiz);

  displayQuestion(questions[currentQuestionIndex]);
});
