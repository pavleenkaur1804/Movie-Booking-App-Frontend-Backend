module.exports=mongoose=>{
    const Artist=mongoose.model(
        "artist",mongoose.Schema({
            artistid:{type:Number,require:true},
            first_name:String,
            last_name:String,
            wiki_url:String,
            profile_url:String,
            movies:Array,

        })
    )
    return Artist;
}