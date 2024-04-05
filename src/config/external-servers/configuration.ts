import { registerAs } from "@nestjs/config";

export default registerAs('ext_services', () => ({
    services: {
        authorizator: {
            url: process.env.AUTHORIZATOR_URL
        },
        backend: {
            url: process.env.BACKEND_URL
        }
    }
}))