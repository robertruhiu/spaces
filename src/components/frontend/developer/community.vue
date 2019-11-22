<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh;">
        <CandidateSider/>
        <a-layout>

            <a-layout-content style="background-color: white">

                <widgetbot
                    server="465900579097411595"
                    channel="465900751487500308"
                    width="100%"
                    height="100%"
                    shard="https://cl3.widgetbot.io"


            ></widgetbot>
            </a-layout-content>
        </a-layout>


    </a-layout>

</template>

<script>

    import CandidateSider from "../../layout/CandidateSider";

    export default {
        name: "community",
        components: {


            CandidateSider,
        },
        created() {
            let widget = document.createElement('script');
            widget.setAttribute('src', "https://cdn.jsdelivr.net/npm/@widgetbot/html-embed");
            document.head.appendChild(widget);
        },
    }
</script>

<style scoped>

</style>
