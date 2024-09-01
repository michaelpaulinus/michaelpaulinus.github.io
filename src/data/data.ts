import synthesisLogo from "/images/synthesis_software_technologies_pty_ltd_logo.jpeg";
import optinumLogo from "/images/opti_num_solutions_logo.jpeg";
import ukznLogo from "/images/ukzn_logo.jpeg";
import awsLogo from "/images/amazon_web_services_logo.jpg";
import googleLogo from "/images/google_logo.jpg";
import microsoftLogo from "/images/microsoft_logo.jpg";
import randRatesImg from "/images/rand_rates.jpg";
import spotiTrackerImg from "/images/spoti_tracker.webp";
import footyPotyImg from "/images/footy_poty.png";
import circuitDetImg from "/images/circuit-detector.jpg";
import circuitGenImg from "/images/circuit-generator.jpg";
import imageClassificationImg from "/images/image_classification.jpg";
import votecoinImg from "/images/votecoin.png";
import androidImg from "/images/android-app.png";
import type Experience from "@/models/Experience";
import type Education from "@/models/Education";
import type Skill from "@/models/Skill";
import type Project from "@/models/Project";

export const EXPERIENCE = [
	{
		title: "Software Engineer",
		company: "Synthesis Software Technologies",
		time: "Feb 2024 -",
		imageSrc: synthesisLogo,
		url: "https://www.linkedin.com/company/synthesis-software-technologies-pty-ltd/",
	},
	{
		title: "Consultant",
		company: "Opti-Num Solutions",
		time: "Jan 2022 - Jan 2024",
		imageSrc: optinumLogo,
		url: "https://www.linkedin.com/company/opti-num-solutions/",
	},
	{
		title: "Student Tutor",
		company: "University of KwaZulu-Natal",
		time: "Oct 2021 - Dec 2021",
		imageSrc: ukznLogo,
		url: "https://www.linkedin.com/school/university-of-kwazulu-natal/",
	},
] as Experience[];

export const EDUCATION = [
	{
		course: "BSc (Eng) Electronic Engineering",
		university: "University of KwaZulu-Natal",
		imageSrc: ukznLogo,
		time: "Feb 2018 - Dec 2021",
		url: "https://ww2.ukzn.ac.za/",
	},
];

export const CERTIFICATIONS = [
	{
		course: "AWS Certified Cloud Practitioner",
		university: "Amazon Web Services",
		imageSrc: awsLogo,
		time: "Mar 2024",
		url: "https://www.credly.com/badges/6766c8bb-3374-416e-b98f-324705d96cd3/public_url",
	},
	{
		course: "Cloud Digital Leader",
		university: "Google Cloud",
		imageSrc: googleLogo,
		time: "May 2024",
		url: "https://www.credly.com/badges/bc2e4d33-18d0-4390-b360-1744a5b567df/public_url",
	},
	{
		course: "Microsoft Certified: Azure Fundamentals",
		university: "Microsoft",
		imageSrc: microsoftLogo,
		time: "Jun 2024",
		url: "https://learn.microsoft.com/api/credentials/share/en-us/MichaelPaulinus-9102/F5D31B456427741C?sharingId=A3348AD9AF994697",
	},
] as Education[];

export const SKILLS = [
	{
		icon: "mdi-vuejs",
		name: "Vue.js",
	},
	{
		icon: "mdi-vuetify",
		name: "Vuetify",
	},
	{
		icon: "mdi-language-typescript",
		name: "TypeScript",
	},
	{
		icon: "mdi-language-javascript",
		name: "JavaScript",
	},
	{
		icon: "mdi-language-html5",
		name: "HTML",
	},
	{
		icon: "mdi-language-css3",
		name: "CSS",
	},
	{
		icon: "mdi-language-csharp",
		name: "C#",
	},
	{
		icon: "mdi-dot-net",
		name: "DotNet",
	},
	{
		icon: "mdi-api",
		name: "REST APIs",
	},
	{
		icon: "mdi-git",
		name: "Git",
	},
	{
		icon: "mdi-database",
		name: "SQL",
	},
	{
		icon: "mdi-aws",
		name: "AWS",
	},
	{
		icon: "mdi-terraform",
		name: "Terraform",
	},
	{
		icon: "mdi-google-analytics",
		name: "Data Analytics",
	},
	{
		icon: "mdi-xml",
		name: "Web development",
	},
	{
		icon: "mdi-file-document",
		name: "Documentation",
	},
] as Skill[];

