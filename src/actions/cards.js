export default {
  addCard: (columnIndex, text) => ({
    type: "CARDS:ADD",
    payload: {
      columnIndex,
      text
    }
  }),
  removeCard: (columnIndex, cardIndex) => ({
    type: "CARDS:REMOVE",
    payload: {
      columnIndex,
      cardIndex
    }
  }),
  reorderCards: ({ source, destination }) => ({
    type: "CARDS:REORDER",
    payload: {
      source,
      destination
    }
  })
};
