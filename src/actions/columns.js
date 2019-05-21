export default {
  addColumn: name => ({
    type: "COLUMNS:ADD",
    payload: name
  }),
  removeColumn: index => ({
    type: "COLUMNS:REMOVE",
    payload: index
  })
};
