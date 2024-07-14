<script lang="ts">
import synthesisLogo from '/images/synthesis_software_technologies_pty_ltd_logo.jpeg'
import optinumLogo from '/images/opti_num_solutions_logo.jpeg'
import ukznLogo from '/images/ukzn_logo.jpeg'
import cradleMoonImg from '/images/cradle-moon.jpeg'
import goldReefImg from '/images/gold-reef-city.jpeg'
import graduationImg from '/images/graduation.jpg'
import type ExperienceItem from '@/models/ExperienceItem'
import type EducationItem from '@/models/EducationItem'
import ContactButton from '@/components/ContactButton.vue'
import TimelineList from '@/components/TimelineList.vue'

export default {
  components: {
    ContactButton,
    TimelineList
  },

  data() {
    return {
      experience: [] as ExperienceItem[],
      education: [] as EducationItem[],
      pictures: [cradleMoonImg, goldReefImg, graduationImg]
    }
  },

  created() {
    this.experience = [
      {
        title: 'Software Engineer',
        company: 'Synthesis Software Technologies',
        time: 'Feb 2024 -',
        imageSrc: synthesisLogo,
        url: 'https://www.linkedin.com/company/synthesis-software-technologies-pty-ltd/'
      },
      {
        title: 'Consultant',
        company: 'Opti-Num Solutions',
        time: 'Jan 2022 - Jan 2024',
        imageSrc: optinumLogo,
        url: 'https://www.linkedin.com/company/opti-num-solutions/'
      },
      {
        title: 'Student Tutor',
        company: 'University of KwaZulu-Natal',
        time: 'Oct 2021 - Dec 2021',
        imageSrc: ukznLogo,
        url: 'https://www.linkedin.com/school/university-of-kwazulu-natal/'
      }
    ]
    this.education = [
      {
        course: 'BSc (Eng) Electronic Engineering',
        university: 'University of KwaZulu-Natal',
        imageSrc: ukznLogo,
        time: 'Feb 2018 - Dec 2021',
        url: 'https://ww2.ukzn.ac.za/'
      }
    ]
  }
}
</script>

<template>
  <div class="container">
    <h1 style="margin: 0 auto; font-weight: 700; font-size: 3em">About/Michael</h1>
  </div>

  <br />

  <div class="carousel-container">
    <v-carousel :cycle="true" :hide-delimiters="true" :show-arrows="false">
      <v-carousel-item v-for="pictureUrl in pictures" :src="pictureUrl" />
    </v-carousel>
  </div>

  <br />

  <div class="container">
    <div class="header">
      <h2>About</h2>
    </div>
    <div class="content">
      <p>
        Hello, my name is Michael Paulinus, and I am a software engineer from South Africa. I hold a
        BSc(Eng) in Electronic Engineering from the University of KwaZulu-Natal, where I gained a
        deep understanding of software development principles, including design patterns, data
        structures, algorithms, and software testing methodologies.
      </p>
    </div>
  </div>

  <br />

  <div class="container">
    <div class="header">
      <h2>Contact</h2>
    </div>
    <div class="content">
      <p>You can reach out to me on any of the following platforms.</p>
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

  <br />

  <div class="container">
    <div class="header">
      <h2>Experience</h2>
    </div>
    <div class="content">
      <p>
        I've been working for {{ Number(new Date().getFullYear()) - 2022 }}+ years in the software
        development industry.
      </p>
      <br />
      <timeline-list :items="experience" />
    </div>
  </div>

  <br />

  <div class="container">
    <div class="header">
      <h2>Education</h2>
    </div>
    <div class="content">
      <timeline-list :items="education" />
    </div>
  </div>
</template>

<style>
h2 {
  color: grey;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.carousel-container {
  max-height: 300px;
  max-width: 300px;
  margin: 0 auto;
}

.button-container {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  grid-gap: 10px;
}

.header {
  flex-basis: 30%;
  margin-right: 20px;
}

.content {
  flex-basis: 65%;
}
</style>
