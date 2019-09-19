<template>
    <div>

    <h1>Get Started Here!</h1>
        

<div class="bootstrap-iso">
 <div class="container-fluid">
  <div class="row">
   <div class="col-md-6 col-sm-6 col-xs-12">
       <form action="https://formspree.io/jay9mehta@gmail.com" method="POST">
     <div class="form-group ">
      <label class="control-label requiredField" for="name">
       Name
       <span class="asteriskField">
        *
       </span>
      </label>
      <input class="form-control" id="name" name="name" placeholder="Enter Name" type="text"/>
     </div>
     <div class="form-group ">
      <label class="control-label requiredField" for="email">
       Email
       <span class="asteriskField">
        *
       </span>
      </label>
      <input class="form-control" id="email" name="email" placeholder="Enter Email" type="text"/>
     </div>
     <div class="form-group ">
      <label class="control-label ">
       What type of website are you interested in?
      </label>
      <div class="">
       <div class="radio">
        <label class="radio">
         <input name="radio" type="radio" value="Company"/>
         Company
        </label>
       </div>
       <div class="radio">
        <label class="radio">
         <input name="radio" type="radio" value="Personal/Portfolio"/>
         Personal/Portfolio
        </label>
       </div>
       <div class="radio">
        <label class="radio">
         <input name="radio" type="radio" value="Not sure"/>
         Not sure
        </label>
       </div>
      </div>
     </div>
     <div class="form-group ">
      <label class="control-label requiredField" for="subject">
       Subject
       <span class="asteriskField">
        *
       </span>
      </label>
      <input class="form-control" id="subject" name="subject" placeholder="Enter Subject" type="text"/>
     </div>
     <div class="form-group ">
      <label class="control-label " for="message">
       Message
      </label>
      <textarea class="form-control" cols="40" id="message" name="message" placeholder="Enter Message" rows="10"></textarea>
     </div>
     <div class="form-group">
      <div>
       <button class="btn btn-primary " name="submit" type="submit">
        Submit
       </button>
      </div>
     </div>
    </form>
   </div>
  </div>
 </div>
</div>

    <h3>You are one step closer to having your website!</h3>


    </div>
    
</template>

<script>
export default {
    
}
</script>

<style scoped>

div {
    font-family: 'Source Sans Pro', sans-serif;
}
h1 {
    font-weight: bold;
    text-align: center;
}

h3 {
    text-align: center;
    margin-top: 10vh;
    margin-bottom: 10vh;
}
.bootstrap-iso 
.formden_header h2, 
.bootstrap-iso .formden_header p, 
.bootstrap-iso form{font-family: Arial, Helvetica, sans-serif; color: #000000}
.bootstrap-iso form button, .bootstrap-iso form button:hover{color: white !important;} 
.asteriskField{color: red;}
</style>
