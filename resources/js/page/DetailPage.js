import utils from "../common/Utils";

const DetailPage = {
    created() {
        if(this.$store.getters.tasks){
            this.$store.dispatch('refreshTasks').then(() => {
                console.log(" tasks in detail-page has updated !!! ");
            })
        }
    },
    computed: {
        taskTitle: function () {
            return utils.getTaskById(this.$store.getters.tasks, this.$route.params.id);
        }
    },
    template: `
		<div class="detail-page">
		    <div class="task-title">todos</div>
			<div class="task-container">
			    <div contenteditable="true">
                  This text can be edited by the user.{{taskTitle}}
                </div>
            </div>
		</div>
	`
};
export default DetailPage;
