module.exports=mongoose=>{
    const Genre=mongoose.model(
        "genre",mongoose.Schema({
            genreid:{type:String,require:true},
            genre:String,
           
            

        })
    );
    return Genre;
}