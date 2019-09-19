<template>
    <footer>
        <p>"Own A Website That You Love"</p>
            <p>Designed and Developed by {{myCompany.name}}</p>
    </footer>

    
</template>

<script>

export default {

    props: ['myCompany'], 
}
</script>

<style scoped>
footer {
    box-sizing: border-box;
    width: 100%;
    height:25vh;
    left: 0;
    bottom: 0;
    position: relative;
    background-color: rgb(36, 53, 109);
    padding: 2vh 2ch;
    margin-top: 5vh;
}

footer p {
    text-align: left;
    color: white;
    font-size: 20px;
    text-align: center;
    padding-top:15px;
    padding-bottom: 15px;
}
</style>
