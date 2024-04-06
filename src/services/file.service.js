import createApiClient from './api.service';

class FileService {
    constructor (baseUrl = '/api/file')  {
        this.file = createApiClient(baseUrl);
    }

    async upload(data) {
        return (await this.file.post('/upload', data)).data;
    }
}

export default new FileService();