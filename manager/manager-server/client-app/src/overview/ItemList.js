import React from 'react';

export default function ItemList({
  list,
  onClick: handleOnClick,
  title
}) {
  if (!list || list.length === 0) {
    return null;
  }
  return (
    <div>
      <div className="row">
        <h3 className="col-xs-8">{title}</h3>
        <div className="col-xs-4">
          <div className="btn"><span className="glyphicon glyphicon-plus" ></span></div>
        </div>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            {Object.keys(list[0]).map(key => (
              <th key={`title-${key}`}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {list.map((l, i) => (
            <tr key={`row-${i}`} onClick={() => handleOnClick(l)}>
              {Object.keys(list[0]).map(key => (
                <td key={`val-${key}`}>{l[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
