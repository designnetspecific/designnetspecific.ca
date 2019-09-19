<template>
<div>
    <div
    v-scroll-reveal.reset>
    <h1>Features</h1>

    <p>We specialize in user-friendly applications to deliver the results you want. Here are some of the features we would be happy to add to your website!</p>

    <ul>
        <li v-for="eachfeature in features">{{eachfeature.description}}</li>
    </ul>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            features: [
                {description: 'Responsive Web Design'},
                {description: 'Fast Loading'},
                {description: 'Social Media Integration'},
                {description: 'Animations and Graphics'},
                {description: 'A Contact Form'},
                {description: 'Secure Client Login'},
                {description: 'User-Friendly Interface'},
                {description: 'Easy Naviagtion'},
            ]
        };
    }
    
}
</script>

<style scoped>

div {
    font-family: 'Source Sans Pro', sans-serif;
}

h2 {
    font-weight: bold;
    margin-bottom: 3vh;
}

p, li{
    font-size: 22px;
}

ul {
    margin-bottom: 60vh;
}

h1 {
    text-align: center;
    font-weight: bold;
}

</style>