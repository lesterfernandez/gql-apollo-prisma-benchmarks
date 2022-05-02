"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const apollo_server_1 = require("apollo-server");
const apollo_server_core_1 = require("apollo-server-core");
const prisma = new client_1.PrismaClient();
(async () => {
    const server = new apollo_server_1.ApolloServer({
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
    });
    await server.listen(3000);
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBvbGxvLXNlcnZlcitwcmlzbWEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90eXBlc2NyaXB0L2Fwb2xsby1zZXJ2ZXIrcHJpc21hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQThDO0FBQzlDLGlEQUE2QztBQUM3QywyREFBeUM7QUFDekMsTUFBTSxNQUFNLEdBQUcsSUFBSSxxQkFBWSxFQUFFLENBQUM7QUFFbEMsQ0FBQyxLQUFLLElBQUksRUFBRTtJQUNWLE1BQU0sTUFBTSxHQUFHLElBQUksNEJBQVksQ0FBQztRQUM5QixPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUU7UUFDbkIsUUFBUSxFQUFFLElBQUEsd0JBQUcsRUFBQTs7OztLQUlaO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsS0FBSyxFQUFFO2dCQUNMLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUU7b0JBQ2pDLE1BQU0sR0FBRyxHQUFHLE1BQU8sTUFBdUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO3dCQUN4RCxNQUFNLEVBQUU7NEJBQ04sWUFBWSxFQUFFLElBQUk7eUJBQ25CO3FCQUNGLENBQUMsQ0FBQztvQkFDSCxPQUFPLEdBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRSxZQUFZLENBQUM7Z0JBQzNCLENBQUM7YUFDRjtTQUNGO0tBQ0YsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzVCLENBQUMsQ0FBQyxFQUFFLENBQUMifQ==