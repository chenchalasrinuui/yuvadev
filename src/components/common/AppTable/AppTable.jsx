/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Pagination from '../Pagination/Pagination';
import styles from './AppTable.module.css'


const AppTable = (props) => {

    const { headers, data, columns, isShowDelete, isShowEdit, handleDelete, handleEdit } = props;
    const [pageNo, setPageNo] = useState(1)
    const [currData, setCurrData] = useState([])
    const perPage = 5;

    useEffect(() => {
        const end = pageNo * perPage
        const start = end - perPage;
        setCurrData(data?.slice?.(start, end) || [])
    }, [pageNo])


    return (
        <div className={`table-responsive ${styles.appTableRoot}`}>
            <table className={styles.appTable}>
                <thead>
                    <tr>
                        {
                            headers.map((value, index) => {
                                return <th key={`th_${index}`}>{value}</th>
                            })
                        }
                        {isShowEdit && <th>Edit</th>}
                        {isShowDelete && <th>Delete</th>}
                    </tr>
                </thead>
                <tbody>
                    {currData.length > 0 ?

                        currData.map((obj, index) => {
                            return <tr key={`tr_${index}`}>
                                {
                                    columns.map((key, ind) => {
                                        return <td key={`td_${ind}`}>{obj[key]}</td>
                                    })
                                }
                                {isShowEdit && <td><i onClick={() => handleEdit(obj)} className="bi bi-pencil-fill"></i></td>}
                                {isShowDelete && <td><i onClick={() => handleDelete(obj)} className="bi bi-trash-fill"></i></td>}
                            </tr>
                        })
                        :
                        <tr><td colSpan={columns.length + 2} className='text-center'>No data found</td></tr>
                    }
                </tbody>
            </table>
            {data?.length > perPage && <Pagination pageNo={pageNo} setPageNo={setPageNo} totalPages={Math.ceil(data.length / perPage)} />}
        </div>
    )
}

export default AppTable
