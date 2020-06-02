<template>
  <!-- TODOS:
 - Correct image sizes 
 - Get a better lazy loading svg, check way the animated one isn't working.
 -->
  <v-app>
    <!-- Background image  -->
    <v-img
      alt="Background Image"
      src="./assets/background.jpg"
      style="position:absolute; width:100%; height:550px"
    />

    <!-- App bar  -->
    <v-app-bar
      id="appBar"
      v-scroll="onScroll"
      app
      :color="appBarColor"
      :dark="appBarTheme"
      dense
    >
      <v-app-bar-nav-icon
        class="d-md-none"
        @click="nav_drawer = true"
      ></v-app-bar-nav-icon>

      <v-toolbar-title class="d-none d-sm-flex">
        <v-btn href="#" text>
          <span class="navButtonFont font-weight-bold">
            Jorge Garza
          </span>
        </v-btn>
      </v-toolbar-title>

      <div class="d-none d-md-flex justify-center" style="width:80%">
        <v-btn href="#aboutme" text>
          <span class="navButtonFont">
            ABOUT ME
          </span>
        </v-btn>
        <v-btn href="#publications" text>
          <span class="navButtonFont">
            Publications
          </span>
        </v-btn>
        <v-btn href="#teaching" text>
          <span class="navButtonFont">
            Teaching
          </span>
        </v-btn>
        <!-- <v-btn href="#work" text>
          <span class="navButtonFont">
            Work
          </span>
        </v-btn> -->
        <v-btn href="#projects" text>
          <span class="navButtonFont">
            Projects
          </span>
        </v-btn>
        <v-btn href="#news" text>
          <span class="navButtonFont">
            News
          </span>
        </v-btn>
      </div>
    </v-app-bar>

    <!-- Nav drawer -->
    <v-navigation-drawer v-model="nav_drawer" dark fixed temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-img :src="require('./assets/profilepic.jpg')"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>
            <v-btn style="justify-content:start" block href="#" text>
              Jorge Garza
            </v-btn>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <div style="width:100%;">
        <!-- Too night to add a class right now -->
        <v-btn style="justify-content:start" block href="#aboutme" text>
          ABOUT ME
        </v-btn>
        <br />
        <v-btn style="justify-content:start" block href="#publications" text>
          Publications
        </v-btn>
        <br />
        <v-btn style="justify-content:start" block href="#teaching" text>
          Teaching
        </v-btn>
        <br />
        <!-- <v-btn style="justify-content:start" block href="#work" text>
          Work
        </v-btn>
        <br /> -->
        <v-btn style="justify-content:start" block href="#projects" text>
          Projects
        </v-btn>
        <br />
        <v-btn style="justify-content:start" block href="#news" text>
          News
        </v-btn>
      </div>
    </v-navigation-drawer>

    <v-content id="content" style="background-color:#E8E8E8">
      <v-container
        :style="{ width: $vuetify.breakpoint.lgAndUp ? '60%' : '100%' }"
      >
        <material-card
          id="materialCard"
          style="margin-top: 15%"
          class="v-card-profile"
          raised
          :avatar="require('./assets/profilepic.jpg')"
        >
          <v-card-text id="cardText">
            <v-container class="px-0">
              <div class="text-center">
                <h1 class="display-1 font-weight-light mb-3 black--text">
                  Jorge Garza
                </h1>

                <h1 class="display-1 font-weight-light mb-3 black--text">
                  Computer Science Ph.D. Student at
                  <a href="https://cse.ucsd.edu/" target="_blank">UCSD</a>
                </h1>
                <p class="body-1 font-weight-light">
                  (Email: jgarzagu at eng.ucsd.edu)
                </p>
              </div>
              <br />
              <br />
              <h1
                id="aboutme"
                class="display-1 font-weight-light pt-12 black--text"
              >
                About me
              </h1>
              <v-container class="px-0">
                <p class="font-weight-light body-1 text--darken-3 grey--text">
                  <!-- <p class="body-1 font-weight-regular"> -->
                  I am a Ph.D. candidate in the Department of Computer Science
                  and Engineering (<a
                    href="https://cse.ucsd.edu/"
                    target="_blank"
                    >CSE</a
                  >) at the University of California, San Diego (<a
                    href="https://ucsd.edu/"
                    target="_blank"
                    >UCSD</a
                  >). I am a member of the Non-Volatile Systems Laboratory (<a
                    href="http://nvsl.ucsd.edu/"
                    target="_blank"
                    >NVSL</a
                  >) and the Center for Networking Systems (<a
                    href="https://cns.ucsd.edu/"
                    target="_blank"
                    >CNS</a
                  >), and currently working with Professor
                  <a href="http://swanson.ucsd.edu/" target="_blank"
                    >Steven Swanson</a
                  >. My research interests are web interfaces, human computer
                  interaction, computer architecture, IoT, and embedded systems.
                  My research objective is to facilitate the design of
                  electronic devices by creating Computer-aided design (CAD)
                  tools. A CAD I'm currently working on is a novel tool that can
                  transform web pages into actual physical devices by making
                  HTML DOM elements interact with the physical domain.
                </p>
              </v-container>
              <h1
                id="publications"
                class="display-1 font-weight-light pt-12 black--text"
              >
                Publications
                <span class="body-1 font-weight-light">
                  <a
                    href="https://scholar.google.com/citations?user=i_AcsFMAAAAJ&hl=en"
                    target="_blank"
                    >Google Scholar</a
                  >
                </span>
              </h1>
              <v-container class="px-0">
                <!-- Publications Carousel -->
                <v-card
                  v-for="(publication, i) in publications"
                  :key="i"
                  elevation="0"
                  class="mt-6"
                >
                  <v-row dense>
                    <v-col :cols="$vuetify.breakpoint.smAndDown ? 12 : 6">
                      <v-container>
                        <p class="body-1 black--text pb-0 mb-0">
                          {{ publication.title }}
                        </p>
                        <p class="body-1 font-weight-light">
                          {{ publication.authors }}
                          <br />
                          <a :href="publication.conferenceLink" target="_blank">
                            {{ publication.conference }}
                          </a>
                        </p>
                      </v-container>
                    </v-col>
                    <v-col :cols="$vuetify.breakpoint.smAndDown ? 12 : 6">
                      <v-carousel
                        :continuous="false"
                        :cycle="false"
                        :show-arrows="true"
                        :hide-delimiters="true"
                        :height="publications_carouselHeight"
                      >
                        <v-carousel-item
                          v-for="(paperImages, i) in publication.paperImages"
                          :key="i"
                        >
                          <v-img
                            class="zoominPointer"
                            @click="zoomImage(paperImages.src)"
                            :src="require('' + paperImages.src)"
                            :lazy-src="require('./assets/loading.svg')"
                            contain
                            :height="publications_carouselHeight"
                          />
                        </v-carousel-item>
                      </v-carousel>
                    </v-col>
                  </v-row>
                </v-card>
                <!-- END: Publcations Carousel -->
              </v-container>
              <h1
                id="teaching"
                class="display-1 font-weight-light pt-12 black--text"
              >
                Teaching
              </h1>
              <v-container class="px-0">
                <!-- Teaching Carousel -->
                <v-card
                  v-for="(teaching, i) in teachings"
                  :key="i"
                  elevation="0"
                  class="mt-6"
                >
                  <v-row dense>
                    <v-col :cols="$vuetify.breakpoint.smAndDown ? 12 : 6">
                      <v-container>
                        <p class="body-1 black--text">
                          {{ teaching.title }}
                        </p>
                        <p class="body-1 font-weight-light">
                          {{ teaching.about }}
                        </p>
                        <p class="body-1 font-weight-light mb-0">
                          {{ teaching.years }}
                          <br />
                          <a :href="teaching.webPageLink" target="_blank">
                            {{ teaching.webPage }}
                          </a>
                        </p>
                      </v-container>
                    </v-col>
                    <v-col :cols="$vuetify.breakpoint.smAndDown ? 12 : 6">
                      <v-carousel
                        :continuous="false"
                        :cycle="false"
                        :show-arrows="true"
                        :hide-delimiters="true"
                        :height="teachings_carouselHeight"
                      >
                        <v-carousel-item
                          v-for="(teachingImages, i) in teaching.teachingImages"
                          :key="i"
                        >
                          <v-img
                            class="zoominPointer"
                            @click="zoomImage(teachingImages.src)"
                            :src="require('' + teachingImages.src)"
                            :lazy-src="require('./assets/loading.svg')"
                            contain
                            :height="teachings_carouselHeight"
                          />
                        </v-carousel-item>
                      </v-carousel>
                    </v-col>
                  </v-row>
                </v-card>
                <!-- END: Teching Carousel -->
              </v-container>
              <!-- <h1
                id="work"
                class="display-1 font-weight-light pt-12 black--text"
              >
                Work Experience
              </h1>
              <v-container class="px-0">
                <v-card
                  v-for="(work, i) in works"
                  :key="i"
                  elevation="6"
                  class="mt-6"
                >
                  <v-row v-if="work.workImages.length != 0" dense>
                    <v-col :cols="$vuetify.breakpoint.smAndDown ? 12 : 6">
                      <v-container>
                        <p class="body-1 black--text pb-0 mb-0">
                          {{ work.title }}
                        </p>
                        <p class="body-2 font-weight-light">
                          {{ work.years }}
                        </p>
                      </v-container>
                    </v-col>
                    <v-col :cols="$vuetify.breakpoint.smAndDown ? 12 : 6">
                      <v-carousel
                        :continuous="false"
                        :cycle="false"
                        :show-arrows="true"
                        :hide-delimiters="true"
                        :height="works_carouselHeight"
                      >
                        <v-carousel-item
                          v-for="(workImages, i) in work.workImages"
                          :key="i"
                        >
                          <v-img
                            class="zoominPointer"
                            @click="zoomImage(workImages.src)"
                            :src="require('' + workImages.src)"
                            :lazy-src="require('./assets/loading.svg')"
                            contain
                            :height="works_carouselHeight"
                          />
                        </v-carousel-item>
                      </v-carousel>
                    </v-col>
                  </v-row>
                  <v-container v-else>
                    <p class="body-1 black--text pb-0 mb-0">
                      {{ work.title }}
                    </p>
                    <p class="body-2 font-weight-light">
                      {{ work.years }}
                    </p>
                  </v-container>
                  <v-expansion-panels>
                    <v-expansion-panel>
                      <v-expansion-panel-header>About</v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <p class="body-1 font-weight-light">
                          "{{ work.about }}"
                        </p>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-card>
              </v-container>
              <br />
              <br /> -->
              <h1
                id="projects"
                class="display-1 font-weight-light pt-12 black--text"
              >
                Projects
              </h1>
              <v-container fluid class="px-0">
                <div v-for="(project, i) in projects" :key="i">
                  <v-card-title>{{ project.title }}</v-card-title>
                  <v-card
                    elevation="0"
                    :class="{
                      'ml-6': $vuetify.breakpoint.mdAndUp ? true : false,
                      'mb-4': true,
                      'float-right': $vuetify.breakpoint.smAndDown
                        ? false
                        : true
                    }"
                    width="400px"
                  >
                    <v-carousel
                      :continuous="false"
                      :cycle="false"
                      :show-arrows="true"
                      :hide-delimiters="true"
                      :height="projects_carouselHeight"
                    >
                      <v-carousel-item
                        v-for="(images, i) in project.images"
                        :key="i"
                      >
                        <v-img
                          class="zoominPointer"
                          @click="zoomImage(images.src)"
                          :src="require('' + images.src)"
                          :lazy-src="require('./assets/loading.svg')"
                          contain
                          :height="projects_carouselHeight"
                        />
                      </v-carousel-item>
                    </v-carousel>
                  </v-card>
                  <p
                    class="body-1 font-weight-light title text--darken-3 grey--text ma-4 text-warp"
                    :style="{ 'min-height': projects_carouselHeight }"
                  >
                    <span v-if="project.haslink == true">
                      Project Link:
                      <a :href="project.link" target="_blank">
                        {{ project.link }}
                      </a>
                      <br />
                      <br />
                    </span>
                    {{ project.about }}
                  </p>
                </div>
              </v-container>
              <h1
                id="news"
                class="display-1 font-weight-light pt-12 black--text"
              >
                News
              </h1>
              <v-container class="px-0">
                <v-timeline v-for="(theNew, i) in news" :key="i" dense>
                  <v-timeline-item :color="theNew.color"
                    ><v-card class="elevation-2">
                      <v-row
                        align="center"
                        v-if="theNew.image != undefined"
                        dense
                      >
                        <v-col :cols="$vuetify.breakpoint.smAndDown ? 12 : 8">
                          <v-card-subtitle v-html="theNew.about">
                          </v-card-subtitle>
                        </v-col>
                        <v-col :cols="$vuetify.breakpoint.smAndDown ? 12 : 4">
                          <v-img
                            class="zoominPointer"
                            @click="zoomImage(theNew.image)"
                            :src="require('' + theNew.image)"
                            :lazy-src="require('./assets/loading.svg')"
                            contain
                            height="100px"
                          />
                        </v-col>
                      </v-row>
                      <v-card-subtitle v-else v-html="theNew.about">
                      </v-card-subtitle>
                    </v-card>
                  </v-timeline-item>
                </v-timeline>
              </v-container>
            </v-container>
          </v-card-text>
        </material-card>
      </v-container>
    </v-content>
    <!-- Carousel Zoom Dialog -->
    <v-dialog v-model="zoomCarouselDialog" width="80%">
      <v-card>
        <v-card-title class="white" primary-title>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="zoomCarouselDialog = false">
            X
          </v-btn>
        </v-card-title>

        <v-card-text>
          <v-carousel
            :continuous="false"
            :cycle="false"
            :show-arrows="true"
            :hide-delimiters="true"
          >
            <v-carousel-item v-for="(image, i) in zoomCarouselImages" :key="i">
              <v-img
                :src="require('' + image.src)"
                :lazy-src="require('./assets/loading.svg')"
                height="100%"
                contain
              />
            </v-carousel-item>
          </v-carousel>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!-- Image Zoom Dialog -->
    <v-dialog
      v-model="zoomImageDialog"
      :width="$vuetify.breakpoint.lgAndUp ? '50%' : '100%'"
    >
      <v-card>
        <v-card-title class="white" primary-title>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="zoomImageDialog = false">
            X
          </v-btn>
        </v-card-title>

        <v-card-text class="pa-0" v-if="zoomImageImage != ''">
          <v-img
            :src="require('' + zoomImageImage)"
            :lazy-src="require('./assets/loading.svg')"
            height="100%"
            contain
          />
        </v-card-text>
      </v-card>
    </v-dialog>
    <!-- Footer -->
    <v-footer :padless="true">
      <v-card flat tile width="100%" class="white lighten-1 text-center">
        <v-card-text>
          This is an open source profile page designed by me using
          <a href="https://vuejs.org/" target="_blank">
            Vuejs
          </a>
          and
          <a href="http://vuetifyjs.com/" target="_blank">
            Veutify.
          </a>
          <br />
          Source:
          <a
            href="https://github.com/Guardado/vuemyprofilepage"
            target="_blank"
          >
            github
          </a>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="black--text">
          @ {{ new Date().getFullYear() }} <strong>Jorge Garza</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import MaterialCard from "./components/MaterialCard";

