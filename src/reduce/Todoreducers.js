const intialData = {
  list: [],
  user:[]
};
const Todoreducers = (state = intialData, action) => {
  switch (action.type) {
    case "Add_todo":
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };
    case "Delete_todo":
      const newList = state.list.filter((elem) => elem.id !== action.id);
      return {
        ...state,
        list: newList,
      };
      case "Remove_todo":return{
        ...state,
        list:[]
      }
    default:
      return state;
  }
};
export default Todoreducers;
