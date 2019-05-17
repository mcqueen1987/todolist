
import utils from "../common/Utils";
import '../../sass/detail_page.scss';
import '../../sass/task_page.scss';
import TaskDetail from '../components/TaskDetail';
import {BAlert} from 'bootstrap-vue/es/components'

const DetailPage = {
    data: function(){
        return {
            dismissCountDown: 0
        }
    },
    components: {TaskDetail},
    created() {
        if (this.$store.getters.tasks) {
            this.$store.dispatch('refreshTasks');
        }
    },
    methods: {
        countDownChanged(dismissCountDown) {
            this.dismissCountDown = dismissCountDown
            // !dismissCountDown && this.$store.dispatch('dismissMessage');
        },
        dismissed(){
            this.$store.dispatch('dismissMessage');
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
                <b-alert :show="this.$store.getters.dismissCountDown" dismissible 
                  :variant="this.$store.getters.messageType"
                  @dismissed="dismissed"
                  @dismiss-count-down="countDownChanged">
                  save data {{ this.$store.getters.messageType === 'success' ? 'succeed!' : 'failed!'}}  {{ dismissCountDown }}
                </b-alert>
                <TaskDetail :task="task"/>
            </div> 
		</div>
	`
};
export default DetailPage;
