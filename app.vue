<script setup lang="ts">
const page = ref(1)
const start = () => {
  page.value = 2  
}

const back = () => {
  if (page.value > 1) {
    page.value -= 1;
  }
}
</script>
<template>
  <div class="min-h-screen bg-base-100 relative overflow-hidden">
    <div class="gradient-overlay"></div>
    <main class="container mx-auto py-8 px-4">
      <div class="hero min-h-screen flex flex-col items-center justify-center text-center relative">
        <!-- Decorative images -->
        <div class="decorative-image-1"></div>
        <div class="decorative-image-2"></div>
        <div class="flex flex-col items-center justify-center text-center" v-if="page === 1">
          <img src="/assets/images/me.jpg" class="rounded-full w-40 h-40 shadow-lg mb-4" />
          <h2 class="text-5xl font-bold mb-2">Hi There, I'm <span class="text-green-500">Rafi</span></h2>
          <p class="text-lg mb-6">Full Stack Web Developer</p>
          <div class="flex space-x-4">
            <button class="btn btn-green" @click="start"><i class="fa-solid fa-rocket"></i>Get Started</button>
            <!-- <button class="btn btn-neutral hover:text-green-500" onclick="my_modal_2.showModal()">Hire Me</button> -->
            <NuxtLink to="mailto:gustirafi49@gmail.com"class="btn btn-neutral hover:text-green-500">Hire Me</NuxtLink>
          </div>
        </div>

        <div class="flex flex-col items-center justify-center text-center" v-if="page === 2">
          <div class="flex flex-wrap -mx-2">
            <div class="w-full md:w-1/3 lg:w-1/3 px-2 mb-4">
              <div class="card">
                <figure class="px-10 pt-10">
                  <img src="/assets/images/me.jpg"  class="rounded-xl w-60 h-60 shadow-lg mb-4" />
                </figure>
                <div class="card-body items-center text-center">
                  <h2 class="card-title">Rafi Gusti</h2>
                  <p>Fullstack Web Developer</p>
                  <div class="card-actions mt-3">
                    <NuxtLink to="https://github.com/GustiRafi" target="_blank" class="btn btn-success me-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                      </svg>
                    </NuxtLink>
                    <NuxtLink to="https://www.linkedin.com/in/rafi-gusti-kurniawan" target="_blank" class="btn btn-success me-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                      </svg>
                    </NuxtLink>
                    <NuxtLink to="https://www.instagram.com/_gustrafi/" target="_blank" class="btn btn-success me-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                      </svg>
                    </NuxtLink>
                    <NuxtLink to="/_nuxt/static/cv.pdf" target="_blank" class="btn btn-success me-2">CV</NuxtLink>
                  </div>
                  <button class="btn btn-neutral hover:text-green-500 mt-4 w-full" @click="back">Back to Home</button>
                </div>
              </div>
            </div>
            <div class="w-full md:w-2/3 lg:w-2/3 px-2 mb-4">
              <div class="p-6 text-left">
                <h2 class="text-2xl font-bold mb-4 text-success">Hello, I'm Rafi</h2>
                <p class="text-md mb-6 max-w-3xl">I am a passionate Full Stack Web Developer who loves creating amazing web experiences.I have been working in the industry for 1 years and have developed a deep expertise in web develop. My skills include JavaScript, Vue.js, Node.js, Laravel, Php and more. Let's build something great together! I enjoy working with modern web technologies and constantly learning new things to improve my skills. I believe in the power of collaboration and open-source contributions. When I'm not coding, I love exploring new places and trying out different cuisines. Feel free to reach out to me through my social media links. Let's connect and create something awesome!</p>
                <h3 class="text-xl font-semibold mb-2 text-success">Skills</h3>
                <div class="flex flex-wrap gap-4 mb-4">
                  <div class="bg-white p-2 rounded-lg shadow">
                    <img src="/assets/images/logo/laravel.png"  class="h-12 w-12">
                  </div>
                  <div class="bg-white p-2 rounded-lg shadow">
                    <img src="/assets/images/logo/html.png"  class="h-12 w-12">
                  </div>
                  <div class="bg-white p-2 rounded-lg shadow">
                    <img src="/assets/images/logo/css.png" class="h-12 w-12">
                  </div>
                  <div class="bg-white p-2 rounded-lg shadow">
                    <img src="/assets/images/logo/js.png"  class="h-12 w-12">
                  </div>
                  <div class="bg-white p-2 rounded-lg shadow">
                    <img src="/assets/images/logo/php.png"  class="h-12 w-12">
                  </div>
                  <div class="bg-white p-2 rounded-lg shadow">
                    <img src="/assets/images/logo/ts.png" class="h-12 w-12">
                  </div>
                  <div class="bg-white p-2 rounded-lg shadow">
                    <img src="/assets/images/logo/bootstrap.png"  class="h-12 w-12">
                  </div>
                  <div class="bg-white p-2 rounded-lg shadow">
                    <img src="/assets/images/logo/tailwind.png"  class="h-12 w-12">
                  </div>
                  <div class="bg-white p-2 rounded-lg shadow">
                    <img src="/assets/images/logo/figma.png" class="h-12 w-12">
                  </div>
                  <div class="bg-white p-2 rounded-lg shadow">
                    <img src="/assets/images/logo/node.png"  class="h-12 w-12">
                  </div>
                  <div class="bg-white p-2 rounded-lg shadow">
                    <img src="/assets/images/logo/vue.png"  class="h-12 w-12">
                  </div>
                  <div class="bg-white p-2 rounded-lg shadow">
                    <img src="/assets/images/logo/nuxt.png" class="h-12 w-12">
                  </div>
                  <div class="bg-white p-2 rounded-lg shadow">
                    <img src="/assets/images/logo/mysql.png"  class="h-12 w-12">
                  </div>
                </div>
                <div class="flex flex-wrap mt-4 -mx-2 gap-2">
                  <NuxtLink to="/_nuxt/static/cv.pdf" target="_blank" class="w-full md:w-1/3 lg:w-1/3 border-2 border-success p-4 rounded-lg shadow mt-4 text-success">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-file-earmark-person mb-3" viewBox="0 0 16 16">
                      <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                      <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5z"/>
                    </svg>
                    <h5 class="font-bold">Explore my CV resume</h5>
                    <p class="font-light">see my cv to know more...</p>
                  </NuxtLink>
                  <NuxtLink to="https://github.com/GustiRafi" target="_blank" class="w-fullmd:w-1/2 lg:w-1/2 border-2 border-success p-4 rounded-lg shadow mt-4 text-success">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-circle-fill mb-3" viewBox="0 0 16 16">
                      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                    </svg>
                    <h5 class="font-bold">See all my projects</h5>
                    <p class="font-light">list of some projects that i have done</p>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- modal -->
      <dialog id="my_modal_2" class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Reach me!</h3>
          <div class="my-4">
            <input type="text" placeholder="Name" class="input input-success w-full mb-4" />
            <input type="email" placeholder="Email" class="input input-success w-full mb-4" />
            <textarea placeholder="Message" class="textarea textarea-success w-full mb-4"></textarea>
            <div class="modal-action">
              <button class="btn btn-success">Send</button>
            </div>
          </div>
        </div>
        <form method="dialog" class="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </main>
  </div>
