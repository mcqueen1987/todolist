import TaskList from '../components/TaskList';
import TaskInput from '../components/TaskInput';
import '../../sass/task_page.scss';

const TaskPage = {
    mounted: function () {
        this.$store.dispatch('refreshTasks').then(() => {
            console.log(" tasks in task-page has updated !!! ");
        })
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
                    <div class="filter-tab left"> {{incompletedTaskNum}} items left </div>
                    <div class="filter-tab middle">
                        <div class="all" v-bind:class="{selected: selected == -1}" @click="setFilter(-1)">All</div>
                        <div class="active" v-bind:class="{selected: selected == 0}" @click="setFilter(0)">Active</div>
                        <div class="completed" v-bind:class="{selected: selected == 1}" @click="setFilter(1)">Completed</div>
                    </div>
                    <!--<div class="filter-tab right"></div>-->
                </div> 
                <TaskList :tasks="displayTasks" />
            </div>
		</div>
	`
};
export default TaskPage;
