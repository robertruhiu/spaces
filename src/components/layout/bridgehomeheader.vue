<template>
    <div>
        <a-layout-header class='header' :style="{width: '100%',height:'9rem',padding: '1px 30px 0',
            borderBottom: '1px solid #e8e8e8'}">


            <div style="padding: 0 1%">
                <a-row>
                    <a-col :xs="{span: 16, offset: 0 }" :sm="{span: 16, offset: 0 }"
                           :md="{span: 12, offset: 0 }"
                           :lg="{span: 18, offset: 0 }" :xl="{span: 18,offset: 0 }">
                        <span style="color: white;font-weight: bold;font-size: 21px">Bridge your skills</span>

                    </a-col>
                    <a-col :xs="{span: 8, offset: 0 }" :sm="{span: 8, offset: 0 }"
                           :md="{span: 12, offset: 0 }"
                           :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }">
                        <img class="sdg4" src="../../assets/images/sdg4.png">
                    </a-col>
                </a-row>


            </div>


        </a-layout-header>

    </div>

</template>

<script>


    export default {
        name: "bridgehomeheader",
        components: {},
    }
</script>

<style scoped>
    .header {
        background: #004ec7 url();
        background-position: bottom;
        background-repeat: no-repeat;
    }

    .sdg4 {
        width: 8rem;
    }
</style>