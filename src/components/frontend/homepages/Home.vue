<template>
    <a-row>
    <a-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10">Col</a-col>
    <a-col :xs="20" :sm="16" :md="12" :lg="8" :xl="4">Col</a-col>
    <a-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10">Col</a-col>
  </a-row>



</template>


<script>



    export default {

        name: 'home',



    }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    ul {
        list-style-type: none;
    }

    ul a {
        color: #fff;
        text-decoration: none;
        transition: .2s ease-in;
    }

    .press {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        height: 80px;
        margin-top: -10%;
        background-color: #F0F9FE;
        border-radius: 3px;
    }

    .pressitemtech {
        width: 48%;
        margin-top: 1rem;
        margin-left: 23%;


    }

    .pressitemseed {
        width: 50%;
        margin-top: 1.4rem;
        margin-left: 23%;


    }

    .pressitemdisrupt {
        width: 27%;
        margin-top: 1rem;
        margin-left: 23%;


    }

    .pressitemforbes {
        width: 28%;
        margin-top: 2rem;
        margin-left: 23%;


    }

    .smallheader {
        color: #B627A1;
        margin-bottom: 0;

    }

    .headers {
        color: #007BFF;
        font-size: 22px;
    }

    .workscard {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        width: 18rem;
        height: 20rem;
        background-color: white;
        border: 0
    }

    .poolavatar {
        width: 80px;
        height: 80px;
        line-height: 80px;
        font-size: 30px;
        background-color: #0679FB;
        margin: 29% 14%;
    }

    .talentcard {
        margin-bottom: 1rem;
    }

    .center {
        margin: auto;
        width: 60%;

        padding: 10px;
    }

    .imagecenter {
        display: block;
        margin-left: auto;
        margin-right: auto;

    }


</style>
