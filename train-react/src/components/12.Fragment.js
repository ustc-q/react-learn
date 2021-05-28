/**
 * @since 2019-05-10 04:03
 * @author vivaxy
 */
import React, { Component } from 'react';

const rows = [
  { title: 'name', value: 'stephen' },
  { title: 'gender', value: 'male' },
  { title: 'gender', value: 'male' },
];

function TableRow({ rows }) {
  return (
    <React.Fragment>
      {rows.map(({ title, value }) => (
        <td key={title}>{value}</td>
      ))}
    </React.Fragment>
  );
}

export default class Fragment extends Component {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <TableRow rows={rows} />
          </tr>
        </tbody>
      </table>
    );
  }
}
