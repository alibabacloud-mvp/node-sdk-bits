function parseTableResponse(tableResponse) {
  const {attributes} = tableResponse.row;
  const parsedTableResponse = {};

  attributes.forEach(function (attribute) {
    const {columnName, columnValue} = attribute;

    parsedTableResponse[columnName] = columnValue;
  });

  return parsedTableResponse;
};
