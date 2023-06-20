import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';

const Register = () => {
    const [inputName, setInputName] = useState<string>("");
    const [inputPrice, setInputPrice] = useState<string>("");
    const [inputMemo, setInputMemo] = useState<string>("");
    const [inputLink, setInputLink] = useState<string>("");

    const applyInputName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputName(e.target.value);
    }
    const applyInputPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputPrice(e.target.value);
    }
    const applyInputMemo = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputMemo(e.target.value);
    }
    const applyInputLink = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputLink(e.target.value);
    }

    const createData = () => {
        if (!inputName) {
            alert('書籍名を入力してくだい');
            return;
        }
        if(!inputPrice){
            alert("金額を入力してください")
            return 
        }
        axios.post('http://localhost:8080/books/wish/create', {
             "Title": inputName
            , "Price": Number(inputPrice)
            , "Memo": inputMemo
            , "Link": inputLink
        }, {
            headers: { "Content-type": "text/plain" }
        })
        alert('登録しました')
    }

    const resrtInput = () => {
        setInputName("");
        setInputPrice("");
        setInputMemo("");
        setInputLink("");
    }

    return (
        <div>
            <p>書籍名</p>
            <TextField id="outlined-basic" variant="outlined" type='text' value={inputName} onChange={applyInputName} />
            <p>価格</p>
            <TextField id="outlined-basic" variant="outlined" type='text' value={inputPrice} onChange={applyInputPrice} />
            <p>メモ</p>
            <TextField id="outlined-basic" variant="outlined" value={inputMemo} onChange={applyInputMemo} />
            <p>リンク</p>
            <TextField id="outlined-basic" variant="outlined" value={inputLink} onChange={applyInputLink} />
            <div>
                <Button variant="contained" sx={{mt:2}} onClick={() => { resrtInput(); createData(); }}>登録</Button>
            </div>
        </div>
    );
}

export default Register;