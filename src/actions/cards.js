export default {
  addCard: (columnIndex, text) => ({
    type: "CARDS:ADD",
    payload: {
      columnIndex,
      text
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
