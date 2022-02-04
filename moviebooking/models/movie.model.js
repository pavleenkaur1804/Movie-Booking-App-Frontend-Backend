module.exports=mongoose=>{
    const Movie=mongoose.model(
        "movie",mongoose.Schema({
            movieid:{type:Number,require:true},
            title:String,
            published:Boolean,
            released:Boolean,
            poster_url:String,
            release_date:String,
            publish_date:String,
            artists:Array,
            genres:Array,
            duration:Number,
            critic_rating:Number,
            trailer_url:String,
            wiki_url:String,
            story_line:String,
            shows:Array,

        })
    );
return Movie;    
}