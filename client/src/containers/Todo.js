import { connect } from "react-redux";

import TodoForm from "../components/TodoForm";

const mapStateToProps = (state) => ({
  todos: state.todo.items,
});

const mapActionsToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapActionsToProps)(TodoForm);
