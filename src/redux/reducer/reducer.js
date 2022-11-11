export const GET_DETAIL = "GET_DETAIL";

const initialState = {
  headerData: [
    {
      col1: "ID",
      col2: "Name",
      col3: "Email",
      col4: "Phone",
      col5: "Country",
    },
  ],
  bodyData: [
    {
      col1: "1",
      col2: "Nasir",
      col3: "nasirkhan000k@gmail.com",
      col4: "8405842008",
      col5: "India",
    },
    {
      col1: "2",
      col2: "Nasir",
      col3: "nasirkhan000k@gmail.com",
      col4: "8405842008",
      col5: "India",
    },
    {
      col1: "3",
      col2: "Nasir",
      col3: "nasirkhan000k@gmail.com",
      col4: "8405842008",
      col5: "India",
    },
    {
      col1: "4",
      col2: "Nasir",
      col3: "nasirkhan000k@gmail.com",
      col4: "8405842008",
      col5: "India",
    },
    {
      col1: "5",
      col2: "Nasir",
      col3: "nasirkhan000k@gmail.com",
      col4: "8405842008",
      col5: "India",
    },
  ],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAIL:
      return state;
    default:
      return state;
  }
};

export default Reducer;
