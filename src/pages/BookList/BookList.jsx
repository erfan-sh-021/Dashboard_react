import React, { useState, useEffect } from 'react';
import { Grid, IconButton } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import {Delete as DeleteIcon ,Edit as EditIcon} from '@material-ui/icons';  
// components
import PageTitle from "../../components/PageTitle";


const BooksData =[
    {
        id:1,
        name:"اسم کتاب",
        price: 20000,
        publisher:"ناشر1",
        author:"شجایی"
    },
    {
        id:2,
        name:"اسم کتاب",
        price: 20000,
        publisher:"ناشر2",
        author:"امینی"
    },
    {
        id:3,
        name:"اسم کتاب",
        price: 20000,
        publisher:"ناشر2",
        author:"حقیقی"
    },
    {
        id:4,
        name:"اسم کتاب",
        price: 20000,
        publisher:"ناشر2",
        author:"عظیمی"
    },
];

const BookList = () => {

    
    const Deletehandle = (item) =>{
        let foundIndex = -1;
        books.forEach((itemBook,index)=>{
            if(itemBook.id===item.id)
            foundIndex=index;
        });
        setBooks(books=>{
            return [...books.slice(0,foundIndex),...books.slice(foundIndex+1)];
        })
    };
    
    const Transform =(data)=>{
        return data.map(item =>{
            return[
                item.name,
                item.price,
                item.publisher,
                item.author,
                <IconButton><DeleteIcon onClick={()=>Deletehandle(item)}/></IconButton>,
                <IconButton><EditIcon/></IconButton>
            ]
        })
    }
    
    const[books,setBooks]= useState([]);
    
    useEffect(()=>{
        setBooks(BooksData);
    },[]);
    // const Deletehandle = (item)=>{

    // }
    return (
        <div>
            <PageTitle title="Tables" />
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <MUIDataTable
                        title="کتاب ها"
                        data={Transform(books)}
                        columns={["نویسنده","ناشر", "قیمت","نام کتاب","حذف","ویرابش"]}
                        options={{
                            filterType: "checkbox",
                        }}
                    />
                </Grid>
            </Grid> 
        </div>
    );
}

export default BookList;