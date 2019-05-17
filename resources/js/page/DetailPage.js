
import utils from "../common/Utils";
import '../../sass/detail_page.scss';
import '../../sass/task_page.scss';
import TaskDetail from '../components/TaskDetail';

const DetailPage = {
    components: {TaskDetail},
    created() {
        if (this.$store.getters.tasks) {
            this.$store.dispatch('refreshTasks');
        }
    },
    computed: {
        task(){
            return utils.getTaskById(this.$store.getters.tasks, this.$route.params.id) || {title:"", content:""};
        }
    },
    template: `
		<div class="taskpage">                
		    <div class="task-title">todos</div>
            <div class="task-container">
                <TaskDetail :task="task"/>
            </div> 
		</div>
	`
};
export default DetailPage;
