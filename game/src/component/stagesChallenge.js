import girlPower from '../assets/girl-power.png';
import q1 from '../assets/images/q1.png';
import penguin from '../assets/penguin.png';
const challenges = [
	// start challenge 1
	{
		challengeId: '1',
		name: 'التحدي الأول',
		image: `${q1}`,
		question: ' ما المقصود من الرمز؟',
		options: [''],
		keyAnswer: 'قلبا و قالبا',
	},
	// end challenge 1

	// start challenge 2
	{
		challengeId: '2',
		name: 'مبرووووك',
		image: '',

		question: 'فزت بنسخة الشخصية بدون تحدي',
		// options: [''],
		// keyAnswer: '8:40',
	},
	// end challenge 2
	// start challenge 3

	{
		challengeId: '3',
		name: 'التحدي الثالث',
		image: '',
		question: 'لديك 5 ثواني لتذكر الترتيب التالي',
		options: ['4 صور'],
		keyAnswer: 'مثلا الصورة الثالثة',
	},
	// end challenge 3
	// start challenge 4

	{
		challengeId: '4',
		name: 'التحدي الرابع',
		image: '',

		question: 'لقد تفوقت على المركز الثاني في السباق, كم مركزك الان؟',
		options: ['الاول', 'الثاني', 'الثالث', 'الرابع'],
		keyAnswer: 'الثاني',
	},
	// end challenge 4

	// start challenge 5

	{
		challengeId: '5',
		name: 'التحدي الخامس',
		image: '',

		question: 'استخرج كلمة من العروف ادناه',
		options: [''],
		keyAnswer: ['نحدد جميع الاحتمالات'],
	},
	// end challenge 5
	// start challenge 6

	{
		challengeId: '6',
		name: 'التحدي السادس',
		image: { girlPower },
		question: ' ما المسلسل الكرنوني المقصود من الرمز؟',
		options: [''],
		keyAnswer: 'فتيات القوة',
	},
	// end challenge 6
	// start challenge 7

	{
		challengeId: '7',
		name: 'التحدي السابع',
		image: { penguin },
		question: ' ما الحيوان المقصود من الرمز؟',
		options: [''],
		keyAnswer: 'بطريق',
	},
	// end challenge 7

	{
		challengeId: '8',
		name: 'التحدي الثامن',
		image: '',
		question: 'حاول ايقاف الساعة عند 8:40',
		options: [''],
		keyAnswer: '8:40',
	},
	//
];
export default challenges;
