<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
        <CandidateSider/>
        <a-layout>

            <a-layout-content style="background-color: white">
                <DevHeader/>
                <div :style="{ padding: '5px', background: '#fff', }">
                    <a-row style="margin-top: 2%;margin-bottom: 2%">
                        <a-col span="24">
                            <h3 style="margin-left: 1.5rem;color: #1976D2;font-weight: bold">
                                Passed quizzes will reflect on your portfolio
                            </h3>
                        </a-col>

                    </a-row>


                </div>
            </a-layout-content>
        </a-layout>
    </a-layout>

</template>

<script>
    import CandidateSider from "../../../layout/CandidateSider";
    import DevHeader from "../../../layout/DevHeader";
    export default {
        name: "QuizzesList",
        components: {
            DevHeader,
            CandidateSider,

        },
    }
</script>

<style scoped>

</style>
