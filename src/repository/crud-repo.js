class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            return await this.model.create(data);
        } catch (error) {

            if (error.code === 11000) {
                console.log("Already exists (duplicate entry)");
            } else {
                console.log("Something went wrong in the repo layer");
            }

            throw error;
        }
    }

    async destroy(id) {
        try {
            return await this.model.findByIdAndDelete(id);
        } catch (error) {
            console.log("Something went wrong in the repo layer");
            throw error;
        }
    }

    async get(id) {
        try {
            return await this.model.findById(id);   
        } catch (error) {
            console.log("Something went wrong in the repo layer");
            throw error;
        }
    }

    async getAll(offset = 0, limit = 10) {
        try {
            return await this.model.find().skip(offset).limit(limit);
        } catch (error) {
            console.log("Something went wrong in the repo layer");
            throw error;
        }
    }

    async update(id, data) {
        try {
            return await this.model.findByIdAndUpdate(
                id,
                data,
                { returnDocument: 'after' } 
            );
        } catch (error) {
            console.log("Something went wrong in the repo layer");
            throw error;
        }
    }
}

export default CrudRepository;