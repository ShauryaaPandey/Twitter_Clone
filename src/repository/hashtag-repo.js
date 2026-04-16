const Hashtag = require('../models/hashtag');


class HashtagRepository {

    async create(data){
        try {
            const tag = await Hashtag.create(data);
            return tag;
        } catch (error) {
            console.log(error);
        }
    }

    //data : array for multiple hashs 
    async bulkCreate(data){
    try {
        const tags = await Hashtag.insertMany(data);
        return tags;
        } catch (error) {
            console.log(error);
        }
    }

    async findByName(titleList) {
        try {
            const normalized = titleList.map(tag =>
                tag.toLowerCase().trim()
            );

            const tags = await Hashtag.find({
                title: { $in: normalized }
            });

            return tags;
        } catch (error) {
            console.log(error);
        }
    }

    async get(id){
        try {
            const tag = await Hashtag.findById(id).lean();
            return tag;
        } catch (error) {
            console.log(error);
        }
    }

    async delete(id){
        try {
            const response = await Hashtag.findByIdAndDelete(id);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async updateMany(filter, update) {
        try {
            return await Hashtag.updateMany(filter, update);
        } catch (error) {
            console.log("Something went wrong in repository");
            throw error;
        }
    }

}

module.exports = HashtagRepository;