import TaskList from '../components/TaskList';
import TaskInput from '../components/TaskInput';
import '../../sass/task_page.scss';

const TaskPage = {
    mounted: function () {
        this.$store.commit('refresh');
    },
    data: function () {
        return {
            filterStatus: -1,
            selected: -1
        };
    },
    components: {TaskList, TaskInput},
    methods: {
        getTasksByStatus(status) {
            if (status < 0) {
                return this.$store.getters.tasks;
            }
            return this.$store.getters.tasks.filter(item => item.status == status);
        },
        sortAsc(tasks) { // ascending tasks
            return tasks.sort(function (a, b) {
                return b.id - a.id;
            });
        },
        setFilter(status) {
            this.filterStatus = status;
            this.selected = status;
        }
    },
    computed: {
        displayTasks() {
            return this.sortAsc(this.getTasksByStatus(this.filterStatus));
        },
        incompletedTaskNum() {
            return this.getTasksByStatus(0).length;
        }
    },
    template: `
		<div class="taskpage">
		    <div class="task-title">todos</div>
			<div class="task-container">
                <TaskInput/>
                <div class="taskpage-tabs">
                    <div v-bind:class="{selected: selected == -1}" @click="setFilter(-1)">All</div>
                    <div v-bind:class="{selected: selected == 0}" @click="setFilter(0)">Active</div>
                    <div v-bind:class="{selected: selected == 1}" @click="setFilter(1)">Completed</div>
                    <div> {{incompletedTaskNum}} items left </div>
                </div> 
                <TaskList :tasks="displayTasks" />
            </div>
		</div>
	`
};
export default TaskPage;