</template>

<style scoped>
.text-primary {
  color: #1D4ED8;
}

.btn-green {
  @apply bg-green-500 text-white font-bold py-2 px-4 rounded;
  @apply hover:bg-green-600 transition duration-300 ease-in-out;
}

.btn-warning {
  @apply bg-yellow-400 text-white font-bold py-2 px-4 rounded;
  @apply hover:bg-yellow-500 transition duration-300 ease-in-out;
}

/* Styling for decorative images */
.hero::before,
.hero::after {
  content: '';
  position: absolute;
  width: 50px; /* Size of the decorative images */
  height: 50px; /* Size of the decorative images */
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.5; /* Slight transparency for decorative effect */
}

.hero::before {
  background-image: url('/assets/images/decor1.png');
  top: 10%; /* Adjust the position */
  left: 20%; /* Adjust the position */
}

.hero::after {
  background-image: url('/assets/images/decor2.png');
  bottom: 15%; /* Adjust the position */
  right: 25%; /* Adjust the position */
}

/* Additional decorative images */
.hero .decorative-image-1,
.hero .decorative-image-2 {
  position: absolute;
  width: 50px; /* Size of the decorative images */
  height: 50px; /* Size of the decorative images */
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.5; /* Slight transparency for decorative effect */
}

.hero .decorative-image-1 {
  background-image: url('/assets/images/decor2.png');
  top: 30%; /* Adjust the position */
  left: 10%; /* Adjust the position */
}

.hero .decorative-image-2 {
  background-image: url('/assets/images/decor1.png');
  bottom: 20%; /* Adjust the position */
  left: 40%; /* Adjust the position */
}

/* Gradient overlay for the top right corner */
.gradient-overlay {
  position: absolute;
  top: 0;
  right: 0;
  width: 300px; /* Adjust the size as needed */
  height: 300px; /* Adjust the size as needed */
  background: radial-gradient(circle, rgba(0, 128, 0, 0.5) 0%, rgba(0, 128, 0, 0.3) 50%, rgba(0, 128, 0, 0.1) 75%, transparent 100%);
  border-radius: 50%;
  filter: blur(50px);
  pointer-events: none; /* Allows clicks to pass through */
}
</style>
