<template>
    <div>
        <h2>Meet Our Clients</h2>

<div class="row"> 
    <img 
    v-for="eachLanguage in myLanguages" :src="eachLanguage.icon"
    class="column"
    :content="eachLanguage.name" v-tippy></img>
</div>

    </div>
</template>


<script>
    export default {
        data() {
            return {
                myLanguages: [
                    {icon: 'https://www.glassmanwealth.com/wp-content/uploads/2016/07/four-types-of-financial-advisors-featured-1024x683.jpg', name: 'Financial Advisors'},
                    {icon: 'https://s16815.pcdn.co/wp-content/uploads/2016/06/iStock_94825851_MEDIUM.160622.jpg', name: 'Students'},
                    {icon: 'https://www.inreads.com/wp-content/uploads/2018/03/Team-Lawyers-in-the-Law-Library.jpg', name: 'Lawyers'},
                    {icon: 'https://tr3.cbsistatic.com/hub/i/r/2018/03/14/672ece0c-65f0-41b0-b292-456abf434f50/resize/1200x/ced6e1a0ac26928df5050b76ac36d175/developers.jpg', name: 'Developers'}

                ]
        };
    }
}
</script>

<style scoped>

.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
  margin-bottom: 30vh;
}

/* Create four equal columns that sits next to each other */
.column {
  flex: 50%;
  max-width: 50%;
  padding: 0 1%;
  padding-bottom: 4%;
}

i {
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
  font-size: 7em;
}


@media screen and (max-width: 800px) {
  .column {
    flex: 50%;
    max-width: 50%;
          padding: 4% 2%;
  }
}

@media screen and (max-width: 600px) {
  .column {
    flex: 50%;
    max-width: 50%;
          padding: 4% 10%;
  }
}


i:hover {
    opacity: 0.6;
    color: rgb(93, 117, 133);
}


  h2 {
      margin-top: 30vh;
      margin-bottom: 10vh;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
  }

</style>

