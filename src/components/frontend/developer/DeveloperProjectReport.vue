<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
        <CandidateSider/>

        <a-layout-content>
            <DevHeader/>
            <div style="max-width: 1000px; margin: auto; padding: 10px 0;">
                <a-tabs defaultActiveKey="1">
                    <a-tab-pane tab="Report Overview" key="1">
                        <div class="columns reportdiv">
                            <div class="column is-3 is-ofset-1">
                                <a-card
                                        hoverable
                                        style="width: 240px"
                                >
                                    <img
                                            alt="example"
                                            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                                            slot="cover"
                                    /></a-card>
                            </div>
                            <div class="column is-3 is-offset-1">
                                <a-card meta style="width: 300px; height: 200px">
                                    <p>Name: </p>
                                    <p>Email: </p>
                                    <p>Card : </p>
                                </a-card>
                            </div>
                            <div class="column is-3 is-offset-1">
                                <a-card style="width: 300px;  height: 200px">
                                    <p>Mean Score </p>
                                    <h1> 68 %</h1>
                                    <p>Card content</p>
                                </a-card>

                            </div>
                        </div>
                        <br>
                        <div class="columns reportdiv">
<!--                            <h2 class="subtitle center">Project Name</h2>-->
                            <div class="column is-4 is-offset-1">
                                project description
                            </div>
                            <div class="column is-4 is-offset-1">
                                <h1>Tech stack Used:</h1>
                            </div>
                        </div>
                        <br>
                        <div class="columns reportdiv">
<!--                            <h2 class="subtitle center">Deliverables</h2>-->
                            <table class="table is-fullwidth">
                                <thead>
                                <tr>
                                    <th>Requirement</th>
                                    <th>Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>requirement</td>
                                    <td>badge</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <!--                                        {{selected_project.requirement1}}<br>-->
                        <!--                                        {{selected_project.requirement2}}<br>-->
                        <!--                                        {{selected_project.requirement3}}<br>-->
                        <!--                                        {{selected_project.requirement4}}<br>-->
                        <!--                                        {{selected_project.requirement5}}<br>-->
                        <!--                                        {{selected_project.requirement6}}<br>-->
                        <!--                                        {{selected_project.requirement7}}<br>-->
                        <!--                                        {{selected_project.requirement8}}<br>-->
                        <!--                                        {{selected_project.requirement9}}<br>-->
                        <!--                                        {{selected_project.requirement10}}<br>-->
                    </a-tab-pane>
                    <a-tab-pane tab="Grading Criteria" key="2" forceRender>
                        <!--                                        {{selected_project.framework.name}} <br>-->
                        <!--                                        {{selected_project.framework.language.name}}-->

                    </a-tab-pane>

                    <template slot="renderTabBar" slot-scope="props, DefaultTabBar">
                        <component :is="DefaultTabBar" {...props}/>
                    </template>
                </a-tabs>
            </div>
            {{report}}
        </a-layout-content>

    </a-layout>
</template>

<script>
    import UsersService from '@/services/UsersService'
    import Projects from '@/services/Projects'
    import CandidateSider from "../../layout/CandidateSider";
    import CandidateHeader from "../../layout/CandidateHeader";
    import DevHeader from "../../layout/DevHeader";

    export default {
        name: "DeveloperProjectReport",
        data() {
            return {
                currentUserProfile: {},
                report: [],
                data,
                columns
            }
        },
        components: {
            DevHeader,
            CandidateHeader,
            CandidateSider,
        },
        async mounted() {
            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            };
            if (this.$store.state.user.pk) {
                this.currentUserProfile = (await UsersService.currentuser(this.$store.state.user.pk, auth)).data
                const candidateId = this.$store.state.route.params.candidateId;
                const projectId = this.$store.state.route.params.projectId;
                var my_report = (await Projects.developerprojectreport(candidateId, projectId, auth));
                this.report.push(my_report.data);
            }
        },

        methods: {
            navigateTo(route) {
                this.$router.push(route);
            },
            callback(key) {
                console.log(key);
            },

        },
    }
</script>

<style scoped>
.reportdiv{
    background-color: white;
    padding: 24px;
}
</style>