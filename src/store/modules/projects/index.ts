import {defineStore} from "pinia";
import {ref, shallowRef} from "vue";
import PROJECTS_DATA, {main_technologies} from "@/data/projects";

const useProjectsStore = defineStore('projects', () => {
    const panel = ref(['projectPanel']);

    const projects = shallowRef(PROJECTS_DATA);
    const technologies = shallowRef(main_technologies);

    const selectedTechnologies = ref(main_technologies.map((technology) => technology.value)) // bind to the checkbox ['v-model']

    const clearSelectedTechnologies = () => selectedTechnologies.value = [];


    return {
        panel,
        projects,
        technologies,
        selectedTechnologies,
        clearSelectedTechnologies,
    };
})

export default useProjectsStore;