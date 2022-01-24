import React, { Component } from "react";
import TableBody from "./table-body.component";
import TableHeader from "./table-header.component";

class Table extends React.Component {
  render() {
      const {items, columns, sortColumns, onSort } = this.props;
    return (
      <>
        <table class="table">
        	
			<TableHeader 
        		columns={columns} 
				sortColumns={sortColumns} 
				onSort={onSort} 
			/>
            <TableBody 
				items={items} 
				columns={columns}
			/>

        </table>
      </>
    );
  }
}

export default Table;
