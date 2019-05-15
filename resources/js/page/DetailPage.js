
const DetailPage = {
    data: function() {
        return {
            tasks: this.$store.getters.tasks
        }
    },
    created() {
        // this.$store.commit('refresh');
        // this.$store.dispatch('refresh');
        this.$store.dispatch('refreshTasks').then(() => {
            // ...
            console.log("  000  ============== " + this.tasks);
        })
    },
    // beforeMount: function () {
    //
    // },
    methods: {
        taskTitle: function () {
            let tar = this.tasks.find(item => item.id === this.$route.params.id);
            return tar ? tar.title : "";
        }
    },
    template: `
		<div class="detail-page">
		    <div class="task-title">todos</div>
			<div class="task-container">
			    <div contenteditable="true">
                  This text can be edited by the user.{{this.tasks}}
                </div>
            </div>
		</div>
	`
};
export default DetailPage;
