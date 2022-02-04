module.exports=mongoose=>{
    const Genre=mongoose.model(
        "genre",mongoose.Schema({
            genreid:{type:Number,require:true},
            genre:String,
           
            

        })
    );
    return Genre;
}