export default {
  name: "App",

  components: {
    MaterialCard
  },
  data: () => ({
    appBarColor: "transparent",
    appBarTheme: true,
    // Nav drawer
    nav_drawer: false,
    // ZoomIn Dialog
    zoomCarouselDialog: false,
    zoomCarouselImages: "",
    zoomImageDialog: false,
    zoomImageImage: "",
    // Publications
    publications_carouselHeight: "120px",
    publications: [
      {
        title:
          "Amalgam: Hardware Hacking for Web Developers with Style (Sheets)",
        authors: "Jorge Garza, Devon J. Merrill, Steven Swanson",
        conference: "ICWE 2019",
        conferenceLink:
          "https://link.springer.com/chapter/10.1007%2F978-3-030-19274-7_23",
        paperImages: [
          {
            src: "./assets/amalgam/1.jpg"
          },
          {
            src: "./assets/amalgam/2.jpg"
          },
          {
            src: "./assets/amalgam/3.jpg"
          }
        ]
      },
      {
        title:
          "Echidna: mixed-domain computational implementation via decision trees",
        authors: "Devon J. Merrill, Jorge Garza, Steven Swanson",
        conference: "SCF 2019",
        conferenceLink: "https://dl.acm.org/doi/10.1145/3328939.3329004",
        paperImages: [
          {
            src: "./assets/echidna/1.jpg"
          },
          {
            src: "./assets/echidna/2.jpg"
          },
          {
            src: "./assets/echidna/3.jpg"
          }
        ]
      }
    ],
    // Teaching
    teachings_carouselHeight: "200px",
    teachings: [
      {
        title:
          "Graduate Teaching Assistant (CSE176e/276e: Robotic System Design and Implementation)",
        about:
          "Teach and help students build their own quadcopters from scratch.",
        years: "Years: Spring 2015 & 2016",
        webPage: "The Quadcopter Class",
        webPageLink:
          "https://sites.google.com/a/eng.ucsd.edu/quadcopterclass/home?authuser=0",
        teachingImages: [
          {
            src: "./assets/quadClass/5.jpg"
          },
          {
            src: "./assets/quadClass/4.jpg"
          },
          {
            src: "./assets/quadClass/3.jpg"
          },
          {
            src: "./assets/quadClass/1.jpg"
          },
          {
            src: "./assets/quadClass/2.jpg"
          }
        ]
      }
    ],
    // Work Experiencie
    works_carouselHeight: "200px",
    works: [
      {
        title:
          "Jr. Embedded Linux Software Engineer / Product Engineer at Torrey",
        about: `Responsible for developing Linux Device Drivers to the WLS scale,
        a labeling weight scale developed at the company for commercial use. 
        Also responsible for some of the GUI designs. At the same time, 
        I developed a Bluetooth Low Energy digital temperature controller 
        (PCB and firmware) for use in fridges and coolers and an Android 
        app to be used with it.`,
        years: "Years: Jan 2013 to July 2014",
        workImages: [
          {
            src: "./assets/torrey/1.jpg"
          },
          {
            src: "./assets/torrey/3.jpg"
          },
          {
            src: "./assets/torrey/4.jpg"
          },
          {
            src: "./assets/torrey/5.jpg"
          },
          {
            src: "./assets/torrey/6.jpg"
          }
        ]
      },
      {
        title: "Research Assistant at ITESM",
        about: `Worked in a Tele-medicine project building and integrating the 
        IEEE 802.15.4 protocol (Zigbee stack) to Android. The goal was to research
        the medical applications that could exist with medical device sensors 
        connected to smartphones under the Zigbee mesh network protocol.`,
        years: "Years: Jun 2012 to Dec 2012",
        workImages: []
      },
      {
        title: "Jr. Tester at Texas Instruments",
        about: `Test of Android applications and Linux OS integrity for the 
        OMAP 4 processors family. Most of my responsibilities were assisting 
        senior testers running processor-software integrity tests. 
        I worked with Linux bash CLI, shell scripting, and PTL 
        (TI internal language) to find defects and failures in applications.`,
        years: "Years: Jan 2012 to May 2012",
        workImages: []
      }
    ],
    // Projects
    projects_carouselHeight: "200px",
    projects: [
      {
        title: "Appliancizer",
        about: `Appliancizer is an online synthesis tool for circuits which targets
         embedded processors. Our tool allows automatic generation of PCB layout designs
        and hardware interfacing code from web programming languages. 
        Compared to previous tools, Appliancizer allows synthesis without requiring 
        adding hardware specifications into the programming language used for hardware 
        description. With our tool, existing web program applications can be 
        transformed into electronic devices with minimal effort.`,
        haslink: true,
        link: "https://appliancizer.com/",
        images: [
          {
            src: "./assets/appliancizer/2.jpg"
          },
          {
            src: "./assets/appliancizer/1.jpg"
          },
          {
            src: "./assets/appliancizer/3.jpg"
          }
        ]
      },
      {
        title: "Open Hardware ARTIK530 Carrier Board",
        about: `An open-source carrier board PCB for the Artik 530 
        System On Module (SOM) designed by me :D. I also developed a battery 
        charger and a sound/mic codec for the carrier board.`,
        haslink: true,
        link:
          "https://github.com/Guardado/OpenSource_ARTIK530_DevelopmentBoard",
        images: [
          {
            src: "./assets/artik/1.jpg"
          },
          {
            src: "./assets/artik/3.jpg"
          },
          {
            src: "./assets/artik/2.jpg"
          }
        ]
      },
      {
        title: "Linuxduino",
        about: `Linuxduino is a C++/JavaScript library that enables you to 
        program embedded systems running Linux like an Arduino microcontroller, 
        facilitating the development of IoT devices. Linuxduino was 
        ported to JavaScript using WebAssembly. Coming soon with a test board 
         (see it at the end of the pics).`,
        haslink: true,
        link: "https://nvsl.github.io/Linuxduino/",
        images: [
          {
            src: "./assets/linuxduino/1.jpg"
          },
          {
            src: "./assets/linuxduino/2.jpg"
          },
          {
            src: "./assets/linuxduino/3.jpg"
          }
        ]
      },
      {
        title: `Classification of Optional Practical Training (OPT)
         comments using a Naive Bayes classifier`,
        about: `A data mining project where we classified 42,925 comments 
          from a Department of Homeland Security
         (DHS) forum as opposing or supporting of the OPT extension proposed in 2008
          and challenged in 2015 by a US federal court.  We use a  machine-learning
           algorithm to make predictions on a trained set and found that 
           approximately 85.17% of the users support OPT extension while 14.83% 
           oppose it.`,
        haslink: true,
        link: "./pdfs/classificationOfOPT.pdf",
        images: [
          {
            src: "./assets/datamining/1.jpg"
          },
          {
            src: "./assets/datamining/2.jpg"
          }
        ]
      },
      {
        title: "Bluerave",
        about: `Bluerave is a C# GUI program that syncs RGB LED Strips connected
         using Bluetooth LE to Spotify Music. Users can create and save different
          color patterns that sync with the music beats detected by our program.
          A memorable class project.`,
        haslink: true,
        link: "https://youtu.be/ixRNBVFnqbo",
        images: [
          {
            src: "./assets/bluerave/1.jpg"
          },
          {
            src: "./assets/bluerave/2.jpg"
          },
          {
            src: "./assets/bluerave/3.jpg"
          },
          {
            src: "./assets/bluerave/4.jpg"
          },
          {
            src: "./assets/bluerave/5.jpg"
          }
        ]
      },
      {
        title: "Autonomous Robot",
        about: `Making a rumba attached to a robotic arm and with some cameras 
        an autonomous robot that can pick up balls and place them in a basket. 
        A fun robotics competition at our university, we won 2nd place!. 
        I was in charge of the computer vision algorithms using OpenCV.`,
        haslink: true,
        link: "https://www.youtube.com/watch?v=CpzxKWk6ij0",
        images: [
          {
            src: "./assets/robotics/1.jpg"
          },
          {
            src: "./assets/robotics/2.jpg"
          }
        ]
      },
      {
        title: "Full custom design of a 0.5um Integrated Circuit ",
        about: `Designed an 8-bit Parallel to Serial and Serial to Parallel IC 
        using Electric VLSI CAD and LT Spice for layout simulation and Proteus 
        ISIS for schematic and digital simulation. In the design 14 different 
        gates, cells were made with varying drive strengths to improve the 
        speed of the IC and optimize the critical paths.`,
        haslink: false,
        images: [
          {
            src: "./assets/customIC/2.jpg"
          },
          {
            src: "./assets/customIC/1.jpg"
          },
          {
            src: "./assets/customIC/3.jpg"
          }
        ]
      }
    ],
    // News, colors: cyan, green, pink, amber, orange
    news: [
      {
        about: `Congratulations to my mentees Elsa Taylor, Sachin, and Heather 
        for winning second place at the 2019 Fall quarter IEEE projects. They 
        designed an IoT smart weight scale that measures calories for 
        different products placed on the weight scale.`,
        image: "./assets/news/mentees.jpg",
        color: "cyan"
      },
      {
        about: `First place at 
          <a href="https://www.96boards.org/go/san19-community/" target="_blank">
            SAN19 Linaro Connect Hackaton
          </a> (Embedded Hackaton).`,
        image: "./assets/news/hackaton.jpg",
        color: "green"
      },
      {
        about: `Finish my thesis proposal!`,
        color: "pink"
      }
    ]
  }),
  mounted: function() {
    // const options = {
    //   root: document.querySelector("#app"),
    //   rootMargin: "-90px",
    //   threshold: 0
    // };
    // let observer = new window.IntersectionObserver(
    //   this.onIntersection,
    //   options
    // );
    // let target = document.querySelector("#cardText");
    // observer.observe(target);
  },
  methods: {
    getImgUrl(pic) {
      return require(pic);
    },
    // onIntersection(entries, observer) {
    //   console.log(entries, observer);
    // },
    zoomCarousel(images) {
      this.zoomCarouselDialog = true;
      this.zoomCarouselImages = images;
    },
    zoomImage(image) {
      this.zoomImageDialog = true;
      this.zoomImageImage = image;
    },
    onScroll(e) {
      // Iknow I should use intersection observers
      let scrollTop = e.target.documentElement.scrollTop;
      let card = document.querySelector("#materialCard");
      if (scrollTop > card.offsetTop) {
        this.appBarColor = "white";
        this.appBarTheme = false;
      } else if (scrollTop < card.offsetTop) {
        this.appBarColor = "transparent";
        this.appBarTheme = true;
      }
    }
  }
};
</script>

<style scoped>
#app {
  color: #f5f5f5;
}

/* Veutify */
.v-app-bar--is-scrolled {
  background-color: white !important;
}

.zoominPointer:hover {
  cursor: zoom-in;
}

a {
  text-decoration: none;
}
</style>
