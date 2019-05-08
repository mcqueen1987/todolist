import TaskList from '../components/TaskList';
import TaskInput from '../components/TaskInput';
import '../../sass/task_page.scss';

const TaskPage = {
	mounted: function(){
		this.$store.commit('refresh');
	},
	components: {TaskList, TaskInput},
	computed:{
		sortAsc: function(){ //  ascending tasks
			return this.$store.getters.tasks.sort(function (a, b){
				return b.id - a.id;
			});
		}
	},
	template: `
		<div class="taskpage">
			<div class="task-container">
			<TaskInput/> 
			<TaskList :tasks="sortAsc" />
			</div>
		</div>
	`
};
export default TaskPage;
