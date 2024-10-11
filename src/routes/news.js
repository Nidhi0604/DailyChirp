const express=require('express');
const newsRouter=express.Router();
const axios=require('axios');
newsRouter.get('',async(req,res)=>{
   
    try{
       const newsAPI=await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=b1bc9976b15a45f4815ccf9ad0966541`);
       res.render('news',{articles:newsAPI.data.articles});
    }
    catch(error){
       if(error.response){
        res.render('newsSearch', { articles : null })
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
       }
       else if(err.response){
        res.render('newsSearch', { articles : null })
        console.log(error.request)
       }
       else{
        res.render('newsSearch', { articles : null })
        console.log('Error',error.message)
       }
    }
})
newsRouter.post('',async(req,res)=>{
   const search=req.body.search;
    try{
       const newsAPI=await axios.get(`http://newsapi.org/v2/everything?q=${search}&apiKey=b1bc9976b15a45f4815ccf9ad0966541`);
       res.render('newsSearch',{articles:newsAPI.data.articles});
    }
    catch(error){
       if(error.response){
        res.render('newsSearch', { articles : null })
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
       }
       else if(error.response){
        res.render('newsSearch', { articles : null })
        console.log(error.request)
       }
       else{
        res.render('newsSearch', { articles : null })
        console.log('Error',error.message)
       }
    }
})
module.exports=newsRouter;