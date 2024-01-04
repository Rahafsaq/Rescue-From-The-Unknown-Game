import congrats from "../assets/congrats.png";
import fish from "../assets/fish.png";
import girlPower from "../assets/powerGirl.png";
import q1 from "../assets/images/q1.png";
import penguin from "../assets/penguin.png";
import race from "../assets/race.png";
const challenges = [
  // start challenge 1
  {
    challengeId: "1",
    stage: "1",
    name: "التحدي الأول",
    image: `${q1}`,
    question: " ما المقصود من الرمز؟",
    options: [],
    keyAnswer: "قلبا و قالبا",
  },
  // end challenge 1

  // start challenge 2
  {
    challengeId: "2",
    stage: "2",
    name: "التحدي الرابع",
    image: `${race}`,

    question: "لقد تفوقت على المركز الثاني في السباق, كم مركزك الان؟",
    options: ["الرابع", "الثالث", "الثاني", "الاول"],
    keyAnswer: "الثاني",
  },
  // end challenge 2
  // start challenge 3

  {
    challengeId: "6",
    stage: "2",
    name: "التحدي السابع",
    image: ` ${penguin}`,
    question: " ما الحيوان المقصود من الرمز؟",
    options: [],
    keyAnswer: "بطريق",
  },

  // end challenge 3

  // start challenge 4

  {
    challengeId: "4",
    stage: "3",
    name: "التحدي الخامس",
    image: `${fish}`,
    question:
      "كان لدي عشر اسماك في , وعدت الى المنزل لأرى أن 6 منهم قد ماتوا , كم تبقى في الحوض؟",
    options: ["4", "6", "10", "8"],
    keyAnswer: "10",
  },
  // end challenge 4
  // start challenge 5

  {
    challengeId: "5",
    stage: "3",
    name: "التحدي السادس",
    image: `${girlPower}`,
    question: " ما المسلسل الكرتوني المقصود من الرمز؟",
    options: [],
    keyAnswer: "فتيات القوة",
  },
  // end challenge 5
  // start challenge 6

  {
    challengeId: "6",
    // stage: '3',
    name: "التحدي السابع",
    image: ` ${penguin}`,
    question: " ما الحيوان المقصود من الرمز؟",
    options: [],
    keyAnswer: "بطريق",
  },
  // end challenge 6
];
export default challenges;
