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
            getMonthText: function(dateArray) {
                  let month = ""
                  switch(dateArray[1]) {
                        case 1:
                              month="January"
                              break
                        case 2:
                              month="February"
                              break
                        case 3:
                              month="March"
                              break
                        case 4:
                              month="April"
                              break
                        case 5: 
                              month="May"
                              break
                        case 6:
                              month="June"
                              break
                        case 7:
                              month="July"
                              break
                        case 8:
                              month="August"
                              break
                        case 9: 
                              month="September"
                              break
                        case 10: 
                              month="October"
                              break
                        case 11: 
                              month="November"
                              break
                        case 12:
                              month="December"
                              break
                        
                  }
                  return month + " " + dateArray[2] + ", " + dateArray[0]
            },
            posterClick(index){
                  if(this.movies[index].posterindex < this.movies[index].posters.length-1){
                        this.movies[index].posterindex++
                  }
                  else {
                        this.movies[index].posterindex = 0
                  }
            },
            timeText(minutes){
                  const hours = Math.trunc(minutes / 60)
                  const mins = minutes - (hours * 60)
                  return `${hours}h ${mins}m`
                  
            },
            
      }
})

vue_app.mount("#vue_app")