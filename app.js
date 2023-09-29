const Home = { template: '<div><h2>Home Page</h2></div><p>Welcome to the portfolio of Anjana Manoj. Here, you will find out more about my acheivements, projects and my skills. Click on the above links to display the content. Hope you have an amazing experience while going through my website!</p>' };

const About = { template: '<div><h2>About me</h2></div><p>I am an accomplished person with experience in creating and implementing web pages using HTML, CSS and Javascript. I am a very motivated person who works very hard in her life to meet her goals. My hobbies are reading and watching cricket.</p>' };

const Achievements = {
  template: `
    <div>
      <h2>Achievements</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Elucidation</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="achievement in achievements" :key="achievement.id">
            <td>{{ achievement.name }}</td>
            <td>{{ achievement.elucidation }}</td>
           
          </tr>
        </tbody>
      </table>
    </div>
  `,
  data() {
    return {
        achievements: [
        {
          id: 1,
          name: 'Web Page',
          elucidation: 'The creation of a web page using HTML, CSS and JavaScript',
          
        },
        {
          id: 2,
          name: 'Vue',
          elucidation: 'Creation of a web page using Vue directives',
        },
    
      ],
    };
  },
};



const Contact = {
  template: `<p>If you found my website amazing and my skills and experience up to par, please reach out to me by filling in the form below and make sure to include your message as well!!</p>
    <div>
      <h2>Contact</h2>
      <form @submit.prevent="submitForm">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="formData.name" required>
        </div>
        <div>
          <label for="mail_id">Email:</label>
          <input type="email" id="email" v-model="formData.mail_id" required>
        </div>
        <div>
          <label for="comment">Comment:</label>
          <textarea id="comment" v-model="formData.comment"></textarea>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  `,
  data() {
    return {
      formData: {
        name: '',
        mail_id: '',
        comment: '',
      },
    };
  },
  methods: {
    submitForm() {
      
      console.log('Form submitted:', this.formData);
    },
  },
};

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/achievements', component: Achievements },

  { path: '/contact', component: Contact },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

const app = Vue.createApp({});

app.use(router);

app.mount('#app');
