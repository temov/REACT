export const TOTAL_COUNT_ADD = "TOTAL_COUNT_ADD";
export const TOTAL_COUNT_DELETE = "TOTAL_COUNT_DELETE";
export const TOGGLE_COUNT = "TOGGLE_COUNT";

// Action creators
export const totalCountAdd = () => ({
  type: TOTAL_COUNT_ADD
});

export const totalCountDelete = () => ({
  type: TOTAL_COUNT_DELETE
});

/**
 * toggleCount action expects a payload:
 * { checked: true } when a todo is checked
 * { checked: false } when a todo is unchecked
 */
export const toggleCount = (checked) => ({
  type: TOGGLE_COUNT,
  payload: { checked }
});