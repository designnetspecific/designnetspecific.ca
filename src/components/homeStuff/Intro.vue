<template>
    <div>
        <div>
            <p class = "animated zoomIn slow" id="title">{{myCompany.slogan}}</p>
            <p class = "animated slideInUp slow">
                At Design Net Specific, we design, develop, and customize websites for local businesses and personal use! Try out out free consultation to learn more about what our web developers can do for you!
            </p>

            <div id = "startHere">
                <router-link class = "animated infinite pulse delay-2s" to="/contact" tag="button">Start Here</router-link>
            </div>
        </div>
    </div>
</template>



<script>

export default {
    props: ['myCompany']
}
</script>


<style scoped>
#title {
    font-weight: bold;
    text-align: center;
    font-size:80px;
}

p {
  font-size: 25px;
}

a {
    font-size: 20px;
    font-family: 'Source Sans Pro', sans-serif;
}

button {
    border: 1px solid black;
    border-radius: 40px;
    font-size: 30px;
    background-color: rgb(105, 105, 209);
    margin-left: 42%;
    margin-right:42%;
    color: white;
    padding: 10px;
    margin-top: 5vh;
    font-family: 'Source Sans Pro', sans-serif;
}

</style>

