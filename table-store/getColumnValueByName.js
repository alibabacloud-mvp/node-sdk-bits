function getColumnValueByName(tableResponse, columnName) {
  const {attributes} = tableResponse.row;
  const column = attributes.filter(x => x.columnName === columnName);

  return column[0].columnValue;
};
