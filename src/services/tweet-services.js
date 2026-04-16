import {TweetRepository , HashtagRepository} from '../repository/index.js';

class TweetService {
 
    constructor(){
        this.tweetRepo = new TweetRepository();
        this.hashRepo = new HashtagRepository();
    }

    async create(data) {
    try {
        const content = data.content;

        let tags = content.match(/(?<!\w)#([a-zA-Z0-9_]+)/g) || [];

        tags = tags.map(tag =>
            tag.substring(1).toLowerCase().trim()
        );

        const tweet = await this.tweetRepo.create(data);

        const alreadyPresentTagsDocs = await this.hashRepo.findByName(tags);

        const alreadyPresentTags = alreadyPresentTagsDocs.map(tag => tag.title);

        // 🔥 FIX: use Set for case-insensitive match
        const alreadyPresentTagsSet = new Set(
            alreadyPresentTags.map(tag => tag.toLowerCase())
        );

        const newtags = tags.filter(
            tag => !alreadyPresentTagsSet.has(tag.toLowerCase())
        );

        // ✅ create new hashtags
        const newTagDocs = newtags.map(tag => ({
            title: tag,
            tweets: [tweet._id]
        }));

        if (newTagDocs.length > 0) {
            await this.hashRepo.bulkCreate(newTagDocs);
        }

        // ✅ update existing hashtags
        if (alreadyPresentTags.length > 0) {
            await this.hashRepo.updateMany(
                { title: { $in: alreadyPresentTags } },
                { $addToSet: { tweets: tweet._id } }
            );
        }

        return tweet;

    } catch (error) {
        console.log("Something went wrong in the service");
        throw error;
        }
    }
}

export default TweetService;
