import createApiClient from './api.service';

class FileService {
    constructor (baseUrl = '/file')  {
        this.user = createApiClient(baseUrl);
    }

    async upload() {
        return (await this.user.get('/upload')).data;
    }

    async getOne(email) {
        return (await this.user.get(`/${email}`)).data;
    }

    async create(data) {
        return (await this.user.post('/', data)).data;
    }

    async update(id, data) {
        return (await this.user.post(`/${id}`, data)).data;
    }

    async delete(id) {
        return (await this.user.delete(`/${id}`)).data;
    }

    async addFavorite(id, data) {
        return (await this.user.post(`/favorite/${id}`, data)).data;
    }
}

export default new FileService();