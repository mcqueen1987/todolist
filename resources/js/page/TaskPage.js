import TaskList from '../components/TaskList';
import TaskInput from '../components/TaskInput';
import taskReq from '../common/task';
import '../../sass/task_page.scss';

const TaskPage = {
	data: function () {
		return {
			tasks: []
		}
	},
	mounted: function(){
		this.refresh();
	},
	methods: {
		refresh: function(){
			taskReq.getTaskList((resp)=>{
				this.tasks = resp.data.data
			});
		}
	},

	components: {TaskList, TaskInput},
	template: `
		<div class="taskpage">
			<div class="task-container">
			<TaskInput :refresh="refresh"/> 
			<TaskList :tasks="tasks" :refresh="refresh"/>
			</div>
		</div>
	`
};
export default TaskPage;
