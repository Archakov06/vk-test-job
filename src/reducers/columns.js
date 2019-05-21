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
    cards: [
      "Записаться на курс по React",
      "Забронировать тир на субботу",
      "Накидать тем для статей в блог"
    ]
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
    case "CARDS:REMOVE":
      return state.map((item, columnIndex) => {
        if (action.payload.columnIndex === columnIndex) {
          return {
            ...item,
            cards: item.cards.filter(
              (_, filterIndex) => filterIndex !== action.payload.cardIndex
            )
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
    case "CARDS:REORDER": {
      const { source, destination } = action.payload;
      return reorderCards({
        state,
        source,
        destination
      });
    }
    case "COLUMNS:REMOVE":
      return state.filter((_, index) => action.payload !== index);
    default:
      return state;
  }
};
