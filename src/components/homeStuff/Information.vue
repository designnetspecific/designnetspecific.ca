<template>
    <div>
        <informationloop
            v-for="eachInformation in Information"
            :info="eachInformation">

        </informationloop>
    </div>
</template>

<script>
import Informationloop from './Informationloop.vue'
export default {
    data() {
        return {
            Information: [
                {heading: 'Go Modern', description: 'With the latest trends in technology, clients can access websites with the touch of their fingertips. Surfing the web is an everyday activity, increasing the chances of a potential client landing on your website.', pic: 'picOne'},
                {heading: 'Go Unique', description: 'We can build a customized template just for you. If you have an innovative idea, we can add that in too.', pic: 'picTwo'},
                {heading: 'Carry Your Brand', description: 'Design is one of the most important aspects of a website to convey the message that you want. Your website can be styled using various tools to outline your personality to the world.', pic: 'picThree'}
            ]
        };
    },
    components: {
        Informationloop
    }
    
}
</script>

<style scoped>

</style>