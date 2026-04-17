class CrudRepository{
    constructor(model){
        this.model = model; 
    }

    async create(data){
        try {
           const result = await this.model.create(data);
           return result; 
        } catch (error) {
            console.log("Something went wrong in the repo layer");
            throw error;
        }
    }

    async destroy(id){
        try {
            const resp = await this.model.findByIdAndDelete(id);
            return resp;
        } catch (error) {
            console.log("Something went wrong in the repo layer");
            throw error;
        }
    }

    async get(id){
        try {
            const resp = await this.model.findByIdAndDelete(id);
            return resp;
        } catch (error) {
            console.log("Something went wrong in the repo layer");
            throw error;
        }
    }

    async getAll(id){
        try {
            const resp = await this.model.find({});
            return resp;
        } catch (error) {
            console.log("Something went wrong in the repo layer");
            throw error;
        }
    }

    async update(id,data){
        try {
            const result = await this.model.findByIdAndUpdate(id,data , {new:true});
            return result;
        } catch (error) {
            console.log("Something went wrong in the repo layer");
            throw error;
        }
    }
}

export default CrudRepository;