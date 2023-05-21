import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

const WishList = () => {
    const [listItems, setListItems] = useState<itemData[]>([]);
    const [inputItem, setInputItem] = useState<string>("");
    type itemData = {
        name: string;
        price: number;
        memo: string;
        link: string;
    }

    const applyInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputItem(e.target.value);
    }

    const createData = () => {
        if (!inputItem) {
            alert('書籍名を入力してくだい');
            return;
        }
        const item: itemData = { name: inputItem, price: 3298, memo: 'WEBチューニングに興味がある', link: 'https://www.amazon.co.jp/%E9%81%94%E4%BA%BA%E3%81%8C%E6%95%99%E3%81%88%E3%82%8BWeb%E3%83%91%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%B3%E3%82%B9%E3%83%81%E3%83%A5%E3%83%BC%E3%83%8B%E3%83%B3%E3%82%B0-%E3%80%9CISUCON%E3%81%8B%E3%82%89%E5%AD%A6%E3%81%B6%E9%AB%98%E9%80%9F%E5%8C%96%E3%81%AE%E5%AE%9F%E8%B7%B5-%E8%97%A4%E5%8E%9F-%E4%BF%8A%E4%B8%80%E9%83%8E/dp/4297128462' };
        setListItems([...listItems, item]);
    }

    const deleteData = (index: number) => {
        if (window.confirm('削除します。よろしいですか？')) {
            setListItems(listItems.filter((listItem, listIndex) => (listIndex !== index)));
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
                        {listItems.map((listItem, index) => (
                            <TableRow
                                key={listItem.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" align="center">
                                    {listItem.name}
                                </TableCell>
                                <TableCell align="center">{listItem.price + "円"}</TableCell>
                                <TableCell align="center">{listItem.memo}</TableCell>
                                <TableCell align="center"><a href={listItem.link} target="_blank">リンク</a></TableCell>
                                <TableCell align="center"><Button endIcon={<SendIcon />} variant='contained' onClick={() => deleteData(index)}>積読中へ</Button></TableCell>
                                <TableCell align="center"><Button endIcon={<DeleteIcon />} variant='outlined' onClick={() => deleteData(index)}>削除</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div >
    );
}

export default WishList;