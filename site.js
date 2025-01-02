const vue_app = Vue.createApp({
      // This automatically imports your movies.json file and puts it into
      //   the variable: movies
      created () {
            fetch('movies.json').then(response => response.json()).then(json => {
                  this.movies = json
            })
      },
      data() {
        return {
            // This holds your movies.json data.
            movies: [],
            /* ADD ADDITIONAL VARIABLES FOR STEP 3 HERE */
            title: "MAHEK'S TOP MOVIES",
            owner: 'Mahek',
            github: 'https://github.com/mhkmhsh?tab=repositories'
      }
    },
    methods: {
      /* ADD FUNCTIONS/METHODS FOR STEP 7 HERE */
      getMonthText(dateArray) {
            const months = [
                  "January", "February", "March", "April", "May", "June",
                  "July", "August", "September", "October", "November", "December"
            ];
            const [year, month, day] = dateArray;
            const monthText = months[month - 1];
            return `${monthText} ${day}, ${year}`;
      },
      timeText(minutes) {
            const hours = Math.trunc(minutes / 60)
            const mins = minutes % 60
            return `${hours}h ${mins}m`
      }
}
})

vue_app.mount("#vue_app")