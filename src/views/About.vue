<script lang="ts">
import synthesisLogo from '/images/synthesis_software_technologies_pty_ltd_logo.jpeg'
import optinumLogo from '/images/opti_num_solutions_logo.jpeg'
import ukznLogo from '/images/ukzn_logo.jpeg'
import cradleMoonImg from '/images/cradle-moon.jpeg'
import goldReefImg from '/images/gold-reef-city.jpeg'
import graduationImg from '/images/graduation.jpg'
import awsLogo from '/images/amazon_web_services_logo.jpg'
import googleLogo from '/images/google_logo.jpg'
import microsoftLogo from '/images/microsoft_logo.jpg'
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
      certification: [] as EducationItem[],
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

    this.certification = [
      {
        course: 'AWS Certified Cloud Practitioner',
        university: 'Amazon Web Services',
        imageSrc: awsLogo,
        time: 'Mar 2024',
        url: 'https://www.credly.com/badges/6766c8bb-3374-416e-b98f-324705d96cd3/public_url'
      },
      {
        course: 'Cloud Digital Leader',
        university: 'Google Cloud',
        imageSrc: googleLogo,
        time: 'May 2024',
        url: 'https://www.credly.com/badges/bc2e4d33-18d0-4390-b360-1744a5b567df/public_url'
      },
      {
        course: 'Microsoft Certified: Azure Fundamentals',
        university: 'Microsoft',
        imageSrc: microsoftLogo,
        time: 'Jun 2024',
        url: 'https://learn.microsoft.com/api/credentials/share/en-us/MichaelPaulinus-9102/F5D31B456427741C?sharingId=A3348AD9AF994697'
      }
    ]
  }
}
</script>

<template>
  <div>
    <div class="container">
      <h1 class="page-header">About/Michael</h1>
    </div>

    <br />

    <div>
      <div class="carousel-container">
        <v-carousel :cycle="true" :hide-delimiters="true" :show-arrows="false">
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
          Hello, my name is Michael Paulinus, and I am a software engineer from South Africa. I hold
          a BSc(Eng) in Electronic Engineering from the University of KwaZulu-Natal, where I gained
          a deep understanding of software development principles, including design patterns, data
          structures, algorithms, and software testing methodologies.
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
    </div>

    <br />

    <div class="container">
      <div class="container-header">
        <h2>Experience</h2>
      </div>
      <div class="container-content">
        <div>
          <p>
            I've been working for {{ Number(new Date().getFullYear()) - 2022 }}+ years in the
            software development industry.
          </p>
          <br />
          <timeline-list :items="experience" />
        </div>
      </div>
    </div>

    <br />

    <div class="container">
      <div class="container-header">
        <h2>Education</h2>
      </div>
      <div class="container-content">
        <timeline-list :items="education" />
      </div>
    </div>

    <br />

    <div class="container">
      <div class="container-header">
        <h2>Certifications</h2>
      </div>
      <div class="container-content">
        <timeline-list :items="certification" />
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
