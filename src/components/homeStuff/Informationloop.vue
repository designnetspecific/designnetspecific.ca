<template>
<div data-aos="fade-up">
<div class="border hvr-grow">
    <div class="left" :id="info.pic">
    </div>

    <div class="right">
      <p id="highlight">{{info.heading}}</p>
      <p>{{info.description}}</p>
    </div>

</div>
</div>
</template>


<script>
    export default {
        props: ['info']
    }
</script>

<style scoped>
.border {
        border: 1px solid rgb(228, 218, 218);
        margin-bottom: 15vh;
        height: 55vh;
        display: flex;
        border-radius: 15px;
}

.left {
  float:left;
  width:50%;
  height:100%;
  background-size: cover;
  background-position: center; 
}

.right {
    padding-left: 5%;
    padding-top:3%;
    padding-right: 2%;
  float:left;
  width:50%;
  height:100%;
}

p {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 20px;
}

#highlight {
        font-weight: bold;
    text-align: center;
    font-size:60px;
       font-family: 'Source Sans Pro', sans-serif;
}

#picOne {
    background-image: url(https://rockresearch.com/wp-content/uploads/2017/11/event_technology.jpg);
}

#picTwo {
    background-image: url(https://wp-assets.futurism.com/2019/07/transistor-unique-quantum-fingerprint-1200x630.jpg);
}

#picThree {
    background-image: url(https://madesimplegroup-static.s3-eu-west-1.amazonaws.com/msg-blog/wp-content/uploads/2015/11/Brand-protection.png);
}

@media screen and (max-width:800px) {
  .left, .right {
    width:100%; 
  }

  .border {
      flex-direction: column;
  }
}

.hvr-grow {
    vertical-align: middle;
    transform: translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;
    transition-duration: 0.3s;
    transition-property: transform;
}

.hvr-grow:hover,
.hvr-grow:focus,
.hvr-grow:active {
    transform: scale(1.1);
}


</style>

