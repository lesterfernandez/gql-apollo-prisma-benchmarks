"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const apollo_server_core_1 = require("apollo-server-core");
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const prisma = new client_1.PrismaClient();
(async () => {
    const app = (0, express_1.default)();
    const httpServer = http_1.default.createServer(app);
    const server = new apollo_server_express_1.ApolloServer({
        context: { prisma },
        typeDefs: (0, apollo_server_core_1.gql) `
      type Query {
        hello: String
      }
    `,
        resolvers: {
            Query: {
                hello: async (_, __, { prisma }) => {
                    const str = await prisma.data.findFirst({
                        select: {
                            randomString: true,
                        },
                    });
                    return str === null || str === void 0 ? void 0 : str.randomString;
                },
            },
        },
        plugins: [(0, apollo_server_core_1.ApolloServerPluginDrainHttpServer)({ httpServer })],
    });
    await server.start();
    server.applyMiddleware({ app, path: "/" });
    await new Promise(resolve => httpServer.listen({ port: 3000 }, resolve));
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBvbGxvLXNlcnZlci1leHByZXNzK3ByaXNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3R5cGVzY3JpcHQvYXBvbGxvLXNlcnZlci1leHByZXNzK3ByaXNtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDJDQUE4QztBQUM5QywyREFHNEI7QUFDNUIsaUVBQXFEO0FBQ3JELHNEQUE4QjtBQUM5QixnREFBd0I7QUFDeEIsTUFBTSxNQUFNLEdBQUcsSUFBSSxxQkFBWSxFQUFFLENBQUM7QUFFbEMsQ0FBQyxLQUFLLElBQUksRUFBRTtJQUNWLE1BQU0sR0FBRyxHQUFHLElBQUEsaUJBQU8sR0FBRSxDQUFDO0lBQ3RCLE1BQU0sVUFBVSxHQUFHLGNBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUMsTUFBTSxNQUFNLEdBQUcsSUFBSSxvQ0FBWSxDQUFDO1FBQzlCLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRTtRQUNuQixRQUFRLEVBQUUsSUFBQSx3QkFBRyxFQUFBOzs7O0tBSVo7UUFDRCxTQUFTLEVBQUU7WUFDVCxLQUFLLEVBQUU7Z0JBQ0wsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRTtvQkFDakMsTUFBTSxHQUFHLEdBQUcsTUFBTyxNQUF1QixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7d0JBQ3hELE1BQU0sRUFBRTs0QkFDTixZQUFZLEVBQUUsSUFBSTt5QkFDbkI7cUJBQ0YsQ0FBQyxDQUFDO29CQUNILE9BQU8sR0FBRyxhQUFILEdBQUcsdUJBQUgsR0FBRyxDQUFFLFlBQVksQ0FBQztnQkFDM0IsQ0FBQzthQUNGO1NBQ0Y7UUFDRCxPQUFPLEVBQUUsQ0FBQyxJQUFBLHNEQUFpQyxFQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztLQUM3RCxDQUFDLENBQUM7SUFDSCxNQUFNLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNyQixNQUFNLENBQUMsZUFBZSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzNDLE1BQU0sSUFBSSxPQUFPLENBQU8sT0FBTyxDQUFDLEVBQUUsQ0FDaEMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FDM0MsQ0FBQztBQUNKLENBQUMsQ0FBQyxFQUFFLENBQUMifQ==