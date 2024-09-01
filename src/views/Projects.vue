<script lang="ts">
	import randRatesImg from "/images/rand_rates.jpg";
	import spotiTrackerImg from "/images/spoti_tracker.webp";
	import footyPotyImg from "/images/footy_poty.png";
	import circuitDetImg from "/images/circuit-detector.jpg";
	import circuitGenImg from "/images/circuit-generator.jpg";
	import imageClassificationImg from "/images/image_classification.jpg";
	import votecoinImg from "/images/votecoin.png";
	import androidImg from "/images/android-app.png";
	import type ProjectItem from "@/models/ProjectItem";

	export default {
		data() {
			return {
				projects: [] as ProjectItem[],
			};
		},

		created() {
			this.projects = [
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
			] as ProjectItem[];
		},
	};
</script>

<template>
	<div>
		<div class="container">
			<h1 class="page-header">Projects/Michael</h1>
		</div>

		<div class="container">
			<v-list
				lines="two"
				bg-color="transparent"
			>
				<v-list-item
					v-for="item in projects"
					:key="item.url"
				>
					<v-card
						:href="item.url"
						target="_blank"
						variant="outlined"
					>
						<v-row align="center">
							<v-col>
								<v-img
									:src="item.imageSrc"
									max-width="auto"
									max-height="auto"
								></v-img>
							</v-col>
							<v-col>
								<v-card-title>{{ item.title }}</v-card-title>
								<v-card-text justify="start">
									{{ item.description }}</v-card-text
								>
							</v-col>
						</v-row>
					</v-card>
				</v-list-item>
			</v-list>
		</div>
	</div>
</template>

<style>
	.page-header {
		margin: 0 auto;
		font-weight: 700;
		font-size: 3em;
	}

	.container {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		max-width: 50rem;
		margin: 0 auto;
		padding: 1.25rem;
	}
</style>
