const DataTables = (props) => {
	const { thead, tbody, results } = props;
	
	return (
		<div className="overflow-x-auto">
			<table className="border-collapse table-auto w-full text-sm">
				<thead className="bg-violet-700">
            		<tr>
            			{ thead.map((value, key) => <th className="border-b hover:cursor-pointer border-r font-medium p-4 pb-3 text-slate-400 dark:text-slate-200 border-x-white text-left" key={ key }>{ value }</th>) }
            		</tr>
            	</thead>

            	<tbody className="bg-white dark:bg-slate-200">
            		{ results.map((value, key) => (
            			<tr key={ key }>
            				{ tbody.map((field, fieldKey) => <td className="border-b border-r p-4 border-x-white text-slate-800" key={ fieldKey }>{ value[field] }</td>) }
            			</tr>
            		)) }
            	</tbody>
			</table>
		</div>
	);
};

export default DataTables;