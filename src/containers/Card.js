import { Card } from "components";
import { connect } from "react-redux";
import cardsActions from "actions/cards";

export default connect(
  ({ columns }) => ({ items: columns }),
  dispatch => ({
    onRemove: (columnIndex, cardIndex) => {
      if (global.confirm("Вы действительно хотите удалить?")) {
        dispatch(cardsActions.removeCard(columnIndex, cardIndex));
      }
    }
  })
)(Card);
