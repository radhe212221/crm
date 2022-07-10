import data from './data'
const initialState = {
    menu:data.menu,
    admin:data.admin,
    faculty:data.faculty,
    student:data.student,
    courses:data.courses,
    slot:data.slot,
    batch:data.batch,
    user: null,
    loggedin: true,
    role: "",

}
function reducer (state=initialState,action){
    switch(action.type){
        default:return state
    }
}
export default reducer;