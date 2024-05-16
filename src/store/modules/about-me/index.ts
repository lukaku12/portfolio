import {defineStore} from "pinia";
import {computed, ref} from "vue";
import ABOUT_ME_DATA from "@/data/about-me";

const useAboutMeStore = defineStore('about-me', () => {
    const panel = ref(['personal-info', 'contacts']);
    const personalInfoPanel = ref(['bio']);

    const selectedFile = ref('bio.txt');

    const text = computed(() => {
        return {
            "bio.txt": ABOUT_ME_DATA.bio,
            "courses.txt": ABOUT_ME_DATA.education.courses,
            "university.txt": ABOUT_ME_DATA.education.university,
            "redberry-intern.txt": ABOUT_ME_DATA['work-history']['redberry-intern'],
            "redberry.txt": ABOUT_ME_DATA['work-history']['redberry'],
        }[selectedFile.value];
    });

    const setSelectedFile = (file: string) => selectedFile.value = file;

    return {
        panel,
        personalInfoPanel,
        selectedFile,
        setSelectedFile,
        text,
    }
})

export default useAboutMeStore;


// return {
//     "bio.txt": '/** About me I am a passionate individual with a strong background in various fields. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. */',
//     "courses.txt": '/** About me I am a dedicated student pursuing excellence in academics and extracurricular activities. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. */',
//     "university.txt": '/** About me I am a dedicated student currently enrolled in university, striving for academic excellence while actively seeking internship opportunities to kickstart my career. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. */',
//     "redberry-intern.txt": '/** About me I am a driven individual currently pursuing an internship, eager to apply my skills and knowledge in a professional environment while continuously learning and growing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. */',
//     "redberry.txt": '/** About me I am a motivated individual with a passion for growth, currently seeking opportunities as a junior professional to apply my skills and contribute positively to a dynamic team environment. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. */',
// }[selectedFile.value];