export const PROJECTS = [
	{
		title: "Rand Rates",
		description:
			"This is a twitter bot that tweets the daily Rand value against USD, EUR and GBP at 12pm.",
		imageSrc: randRatesImg,
		url: "https://github.com/michaelpaulinus/rand-rates",
	},
	{
		title: "Spoti-Tracker",
		description:
			"This is a Spotify wrapped clone that shows users their top artists and tracks for the last 6 weeks, 6 months and 12 months.",
		imageSrc: spotiTrackerImg,
		url: "https://github.com/michaelpaulinus/spoti-tracker",
	},
	{
		title: "Footy-POTY",
		description:
			"A web app that tracks the top goal scorers from the Top 5 European football leagues.",
		imageSrc: footyPotyImg,
		url: "https://github.com/michaelpaulinus/footy-poty",
	},
	{
		title: "Circuit Generator",
		description:
			"The Circuit Generator project was a program designed to generate random electrical circuits using Python. The objective was to create a tool that could generate circuits of different complexities, which could be used to train a machine learning model. To achieve this, I used the schemdraw library from Python to design and build the program. The program was able to generate circuits with varying levels of complexity, which included different components such as resistors, capacitors, inductors, and transistors. This project was an exciting opportunity to explore the intersection of machine learning and electrical engineering, and I am proud of the results achieved.",
		imageSrc: circuitGenImg,
		url: "https://github.com/michaelpaulinus/Circuit-Generator",
	},
	{
		title: "Circuit Component Detector",
		description:
			'The Circuit Component Detector project was an exciting exploration into using machine learning to identify circuit components from digital circuits. The objective was to train a machine learning model to accurately recognize different circuit components, including resistors, capacitors, inductors, and transistors. To achieve this, I used the Objection Detection API in TensorFlow with the "SSD with Mobilenet" model. Over 200 images of different circuits were used in training the model to ensure high accuracy from the component detection. Using the trained model, the program was able to successfully identify and detect various circuit components with a high degree of accuracy. This project provided an excellent opportunity to explore the intersection of machine learning and electrical engineering and to see the practical applications of these technologies.',
		imageSrc: circuitDetImg,
		url: "https://github.com/michaelpaulinus/Circuit-Components-Detector",
	},
	{
		title: "E-Voting using Blockchain",
		description:
			"This was a group project which focused on running an election using blockchain technology. I was responsible for designing the smart contract of the election. A smart contract is simply the protocols of an agreement written in code and stored on the blockchain. This consisted of functions such as controlling voting periods, preventing double voting and confirming voter eligibility. The project also provided voters a method of verifying their vote was correctly allocated.",
		imageSrc: votecoinImg,
		url: "https://github.com/Shelin-ftego/Votecoin-v2",
	},
	{
		title: "Image Classification Using GLCM",
		description:
			"This project uses Haralick features from a Gray Level Co-occurrence Matrix (GLCM) to classify X-ray scans of a chest as that of a chest that is normal or having pneumonia.",
		imageSrc: imageClassificationImg,
		url: "https://github.com/michaelpaulinus/Image-Classification-GLCM",
	},
	{
		title: "Sign Language Chat App",
		description:
			"This Android application was created for my final year design project. The application used a deep learning model to convert static sign language gestures to text and send them as a text message.",
		imageSrc: androidImg,
		url: "https://github.com/michaelpaulinus/SignChat",
	},
] as Project[];
