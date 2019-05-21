import reorderCards from "helpers/reorderCards";

const initialState = [
  {
    title: "План на месяц",
    cards: [
      "Пройти курс по React",
      "Отметить день рождения",
      "Записаться на курсы английского языка, чтобы уехать жить в Лондон"
    ]
  },
  {
    title: "План на день",
    cards: [1, 2, 3, 4, 5]
  }
];

export default (state = initialState, action) => {
  switch (action.type) {
    case "CARDS:ADD":
      return state.map((item, index) => {
        if (action.payload.columnIndex === index) {
          return {
            ...item,
            cards: [...item.cards, action.payload.text]
          };
        }
        return item;
      });
    case "COLUMNS:ADD":
      return [
        ...state,
        {
          title: action.payload,
          cards: []
        }
      ];
    case "COLUMNS:REMOVE":
      return state.filter((_, index) => action.payload !== index);
    case "CARDS:REORDER": {
      const { source, destination } = action.payload;
      return reorderCards({
        state,
        source,
        destination
      });
    }
    default:
      return state;
  }
};
