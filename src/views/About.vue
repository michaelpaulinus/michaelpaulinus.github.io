<script lang="ts">
	import cradleMoonImg from "/images/cradle-moon.jpeg";
	import goldReefImg from "/images/gold-reef-city.jpeg";
	import graduationImg from "/images/graduation.jpg";
	import montecasinoImg from "/images/montecasino.jpeg";
	import ContactButton from "@/components/ContactButton.vue";
	import TimelineList from "@/components/TimelineList.vue";
	import { EXPERIENCE, EDUCATION, CERTIFICATIONS, SKILLS } from "@/data/data";

	export default {
		components: {
			ContactButton,
			TimelineList,
		},

		data() {
			return {
				EXPERIENCE,
				EDUCATION,
				CERTIFICATIONS,
				SKILLS,
				pictures: [
					cradleMoonImg,
					goldReefImg,
					graduationImg,
					montecasinoImg,
				],
			};
		},
	};
</script>

<template>
	<div>
		<div class="container">
			<h1 class="page-header">About/Michael</h1>
		</div>

		<br />

		<div>
			<div class="carousel-container">
				<v-carousel
					:cycle="true"
					:hide-delimiters="true"
					:show-arrows="false"
				>
					<v-carousel-item v-for="pictureUrl in pictures">
						<v-img
							:src="pictureUrl"
							class="rounded-xl"
							max-height="20rem"
							max-width="15rem"
							cover
						/>
					</v-carousel-item>
				</v-carousel>
			</div>
		</div>

		<br />

		<div class="container">
			<div class="container-header">
				<h2>About</h2>
			</div>
			<div class="container-content">
				<p>
					Hello, my name is Michael Paulinus. I am a Full-Stack
					Software Engineer with a BSc(Eng) in Electronic Engineering
					from the University of KwaZulu-Natal. I'm a driven
					individual that is passionate about creating innovative
					solutions through code and have worked on various projects
					using a diverse range of programming languages and
					technologies including TypeScript, Vue.js, C#, Java, Python
					and cloud platforms.
				</p>
			</div>
		</div>

		<br />

		<div class="container">
			<div class="container-header">
				<h2>Contact</h2>
			</div>
			<div class="container-content">
				<div>
					<p>
						You can reach out to me on any of the following
						platforms.
					</p>
					<br />
					<div class="button-container">
						<contact-button
							:redirect-link="'mailto:michaelpaulinus@gmail.com'"
							:prepend-icon="'mdi-gmail'"
							:text="'Email'"
						/>
						<contact-button
							:redirect-link="'https://github.com/michaelpaulinus'"
							:prepend-icon="'mdi-github'"
							:text="'GitHub'"
						/>
						<contact-button
							:redirect-link="'https://www.instagram.com/michael_paulinus/'"
							:prepend-icon="'mdi-instagram'"
							:text="'Instagram'"
						/>
						<contact-button
							:redirect-link="'https://www.linkedin.com/in/michaelpaulinus/'"
							:prepend-icon="'mdi-linkedin'"
							:text="'LinkedIn'"
						/>
					</div>
				</div>
			</div>
		</div>

		<br />

		<div class="container">
			<div class="container-header">
				<h2>Experience</h2>
			</div>
			<div class="container-content">
				<div>
					<p>
						I've been working for
						{{ Number(new Date().getFullYear()) - 2022 }}+ years in
						the software development industry.
					</p>
					<br />
					<timeline-list :items="EXPERIENCE" />
				</div>
			</div>
		</div>

		<br />

		<div class="container">
			<div class="container-header">
				<h2>Education</h2>
			</div>
			<div class="container-content">
				<timeline-list :items="EDUCATION" />
			</div>
		</div>

		<br />

		<div class="container">
			<div class="container-header">
				<h2>Certifications</h2>
			</div>
			<div class="container-content">
				<timeline-list :items="CERTIFICATIONS" />
			</div>
		</div>

		<div class="container">
			<div class="container-header">
				<h2>Skills</h2>
			</div>
			<div class="container-content">
				<v-chip
					:prepend-icon="skill.icon"
					:text="skill.name"
					variant="outlined"
					v-for="skill in SKILLS"
					style="margin-inline-end: 0.25rem; margin-block: 0.25rem"
				/>
			</div>
		</div>
	</div>
</template>

<style>
	h2 {
		color: grey;
	}

	.container {
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 8rem;
		width: 100vw;
	}

	@media (max-width: 600px) {
		.container {
			flex-direction: column;
			justify-content: center;
			gap: 0.5rem;
		}
	}

	.container-header {
		width: 5%;
	}

	.container-content {
		width: 100%;
	}

	.carousel-container {
		margin: 0 auto;
		max-height: 20rem;
		max-width: 15rem;
	}

	.button-container {
		display: grid;
		grid-template-columns: auto auto;
		grid-template-rows: auto auto;
		grid-gap: 0.625rem;
	}

	@media (max-width: 600px) {
		.button-container {
			display: flex;
			justify-content: center;
			flex-direction: column;
		}
	}

	.page-header {
		margin: 0 auto;
		font-weight: 700;
		font-size: 3em;
	}
</style>
