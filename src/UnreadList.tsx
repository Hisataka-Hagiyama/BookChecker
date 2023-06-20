import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';

const UnreadList = () => {
    const [listItems, setListItems] = useState<itemData[]>([]);
    type itemData = {
        id: number;
        title: string;
        price: number;
        memo: string;
        link: string;
    }

    useEffect(() => {
        axios.get('http://localhost:8080/books/unread/get')
            .then(res => {
                    setListItems(res.data)
            })
    }, [])

    const deleteData = (index: number) => {
        if (window.confirm('削除します。よろしいですか？')) {
            axios.delete(`http://localhost:8080/books/unread/delete/${index}`)
            .then(()=>{
            axios.get('http://localhost:8080/books/unread/get')
                .then(res => 
                    setListItems(res.data)
                )
            })
        }
    }

    const moveToUnreadList=(index:number)=>{
        if(window.confirm("読破に移動します。よろしいですか？")){
            axios.post(`http://localhost:8080/books/unread/move/${index}`)
            .then(()=>{
            axios.get('http://localhost:8080/books/unread/get')
                .then(res => 
                    setListItems(res.data)
                )
            })
        }
    }


    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" style={{ fontSize: 20 }}>書籍名</TableCell>
                            <TableCell align="center" style={{ fontSize: 20 }}>価格</TableCell>
                            <TableCell align="center" style={{ fontSize: 20 }}>メモ</TableCell>
                            <TableCell align="center" style={{ fontSize: 20 }}>リンク</TableCell>
                            <TableCell align="center" style={{ fontSize: 20, width: 130 }}></TableCell>
                            <TableCell align="center" style={{ fontSize: 20, width: 130 }}></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listItems?.map((listItem) => (
                            <TableRow
                                key={listItem.title}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" align="center">
                                    {listItem.title}
                                </TableCell>
                                <TableCell align="center">{listItem.price.toLocaleString() + "円"}</TableCell>
                                <TableCell align="center">{listItem.memo}</TableCell>
                                <TableCell align="center"><a href={listItem.link} target="_blank" rel="noopener noreferrer">リンク</a></TableCell>
                                <TableCell align="center"><Button endIcon={<SendIcon />} variant='contained' onClick={() => moveToUnreadList(listItem.id)}>読破へ</Button></TableCell>
                                <TableCell align="center"><Button endIcon={<DeleteIcon />} variant='outlined' onClick={() => deleteData(listItem.id)}>削除</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div >
    );
}

export default UnreadList;